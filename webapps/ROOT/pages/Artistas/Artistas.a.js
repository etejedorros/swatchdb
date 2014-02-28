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

Artistas.widgets = {
artistasLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.artistasLiveView1","type":"com.swatchdb.data.Artistas"}, {}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
artistasLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
artistasGridPanel: ["wm.FancyPanel", {"height":"659px","title":""}, {}, {
artistasDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"title":"Idartistas","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"idartistas"},{"show":true,"title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"nombre"},{"show":false,"title":"Descripcion","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"descripcion"},{"show":false,"title":"Notas","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"notas"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Nombre: \" + ${nombre} + \"</div>\"\n"}],"height":"651px","margin":"4","minDesktopHeight":60}, {"onSelectionChange":"artistasDojoGridSelectionChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"artistasLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
artistasDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"284px","title":"Detalles"}, {}, {
artistasLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar este artista?","fitToContentHeight":true,"height":"252px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"artistasLiveVariable1","onSuccess1":"artistasLiveForm1Success1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"artistasDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idartistasEditor1: ["wm.Number", {"caption":"Idartistas","captionSize":"200px","dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"idartistas","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"nombre","height":"26px","maxChars":"200","readonly":true,"required":true,"width":"100%"}, {}],
largeTextArea1: ["wm.LargeTextArea", {"caption":"Descripción","captionPosition":"left","captionSize":"100px","dataValue":"","emptyValue":"emptyString","formField":"descripcion","maxChars":"1000","readonly":true,"width":"100%"}, {}],
largeTextArea2: ["wm.LargeTextArea", {"caption":"Notas","captionPosition":"left","captionSize":"100px","dataValue":"","emptyValue":"emptyString","formField":"notas","maxChars":"200","readonly":true,"width":"100%"}, {}],
artistasLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"artistasLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"artistasLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"artistasLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"artistasLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"artistasLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"artistasLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"artistasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"artistasLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"artistasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

Artistas.prototype._cssText = '';
Artistas.prototype._htmlText = '';