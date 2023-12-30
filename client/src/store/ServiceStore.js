import { makeAutoObservable } from "mobx";

export default class ServiceStore {
  constructor() {
    this._services = []
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
