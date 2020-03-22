$.ajax({
    url: 'https://api.spotify.com/v1/albums?ids=3kEtdS2pH6hKcMU9Wioob1%2C78Fgb88MY0ECc4GV%2C4UhEjfIRx4tE1XRY21vwNaMejqTg%2C4UhEjfIRx4tE1XRY21vwNa%2C0yv3K62ndWgrZ0bbAEMzj5%2C0cLzuJG2UDa0axMQkF7JR6%2C2mU2jRMwrsL1tG97xKoiav%2C3rV1aPkrWyMs6YTvTpSbIY%2C0jghcWTsQzux5T9sAfZO13%2C7sHrPadM39466NY7DW3s4r%2C41LyFl0XPrCqYeNml7obol%2C4tRNl7PwUzXrxTP3YZjWgS%2C66EwBbt2kPgugo8Wz0SKAw%2C78Fgb88MY0ECc4GVMejqTg&market=ES',
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQBLjE4RFhn4t7rYYa_9P1kn_apcItxEFkDBoQjwypmhZR3RtPf0QqHZJwbgj19w8fTUGz3FRzOaBIO14I0pSRc7o8e4Q86AoBg3pRy7gmoewKTLcTQq1wK6i9cFz3WA-dLLePTFwsR2tMG7r37eOFI-HpCLUt0m4Y6gSLkQSUKHEkPf_978APi3J4YBZkDMbjpFi8p96A73fQKofFegHv2aPvg5-D3_qBqxKM_4YEw2sRsH_1BFVVxl28Y4rWqHcaOwmKz5g-tLPw"

    },
    success: function (response) {
        var newArray = response.albums;
        console.log(newArray);
        toHtml(response);
    }
});

function toHtml(response) {
    var url = window.location.pathname;
    var pagefile = url.substring(url.lastIndexOf('/') + 1);
    for (var i = 0; i <= response.albums.length; i++) {
        // Illmatic Album
        if (pagefile.includes("Illmatic")) {
            document.getElementById("name").innerHTML = response.albums[0].name;
            document.getElementById("artist").innerHTML = response.albums[0].artists[0].name;
            document.getElementById("time").innerHTML = response.albums[0].release_date;
            document.getElementById("publisher").innerHTML = response.albums[0].label;
            document.getElementById("firstsong").innerHTML = response.albums[0].tracks.items[0].name;
            document.getElementById("secondsong").innerHTML = response.albums[0].tracks.items[1].name;
            document.getElementById("thirdsong").innerHTML = response.albums[0].tracks.items[2].name;
            document.getElementById("foursong").innerHTML = response.albums[0].tracks.items[3].name;
            document.getElementById("fifthsong").innerHTML = response.albums[0].tracks.items[4].name;
            document.getElementById("sixtsong").innerHTML = response.albums[0].tracks.items[5].name;
            document.getElementById("seventhsong").innerHTML = response.albums[0].tracks.items[6].name;
            document.getElementById("eighthsong").innerHTML = response.albums[0].tracks.items[7].name;
            document.getElementById("ninthsong").innerHTML = response.albums[0].tracks.items[8].name;
            document.getElementById("tensong").innerHTML = response.albums[0].tracks.items[9].name;
            document.getElementById("img").src = response.albums[0].images[0].url;
        }
        if (response.albums[i] === response.albums[1]) {
            continue;
        }
        if (response.albums[i] === response.albums[2]) {
            continue;
        }
        // It Was Written Album
        if (pagefile.includes("ItWasWritten")) {
            document.getElementById("name").innerHTML = response.albums[13].name;
            document.getElementById("artist").innerHTML = response.albums[13].artists[0].name;
            document.getElementById("time").innerHTML = response.albums[13].release_date;
            document.getElementById("publisher").innerHTML = response.albums[13].label;
            document.getElementById("firstsong").innerHTML = response.albums[13].tracks.items[0].name;
            document.getElementById("secondsong").innerHTML = response.albums[13].tracks.items[1].name;
            document.getElementById("thirdsong").innerHTML = response.albums[13].tracks.items[2].name;
            document.getElementById("foursong").innerHTML = response.albums[13].tracks.items[3].name;
            document.getElementById("fifthsong").innerHTML = response.albums[13].tracks.items[4].name;
            document.getElementById("sixtsong").innerHTML = response.albums[13].tracks.items[5].name;
            document.getElementById("seventhsong").innerHTML = response.albums[13].tracks.items[6].name;
            document.getElementById("eighthsong").innerHTML = response.albums[13].tracks.items[7].name;
            document.getElementById("ninthsong").innerHTML = response.albums[13].tracks.items[8].name;
            document.getElementById("tensong").innerHTML = response.albums[13].tracks.items[9].name;
            document.getElementById("eleventhsong").innerHTML = response.albums[13].tracks.items[10].name;
            document.getElementById("twelfthsong").innerHTML = response.albums[13].tracks.items[11].name;
            document.getElementById("thirteensong").innerHTML = response.albums[13].tracks.items[12].name;
            document.getElementById("fourteenth").innerHTML = response.albums[13].tracks.items[13].name;
            document.getElementById("img").src = response.albums[13].images[0].url;
        }
    }

}
