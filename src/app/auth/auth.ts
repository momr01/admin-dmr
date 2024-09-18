import NextAuth, { DefaultSession, Session, User as UserAuth } from "next-auth";
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

interface Credentials {
  email: string;
  password: string;
}

// Definir el tipo de User si tiene propiedades específicas (puedes ajustar según tu modelo de usuario)
interface ExtendedUser extends UserAuth {
  email: string;
  img?: string;
}

// Extender el tipo JWT para incluir propiedades personalizadas
declare module "next-auth/jwt" {
  interface JWT {
    email: string;
    img: string;
  }
}

// Extender el tipo Session para incluir las propiedades personalizadas de usuario
declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      img: string;
    } & DefaultSession["user"];
  }
}

const login = async (credentials: Credentials): Promise<ExtendedUser> => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

   // return user;
   return {
    email: user.email,
    img: user.img || "/default-image.png", // Asegurarse de que 'img' está presente
  } as ExtendedUser;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

//const secret = "qisnnxiooianeja";

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // Verificar que las credenciales sean del tipo esperado
        if (credentials?.email && credentials?.password) {
          const typedCredentials: Credentials = {
            email: credentials.email as string,
            password: credentials.password as string,
         //  img: ""
          };

          try {
            const user = await login(typedCredentials);
            return user as ExtendedUser;
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  //secret: process.env.NEXT_PUBLIC_SECRET,
  //secret,
  secret: process.env.AUTH_SECRET,

  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: UserAuth | ExtendedUser }) {
      if (user) {
        token.email = user.email ?? "";
        token.img = (user as ExtendedUser).img ?? "/none";
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.email = token.email;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
