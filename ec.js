document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cart = [];
    const prices = {
        item1: 499,
        item2: 499,
        item3: 299,
        item4: 499,
        item5: 499,
        item6: 299,
        item7: 299,
        item8: 299,
        item9: 299,
        item10:299,
        item11:699,
        item12:699,
        item13:699,
        item14:699,
        item15:699,
        item16:699,
        item17:699,
        item18:699,
        item19:699,
        item20:699,
    
    };

    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div>${item.title} - Size ${item.size}</div>
                <div>₹${item.price}</div>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        totalPrice.textContent = `Total Price: ₹${total}`;
    }

    function addToCart(id) {
        const selectedProduct = document.getElementById(id);
        const title = selectedProduct.querySelector(".title").textContent;
        const size = selectedProduct.querySelector("select").value;
        const price = prices[id];
        const image = selectedProduct.querySelector("img").src;

        const item = {
            id,
            title,
            size,
            price,
            image
        };

        cart.push(item);
        renderCart();
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    }

    document.querySelectorAll(".add-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            addToCart(id);
        });
    });

    cartItems.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const id = e.target.getAttribute("data-id");
            removeFromCart(id);
        }
    });

    checkoutBtn.addEventListener("click", () => {
        alert("Thank you for purchase!");
        cart = [];
        renderCart();
    });

    renderCart(); // Render initial cart items
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  document.getElementById('orderForm').style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';
});


