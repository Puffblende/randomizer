/*function setItem (event) {
    event.preventDefault();
if (characterCode == 13){
    var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(document.getElementById('textcontrol').value);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);
  // Append <li> to <ul> with id="myList"
}else {}
};

document.getElementById('addbutton').addEventListener('click', setItem);
*/

let list=[];

function additem(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    s


}
