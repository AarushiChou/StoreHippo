<!DOCTYPE html>
<html>
<head>
<script>
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
</script>
</head>

<body onload="startTime()">

<div id="txt"></div>

</body>
</html>




<!DOCTYPE html>
<html>
<body>

<h2>JavaScript setFullYear()</h2>

<p>The setFullYear() method sets the year of a date object:</p>

<p id="demo"></p>

<script>
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript getFullYear()</h2>

<p>The getFullYear() method returns the full year of a date:</p>

<p id="demo"></p>

<script>
var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript getTime()</h2>

<p>The internal clock in JavaScript counts from midnight January 1, 1970.</p>
<p>The getTime() function returns the number of milliseconds since then:</p>

<p id="demo"></p>

<script>
var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();
</script>

</body>
</html>
