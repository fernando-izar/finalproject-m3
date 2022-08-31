import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório")
    .email("Email inválido!"),
  password: yup.string().required("Campo obrigatório"),
});
