const products = [
  { name: "Cotton Hoodie",    price: 2000, color: "Black",  featured: true  },
  { name: "Brown Hoodie",     price: 2000, color: "Brown",  featured: false },
  { name: "Black Hoodie",     price: 2500, color: "Black",  featured: false },
  { name: "Oversized Hoodie", price: 3000, color: "Grey",   featured: false },
  { name: "XL Hoodie",        price: 3500, color: "Navy",   featured: false }
];

const grid = document.getElementById("product-grid");

const cardHTML = products.map(({ name, price, color, featured }) => {

  const cardClass = featured ? "product-card featured" : "product-card";
  return `
  <div class="${cardClass}">
  <img src="images/cotton.png" alt="${name}">
  <h2>${name}</h2>
  <p>${color}</p>
  <p><b>Rs.${price}</b></p>
  <button>Order Now</button>
  </div>
  `;
});

grid.innerHTML = cardHTML.join("");
