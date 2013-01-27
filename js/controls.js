// I'm going to duplicate the "share" option.
// Once shared, the option appears in bold in the controls menu.

// Could be a CSS .hovered...

    #controlsLeft.hovered{
	display:block;
    }
// This code opens the controls popup/context menu:

jQuery.fn.initiateShowHoverControls = function() {
            var e = $(this).getProject();
            $(".highlighted").removeClass("highlighted");
            e.is(".selected") || e.addClass("highlighted");
            clearTimeout(TIMEOUTS.hideHoverControls);
            TIMEOUTS.showControls = setTimeout(function() {
                e.showControls()
            }, 500)
        };

    jQuery.fn.showControls = function() {
        var e = $(this), c = projecttree.getProjectReferenceFromDomProject(e);
        c = c.isReadOnly() && !c.isAddedSubtreePlaceholder();
        if (IS_MOBILE) {
            var j = e.children(".name");
            j.placeControls();
            j = j.children("#controls");
            var m = j.find(".dedent"), q = j.find(".indent");
            m.add(q).removeClass("disabled");
            e.getNewNextProjectOrChildrenEndForOutdent() === null && m.addClass("disabled");
            e.getNewNextProjectOrChildrenEndForIndent() === 
            null && q.addClass("disabled");
            j.offset({top: $("body").scrollTop(),left: 0}).width($(window).width());
            e = $("#controlsLeft");
            e.addClass("hovered");
            c && e.removeClass("hovered");
            getCurrentlyFocusedEditor() !== null ? j.addClass("editing") : j.removeClass("editing")
        } else if (!c) {
            j = e.children(".name").find("#controlsLeft");
            j.fadeIn(50, function() {
                $(this).removeAttr("style")
            });
            j.addClass("hovered");
            $("#expandButton").addClass("controlsShow")
        }
    };


this.placeControls()


<div id="controlsLeft" class="hovered">
	  <div class="handle"></div>
	  
	  <div class="invisible-mouse-helper">
	    <div></div>
	  </div>
	  

	  <a class="note">
	    <span class="addNote">Add</span><span class="editNote">Edit</span> Note
	    <hr>
	  </a>
	  <a class="complete">
	    Complete
	    <hr>
	  </a>
	  <a class="share">
	    <span class="normalName">Share</span><span class="sharedName">Shared</span><span class="placeholderName">Embedded</span>
	    <hr>
	  </a>
	  <div id="moreControls">
	    <a class="export">
	      Export
	      <hr>
	    </a>
	    <a class="duplicate">
	      Duplicate
	      <hr>
	    </a>
	    <a class="delete">
	      <span class="normalName">Delete</span><span class="sharedName">Delete</span><span class="placeholderName">Remove</span>
	    </a>
	    <a class="more ui-icon ui-icon-triangle-1-s">
	    </a>
	  </div>
        </div>
// The following code is in workflowy's source.js:
        $("#controlsLeft > .share").click(function() {
            $(this).getProject().showSharePopup();
            hideControls()
        });
