const allProducts = [
    // --- Women's Products (id 1-6) ---
    {
        id: '1',
        name: 'Elegant Floral Maxi Dress',
        category: 'Women',
        categoryLink: 'women.html',
        price: 79.99,
        description: "A flowing maxi dress with a delicate floral pattern, perfect for a garden party or a summer evening. Made from breathable, sustainable fabric for ultimate comfort and style.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Floral+Maxi+1'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: [{ name: 'Cream', hex: '#f5f5dc' }]
    },
    {
        id: '2',
        name: 'Classic Silk Button-Up Blouse',
        category: 'Women',
        categoryLink: 'women.html',
        price: 49.99,
        description: "A sophisticated silk blouse that transitions effortlessly from the office to a night out. Features a classic button-up design with a comfortable, relaxed fit.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Silk+Blouse'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [{ name: 'White', hex: '#ffffff' }]
    },
    {
        id: '3',
        name: 'High-Waisted Linen Trousers',
        category: 'Women',
        categoryLink: 'women.html',
        price: 69.99,
        description: "Lightweight and breathable linen trousers, ideal for warm weather. Their relaxed fit and natural fabric offer a blend of comfort and casual elegance.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Linen+Pants'],
        sizes: ['S', 'M', 'L'],
        colors: [{ name: 'Beige', hex: '#c8a165' }]
    },
    {
        id: '4',
        name: 'Chunky Knit Cardigan',
        category: 'Women',
        categoryLink: 'women.html',
        price: 89.99,
        description: "Stay cozy in this oversized cardigan. Made from a soft, chunky knit, it’s the perfect layering piece for those cooler days and adds a touch of bohemian style to any outfit.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Knit+Cardigan'],
        sizes: ['One Size'],
        colors: [{ name: 'Oatmeal', hex: '#d2b48c' }]
    },
    {
        id: '5',
        name: 'Urban Moto-Style Leather Jacket',
        category: 'Women',
        categoryLink: 'women.html',
        price: 149.99,
        description: "An iconic piece for any wardrobe, this fitted leather jacket features asymmetrical zips and a sleek, modern cut. Crafted from high-quality vegan leather, it's a bold statement piece.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Leather+Jacket'],
        sizes: ['S', 'M', 'L'],
        colors: [{ name: 'Black', hex: '#000000' }]
    },
    {
        id: '6',
        name: 'Pleated A-Line Skirt',
        category: 'Women',
        categoryLink: 'women.html',
        price: 55.00,
        description: "This versatile midi skirt features a graceful A-line silhouette and delicate pleats that move beautifully. The elastic waistband provides comfort for all-day wear.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Pleated+Skirt'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: [{ name: 'Olive Green', hex: '#556b2f' }]
    },
    // --- Men's Products (id 7-12) ---
    {
        id: '7',
        name: 'Urban Commuter Jacket',
        category: 'Men',
        categoryLink: 'men.html',
        price: 129.99,
        description: "A stylish and functional jacket designed for the modern urbanite. Water-resistant and with multiple pockets, it's perfect for navigating city life.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Urban+Jacket'],
        sizes: ['M', 'L', 'XL'],
        colors: [{ name: 'Navy', hex: '#000080' }]
    },
    {
        id: '8',
        name: 'Slim Fit Denim Jeans',
        category: 'Men',
        categoryLink: 'men.html',
        price: 89.99,
        description: "Classic slim-fit jeans made from high-quality stretch denim. They offer a comfortable fit with a modern, tapered look that works for any occasion.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Slim+Jeans'],
        sizes: ['30x32', '32x32', '34x34', '36x34'],
        colors: [{ name: 'Dark Blue', hex: '#2c3e50' }]
    },
    {
        id: '9',
        name: 'Classic Crew-Neck T-Shirt',
        category: 'Men',
        categoryLink: 'men.html',
        price: 29.99,
        description: "A versatile and soft cotton t-shirt that's a must-have in every wardrobe. Its timeless design and premium fabric make it ideal for layering or wearing on its own.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Classic+Tee'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [{ name: 'Heather Grey', hex: '#848884' }]
    },
    {
        id: '10',
        name: 'Lightweight Quilted Vest',
        category: 'Men',
        categoryLink: 'men.html',
        price: 75.00,
        description: "This packable quilted vest is your go-to layer for transitional weather. It provides core warmth without the bulk, making it perfect for active outdoor pursuits or daily wear.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Quilted+Vest'],
        sizes: ['M', 'L', 'XL'],
        colors: [{ name: 'Black', hex: '#000000' }]
    },
    {
        id: '11',
        name: 'Structured Cotton Polo Shirt',
        category: 'Men',
        categoryLink: 'men.html',
        price: 45.00,
        description: "A modern take on a classic, this polo shirt is made from structured cotton piqué fabric. It's designed to hold its shape and offer a clean, polished look.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Polo+Shirt'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [{ name: 'Burgundy', hex: '#800020' }]
    },
    {
        id: '12',
        name: 'Minimalist Leather Wallet',
        category: 'Men',
        categoryLink: 'men.html',
        price: 35.00,
        description: "Handcrafted from genuine leather, this minimalist wallet is designed for both style and function. It features multiple card slots and a slim profile to fit comfortably in your pocket.",
        images: ['https://via.placeholder.com/600x800/f0f0f0/333?text=Leather+Wallet'],
        sizes: ['One Size'],
        colors: [{ name: 'Brown', hex: '#a52a2a' }]
    }
];

// Function to get a URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to populate the page
function loadProductData() {
    const productId = getUrlParameter('id');
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        document.getElementById('product-name').innerText = 'Product Not Found';
        document.getElementById('product-price').innerText = '';
        document.getElementById('product-description').innerText = 'The product you are looking for does not exist.';
        return;
    }

    document.getElementById('product-category-link').innerText = product.category;
    document.getElementById('product-category-link').href = product.categoryLink;
    document.getElementById('product-name-breadcrumb').innerText = product.name;
    document.getElementById('product-title').innerText = product.name + ' | Chic Threads';

    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = `$${product.price.toFixed(2)}`;
    document.getElementById('product-description').innerText = product.description;

    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.images[0];
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach((img, index) => {
        if (product.images[index]) {
            img.src = product.images[index];
        } else {
            img.style.display = 'none';
        }
    });

    const sizeSelector = document.getElementById('size-selector');
    sizeSelector.innerHTML = '';
    product.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerText = size;
        sizeSelector.appendChild(option);
    });

    const colorOptionsDiv = document.getElementById('color-options');
    colorOptionsDiv.innerHTML = '';
    product.colors.forEach(color => {
        const span = document.createElement('span');
        span.className = `color-swatch`;
        span.style.backgroundColor = color.hex;
        span.setAttribute('data-color', color.name);
        colorOptionsDiv.appendChild(span);
    });
}

document.addEventListener('DOMContentLoaded', loadProductData);
