import { useState, createContext, ReactNode } from "react";

export interface IUser {
  email: string;
  password: string;
  name: string;
  ["cnpj/cpf"]: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  responsible: string;
  contact: string;
  type: string;
  id: number;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserProviderData {
  user: IUser | null;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
