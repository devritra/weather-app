import { fetchAndLoad } from './fetchAndLoad';
import './style.css';

const body = document.querySelector('body');

body.addEventListener('click', (e)=>{
    if(e.target.dataset){
        if(e.target.dataset.action){
            switch (e.target.dataset.action){
                case 'fetch_and_load':{
                    e.preventDefault();
                    const homeSearchInput = document.querySelector('.home_search_input');
                    const location = homeSearchInput.value;
                    // function that takes the location and fetch the weather data and load the data on the page
                    fetchAndLoad(location);
                    break;
                }
                default:{
                    break;
                }
            }
        }
    }
})