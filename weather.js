const weather= document.querySelector(".js-weather")
const API_KEY= "b28b1ffc05a24cf2af53d331bf38a76a";

const COORDS = 'coords';

function getWeather(lat,log){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature =json.main.temp;
        const place=jons.name;
        weather.innerText=`${temperature}@${place}`;
    })
}


function saveCoords(coordsObj){
    localStorgae.setItem(COORDS,JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude:latitude,
        longitude:longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords(){

        }
    }else{
        const parsedCoords=JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}




function init(){
    loadCoords();
}
init();