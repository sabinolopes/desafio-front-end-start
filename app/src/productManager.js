class ProductManager {
  constructor(container) {
    this.container = container;
    this.API_URL = 'https://dummyjson.com/products';
    this.MAX_PRODUCTS = 10;
    this.PRODUCT09_ID = 9;
  }

  async fetchProducts() {
    try {
      const response = await fetch(this.API_URL);
      const { products } = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  filterProducts(products) {
    const product09 = products.find((product) => product.id === this.PRODUCT09_ID);
    let first10Products = products.slice(0, this.MAX_PRODUCTS);
    first10Products = first10Products.filter((product) => product
      .id !== this.PRODUCT09_ID);
    first10Products.unshift(product09);
    return first10Products;
  }

  createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h2>${product.title}</h2>
    `;
    this.container.appendChild(card);
  }

  async loadProducts() {
    const products = await this.fetchProducts();
    const filteredProducts = this.filterProducts(products);
    filteredProducts.forEach((product) => this.createCard(product));
  }
}

const cardContainer = document.getElementById('card_container');
const productManager = new ProductManager(cardContainer);
productManager.loadProducts();
