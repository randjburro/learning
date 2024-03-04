import { setupWorker, graphql } from 'msw';
import { filter, isUndefined } from 'lodash';
import { faker } from '@faker-js/faker';

// The news' data.
const new_data = {
  news: [
    {
      id: 1,
      title: 'First',
      image_uri: faker.image.abstract(undefined, undefined, true),
      content: 'First '.repeat(1000),
      summary: 'A lot of word `First`',
    },
    {
      id: 2,
      title: 'Second',
      image_uri: faker.image.abstract(undefined, undefined, true),
      content: 'Second '.repeat(1000),
      summary: 'A lot of word `Second`',
    },
    {
      id: 3,
      title: 'White',
      image_uri: faker.image.abstract(undefined, undefined, true),
      content: 'White '.repeat(1000),
      summary: 'Just white',
    },
    {
      id: 4,
      title: 'Random',
      image_uri: faker.image.abstract(undefined, undefined, true),
      content: faker.lorem.paragraphs(100, '\n\n'), // markdown
      summary: 'Hello',
    },
  ],
};

// Mock the query named News
const News = graphql.query('News', (req, res, ctx) => {
  const { newsId } = req.variables;
  const news = isUndefined(newsId)
    ? news_data.news
    : filter(news_data.news, (new_) => parseInt(newsId) === new_.id);
  return res(ctx.data({ news }));
});

// The log's data.
const log_data = {
  users: [
    {
      id: 1,
      name: 'Peter',
      emails: ['peterlitszo at gmail.com'],
      password: 'admin123',
      isAdmin: true,
    },
  ],
};

// Mock the query named Log.
const Log = graphql.query('Log', (req, res, ctx) => {
  const { email } = req.variables;

  return res(
    ctx.data({
      ...filter(log_data.users, (o) => o.emails.includes(email)),
    }),
  );
});

// build and export the worker.
const handlers = [News, Log];

export const worker = setupWorker(...handlers);