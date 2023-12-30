import { $authHost, $host } from "./index";

export const createAppointment = async (appointment) => {
  const { data } = await $host.post("api/appointment/create/", appointment);
  return data;
};

export const createService = async (service) => {
  const { data } = await $host.post("api/service/create/", service);
  return data;
};

export const createCategory = async (category) => {
  const { data } = await $authHost.post("api/serviceCategory/create", category);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await $host.get("api/serviceCategory/getAll");
  return data;
};

export const getAllServices = async () => {
  const { data } = await $host.get("api/service/getAll");
  return data;
};

export const fetchOneService = async (id) => {
  const { data } = await $host.get("api/service/getById/" + id);
  return data;
};

export const deleteService = async (id) => {
  const { data } = await $host.delete("api/service/deleteById/" + id);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await $host.delete("api/serviceCategory/deleteById/" + id);
  return data;
};

export const fetchCanReview = async (info) => {
  const { data } = await $host.post("api/service/canReview/", info);
  return data;
};