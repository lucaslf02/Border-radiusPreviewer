window.addEventListener("load", load);

var inputTopL = null,
  inputTopR = null,
  inputBottonL = null,
  inputBottonR = null,
  square = null,
  radioTopL = null,
  radioTopR = null,
  radioBotL = null,
  radioBotR = null,
  valueTopL = 0,
  valueTopR = 0,
  valueBotL = 0,
  valueBotR = 0;
  valueTopLType = "px";
  valueTopRType = "px";
  valueBotLType = "px";
  valueBotRType = "px";


function load() {
  inputTopL    = document.querySelector("#topleft");
  inputTopR    = document.querySelector("#topright");
  inputBottonL = document.querySelector("#bottonleft");
  inputBottonR = document.querySelector("#bottonright");
  radioTopL    = document.querySelectorAll("input[name='radioTopL']");
  radioTopR    = document.querySelectorAll("input[name='radioTopR']");
  radioBotL    = document.querySelectorAll("input[name='radioBotL']");
  radioBotR    = document.querySelectorAll("input[name='radioBotR']");
  inputTopL.value = 0;
  inputTopR.value = 0;
  inputBottonL.value = 0;
  inputBottonR.value = 0;
  square = document.querySelector("#square");
  chageBotL();
  chageBotR();
  chageTopL();
  chageTopR();
  changeRadioTopL();
  changeRadioTopR();
  changeRadioBotL();
  changeRadioBotR();
}

function chageTopR() {
  function handlerChangeTopR(event) {
    valueTopR = event.target.value > 0 ? event.target.value : 0;
    event.target.value = valueTopR;
    manipulateRadius();
  }
  inputTopR.addEventListener("change", handlerChangeTopR);
}
function chageTopL() {
  function handlerChangeTopL(event) {
    valueTopL = event.target.value > 0 ? event.target.value : 0;
    event.target.value = valueTopL;
    manipulateRadius();
  }
  inputTopL.addEventListener("change", handlerChangeTopL);
}
function chageBotR() {
  function handlerChangeBottonR(event) {
    valueBotR = event.target.value > 0 ? event.target.value : 0;
    event.target.value = valueBotR;
    manipulateRadius();
  }
  inputBottonR.addEventListener("change", handlerChangeBottonR);
}
function chageBotL() {
  function handlerChangeBottonL(event) {
    valueBotL = event.target.value > 0 ? event.target.value : 0;
    event.target.value = valueBotL;
    manipulateRadius();
  }
  inputBottonL.addEventListener("change", handlerChangeBottonL);
}

function changeRadioTopL(){
    function handlerRadioTopL(event){
        valueTopLType = event.target.checked?event.target.value:valueTopLType;
        manipulateRadius() 
    }    
    for(let i = 0; i < radioTopL.length;i++){
        radioTopL[i].addEventListener("click",handlerRadioTopL);
    }
}
function changeRadioTopR(){
    function handlerRadioTopR(event){
        valueTopRType = event.target.checked?event.target.value:valueTopRType;
        manipulateRadius() 
    }    
    for(let i = 0; i < radioTopR.length;i++){
        radioTopR[i].addEventListener("click",handlerRadioTopR);
    }
}
function changeRadioBotL(){
    function handlerRadioBotL(event){
        valueBotLType = event.target.checked?event.target.value:valueBotLType;
        manipulateRadius() 
    }    
    for(let i = 0; i < radioBotL.length;i++){
        radioBotL[i].addEventListener("click",handlerRadioBotL);
    }
}
function changeRadioBotR(){
    function handlerRadioBotR(event){
        valueBotRType = event.target.checked?event.target.value:valueBotRType;
        manipulateRadius() 
    }    
    for(let i = 0; i < radioBotR.length;i++){
        radioBotR[i].addEventListener("click",handlerRadioBotR);
    }
}

function manipulateRadius() {
  square.style.borderRadius = `${valueTopL}${valueTopLType} ${valueTopR}${valueBotRType} ${valueBotL}${valueBotLType} ${valueBotR}${valueBotRType}`;
}
