dojo.declare("Artistas", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	artistasLiveForm1Success1: function(inSender, inData) {
	  try {
		  main.artistasLookup1.update();
		  
	  } catch(e) {
		  console.error('ERROR IN artistasLiveForm1Success1: ' + e); 
	  } 
  },
  artistasDojoGridSelectionChange: function(inSender) {
	  try {
		  this.artistasLiveForm1.endEdit();
		  
	  } catch(e) {
		  console.error('ERROR IN artistasDojoGridSelectionChange: ' + e); 
	  } 
  },
  _end: 0
});