function changeToF(elem){
    const value = elem.textContent.split(' ');
    const newValue = (value[0] * 9/5) + 32;
    elem.textContent = (Math.round(newValue * 100) / 100).toFixed(1) + ' ' + '°F';
    return;
}
function changeToC(elem){
    const value = elem.textContent.split(' ');
    const newValue = (value[0] - 32) * 5/9;
    elem.textContent = (Math.round(newValue * 100) / 100).toFixed(1) + ' ' + '°C';
    return;
}
export function changeTempUnitsToF(){
    const introTempDisplay = document.querySelector('.intro_temp_display');
    const tempMaxCardDataValue = document.querySelector('.tempmax_card .data_value');
    const tempMinCardDataValue = document.querySelector('.tempmin_card .data_value');
    const tempAvgCardDataValue = document.querySelector('.tempavg_card .data_value');
    const feelsLikeCardDataValue = document.querySelector('.feelslike_card .data_value');
    changeToF(introTempDisplay);
    changeToF(tempMaxCardDataValue);
    changeToF(tempMinCardDataValue);
    changeToF(tempAvgCardDataValue);
    changeToF(feelsLikeCardDataValue);
    return;
}
export function changeTempUnitsToC(){
    const introTempDisplay = document.querySelector('.intro_temp_display');
    const tempMaxCardDataValue = document.querySelector('.tempmax_card .data_value');
    const tempMinCardDataValue = document.querySelector('.tempmin_card .data_value');
    const tempAvgCardDataValue = document.querySelector('.tempavg_card .data_value');
    const feelsLikeCardDataValue = document.querySelector('.feelslike_card .data_value');
    changeToC(introTempDisplay);
    changeToC(tempMaxCardDataValue);
    changeToC(tempMinCardDataValue);
    changeToC(tempAvgCardDataValue);
    changeToC(feelsLikeCardDataValue);
    return;
}
