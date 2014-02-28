/*
*  Copyright (C) 2010-2011 VMware, Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*     http://www.apache.org/licenses/LICENSE-2.0
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
dojo.declare("Login", wm.Page, {
"preferredDevice": "desktop",
start: function() {
this.connect(this.domNode, "keydown", this, "keydown");
this.usernameInput.setDataValue(dojo.cookie("user") || "");
this.usernameInput.focus();
/*
if (this.wmTitle)
this.wmTitle.setCaption(app.name || app.declaredClass);
*/
},
keydown: function(e) {
if (e.keyCode == dojo.keys.ENTER) {
this.loginButton.domNode.focus();
}
},
loginButtonClick: function(inSender) {
dojo.cookie("user", this.usernameInput.getDataValue(), {expires: 365});
this.loginErrorMsg.setCaption("");
wm.login(
[this.usernameInput.getDataValue(), this.passwordInput.getDataValue()],
null, dojo.hitch(this, "loginFailed"));
},
loginFailed: function(inResponse) {
this.loginErrorMsg.setCaption("Usuario o clave incorrecto.");
this.usernameInput.focus();
},
_end: 0
});

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
};

Login.prototype._cssText = '.Login .Login-loginErrorMsg {\
font-size: 12px; color: red\
}\
';
Login.prototype._htmlText = '<div id="sample">Sample Markup</div>\
';