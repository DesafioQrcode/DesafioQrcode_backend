import { Router, Request, Response } from 'express';

const transactionRouter = Router();

transactionRouter.post('/', async (request: Request, response: Response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
