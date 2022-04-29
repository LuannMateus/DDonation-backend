import { Request, Response } from 'express';
import { CreditCardType } from '../../../domain/entities/CreditCardType';
import { UpdateCreditCardTypeById } from '../../../domain/usecases/CreditCardType/UpdateCreditCardTypeById';
import { CreditCardTypeRepository } from '../../../infra/repositories/CreditCardTypeRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class UpdateCreditCardTypeByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const creditCardType = req.body as CreditCardType;

            if (!id) throw new BadRequestError('Missing id param');

            if (!creditCardType)
                throw new BadRequestError('Missing creditCardType new values');

            const creditCardTypeRepository = new CreditCardTypeRepository();
            const updateCreditCardTypeByIdUseCase =
                new UpdateCreditCardTypeById(creditCardTypeRepository);

            await updateCreditCardTypeByIdUseCase.execute(id, req.body);

            return res.status(204).end();
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
                    message: e.message,
                });
            }
        }
    }
}
