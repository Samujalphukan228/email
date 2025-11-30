import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const sendEmail = (data) => API.post("/send", data);
