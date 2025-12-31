import { fetchWeatherData } from "./fetchWeatherData";

export async function fetchAndLoad(location) {
    // function that shows a loading screen
    const response = await fetchWeatherData(location);
    // function that removes the loading screen
    console.log(response);
}