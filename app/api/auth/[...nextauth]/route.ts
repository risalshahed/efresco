import { handlers } from "@/auth";

/* [...nextauth] → ei ... ki bujhai?

Eta k Catch-all Route bole, mane:

ek er odhik segment dhorte pare

jemon /auth/login, /auth/login/github, /auth/login/github/callback — sob e ek route e dhora jabe */

export const { GET, POST } = handlers;