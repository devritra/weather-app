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
    dataPageSearchBtn.dataset.action = 'data_fetch_and_load';
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
    const precipitationVolCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    precipitationVolCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const precipitationVolCardDataIconTitle = document.createElement('title');
    precipitationVolCardDataIconTitle.textContent = 'tempmin';
    const precipitationVolCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    precipitationVolCardDataIconPath.setAttribute('d','M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z');
    precipitationVolCardDataIconSvg.appendChild(precipitationVolCardDataIconTitle);
    precipitationVolCardDataIconSvg.appendChild(precipitationVolCardDataIconPath);
    precipitationVolCardDataIcon.appendChild(precipitationVolCardDataIconSvg);
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
    const precipitationCoverCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    precipitationCoverCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const precipitationCoverCardDataIconTitle = document.createElement('title');
    precipitationCoverCardDataIconTitle.textContent = 'tempmin';
    const precipitationCoverCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    precipitationCoverCardDataIconPath.setAttribute('d','M19.19 12.07C19.69 11.54 20 10.82 20 10C20 8.3 18.7 6.84 17 6.84H14.2C14.2 4.17 12.03 2 9.36 2C7.31 2 5.56 3.28 4.85 5.08C2.72 5.14 1 6.89 1 9.04C1 11.22 2.78 13 4.96 13H8.1C8.04 13.33 8 13.66 8 14H7.5C5.57 14 4 15.57 4 17.5S5.57 21 7.5 21H18.5C21 21 23 19 23 16.5C23 14.26 21.34 12.41 19.19 12.07M18.5 19H7.5C6.67 19 6 18.33 6 17.5S6.67 16 7.5 16H10V14C10 12.07 11.57 10.5 13.5 10.5S17 12.07 17 14H18.5C19.88 14 21 15.12 21 16.5S19.88 19 18.5 19Z');
    precipitationCoverCardDataIconSvg.appendChild(precipitationCoverCardDataIconTitle);
    precipitationCoverCardDataIconSvg.appendChild(precipitationCoverCardDataIconPath);
    precipitationCoverCardDataIcon.appendChild(precipitationCoverCardDataIconSvg);
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
    const snowfallCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    snowfallCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const snowfallCardDataIconTitle = document.createElement('title');
    snowfallCardDataIconTitle.textContent = 'tempmin';
    const snowfallCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    snowfallCardDataIconPath.setAttribute('d','M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z');
    snowfallCardDataIconSvg.appendChild(snowfallCardDataIconTitle);
    snowfallCardDataIconSvg.appendChild(snowfallCardDataIconPath);
    snowfallCardDataIcon.appendChild(snowfallCardDataIconSvg);
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
    const snowDepthCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    snowDepthCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const snowDepthCardDataIconTitle = document.createElement('title');
    snowDepthCardDataIconTitle.textContent = 'tempmin';
    const snowDepthCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    snowDepthCardDataIconPath.setAttribute('d','M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z');
    snowDepthCardDataIconSvg.appendChild(snowDepthCardDataIconTitle);
    snowDepthCardDataIconSvg.appendChild(snowDepthCardDataIconPath);
    snowDepthCardDataIcon.appendChild(snowDepthCardDataIconSvg);
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
    const windSpeedCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    windSpeedCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const windSpeedCardDataIconTitle = document.createElement('title');
    windSpeedCardDataIconTitle.textContent = 'tempmin';
    const windSpeedCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    windSpeedCardDataIconPath.setAttribute('d','M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z');
    windSpeedCardDataIconSvg.appendChild(windSpeedCardDataIconTitle);
    windSpeedCardDataIconSvg.appendChild(windSpeedCardDataIconPath);
    windSpeedCardDataIcon.appendChild(windSpeedCardDataIconSvg);
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
    const windGustCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    windGustCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const windGustCardDataIconTitle = document.createElement('title');
    windGustCardDataIconTitle.textContent = 'tempmin';
    const windGustCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    windGustCardDataIconPath.setAttribute('d','M3 5C3 4.4 3.4 4 4 4H5C5.6 4 6 4.4 6 5S5.6 6 5 6H4C3.4 6 3 5.6 3 5M4 13C4 12.4 4.4 12 5 12H6C6.6 12 7 12.4 7 13S6.6 14 6 14H5C4.4 14 4 13.6 4 13M4 16C3.4 16 3 16.4 3 17S3.4 18 4 18H9C9.6 18 10 17.6 10 17S9.6 16 9 16H4M18 5C18 4.4 18.4 4 19 4H21C21.6 4 22 4.4 22 5S21.6 6 21 6H19C18.4 6 18 5.6 18 5M7 20C6.4 20 6 20.4 6 21S6.4 22 7 22H11C11.6 22 12 21.6 12 21S11.6 20 11 20H7M3 10C2.4 10 2 9.6 2 9S2.4 8 3 8H12C13.1 8 14 7.1 14 6S13.1 4 12 4C11.4 4 10.9 4.2 10.6 4.6C10.2 5 9.6 5 9.2 4.6C8.8 4.2 8.8 3.6 9.2 3.2C9.9 2.5 10.9 2 12 2C14.2 2 16 3.8 16 6S14.2 10 12 10H3M19 12C19.6 12 20 11.6 20 11S19.6 10 19 10C18.7 10 18.5 10.1 18.3 10.3C17.9 10.7 17.3 10.7 16.9 10.3C16.5 9.9 16.5 9.3 16.9 8.9C17.4 8.3 18.2 8 19 8C20.7 8 22 9.3 22 11S20.7 14 19 14H10C9.4 14 9 13.6 9 13S9.4 12 10 12H19M18 18H13C12.4 18 12 17.6 12 17S12.4 16 13 16H18C19.7 16 21 17.3 21 19S19.7 22 18 22C17.2 22 16.4 21.7 15.9 21.1C15.5 20.7 15.5 20.1 15.9 19.7C16.3 19.3 16.9 19.3 17.3 19.7C17.5 19.9 17.7 20 18 20C18.6 20 19 19.6 19 19S18.6 18 18 18Z');
    windGustCardDataIconSvg.appendChild(windGustCardDataIconTitle);
    windGustCardDataIconSvg.appendChild(windGustCardDataIconPath);
    windGustCardDataIcon.appendChild(windGustCardDataIconSvg);
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
    const windDirectionCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    windDirectionCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const windDirectionCardDataIconTitle = document.createElement('title');
    windDirectionCardDataIconTitle.textContent = 'tempmin';
    const windDirectionCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    windDirectionCardDataIconPath.setAttribute('d','M7 5V13L22 11V7L7 5M10 6.91L13 7.31V10.69L10 11.09V6.91M16 7.71L19 8.11V9.89L16 10.29V7.71M5 10V11H6V12H5V21H3V4C3 3.45 3.45 3 4 3S5 3.45 5 4V6H6V7H5V10Z');
    windDirectionCardDataIconSvg.appendChild(windDirectionCardDataIconTitle);
    windDirectionCardDataIconSvg.appendChild(windDirectionCardDataIconPath);
    windDirectionCardDataIcon.appendChild(windDirectionCardDataIconSvg);
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
    const sunriseCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    sunriseCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const sunriseCardDataIconTitle = document.createElement('title');
    sunriseCardDataIconTitle.textContent = 'tempmin';
    const sunriseCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    sunriseCardDataIconPath.setAttribute('d','M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z');
    sunriseCardDataIconSvg.appendChild(sunriseCardDataIconTitle);
    sunriseCardDataIconSvg.appendChild(sunriseCardDataIconPath);
    sunriseCardDataIcon.appendChild(sunriseCardDataIconSvg);
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
    const sunsetCardDataIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    sunsetCardDataIconSvg.setAttribute('viewBox','0 0 24 24');
    const sunsetCardDataIconTitle = document.createElement('title');
    sunsetCardDataIconTitle.textContent = 'tempmin';
    const sunsetCardDataIconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    sunsetCardDataIconPath.setAttribute('d','M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z');
    sunsetCardDataIconSvg.appendChild(sunsetCardDataIconTitle);
    sunsetCardDataIconSvg.appendChild(sunsetCardDataIconPath);
    sunsetCardDataIcon.appendChild(sunsetCardDataIconSvg);
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