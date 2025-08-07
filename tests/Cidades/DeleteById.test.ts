import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - DeleteById', () => {

    it('Deletar registro com ID válido', async () => {
        const res1 = await testServer
            .delete('/cidades/1');

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Deletar registro com ID inválido (string)', async () => {
        const res1 = await testServer
            .delete('/cidades/abc');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Deletar registro com ID zero', async () => {
        const res1 = await testServer
            .delete('/cidades/0');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Deletar registro com ID negativo', async () => {
        const res1 = await testServer
            .delete('/cidades/-1');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Deletar registro com ID decimal', async () => {
        const res1 = await testServer
            .delete('/cidades/1.5');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Deletar registro com caracteres especiais no ID', async () => {
        const res1 = await testServer
            .delete('/cidades/@#$');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Deletar registro que não existe', async () => {
        const res1 = await testServer
            .delete('/cidades/99999');

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });

    it('Deletar registro com ID muito grande', async () => {
        const res1 = await testServer
            .delete('/cidades/999999999');

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });

    it('Tentar deletar sem informar ID', async () => {
        const res1 = await testServer
            .delete('/cidades/');

        // Este endpoint não existe, deve retornar 404
        expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });

    it('Verificar se não aceita body na requisição DELETE', async () => {
        const res1 = await testServer
            .delete('/cidades/1')
            .send({
                nome: 'Dados indevidos'
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // DELETE não deve aceitar body, mas o endpoint atual não valida isso
    });

});
