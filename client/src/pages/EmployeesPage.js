import React, { useState, useEffect } from 'react';
import { Table, Container, Button, Modal, Form } from 'react-bootstrap';
import { getAllEmployees, addEmployee, deleteEmployee, updateEmployee } from '../components/http/employeesApi';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        hourly_rate: '',
    });
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(newEmployee);

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedEmployee({
            first_name: '',
            last_name: '',
            phone: '',
            hourly_rate: '',
        });
    };

    const handleShowUpdateModal = (employee) => {
        setSelectedEmployee(employee);
        setShowUpdateModal(true);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setNewEmployee({
            first_name: '',
            last_name: '',
            phone: '',
            hourly_rate: '',
        });
    };

    const handleShowAddModal = () => setShowAddModal(true);

    const handleAddEmployee = async () => {
        try {
            const addedEmployee = await addEmployee(newEmployee);
            setEmployees((prevEmployees) => [...prevEmployees, addedEmployee]);
            handleCloseAddModal();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const handleDeleteEmployee = async (employeeId) => {
        try {
            await deleteEmployee(employeeId);
            setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.employee_id !== employeeId));
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const handleUpdateEmployee = async () => {
        try {
            const updated = await updateEmployee(selectedEmployee.employee_id, selectedEmployee);
            setEmployees((prevEmployees) =>
                prevEmployees.map((employee) => (employee.employee_id === selectedEmployee.employee_id ? updated : employee))
            );
            handleCloseUpdateModal()
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    useEffect(() => {
        try {
            getAllEmployees().then((data) => {
                setEmployees(data);
            });
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <Container className="mt-4">
            <h1>Работники</h1>
            <Button variant="success" className="mb-3" onClick={handleShowAddModal}>
                Добавить работника
            </Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Телефон</th>
                        <th>Часовая оплата</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employee_id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.phone}</td>
                            <td>${employee.hourly_rate}</td>
                            <td>
                                <Button variant="primary" className="ms-2" onClick={() => handleShowUpdateModal(employee)}>
                                    Изменить
                                </Button>
                                <br />
                                <br />
                                <Button variant="danger" className="ms-2" onClick={() => handleDeleteEmployee(employee.employee_id)}>
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить работника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите имя"
                                value={newEmployee.first_name}
                                onChange={(e) => setNewEmployee({ ...newEmployee, first_name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите фамилию"
                                value={newEmployee.last_name}
                                onChange={(e) => setNewEmployee({ ...newEmployee, last_name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите номер телефона"
                                value={newEmployee.phone}
                                onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Часовая оплата</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите часовую оплату"
                                value={newEmployee.hourly_rate}
                                onChange={(e) => setNewEmployee({ ...newEmployee, hourly_rate: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleAddEmployee}>
                        Добавить работника
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменить работника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                value={selectedEmployee.first_name || ''}
                                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, first_name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                value={selectedEmployee.last_name || ''}
                                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, last_name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter phone number"
                                value={selectedEmployee.phone || ''}
                                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, phone: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHourlyRate">
                            <Form.Label>Hourly Rate</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter hourly rate"
                                value={selectedEmployee.hourly_rate || ''}
                                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, hourly_rate: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdateModal}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleUpdateEmployee}>
                        Обновить данные
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default EmployeesPage;
