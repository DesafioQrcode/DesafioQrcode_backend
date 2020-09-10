import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs'

const transactionRouter = Router();

transactionRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { cpf, cnpj, valor } = request.body

    const valoresEmString = JSON.stringify({ cpf, valor, cnpj })
    const qrCodeString = bcrypt.hashSync(valoresEmString)

    return response.status(200).json({
      qrCodeString
    })

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
