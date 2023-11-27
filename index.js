let prevScrollPos = window.pageYOffset;
      const footer = document.getElementById("footer");

      window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
          // Scrolling up
          footer.style.transform = "translateY(0)";
        } else {
          // Scrolling down
          footer.style.transform = "translateY(100%)";
        }

        prevScrollPos = currentScrollPos;
      };

      // JavaScript for the shopping page
      let cart = [];
      let cartTotal = 0;

      function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        cartTotal += productPrice;
        updateCart();
      }

      function updateCart() {
        const cartItems = document.getElementById("cartItems");
        const cartTotalElement = document.getElementById("cartTotal");

        cartItems.innerHTML = "";
        cart.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(li);
        });

        cartTotalElement.textContent = cartTotal.toFixed(2);
      }