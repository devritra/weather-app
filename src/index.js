import { changeTempUnitsToC, changeTempUnitsToF } from './changeTempUnits';
import { fetchAndLoad } from './fetchAndLoad';
import { loadHome } from './loadHome';
import './style.css';

const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    if (e.target.dataset) {
        if (e.target.dataset.action) {
            switch (e.target.dataset.action) {
                case 'fetch_and_load': {
                    e.preventDefault();
                    let location;
                    const homeSearchInput =
                        document.querySelector('.home_search_input');
                    if (homeSearchInput.value) {
                        location = homeSearchInput.value;
                        fetchAndLoad(location);
                    }
                    // function that takes the location and fetch the weather data and load the data on the page
                    break;
                }
                case 'data_fetch_and_load': {
                    e.preventDefault();
                    let location;
                    const dataPageSearchInput = document.querySelector('.data_page_search_input');
                    if (dataPageSearchInput.value) {
                        location = dataPageSearchInput.value;
                        fetchAndLoad(location);
                    }
                    // function that takes the location and fetch the weather data and load the data on the page
                    break;
                }
                case 'load_home': {
                    // function that loads home
                    loadHome();
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
});
body.addEventListener('change',(e)=>{
    if(e.target.id === 'change_unit'){
        if(e.target.checked){
            changeTempUnitsToF();
        } else if(!e.target.checked){
            changeTempUnitsToC();
        }
    }
})
