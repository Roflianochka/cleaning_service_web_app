import React, { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Button, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { login, registration } from "../components/http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password, firstName, lastName);
      }
      localStorage.setItem('isAuth', 'true');
      user.setUser(data.user);
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-lg-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          {!isLogin && (
            <>
              <Form.Control
                className="mt-3"
                id="first_name"
                placeholder="Введите имя..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                id="last_name"
                placeholder="Введите фамилию..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <Form.Control
            className="mt-3"
            id="email"
            placeholder="Введите email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            id="password"
            placeholder="Введите пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь...</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите...</NavLink>
              </div>
            )}
          </Row>
          <Button
            className="align-self-end"
            variant={"outline-success"}
            onClick={click}
          >
            {isLogin ? "Войти" : "Регистрация"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
