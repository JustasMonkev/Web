fetch('https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/albums?market=LT&limit=50', {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": ""
    }
}).then(function (response) {
    return response.json();
}).then(function (response) {
    showProducts(response);
    sortBySelectedOption();

});

function showProducts(data) {
    let products = "";
    const items = data.items;
    const addedAlbums = new Set(); // set to keep track of added albums
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.album_type === "album") {
            // check if album has already been added
            if (addedAlbums.has(item.name)) {
                continue; // skip this iteration
            }
            addedAlbums.add(item.name); // add album to set
            products += `
      <div class="shop-item">
        <span class="shop-item-title">${item.name}</span>
        <div class="team-member">
          <img src=${item.images[0].url} alt="Imagge" class="img-fluid shop-item-image">
          <div class="text d-block font-weight-light"></div>
        </div>
        <br>
        <span class="shop-item-price" data-price = "13">$12</span>
        <span data-date=${item.release_date}></span>
        <div class="shop-item-details">
          <pre>  </pre>
          <button class="btn btn-primary shop-item-button" name = "add-to-cart" type="button">ADD TO CART</button>
        </div>
      </div>
    `;
        }
    }

    document.getElementById("items").innerHTML = products;
}

const productPrices = Array.from(document.querySelectorAll("[data-price]"));
const productsDates = Array.from(document.querySelectorAll("[data-date]"));
const selectedValue = document.getElementById("myInput-sort");

const priceArray = function (sortingOption) {
    displaySortedItems(productPrices
        .sort(function (a, b) {
            if (sortingOption === 'Sort by lowest price') {
                return a.getAttribute("data-price") - b.getAttribute("data-price");
            }
            return b.getAttribute("data-price") - a.getAttribute("data-price");
        }));
}
// sortProductsByDate function has the responsibility of sorting the products by date
const sortProductsByDate = function (sortingOption) {
    displaySortedItems(
        productsDates.sort(function (a, b) {
            if (sortingOption === "Sort by newest albums") {
                return new Date(b.getAttribute("data-date")).getTime() - new Date(a.getAttribute("data-date")).getTime();
            }
            return new Date(a.getAttribute("data-date")).getTime() - new Date(b.getAttribute("data-date")).getTime();
        })
    );
};

// displaySortedItems function has the responsibility of displaying the sorted items
function displaySortedItems(array) {
    console.log(array);
    for (const element of array) {
        document.getElementById("items").append(element)
    }
}

function sortBySelectedOption() {
    // use a switch statement to handle different cases for the selected value
    console.log(selectedValue.value)
    switch (selectedValue.value) {
        case "Sort by highest price":
            priceArray("Sort by highest price");
            break;
        case "Sort by lowest price":
            priceArray("Sort by lowest price");
            break;
        case "Sort by newest albums":
            sortProductsByDate("Sort by newest albums");
            break;
        case "Sort by oldest albums":
            sortProductsByDate("Sort by oldest albums");
            break;
    }
}
