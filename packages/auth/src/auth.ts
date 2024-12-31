import type { BetterAuthOptions } from "better-auth";
import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { oAuthProxy } from "better-auth/plugins";

import { prisma } from "@acme/db/client";

import { env } from "../env";

export const config = {
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: env.AUTH_SECRET,
  plugins: [expo(), oAuthProxy()],
  socialProviders: {
    discord: {
      clientId: env.AUTH_DISCORD_ID,
      clientSecret: env.AUTH_DISCORD_SECRET,
      redirectURI: "http://localhost:3000/api/auth/callback/discord",
    },
  },
} satisfies BetterAuthOptions;

export const auth = betterAuth(config);
export type Session = typeof auth.$Infer.Session;
