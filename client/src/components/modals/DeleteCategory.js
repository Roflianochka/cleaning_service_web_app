import React, { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { Button, Form } from 'react-bootstrap';
import { deleteCategory, fetchCategories } from "../http/serviceApi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteCategory = ({ show = false, onHide }) => {
    const [id, setId] = useState()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories().then(data => setCategories(data))
    }, [])

    const deleteFunction = () => {
        deleteCategory(id)
            .then((data) => {
                onHide();
                fetchCategories().then(data => setCategories(data))
                toast.success('Category deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch((error) => {
                console.error('Error deleting category:', error);
                toast.error('Error deleting category. Please try again.', {
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
                    <Modal.Title>Удалить категорию</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select
                            style={{ cursor: "pointer" }}
                            value={id || ""}
                            onChange={(e) => { setId(e.target.value) }}
                        >
                            <option disabled value="">
                                Выберите услугу
                            </option>
                            {categories.map((category) => (
                                <option
                                    key={category.service_category_id}
                                    value={category.service_category_id}
                                >
                                    {category.service_category_id}. {category.category_name}
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

export default DeleteCategory 