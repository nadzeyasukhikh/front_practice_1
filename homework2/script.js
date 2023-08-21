const section = document.querySelector("section");
const cartItems = [
  { name: "Apple", price: 120, quantity: 3 },
  { name: "Banana", price: 50, quantity: 5 },
  { name: "Orange", price: 6, quantity: 2 },
  { name: "PineApple", price: 2, quantity: 2 },
  { name: "Coconut", price: 90, quantity: 2 },
  { name: "Peach", price: 45, quantity: 2 },
  { name: "Mango", price: 70, quantity: 4 },
  { name: "Grapes", price: 30, quantity: 3 },
  { name: "Watermelon", price: 120, quantity: 1 },
  { name: "Cherry", price: 80, quantity: 2 },
  { name: "Pear", price: 55, quantity: 3 },
  { name: "Kiwi", price: 60, quantity: 2 },
  { name: "Strawberry", price: 40, quantity: 5 },
  { name: "Blueberry", price: 75, quantity: 2 },
  { name: "Raspberry", price: 90, quantity: 3 },
  { name: "Pomegranate", price: 100, quantity: 1 },
  { name: "Blackberry", price: 55, quantity: 4 },
  { name: "Apricot", price: 35, quantity: 3 },
  { name: "Plum", price: 30, quantity: 2 },
  { name: "Lemon", price: 10, quantity: 5 },
  { name: "Lime", price: 15, quantity: 2 },
  { name: "Cantaloupe", price: 80, quantity: 1 },
  { name: "Honeydew", price: 70, quantity: 2 },
  { name: "Fig", price: 50, quantity: 3 },
  { name: "Guava", price: 65, quantity: 2 },
].map(item => {
  return {
      ...item,
      id: Math.floor(Math.random() * 1000000)
  };
});

document.getElementById("addItemForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("itemName").value;
  const price = parseFloat(document.getElementById("itemPrice").value);
  const quantity = parseInt(document.getElementById("itemQuantity").value);

  const newItem = {
      name: name,
      price: price,
      quantity: quantity,
      id: Math.floor(Math.random() * 1000000)
  };

  cartItems.push(newItem);
  renderItems(); 
  event.target.reset(); 
});



function renderItems() {
  section.innerHTML = cartItems
    .map(
      (el) => `
<div class="cards">
<h2>${el.name}</h2>
<h4> price: ${el.price} $</h4>
<h4> quantity: ${el.quantity} </h4>
<div class="addBasc">
<button class="btnDelete" data-id="${el.id}"></button>
<button class="btnCart" data-id="${el.id}" data-price="${el.price}" > </button>

</div>
</div>
`
    )
    .join("");
    addToBasketListeners();

    const deleteButtons = document.querySelectorAll(".btnDelete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function() {
        const itemId = parseInt(this.dataset.id);
        const index = cartItems.findIndex(item => item.id === itemId);
        
        if (index !== -1) {
          cartItems.splice(index, 1);
          renderItems();
        }
      });
    });
  
    updateTotalValues();
  }
  
  renderItems();

const low = document.querySelector(".low");
low.addEventListener("click", () => {
  cartItems.sort((a, b) => a.price - b.price);
  renderItems();
});
const high = document.querySelector(".high");
high.addEventListener("click", () => {
  cartItems.sort((a, b) => b.price - a.price);
  renderItems();
});



const basket = {
  total: 0,
  sum: 0,
  addedProducts: [],
  update() {
      document.querySelector(".prdPrice").innerText = `products price: ${this.total} $`;
      document.querySelector(".prdQuant").innerText = `products quantity: ${this.sum}`;
      document.querySelector(".prdName").innerHTML = `products names: <br> ${this.addedProducts.join("<br> ")}`;
    }
  };


function addToBasketListeners() {
  const addToBasket = document.querySelectorAll(".btnCart ");

  addToBasket.forEach((button) => {
      button.addEventListener("click", function () {
          const itemId = parseInt(this.dataset.id);
          const item = cartItems.find(item => item.id === itemId);
          const price = parseFloat(this.dataset.price);

          basket.total += price;
          basket.sum += 1;
          basket.addedProducts.push(item.name);
          basket.update();

          
      });
  });
}




function updateTotalValues() {
const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
document.querySelector(".totalPrice").innerText = `total products price: ${totalCost} $`;
document.querySelector(".totalQuant").innerText = `total products quantity: ${totalQuantity} `;
}