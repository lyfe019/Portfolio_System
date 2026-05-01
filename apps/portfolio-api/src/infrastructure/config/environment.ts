import dotenv from "dotenv";

dotenv.config();

export const environment = {
  nodeEnv: process.env.NODE_ENV || "development",

  api: {
    port: Number(process.env.PORTFOLIO_API_PORT || 4000),
    host: process.env.PORTFOLIO_API_HOST || "localhost"
  },

  database: {
    mongoUri:
      process.env.PORTFOLIO_MONGO_URI ||
      "mongodb://localhost:27017/portfolio-intelligence"
  },

  logging: {
    level: process.env.PORTFOLIO_LOG_LEVEL || "info"
  }
};