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
    conditionCardDataName.textContent = 'Conditions'
    const conditionCardDataValue = document.createElement('p');
    conditionCardDataValue.classList.add('data_value');
    conditionCardDataValue.textContent = '500'
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
    tempMaxCardDataName.textContent = 'Maximum temperature';
    const tempMaxCardDataValue = document.createElement('p');
    tempMaxCardDataValue.classList.add('data_value');
    const tempMaxCardDataIcon = document.createElement('div');
    tempMaxCardDataIcon.classList.add('data_icon');
    const tempMaxCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    tempMaxCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const tempMaxCardDataIconTitle = document.createElement('title');
    tempMaxCardDataIconTitle.textContent = 'tempmax';
    const tempMaxCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    tempMaxCardDataIconPath.setAttribute('d','M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5H11A1 1 0 0 1 12 4Z');
    tempMaxCardDataIconSvg.appendChild(tempMaxCardDataIconTitle);
    tempMaxCardDataIconSvg.appendChild(tempMaxCardDataIconPath);
    tempMaxCardDataIcon.appendChild(tempMaxCardDataIconSvg);
    tempMaxCard.appendChild(tempMaxCardDataName);
    tempMaxCard.appendChild(tempMaxCardDataValue);
    tempMaxCard.appendChild(tempMaxCardDataIcon);

    const tempMinCard = document.createElement('div');
    tempMinCard.classList.add('tempmin_card');
    tempMinCard.classList.add('data_card');
    const tempMinCardDataName = document.createElement('p')
    tempMinCardDataName.classList.add('data_name');
    tempMinCardDataName.textContent = 'Minimum temperature';
    const tempMinCardDataValue = document.createElement('p');
    tempMinCardDataValue.classList.add('data_value');
    const tempMinCardDataIcon = document.createElement('div');
    tempMinCardDataIcon.classList.add('data_icon');
    const tempMinCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    tempMinCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const tempMinCardDataIconTitle = document.createElement('title');
    tempMinCardDataIconTitle.textContent = 'tempmin';
    const tempMinCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    tempMinCardDataIconPath.setAttribute('d','M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z');
    tempMinCardDataIconSvg.appendChild(tempMinCardDataIconTitle);
    tempMinCardDataIconSvg.appendChild(tempMinCardDataIconPath);
    tempMinCardDataIcon.appendChild(tempMinCardDataIconSvg);
    tempMinCard.appendChild(tempMinCardDataName);
    tempMinCard.appendChild(tempMinCardDataValue);
    tempMinCard.appendChild(tempMinCardDataIcon);

    const tempAvgCard = document.createElement('div');
    tempAvgCard.classList.add('tempavg_card');
    tempAvgCard.classList.add('data_card');
    const tempAvgCardDataName = document.createElement('p')
    tempAvgCardDataName.classList.add('data_name');
    tempAvgCardDataName.textContent = 'Average temperature';
    const tempAvgCardDataValue = document.createElement('p');
    tempAvgCardDataValue.classList.add('data_value');
    const tempAvgCardDataIcon = document.createElement('div');
    tempAvgCardDataIcon.classList.add('data_icon');
    const tempAvgCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    tempAvgCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const tempAvgCardDataIconTitle = document.createElement('title');
    tempAvgCardDataIconTitle.textContent = 'tempmin';
    const tempAvgCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    tempAvgCardDataIconPath.setAttribute('d','M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z');
    tempAvgCardDataIconSvg.appendChild(tempAvgCardDataIconTitle);
    tempAvgCardDataIconSvg.appendChild(tempAvgCardDataIconPath);
    tempAvgCardDataIcon.appendChild(tempAvgCardDataIconSvg);
    tempAvgCard.appendChild(tempAvgCardDataName);
    tempAvgCard.appendChild(tempAvgCardDataValue);
    tempAvgCard.appendChild(tempAvgCardDataIcon);

    const feelsLikeCard = document.createElement('div');
    feelsLikeCard.classList.add('feelslike_card');
    feelsLikeCard.classList.add('data_card');
    const feelsLikeCardDataName = document.createElement('p')
    feelsLikeCardDataName.classList.add('data_name');
    feelsLikeCardDataName.textContent = 'Feels like';
    const feelsLikeCardDataValue = document.createElement('p');
    feelsLikeCardDataValue.classList.add('data_value');
    const feelsLikeCardDataIcon = document.createElement('div');
    feelsLikeCardDataIcon.classList.add('data_icon');
    const feelsLikeCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    feelsLikeCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const feelsLikeCardDataIconTitle = document.createElement('title');
    feelsLikeCardDataIconTitle.textContent = 'tempmin';
    const feelsLikeCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    feelsLikeCardDataIconPath.setAttribute('d','M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z');
    feelsLikeCardDataIconSvg.appendChild(feelsLikeCardDataIconTitle);
    feelsLikeCardDataIconSvg.appendChild(feelsLikeCardDataIconPath);
    feelsLikeCardDataIcon.appendChild(feelsLikeCardDataIconSvg);
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
    humidityCardDataName.textContent = 'Humidity';
    const humidityCardDataValue = document.createElement('p');
    humidityCardDataValue.classList.add('data_value');
    const humidityCardDataIcon = document.createElement('div');
    humidityCardDataIcon.classList.add('data_icon');
    const humidityCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    humidityCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const humidityCardDataIconTitle = document.createElement('title');
    humidityCardDataIconTitle.textContent = 'tempmin';
    const humidityCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    humidityCardDataIconPath.setAttribute('d','M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z');
    humidityCardDataIconSvg.appendChild(humidityCardDataIconTitle);
    humidityCardDataIconSvg.appendChild(humidityCardDataIconPath);
    humidityCardDataIcon.appendChild(humidityCardDataIconSvg);
    humidityCard.appendChild(humidityCardDataName);
    humidityCard.appendChild(humidityCardDataValue);
    humidityCard.appendChild(humidityCardDataIcon);

    const cloudCoverCard = document.createElement('div');
    cloudCoverCard.classList.add('cloud_cover_card');
    cloudCoverCard.classList.add('data_card');
    const cloudCoverCardDataName = document.createElement('p')
    cloudCoverCardDataName.classList.add('data_name');
    cloudCoverCardDataName.textContent = 'Cloud cover';
    const cloudCoverCardDataValue = document.createElement('p');
    cloudCoverCardDataValue.classList.add('data_value');
    const cloudCoverCardDataIcon = document.createElement('div');
    cloudCoverCardDataIcon.classList.add('data_icon');
    const cloudCoverCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    cloudCoverCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const cloudCoverCardDataIconTitle = document.createElement('title');
    cloudCoverCardDataIconTitle.textContent = 'tempmin';
    const cloudCoverCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    cloudCoverCardDataIconPath.setAttribute('d','M21.86 12.5C21.1 11.63 20.15 11.13 19 11C19 9.05 18.32 7.4 16.96 6.04C15.6 4.68 13.95 4 12 4C10.42 4 9 4.47 7.75 5.43S5.67 7.62 5.25 9.15C4 9.43 2.96 10.08 2.17 11.1S1 13.28 1 14.58C1 16.09 1.54 17.38 2.61 18.43C3.69 19.5 5 20 6.5 20H18.5C19.75 20 20.81 19.56 21.69 18.69C22.56 17.81 23 16.75 23 15.5C23 14.35 22.62 13.35 21.86 12.5M20.27 17.27C19.79 17.76 19.2 18 18.5 18H6.5C5.53 18 4.71 17.66 4.03 17C3.34 16.29 3 15.47 3 14.5S3.34 12.71 4.03 12.03C4.71 11.34 5.53 11 6.5 11H7C7 9.62 7.5 8.44 8.46 7.46C9.44 6.5 10.62 6 12 6S14.56 6.5 15.54 7.46C16.5 8.44 17 9.62 17 11V13H18.5C19.2 13 19.79 13.24 20.27 13.73S21 14.8 21 15.5 20.76 16.79 20.27 17.27M8.03 10.45C8.03 9.67 8.67 9.03 9.45 9.03C10.23 9.03 10.87 9.67 10.87 10.45C10.87 11.23 10.23 11.87 9.45 11.87C8.67 11.87 8.03 11.23 8.03 10.45M15.97 15.55C15.97 16.33 15.33 16.97 14.55 16.97C13.77 16.97 13.13 16.33 13.13 15.55C13.13 14.77 13.77 14.13 14.55 14.13C15.33 14.13 15.97 14.77 15.97 15.55M14.8 9L16 10.2L9.2 17L8 15.8L14.8 9Z');
    cloudCoverCardDataIconSvg.appendChild(cloudCoverCardDataIconTitle);
    cloudCoverCardDataIconSvg.appendChild(cloudCoverCardDataIconPath);
    cloudCoverCardDataIcon.appendChild(cloudCoverCardDataIconSvg);
    cloudCoverCard.appendChild(cloudCoverCardDataName);
    cloudCoverCard.appendChild(cloudCoverCardDataValue);
    cloudCoverCard.appendChild(cloudCoverCardDataIcon);

    const visibilityCard = document.createElement('div');
    visibilityCard.classList.add('visbility_card');
    visibilityCard.classList.add('data_card');
    const visibilityCardDataName = document.createElement('p')
    visibilityCardDataName.classList.add('data_name');
    visibilityCardDataName.textContent = 'Visibility';
    const visibilityCardDataValue = document.createElement('p');
    visibilityCardDataValue.classList.add('data_value');
    const visibilityCardDataIcon = document.createElement('div');
    visibilityCardDataIcon.classList.add('data_icon');
    const visibilityCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    visibilityCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const visibilityCardDataIconTitle = document.createElement('title');
    visibilityCardDataIconTitle.textContent = 'tempmin';
    const visibilityCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    visibilityCardDataIconPath.setAttribute('d','M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z');
    visibilityCardDataIconSvg.appendChild(visibilityCardDataIconTitle);
    visibilityCardDataIconSvg.appendChild(visibilityCardDataIconPath);
    visibilityCardDataIcon.appendChild(visibilityCardDataIconSvg);
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
    precipitationTypeCardDataName.textContent = 'Precipitation type';
    const precipitationTypeCardDataValue = document.createElement('p');
    precipitationTypeCardDataValue.classList.add('data_value');
    const precipitationTypeCardDataIcon = document.createElement('div');
    precipitationTypeCardDataIcon.classList.add('data_icon');
    const precipitationTypeCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    precipitationTypeCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const precipitationTypeCardDataIconTitle = document.createElement('title');
    precipitationTypeCardDataIconTitle.textContent = 'tempmin';
    const precipitationTypeCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    precipitationTypeCardDataIconPath.setAttribute('d','M21.86 12.5C21.1 11.63 20.15 11.13 19 11C19 9.05 18.32 7.4 16.96 6.04C15.6 4.68 13.95 4 12 4C10.42 4 9 4.47 7.75 5.43S5.67 7.62 5.25 9.15C4 9.43 2.96 10.08 2.17 11.1S1 13.28 1 14.58C1 16.09 1.54 17.38 2.61 18.43C3.69 19.5 5 20 6.5 20H18.5C19.75 20 20.81 19.56 21.69 18.69C22.56 17.81 23 16.75 23 15.5C23 14.35 22.62 13.35 21.86 12.5M20.27 17.27C19.79 17.76 19.2 18 18.5 18H6.5C5.53 18 4.71 17.66 4.03 17C3.34 16.29 3 15.47 3 14.5S3.34 12.71 4.03 12.03C4.71 11.34 5.53 11 6.5 11H7C7 9.62 7.5 8.44 8.46 7.46C9.44 6.5 10.62 6 12 6S14.56 6.5 15.54 7.46C16.5 8.44 17 9.62 17 11V13H18.5C19.2 13 19.79 13.24 20.27 13.73S21 14.8 21 15.5 20.76 16.79 20.27 17.27M11 15H13V17H11V15M14.43 8.68C14.97 9.13 15.24 9.75 15.24 10.5C15.24 11 15.09 11.41 14.8 11.82C14.5 12.21 14.13 12.5 13.67 12.75C13.41 12.91 13.24 13.07 13.15 13.26C13.06 13.45 13 13.69 13 14H11C11 13.45 11.11 13.08 11.3 12.82C11.5 12.56 11.85 12.25 12.37 11.91C12.63 11.75 12.84 11.56 13 11.32C13.15 11.09 13.23 10.81 13.23 10.5C13.23 10.18 13.14 9.94 12.96 9.76C12.78 9.56 12.5 9.47 12.2 9.47C11.93 9.47 11.71 9.55 11.5 9.7C11.35 9.85 11.25 10.08 11.25 10.39H9.28C9.23 9.64 9.5 9 10.06 8.59C10.6 8.2 11.31 8 12.2 8C13.14 8 13.89 8.23 14.43 8.68Z');
    precipitationTypeCardDataIconSvg.appendChild(precipitationTypeCardDataIconTitle);
    precipitationTypeCardDataIconSvg.appendChild(precipitationTypeCardDataIconPath);
    precipitationTypeCardDataIcon.appendChild(precipitationTypeCardDataIconSvg);
    precipitationTypeCard.appendChild(precipitationTypeCardDataName);
    precipitationTypeCard.appendChild(precipitationTypeCardDataValue);
    precipitationTypeCard.appendChild(precipitationTypeCardDataIcon);

    const precipitationChanceCard = document.createElement('div');
    precipitationChanceCard.classList.add('precipitation_chance_card');
    precipitationChanceCard.classList.add('data_card');
    const precipitationChanceCardDataName = document.createElement('p')
    precipitationChanceCardDataName.classList.add('data_name');
    precipitationChanceCardDataName.textContent = 'Precipitation chance';
    const precipitationChanceCardDataValue = document.createElement('p');
    precipitationChanceCardDataValue.classList.add('data_value');
    const precipitationChanceCardDataIcon = document.createElement('div');
    precipitationChanceCardDataIcon.classList.add('data_icon');
    const precipitationChanceCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    precipitationChanceCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const precipitationChanceCardDataIconTitle = document.createElement('title');
    precipitationChanceCardDataIconTitle.textContent = 'tempmin';
    const precipitationChanceCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    precipitationChanceCardDataIconPath.setAttribute('d','M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13M13,12H11V8H13V12M13,16H11V14H13');
    precipitationChanceCardDataIconSvg.appendChild(precipitationChanceCardDataIconTitle);
    precipitationChanceCardDataIconSvg.appendChild(precipitationChanceCardDataIconPath);
    precipitationChanceCardDataIcon.appendChild(precipitationChanceCardDataIconSvg);
    precipitationChanceCard.appendChild(precipitationChanceCardDataName);
    precipitationChanceCard.appendChild(precipitationChanceCardDataValue);
    precipitationChanceCard.appendChild(precipitationChanceCardDataIcon);

    const precipitationVolCard = document.createElement('div');
    precipitationVolCard.classList.add('precipitation_vol_card');
    precipitationVolCard.classList.add('data_card');
    const precipitationVolCardDataName = document.createElement('p')
    precipitationVolCardDataName.classList.add('data_name');
    precipitationVolCardDataName.textContent = 'Precipitation';
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
    precipitationCoverCardDataName.textContent = 'Precipitation cover';
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
    snowfallCardDataName.textContent = 'Snow fall';
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
    snowDepthCardDataName.textContent = 'Snow depth';
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
    windSpeedCardDataName.textContent = 'Wind speed';
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
    windGustCardDataName.textContent = 'Wind gust';
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
    windDirectionCardDataName.textContent = 'Wind direction';
    const windDirectionCardDataValue = document.createElement('p');
    windDirectionCardDataValue.classList.add('data_value');
    const windDirectionCardDataIcon = document.createElement('div');
    windDirectionCardDataIcon.classList.add('data_icon');
    windDirectionCard.appendChild(windDirectionCardDataName);
    windDirectionCard.appendChild(windDirectionCardDataValue);
    windDirectionCard.appendChild(windDirectionCardDataIcon);

    const astronomyHeading = document.createElement('h2');
    astronomyHeading.classList.add('astronomy_heading');
    astronomyHeading.textContent = 'Astronomy';

    const sunriseCard = document.createElement('div');
    sunriseCard.classList.add('sunrise_card');
    sunriseCard.classList.add('data_card');
    const sunriseCardDataName = document.createElement('p')
    sunriseCardDataName.classList.add('data_name');
    sunriseCardDataName.textContent = 'Sunrise';
    const sunriseCardDataValue = document.createElement('p');
    sunriseCardDataValue.classList.add('data_value');
    const sunriseCardDataIcon = document.createElement('div');
    sunriseCardDataIcon.classList.add('data_icon');
    sunriseCard.appendChild(sunriseCardDataName);
    sunriseCard.appendChild(sunriseCardDataValue);
    sunriseCard.appendChild(sunriseCardDataIcon);

    const sunsetCard = document.createElement('div');
    sunsetCard.classList.add('sunset_card');
    sunsetCard.classList.add('data_card');
    const sunsetCardDataName = document.createElement('p')
    sunsetCardDataName.classList.add('data_name');
    sunsetCardDataName.textContent = 'Sunset';
    const sunsetCardDataValue = document.createElement('p');
    sunsetCardDataValue.classList.add('data_value');
    const sunsetCardDataIcon = document.createElement('div');
    sunsetCardDataIcon.classList.add('data_icon');
    sunsetCard.appendChild(sunsetCardDataName);
    sunsetCard.appendChild(sunsetCardDataValue);
    sunsetCard.appendChild(sunsetCardDataIcon);

    dataPageRight.appendChild(introData)
    dataPageRight.appendChild(conditionCard);
    dataPageRight.appendChild(tempHeading);
    dataPageRight.appendChild(tempMaxCard);
    dataPageRight.appendChild(tempMinCard);
    dataPageRight.appendChild(tempAvgCard);
    dataPageRight.appendChild(feelsLikeCard);
    dataPageRight.appendChild(humidityHeading);
    dataPageRight.appendChild(humidityCard);
    dataPageRight.appendChild(cloudCoverCard);
    dataPageRight.appendChild(visibilityCard);
    dataPageRight.appendChild(precipitationHeading);
    dataPageRight.appendChild(precipitationTypeCard);
    dataPageRight.appendChild(precipitationChanceCard);
    dataPageRight.appendChild(precipitationVolCard);
    dataPageRight.appendChild(precipitationCoverCard);
    dataPageRight.appendChild(snowfallCard);
    dataPageRight.appendChild(snowDepthCard);
    dataPageRight.appendChild(windHeading);
    dataPageRight.appendChild(windSpeedCard);
    dataPageRight.appendChild(windGustCard);
    dataPageRight.appendChild(windDirectionCard);
    dataPageRight.appendChild(astronomyHeading);
    dataPageRight.appendChild(sunriseCard);
    dataPageRight.appendChild(sunsetCard);
    // final appending
    dataPageHolder.appendChild(dataPageLeft);
    dataPageHolder.appendChild(dataPageRight);
    main.appendChild(dataPageHolder);
}