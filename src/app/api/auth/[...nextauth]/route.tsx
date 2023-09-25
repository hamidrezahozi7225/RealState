import User from '@/components/models/User';
import ConnectDB from '@/components/utils/connectDB';
import { comparePassword } from '@/components/utils/helper';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

interface data {
  email: string;
  password: string;
}

export const authOptions: any = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      async authorize(credentials: data) {
        try {
          await ConnectDB();
        } catch (err) {
          throw new Error('Server Done!');
        }
        const { email, password }: any = credentials;

        if (!email && !password) {
          throw new Error('Invalid Data!');
        }

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('user does not exist!');
        }

        const verifyPW = await comparePassword(password, user.password);

        if (!verifyPW) {
          throw new Error("email or password doesn't correct!");
        }

        const roleUser = user.role;
        return { email, roleUser };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
