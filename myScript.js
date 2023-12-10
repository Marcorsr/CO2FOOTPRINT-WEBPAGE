function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("sortable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  var ersterFilter
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase()
  table = document.getElementById("sortable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
       ersterFilter = "true";
      }else {
               tr[i].style.display = "none";
    }
  }



} if(!ersterFilter){

 for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }else {
               tr[i].style.display = "none";
    }
  }
}
}
}

function direction(){

if(document.getElementById("lft").checked){
  document.getElementById("navbar").dir="lft"
} else{
  document.getElementById("navbar").dir="rtl"
}
}


// When the user clicks on submit, open the popup and give message
// Then close after Ok or Cancel and reload the page.
function showPopUp() {
  var name = document.getElementById("fname")
  var lname = document.getElementById("lname")

  if(confirm("Danke für deine Frage" +" " + fname.value + " " + lname.value +
  "\nWir melden uns baldmöglichst bei dir !")){
 window.history.back()}
  else{
 window.history.back()
 }
}

const btnSumbit = document.getElementById("submitButton");
const btnReset = document.getElementById("ResetButton");
const namevalidate= document.getElementById("fname");

//namevalidate.addEventListener('change', validate);
btnReset.addEventListener('click', emptyResult);
btnSumbit.addEventListener('click',showResponse );

function emptyResult(){
var rueckmeldung1 = document.getElementById("rueckmeldung")
 rueckmeldung1.innerHTML =" ";
}

/*
function validate(){



    // Allow A-Z, a-z, 0-9 and underscore. Min 1 char.
    var re = /^[a-zA-Z0-9_]+$/;

    var result = re.test(namevalidate.value);
    if(!result){
      namevalidate.setCustomValidity('Passwörter müssen übereinstimmen!');
    }

} */

function showResponse(){

var name1 = document.getElementById("fname").value;
var name2 = document.getElementById("lname").value;
var frage = document.getElementById("lFrage").value;
var regName = /^[a-zA-Z]+$/;
var defaultvalue = "Bitte formulieren Sie hier Ihre Frage. …"
if(!regName.test(name1) ){
document.getElementById("fname").value =" ";
alert('Ungültiger Firsname!');
}

if(!regName.test(name2) ){
document.getElementById("lname").value =" ";
alert('Ungültiger Lastname!');
}

if(frage === defaultvalue){
alert('Keine Frage gestellt!');

} else {
var lname1 = document.getElementById("lname").value
var rueckmeldung = document.getElementById("rueckmeldung")

if(document.getElementById("male").checked){
rueckmeldung.innerHTML = "Hallo Herr " + name1 +" "+lname1+". Danke für Ihre Frage. Wir melden uns bald bei Ihnen.";
}else {
rueckmeldung.innerHTML = "Hallo Frau " + name1+" "+lname1+". Danke für Ihre Frage. Wir melden uns bald bei Ihnen.";
}


}



}



//
//function checkSubmitt(){
//var fname = document.getElementById("fname").value
//if(fname !===''){
//document.getElementById("submitButton").disabled = false;
//}

//}