import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "client@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          // Hardcoded Admin login
          if (credentials.email === "admin@northstar.ca" && credentials.password === "admin123") {
            return { id: "0", name: "Admin", email: "admin@northstar.ca", role: "admin" };
          }

          // Verify against Vercel Postgres users table
          const { rows } = await sql`SELECT * FROM users WHERE email = ${credentials.email} LIMIT 1`;
          const user = rows[0];

          if (user && await bcrypt.compare(credentials.password, user.password)) {
            return { id: user.id.toString(), name: user.name, email: user.email, role: user.role };
          }
          return null;
        } catch (e) {
          console.error("Auth error:", e);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: '/portal/login', 
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-development-secret-key-for-northstar",
};
