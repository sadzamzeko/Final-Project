const planets = document.querySelectorAll('.planet-link');
const planetInfo = document.querySelector('.planet-info');
const wikip = document.querySelector('.wikip');
const planetHeaderName = document.querySelector('.planet-header-name');
const rotTime = document.querySelector('.rot-time');
const revTime = document.querySelector('.rev-time');
const radius = document.querySelector('.radius');
const temp = document.querySelector('.temp');
const sec = document.querySelector('.sec');
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
    getName2(j);
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

const getName2 =  async ( ind ) => {
    try{
         const response = await fetch(API_URL);
        const data = await response.json();
            
            // for(let s=0; s<planets.length; s++ ){
                // console.log(data[i].name);
                const planetCont =document.querySelector('.pl');
                planetCont.innerHTML = `<img src="${data[ind].images.planet}" alt="${data[ind].name}">`;
                // document.body.appendChild(planetCont);
                sec.appendChild(planetCont)
            i++;
            
            
        
        
    }catch(err){
        console.log(err);
    }
};
console.log('aaaaaaaaaaaaaaa')
// getName2(4);