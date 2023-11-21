import NextAuth from "next-auth";
import { options } from "./options";

// export const options: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     CredentialsProvider({
//       type: "credentials",
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username",
//           type: "text",
//           placeholder: "your name here",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "your password here",
//         },
//       },
//       async authorize(credentials) {
//         const user = { id: "123", name: "admin", password: "admin123" };
//         if (
//           credentials?.username === user.name &&
//           credentials?.password === user.password
//         ) {
//           return user;
//         }
//         return null;
//       },
//     }),
//   ],
// };

const handler = NextAuth(options);

export { handler as GET, handler as POST };
