import express, { Application } from 'express';
import cors from 'cors';
import DonorRouter from './routes/donorRoutes';

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
    }

    public get getApp(): Application {
        return this.app;
    }
}
