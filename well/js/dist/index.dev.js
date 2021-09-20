"use strict";

var saveInput = [];
var ulOh = document.getElementById("ul-oh");
var inputOh = document.getElementById("input-oh");
var inputBtn = document.getElementById("input-btn");
var deleteBtn = document.getElementById("delete-btn");
var valueFromLocalStorage = JSON.parse(localStorage.getItem("saveInput"));

if (valueFromLocalStorage) {
  saveInput = valueFromLocalStorage;
  callOut(saveInput);
}

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  saveInput = [];
  callOut(saveInput);
});
inputBtn.addEventListener("click", function () {
  saveInput.push(inputOh.value);
  inputOh.value = "";
  localStorage.setItem("saveInput", JSON.stringify(saveInput));
  callOut(saveInput);
});

function callOut(arr) {
  var listItem = "";

  for (var i = 0; i < arr.length; i++) {
    listItem += "\n        <li>\n            <a id='a-oh' target='blank' href='".concat(arr[i], "'>").concat(arr[i], "</a>\n        </li>");
  }

  ulOh.innerHTML = listItem;
}