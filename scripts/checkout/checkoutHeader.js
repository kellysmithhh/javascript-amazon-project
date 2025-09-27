import {cart} from '../../data/cart.js';

export function renderCheckoutHeader() {
    let checkoutHeaderHTML = '';
    let totalItems = 0;

    cart.forEach((cartItem) => {
        totalItems += cartItem.quantity;
    });

    checkoutHeaderHTML += `
   
    Checkout (<a class="return-to-home-link js-return-to-home-link"
      href="amazon.html">${totalItems} items</a>)
 `;

  document.querySelector('.js-checkout-header-middle-section').innerHTML = checkoutHeaderHTML;
}

renderCheckoutHeader();