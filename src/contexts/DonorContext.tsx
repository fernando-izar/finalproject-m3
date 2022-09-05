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
import { render } from "@testing-library/react";

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
  newSearch: string;
  setNewSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
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
  const [newSearch, setNewSearch] = useState("");
  const [searched, setSearched] = useState("");

  const { loading } = useContext(UserContext);
  const { donation } = useContext(DonationContext);

  const handleSetAllDataDonations = (data: IAllDataDonation[]) => {
    setAllDataDonations(data);
  };

  useEffect(() => {
    const renderSearch = async () => {
      console.log(newSearch);
      try {
        const result = await api.get<IAllDataDonation[]>(
          `donations?_expand=user`
        );
        const filtered = result.data.filter((element) =>
          element.food.includes(searched.toLowerCase().trim())
        );

        setAllDataDonations(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    renderSearch();
  }, [searched]);

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const result = await api.get<IAllDataDonation[]>(
          `donations?_expand=user`
        );
        handleSetAllDataDonations(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadDonations();
  }, [loading, donation]);

  return (
    <DonorContext.Provider
      value={{
        allDataDonations,
        setNewSearch,
        newSearch,
        setSearched,
      }}
    >
      {children}
    </DonorContext.Provider>
  );
};
