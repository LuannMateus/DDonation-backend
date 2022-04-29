import { Router } from 'express';

import { CreateCreditCardTypeController } from '../../presentation/controllers/CreditCardType/CreateCreditCardTypeController';
import { FindAllCreditCardTypesController } from '../../presentation/controllers/CreditCardType/FindAllCreditCardTypesController';
import { FindCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/FindCreditCardTypeByIdController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/creditCardTypes/:id',
    new FindCreditCardTypeByIdController().handle,
);

donationRequestRouter.get(
    '/creditCardTypes',
    new FindAllCreditCardTypesController().handle,
);

donationRequestRouter.post(
    '/creditCardTypes',
    new CreateCreditCardTypeController().handle,
);

export default donationRequestRouter;
