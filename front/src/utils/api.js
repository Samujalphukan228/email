import axios from "axios";

const API = axios.create({
    baseURL: "https://email-backend-gray.vercel.app",
});

export const sendEmail = (data) => API.post("/send", data);
