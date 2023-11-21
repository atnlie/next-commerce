import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";


export const options: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      CredentialsProvider({
        type: "credentials",
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "your name here",
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "your password here",
          },
        },
        async authorize(credentials) {
          const user = { id: "123", name: "admin", password: "admin123", image: "/anton.jpg" };
          if (
            credentials?.username === user.name &&
            credentials?.password === user.password
          ) {
            return user;
          }
          return null;
        },
      }),
    ],
  };
