import { useNavigate } from "react-router-dom";
import { ReactNode, createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext<IContextProviderProps>(
  {} as IContextProviderProps
);

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

export interface IUserProviderData {
  user: IUser | null;
}

export interface ILoginDataProps {
  email: string;
  password: string;
}

export interface IUserContextProviderProps {
  children: ReactNode;
}

export interface IContextProviderProps {
  loginData: (data: ILoginDataProps) => void;
  toRegister: () => void;
  user: IUser | null;
}

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const loginData = (data: ILoginDataProps) => {
    axios
      .post("https://api-m3-g2.herokuapp.com/login", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.token);
        window.localStorage.setItem("@userID", response.data.user.id);
        toast.success("Login efetuado com sucesso!");
        navigate("/home", { replace: true });
      })
      .catch((error) => toast.error("Email ou senha inválidos!"));
  };

  const toRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <UserContext.Provider value={{ user, loginData, toRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
