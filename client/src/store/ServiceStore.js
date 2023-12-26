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
        img: "https://vitacleaning.ru/upload/medialibrary/fa6/fa6febf1f18e80738f68a09e800b3121.jpg",
      },
      {
        service_id: 2,
        service_name: "Уборка2",
        service_category_id: 2,
        description: "22222",
        price: 2,
        duration: 2,
        img: "https://storage01.tea.ru/medialibrary/070/07008345cecbe43dfae17bc13ff7b2c6/65c5b25c31d3e471542e523c0550dd36.jpg",
      },
      {
        service_id: 3,
        service_name: "Уборка3",
        service_category_id: 3,
        description: "333333",
        price: 3,
        duration: 3,
        img: "https://expert-cleaning.com/wp-content/uploads/2022/02/standartnaya.jpg",
      },
      {
        service_id: 4,
        service_name: "Уборка4",
        service_category_id: 3,
        description: "4444444",
        price: 4,
        duration: 4,
        img: "https://www.anatomiyasna.ru/uploads/images/article_images/statya-7-pravil-uborki-v-detskoi-1.jpg",
      },
      {
        service_id: 5,
        service_name: "Уборка4",
        service_category_id: 3,
        description: "4444444",
        price: 4,
        duration: 4,
        img: "https://www.anatomiyasna.ru/uploads/images/article_images/statya-7-pravil-uborki-v-detskoi-1.jpg",
      },
      {
        service_id: 6,
        service_name: "Уборка4",
        service_category_id: 3,
        description: "4444444",
        price: 4,
        duration: 4,
        img: "https://www.anatomiyasna.ru/uploads/images/article_images/statya-7-pravil-uborki-v-detskoi-1.jpg",
      },
      {
        service_id: 7,
        service_name: "Уборка4",
        service_category_id: 3,
        description: "4444444",
        price: 4,
        duration: 4,
        img: "https://www.anatomiyasna.ru/uploads/images/article_images/statya-7-pravil-uborki-v-detskoi-1.jpg",
      },
    ];
    this._servicesCategories = [];
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
