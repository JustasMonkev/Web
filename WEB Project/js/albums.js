
$.ajax({
    url: 'https://api.spotify.com/v1/albums?ids=3kEtdS2pH6hKcMU9Wioob1%2C78Fgb88MY0ECc4GVMejqTg%2C4UhEjfIRx4tE1XRY21vwNa%2C0yv3K62ndWgrZ0bbAEMzj5%2C0cLzuJG2UDa0axMQkF7JR6%2C2mU2jRMwrsL1tG97xKoiav%2C3rV1aPkrWyMs6YTvTpSbIY%2C0jghcWTsQzux5T9sAfZO13%2C7sHrPadM39466NY7DW3s4r%2C41LyFl0XPrCqYeNml7obol%2C66EwBbt2kPgugo8Wz0SKAw%2C4tRNl7PwUzXrxTP3YZjWgS&market=Es',
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer  BQBauAMeCTEeqmFzM9EQkzSodshsFRjJigWY3smwseS19-f-vjQYdu1exGuvxGxl7mc7AW0iqPEw6adKWkrRxGYy8VhPp-vs48qVz1UysH0Y0jCtgAIksZpi0AYlszcCzv7rbPs1u_61hop_klW7IYm0G0efVGdiai39JUh6tG8yD9WsMUdsSPINo9X55UzibP6L89b5PdMcueTZVjuwD5dKwcWOgi48I7Wb5YHKt3W0rRRijWTvnhvySDe9_SNR2XWluD6LqJi72J7g"

    },
    success: function (response) {
        console.log(response);
        toHtml(response);
    }
});

function toHtml(response) {
    let shopButtons = "";
    getAlbum(response, localStorage.getItem("number"))
    if( localStorage.getItem("number") == 0) {
    shopButtons = `<a class="btn btn-primary amazon btn-lg "
                href="https://www.amazon.com/Illmatic-Explicit-Nas/dp/B00DFQDNOQ/ref=sr_1_1?keywords=nas+illmatic&qid=1583783046&sr=8-1"
                target="_blank" role="button">Purchase - Amazon</a>
                <div class="moveitenus">
                <a class="btn btn-primary itunes btn-lg "
                    href="https://music.apple.com/us/album/illmatic/662324135?ign-mpt=uo%3D4" target="_blank"
                    role="button">Purchase - iTunes</a>`
    }
    if( localStorage.getItem("number") == 1) {
        shopButtons = `<a class="btn btn-primary amazon btn-lg "
                    href="https://www.amazon.com/Illmatic-Explicit-Nas/dp/B00DFQDNOQ/ref=sr_1_1?keywords=nas+illmatic&qid=1583783046&sr=8-1"
                    target="_blank" role="button">Purchase - Amazon</a>
                    <div class="moveitenus">
                    <a class="btn btn-primary itunes btn-lg "
                        href="https://music.apple.com/us/album/illmatic/662324135?ign-mpt=uo%3D4" target="_blank"
                        role="button">Purchase - iTunes</a>`
                        img.classList.add("classfor14Images");
        }
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
        <td>${toHtmlSongs(response, c, i)}</td><td>${millisToMinutesAndSeconds(response, c, i)}</td><td><button class ="buttons"><i class="fas fa-play"></i></button><audio class = "music" id="t${i}">
        <source src='${playsongs(response, c, i)}'type='audio/mpeg'/>
    </audio></td>
        </tr>`;
    }
    document.getElementById("name").innerHTML = response.albums[c].name;
    document.getElementById("artist").innerHTML = response.albums[c].artists[0].name;
    document.getElementById("time").innerHTML = response.albums[c].release_date;
    document.getElementById("publisher").innerHTML = response.albums[c].label;
    var img = document.getElementById("img").src = response.albums[c].images[0].url;
    document.getElementById("tablebody").innerHTML = songs;
    var button = document.getElementsByClassName("buttons");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(e) {
            var audiot = e.target.parentElement.nextElementSibling;
            if (audiot.paused) {
                e.target.classList.remove("fa-play");
                e.target.classList.add("fa-pause");
                audiot.play();
             } else {
                e.target.classList.add("fa-play");
                e.target.classList.remove("fa-pause");
                audiot.pause();
            }
        });
    }
}