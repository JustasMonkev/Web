$.ajax({
    url: 'https://api.spotify.com/v1/albums?ids=3kEtdS2pH6hKcMU9Wioob1%2C78Fgb88MY0ECc4GVMejqTg%2C4UhEjfIRx4tE1XRY21vwNa%2C0yv3K62ndWgrZ0bbAEMzj5%2C0cLzuJG2UDa0axMQkF7JR6%2C2mU2jRMwrsL1tG97xKoiav%2C3rV1aPkrWyMs6YTvTpSbIY%2C0jghcWTsQzux5T9sAfZO13%2C7sHrPadM39466NY7DW3s4r%2C41LyFl0XPrCqYeNml7obol%2C66EwBbt2kPgugo8Wz0SKAw%2C4tRNl7PwUzXrxTP3YZjWgS&market=Es',
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQCx-UpqBGga7zJDCEe7EVWHxNv6VyHBJqsBkzTqMWLoLoAxHD8EqJbO_yDynAgYdx9mHygQ-lLlx8TfSITICa0uEJoiIwG-W7MyW_AXtMrmKdP-FfgPvdbTxfBCQ8gx9aJc8kF-cVjnR-gbrP6xk6eFEYCvGFrMiZ06oQ6jaCUTUZ1mL4aUiYLji1Y4eG6hztd3Mmn4wMWMqKlLJN2kteNHnYaGnHWbO6V3RKdVv6pf43_hOS-JO66kghclGeWVUn89k-xFRmvriA"

    },
    success: function (response) {
        console.log(response);
        toHtml(response);
    }
});


function toHtml(response) {
    var url = window.location.pathname;
    var pagefile = url.substring(url.lastIndexOf('/') + 1);
    if (pagefile.includes("Illmatic")) {
        getAlbum(response, 0);
    }
    
}
function toHtmlSongs(response, a, b) {
    return response.albums[a].tracks.items[b].name;
}
function getAlbum(response, c) {
    var songs = '';
    for (var i = 0; i < response.albums[0].tracks.items.length; i++) {
        songs +=`<tr>
        <th scope="row">${i+1}</th> 
        <td>${toHtmlSongs(response, c, i)}</td><td>01:45</td>
        <tr>`;
    }
    document.getElementById("name").innerHTML = response.albums[c].name;
    document.getElementById("artist").innerHTML = response.albums[c].artists[0].name;
    document.getElementById("time").innerHTML = response.albums[c].release_date;
    document.getElementById("publisher").innerHTML = response.albums[c].label;
    document.getElementById("img").src = response.albums[c].images[0].url;
    document.getElementById("tablebody").innerHTML = songs;
}


