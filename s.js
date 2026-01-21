//total
/*function renderCart() {

    cartItemsDiv.innerHTML = "";

    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p class='empty'>Your cart is empty.</p>";
        cartTotalDiv.innerHTML = "";
        return;
    }

    cart.forEach((item, index) => {

        const itemSubtotal = item.price * item.qty;
        subtotal += itemSubtotal;

        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <div>${item.name}</div>
                <div>₹${item.price}</div>
                <div class="cart-controls">
                    <button onclick="changeQty(${index}, -1)">−</button>
                    ${item.qty}
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
                <div>₹${itemSubtotal}</div>
                <div>
                    <button class="remove-btn" onclick="removeItem(${index})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });

    /* ===== DISCOUNT ===== */
   /* let discount = 0;
    if (subtotal > 1000) {
        discount = subtotal * 0.10; // 10%
    }

    /* ===== TAX ===== */
   /* let taxableAmount = subtotal - discount;
    let tax = taxableAmount * 0.05; // 5%

    /* ===== FINAL TOTAL ===== */
   /* let finalTotal = taxableAmount + tax;

    cartTotalDiv.innerHTML = `
        <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
        <p>Discount: −₹${discount.toFixed(2)}</p>
        <p>Tax (5%): ₹${tax.toFixed(2)}</p>
        <hr>
        <p><b>Total Payable: ₹${finalTotal.toFixed(2)}</b></p>
    `;
}

function changeQty(index, change) {
    cart[index].qty += change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}


  renderCart();*/
//button
/*<button onclick="toggleSection()">Show / Hide Section</button>

<div id="mySection" style="margin-top:20px; padding:15px; border:1px solid #ccc;">
    <h3>Hidden Section</h3>
    <p>This section can be hidden or shown using the button.</p>
</div>*/
/*function toggleSection() {
    const section = document.getElementById("mySection");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}*/
//offer
/*<style>
    .festive-text {
        background-color: #fff5f8;
        padding: 40px;
        margin: 40px;
        border-left: 6px solid #ff5c8a;
        font-size: 18px;
        line-height: 1.6;
    }

    .festive-text h2 {
        color: #ff5c8a;
        margin-bottom: 15px;
    }
</style>*/
/*<section class="festive-text">
    <h2>About Christmas & New Year Special Offers</h2>
    <p>
        Celebrate the joy of Christmas and welcome the New Year with our special festive offers.
        Enjoy exciting discounts on selected dresses and exclusive seasonal collections.
        These limited-time offers are designed to make your celebrations stylish and memorable.
    </p>
</section>*/
