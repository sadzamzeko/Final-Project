const planets = document.querySelectorAll('.planet-link');
const planetInfo = document.querySelector('.planet-info');
const wikip = document.querySelector('.wikip');
const planetHeaderName = document.querySelector('.planet-header-name');
const rotTime = document.querySelector('.rot-time');
const revTime = document.querySelector('.rev-time');
const radius = document.querySelector('.radius');
const temp = document.querySelector('.temp');
const sec = document.querySelector('.sec');
const butt1 = document.querySelector('.box1');
const butt2 = document.querySelector('.box2');
const butt3 = document.querySelector('.box3');

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
        getName(j);
       console.log("esec2  + ");
    })
}

const getPlanet = async (planet =  'Mercury') => {
    const response = await fetch(`https://planets-api.vercel.app/api/v1/planets/${planet}`);
    const data = await response.json();
    for(let i=0 ; i< planets.length; i++){
        planetInfo.textContent = data.overview.content;
        planetHeaderName.textContent = data.name;
        // wikip.textContent = data.structure.source;
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
        const planetCont =document.querySelector('.pl');
        planetCont.innerHTML = `<img src="${data[ind].images.planet}" alt="${data[ind].name}">`;
        sec.appendChild(planetCont);
        wikip.setAttribute("href", data[ind].overview.source);
    }catch(err){
        console.log(err);
    }
};
getName2(0);
console.log('aaaaaaaaaaaaaaa')

const getName =  async (i ) => {
    try{
         const response = await fetch(API_URL);
        const data = await response.json();
        butt1.addEventListener('click' , () => { 
            console.log(data[i].structure.content);
            planetInfo.textContent = data[i].overview.content;
            const planetCont =document.querySelector('.pl');
            planetCont.innerHTML = `<img src="${data[i].images.planet}" alt="${data[i].name}">`;
            sec.appendChild(planetCont);
            wikip.getAttribute("href");
            wikip.setAttribute("href", data[i].overview.source);
        });
        butt2.addEventListener('click' , () => {
            console.log(data[i].structure.content);
            planetInfo.textContent = data[i].structure.content;
            const planetCont =document.querySelector('.pl');
            planetCont.innerHTML = `<img src="${data[i].images.internal}" alt="${data[i].name}">`;
            sec.appendChild(planetCont);
            wikip.setAttribute("href", data[i].structure.source);
        });
        butt3.addEventListener('click' , () => {
            // butt3.style.backgroundColor = "#419EBB";
            console.log(data[i].geology.content);
            planetInfo.textContent = data[i].geology.content;
            const planetCont =document.querySelector('.pl');
            planetCont.innerHTML = `<img src="${data[i].images.geology}" alt="${data[i].name}">`;
            sec.appendChild(planetCont);
            wikip.setAttribute("href", data[i].geology.source);
        });     
    }catch(err){
        console.log(err);
    }
};
getName(0);
