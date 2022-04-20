import express, { Application } from 'express';
import Cors from 'cors';

export default class App {
    private readonly app: Application;

    constructor() {
        this.app = express();
    }

    private init(): void {
        this.middleware();
    }

    private middleware(): void {
        this.app.use(Cors);
        this.app.use(express.json());
    }

    // private routes(): void {}

    public get getApp(): Application {
        return this.app;
    }
}
