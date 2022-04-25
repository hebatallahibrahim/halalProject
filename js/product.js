const food = [{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v2HWqCQla99hROL99yQs1hMBxuaSXhdlOQ&usqp=CAU",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "breakfast",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hjTQM8WlUJ-YWv_z0jocQbfm0TXGmKiS4Q&usqp=CAU",
    name: "Diner Double",
    price: "$13.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "lunch",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP067k-pfM7zZToONwankt3skilG_iFJydrw&usqp=CAU",
    name: "Godzilla Milkshake",
    price: "$6.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "shakes",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHXRjzCUyX2SVA4f693Z-49av993prK6s4A&usqp=CAU",
    name: "Country Delight",
    price: "$20.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "breakfast",
},
{
    img: "data:image/jpeg;base64,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",
    name: "Egg Attack",
    price: "$22.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "lunch",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCqQWo3A_pr54WwL5yE6qzMLrLh6HSN0H1g&usqp=CAU",
    name: "Oreo Dream",
    price: "$18.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "shakes",
},
{
    img: "data:image/jpeg;base64,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",
    name: "Bacon Overflow",
    price: "$8.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "breakfast",
},
{
    img: "data:image/jpeg;base64,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",
    name: "American Classic",
    price: "$12.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "lunch",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nM9FwXp1SbPRYtRC_LFz98nT6XtRzDKTiA&usqp=CAU",
    name: "Quarantine Buddy",
    price: "$16.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "shakes",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOHg9KG8xyfwmB16I3yq9QxbkKrxX6DP8wg&usqp=CAU",
    name: "Steak Dinner",
    price: "$39.99",
    desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "dinner",
},
];


const img = document.querySelector('img');
const name = document.querySelector('.name');
const price = document.querySelector('.price');
const desp = document.querySelector('.desp');
const menu = document.querySelector('.menu');
const btns = document.querySelectorAll('.btn');
let itemType;


(function() {
display(itemType = "all");
})();

// display function
function display(itemType) {
menu.innerHTML = "";
food.forEach(function(item) {
    if (item.type === itemType || itemType === "all") {
        menu.innerHTML += `
            <div class="item">
                <div class="img-container">
                    <img src="${item.img}" alt="item">
                </div>
                <div class="text-section">
                    <div class="name-section">
                        <h3 class="name">${item.name}</h3>
                        <span class="price">${item.price}</span>
                    </div>
                    <hr>
                    <div class="desp-section">
                        <p>${item.desp}</p>
                    </div>
            </div>
        `
    }
})
}


btns.forEach(function(btn) {
btn.addEventListener('click', function() {
    if (btn.classList.contains('all')) {
        itemType = "all";
        display(itemType);
    } else if (btn.classList.contains('breakfast')) {
        itemType = "breakfast";
        display(itemType);
    } else if (btn.classList.contains('lunch')) {
        itemType = "lunch";
        display(itemType);
    } else if (btn.classList.contains('shakes')) {
        itemType = "shakes";
        display(itemType);
    } else if (btn.classList.contains('dinner')) {
        itemType = "dinner";
        display(itemType);
    }
})
})