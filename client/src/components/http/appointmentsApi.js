import { $host } from "./index";

export const fetchPendingAppointments = async () => {
    const { data } = await $host.get("api/appointment/fetchPending/");
    return data;
};

export const AssignAppointment = async (info) => {
    const { data } = await $host.post("api/serviceAssign/assign/", info);
    return data;
};

export const GetAllAppointments = async () => {
    const { data } = await $host.get("api/appointment/getAll/");
    return data;
};

export const changeStatus = async (id) => {
    const { data } = await $host.put("api/appointment/updateById/" + id);
    return data;
};