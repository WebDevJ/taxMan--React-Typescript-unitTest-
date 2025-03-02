import axios from "axios";
import { fetchTaxData } from "../services/apiService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchTaxData", () => {
    it("fetches successfully from API", async () => {
        const mockData = { data: [{ Income: 55000 }] };
        mockedAxios.get.mockResolvedValue({ data: mockData });

        await expect(fetchTaxData()).resolves.toEqual(mockData);
    });

    it("handles API failure", async () => {
        mockedAxios.get.mockRejectedValue(new Error("Network Error"));
        await expect(fetchTaxData()).rejects.toThrow("Network Error");
    });
});
