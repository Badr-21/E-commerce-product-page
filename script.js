const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const numberOfItems = document.querySelector(".number-items");
const addToCartButton = document.querySelector(".add-to-cart");
const numberOfItemsInCart = document.querySelector(".cart-items-number");
const cartIcon = document.querySelector(".cart");
const cartCheckout = document.querySelector(".cart-checkout");

minus.addEventListener("click", () => {
   if (parseInt(numberOfItems.textContent) === 0) return;
   else {
      numberOfItems.textContent = parseInt(numberOfItems.textContent) - 1;
   }
});

plus.addEventListener("click", () => {
   numberOfItems.textContent = parseInt(numberOfItems.textContent) + 1;
});

addToCartButton.addEventListener("click", () => {
   if (parseInt(numberOfItems.textContent) === 0) return;
   else {
      numberOfItemsInCart.classList.add("added");
      numberOfItemsInCart.textContent = numberOfItems.textContent;
   }
});

cartIcon.addEventListener("click", () => {
   if (!cartCheckout.classList.contains("active")) {
      cartCheckout.classList.add("active");
   } else {
      cartCheckout.classList.remove("active");
   }
});

const bigImage = document.querySelector(".big-image");
const smallImages = document.querySelectorAll(".small-images > div");
console.log(smallImages);

Array.from(smallImages).forEach((smallImage) => {
   smallImage.addEventListener("click", () => {
      for (let i = 0; i < smallImages.length; i++) {
         smallImages[i].classList.remove("active");
      }
      smallImage.classList.add("active");
      bigImage.src = smallImage.firstElementChild.src;
   });
});
