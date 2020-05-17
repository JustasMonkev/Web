if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Proceed to checkout function //
function ready() {
    // Remove item button
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Lets the User Select Quantity Of Items cant be minus or zero
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // Adds Item to Cart
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

// Removes item from cart //
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

// Changes item quantity //
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
        event.preventDefault();
    }
    updateCartTotal()
}

// Adds item to cart //
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)

    updateCartTotal()
}

// Adds item's title, price, and image onto cart section //
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

// Updates the total price in the cart //
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function toLocalStorage(number) {
    localStorage.setItem("number", number);
    location.href = 'Albums/Illmatic.html';
}
// Search by word 
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $("#myList div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
// Search by word 
//sort By price
var selected1 = document.getElementById("myInput-sort");
var priceList2 = [];
var dataList = [];

function Selected() {
    if (selected1.value == "Price") {
        liMaker1(priceList2);
    }
    if (selected1.value == "Data") {
        liMaker2(dataList);
    }
}
var price2 = document.getElementsByClassName("shop-item");
for (var i = 0; i < 12; i++) {
    priceList2.push(price2[i]);
}
for (var i = 0; i < 12; i++) {
    priceList2.sort(function (a, b) {
        return a.getElementsByTagName("span")[1].innerText.substring(1) - b.getElementsByTagName("span")[1].innerText.substring(1);
    });
}

function liMaker1(obj) {
    for (var i = 0; i < priceList2.length; i++) {
        let div = document.createElement("div");
        div.appendChild(priceList2[i]);
        document.getElementById("kaina").append(div);
    }
}

var date = document.getElementsByClassName("shop-item");
for (var i = 0; i < 12; i++) {
    dataList.push(date[i]);
}
for (var i = 0; i < 12; i++) {
    dataList.sort(function (a, b) {
         return new Date(b.getElementsByTagName("span")[2].innerText.substring(0)).getTime() -  new Date (a.getElementsByTagName("span")[2].innerText.substring(0)).getTime()
    });
}


function liMaker2(obj) {
    for (var i = 0; i < dataList.length; i++) {
        let div = document.createElement("div");
        div.appendChild(dataList[i]);
        document.getElementById("kaina").append(div);
    }
}
//sort By price