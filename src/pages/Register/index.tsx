import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Input,
  FormHelperText,
} from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";

import { Container } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { IRegisterForm } from "../../contexts/UserContext";

import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../validators/schemas";
import { TitlesH1 } from "../../components/Titles/styles";
import { ButtonLogin } from "../../components/ButtonLoginDesktop";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
// import { Footer2 } from "../../components/Footer2";

interface State {
  password: string;
  showPassword: boolean;
}

interface StateConfirmation {
  passwordConfirmation: string;
  showPasswordConfirmation: boolean;
}

export const Register = () => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const [valuesConfirmation, setValuesConfirmation] =
    useState<StateConfirmation>({
      passwordConfirmation: "",
      showPasswordConfirmation: false,
    });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleChangeConfirmation =
    (prop: keyof StateConfirmation) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setValuesConfirmation({
        ...valuesConfirmation,
        [prop]: event.target.value,
      });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirmation = () => {
    setValuesConfirmation({
      ...valuesConfirmation,
      showPasswordConfirmation: !valuesConfirmation.showPasswordConfirmation,
    });
  };

  const handleMouseDownPasswordConfirmation = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };


  const [password, setPassword] = useState({ value: "", error: "" });
  const [passwordConfirmation, setPasswordConfirmation] = useState({ value: "", error: "" });






  const { signUp } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <>
      <Container>
        <Header></Header>
        <form className="formRegister" onSubmit={handleSubmit(signUp)}>
          <TitlesH1>Diga Olá!</TitlesH1>

          {window.innerWidth > 540 ? (
            <>
              <div className="divRadio">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue=""
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="donor"
                    control={<Radio />}
                    label="Doador"
                    {...register("type")}
                  />
                  <FormControlLabel
                    value="charity"
                    control={<Radio />}
                    label="Donatário"
                    {...register("type")}
                  />
                </RadioGroup>

                <span>{errors.type?.message}</span>
              </div>
              <div className="divFormFields">
                <TextField
                  label="Nome da empresa/Nome da pessoa"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}                 
                  error={!!errors.name?.message}
                  helperText={errors.name?.message}
                  {...register("name")}
                />

                <TextField
                  label="CNPJ ou CPF"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors["cnpj/cpf"]?.message}
                  helperText={errors["cnpj/cpf"]?.message}
                  {...register("cnpj/cpf")}
                />

                <TextField
                  label="Endereço/nº"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.address?.message}
                  helperText={errors.address?.message}
                  {...register("address")}
                />
                
                <TextField
                  label="Complemento"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.complement?.message}
                  helperText={errors.complement?.message}
                  {...register("complement")}
                />
                
                <TextField
                  label="Cidade"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.city?.message}
                  helperText={errors.city?.message}
                  {...register("city")}
                />
                
                <TextField
                  label="Estado"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.state?.message}
                  helperText={errors.state?.message}
                  {...register("state")}
                />
                
              </div>
              <div className="divFormFields2">
                <TextField
                  label="Responsável"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.responsible?.message}
                  helperText={errors.responsible?.message}
                  {...register("responsible")}
                />
                
                <TextField
                  label="Contato"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.contact?.message}
                  helperText={errors.contact?.message}
                  {...register("contact")}
                />
                
                <TextField
                  label="E-mail"
                  id="outlined-basic"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  InputProps={{
                    endAdornment: <AccountCircle />,
                  }}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                  {...register("email")}
                />

                <FormControl
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="password-1">
                    Senha
                  </InputLabel>
                  <Input
                    id="password-1"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    {...register("password")}
                    onChange={(e)=>{
                      setPassword({
                        value: e.target.value,
                        error: e.target.value ? "" : "Username is required"});
                      handleChange("password");
                    }}
                  />
                  {!!password.error && (
                    <FormHelperText error id="password-error">
                      {errors.password?.message}
                    </FormHelperText>
                  )}                  
                </FormControl>

                <FormControl
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirmação de Senha
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={
                      valuesConfirmation.showPasswordConfirmation
                        ? "text"
                        : "password"
                    }
                    value={valuesConfirmation.passwordConfirmation}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordConfirmation}
                          onMouseDown={handleMouseDownPasswordConfirmation}
                          edge="end"
                        >
                          {valuesConfirmation.showPasswordConfirmation ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    
                    {...register("passwordConfirmation")}
                    onChange={(e)=>
                      {
                      setPasswordConfirmation({
                        value: e.target.value,
                        error: e.target.value ? "" : "!"});
                      handleChangeConfirmation("passwordConfirmation");
                    }}
                  />
                  <FormHelperText error id="password-confirmation-error">
                      {errors.passwordConfirmation?.message}
                  </FormHelperText>
                </FormControl>

              </div>
              <div className="divButtonRegister">
                <ButtonLogin type="submit" onClick={() => handleSubmit}>
                  Cadastrar
                </ButtonLogin>
              </div>
            </>
          ) : (
            <>
              <div className="divRadio">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue=""
                  name="row-radio-buttons-group"
                  
                >
                  <FormControlLabel
                    value="donor"
                    control={<Radio />}
                    label="Doador"
                    {...register("type")}
                  />
                  <FormControlLabel
                    value="charity"
                    control={<Radio />}
                    label="Donatário"
                    {...register("type")}
                  />
                </RadioGroup>

                <span>{errors.type?.message}</span>
              </div>
              <div className="divFormFields">
                <TextField
                  label="Nome da empresa/Nome da pessoa"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message}
                  {...register("name")}
                />

                <TextField
                  label="CNPJ ou CPF"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors["cnpj/cpf"]?.message}
                  helperText={errors["cnpj/cpf"]?.message}
                  {...register("cnpj/cpf")}
                />

                <TextField
                  label="Endereço/nº"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.address?.message}
                  helperText={errors.address?.message}
                  {...register("address")}
                />
                
                <TextField
                  label="Complemento"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.complement?.message}
                  helperText={errors.complement?.message}
                  {...register("complement")}
                />

                <TextField
                  label="Cidade"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.city?.message}
                  helperText={errors.city?.message}
                  {...register("city")}
                />

                <TextField
                  label="Estado"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.state?.message}
                  helperText={errors.state?.message}
                  {...register("state")}
                />

                <TextField
                  label="Responsável"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.responsible?.message}
                  helperText={errors.responsible?.message}
                  {...register("responsible")}
                />

                <TextField
                  label="Contato"
                  id="outlined-start-adornment"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  error={!!errors.contact?.message}
                  helperText={errors.contact?.message}
                  {...register("contact")}
                />

                <TextField
                  label="E-mail"
                  id="outlined-basic"
                  size="small"
                  variant="standard"
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  InputProps={{
                    endAdornment: <AccountCircle />,
                  }}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                  {...register("email")}
                />

                <FormControl
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Senha
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    
                    {...register("password")}
                    onChange={(e)=>{
                      setPassword({
                        value: e.target.value,
                        error: e.target.value ? "" : "Username is required"});
                      handleChange("password");
                    }}
                  />
                  {!!password.error && (
                    <FormHelperText error id="password-error">
                      {errors.password?.message}
                    </FormHelperText>
                  )}       
                  
                </FormControl>

                <FormControl
                  sx={{ m: 1, width: "35ch", height: "4ch" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirmação de Senha
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={
                      valuesConfirmation.showPasswordConfirmation
                        ? "text"
                        : "password"
                    }
                    value={valuesConfirmation.passwordConfirmation}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordConfirmation}
                          onMouseDown={handleMouseDownPasswordConfirmation}
                          edge="end"
                        >
                          {valuesConfirmation.showPasswordConfirmation ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    
                    {...register("passwordConfirmation")}
                    
                    onChange={                   
                        handleChangeConfirmation("passwordConfirmation")
                    }
                    error={!!errors.passwordConfirmation?.message}
                  />
                  <FormHelperText error id="password-confirmation-error">
                      {errors.passwordConfirmation?.message}
                  </FormHelperText>
                </FormControl>

              </div>
              <div className="divButtonRegister">
                <ButtonLogin type="submit" onClick={() => handleSubmit}>
                  Cadastrar
                </ButtonLogin>
              </div>
            </>
          )}
        </form>
      </Container>

      <Footer></Footer>
    </>
  );
};
