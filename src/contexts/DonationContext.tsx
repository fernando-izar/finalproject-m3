import { useState, createContext, ReactNode, useContext } from "react";

export interface IDonation {
  food: string;
  quantity: string;
  expiration: string;
  class: string;
  available: boolean;
  userId: number;
  id: number;
}

export interface IDonationProviderProps {
  children: ReactNode;
}

export interface IDonationProviderData {
  donation: IDonation | null;
  isMakeDonationModal: boolean;
  setIsMakeDonationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DonationContext = createContext<IDonationProviderData>(
  {} as IDonationProviderData
);

export const DonationProvider = ({ children }: IDonationProviderProps) => {
  const [donation, setDonation] = useState<IDonation | null>(null);
  const [isMakeDonationModal, setIsMakeDonationModal] = useState(false);

  return (
    <DonationContext.Provider
      value={{ donation, isMakeDonationModal, setIsMakeDonationModal }}
    >
      {children}
    </DonationContext.Provider>
  );
};
