const cardContainer = document.getElementById('card_container');
const API_URL = 'https://dummyjson.com/products';
const MAX_PRODUCTS = 10;
const PRODUCT09_ID = 9;

// Fetch products from the API
const fetchProducts = async (url) => {
  const response = await fetch(url);
  const { products } = await response.json();
  return products;
};

const filterProducts = (products) => {
  // Find the product with ID 09
  const product09 = products.find((product) => product.id === PRODUCT09_ID);

  // Get the first 10 products
  let first10Products = products.slice(0, MAX_PRODUCTS);

  // Remove the product with ID 09 from the list
  first10Products = first10Products.filter((product) => product.id !== PRODUCT09_ID);

  // Add the product with ID 09 to the beginning of the list
  first10Products.unshift(product09);

  return first10Products;
};

// Create a card for each product
const createCard = (product) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}" />
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;

  cardContainer.appendChild(card);
};

// Load products when the page is loaded
window.addEventListener('load', async () => {
  const products = await fetchProducts(API_URL);
  const filteredProducts = filterProducts(products);
  filteredProducts.forEach((product) => {
    createCard(product);
  });
});
