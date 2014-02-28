dojo.declare("Familias", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	familiasLiveForm1Success1: function(inSender, inData) {
	  try {
		  main.familiasLookup1.update();
	  } catch(e) {
		  console.error('ERROR IN familiasLiveForm1Success1: ' + e); 
	  } 
  },
  _end: 0
});