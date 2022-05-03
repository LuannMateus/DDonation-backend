import { Router } from 'express';

import { CreateDonationRequestController } from '../../presentation/controllers/DonationRequest/CreateDonationRequestController';
import { DeleteDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/DeleteDonationRequestByIdController';
import { FindAllDonationRequestController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestController';
import { FindAllDonationRequestsByCategoryAndEmergencyController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestsByCategoryAndEmergencyController';
import { FindAllDonationRequestsByCategoryController } from '../../presentation/controllers/DonationRequest/FindAllDonationRequestsByCategoryController';
import { FindAllEmergencyDonationRequestsController } from '../../presentation/controllers/DonationRequest/FindAllEmergencyDonationRequestsController';
import { FindDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/FindDonationRequestByIdController';
import { UpdateDonationRequestByIdController } from '../../presentation/controllers/DonationRequest/UpdateDonationRequestByIdController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/donationRequests/categoriesAndEmergencies',
    new FindAllDonationRequestsByCategoryAndEmergencyController().handle,
);

donationRequestRouter.get(
    '/donationRequests/emergencies',
    new FindAllEmergencyDonationRequestsController().handle,
);

donationRequestRouter.get(
    '/donationRequests/categories/:category',
    new FindAllDonationRequestsByCategoryController().handle,
);

donationRequestRouter.get(
    '/donationRequests/:id',
    new FindDonationRequestByIdController().handle,
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
