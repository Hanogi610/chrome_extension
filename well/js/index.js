"use strict";
let saveInput = [];
const ulOh = document.getElementById("ul-oh");
const inputOh = document.getElementById("input-oh");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const valueFromLocalStorage = JSON.parse(localStorage.getItem("saveInput"));

if(valueFromLocalStorage){
    saveInput = valueFromLocalStorage;
    callOut(saveInput);
}

deleteBtn.addEventListener("click",function(){
    localStorage.clear();
    saveInput = [];
    callOut(saveInput);
})

inputBtn.addEventListener("click",function(){
    if(inputOh.value){
        saveInput.push(inputOh.value);
    }
    inputOh.value = "";
    localStorage.setItem("saveInput",JSON.stringify(saveInput));
    callOut(saveInput);
})

function callOut(arr){
    let listItem ="" ;
    for(let i = 0; i < arr.length; i++){
        listItem += `
        <li>
            <a id='a-oh' target='blank' href='${arr[i]}'>${arr[i]}</a>
        </li>`;
    }
    ulOh.innerHTML = listItem;
}