import { Request, Response } from 'express';
import { CreditCardType } from '../../../domain/entities/CreditCardType';
import { CreateCreditCardType } from '../../../domain/usecases/CreditCardType/CreateCreditCardType';
import { CreditCardTypeRepository } from '../../../infra/repositories/CreditCardTypeRepository';
import { BadRequestError, ServerError } from '../../errors';

export class CreateCreditCardTypeController {
    async handle(req: Request, res: Response) {
        const { id, name, type } = req.body as CreditCardType;

        const creditCardTypeRepository = new CreditCardTypeRepository();
        const createCreditCardTypeUseCase = new CreateCreditCardType(
            creditCardTypeRepository,
        );

        try {
            const creditCardType = new CreditCardType(id, name, type);

            await createCreditCardTypeUseCase.execute(creditCardType);

            return res.status(201).json(creditCardType);
        } catch (e) {
            if (e instanceof BadRequestError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            if (e instanceof ServerError) {
                return res.status(500).json({
                    message: e.message,
                });
            }
        }
    }
}
