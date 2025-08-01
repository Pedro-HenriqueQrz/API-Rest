import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

// Define a estrutura
interface ICidade {
    nome: string,
}

// Validação da estrutura
export const createValidation = validation((getSchema) => ({
body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
})),
}));

// 1. Função principal
export const create: RequestHandler = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body)

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');

};