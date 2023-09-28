"use strict"

function renderCoffee(coffee) {

    let html = '<div class=container text-center coffee">';
    html += `<div class="row">`
    html += `<div class="col">${coffee.name}</div>`;
    html += `<div class="col">${coffee.roast}</div>`;
    html += `</div>`
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;

    const filteredCoffees = [];
    
    coffees.forEach( coffee => {
        
        if (selectedRoast === "all" ||
            coffee.roast === selectedRoast 
            ) {
            filteredCoffees.push(coffee);
        }
        // if(coffee.name === selectedName){
        //     filteredCoffees.push(coffee);
        // }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e){
    e.preventDefault();
    const selectedName = searchedCoffee.value.trim().toLowerCase();

    const searchedCoffees = [];

    coffees.forEach( coffee => {

        if(coffee.name.toLowerCase().includes(selectedName)){
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchedCoffees);
   
}
const searchedCoffee = document.querySelector('#search');

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
coffees.sort((a,b)=> b.id - a.id);

const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const searchButton = document.querySelector('#search-btn');
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchButton.addEventListener('click', searchCoffees);

