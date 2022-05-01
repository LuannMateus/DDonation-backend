import { Request, Response } from 'express';
import { FindAllDonationRequestsByCategory } from '../../../domain/usecases/DonationRequest/FindAllDonationRequestByCategory';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class FindAllDonationRequestsByCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const { category } = req.params;

            if (!category) throw new BadRequestError('Missing category');

            const donationRequestRepository = new DonationRequestRepository();
            const findAllDonationRequestsByCategory =
                new FindAllDonationRequestsByCategory(
                    donationRequestRepository,
                );

            const donationRequests =
                await findAllDonationRequestsByCategory.execute(category);

            return res.status(200).json(donationRequests);
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
                    message: e,
                });
            }
        }
    }
}
