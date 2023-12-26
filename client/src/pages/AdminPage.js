import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import CreateService from "../components/modals/CreateService";
import CreateCategory from "../components/modals/CreateCategory";

const AdminPage = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setCategoryVisible(true)}
      >
        Добавить категорию
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setServiceVisible(true)}
      >
        Добавить услугу
      </Button>

      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
      />
      <CreateService
        show={serviceVisible}
        onHide={() => setServiceVisible(false)}
      />
    </Container>
  );
};

export default AdminPage;
