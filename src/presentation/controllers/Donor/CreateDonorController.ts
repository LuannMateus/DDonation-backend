import { Request, Response } from 'express';
import Donor from '../../../domain/entities/Donor';
import CreateDonor from '../../../domain/usecases/Donor/CreateDonor';
import DonorRepository from '../../../infra/repositories/DonorRepository';

export default class CreateDonorController {
    async handle(req: Request, res: Response) {
        const {
            id,
            firstName,
            lastName,
            donorType,
            CPF,
            profileImage,
            email,
            password,
        } = req.body as Donor;

        const donorRepository = new DonorRepository();
        const createDonorUseCase = new CreateDonor(donorRepository);

        const donor = new Donor(
            id,
            firstName,
            lastName,
            donorType,
            CPF,
            profileImage,
            email,
            password,
        );

        try {
            await createDonorUseCase.execute(donor);
        } catch (e) {
            return res.status(400).end();
        }

        return res.status(201).json(donor);
    }
}
