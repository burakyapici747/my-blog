import axios from "axios";

const baseUrl = "http://localhost:8080/v1/api";

export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});