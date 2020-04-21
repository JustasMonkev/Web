
$.ajax({
    url: 'https://api.spotify.com/v1/albums?ids=3kEtdS2pH6hKcMU9Wioob1%2C78Fgb88MY0ECc4GVMejqTg%2C4UhEjfIRx4tE1XRY21vwNa%2C0yv3K62ndWgrZ0bbAEMzj5%2C0cLzuJG2UDa0axMQkF7JR6%2C2mU2jRMwrsL1tG97xKoiav%2C3rV1aPkrWyMs6YTvTpSbIY%2C0jghcWTsQzux5T9sAfZO13%2C7sHrPadM39466NY7DW3s4r%2C41LyFl0XPrCqYeNml7obol%2C66EwBbt2kPgugo8Wz0SKAw%2C4tRNl7PwUzXrxTP3YZjWgS&market=Es',
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer  BQAynI4zBIQM9bb95N3k9U-T5gg1WwVVUEt5p5ZAI4Au_XzV4HHKLzFyZ9Q4JmdeWKwbBFKjiL1y4pN5JXN3c9LWjbM_k9P5pa-6fLLZJRgSGA99ClkE3rbmvCq49Op71_if6MCbggwJgufFAafwr8kDQZQciJVXu2qzA_Is2F1zrJulcEz7ribvNh455rwxsVTQg732S-73Qi6KSQ_ovg4zWfk2nb6M8G6jA63tULGMZaOL6JcTtcNhOi_HtjMGw-aW3kVR2p9p9g"

    },
    success: function (response) {
        console.log(response);
         toHtml(response);
    }
});

    function toHtml(response) {
    let shopButtons;
    const something = JSON.parse(localStorage.getItem('array'));
    console.log(something);
        getAlbum(response, 0);
        shopButtons = `<a class="btn btn-primary amazon btn-lg "
                href="https://www.amazon.com/Illmatic-Explicit-Nas/dp/B00DFQDNOQ/ref=sr_1_1?keywords=nas+illmatic&qid=1583783046&sr=8-1"
                target="_blank" role="button">Purchase - Amazon</a>
                <div class="moveitenus">
                <a class="btn btn-primary itunes btn-lg "
                    href="https://music.apple.com/us/album/illmatic/662324135?ign-mpt=uo%3D4" target="_blank"
                    role="button">Purchase - iTunes</a>`
    document.getElementById("shopButtons").innerHTML = shopButtons;
}
function toHtmlSongs(response, a, b) {
    return response.albums[a].tracks.items[b].name;
}

function millisToMinutesAndSeconds(response, a, b) {
    let minutes = Math.floor(response.albums[a].tracks.items[b].duration_ms / 60000);
    let seconds = ((response.albums[a].tracks.items[b].duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
function playsongs(response, a, b) {
    return response.albums[a].tracks.items[b].preview_url;
}
function getAlbum(response, c) {
    let songs = "";
    for (let i = 0; i < response.albums[c].tracks.items.length; i++) {
        songs += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${toHtmlSongs(response, c, i)}</td><td>${millisToMinutesAndSeconds(response, c, i)}</td>
        </tr>`;
    }
    document.getElementById("name").innerHTML = response.albums[c].name;
    document.getElementById("artist").innerHTML = response.albums[c].artists[0].name;
    document.getElementById("time").innerHTML = response.albums[c].release_date;
    document.getElementById("publisher").innerHTML = response.albums[c].label;
    document.getElementById("img").src = response.albums[c].images[0].url;
    document.getElementById("tablebody").innerHTML = songs;
}
