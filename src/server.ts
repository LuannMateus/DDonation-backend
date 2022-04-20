import dotenv from 'dotenv';
import App from './app';
import { logger } from './utils/pino';

const app = new App().getApp;

dotenv.config();

app.listen(process.env.PORT || 3000, () => {
    logger.info(`Server is running on port ${process.env.PORT || 3000}`);
});
