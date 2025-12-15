document.addEventListener("DOMContentLoaded", () => {
  let prevScrollPos = window.pageYOffset;
  const footer = document.getElementById("footer");

  if (footer) {
    window.addEventListener(
      "scroll",
      () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          footer.style.transform = "translateY(0)";
        } else {
          footer.style.transform = "translateY(100%)";
        }
        prevScrollPos = currentScrollPos;
      },
      { passive: true }
    );
  }

  // Shopping cart (exposed on window for simple demos)
  window.cart = window.cart || [];
  window.cartTotal = window.cartTotal || 0;

  window.addToCart = function (productName, productPrice) {
    const price = Number(productPrice) || 0;
    window.cart.push({ name: String(productName), price });
    window.cartTotal = (window.cartTotal || 0) + price;
    window.updateCart && window.updateCart();
  };

  window.updateCart = function () {
    const cartItems = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");

    if (cartItems) {
      cartItems.innerHTML = "";
      (window.cart || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
      });
    }

    if (cartTotalElement) {
      cartTotalElement.textContent = (window.cartTotal || 0).toFixed(2);
    }
  };

  // Initialize cart display if present
  window.updateCart();
});