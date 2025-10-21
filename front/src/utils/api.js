import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/email",
});

export const sendEmail = (data) => API.post("/send", data);
