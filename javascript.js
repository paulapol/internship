let menu_items=
[
	{
		"name": "Pasta Carbonara",
		"category":"Second Course",
		"price": 9.00
	},
	{
		"name": "Chicken Soup",
		"category":"Entrees",
		"price": 13.00
	},
	{
		"name": "Vitamin Salad", 
		"category":"Salads",
		"price": 9.00
	},
	{
		"name": "Pizza",
		"category":"Main Course",
		"price": 9.00
	},
	{
		"name": "Pancakes",
		"category":"Dessert",
		"price": 7.00
	}
]

console.log(JSON.stringify(menu_items));

/*
var range = document.getElementById('range');

var slider = noUiSlider.create(range, {

    range: {
        'min': 1300,
        'max': 3250
    },

    step: 150,

    // Handles start at ...
    start: [1450, 2050, 2350, 3000],

    // ... must be at least 300 apart
    margin: 300,

    // ... but no more than 600
    limit: 600,

    // Display colored bars between handles
    connect: true,

    // Put '0' at the bottom of the slider
    direction: 'rtl',
    orientation: 'vertical',

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    }),

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
}); */