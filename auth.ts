import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"

// Social Login
export const {
  auth, handlers, signIn, signOut
} = NextAuth({
  providers: [GitHub]
})