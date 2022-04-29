import { Router } from 'express';

import { CreateCreditCardTypeController } from '../../presentation/controllers/CreditCardType/CreateCreditCardTypeController';
import { FindAllCreditCardTypesController } from '../../presentation/controllers/CreditCardType/FindAllCreditCardTypesController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/creditCardTypes',
    new FindAllCreditCardTypesController().handle,
);

donationRequestRouter.post(
    '/creditCardTypes',
    new CreateCreditCardTypeController().handle,
);

export default donationRequestRouter;
