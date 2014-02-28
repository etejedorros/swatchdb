Usuarios.widgets = {
	usuariosLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.usuariosLiveView1"}, {}],
	variablePerfiles: ["wm.Variable", {"isList":true,"json":"[{\"dataValue\":\"Administrador\"},{\"dataValue\":\"Lectura\"},{\"dataValue\":\"Escritura\"}]","type":"StringData"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		usuariosLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			usuariosGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":""}, {}, {
				usuariosDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"idusuarios","title":"Idusuarios","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nombre","title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"clave","title":"Clave","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"perfil","title":"Perfil","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			usuariosDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"Detalles"}, {}, {
				usuariosLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar este usuario?","fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"usuariosLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"usuariosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idusuariosEditor1: ["wm.Number", {"caption":"Idusuarios","captionSize":"200px","emptyValue":"zero","formField":"idusuarios","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
					nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","dataValue":"","emptyValue":"emptyString","formField":"nombre","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					claveEditor1: ["wm.Text", {"caption":"Clave","captionAlign":"left","dataValue":"","emptyValue":"emptyString","formField":"clave","height":"26px","readonly":true,"width":"100%"}, {}],
					selectMenu1: ["wm.SelectMenu", {"caption":"Perfil","captionAlign":"left","dataField":"dataValue","displayField":"dataValue","formField":"perfil","height":"26px","readonly":true,"width":"50%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"variablePerfiles","targetProperty":"dataSet"}, {}]
						}]
					}],
					usuariosLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"usuariosLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"usuariosLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"usuariosLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"usuariosLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"usuariosLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"usuariosLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}