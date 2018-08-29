
var input = document.querySelector("input");
var listItems = document.getElementsByTagName("li");

var trashBtn = document.getElementsByClassName("trashBtn");
var list = document.getElementById("parent");


// addEventListener added to todo list items
for(var i = 0; i < listItems.length; i++) {

	// deleteBtn();
	strikeThrough();
	deleteLine();
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
function deleteBtn() {
	var changer = trashBtn[i]
	listItems[i].addEventListener("mouseover", function() {
		changer.innerHTML = "<i class=\"fas fa-trash-alt\">";
		// this.innerHTML = textInside + "<span class=\"deleteBtn\"><i class=\"fas fa-trash-alt\"></i></span>";
		// reset the colors after a short delay
		

	});
	listItems[i].addEventListener("mouseout", function(){
		changer.innerHTML = "";
	});
}
// line-through clicked items in list
function strikeThrough() {
	listItems[i].addEventListener("click", function(event) {
		this.classList.toggle("strike");

	});
}



// input.addEventListener("mouseover" , function() {
// 	addLi();
// });


// function addLi() {
// 	// new element
// 	var newLi = document.createElement("li");
// 	// content for new element
// 	var newContent = document.createTextNode("Hi there and greetings");
	
// 	// add the text node to the newly created div
	

// 	// add the newly created element and its content into the DOM
// 	list.appendChild(newContent);
// }

