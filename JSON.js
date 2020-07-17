window.onload = function() {
	initialiseMenu();
	populateMenu();
}


function Menu_item (url, name, category, price){
	this.url = url;
	this.name = name;
	this.category = category;
	this.price = price;
}

function initialiseMenu(){
	localStorage.clear();
	let allMenuItems = [];


	let m1 = new Menu_item("carbonara.jpg", "Pasta Carbonara", "Second Course", 9.00);
	let m2 = new Menu_item("soup.jpg", "Chicken Soup", "Entrees", 13.00);
	let m3 = new Menu_item("salad2.jpg", "Vitamin Salad", "Salads", 7.00);
	let m4 = new Menu_item("pizza.jpg", "Pizza", "Main Course", 15.00);
	let m5 = new Menu_item("pancakes.jpg", "Pancakes", "Desserts", 9.00);

	allMenuItems.push(m1);
	allMenuItems.push(m2);
	allMenuItems.push(m3);
	allMenuItems.push(m4);
	allMenuItems.push(m5);

	// asa le salvezi
	localStorage.setItem("allMenuItems", JSON.stringify(allMenuItems));
}

function populateMenu(){
	// asa le scoti
	let newList = JSON.parse(localStorage.getItem("allMenuItems"));
	populateContainer(newList);

}

function populateContainer(imageList){
	let cardContainer = document.getElementById("div-container2");

	imageList.forEach( dish =>{
	let htmlText = `
                      <img class="menu-image" src=${dish.url} alt="dish">
                      <div class="container">
                      	<h4><b>${dish.name}</b></h4>
                      	<p>${dish.category}</p>
                      	<p class="dish-price">${dish.price}</p>
                      </div>
                      `;

   	let card = document.createElement("div");
	let attr = document.createAttribute("class");
	attr.value = "card";
	card.setAttributeNode(attr);

	card.innerHTML = htmlText;

	cardContainer.appendChild(card);
	});

}

