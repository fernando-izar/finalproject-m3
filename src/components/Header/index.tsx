import { Container } from "./styles";
import logo from "../../logo.png";

import { Button, Menu, MenuItem } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { SearchBox } from "../SearchBox";

export const Header = () => {
  const navigate = useNavigate();
  const { setIsMakeDonationModal } = useContext(DonationContext);
  const { user, logout } = useContext(UserContext);
  //const { logout } = useContext(UserContext);
  //const user = true;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDonate = () => {
    setIsMakeDonationModal(true);
    handleClose();
  };

  const handleRegister = () => {
    handleClose();
    navigate("/register");
  };

  const handleLogout = () => {
    logout();
  };

  return user ? (
    <Container>
      <img src={logo} alt="logo" />
      <SearchBox></SearchBox>
      <nav>
        <Button
          variant="contained"
          className="btn-header"
          onClick={() => navigate("/register")}
        >
          Seja parceiro
        </Button>
        <Button
          variant="contained"
          className="btn-header"
          onClick={handleDonate}
        >
          Doar
        </Button>
        <Button
          variant="contained"
          className="btn-header"
          onClick={handleLogout}
        >
          Sair
        </Button>
        <Button className="menu-button" onClick={handleClick}>
          <MenuOutlined></MenuOutlined>
        </Button>
        <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
          <MenuItem onClick={handleRegister}>Seja Parceiro</MenuItem>
          <MenuItem onClick={handleDonate}>Doar</MenuItem>
        </Menu>
      </nav>
    </Container>
  ) : (
    <Container>
      <img src={logo} alt="logo" />
      <nav>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </nav>
    </Container>
  );
};
