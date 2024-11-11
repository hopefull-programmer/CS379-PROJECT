
    const Products = [
        { id: 1, name: 'PlayStation 5 Console (Disc Version) With Controller', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/pic.png', discount: 20, company: 'Sony', category: 'GameConsoles' },
        { id: 2, name: 'PlayStation 5 Pro-Console ( Official KSA Version )', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/pro.png', discount: 25, company: 'Sony', category: 'GameConsoles' },
        { id: 3, name: 'PlayStation 5 Slim Console (International Version) Digital Edition With Controller', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/slim.png', discount: 22.22, company: 'Sony', category: 'GameConsoles' },
        { id: 4, name: 'Steam Deck OLED 1 TB Handheld Console', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/steam.png', discount: 20, company: 'Valve', category: 'GameConsoles' },
        { id: 5, name: 'Nintendo Switch OLED - 7-inch OLED Display & Adjustable Kickstand', oldPrice: 75, newPrice: 60, imageUrl: 'images/gs-products/nin.png', discount: 20, company: 'Nintendo', category: 'GameConsoles' },
        { id: 6, name: 'Xbox Series X 1TB Console (Disc Version) With Controller', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/xbox.png', discount: 25, company: 'Microsoft', category: 'GameConsoles' },
        { id: 7, name: 'atari Flashback9 Deluxe With 110 Built-In Games', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/atari.png', discount: 9.09, company: 'Atari', category: 'GameConsoles' },
        { id: 8, name: 'gameboy 400-In-1 MIni Handheld Gaming Console', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/gameboy.png', discount: 20, company: 'Nintendo', category: 'GameConsoles' },
        { id: 9, name: 'Portable PSP Handheld Console - 4.3-inch Display, 8GB Storage, Black', oldPrice: 85, newPrice: 65, imageUrl: 'images/pic/psp.png', discount: 23.53, company: 'Sony', category: 'GameConsoles' },
        { id: 10, name: 'PlayStation 4 Slim 500GB Console With Controller', oldPrice: 110, newPrice: 88, imageUrl: 'images/pic/ps4.png', discount: 20, company: 'Sony', category: 'GameConsoles' },
        { id: 11, name: 'EOS 2000D DSLR Camera With 18-55 DC Lens 24.1 MP APS-C Sensor Optical Viewfinder', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/11.png', discount: 20, company: 'Canon', category: 'Cameras' },
        { id: 12, name: 'EOS 4000D DSLR With EF-S 18-55mm F/3.5-5.6 III Lens 18MP Built-In Wi-Fi Black', oldPrice: 78, newPrice: 60, imageUrl: 'images/pic/18-c.png', discount: 20, company: 'Canon', category: 'Cameras' },
        { id: 13, name: 'Alpha 7 Iv Full-Frame Mirrorless Interchangeable Lens Camera, 33 Mega Pixel Full-Frame Back-Illuminated Exmor R cmos Image Sensor, Ilce-7M4', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/13.png', discount: 22.22, company: 'Sony', category: 'Cameras' },
        { id: 14, name: 'FUJIFILM Digital Camera X-T5 Black - XF16-80MM Kit', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/14.png', discount: 20, company: 'Fujifilm', category: 'Cameras' },
        { id: 15, name: 'Nikon Z 7II Mirrorless Camera - High-Resolution 45.7MP, 10fps Continuous', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/15.png', discount: 20, company: 'Nikon', category: 'Cameras' },
        { id: 16, name: 'Lumix EOS 5D Mark IV DSLR Camera With EF 24-105mm IS USM Lens Fast Versatile Full Frame Camera 30.4 MP 4K Wi-Fi GPS', oldPrice: 77, newPrice: 60, imageUrl: 'images/pic/16.png', discount: 20, company: 'Canon', category: 'Cameras' },
        { id: 17, name: 'Alpha 7R V Full Frame Mirrorless Interchangeable Lens Camera With 61.0MP Full-Frame Back-Illuminated Exmor R CMOS Sensor, Black', oldPrice: 77, newPrice: 60, imageUrl: 'images/pic/17-c.png', discount: 20, company: 'Sony', category: 'Cameras' },
        { id: 18, name: 'ONIX VACUUM CLEANER 21 LTR - Powerful 2200W Input', oldPrice: 100, newPrice: 80, imageUrl: 'images/pic/1.png', discount: 20, company: 'Onix', category: 'HomeAppliances' },
        { id: 19, name: 'elba Load Washing Machine ThinQ WiFi 9 kg', oldPrice: 150, newPrice: 112.50, imageUrl: 'images/pic/2.png', discount: 25, company: 'Elba', category: 'HomeAppliances' },
        { id: 20, name: 'HISENSE Refrigerator 7 Cuft Freezer 1.8 Cuft Inverter Color Silver 211 kW', oldPrice: 90, newPrice: 70, imageUrl: 'images/pic/3.png', discount: 22.22, company: 'Hisense', category: 'HomeAppliances' },
        { id: 21, name: 'KOOLEN 30 Liter Digital Microwave Oven, 900 Watts Power, 11 Power Levels, 6/7 Auto Menu, With Grill Function, Mirror Finish Door 30 L 900 W', oldPrice: 200, newPrice: 160, imageUrl: 'images/pic/4.png', discount: 20, company: 'Koolen', category: 'HomeAppliances' },
        { id: 22, name: 'GLEM GAS Gas Oven 5 Burners Jumbo 90X60 Steel', oldPrice: 75, newPrice: 60, imageUrl: 'images/pic/fur.png', discount: 20, company: 'Glem Gas', category: 'HomeAppliances' },
        { id: 23, name: 'KENWOOD Blender, Ice Crush Function, Multi Mill, Grinder, 2 Speeds, 2 L 500 W', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/6.png', discount: 25, company: 'Kenwood', category: 'HomeAppliances' },
        { id: 24, name: 'Philips Easy Speed Steam Iron 220 ml 2000 W', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/iron.png', discount: 9.09, company: 'Philips', category: 'HomeAppliances' },
        { id: 25, name: 'LC Countertop Electric Kettle 500ml 500.0 ml', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/8.png', discount: 20, company: 'LC', category: 'HomeAppliances' },
        { id: 26, name: 'Techno Best 2 Slice Electric Toaster/Efficient Breakfast Toasting/Breakfast machine with Browning control/Plastic 650 W', oldPrice: 85, newPrice: 65, imageUrl: 'images/pic/9.png', discount: 23.53, company: 'Techno Best', category: 'HomeAppliances' },
        { id: 27, name: 'Rebune Coffee Machine - 1.2L Capacity, 1050W Power, Premium Brewing', oldPrice: 110, newPrice: 88, imageUrl: 'images/pic/10.png', discount: 20, company: 'Rebune', category: 'HomeAppliances' },
        { id: 28, name: 'LG 4K Ultra HD Smart LED TV 65 inch', oldPrice: 800, newPrice: 640, imageUrl: 'images/pic/17.png', discount: 20, company: 'LG', category: 'TV' },
        { id: 29, name: 'Samsung QLED 55 inch Smart TV with 4K Resolution', oldPrice: 750, newPrice: 600, imageUrl: 'images/pic/18.png', discount: 20, company: 'Samsung', category: 'TV' },
        { id: 30, name: 'Sony Bravia 65 inch LED 4K UHD Smart TV', oldPrice: 1000, newPrice: 800, imageUrl: 'images/pic/19.png', discount: 20, company: 'Sony', category: 'TV' },
        { id: 31, name: '55 Inch 4K UHD Smart TV | 60HZ55-Inch 4K UHD Smart TV - 60Hz, Smart TV with Streaming Support', oldPrice: 120, newPrice: 90, imageUrl: 'images/pic/20.png', discount: 25, company: 'Generic', category: 'TV' },
        { id: 32, name: '55" 4K UHD LED Smart Google TV - HDR, Google Assistant, Ultra HD', oldPrice: 55, newPrice: 50, imageUrl: 'images/pic/21.png', discount: 9.09, company: 'Generic', category: 'TV' },
        { id: 33, name: '65 Inch TV 4K QLED Pro Dolby Vision Atmos Onkyo 2.1CH Slim & Uni-body Google TV, 120HZ', oldPrice: 300, newPrice: 240, imageUrl: 'images/pic/22.png', discount: 20, company: 'Generic', category: 'TV' },
        {id: 34,name: 'TCL 40 Inch 2K Ultra HD Smart Android LED TV With Free Wall Mount - Frameless Design', oldPrice: 150, newPrice: 112.50,imageUrl: 'images/pic/23.png',discount: 25, company: 'TCL', category: 'TV' }    
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
        <h5 class="product-name">${product.name}</h5>
        <p class="old-price">${product.oldPrice.toFixed(2)} SR</p>
        <p class="new-price">${product.newPrice.toFixed(2)} SR</p>
    </a>
    <div style="display:flex;">
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
