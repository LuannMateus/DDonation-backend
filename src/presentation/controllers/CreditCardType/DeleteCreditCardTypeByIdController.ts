import { Request, Response } from 'express';
import { DeleteCreditCardTypeById } from '../../../domain/usecases/CreditCardType/DeleteCreditCardTypeById';
import { CreditCardTypeRepository } from '../../../infra/repositories/CreditCardTypeRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class DeleteCreditCardTypeByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id param');

            const creditCardTypeRepository = new CreditCardTypeRepository();
            const deleteCreditCardTypeByIdUseCase =
                new DeleteCreditCardTypeById(creditCardTypeRepository);

            await deleteCreditCardTypeByIdUseCase.execute(id);

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
