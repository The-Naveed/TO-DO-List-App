// function getInput() {

// var getValue = document.getElementById("papa");
// var listing = document.createElement("li")
// var input = document.getElementById("inputvalue");
// listing.innerHTML = input.value

// console.log(getValue)
// }


var inputValue = document.getElementById("inputvalue").value;

if (inputValue !== "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById("parentlist").appendChild(li);
    document.getElementById("inputvalue").value = "";
}

var parentList = document.getElementById("parentlist");

while (parentList.firstChild) {
    parentList.removeChild(parentList.firstChild);
}