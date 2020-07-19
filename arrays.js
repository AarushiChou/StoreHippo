<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>
<p>The length property returns the length of an array.</p>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.length;
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The length property provides an easy way to append new elements to an array without using the push() method.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits[fruits.length] = "Lemon";
  document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The instanceof operator returns true when used on an array:</p>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits instanceof Array;
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<p>Array elements are accessed using their index number:</p>

<p id="demo1"></p>
<p id="demo2"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits[0] = "Kiwi";
document.getElementById("demo2").innerHTML = fruits;
</script>

</body>

</html>




<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.filter()</h2>

<p>Creates a new array with all array elements that passes a test.</p>

<p id="demo"></p>

<script>
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}
</script>

</body>
</html>




<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.every()</h2>

<p>The every() method checks if all array values pass a test.</p>

<p id="demo"></p>

<script>
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value, index, array) {
  return value > 18;
}
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.some()</h2>

<p>The some() method checks if some array values pass a test.</p>

<p id="demo"></p>

<script>
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}
</script>

</body>
</html>

