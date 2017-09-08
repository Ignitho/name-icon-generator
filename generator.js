//variables to store the first name and last name, this should be declared global
var fname ="";
var lname ="";

/*function to fetch first name and last name from input fields of the form.
please customize or replace this function to fetch first name and last name from your api. use HTTP Request for this process.
*/
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

/*function to randomly change background color of the circle
*/
function colorchange()
{
  //add needed colors to this array to pick randomly from it
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#800000'];
  document.getElementById('text-img').style.background = colors[Math.floor(Math.random() * colors.length)];
}

/*function to append the first letter of first name and last name to the span with id=letters
also this functions check for undefined variables
*/
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
