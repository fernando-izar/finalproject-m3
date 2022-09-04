import { ConstructionOutlined } from "@mui/icons-material";
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../services/api";
import { UserContext, IUser } from "./UserContext";

interface IReservationProviderProps {
  children: ReactNode;
}

export interface IReservation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available: boolean;
  userId: number;
  id: number;
  user: IUser;
}

export interface IReservationWithUsers {
  userId: number;
  id?: number;
  donations: IReservation[];
}

export interface IReservationContextData {
  onClickReserve: (id: number) => Promise<void>;
}

export const ReservationContext = createContext({} as IReservationContextData);

export const ReservationProvider = ({
  children,
}: IReservationProviderProps) => {
  const [reservation, setReservation] = useState<IReservation | null>(null);
  const [listReservations, setListReservations] = useState<
    IReservationWithUsers[]
  >([]);
  const { user } = useContext(UserContext);

  const onClickReserve = async (id: number) => {
    try {
      const { data } = await api.get<IReservation>(
        `/donations/${id}?_expand=user`
      );
      setReservation(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadListReservations = async () => {
      const token = localStorage.getItem("@userToken");

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const data = {
          userId: user?.id,
          donations: reservation,
        };

        await api.post(`reservations`, data);

        const { data: reservByUsers } = await api.get<IReservationWithUsers[]>(
          `reservations`
        );

        setListReservations(reservByUsers);
      } catch (error) {
        console.log(error);
      }
    };
    loadListReservations();
  }, [reservation]);

  return (
    <ReservationContext.Provider value={{ onClickReserve }}>
      {children}
    </ReservationContext.Provider>
  );
};
