import { Router } from 'express';

import { CreateCreditCardTypeController } from '../../presentation/controllers/CreditCardType/CreateCreditCardTypeController';
import { DeleteCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/DeleteCreditCardTypeByIdController';
import { FindAllCreditCardTypesController } from '../../presentation/controllers/CreditCardType/FindAllCreditCardTypesController';
import { FindCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/FindCreditCardTypeByIdController';
import { UpdateCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/UpdateCreditCardTypeByIdController';

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

donationRequestRouter.patch(
    '/creditCardTypes/:id',
    new UpdateCreditCardTypeByIdController().handle,
);

donationRequestRouter.delete(
    '/creditCardTypes/:id',
    new DeleteCreditCardTypeByIdController().handle,
);

export default donationRequestRouter;
