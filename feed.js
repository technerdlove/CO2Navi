var nameArr = [ "Gary", "Tudor", "Kyle" ];
var transportationArr = [ "bus", "car", "walk", "bike" ];

for(var i=0; i<10; i++) {
    var node = document.createElement("LI");

    // Randomized data
    var name = nameArr[Math.floor((Math.random() * nameArr.length))];
    var transportation = transportationArr[Math.floor((Math.random() * transportationArr.length))];
    var distanceMiles = Math.floor((Math.random() * 20) + 1);
    var co2Saved = Math.floor((Math.random() * 20) + 1);

    var transportationPrefix = "";
    var transportationSuffix = "";
    if (transportation == "bus") {
        transportationPrefix = " took the ";
    } else if (transportation == "car") {
        transportationPrefix = " drove a ";
    } else if (transportation == "walk") {
        transportationPrefix = " ";
        transportationSuffix = "ed ";
    } else if (transportation == "bike") {
        transportationPrefix = " ";
        transportationSuffix = "d ";
    }
    var co2SavedPrefix = " and saved ";
    var co2SavedSuffix = " lbs of CO2!";
    var distancePrefix = " ";
    var distanceSuffix = " miles ";
    var textnode = document.createTextNode(
        name +
        transportationPrefix + transportation + transportationSuffix +
        distancePrefix + distanceMiles + distanceSuffix +
        co2SavedPrefix + co2Saved + co2SavedSuffix
        );
    node.appendChild(textnode);
    document.getElementById("feed").appendChild(node);
}
