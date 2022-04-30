import { Request, Response } from 'express';
import { DeleteDonorCreditCardById } from '../../../domain/usecases/DonorCreditCard/DeleteDonorCreditCardById';
import { DonorCreditCardRepository } from '../../../infra/repositories/DonorCreditCardRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class DeleteDonorCreditCardByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id param');

            const donorCreditCardRepository = new DonorCreditCardRepository();
            const deleteDonorCreditCardByIdUseCase =
                new DeleteDonorCreditCardById(donorCreditCardRepository);

            await deleteDonorCreditCardByIdUseCase.execute(id);

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
