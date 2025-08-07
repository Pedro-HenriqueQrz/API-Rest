import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - GetAll', () => {

    it('Buscar todos os registros', async () => {
        const res1 = await testServer
            .get('/cidades');

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.OK);
        // expect(Array.isArray(res1.body)).toBe(true);
    });

    it('Buscar registros com página válida', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ page: 1 });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.OK);
    });

    it('Buscar registros com limite válido', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ limit: 10 });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.OK);
    });

    it('Buscar registros com filtro válido', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ filter: 'São' });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.OK);
    });

    it('Buscar registros com página inválida (string)', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ page: 'abc' });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.page');
    });

    it('Buscar registros com página zero', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ page: 0 });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.page');
    });

    it('Buscar registros com página negativa', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ page: -1 });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.page');
    });

    it('Buscar registros com limite inválido (string)', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ limit: 'abc' });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.limit');
    });

    it('Buscar registros com limite zero', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ limit: 0 });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.limit');
    });

    it('Buscar registros com limite muito alto', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ limit: 101 });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.limit');
    });

    it('Buscar registros com filtro muito curto', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ filter: 'a' });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.query.filter');
    });

    it('Buscar registros com todos os parâmetros válidos', async () => {
        const res1 = await testServer
            .get('/cidades')
            .query({ 
                page: 1, 
                limit: 5, 
                filter: 'São Paulo' 
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.OK);
    });

});
