//window.alert("Yay now press ok to move on");

//document.getElementById("demo").innerHTML = "Hello JavaScript";

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }



// I'M NOT SURE why when submitted, you get the 'page not found'

	/*fucntion functionname() {
		var variable = document.forms["name of the form"]["name of input"].value
		(body of fuct that makes sure that the spaces are filled out)
	}
*/

// Is there a way of shortening this? using     [[if a or b or c or ...]]



function submitForm() {
	var a = document.forms["myForm"]["pokemonName"].value;
	var b = document.forms["myForm"]["description"].value;
	var c = document.forms["myForm"]["HP"].value;
	
	var e = document.forms["myForm"]["moves"].value;
	var f = document.forms["myForm"]["moveTypes"].value;

    if (a == null || a == ""){
        alert("all spaces must be filled out");
        return false;
    }
    if (b == null || b == ""){
        alert("all spaces must be filled out");
        return false;
    }
    if (c == null || c == ""){
        alert("all spaces must be filled out");
        return false;
    }
    if (e == null || e == ""){
        alert("all spaces must be filled out");
        return false;
    }
    if (f == null || f == ""){
        alert("all spaces must be filled out");
        return false;
    }
}


/* because the stupid html isn't catching the max and min */
function goodHP() {
    var num = document.getElementById("HP")
    if(num.checkValidity() == false) {
        alert("You suck. Check your hp");
    }else {
        return;
    }
}
goodHP();

function goodDescrip() {
    var len = getElementById("description").value.length;
    if(len < 10 or len > 200){
        alert("You're description has to be between 50 and 200 characters long.");
    }else {
        return;
    }
}
goodDecrip();


function getName() {  
    var counter; 
    var text = ""; 
    var x = document.getElementById("myForm");

    for (counter = 0; counter < x.length; counter += 1) {
        text += x.elements[counter].value + "<br>";
    }
    document.getElementById("example").innerHTML = text;
}

/*You're gonna take info that comes in a list, and place it in corresponding places in your table*/

function placeStuffn(n) {
    var alos = document.getElementById("example").innerHTML;

    alos[7] = document.getElementsByName("pokemonName"+ n).innerHTML;
    alos[8] = document.getElementsByName("Description" + n).innerHTML;
    alos[9] = document.getElementsByName("HP"+ n);
    alos[10] = document.getElementsByName(n + "Type1").innerHTML;
    alos[11] = document.getElementsByName(n + "Type2").innerHTML;
    /*I want there to be moves and type, but later*/

} 

placeStuffn("2");


/* this gives the value 1`-6 depending on which radio button is selected*/
function isRadioon(){
    var buttSelect = document.getElementsByName("Pokemon");

    for (var i = 0; i < buttSelect.length; i ++){
        if(buttSelect[0] == true){
            selectedbuttSelect = buttSelect[i].value;
        }
    }
}

isRadioon();

function putinTable(){
    var buttonPressed = isRadioon(); 

    if(buttonPressed == 1){
        placeStuffn(1);

    }else if(buttonPressed == 2){
        placeStuffn(2);

    }else if(buttonPressed == 3){
        placeStuffn(3);

    }else if(buttonPressed == 4){
        placeStuffn(4);

    }else if(buttonPressed == 5){
        placeStuffn(5);

    }else if(buttonPressed == 6){
        placeStuffn(6);

    }

    }
putinTable();




/*// Need to see how this function can work (use mult methods)
function perfLength() {
    var x = getElementById("description");
    var y = "";
    if (x.checkValidity() == false) {
        document.getElementById("change").innerHTML = x.validationMessage;
    } else {
        document.getElementById("change").innerHTML = "Add another Pokeon!";
    }
}*/


function clearForm() {
    document.getElementById("myForm").reset();
}