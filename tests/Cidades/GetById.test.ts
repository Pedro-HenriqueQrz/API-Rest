import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - GetById', () => {

    it('Buscar registro por ID válido', async () => {
        const res1 = await testServer
            .get('/cidades/1');

        expect(res1.statusCode).toEqual(StatusCodes.OK);
        // Quando implementar completamente, trocar para:
        // expect(res1.body).toHaveProperty('id');
        // expect(res1.body).toHaveProperty('nome');
    });

    it('Buscar registro com ID inválido (string)', async () => {
        const res1 = await testServer
            .get('/cidades/abc');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Buscar registro com ID zero', async () => {
        const res1 = await testServer
            .get('/cidades/0');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Buscar registro com ID negativo', async () => {
        const res1 = await testServer
            .get('/cidades/-1');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Buscar registro com ID decimal', async () => {
        const res1 = await testServer
            .get('/cidades/1.5');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Buscar registro com ID muito grande', async () => {
        const res1 = await testServer
            .get('/cidades/999999999');

        expect(res1.statusCode).toEqual(StatusCodes.OK);
        // Quando implementar, pode retornar:
        // expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });

    it('Buscar registro com caracteres especiais no ID', async () => {
        const res1 = await testServer
            .get('/cidades/@#$');

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Buscar registro sem informar ID', async () => {
        const res1 = await testServer
            .get('/cidades/');

        // Este deve chamar o getAll, não o getById
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    });

});