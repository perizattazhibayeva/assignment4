// Create an object:
const team = {
  firstName: "Dinmukhamed",
  secondName : "Alsana",
  thirdName:  "Perizat"
};
        
// Display some data from the object:
document.getElementById("teams").innerHTML =
team.firstName + " <br/> " + team.secondName + " <br/> " + team.thirdName;

document.getElementById("member-1").innerHTML = team.firstName;
document.getElementById("member-2").innerHTML = team.secondName;
document.getElementById("member-3").innerHTML = team.thirdName;

var x = document.getElementById("myAudio");

function playAudio() { 
  x.play(); 
} 

 