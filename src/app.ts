import express, { Application } from 'express';
import cors from 'cors';
import DonorRouter from './routes/donorRoutes';
import DonationRequestRouter from './routes/donationRequestRoutes';

export default class App {
    private app: Application;

    constructor() {
        this.app = express();
        this.init();
    }

    private init(): void {
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/api/v1', DonorRouter);
        this.app.use('/api/v1', DonationRequestRouter);
    }

    public get getApp(): Application {
        return this.app;
    }
}
