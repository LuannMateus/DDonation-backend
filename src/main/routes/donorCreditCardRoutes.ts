import { Router } from 'express';

import { CreateDonorCreditCardController } from '../../presentation/controllers/DonorCreditCard/CreateDonorCreditCardController';
import { DeleteDonorCreditCardByIdController } from '../../presentation/controllers/DonorCreditCard/DeleteDonorCreditCardByIdController';
import { FindAllDonorCreditCardController } from '../../presentation/controllers/DonorCreditCard/FindAllDonorCreditCardController';
import { FindDonorCreditCardByIdController } from '../../presentation/controllers/DonorCreditCard/FindDonorCreditCardByIdController';
import { UpdateDonorCreditCardByIdController } from '../../presentation/controllers/DonorCreditCard/UpdateDonorCreditCardByIdController';

const donorCreditCardRouter = Router();

donorCreditCardRouter.get(
    '/donorCreditCards/:id',
    new FindDonorCreditCardByIdController().handle,
);

donorCreditCardRouter.get(
    '/donorCreditCards',
    new FindAllDonorCreditCardController().handle,
);

donorCreditCardRouter.post(
    '/donorCreditCards',
    new CreateDonorCreditCardController().handle,
);

donorCreditCardRouter.patch(
    '/donorCreditCards/:id',
    new UpdateDonorCreditCardByIdController().handle,
);

donorCreditCardRouter.delete(
    '/donorCreditCards/:id',
    new DeleteDonorCreditCardByIdController().handle,
);

export default donorCreditCardRouter;
