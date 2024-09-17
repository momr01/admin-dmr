import NextAuth, { DefaultSession, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "../../lib/db";
import { User } from "../../models/user";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and recseived as a prop on the `SessionProvider` React Context
   */
interface Session {
    user: {
      /** The user's postal address. */
      email: string;
      img: string;
    } & DefaultSession["user"];
  }
}

const login = async (credentials: any) => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

const secret = "qisnnxiooianeja";

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  //secret: process.env.NEXT_PUBLIC_SECRET,
  secret,

  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.email = user.email;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (token) {
        session.user.email = token.email;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
