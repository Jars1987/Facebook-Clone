import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
const secret = process.env.FACEBOOK_CLIENT_SECRET;

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: secret,
    }),
    // ...add more providers here
  ],
});
