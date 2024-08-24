import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const users = [
  { id: '1', name: 'user1', username: 'user1', password: 'password1' },
  { id: '2', name: 'user2', username: 'user2', password: 'password2' },
];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = users.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password
        );

        if (user) {
          return { id: user.id, name: user.name };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

// Optional: Extend the session types to include the id property
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
