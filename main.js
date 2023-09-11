const planets = document.querySelectorAll('.planet-link');
const planetInfo = document.querySelector('.planet-info');
const wikip = document.querySelector('.wikip');
const planetHeaderName = document.querySelector('.planet-header-name');
const rotTime = document.querySelector('.rot-time');
const revTime = document.querySelector('.rev-time');
const radius = document.querySelector('.radius');
const temp = document.querySelector('.temp');

const API_URL = 'https://planets-api.vercel.app/api/v1/planets';


for(let j=0 ; j< planets.length; j++){
    console.log(planets[j]);
    console.log("mushoabs");
    planets[j].addEventListener('click', () => {
        console.log("esec mushaobs + ");
        console.log(planets[j]);
        console.log("esec  + ");
        console.log(planets[j].innerText);
    getPlanet(planets[j].innerText);
       console.log("esec2  + ");
    })
}

const getPlanet = async (planet =  'Mercury') => {
    const response = await fetch(`https://planets-api.vercel.app/api/v1/planets/${planet}`);
    const data = await response.json();
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa1');
    for(let i=0 ; i< planets.length; i++){
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa2');
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa3');
        planetInfo.textContent = data.overview.content;
        planetHeaderName.textContent = data.name;
        wikip.textContent = data.structure.source;
        rotTime.textContent= data.rotation;
        revTime.textContent= data.revolution;
        radius.textContent= data.radius;
        temp.textContent= data.temperature;
        console.log(data);
        console.log('test3');
    }
    
}
getPlanet('mercury');

