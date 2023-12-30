import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createAppointment, fetchCanReview, fetchOneService } from "../components/http/serviceApi";
import { jwtDecode } from "jwt-decode";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReviewsSection from '../components/ReviewsSection'
import ReviewModal from "../components/modals/ReviewModal";

import { getAllAvailableEmployees } from '../components/http/employeesApi';
import { AssignAppointment } from '../components/http/appointmentsApi';

const ServicePage = () => {
  const [canReview, setCanReview] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedEmployeeName, setSelectedEmployeeName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const [service, setService] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reviewModal, setReviewModal] = useState(false)
  const [numberOf, setNumberOf] = useState(null);
  const [squareMeters, setSquareMeters] = useState(null);

  const calculateUpdatedPrice = () => {
    const updatedPrice = service.price + numberOf * 10 + squareMeters * 5;
    return updatedPrice;
  };

  const updatedPrice = calculateUpdatedPrice();
  const token = localStorage.getItem('token');
  let userId;

  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken?.userId;
  } else {
    console.error('Token is not present in localStorage');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceData = await fetchOneService(id);
        setService(serviceData);

        const reviewStatus = await fetchCanReview({ userId, serviceId: id });
        setCanReview(reviewStatus.canReview);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    fetchData();
  }, [id, userId]);

  useEffect(() => {
    fetchEmployees();
  }, [showModal]);

  const fetchEmployees = async () => {
    try {
      const data = await getAllAvailableEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAssignButtonClick = async () => {
    try {
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching pending appointments:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmployeeChange = (e) => {
    const selectedEmployeeId = parseInt(e.target.value);
    setSelectedEmployee(selectedEmployeeId);

    const selectedEmployeeObj = employees.find((employee) => employee.employee_id === selectedEmployeeId);

    setSelectedEmployeeName(selectedEmployeeObj ? `${selectedEmployeeObj.first_name} ${selectedEmployeeObj.last_name}` : '');
  };

  const makeOrder = () => {
    const date = selectedDate.toISOString()
    const orderData = {
      user_id: userId,
      service_id: parseInt(id),
      appointment_datetime: date,
      price: updatedPrice
    };

    createAppointment(orderData)
      .then((response) => {
        AssignAppointment({ employeeId: selectedEmployee, serviceId: id, user_id: userId, appointment_id: response.appointment_id, assignment_date: date });

      }
      )

    toast.success('Заказ успешно создан!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="mt-4">
          <Col md={4}>
            <Image
              className="img-fluid rounded"
              src={process.env.REACT_APP_API_URL + service.image}
              alt={service.service_name}
            />
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center">
            <h2 className="mb-3">{service.service_name}</h2>
            <Form>
              {service.is_window ?
                <Form.Group className="mb-3">
                  <Form.Label>Количество</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Количество"
                    value={numberOf}
                    onChange={(e) => setNumberOf(Math.max(0, e.target.value))}
                  />
                </Form.Group>
                :
                <Form.Group className="mb-3">
                  <Form.Label>Количество квадратных метров</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Количество квадратных метров"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(Math.max(0, e.target.value))}
                  />
                </Form.Group>
              }
            </Form>
          </Col>
          <Col md={4}>
            <Card className="p-4">
              <h3 className="mb-4">Price: {updatedPrice} USD</h3>
              <Form.Group className="mb-3">
                <Form.Label>Дата и Время:</Form.Label> <br />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm"
                  timeCaption="Time"
                  minDate={new Date()}
                  className="form-control"
                />
              </Form.Group>
              {userId ?

                <>
                  <br />
                  {selectedEmployee ?
                    <>
                      <Button variant="outline-dark" onClick={makeOrder}>
                        Заказать
                      </Button>
                      <br />
                    </>
                    :
                    <></>
                  }
                  {!selectedEmployee ?

                    <Button variant="primary" onClick={() => handleAssignButtonClick()}>
                      Выбрать работника
                    </Button>
                    :
                    <Button variant="primary" onClick={() => handleAssignButtonClick()}>
                      {selectedEmployeeName}
                    </Button>

                  }
                </>

                :
                <></>
              }
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column mt-3">
          <h1>Описание</h1>
          <Card style={{ fontSize: '18px', padding: '20px', border: '1px solid lightgray' }}>
            {service.description || 'No description available'}
          </Card>
        </Row>
        <Row className="d-flex flex-column mt-3">
          <h1>Отзывы</h1>
          {userId && canReview ? (
            <Button className="mb-2" variant="primary" onClick={() => setReviewModal(true)}>
              Добавить отзыв
            </Button>
          ) : (
            <></>
          )}
          <ReviewsSection serviceId={id} />
        </Row>
      </Container>
      <ReviewModal show={reviewModal} hide={() => setReviewModal(false)} id={service && service.service_id} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Выберите работника</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="employeeSelect">
              <Form.Label>Выберите работника:</Form.Label>
              <Form.Control as="select" onChange={handleEmployeeChange} value={selectedEmployee}>
                <option value="">Выберите работника</option>
                {employees.map((employee) => (
                  <option key={employee.employee_id} value={employee.employee_id}>
                    {`${employee.first_name} ${employee.last_name}`}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Выбрать
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default ServicePage;
