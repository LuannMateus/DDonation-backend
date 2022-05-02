import { Request, Response } from 'express';
import { FindCauseById } from '../../../domain/usecases/Cause/FindCauseById';
import { CauseRepository } from '../../../infra/repositories/CauseRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class FindCauseByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id');

            const causeRepository = new CauseRepository();
            const findCauseByIdUseCase = new FindCauseById(causeRepository);

            const cause = await findCauseByIdUseCase.execute(id);

            return res.status(200).json(cause);
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
