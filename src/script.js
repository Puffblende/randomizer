/*let list = document.getElementById("list");
let count = 0;
let listArray = [];

function add() {

  let linebreak = document.createElement("br");
  let node = document.createElement("LI");
  let textnode = document.createTextNode(input.value);
  node.appendChild(textnode);

  document.getElementById("list").appendChild(node);
  document.getElementById("list").appendChild(linebreak);

  listArray.push(input.value);
  count++;

  if ( count <= 1 ) {
    document.getElementById("button2").style.display = "none";
  }
  else {
    document.getElementById("button2").style.display = "inline";
  }
}

function generate(){
  for(i = 0; i<=count; i++){
    let random = Math.random()
  }


}*/
$(function(){

  //Collect DOM nodes
  var $list = $('#list');
  var $inputField = $('#input');
  var $randomItem = $('#random-item');
  var $actions = ('#actions');

  //Get a random integer (0 - max)
  getRandomInt = function (max){
    return Math.floor(Math.random() * Math.floor(max));
  }
})
