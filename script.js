// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all "Add to Cart" buttons
    const buyButtons = document.querySelectorAll('.buy-button');
    
    // Add click event listener to each button
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the product card element
            const productCard = this.closest('.product-card');
            
            // Get product details
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('..product-price').textContent;
            
            // Show confirmation message
            alert(`Added to cart!\n\nProduct: ${productName}\nPrice: ${productPrice}`);
            
            // Optional: Change button text temporarily
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#27ae60';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
});
