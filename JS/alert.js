var close = document.getElementsByClassName("close-btn");
var i;

function open_alert() {
    var alert = document.getElementsByClassName("alert")[0];
    alert.style.display = "block";
    alert.style.opacity = "1";

    setTimeout(function() {
        alert.style.opacity = "0";
        setTimeout(function() { alert.style.display = "none"; }, 600);
    }, 3000);
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var question = document.getElementById("question").value;

    if (name === "" || email === "" || question === "") {
        alert("Please fill in all fields.");
        return false;  // Prevent form submission
    } else {
        open_alert();  // Show the alert if the form is valid
        return true;   // Allow form submission
    }
}

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}