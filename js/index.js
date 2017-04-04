$( document ).ready(function() {
  $('#submit-btn').click(function() {
    event.preventDefault();
    changeCityBackground(this.value)
    $("#city-type").val("");

});


});


function changeCityBackground(inputValue) {
  var city = $("#city-type").val().toUpperCase().trim();


  if ( city == "NEW YORK" || city == "NEW YORK CITY" || city == "NYC"){
  $('body').attr("class", "nyc");
  console.log("city-type", city);
}

else if ( city == "AUSTIN" || city == "ATX" ){
$('body').attr("class", "austin");
console.log("city-type", city);
}

else if ( city == "LOS ANGELES " || city == "LA" || city == "LAX" ){
$('body').attr("class", "la");
console.log("city-type", city);
}

else if ( city == "SAN FRANCISCO " || city == "SF" || city == "BAY AREA" ){
$('body').attr("class", "sf");
console.log("city-type", city);
}

else if ( city == "SYDNEY " || city == "SYD" ){
$('body').attr("class", "sydney");
console.log("city-type", city);
}

else {
  $('body').attr("class", "default");
}

}
