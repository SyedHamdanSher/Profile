var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delete1 = document.getElementById("delete1");


function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var but = document.createElement("button");
	but.setAttribute("id",input.value);
	but.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(document.createTextNode(" "));
	li.appendChild(but);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputLength()>0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItem(){
	ul.removeChild(delete1);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function toggleDoneClass(elem) {
    if ( elem.target.localName === "li") {
        console.log(elem);
        elem.target.classList.toggle("done");
    } else if ( elem.target.localName === "button"){
        elem.target.parentNode.remove();
    }
}

ul.addEventListener("click", toggleDoneClass);
