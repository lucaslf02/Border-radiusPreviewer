window.addEventListener("load", load);

var inputTopL = null,
  inputTopR = null,
  inputBottonL = null,
  inputBottonR = null,
  square = null,
  valueTopL = 0,
  valueTopR = 0,
  valueBotL = 0,
  valueBotR = 0;

function load() {
    inputTopL = document.querySelector("#topleft");
    inputTopR = document.querySelector("#topright");
    inputBottonL = document.querySelector("#bottonleft");
    inputBottonR = document.querySelector("#bottonright");
    square = document.querySelector("#square");
    chageBotL();
    chageBotR();
    chageTopL();
    chageTopR();
}


function chageTopR(){
    function handlerChangeTopR(event){
        valueTopR = event.target.value;
    }
    inputTopR.addEventListener("change", handlerChangeTopR);
}
function chageTopL(){
    function handlerChangeTopL(event){
        valueTopL = event.target.value;
    }
    inputTopL.addEventListener("change", handlerChangeTopL);
}
function chageBotR(){
    function handlerChangeBottonR(event){
        valueBotR = event.target.value;
    }
    inputBottonR.addEventListener("change", handlerChangeBottonR);
}
function chageBotL(){
    function handlerChangeBottonL(event){
        valueBotL = event.target.value;
    }
    inputBottonL.addEventListener("change", handlerChangeBottonL);
}
