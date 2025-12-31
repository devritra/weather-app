import { showError } from "./showError";

export async function fetchWeatherData(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&elements=add%3Aaqieur%2Cremove%3AdatetimeEpoch%2Cremove%3Adew%2Cremove%3Afeelslikemax%2Cremove%3Afeelslikemin%2Cremove%3Aicon%2Cremove%3Amoonphase%2Cremove%3Aname%2Cremove%3Aprecipcover%2Cremove%3Apreciptype%2Cremove%3Apressure%2Cremove%3Asolarenergy%2Cremove%3Asolarradiation%2Cremove%3Astations%2Cremove%3Auvindex&include=days&key=REA7E7U983BWPKC3YC7S55S25&contentType=json`;
    try{
        const response = await fetch(url);
        if(response.ok){
            const result = response.json();
            // currently logging it
            // gotta handle it later
            return result;
        } else if(!response.ok){
            showError(response);
        }
    } catch(error){
        console.log(error);
    }
}