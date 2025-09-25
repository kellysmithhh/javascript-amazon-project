export const cart = [];

export function addToCart(productId) {
    let matchingItem;
    let totalQuantitySelected = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

       
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
             matchingItem = cartItem;
        }
    })

    if (matchingItem) {
        matchingItem.quantity += totalQuantitySelected;
    } else {
        cart.push({
            productId: productId,
            quantity: totalQuantitySelected
        });
    }
}