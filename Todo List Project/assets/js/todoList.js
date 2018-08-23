
var input = document.querySelector("input");
var listItems = document.querySelectorAll("li");
var todo = document.querySelectorAll("todo");


// addEventListener added to todo list items
for(var i = 0; i < listItems.length; i++) {

	deleteBtn();
	strikeThrough();

}

// adds trashcan icon when mouseover todo item
function deleteBtn() {
	listItems[i].addEventListener("mouseover", function() {
		var textInside = this.textContent;
		this.innerHTML = textInside + "<span class=\"deleteBtn\"><i class=\"fas fa-trash-alt\"></i></span>";

		// reset the colors after a short delay
		setTimeout(function() {
			this.innerHTML = textInside;
		}, 100);
	});
}
// line-through clicked items in list
function strikeThrough() {
	listItems[i].addEventListener("click", function() {
		this.classList.toggle("strike");
	});
}





input.addEventListener("click" , function() {
	addLi();
});


function addLi() {
	// new element
	var newLi = document.createElement("li");
	// content for new element
	var newContent = document.createTextNode("Hi there and greetings");
	// add the text node to the newly created div
	newLi.appendChild(newContent);

	// add the newly created element and its content into the DOM
	var allLi = document.querySelectorAll("li");
	var lastLi = allLi[allLi.length - 1];
	lastLi.insertBefore(newLi, lastLi);
}

