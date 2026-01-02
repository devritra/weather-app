export function showLoadingAssistOnDataPage(){
    const assistDisplay = document.querySelector('.assist_display');
    assistDisplay.textContent = 'Loading...'
}
export function stopShowingLoadingAssistOnDataPage(){
    const assistDisplay = document.querySelector('.assist_display');
    assistDisplay.textContent = ''
}

export function showLoadingAssistOnHomePage(){
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading_screen');
    loadingScreen.textContent = 'Loading...';
    const main = document.querySelector('.main');
    main.appendChild(loadingScreen);
}