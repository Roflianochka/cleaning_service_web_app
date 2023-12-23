import { makeAutoObservable } from "mobx";

export default class ServiceStore {
  constructor() {
    this._services = [
      {
        service_id: 1,
        service_name: "Уборка",
        service_category_id: 1,
        description: "1111",
        price: 1,
        duration: 1,
      },
      {
        service_id: 2,
        service_name: "Уборка2",
        service_category_id: 2,
        description: "22222",
        price: 2,
        duration: 2,
      },
      {
        service_id: 3,
        service_name: "Уборка3",
        service_category_id: 3,
        description: "333333",
        price: 3,
        duration: 3,
      },
      {
        service_id: 4,
        service_name: "Уборка4",
        service_category_id: 3,
        description: "4444444",
        price: 4,
        duration: 4,
      },
    ];
    this._servicesCategories = [
      {
        service_category_id: 1,
        category_name: "КатегорияУборка1",
        category_description: "фффффф",
      },
      {
        service_category_id: 2,
        category_name: "КатегорияУборка2",
        category_description: "ыыыыыыы",
      },
      {
        service_category_id: 3,
        category_name: "КатегорияУборка3",
        category_description: "ввввввввв",
      },
    ];
    this._selectedCategory = {};
    makeAutoObservable(this);
  }

  setServices(services) {
    this._services = services;
  }
  setServicesCategories(serviceCategories) {
    this._serviceCategories = serviceCategories;
  }
  setSelectedCategoty(category) {
    this._selectedCategory = category;
  }

  get services() {
    return this._services;
  }
  get servicesCategories() {
    return this._servicesCategories;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
}
