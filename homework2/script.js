const section = document.querySelector('section')
const cartItems = [
    { name: 'Apple', price: 120, quantity: 3 },
    { name: 'Banana', price: 50, quantity: 5 },
    { name: 'Orange', price: 6, quantity: 2 },
    { name: 'PineApple', price: 2, quantity: 2 },
    { name: 'Coconut', price: 90, quantity: 2 },
    { name: 'Peach', price: 45, quantity: 2 },
]

const cartItems1 = cartItems.map((el) => `
<div>
<h1>${el.name}</h1>
<p>${el.price}</p>
<span>${el.quantity}</span>
</div>
`);

section.innerHTML = cartItems1.join('');