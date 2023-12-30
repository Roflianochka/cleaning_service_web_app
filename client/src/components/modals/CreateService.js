import { useEffect, useState } from "react";
import { Modal, Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { createService, fetchCategories } from "../http/serviceApi";

const CreateService = ({ show, onHide }) => {
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isWindow, setIsWindow] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [serviceCategories, setServiceCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    fetchCategories().then((data) => setServiceCategories(data));
  }, [])

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddService = () => {
    const formData = new FormData();
    formData.append('service_name', serviceName);
    formData.append('service_category_id', selectedCategoryID);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', file);
    formData.append('duration', duration);
    formData.append('is_window', !isWindow);

    createService(formData)
      .then((response) => {
        console.log('Service added successfully:', response);
        onHide();
      })
      .catch((error) => {
        console.error('Error adding service:', error);
      });
  };

  const isAddServiceButtonDisabled = !serviceName.trim() || !selectedCategory || !description.trim() || !file || !price || !duration;

  const handleCategorySelect = (selectedCategoryId, categoryName) => {
    setSelectedCategoryID(selectedCategoryId)
    setSelectedCategory(categoryName);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую услугу
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="serviceName">
            <Form.Label>Название услуги</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите название услуги"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </Form.Group>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedCategory ? selectedCategory : 'Выберите категорию услуги'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {serviceCategories.map((servicesCategory) => (
                <Dropdown.Item
                  key={servicesCategory.service_category_id}
                  onClick={() =>
                    handleCategorySelect(
                      servicesCategory.service_category_id,
                      servicesCategory.category_name
                    )
                  }
                >
                  {servicesCategory.category_name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Group className="mt-3" controlId="">
            <Form.Label>Добавить фото</Form.Label>
            <Form.Control
              required
              type="file"
              onChange={selectFile}
              placeholder="Добавить фото..."
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Введите описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              placeholder="Введите цену"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.Label>Средняя длительность услуги</Form.Label>
            <Form.Control
              type="number"
              placeholder="Введите длительность"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="isWindowCheckbox" className="mt-2">
            <Form.Check
              type="checkbox"
              label="Использовать квадратные метры"
              checked={isWindow}
              onChange={(e) => setIsWindow(e.target.checked)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button
          variant="outline-success"
          onClick={handleAddService}
          disabled={isAddServiceButtonDisabled}
        >
          Добавить услугу
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateService;