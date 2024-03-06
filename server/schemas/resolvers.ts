
import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User'; // Update the path accordingly
import { signToken } from '../utils/auth'; // Assuming you have an authentication utility function

const resolvers = {
  Mutation: {
    addUser: async (parent: any, args: { username: string; password: string }) => {
      try {
        const { username, password } = args;
        const user = await User.create({ username, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        // Handle any specific validation or database errors
        throw new Error('Failed to create user');
      }
    },
    login: async (parent: any, args: { username: string; password: string }) => {
      try {
        const { username, password } = args;
        const user = await User.findOne({ username, password });

        if (!user) {
          throw new AuthenticationError('No user found with this username address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      } catch (error) {
        // Handle any specific validation or database errors
        throw new Error('Login failed');
      }
    },
  },
};

export default resolvers;


