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

Buscador.widgets = {
monthsVar: ["wm.Variable", {"isList":true,"json":"[{name: \"January\", dataValue: 0}, {name: \"February\", dataValue: 1},{name: \"March\", dataValue: 2},{name: \"April\", dataValue: 3},{name: \"May\", dataValue: 4},{name: \"June\", dataValue: 5},{name: \"July\", dataValue: 6},{name: \"August\", dataValue: 7},{name: \"September\", dataValue: 8},{name: \"October\", dataValue: 9},{name: \"November\", dataValue: 10},{name: \"December\", dataValue: 11}]","type":"EntryData"}, {}],
varTemplateUsername: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
relojesLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.relojesLiveView2","type":"com.swatchdb.data.Relojes"}, {}],
lvFamilias: ["wm.LiveVariable", {"liveSource":"com.swatchdb.data.Familias","type":"com.swatchdb.data.Familias"}, {}],
lvColecciones: ["wm.LiveVariable", {"liveSource":"com.swatchdb.data.Colecciones","type":"com.swatchdb.data.Colecciones"}, {}],
lvTipo: ["wm.LiveVariable", {"liveSource":"com.swatchdb.data.Tipos","type":"com.swatchdb.data.Tipos"}, {}],
lvTemas: ["wm.LiveVariable", {"liveSource":"com.swatchdb.data.Temas","type":"com.swatchdb.data.Temas"}, {}],
lvArtistas: ["wm.LiveVariable", {"liveSource":"com.swatchdb.data.Artistas","type":"com.swatchdb.data.Artistas"}, {}],
lvEstados: ["wm.LiveVariable", {"liveSource":"com.swatchdb.data.Estados","type":"com.swatchdb.data.Estados"}, {}],
svBuscarRelojes: ["wm.ServiceVariable", {"operation":"buscaRelojes","service":"swatchdb"}, {"onSuccess":"svBuscarRelojesSuccess"}, {
input: ["wm.ServiceInput", {"type":"buscaRelojesInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selColec.selectedItem.idcolecciones","targetProperty":"coleccionvar"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selFamilia.selectedItem.idfamilias","targetProperty":"familiavar"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"textNombre.dataValue","targetProperty":"nombrevar"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"textRef.dataValue","targetProperty":"refvar"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"varref"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"textNombre.dataValue","targetProperty":"varnombre"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selFamilia.selectedItem.idfamilias","targetProperty":"varfamilia"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selArtista.selectedItem.idartistas","targetProperty":"varartista"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selColec.selectedItem.idcolecciones","targetProperty":"varcoleccion"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selEstado.selectedItem.idestados","targetProperty":"varestado"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"selTema.selectedItem.idtemas","targetProperty":"vartema"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"selTipo.selectedItem.idtipos","targetProperty":"vartipo"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"checkEspecial.dataValue","targetProperty":"varespecial"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"checkLimitado.dataValue","targetProperty":"varlimitado"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"155px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
text1: ["wm.Text", {"caption":"Referencia","displayValue":"","emptyValue":"null"}, {}],
textNombre: ["wm.Text", {"caption":"Nombre","displayValue":"","emptyValue":"null"}, {}],
selFamilia: ["wm.SelectMenu", {"caption":"Familia","dataField":"All Fields","dataType":"com.swatchdb.data.Familias","displayField":"nombre","displayValue":"","emptyValue":"null"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvFamilias","targetProperty":"dataSet"}, {}]
}]
}],
selColec: ["wm.SelectMenu", {"caption":"Colección","dataType":"com.swatchdb.data.Colecciones","displayField":"nombre","displayValue":"","emptyValue":"null"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvColecciones","targetProperty":"dataSet"}, {}]
}]
}],
selTipo: ["wm.SelectMenu", {"caption":"Tipo","dataType":"com.swatchdb.data.Tipos","displayField":"nombre","displayValue":"","emptyValue":"null"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvTipo","targetProperty":"dataSet"}, {}]
}]
}],
selTema: ["wm.SelectMenu", {"caption":"Tema","dataType":"com.swatchdb.data.Temas","displayField":"nombre","displayValue":"","emptyValue":"null"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvTemas","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
selArtista: ["wm.SelectMenu", {"caption":"Artista","dataField":"All Fields","dataType":"com.swatchdb.data.Artistas","displayField":"nombre","displayValue":"","emptyValue":"null"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvArtistas","targetProperty":"dataSet"}, {}]
}]
}],
selEstado: ["wm.SelectMenu", {"caption":"Estado","dataType":"com.swatchdb.data.Estados","displayField":"nombre","displayValue":"","emptyValue":"null"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvEstados","targetProperty":"dataSet"}, {}]
}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
buttonBuscar: ["wm.Button", {"caption":"Buscar","margin":"4"}, {"onclick":"svBuscarRelojes"}],
button1: ["wm.Button", {"caption":"Descargar","disabled":true,"margin":"4"}, {"onclick":"button1Click"}]
}]
}]
}],
panel2: ["wm.Panel", {"height":"80%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"field":"referencia","title":"Referencia","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"nombre","title":"Nombre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"familia","title":"Familia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"coleccion","title":"Colección","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"tema","title":"Tema","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"tipo","title":"Tipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"artista","title":"Artista","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Referencia: \" + ${referencia} + \"</div>\"\n+ \"<div class='MobileRow'>Nombre: \" + ${nombre} + \"</div>\"\n+ \"<div class='MobileRow'>Familia: \" + ${familia} + \"</div>\"\n+ \"<div class='MobileRow'>Colección: \" + ${coleccion} + \"</div>\"\n+ \"<div class='MobileRow'>Tema: \" + ${tema} + \"</div>\"\n+ \"<div class='MobileRow'>Tipo: \" + ${tipo} + \"</div>\"\n+ \"<div class='MobileRow'>Artista: \" + ${artista} + \"</div>\"\n+ \"<div class='MobileRow'>Access: \" + ${access} + \"</div>\"\n+ \"<div class='MobileRow'>Loomi: \" + ${loomi} + \"</div>\"\n+ \"<div class='MobileRow'>B to B: \" + ${b2b} + \"</div>\"\n+ \"<div class='MobileRow'>Estado: \" + ${estado} + \"</div>\"\n+ \"<div class='MobileRow'>Cantidad: \" + ${cantidad} + \"</div>\"\n+ \"<div class='MobileRow'>Notas: \" + ${notas} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"access","title":"Access","width":"100%","align":"left","editorProps":{"restrictValues":true},"isCustomField":true,"mobileColumn":false},{"show":true,"field":"loomi","title":"Loomi","width":"100%","align":"left","editorProps":{"restrictValues":true},"isCustomField":true,"mobileColumn":false},{"show":true,"field":"b2b","title":"B to B","width":"100%","align":"left","editorProps":{"restrictValues":true},"isCustomField":true,"mobileColumn":false},{"show":true,"field":"estado","title":"Estado","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"cantidad","title":"Cantidad","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"notas","title":"Notas","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBuscarRelojes","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
};

Buscador.prototype._cssText = '';
Buscador.prototype._htmlText = '';