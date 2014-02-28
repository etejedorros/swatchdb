dojo.declare("Temas", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	temasLiveForm1Success1: function(inSender, inData) {
	  try {
		  main.temasLookup1.update();
		  
	  } catch(e) {
		  console.error('ERROR IN temasLiveForm1Success1: ' + e); 
	  } 
  },
  _end: 0
});