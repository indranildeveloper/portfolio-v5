import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas";

// TODO: add schemas
const sanityConfig = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_APP_ID!,
  dataset: "production",
  title: "My portfolio admin panel",
  apiVersion: "2024-05-08",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default sanityConfig;
