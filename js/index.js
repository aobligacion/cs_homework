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

else {
  $('body').attr("class", "default");
}

}
