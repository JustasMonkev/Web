        var form = document.getElementById("form2");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            location.replace("../index.html");
            alert("thank for your order");
        });