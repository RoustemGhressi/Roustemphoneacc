document.addEventListener('DOMContentLoaded', function () {
    // Sample data for products
    const products = [
        {image:'https://tzumi.com/wp-content/uploads/2020/10/wireless-charging-pad-01B.jpg', name: 'Wireless Charging Pad', description: 'Qi-compatible wireless charging pad for smartphones.', price: '$29.99' },
        {image:'https://m.media-amazon.com/images/I/716gAr0KA6L.jpg', name: 'Bluetooth Earbuds', description: 'Wireless Bluetooth earbuds with noise cancellation.', price: '$49.99' },
        {image:'https://www.portronics.com/cdn/shop/products/Modesk-1.jpg?v=1647446052', name: 'Phone Stand Holder', description: 'Adjustable phone stand for watching videos or video calls.', price: '$12.99' },
        {image:'https://m.media-amazon.com/images/I/71b9cokJXBL._AC_UF894,1000_QL80_.jpg', name: 'Protective Phone Case', description: 'Durable and shockproof case for iPhone and Android.', price: '$19.99' },
        {image:'https://m.media-amazon.com/images/I/612nyYJf07S._AC_UF894,1000_QL80_.jpg', name: 'Fast Charging Cable', description: 'USB-C fast charging cable for quick device charging.', price: '$9.99' },
        {image:'https://m.media-amazon.com/images/I/6165fIuc5rL.jpg', name: 'Portable Power Bank', description: 'High-capacity portable power bank for on-the-go charging.', price: '$39.99' },
        {image:'https://m.media-amazon.com/images/I/71rMCcCHVtL.jpg', name: 'Car Phone Mount', description: 'Universal car phone mount for hands-free navigation.', price: '$15.99' },
        // Add more products as needed
    ];

    // Get the products container
    const productsContainer = document.getElementById('products');

    // Populate products using Bootstrap cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card m-2';
        card.innerHTML = `
            <div class="card-body">
                <img src="${product.image}" width="100">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
            
        `;
        productsContainer.appendChild(card);
    });
});
