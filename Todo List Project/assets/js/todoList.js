
var textIn = document.getElementById("newLineInput");
var listItems = document.getElementsByTagName("li");

var trashBtn = document.getElementsByClassName("trashBtn");
var list = document.getElementById("parent");
var plusSign = document.getElementById("plusSign");



// addEventListener added to todo list items
for(var i = 0; i < listItems.length; i++) {

	// deleteBtn();
	strikeThrough();
	deleteLine();
}

addLine();
showHide();

// plus sign hides addLine

plusSign.addEventListener("click", function() {
	if (textIn.style.display === "") {
		textIn.style.display = "none";
	} else if (textIn.style.display === "none") {
		textIn.style.display = "";
	}
});

//this code assigns eventlisteners to newly added list items. 
function showHide() {
	list.addEventListener("click", function (event) {
	  if (event.target.tagName === "LI") {
	    event.target.classList.toggle("strike");
	  } else if (event.target.tagName === "SPAN") {
	  	let target = event.target;
	  	let parent = target.parentElement;
	  	console.log(parent);
	  	list.removeChild(parent);
	  }
	});
}

// addEventListener for Input line
function addLine() {
	textIn.addEventListener("keypress", function(event) {
		if(event.code === "Enter") {
			var newLine = document.createElement("li");
			newLine.appendChild(document.createTextNode(""));
			newLine.innerHTML = "<span class=\"trashBtn\"></i><i class=\"fas fa-trash-alt\"></i></span>" + textIn.value;
			// newLine.appendChild(document.createTextNode(textIn.value + "<span class="trashBtn"></i>x</span>"));
			list.appendChild(newLine);
			console.log("button has been pressed");
			textIn.value = "";
	}
	});
}
// addEventListener for Delete Button
function deleteLine() {
	let nested = listItems[i];
	trashBtn[i].addEventListener("click", function() {
		list.removeChild(nested);
		// stop event propigation
		event.stopPropagation();
	});
}

// adds trashcan icon when mouseover todo item
// function deleteBtn() {
// 	var changer = trashBtn[i]
// 	listItems[i].addEventListener("mouseover", function() {
// 		trashBtn[i].classList.toggle("show");
		// changer.innerHTML = "<i class=\"fas fa-trash-alt\">";
		// this.innerHTML = textInside + "<span class=\"deleteBtn\"><i class=\"fas fa-trash-alt\"></i></span>";
		// reset the colors after a short delay
		

// 	});
// 	listItems[i].addEventListener("mouseout", function(){
// 		changer.innerHTML = "";
// 	});
// }
// line-through clicked items in list
function strikeThrough() {
	listItems[i].addEventListener("click", function(event) {
		this.classList.toggle("strike");

	});
}



