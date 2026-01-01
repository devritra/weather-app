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
}