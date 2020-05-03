var picurl;

function getInstaPics(){
    console.log("fetching....");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            info = JSON.parse(this.responseText);
            picurl = info.html;
            author_url = info.author_url;
            console.log(author_url);
            //document.getElementById("instapic1").setAttribute("src", picurl);
            document.getElementById("instafeed").innerHTML = picurl;
            instgrm.Embeds.process();
        }
    };
    xhttp.open("GET", "https://api.instagram.com/oembed?url=https://www.instagram.com/p/B8zWbAwJrGx/", true);

    xhttp.send();
}

getInstaPics();
