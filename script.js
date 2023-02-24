const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const numberOfItems = document.querySelector(".number-items");
const addToCartButton = document.querySelector(".add-to-cart");
const numberOfItemsInCart = document.querySelector(".cart-items-number");
const cartIcon = document.querySelector(".cart");
const deleteIcon = document.querySelector(".delete");
const cartCheckout = document.querySelector(".cart-checkout");
const cartEmpty = document.querySelector(".empty");
const cartNotEmpty = document.querySelector(".not-empty");
const totalPrice = document.querySelector(".total-price");
const totalItems = document.querySelector(".total-items");

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
      totalPrice.textContent = `$${125.0 * parseInt(numberOfItems.textContent)}`;
      totalItems.textContent = numberOfItems.textContent;
      cartEmpty.style.display = "none";
      cartNotEmpty.style.display = "block";
   }
});

cartIcon.addEventListener("click", () => {
   if (!cartCheckout.classList.contains("active")) {
      cartCheckout.classList.add("active");
   } else {
      cartCheckout.classList.remove("active");
   }
});

deleteIcon.addEventListener("click", () => {
   cartEmpty.style.display = "flex";
   cartNotEmpty.style.display = "none";
   numberOfItemsInCart.classList.remove("added");
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
