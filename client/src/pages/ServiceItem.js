import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import dolar from "../assets/dolar.png";
import { useNavigate } from "react-router-dom";
import { SERVICE_ROUTE } from "../utils/consts";

const ServiceItem = ({ service }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(SERVICE_ROUTE + "/" + service.service_id)}
    >
      <Card
        style={{ cursor: 'pointer' }}
        className="h-100"
      >
        <Image
          className="card-img-top"
          src={process.env.REACT_APP_API_URL + service.image}
          alt={service.service_name}
        />
        <Card.Body className="d-flex flex-column">
          <div className="text-muted d-flex justify-content-between align-items-center">
            <div>{service.service_category}</div>
            <div className="d-flex align-items-center">
              <div className="mr-1">{service.price}</div>
              <Image width={18} height={18} src={dolar} alt="Dollar" />
            </div>
          </div>
          <Card.Title className="mt-2">{service.service_name}</Card.Title>
        </Card.Body>
        <Card.Footer className="bg-light text-muted d-flex justify-content-between">
          <div>
            <small>Category: {service.ServiceCategory.category_name}</small>
          </div>
          <div>
            <small className="text-info">More Info</small>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ServiceItem;
