Tipos.widgets = {
	tiposLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.tiposLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		tiposLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			tiposGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":""}, {}, {
				tiposDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"idtipos","title":"Idtipos","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nombre","title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"tiposLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			tiposDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"88px","title":"Detalles"}, {}, {
				tiposLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar este tipo?","fitToContentHeight":true,"height":"58px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"tiposLiveVariable1","onSuccess1":"tiposLiveForm1Success1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"tiposDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idtiposEditor1: ["wm.Number", {"caption":"Idtipos","captionSize":"200px","emptyValue":"zero","formField":"idtipos","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
					nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","dataValue":"","emptyValue":"emptyString","formField":"nombre","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					tiposLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"tiposLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"tiposLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"tiposLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"tiposLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"tiposLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"tiposLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"tiposLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"tiposLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"tiposLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}