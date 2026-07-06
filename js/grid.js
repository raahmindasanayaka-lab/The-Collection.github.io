const products = [
  { name: "Cotton Hoodie",    price: 2000, color: "Black",  featured: true  },
  { name: "Brown Hoodie",     price: 2000, color: "Brown",  featured: false },
  { name: "Black Hoodie",     price: 2500, color: "Black",  featured: false },
  { name: "Oversized Hoodie", price: 3000, color: "Grey",   featured: false },
  { name: "XL Hoodie",        price: 3500, color: "Navy",   featured: false }
];

const grid = document.getElementById("product-grid");

const cardHTML = products.map(({ name, price, color, featured }) => {

  const cardClass = featured
    ? "product-card featured"
    : "product-card";

  return `
  <div class="${cardClass}">
  <img class="product-card__image" src="images/cotton.png" alt="${name}">
  <h2 class="product-card__title">${name}</h2>
  <p class="product-card__color">${color}</p>
  <p class="product-card__price"><b>${price}</b></p>
  <button class="btn btn--primary">Order Now</button>
  </div>
  `;
});

grid.innerHTML = cardHTML.join("");
