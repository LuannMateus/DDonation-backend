import { Request, Response } from 'express';
import DeleteDonorById from '../../../domain/usecases/Donor/DeleteDonorById';
import DonorRepository from '../../../infra/repositories/DonorRepository';
import { FkError, NotFoundError } from '../../errors';

export default class DeleteDonorByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const donorRepository = new DonorRepository();
        const deleteDonorByIdUseCase = new DeleteDonorById(donorRepository);

        try {
            await deleteDonorByIdUseCase.execute(id);

            return res.status(204).end();
        } catch (e) {
            if (e instanceof NotFoundError) {
                return res.status(404).json({
                    message: e.message,
                });
            } else if (e instanceof FkError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            return res.status(500).end();
        }
    }
}
