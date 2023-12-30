import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card, Badge } from "react-bootstrap";
import { getAllUserAppointments } from "../components/http/userApi";

import generatePDF from '../utils/generatePdf';

const UserProfile = () => {
    const [user, setUser] = useState();
    const [userAppointments, setAppointments] = useState();

    useEffect(() => {
        setUser(jwtDecode(localStorage.getItem('token')));
    }, []);

    useEffect(() => {
        if (user) {
            getAllUserAppointments(user.userId)
                .then((data) => {
                    setAppointments(data);
                })
        }
    }, [user]);

    const handleGeneratePDF = () => {
        const completedAppointments = userAppointments.filter(appointment => appointment.status === 'COMPLETED');
        generatePDF(completedAppointments);
    };

    return (
        <>
            <Container className="mt-2">
                <h4>Выполненные услуги</h4>
                <Button className='mt-2 mb-2' onClick={handleGeneratePDF}>
                    Сформировать отчет
                </Button>
                {userAppointments && userAppointments.length > 0 && userAppointments.filter(item => item.status === 'COMPLETED').length > 0 ? (
                    userAppointments
                        .filter(item => item.status === 'COMPLETED')
                        .map(item => (
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
                                    </Col>
                                </Row>
                            </Card>
                        ))
                ) : (
                    <Card className="mt-2">
                        <Card.Body>
                            <Card.Text>No completed appointments found.</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </>
    );
};

export default UserProfile;