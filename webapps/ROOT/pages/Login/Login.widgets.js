Login.widgets = {
	layoutBox: ["wm.Layout", {}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			wmTitle: ["wm.Label", {"align":"center","caption":"SWATCH DB","height":"20px","padding":"4","width":"350px"}, {}],
			loginInputPanel: ["wm.EmphasizedContentPanel", {"border":"2","height":"140px","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"350px"}, {}, {
				usernameInput: ["wm.Text", {"caption":"Usuario","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
				passwordInput: ["wm.Text", {"caption":"Clave","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true}, {}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"caption":"Entrar","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick"}]
				}]
			}]
		}]
	}]
}