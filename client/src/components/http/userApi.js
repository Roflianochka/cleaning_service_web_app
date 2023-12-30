import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password, firstName, lastName) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    firstName,
    lastName
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const getUserInfo = async (id) => {
  const { data } = await $authHost.get("api/user/userInfo/" + id);
  return data;
};

export const getAllUserAppointments = async (id) => {
  const { data } = await $authHost.get("api/user/appointments/" + id);
  return data;
};

export const cancelAppointment = async (id) => {
  const { data } = await $authHost.get("api/user/appointments/cancel/" + id);
  return data;
};

export const deleteAppointment = async (id) => {
  const { data } = await $authHost.delete("api/appointment/deleteById/" + id);
  return data;
};

export const createPayment = async (payment) => {
  const { data } = await $authHost.post("api/payment/", payment);
  return data;
};