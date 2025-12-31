import './style.css';

const body = document.querySelector('body');

body.addEventListener('click', (e)=>{
    if(e.target.dataset){
        if(e.target.dataset.action){
            switch (e.target.dataset.action){
                case 'fetch_and_load':
                    // function that takes the location and fetch the weather data and load the data on the page
                    break;
                default:
                    break;
            }
        }
    }
})