var observer = new WebKitMutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		observer.disconnect();

		var controlDiv = document.getElementById("controlsLeft");
		var wikiLink = document.createElement("a");
		wikiLink.class = "share";
		wikiLink.innerHTML = "<span id=\"wikiLink\" class=\"normalName\">Wiki Link</span><span class=\"sharedName\">Wiki Linked</span><span class=\"placeholderName\">Embedded</span><hr>";

		controlDiv.insertBefore(wikiLink, controlDiv.childNodes[1]);

		document.getElementById('wikiLink').addEventListener('click', function() {
	    	console.log("Wiki Link clicked!");
			});
 	})
});
observer.observe(document.getElementById("controlsLeft"), { 	
	attributes: true,
	attributeFilter: ["class"]
});