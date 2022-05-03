import { Request, Response } from 'express';
import { FindAllDonationRequestsByCategoryAndEmergency } from '../../../domain/usecases/DonationRequest/FindAllDonationRequestsByCategoryAndEmergency';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class FindAllDonationRequestsByCategoryAndEmergencyController {
    async handle(req: Request, res: Response) {
        try {
            const { category, emergency } = req.query as {
                category: string;
                emergency: string;
            };

            if (!category || !emergency)
                throw new BadRequestError('Missing query params');

            const donationRequestRepository = new DonationRequestRepository();
            const findAllDonationRequestsByCategoryAndEmergency =
                new FindAllDonationRequestsByCategoryAndEmergency(
                    donationRequestRepository,
                );

            const donationRequests =
                await findAllDonationRequestsByCategoryAndEmergency.execute(
                    category,
                    emergency === 'true',
                );

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
