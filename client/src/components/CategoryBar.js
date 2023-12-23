import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryBar = observer(() => {
  const { service } = useContext(Context);
  return (
    <ListGroup>
      {service.servicesCategories.map((servicesCategory) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={
            servicesCategory.service_category_id ===
            service.selectedCategory.service_category_id
          }
          onClick={() => service.setSelectedCategoty(servicesCategory)}
          key={servicesCategory.id}
        >
          {servicesCategory.category_name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default CategoryBar;
