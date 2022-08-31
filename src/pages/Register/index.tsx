import { Container } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegisterForm {
  type: string;
  name: string;
  ["cnpj/cpf"]: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  responsible: string;
  contact: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Register = () => {
  const formSchema = yup.object().shape({
    type: yup.string().required("Selecione o tipo de usuario"),
    name: yup
      .string()
      .required("insira o nome de sua empresa ou de sua instituição"),
    email: yup.string().required("Insira seu email").email("E-mail inválido"),
    ["cnpj/cpf"]: yup.string().required("Selecione o tipo de usuario"),
    address: yup.string().required("Selecione o tipo de usuario"),
    complement: yup.string().required("Selecione o tipo de usuario"),

    city: yup.string().required("Selecione o tipo de usuario"),
    responsible: yup.string().required("Selecione o tipo de usuario"),
    contact: yup.string().required("Selecione o tipo de usuario"),
    password: yup.string().required("Selecione o tipo de usuario"),
    passwordConfirmation: yup
      .string()
      .required("Confirme sua nova senha")
      .oneOf(
        [yup.ref("password"), null],
        "As senhas devem corresponder entre si"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(formSchema),
  });

  const signUp = (data: IRegisterForm) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Diga Olá!</h1>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <div>
            <input
              type="radio"
              id="donor"
              value="donor"
              {...register("type")}
            />
            <label>Doador</label>
          </div>
          <div>
            <input
              type="radio"
              id="charity"
              value="charity"
              {...register("type")}
            />
            <label>Donatário</label>
          </div>
        </div>

        <input
          placeholder="Nome da empresa/Nome da pessoa"
          {...register("name")}
        />
        <input placeholder="CNPJ ou CPF" {...register("cnpj/cpf")} />
        <input placeholder="Endereço/nº" {...register("address")} />
        <input placeholder="Complemento" {...register("complement")} />
        <input placeholder="Cidade" {...register("city")} />
        <input placeholder=" UF" {...register("state")} />
        <input placeholder="Responsável" {...register("responsible")} />
        <input placeholder="Contato" type="tel" {...register("contact")} />
        <input placeholder="E-mail" type="email" {...register("email")} />
        <input placeholder="Senha" type="password" {...register("password")} />
        <input
          placeholder="Confirme sua senha"
          type="password"
          {...register("passwordConfirmation")}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};
