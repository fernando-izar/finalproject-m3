import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

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

export const ReservationContext = createContext({});

export const ReservationProvider = ({
  children,
}: IReservationProviderProps) => {
  const [reservation, setReservation] = useState<IReservation | null>(null);
  const [listReservations, setListReservations] = useState<IReservation[]>([]);

  return (
    <ReservationContext.Provider value={{}}>
      {children}
    </ReservationContext.Provider>
  );
};
