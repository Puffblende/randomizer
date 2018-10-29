var list = document.getElementById("list");

function add() {

  var linebreak = document.createElement("br");
  var node = document.createElement("LI");
  var textnode = document.createTextNode(input.value);
  node.appendChild(textnode);

  document.getElementById("list").appendChild(node);
  document.getElementById("list").appendChild(linebreak);


}
