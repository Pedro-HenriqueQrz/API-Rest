import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - Create', () => {

    it('Criar registro', async () => {

        const response1 = await testServer.post('/cidades').send({
            nome: "Pau dos Ferros"
        });

        expect(response1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof response1.body).toEqual('number');

    });

    it('Menos caracteres do que deve', async () => {

        const response1 = await testServer.post('/cidades').send({
            nome: "Te"
        });

        expect(response1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(response1.body).toHaveProperty('errors.body.nome');

    });

    it('Nome diferente de String', async () => {

        const response1 = await testServer.post('/cidades').send({
            nome: 123
        });

        expect(response1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(response1.body).toHaveProperty('errors.body.nome')
    });

        it('Nome vazio', async () => {

        const response1 = await testServer.post('/cidades').send({
            nome: ""
        });

        expect(response1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(response1.body).toHaveProperty('errors.body.nome')
    })

});