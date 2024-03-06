import { Request } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
const secret: string = 'mysecretssshhhhhhh';
const expiration: string = '2h';

interface AuthMiddlewareRequest extends Request {
  user?: {
    email: string;
    username: string;
    _id: string;
  };
}

interface SignTokenPayload {
  email: string;
  username: string;
  _id: string;
}

const authMiddleware = function ({ req }: { req: AuthMiddlewareRequest }): AuthMiddlewareRequest {
  let token: string | undefined = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token?.split(' ').pop()?.trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration }) as { data: SignTokenPayload };
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
};

const signToken = function ({ email, username, _id }: SignTokenPayload): string {
  const payload = { email, username, _id };
  const signOptions: SignOptions = { expiresIn: expiration };

  return jwt.sign({ data: payload }, secret, signOptions);
};

export { authMiddleware, signToken };
