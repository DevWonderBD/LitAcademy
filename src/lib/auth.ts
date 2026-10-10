import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

export const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017/dummy");
export const db = client.db('LitAcademy');

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.APP_URL || "http://localhost:3000"),
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 
    ...(process.env.GOOGLE_CLIENT_ID ? {
      google: { 
        clientId: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
      }
    } : {})
  }, 
});