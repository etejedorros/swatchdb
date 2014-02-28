dojo.declare("Estados", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	estadosLiveForm1Success1: function(inSender, inData) {
	  try {
		  main.estadosLookup1.update();
		  
	  } catch(e) {
		  console.error('ERROR IN estadosLiveForm1Success1: ' + e); 
	  } 
  },
  _end: 0
});