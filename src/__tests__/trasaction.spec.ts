import request from 'supertest';
import { compare } from 'bcryptjs';

import app from '../app';

describe('transaction', () => {
  it('should be able to generate a new qrcode', async () => {
    const requestBody = {
      cpf: '51101547081',
      valor: 500,
      cnpj: '04396243049',
    };

    const response = await request(app).post('/transactions').send(requestBody);

    const { qrCodeString } = response.body;

    const compareResult = await compare(
      JSON.stringify(requestBody),
      qrCodeString,
    );

    expect(compareResult).toBe(true);
  });
});
