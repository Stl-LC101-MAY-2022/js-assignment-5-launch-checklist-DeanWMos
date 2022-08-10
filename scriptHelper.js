// Write your helper functions here!
require ('isomorphic-fetch')

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    missionTarget = document.getElementId("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${numOM}</li>
    </ol>
    <img src ="${imageUrl}"></img>`

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

}

function validateInput(testInput) {
    console.log(testInput)
   if(testInput ===""){
    return "Empty"
   }
   else if (!isNaN(testInput)){
    return "Is a Number";
}
else if (isNaN(testInput)){
    return "Not a Number"
}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStat = document.getElementId("pilotStatus")
   let copilotStat = document.getElementId("copilotStatus")
   let fuelStatus = document.getElementId("fuelStatus")
   let cargoStatus = document.getElementId("cargoStatus")
   let h2 = document.getElementId("launchStatus")

   if(cargoLevel<=1000 && fuelLevel >= 10000){
    list.style.visibility="visible";
    h2.style.color="green"
    h2.innerHTML="Shuttle Ready for Launch"
    pilotStat.innerHTML=`Pilot ${pilot} is ready for launch.`
    copilotStat.innerHTML=`Copilot ${copilot} is ready for launch.`
    fuelStatus.innerHTML=`Fuel Level high enough for Launch`
    cargoStatus.innerHTML=`Cargo mass low enough for Launch`
   } else 

   if (cargoLevel>1000 || fuelLevel<10000){
    list.style.visibility="visible";
    h2.style.color="red"
    h2.innerHTML="Shuttle Not Ready for Launch"
    pilotStat.innerHTML=`Pilot ${pilot} is ready for launch.`
    fuelStatus.innerHTML=`Check fuel level or cargo mass.`
   }
}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let picker = Math.floor(Math.random()*planets.lenght);
    let currentPlanet = planets[randomIndex]
    return currentPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
