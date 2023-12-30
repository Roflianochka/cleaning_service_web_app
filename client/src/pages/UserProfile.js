import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner, Card, Badge, Tabs, Tab } from "react-bootstrap";
import { getAllUserAppointments, deleteAppointment, createPayment } from "../components/http/userApi";

import { cancelAppointment } from "../components/http/userApi";
import UserPage from "../components/UserPage";

import generatePDF from '../utils/generatePdf';

const UserProfile = () => {
    const [user, setUser] = useState();
    const [userAppointments, setAppointments] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [filteredAppointments, setFilteredAppointments] = useState([])

    useEffect(() => {
        setUser(jwtDecode(localStorage.getItem('token')));
    }, []);

    const makePayment = async (appointmentId) => {
        try {
            const customerId = user.userId;
            await createPayment({ customer_id: customerId, appointment_id: appointmentId });
            getAllUserAppointments(user.userId).then((data) => {
                const filteredAppointments = data.filter(item => item.status !== 'COMPLETED');
                setAppointments(data);
                setFilteredAppointments(filteredAppointments)
            });
        } catch (error) {
            console.error('Error creating payment:', error);
        }
    };

    useEffect(() => {
        if (user) {
            getAllUserAppointments(user.userId)
                .then((data) => {
                    const filteredAppointments = data.filter(item => item.status !== 'COMPLETED');
                    setAppointments(data);
                    setFilteredAppointments(filteredAppointments);
                })
                .finally(() => setIsLoading(false))
        }
    }, [user]);
    

    const handleGeneratePDF = () => {
        generatePDF(userAppointments);
    };

    return (
        <>
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Container>
                    <h4>Профиль пользователя</h4>
                    <Tabs defaultActiveKey="appointments" id="user-tabs">
                        <Tab eventKey="appointments" title="Мои заказы">
                            {filteredAppointments.length > 0 ?

                                <Button className='mt-2 mb-2' onClick={handleGeneratePDF}>
                                    Сформировать отчет
                                </Button>
                                : <></>
                            }
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((item) => (
                                    <Card key={item.appointment_id} className="mb-3">
                                        <Row>
                                            <Col xs={4}>
                                                <Card.Img
                                                    variant="top"
                                                    className="img-fluid"
                                                    style={{ maxHeight: '100%', objectFit: 'cover' }}
                                                    src={process.env.REACT_APP_API_URL + `${item.Service.image}`}
                                                    alt={item.Service.name}
                                                />
                                            </Col>
                                            <Col xs={8}>
                                                <Card.Body>
                                                    <Card.Title>{item.Service.service_name}</Card.Title>
                                                    <Card.Text>
                                                        <div className="mb-2">
                                                            Дата записи: {new Date(item.appointment_datetime).toLocaleString()} <br />
                                                        </div>
                                                        <div>
                                                            Статус:{' '}
                                                            <Badge
                                                                bg={
                                                                    item.status === 'PAYMENT_NEEDED'
                                                                        ? 'warning'
                                                                        : item.status === 'COMPLETED'
                                                                            ? 'success'
                                                                            : item.status === 'IN_PROGRESS'
                                                                                ? 'primary'
                                                                                : 'danger'
                                                                }
                                                            >
                                                                {item.status}
                                                            </Badge>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                                {(() => {
                                                    switch (item.status) {
                                                        case 'PAYMENT_NEEDED':
                                                            return (
                                                                <>
                                                                    <Button
                                                                        variant="warning"
                                                                        onClick={() => {
                                                                            makePayment(item.appointment_id)
                                                                        }}
                                                                    >
                                                                        Произвести оплату
                                                                    </Button>
                                                                    <br />
                                                                    <Button
                                                                        variant='danger'
                                                                        onClick={() => {
                                                                            cancelAppointment(item.appointment_id).then(() => {
                                                                                getAllUserAppointments(user.userId).then((data) => {
                                                                                    setFilteredAppointments(data);
                                                                                });
                                                                            });
                                                                        }}
                                                                        className="mt-2"
                                                                    >
                                                                        Отменить
                                                                    </Button>
                                                                </>
                                                            );
                                                        case 'CANCELED':
                                                            return (
                                                                <>
                                                                    <Button
                                                                        variant={item.status === 'PAYMENT_NEEDED' ? 'danger' : 'primary'}
                                                                        onClick={() => {
                                                                            cancelAppointment(item.appointment_id).then(() => {
                                                                                getAllUserAppointments(user.userId).then((data) => {
                                                                                    setFilteredAppointments(data);
                                                                                });
                                                                            });
                                                                        }}
                                                                    >
                                                                        {item.status === 'PENDING' ? 'Отменить' : 'Восстановить'}
                                                                    </Button>
                                                                    <br />
                                                                    <Button
                                                                        className="mt-2"
                                                                        variant="danger"
                                                                        onClick={() => {
                                                                            deleteAppointment(item.appointment_id).then(() => {
                                                                                getAllUserAppointments(user.userId).then((data) => {
                                                                                    setFilteredAppointments(data);
                                                                                });
                                                                            });
                                                                        }}
                                                                    >
                                                                        Удалить
                                                                    </Button>
                                                                </>
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                })()}
                                            </Col>
                                        </Row>
                                    </Card>
                                ))
                            ) : (
                                <Card className="mt-2">
                                    <Card.Body>
                                        <Card.Text>Нет заказов.</Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </Tab>
                        <Tab eventKey="userInfo" title="Личная информация">
                            <UserPage />
                        </Tab>
                    </Tabs>
                </Container >
            )}
        </>
    );
};

export default UserProfile;