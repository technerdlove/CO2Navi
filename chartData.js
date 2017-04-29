$.getJSON("feed.json", function (data) {

    for (var i=0; i<data.length; i++) {

        var node = document.createElement("LI");
 
        var distanceMiles = data[i].distance;
        var co2Saved = data[i].co2Saved;
    }
}
