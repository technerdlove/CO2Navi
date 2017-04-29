function getDateString( dateObj ) 
{
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hour = dateObj.getHours();
    var mins = dateObj.getMinutes();

    return = year + "/" + month + "/" + day + " " + hour + ":" + "mins";
}
