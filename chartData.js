function giveData() {
    var data = [];
    $.getJSON("feed.json", function (data) {

        for (var i=0; i<data.length; i++) {
            data.push(data[i].co2Saved);
        }
    }
}
