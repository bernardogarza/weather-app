!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=21)}([function(n,t,e){},function(n,t,e){var r={"./01d.png":2,"./01n.png":3,"./02d.png":4,"./02n.png":5,"./03d.png":6,"./03n.png":7,"./04d.png":8,"./04n.png":9,"./09d.png":10,"./09n.png":11,"./10d.png":12,"./10n.png":13,"./11d.png":14,"./11n.png":15,"./13d.png":16,"./13n.png":17,"./50d.png":18,"./50n.png":19,"./unknown.png":20};function o(n){var t=i(n);return e(t)}function i(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=1},function(n,t,e){n.exports=e.p+"static/01d.png"},function(n,t,e){n.exports=e.p+"static/01n.png"},function(n,t,e){n.exports=e.p+"static/02d.png"},function(n,t,e){n.exports=e.p+"static/02n.png"},function(n,t,e){n.exports=e.p+"static/03d.png"},function(n,t,e){n.exports=e.p+"static/03n.png"},function(n,t,e){n.exports=e.p+"static/04d.png"},function(n,t,e){n.exports=e.p+"static/04n.png"},function(n,t,e){n.exports=e.p+"static/09d.png"},function(n,t,e){n.exports=e.p+"static/09n.png"},function(n,t,e){n.exports=e.p+"static/10d.png"},function(n,t,e){n.exports=e.p+"static/10n.png"},function(n,t,e){n.exports=e.p+"static/11d.png"},function(n,t,e){n.exports=e.p+"static/11n.png"},function(n,t,e){n.exports=e.p+"static/13d.png"},function(n,t,e){n.exports=e.p+"static/13n.png"},function(n,t,e){n.exports=e.p+"static/50d.png"},function(n,t,e){n.exports=e.p+"static/50n.png"},function(n,t,e){n.exports=e.p+"static/unknown.png"},function(n,t,e){"use strict";e.r(t);const r=document.querySelector(".icon-image"),o=document.querySelector(".city"),i=document.querySelector(".degrees"),c=document.querySelector(".min-max"),p=document.querySelector("#weather-description"),a=document.querySelector(".change-temp"),u=async()=>{try{const n=document.querySelector("#city").value;fetch(`${"https://cors-anywhere.herokuapp.com/"}https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=28bea7f0fe8b5caa0a43a8441d7eea63`).then(n=>n.json()).then(n=>{const{temp:t,temp_max:e,temp_min:u}=n.main;i.innerHTML=`${Math.floor(t-273.15)}°C`,c.innerHTML=`Min: ${Math.floor(u-273.15)}°C<br>`,c.innerHTML+=`Max: ${Math.floor(e-273.15)}°C`,p.innerHTML=n.weather[0].description.toUpperCase(),o.innerHTML=`${n.name}, ${n.sys.country}`,r.src=`static/${n.weather[0].icon}.png`;const s=Math.floor(9*(t-273.15)/5+32);a.innerText="°C",a.addEventListener("click",n=>{"°C"===n.target.innerText?(a.innerHTML="°F",i.innerHTML=`${s}°F`,c.innerHTML=`Min: ${Math.floor(9*(u-273.15)/5+32)}°F<br>`,c.innerHTML+=`Max: ${Math.floor(9*(e-273.15)/5+32)}°F`):"°F"===n.target.innerText&&(a.innerText="°C",i.innerHTML=`${Math.floor(t-273.15)}°C`,c.innerHTML=`Min: ${Math.floor(u-273.15)}°C<br>`,c.innerHTML+=`Max: ${Math.floor(e-273.15)}°C`)})})}catch(n){alert("Please enter a valid city")}},s=()=>{const n=new Date;document.getElementById("local-time").innerHTML=n.toLocaleTimeString()};setInterval(s,1e3);const d=(new Date).getHours(),f=document.querySelector(".day");e(0);const l=document.querySelector(".submit-city"),g=document.querySelector("#city");(n=>n.keys().map(n))(e(1));window.addEventListener("load",()=>{s(),d>18&&(f.classList.remove("day"),f.classList.add("night"))}),l.addEventListener("click",()=>{u()}),g.addEventListener("keypress",n=>{"13"==(n.charCode||n.keyCode)&&(u(),n.preventDefault())})}]);