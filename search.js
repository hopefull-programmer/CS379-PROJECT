const Products = [
    { id: 1, name: 'ps5', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/pic.png', discount: 20 },
{ id: 2, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/pro.png', discount: 25 },
{ id: 3, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/slim.png', discount: 22.22 },
{ id: 4, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/steam.png', discount: 20 },
{ id: 5, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/nin.png', discount: 20 },
{ id: 6, name: 'xbox seris x', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/xbox.png', discount: 25 },
{ id: 7, name: 'atari', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/nin.png', discount: 9.09 },
{ id: 8, name: 'gameboy', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/gameboy.png', discount: 20 },
{ id: 9, name: 'Psp', oldPrice: 85, newPrice: 65, imageUrl: 'images/pic/psp.png', discount: 23.53 },
{ id: 10, name: 'playstation 4', oldPrice: 110, newPrice: 88, imageUrl: 'images/pic/ps4.png', discount: 20 },
{ id: 11, name: 'ps5', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/11.png', discount: 20 },
{ id: 12, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/12.png', discount: 25 },
{ id: 13, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/13.png', discount: 22.22 },
{ id: 14, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/14.png', discount: 20 },
{ id: 15, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/15.png', discount: 20 },
{ id: 16, name: 'nintendo switch', oldPrice: 77, newPrice: 60, imageUrl: 'images/pic/16.png', discount: 20 },
{ id: 17, name: 'nintendo switch', oldPrice: 77, newPrice: 60, imageUrl: 'images/pic/17-c.png', discount: 20 },
{ id: 18, name: 'ps5', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/1.png', discount: 20 },
{ id: 19, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/2.png', discount: 25 },
{ id: 20, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/3.png', discount: 22.22 },
{ id: 21, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/4.png', discount: 20 },
{ id: 22, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/5.png', discount: 20 },
{ id: 23, name: 'xbox seris x', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/6.png', discount: 25 },
{ id: 24, name: 'atari', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/7.png', discount: 9.09 },
{ id: 25, name: 'gameboy', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/8.png', discount: 20 },
{ id: 26, name: 'Psp', oldPrice: 85, newPrice: 65, imageUrl: 'images/pic/9.png', discount: 23.53 },
{ id: 27, name: 'playstation 4', oldPrice: 110, newPrice: 88, imageUrl: 'images/pic/10.png', discount: 20 },
{ id: 28, name: 'ps5 pro', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/17.png', discount: 25 },
{ id: 29, name: 'ps5 slim', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/18.png', discount: 22.22 },
{ id: 30, name: 'steam deck', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/19.png', discount: 20 },
{ id: 31, name: 'nintendo switch', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/20.png', discount: 20 },
{ id: 32, name: 'xbox seris x', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/21.png', discount: 25 },
{ id: 33, name: 'atari', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/22.png', discount: 9.09 },
{ id: 34, name: 'gameboy', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/23.png', discount: 20 },
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
