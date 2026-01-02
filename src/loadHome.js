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

    const credits = document.createElement('div');
    credits.classList.add('credits');
    const creditsText = document.createElement('p');
    creditsText.textContent = 'Created by Aritra Saha';
    const anchorTag = document.createElement('a');
    anchorTag.href = 'https://github.com/devritra';
    const githubSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    githubSvg.setAttribute('viewBox', '0 0 24 24');
    const githubSvgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    githubSvgPath.setAttribute('d','M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z');
    githubSvg.appendChild(githubSvgPath);
    anchorTag.appendChild(githubSvg);
    credits.appendChild(creditsText);
    credits.appendChild(anchorTag);

    homePageHolder.appendChild(heroSection);
    homePageHolder.appendChild(homeSearchSection);
    main.appendChild(homePageHolder);
    main.appendChild(credits);

    setCurrentPage('home');
}