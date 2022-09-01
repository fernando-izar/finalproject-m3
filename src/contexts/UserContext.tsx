import { useNavigate } from "react-router-dom";
import { ReactNode, createContext, useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

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

export const UserContext = createContext<IContextProviderProps>(
  {} as IContextProviderProps
);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@userToken");

      // if(token) {
      //   try {

      //   }
      // }catch(error){}
    };
  });

  const loginData = (data: ILoginDataProps) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.accessToken);
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
