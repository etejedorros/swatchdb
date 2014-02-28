dojo.declare("Buscador", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	button1Click: function(inSender) {
	  try {
        this.dojoGrid1.showCSVData();
		  
	  } catch(e) {
		  console.error('ERROR IN button1Click: ' + e); 
	  } 
  },
  svBuscarRelojesSuccess: function(inSender, inDeprecated) {
	  try {
		  var numRows = inSender.getCount();
          if (numRows > 0) {
              this.button1.setDisabled(false);
          } else {
              this.button1.setDisabled(true);
          }
		  
	  } catch(e) {
		  console.error('ERROR IN svBuscarRelojesSuccess: ' + e); 
	  } 
  },
  _end: 0
});