export function showError(response){
    const main = document.querySelector('.main');
    const errorDialogPrev = document.querySelector('.error_dialog');
    if(errorDialogPrev){
        main.removeChild(errorDialogPrev);
    }

    const errorDialog = document.createElement('dialog');
    errorDialog.classList.add('error_dialog');
    errorDialog.setAttribute('closedby','any');
    const errorHolder = document.createElement('div');
    errorHolder.classList.add('error_holder');
    const errorHeader = document.createElement('div');
    errorHeader.classList.add('error_header');
    const errorHeading = document.createElement('h1');
    errorHeading.classList.add('error_heading');
    errorHeading.textContent = 'Error';
    const errorCloseBtn = document.createElement('button');
    errorCloseBtn.dataset.action = 'close_error';
    const errorCloseSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    errorCloseSvg.setAttribute('viewBox','0 0 24 24');
    errorCloseSvg.classList.add('error_close_btn_svg')
    const errorCloseSvgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    errorCloseSvgPath.setAttribute('d','M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z');
    const errorText = document.createElement('p');
    errorText.classList.add('error_text');

    errorCloseSvg.appendChild(errorCloseSvgPath);
    errorCloseBtn.appendChild(errorCloseSvg);
    errorHeader.appendChild(errorHeading);
    errorHeader.appendChild(errorCloseBtn);
    errorHolder.appendChild(errorHeader);
    errorHolder.appendChild(errorText);
    errorDialog.appendChild(errorHolder);
    main.appendChild(errorDialog);
    

    if(response.status === 400){
            errorText.textContent = 'Please provide a valid location name';
            errorDialog.showModal();
            console.log('Please provide a valid location name');
        } else if(response.status === 401){
            errorText.textContent = 'Sorry, our system is facing some issues';
            errorDialog.showModal();
            console.log('There is a problem with the API key, account or subscription. May also be returned if a feature is requested for which the account does not have access to.');
        } else if(response.status === 404){
            errorText.textContent = 'Sorry, we are unable to find any matches for this search';
            errorDialog.showModal();
            console.log('Sorry, we are unable to find any matches for this search');
        } else if(response.status === 439){
            errorText.textContent = 'Sorry, our request limit is over for today. Come back tommorow';
            errorDialog.showModal();
            console.log('Sorry, our request limit is over for today. Come back tommorow');
        } else if(response.status === 500){
            errorText.textContent = 'Server error: A general error has occurred processing the request';
            errorDialog.showModal();
            console.log('Server error: A general error has occurred processing the request.');
        }
}