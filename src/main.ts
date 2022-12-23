import * as dotenv from 'dotenv' 
dotenv.config()
import { ServerApplication } from '@application/server.application';

(async (): Promise<void> => {
  await runApplication();
})();

async function runApplication(): Promise<void> {
  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();
}
