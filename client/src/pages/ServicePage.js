import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const ServicePage = () => {
  // const [service, setService] = useState({info: []})
  // const {id} = useParams()
  // useEffect(() => {
  //     fetchOneDevice(id).then(data => setDevice(data))
  // }, [])
  const service = {
    service_id: 1,
    service_name: "Уборка",
    service_category_id: 1,
    description: "1111",
    price: 1,
    duration: 1,
    img: "https://vitacleaning.ru/upload/medialibrary/fa6/fa6febf1f18e80738f68a09e800b3121.jpg",
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 GB" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Проц", description: "пентиум 3" },
    { id: 4, title: "ядра", description: "2" },
    { id: 5, title: "аккум", description: "4000" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={service.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{service.service_name}</h2>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {service.price} USD.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default ServicePage;
