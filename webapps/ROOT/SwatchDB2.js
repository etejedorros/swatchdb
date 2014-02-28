dojo.declare("SwatchDB2", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSSLUsed": false, 
	"isSecurityEnabled": true, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Beta21", 
	"projectVersion": "2", 
	"sessionExpirationHandler": "nothing", 
	"studioVersion": "6.6.0M2", 
	"tabletMain": "", 
	"theme": "wm.base.widget.themes.wm_coolblue", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		artistasLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Artistas","service":"swatchdb","view":[
{"caption":"Idartistas","sortable":true,"dataIndex":"idartistas","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}], 
		coleccionesLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Colecciones","service":"swatchdb","view":[
{"caption":"Idcolecciones","sortable":true,"dataIndex":"idcolecciones","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}], 
		estadosLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Estados","service":"swatchdb","view":[
{"caption":"Idestados","sortable":true,"dataIndex":"idestados","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}], 
		familiasLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Familias","service":"swatchdb","view":[
{"caption":"Idfamilias","sortable":true,"dataIndex":"idfamilias","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}], 
		fotosLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Fotos","related":["relojes"],"service":"swatchdb","view":[
{"caption":"Idfotos","sortable":true,"dataIndex":"idfotos","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tamano","sortable":true,"dataIndex":"tamano","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Ruta","sortable":true,"dataIndex":"ruta","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Idrelojes","sortable":true,"dataIndex":"relojes.idrelojes","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Referencia","sortable":true,"dataIndex":"relojes.referencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"relojes.nombre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Cantidad","sortable":true,"dataIndex":"relojes.cantidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"relojes.notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FechaAlta","sortable":true,"dataIndex":"relojes.fechaAlta","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"FechaModif","sortable":true,"dataIndex":"relojes.fechaModif","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdusuarioAlta","sortable":true,"dataIndex":"relojes.idusuarioAlta","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdusuarioModif","sortable":true,"dataIndex":"relojes.idusuarioModif","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}], 
		fotosLiveView2: ["wm.LiveView", {"dataType":"com.swatchdb.data.Fotos","related":["relojes"],"service":"swatchdb","view":[
{"caption":"Idfotos","sortable":true,"dataIndex":"idfotos","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tamano","sortable":true,"dataIndex":"tamano","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Ruta","sortable":true,"dataIndex":"ruta","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Idrelojes","sortable":true,"dataIndex":"relojes.idrelojes","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Referencia","sortable":true,"dataIndex":"relojes.referencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"relojes.nombre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Cantidad","sortable":true,"dataIndex":"relojes.cantidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"relojes.notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FechaAlta","sortable":true,"dataIndex":"relojes.fechaAlta","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"FechaModif","sortable":true,"dataIndex":"relojes.fechaModif","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdusuarioAlta","sortable":true,"dataIndex":"relojes.idusuarioAlta","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdusuarioModif","sortable":true,"dataIndex":"relojes.idusuarioModif","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}], 
		fotosLiveView3: ["wm.LiveView", {"dataType":"com.swatchdb.data.Fotos","related":["relojes"],"service":"swatchdb","view":[
{"caption":"Idfotos","sortable":true,"dataIndex":"idfotos","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tamano","sortable":true,"dataIndex":"tamano","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Ruta","sortable":true,"dataIndex":"ruta","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Idrelojes","sortable":true,"dataIndex":"relojes.idrelojes","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Referencia","sortable":true,"dataIndex":"relojes.referencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"relojes.nombre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Cantidad","sortable":true,"dataIndex":"relojes.cantidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"relojes.notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FechaAlta","sortable":true,"dataIndex":"relojes.fechaAlta","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"FechaModif","sortable":true,"dataIndex":"relojes.fechaModif","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdusuarioAlta","sortable":true,"dataIndex":"relojes.idusuarioAlta","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdusuarioModif","sortable":true,"dataIndex":"relojes.idusuarioModif","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}], 
		relojesLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Relojes","related":["familias","artistas","colecciones","tipos","estados","fotoses","temas"],"service":"swatchdb","view":[
{"caption":"Idrelojes","sortable":true,"dataIndex":"idrelojes","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Referencia","sortable":true,"dataIndex":"referencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Cantidad","sortable":true,"dataIndex":"cantidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FechaAlta","sortable":true,"dataIndex":"fechaAlta","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"FechaModif","sortable":true,"dataIndex":"fechaModif","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdusuarioAlta","sortable":true,"dataIndex":"idusuarioAlta","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdusuarioModif","sortable":true,"dataIndex":"idusuarioModif","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Idfamilias","sortable":true,"dataIndex":"familias.idfamilias","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"familias.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Idartistas","sortable":true,"dataIndex":"artistas.idartistas","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"artistas.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"artistas.descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"artistas.notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Idcolecciones","sortable":true,"dataIndex":"colecciones.idcolecciones","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"colecciones.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Idtipos","sortable":true,"dataIndex":"tipos.idtipos","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"tipos.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Idestados","sortable":true,"dataIndex":"estados.idestados","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"estados.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Idfotos","sortable":true,"dataIndex":"fotoses.idfotos","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tamano","sortable":true,"dataIndex":"fotoses.tamano","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Ruta","sortable":true,"dataIndex":"fotoses.ruta","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"fotoses.notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Idtemas","sortable":true,"dataIndex":"temas.idtemas","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"temas.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}], 
		relojesLiveView2: ["wm.LiveView", {"dataType":"com.swatchdb.data.Relojes","service":"swatchdb","view":[
{"caption":"Idrelojes","sortable":true,"dataIndex":"idrelojes","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Referencia","sortable":true,"dataIndex":"referencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Cantidad","sortable":true,"dataIndex":"cantidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Notas","sortable":true,"dataIndex":"notas","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FechaAlta","sortable":true,"dataIndex":"fechaAlta","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"FechaModif","sortable":true,"dataIndex":"fechaModif","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdusuarioAlta","sortable":true,"dataIndex":"idusuarioAlta","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdusuarioModif","sortable":true,"dataIndex":"idusuarioModif","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Precio","sortable":true,"dataIndex":"precio","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"EsEspecial","sortable":true,"dataIndex":"esEspecial","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"Limitacion","sortable":true,"dataIndex":"limitacion","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"Numero","sortable":true,"dataIndex":"numero","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null}
]}, {}], 
		temasLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Temas","service":"swatchdb","view":[
{"caption":"Idtemas","sortable":true,"dataIndex":"idtemas","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}], 
		tiposLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Tipos","service":"swatchdb","view":[
{"caption":"Idtipos","sortable":true,"dataIndex":"idtipos","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}], 
		usuariosLiveView1: ["wm.LiveView", {"dataType":"com.swatchdb.data.Usuarios","service":"swatchdb","view":[
{"caption":"Idusuarios","sortable":true,"dataIndex":"idusuarios","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Clave","sortable":true,"dataIndex":"clave","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Perfil","sortable":true,"dataIndex":"perfil","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}], 
		varIdReloj: ["wm.Variable", {"type":"com.swatchdb.data.Relojes"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].relojesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
			}]
		}]
	},
	_end: 0
});

SwatchDB2.extend({

	_end: 0
});