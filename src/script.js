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

  //Create entry and yield it to the list
  var saveEntry = function(){
    var value = $inputField.val();
  if(!value.length) return;
  $list.append($('<li/>').text(value));
  $inputField.val('').focus();
  $actions.show();
  window.scrollTo(0, 100000);
  }

  //Grab random list item and display its text
  var randomize = function(){
    var len = $list.children().length;
    var rand = getRandomInt(len);
    var li = $list.children().get(rand);
    %$randomItem.text($(li).text());
  }

  //Clear the list
  var clearList = function(){
    $list.empty();
    $inputField.val('').focus();
    $randomItem.text('');
    $actions.hide();
  }
})
