$.ajax({
    url: 'https://api.spotify.com/v1/albums?ids=3kEtdS2pH6hKcMU9Wioob1%2C78Fgb88MY0ECc4GVMejqTg%2C4UhEjfIRx4tE1XRY21vwNa%2C0yv3K62ndWgrZ0bbAEMzj5%2C0cLzuJG2UDa0axMQkF7JR6%2C2mU2jRMwrsL1tG97xKoiav%2C3rV1aPkrWyMs6YTvTpSbIY%2C0jghcWTsQzux5T9sAfZO13%2C7sHrPadM39466NY7DW3s4r%2C41LyFl0XPrCqYeNml7obol%2C66EwBbt2kPgugo8Wz0SKAw%2C4tRNl7PwUzXrxTP3YZjWgS&market=Es',
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer  BQDKeQKQeGE-1LJIFs9gH_YncjGUU080vVzK_p-a6oykHFlI__YpI7Ql4kLl3s-Djt5d9IWKNQlyXRKoxi1Op-N9vCKb3jwygvofcts-WhLwYE4hvhuZYC2ttxYo9VKaKn4gb5m7SAKfvEE_F5v774CJK3NfK-dXTH2r4vw7Jg88oRLmHoW7fEi9Bvz_fbzUqLlKgmpIgPtrEWlQnIV0bUK8MJbg4hloGwhbiUCVOfw0pOSwKGnjawtq-s2vfs36rQ096qpkJqdJ-krJ"

    },
    success: function (response) {
        console.log(response);
        toHtml(response);
    }
});

function toHtml(response) {
    getAlbum(response, localStorage.getItem("number"))


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
    let shopButtons = "";
    for (let i = 0; i < response.albums[c].tracks.items.length; i++) {
        songs += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${toHtmlSongs(response, c, i)}</td><td>${millisToMinutesAndSeconds(response, c, i)}</td><td><button class ="buttons"><i class="fas fa-play"></i></button><audio class = "music" id="t${i}">
        <source src='${playsongs(response, c, i)}'type='audio/mpeg'/>
    </audio></td>
        </tr>`;
        if (response.albums[c].tracks.items.length == 7) {
            img.classList.add("classfor7Images");
            shopButtons = `<a class="btn btn-primary amazon btn-lg "
            href="https://www.amazon.com/NASIR-Nas/dp/B07F2X46VW/ref=sr_1_1?dchild=1&keywords=NASIR&qid=1589696383&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus">
            <a class="btn btn-primary itunes btn-lg "
                href="https://music.apple.com/us/album/nasir/1399800981" target="_blank"
                role="button">Purchase - iTunes</a>`
        }
        if (response.albums[c].tracks.items.length == 11) {
            img.classList.add("classfor11Images");
            shopButtons = `<a class="btn btn-primary amazon btn-lg "
            href="https://www.amazon.com/Lost-Tapes-Explicit-Nas/dp/B00136RWAG/ref=sr_1_2?dchild=1&keywords=nas+The+Lost+Tapes&qid=1589696483&sr=8-2"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus">
            <a class="btn btn-primary itunes btn-lg "
                href="https://music.apple.com/us/album/illmatic/662324135?ign-mpt=uo%3D4" target="_blank"
                role="button">Purchase - iTunes</a>`
        }
        if (response.albums[c].tracks.items.length == 10) {
            shopButtons = `<a class="btn btn-primary amazon btn-lg "
            href="https://www.amazon.com/Illmatic-Explicit-Nas/dp/B00DFQDNOQ/ref=sr_1_1?keywords=nas+illmatic&qid=1583783046&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus">
            <a class="btn btn-primary itunes btn-lg "
                href="https://music.apple.com/us/album/illmatic/662324135?ign-mpt=uo%3D4" target="_blank"
                role="button">Purchase - iTunes</a>`
        }
        if (response.albums[c].tracks.items.length == 14) {
            img.classList.add("classfor14Images");
            if (response.albums[c].name == ("It Was Written")) {
                shopButtons = `<a class="btn btn-primary amazon14songs btn-lg "
            href="https://www.amazon.com/Was-Written-Explicit-Nas/dp/B00138J14Y/ref=sr_1_1?dchild=1&keywords=It+Was+Written&qid=1589697386&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus14songs">
            <a class="btn btn-primary itunesfor14songs btn-lg "
                href="https://music.apple.com/us/album/it-was-written/211507540" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
            if (response.albums[c].name == ("Stillmatic")) {
                shopButtons = `<a class="btn btn-primary amazon14songs btn-lg "
                    href="https://www.amazon.com/Stillmatic-Nas/dp/B00005U2LB/ref=sr_1_1?dchild=1&keywords=Stillmatic&qid=1589697602&sr=8-1"
                    target="_blank" role="button">Purchase - Amazon</a>
                    <div class="moveitenus14songs">
                    <a class="btn btn-primary itunesfor14songs btn-lg "
                        href="https://music.apple.com/us/album/stillmatic/868691176" target="_blank"
                        role="button">Purchase - iTunes</a>
                        </div>`
            }
            if (response.albums[c].name == ("God's Son")) {
                shopButtons = `<a class="btn btn-primary amazon14songs btn-lg "
                        href="https://www.amazon.com/Gods-Son-Explicit-Nas/dp/B00KMIUOTM/ref=sr_1_2?dchild=1&keywords=God%27s+Son&qid=1589697660&sr=8-2"
                        target="_blank" role="button">Purchase - Amazon</a>
                        <div class="moveitenus14songs">
                        <a class="btn btn-primary itunesfor14songs btn-lg "
                            href="https://music.apple.com/us/album/gods-son/162508220" target="_blank"
                            role="button">Purchase - iTunes</a>
                            </div>`
            }
        }
        if (response.albums[c].tracks.items.length == 15) {
            img.classList.add("classfor15Images");
            if (response.albums[c].name == ("Nastradamus")) {
                shopButtons = `<a class="btn btn-primary amazon14songs btn-lg "
            href="https://www.amazon.com/Nastradamus-Clean-Nas/dp/B00138KOWC/ref=sr_1_2?dchild=1&keywords=Nastradamus&qid=1589697538&sr=8-2"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus15songs">
            <a class="btn btn-primary itunesfor15songs btn-lg "
                href="https://music.apple.com/us/album/nastradamus/203759842" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
            if (response.albums[c].name == ("Nas")) {
                shopButtons = `<a class="btn btn-primary amazon14songs btn-lg "
            href="https://www.amazon.com/Nas/dp/B001C3KLNA/ref=sr_1_1?dchild=1&keywords=Nas+Nas&qid=1589697981&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus15songs">
            <a class="btn btn-primary itunesfor15songs btn-lg "
                href="https://music.apple.com/us/album/nas/1443258592" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
        }
        if (response.albums[c].tracks.items.length == 16) {
            img.classList.add("classfor16Images");
            if (response.albums[c].name == ("I Am...")) {
                shopButtons = `<a class="btn btn-primary amazon16songs btn-lg "
            href="https://www.amazon.com/I-Am-Explicit-Nas/dp/B00138D1OA/ref=sr_1_1?dchild=1&keywords=nas+I+Am...&qid=1589697449&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus16songs">
            <a class="btn btn-primary itunesfor16songs btn-lg "
                href="https://music.apple.com/us/album/i-am/216999742" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
            if (response.albums[c].name == ("The Lost Tapes 2")) {
                shopButtons = `<a class="btn btn-primary amazon16songs btn-lg "
            href="https://www.amazon.com/Lost-Tapes-2-Explicit/dp/B07V6NMQ65/ref=sr_1_1?dchild=1&keywords=The+Lost+Tapes+2&qid=1589698067&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus16songs">
            <a class="btn btn-primary itunesfor16songs btn-lg "
                href="https://music.apple.com/us/album/the-lost-tapes-2/1472443662" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
        }
        if (response.albums[c].tracks.items.length == 17) {
            img.classList.add("classfor17Images");
            if (response.albums[c].name == ("Hip Hop Is Dead (Expanded Edition)")) {
            shopButtons = `<a class="btn btn-primary amazon17songs btn-lg "
            href="https://www.amazon.com/Hip-Hop-Dead-Explicit-Expanded/dp/B07HJV9G6V/ref=sr_1_1?dchild=1&keywords=Hip+Hop+Is+Dead+%28Expanded+Edition%29&qid=1589697855&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus17songs">
            <a class="btn btn-primary itunesfor16songs btn-lg "
                href="https://music.apple.com/us/album/hip-hop-is-dead-expanded-edition/1436741729" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
        }
        if (response.albums[c].tracks.items.length == 25) {
            img.classList.add("classfor25Images");
            if (response.albums[c].name == ("Street's Disciple")) {
                shopButtons = `<a class="btn btn-primary amazon25songs btn-lg "
            href="https://www.amazon.com/Streets-Disciple-Nas/dp/B0006B2AFQ/ref=sr_1_1?dchild=1&keywords=Street%27s+Disciple&qid=1589697747&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus25songs">
            <a class="btn btn-primary itunesfor25songs btn-lg "
                href="https://music.apple.com/us/album/streets-disciple/193130732" target="_blank"
                role="button">Purchase - iTunes</a>
                </div>`
            }
        }
        document.getElementById("shopButtons").innerHTML = shopButtons;
    }
    document.getElementById("name").innerHTML = response.albums[c].name;
    document.getElementById("artist").innerHTML = response.albums[c].artists[0].name;
    document.getElementById("time").innerHTML = response.albums[c].release_date;
    document.getElementById("publisher").innerHTML = response.albums[c].label;
    img = document.getElementById("img").src = response.albums[c].images[1].url;
    document.getElementById("tablebody").innerHTML = songs;
    var button = document.getElementsByClassName("buttons");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function (e) {
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