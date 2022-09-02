import { useContext } from "react";
import { ILoginDataProps, UserContext } from "../../contexts/UserContext";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validators/schemas";
import { Button } from "@material-ui/core";

export const Login = () => {
  const { toRegister, loginData } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDataProps>({ resolver: yupResolver(schemaLogin) });

  return (
    <Container>
      <form onSubmit={handleSubmit(loginData)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>

        <input
          type="text"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Entrar</button>
        <p className="pMsgReg">Você ainda não possui uma conta?</p>

        <button onClick={() => toRegister()} type="submit">
          Cadastre-se
        </button>
        <Button
          onClick={() => toRegister()}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Cadastre-se 2
        </Button>
      </form>
    </Container>
  );
};
