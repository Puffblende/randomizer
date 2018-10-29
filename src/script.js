let list = document.getElementById("list");
let count = 0;

function add() {

  let linebreak = document.createElement("br");
  let node = document.createElement("LI");
  let textnode = document.createTextNode(input.value);
  node.appendChild(textnode);

  document.getElementById("list").appendChild(node);
  document.getElementById("list").appendChild(linebreak);

  count++;
  if ( count <= 1 ) {
    document.getElementById("button2").style.display = "none";
  }
  else {
    document.getElementById("button2").style.display = "inline";
  }
}

function generate(){

  

}
