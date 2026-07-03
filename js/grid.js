let products = [
  { name: "Cotton Hoodie",    price: 2000, color: "Black",  featured: true  },
  { name: "Brown Hoodie",     price: 2000, color: "Brown",  featured: false },
  { name: "Black Hoodie",     price: 2500, color: "Black",  featured: false },
  { name: "Oversized Hoodie", price: 3000, color: "Grey",   featured: false },
  { name: "XL Hoodie",        price: 3500, color: "Navy",   featured: false }
];

let grid = document.getElementById("product-grid");

products.forEach(product => {
  let card = document.createElement("div");
  card.className = product.featured ? "product-card featured" : "product-card";

  card.innerHTML = `
        <img src="images/cotton.png" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.color}</p>
        <p><b>Rs.${product.price}</b></p>
        <button>Order Now</button>
    `;

  grid.appendChild(card);
});
