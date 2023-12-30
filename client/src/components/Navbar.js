import React, { useContext, useEffect } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, USER_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const decodedToken = token ? jwtDecode(token) : null;

  const logout = () => {
    user.setIsAuth(false);
    user.setUser({});
    localStorage.clear();
    navigate(MAIN_ROUTE)
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={MAIN_ROUTE}>
          CleaningCompany
        </NavLink>
        {decodedToken ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            {decodedToken.role === 'ADMIN' ?
              <Button
                variant={"outline-light"}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Админ
              </Button> : <></>
            }
            <Button
              variant={"outline-light"}
              onClick={() => navigate(USER_ROUTE)}
              className="ms-4"
            >
              Профиль
            </Button>
            <Button
              className="ms-4"
              style={{ color: "white" }}
              onClick={() => navigate(FAQ_ROUTE)}
              variant='outline-light'
            >
              FAQ
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => logout()}
              className="ms-4"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
