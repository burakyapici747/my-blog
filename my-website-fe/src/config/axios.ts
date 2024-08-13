import axios from "axios";

const baseUrl = "https://www.burakyapici.com/v1/api";

export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});
