const planets = document.querySelectorAll('.planet-link');
const planetInfo = document.querySelector('.planet-info');
const planetHeaderName = document.querySelector('.planet-header-name');

const API_URL = 'https://planets-api.vercel.app/api/v1/planets';



for(let i=0 ; i< planets.length; i++){
    console.log(planets[i]);
    console.log("mushoabs");
    planets[i].addEventListener('click', () => {
        console.log("esec mushaobs + ");
        console.log(planets[i]);
        console.log("esec  + ");
        console.log(planets[i].innerText);
    getPlanetHeader(planets[i].innerText);
       console.log("esec2  + ");
    })
}
// const API_URL = 'https://planets-api.vercel.app/api/v1/planets';
const getPlanetHeader = async (planet =  'Mercury') => {
    const response = await fetch(`https://planets-api.vercel.app/api/v1/planets/${planet}`);
    const data = await response.json();
    for(let i=0 ; i< planets.length; i++){
        planetHeaderName.textContent = data.name;
        console.log(data);
        console.log('test3');
    }
    
}
getPlanetHeader('mercury');

console.log('--------------------------------------------------------------')

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
    for(let i=0 ; i< planets.length; i++){
        planetInfo.textContent = data.overview.content;
        console.log(data);
        console.log('test3');
    }
    
}
getPlanet('mercury');