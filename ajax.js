var picurl;

function getInstaPics(){
    console.log("fetching....");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            picurl = this.responseText;
            document.getElementById("instapic1").setAttribute("src", picurl);
            console.log(picurl);
        }
    };
    xhttp.open("GET", "https://instagram.com/p/B8zWbAwJrGx/media/?size=l", true);
    xhttp.send();
}

getInstaPics();