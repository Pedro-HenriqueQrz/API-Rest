import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - UpdateById', () => {

    it('Atualizar registro com dados válidos', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: 'São Paulo Atualizado'
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Atualizar registro com ID inválido (string)', async () => {
        const res1 = await testServer
            .put('/cidades/abc')
            .send({
                nome: 'São Paulo'
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Atualizar registro com ID zero', async () => {
        const res1 = await testServer
            .put('/cidades/0')
            .send({
                nome: 'São Paulo'
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Atualizar registro com ID negativo', async () => {
        const res1 = await testServer
            .put('/cidades/-1')
            .send({
                nome: 'São Paulo'
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Atualizar registro com nome muito curto', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: 'SP'
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro com nome vazio', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: ''
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro com nome como número', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: 123
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro sem enviar nome', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({});

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro com body vazio', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro com nome apenas espaços', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: '   '
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro com nome muito longo', async () => {
        const nomeLongo = 'a'.repeat(151);
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: nomeLongo
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Atualizar registro que não existe', async () => {
        const res1 = await testServer
            .put('/cidades/99999')
            .send({
                nome: 'Cidade Inexistente'
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });

    it('Atualizar registro com campos extras no body', async () => {
        const res1 = await testServer
            .put('/cidades/1')
            .send({
                nome: 'São Paulo',
                campoExtra: 'valor indevido',
                outroCampo: 123
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        // Quando implementar, trocar para:
        // expect(res1.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

});
