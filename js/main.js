var stateObject = {
   "Kenya": { "Nairobi": ["kasarani", "Westlands","Embakasi"],
   "Mombasa": ["Likoni", "Jomvu","Kisauni"],
   "Kisumu": ["Kisumu east", "Kisumu west","Kisumu central"],
   }
 
   }
   window.onload = function () {
   var countrySel = document.getElementById("countrySel"),
   countySel = document.getElementById("countySel"),
   subSel = document.getElementById("subSel");
   for (var country in stateObject) {
   countrySel.options[countrySel.options.length] = new Option(country, country);
   }
   countrySel.onchange = function () {
   countySel.length = 1; // remove all options bar first
   subSel.length = 1; // remove all options bar first
   if (this.selectedIndex < 1) return; // done
   for (var county in stateObject[this.value]) {
   countySel.options[countySel.options.length] = new Option(county, county);
   }
   }
   countrySel.onchange(); // reset in case page is reloaded
   countySel.onchange = function () {
   subSel.length = 1; // remove all options bar first
   if (this.selectedIndex < 1) return; // done
   var subCounty = stateObject[countrySel.value][this.value];
   for (var i = 0; i < subCounty.length; i++) {
   subSel.options[subSel.options.length] = new Option(subCounty[i], subCounty[i]);
   }
   }
   }

$(document).ready(function(){
   $("#mapper").click(function(){
      $("#map").show();
      $("#info").show();
   })

	mapboxgl.accessToken = 'pk.eyJ1IjoidmVjdG9yMjU0IiwiYSI6ImNrZGdibmluNDI0MGkydXQ5aGdyNWdoN2wifQ.zE3Z--3B1hjMRoChCWwTKw';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [0, 37], // starting position
zoom: 3 // starting zoom
});
 
// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
zoom: 15,
enableHighAccuracy: true
},
trackUserLocation: true
})
);
$("#exit").click(function(){
   $("#map").hide();
   $("#info").hide();
})

});
// statics counter
$(document).ready(function() {

   $('.counter').each(function () {
   $(this).prop('Counter',0).animate({
   Counter: $(this).text()
   }, {
   duration: 4000,
   easing: 'swing',
   step: function (now) {
   $(this).text(Math.ceil(now));
   }
   });
   });
   
   });
//end of the counter code

function shareIssue (){
    var name = document.getElementById("names").value;
    var lastOne = document.getElementById("lastName").value;
    var carModel = document.getElementById("carselect").value;
    var issues = document.getElementById("issue").value;
    var resolve = document.getElementById("fix").value;

    if(name=="") {
        alert("")
    };
        
};
function Mechanic(first,last, contact) {
   this.firstName = first;
   this.lastName = last;
   this.tel = contact;
   this.mechanic = function() {return this.firstName + " " + this.lastName+" Tel: "+this.tel;};

 }

function help(){
   var mechanic = new Mechanic("Martin","Luther", +"254 70000001");
   var location=document.getElementById("subSel").value;
   if (location=="kasarani"){
      document.getElementById("available").value="Available Mechanics:"+mechanic.tel;
   }
}
 
$(document).ready(function() {
   $("#help").click(function(event) {
     event.preventDefault();
     help();
   });
});