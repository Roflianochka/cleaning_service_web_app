import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { fetchCategories, getAllServices } from "../components/http/serviceApi";
import ServiceItem from "./ServiceItem"

const ServicesPage = observer(() => {
  const [services, setServices] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const resetFilters = () => {
    setSortBy("");
    setCategoryFilter("");
    setSearchQuery("");
    setCityFilter("")
  };

  useEffect(() => {
    fetchCategories().then((data) => setServiceCategories(data));

    getAllServices().then((data) => {
      setServices(data);
    });
  }, []);

  const sortData = (data) => {
    if (sortBy === "price_asc") {
      return [...data].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      return [...data].sort((a, b) => b.price - a.price);
    } else {
      return data;
    }
  };

  const filterDataByCategory = (data) => {
    if (categoryFilter) {
      return data.filter((service) => service.ServiceCategory.category_name === categoryFilter);
    } else {
      return data;
    }
  };

  const searchData = (data) => {
    if (searchQuery || cityFilter) {
      return data.filter((service) =>
        service.service_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      return data;
    }
  };

  const sortedData = sortData(services);
  const filteredData = filterDataByCategory(sortedData);
  const searchedData = searchData(filteredData);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <Form>
            <Form.Label>Сортировать по цене:</Form.Label>
            <Form.Select
              style={{ cursor: "pointer" }}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Без сортировки</option>
              <option value="price_asc">По возрастанию</option>
              <option value="price_desc">По убыванию</option>
            </Form.Select>
          </Form>
          <Form>
            <Form.Label>Фильтр по категории:</Form.Label>
            <Form.Select
              style={{ cursor: "pointer" }}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">Все</option>
              {serviceCategories.map((e) => (
                <option key={e.service_category_id} value={e.category_name}>
                  {e.category_name}
                </option>
              ))}
            </Form.Select>
          </Form>
          <Form>
            <Form.Label>Поиск по названию:</Form.Label>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
          <Form className="mb-2 mt-2">
            <Button variant="secondary" onClick={() => resetFilters()}>
              Сбросить
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <Row className="d-flex">
            {searchedData.map((service) => (
              <ServiceItem key={service.service_id} service={service} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
});

export default ServicesPage;