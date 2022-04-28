import { Request, Response } from 'express';
import Donor from '../../../domain/entities/Donor';
import CreateDonor from '../../../domain/usecases/Donor/CreateDonor';
import DonorRepository from '../../../infra/repositories/DonorRepository';
import { BadRequestError, ServerError } from '../../errors';

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

        return res.status(201).json(donor);
    }
}
