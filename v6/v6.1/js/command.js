function command() {
    var command = document.getElementById("command").value;
    if (command == "Home" || command == "home") {
        window.location = "home.html";
    } else if (command == "About" || command == "about") {
        window.location = "about.html";
    } else if (command == "Test" || command == "test") {
        window.location = "test.html";
    } else {
        alert("Error");
    }
}