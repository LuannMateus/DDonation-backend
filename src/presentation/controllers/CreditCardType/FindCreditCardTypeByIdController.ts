import { Request, Response } from 'express';

import { FindCreditCardTypeById } from '../../../domain/usecases/CreditCardType/FindCreditCardTypeById';
import { CreditCardTypeRepository } from '../../../infra/repositories/CreditCardTypeRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class FindCreditCardTypeByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id');

            const creditCardTypeRepository = new CreditCardTypeRepository();
            const findCreditCardTypeByIdUseCase = new FindCreditCardTypeById(
                creditCardTypeRepository,
            );

            const creditCardTypes = await findCreditCardTypeByIdUseCase.execute(
                id,
            );

            res.status(200).json(creditCardTypes);
        } catch (e) {
            if (e instanceof BadRequestError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            if (e instanceof NotFoundError) {
                return res.status(404).json({
                    message: e.message,
                });
            }

            if (e instanceof ServerError) {
                return res.status(500).json({
                    message: e,
                });
            }
        }
    }
}
