export async function fetchWeatherData(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&elements=add%3Aaqieur%2Cremove%3AdatetimeEpoch%2Cremove%3Adew%2Cremove%3Afeelslikemax%2Cremove%3Afeelslikemin%2Cremove%3Aicon%2Cremove%3Amoonphase%2Cremove%3Aname%2Cremove%3Aprecipcover%2Cremove%3Apreciptype%2Cremove%3Apressure%2Cremove%3Asolarenergy%2Cremove%3Asolarradiation%2Cremove%3Astations%2Cremove%3Auvindex&include=days&key=REA7E7U983BWPKC3YC7S55S25&contentType=json`;
    try{
        const response = await fetch(url);
        if(response.ok){
            const result = response.json();
            // currently logging it
            // gotta handle it later
            return console.log(result);
        } else if(response.status === 400){
            console.log('Please provide a valid location name');
        } else if(response.status === 401){
            console.log('There is a problem with the API key, account or subscription. May also be returned if a feature is requested for which the account does not have access to.');
        } else if(response.status === 404){
            console.log('Sorry, we are unable to find any matches for this search');
        } else if(response.status === 439){
            console.log('Sorry, our request limit is over for today. Come back tommorow');
        } else if(response.status === 500){
            console.log('Server error: A general error has occurred processing the request.');
        }
    } catch(error){
        console.log(error);
    }
}