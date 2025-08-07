import { setLocale } from "yup";

setLocale({
    mixed: {
        default: 'Campo inválido',
        required: 'Este campo é obrigatório',
        oneOf: 'O valor deve ser um dos seguintes: ${values}',
        notOneOf: 'O valor não pode ser um dos seguintes: ${values}',
        defined: 'Este campo deve ser definido',
    },
    string: {
        length: 'O campo deve ter exatamente ${length} caracteres',
        min: 'O campo deve ter pelo menos ${min} caracteres',
        max: 'O campo deve ter no máximo ${max} caracteres',
        matches: 'O campo deve corresponder ao padrão: "${regex}"',
        email: 'O campo deve ser um e-mail válido',
        url: 'O campo deve ser uma URL válida',
        trim: 'O campo não deve conter espaços no início ou no fim',
        lowercase: 'O campo deve estar em letras minúsculas',
        uppercase: 'O campo deve estar em letras maiúsculas',
    },
    number: {
        min: 'O valor deve ser maior ou igual a ${min}',
        max: 'O valor deve ser menor ou igual a ${max}',
        lessThan: 'O valor deve ser menor que ${less}',
        moreThan: 'O valor deve ser maior que ${more}',
        positive: 'O valor deve ser positivo',
        negative: 'O valor deve ser negativo',
        integer: 'O valor deve ser um número inteiro',
    },
    date: {
        min: 'A data deve ser posterior a ${min}',
        max: 'A data deve ser anterior a ${max}',
    },
    boolean: {
        isValue: 'O valor do campo deve ser ${value}',
    },
    object: {
        noUnknown: 'O campo possui chaves não especificadas no esquema',
    },
    array: {
        min: 'O campo deve ter pelo menos ${min} itens',
        max: 'O campo deve ter no máximo ${max} itens',
        length: 'O campo deve conter exatamente ${length} itens',
    },
});

// Exportação vazia para garantir que o módulo seja incluído na compilação
export {};