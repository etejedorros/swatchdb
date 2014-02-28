dojo.declare("Foto", wm.Page, {
	start: function() {
		try {
            
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

  fotosLiveForm1BeginInsert: function(inSender) {
	  try {
		  this.dojoFlashFileUpload1.setDisabled(false);
		  
	  } catch(e) {
		  console.error('ERROR IN fotosLiveForm1BeginInsert: ' + e); 
	  } 
  },
  fotosLiveForm1BeginUpdate: function(inSender) {
	  try {
		  this.dojoFlashFileUpload1.setDisabled(false);
		  
	  } catch(e) {
		  console.error('ERROR IN fotosLiveForm1BeginUpdate: ' + e); 
	  } 
  },
  fotosLiveForm1CancelEdit: function(inSender) {
	  try {
		  this.dojoFlashFileUpload1.setDisabled(true);
		  
	  } catch(e) {
		  console.error('ERROR IN fotosLiveForm1CancelEdit: ' + e); 
	  } 
  },
  fotosLiveForm1Success1: function(inSender, inData) {
	  try {
		  this.dojoFlashFileUpload1.setDisabled(true);
          main.relojesLiveVariable1.update();
		  
	  } catch(e) {
		  console.error('ERROR IN fotosLiveForm1Success1: ' + e); 
	  } 
  },
  fotosLiveForm1Error: function(inSender, inError) {
	  try {
		  this.dojoFlashFileUpload1.setDisabled(true);
		  
	  } catch(e) {
		  console.error('ERROR IN fotosLiveForm1Error: ' + e); 
	  } 
  },
  
  fotosDojoGridSelectionChange: function(inSender) {
	  try {
		  this.fotosLiveForm1.endEdit();
		  
	  } catch(e) {
		  console.error('ERROR IN fotosDojoGridSelectionChange: ' + e); 
	  } 
  },
  
  _end: 0
});