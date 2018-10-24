let list = document.getElementById("list");
function add() {

let node = document.createElement("LI");
let textnode = document.createTextNode(input.value);
node.appendChild(textnode);
document.getElementById("list").appendChild(node);
}
