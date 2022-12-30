setTimeout(() => {
    $(document).ready(function () {
        $("#myInput").on('keyup', function () {
            let search = $(this).val().toLowerCase();
            //Go through each list item and hide if not match search

            $("#items .shop-item").each(function () {
                if ($(this).html().toLowerCase().indexOf(search) !== -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
        cartActions()
    });
}, 900);

function cartActions() {
    for (const element of document.getElementsByClassName('btn-danger')) {
        element.addEventListener('click', removeCartItem)
    }

    // Lets the User Select Quantity Of Items cant be minus or zero
    for (const quantityInput of document.getElementsByClassName('cart-quantity-input')) {
        quantityInput.addEventListener('change', quantityChanged)
    }

    // Adds Item to Cart
    for (const addToCartButton of document.getElementsByClassName("btn btn-primary shop-item-button")) {
        addToCartButton.addEventListener('click', addToCartClicked)
    }
}


// Removes item from cart //
function removeCartItem(event) {
    const buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

// Changes item quantity //
function quantityChanged(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
        event.preventDefault();
    }
    updateCartTotal()
}

// Adds item to cart //
function addToCartClicked(event) {


    let shopItem = event.target.parentElement.parentElement

    let productTitle = shopItem.getElementsByClassName('shop-item-title')[0].innerText

    let productPrice = shopItem.getElementsByClassName("shop-item-price")[0].getAttribute("data-price")

    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src

    addItemToCart(productTitle, productPrice, imageSrc)

    updateCartTotal()
}


function addItemToCart(title, price, imageSrc) {
    // Check if the item is already in the cart
    let cartRow = document.querySelector(`[data-title="${title}"]`);
    if (cartRow) {
        // If the item is already in the cart, increase its quantity
        const quantityInput = cartRow.querySelector('.cart-quantity-input');
        const currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
        return;
    }

    // If the item is not in the cart, add it to the cart
    cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.setAttribute('data-title', title);
    const cartItems = document.getElementsByClassName('cart-items')[0];

    cartRow.innerHTML = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100" alt="img">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column" data-item-price = "${price}">${price} €</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`

    cartItems.append(cartRow);

    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);

    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}


// Updates the total price in the cart //
function updateCartTotal() {
    let total = 0;
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');

    for (const element of cartRows) {

        let priceElement = element.querySelectorAll("[data-item-price]")[0].getAttribute("data-item-price")

        let quantityElement = element.getElementsByClassName('cart-quantity-input')[0]

        total = total + (priceElement * quantityElement.value)
    }

    total = Math.round(total * 100) / 100

    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}

// sort by date and by price

// const productPrices = Array.from(document.querySelectorAll("[data-price]"));
// const productsDates = Array.from(document.querySelectorAll("[data-date]"));
// const selectedValue = document.getElementById("myInput-sort");
//
//
// const priceArray = function (sortingOption) {
//     displaySortedItems(
//         productPrices.sort(function (a, b) {
//             if (sortingOption === "low") {
//                 return a - b;
//             }
//             return b - a;
//         })
//     );
// };
//
// // sortProductsByDate function has the responsibility of sorting the products by date
// const sortProductsByDate = function (sortingOption) {
//     displaySortedItems(
//         productsDates.sort(function (a, b) {
//             if (sortingOption === "newest") {
//                 return new Date(b.getAttribute("data-date")).getTime() - new Date(a.getAttribute("data-date")).getTime();
//             }
//             return new Date(a.getAttribute("data-date")).getTime() - new Date(b.getAttribute("data-date")).getTime();
//         })
//     );
// };
//
// // displaySortedItems function has the responsibility of displaying the sorted items
// function displaySortedItems(array) {
//     for (const element of array) {
//         document.getElementById("items").append(element)
//     }
// }
//
// function sortBySelectedOption() {
//     // use a switch statement to handle different cases for the selected value
//     switch (selectedValue.value) {
//         case "Sort by highest price":
//             priceArray("high");
//             break;
//         case "Sort by lowest price":
//             priceArray("low");
//             break;
//         case "Sort by newest albums":
//             sortProductsByDate("newest");
//             break;
//         case "Sort by oldest albums":
//             sortProductsByDate("oldest");
//             break;
//     }
// }
