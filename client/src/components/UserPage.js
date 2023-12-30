import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../components/http/userApi';
import { jwtDecode } from 'jwt-decode';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { USER_COMPLETED_SERVICES_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken ? decodedToken.userId : null;

    const fetchUser = async () => {
        try {
            if (userId) {
                const userData = await getUserInfo(userId);
                setUser(userData);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    return (
        <Container className="mt-4">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="text-center">User Profile</Card.Title>
                    {user && user.user ? (
                        <>
                            <Row className="mb-3">
                                <Col xs={12} md={6}>
                                    <Card.Text>
                                        <strong>First Name:</strong> {user.user.first_name || 'N/A'}
                                    </Card.Text>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card.Text>
                                        <strong>Email:</strong> {user.user.email || 'N/A'}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Card.Text>
                                        <strong>Last Name:</strong> {user.user.last_name || 'N/A'}
                                    </Card.Text>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card.Text>
                                        <strong>Role:</strong> {user.user.role || 'N/A'}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <Card.Text>Loading user data...</Card.Text>
                    )}
                </Card.Body>
                <Card.Footer className="text-end">
                    <Button
                        className="me-2"
                        style={{ color: "white" }}
                        onClick={() => navigate(USER_COMPLETED_SERVICES_ROUTE)}
                        variant='primary'
                    >
                        Выполненные услуги
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default UserPage;
