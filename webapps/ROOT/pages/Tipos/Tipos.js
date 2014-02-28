dojo.declare("Tipos", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	tiposLiveForm1Success1: function(inSender, inData) {
	  try {
		  main.tiposLookup1.update();
		  
	  } catch(e) {
		  console.error('ERROR IN tiposLiveForm1Success1: ' + e); 
	  } 
  },
  _end: 0
});