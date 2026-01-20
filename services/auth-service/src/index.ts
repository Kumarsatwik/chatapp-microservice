import { createApp } from "./app";
import { createServer } from "node:http";
import { env } from "@/config/env";
import { logger } from "@/utils/logger";

const main = async () => {
  try {
    const app = createApp();
    const server = createServer(app);
    const port = env.AUTH_SERVICE_PORT;

    server.listen(port, () => {
      logger.info({ port }, "Auth Service running on port ${port}");
    });
  } catch (error) {
    logger.error({ error }, "Error starting server:");
    process.exit(1);
  }
};

main();
