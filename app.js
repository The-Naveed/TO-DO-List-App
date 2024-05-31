function getInput() {
    var getInputValue = document.getElementById("inputValue");
    if (getInputValue.value.length <= 2) {
        alert("Please Enter Correct Value");
        return
    }
    var listValue = document.getElementById("parentlist");
    var listEnter = document.createElement("li");
    var editBtn = document.createElement("button");
    var removeBtn = document.createElement("button");
    var comBtn = document.createElement("button");
    listValue.appendChild(listEnter).innerHTML = getInputValue.value;
    listEnter.appendChild(editBtn);
    listEnter.appendChild(removeBtn);
    listEnter.appendChild(comBtn);
    editBtn.innerHTML = "Edit Task";
    removeBtn.innerHTML = "Remove Task";
    comBtn.innerHTML = "Completed";
    comBtn.setAttribute("class", "btn btn-success m-1");
    editBtn.setAttribute("class", "btn btn-primary m-1");
    removeBtn.setAttribute("class", "btn btn-danger m-1");
    removeBtn.setAttribute("id", "rList")
    removeBtn.setAttribute("onclick", "rem(this)");
    listEnter.setAttribute("class", "bounce-top m-3 pr-4");
    editBtn.setAttribute("onclick", "edi(this)");
    comBtn.setAttribute("onclick", "com(this)");
    listEnter.style.border = "1px solid wheat"
    listEnter.style.padding = "10px"
    listEnter.style.borderRadius = "10px";

    if (getInputValue == listEnter) {
        alert("Please Enter Different Task");
    }
}

function remove() {
    var getAllData = document.getElementById("parentlist");
    getAllData.innerHTML = ""
}

function rem(use) {
    use.parentNode.remove();
}

function edi(use1) {
    var edit = prompt("Enter value", use1.previousSibling.nodeValue);
    use1.previousSibling.nodeValue = edit;
}

function com(use3) {
    use3.parentNode.style.background = "Green";
    use3.parentNode.style.border = "none";
    use3.parentNode.style.fontWeight = "bold";
    use3.parentNode.children[0].remove();
    use3.parentNode.children[1].remove();
    use3.parentNode.children[2].remove();
    console.log(use3.parentNode.children[0])
    console.log(use3.parentNode.children[1])
    console.log(use3.parentNode.children[2])

}