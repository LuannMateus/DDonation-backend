import { Router } from 'express';

import { CreateDonationRequestController } from '../../presentation/controllers/DonationRequest/CreateDonationRequestController';
import { FindAllDonationRequestController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestController';
import { FindDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/FindDonationRequestByIdController';
import { UpdateDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/UpdateDonationRequestByIdController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/donations/:id',
    new FindDonationRequestByIdController().handle,
);

donationRequestRouter.get(
    '/donations',
    new FindAllDonationRequestController().handle,
);

donationRequestRouter.post(
    '/donations',
    new CreateDonationRequestController().handle,
);

donationRequestRouter.patch(
    '/donations/:id',
    new UpdateDonationRequestByIdController().handle,
);

export default donationRequestRouter;