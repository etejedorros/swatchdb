dojo.declare("Colecciones", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	coleccionesLiveForm1Success1: function(inSender, inData) {
	  try {
		  main.coleccionesLookup1.update();
		  
	  } catch(e) {
		  console.error('ERROR IN coleccionesLiveForm1Success1: ' + e); 
	  } 
  },
  _end: 0
});