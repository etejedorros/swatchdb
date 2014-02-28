Main.widgets = {
	varTemplateUsername: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	dojoLightbox1: ["wm.DojoLightbox", {"imageUrlField":"ruta"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveForm1.dataOutput.fotoses","targetProperty":"dataSet"}, {}]
		}]
	}],
	relojesLiveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"app.relojesLiveView1","matchMode":"anywhere","maxResults":50,"type":"com.swatchdb.data.Relojes"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"expression":undefined,"source":"[main].text1.dataValue","targetProperty":"filter.referencia"}, {}]
		}]
	}],
	svScraper: ["wm.ServiceVariable", {"operation":"sampleJavaOperation","service":"webScraper"}, {}, {
		input: ["wm.ServiceInput", {"type":"sampleJavaOperationInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"referenciaEditor1.dataValue","targetProperty":"referencia"}, {}]
			}]
		}]
	}],
	svDescargaFotos: ["wm.ServiceVariable", {"operation":"downloadImage","service":"descargarFotos"}, {}, {
		input: ["wm.ServiceInput", {"type":"downloadImageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"referenciaEditor1.dataValue","targetProperty":"referencia"}, {}]
			}]
		}]
	}],
	varFamilia: ["wm.Variable", {"type":"com.swatchdb.data.Familias"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"familiasLookup1.selectedItem","targetProperty":"dataSet"}, {}]
		}]
	}],
	varColeccion: ["wm.Variable", {"type":"com.swatchdb.data.Colecciones"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"coleccionesLookup1.selectedItem","targetProperty":"dataSet"}, {}]
		}]
	}],
	varArtista: ["wm.Variable", {"type":"com.swatchdb.data.Artistas"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"artistasLookup1.selectedItem","targetProperty":"dataSet"}, {}]
		}]
	}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"svScraper","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	loadingDialog2: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"svDescargaFotos","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	loadingDialog3: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"panel4","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"borderColor":"#444444","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"1468px"}, {}, {
		panel1: ["wm.Panel", {"border":"0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minDesktopHeight":660,"minHeight":"660","minWidth":"800","verticalAlign":"top","width":"80%"}, {}, {
			panel2: ["wm.HeaderContentPanel", {"height":"75px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"50px","source":"resources/images/logos/logo_s.png","width":"175px"}, {}],
				label1: ["wm.Label", {"caption":"SWATCH DB","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
					panel14: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"20px","padding":"4","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"\"Bienvenido, \" + ${varTemplateUsername.dataValue}","source":false,"targetProperty":"caption"}, {}]
							}]
						}],
						button2: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Salir","margin":"4"}, {"onclick":"varTemplateLogout"}]
					}],
					panel15: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Buscar","resetButton":true,"width":"100%"}, {"onEnterKeyPress":"relojesLiveVariable1"}],
						picture5: ["wm.Picture", {"height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {"onclick":"relojesLiveVariable1"}]
					}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[
{"label":"Fotos","defaultLabel":"Fotos","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1FotosClick","children":[]},
{"label":"Artistas","defaultLabel":"Artistas","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1ArtistasClick","children":[]},
{"label":"Buscador","defaultLabel":"Buscador","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1BuscadorClick","children":[]},
{"label":"Configuración","defaultLabel":"Configuración","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[
{"label":"Familias","defaultLabel":"Familias","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1FamiliasClick","children":[]},
{"label":"Colecciones","defaultLabel":"Colecciones","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1ColeccionesClick","children":[]},
{"label":"Tipos","defaultLabel":"Tipos","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1TiposClick","children":[]},
{"label":"Temas","defaultLabel":"Temas","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1TemasClick","children":[]},
{"label":"Estados","defaultLabel":"Estados","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1EstadosClick","children":[]},
{"label":"Usuarios","defaultLabel":"Usuarios","iconClass":undefined,"imageList":undefined,"onClick":"dojoMenu1UsuariosClick","children":[]}
]},
{"label":"Ayuda","defaultLabel":"Ayuda","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]}
],"height":"100%","localizationStructure":{},"padding":"4,10,0,10","transparent":false}, {}]
			}],
			panel4: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				relojesLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
					relojesGridPanel: ["wm.FancyPanel", {"height":"313px","title":"Relojes"}, {}, {
						relojesDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[
{"show":false,"title":"Idrelojes","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"idrelojes"},
{"show":true,"title":"Referencia","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"referencia"},
{"show":true,"title":"Nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"nombre"},
{"show":true,"title":"Cantidad","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"cantidad"},
{"show":false,"title":"Notas","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"notas"},
{"show":false,"title":"FechaAlta","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"fechaAlta"},
{"show":false,"title":"FechaModif","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"fechaModif"},
{"show":false,"title":"IdusuarioAlta","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"idusuarioAlta"},
{"show":false,"title":"IdusuarioModif","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"idusuarioModif"},
{"show":false,"title":"Familias.idfamilias","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"familias.idfamilias"},
{"show":false,"title":"Familias.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"familias.nombre"},
{"show":false,"title":"Artistas.idartistas","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"artistas.idartistas"},
{"show":false,"title":"Artistas.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"artistas.nombre"},
{"show":false,"title":"Artistas.descripcion","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"artistas.descripcion"},
{"show":false,"title":"Artistas.notas","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"artistas.notas"},
{"show":false,"title":"Colecciones.idcolecciones","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"colecciones.idcolecciones"},
{"show":false,"title":"Colecciones.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"colecciones.nombre"},
{"show":false,"title":"Tipos.idtipos","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"tipos.idtipos"},
{"show":false,"title":"Tipos.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"tipos.nombre"},
{"show":false,"title":"Estados.idestados","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"estados.idestados"},
{"show":false,"title":"Estados.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"estados.nombre"},
{"show":false,"title":"Temas.idtemas","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"temas.idtemas"},
{"show":false,"title":"Temas.nombre","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"temas.nombre"},
{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>\" +\n\"Referencia: \" + ${referencia} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre: \" + ${nombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cantidad: \" + ${cantidad}\n + \"</div>\"\n\n"}
],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60}, {"onSelectionChange":"relojesDojoGridSelectionChange"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveVariable1","targetProperty":"dataSet"}, {}]
							}]
						}],
						dataNavigator1: ["wm.DataNavigator", {"border":"0","width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveVariable1","targetProperty":"liveSource"}, {}]
							}]
						}]
					}],
					relojesDetailsPanel: ["wm.FancyPanel", {"height":"395px","title":"     "}, {}, {
						relojesLiveForm1: ["wm.LiveForm", {"confirmDelete":"¿Seguro que quieres eliminar este reloj?","height":"100%","horizontalAlign":"left","margin":"0,5,0,5","readonly":true,"verticalAlign":"top"}, {"onSuccess":"relojesLiveVariable1","onSuccess1":"relojesLiveForm1Success1"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
								wire2: ["wm.Wire", {"expression":undefined,"source":"relatedEditor2.dataOutput","targetProperty":"dataOutput.colecciones"}, {}],
								wire3: ["wm.Wire", {"expression":undefined,"source":"relatedEditor3.dataOutput","targetProperty":"dataOutput.tipos"}, {}],
								wire4: ["wm.Wire", {"expression":undefined,"source":"relatedEditor4.dataOutput","targetProperty":"dataOutput.estados"}, {}],
								wire5: ["wm.Wire", {"expression":undefined,"source":"relatedEditor5.dataOutput","targetProperty":"dataOutput.fotoses"}, {}],
								wire6: ["wm.Wire", {"expression":undefined,"source":"relatedEditor6.dataOutput","targetProperty":"dataOutput.temas"}, {}],
								wire7: ["wm.Wire", {"expression":undefined,"source":"relatedEditor7.dataOutput","targetProperty":"dataOutput.artistas"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.familias"}, {}]
							}],
							tabLayers1: ["wm.TabLayers", {"headerHeight":"20px"}, {}, {
								layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Detalles","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									panel30: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										referenciaEditor1: ["wm.Text", {"caption":"Referencia","captionAlign":"left","desktopHeight":"26px","emptyValue":"emptyString","formField":"referencia","height":"26px","readonly":true,"required":true,"width":"250px"}, {"onchange":"referenciaEditor1Change"}],
										botScraper: ["wm.Button", {"caption":"D","disabled":true,"hint":"Descargar datos","margin":"4","width":"45px"}, {"onclick":"svScraper"}],
										botDescargarFotos: ["wm.Button", {"caption":"F","disabled":true,"hint":"Descargar fotos","margin":"4","width":"45px"}, {"onclick":"svDescargaFotos"}]
									}],
									panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"75%"}, {}, {
											idrelojesEditor1: ["wm.Number", {"caption":"Idrelojes","captionSize":"200px","desktopHeight":"26px","emptyValue":"zero","formField":"idrelojes","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
											fechaAltaEditor1: ["wm.DateTime", {"caption":"Fecha alta","captionAlign":"left","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"fechaAlta","height":"26px","ignoreParentReadonly":true,"readonly":true,"showing":false,"width":"250px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":"(new Date().getTime())","source":false,"targetProperty":"defaultInsert"}, {}]
												}]
											}],
											fechaModifEditor1: ["wm.DateTime", {"caption":"Fecha modif","captionAlign":"left","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"fechaModif","height":"26px","readonly":true,"showing":false,"width":"250px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":"(new Date().getTime())","source":false,"targetProperty":"defaultInsert"}, {}]
												}]
											}],
											nombreEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"left","desktopHeight":"26px","emptyValue":"emptyString","formField":"nombre","height":"26px","readonly":true,"width":"500px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"svScraper.nombre","targetProperty":"dataValue"}, {}]
												}]
											}],
											panel31: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel32: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													relatedEditor1: ["wm.RelatedEditor", {"editorWidth":"250px","fitToContentHeight":true,"fitToContentWidth":true,"formField":"familias","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"302px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.familias","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"familiasLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														familiasLookup1: ["wm.Lookup", {"caption":"Familias","captionAlign":"left","dataType":"com.swatchdb.data.Familias","desktopHeight":"26px","displayField":"nombre","displayValue":"","formField":"","height":"26px","readonly":true,"restrictValues":false}, {"onchange":"familiasLookup1Change"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"svScraper.familia","targetProperty":"dataValue"}, {}],
																dataFieldWire: ["wm.Wire", {"source":"familiasLookup1.liveVariable","targetProperty":"dataSet"}, {}]
															}]
														}]
													}]
												}],
												panel34: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"25%"}, {}, {
													checkbox2: ["wm.Checkbox", {"caption":"Access","captionAlign":"left","captionSize":"200px","desktopHeight":"26px","displayValue":false,"formField":"es_access","height":"26px","readonly":true}, {}]
												}],
												panel33: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"25%"}, {}, {
													checkbox3: ["wm.Checkbox", {"caption":"B to B","captionAlign":"left","captionSize":"200px","desktopHeight":"26px","displayValue":false,"formField":"es_b2b","height":"26px","readonly":true}, {}]
												}]
											}],
											panel35: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel36: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													relatedEditor2: ["wm.RelatedEditor", {"editorWidth":"250px","fitToContentHeight":true,"fitToContentWidth":true,"formField":"colecciones","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"302px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.colecciones","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"coleccionesLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														coleccionesLookup1: ["wm.Lookup", {"caption":"Colección","captionAlign":"left","dataType":"com.swatchdb.data.Colecciones","desktopHeight":"26px","displayField":"nombre","displayValue":"","formField":"","height":"26px","readonly":true,"restrictValues":false}, {"onchange":"coleccionesLookup1Change"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"svScraper.coleccion","targetProperty":"dataValue"}, {}],
																dataFieldWire: ["wm.Wire", {"source":"coleccionesLookup1.liveVariable","targetProperty":"dataSet"}, {}]
															}]
														}]
													}]
												}],
												panel37: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"25%"}, {}, {
													checkbox4: ["wm.Checkbox", {"caption":"Loomi","captionAlign":"left","captionSize":"200px","desktopHeight":"26px","displayValue":false,"formField":"es_loomi","height":"26px","readonly":true}, {}]
												}]
											}],
											panel19: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel20: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													relatedEditor3: ["wm.RelatedEditor", {"editorWidth":"250px","fitToContentHeight":true,"fitToContentWidth":true,"formField":"tipos","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"302px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.tipos","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"tiposLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														tiposLookup1: ["wm.Lookup", {"caption":"Tipo","captionAlign":"left","dataType":"com.swatchdb.data.Tipos","dataValue":undefined,"desktopHeight":"26px","displayField":"nombre","displayValue":"","formField":"","height":"26px","readonly":true,"restrictValues":"on"}, {}]
													}]
												}],
												panel21: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													checkbox1: ["wm.Checkbox", {"caption":"Especial","captionAlign":"left","captionSize":"200px","desktopHeight":"26px","displayValue":false,"formField":"esEspecial","height":"26px","readonly":true}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"svScraper.esEspecial","targetProperty":"dataValue"}, {}]
														}]
													}]
												}]
											}],
											panel22: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel23: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													relatedEditor6: ["wm.RelatedEditor", {"editorWidth":"250px","fitToContentHeight":true,"formField":"temas","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"300px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.temas","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"temasLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														temasLookup1: ["wm.Lookup", {"caption":"Tema","captionAlign":"left","dataType":"com.swatchdb.data.Temas","dataValue":undefined,"desktopHeight":"26px","displayField":"nombre","displayValue":"","formField":"","height":"26px","readonly":true}, {}]
													}]
												}],
												panel27: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
													panel25: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
														text2: ["wm.Text", {"caption":"Limitado","captionAlign":"left","defaultInsert":"0","desktopHeight":"26px","emptyValue":"emptyString","formField":"numero","height":"26px","readonly":true,"width":"200px"}, {}]
													}],
													panel26: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"20px"}, {}, {
														label5: ["wm.Label", {"align":"center","caption":"/","height":"26px","padding":"4","width":"20px"}, {}]
													}],
													panel24: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100px"}, {}, {
														text3: ["wm.Text", {"captionSize":"0px","defaultInsert":"0","desktopHeight":"26px","emptyValue":"emptyString","formField":"limitacion","height":"26px","readonly":true,"width":"100px"}, {}]
													}]
												}]
											}],
											panel13: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel28: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													relatedEditor4: ["wm.RelatedEditor", {"editorWidth":"250px","fitToContentHeight":true,"fitToContentWidth":true,"formField":"estados","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"302px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.estados","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"estadosLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														estadosLookup1: ["wm.Lookup", {"caption":"Estado","captionAlign":"left","dataType":"com.swatchdb.data.Estados","dataValue":undefined,"desktopHeight":"26px","displayField":"nombre","displayValue":"","formField":"","height":"26px","readonly":true}, {}]
													}]
												}],
												panel29: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													relatedEditor7: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"artistas","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.artistas","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"artistasLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														artistasLookup1: ["wm.Lookup", {"caption":"Artista","captionAlign":"left","dataType":"com.swatchdb.data.Artistas","desktopHeight":"26px","displayField":"nombre","displayValue":"","formField":"","height":"26px","readonly":true,"restrictValues":false,"width":"100%"}, {"onchange":"artistasLookup1Change"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"svScraper.artista","targetProperty":"dataValue"}, {}],
																dataFieldWire: ["wm.Wire", {"source":"artistasLookup1.liveVariable","targetProperty":"dataSet"}, {}]
															}]
														}]
													}]
												}]
											}],
											panel16: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													number1: ["wm.Number", {"caption":"Cantidad","captionAlign":"left","defaultInsert":"0","desktopHeight":"26px","emptyValue":"zero","formField":"cantidad","height":"26px","minimum":0,"readonly":true,"spinnerButtons":true,"width":"200px"}, {}]
												}],
												panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													currency1: ["wm.Currency", {"caption":"Precio","captionAlign":"left","currency":"EUR","defaultInsert":"0","desktopHeight":"26px","emptyValue":"zero","formField":"precio","height":"26px","minimum":0,"places":"2","readonly":true,"width":"200px"}, {}]
												}]
											}],
											idusuarioAltaEditor1: ["wm.Number", {"caption":"IdusuarioAlta","captionSize":"200px","desktopHeight":"26px","emptyValue":"zero","formField":"idusuarioAlta","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
											idusuarioModifEditor1: ["wm.Number", {"caption":"IdusuarioModif","captionSize":"200px","desktopHeight":"26px","emptyValue":"zero","formField":"idusuarioModif","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
											largeTextArea1: ["wm.LargeTextArea", {"caption":"Notas","captionPosition":"left","captionSize":"100px","desktopHeight":"70px","emptyValue":"emptyString","formField":"notas","height":"70px","maxChars":"200","readonly":true,"width":"500px"}, {}],
											relojesLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"relojesLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
												savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
													saveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"relojesLiveForm1EditPanel.saveData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
														}]
													}],
													cancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"relojesLiveForm1EditPanel.cancelEdit","onclick1":"cancelButton1Click1"}]
												}],
												operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
													newButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"relojesLiveForm1EditPanel.beginDataInsert","onclick1":"newButton1Click1"}],
													updateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"relojesLiveForm1EditPanel.beginDataUpdate","onclick1":"updateButton1Click1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
														}]
													}],
													deleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"relojesLiveForm1EditPanel.deleteData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
														}]
													}]
												}]
											}]
										}],
										panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"25%"}, {}, {
											relatedEditor5: ["wm.RelatedEditor", {"captionSize":"5px","fitToContentHeight":true,"formField":"fotoses","height":"300px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.fotoses","targetProperty":"dataSet"}, {}]
												}],
												panel9: ["wm.Panel", {"height":"250px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													dataGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"title":"Idfotos","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"idfotos"},
{"show":false,"title":"Tamano","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"tamano"},
{"show":true,"title":"Fotos","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","expression":"'<img src =\"' + ${ruta}+ '\" height=\"100\" /> '","field":"ruta"},
{"show":false,"title":"Notas","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"notas"},
{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>\" +\n\"Fotos: \" + ${wm.runtimeId}.formatCell(\"ruta\", ${ruta}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n"}
],"height":"100%","margin":"4","minDesktopHeight":60,"selectFirstRow":true}, {"onClick":"dojoLightbox1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"relojesDojoGrid.selectedItem.fotoses","targetProperty":"dataSet"}, {}]
														}]
													}]
												}],
												panel11: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"45px"}, {}, {
														botNuevaFoto: ["wm.Button", {"caption":"+","disabled":true,"margin":"4","width":"40px"}, {"onclick":"botNuevaFotoClick"}]
													}]
												}]
											}]
										}]
									}]
								}],
								Descripcin: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Descripción","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"middle"}, {}, {
									largeTextArea2: ["wm.LargeTextArea", {"caption":"Descripción","captionPosition":"left","captionSize":"100px","emptyValue":"emptyString","formField":"descripcion","height":"95%","maxChars":"1000","readonly":true,"width":"95%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"svScraper.descripcion","targetProperty":"dataValue"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}],
			panel5: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"","height":"30px","padding":"4","width":"862px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"v2.0 - 2012","height":"100%","padding":"4","width":"300px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}