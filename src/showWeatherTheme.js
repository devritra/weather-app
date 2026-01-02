export async function showWeatherTheme(response){
    const iconId = response.days[0].icon;
    const main = document.querySelector('.main');
    const dataPageHolder = document.querySelector('.data_page_holder');
    switch (iconId) {
        case 'snow':{
            const bgImageUrl = await import('./assets/images/snow-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'snow-showers-day':{
            const bgImageUrl = await import('./assets/images/snow-showers-day-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'snow-showers-night':{
           const bgImageUrl = await import('./assets/images/snow-showers-night-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'thunder-rain':{
            const bgImageUrl = await import('./assets/images/thunder-rain-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'thunder-showers-day':{
          const bgImageUrl = await import('./assets/images/thunder-showers-day-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'thunder-showers-night':{
        const bgImageUrl = await import('./assets/images/thunder-showers-night-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'rain':{
            const bgImageUrl = await import('./assets/images/rain-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'showers-day':{
            const bgImageUrl = await import('./assets/images/showers-day-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'showers-night':{
            const bgImageUrl = await import('./assets/images/showers-night-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'fog':{
            const bgImageUrl = await import('./assets/images/fog-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'wind':{
            const bgImageUrl = await import('./assets/images/wind-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'cloudy':{
            const bgImageUrl = await import('./assets/images/cloudy-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'partly-cloudy-day':{
            const bgImageUrl = await import('./assets/images/partly-cloudy-day-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'partly-cloudy-night':{
          const bgImageUrl = await import('./assets/images/partly-cloudy-night-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'clear-day':{
            const bgImageUrl = await import('./assets/images/clear-day-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        case 'clear-night':{
            const bgImageUrl = await import('./assets/images/clear-night-bg-image.jpg');
            const bgImageHolder = document.createElement('div');
            const bgImage = new Image();
            bgImage.classList.add('bg_image');
            bgImage.src = bgImageUrl.default;
            bgImageHolder.appendChild(bgImage);
            main.insertBefore(bgImageHolder, dataPageHolder);
            break;
        }
        default:
            break;
    }
}