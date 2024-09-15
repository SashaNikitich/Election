var close = document.getElementsByClassName("close-btn");
var i;

function open_alert() {
    // Assuming there's only one alert, you can target the first element
    var alert = document.getElementsByClassName("alert")[0];
    alert.style.display = "block";
}

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function(){

        // Get the parent of <span class="close-btn"> (<div class="alert">)
        var div = this.parentElement;

        // Set the opacity of div to 0 (transparent)
        div.style.opacity = "0";

        // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}