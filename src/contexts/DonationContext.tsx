import { useState, createContext, ReactNode } from "react";

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
}

export const DonationContext = createContext<IDonationProviderData>(
  {} as IDonationProviderData
);

export const DonationProvider = ({ children }: IDonationProviderProps) => {
  const [donation, setDonation] = useState<IDonation | null>(null);

  return (
    <DonationContext.Provider value={{ donation }}>
      {children}
    </DonationContext.Provider>
  );
};
