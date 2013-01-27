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
	wikiLink.innerHTML = "<span class=\"normalName\">Wiki Link</span><span class=\"sharedName\">Wiki Link</span><span class=\"placeholderName\">Embedded</span>";

	/*
	var controlDiv = document.getElementById("moreControls");

	var hr = document.createElement("hr");
	controlDiv.appendChild(hr);

	var content = document.createElement("a");
	//content.id = "wikiLink";
	content.class = "share";

	var wikiSpan1 = document.createElement("span");
	wikiSpan1.class = "normalName";
	text = document.createTextNode("Wiki Link");
	wikiSpan1.appendChild(text);
	content.appendChild(wikiSpan1);
	
	var wikiSpan2 = document.createElement("span");
	wikiSpan2.class = "sharedName";
	text = document.createTextNode("Wiki Linked");
	wikiSpan2.appendChild(text);
	content.appendChild(wikiSpan2);

	var wikiSpan3 = document.createElement("span");
	wikiSpan3.class = "placeholderName";
	text = document.createTextNode("Embedded");
	wikiSpan3.appendChild(text);
	content.appendChild(wikiSpan3);
*/
	//var content = document.createTextNode("<a id=\"wikiLink\" class=\"share\"><span class=\"normalName\">Wiki Link</span><span class=\"sharedName\">Wiki Link</span><span class=\"placeholderName\">Embedded</span><hr></a>");
	//controlDiv.insertBefore(wikiLink, controlDiv.firstChild);
	controlDiv.appendChild(wikiLink);
 })
});
observer.observe(document.getElementById("controlsLeft"), { 	
	attributes: true
});