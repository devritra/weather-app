import { displayWeatherData } from "./displayWeatherData";
import { fetchWeatherData } from "./fetchWeatherData";
import { loadDataPage } from "./loadDataPage";
import { showLoadingAssistOnDataPage, showLoadingAssistOnHomePage, stopShowingLoadingAssistOnDataPage } from "./loadingAssistFncs";
import { showWeatherTheme } from "./showWeatherTheme";
import { getCurrentPage } from "./storeStateOfPage";

export async function fetchAndLoad(location) {
    // function that shows a loading screen
    const currentPage = getCurrentPage();
    if(currentPage === 'data'){
        showLoadingAssistOnDataPage();
    }
    if(currentPage === 'home'){
        showLoadingAssistOnHomePage();
    }
    const response = await fetchWeatherData(location);
    // function that removes the loading screen
    if(currentPage === 'data'){
        stopShowingLoadingAssistOnDataPage();
    }
    if(response){
        console.log(response);
        if(currentPage === 'home'){
            loadDataPage();
        }
        showWeatherTheme(response);
        displayWeatherData(response);
    }
    return;
}