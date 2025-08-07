import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

// Define a estrutura
interface IQuereyProps {
    page?: number,
    limit?: number,
    filter?: string,
}

// Validação da estrutura
export const getAllValidation = validation((getSchema) => ({
query: getSchema<IQuereyProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0).max(100),
    filter: yup.string().optional().min(3),
})),
}));

// 1. Função principal
export const getAll: RequestHandler = async (req: Request<{}, {}, {}, IQuereyProps>, res: Response) => {
    console.log(req.query)

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');

};