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

Temas.widgets = {
temasLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.temasLiveView1","type":"com.swatchdb.data.Temas"}, {}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
temasLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
temasGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Temas"}, {}, {
temasDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"title":"Idtemas","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"idtemas"},{"show":true,"title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"nombre"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Nombre: \" + ${nombre} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"temasLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
temasDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"92px","title":"Detalles"}, {}, {
temasLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar este tema?","fitToContentHeight":true,"height":"60px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"temasLiveVariable1","onSuccess1":"temasLiveForm1Success1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"temasDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idtemasEditor1: ["wm.Number", {"caption":"Idtemas","captionSize":"200px","dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"idtemas","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"nombre","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
temasLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"temasLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"temasLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"temasLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"temasLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"temasLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"temasLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"temasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"temasLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"temasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

Temas.prototype._cssText = '';
Temas.prototype._htmlText = '';