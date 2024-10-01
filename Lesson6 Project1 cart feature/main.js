const showQuantity = document.getElementById("showQuantity");
const addToCart = document.getElementById("addToCart");
const addTwo = document.getElementById("addTwo");
const addThree = document.getElementById("addThree");
const resetCart = document.getElementById("resetCart");

let cart = 0;

showQuantity.addEventListener("click", () => {
    console.log(cart);
})
addToCart.addEventListener("click", () => {
    cart += 1;
    
    console.log(cart);
})
addTwo.addEventListener("click", () => {
    cart += 2;

    console.log(cart);
})
addThree.addEventListener("click", () => {
    cart += 3;

    console.log(cart);
})
resetCart.addEventListener("click", () => {
    cart = 0;

    console.log('Cart was reset.');
    console.log(cart);
})