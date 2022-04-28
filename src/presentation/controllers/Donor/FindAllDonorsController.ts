import { Request, Response } from 'express';
import FindAllDonors from '../../../domain/usecases/Donor/FindAllDonors';
import DonorRepository from '../../../infra/repositories/DonorRepository';

export default class FindAllDonorsController {
    async handle(req: Request, res: Response) {
        const donorRepository = new DonorRepository();
        const findAllDonorsUseCase = new FindAllDonors(donorRepository);

        try {
            const donors = await findAllDonorsUseCase.execute();

            return res.status(200).json(donors);
        } catch (e) {
            return res.status(500).end();
        }
    }
}
