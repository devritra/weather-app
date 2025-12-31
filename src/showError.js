export function showError(response){
    const errorDialog = document.querySelector('.error_dialog');
    const errorText = document.querySelector('.error_text');
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