//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
let decenas = 0; 
let centenas = 0; 
let miles = 0;
let decamiles = 0; 
let centimiles = 0; 

 

//render your react application
/* setInterval(() => {
    
    seconds++;
    console.log(seconds);
}, 1000) */
setInterval(() => {
    console.log(seconds);
    seconds++;
    if(seconds > 9) {
        decenas ++;
        seconds = 0; 
    } if(decenas > 9) {
        centenas++;
        decenas = 0;
    } if(centenas > 9) {
        miles ++;
        centenas = 0; 
    } if(miles > 9) {
        decamiles ++; 
        miles = 0; 
    } if(decamiles > 9) {
        centimiles ++; 
        decamiles = 0; 
    }    
    ReactDOM.render(
    <Home
         unidades={seconds} 
         decenas={decenas}
         centenas = {centenas}
         miles = {miles}
         decamiles = {decamiles}
         centimiles = {centimiles}
    />, 
         document.querySelector("#app"));
 }, 1000) 
