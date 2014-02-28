Estados.widgets = {
	estadosLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.estadosLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		estadosLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			estadosGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":""}, {}, {
				estadosDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"idestados","title":"Idestados","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nombre","title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"estadosLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			estadosDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"88px","title":"Detalles"}, {}, {
				estadosLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar este estado?","fitToContentHeight":true,"height":"58px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"estadosLiveVariable1","onSuccess1":"estadosLiveForm1Success1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"estadosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idestadosEditor1: ["wm.Number", {"caption":"Idestados","captionSize":"200px","emptyValue":"zero","formField":"idestados","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
					nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","dataValue":"","emptyValue":"emptyString","formField":"nombre","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					estadosLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"estadosLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"estadosLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"estadosLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"estadosLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"estadosLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"estadosLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"estadosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"estadosLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"estadosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}