"use strict";

const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");

let result=0;

btn1.addEventListener("click",()=>{
  result=btn1.value
});
btn2.addEventListener("click",()=>{
  result=btn2.value
});
btn3.addEventListener("click",()=>{
  result=btn3.value
});
btn4.addEventListener("click",()=>{
  result=btn4.value
});
btn5.addEventListener("click",()=>{
  result=btn5.value
});

const submit=document.getElementById("btn-submit");
submit.addEventListener("click",()=>{
    document.getElementById("section-start").classList.add("hide");
    document.getElementById("section-end").classList.add("show");
    document.getElementById("text").innerHTML=`<p>You selected ${result} out of 5</p>`
})