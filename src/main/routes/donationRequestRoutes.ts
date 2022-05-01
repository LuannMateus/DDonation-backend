import { Router } from 'express';

import { CreateDonationRequestController } from '../../presentation/controllers/DonationRequest/CreateDonationRequestController';
import { DeleteDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/DeleteDonationRequestByIdController';
import { FindAllDonationRequestController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestController';
import { FindAllDonationRequestsByCategoryController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestsByCategoryController';
import { FindDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/FindDonationRequestByIdController';
import { UpdateDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/UpdateDonationRequestByIdController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/donationRequests/:id',
    new FindDonationRequestByIdController().handle,
);

donationRequestRouter.get(
    '/donationRequests/categories/:category',
    new FindAllDonationRequestsByCategoryController().handle,
);

donationRequestRouter.get(
    '/donationRequests',
    new FindAllDonationRequestController().handle,
);

donationRequestRouter.post(
    '/donationRequests',
    new CreateDonationRequestController().handle,
);

donationRequestRouter.patch(
    '/donationRequests/:id',
    new UpdateDonationRequestByIdController().handle,
);

donationRequestRouter.delete(
    '/donationRequests/:id',
    new DeleteDonationRequestByIdController().handle,
);

export default donationRequestRouter;
