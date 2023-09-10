
const API_URL = 'https://planets-api.vercel.app/api/v1/planets';
const getName =  async () => {
    try{
         const response = await fetch(API_URL);
        const data = await response.json();
        for(let i=0 ; i< data.length; i++){
            console.log(data[i].name);
            const planetName = document.createElement('h4');
            planetName.innerText= data[i].name;
            document.body.appendChild(planetName);
        }
        // console.log(data);
    }catch(err){
        console.log(err);
    }
};

getName();