import { useState, createContext, ReactNode, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import api from "../services/api";
import { UserContext } from "./UserContext";

export interface IDonation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available?: boolean;
  userId?: number | null | undefined;
  id?: number;
}

export interface IDonationProviderProps {
  children: ReactNode;
}

export interface IDonationProviderData {
  donation: IDonation | null;
  isMakeDonationModal: boolean;
  setIsMakeDonationModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitMakeDonation: SubmitHandler<IDonation>;
}

export const DonationContext = createContext<IDonationProviderData>(
  {} as IDonationProviderData
);

export const DonationProvider = ({ children }: IDonationProviderProps) => {
  const [donation, setDonation] = useState<IDonation | null>(null);
  const [isMakeDonationModal, setIsMakeDonationModal] = useState(false);
  const { user } = useContext(UserContext);

  const onSubmitMakeDonation: SubmitHandler<IDonation> = async (data) => {
    try {
      data.available = true;
      data.userId = user?.id;
      const { data: responseData } = await api.post("donations", data);
      setDonation(responseData);
      setIsMakeDonationModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DonationContext.Provider
      value={{
        donation,
        isMakeDonationModal,
        setIsMakeDonationModal,
        onSubmitMakeDonation,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};
