import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const FaqPage = () => {
  return (
    <Container>
    <Accordion className="mt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-primary text-white">
          Как заказать услуги уборки?
        </Accordion.Header>
        <Accordion.Body>
          Вы можете заказать услуги уборки через нашу онлайн форму заказа. Просто выберите тип уборки, указывайте дату и время, а затем заполните контактную информацию. После этого вы сможете подтвердить заказ.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header className="bg-primary text-white">
          Что включено в наши пакеты уборки?
        </Accordion.Header>
        <Accordion.Body>
          В наши пакеты уборки входят профессиональные уборочные средства, оборудование и опытные уборщики. Мы также предоставляем возможность выбора дополнительных услуг, таких как химчистка ковров, мойка окон и уборка после ремонта.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header className="bg-primary text-white">
          Какие материалы используются в процессе уборки?
        </Accordion.Header>
        <Accordion.Body>
          Мы используем экологически чистые уборочные средства, которые безопасны для здоровья и не оставляют вредных следов. Если у вас есть предпочтения по использованию определенных средств, сообщите нам, и мы постараемся учесть их.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header className="bg-primary text-white">
          Как оплатить услуги уборки?
        </Accordion.Header>
        <Accordion.Body>
          Оплата услуг уборки осуществляется онлайн через нашу систему. Мы принимаем различные виды платежей, включая кредитные карты. После завершения уборки вы получите квитанцию об оплате на вашу электронную почту.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
};

export default FaqPage;