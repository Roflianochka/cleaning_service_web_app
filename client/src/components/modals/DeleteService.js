import React, { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { Button, Form } from 'react-bootstrap';
import { deleteService, getAllServices } from "../http/serviceApi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteService = ({ show = false, onHide }) => {
    const [id, setId] = useState()
    const [services, setServices] = useState([])

    useEffect(() => {
        getAllServices().then(data => setServices(data))
        if (services.length === 1) {
            setId(services[0].service_id)
            console.log(services)
        }
    }, [show])

    const deleteFunction = () => {
        deleteService(id)
            .then((data) => {
                onHide();
                getAllServices().then(data => setServices(data))
                toast.success('Service deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch((error) => {
                console.error('Error deleting service:', error);
                toast.error('Error deleting service. Please try again.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Удалить услугу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select
                            style={{ cursor: "pointer" }}
                            value={id || ""}
                            onChange={(e) => { setId(e.target.value); console.log(e.target.value) }}
                        >
                            <option disabled value="">
                                Выберите услугу
                            </option>
                            {services.map((service) => (
                                <option
                                    key={service.service_id}
                                    value={service.service_id}
                                >
                                    {service.service_id}. {service.service_name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={deleteFunction}>
                        Удалить
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default DeleteService 