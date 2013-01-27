var observer = new WebKitMutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		observer.disconnect();

		var controlDiv = document.getElementById("controlsLeft");
		var wikiLink = document.createElement("a");
		wikiLink.class = "share";
		wikiLink.innerHTML = "<span id=\"wikiLink\" class=\"normalName\">Wiki Link</span><span class=\"sharedName\">Wiki Linked</span><span class=\"placeholderName\">Embedded</span><hr>";

		controlDiv.insertBefore(wikiLink, controlDiv.childNodes[1]);

		document.getElementById('wikiLink').addEventListener('click', function() {
	    	console.log("Wiki Link from Project ID: " + this.parentNode.parentNode.parentNode.parentNode.parentNode.attributes["projectid"].value);
	    	
	    	var projectId = this.parentNode.parentNode.parentNode.parentNode.parentNode.attributes["projectid"].value;
	    	var storage = chrome.storage.local;

	    	var projectIdObj = {}
	    	projectIdObj[projectId] = 'true';
	    	storage.set(projectIdObj, function() {
	    		console.log("project ID Saved: " + projectId);
	    	});

	    	// Get Project ID from local storage.
	    	// Do for every item and change item to link if project ID key has "true" value.
	    	storage.get('projectId', function(fetchedData) {
			    console.log("Project ID saved: " + fetchedData.projectId);
			});
		});
 	})
});
observer.observe(document.getElementById("controlsLeft"), { 	
	attributes: true,
	attributeFilter: ["class"]
});