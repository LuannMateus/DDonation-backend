import { Request, Response } from 'express';
import Cause from '../../../domain/entities/Cause';
import { CreateCause } from '../../../domain/usecases/Cause/CreateCause';
import { CauseRepository } from '../../../infra/repositories/CauseRepository';
import { BadRequestError, ServerError } from '../../errors';

export class CreateCauseController {
    async handle(req: Request, res: Response) {
        const { id, image, title, description, category } = req.body as Cause;

        const causeRepository = new CauseRepository();
        const createCauseUseCase = new CreateCause(causeRepository);

        try {
            const cause = new Cause(id, image, title, description, category);

            await createCauseUseCase.execute(cause);

            return res.status(201).end();
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
    }
}
