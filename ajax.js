var picurl;

function getInstaPics(){
    console.log("fetching....");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            info = JSON.parse(this.responseText);
            document.getElementById("pic1").innerHTML = info.html;
            console.log(info.thumbnail_url);
            instgrm.Embeds.process();
        }
    };
    xhttp.open("GET", "https://api.instagram.com/oembed?url=https://www.instagram.com/p/B8zWbAwJrGx/", true);
    xhttp.send();
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            info = JSON.parse(this.responseText);
            document.getElementById("pic2").innerHTML = info.html;
            instgrm.Embeds.process();
        }
    };
    xhttp2.open("GET", "https://api.instagram.com/oembed?url=https://www.instagram.com/p/B8OnaXsgYDL/", true);
    xhttp2.send();
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            info = JSON.parse(this.responseText);
            document.getElementById("pic3").innerHTML = info.html;
            instgrm.Embeds.process();
        }
    };
    xhttp3.open("GET", "https://api.instagram.com/oembed?url=https://www.instagram.com/p/B8HcaeTAvWl/", true);
    xhttp3.send();
}

var feedindex = 0;
const feed = document.getElementsByClassName("embedded");
function displayFeed(i){
    feed[0].style.display = "none";
    feed[1].style.display = "none";
    feed[2].style.display = "none";
    feed[i].style.display = "block";
    console.log(feed[i]);
    console.log(feed[1]);
}
function next(){
    feedindex++;
    if(feedindex>2){
        feedindex = 2;
    }
    displayFeed(feedindex);
}
function back(){
    feedindex--;
    if(feedindex<0){
        feedindex = 0;
    }
    displayFeed(feedindex);
}

getInstaPics();

document.getElementById("nextbutton").addEventListener("click", next);
document.getElementById("backbutton").addEventListener("click", back);
