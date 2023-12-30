import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import CreateService from "../components/modals/CreateService";
import CreateCategory from "../components/modals/CreateCategory";
import DeleteService from "../components/modals/DeleteService";
import DeleteCategory from "../components/modals/DeleteCategory";
import { EMPLOYEES_ROUTE, APPOINTMENTS_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState();
  const [deleteService, setDeleteService] = useState();

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setCategoryVisible(true)}
      >
        Добавить категорию
      </Button>
      <Button onClick={() => setDeleteCategory(true)} variant={"outline-dark"}
        className="mt-4 p-2">
        Удалить категорию
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setServiceVisible(true)}
      >
        Добавить услугу
      </Button>
      <Button onClick={() => setDeleteService(true)} variant={"outline-dark"}
        className="mt-4 p-2">
        Удалить услугу
      </Button>

      <Button as={Link} to={EMPLOYEES_ROUTE} variant={"outline-dark"}
        className="mt-4 p-2">
        Сотрудники
      </Button>

      <Button as={Link} to={APPOINTMENTS_ROUTE} variant={"outline-dark"}
        className="mt-4 p-2">
        Заказы
      </Button>

      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
      />
      <CreateService
        show={serviceVisible}
        onHide={() => setServiceVisible(false)}
      />
      <DeleteCategory
        show={deleteCategory}
        onHide={() => setDeleteCategory(false)}
      />
      <DeleteService
        show={deleteService}
        onHide={() => setDeleteService(false)}
      />
    </Container>
  );
};

export default AdminPage;
