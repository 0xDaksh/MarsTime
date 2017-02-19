/*!
 * MarsTime
 * (c) 2017 Daksh Miglani
 * Released under the MIT License.
 */

// tai offset is updated frequently, currently it is 37
var tai = 37;

function toTime(h) { // by @JTauber
    var x = h * 3600;
    var hh = Math.floor(x / 3600);
    if (hh < 10) hh = "0" + hh;
    var y = x % 3600;
    var mm = Math.floor(y / 60);
    if (mm < 10) mm = "0" + mm;
    var ss = Math.round(y % 60);
    if (ss < 10) ss = "0" + ss;
    return hh + ":" + mm + ":" + ss;
}
function comma(n) {
    n += "";
    var x = n.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}

function getTime() {
  var current = new Date().getTime();
  var earth = moment().format('MMMM Do YYYY, h:mm:ss a');
  var jdut = 2440587.5 + (current / 8.64E7);
  var jdtt = jdut + (tai + 32.184) / 86400;
  var j2000 = jdtt - 2451545;
  var msd = (((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096);
  var mtc = (24 * msd) % 24;
   $('#time').text(toTime(mtc));
   $('#earth').text('Time on Earth: ' + earth);
   $('#mili').text('Miliseconds: ' + comma(current));
   $("#jdut").text('JDUT: ' + comma(jdut.toFixed(5)));
   $("#jdtt").text('JDTT: ' +comma(jdtt.toFixed(5)));
   $("#j2000").text('J2000: ' + comma(j2000.toFixed(5)));
}

getTime();

$(document).ready(function(){
    $(".button-collapse").sideNav();
    window.setInterval(getTime);
});
