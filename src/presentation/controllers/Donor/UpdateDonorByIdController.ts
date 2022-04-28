import { Request, Response } from 'express';
import Donor from '../../../domain/entities/Donor';
import UpdateDonorById from '../../../domain/usecases/Donor/UpdateDonorById';
import DonorRepository from '../../../infra/repositories/DonorRepository';
import { NotFoundError } from '../../errors';

export default class UpdateDonorByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { ...body } = req.body as Donor;

        const donorRepository = new DonorRepository();
        const updateDonorByIdUseCase = new UpdateDonorById(donorRepository);

        try {
            await updateDonorByIdUseCase.execute(id, body);

            return res.status(200).end();
        } catch (e) {
            if (e instanceof NotFoundError) {
                return res.status(404).json({
                    message: e.message,
                });
            }

            return res.status(500).json(e);
        }
    }
}
