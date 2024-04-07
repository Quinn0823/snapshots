function command() {
    var command = document.getElementById('command').value;
    if (command == "Home" || command == "home") {
        self.location = "";
    } else if (command == "Music" || command == "music") {
        self.location = "music.html";
    } else if (command == "About" || command == "about") {
        self.location = "about.html";
    } else if (command == "Test" || command == "test") {
        self.location = "test.html";
    } else {
        alert("Error");
    }
}