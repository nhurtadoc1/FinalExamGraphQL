import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

try {
  const env = await load();
  
  const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");
  
  if (!MONGO_URL) {
    console.log("No mongo URL found");
    Deno.exit(1);
  }

  // Connect to MongoDB
  await montoose.connect(MONGO_URL);

  console.info("🚀 Connected to MongoDB");

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
  });

  const { url } = await startStandaloneServer(server);
  console.info(`🚀 Server ready at ${url}`);
} catch (error) {
  console.log(error);
}