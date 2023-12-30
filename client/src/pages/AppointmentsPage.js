import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { GetAllAppointments, changeStatus } from '../components/http/appointmentsApi';

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        try {
            GetAllAppointments().then((data) => {
                setAppointments(data);
            });
        } catch (e) {
            console.log(e);
        }
    }, []);

    const handleComplete = async (appointmentId) => {
        try {
            const updatedAppointment = await changeStatus(appointmentId);
            console.log('Appointment status updated:', updatedAppointment);
            GetAllAppointments().then((data) => {
                setAppointments(data);
            });
        } catch (error) {
            console.error('Error updating appointment status:', error.message);
        }
    };

    return (
        <Container className="mt-4">
            <h1>Заказы</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Цена</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments
                        .filter(appointment => appointment.status === 'IN_PROGRESS')
                        .map((appointment) => (
                            <tr key={appointment.appointment_id}>
                                <td>{appointment.appointment_id}</td>
                                <td>{appointment.User.first_name}</td>
                                <td>{appointment.User.last_name}</td>
                                <td>${appointment.price}</td>
                                <td>{appointment.status}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleComplete(appointment.appointment_id)} className="ms-2">
                                        Завершить
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AppointmentsPage;
