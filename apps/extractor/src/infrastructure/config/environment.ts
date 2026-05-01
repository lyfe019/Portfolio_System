import dotenv from "dotenv";

dotenv.config();

export const environment = {
  nodeEnv: process.env.NODE_ENV || "development",

  extraction: {
    projectsPath:
      process.env.EXTRACTOR_PROJECTS_PATH ||
      "./data/source-projects",

    outputPath:
      process.env.EXTRACTOR_OUTPUT_PATH ||
      "./data/projects"
  },

  logging: {
    level: process.env.EXTRACTOR_LOG_LEVEL || "info"
  }
};