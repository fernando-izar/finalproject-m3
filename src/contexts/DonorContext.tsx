import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { IUser, UserContext } from "./UserContext";
import { DonationContext } from "./DonationContext";
import api from "../services/api";

interface IDonorContextProviderProps {
  children: ReactNode;
}

export interface IAllDataDonation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available: boolean;
  userId: number;
  id: number;
  user: IUser;
}

interface IDonorContextData {
  allDataDonations: IAllDataDonation[];
}

export const DonorContext = createContext<IDonorContextData>(
  {} as IDonorContextData
);

export const DonorContextProvider = ({
  children,
}: IDonorContextProviderProps) => {
  const [allDataDonations, setAllDataDonations] = useState<IAllDataDonation[]>(
    []
  );

  const { loading, setLoading } = useContext(UserContext);
  const { donation } = useContext(DonationContext);

  const handleSetAllDataDonations = (data: IAllDataDonation[]) => {
    setAllDataDonations(data);
  };

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const result = await api.get<IAllDataDonation[]>(
          `donations?_expand=user`
        );
        handleSetAllDataDonations(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadDonations();
  }, [loading, donation]);

  return (
    <DonorContext.Provider value={{ allDataDonations }}>
      {children}
    </DonorContext.Provider>
  );
};
