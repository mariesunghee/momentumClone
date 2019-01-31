const form =document.querySelector(".js-form");
const input=form.querySelector("input");
const greeting=document.querySelector(".js-greetings");

//user name in local storage
const USER_LS="currentUser";
//showing class name
const SHOWING_CN;

function paintGreeting(text){
    form.classlist.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){

    }else{
        paintGreeting(currentUser);
    }
}

function init(){

}
init();