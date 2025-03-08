import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const API_BASE_URL = "https://sky-scanner3.p.rapidapi.com";
const API_KEY = process.env.RAPIDAPI_KEY; // Store in .env file
const API_HOST = "sky-scanner3.p.rapidapi.com";

if (!API_KEY) {
  throw new Error("Missing RAPIDAPI_KEY in .env file");
}

// Function to fetch round-trip flights
export const searchRoundTripFlights = async (fromEntityId: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/flights/search-roundtrip`,
      {
        params: { fromEntityId },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};
