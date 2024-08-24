import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Data dummy untuk simulasi
        const users = [
          { id: 1, name: 'user1', username: 'user1', password: 'password1' },
          { id: 2, name: 'user2', username: 'user2', password: 'password2' },
        ];

        // Cari user yang cocok dengan credentials yang diberikan
        const user = users.find(
          (user) =>
            user.username === credentials.username && user.password === credentials.password
        );

        // Jika user ditemukan, return user object, jika tidak return null
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
    // Bisa tambahkan halaman custom lainnya jika diperlukan
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
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
});
