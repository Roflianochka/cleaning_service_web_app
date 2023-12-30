import { $host } from "./index";

export const getAllEmployees = async () => {
    const { data } = await $host.get("api/employee/getAll/");
    return data;
};

export const getAllAvailableEmployees = async () => {
    const { data } = await $host.get("api/employee/getAllAvailable/");
    return data;
};

export const addEmployee = async (employee) => {
    const { data } = await $host.post("api/employee/create/", employee);
    return data;
};

export const deleteEmployee = async (id) => {
    const { data } = await $host.delete("api/employee/deleteById/" + id);
    return data;
};

export const updateEmployee = async (id, employee) => {
    const { data } = await $host.put("api/employee/updateById/" + id, employee);
    return data;
};