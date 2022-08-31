import { Container } from "./styles";
import logo from "../../logo.png";

import { Button, Menu, MenuItem } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDonate = () => {
    alert("abrir modal");
    handleClose();
  };

  const handleRegister = () => {
    handleClose();
    navigate("/register");
  };

  return (
    <Container>
      <img src={logo} alt="logo" />
      <nav>
        <Button
          variant="contained"
          className="btn-header"
          onClick={() => navigate("/register")}
        >
          Seja parceiro
        </Button>
        <Button variant="contained" className="btn-header">
          Doar
        </Button>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button className="menu-button" onClick={handleClick}>
          <MenuOutlined></MenuOutlined>
        </Button>
        <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
          <MenuItem onClick={handleRegister}>Seja Parceiro</MenuItem>
          <MenuItem onClick={handleDonate}>Doar</MenuItem>
        </Menu>
      </nav>
    </Container>
  );
};
