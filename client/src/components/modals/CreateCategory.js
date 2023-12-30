import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createCategory } from "../http/serviceApi";

const CreateService = ({ show, onHide }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('')

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCategoryDescriptionChange = (e) => {
    setCategoryDescription(e.target.value);
  };

  const isAddButtonDisabled = !categoryName.trim() || !categoryDescription.trim();

  const addCategory = async () => {
    try {
      await createCategory({
        category_name: categoryName,
        category_description: categoryDescription
      })
      onHide()
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую категорию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Введите название категории"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </Form>
        <Form>
          <Form.Control
            as="textarea"
            className="mt-2"
            placeholder="Введите описание категории"
            value={categoryDescription}
            onChange={handleCategoryDescriptionChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button
          variant="outline-success"
          onClick={addCategory}
          disabled={isAddButtonDisabled}
        >
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateService;
