dojo.declare("Main", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},
    
    dojoMenu1FamiliasClick: function(inSender /*,args*/) {
	  try {
        app.pageDialog.showPage("Familias",true,"30%","500", "Familias", false);		  
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1FamiliasClick: ' + e); 
	  } 
    },
    
    dojoMenu1ColeccionesClick: function(inSender /*,args*/) {
	  try {
        app.pageDialog.showPage("Colecciones",true,"30%","500", "Colecciones", false);		  
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1ColeccionesClick: ' + e); 
	  } 
    },
    
    dojoMenu1TiposClick: function(inSender /*,args*/) {
      try {
        app.pageDialog.showPage("Tipos",true,"30%","500", "Tipos", false);		  
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1TiposClick: ' + e); 
	  } 
    },
    
    dojoMenu1EstadosClick: function(inSender /*,args*/) {
      try {
        app.pageDialog.showPage("Estados",true,"30%","500", "Estados", false);		  
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1EstadosClick: ' + e); 
	  } 
    },

    dojoMenu1UsuariosClick: function(inSender /*,args*/) {
      try {
        app.pageDialog.showPage("Usuarios",true,"30%","500", "Usuarios", false);		  
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1UsuariosClick: ' + e); 
	  } 
    },
    
	updateButton1Click1: function(inSender) {
	  try {
        this.botScraper.setDisabled(false);
        this.botDescargarFotos.setDisabled(false);
          
        this.botNuevaFoto.setDisabled(false);
        this.botEliminarFoto.setDisabled(false);
		  
	  } catch(e) {
		  console.error('ERROR IN updateButton1Click1: ' + e); 
	  } 
  },

    relojesLiveForm1Success1: function(inSender, inData) {
      try {
          this.botScraper.setDisabled(true);
          this.botDescargarFotos.setDisabled(true);
          
		  this.botNuevaFoto.setDisabled(true);
          this.botEliminarFoto.setDisabled(true);
          
          this.label2.setCaption("HOLA");

	  } catch(e) {
		  console.error('ERROR IN relojesLiveForm1Success1: ' + e); 
	  } 
  },
  
  cancelButton1Click1: function(inSender) {
	  try {
          this.botScraper.setDisabled(true);
          this.botDescargarFotos.setDisabled(true);
          
		  this.botNuevaFoto.setDisabled(true);
          this.botEliminarFoto.setDisabled(true);
		  
	  } catch(e) {
		  console.error('ERROR IN cancelButton1Click1: ' + e); 
	  } 
  },
  
  botNuevaFotoClick: function(inSender) {
	  try {
		  app.pageDialog.showPage("Foto",true,"75%","625", "Foto", false);
		  
	  } catch(e) {
		  console.error('ERROR IN botNuevaFotoClick: ' + e); 
	  } 
  },

  dojoMenu1TemasClick: function(inSender /*,args*/) {
	  try {
		  app.pageDialog.showPage("Temas",true,"30%","500", "Temas", false);
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1TemasClick: ' + e); 
	  } 
  },
  
  relojesDojoGridSelectionChange: function(inSender) {
	  try {
            //app.varIdReloj.setValue('dataValue', inSender.selectedItem.data.idrelojes); 

            this.relojesLiveForm1.endEdit();

            this.botScraper.setDisabled(true);
            this.botDescargarFotos.setDisabled(true);
          
            this.botNuevaFoto.setDisabled(true);
            this.botEliminarFoto.setDisabled(true);
		  
	  } catch(e) {
		  console.error('ERROR IN relojesDojoGridSelectionChange: ' + e); 
	  } 
  },

  dojoMenu1ArtistasClick: function(inSender /*,args*/) {
	  try {
		  app.pageDialog.showPage("Artistas",true,"55%","625", "Artistas", false);
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1ArtistasClick: ' + e); 
	  } 
  },
  
  dojoMenu1FotosClick: function(inSender /*,args*/) {
	  try {
          app.varIdReloj.setValue("idrelojes", null);
          
          app.pageDialog.showPage("Foto",true,"75%","625", "Foto", false);
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1FotosClick: ' + e); 
	  } 
  },
  
  dojoMenu1BuscadorClick: function(inSender /*,args*/) {
	  try {
		  app.pageDialog.showPage("Buscador",true,"75%","625", "Buscador", false);
		  
	  } catch(e) {
		  console.error('ERROR IN dojoMenu1BuscadorClick: ' + e); 
	  } 
  },
  
  newButton1Click1: function(inSender) {
	  try {
		  this.botScraper.setDisabled(false);
          this.botDescargarFotos.setDisabled(false);
		  
	  } catch(e) {
		  console.error('ERROR IN newButton1Click1: ' + e); 
	  } 
  },
  
  referenciaEditor1Change: function(inSender) {
	  try {
        var inputStr = this.referenciaEditor1.getDataValue();
        this.referenciaEditor1.setDataValue(inputStr.toUpperCase());
		  
	  } catch(e) {
		  console.error('ERROR IN referenciaEditor1Change: ' + e); 
	  } 
  },
  
  familiasLookup1Change: function(inSender) {
	  try {
          var selectedIndex = this.varFamilia.getValue("idfamilias");
          
          if (selectedIndex >= 0) {
              inSender.editor.focusNode.style.color = "black";
          } else {
              inSender.editor.focusNode.style.color = "red";
          }
		  
	  } catch(e) {
		  console.error('ERROR IN familiasLookup1Change: ' + e); 
	  } 
  },

  coleccionesLookup1Change: function(inSender) {
	  try {
		  var selectedIndex = this.varColeccion.getValue("idcolecciones");
          
          if (selectedIndex >= 0) {
              inSender.editor.focusNode.style.color = "black";
          } else {
              inSender.editor.focusNode.style.color = "red";
          }
		  
	  } catch(e) {
		  console.error('ERROR IN coleccionesLookup1Change: ' + e); 
	  } 
  },
  
  artistasLookup1Change: function(inSender) {
	  try {
		  var selectedIndex = this.varArtista.getValue("idartistas");
          
          if (selectedIndex >= 0) {
              inSender.editor.focusNode.style.color = "black";
          } else {
              inSender.editor.focusNode.style.color = "red";
          }
		  
	  } catch(e) {
		  console.error('ERROR IN artistasLookup1Change: ' + e); 
	  } 
  },
  
  _end: 0
});