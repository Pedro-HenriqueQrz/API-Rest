import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

// Define a estrutura
interface ICidade {
    nome: string,
    estado: string;
}

// Validação da estrutura
const bodyValidation: yup.Schema<ICidade> = yup.object({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});

// 1. Função principal
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    let validateData: ICidade | undefined = undefined;

    try {
        // 1.1 Armazena todos os dados válidos e o abortEarly coleta TODOS os erros de validação
        validateData = await bodyValidation.validate(req.body, { abortEarly: false });


    } catch (error) {
        
        const yupErrror = error as yup.ValidationError;
        const validationErrors: Record<string, string> = { //Este record possui dois parametros, o primeiro esta dizendo que o objeto será string e que o seu valor será string <string, string>
        }

        //1.2 array com todos os erros encontrados
        yupErrror.inner.forEach(error => {
            //Loop para cada erro
            if (!error.path) return;
            validationErrors[error.path] = error.message;
        })

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors,
        });

    }

    console.log(validateData)

    return res.send('Create!');

};