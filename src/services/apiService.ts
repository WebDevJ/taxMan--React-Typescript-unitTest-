import axios from "axios";

const BASE_URL = "https://testapi-zehs.onrender.com"; //TODO: add dotenv

export const fetchTaxData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/nai`);
        console.log("data:", response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching tax data:", error);
        throw error;
    }
};
