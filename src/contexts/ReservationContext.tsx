import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../services/api";

interface IReservationProviderProps {
  children: ReactNode;
}

export interface IReservation {
  userId: number;
  id?: number;
  donations: [
    food: string,
    quantity: string,
    expiration: string,
    classification: string,
    available: boolean,
    userId: number,
    id: number,
    user: {
      name: string;
      address: string;
      complement: string;
      city: string;
      state: string;
      responsible: string;
      contact: string;
      type: string;
      id: number;
    }
  ];
}

export interface IReservationContextData {
  onClickReserve: (id: number) => Promise<void>;
}

export const ReservationContext = createContext({} as IReservationContextData);

export const ReservationProvider = ({
  children,
}: IReservationProviderProps) => {
  const [reservation, setReservation] = useState<IReservation | null>(null);
  const [listReservations, setListReservations] = useState<IReservation[]>([]);

  const onClickReserve = async (id: number) => {
    try {
      const { data } = await api.get(`/donations/${id}?_expand=user`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReservationContext.Provider value={{ onClickReserve }}>
      {children}
    </ReservationContext.Provider>
  );
};
