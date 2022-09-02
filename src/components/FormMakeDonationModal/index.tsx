import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { useForm } from "react-hook-form";
import { IDonation } from "../../contexts/DonationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDonation } from "../../validators/schemas";
import { Button } from "@material-ui/core";

import { Container } from "./styles";

export const FormMakeDonationModal = () => {
  const { onSubmitMakeDonation } = useContext(DonationContext);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<IDonation>({ resolver: yupResolver(schemaDonation) });

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitMakeDonation)}>
        <h2>Quero Doar</h2>
        <input
          {...register("food")}
          type="text"
          placeholder="Qual alimento você está doando?"
        />
        <p>{errors.food?.message}</p>
        <input
          {...register("quantity")}
          type="text"
          placeholder="Qual a quantidade que você está doando?"
        />
        <p>{errors.quantity?.message}</p>

        <input
          {...register("expiration")}
          type="text"
          placeholder="Qual a validade do produto?"
        />
        <p>{errors.expiration?.message}</p>

        <label htmlFor="classe-produto">classe</label>
        <select
          {...register("class")}
          name="classe-produto"
          id="classe-produto"
          placeholder="Qual alimento você está doando?"
        >
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
