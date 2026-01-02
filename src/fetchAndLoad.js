import { displayWeatherData } from "./displayWeatherData";
import { fetchWeatherData } from "./fetchWeatherData";
import { loadDataPage } from "./loadDataPage";
import { getCurrentPage } from "./storeStateOfPage";

export async function fetchAndLoad(location) {
    // function that shows a loading screen
    const response = await fetchWeatherData(location);
    // function that removes the loading screen
    if(response){
        console.log(response);
        const currentPage = getCurrentPage();
        if(currentPage === 'home'){
            loadDataPage();
        }
        displayWeatherData(response);
    }
    return;
}