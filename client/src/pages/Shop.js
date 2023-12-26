import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryBar from "../components/CategoryBar";
import ServiceList from "../components/ServiceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchCategories } from "../components/http/serviceApi";
const Shop = observer(() => {
  const { service } = useContext(Context);

  useEffect(() => {
    fetchCategories().then((data) => service.setServicesCategories(data));
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <CategoryBar />
        </Col>
        <Col md={9}>
          <ServiceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
