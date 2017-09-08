# Name-icon-generator
A javascript plugin to show first letter of your first name and last name inside a circle.
this can be used as a default image box instead of your profile image.

# Usage
Download the files and merge index.html with your project, modify generator.js and style.css to customize the plugin.

## index.html

<div> text-img is used as outer circle.
<span> letters is used to append the letters inside it.
```
<div id="text-img" class="text-image">

  <span id="letters"></span>

</div>
```
form to read the first name and last name. fetch functions are called on each key press. so the letters will
change instantly.

color changing function is called every time you completely replace the first name

```
<form class="" action="">
<label for="">First Name</label>
<input onkeyup="fetchfname(this.value)" onchange="colorchange()"  type="text" name="" value="">
<label for="">Last Name</label>
<input onkeyup="fetchlname(this.value)" type="text" name="" value="">
</form>
```

## style.css

* we have used a circle as background div. remove border-radius to make it square
* text-align: center;, display: table;, vertical-align: middle; - modifying these attribute will kill the alignments.
* text-transform: uppercase; - is used to print letters in uppercase.
```
.text-image
{

  width: 50px;
  height: 50px;
  border-radius: 50px;


  font-size: 18px;
  font-family: inherit;
  background: black;
  font-weight: bold;
  color: white;


  text-transform: uppercase;


  text-align: center;
  display: table;
  vertical-align: middle;
}


.text-image span
{
  vertical-align: middle;
  display: table-cell;
  text-align: center;
}

```

## generator.js

### fetch functions
functions used to fetch values from the input boxes
```
function fetchfname(value)
{
  fname = value.replace(/\s/g, "");
  appendname();
}
function fetchlname(value)
{
  lname = value.replace(/\s/g, "");
  appendname();
}
```
### append function

function used to append values to the <span>

```
function appendname()
{
  if (lname=='') {
    document.getElementById("letters").innerHTML=fname[0];

  }
  if (fname=='') {
    document.getElementById("letters").innerHTML=lname[0];

  }
  if(fname=='' && lname==''){
    document.getElementById("letters").innerHTML='';
  }
  if(fname!='' && lname!='') {
    document.getElementById("letters").innerHTML=fname[0]+lname[0];
  }

}
```
### color change function

function used to change the background color of the displaying <div> circle
```
function colorchange()
{
  //add needed colors to this array to pick randomly from it
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#800000'];
  document.getElementById('text-img').style.background = colors[Math.floor(Math.random() * colors.length)];
}
```

#License
This project is open source.
