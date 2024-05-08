import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// TODO: add schemas
const sanityConfig = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_APP_ID!,
  dataset: "production",
  title: "My portfolio admin panel",
  apiVersion: "2024-05-08",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default sanityConfig;
