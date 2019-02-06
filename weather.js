const API_KEY= "b28b1ffc05a24cf2af53d331bf38a76a";

const COORDS = 'coords';

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
}

function handleGeoError(){

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadedCords===null){
        askForCoords(){

        }
    }else{

    }
}




function init(){
    loadCoords();
}
init();