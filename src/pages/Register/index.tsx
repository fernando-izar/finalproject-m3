import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputLabel,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
  Stack,
  TextField,
  Input,
} from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";

import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { BigButton } from "../../components/BigButtonDesktop";
import { Container } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { IRegisterForm } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../validators/schemas";
import { TitlesH1 } from "../../components/Titles/styles";
import { ButtonLogin } from "../../components/ButtonLoginDesktop";

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

  const { signUp } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <Container>
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
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start"></InputAdornment>
                //   ),
                // }}
                {...register("name")}
              />

              <span>{errors.name?.message}</span>

              <TextField
                label="CNPJ ou CPF"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">CNPJ ou CPF</InputAdornment>
                //   ),
                // }}
                {...register("cnpj/cpf")}
              />

              {<span>{errors["cnpj/cpf"]?.message}</span>}

              <TextField
                label="Endereço/nº"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">Endereço/nº</InputAdornment>
                //   ),
                // }}
                {...register("address")}
              />
              <span>{errors.address?.message}</span>

              <TextField
                label="Complemento"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">Complemento</InputAdornment>
                //   ),
                // }}
                {...register("complement")}
              />
              <span>{errors.complement?.message}</span>

              <TextField
                label="Cidade"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">Cidade</InputAdornment>
                //   ),
                // }}
                {...register("city")}
              />
              <span>{errors.city?.message}</span>

              <TextField
                label="Estado"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">Estado</InputAdornment>
                //   ),
                // }}
                {...register("state")}
              />
              <span>{errors.state?.message}</span>

              <TextField
                label="Responsável"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">Responsável</InputAdornment>
                //   ),
                // }}
                {...register("responsible")}
              />
              <span>{errors.responsible?.message}</span>

              <TextField
                label="Contato"
                id="outlined-start-adornment"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">Contato</InputAdornment>
                //   ),
                // }}
                {...register("contact")}
              />
              <span>{errors.contact?.message}</span>

              <TextField
                label="E-mail"
                id="outlined-basic"
                size="small"
                variant="standard"
                sx={{ m: 1, width: "35ch", height: "4ch" }}
                InputProps={{
                  endAdornment: (
                    // <InputAdornment position="start">
                    <AccountCircle />
                    // </InputAdornment>
                  ),
                }}
                {...register("email")}
              />

              <span>{errors.email?.message}</span>

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
                  onChange={handleChange("password")}
                />
              </FormControl>

              <span>{errors.password?.message}</span>

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
                  onChange={handleChangeConfirmation("passwordConfirmation")}
                  // label="passwordConfirmation"
                />
              </FormControl>

              <span>{errors.passwordConfirmation?.message}</span>
            </div>
            <div className="divButtonRegister">
              <ButtonLogin type="submit" onClick={() => handleSubmit}>
                Cadastrar
              </ButtonLogin>
            </div>
          </>
        ) : (
          <>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
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

            <TextField
              label="Nome da empresa/Nome da pessoa"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Nome da empresa/Nome da pessoa
                  </InputAdornment>
                ),
              }}
              {...register("name")}
            />

            <span>{errors.name?.message}</span>

            <TextField
              label="CNPJ ou CPF"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">CNPJ ou CPF</InputAdornment>
                ),
              }}
              {...register("cnpj/cpf")}
            />

            {<span>{errors["cnpj/cpf"]?.message}</span>}

            <TextField
              label="Endereço/nº"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Endereço/nº</InputAdornment>
                ),
              }}
              {...register("address")}
            />
            <span>{errors.address?.message}</span>

            <TextField
              label="Complemento"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Complemento</InputAdornment>
                ),
              }}
              {...register("complement")}
            />
            <span>{errors.complement?.message}</span>

            <TextField
              label="Cidade"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Cidade</InputAdornment>
                ),
              }}
              {...register("city")}
            />
            <span>{errors.city?.message}</span>

            <TextField
              label="Estado"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Estado</InputAdornment>
                ),
              }}
              {...register("state")}
            />
            <span>{errors.state?.message}</span>

            <TextField
              label="Responsável"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Responsável</InputAdornment>
                ),
              }}
              {...register("responsible")}
            />
            <span>{errors.responsible?.message}</span>

            <TextField
              label="Contato"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Contato</InputAdornment>
                ),
              }}
              {...register("contact")}
            />
            <span>{errors.contact?.message}</span>

            <TextField
              label="E-mail"
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              {...register("email")}
            />

            <span>{errors.email?.message}</span>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password")}
                onChange={handleChange("password")}
                label="Password"
              />
            </FormControl>

            <span>{errors.password?.message}</span>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirmação de Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("passwordConfirmation")}
                onChange={handleChange("password")}
                label="Password"
              />
            </FormControl>

            <span>{errors.passwordConfirmation?.message}</span>

            <ButtonLogin type="submit" onClick={() => handleSubmit}>
              Cadastrar
            </ButtonLogin>
          </>
        )}
      </form>
    </Container>
  );
};
