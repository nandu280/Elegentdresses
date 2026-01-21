// ===== GLOBAL CART ARRAY =====
// This array stores all items added to the cart
let cart = [];

// ===== FILTER PRODUCTS FUNCTION =====
// This function filters products based on category

function filterProducts(category) {
    // Step 1: Get all filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Step 2 & 3: Remove 'active' class from all buttons, add to clicked button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Step 4: Get all product cards
    const cards = document.querySelectorAll('.card');
    
    // Step 5 & 6 & 7: Loop through cards and filter
    cards.forEach(card => {
        // Get the data-category attribute of the card
        const cardCategory = card.getAttribute('data-category');
        
        // Show card if 'all' is selected OR if card category matches
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function goToShop() {
    // Find the shop section element
    const shopSection = document.getElementById("shop");
    // Scroll to it with smooth animation
    shopSection.scrollIntoView({ behavior: "smooth" });
}


/*
function sendMessage(e) {
    // Step 1: Prevent the page from reloading (default form behavior)
    e.preventDefault();
    
    // Step 2: Show success message
    alert("Message sent successfully! We'll get back to you soon.");
    
    // Step 3: Clear all form fields
    e.target.reset();
}
*/
function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // popup feedback
    const popup = document.getElementById("cartPopup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}
//discount
/*function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // discount only for first two products
    if (name === "Floral Summer Dress" || name === "Elegant Evening Gown") {
        price = price - (price * 10 / 100); // 10% discount
    }

    cart.push({
        name: name,
        price: price,
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));
}
*/
function validateFeedback() {

    // 1. Get values from input fields
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    // 2. Email validation
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Invalid Email");
        return false;
    }

    // 3. Mobile validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Invalid Mobile Number");
        return false;
    }

    // 4. Get old feedback from localStorage (if any)
    var allFeedback = localStorage.getItem("feedback") || "";

    // 5. Add new feedback
    allFeedback +=
        "Email: " + email + "\n" +
        "Mobile: " + mobile + "\n" +
        "Message: " + message + "\n" +
        "--------------------------\n";

    // 6. Save back to localStorage
    localStorage.setItem("feedback", allFeedback);

    // 7. Create text file and download
    //change
    /*var blob = new Blob([allFeedback], { type: "text/plain" });
    var link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "feedback.txt";
    link.click();*/
    // added 7. Save as DOC file
saveAsDoc(allFeedback);

    // 8. Success message
    alert("Feedback saved successfully");
// 9. Clear form fields after submit
document.getElementById("email").value = "";
document.getElementById("mobile").value = "";
document.getElementById("message").value = "";

    return false; // stop form refresh
}
//doc
function saveAsDoc(content) {
    var blob = new Blob(
        ["<html><body><pre>" + content + "</pre></body></html>"],
        { type: "application/msword" }
    );

    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback.doc";
    link.click();
}




