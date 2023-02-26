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
const isMobile = window.matchMedia("(max-width: 475px)");

Array.from(smallImages).forEach((smallImage) => {
   smallImage.addEventListener("click", () => {
      for (let i = 0; i < smallImages.length; i++) {
         smallImages[i].classList.remove("active");
      }
      smallImage.classList.add("active");
      bigImage.src = smallImage.firstElementChild.src;
   });
});

const popUpDiv = document.querySelector(".pop-up");
const popUpImages = Array.from(document.querySelectorAll(".pop-up-images > img"));
const previousIcon = document.querySelector(".previous");
const nextIcon = document.querySelector(".next");
const closeIcon = document.querySelector(".close");
const popUpSmallImages = Array.from(document.querySelectorAll(".pop-up-small-images > div"));

bigImage.addEventListener("click", () => {
   if (isMobile.matches) {
      return;
   } else {
      popUpDiv.style.display = "flex";
      bigImage.style.cursor = "no-drop";
      bigImage.style.pointerEvents = "none";
   }
});

closeIcon.addEventListener("click", () => {
   popUpDiv.style.display = "none";
   bigImage.style.cursor = "pointer";
   bigImage.style.pointerEvents = "all";
});

function noDrop(images, previous, next) {
   for (let i = 0; i < images.length; i++) {
      if (images[i].classList.contains("active")) {
         if (parseInt(images[i].dataset.index) === 0) {
            previous.style.cursor = "no-drop";
            previous.style.pointerEvents = "none";
            next.style.cursor = "pointer";
            next.style.pointerEvents = "all";
         } else if (parseInt(popUpImages[i].dataset.index) === popUpImages.length - 1) {
            next.style.cursor = "no-drop";
            next.style.pointerEvents = "none";
            previous.style.cursor = "pointer";
            previous.style.pointerEvents = "all";
         } else {
            next.style.cursor = "pointer";
            next.style.pointerEvents = "all";
            previous.style.cursor = "pointer";
            previous.style.pointerEvents = "all";
         }
      }
   }
}

noDrop(popUpImages, previousIcon, nextIcon);

let currentImage = 0;

function theChecker() {
   for (let i = 0; i < popUpImages.length; i++) {
      if (popUpImages[i].classList.contains("active")) {
         if (i === 0) {
            currentImage = 0;
         } else if (i === popUpImages.length - 1) {
            currentImage = popUpImages.length - 1;
         } else {
            currentImage = parseInt(popUpImages[i].dataset.index);
         }
      }
   }
}

nextIcon.addEventListener("click", () => {
   popUpImages.forEach((popUpImage) => {
      if (popUpImage.classList.contains("active")) {
         popUpImage.classList.remove("active");
         popUpSmallImages.forEach((popUpSmallImage) => {
            if (popUpSmallImage.classList.contains("active")) {
               popUpSmallImage.classList.remove("active");
            }
         });
      }
   });
   popUpImages[currentImage + 1].classList.add("active");
   popUpSmallImages[currentImage + 1].classList.add("active");

   theChecker();
   noDrop(popUpImages, previousIcon, nextIcon);
});

previousIcon.addEventListener("click", () => {
   popUpImages.forEach((popUpImage) => {
      if (popUpImage.classList.contains("active")) {
         popUpImage.classList.remove("active");
         popUpSmallImages.forEach((popUpSmallImage) => {
            if (popUpSmallImage.classList.contains("active")) {
               popUpSmallImage.classList.remove("active");
            }
         });
      }
   });
   popUpImages[currentImage - 1].classList.add("active");
   popUpSmallImages[currentImage - 1].classList.add("active");
   theChecker();
   noDrop(popUpImages, previousIcon, nextIcon);
});

//responsive
const iconCloseSideBar = document.querySelector(".close-menu");
const iconMenuSideBar = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const iconPreviousMobile = document.querySelector(".previous-mobile");
const iconNextMobile = document.querySelector(".next-mobile");
const bigImages = Array.from(document.querySelectorAll(".big-images > img"));
console.log(bigImages);

iconMenuSideBar.addEventListener("click", () => {
   sideBar.style.left = "0";
});

iconCloseSideBar.addEventListener("click", () => {
   sideBar.style.left = "-15rem";
});
noDrop(bigImages, iconPreviousMobile, iconNextMobile);

let currentImageMobile = 0;

function theCheckerMobile() {
   for (let i = 0; i < bigImages.length; i++) {
      if (bigImages[i].classList.contains("active")) {
         if (i === 0) {
            currentImageMobile = 0;
         } else if (i === bigImages.length - 1) {
            currentImageMobile = bigImages.length - 1;
         } else {
            currentImageMobile = parseInt(bigImages[i].dataset.index);
         }
      }
   }
}

iconPreviousMobile.addEventListener("click", () => {
   bigImages.forEach((bigImage) => {
      if (bigImage.classList.contains("active")) {
         bigImage.classList.remove("active");
      }
   });
   bigImages[currentImageMobile - 1].classList.add("active");
   theCheckerMobile();
   noDrop(bigImages, iconPreviousMobile, iconNextMobile);
});

iconNextMobile.addEventListener("click", () => {
   bigImages.forEach((bigImage) => {
      if (bigImage.classList.contains("active")) {
         bigImage.classList.remove("active");
      }
   });
   bigImages[currentImageMobile + 1].classList.add("active");
   theCheckerMobile();
   noDrop(bigImages, iconPreviousMobile, iconNextMobile);
});
