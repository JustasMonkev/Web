
$.ajax({
    url: 'https://api.spotify.com/v1/albums?ids=3kEtdS2pH6hKcMU9Wioob1%2C78Fgb88MY0ECc4GVMejqTg%2C4UhEjfIRx4tE1XRY21vwNa%2C0yv3K62ndWgrZ0bbAEMzj5%2C0cLzuJG2UDa0axMQkF7JR6%2C2mU2jRMwrsL1tG97xKoiav%2C3rV1aPkrWyMs6YTvTpSbIY%2C0jghcWTsQzux5T9sAfZO13%2C7sHrPadM39466NY7DW3s4r%2C41LyFl0XPrCqYeNml7obol%2C66EwBbt2kPgugo8Wz0SKAw%2C4tRNl7PwUzXrxTP3YZjWgS&market=Es',
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer  BQCbduUTmRkWnv3yjdmVsv5mHhr5Gafn3Pj2Q9GX0v_rklUqUgFNhM4-zyo-GUdOKENjfnGM-d7f1q3-drbv2qGuzEEm1tfWfDpSlnlcC6zSBt1fhxrcCtjt0ffHVUwwBw3mQDRhivrtyWI7Dpe4XQU0yafxD_0oWyOY7VgFRkWFD0vbV0_aseeBgDfCkdrIRseOwNfI6_GS3d0aWtLGFZOcDNYBET1JWSAT4P-ptPqEiUi_Qjw-ywPlgo6Bmf6sbGW895AwUoQ4rq-5"

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
        if( response.albums[c].tracks.items.length == 7) {
            img.classList.add("classfor7Images");
        }
        if( response.albums[c].tracks.items.length == 11) {
            img.classList.add("classfor11Images");
        }
        if( response.albums[c].tracks.items.length == 10) { 
            shopButtons = `<a class="btn btn-primary amazon btn-lg "
            href="https://www.amazon.com/Illmatic-Explicit-Nas/dp/B00DFQDNOQ/ref=sr_1_1?keywords=nas+illmatic&qid=1583783046&sr=8-1"
            target="_blank" role="button">Purchase - Amazon</a>
            <div class="moveitenus">
            <a class="btn btn-primary itunes btn-lg "
                href="https://music.apple.com/us/album/illmatic/662324135?ign-mpt=uo%3D4" target="_blank"
                role="button">Purchase - iTunes</a>`
        }
        if( response.albums[c].tracks.items.length == 14) {
            img.classList.add("classfor14Images");
        }
        if( response.albums[c].tracks.items.length == 15) {
            img.classList.add("classfor15Images");
        }
        if( response.albums[c].tracks.items.length == 16) {
            img.classList.add("classfor16Images");
        }
        if( response.albums[c].tracks.items.length == 17) {
            img.classList.add("classfor17Images");
        }
        if( response.albums[c].tracks.items.length == 25) {
            img.classList.add("classfor25Images");
        }
        document.getElementById("shopButtons").innerHTML = shopButtons;
    }
    document.getElementById("name").innerHTML = response.albums[c].name;
    document.getElementById("artist").innerHTML = response.albums[c].artists[0].name;
    document.getElementById("time").innerHTML = response.albums[c].release_date;
    document.getElementById("publisher").innerHTML = response.albums[c].label;
     img = document.getElementById("img").src = response.albums[c].images[0].url;
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