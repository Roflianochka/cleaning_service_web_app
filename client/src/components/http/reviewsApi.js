import { $authHost, $host } from "./index";

export const fetchReviews = async (id) => {
    const { data } = await $host.get("api/service/getReviews/" + id);
    return data;
};

export const addFeedback = async (review) => {
    const { data } = await $host.post("api/serviceReview/create", review);
    return data;
};

export const getOneReview = async (id) => {
    const { data } = await $host.get("api/serviceReview/getById/" + id);
    return data;
};

export const deleteReview = async (id) => {
    const { data } = await $host.delete("api/serviceReview/deleteById/" + id);
    return data;
};