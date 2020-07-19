<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>Strings are written inside quotes.</p>
<p>You can use single or double quotes:</p>

<p id="demo"></p>

<script>
var carName1 = "Volvo XC60";
var carName2 = 'Volvo XC60';

document.getElementById("demo").innerHTML =
carName1 + " " + carName2; 
</script>

</body>
</html>




<!DOCTYPE html>
<html>
<body>

<p>Click the button to perfom a global (/g) search for the letters "ain" (/ain) in a string, and display the matches.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "The rain in SPAIN stays mainly in the plain"; 
  var res = str.match(/ain/g);
  document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>



<!DOCTYPE html>
<html>

<body>

<h2>JavaScript String Methods</h2>

<p>Replace "Microsoft" with "W3Schools" in the paragraph below:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace("Microsoft","W3Schools");
  document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Convert string to upper case:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Hello World!</p>

<script>
function myFunction() {
  var text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.toUpperCase();
}
</script>

</body>
</html>
