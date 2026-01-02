import { setCurrentPage } from "./storeStateOfPage";
import bgImageHome from './assets/images/bg-image-home.jpg';
const main = document.querySelector('.main');
// opacity set back to 1
main.style.opacity = '1';

export function loadHome(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const homeBgImageHolder = document.createElement('div');
    // const homeBgImage = document.createElement('img');
    const homeBgImage = new Image();
    homeBgImage.classList.add('home_bg_image');
    homeBgImage.src = bgImageHome;
    homeBgImageHolder.appendChild(homeBgImage);
    main.appendChild(homeBgImageHolder);

    const homePageHolder = document.createElement('div');
    homePageHolder.classList.add('home_page_holder');
    
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero_section');
    const heroHeading = document.createElement('h1');
    heroHeading.classList.add('hero_heading');
    heroHeading.textContent = 'Welcome to my weather web app';
    const heroPara = document.createElement('p');
    heroPara.classList.add('hero_para');
    heroPara.textContent = 'You can search for any location below in the search bar to see the weather';
    heroSection.appendChild(heroHeading);
    heroSection.appendChild(heroPara);

    const homeSearchSection = document.createElement('div');
    homeSearchSection.classList.add('home_search_section');
    const homeSearchForm = document.createElement('form');
    homeSearchForm.classList.add('home_search_form');
    homeSearchForm.action = '#';
    const homeSearchInput = document.createElement('input');
    homeSearchInput.type = 'search';
    homeSearchInput.classList.add('home_search_input');
    homeSearchInput.name = 'search';
    homeSearchInput.placeholder = 'Search...';
    const homeSearchBtn = document.createElement('button');
    homeSearchBtn.classList.add('home_search_btn');
    homeSearchBtn.dataset.action = 'fetch_and_load';
    const homeSearchSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    homeSearchSvg.setAttribute('viewBox', '0 0 24 24');
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    svgPath.setAttribute('d','M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z');
    homeSearchSvg.appendChild(svgPath);
    homeSearchBtn.appendChild(homeSearchSvg);
    homeSearchForm.appendChild(homeSearchInput);
    homeSearchForm.appendChild(homeSearchBtn);
    homeSearchSection.appendChild(homeSearchForm);

    homePageHolder.appendChild(heroSection);
    homePageHolder.appendChild(homeSearchSection);
    main.appendChild(homePageHolder);

    setCurrentPage('home');
}