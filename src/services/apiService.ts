import axios from "axios";

const BASE_URL = "https://datausa.io/api/data"; //TODO: add dotenv

export const fetchTaxData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}?drilldowns=Nation&measures=Income`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tax data:", error);
        throw error;
    }
};
