import { Container } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { IRegisterForm } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../validators/schemas";

export const Register = () => {
  const { signUp } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schemaRegister),
  });

  /* const signUp = (data: IRegisterForm) => {
    const { passwordConfirmation, ...infoToAPI } = data;

    api
      .post("/users", infoToAPI)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(infoToAPI);
  }; */

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
          <span>{errors.type?.message}</span>
        </div>

        <input
          placeholder="Nome da empresa/Nome da pessoa"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <input placeholder="CNPJ ou CPF" {...register("cnpj/cpf")} />
        {<span>{errors["cnpj/cpf"]?.message}</span>}

        <input placeholder="Endereço/nº" {...register("address")} />
        <span>{errors.address?.message}</span>

        <input placeholder="Complemento" {...register("complement")} />
        <span>{errors.complement?.message}</span>

        <input placeholder="Cidade" {...register("city")} />
        <span>{errors.city?.message}</span>

        <input placeholder=" Estado" {...register("state")} />
        <span>{errors.state?.message}</span>

        <input placeholder="Responsável" {...register("responsible")} />
        <span>{errors.responsible?.message}</span>

        <input placeholder="Contato" type="tel" {...register("contact")} />
        <span>{errors.contact?.message}</span>

        <input placeholder="E-mail" type="email" {...register("email")} />
        <span>{errors.email?.message}</span>

        <input placeholder="Senha" type="password" {...register("password")} />
        <span>{errors.password?.message}</span>
        <input
          placeholder="Confirmação de Senha"
          type="password"
          {...register("passwordConfirmation")}
        />
        <span>{errors.passwordConfirmation?.message}</span>
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};
