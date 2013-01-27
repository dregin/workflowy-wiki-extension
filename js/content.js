var observer = new WebKitMutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
	/*
	if(mutation.target.id === "controlsLeft")
	{
		var set = false;
		if (document.getElementById("controlsLeft") === null && set == false){
			//var controlDiv = document.getElementById("controlsLeft");
			console.log(mutation);
			var content = document.createTextNode("<a id=\"wikiLink\" class=\"share\"><span class=\"normalName\">Wiki Link</span><span class=\"sharedName\">Wiki Link</span><span class=\"placeholderName\">Embedded</span><hr></a>");
			mutation.target.appendChild(content);
			set = true;
		}
	}
	*/
	observer.disconnect();

	var controlDiv = document.getElementById("controlsLeft");
	var wikiLink = document.createElement("a");
	wikiLink.class = "share";
	wikiLink.innerHTML = "<span class=\"normalName\">Wiki Link</span><span class=\"sharedName\">Wiki Linked</span><span class=\"placeholderName\">Embedded</span>";

	controlDiv.insertBefore(wikiLink, document.getElementsByClassName("export"));
	//controlDiv.appendChild(wikiLink);
 })
});
observer.observe(document.getElementById("controlsLeft"), { 	
	attributes: true,
	attributeFilter: ["class"]
});