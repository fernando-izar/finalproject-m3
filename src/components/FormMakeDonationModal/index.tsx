import { useContext, useState } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { useForm } from "react-hook-form";
import { IDonation } from "../../contexts/DonationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDonation } from "../../validators/schemas";
import { Button } from "@material-ui/core";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

import { Container } from "./styles";

export const FormMakeDonationModal = () => {
  const { onSubmitMakeDonation } = useContext(DonationContext);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<IDonation>({ resolver: yupResolver(schemaDonation) });

  //SELETOR DE DATA
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitMakeDonation)}>
        <h2>Quero Doar</h2>
        <TextField
          {...register("food")}
          label="Qual alimento você está doando"
          variant="standard"
          color="warning"
          type="text"
        />
        <p>{errors.food?.message}</p>
        <TextField
          {...register("quantity")}
          label="Qual a quantidade que você está doando?"
          variant="standard"
          color="warning"
          type="text"
        />
        <p>{errors.quantity?.message}</p>

        <TextField
          {...register("expiration")}
          label="Qual a validade do produto? (DD/MM/AAAA)"
          variant="standard"
          color="warning"
          type="text"
        />
        <p>{errors.expiration?.message}</p>

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}

        <label htmlFor="class">Classe</label>
        <select {...register("class")} id="class">
          <option value="acucares-e-doces">Açúcares e Doces</option>
          <option value="cereais-e-graos">Cereais</option>
          <option value="carnes">Carnes</option>
          <option value="enlatados">Enlatados</option>
          <option value="hortifruti">Hortifruti</option>
          <option value="laticinios">Laticínios</option>
          <option value="oleos-e-Gorduras">Óleos e Gorduras</option>
          <option value="ovos">Ovos</option>
          <option value="padaria">Padaria</option>
        </select>
        <Button variant="contained" color="primary" size="large" type="submit">
          Confirmar Doação
        </Button>
      </form>
    </Container>
  );
};
