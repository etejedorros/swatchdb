Foto.widgets = {
	fotosLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.fotosLiveView3"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"app.varIdReloj.idrelojes","targetProperty":"filter.relojes.idrelojes"}, {}]
		}]
	}],
	serviceVarDeleteFile: ["wm.ServiceVariable", {"operation":"deleteFile","service":"FlashUploadDownload"}, {}, {
		input: ["wm.ServiceInput", {"type":"deleteFileInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fotosDojoGrid.selectedItem.ruta","targetProperty":"file"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fotosLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			fotosGridPanel: ["wm.FancyPanel", {"height":"300px","title":""}, {}, {
				fotosDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[{"show":false,"id":"idfotos","title":"Idfotos","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"relojes.referencia","title":"Referencia","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"ruta","title":"Ruta","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"tamano","title":"Tamano","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"notas","title":"Notas","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"relojes.idrelojes","title":"Relojes.idrelojes","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"relojes.nombre","title":"Relojes.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"relojes.cantidad","title":"Relojes.cantidad","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"relojes.notas","title":"Relojes.notas","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"relojes.fechaAlta","title":"Relojes.fechaAlta","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"relojes.fechaModif","title":"Relojes.fechaModif","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"relojes.idusuarioAlta","title":"Relojes.idusuarioAlta","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"relojes.idusuarioModif","title":"Relojes.idusuarioModif","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"418px","margin":"4","selectFirstRow":true}, {"onSelectionChange":"fotosDojoGridSelectionChange"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"fotosLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			fotosDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"292px","title":"Detalles"}, {}, {
				fotosLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar esta foto?","fitToContentHeight":true,"height":"262px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"fotosLiveForm1BeginInsert","onBeginUpdate":"fotosLiveForm1BeginUpdate","onCancelEdit":"fotosLiveForm1CancelEdit","onDeleteData":"serviceVarDeleteFile","onError":"fotosLiveForm1Error","onSuccess":"fotosLiveVariable1","onSuccess1":"fotosLiveForm1Success1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"fotosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.relojes"}, {}]
					}],
					panel3: ["wm.Panel", {"height":"230px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"75%"}, {}, {
							idfotosEditor1: ["wm.Number", {"caption":"Idfotos","captionSize":"200px","emptyValue":"zero","formField":"idfotos","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
							relatedEditor1: ["wm.RelatedEditor", {"editorWidth":"519px","fitToContentHeight":true,"formField":"relojes","horizontalAlign":"left","verticalAlign":"top","width":"519px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"fotosDojoGrid.selectedItem.relojes","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"relojesLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
								}],
								relojesLookup2: ["wm.Lookup", {"caption":"Referencia","captionAlign":"left","displayField":"referencia","displayValue":"","formField":"","height":"26px","readonly":true,"required":true,"width":"519px"}, {}]
							}],
							tamanoEditor1: ["wm.Text", {"caption":"Tamaño","captionAlign":"left","dataValue":"","emptyValue":"emptyString","formField":"tamano","height":"26px","readonly":true,"width":"519px"}, {}],
							panel1: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"550px"}, {}, {
								rutaEditor1: ["wm.Text", {"caption":"Ruta","captionAlign":"left","disabled":true,"emptyValue":"emptyString","formField":"ruta","height":"26px","ignoreParentReadonly":true,"readonly":true,"required":true,"width":"100%"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"\"resources/images/relojes/\" + ${dojoFlashFileUpload1.variable.name}","source":false,"targetProperty":"dataValue"}, {}]
									}]
								}]
							}],
							panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"550px"}, {}, {
								dojoFlashFileUpload1: ["wm.DojoFlashFileUpload", {"buttonCaption":"Subir...","disabled":true,"fileMaskLabel":"Imágenes","height":"35px","useList":false,"width":"75px"}, {}, {
									input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
								}]
							}],
							largeTextArea1: ["wm.LargeTextArea", {"caption":"Notas","captionPosition":"left","captionSize":"100px","dataValue":"","emptyValue":"emptyString","formField":"notas","maxChars":"200","readonly":true,"width":"100%"}, {}]
						}],
						panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"25%"}, {}, {
							picture1: ["wm.Picture", {"aspect":"v","border":"0","height":"100%","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"fotosDojoGrid.selectedItem.ruta","targetProperty":"source"}, {}]
								}]
							}]
						}]
					}],
					fotosLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"fotosLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"fotosLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"fotosLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"fotosLiveForm1EditPanel.cancelEdit","onclick1":"cancelButton1Click1"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"fotosLiveForm1EditPanel.beginDataInsert","onclick1":"newButton1Click1"}],
							updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"fotosLiveForm1EditPanel.beginDataUpdate","onclick1":"updateButton1Click1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"fotosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"fotosLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"fotosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}