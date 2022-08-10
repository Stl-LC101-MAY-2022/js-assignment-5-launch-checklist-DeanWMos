// Write your JavaScript code here!

const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
// declare variables
    const document = window.document;
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoLevel]");
    const list = document.getElementById("faultyItem");
    const form = document.querySelector("form");

    form.addEventListener("submit", function(stop){
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)

        if (ValidateInput(fuelLevel.value)===NaN || validateInput(cargoLevel.value)===NaN){
          return alert("Not a Number!")
          stop.preventDefault();
        } else if (ValidateInput(pilot.value)=="Empty" || ValidateInput(copilot.value)== "Empty" || ValidateInput(fuelLevel.value)=="Empty"|| validateInput(cargoLevel.value)=="Empty"){
           return alert("All fields are required!")
           stop.preventDefault();
        } else if (ValidateInput(pilot.value)=="Is a Number" || ValidateInput(copilot.value)== "Is a Number"){
           return alert("Is a Number!")
            stop.preventDefault();
        }
    })



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pPlanet = pickPlanet(listedPlanets);
   })
   
});