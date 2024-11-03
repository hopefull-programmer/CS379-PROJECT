     const Products = [
        { id: 1, name: 'ps5', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/pic.png', discount: 20 , category: "GameConsoles" },
        { id: 2, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/pro.png', discount: 25 , category: "GameConsoles"  },
        { id: 3, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/slim.png', discount: 22.22 , category: 'GameConsoles' },
        { id: 4, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/steam.png', discount: 20 , category: 'GameConsoles' },
        { id: 5, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/nin.png', discount: 20 , category: 'GameConsoles' },
        { id: 6, name: 'xbox seris x', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/xbox.png', discount: 25 , category: 'GameConsoles' },
        { id: 7, name: 'atari', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/nin.png', discount: 9.09 , category: 'GameConsoles' },
        { id: 8, name: 'gameboy', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/gameboy.png', discount: 20 , category: 'GameConsoles' },
        { id: 9, name: 'Psp', oldPrice: 85, newPrice: 65, imageUrl: 'images/pic/psp.png', discount: 23.53 , category: 'GameConsoles' },
        { id: 10, name: 'playstation 4', oldPrice: 110, newPrice: 88, imageUrl: 'images/pic/ps4.png', discount: 20 , category: 'GameConsoles' },
  { id: 11, name: 'ps5', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/11.png', discount: 20 , category: 'Cameras' },
  { id: 12, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/12.png', discount: 25 , category: 'Cameras' },
  { id: 13, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/13.png', discount: 22.22 , category: 'Cameras' },
  { id: 14, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/14.png', discount: 20 , category: 'Cameras' },
  { id: 15, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/15.png', discount: 20 , category: 'Cameras' },
  { id: 16, name: 'ps5', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/1.png', discount: 20 , category: 'Home Appliances' },
  { id: 17, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/2.png', discount: 25 , category: 'Home Appliances' },
  { id: 18, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/3.png', discount: 22.22 , category: 'Home Appliances' },
  { id: 19, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/4.png', discount: 20 , category: 'Home Appliances' },
  { id: 20, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/5.png', discount: 20 , category: 'Home Appliances' },
  { id: 21, name: 'xbox seris x', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/6.png', discount: 25 , category: 'Home Appliances' },
  { id: 22, name: 'atari', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/7.png', discount: 9.09 , category: 'Home Appliances' },
  { id: 23, name: 'gameboy', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/8.png', discount: 20 , category: 'Home Appliances' },
  { id: 24, name: 'Psp', oldPrice: 85, newPrice: 65, imageUrl: 'images/pic/9.png', discount: 23.53 , category: 'AHome Appliances' },
  { id: 25, name: 'playstation 4', oldPrice: 110, newPrice: 88, imageUrl: 'images/pic/10.png', discount: 20 , category: 'Home Appliances' },
  { id: 26, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/17.png', discount: 25 , category: 'TV' },
  { id: 27, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/18.png', discount: 22.22 , category: 'TV' },
  { id: 28, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/19.png', discount: 20 , category: 'TV' },
  { id: 29, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/20.png', discount: 20 , category: 'TV' },
  { id: 30, name: 'xbox seris x', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/21.png', discount: 25 , category: 'TV' },
  { id: 31, name: 'atari', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/22.png', discount: 9.09 , category: 'TV' },
  { id: 32, name: 'gameboy', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/23.png', discount: 20 , category: 'TV' },
        ];


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displaySearchResults(filteredProducts) {
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card'); // Add a class for styling

            productCard.innerHTML = `
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.imageUrl}" alt="Product ${product.id}" class="product-image" style="width: 150px;">
                    <h3>${product.name}</h3>
                    <p class="old-price">SR${product.oldPrice.toFixed(2)}</p>
                    <p class="new-price">SR${product.newPrice.toFixed(2)} (Discount: ${product.discount}%)</p>
                </a>
                <div style="display:flex; justify-content: space-between; align-items: center;">
                    <button id="wish" data-product-id="${product.id}" onclick="addWishList(${product.id})" style="border-radius:50px;">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <button id="buy" data-product-id="${product.id}" onclick="buyProduct(${product.id})" style="width:80%; font-size:15px;">
                        Add to Cart &nbsp;<i class="fa-sharp fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            `;
            resultsContainer.appendChild(productCard);
        });
    } else {
        resultsTitle.textContent = 'No results found.';
    }
}


function filterResults() {
    const query = getQueryParam('query').toLowerCase();

    const filteredProducts = Products.filter(product => {
        return product.name.toLowerCase().includes(query); // Match product name with query
    });

    displaySearchResults(filteredProducts);
}

document.getElementById('applyFilters').addEventListener('click', filterResults);

window.onload = () => {
    const query = getQueryParam('query');
    const resultsTitle = document.getElementById('resultsTitle');
    resultsTitle.textContent = `Search Results for: ${query}`;
    filterResults(); // Display results on page load
};
