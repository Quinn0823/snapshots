setTimeout(tip(), 1000);
function tip(){
	var tip=confirm("⚠ Warning:\nEarthworm-Web is no longer updated.\n\n🔗 compare:\nQuinn-Web is more beautiful than Earthworm-Web.\nEarthworm-Web is richer than Quinn-Web.\n\nClick 'OK' to go to Quinn-Web, and click 'Cancel' to stay here.");
	if (tip == true){
		window.location=("https://quinn0823.github.io");
	}
}