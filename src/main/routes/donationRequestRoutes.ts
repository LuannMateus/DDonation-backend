import { Router } from 'express';
import CreateDonationRequestController from '../../presentation/controllers/DonationRequest/CreateDonationRequestController';
import { FindAllDonationRequestController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/donations',
    new FindAllDonationRequestController().handle,
);

donationRequestRouter.post(
    '/donations',
    new CreateDonationRequestController().handle,
);

export default donationRequestRouter;
