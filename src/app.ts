import { searchRoundTripFlights } from "./apiClient";

(async () => {
  try {
    const flights = await searchRoundTripFlights("PARI");
    console.log(flights);
  } catch (error) {
    console.error("Failed to fetch flights:", error);
  }
})();
