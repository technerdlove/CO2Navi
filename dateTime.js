function getDateTimeString( t ) { //t = Date.getTime(); (MS since 1970)
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;


var y = Math.floor(t / years);
t -= y*years;
y += 1970;
var day = Math.floor(t / days);
t -= day*days;
var hour = Math.Floor(t / hours);
t -= hour * hours;
var mins = Math.Round(t / minutes);

// e.x. 2017/183/18/24 = 24th min of 18th hour of 183rd day of 2017
var result = year.toString();
var slash = "/";
result.concat(slash);
result.concat(day.toString());
result.concat(slash);
result.concat(hour.toString());
result.concat(slash);
result.concat(mins.toStirng());
return result;
}
