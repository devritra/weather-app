export function loadDataPage(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    // data page holder
    const dataPageHolder = document.createElement('div');
    dataPageHolder.classList.add('data_page_holder');
    // data page left
    const dataPageLeft = document.createElement('div');
    dataPageLeft.classList.add('data_page_left');

    const homeBtnSvgHolder = document.createElement('div');
    homeBtnSvgHolder.classList.add('home_btn_svg_holder');
    const homeBtnSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    homeBtnSvg.setAttribute('viewBox','0 0 24 24');
    const homeBtnSvgTitle = document.createElement('title');
    homeBtnSvgTitle.textContent = 'Home';
    const homeBtnSvgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    homeBtnSvgPath.setAttribute('d','M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22');
    homeBtnSvg.appendChild(homeBtnSvgTitle);
    homeBtnSvg.appendChild(homeBtnSvgPath);
    homeBtnSvgHolder.appendChild(homeBtnSvg);

    const dataPageSearchSection = document.createElement('div');
    dataPageSearchSection.classList.add('data_page_search_section');
    const dataPageSearchForm = document.createElement('form');
    dataPageSearchForm.classList.add('data_page_search_form');
    dataPageSearchForm.action = '#';
    const dataPageSearchInput = document.createElement('input');
    dataPageSearchInput.type = 'search';
    dataPageSearchInput.classList.add('data_page_search_input');
    dataPageSearchInput.name = 'search';
    dataPageSearchInput.placeholder = 'Search...';
    const dataPageSearchBtn = document.createElement('button');
    dataPageSearchBtn.classList.add('data_page_search_btn');
    dataPageSearchBtn.dataset.action = 'fetch_and_load';
    const dataPageSearchSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    dataPageSearchSvg.setAttribute('viewBox', '0 0 24 24');
    const svgTitle = document.createElement('title');
    svgTitle.textContent = 'magnify';
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    svgPath.setAttribute('d','M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z');
    dataPageSearchSvg.appendChild(svgTitle);
    dataPageSearchSvg.appendChild(svgPath);
    dataPageSearchBtn.appendChild(dataPageSearchSvg);
    dataPageSearchForm.appendChild(dataPageSearchInput);
    dataPageSearchForm.appendChild(dataPageSearchBtn);
    dataPageSearchSection.appendChild(dataPageSearchForm);
    
    const assistDisplay = document.createElement('p');
    assistDisplay.classList.add('assist_display');

    const changeUnitBtnHolder = document.createElement('div');
    changeUnitBtnHolder.classList.add('change_unit_btn_holder');
    const labelForChangeUnitCheckBox = document.createElement('label');
    labelForChangeUnitCheckBox.htmlFor = 'change_unit';
    labelForChangeUnitCheckBox.textContent = 'Show temperature in °F';
    const changeUnitCheckBox = document.createElement('input');
    changeUnitCheckBox.type = 'checkbox';
    changeUnitCheckBox.name = 'change_unit';
    changeUnitCheckBox.id = 'change_unit';
    changeUnitBtnHolder.appendChild(labelForChangeUnitCheckBox);
    changeUnitBtnHolder.appendChild(changeUnitCheckBox);

    dataPageLeft.appendChild(homeBtnSvgHolder);
    dataPageLeft.appendChild(dataPageSearchSection);
    dataPageLeft.appendChild(assistDisplay);
    dataPageLeft.appendChild(changeUnitBtnHolder);
    // data page right
    const dataPageRight = document.createElement('div');
    dataPageRight.classList.add('data_page_right');

    const introData = document.createElement('div');
    introData.classList.add('intro_data');
    const introTop = document.createElement('div');
    introTop.classList.add('intro_top');
    const introTempDisplay = document.createElement('p');
    introTempDisplay.classList.add('intro_temp_display');
    const introBottom = document.createElement('div');
    introBottom.classList.add('intro_bottom');
    const introLocationInfoHolder = document.createElement('div');
    introLocationInfoHolder.classList.add('intro_location_info_holder');
    const locationName = document.createElement('p');
    const locationDateAndTime = document.createElement('p');
    const introIconHolder = document.createElement('div');
    introIconHolder.classList.add('intro_icon_holder');
    introTop.appendChild(introTempDisplay);
    introLocationInfoHolder.appendChild(locationName);
    introLocationInfoHolder.appendChild(locationDateAndTime);
    introBottom.appendChild(introLocationInfoHolder);
    introBottom.appendChild(introIconHolder);
    introData.appendChild(introTop);
    introData.appendChild(introBottom);

    const conditionCard = document.createElement('div');
    conditionCard.classList.add('condition_card');
    conditionCard.classList.add('data_card');
    const conditionCardDataName = document.createElement('p')
    conditionCardDataName.classList.add('data_name');
    const conditionCardDataValue = document.createElement('p');
    conditionCardDataValue.classList.add('data_value');
    const conditionCardDataIcon = document.createElement('div');
    conditionCardDataIcon.classList.add('data_icon');
    conditionCard.appendChild(conditionCardDataName);
    conditionCard.appendChild(conditionCardDataValue);
    conditionCard.appendChild(conditionCardDataIcon);

    const tempHeading = document.createElement('h2');
    tempHeading.classList.add('temp_heading');
    tempHeading.textContent = 'Temperature';

    const tempMaxCard = document.createElement('div');
    tempMaxCard.classList.add('tempmax_card');
    tempMaxCard.classList.add('data_card');
    const tempMaxCardDataName = document.createElement('p')
    tempMaxCardDataName.classList.add('data_name');
    const tempMaxCardDataValue = document.createElement('p');
    tempMaxCardDataValue.classList.add('data_value');
    const tempMaxCardDataIcon = document.createElement('div');
    tempMaxCardDataIcon.classList.add('data_icon');
    tempMaxCard.appendChild(tempMaxCardDataName);
    tempMaxCard.appendChild(tempMaxCardDataValue);
    tempMaxCard.appendChild(tempMaxCardDataIcon);

    const tempMinCard = document.createElement('div');
    tempMinCard.classList.add('tempmin_card');
    tempMinCard.classList.add('data_card');
    const tempMinCardDataName = document.createElement('p')
    tempMinCardDataName.classList.add('data_name');
    const tempMinCardDataValue = document.createElement('p');
    tempMinCardDataValue.classList.add('data_value');
    const tempMinCardDataIcon = document.createElement('div');
    tempMinCardDataIcon.classList.add('data_icon');
    tempMinCard.appendChild(tempMinCardDataName);
    tempMinCard.appendChild(tempMinCardDataValue);
    tempMinCard.appendChild(tempMinCardDataIcon);

    const tempAvgCard = document.createElement('div');
    tempAvgCard.classList.add('tempavg_card');
    tempAvgCard.classList.add('data_card');
    const tempAvgCardDataName = document.createElement('p')
    tempAvgCardDataName.classList.add('data_name');
    const tempAvgCardDataValue = document.createElement('p');
    tempAvgCardDataValue.classList.add('data_value');
    const tempAvgCardDataIcon = document.createElement('div');
    tempAvgCardDataIcon.classList.add('data_icon');
    tempAvgCard.appendChild(tempAvgCardDataName);
    tempAvgCard.appendChild(tempAvgCardDataValue);
    tempAvgCard.appendChild(tempAvgCardDataIcon);

    const feelsLikeCard = document.createElement('div');
    feelsLikeCard.classList.add('feelslike_card');
    feelsLikeCard.classList.add('data_card');
    const feelsLikeCardDataName = document.createElement('p')
    feelsLikeCardDataName.classList.add('data_name');
    const feelsLikeCardDataValue = document.createElement('p');
    feelsLikeCardDataValue.classList.add('data_value');
    const feelsLikeCardDataIcon = document.createElement('div');
    feelsLikeCardDataIcon.classList.add('data_icon');
    feelsLikeCard.appendChild(feelsLikeCardDataName);
    feelsLikeCard.appendChild(feelsLikeCardDataValue);
    feelsLikeCard.appendChild(feelsLikeCardDataIcon);

    const humidityHeading = document.createElement('h2');
    humidityHeading.classList.add('humidity_heading');
    humidityHeading.textContent = 'Humidity & Clouds';

    const humidityCard = document.createElement('div');
    humidityCard.classList.add('humidity_card');
    humidityCard.classList.add('data_card');
    const humidityCardDataName = document.createElement('p')
    humidityCardDataName.classList.add('data_name');
    const humidityCardDataValue = document.createElement('p');
    humidityCardDataValue.classList.add('data_value');
    const humidityCardDataIcon = document.createElement('div');
    humidityCardDataIcon.classList.add('data_icon');
    humidityCard.appendChild(humidityCardDataName);
    humidityCard.appendChild(humidityCardDataValue);
    humidityCard.appendChild(humidityCardDataIcon);

    const cloudCoverCard = document.createElement('div');
    cloudCoverCard.classList.add('cloud_cover_card');
    cloudCoverCard.classList.add('data_card');
    const cloudCoverCardDataName = document.createElement('p')
    cloudCoverCardDataName.classList.add('data_name');
    const cloudCoverCardDataValue = document.createElement('p');
    cloudCoverCardDataValue.classList.add('data_value');
    const cloudCoverCardDataIcon = document.createElement('div');
    cloudCoverCardDataIcon.classList.add('data_icon');
    cloudCoverCard.appendChild(cloudCoverCardDataName);
    cloudCoverCard.appendChild(cloudCoverCardDataValue);
    cloudCoverCard.appendChild(cloudCoverCardDataIcon);

    const visibilityCard = document.createElement('div');
    visibilityCard.classList.add('visbility_card');
    visibilityCard.classList.add('data_card');
    const visibilityCardDataName = document.createElement('p')
    visibilityCardDataName.classList.add('data_name');
    const visibilityCardDataValue = document.createElement('p');
    visibilityCardDataValue.classList.add('data_value');
    const visibilityCardDataIcon = document.createElement('div');
    visibilityCardDataIcon.classList.add('data_icon');
    visibilityCard.appendChild(visibilityCardDataName);
    visibilityCard.appendChild(visibilityCardDataValue);
    visibilityCard.appendChild(visibilityCardDataIcon);

    const precipitationHeading = document.createElement('h2');
    precipitationHeading.classList.add('precipitation_heading');
    precipitationHeading.textContent = 'Precipitation';

    const precipitationTypeCard = document.createElement('div');
    precipitationTypeCard.classList.add('precipitation_type_card');
    precipitationTypeCard.classList.add('data_card');
    const precipitationTypeCardDataName = document.createElement('p')
    precipitationTypeCardDataName.classList.add('data_name');
    const precipitationTypeCardDataValue = document.createElement('p');
    precipitationTypeCardDataValue.classList.add('data_value');
    const precipitationTypeCardDataIcon = document.createElement('div');
    precipitationTypeCardDataIcon.classList.add('data_icon');
    precipitationTypeCard.appendChild(precipitationTypeCardDataName);
    precipitationTypeCard.appendChild(precipitationTypeCardDataValue);
    precipitationTypeCard.appendChild(precipitationTypeCardDataIcon);

    const precipitationChanceCard = document.createElement('div');
    precipitationChanceCard.classList.add('precipitation_chance_card');
    precipitationChanceCard.classList.add('data_card');
    const precipitationChanceCardDataName = document.createElement('p')
    precipitationChanceCardDataName.classList.add('data_name');
    const precipitationChanceCardDataValue = document.createElement('p');
    precipitationChanceCardDataValue.classList.add('data_value');
    const precipitationChanceCardDataIcon = document.createElement('div');
    precipitationChanceCardDataIcon.classList.add('data_icon');
    precipitationChanceCard.appendChild(precipitationChanceCardDataName);
    precipitationChanceCard.appendChild(precipitationChanceCardDataValue);
    precipitationChanceCard.appendChild(precipitationChanceCardDataIcon);

    const precipitationVolCard = document.createElement('div');
    precipitationVolCard.classList.add('precipitation_vol_card');
    precipitationVolCard.classList.add('data_card');
    const precipitationVolCardDataName = document.createElement('p')
    precipitationVolCardDataName.classList.add('data_name');
    const precipitationVolCardDataValue = document.createElement('p');
    precipitationVolCardDataValue.classList.add('data_value');
    const precipitationVolCardDataIcon = document.createElement('div');
    precipitationVolCardDataIcon.classList.add('data_icon');
    precipitationVolCard.appendChild(precipitationVolCardDataName);
    precipitationVolCard.appendChild(precipitationVolCardDataValue);
    precipitationVolCard.appendChild(precipitationVolCardDataIcon);

    const precipitationCoverCard = document.createElement('div');
    precipitationCoverCard.classList.add('precipitation_cover_card');
    precipitationCoverCard.classList.add('data_card');
    const precipitationCoverCardDataName = document.createElement('p')
    precipitationCoverCardDataName.classList.add('data_name');
    const precipitationCoverCardDataValue = document.createElement('p');
    precipitationCoverCardDataValue.classList.add('data_value');
    const precipitationCoverCardDataIcon = document.createElement('div');
    precipitationCoverCardDataIcon.classList.add('data_icon');
    precipitationCoverCard.appendChild(precipitationCoverCardDataName);
    precipitationCoverCard.appendChild(precipitationCoverCardDataValue);
    precipitationCoverCard.appendChild(precipitationCoverCardDataIcon);

    const snowfallCard = document.createElement('div');
    snowfallCard.classList.add('snowfall_card');
    snowfallCard.classList.add('data_card');
    const snowfallCardDataName = document.createElement('p')
    snowfallCardDataName.classList.add('data_name');
    const snowfallCardDataValue = document.createElement('p');
    snowfallCardDataValue.classList.add('data_value');
    const snowfallCardDataIcon = document.createElement('div');
    snowfallCardDataIcon.classList.add('data_icon');
    snowfallCard.appendChild(snowfallCardDataName);
    snowfallCard.appendChild(snowfallCardDataValue);
    snowfallCard.appendChild(snowfallCardDataIcon);

    const snowDepthCard = document.createElement('div');
    snowDepthCard.classList.add('snow_depth_card');
    snowDepthCard.classList.add('data_card');
    const snowDepthCardDataName = document.createElement('p')
    snowDepthCardDataName.classList.add('data_name');
    const snowDepthCardDataValue = document.createElement('p');
    snowDepthCardDataValue.classList.add('data_value');
    const snowDepthCardDataIcon = document.createElement('div');
    snowDepthCardDataIcon.classList.add('data_icon');
    snowDepthCard.appendChild(snowDepthCardDataName);
    snowDepthCard.appendChild(snowDepthCardDataValue);
    snowDepthCard.appendChild(snowDepthCardDataIcon);

    const windHeading = document.createElement('h2');
    windHeading.classList.add('wind_heading');
    windHeading.textContent = 'Wind & Pressure';

    const windSpeedCard = document.createElement('div');
    windSpeedCard.classList.add('wind_speed_card');
    windSpeedCard.classList.add('data_card');
    const windSpeedCardDataName = document.createElement('p')
    windSpeedCardDataName.classList.add('data_name');
    const windSpeedCardDataValue = document.createElement('p');
    windSpeedCardDataValue.classList.add('data_value');
    const windSpeedCardDataIcon = document.createElement('div');
    windSpeedCardDataIcon.classList.add('data_icon');
    windSpeedCard.appendChild(windSpeedCardDataName);
    windSpeedCard.appendChild(windSpeedCardDataValue);
    windSpeedCard.appendChild(windSpeedCardDataIcon);

    const windGustCard = document.createElement('div');
    windGustCard.classList.add('wind_gust_card');
    windGustCard.classList.add('data_card');
    const windGustCardDataName = document.createElement('p')
    windGustCardDataName.classList.add('data_name');
    const windGustCardDataValue = document.createElement('p');
    windGustCardDataValue.classList.add('data_value');
    const windGustCardDataIcon = document.createElement('div');
    windGustCardDataIcon.classList.add('data_icon');
    windGustCard.appendChild(windGustCardDataName);
    windGustCard.appendChild(windGustCardDataValue);
    windGustCard.appendChild(windGustCardDataIcon);

    const windDirectionCard = document.createElement('div');
    windDirectionCard.classList.add('wind_direction_card');
    windDirectionCard.classList.add('data_card');
    const windDirectionCardDataName = document.createElement('p')
    windDirectionCardDataName.classList.add('data_name');
    const windDirectionCardDataValue = document.createElement('p');
    windDirectionCardDataValue.classList.add('data_value');
    const windDirectionCardDataIcon = document.createElement('div');
    windDirectionCardDataIcon.classList.add('data_icon');
    windDirectionCard.appendChild(windDirectionCardDataName);
    windDirectionCard.appendChild(windDirectionCardDataValue);
    windDirectionCard.appendChild(windDirectionCardDataIcon);
}