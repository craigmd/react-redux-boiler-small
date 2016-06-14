// main.js
import textContent from './content.js';
require('./app.scss');
// var textContent = require("./content.js");

function appendListItem() {
  var newItem = document.createElement("li");
  var text = document.createTextNode(textContent);
  newItem.appendChild(text);

  var list = document.getElementById("list");
  list.insertBefore(newItem, list.childNodes[0]);
}

var button = document.getElementById("add_button");
button.addEventListener("click", appendListItem);
