import { Request, Response } from 'express';
import FindDonorById from '../../../domain/usecases/Donor/FindDonorById';
import DonorRepository from '../../../infra/repositories/DonorRepository';

export default class FindDonorByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const donorRepository = new DonorRepository();
        const findDonorByIdUseCase = new FindDonorById(donorRepository);

        try {
            const donor = await findDonorByIdUseCase.execute(id);

            return res.status(200).json(donor);
        } catch (e) {
            return res.status(404).end();
        }
    }
}
