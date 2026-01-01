import { displayWeatherData } from "./displayWeatherData";
import { fetchWeatherData } from "./fetchWeatherData";
import { loadDataPage } from "./loadDataPage";

export async function fetchAndLoad(location) {
    // function that shows a loading screen
    const response = await fetchWeatherData(location);
    // function that removes the loading screen
    console.log(response);
    loadDataPage();
    displayWeatherData(response);
}