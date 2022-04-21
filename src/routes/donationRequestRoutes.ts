import { Router } from 'express';
import CreateDonationRequestController from '../controller/CreateDonationRequestController';

const donationRequestRouter = Router();

donationRequestRouter.post(
    '/donations',
    new CreateDonationRequestController().handle,
);

export default donationRequestRouter;
