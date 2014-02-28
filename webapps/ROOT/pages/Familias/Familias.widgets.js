Familias.widgets = {
	familiasLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.familiasLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		familiasLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			familiasGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":""}, {}, {
				familiasDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"idfamilias","title":"Idfamilias","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nombre","title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"familiasLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			familiasDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"88px","title":"Detalles"}, {}, {
				familiasLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar esta familia?","fitToContentHeight":true,"height":"58px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"familiasLiveVariable1","onSuccess1":"familiasLiveForm1Success1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"familiasDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idfamiliasEditor1: ["wm.Number", {"caption":"Idfamilias","captionSize":"200px","emptyValue":"zero","formField":"idfamilias","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
					nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","dataValue":"","emptyValue":"emptyString","formField":"nombre","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					familiasLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"familiasLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"familiasLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"familiasLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"familiasLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"familiasLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"familiasLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"familiasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"familiasLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"familiasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}