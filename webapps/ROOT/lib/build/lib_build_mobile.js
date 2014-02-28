/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

dojo.provide("wm");
if(!dojo._hasResource["wm.base.components.componentList"]){
dojo._hasResource["wm.base.components.componentList"]=true;
dojo.provide("wm.base.components.componentList");
wm.componentFixList={_phonegap:[]};
wm.componentList={"wm.Content":["wm.base.widget.Content"],"wm.DataGrid":["build.Gzipped.wm_data_grid"],"wm.DojoGrid":["build.Gzipped.wm_dojo_grid"],"wm.DojoMenu":["build.Gzipped.wm_menus"],"wm.PopupMenu":["build.Gzipped.wm_menus"],"wm.DojoChart":["build.Gzipped.wm_charts"],"wm.DojoGauge":["build.Gzipped.wm_charts"],"wm.Dashboard":["build.Gzipped.wm_editors","build.Gzipped.wm_dashboard"],"wm.AccordionLayers":["build.Gzipped.wm_accordion"],"wm.WizardLayers":["build.Gzipped.wm_wizardlayer"],"wm.BreadcrumbLayers":["build.Gzipped.wm_breadcrumblayer"],"wm.ColorPicker":["build.Gzipped.wm_colorpicker"],"wm.RichTextDialog":["wm.base.widget.Dialogs.RichTextDialog"],"wm.DojoFisheye":["wm.base.widget.DojoFisheye"],"wm.DojoLightbox":["wm.base.widget.DojoLightbox"],"wm.TwitterFeed":["wm.base.widget.TwitterFeed"],"wm.JsonStatus":["build.Gzipped.wm_editors"],"wm.Tree":["build.Gzipped.wm_trees"],"wm.PropertyTree":["build.Gzipped.wm_trees"],"wm.ObjectTree":["build.Gzipped.wm_trees"],"wm.DraggableTree":["build.Gzipped.wm_trees"],"wm.Gadget":["wm.base.widget.gadget.Gadget"],"wm.gadget.YouTube":["wm.base.widget.gadget.YouTube"],"wm.gadget.FacebookLikeButton":["wm.base.widget.gadget.Facebook"],"wm.gadget.FacebookActivityFeed":["wm.base.widget.gadget.Facebook"],"wm.gadget.GoogleMap":["wm.base.widget.gadget.GoogleMap"],"wm.gadget.Stocks":["wm.base.widget.gadget.Stocks"],"wm.gadget.Weather":["wm.base.widget.gadget.Weather"],"wm.gadget.TwitterFollowButton":["wm.base.widget.gadget.TwitterGadgets"],"wm.gadget.TwitterTweetButton":["wm.base.widget.gadget.TwitterGadgets"],"wm.gadget.TwitterList":["wm.base.widget.gadget.TwitterGadgets"],"wm.TwitterFeed":["wm.base.widget.TwitterFeed"],"wm.RichText":["build.Gzipped.wm_editors","build.Gzipped.wm_richTextEditor"],"wm.CheckBoxEditor":["build.Gzipped.wm_editors_old"],"wm.RadioButtonEditor":["build.Gzipped.wm_editors_old"],"wm.SelectEditor":["build.Gzipped.wm_editors_old"],"wm.TextEditor":["build.Gzipped.wm_editors_old"],"wm.SliderEditor":["build.Gzipped.wm_editors_old"],"wm._SliderEditor":["build.Gzipped.wm_editors_old"],"wm.TextAreaEditor":["build.Gzipped.wm_editors_old"],"wm._TextEditor":["build.Gzipped.wm_editors_old"],"wm.CurrencyEditor":["build.Gzipped.wm_editors_old"],"wm.NumberEditor":["build.Gzipped.wm_editors_old"],"wm.Editor":["build.Gzipped.wm_editors_old"],"wm.DateEditor":["build.Gzipped.wm_editors_old"],"wm.TimeEditor":["build.Gzipped.wm_editors_old"],"wm.Select":["build.Gzipped.wm_editors_old"],"wm.Date":["build.Gzipped.wm_editors"],"wm.DateTime":["build.Gzipped.wm_editors","build.Gzipped.wm_list"],"wm.SelectMenu":["build.Gzipped.wm_editors"],"wm.Lookup":["build.Gzipped.wm_editors"],"wm.FilteringLookup":["build.Gzipped.wm_editors"],"wm.CheckboxSet":["build.Gzipped.wm_editors"],"wm.RadioSet":["build.Gzipped.wm_editors_misc"],"wm.ListSet":["build.Gzipped.wm_editors","build.Gzipped.wm_list"],"wm.Number":["build.Gzipped.wm_editors"],"wm.Checkbox":["build.Gzipped.wm_editors"],"wm.RadioButton":["build.Gzipped.wm_editors_misc"],"wm.Currency":["build.Gzipped.wm_editors"],"wm.Slider":["build.Gzipped.wm_editors_misc"],"wm.Text":["build.Gzipped.wm_editors"],"wm.TextArea":["build.Gzipped.wm_editors"],"wm.Time":["build.Gzipped.wm_editors"],"wm.LargeTextArea":["build.Gzipped.wm_editors"],"wm.dijit.Dijit":["wm.base.widget.dijit.Dijit"],"wm.dijit.ProgressBar":["build.Gzipped.wm_progressbar"],"wm.RoundedButton":["wm.base.widget.Buttons.RoundedButton"],"wm.BusyButton":["wm.base.widget.Buttons.BusyButton"],"wm.PopupMenuButton":["build.Gzipped.wm_menus"],"wm.ToggleButton":["build.Gzipped.wm_editors"],"wm.ToggleButtonPanel":["build.Gzipped.wm_editors"],"wm.Timer":["wm.base.components.Timer"],"wm.SimpleForm":["build.Gzipped.wm_livepanel"],"wm.LiveForm":["build.Gzipped.wm_livepanel"],"wm.RelatedEditor":["build.Gzipped.wm_livepanel"],"wm.LivePanel":["build.Gzipped.wm_livepanel"],"wm.EditPanel":["build.Gzipped.wm_livepanel"],"wm.DataNavigator":["build.Gzipped.wm_livepanel"],"wm.RegularExpressionFormatter":["wm.base.widget.FormattersMisc"],"wm.EvaluationFormatter":["wm.base.widget.FormattersMisc"],"wm.LinkFormatter":["wm.base.widget.FormattersMisc"],"wm.ImageFormatter":["wm.base.widget.FormattersMisc"],"wm.DataForm":["build.Gzipped.wm_dataform"],"wm.FormPanel":["build.Gzipped.wm_dataform"],"wm.SubForm":["build.Gzipped.wm_dataform"],"wm.DBForm":["build.Gzipped.wm_dataform"],"wm.OneToMany":["wm.compressed.wm_dataform"],"wm.ServiceInputForm":["build.Gzipped.wm_dataform"],"wm.ServiceQueue":["wm.base.components.ServiceQueue"],"wm.dijit.Calendar":["build.Gzipped.wm_editors"],"wm.Template":["wm.base.widget.Template"],"wm.ComponentPublisher":["wm.base.components.Publisher"],"wm.CompositePublisher":["wm.base.components.Publisher"],"wm.TemplatePublisher":["wm.base.components.Publisher"],"wm.Composite":["wm.base.widget.Composite"],"wm.CompositeMixin":["wm.base.widget.Composite"],"wm.Ticker":["wm.base.widget.Ticker"],"wm.FileUpload":["wm.base.widget.FileUpload"],"wm.DojoFileUpload":["build.Gzipped.wm_fileupload"],"wm.DojoFlashFileUpload":["build.Gzipped.wm_fileupload"],"wm.DijitDesigner":["wm.base.widget.dijit.Dijit"],"wm.FunctionService":["wm.base.components.FunctionService"],"wm.List":["build.Gzipped.wm_list"],"wm.IFrame":["wm.base.widget.IFrame"],"wm.FeedList":["wm.base.widget.FeedList"],"wm.ListViewer":["wm.base.widget.ListViewer"],"wm.PhoneGapService":["wm.base.components.PhoneGapService"],"wm.XhrService":["wm.base.components.XhrService"],"wm.LogoutVariable":["wm.base.components.LogoutVariable"]};
wm.require=function(_1,_2){
if(dojo.getObject(_1)){
return;
}
var _3=wm.componentList[_1];
if(_3||_2){
return wm.getComponentStructure(_1);
}else{
dojo["require"](_1);
}
};
wm.getComponentStructure=function(_4){
if(_4=="wm.DojoGrid"&&wm.isMobile){
_4="wm.List";
}
var _5=wm.componentList[_4];
if(!_5){
if(_4.indexOf("wm.")==0){
_4=_4.substring(3);
}
_5=["wm.base.widget.Composite","wm.packages."+_4];
}
if(!_5){
console.error("Add "+_4+" in component list.");
}else{
for(var i=0;i<_5.length;i++){
var _6=dojo._getModuleSymbols(_5[i]).join("/")+".js";
var _7;
if(wm.isPhonegap&&_5[i].match(/^(wm|common)\.packages\./)){
_7=_6;
}else{
_7=((_6.charAt(0)=="/"||_6.match(/^\w+:/))?"":dojo.baseUrl)+_6;
}
while(_7.match(/[^\/]\/\.\.\//)){
_7=_7.replace(/[^\/]*\/\.\.\/+/,"");
}
wm.dojoScriptLoader(_7);
if(wm.componentFixList[_5[i]]){
var _8=wm.componentFixList[_5[i]];
for(var j=0;j<_8.length;j++){
_8[j]();
}
}
}
}
if(wm.isMobile&&_4=="wm.List"){
wm.DojoGrid=wm.List;
}
};
wm.addFrameworkFix=function(_9,_a,_b){
if(djConfig.isDebug&&!wm.studioConfig){
_b();
}else{
var _c=dojo.getObject(_9);
if(_c){
_b();
}else{
if(_a&&_a.length){
dojo.forEach(_a,function(_d){
if(!wm.componentFixList[_d]){
wm.componentFixList[_d]=[_b];
}else{
wm.componentFixList[_d].push(_b);
}
});
}else{
wm.componentFixList._phonegap.push(_b);
}
}
}
};
wm.applyFrameworkFixes=function(){
for(var _e in wm.componentFixList){
var _f=dojo.getObject(_e);
if(_f){
var _10=wm.componentFixList[_e];
for(var i=0;i<_e.length;i++){
_10[i]();
}
delete wm.componentFixList[_e];
}
}
};
}
if(!dojo._hasResource["wm.base.lib.util"]){
dojo._hasResource["wm.base.lib.util"]=true;
dojo.provide("wm.base.lib.util");
wm=window["wm"]||{};
wm.logErrors=false;
wm.log=function(){
console.log.apply(console,arguments);
};
wm.capitalize=function(s){
return s?s.charAt(0).toUpperCase()+s.slice(1):"";
};
wm.decapitalize=function(s){
return s?s.charAt(0).toLowerCase()+s.slice(1):"";
};
wm.camelcase=function(s){
return s.replace(/[\.-](.?)/g,function(_11){
return _11[1].toUpperCase();
});
};
wm.flattenObject=function(_12,_13){
var _14={};
for(var _15 in _12){
if(!_12[_15]){
continue;
}
if(typeof _12[_15]!="object"){
_14[_15]=_12[_15];
}else{
var _16=wm.flattenObject(_12[_15]);
if(_13){
_14[_15]=_16;
}
for(var _17 in _16){
_14[_15+"."+_17]=_16[_17];
}
}
}
return _14;
};
wm.shallowClone=function(_18){
var _19={};
wm.forEachProperty(_18,function(_1a,_1b){
_19[_1b]=_1a;
});
return _19;
};
wm.requireCss=function(_1c){
var _1d=wm.dojoModuleToPath(_1c)+".css";
wm.requireCssPath(_1d);
};
wm.dojoModuleToPath=function(_1e){
var _1f=_1e.lastIndexOf(".");
var _20=_1e.substring(_1f+1);
var _1e=_1e.substring(0,_1f);
var _21=dojo.moduleUrl(_1e).path.replace(/lib\/\//,"lib/")+_20;
while(_21.match(/[^\/]\/\.\.\//)){
_21=_21.replace(/[^\/]*\/\.\.\/+/,"");
}
return _21;
};
wm.requireCssPath=function(_22){
var _23="CSS_"+_22.replace(/\./g,"_").replace(/\//g,"_");
var _24=dojo.byId(_23);
if(_24){
return;
}
_24=document.createElement("link");
_24.rel="stylesheet";
_24.id=_23;
_24.type="text/css";
_24.href=_22;
document.getElementsByTagName("head")[0].appendChild(_24);
};
wm.isEqual=function(a1,a2){
try{
if(a1==a2){
return true;
}
if(dojo.isArray(a1)&&dojo.isArray(a2)){
return dojo.toJson([].concat(a1).sort())==dojo.toJson([].concat(a2).sort());
}
return dojo.toJson(a1)==dojo.toJson(a2);
}
catch(e){
return false;
}
};
wm.compareStrings=function(a,b){
return a<b?-1:a==b?0:1;
};
wm.toTitleCase=function(s){
return s.replace(/\b\w+\b/g,function(_25){
return _25?_25.charAt(0).toUpperCase()+(_25.slice(1)||"").toLowerCase():"";
});
};
wm.delimCat=function(_26,_27,_28){
return _26+(_26&&_27?_28:"")+_27;
};
wm.joinEx=function(_29,_2a){
var i=0;
while(i<_29.length){
if(_29[i++]!==""){
_29.splice(--i,1);
}
}
return _29.join(_2a);
};
wm.isNumber=function(v){
return (typeof v=="number")||(v instanceof Number);
};
wm.max=function(_2b){
var max=_2b[0];
for(var i=1;i<_2b.length;i++){
if(_2b[i]>max){
max=_2b[i];
}
}
return max;
};
wm.sum=function(_2c){
var sum=0;
for(var i=0;i<_2c.length;i++){
sum+=_2c[i];
}
return sum;
};
wm.average=function(_2d){
return wm.sum(_2d)/_2d.length;
};
wm.nop=function(){
};
wm.isEmpty=function(_2e){
if(window["studio"]&&dojo.isIE==8){
if(dojo.isArray(_2e)&&_2e.length==0){
return true;
}
if(typeof _2e=="object"){
for(var i in _2e){
if(!dojo.isFunction(_2e[i])){
return false;
}
}
}
}else{
for(var i in _2e){
return false;
}
}
if(typeof _2e=="object"&&_2e instanceof Date){
return false;
}
return true;
};
wm.fire=function(obj,_2f,_30){
var f=obj&&_2f&&obj[_2f];
if(f){
return _30?f.apply(obj,_30):f.call(obj);
}
};
wm.async=function(f,_31){
return function(){
setTimeout(f,_31||1);
};
};
wm.forEach=function(_32,_33){
if(dojo.isArray(_32)){
dojo.forEach(_32,_33);
}else{
wm.forEachProperty(_32,_33);
}
};
wm.forEachProperty=function(_34,_35){
for(var i in _34){
if(!_34.hasOwnProperty||_34.hasOwnProperty(i)){
_35(_34[i],i);
}
}
};
wm.isDomShowing=function(_36){
var n=_36;
while(n&&n!=window.document.body&&n.style.display!="none"){
n=n.parentNode;
}
return !n||n.style.display!="none";
};
wm.evalJs=function(_37,_38){
var r=_38||"";
try{
r=eval(_37);
}
catch(e){
wm.logging&&undefined;
}
return r;
};
wm.getClassProp=function(_39,_3a){
var _3b=dojo.getObject(_39);
var _3c=_3b&&_3b.prototype;
return _3c&&_3c[_3a];
};
wm.showHideNode=function(_3d,_3e){
_3d.style.display=_3e?"":"none";
};
wm.kids=function(_3f,_40){
var _41=[],t=_40.toUpperCase();
for(var i=0,n;(n=_3f.childNodes[i]);i++){
if(n.tagName==_40){
_41.push(n);
}
}
return _41;
};
wm.divkids=function(_42){
return wm.kids(_42,"div");
};
wm.clearSelection=function(){
try{
if(window.getSelection){
window.getSelection().collapseToEnd();
}else{
if(document.selection){
document.selection.clear();
}
}
}
catch(e){
}
};
wm.focusOnIdle=function(_43){
setTimeout(function(){
try{
wm.fire(_43,"focus");
wm.fire(_43,"select");
}
catch(e){
}
},1);
};
wm.inScrollbar=function(e){
var t=e.target;
var s=t.style&&dojo.getComputedStyle(t);
return s&&(((s.overflow!="hidden"||s.overflowX!="hidden")&&(t.scrollWidth!=t.offsetWidth)&&(t.offsetWidth-19-e.clientX<0))||((s.overflow!="hidden"||s.overflowY!="hidden")&&(t.scrollHeight!=t.offsetHeight)&&(t.offsetHeight-19-e.clientY<0)));
};
wm.preloadImage=function(_44){
var i=new Image();
i.src=_44;
(wm.preloaded=(wm.preloaded||[])).push(i);
};
wm.setUnitsBox=function(_45,l,t,w,h){
with(_45.style){
l&&(left=l);
t&&(top=t);
w&&(width=w);
h&&(height=h);
}
};
wm.getNaturalBox=function(_46){
var tn=_46.tagName,cs=dojo.getComputedStyle(_46),box=dojo._getContentBox(_46,cs);
if(tn=="BUTTON"||tn=="TABLE"){
var pb=dojo._getPadBorderExtents(_46,cs);
box.w+=pb.w;
box.h+=pb.h;
}
return box;
};
wm.calcOffset=function(_47,_48,_49){
var o={x:0,y:0},n=_47,cs,mb,be;
while(n&&n!=_48&&n!=document){
cs=dojo.getComputedStyle(n);
mb=dojo._getMarginBox(n,cs);
be=dojo._getBorderExtents(n,cs);
me=_49?dojo._getMarginExtents(n,cs):{l:0,t:0};
o.x+=mb.l+be.l+me.l-(n.scrollLeft||0);
o.y+=mb.t+be.t+me.t-(n.scrollTop||0);
n=n.parentNode;
}
return o;
};
wm.addRemoveClass=function(_4a,_4b,_4c){
dojo[_4c?"addClass":"removeClass"](_4a,_4b);
};
wm.onidle=function(){
var _4d=[];
for(var i=0;i in arguments;i++){
_4d.push(arguments[i]);
}
if(app&&app.debugDialog){
var _4e=app.debugDialog.cacheEventChain();
}
window.setTimeout(function(){
if(_4e){
app.debugDialog.restoreEventChain(_4e);
}
dojo.hitch.apply(null,_4d)();
if(_4e){
app.debugDialog.clearEventChain();
}
},1);
};
wm.onidleChain=function(_4f,_50){
if(!_50){
_50={};
}
var f2=function(_51){
window.setTimeout(function(){
var f=_51.shift();
if(f){
f();
}
if(_51.length&&!_50.canceled){
f2(_51);
}
},1);
};
if(!_50.canceled){
f2(_4f,_50);
}
};
wm.job=function(_52,_53,_54,_55){
var _56;
if(_54&&_55){
_56=dojo.hitch(_54,_55);
}else{
if(_55){
_56=_55;
}else{
_56=_54;
}
}
wm.cancelJob(_52);
if(window["app"]&&app.debugDialog){
var _57=app.debugDialog.cacheEventChain();
}
var job=function(){
delete wm._jobs[_52];
if(_57){
app.debugDialog.restoreEventChain(_57);
}
_56();
if(_57){
app.debugDialog.clearEventChain();
}
};
wm._jobs[_52]=setTimeout(job,_53);
};
wm.cancelJob=function(_58){
clearTimeout(wm._jobs[_58]);
};
wm._jobs={};
wm.hasJob=function(_59){
return Boolean(wm._jobs[_59]);
};
wm.connectEvents=function(_5a,_5b,_5c){
if(!dojo.isArray(_5c)){
throw ("wm.connectEvents: event list must be an array (did you use variable args?)");
}
var _5d=[];
for(var i=0,e;(e=_5c[i]);i++){
_5d.push(dojo.connect(_5b,"on"+e,_5a,e));
}
return _5d;
};
wm._isUniqueName=function(_5e,_5f){
for(var j=0,s;(s=_5f[j]);j++){
if(s[_5e]!==undefined){
return false;
}
}
return true;
};
wm.findUniqueName=function(_60,_61){
if(wm._isUniqueName(_60,_61)){
return _60;
}
var m=(_60||"").match(/([^\d]*)([\d]*)/);
var i=m[2]||1,n0=m[1]||"noname";
do{
_60=n0+(i>0?i:"");
i++;
}while(!wm._isUniqueName(_60,_61));
return _60;
};
wm.getValidJsName=function(_62){
var dc="_";
_62=_62.replace(new RegExp("[- ]","g"),dc);
var _63=true;
if(_62.match(/^[0-9]/)){
_62=["zero","one","two","three","four","five","six","seven","eight","nine"][_62[0]]+_62.substring(1);
}
for(var i=0;i<_62.length&&_63;i++){
try{
var _64=eval("(function() {var "+_62+" = 5; return "+_62+";})()");
if(_64==5){
_63=false;
}
}
catch(e){
}
if(_63){
_62=_62.substring(0,i)+_62.substring(i,i+1).replace(/[^a-zA-Z0-9]+/g,"")+_62.substring(i+1);
var _64=eval("(function() {var "+_62+" = 5; return "+_62+";})()");
}
}
if(_62=="_"){
_62="";
}
return _62;
};
wm._modules=[];
wm.loadModule=function(_65){
if(!wm._modules[_65]){
tag=["<scrip","t type=\"text/javascript\" src=\"",_65,".js\"></scrip","t>"].join("");
document.write(tag);
wm._modules[_65]=true;
}
};
wm.widgetIsShowing=function(_66){
var w=_66,p;
while(w){
p=w.parent;
if(!w.showing||(w.isActive&&!w.isActive())){
return false;
}
w=p;
}
return true;
};
wm.forEachWidget=function(_67,_68,_69){
if(_68&&_68(_67)===false){
return false;
}
if(!_67){
return false;
}
for(var i=0,ws=_69&&_67 instanceof wm.PageContainer?[]:_67.getOrderedWidgets(),r,w;w=ws[i];i++){
if(w.forEachWidget&&!_69){
r=_68(w);
if(r!==false){
r=w.forEachWidget(_68);
}
}else{
r=wm.forEachWidget(w,_68,_69);
}
if(r===false){
return false;
}
}
};
wm.forEachVisibleWidget=function(_6a,_6b,_6c){
var _6d;
if(_6b&&_6a&&!_6a.isAncestorHidden()){
_6d=_6b(_6a);
}
if(_6d!==false&&(!_6c||!wm.isInstanceType(_6a,[wm.PageContainer,wm.Composite]))){
for(var i=0,ws=_6a.getOrderedWidgets(),r,w;w=ws[i];i++){
if(w.forEachVisibleWidget&&!_6c){
w.forEachVisibleWidget(_6b);
}else{
wm.forEachVisibleWidget(w,_6b,_6c);
}
}
}
};
wm.theme={getPath:function(){
return dojo.moduleUrl("lib.wm.base","widget/themes/"+"default/");
},getImagesPath:function(){
return wm.theme.getPath()+"images/";
}};
wm.hideToolTip=function(_6e){
var tt=dijit._masterTT;
if(tt){
dijit.hideTooltip(tt.aroundNode);
tt._onDeck=null;
if(_6e&&tt.fadeOut){
tt.fadeOut.stop(true);
dojo.style(tt.fadeOut.node,"opacity",0);
}
}
};
wm.focusContainer=function(_6f){
wm.onidle(function(){
wm.forEachWidget(_6f,function(w){
if(w&&w.focus&&(!w.canFocus||w.canFocus())){
w.focus();
return false;
}
});
});
};
wm.isClassInstanceType=function(_70,_71){
try{
return _71&&_70.prototype instanceof _71;
}
catch(e){
}
return false;
};
wm.isInstanceType=function(obj,_72){
if(_72&&typeof _72=="object"&&_72.length){
for(var i=0;i<_72.length;i++){
if(_72[i]&&obj instanceof _72[i]){
return true;
}
}
return false;
}else{
return _72&&obj instanceof _72;
}
};
wm.getWidgetByDomNode=function(_73){
if(!_73){
return;
}
if(dojo.isString(_73)){
_73=dojo.byId(_73);
}
if(!_73){
return;
}
var _74=app._page.name;
var reg=new RegExp("^("+_74+"|app)_?");
while((!_73.id||!_73.id.match(reg))&&_73.parentNode){
_73=_73.parentNode;
}
var id=_73.id;
if(!id){
return;
}
var _75=id;
var id=id.replace(reg,"");
var _76=id.split(/_+/);
var _77="";
var _78=(_75.match(/^app_/))?app:app._page;
for(var i=0;i<_76.length;i++){
if(wm.isInstanceType(_78,wm.PageDialog)){
_78=_78.pageContainer;
}
if(wm.isInstanceType(_78,wm.PageContainer)||wm.isInstanceType(_78,wm.pageContainerMixin)){
_78=_78.page;
_77="";
}else{
_77+=((_77)?"_":"")+_76[i];
if(wm.isInstanceType(_78,wm.Application)){
if(_78[_77]){
_78=_78[_77];
_77="";
}
}else{
if(_78.$[_77]){
_78=_78.$[_77];
_77="";
}
}
}
}
return _78;
};
wm.isNode=function(_79){
if(window["Node"]){
return _79 instanceof Node;
}
if(typeof _79=="object"&&_79){
return "nodeType" in _79&&"appendChild" in _79;
}
};
if(!wm.Array){
wm.Array={};
}
wm.Array.removeElementAt=function(_7a,_7b){
_7a.splice(_7b,1);
return _7a;
};
wm.Array.insertElementAt=function(_7c,_7d,_7e){
_7c.splice(_7e,0,_7d);
};
wm.Array.removeElement=function(_7f,_80){
var _81=dojo.indexOf(_7f,_80);
if(_81>=0){
_7f.splice(_81,1);
}
return _7f;
};
wm.Array.equals=function(a,b,_82){
if(a==b){
return true;
}
if(!a||!b){
return false;
}
if(a.length!=b.length){
return false;
}
for(var i=0;i<a.length;i++){
if(_82){
if(!_82(a[i],b[i])){
return false;
}
}else{
if(a[i]!=b[i]){
return false;
}
}
}
return true;
};
wm.Array.indexOf=function(_83,_84,_85){
for(var i=0;i<_83.length;i++){
if(_85(_83[i],_84)){
return i;
}
}
return -1;
};
wm.Array.last=function(_86){
return _86[_86.length-1];
};
if(!wm.String){
wm.String={};
}
wm.String.endStringWith=function(_87,_88){
if(!_87.match(new RegExp(_88+"$"))){
return _87+_88;
}else{
return _87;
}
};
setCss=function(_89,_8a){
var _8b=dojo.byId(_89);
if(!_8b){
return;
}
_8a=_8a||"";
if(_8b.styleSheet){
if(dojo.isIE<7){
setIe6Css(_8b,_8a);
}else{
_8b.styleSheet.cssText=_8a;
}
}else{
_8b.firstChild&&_8b.removeChild(_8b.firstChild);
_8b.appendChild(document.createTextNode(_8a));
}
};
setIe6Css=function(_8c,_8d){
var c=document.documentElement.firstChild,id=_8c.id;
c.removeChild(_8c);
var n=document.createElement("style");
n.id=id;
n.type="text/css";
if(n.styleSheet){
n.styleSheet.cssText=_8d;
}else{
n.appendChild(document.createTextNode(_8d));
}
c.appendChild(n);
};
wm.conditionalRequire=function(_8e,_8f){
if(arguments.length==1||_8f){
dojo["require"](_8e);
}
};
wm.getBackgroundStyle=function(_90,_91,_92,_93,_94){
if(!_94){
if(dojo.isWebKit){
_94="webkit";
}else{
if(dojo.isMoz){
_94="moz";
}else{
if(dojo.isOpera){
_94="opera";
}else{
if(dojo.isIE<10){
_94="ieold";
}else{
if(dojo.isIE>=10){
_94="ie10";
}
}
}
}
}
}
var _95="-linear-gradient("+(_93=="vertical"?"top":"left")+", "+_90+" 0%,"+_91+" "+_92+"%,"+_91+" 100%)";
switch(_94){
case "webkit":
return "-webkit-gradient(linear, "+(_93=="vertical"?"center top, center bottom":"left center, right center")+", from("+_90+"), color-stop("+_92+"%,"+_91+"), to("+_91+"))";
case "moz":
return "-moz"+_95;
case "ieold":
return "progid:DXImageTransform.Microsoft.gradient( startColorstr='"+_90+"', endColorstr='"+_91+"',GradientType="+(_93=="vertical"?0:1)+")";
case "ie10":
return "-ms"+_95;
case "opera":
return "-o"+_95;
}
};
wm.getStyleFromNode=function(_96,_97){
var _98="";
if(document.defaultView&&document.defaultView.getComputedStyle){
_98=document.defaultView.getComputedStyle(_96,"").getPropertyValue(_97);
}else{
if(_96.currentStyle){
_97=_97.replace(/\-(\w)/g,function(_99,_9a){
return _9a.toUpperCase();
});
_98=_96.currentStyle[_97];
}
}
return _98;
};
wm.getParentForm=function(_9b){
var w=_9b.parent;
var r=_9b.getRoot();
r=r&&r.root;
while(w&&w!=r){
if(wm.isInstanceType(w,[wm.LiveFormBase,wm.DataForm])){
return w;
}
w=w.parent;
}
};
wm.getFormLiveView=function(_9c){
var lv=_9c&&_9c.findLiveVariable();
return lv&&lv.liveView;
};
wm.getFormField=function(_9d){
var a=[],w=_9d;
while(w&&!(wm.isInstanceType(w,wm.LiveForm))){
if(w.formField){
a.unshift(w.formField);
}
w=wm.getParentForm(w);
}
return a.join(".");
};
}
if(!dojo._hasResource["dojo.date"]){
dojo._hasResource["dojo.date"]=true;
dojo.provide("dojo.date");
dojo.getObject("date",true,dojo);
dojo.date.getDaysInMonth=function(_9e){
var _9f=_9e.getMonth();
var _a0=[31,28,31,30,31,30,31,31,30,31,30,31];
if(_9f==1&&dojo.date.isLeapYear(_9e)){
return 29;
}
return _a0[_9f];
};
dojo.date.isLeapYear=function(_a1){
var _a2=_a1.getFullYear();
return !(_a2%400)||(!(_a2%4)&&!!(_a2%100));
};
dojo.date.getTimezoneName=function(_a3){
var str=_a3.toString();
var tz="";
var _a4;
var pos=str.indexOf("(");
if(pos>-1){
tz=str.substring(++pos,str.indexOf(")"));
}else{
var pat=/([A-Z\/]+) \d{4}$/;
if((_a4=str.match(pat))){
tz=_a4[1];
}else{
str=_a3.toLocaleString();
pat=/ ([A-Z\/]+)$/;
if((_a4=str.match(pat))){
tz=_a4[1];
}
}
}
return (tz=="AM"||tz=="PM")?"":tz;
};
dojo.date.compare=function(_a5,_a6,_a7){
_a5=new Date(+_a5);
_a6=new Date(+(_a6||new Date()));
if(_a7=="date"){
_a5.setHours(0,0,0,0);
_a6.setHours(0,0,0,0);
}else{
if(_a7=="time"){
_a5.setFullYear(0,0,0);
_a6.setFullYear(0,0,0);
}
}
if(_a5>_a6){
return 1;
}
if(_a5<_a6){
return -1;
}
return 0;
};
dojo.date.add=function(_a8,_a9,_aa){
var sum=new Date(+_a8);
var _ab=false;
var _ac="Date";
switch(_a9){
case "day":
break;
case "weekday":
var _ad,_ae;
var mod=_aa%5;
if(!mod){
_ad=(_aa>0)?5:-5;
_ae=(_aa>0)?((_aa-5)/5):((_aa+5)/5);
}else{
_ad=mod;
_ae=parseInt(_aa/5);
}
var _af=_a8.getDay();
var adj=0;
if(_af==6&&_aa>0){
adj=1;
}else{
if(_af==0&&_aa<0){
adj=-1;
}
}
var _b0=_af+_ad;
if(_b0==0||_b0==6){
adj=(_aa>0)?2:-2;
}
_aa=(7*_ae)+_ad+adj;
break;
case "year":
_ac="FullYear";
_ab=true;
break;
case "week":
_aa*=7;
break;
case "quarter":
_aa*=3;
case "month":
_ab=true;
_ac="Month";
break;
default:
_ac="UTC"+_a9.charAt(0).toUpperCase()+_a9.substring(1)+"s";
}
if(_ac){
sum["set"+_ac](sum["get"+_ac]()+_aa);
}
if(_ab&&(sum.getDate()<_a8.getDate())){
sum.setDate(0);
}
return sum;
};
dojo.date.difference=function(_b1,_b2,_b3){
_b2=_b2||new Date();
_b3=_b3||"day";
var _b4=_b2.getFullYear()-_b1.getFullYear();
var _b5=1;
switch(_b3){
case "quarter":
var m1=_b1.getMonth();
var m2=_b2.getMonth();
var q1=Math.floor(m1/3)+1;
var q2=Math.floor(m2/3)+1;
q2+=(_b4*4);
_b5=q2-q1;
break;
case "weekday":
var _b6=Math.round(dojo.date.difference(_b1,_b2,"day"));
var _b7=parseInt(dojo.date.difference(_b1,_b2,"week"));
var mod=_b6%7;
if(mod==0){
_b6=_b7*5;
}else{
var adj=0;
var _b8=_b1.getDay();
var _b9=_b2.getDay();
_b7=parseInt(_b6/7);
mod=_b6%7;
var _ba=new Date(_b1);
_ba.setDate(_ba.getDate()+(_b7*7));
var _bb=_ba.getDay();
if(_b6>0){
switch(true){
case _b8==6:
adj=-1;
break;
case _b8==0:
adj=0;
break;
case _b9==6:
adj=-1;
break;
case _b9==0:
adj=-2;
break;
case (_bb+mod)>5:
adj=-2;
}
}else{
if(_b6<0){
switch(true){
case _b8==6:
adj=0;
break;
case _b8==0:
adj=1;
break;
case _b9==6:
adj=2;
break;
case _b9==0:
adj=1;
break;
case (_bb+mod)<0:
adj=2;
}
}
}
_b6+=adj;
_b6-=(_b7*2);
}
_b5=_b6;
break;
case "year":
_b5=_b4;
break;
case "month":
_b5=(_b2.getMonth()-_b1.getMonth())+(_b4*12);
break;
case "week":
_b5=parseInt(dojo.date.difference(_b1,_b2,"day")/7);
break;
case "day":
_b5/=24;
case "hour":
_b5/=60;
case "minute":
_b5/=60;
case "second":
_b5/=1000;
case "millisecond":
_b5*=_b2.getTime()-_b1.getTime();
}
return Math.round(_b5);
};
}
if(!dojo._hasResource["dojo.cldr.supplemental"]){
dojo._hasResource["dojo.cldr.supplemental"]=true;
dojo.provide("dojo.cldr.supplemental");
dojo.getObject("cldr.supplemental",true,dojo);
dojo.cldr.supplemental.getFirstDayOfWeek=function(_bc){
var _bd={mv:5,ae:6,af:6,bh:6,dj:6,dz:6,eg:6,er:6,et:6,iq:6,ir:6,jo:6,ke:6,kw:6,ly:6,ma:6,om:6,qa:6,sa:6,sd:6,so:6,sy:6,tn:6,ye:6,ar:0,as:0,az:0,bw:0,ca:0,cn:0,fo:0,ge:0,gl:0,gu:0,hk:0,il:0,"in":0,jm:0,jp:0,kg:0,kr:0,la:0,mh:0,mn:0,mo:0,mp:0,mt:0,nz:0,ph:0,pk:0,sg:0,th:0,tt:0,tw:0,um:0,us:0,uz:0,vi:0,zw:0};
var _be=dojo.cldr.supplemental._region(_bc);
var dow=_bd[_be];
return (dow===undefined)?1:dow;
};
dojo.cldr.supplemental._region=function(_bf){
_bf=dojo.i18n.normalizeLocale(_bf);
var _c0=_bf.split("-");
var _c1=_c0[1];
if(!_c1){
_c1={de:"de",en:"us",es:"es",fi:"fi",fr:"fr",he:"il",hu:"hu",it:"it",ja:"jp",ko:"kr",nl:"nl",pt:"br",sv:"se",zh:"cn"}[_c0[0]];
}else{
if(_c1.length==4){
_c1=_c0[2];
}
}
return _c1;
};
dojo.cldr.supplemental.getWeekend=function(_c2){
var _c3={"in":0,af:4,dz:4,ir:4,om:4,sa:4,ye:4,ae:5,bh:5,eg:5,il:5,iq:5,jo:5,kw:5,ly:5,ma:5,qa:5,sd:5,sy:5,tn:5};
var _c4={af:5,dz:5,ir:5,om:5,sa:5,ye:5,ae:6,bh:5,eg:6,il:6,iq:6,jo:6,kw:6,ly:6,ma:6,qa:6,sd:6,sy:6,tn:6};
var _c5=dojo.cldr.supplemental._region(_c2);
var _c6=_c3[_c5];
var end=_c4[_c5];
if(_c6===undefined){
_c6=6;
}
if(end===undefined){
end=0;
}
return {start:_c6,end:end};
};
}
if(!dojo._hasResource["dojo.string"]){
dojo._hasResource["dojo.string"]=true;
dojo.provide("dojo.string");
dojo.getObject("string",true,dojo);
dojo.string.rep=function(str,num){
if(num<=0||!str){
return "";
}
var buf=[];
for(;;){
if(num&1){
buf.push(str);
}
if(!(num>>=1)){
break;
}
str+=str;
}
return buf.join("");
};
dojo.string.pad=function(_c7,_c8,ch,end){
if(!ch){
ch="0";
}
var out=String(_c7),pad=dojo.string.rep(ch,Math.ceil((_c8-out.length)/ch.length));
return end?out+pad:pad+out;
};
dojo.string.substitute=function(_c9,map,_ca,_cb){
_cb=_cb||dojo.global;
_ca=_ca?dojo.hitch(_cb,_ca):function(v){
return v;
};
return _c9.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(_cc,key,_cd){
var _ce=dojo.getObject(key,false,map);
if(_cd){
_ce=dojo.getObject(_cd,false,_cb).call(_cb,_ce,key);
}
try{
return _ca(_ce,key).toString();
}
catch(e){
return "";
}
});
};
dojo.string.trim=String.prototype.trim?dojo.trim:function(str){
str=str.replace(/^\s+/,"");
for(var i=str.length-1;i>=0;i--){
if(/\S/.test(str.charAt(i))){
str=str.substring(0,i+1);
break;
}
}
return str;
};
}
if(!dojo._hasResource["dojo.date.locale"]){
dojo._hasResource["dojo.date.locale"]=true;
dojo.provide("dojo.date.locale");
dojo.getObject("date.locale",true,dojo);
(function(){
function _cf(_d0,_d1,_d2,_d3){
return _d3.replace(/([a-z])\1*/ig,function(_d4){
var s,pad,c=_d4.charAt(0),l=_d4.length,_d5=["abbr","wide","narrow"];
switch(c){
case "G":
s=_d1[(l<4)?"eraAbbr":"eraNames"][_d0.getFullYear()<0?0:1];
break;
case "y":
case "Y":
s=_d0.getFullYear();
switch(l){
case 1:
break;
case 2:
if(!_d2.fullYear){
s=String(s);
s=s.substr(s.length-2);
break;
}
default:
pad=true;
}
break;
case "Q":
case "q":
s=Math.ceil((_d0.getMonth()+1)/3);
pad=true;
break;
case "M":
var m=_d0.getMonth();
if(l<3){
s=m+1;
pad=true;
}else{
var _d6=["months","format",_d5[l-3]].join("-");
s=_d1[_d6][m];
}
break;
case "w":
var _d7=0;
s=dojo.date.locale._getWeekOfYear(_d0,_d7);
pad=true;
break;
case "d":
s=_d0.getDate();
pad=true;
break;
case "D":
s=dojo.date.locale._getDayOfYear(_d0);
pad=true;
break;
case "E":
var d=_d0.getDay();
if(l<3){
s=d+1;
pad=true;
}else{
var _d8=["days","format",_d5[l-3]].join("-");
s=_d1[_d8][d];
}
break;
case "a":
var _d9=(_d0.getHours()<12)?"am":"pm";
s=_d2[_d9]||_d1["dayPeriods-format-wide-"+_d9];
break;
case "h":
case "H":
case "K":
case "k":
var h=_d0.getHours();
switch(c){
case "h":
s=(h%12)||12;
break;
case "H":
s=h;
break;
case "K":
s=(h%12);
break;
case "k":
s=h||24;
break;
}
pad=true;
break;
case "m":
s=_d0.getMinutes();
pad=true;
break;
case "s":
s=_d0.getSeconds();
pad=true;
break;
case "S":
s=Math.round(_d0.getMilliseconds()*Math.pow(10,l-3));
pad=true;
break;
case "v":
case "z":
s=dojo.date.locale._getZone(_d0,true,_d2);
if(s){
break;
}
l=4;
case "Z":
var _da=dojo.date.locale._getZone(_d0,false,_d2);
var tz=[(_da<=0?"+":"-"),dojo.string.pad(Math.floor(Math.abs(_da)/60),2),dojo.string.pad(Math.abs(_da)%60,2)];
if(l==4){
tz.splice(0,0,"GMT");
tz.splice(3,0,":");
}
s=tz.join("");
break;
default:
throw new Error("dojo.date.locale.format: invalid pattern char: "+_d3);
}
if(pad){
s=dojo.string.pad(s,l);
}
return s;
});
};
dojo.date.locale._getZone=function(_db,_dc,_dd){
if(_dc){
return dojo.date.getTimezoneName(_db);
}else{
return _db.getTimezoneOffset();
}
};
dojo.date.locale.format=function(_de,_df){
_df=_df||{};
var _e0=dojo.i18n.normalizeLocale(_df.locale),_e1=_df.formatLength||"short",_e2=dojo.date.locale._getGregorianBundle(_e0),str=[],_e3=dojo.hitch(this,_cf,_de,_e2,_df);
if(_df.selector=="year"){
return _e4(_e2["dateFormatItem-yyyy"]||"yyyy",_e3);
}
var _e5;
if(_df.selector!="date"){
_e5=_df.timePattern||_e2["timeFormat-"+_e1];
if(_e5){
str.push(_e4(_e5,_e3));
}
}
if(_df.selector!="time"){
_e5=_df.datePattern||_e2["dateFormat-"+_e1];
if(_e5){
str.push(_e4(_e5,_e3));
}
}
return str.length==1?str[0]:_e2["dateTimeFormat-"+_e1].replace(/\{(\d+)\}/g,function(_e6,key){
return str[key];
});
};
dojo.date.locale.regexp=function(_e7){
return dojo.date.locale._parseInfo(_e7).regexp;
};
dojo.date.locale._parseInfo=function(_e8){
_e8=_e8||{};
var _e9=dojo.i18n.normalizeLocale(_e8.locale),_ea=dojo.date.locale._getGregorianBundle(_e9),_eb=_e8.formatLength||"short",_ec=_e8.datePattern||_ea["dateFormat-"+_eb],_ed=_e8.timePattern||_ea["timeFormat-"+_eb],_ee;
if(_e8.selector=="date"){
_ee=_ec;
}else{
if(_e8.selector=="time"){
_ee=_ed;
}else{
_ee=_ea["dateTimeFormat-"+_eb].replace(/\{(\d+)\}/g,function(_ef,key){
return [_ed,_ec][key];
});
}
}
var _f0=[],re=_e4(_ee,dojo.hitch(this,_f1,_f0,_ea,_e8));
return {regexp:re,tokens:_f0,bundle:_ea};
};
dojo.date.locale.parse=function(_f2,_f3){
var _f4=/[\u200E\u200F\u202A\u202E]/g,_f5=dojo.date.locale._parseInfo(_f3),_f6=_f5.tokens,_f7=_f5.bundle,re=new RegExp("^"+_f5.regexp.replace(_f4,"")+"$",_f5.strict?"":"i"),_f8=re.exec(_f2&&_f2.replace(_f4,""));
if(!_f8){
return null;
}
var _f9=["abbr","wide","narrow"],_fa=[1970,0,1,0,0,0,0],_fb="",_fc=dojo.every(_f8,function(v,i){
if(!i){
return true;
}
var _fd=_f6[i-1];
var l=_fd.length;
switch(_fd.charAt(0)){
case "y":
if(l!=2&&_f3.strict){
_fa[0]=v;
}else{
if(v<100){
v=Number(v);
var _fe=""+new Date().getFullYear(),_ff=_fe.substring(0,2)*100,_100=Math.min(Number(_fe.substring(2,4))+20,99),num=(v<_100)?_ff+v:_ff-100+v;
_fa[0]=num;
}else{
if(_f3.strict){
return false;
}
_fa[0]=v;
}
}
break;
case "M":
if(l>2){
var _101=_f7["months-format-"+_f9[l-3]].concat();
if(!_f3.strict){
v=v.replace(".","").toLowerCase();
_101=dojo.map(_101,function(s){
return s.replace(".","").toLowerCase();
});
}
v=dojo.indexOf(_101,v);
if(v==-1){
return false;
}
}else{
v--;
}
_fa[1]=v;
break;
case "E":
case "e":
var days=_f7["days-format-"+_f9[l-3]].concat();
if(!_f3.strict){
v=v.toLowerCase();
days=dojo.map(days,function(d){
return d.toLowerCase();
});
}
v=dojo.indexOf(days,v);
if(v==-1){
return false;
}
break;
case "D":
_fa[1]=0;
case "d":
_fa[2]=v;
break;
case "a":
var am=_f3.am||_f7["dayPeriods-format-wide-am"],pm=_f3.pm||_f7["dayPeriods-format-wide-pm"];
if(!_f3.strict){
var _102=/\./g;
v=v.replace(_102,"").toLowerCase();
am=am.replace(_102,"").toLowerCase();
pm=pm.replace(_102,"").toLowerCase();
}
if(_f3.strict&&v!=am&&v!=pm){
return false;
}
_fb=(v==pm)?"p":(v==am)?"a":"";
break;
case "K":
if(v==24){
v=0;
}
case "h":
case "H":
case "k":
if(v>23){
return false;
}
_fa[3]=v;
break;
case "m":
_fa[4]=v;
break;
case "s":
_fa[5]=v;
break;
case "S":
_fa[6]=v;
}
return true;
});
var _103=+_fa[3];
if(_fb==="p"&&_103<12){
_fa[3]=_103+12;
}else{
if(_fb==="a"&&_103==12){
_fa[3]=0;
}
}
var _104=new Date(_fa[0],_fa[1],_fa[2],_fa[3],_fa[4],_fa[5],_fa[6]);
if(_f3.strict){
_104.setFullYear(_fa[0]);
}
var _105=_f6.join(""),_106=_105.indexOf("d")!=-1,_107=_105.indexOf("M")!=-1;
if(!_fc||(_107&&_104.getMonth()>_fa[1])||(_106&&_104.getDate()>_fa[2])){
return null;
}
if((_107&&_104.getMonth()<_fa[1])||(_106&&_104.getDate()<_fa[2])){
_104=dojo.date.add(_104,"hour",1);
}
return _104;
};
function _e4(_108,_109,_10a,_10b){
var _10c=function(x){
return x;
};
_109=_109||_10c;
_10a=_10a||_10c;
_10b=_10b||_10c;
var _10d=_108.match(/(''|[^'])+/g),_10e=_108.charAt(0)=="'";
dojo.forEach(_10d,function(_10f,i){
if(!_10f){
_10d[i]="";
}else{
_10d[i]=(_10e?_10a:_109)(_10f.replace(/''/g,"'"));
_10e=!_10e;
}
});
return _10b(_10d.join(""));
};
function _f1(_110,_111,_112,_113){
_113=dojo.regexp.escapeString(_113);
if(!_112.strict){
_113=_113.replace(" a"," ?a");
}
return _113.replace(/([a-z])\1*/ig,function(_114){
var s,c=_114.charAt(0),l=_114.length,p2="",p3="";
if(_112.strict){
if(l>1){
p2="0"+"{"+(l-1)+"}";
}
if(l>2){
p3="0"+"{"+(l-2)+"}";
}
}else{
p2="0?";
p3="0{0,2}";
}
switch(c){
case "y":
s="\\d{2,4}";
break;
case "M":
s=(l>2)?"\\S+?":"1[0-2]|"+p2+"[1-9]";
break;
case "D":
s="[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|"+p3+"[1-9][0-9]|"+p2+"[1-9]";
break;
case "d":
s="3[01]|[12]\\d|"+p2+"[1-9]";
break;
case "w":
s="[1-4][0-9]|5[0-3]|"+p2+"[1-9]";
break;
case "E":
s="\\S+";
break;
case "h":
s="1[0-2]|"+p2+"[1-9]";
break;
case "k":
s="1[01]|"+p2+"\\d";
break;
case "H":
s="1\\d|2[0-3]|"+p2+"\\d";
break;
case "K":
s="1\\d|2[0-4]|"+p2+"[1-9]";
break;
case "m":
case "s":
s="[0-5]\\d";
break;
case "S":
s="\\d{"+l+"}";
break;
case "a":
var am=_112.am||_111["dayPeriods-format-wide-am"],pm=_112.pm||_111["dayPeriods-format-wide-pm"];
s=am+"|"+pm;
if(!_112.strict){
if(am!=am.toLowerCase()){
s+="|"+am.toLowerCase();
}
if(pm!=pm.toLowerCase()){
s+="|"+pm.toLowerCase();
}
if(s.indexOf(".")!=-1){
s+="|"+s.replace(/\./g,"");
}
}
s=s.replace(/\./g,"\\.");
break;
default:
s=".*";
}
if(_110){
_110.push(_114);
}
return "("+s+")";
}).replace(/[\xa0 ]/g,"[\\s\\xa0]");
};
})();
(function(){
var _115=[];
dojo.date.locale.addCustomFormats=function(_116,_117){
_115.push({pkg:_116,name:_117});
};
dojo.date.locale._getGregorianBundle=function(_118){
var _119={};
dojo.forEach(_115,function(desc){
var _11a=dojo.i18n.getLocalization(desc.pkg,desc.name,_118);
_119=dojo.mixin(_119,_11a);
},this);
return _119;
};
})();
dojo.date.locale.addCustomFormats("dojo.cldr","gregorian");
dojo.date.locale.getNames=function(item,type,_11b,_11c){
var _11d,_11e=dojo.date.locale._getGregorianBundle(_11c),_11f=[item,_11b,type];
if(_11b=="standAlone"){
var key=_11f.join("-");
_11d=_11e[key];
if(_11d[0]==1){
_11d=undefined;
}
}
_11f[1]="format";
return (_11d||_11e[_11f.join("-")]).concat();
};
dojo.date.locale.isWeekend=function(_120,_121){
var _122=dojo.cldr.supplemental.getWeekend(_121),day=(_120||new Date()).getDay();
if(_122.end<_122.start){
_122.end+=7;
if(day<_122.start){
day+=7;
}
}
return day>=_122.start&&day<=_122.end;
};
dojo.date.locale._getDayOfYear=function(_123){
return dojo.date.difference(new Date(_123.getFullYear(),0,1,_123.getHours()),_123)+1;
};
dojo.date.locale._getWeekOfYear=function(_124,_125){
if(arguments.length==1){
_125=0;
}
var _126=new Date(_124.getFullYear(),0,1).getDay(),adj=(_126-_125+7)%7,week=Math.floor((dojo.date.locale._getDayOfYear(_124)+adj-1)/7);
if(_126==_125){
week++;
}
return week;
};
}
if(!dojo._hasResource["wm.base.lib.date"]){
dojo._hasResource["wm.base.lib.date"]=true;
dojo.provide("wm.base.lib.date");
wm.setTimeZoneOffset=function(){
wm.timezoneOffset=new Date().getTimezoneOffset()/60+wm.serverTimeOffset/(1000*60*60);
if(isNaN(wm.timezoneOffset)){
wm.timezoneOffset=0;
}
};
if(wm.serverTimeOffset!==undefined){
wm.setTimeZoneOffset();
}
wm.convertValueToDate=function(_127,_128){
if(_127 instanceof Date){
return _127;
}
var v=_127,s=_128||{selector:"date"};
if(!v&&v!==0){
return null;
}else{
if(Number(v)||typeof (v)=="number"){
return new Date(Number(v));
}else{
if(dojo.trim(v.toLowerCase()).indexOf("today")!=-1){
if(v.indexOf("+")!=-1){
var _129=v.toLowerCase().split("+");
try{
var _12a=dojo.trim(_129[0]);
var _12b=dojo.trim(_129[1]);
if(_12a=="today"){
v=dojo.date.add(new Date(),"day",_12b*1);
}else{
v=dojo.date.add(new Date(),"day",_12a*1);
}
}
catch(e){
}
}else{
v=new Date();
}
return v;
}
}
}
return v!=Number(v)?dojo.date.locale.parse(v,s):new Date(Number(v));
};
}
if(!dojo._hasResource["wm.base.lib.types"]){
dojo._hasResource["wm.base.lib.types"]=true;
dojo.provide("wm.base.lib.types");
wm.typeManager={types:{},initialized:false,initTypes:function(){
if(wm.types&&wm.types.types){
wm.typeManager.setTypes(wm.types.types);
}else{
this.addDefaultTypes();
}
},setTypes:function(_12c){
this.clearTypes();
if(_12c){
wm.forEachProperty(_12c,function(_12d,_12e){
var _12f=_12e.match(/\<(.*),(.*)\>/);
if(_12f){
_12d.isList=true;
_12d.isHashMap=true;
_12d.fields={name:{include:["read"],isList:false,type:_12f[1]},dataValue:{isList:false,type:_12f[2]}};
}
});
dojo.mixin(this.types,_12c);
}
this.addDefaultTypes();
},clearTypes:function(){
this._publicTypes={};
if(wm.dataSources){
wm.dataSources.clearSources();
}
for(var i in this.types){
if(!this.types[i].userType){
delete this.types[i];
}
}
},getPrimaryKey:function(_130){
if(!_130||!_130.fields){
return "";
}
for(var _131 in _130.fields){
if(_130.fields[_131].include.length){
return _131;
}
}
},getPrimitiveType:function(_132){
return (this.types[_132]||0).primitiveType;
},isStructuredType:function(_133){
return this.types[_133]&&!this.getPrimitiveType(_133);
},getService:function(_134){
var t=this.types[_134];
return (t&&t.service);
},getLiveService:function(_135){
var t=this.types[_135];
return (t&&t.liveService&&t.service);
},generatePublicTypes:function(){
var _136={};
for(var i in this.types){
if(this.isPublicType(i)){
_136[i]=this.types[i];
}
}
return _136;
},getPublicTypes:function(){
return wm.isEmpty(this._publicTypes)?this._publicTypes=this.generatePublicTypes():this._publicTypes;
},getLiveServiceTypes:function(){
var _137=this.getPublicTypes(),_138={};
for(var i in _137){
if(this.getLiveService(i)){
_138[i]=_137[i];
}
}
return _138;
},isPublicType:function(_139){
var t=this.types[_139];
return (t&&!t.internal&&!t.primitiveType);
},getTypeSchema:function(_13a){
return (this.types[_13a]||0).fields;
},getType:function(_13b){
return this.types[_13b];
},isType:function(_13c){
return Boolean(this.getType(_13c));
},typeHasField:function(_13d,_13e){
var _13f=this.types[_13d];
if(!_13f){
return false;
}
var _140=_13e.split(/\./);
for(var i=0;i<_140.length;i++){
var _141=_13f.fields[_140[i]];
if(!_141){
return false;
}
if(i+1<_140.length){
_13f=this.types[_141.type];
if(!_13f){
return false;
}
}
}
return true;
},getPropertyInfoFromSchema:function(_142,_143){
var s=_142,_144=dojo.isString(_143)?_143.split("."):_143,p=_144.shift(),f=s[p];
if(!_144.length){
return f;
}else{
var t=(f||0).type,ts=this.getTypeSchema(t);
if(ts){
return this.getPropertyInfoFromSchema(ts,_144);
}
}
},getFilteredPropNames:function(_145,_146){
var ts=[],u=[],t,_147=dojo.isFunction(_146);
wm.forEach(_145,function(o,i){
if(!_147||_146(o)){
var elem={};
elem.info=o;
elem.name=i;
ts.push(elem);
}
});
ts.sort(function(a,b){
return (a.info.fieldOrder-b.info.fieldOrder);
});
for(i=0;(ti=ts[i]);i++){
u.push(ti.name);
}
return u;
},getSimplePropNames:function(_148){
return this.getFilteredPropNames(_148,function(p){
return !wm.typeManager.isStructuredType((p||0).type);
});
},getFieldList:function(_149,_14a,_14b){
if(typeof _149=="string"){
_149=this.getType(_149).fields;
}
var _14c=[];
for(var i in _149){
if(wm.typeManager.isStructuredType(_149[i].type)){
if(!_149[i].isList&&!wm.isListType(_149[i].type)&&(_14b===undefined||_14b>=0)){
_14c=_14c.concat(this.getFieldList(_149[i].type,_14a?_14a+"."+i:i,_14b===undefined?undefined:_14b-1));
}
}else{
_14c.push({dataIndex:(_14a?_14a+".":"")+i,caption:wm.capitalize(i),displayType:wm.capitalize(_149[i].type)});
}
}
return _14c;
},getStructuredPropNames:function(_14d,_14e){
return this.getFilteredPropNames(_14d,function(p){
return wm.typeManager.isStructuredType((p||0).type)||_14e&&p.isList;
});
},getPropNames:function(_14f,_150){
var u=this.getSimplePropNames(_14f),s=_150?this.getStructuredPropNames(_14f):[];
return u.concat(s);
},getPropertyOrder:function(_151,_152){
var o=[],_153=dojo.isString(_152)?_152.split("."):_152,p=_153.shift(),_154=this.getTypeSchema(_151),_155=this.getPropNames(_154,true);
var c,l=_155.length;
for(var i=0,n;(n=_155[i]);i++){
if(p==n){
c=i;
break;
}
}
o.push(c!==undefined?c:l);
var f=_154&&_154[p],t=(f||0).type;
if(!_153.length||!t){
return o;
}else{
return o.concat(this.getPropertyOrder(t,_153));
}
},hasStructuredType:function(_156,_157){
var s=this.getTypeSchema(_156),p,c=dojo.isFunction(_157)&&_157;
for(var i in s){
p=s[i];
if(this.isStructuredType(p.type)){
if(c){
if(c(p)){
return true;
}
}else{
return true;
}
}
}
},addType:function(_158,_159){
if(!_159||wm.isEmpty(_159)){
return;
}
_159.userType=true;
this.types[_158]=_159;
if(this.isPublicType(_158)&&!wm.isEmpty(this._publicTypes)){
this._publicTypes[_158]=_159;
}
},removeType:function(_15a){
if(this._publicTypes){
delete this._publicTypes[_15a];
}
delete this.types[_15a];
},addDefaultTypes:function(){
if(!this.initialized){
this.initialized=true;
var d=wm.defaultTypes||{};
for(var i in d){
this.addType(i,d[i]);
}
}
},isPropInList:function(_15b,_15c){
var s=_15b,_15d=dojo.isString(_15c)?_15c.split("."):_15c,p=_15d.shift(),f=s[p];
if(!f){
return false;
}else{
if(f.isList){
return true;
}else{
if(_15d.length){
var t=(f||0).type,ts=this.getTypeSchema(t);
if(ts){
return this.isPropInList(ts,_15d);
}
}
}
}
},getDisplayField:function(_15e){
var _15f=wm.typeManager.getType(_15e);
if(!_15f){
return "";
}
var _160=_15f.fields;
var _161={};
var _162={};
for(_163 in _160){
var _164=_160[_163];
if(!_164.exclude||_164.exclude.length==0){
if(_164.type=="java.lang.String"||_164.type=="StringData"){
_161[_163]=_164;
}else{
if(!wm.typeManager.isStructuredType(_164.type)){
_162[_163]=_164;
}
}
}
}
for(var _163 in _161){
var _165=100000;
var _166;
if(!dojo.isFunction(_161[_163])){
if(_161[_163].fieldOrder===undefined&&!_166){
_166=_163;
}else{
if(_161[_163].fieldOrder!==undefined&&_161[_163].fieldOrder<_165){
_165=_161[_163].fieldOrder;
_166=_163;
}
}
}
}
if(_166){
return _166;
}
for(var _163 in _162){
var _165=100000;
var _166;
if(!dojo.isFunction(_162[_163])){
if(_162[_163].fieldOrder===undefined&&!_166){
_166=_163;
}else{
if(_162[_163].fieldOrder!==undefined&&_162[_163].fieldOrder<_165){
_165=_162[_163].fieldOrder;
_166=_163;
}
}
}
}
if(_166){
return _166;
}
for(_163 in _160){
return _163;
}
}};
wm.defaultTypes={NumberData:{fields:{dataValue:{type:"Number"}}},BooleanData:{fields:{dataValue:{type:"Boolean"}}},StringData:{fields:{dataValue:{type:"String"}}},DateData:{fields:{dataValue:{type:"Date"}}},EntryData:{fields:{name:{type:"string"},dataValue:{type:"any","include":["delete","read","update","insert"]}}},AnyData:{fields:{dataValue:{type:"any"}}}};
wm.isListType=function(_167){
return _167&&(_167.charAt(0)=="["||_167.match(/\<.*,.*\>/));
};
wm.isHashMapType=function(_168){
var _169=wm.typeManager.getType(_168);
return _169&&_169.isHashMap;
};
wm.getFriendlyTypeName=function(_16a,_16b){
_16a=_16a||"(any)";
var s=wm.typeManager.getService(_16a),_16c=wm.isListType(_16a),t=s&&!_16a.match(/\</)?[s,_16a.split(".").pop()].join("."):_16a;
if(!wm.isHashMapType(_16a)){
if(_16c){
t=t.slice(0,-1);
}
if(_16b||_16c){
t=t+" list";
}
}
return t;
};
wm.getPrimitiveDisplayType=function(_16d){
var t=wm.typeManager.getPrimitiveType(_16d);
if(t=="Boolean"){
t="CheckBox";
}
if(!t||t=="String"){
t="Text";
}
return t;
};
wm.getDisplayType=function(_16e){
var t;
var _16f=_16e.fieldSubType;
if(_16f!=undefined&&_16f!=null&&_16f.length>0){
if(_16f=="picklist"){
t="Select";
}else{
if(_16f=="textarea"){
t="LargeTextArea";
}else{
if(_16f=="boolean"){
t="CheckBox";
}else{
if(_16f=="date"){
t="Date";
}else{
if(_16f=="datetime"){
t="Time";
}else{
if(_16f=="currency"){
t="Currency";
}else{
t="Text";
}
}
}
}
}
}
}else{
t=wm.getPrimitiveDisplayType(_16e.type);
}
return t;
};
}
if(!dojo._hasResource["wm.base.lib.data"]){
dojo._hasResource["wm.base.lib.data"]=true;
dojo.provide("wm.base.lib.data");
wm.data=wm.data||{};
dojo.mixin(wm.data,{getIncludeFields:function(_170){
var pi,_171=[],_172=wm.typeManager.getTypeSchema(_170);
for(var i in _172){
pi=_172[i];
if(pi.include&&pi.include.length){
if(wm.typeManager.isStructuredType(pi.type)){
var _173=wm.typeManager.getTypeSchema(pi.type);
for(var j in _173){
_171.push(i+"."+j);
}
}else{
_171.push(i);
}
}
}
return _171;
},hasIncludeData:function(_174,_175){
if(!_175||wm.isEmpty(_175)){
return false;
}
var _176=this.getIncludeFields(_174);
for(var i=0,f;f=_176[i];i++){
if(dojo.getObject(f,false,_175)===undefined){
return;
}
}
return true;
},hasOperationData:function(_177,_178,_179){
if(!wm.typeManager.getLiveService(_178)){
return false;
}
switch(_177){
case "read":
return !_179||wm.data.hasIncludeData(_178,_179);
case "delete":
case "update":
return wm.data.hasIncludeData(_178,_179);
case "insert":
return wm.data.hasRequiredData(_177,_178,_179,true);
}
},hasRequiredData:function(_17a,_17b,_17c,_17d){
var _17e=wm.typeManager.getTypeSchema(_17b),s,d,_17f,_180,_181,_182;
for(var i in _17e){
s=_17e[i];
_17f=wm.typeManager.isStructuredType(s.type);
d=_17c&&_17c[i];
if(_17f&&_17d){
if((d||s.required)&&!s.isList&&!this.hasRequiredData(s.type,d,_17d)){
return false;
}
}else{
_180=(d!==undefined);
_181=s.required&&!_180;
if(dojo.indexOf(s.exclude,_17a)!=-1?_180:_181){
return false;
}
}
}
return true;
},clearBinding:function(_183,_184){
var w=wm.data.getPropWire(_183,_184);
if(w){
var b=w.owner,_185=w.target,tp=w.targetProperty;
if(b){
b.removeWire(w.getWireId());
}
if(_185&&tp){
_185.setValue(tp,"");
}
}
},getPropWire:function(_186,_187){
var tp=_187,tobj=_186,_188=tobj&&tobj.$.binding,w=_188&&_188.wires[tp];
if(w){
return w;
}
var _189=tobj&&tobj.isDesignLoaded()?studio.application:app;
if(tobj&&tobj.isOwnedBy(_189)){
return wm.data.findSourceWire((tobj||0).getId(),tp);
}
},findSourceWire:function(_18a,_18b){
if(_18a){
var c,o,id,_18c,w;
for(var i in wm.Component.byId){
c=wm.Component.byId[i];
if((c instanceof wm.Binding)&&(c.isDesignLoaded()||!(window.studio&&window.studio._isWaveMakerStudio))){
var _18c=c.findWiresByProps({targetId:_18a,targetProperty:_18b});
if(_18c.length){
return _18c[0];
}
}
}
}
},getPropBindSource:function(_18d,_18e){
var w=wm.data.getPropWire(_18d,_18e);
if(w){
return _18d.getValueById(w.source);
}
},compare:function(a,b){
return a===b?0:a===undefined?-1:b===undefined?1:b===null?1:a>b?1:-1;
},compareNumbers:function(a,b){
var na=wm.isNumber(a),nb=wm.isNumber(b);
return na&&nb?a-b:(na?-1:(nb?1:0));
}});
}
if(!dojo._hasResource["wm.base.data.expression"]){
dojo._hasResource["wm.base.data.expression"]=true;
dojo.provide("wm.base.data.expression");
wm.expression={getValue:function(_18f,_190,_191){
var v=wm.expression._getText(_18f,_190);
var _192="";
try{
var f=function(){
_192=eval(v);
}.call(_191);
}
catch(e){
}
return _192;
},getSources:function(_193){
var re=wm.expression._getSourceRegEx;
re.lastIndex=0;
var _194=(_193||"").match(re,"g")||[];
for(var i=0;i<_194.length;i++){
_194[i]=_194[i].substring(2,_194[i].length-1);
}
return _194;
},_getText:function(_195,_196){
return _195.replace(wm.expression._getSourceRegEx,function(){
try{
var _197=arguments[1];
if(_197.match(/^\[.*\]/)){
var _198=_197.match(/^\[(.*?)\]/);
_197=_197.replace(/^\[(.*?)\]\./,"");
var root=wm.Page.getPage(_198[1]);
var v=root?root.getValue(_197):"";
}else{
if(_196.getValue){
var v=_196.getValue(_197);
}else{
if(_197.indexOf(".")!=-1){
var arr=_197.split(".");
var v=_196;
dojo.forEach(arr,function(prop){
if(v!=null){
v=v[prop];
}
});
}else{
var v=_196[_197];
}
}
}
if(v instanceof wm.Component){
return v.getRuntimeId();
}else{
if(v instanceof wm.Object||v===undefined){
v="";
}
}
if(v instanceof Date){
return "new Date("+v.getTime()+")";
}else{
return dojo.toJson(v);
}
}
catch(e){
}
});
},_getSourceRegEx:new RegExp(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g)};
}
if(!dojo._hasResource["wm.base.Object"]){
dojo._hasResource["wm.base.Object"]=true;
dojo.provide("wm.base.Object");
dojo.declare("wm.Object",null,{constructor:function(){
this.type=this.declaredClass;
},toString:function(){
return "["+this.declaredClass+"]";
},getProp:function(_199){
var g=this._getPropWorker(this,_199,"get");
if(g){
return g.call(this,_199);
}else{
return this._getProp(_199);
}
},_getProp:function(_19a){
return this[_19a];
},setProp:function(_19b,_19c){
if(this.isDestroyed){
return;
}
var s=this._getPropWorker(this,_19b,"set");
if(s){
s.call(this,_19c);
}else{
this._setProp(_19b,_19c);
}
this.valueChanged(_19b,this.getProp(_19b));
},_setProp:function(_19d,_19e){
if(_19d in this){
this[_19d]=_19e;
}
},_getPropWorker:function(_19f,_1a0,_1a1){
if(_1a0=="value"){
return null;
}
var w=_19f._isDesignLoaded&&_19f[_1a1+"_"+_1a0]||this[_1a1+_1a0.slice(0,1).toUpperCase()+_1a0.slice(1)];
if(dojo.isFunction(w)){
return w;
}
},valueChanged:function(_1a2,_1a3){
},_getValue:function(_1a4){
return this.getProp(_1a4);
},_setValue:function(_1a5,_1a6){
this.setProp(_1a5,_1a6);
},getValue:function(_1a7){
if(!_1a7){
return;
}
var _1a8=dojo.isString(_1a7)?_1a7.replace(/([^\.])\[/g,"$1.[").split("."):_1a7;
var o=(_1a8[0]=="studio"&&this instanceof wm.Application)?window:this;
var p;
while(_1a8.length>1){
p=_1a8.shift();
var _1a9;
if(this instanceof wm.Variable||this instanceof Array){
_1a9=p.match(/^\[(\d+)\]$/);
}
if(_1a9&&this instanceof wm.Variable){
o=o.getItem(_1a9[1]);
}else{
if(_1a9&&this instanceof Array){
o=o[pmatch1];
}else{
o=o.getValue?o.getValue(p):o[p];
}
}
if(!o){
wm.logging&&undefined;
return;
}
if(o.getValue){
return o.getValue(_1a8);
}
}
p=_1a8.shift();
return o._getValue?o._getValue(p):o[p];
},setValue:function(_1aa,_1ab){
var _1ac=dojo.isString(_1aa)?_1aa.split("."):_1aa,o=this,p;
while(_1ac.length>1){
o=o.getValue(_1ac.shift());
if(!o){
return;
}
if(o instanceof wm.Object){
return o.setValue(_1ac,_1ab);
}
}
p=_1ac.shift();
o._setValue?o._setValue(p,_1ab):o[p]=_1ab;
}});
dojo.mixin(wm.Object,{makeSchema:function(_1ad){
_1ad.schemaClass=function(){
};
var _1ae=_1ad.superclass;
try{
if(_1ad._meta.parents&&_1ad._meta.parents.length>1){
_1ae=_1ad._meta.parents[0].prototype;
}
}
catch(e){
}
if(_1ae){
var ctor=this.getSchemaClass(_1ae.constructor);
_1ad.schemaClass.prototype=new ctor();
}
_1ad.prototype.schema=new _1ad.schemaClass();
return _1ad.schemaClass;
},getSchemaClass:function(_1af){
return _1af.schemaClass||wm.Object.makeSchema(_1af);
},extendSchema:function(_1b0,_1b1,_1b2){
if(!_1b2&&_1b1){
var _1b3=_1b0.prototype.declaredClass;
if(wm.extendSchemaDictionary){
var _1b4=wm.extendSchemaDictionary[_1b3];
if(_1b4){
for(var i in _1b4){
if(_1b1[i]){
_1b1[i].shortname=_1b4[i];
}else{
_1b1[i]={shortname:_1b4[i]};
}
}
}
}
}
var _1b5=wm.Object.getSchemaClass(_1b0).prototype;
if(_1b5){
for(var _1b6 in _1b1){
if(_1b5[_1b6]){
_1b1[_1b6]=dojo.mixin(dojo.clone(_1b5[_1b6]),_1b1[_1b6],!_1b1[_1b6].ignore?{ignore:0}:{});
}
}
}
dojo.extend(wm.Object.getSchemaClass(_1b0),_1b1);
delete _1b0._publishedProps;
}});
wm.Object.extendSchema(wm.Object,{declaredClass:{ignore:1},schema:{ignore:1},schemaClass:{ignore:1},type:{ignore:1},setValue:{ignore:1,group:"method"},getValue:{ignore:1,group:"method",returns:"Any"}});
wm.Object.extend({getPropFlags:function(_1b7,_1b8){
},getPropertyType:function(_1b9){
var v=this.getProp(_1b9);
var t={type:v&&v.type||typeof v,isObject:v instanceof wm.Object};
if(t.type=="number"&&isNaN(v)){
t.type="string";
}
this.getPropFlags(_1b9,t);
var s=this.schema[_1b9]||{noprop:Boolean((v===undefined)||(v===null)||_1b9.charAt(0)=="_"||(dojo.isFunction(v)||dojo.isObject(v))&&!t.isCustomMethod)};
return dojo.mixin(t,s);
},_listSchemaProperties:function(_1ba,_1bb,_1bc){
var _1bd=this[_1bc||"getPropertyType"],op=Object.prototype;
for(var p in _1bb){
if(p=="inherited"){
continue;
}
if(!(p in _1ba)&&!(p in op)){
var t=_1bd.call(this,p);
if(!t.noprop){
_1ba[p]=t;
}
}
}
return _1ba;
},_listProperties:function(){
var _1be={};
this._listSchemaProperties(_1be,this);
return this._listSchemaProperties(_1be,this.schema);
},listProperties:function(){
var _1bf=this.constructor._publishedProps||(this.constructor._publishedProps=this._listProperties());
return dojo.clone(_1bf);
},listDataProperties:function(){
return this.listProperties();
}});
wm.define=function(_1c0,_1c1,_1c2){
if(arguments.length<3){
_1c2=_1c1;
_1c1=wm.Control;
}
var _1c3=_1c2.published;
delete _1c2.published;
var ctor=dojo.declare(_1c0,_1c1,_1c2);
wm.Object.extendSchema(ctor,_1c3);
return ctor;
};
}
if(!dojo._hasResource["wm.base.Component"]){
dojo._hasResource["wm.base.Component"]=true;
dojo.provide("wm.base.Component");
if(!wm.Component){
dojo.declare("wm.Component",wm.Object,{theme:"wm_tundra",name:"",owner:null,getParentDialog:function(){
var w=this;
while(w){
if(w instanceof wm.Dialog){
return w;
}else{
w=w.parent;
}
}
return null;
},getParentPage:function(){
if(this instanceof wm.Page||this instanceof wm.PageDialog){
return this;
}
if(this.owner){
return this.owner.getParentPage();
}
return null;
},getParentPageOrComposite:function(){
if(wm.isInstanceType(this,[wm.Page,wm.PageDialog,wm.Composite])){
return this;
}
if(this.owner){
return this.owner.getParentPageOrComposite();
}
return null;
},isAncestor:function(_1c4){
var o=this.owner;
while(o&&o!=_1c4){
o=o.owner;
}
return (o==_1c4);
},isAncestorInstanceOf:function(_1c5){
if(this==app._page||this==app||window["studio"]&&(this==studio.application||this==studio.page)){
return false;
}
if(wm.isInstanceType(this,_1c5)){
return this;
}
if(this.parent){
return this.parent.isAncestorInstanceOf(_1c5);
}else{
if(this.owner){
return this.owner.isAncestorInstanceOf(_1c5);
}else{
return false;
}
}
},getOwnerApp:function(){
if(wm.isInstanceType(this,wm.Application)){
return this;
}
if(!this.isDesignLoaded()){
return window.app;
}else{
if(this==studio.page){
return studio.application;
}else{
return this.owner.getOwnerApp();
}
}
},constructor:function(_1c6){
this.$=this.components={};
this._connections=[];
this._subscriptions=[];
if(djConfig.isDebug){
this._debugSubscriptions=[];
}
this._designee=this;
this.isDestroyed=false;
},postscript:function(_1c7){
this.create(_1c7);
wm.Component.add(this);
},create:function(_1c8){
try{
this._initializing=true;
if(wm.debugPerformance){
this.startTimerWithName("create",this.declaredClass);
}
this.prepare(_1c8);
this.build();
this.init();
if(this._designer){
wm.fire(this,"designCreate");
}
if(!this._loading){
this.postInit();
delete this._initializing;
}
if(!this._temporaryComponent){
dojo.addOnWindowUnload(this,"_unload");
}
if(wm.debugPerformance){
this.stopTimerWithName("create",this.declaredClass);
}
}
catch(e){
console.error("Error thrown; failed to create "+this.toString()+": "+e);
}
},_unload:function(){
if(this.owner){
this.owner._isUnloading=true;
}
this.destroy();
},destroy:function(){
if(this.isDestroyed){
return;
}
try{
this._disconnect();
this._unsubscribe();
wm.fire(this,"designDestroy");
var _1c9=[];
for(var n in this.components){
_1c9.push(this.components[n]);
}
for(var i=0,c;(c=_1c9[i]);i++){
c.destroy();
for(var n in c){
delete c[n];
}
c.isDestroyed=true;
}
_1c9=null;
delete this.components;
delete this.$;
wm.Component.remove(this);
this.setOwner(null);
this.isDestroyed=true;
}
catch(e){
}
},prepare:function(_1ca){
this.readProps(_1ca);
dojo.mixin(this,{flags:{}},_1ca);
this.setOwner(this.owner);
},readProps:function(_1cb){
},build:function(){
},init:function(){
if(this.isDesignLoaded()){
this._isDesignLoaded=true;
}
if(this.manageURL){
var _1cc=app?app:this.getRoot();
if(wm.Application&&_1cc instanceof wm.Application){
this.connect(_1cc,"_generateStateUrl",this,"generateStateUrl");
}
}
if(window["studio"]&&this.themeableProps){
dojo.forEach(this.themeableProps,function(_1cd){
var tmp=this[_1cd];
delete this[_1cd];
this[_1cd]=tmp;
},this);
}
},postInit:function(){
this.valueChanged("",this);
},loaded:function(){
this._loading=false;
this.postInit();
delete this._initializing;
},toString:function(_1ce){
var t=_1ce||"";
return "["+this.declaredClass+((this.name)?":"+this.name:"")+(this.isDestroyed?":"+wm.getDictionaryItem("wm.Component.toString_DESTROYED"):"")+t+"]";
},getComponent:function(_1cf){
return this.components[_1cf]||this.owner&&this.owner.getComponent(_1cf);
},isDesignedComponent:function(){
return this.isDesignLoaded();
},isDesignLoaded:function(){
if(this._isDesignLoaded!==undefined){
return this._isDesignLoaded;
}
if(!window.studio||!this.owner){
return false;
}
if(this.owner==studio.application||this.owner==studio._application){
return true;
}
if(!studio.page&&!studio.application&&!studio._application){
return false;
}
if(!this.owner){
return false;
}
var pp=this.getParentPageOrComposite();
if(pp&&pp==studio.page||this.owner==studio.page){
return true;
}
if(this==studio.page){
return true;
}
if(this.isOwnedBy(studio.application)){
return true;
}
if(window["app"]&&!this.isOwnedBy(window["app"])&&window["app"]!=this){
return true;
}
return false;
},getPath:function(){
var p="";
var o=this.owner;
while(o&&!o._hasCustomPath){
o=o.owner;
}
if(o&&o._hasCustomPath){
return this.owner.getPath();
}else{
if(this.isDesignLoaded()&&studio.project){
p="projects/"+studio.project.getProjectPath()+"/";
}
}
return p;
},addComponent:function(_1d0){
var n=_1d0.name;
this.components[n]=_1d0;
},removeComponent:function(_1d1){
if(!this.components){
return;
}
var n=_1d1.name;
if(this.components[n]==_1d1){
delete this.components[n];
}
},setOwner:function(_1d2,_1d3){
var _1d4=this.isDesignLoaded();
if(_1d4){
wm.job("studio.updateDirtyBit",10,function(){
studio.updateProjectDirty();
});
}
var _1d5=this.owner;
if(this.owner){
this.owner.removeComponent(this);
}
this.owner=_1d2;
if(this.owner){
if(!_1d3){
this.owner.addComponent(this);
if(!this._designer&&this._isDesignLoaded!==false){
this._designer=this.owner._designer;
}
}
if((!_1d5&&this.owner instanceof wm.Page==false)||(this.owner!=_1d5&&_1d5&&(this.owner instanceof wm.Page==false&&_1d5 instanceof wm.Page||this.owner instanceof wm.Page&&_1d5 instanceof wm.Page==false))){
this.updateId();
if(this.isDesignLoaded()){
this.resetChildIds();
}
}
}
delete this.rootId;
},isOwnedBy:function(_1d6){
var o=this.owner;
while(o){
if(o==_1d6){
return true;
}
o=o.owner;
}
},qualifyName:function(_1d7){
_1d7=this.name+"_"+_1d7;
if(window.studio&&(window.studio.page==this.owner||window.studio.application==this.owner)){
return _1d7;
}
return this.owner?this.owner.qualifyName(_1d7):_1d7;
},getUniqueName:function(_1d8){
return wm.findUniqueName(_1d8,[this,this.components]);
},setName:function(_1d9){
if(!_1d9){
return;
}
wm.Component.remove(this);
this.owner.removeComponent(this);
this.name=_1d9;
this.owner.addComponent(this);
this.updateId();
wm.Component.add(this);
},updateId:function(){
var id=this.makeId();
if(id!=this.id){
this.id=id;
delete this.runtimeId;
}
},makeId:function(_1da){
_1da=this.name+(_1da?(this.name?".":"")+_1da:"");
return this.owner?this.owner.getId(_1da):_1da;
},getId:function(_1db){
if(_1db){
return this.makeId(_1db);
}
var id=this.id;
if(!this.id||this.isDesignLoaded()){
var id=this.makeId();
this.id=id;
}
return id;
},resetChildIds:function(){
for(var i in this.components){
delete this.components[i].id;
delete this.components[i].runtimeId;
delete this.components[i].rootId;
this.components[i].resetChildIds();
}
},getRoot:function(){
if(this.owner){
return this.owner.getRoot();
}else{
return null;
}
},getRootId:function(){
if(!this.rootId||this.isDesignLoaded()){
var r=this.getRoot();
r=r?r.getRuntimeId():"";
this.rootId=r?r+(r.charAt(r.length-1)=="."?"":"."):"";
}
return this.rootId;
},getRuntimeId:function(_1dc){
if(!this.runtimeId||this.isDesignLoaded()){
this.runtimeId=this.getRootId()+this.getId();
}
var _1dd=(_1dc)?this.runtimeId+"."+_1dc:this.runtimeId;
return _1dd;
},getValueById:function(inId){
if(inId===null||inId===undefined){
return null;
}
var r=this.getRoot();
r=r&&r.getValue(inId);
var _1de;
if(r&&r._wmNull){
return app.getValue(inId);
}
if(r!==undefined){
return r;
}
if(inId&&wm.Component.byId[inId]){
return wm.Component.byId[inId];
}
var _1df=inId.indexOf(".");
if(_1df!=-1){
var _1e0=inId.substring(0,_1df);
if(_1e0.indexOf("[")==0){
_1e0=_1e0.substring(1,_1e0.length-1);
}
var _1e1=inId.substring(_1df+1);
var page=wm.Page.getPage(_1e0);
if(page){
return page.getValueById(_1e1);
}
if(this._isDesignLoaded&&wm.decapitalize(String(studio.bindDialog.bindSourceDialog.pageContainer.pageName))==_1e0){
page=studio.bindDialog.bindSourceDialog.pageContainer.page;
if(page){
return page.getValueById(_1e1);
}
}
}
return undefined;
},connect:function(){
var c=dojo.connect.apply(dojo,arguments);
this._connections.push(c);
return c;
},connectOnce:function(_1e2,_1e3,_1e4,_1e5){
var _1e6=this._connections;
var args=[_1e2,_1e3];
if(typeof _1e4=="function"){
_1e5=_1e4;
}else{
args.push(_1e4);
}
args.push(function(){
dojo.disconnect(c);
wm.Array.removeElement(_1e6,c);
dojo.hitch(this,_1e5)();
});
var c=dojo.connect.apply(dojo,args);
_1e6.push(c);
return c;
},connectEvents:function(_1e7,_1e8){
this._connections=this._connections.concat(wm.connectEvents(this,_1e7,_1e8));
},_disconnect:function(_1e9,_1ea){
dojo.forEach(this._connections,dojo.disconnect);
this._connections=[];
},disconnectEvent:function(_1eb){
this._connections=dojo.filter(this._connections,function(item,_1ec,_1ed){
if(item[1]==_1eb){
dojo.disconnect(item);
return false;
}else{
return true;
}
return item[1]!=_1eb;
});
},disconnect:function(_1ee){
dojo.disconnect(_1ee);
wm.Array.removeElement(this._connections,_1ee);
},findConnection:function(_1ef){
for(var i=0;i<this._connections.length;i++){
var con=this._connections[i];
if(con[1]==_1ef){
return con;
}
}
},findSubscription:function(_1f0){
for(var i=0;i<this._subscriptions.length;i++){
var con=this._subscriptions[i];
if(con[0]==_1f0){
return con;
}
}
},subscribe:function(){
var s=dojo.subscribe.apply(dojo,arguments);
this._subscriptions.push(s);
if(djConfig.isDebug){
this._debugSubscriptions.push(arguments[0]);
}
return s;
},unsubscribe:function(_1f1){
for(var i=this._subscriptions.length-1;i>=0;i--){
if(this._subscriptions[i][0]==_1f1){
dojo.unsubscribe(this._subscriptions[i]);
wm.Array.removeElementAt(this._subscriptions,i);
if(djConfig.isDebug){
wm.Array.removeElementAt(this._debugSubscriptions,i);
}
}
}
},_unsubscribe:function(){
dojo.forEach(this._subscriptions,dojo.unsubscribe);
this._subscriptions=[];
if(djConfig.isDebug){
this._debugSubscriptions=[];
}
},isEventProp:function(n){
if(!this._designee){
return false;
}
return dojo.isFunction(this._designee[n]||this._designee[n.replace(/\d+$/,"")])&&(n.slice(0,2)=="on");
},isCustomMethodProp:function(n){
return dojo.isFunction(this.constructor.prototype[n])&&(n.slice(0,6)=="custom");
},_getProp:function(n){
if(this.isEventProp(n)){
return this.eventBindings?(this.eventBindings[n]||""):"";
}
var g=this._getPropWorker(this._designee,n,"get");
if(g){
return g.call(this,n);
}
return n in this._designee?this._designee[n]:this.components[n];
},_setProp:function(n,v){
if(this.isEventProp(n)&&this._isDesignLoaded){
this.setEvent(n,v);
}else{
if(this.isCustomMethodProp(n)&&this._isDesignLoaded){
if(v){
this._designee[n]=v;
eventEdit(this,n,v,this.owner==studio.application);
}else{
delete this._designee[n];
}
}else{
var s=this._getPropWorker(this._designee,n,"set");
if(s){
s.call(this,v);
}else{
this._designee[n]=v;
}
}
}
},valueChanged:function(_1f2,_1f3){
var _1f4=this.getRuntimeId(_1f2);
if(_1f4==""){
return;
}
dojo.publish(_1f4+"-changed",[_1f3,this]);
var root=this.getRoot();
if(root){
root=root.getRuntimeId();
}
if(root&&root.indexOf(".")&&_1f4.indexOf(root)==0){
var n=_1f4.substring(root.length);
n=root.substring(root.lastIndexOf(".")+1)+n;
if(n!=_1f4){
var _1f5=n+"-changed";
wm.logging&&undefined;
dojo.publish(_1f5,[_1f3,this]);
}
}
},_create:function(ctor,_1f6){
try{
return new ctor(_1f6);
}
catch(e){
}
},adjustChildProps:function(_1f7,_1f8){
dojo.mixin(_1f8,{owner:this});
},createComponent:function(_1f9,_1fa,_1fb,_1fc,_1fd,_1fe){
if(wm.debugPerformance){
if(_1fa=="wm.Layout"){
if(dojo.isFF){
console.groupCollapsed("CREATE "+_1fa+": "+_1f9+" AT "+startTime);
}else{
}
}
this.startTimer("CreateComponent",_1fa);
}
var ctor=dojo.getObject(_1fa);
if(!ctor){
try{
wm.getComponentStructure(_1fa);
ctor=dojo.getObject(_1fa);
}
catch(e){
}
}
if(!ctor){
throw (wm.getDictionaryItem("wm.Component.CLASS_NOT_FOUND",{type:_1fa,name:_1f9}));
}
var _1ff=dojo.mixin({_designer:this._designer,_loading:true},_1fb);
this.adjustChildProps(ctor,_1ff);
if(_1fb._isDesignLoaded===false){
delete _1ff._designer;
}
if(_1fe){
_1ff.owner=_1fe;
}
_1ff.name=_1ff.owner.getRoot()._loading||_1ff.owner._loading?_1f9:_1ff.owner.getUniqueName(_1f9);
if(!this.isDesignLoaded()){
for(var p in _1ff){
if(p.indexOf("custom")==0&&dojo.isFunction(ctor.prototype[p])){
var _200=_1ff.owner;
_1ff[p]=dojo.hitch(_200,_200[_1ff[p]]);
}
}
}
var w=this._create(ctor,_1ff);
if(w.name!=_1f9&&wm.pasting&&window["studio"]){
studio.renamedDuringPaste[_1f9]=w;
}
try{
if(_1fc&&w.owner){
w.owner.makeEvents(_1fc,w);
}
if(_1fd){
w.createComponents(_1fd);
}
}
catch(e){
}
finally{
try{
w.loaded();
if(w.owner&&w.owner[w.name]===undefined&&!w._isDesignLoaded&&!wm.isInstanceType(w,wm.Property)){
w.owner[w.name]=w;
}
}
catch(e){
console.error("Error in postInit for "+w.toString()+": "+e);
}
}
if(wm.debugPerformance){
this.stopTimerWithName("CreateComponent",_1fa,1);
}
return w;
},createComponents:function(_201,_202){
var _203=[];
for(var i in _201){
var c=_201[i];
_203.push(this.createComponent(i,c[0],c[1],c[2],c[3],_202));
}
return _203;
},_eventArgs:function(c,a){
var args=[c];
for(var i=0,l=a.length;i<l;i++){
args.push(a[i]);
}
return args;
},makeEvents:function(_204,_205){
var e,n,f;
var _206=[];
for(n in _204){
_206.push(n);
}
_206.sort();
for(var i=0;i<_206.length;i++){
var n=_206[i];
f=_204[n];
e=this[f]||f;
if(this._designer){
if(n.match(/\d+$/)&&!_205[n]){
_205[n]=function(){
};
}
wm.fire(_205,"setProp",[n,f]);
}else{
this.connect(_205._eventSource||_205,n.replace(/\d*$/,""),this.makeEvent(e,f,_205,n.replace(/\d*$/,"")));
if(n.match(/^onRightClick\d*$/)){
_205.connect(_205.domNode,"oncontextmenu",_205,function(_207){
dojo.stopEvent(_207);
this.onRightClick(_207);
});
if(dojo.isFF){
_205.connect(_205.domNode,"onmousedown",_205,function(_208){
if(_208.button==2||_208.ctrlKey){
dojo.stopEvent(_208);
this.onRightClick(_208);
}
});
}
}else{
if(n.match(/^onMouseOver\d*$/)){
_205.createMouseOverConnect();
}else{
if(n.match(/^onMouseOut\d*$/)){
_205.createMouseOutConnect();
}else{
if(n.match(/^onEnterKeyPress\d*$/)&&_205 instanceof wm.Container){
_205.connectOnEnterKey();
}
}
}
}
}
}
},makeEvent:function(_209,_20a,_20b,_20c){
return dojo.isFunction(_209)?this._makeEvent(_20a,_20b,_20c):this._makeComponentEvent(_209,_20b,_20c);
},_makeEvent:function(_20d,_20e,_20f){
var self=this;
return function jsEventHandler(){
var args=arguments;
var f=function(){
if(app.debugDialog&&!_20e.isAncestor(app.debugDialog)){
var _210=app.debugDialog.newLogEvent({eventType:"javascriptEvent",sourceDescription:(_20e instanceof wm.Component?_20e.getRuntimeId()+".":"")+_20f+"() has been called",resultDescription:"Calling "+(self instanceof wm.Component?self.getRuntimeId()+".":"")+_20d+"()",firingId:_20e instanceof wm.Component?_20e.getRuntimeId():"",affectedId:self.getRuntimeId(),method:_20d});
}
try{
self[_20d].apply(self,self._eventArgs(this,args));
}
catch(e){
if(e instanceof Error&&e.message=="Abort"||e.toString()=="Abort"){
throw e;
}
var _211="Error in "+self.toString()+"."+_20d+": "+e.message;
if(djConfig.isDebug){
app.toastError(_211);
}else{
console.error(_211);
}
}
if(_210){
app.debugDialog.endLogEvent(_210);
}
};
if(_20e&&_20f&&_20e["_"+_20f+"BeforeStart"]){
dojo.hitch(this,f)();
}else{
if(self instanceof wm.Page&&self._loadingPage){
self.connectOnce(self,"start",this,f);
}else{
if(self._loading){
self.connectOnce(self,"postInit",this,f);
}else{
dojo.hitch(this,f)();
}
}
}
};
},_makeComponentEvent:function(_212,_213,_214){
var self=this;
return function eventHandler(e,_215){
var args=arguments;
var f=function(){
var c=wm.isInstanceType(_212,wm.Component)?_212:self.getValueById(_212);
if(wm.isInstanceType(c,wm.Component)){
if(app.debugDialog&&!_213.isAncestor(app.debugDialog)){
if(c instanceof wm.ServiceVariable){
if(!c._debug){
c._debug={};
}
c._debug={trigger:_213.getId(),eventName:_214,method:"update",lastUpdate:new Date()};
}
var _216=app.debugDialog.newLogEvent({eventType:"componentEvent",sourceDescription:_213.getRuntimeId()+"."+_214+"() has been called",resultDescription:"Invoking "+c.getRuntimeId(),eventName:_214,firingId:_213.getRuntimeId(),affectedId:c.getRuntimeId(),method:"update"});
}
if(c.updateInternal){
wm.fire(c,"updateInternal",[e,_215]);
}else{
wm.fire(c,"update",[e,_215]);
}
}else{
if(dojo.isString(_212)){
var o=_212.split(".");
var m,c;
if(o.length>1){
m=o.pop();
c=self.getValueById(o.join("."));
}else{
c=self;
m=o[0];
}
if(c&&c[m]){
if(app.debugDialog&&!_213.isAncestor(app.debugDialog)){
if(c instanceof wm.ServiceVariable){
if(!c._debug){
c._debug={};
}
c._debug={trigger:_213.getId(),eventName:_214,method:m,lastUpdate:new Date()};
}
var _216=app.debugDialog.newLogEvent({eventType:"subcomponentEvent",sourceDescription:(_213 instanceof wm.Component?_213.getRuntimeId()+".":"")+_214+"() has been called",resultDescription:"Calling "+c.getRuntimeId()+"."+m+"()",firingId:_213 instanceof wm.Component?_213.getRuntimeId():undefined,affectedId:c instanceof wm.Component?c.getRuntimeId():undefined,method:m});
}
try{
c[m].apply(c,self._eventArgs(this,args));
}
catch(e){
if(e instanceof Error&&e.message=="Abort"||e.toString()=="Abort"){
throw e;
}
var _217="Error in "+self.toString()+"."+m+": "+e.message;
if(djConfig.isDebug){
app.toastError(_217);
}else{
console.error(_217);
}
}
}
}
}
if(_216){
app.debugDialog.endLogEvent(_216);
}
};
if(self instanceof wm.Page&&self._loadingPage){
self.connectOnce(self,"start",this,f);
}else{
if(self._loading){
self.connectOnce(self,"postInit",this,f);
}else{
dojo.hitch(this,f)();
}
}
};
},readComponents:function(_218){
var c=dojo.fromJson(_218);
return this.createComponents(c);
},startTimerWithName:function(_219,_21a){
if(!wm.debugPerformance){
return;
}
if(!this.logTimesWithComponentNames){
this.logTimesWithComponentNames={};
}
if(!this.logTimesWithComponentNames[_21a]){
this.logTimesWithComponentNames[_21a]={};
}
this.logTimesWithComponentNames[_21a][_219]=new Date().getTime();
},stopTimerWithName:function(_21b,_21c){
if(!wm.debugPerformance){
return;
}
if(!this.logTimesWithComponentNames){
this.logTimesWithComponentNames={};
}
if(!this.logTimesWithComponentNames[_21c]){
this.logTimesWithComponentNames[_21c]={};
}
var _21d=this.logTimesWithComponentNames[_21c][_21b];
if(!_21d){
return -1;
}
this.logTimesWithComponentNames[_21c][_21b]=0;
var _21e=new Date().getTime()-_21d;
var _21f=wm.Component.timingByComponent[_21c];
if(!_21f){
wm.Component.timingByComponent[_21c]={};
_21f=wm.Component.timingByComponent[_21c];
}
if(!_21f[_21b]){
_21f[_21b]=[];
}
_21f[_21b].push(_21e);
return _21e;
},subtractTimerWithName:function(_220,_221,time){
if(!wm.debugPerformance){
return;
}
if(!this.logTimesWithComponentNames){
this.logTimesWithComponentNames={};
}
if(!this.logTimesWithComponentNames[_221]){
this.logTimesWithComponentNames[_221]={};
}
var _222=this.logTimesWithComponentNames[_221][_220];
if(!_222){
return -1;
}
var _223=wm.Component.timingByComponent[_221];
if(!_223){
wm.Component.timingByComponent[_221]={};
_223=wm.Component.timingByComponent[_221];
}
var tmp=_223[timereName];
tmp[tmp.length-1]-=time;
},startTimer:function(_224){
if(!wm.debugPerformance){
return;
}
if(!this.logTimes){
this.logTimes={};
}
this.logTimes[_224]=new Date().getTime();
},stopTimer:function(_225,_226){
if(!wm.debugPerformance){
return;
}
if(!this.logTimes){
this.logTimes={};
}
var _227=this.logTimes[_225];
if(!_227){
return -1;
}
this.logTimes[_225]=0;
var _228=new Date().getTime()-_227;
if(_226){
var _229=wm.Component.timingByComponent[this.declaredClass];
if(!_229){
wm.Component.timingByComponent[this.declaredClass]={};
_229=wm.Component.timingByComponent[this.declaredClass];
}
if(!_229[_225]){
_229[_225]=[];
}
_229[_225].push(_228);
}
return _228;
}});
dojo.mixin(wm.Component,{byId:{},byShortId:{},timingByComponent:{},add:function(_22a){
if(_22a._temporaryComponent){
return;
}
var rid=_22a.getRuntimeId();
wm.Component.byId[rid]=_22a;
},remove:function(_22b){
delete wm.Component.byId[_22b.getRuntimeId()];
},property:{}});
}
}
if(!dojo._hasResource["wm.base.Control"]){
dojo._hasResource["wm.base.Control"]=true;
dojo.provide("wm.base.Control");
dojo.provide("wm.base.Widget");
wm.splitUnits=function(_22c){
if(!dojo.isString(_22c)){
return {value:_22c,units:"px"};
}
var m=(_22c||"").match(wm.splitUnits.Rx);
return {value:Number(m[1])||0,units:m[2]||"px"};
};
wm.splitUnits.Rx=/(\d*)(.*)/;
dojo.declare("wm.Bounds",null,{padding:"",border:"",margin:"",constructor:function(){
this.bounds={l:0,t:0,w:96,h:64};
this.borderExtents={l:0,t:0,r:0,b:0};
this.paddingExtents={l:0,t:0,r:0,b:0};
this.marginExtents={l:0,t:0,r:0,b:0,w:0,h:0};
this.padBorderMargin={};
this.calcPadBorderMargin();
},getBounds:function(){
return this.bounds;
},setBounds:function(inL,inT,inW,inH){
if(arguments.length==1){
return this.setBounds(inL.l,inL.t,inL.w,inL.h);
}
var b=this.bounds;
if(!isNaN(inL)&&b.l!=inL){
b.l=inL;
}
if(!isNaN(inT)&&b.t!=inT){
b.t=inT;
}
if(inW>=0&&b.w!=inW){
b.w=inW;
this._boundsDirty=true;
}
if(inH>=0&&b.h!=inH){
b.h=inH;
this._boundsDirty=true;
}
b.r=b.l*1+b.w*1;
b.b=b.t*1+b.h*1;
return b;
},setContentBounds:function(_22d){
var b={};
var sm=this.getScrollMargins();
if("w" in _22d){
b.w=_22d.w+this.padBorderMargin.w+sm.w;
}
if("h" in _22d){
b.h=_22d.h+this.padBorderMargin.h+sm.h;
}
return this.setBounds(b);
},_parseExtents:function(_22e){
_22e=String(_22e);
var r={};
if(typeof _22e=="number"){
r={l:_22e,t:_22e,r:_22e,b:_22e};
}else{
var ex=_22e.split(",");
var l=ex.length;
r.t=parseFloat(ex[0])||0;
r.r=l<2?r.t:parseFloat(ex[1])||0;
r.b=l<3?r.t:parseFloat(ex[2])||0;
r.l=l<4?r.r:parseFloat(ex[3])||0;
}
return r;
},_stringifyExtents:function(_22f){
return _22f.t+","+_22f.r+","+_22f.b+","+_22f.l;
},setPadding:function(_230){
this.padding=String(_230);
this.paddingExtents=this._parseExtents(this.padding);
this.padBorderMarginChanged();
this.invalidCss=true;
this.render();
},setBorder:function(_231){
_231=String(_231);
_231=(_231&&_231.match(/\d/))?_231:"0";
if(_231!==this.border){
this.border=_231;
this.borderExtents=this._parseExtents(_231);
this.padBorderMarginChanged();
this.invalidCss=true;
this.render();
}
},setMargin:function(_232){
this.margin=String(_232);
var me=this.marginExtents=this._parseExtents(this.margin);
me.h=me.t+me.b;
me.w=me.l+me.r;
this.padBorderMarginChanged();
this.invalidCss=true;
this.render();
},setOneMargin:function(_233,edge){
var m=this.marginExtents;
m[edge]=_233;
this.setMargin(this._stringifyExtents(m));
},padBorderMarginChanged:function(){
this.calcPadBorderMargin();
},_edges:{l:1,t:1,r:1,b:1},calcPadBorderMargin:function(){
var pbm=this.padBorderMargin;
for(var e in this._edges){
pbm[e]=this.borderExtents[e]+this.paddingExtents[e]+this.marginExtents[e];
}
if(this._isDesignLoaded&&studio.useDesignBorder&&wm.isDesignable(this)&&(!this.border||this.border==="0")){
pbm.t++;
pbm.b++;
pbm.r++;
pbm.l++;
}
pbm.w=pbm.l+pbm.r;
pbm.h=pbm.t+pbm.b;
},getScrollMargins:function(){
return {w:0,h:0};
},getContentBounds:function(){
var sm=this.getScrollMargins();
var b={l:this.paddingExtents.l,t:this.paddingExtents.t,w:Math.floor(this.bounds.w)-this.padBorderMargin.w-sm.w,h:Math.floor(this.bounds.h)-this.padBorderMargin.h-sm.h};
if(b.w<0){
b.w=0;
}
if(b.h<0){
b.h=0;
}
b.r=b.l+b.w;
b.b=b.t+b.h;
return b;
},getStyleBounds:function(){
if(this.isRelativePositioned){
return {w:this.width,h:this.height};
}
var pbm=(this.dom.node.tagName.toLowerCase()=="button")?this.marginExtents:this.padBorderMargin;
var b={l:this.bounds.l,t:this.bounds.t,w:this.bounds.w-pbm.w,h:this.bounds.h-pbm.h};
if(b.w<0){
b.w=0;
}
if(b.h<0){
b.h=0;
}
b.r=b.l+b.w;
b.b=b.t+b.h;
return b;
},cloneBounds:function(){
with(this.bounds){
return {l:l,t:t,w:w,h:h,r:r,b:b};
}
}});
dojo.declare("wm.DomNode",null,{constructor:function(_234,_235){
this.node=_234||document.createElement("div");
this.isRelativePositioned=_235;
},append:function(_236){
this.node.appendChild(_236.node);
},remove:function(_237){
this.node.removeChild(_237.node);
},getWidth:function(){
return this.node.offsetWidth;
},getHeight:function(){
return this.node.offsetHeight;
},setBox:function(_238,_239){
var _23a=false;
var s=this.node.style;
if(this.isRelativePositioned){
s.width=_238.w;
s.height=_238.h;
return true;
}
var bl=_238.l+"px";
if(!isNaN(_238.l)&&s.left!=bl){
s.left=bl;
_23a=true;
}
var bt=_238.t+"px";
if(!isNaN(_238.t)&&s.top!=bt){
s.top=bt;
_23a=true;
}
var bw=_238.w+"px";
if(_238.w>=0&&s.width!=bw){
s.width=bw;
_23a=true;
}
var bh=_238.h+"px";
if(_238.h>=0){
s.height=bh;
s.lineHeight=_239?bh:"normal";
_23a=true;
}
return _23a;
},setCssText:function(_23b){
this.node.style.cssText+=";"+_23b;
},addCssText:function(_23c){
this.node.style.cssText+=_23c;
}});
wm.define("wm.Control",[wm.Component,wm.Bounds],{mobileFolding:false,mobileFoldingIndex:"",mobileFoldingCaption:"",imageList:"",imageIndex:-1,renderedOnce:0,invalidCss:1,autoScroll:false,backgroundColor:"",borderColor:"#F0F0F0",classNames:"",id:"",autoSizeWidth:false,autoSizeHeight:false,_needsAutoSize:true,width:"",height:"",minHeight:0,minWidth:0,minMobileHeight:0,minDesktopHeight:0,enableTouchHeight:false,styles:"",showing:true,disabled:false,_parentDisabled:false,_disabled:false,container:false,_classes:{domNode:[]},scrollX:false,scrollY:false,constructor:function(){
this.widgets={};
this._classes=dojo.clone(this._classes);
},markupFactory:function(_23d,node){
var ctor=arguments.callee.arguments[2];
var _23e=node;
var _23f=wm._dojoParserCurrentOwner;
var _240=node.parentNode.id;
while(_240.indexOf("_")!=-1&&!_23f[_240]){
_240=_240.substring(_240.indexOf("_")+1);
}
var _241=_23f[_240];
_23d=dojo.mixin(_23d,{domNode:_23e,parentNode:_23e.parentNode,parent:_241,name:_23f.getUniqueName(_23d.name),owner:_23f,_designer:_23f._designer,_loading:false});
var _242=new ctor(_23d);
if(!_23d.parent&&ctor.prototype.declaredClass=="wm.Layout"){
_242.owner.root=_242;
}
return _242;
},prepare:function(_243){
try{
if(_243){
var _244=_243.owner;
if(!_244&&parent){
_244=_243.owner=parent.owner;
}
if(_244){
_244=_244.getOwnerApp();
}
if(_244){
_244.loadThemePrototypeForClass(this.constructor,this);
}
}
}
catch(e){
console.error("What the hell?"+e);
}
this.inherited(arguments);
},postscript:function(_245){
this.inherited(arguments);
},create:function(){
this._cupdating=true;
this.inherited(arguments);
},build:function(){
this.domNode=dojo.byId(this.domNode||undefined);
if(!this.domNode){
this.domNode=document.createElement("div");
}
},initDomNode:function(){
if(!this.dom){
this.dom=new wm.DomNode(this.domNode,this.isRelativePositioned);
if(!this.isRelativePositioned){
this.domNode.style.position="absolute";
}else{
this.domNode.style.position="relative";
}
this.setParent(this.parent);
this.setDomNode(this.domNode);
}
},init:function(){
this.initDomNode();
this.inherited(arguments);
if(this.ariaRole){
dojo.attr(this.domNode,"role",this.ariaRole);
}
var _246=wm.isMobile||this._isDesignLoaded&&studio.currentDeviceType!="desktop";
if(this.height&&String(this.height).match(/\%/)){
this.mobileHeight=this.desktopHeight=this.height;
}else{
if(!_246||!this.enableTouchHeight){
if(this.desktopHeight!=null){
this.height=this.desktopHeight;
}else{
if(this.height){
this.desktopHeight=this.height;
}else{
this.height=this.desktopHeight=this.constructor.prototype.height;
}
}
if(this.minDesktopHeight){
this.minHeight=this.minDesktopHeight;
}else{
if(this.minHeight){
this.minDesktopHeight=this.minHeight;
}else{
this.minHeight=this.minDesktopHeight=this.constructor.prototype.minHeight;
}
}
}else{
if(this._isDesignLoaded&&studio.currentDeviceType=="desktop"||this.desktopHeight==undefined){
this.desktopHeight=this.height||this.mobileHeight;
}
if(this.desktopHeight&&typeof this.desktopHeight=="string"&&this.desktopHeight.match(/\%/)){
this.height=this.mobileHeight=this.desktopHeight;
}else{
if(this.mobileHeight){
this.height=this.mobileHeight;
}else{
if(this.height){
this.mobileHeight=this.height;
}else{
this.height=this.mobileHeight=this.constructor.prototype.height;
}
}
}
if(this.minMobileHeight){
this.minHeight=this.minMobileHeight;
}else{
this.minHeight=this.minMobileHeight=this.constructor.prototype.minHeight;
}
}
}
this.bc();
if(this.isDesignLoaded()){
this.set_border((this.border)?String(this.border):"0");
}else{
this.border=(this.border)?String(this.border):"0";
}
this.borderExtents=this._parseExtents(this.border);
this.padding=String(this.padding);
this.paddingExtents=this._parseExtents(this.padding);
this.setMargin(String(this.margin));
this.doSetSizeBc();
if(!this.showing){
this.setShowing(false,true);
}
this._parentDisabled=this.parent?this.parent.disabled||this.parent._parentDisabled:false;
this.setDisabled(this.disabled);
this.appendDOMNode(this.parent);
this.updateBounds();
},bc:function(){
},postInit:function(){
this._cupdating=false;
this.inherited(arguments);
this.render(1);
if(this.addTouchListener&&wm.isMobile&&!window["studio"]){
this.addTouchListener(this._touchNode||this.domNode);
}
if(!this.$.binding&&this.isDesignLoaded()){
new wm.Binding({name:"binding",owner:this});
}
if(this.hint){
this.setHint(this.hint);
}
},destroy:function(){
if(this.isDestroyed||this._isDestroying){
return;
}
this._isDestroying=true;
try{
if(app.toolTipDialog&&this==app.toolTipDialog.tipOwner){
app.toolTipDialog.hide();
}
if(this._layerConnections){
delete this._layerConnections;
}
if(this.widgets){
var wids=[];
wm.forEachProperty(this.widgets,function(w,name){
wids.push(w);
});
for(var i=0,w;(w=wids[i]);i++){
w.destroy();
}
wids=[];
}
this.widgets=null;
this.parentNode=null;
this.setParent(null);
wm.fire(this.designWrapper,"destroy");
this.layout=null;
this.inherited(arguments);
}
catch(e){
}
finally{
if(this.domNode){
dojo.destroy(this.domNode);
}
this.domNode=null;
this._designee=null;
if(this.dom&&this.dom.node){
dojo.destroy(this.dom.node);
this.dom.node=null;
this.dom=null;
}
}
},loaded:function(){
this.inherited(arguments);
this.initUserClasses();
},setDomNode:function(_247){
var n=this.domNode=_247;
if(dojo.isIE<=8){
n.style.width="0px";
}
this.updateId();
var _248=this.classNames+(this.owner?" "+(this.owner._appendCssClassName||this.owner.declaredClass.replace(/\./g,""))+"-"+this.name:"")+(this.isRelativePositioned&&this.parent&&this.parent.layoutKind=="left-to-right"?" wmInlineDiv":"");
dojo.addClass(n,_248);
this.initUserClasses();
},isAncestorHiddenLayer:function(){
if(this instanceof wm.Layout&&this.owner==app._page){
return false;
}
if(this instanceof wm.Layer&&this.parent instanceof wm.Layers&&this.parent.getActiveLayer()!=this){
return true;
}
var _249;
if(this.parent&&this.parent instanceof wm.Control){
_249=this.parent;
}else{
if(this.owner instanceof wm.Page&&this.owner.owner instanceof wm.Control){
_249=this.owner.owner;
}
}
if(!_249){
return false;
}
return _249.isAncestorHiddenLayer();
},isAncestorHidden:function(){
if(!this.showing&&this instanceof wm.Layer==false){
return true;
}
if(this instanceof wm.Layout&&this.owner==app._page||this instanceof wm.Dialog){
return false;
}
if(this instanceof wm.Layer&&!this.active){
return true;
}
var _24a;
if(this.parent&&this.parent instanceof wm.Control){
_24a=this.parent;
}else{
if(this.owner instanceof wm.Page&&this.owner.owner instanceof wm.Control){
_24a=this.owner.owner;
}
}
if(!_24a){
return false;
}
return _24a.isAncestorHidden();
},callOnShowParent:function(){
if(this.owner&&this.owner._isUnloading){
return;
}
var self=this;
wm.forEachVisibleWidget(this,function(w){
if(self!=w){
if(w._onShowParent){
w._onShowParent();
}
if(w.onShow&&w.onShow!=w.constructor.prototype.onShow){
w.onShow();
}
}
},true);
},callOnHideParent:function(){
var self=this;
if(!this.isDestroyed){
wm.forEachVisibleWidget(this,function(w){
if(w.hint&&app.toolTipDialog&&app.toolTipDialog.tipOwner==self){
app.hideToolTip();
}
if(self!=w){
if(w._onHideParent){
w._onHideParent();
}
if(w.onHide&&w.onHide!=w.constructor.prototype.onHide){
w.onHide();
}
}
},true);
}
},onShow:function(){
},onHide:function(){
},connectToAllLayers:function(obj,_24b){
var _24c=[];
var _24d=[];
var _24e=this;
while(_24e&&(!app._page||_24e!=app._page.root)){
if(_24e instanceof wm.Layer){
_24c.push(_24e);
}else{
if(_24e instanceof wm.Dialog){
_24d.push(_24e);
}
}
if(_24e.parent){
_24e=_24e.parent;
}else{
if(_24e.owner instanceof wm.Page&&_24e.owner.owner instanceof wm.Control){
_24e=_24e.owner.owner;
}else{
_24e=null;
}
}
}
var f=dojo.hitch(obj,_24b);
this._layerConnections=[];
dojo.forEach(_24c,dojo.hitch(this,function(l){
this._layerConnections.push(this.connect(l,"onShow",this,function(){
if(dojo.every(_24c,function(l2){
return l2.isActive();
})&&dojo.every(_24d,function(l2){
return l2.showing;
})){
f();
}
}));
}));
dojo.forEach(_24d,dojo.hitch(this,function(d){
this._layerConnections.push(this.connect(d,"setShowing",this,function(){
if(d.showing&&!d._transitionToHiding){
if(dojo.every(_24c,function(l2){
return l2.isActive();
})&&dojo.every(_24d,function(l2){
return l2.showing;
})){
f();
}
}
}));
}));
},disconnectFromAllLayers:function(){
dojo.forEach(this._layerConnections,dojo.hitch(this,function(c){
dojo.disconnect(c);
this._connections=wm.Array.removeElement(this._connections,c);
}));
delete this._layerConnections;
},isAncestor:function(_24f){
var o=this.parent;
while(o&&o!=_24f){
o=o.parent;
}
return (o==_24f);
},updateId:function(){
this.inherited(arguments);
if(this.domNode){
var rid=this.getRuntimeId();
this.domNode.rid=rid;
this.domNode.id=rid.replace(/\./g,"_");
}
},getUniqueName:function(_250){
return wm.findUniqueName(_250,[this,this.components,this.widgets]);
},setName:function(_251){
if(!_251){
return;
}
if(this.parent){
this.parent.removeWidget(this);
}
this.addRemoveDefaultCssClass(false);
this.inherited(arguments);
if(this.parent){
this.parent.addWidget(this);
}
this.addRemoveDefaultCssClass(true);
},addWidget:function(_252){
this.widgets[_252.name]=_252;
var p=this.containerNode||this.domNode;
if(_252.domNode.parentNode!=p){
p.appendChild(_252.domNode);
}
},insertDomNodes:function(){
wm.forEachProperty(this.widgets,function(w,name){
w.insertDomNodes();
});
var _253=this.getParentPage();
try{
var a=1;
if((!_253||_253._disableRendering)&&this.invalidCss){
this.renderCss();
this.invalidCss=false;
}
var p=this.containerNode||this.parentNode||this.parent.domNode;
if(this.domNode.parentNode!=p&&this.domNode.parentNode!=window.document.body){
p.appendChild(this.domNode);
}
}
catch(e){
}
},leafFirstRenderCss:function(){
wm.forEachProperty(this.widgets,function(w,name){
w.leafFirstRenderCss();
});
if(this.invalidCss){
this.render(1);
}
},removeWidget:function(_254){
if(this.widgets){
delete this.widgets[_254.name];
}
},adjustChildProps:function(_255,_256){
if(wm.isClassInstanceType(_255,wm.Control)){
dojo.mixin(_256,{owner:this._assignChildrenToOwner||this.owner,parent:this});
}else{
this.inherited(arguments);
}
},doSetSizeBc:function(){
if(this.sizeUnits=="flex"){
this.setFlex(this.size);
}else{
if(this.sizeUnits){
var b=this.getParentBox(),p={v:"height",h:"width"}[b];
this.setSizeProp(p,this.size+this.sizeUnits);
}else{
if(this.flex){
this.setFlex(this.flex);
}
}
}
},setFlex:function(_257){
var box=this.getParentBox();
if(box){
var ex={h:"width",v:"height"}[box];
this.setSizeProp(ex,_257*100+"%");
this._boundsDirty=true;
}else{
this.setSizeProp("width",_257*100+"%");
this.setSizeProp("height",_257*100+"%");
}
},getScrollMargins:function(){
if(wm.isMobile){
return {w:(this.scrollY||this._xscrollY)?2:0,h:(this.scrollX||this._xscrollX)?2:0};
}else{
return {w:(this.scrollY||this._xscrollY)?17:0,h:(this.scrollX||this._xscrollX)?17:0};
}
},isReflowEnabled:function(){
if(this._cupdating){
return false;
}
if(this.owner){
if(wm.isInstanceType(this.owner,wm.Control)){
return this.owner.isReflowEnabled();
}else{
return !this.owner._loadingPage;
}
}
return true;
},padBorderMarginChanged:function(){
this.inherited(arguments);
if(!this._doingAutoSize){
this._needsAutoSize=true;
}
if(this.isReflowEnabled()){
if(this.parent){
this.parent.reflow();
}else{
this.render();
wm.fire(this,"flow");
}
}
},boundsResized:function(){
var box=dojo.marginBox(this.dom.node);
if(this.bounds.w!=box.w){
this.width=this.bounds.w+"px";
}
if(this.bounds.h!=box.h){
this.height=this.bounds.h+"px";
}
this.updateBounds();
},updateBounds:function(){
this._percEx={w:0,h:0};
var su=wm.splitUnits(this.width);
var w=su.value;
switch(su.units){
case "flex":
w*=100;
this._percEx.w=w;
this.width=w+"%";
w=NaN;
break;
case "em":
w*=18;
this.width=w+"px";
break;
case "%":
this._percEx.w=w;
w=NaN;
break;
}
su=wm.splitUnits(this.height);
var h=su.value;
switch(su.units){
case "flex":
h*=100;
this._percEx.h=h;
this.height=h+"%";
h=NaN;
break;
case "em":
h*=h*18;
this.height=h+"px";
break;
case "%":
this._percEx.h=h;
h=NaN;
break;
}
this.setBounds(NaN,NaN,w,h);
},getParentBox:function(){
var n=(this.domNode||0).parentNode;
return n&&(n.box||(n.getAttribute&&n.getAttribute("box")))||(this.parent||0).box||"";
},adjustSetSizeProp:function(n,v){
return v;
},setSizeProp:function(n,v,_258){
var _259="min"+wm.capitalize(n);
var _25a="getMin"+wm.capitalize(n)+"Prop";
var _25b=!wm.isMobile&&_258||this[_25a]();
v=this.adjustSetSizeProp(n,v);
if(this[n]==v&&this[_259]==_258){
if(v.match(/px/)&&parseInt(v)!=this.bounds[(n=="height")?"h":"w"]){
}else{
return;
}
}
this[n]=v;
this[_259]=_258;
if(!this._doingAutoSize){
this._needsAutoSize=true;
if(this.autoSizeHeight&&n=="height"){
this.autoSizeHeight=false;
}
if(this.autoSizeWidth&&n=="width"){
this.autoSizeWidth=false;
}
}
if(this.designWrapper){
this.designWrapper.invalidCss=true;
}
if(!this._loading){
this.updateBounds();
}
if(this.isReflowEnabled()&&this.showing){
this.reflowParent();
if(this._isDesignLoaded&&this.parent instanceof wm.Container){
var _25c=this.parent;
wm.job(_25c.getRuntimeId()+".designResize",50,function(){
_25c.designResizeForNewChild();
});
}
}
},setWidth:function(_25d){
this.setSizeProp("width",_25d,this.minWidth);
},setHeight:function(_25e){
this.setSizeProp("height",_25e,this.minHeight);
},setMinWidth:function(_25f){
_25f=(_25f)?parseInt(_25f):0;
this.setSizeProp("width",this.width,_25f);
},setMinHeight:function(_260){
_260=(_260)?parseInt(_260):0;
this.setSizeProp("height",this.height,_260);
},getMinWidthProp:function(){
return parseInt(this.minWidth)||30;
},getMinHeightProp:function(){
return parseInt(this.minHeight)||15;
},setMaxHeight:function(_261){
_261=parseInt(_261)||0;
this.maxHeight=_261;
if(_261>this.bounds.h){
this.reflowParent();
}
},getDomHeight:function(){
return dojo.coords(this.domNode,false).h;
},getDomWidth:function(){
return dojo.coords(this.domNode,false).w;
},doAutoSize:function(_262,_263){
if(this._doingAutoSize||!this.autoSizeHeight&&!this.autoSizeWidth){
return;
}
if(!_263&&!this._needsAutoSize){
return;
}
if(this.isAncestorHidden()){
return;
}
this._doingAutoSize=true;
this._needsAutoSize=false;
if(this.autoSizeWidth){
this.domNode.style.width="";
var neww=dojo.coords(this.domNode).w;
if(this.minWidth&&this.minWidth>neww){
neww=this.minWidth;
}
if(_262){
this.setWidth(neww+"px");
}else{
this.bounds.w=neww;
this.domNode.style.width=neww+"px";
}
}
if(this.autoSizeHeight){
this.domNode.style.height="";
var newh=dojo.coords(this.domNode).h;
if(this.minHeight&&this.minHeight>neww){
newh=this.minHeight;
}
if(_262){
this.setHeight(newh+"px");
}else{
this.bounds.h=newh;
this.domNode.style.height=newh+"px";
}
}
if(this.isDesignLoaded()&&studio.designer.selected==this){
setTimeout(dojo.hitch(studio.inspector,"reinspect"),100);
}
this._doingAutoSize=false;
},setAutoSizeWidth:function(_264){
this.autoSizeWidth=_264;
if(this.autoSizeWidth){
if(this._percEx.w){
this.width=this.bounds.w+"px";
this._percEx.w=0;
}
this.doAutoSize(1,1);
}
},setAutoSizeHeight:function(_265){
this.autoSizeHeight=_265;
if(this.autoSizeHeight){
if(this._percEx.h){
this.height=this.bounds.h+"px";
this._percEx.h=0;
}
this.doAutoSize(1,1);
}
},disruptChromeOverflow:function(_266){
},render:function(_267){
if(_267||this.isReflowEnabled()){
this.renderCss();
}else{
this.invalidCss=true;
}
return true;
},renderCss:function(){
if(!this.invalidCss){
return;
}
this.invalidCss=false;
var _268=this.buildCssSetterObj();
if(!this.renderedOnce&&(dojo.isFF||dojo.isSafari||dojo.isChrome)){
this.setCssViaCssText(_268);
this.renderedOnce=1;
}else{
this.setCssViaDom(_268);
}
if(!this.noRenderBounds){
this.renderBounds();
}
},buildCssSetterObj:function(){
if(!this._appliedStyles){
this._appliedStyles={};
}
var _269=this.getCssSplitter(this.margin);
var _26a=this.getCssSplitter(this.padding);
var _26b=this.getCssSplitter(this.border);
if(this.margin.indexOf(",")==-1&&this.margin.indexOf(" ")!=-1){
_269=" ";
}
var _26c=this.padding.split(_26a);
var _26d=((this.autoScroll||this._xscrollX||this._xscrollY)&&(!wm.isFakeMobile||this instanceof wm.Container==false)?"auto":"hidden");
var _26e;
var _26f=(this.margin||"0").split(_269);
var _270=(this.border||"0").split(_26b);
var _271=(this.padding||"0").split(_26a);
if(_26f.length==1){
_26f[1]=_26f[2]=_26f[3]=_26f[0];
}else{
if(_26f.length==2){
_26f[2]=_26f[0];
_26f[3]=_26f[1];
}
}
if(_270.length==1){
_270[1]=_270[2]=_270[3]=_270[0];
}else{
if(_270.length==2){
_270[2]=_270[0];
_270[3]=_270[1];
}
}
if(_271.length==1){
_271[1]=_271[2]=_271[3]=_271[0];
}else{
if(_271.length==2){
_271[2]=_271[0];
_271[3]=_271[1];
}
}
if(app._currentZoomLevel&&app._currentZoomLevel>1&&app._currentZoomLevel<1.4){
for(var i=0;i<_26f.length;i++){
if(_26f[i]%10){
_26f[i]*=app._currentZoomLevel;
}
}
for(var i=0;i<_271.length;i++){
if(_271[i]%10){
_271[i]*=app._currentZoomLevel;
}
}
for(var i=0;i<_270.length;i++){
if(_270[i]%10){
_270[i]*=app._currentZoomLevel;
}
}
}
if(this.designBorderState){
_26e={margin:(_26f.join("px ")||0)+"px",padding:(_271.join("px ")||0)+"px",backgroundColor:this.backgroundColor,overflowX:this.scrollX?"auto":_26d,overflowY:this.scrollY?"auto":_26d};
var _272="",_273="",_274="";
if(this.designBorderState.t){
_272+="1px ";
_273+="dashed ";
_274+="#C1C1C1 ";
}else{
_272+=this.borderExtents.t+"px ";
_273+="solid ";
_274+=this.borderColor+" ";
}
if(this.designBorderState.r){
_272+="1px ";
_273+="dashed ";
_274+="#C1C1C1 ";
}else{
_272+=this.borderExtents.r+"px ";
_273+="solid ";
_274+=this.borderColor+" ";
}
if(this.designBorderState.b){
_272+="1px ";
_273+="dashed ";
_274+="#C1C1C1 ";
}else{
_272+=this.borderExtents.b+"px ";
_273+="solid ";
_274+=this.borderColor+" ";
}
if(this.designBorderState.l){
_272+="1px";
_273+="dashed";
_274+="#C1C1C1";
}else{
_272+=this.borderExtents.l+"px";
_273+="solid";
_274+=this.borderColor;
}
_26e.borderStyle=_273;
_26e.borderColor=_274;
_26e.borderWidth=_272;
}else{
var _275=this._isDesignLoaded?studio.currentDeviceType:wm.device;
_26e={margin:(_26f.join("px ")||0)+"px",padding:(_271.join("px ")||0)+"px",borderStyle:"solid",borderWidth:(_270.join("px ")||0)+"px",borderColor:this.borderColor,backgroundColor:this.backgroundColor,overflowX:_275!="desktop"?"hidden":this.scrollX?"auto":_26d,overflowY:this.scrollY?"auto":_26d};
}
if(this.styles&&!wm.isEmpty(this.styles)){
_26e=dojo.mixin(_26e,this.styles);
}
return _26e;
},setCssViaCssText:function(_276){
if(!this.domNode){
return;
}
var _277=[];
var _278=["backgroundColor","padding","margin","borderTopWidth","borderTopStyle","borderTopColor","borderBottomWidth","borderBottomStyle","borderBottomColor","borderLeftWidth","borderLeftStyle","borderLeftColor","borderRightWidth","borderRightStyle","borderRightColor","overflowX","overflowY"];
wm.forEachProperty(_276,dojo.hitch(this,function(_279,_27a){
if(dojo.indexOf(_278,_27a)==-1){
if(_27a=="backgroundGradient"){
var _27b=_276.backgroundGradient;
if(_27b){
inValue=wm.getBackgroundStyle(_27b.startColor,_27b.endColor,_27b.colorStop,_27b.direction,"");
if(dojo.isIE<10){
_277.push("filter: "+inValue);
}else{
_277.push("background: "+inValue);
}
}
}else{
if(_27a=="borderRadius"){
var _27c="";
if(dojo.isWebKit){
_27c="-webkit-";
}
var _27d=String(_279).split(/\s+/);
inValue="";
for(var i=0;i<_27d.length;i++){
if(_27d[i].match(/^\d+$/)){
_27d[i]+="px";
}
}
if(_27d.length==1){
_27d[1]=_27d[2]=_27d[3]=_27d[0];
}
if(_27d.length==2){
_27d[3]=_27d[0];
_27d[2]=_27d[1];
}
if(_27d.length==3){
_27d[3]="0px";
}
_277.push(_27c+"border-top-left-radius: "+_27d[0]);
_277.push(_27c+"border-top-right-radius: "+_27d[1]);
_277.push(_27c+"border-bottom-left-radius: "+_27d[2]);
_277.push(_27c+"border-bottom-right-radius: "+_27d[3]);
}else{
if(_27a=="backgroundImage"){
if(this._isDesignLoaded&&(_279.indexOf("url")!=0&&_279.indexOf("http")!=0&&_279.indexOf("/")!=0)){
_279=this.getPath()+_279;
}
if(_279.indexOf("url")!=0){
_279="url("+_279+")";
}
}
_277.push(_27a.replace(/([A-Z])/g,function(_27e){
return "-"+_27e.toLowerCase();
})+":"+_279);
}
}
this._appliedStyles[_27a]=_279;
}
}));
_277.push("margin:"+_276.margin);
_277.push("padding:"+_276.padding);
_277.push("border-style:"+_276.borderStyle);
_277.push("border-width:"+_276.borderWidth);
_277.push("border-color:"+_276.borderColor);
if(_276.backgroundColor){
_277.push("background-color:"+_276.backgroundColor);
}
_277.push("overflow-x:"+_276.overflowX);
_277.push("overflow-y:"+_276.overflowY);
if(wm.isMobile&&dojo.isWebKit&&(_276.overflowY=="auto"||_276.overflowY=="scroll")){
_277.push("-webkit-overflow-scrolling: touch");
}
this.domNode.style.cssText+=_277.join(";");
},setCssViaDom:function(_27f){
if(!this.domNode){
return;
}
var s=this.domNode.style;
var _280=false;
wm.forEachProperty(_27f,dojo.hitch(this,function(_281,_282){
try{
if(this._appliedStyles[_282]!=_281){
if(_282=="backgroundGradient"){
var _283=_27f[_282];
if(_283){
inValue=wm.getBackgroundStyle(_283.startColor,_283.endColor,_283.colorStop,_283.direction,"");
if(dojo.isIE<10){
s.filter=inValue;
}else{
s.background=inValue;
}
}
}else{
if(_282=="backgroundImage"){
if(this._isDesignLoaded&&(_281.indexOf("url")!=0&&_281.indexOf("http")!=0&&_281.indexOf("/")!=0)){
_281=this.getPath()+_281;
}
if(_281.indexOf("url")!=0){
_281="url("+_281+")";
}
}
s[_282]=_281;
this._appliedStyles[_282]=_281;
}
}
if(wm.isMobile&&dojo.isWebKit&&(s.overflowY=="scroll"||s.overflowY=="auto")){
s.WebkitOverflowScrolling="touch";
}
}
catch(e){
console.error("Invalid style for "+this.name+"; "+_282+": "+_27f[_282]);
}
}));
},getCssSplitter:function(_284){
var _285=",";
if(_284){
_284=dojo.trim(String(_284));
if(_284.indexOf(",")==-1&&_284.indexOf(" ")!=-1){
_285=" ";
}
}
return _285;
},renderBounds:function(){
var _286=false;
if(this.dom){
var b=this.getStyleBounds();
_286=this.dom.setBox(b,wm.AbstractEditor&&this.singleLine&&this instanceof wm.AbstractEditor==false);
}
if(this.designWrapper){
this.designWrapper.controlBoundsChange();
this.designWrapper.renderBounds();
}
return _286;
},reflow:function(){
},reflowParent:function(){
wm.fire(this.parent,"reflow");
},setScrollX:function(_287){
this.scrollX=_287;
this.invalidCss=true;
this.render();
this.reflowParent();
},setScrollY:function(_288){
this.scrollY=_288;
this.invalidCss=true;
this.render();
this.reflowParent();
},setAutoScroll:function(_289){
this.autoScroll=_289;
if(_289){
if(this.isDesignLoaded()&&(this.scrollX||this.scrollY)){
this.scrollX=false;
this.scrollY=false;
if(dojo.indexOf(studio.designer.selected,this)!=-1){
studio.inspector.reinspect();
}
}
}
this.noRenderBounds=true;
this.invalidCss=true;
this.renderCss();
delete this.noRenderBounds;
},show:function(){
this.setValue("showing",true);
},hide:function(){
this.setValue("showing",false);
},disable:function(){
this.setValue("disabled",true);
},enable:function(){
this.setValue("disabled",false);
},toString:function(_28a){
var t=_28a||"";
if(!this.showing){
t+=" ("+wm.getDictionaryItem("wm.Control.toString_HIDDEN")+")";
}
return this.inherited(arguments,[t]);
},setParent:function(_28b){
var _28c=this.parent;
var _28d=this.parent=_28b;
if(_28b&&_28b.containerWidget&&_28b.containerWidget.owner==_28b&&!wm.isInstanceType(_28b.containerWidget.owner,wm.Composite)){
_28d=this.parent=_28b.containerWidget;
}
if(_28c&&_28c!=_28d&&!_28c.isDestroyed){
_28c.removeWidget(this);
if(_28c.removeControl){
_28c.removeControl(this);
}
}
if(!this._cupdating){
if(_28d){
this.appendDOMNode(_28d);
}else{
if(this.domNode&&this.domNode.parentNode){
this.domNode.parentNode.removeChild(this.domNode);
}
}
}
if(_28d&&_28c){
dojo.publish("wmwidget-parentChange",[_28c,_28d,this]);
}
if((this._isDesignLoaded===undefined?this.isDesignLoaded():this._isDesignLoaded)&&this.owner==studio.page&&!this.owner._loadingPage&&_28b instanceof wm.Container){
wm.job(_28b.getRuntimeId()+".designResize",50,function(){
_28b.designResizeForNewChild();
});
}
},appendDOMNode:function(_28e){
var _28f=_28e;
if(_28f){
_28f.addWidget(this);
if(_28f.addControl){
_28f.addControl(this);
}
}else{
if(this.parentNode&&this.domNode){
var node=this.parentNode;
node.appendChild(this.domNode);
}
}
},getIndexInParent:function(){
if(this.parent&&this.parent instanceof wm.Container){
return this.parent.indexOfControl(this);
}
return -1;
},setIndexInParent:function(_290){
if(this.parent){
this.parent.moveControl(this,_290);
}
},canChangeShowing:function(){
return true;
},setShowing:function(_291,_292){
var s=Boolean(_291);
if(!this.canChangeShowing()){
return;
}
if(this._isDesignLoaded&&this.$.binding&&this.$.binding.wires.showing){
s=true;
}
if(_292||this.showing!=s){
this.showing=s;
this.domNode.style.display=s?"":"none";
this.reflowParent();
}
},setDisabled:function(_293){
var d=Boolean(_293);
this.disabled=d;
this._disabled=d||this._parentDisabled;
wm.forEachProperty(this.widgets,dojo.hitch(this,function(w,name){
w.setParentDisabled(this._disabled);
}));
if(this.c$){
dojo.forEach(this.c$,function(w){
if(!w.name){
w.setParentDisabled(this._disabled);
}
},this);
}
dojo.toggleClass(this.domNode,"Disabled",this._disabled);
},setParentDisabled:function(_294){
this._parentDisabled=_294;
this.setDisabled(this.disabled);
},setBackgroundColor:function(_295){
this.backgroundColor=_295;
this.invalidCss=true;
this.render();
},setBorderColor:function(_296){
this.borderColor=_296;
this.invalidCss=true;
this.render();
},addRemoveDefaultCssClass:function(_297){
if(this.owner){
dojo[_297?"addClass":"removeClass"](this.domNode,this.owner.declaredClass+"-"+this.name);
}
},getUserNodeClasses:function(_298){
var _299=this._classes;
for(var i in _299){
if(_298==i){
return _299[i].join(" ");
}
}
return "";
},initUserClasses:function(){
if(dojo.isArray(this._classes)){
this._classes={domNode:this._classes};
}
var _29a=this._classes;
for(var i in _29a){
this.initUserNodeClasses(_29a[i],i);
}
},initUserNodeClasses:function(_29b,_29c){
var k=_29b||[],n=this[_29c];
if(n){
dojo.addClass(n,k.join(" "));
}
},addUserClass:function(_29d,_29e){
_29e=_29e||"domNode";
var cs=this._classes[_29e]=this._classes[_29e]||[];
cs.push(_29d);
var n=this[_29e];
if(n){
dojo.addClass(n,_29d);
}
},removeUserClass:function(_29f,_2a0){
_2a0=_2a0||"domNode";
var n=this[_2a0];
if(n){
dojo.removeClass(n,_29f);
}
var cs=this._classes[_2a0]||[];
for(var i=0,c;c=cs[i];i++){
if(c==_29f){
cs.splice(i--,1);
}
}
if(!cs.length){
delete this._classes[_2a0];
}
},setStyle:function(_2a1,_2a2){
if(_2a2===undefined||_2a2===null){
_2a2="";
}
if(_2a1=="border"||_2a1=="borderColor"||_2a1=="margin"||_2a1=="padding"){
return this.setProp(_2a1,_2a2);
}
if(!this.styles){
this.styles={};
}
if(_2a2===null||_2a2===undefined||_2a2===""){
delete this.styles[_2a1];
}else{
this.styles[_2a1]=_2a2;
}
switch(_2a1){
case "backgroundGradient":
if(_2a2){
_2a2=wm.getBackgroundStyle(_2a2.startColor,_2a2.endColor,_2a2.colorStop,_2a2.direction,"");
}else{
_2a2="";
}
if(dojo.isIE<10){
this.domNode.style.filter=_2a2;
}else{
this.domNode.style.background=_2a2;
}
break;
case "borderRadius":
var _2a3;
if(dojo.isWebKit){
_2a3="Webkit";
}
if(_2a3){
_2a3+="B";
}else{
_2a3="b";
}
var _2a4=String(_2a2).split(/\s+/);
_2a2="";
for(var i=0;i<_2a4.length;i++){
if(_2a4[i].match(/^\d+$/)){
_2a4[i]+="px";
}
}
if(_2a4.length==1){
_2a4[1]=_2a4[2]=_2a4[3]=_2a4[0];
}
if(_2a4.length==2){
_2a4[3]=_2a4[0];
_2a4[2]=_2a4[1];
}
if(_2a4.length==3){
_2a4[3]="0px";
}
this.domNode.style[_2a3+"orderTopLeftRadius"]=_2a4[0];
this.domNode.style[_2a3+"orderTopRightRadius"]=_2a4[1];
this.domNode.style[_2a3+"orderBottomLeftRadius"]=_2a4[2];
this.domNode.style[_2a3+"orderBottomRightRadius"]=_2a4[3];
break;
case "backgroundImage":
if(this._isDesignLoaded&&(_2a2.indexOf("url")!=0&&_2a2.indexOf("http")!=0&&_2a2.indexOf("/")!=0)){
_2a2=this.getPath()+_2a2;
}
if(_2a2.indexOf("url")!=0){
_2a2="url("+_2a2+")";
}
this.domNode.style[_2a1]=_2a2;
break;
default:
this.domNode.style[_2a1]=_2a2;
}
},getStyle:function(_2a5){
if(_2a5=="border"||_2a5=="borderColor"||_2a5=="margin"||_2a5=="padding"){
return this.getProp(_2a5);
}else{
if(!this.styles){
return "";
}else{
return this.styles[_2a5]!==undefined?this.styles[_2a5]:"";
}
}
},getOrderedWidgets:function(){
return [];
},updatingEvent:function(prop,_2a6){
},onRightClick:function(_2a7){
},onMouseOver:function(_2a8){
},onMouseOut:function(_2a9){
},toHtml:function(){
return "";
},toHtmlStyles:function(){
var _2aa="";
if(this.styles){
wm.forEachProperty(this.styles,function(_2ab,name){
if(_2aa){
_2aa+=";";
}
_2aa+=name.replace(/([A-Z])/g,function(_2ac){
return "-"+_2ac.toLowerCase();
})+": "+_2ab;
});
if(_2aa){
_2aa="style='"+_2aa+"'";
}
}
return _2aa;
},customToHtml:function(_2ad){
return "";
},print:function(){
var html=this.toHtml(725);
var _2ae=dojo.moduleUrl("wm.base.widget.themes.default").path+"print.css";
var _2af=dojo.moduleUrl("wm.base.styles").path+"wavemaker.css";
var page=this.getParentPage();
if(page){
var name=page.declaredClass;
var css=wm.load("pages/"+name+"/"+name+".css");
}
html="<html><head><title>Printing "+app.declaredClass+"</title><link rel='stylesheet' type='text/css' href='"+_2ae+"' /><link rel='stylesheet' type='text/css' href='"+_2af+"'/><link rel='stylesheet' href='print.css'/>"+(css?"<style>"+css+"</style>":"")+"</head><body onload='print()'>"+html+"</body><html>";
var win=window.open("","Printing");
if(win){
win.document.open("text/html");
win.document.write(html);
win.document.close();
}
},setHint:function(_2b0){
this.hint=_2b0;
if(_2b0){
this.createMouseOverConnect();
this.createMouseOutConnect();
}
},createMouseOverConnect:function(){
if(this.findConnection("onmouseover")){
return;
}
var self=this;
this.connect(this.domNode,"onmouseover",function(e){
wm.job(self.getRuntimeId()+"MouseOverEvents",50,function(){
self.mouseOver(e);
});
});
},createMouseOutConnect:function(){
if(this.findConnection("onmouseout")){
return;
}
var self=this;
this.connect(this.domNode,"onmouseout",function(e){
wm.job(self.getRuntimeId()+"MouseOverEvents",50,function(){
self.mouseOut(e);
});
});
},mouseOver:function(_2b1){
if(this.hint){
var self=this;
wm.cancelJob("app.hint");
var _2b2=(app.toolTipDialog&&app.toolTipDialog.showing);
wm.job("app.hint",_2b2?0:app.hintDelay,function(){
if(!self.isAncestorHidden()){
app.createToolTip(self.hint,self.domNode,_2b1,self);
}
});
}
this.onMouseOver(_2b1);
dojo.stopEvent(_2b1);
},mouseOut:function(_2b3){
if(this.hint&&app.toolTipDialog&&(app.toolTipDialog.showing||wm.hasJob("app.hint"))){
var self=this;
wm.job("app.hint",500,function(){
if(self==app.toolTipDialog.tipOwner){
app.hideToolTip();
}
});
}
this.onMouseOut(_2b3);
dojo.stopEvent(_2b3);
},onMouseOver:function(_2b4){
},onMouseOut:function(_2b5){
},getParentForm:function(){
var w=this.parent;
var r=this.getRoot();
r=r&&r.root;
while(w&&w!=r){
if(wm.isInstanceType(w,[wm.LiveFormBase,wm.DataForm])){
return w;
}
w=w.parent;
}
},setImageList:function(_2b6){
this.imageList=_2b6;
this.imageListChanged();
},setImageIndex:function(_2b7){
if(_2b7!==undefined){
this.imageIndex=Number(_2b7);
this.imageListChanged();
}
},imageListChanged:function(){
var iln=this.findImageList();
this._imageList=iln?iln instanceof wm.ImageList?iln:this.owner.getValueById(iln):null;
this.invalidCss=true;
this.render(true,true);
if(this._isDesignLoaded&&this._imageList&&!this._renameSubscription){
this._renameSubscription=this.subscribe("wmwidget-rename",dojo.hitch(this,function(_2b8,_2b9,_2ba){
if(_2ba==this._imageList){
this.imageList=_2ba.getId();
this.imageListChanged();
}
}));
}
},getCurrentImageIndex:function(){
return this.imageIndex;
},findImageList:function(){
var t=this;
while(t&&!t.imageList){
t=t.parent;
}
return t?t.imageList:null;
},update:function(){
this.show();
if(this.parent){
this.parent.update();
}
}});
dojo.declare("wm.TouchMixin",null,{addTouchListener:function(_2bb){
if(!this._subscriptions){
this._subscriptions=[];
this._connections=[];
this._debugSubscriptions=[];
this.subscribe=function(){
wm.Component.prototype.subscribe.apply(this,arguments);
};
this.connect=function(){
wm.Component.prototype.connect.apply(this,arguments);
};
this.disconnectEvent=function(){
wm.Component.prototype.disconnectEvent.apply(this,arguments);
};
}
this.connect(_2bb||this.domNode,wm.isFakeMobile?"mousedown":"touchstart",this,"_onTouchStart");
if(!wm.isFakeMobile){
this.connect(_2bb||this.domNode,"touchmove",this,"_onTouchMove");
this.connect(_2bb||this.domNode,"touchend",this,"_onTouchEnd");
}
this.subscribe("wmTouchMove",dojo.hitch(this,function(){
wm.cancelJob(this.getRuntimeId()+".longClick");
}));
},_onTouchStart:function(e){
this._touchMoved=false;
var _2bc;
if(e.targetTouches){
if(e.targetTouches.length){
this._touchStartY=e.targetTouches[0].clientY;
this._touchStartX=e.targetTouches[0].clientX;
_2bc=e.targetTouches[0].target;
}
}else{
if("clientY" in e){
this._touchStartY=e.clientY;
this._touchStartX=e.clientX;
_2bc=e.target;
this.connect(document.body,"mousemove",this,"_onTouchMove");
this.connect(document.body,"mouseup",this,"_onTouchEnd");
}else{
delete this._touchStartY;
delete this._touchStartX;
}
}
if("_touchStartY" in this){
this._touchLastY=this._touchStartY;
this._touchLastX=this._touchStartX;
if(this.onTouchStart(e,_2bc)){
this.disconnectEvent("mousemove");
this.disconnectEvent("mouseup");
}else{
wm.job(this.getRuntimeId()+".longClick",1000,this,"_onLongTouch");
}
}
},_onLongTouch:function(){
this.onLongTouch(this._touchStartX,this._touchStartY);
this._onTouchEnd(null,this.onLongTouch!=wm.TouchMixinOptional.prototype.onLongTouch);
},onTouchStart:function(_2bd){
},_onTouchMove:function(e){
var _2be,_2bf,_2c0,_2c1;
if(e.targetTouches){
if(e.targetTouches.length!=1){
return false;
}
_2be=e.targetTouches[0].clientY-this._touchStartY;
_2bf=e.targetTouches[0].clientY-this._touchLastY;
_2c0=e.targetTouches[0].clientX-this._touchStartX;
_2c1=e.targetTouches[0].clientX-this._touchLastX;
this._touchLastY=e.targetTouches[0].clientY;
this._touchLastX=e.targetTouches[0].clientX;
}else{
_2be=e.clientY-this._touchStartY;
_2bf=e.clientY-this._touchLastY;
_2c0=e.clientX-this._touchStartX;
_2c1=e.clientX-this._touchLastX;
this._touchLastY=e.clientY;
this._touchLastX=e.clientX;
}
var posY=this._touchStartY+_2be;
var posX=this._touchStartX+_2c0;
if(!this._touchMoved&&(Math.abs(_2be)>5||Math.abs(_2c0)>5)){
this._touchMoved=true;
wm.cancelJob(this.getRuntimeId()+".longClick");
}
if(this._touchMoved){
this.onTouchMove(e,posY,_2be,_2bf,posX,_2c0,_2c1);
}
},onTouchMove:function(_2c2,_2c3,_2c4,_2c5,_2c6,_2c7,_2c8){
},_onTouchEnd:function(e,_2c9){
wm.cancelJob(this.getRuntimeId()+".longClick");
this.disconnectEvent("mousemove");
this.disconnectEvent("mouseup");
if(!_2c9){
this.onTouchEnd(e,this._touchMoved);
if(!this._touchMoved){
this.onTouch(this._touchStartX,this._touchStartY);
}
}
},onTouchEnd:function(_2ca,_2cb){
},onTouch:function(posX,posY){
},onLongTouch:function(posX,posY){
}});
dojo.declare("wm.TouchScrollMixin",wm.TouchMixin,{onTouchStart:function(_2cc){
this._touchTime=new Date().getTime();
if(this._touchAnimationId){
window.clearInterval(this._touchAnimationId);
}
},onTouchMove:function(_2cd,_2ce,_2cf,_2d0,_2d1,_2d2,_2d3){
var node=this._scrollNode||this.domNode;
node.scrollTop-=_2d0;
var _2d4=new Date().getTime();
if(this._touchTime!=_2d4){
this._touchVelocity=_2d0/(this._touchTime-_2d4);
this._touchTime=_2d4;
}
dojo.stopEvent(_2cd);
},onTouchEnd:function(_2d5,_2d6){
if(_2d6){
if(this._touchVelocity!=Infinity&&Math.abs(this._touchVelocity)>0.15){
if(this._touchAnimationId){
window.clearInterval(this._touchAnimationId);
}
this._touchAnimationId=window.setInterval(dojo.hitch(this,"_onAnimateScroll"),50);
}
}
},_onAnimateScroll:function(){
var node=this._scrollNode||this.domNode;
this._touchVelocity*=0.9;
var top=node.scrollTop;
node.scrollTop=node.scrollTop+this._touchVelocity*50;
var _2d7=node.scrollTop;
var diff=Math.abs(_2d7-top);
if(diff<=1){
window.clearInterval(this._touchAnimationId);
}
}});
if(wm.isMobile){
dojo.declare("wm.TouchMixinOptional",wm.TouchMixin,{});
}else{
dojo.declare("wm.TouchMixinOptional",null,{onLongTouch:function(posX,posY){
}});
}
if(wm.isIOS<=4||wm.isAndroid<=2||wm.isFakeMobile){
dojo.declare("wm.TouchScrollMixinOptional",wm.TouchScrollMixin,{});
}else{
dojo.declare("wm.TouchScrollMixinOptional",null,{});
}
wm.Widget=wm.Control;
dojo.declare("wm.Box",wm.Widget,{});
}
if(!dojo._hasResource["wm.base.Plugin"]){
dojo._hasResource["wm.base.Plugin"]=true;
dojo.provide("wm.base.Plugin");
wm.Plugin={targetClass:null,callerFactory:function(_2d8){
return function(_2d9,_2da){
var fn=_2d8[_2d9.callee.nom];
if(fn){
return fn.apply(this,_2da||_2d9||[]);
}
};
},plugin:function(_2db,_2dc,_2dd){
var _2de=[];
for(var p in _2dd){
if(dojo.isFunction(_2dd[p])&&_2dc.prototype[p]){
_2de[p]=_2dc.prototype[p];
}
}
_2dd[_2db+"Socket"]=this.callerFactory(_2de);
_2dc.extend(_2dd);
}};
}
if(!dojo._hasResource["wm.base.components.Variable"]){
dojo._hasResource["wm.base.components.Variable"]=true;
dojo.provide("wm.base.components.Variable");
wm.getRuntimeService=function(_2df){
var a=dojo.getObject("studio.wip.app")||app;
return wm.fire(a,"getRuntimeService");
};
wm.getRuntimeServiceDesignTime=function(_2e0){
var a=dojo.getObject("studio.wip.app")||app;
return wm.fire(a,"getRuntimeServiceDesignTime");
};
dojo.declare("wm.Variable",wm.Component,{json:"",type:"",saveInCookie:false,saveInPhonegap:false,isList:false,_updating:0,_dataSchema:{},_greedyLoadProps:false,_allowLazyLoad:true,cursor:0,_uniqueSubnardId:1,init:function(){
this.inherited(arguments);
if(this._isDesignLoaded){
this._subscriptions.push(dojo.subscribe("wmtypes-changed",this,"wmTypesChanged"));
}
},postInit:function(){
this.inherited(arguments);
this._inPostInit=true;
if(!this._subNard&&!this.$.binding){
new wm.Binding({name:"binding",owner:this});
}
this.setType(this.type,true);
if(window["PhoneGap"]&&this.saveInPhonegap){
var _2e1=window.localStorage.getItem(this.getRuntimeId());
if(_2e1){
this.json=_2e1;
}
}else{
if(this.saveInCookie){
var _2e1=dojo.cookie(this.getRuntimeId());
if(_2e1){
this.json=_2e1;
}
}
}
if(this.json){
this.setJson(this.json);
}else{
this._clearData();
}
this._inPostInit=false;
if(!this._updating&&this.$.binding){
this.$.binding.refresh();
}
if(this.isEmpty()){
this.notify();
}
},canSetType:function(_2e2){
if(this.dataSet&&this.dataSet.type==this.type){
wm.logging&&undefined;
return;
}
return true;
},setType:function(_2e3,_2e4){
this._hasChanged=false;
if(_2e3==this.declaredClass||this.owner instanceof wm.Variable&&_2e3==this.owner.declaredClass){
_2e3="";
}
if(!this.canSetType(_2e3)){
return;
}
var t=_2e3;
if(wm.isListType(t)){
this.isList=true;
if(t.substring(t.length-1)=="]"){
t=t.slice(1,-1);
}
}else{
if(!(this.data&&this.data._list)&&!this._inPostInit){
this.isList=false;
}
}
var _2e5;
if(this.type!=t){
_2e5=true;
}else{
if(this._isDesignLoaded){
_2e5=dojo.toJson(this._getSchemaForType(_2e3))!=dojo.toJson(this._dataSchema);
}
}
this._hasChanged=_2e5;
this.type=t;
if(this._proxy){
this._proxy.setType(this.type);
}
this.typeChanged(this.type);
if(this._query&&_2e5){
this._query.setType(this.type);
}
if(this.json&_2e5){
this.setJson(this.json);
}
if(!_2e4&&_2e5&&_2e3&&_2e3!="any"){
this.notify();
}
},set_type:function(_2e6){
this.setType(_2e6);
studio.reinspect();
},typeChanged:function(_2e7){
var t=_2e7;
var _2e8=wm.typeManager.getPrimitiveType(t)||!t||t=="wm.Variable";
this.isPrimitive=Boolean(_2e8);
var _2e9=this._getSchemaForType(t);
if(_2e9){
this.setDataSchema(_2e9);
}
},_getSchemaForType:function(_2ea){
var p=wm.typeManager.getPrimitiveType(_2ea);
if(this.isPrimitive){
return {dataValue:{type:p||"String"}};
}else{
return wm.typeManager.getTypeSchema(_2ea)||{dataValue:{type:p||"String",isList:this.isList}};
}
},setDataSchema:function(_2eb){
this._dataSchema=_2eb;
},setJson:function(_2ec){
this.json=_2ec;
try{
var d=eval("("+_2ec+")");
}
catch(e){
console.error("Json error in "+this.name+": "+e);
}
this.setData(d);
},hasList:function(){
return this.data&&("list" in this.data);
},getDataTypeInfo:function(_2ed){
return this._dataSchema[_2ed];
},listDataProperties:function(){
var list=this._listSchemaProperties({},this._dataSchema,"getDataTypeInfo");
for(var i in list){
list[i].bindable=true;
}
return list;
},beginUpdate:function(){
this._updating++;
},endUpdate:function(){
this._updating--;
},isUpdating:function(){
return this._updating>0;
},clearData:function(){
this._clearData();
this.setType(this.type,true);
if(this.type&&this.type!=this.declaredClass&&!this._initializing){
this.notify();
}
},_clearData:function(){
this._isNull=false;
this._nostub=false;
if(!this.data){
this.data={};
}
if(this.isList){
this.data={_list:[]};
}else{
var d;
for(var i in this.data){
d=this.data[i];
if(d instanceof wm.Variable&&!wm.typeManager.getLiveService(d.type)){
d._clearData();
}else{
delete this.data[i];
}
}
}
},_setNull:function(_2ee){
this._isNull=_2ee;
if(!_2ee&&this._subNard&&this.owner){
this.owner._setNull(_2ee);
}
},setData:function(_2ef){
if(window["PhoneGap"]&&this.saveInPhonegap||this.saveInCookie){
var _2f0=this.getParentPage();
if(_2f0&&_2f0._loadingPage&&!_2ef){
return;
}
}
if(_2ef instanceof wm.Variable){
_2ef=_2ef.getData();
}
this.onPrepareSetData(_2ef);
if(dojo.isArray(_2ef)){
this._setArrayData(_2ef);
}else{
if(this.isPrimitive){
this._setPrimitiveData(_2ef);
}else{
this._setObjectData(_2ef);
}
}
this.notify();
this.onSetData();
},onPrepareSetData:function(_2f1){
},onSetData:function(){
},notify:function(){
this.dataOwnerChanged();
this.dataChanged();
this.valueChanged("isEmpty",this.isEmpty());
if(this.isList){
this.valueChanged("count",this.getCount());
}
if(!this.isUpdating()&&this.queriedItems){
this.setQuery(this._query);
}
this.updatePermanentMemory();
},_setPrimitiveData:function(_2f2){
if(_2f2!==null&&typeof _2f2=="object"){
this.data=_2f2;
}else{
this.data={dataValue:_2f2};
}
this.isList=false;
},setIsList:function(_2f3){
if(_2f3&&!this.isList){
this.isList=true;
if(this.json&&!this.data._list){
this.setJson("["+this.json+"]");
}else{
if(wm.isEmpty(this.data)){
this._setArrayData([]);
}else{
var data=[];
data.push(this.getData());
this.setData(data);
}
}
}else{
if(!_2f3&&this.isList){
if(this.json){
this.setJson(dojo.toJson(this.getItem(0).getData()));
}else{
if(wm.isEmpty(this.data._list)){
this.setData(null);
}else{
this.setData(this.getItem(0));
}
}
}
}
},_setArrayData:function(_2f4){
if(wm.defaultTypes[this.type]&&_2f4.length&&typeof _2f4[0]!="object"){
_2f4=dojo.map(_2f4,function(v){
return {dataValue:v};
});
}
this.data={_list:_2f4};
this.isList=true;
this._isNull=_2f4.length==0;
},_setObjectData:function(_2f5){
this.beginUpdate();
this._clearData();
this.isList=false;
delete this.data._list;
var d,v,nv,_2f6=_2f5===null,_2f7=wm.isEmpty(_2f5);
for(var i in this._dataSchema){
d=this.data[i];
v=!_2f7?_2f5[i]:undefined;
nv=_2f6?null:v;
if(this._isVariableProp(i)){
if(d instanceof wm.Variable){
if(nv!==undefined){
d.beginUpdate();
d.setData(nv);
d.endUpdate();
}
}else{
if(v!==undefined){
this._setDataValue(i,v);
}
}
}else{
if(nv!==undefined){
this._setDataValue(i,nv);
}
}
}
this._setNull(_2f6);
this.endUpdate();
},getData:function(_2f8){
if(!this.data||this.disabled){
return;
}
if(this._isNull){
return null;
}else{
if(this.isList){
if(this.type=="byte"){
try{
if(this.data._list&&this.data._list[0] instanceof wm.Variable){
this.data._list[0]=this.data._list[0].data.dataValue;
}
this.data={dataValue:this.data._list.join("")};
}
catch(e){
this.data=null;
}
this.isList=false;
return dojo.clone(this.data);
}else{
if(wm.Variable.convertToHashMaps&&this.data._list&&wm.isHashMapType(this.type)){
var data={};
for(var i=0,l=this.getCount(),v;i<l;i++){
v=(this.getItem(i)||0).getData(_2f8);
data[v.name]=v.dataValue;
}
return data;
}else{
var data=[];
for(var i=0,l=this.getCount(),v;i<l;i++){
v=(this.getItem(i)||0).getData(_2f8);
if(v){
data.push(v);
}
}
return data;
}
}
}else{
if(_2f8&&this.isPrimitive&&this.data["dataValue"]!==undefined){
return this.data.dataValue;
}else{
if(this.isEmpty()){
return null;
}else{
var data={};
var _2f9=this.listDataProperties();
for(var i in _2f9){
var v=this.data[i];
if(wm.getDataConvertDates&&v instanceof Date){
v=v.getTime();
}else{
if(_2f9[i]&&_2f9[i].type=="Date"&&typeof v==="string"){
v=this.data[i]=new Date(v).getTime();
}
}
if(v!==undefined){
if(v instanceof wm.Variable){
if(v.isEmpty()){
v=null;
}else{
v=v.getData(_2f8);
}
}
if(v===undefined||(v!==null&&typeof v=="object"&&wm.isEmpty(v))){
continue;
}
data[i]=v;
}
}
if(!wm.isEmpty(data)){
return data;
}
}
}
}
}
},_getDataValue:function(n,_2fa){
if(!this.data){
this.data={};
}
var d,f;
if(this.isList){
f=this.getCursorItem();
d=f&&f.data;
}else{
d=this.data;
}
var v=d&&d[n],_2fb=this._dataSchema[n];
if(this._isVariableProp(n)&&(!v||(v._isStub&&v._isStub()))&&!_2fa){
v=d[n]=(f||this).marshallVariable(n,_2fb,v);
}else{
if(_2fb&&_2fb.type=="Date"){
v=d[n];
if(typeof v=="string"){
try{
v=d[n]=new Date(v).getTime();
}
catch(e){
}
}
}
}
return v;
},_setDataValue:function(n,v){
if(this._isNull&&v!==undefined){
this._setNull(false);
}
this.beginUpdate();
var o;
if(v===null||v===undefined){
o=this._getDataValue(n,true);
if(o===v){
this.endUpdate();
return;
}
}else{
o=this._getDataValue(n);
if(o===undefined&&v instanceof wm.Variable){
o=this.data[n]=this.createVariable({type:v.type,_subNard:true,name:n});
}
}
this.endUpdate();
if(!o&&v instanceof wm.Variable){
}
if(o instanceof wm.Variable){
if(this._updating){
o._updating++;
}
if(this.isList&&v instanceof wm.Variable&&!v.isList){
this.setIsList(false);
}
o.setData(v);
if(this._updating){
o._updating--;
}
return;
}
if(!(v instanceof wm.Variable)){
this.data[n]=v;
this.dataValueChanged(n,v);
}
},setDisabled:function(_2fc){
var _2fd=this.disabled;
this.disabled=Boolean(_2fc);
if(_2fd!=this.disabled){
this.notify();
}
},getCount:function(){
if(this._isNull){
return 0;
}
if(this.isList){
return (this.data&&this.data._list)?this.data._list.length:0;
}
return 1;
},getIsEmpty:function(){
return this.isEmpty();
},isEmpty:function(){
if(!this.data){
return true;
}
if(this.data._list){
return !Boolean(this.data._list.length);
}
for(var _2fe in this.data){
if(this.data[_2fe] instanceof wm.Variable){
if(!this.data[_2fe].isEmpty()){
return false;
}
}else{
if(this.data[_2fe]!=null){
return false;
}
}
}
return true;
},_isEmpty:function(obj){
for(var prop in obj){
if(obj.hasOwnProperty(prop)){
return false;
}
}
return true;
},_needItem:function(_2ff,_300){
if(_2ff>=this.getCount()&&_300===undefined){
return null;
}
var item=this.data._list[_2ff];
var data=_300;
if(!(item instanceof wm.Variable)){
data=_300||item;
item=this.createVariable({type:this.type,_subNard:true,itemIndex:_2ff});
this.data._list[_2ff]=item;
}
if(data!==undefined){
item.beginUpdate();
item.setData(data);
item.endUpdate();
}
return item;
},getItem:function(_301){
return this.isList&&this._needItem(_301)||!this.isList&&this;
},getItemData:function(_302){
if(!this.isList){
return;
}
var item=this.data._list[_302];
if(item instanceof wm.Variable){
return item.data;
}else{
return item;
}
},_populateItems:function(){
for(var i=0,c=this.getCount();i<c;i++){
this.getItem(i);
}
},forEach:function(_303){
var _304=this.getCount();
for(var i=0;i<_304;i++){
if(_303(this.getItem(i),i)===true){
break;
}
}
},map:function(_305){
var _306=[];
var _307=this.getCount();
for(var i=0;i<_307;i++){
_306.push(_305(this.getItem(i)));
}
return _306;
},filterItems:function(_308){
var _309=[];
this.forEach(function(item,_30a){
if(_308(item,_30a)){
_309.push(item.getData());
}
});
var v=new wm.Variable({type:this.type,owner:this});
v.setData(_309);
return v;
},sort:function(_30b){
this._populateItems();
var l=this.isList&&this.data&&this.data._list;
if(l){
if(typeof _30b=="function"){
l.sort(_30b);
}else{
l.sort(function(a,b){
var v1=a.getValue(_30b);
var v2=b.getValue(_30b);
return wm.compareStrings(v1,v2);
});
}
this.notify();
}
},setCursor:function(_30c){
this.cursor=Math.max(0,Math.min(this.getCount()-1,_30c));
this.notify();
},setNext:function(){
this.setCursor(this.cursor+1);
},setPrevious:function(){
this.setCursor(this.cursor-1);
},setFirst:function(){
this.setCursor(0);
},setLast:function(){
this.setCursor(this.getCount()-1);
},getIndexInOwner:function(){
if(this.owner instanceof wm.Variable&&this.owner.data._list){
return dojo.indexOf(this.owner.data._list,this);
}
return -1;
},getCursorItem:function(){
return this.getItem(this.cursor||0)||this;
},setItem:function(_30d,_30e){
this._setItem(_30d,_30e);
this.cursor=_30d;
this.notify();
},_setItem:function(_30f,_310){
if(this.isList){
this._needItem(_30f,_310);
}
this.onSetData();
},addItem:function(_311,_312){
this._addItem(_311,_312);
this.cursor=_312;
this.notify();
},_addItem:function(_313,_314){
if(this.isList){
var c=this.getCount();
if(_314>=0&&_314<c){
this.data._list.splice(_314,0,{});
}else{
_314=this.getCount();
}
this._setItem(_314,_313);
}
},removeItem:function(_315){
this._removeItem(_315);
this.cursor=0;
this.notify();
},_removeItem:function(_316){
if(this.isList){
this.data._list.splice(_316,1);
}
},getItemIndex:function(_317){
if(!this.isList){
return -1;
}
var list=(this.data||0)._list||[];
for(var i=0,l=list.length;i<l;i++){
if(_317==list[i]){
return i;
}
}
return -1;
},getItemIndexByPrimaryKey:function(_318,_319){
if(!this.isList||!_319||_319.length<1){
return -1;
}
var obj=_318;
if(obj instanceof wm.Variable){
obj=_318.getData();
}
var list=(this.data||0)._list||[];
for(var i=0,l=list.length;i<l;i++){
obj2=list[i] instanceof wm.Variable?list[i].getData():list[i];
var _31a=true;
for(var j=0;j<_319.length;j++){
var f=_319[j];
if(obj[f]!=obj2[f]){
_31a=false;
break;
}
}
if(_31a){
return i;
}
}
return -1;
},getQueriedItems:function(){
if(!this.queriedItems){
this.queriedItems=new wm.Variable({isList:true,type:this.type,name:"queriedItems"});
this.queriedItems.setOwner(this,true);
this.queriedItems.setDataSet(this);
}
return this.queriedItems;
},createQueryVar:function(){
if(this.owner instanceof wm.Variable==false){
this._query=new wm.Variable({type:this.type,isList:false,owner:this,name:"queryVar"});
}
},getQueryVar:function(){
if(!this._query){
this.createQueryVar();
}
return this._query;
},setQueryVar:function(_31b){
return this.setQuery(_31b);
},setQuery:function(_31c){
if(!this._query){
this.createQueryVar();
}
this._query.setData(_31c);
if(!this._query.isEmpty()){
return this.query(this._query.getData(),true);
}else{
this.getQueriedItems().setDataSet(this);
}
},query:function(_31d,_31e){
if(!this.isList){
return;
}
if(!_31d){
_31d={};
}
var _31f=_31d._maxResults||0;
delete _31d._maxResults;
var _320=this.getCount();
var _321=[];
if(_31d instanceof wm.Variable){
_31d=_31d.getData()||{};
}
for(var i=0;i<_320;i++){
var item=this.getItem(i);
if(this._queryItem(item,_31d,i)){
_321.push(item);
}
if(_31f){
if(_321.length>=_31f){
break;
}
}
}
if(_31e){
var v=this.getQueriedItems();
}else{
var v=new wm.Variable({type:this.type,isList:true,name:"QueryResults"});
v.setOwner(this,true);
}
v.setData(_321);
if(_31f){
_31d._maxResults=_31f;
}
return v;
},_queryItem:function(_322,_323,_324){
if(dojo.isArray(_323)){
return dojo.some(_323,function(_325){
return this._queryItem2(_322,_325,_324);
},this);
}else{
return this._queryItem2(_322,_323,_324);
}
},_queryItem2:function(_326,_327,_328){
var w="*";
for(var key in _327){
var _329=true;
var _32a=true;
var a=_326.getValue(key);
var b=_327[key];
if(typeof b=="function"){
return b(a);
}else{
if(b!==null&&typeof b=="object"&&wm.typeManager.isStructuredType(_326._dataSchema[key].type)){
var _32b=(!a||a instanceof wm.Variable&&a.isEmpty()||a instanceof wm.Variable===false&&wm.isEmpty(a));
var _32c=(!b||b instanceof wm.Variable&&b.isEmpty()||b instanceof wm.Variable===false&&wm.isEmpty(b));
if(_32b!=_32c){
return false;
}
if(_32b&&_32c){
continue;
}
if(a instanceof wm.Variable&&a.isList){
continue;
}else{
var _32d=this._queryItem(a,b,0);
if(!_32d){
return false;
}
continue;
}
}else{
if(typeof b=="boolean"){
if(Boolean(b)!=Boolean(a)){
return false;
}else{
continue;
}
}else{
var _32e=String(b);
if(_32e.charAt(0)==w){
b=b.substring(1);
_329=false;
}else{
if(_32e.charAt(0)==">"){
var _32f=false;
if(_32e.charAt(1)=="="){
_32f=true;
b=b.substring(2);
}else{
b=b.substring(1);
}
if(typeof a=="number"){
b=Number(b);
}else{
if(typeof a=="string"){
b=b.toLowerCase();
}
}
if(_32f){
if(a<b){
return false;
}
}else{
if(a<=b){
return false;
}
}
continue;
}else{
if(_32e.charAt(0)=="<"){
var _32f=false;
if(_32e.charAt(1)=="="){
_32f=true;
b=b.substring(2);
}else{
b=b.substring(1);
}
if(typeof a=="number"){
b=Number(b);
}else{
if(typeof a=="string"){
b=b.toLowerCase();
}
}
if(_32f){
if(a>b){
return false;
}
}else{
if(a>=b){
return false;
}
}
continue;
}else{
if(_32e.charAt(0)=="!"){
b=b.substring(1);
if(typeof a=="number"){
b=Number(b);
}else{
if(typeof a=="string"){
b=b.toLowerCase();
}
}
var _330=true;
}
}
}
}
}
}
}
if(b==w){
if(_330){
return false;
}else{
continue;
}
}
if(dojo.isString(a)&&dojo.isString(b)){
if(b.charAt(b.length-1)==w){
b=b.slice(0,-1);
_32a=false;
}
a=a.toLowerCase();
b=b.toLowerCase();
var _331=a.indexOf(b);
var _332=true;
if(_331==-1){
_332=false;
}else{
if(_329&&_32a&&a!=b){
_332=false;
}else{
if(_329&&!_32a&&_331>0){
_332=false;
}else{
if(!_329&&_32a&&a.lastIndexOf(b)+b.length!=a.length){
_332=false;
}
}
}
}
if(_330){
_332=!_332;
}
if(!_332){
return false;
}
}else{
if(a!==b){
if(_330){
continue;
}else{
return false;
}
}else{
if(_330){
return false;
}
}
}
}
return true;
},dataRootChanged:function(){
if(this._subNard||!this.owner){
return;
}
var o=this.owner,p,root=this.getRoot();
while(o&&o!=root){
p=o;
o=o&&o.owner;
}
var n=p?p.getRuntimeId():this.getRuntimeId();
var _333=n+"-rootChanged";
wm.logging&&undefined;
dojo.publish(_333,[n]);
var root=this.getRoot().getRuntimeId();
if(root&&root.indexOf(".")&&n.indexOf(root)==0){
var tmpn=n.substring(root.length);
tmpn=root.substring(root.lastIndexOf(".")+1)+tmpn;
var _334=tmpn+"-rootChanged";
if(_334!=_333){
wm.logging&&undefined;
dojo.publish(_334,[n]);
}
}
wm.logging&&undefined;
},dataOwnerChanged:function(){
if(this._updating||!this.owner){
return;
}
var n=this.getRuntimeId();
if(!n){
return;
}
var _335=n+"-ownerChanged";
wm.logging&&undefined;
dojo.publish(_335,[n]);
var root=this.getRoot();
if(!root){
return;
}
var _336=root.getRuntimeId();
while(_336&&_336.indexOf(".")&&n.indexOf(_336)==0){
var tmpn=n.substring(_336.length);
tmpn=_336.substring(_336.lastIndexOf(".")+1)+tmpn;
var _337=tmpn+"-ownerChanged";
if(_337!=_335){
wm.logging&&undefined;
dojo.publish(_337,[n]);
_336=tmpn;
}else{
break;
}
}
wm.logging&&undefined;
if(this._allowLazyLoad){
this.dataRootChanged();
}
var v=this.getCursorItem();
for(var i in v.data){
wm.fire(v.data[i],"dataOwnerChanged");
}
},dataChanged:function(){
if(this._updating||!this.owner){
return;
}
var id=this.getRuntimeId();
if(!id){
return;
}
var _338=[id,"-changed"].join("");
wm.logging&&undefined;
dojo.publish(_338,[this]);
var root=this.getRoot();
if(!root){
return;
}
var _339=root.getRuntimeId();
if(_339&&_339.indexOf(".")&&id.indexOf(_339)==0){
var tmpn=id.substring(_339.length);
tmpn=_339.substring(_339.lastIndexOf(".")+1)+tmpn;
var _33a=tmpn+"-changed";
if(_33a!=_338){
wm.logging&&undefined;
dojo.publish(_33a,[this]);
}
}
if(this._subNard){
wm.fire(this.owner,"dataChanged");
}
wm.logging&&undefined;
},updatePermanentMemory:function(){
var _33b=this.getParentPage();
if(_33b&&_33b._loadingPage){
return;
}
if(window["PhoneGap"]&&this.saveInPhonegap){
var _33c=dojo.toJson(this.getData());
window.localStorage.setItem(this.getRuntimeId(),_33c);
}else{
if(this.saveInCookie){
var _33c=dojo.toJson(this.getData());
dojo.cookie(this.getRuntimeId(),_33c);
}
}
},dataValueChanged:function(_33d,_33e){
if(!this._updating&&this.owner){
wm.Component.prototype.valueChanged.call(this,_33d,_33e);
this.notify();
this.updatePermanentMemory();
}
},valueChanged:function(_33f,_340){
if(!this.type||this.type==this.declaredClass){
return;
}
if(!this.isDataProp(_33f)){
this.inherited(arguments);
}
},getDataSet:function(){
return this.dataSet||this;
},_isVariableProp:function(_341){
var _342=this._dataSchema[_341];
return Boolean(_342&&(_342.isList||wm.typeManager.isStructuredType(_342.type)));
},isDataProp:function(_343){
return _343 in this._dataSchema;
},_getValue:function(_344){
return this.isDataProp(_344)?this._getDataValue(_344):this.inherited(arguments);
},_setValue:function(n,v){
if((this._isDesignLoaded&&this.schema[n]||0).defaultBindTarget||!this.isDataProp(n)){
this.inherited(arguments);
}else{
this._setDataValue(n,v);
}
},createVariable:function(_345,_346){
if((window["studio"]||djConfig.isDebug)&&_345.type&&!wm.typeManager.getType(_345.type)){
app.toastWarning("A variable of type "+_345.type+" has been created, but that type does not exist");
}
_345._temporaryComponent=1;
if(!_345.name){
_345.name=this._uniqueSubnardId;
this._uniqueSubnardId++;
}
var v=new wm.Variable(_345);
v.owner=this;
return v;
},marshallVariable:function(_347,_348,_349){
var p=_347,v=_349,t=_348.isList?"["+_348.type+"]":_348.type;
if(!(v instanceof wm.Variable)){
v=this.createVariable({name:p,type:t,_subNard:true},p);
if(_349||_349===null){
v.beginUpdate();
v.setData(_349);
v.endUpdate();
}
}
if(v._isStub()&&this.canLazyLoad(_348)){
this.beginUpdate();
this.lazyLoadData(p,v);
this.endUpdate();
}
return v;
},_isStub:function(){
if(!this._nostub&&!this._isNull){
if(this.data===undefined){
return true;
}
if(this.isList||this.hasList()){
return !this.data._list||!this.data._list.length;
}
if(this._greedyLoadProps){
var _34a=this._dataSchema,s;
for(var i in _34a){
s=_34a[i];
if(!s.isList&&(this.data[i]===undefined)&&!wm.typeManager.isStructuredType(s.type)){
return true;
}
}
}else{
if(wm.isEmpty(this.data)){
return true;
}
}
}
this._nostub=true;
return false;
},lazyLoadData:function(_34b,_34c){
var s=wm.getRuntimeService(this),v=_34c;
try{
if(s.ready){
var d=this.getData();
if(!wm.isEmpty(d)){
var args=[null,this.type,d,{properties:[_34b]}];
wm.logging&&undefined;
var f=function(r){
var _34d=r&&r[_34b];
if(_34d){
v.beginUpdate();
v.setData(_34d);
v.endUpdate();
}
};
var d;
if(this.async){
d=s.requestAsync("read",args);
}else{
d=s.requestSync("read",args);
}
d.addCallback(dojo.hitch(this,function(){
f();
}));
}
}
}
catch(x){
}
},canLazyLoad:function(_34e){
if(this._updating||!wm.typeManager.getLiveService(this.type)||!wm.typeManager.getLiveService(_34e.type)){
return;
}
if(this.isDesignLoaded()&&!studio.isLiveLayoutReady()){
return false;
}
var o=this;
while(o instanceof wm.Variable){
if(!o._allowLazyLoad||wm.disableLazyLoad){
return false;
}
o=o.owner;
}
return _34e.isList||this._hasRequiredReadData();
},_hasRequiredReadData:function(){
var ds=this._dataSchema,s,d;
for(var i in ds){
s=ds[i];
if(s.include&&dojo.indexOf(s.include,"read")>-1){
d=this.data[i];
if(d===undefined||d===null){
return false;
}
}
}
return true;
},toString:function(_34f){
var t=_34f||"";
var _350=this.isEmpty();
t+="; "+wm.getDictionaryItem("wm.Variable.toString_TYPE",{type:this.type})+"; "+wm.getDictionaryItem("wm.Variable.toString_ISEMPTY",{isEmpty:_350});
return this.inherited(arguments,[t]);
},_end:0});
wm.Variable.extend({_includeListProps:false,createVariable:function(_351,_352){
_351=_351||{};
if((window["studio"]&&this.isDesignLoaded()||!window["studio"]&&djConfig.isDebug)&&_351.type&&!this._dataSchema){
app.alert(wm.getDictionaryItem("wm.Variable.TYPE_INVALID",{type:_351.type.replace(/[\[\]]/g,""),name:this.getRuntimeId()}));
}
if(!_351.name){
_351.name=this._uniqueSubnardId;
this._uniqueSubnardId++;
}
_351._temporaryComponent=1;
_351.liveView=this.liveView;
var r=this._rootField,n=_352;
_351._rootField=r&&_352?r+"."+_352:(_352||"");
var v=new wm.Variable(_351);
v.setOwner(this,true);
return v;
},setDataSet:function(_353){
this.dataSet="";
if(_353 instanceof wm.Variable){
this._rootField=_353._rootField||"";
if(_353.liveView){
this.setLiveView(_353.liveView);
}
this.setType(_353?_353.type:"wm.Variable",true);
this.dataSet=_353;
this.cursor=_353.cursor;
}
this.setData(_353);
},_getEagerProps:function(_354){
var v=_354,_355=this.liveView?this.liveView.getSubRelated(v._rootField):[],_356=wm.typeManager.getTypeSchema(v.type);
return this._includeListProps?_355:dojo.filter(_355,function(r){
return !wm.typeManager.isPropInList(_356,r);
});
},_getLoadProps:function(_357,_358){
return [_357].concat(dojo.map(this._getEagerProps(_358),function(r){
return [_357,r].join(".");
}));
},lazyLoadData:function(_359,_35a){
var s=wm.getRuntimeService(this),v=_35a;
try{
if(s.ready){
var d=this.getData();
if(!wm.isEmpty(d)){
var _35b=this._getLoadProps(_359,v),args=[null,this.type,d,{properties:_35b}];
wm.logging&&undefined;
var f=function(r){
var _35c=r&&r[_359];
if(_35c){
v.beginUpdate();
v.setData(_35c);
v.endUpdate();
}
};
if(this.async){
s.requestAsync("read",args,f);
}else{
s.requestSync("read",args);
f(s.result);
}
}
}
}
catch(x){
wm.logging&&undefined;
}
},setLiveView:function(_35d){
this.liveView=_35d;
},getViewType:function(){
return this.liveView&&this.liveView.getSubType(this._rootField);
},getViewFields:function(){
return (this.liveView&&this.liveView.getSubView(this._rootField))||[];
},getViewListFields:function(){
return (this.liveView&&this.liveView.getListView(this._rootField))||[];
},getViewRelated:function(){
return (this.liveView&&this.liveView.getSubRelated(this._rootField))||[];
}});
if(0){
wm.Variable.extend({getFeatures:function(){
return {"dojo.data.api.Read":true};
},getValue:function(_35e,_35f,_360){
if(this.isItem(_35e)){
if(_35f=="_id"){
return _35e.getIndexInOwner();
}
var _361=_35e.getValue(_35f);
if(_361===undefined){
_361=_360;
}
return _361;
}else{
return this.inherited(arguments);
}
},getValues:function(_362,_363){
if(this.isItem(_362)&&typeof _363=="string"){
var _364=this.getValue(_362,_363);
return [_364];
}else{
throw "getValues must have a wm.Variable as input; and inAttribute must be a String; perhaps you want getValue?";
}
},getAttributes:function(_365){
if(this.isItem(_365)){
var type=wm.typeManager.getType(_365.type);
var _366=[];
if(type&&type.fields){
for(var _367 in type.fields){
_366.push(_367);
}
}
if(!this.identity){
_366.push("_id");
}
return _366;
}else{
throw "getAttribute must have a wm.Variable as an input";
}
},hasAttribute:function(_368,_369){
if(this.isItem(_368)&&typeof _369=="string"){
var _36a=_368.getValue(_368,_369);
return !(_36a===undefined||_36a===null);
}else{
throw "getValues must have a wm.Variable as input; and inAttribute must be a String.";
}
},containsValue:function(_36b,_36c,_36d){
var _36e=this.getValues(_36b,_36c);
return dojo.indexOf(_36e,_36d)!=-1;
},isItem:function(_36f){
return _36f instanceof wm.Variable;
},isItemLoaded:function(_370){
return false;
},loadItem:function(_371){
return null;
},_fetchItems:function(_372,_373,_374){
var opts=_372.queryOptions;
var _375=[];
var i,key;
if(_372.query){
var _376=this.getCount();
for(i=0;i<_376;++i){
var _377=true;
var _378=this.getItem(i);
if(_378 instanceof wm.Variable==false){
_377=false;
}else{
for(key in _372.query){
value=_372.query[key];
if(value!="*"&&!this._containsValue(_378,key,value,opts)){
_377=false;
}
}
}
if(_377){
_375.push(_378);
}
}
_373(_375,_372);
}else{
var _376=this.getCount();
for(i=0;i<_376;++i){
var item=this.getItem(i);
if(item!==null){
_375.push(item);
}
}
_373(_375,_372);
}
},_containsValue:function(item,_379,_37a,opts){
var _37b=String(_37a);
var _37c=item.getValue(_379);
var _37d=String(_37c);
if(_37a===_37c){
return true;
}
if(opts.ignoreCase){
if(_37b.toLowerCase()===_37d.toLowerCase()){
return true;
}
}
if(!opts.exactMatch){
if(_37b.indexOf(_37d)!=-1){
return true;
}
}
return false;
},close:function(_37e){
},getLabel:function(_37f){
if(this.displayField){
return _37f.getValue(this.displayField);
}else{
if(this.displayExpression){
return wm.expression.getValue(this.displayExpression,_37f,this.getRoot());
}else{
return undefined;
}
}
},getLabelAttributes:function(_380){
if(this.displayField){
return [this.displayField];
}else{
if(this.displayExpression){
var _381=this.displayExpression.match(wm.expression._getSourceRegEx);
for(var i=0;i<_381.length;i++){
_381[i]=_381[i].substring(2,_381[i].length-1);
}
return _381;
}else{
return this.getAttributes();
}
}
},_end:0});
wm.Variable.extend({getFeatures:function(){
return {"dojo.data.api.Read":true,"dojo.data.api.Identity":true};
},getIdentity:function(_382){
if(this.identity){
return _382.getValue(this.identity);
}else{
return _382.getIndexInOwner();
}
},getIdentityAttributes:function(_383){
if(this.identity){
return [this.identity];
}else{
return ["_id"];
}
},fetchItemByIdentity:function(_384){
var item=this.getItem(_384.identity);
if(item){
_384.onItem.call(_384.scope||dojo.global,item,_384);
}else{
_384.onError.call(_384.scope||dojo.global,_384);
}
},_end:0});
wm.Variable.extend({forEachItem:function(_385,_386){
if(!_386){
option={count:0,stopOnTrue:false};
}
var _387=_386.stopOnTrue;
var _388=this.getCount();
for(var i=_386.start||0;i<_388;i++){
var item=this.getItem(i);
if(_385(item)&&_387){
return;
}
}
},get:function(id){
var keys=this.primaryKeyFields.split(/\s*,\s*/);
var _389={};
if(keys.length==0){
return null;
}
for(var i=0;i<keys.length;i++){
if(id instanceof wm.Variable){
_389[keys[i]]=id.getValue(keys[i]);
}else{
if(id!==null&&typeof id=="object"){
_389[keys[i]]=id[keys[i]];
}else{
_389[keys[i]]=id;
}
}
}
return this.query(_389,{limit:1}).matches[0];
},query:function(_38a,_38b){
var _38c=[];
var _38d=function(val1,val2,_38e){
if(_38e.ignoreCase){
val1=val1.toLowerCase();
val2=val2.toLowerCase();
}
if(val1==val2){
return true;
}else{
if(!_38e.exactMatch&&typeof val1=="string"&&val1.indexOf(val2)==0){
return true;
}
}
return false;
};
this.forEachItem(function(item){
for(key in _38a){
var _38f=_38a[key];
if(_38f instanceof wm.Variable){
_38f=_38f.getValue(_38a[key]);
}else{
if(_38f!=null&&typeof _38f=="object"){
_38f=_38f[_38a[key]];
}
}
if(!_38d(_38f,item.getValue(_38a[key]),_38b)){
return false;
}
}
result.push(item);
return _38b.count?result.length<_38b.count:false;
},{stopOnTrue:true,start:_38b.start||0});
return {total:result.length,matches:result,forEach:function(_390,_391){
return dojo.forEach(_38c,_390,_391);
},filter:function(_392,_393){
return dojo.filter(_38c,_392,_393);
},map:function(_394,_395){
return dojo.map(_38c,_394,_395);
}};
},put:function(data,_396){
this.addItem(data);
},remove:function(id){
var item=this.get(id);
if(item){
var _397=this.getItemIndex(item);
if(_397!=-1){
this.removeItem(_397);
}
}
},getIdentity:function(item){
var keys=this.primaryKeyFields.split(/\s*,\s*/);
var _398="";
for(var i=0;i<keys.length;i++){
if(_398){
_398+="|";
}
_398+=item.getValue(keys[i]);
}
return _398;
},getChildren:function(item){
var _399=[];
var _39a=this._dataSchema;
for(var i in _39a){
var s=_39a[i];
if(s.isList||wm.typeManager.isStructuredType(s.type)){
_399.push(item.getValue(i));
}
}
return {total:_399.length,matches:_399,forEach:function(_39b,_39c){
return dojo.forEach(results,_39b,_39c);
},filter:function(_39d,_39e){
return dojo.filter(results,_39d,_39e);
},map:function(_39f,_3a0){
return dojo.map(results,_39f,_3a0);
}};
}});
}
}
if(!dojo._hasResource["wm.base.components.Service"]){
dojo._hasResource["wm.base.components.Service"]=true;
dojo.provide("wm.base.components.Service");
dojo.declare("wm.Service",wm.Component,{_operations:{},result:null,error:null,getOperationsList:function(){
var l=[];
for(var i in this._operations){
l.push(i);
}
l.sort();
return l;
},makePropEdit:function(_3a1,_3a2,_3a3){
var prop=this.schema?this.schema[_3a1]:null;
var name=(prop&&prop.shortname)?prop.shortname:_3a1;
switch(_3a1){
case "operation":
return new wm.SelectMenu(dojo.mixin(_3a3,{options:this.getOperationsList()}));
}
},getOperation:function(_3a4){
return this._operations[_3a4];
},initService:function(){
},invoke:function(_3a5,_3a6,_3a7){
var d=new dojo.Deferred(),m=this[_3a5];
if(m){
var _3a8=m.apply(this,_3a6);
this.onResult();
wm.onidle(function(){
d.callback(_3a8);
});
}else{
this.onError();
wm.onidle(function(){
d.errback("operation: "+_3a5+" does not exist.");
});
}
return d;
},onResult:function(_3a9){
this.error=null;
return this.result=_3a9;
},onError:function(_3aa){
this.result=null;
return this.error=_3aa;
}});
wm.services={byName:{},_services:{},add:function(_3ab){
return wm.services.byName[_3ab.name]=_3ab;
},remove:function(_3ac){
var n=_3ac.name;
this._destroyService(n);
delete wm.services._services[n];
delete wm.services.byName[n];
},getNamesList:function(){
var l=[],_3ad=wm.services.byName,s;
for(var i in _3ad){
s=_3ad[i];
if(!s.clientHide){
l.push(i);
}
}
l.sort();
return l;
},forEach:function(_3ae){
wm.forEach(this.byName,function(s){
_3ae(s);
});
},clear:function(){
var n=wm.services.byName,s;
for(var i in n){
s=n[i];
if(!s.isClientService){
this.remove(s);
}else{
this._destroyService(s);
}
}
},getService:function(_3af,_3b0){
var s;
if(_3af){
if(this._services[_3af]){
s=this._services[_3af];
}else{
s=this._services[_3af]=this._createService(_3af,_3b0);
}
if(!s._service){
s.initService();
}
}
return s;
},_createService:function(_3b1,_3b2){
var _3b3="wm.JsonRpcService",s=this.byName[_3b1];
if(!s){
s=this.add({name:_3b1,ctor:_3b3,clientHide:_3b2});
}
var ctor=dojo.getObject(s.ctor||_3b3);
var _3b4=window["studio"]?studio.application||studio._application:app;
var _3b5=new ctor({name:_3b1,service:_3b1,owner:_3b4});
return _3b5;
},_destroyService:function(_3b6){
wm.fire(this._services[_3b6.name],"destroy");
}};
wm.Object.extendSchema(wm.Service,{operation:{type:"string"}});
}
if(!dojo._hasResource["wm.base.components.ServiceQueue"]){
dojo._hasResource["wm.base.components.ServiceQueue"]=true;
dojo.provide("wm.base.components.ServiceQueue");
dojo.declare("wm.ServiceQueue",wm.Component,{services:"",init:function(){
this._services=[];
this._serviceConnections=[];
this.inherited(arguments);
},getServicesCount:function(){
return this._services&&this._services.length;
},getServicesList:function(){
for(var i=0,l=[],ss=this.services.split(","),s,v;(s=ss[i]);i++){
v=this.getValueById(dojo.string.trim(s));
if(v){
l.push(v);
}
}
return l;
},update:function(){
this.beginUpdate();
},beginUpdate:function(){
this._services=this.getServicesList();
this.connectServices();
this._currentService=0;
this.updateNextService();
},getCurrentService:function(){
return this._services[this._currentService];
},updateNextService:function(){
if(this._currentService<this.getServicesCount()){
var s=this.getCurrentService();
this._currentService++;
s.update();
}else{
this.completeUpdate();
}
},completeUpdate:function(){
this.disconnectServices();
},abortUpdate:function(){
this.disconnectServices();
},connectServices:function(){
this.disconnectServices();
dojo.forEach(this._services,dojo.hitch(this,function(s){
this._serviceConnections.push(dojo.connect(s,"onResult",this,"updateNextService"));
this._serviceConnections.push(dojo.connect(s,"onError",this,"abortUpdate"));
}));
},disconnectServices:function(){
dojo.forEach(this._serviceConnections,function(s){
dojo.disconnect(s);
});
}});
wm.ServiceQueue.extend({getAvailableServicesList:function(){
var d=wm.listComponentIds([studio.application,studio.page],wm.ServiceVariable);
d=d.concat(wm.listComponentIds([studio.application,studio.page],wm.NavigationCall));
var i=dojo.indexOf(d,this.owner.getId());
if(i!=-1){
d.splice(i,1);
}
return d;
},write:function(_3b7){
return this.services?this.inherited(arguments):null;
}});
}
if(!dojo._hasResource["wm.base.components.ServiceCall"]){
dojo._hasResource["wm.base.components.ServiceCall"]=true;
dojo.provide("wm.base.components.ServiceCall");
dojo.declare("wm.ServiceCall",null,{autoUpdate:false,startUpdate:false,_startUpdateComplete:false,service:"",operation:"",_operationInfo:{},disabled:false,inFlightBehavior:"none",destroy:function(){
delete this._inFlightBacklog;
wm.fire(this._requester,"cancel");
delete this._requester;
this.inherited(arguments);
},init:function(){
this.inherited(arguments);
this._inFlightBacklog=[];
if(this._isDesignLoaded){
this.subscribe("wmservices-changed",dojo.hitch(this,"servicesChanged"));
}
},postInit:function(){
this.inherited(arguments);
this.connectStartUpdate();
if(!this.$.queue){
new wm.ServiceQueue({name:"queue",owner:this});
}
this.initInput();
this.setService(this.service);
this._setOperation(this.operation);
},initInput:function(){
this.input=this.$.input;
if(!this.input){
this.input=this.createInput();
}
this.subscribe(this.input.getRuntimeId()+"-changed",this,"inputChanged");
},setInput:function(_3b8){
if(this.$.input){
this.$.input.setDataSet(_3b8);
}
},setService:function(_3b9){
if(this._inSetService){
return;
}
try{
this._inSetService=true;
this.service=_3b9;
var _3ba=this.getOwnerApp();
this._service=wm.services.getService(this.service,_3ba&&_3ba.declaredClass=="StudioApplication")||new wm.Service({});
wm.fire(this._service,"setServiceCall",[this]);
this._setOperation(this.operation,1);
}
catch(e){
}
finally{
delete this._inSetService;
}
},set_service:function(_3bb){
this.setService(_3bb);
var s=this._service;
var _3bc=s&&s.getOperation(this.operation);
if(!_3bc){
var _3bd=s&&s.getOperationsList();
var _3be=_3bd?_3bd[0]:"";
if(_3be&&_3be!=this.operation){
this.set_operation(_3be);
}
}
studio.inspector.refocusEditor();
},wmTypesChanged:function(){
var _3bf=this.getOwnerApp();
this._service=wm.services.getService(this.service,_3bf&&_3bf.declaredClass=="StudioApplication")||new wm.Service({});
wm.fire(this._service,"setServiceCall",[this]);
this._setOperation(this.operation,1);
if(this.setType){
this.setType(this.type);
}
if(studio.isSelected(this)){
studio.inspect(this);
}
},_setOperation:function(_3c0,_3c1){
this.operation=_3c0;
this._operationInfo=this.getOperationInfo(this.operation);
this.operationChanged(_3c1);
},setOperation:function(_3c2){
this._setOperation(_3c2);
this.doAutoUpdate();
},getOperationInfo:function(_3c3){
return (this._service&&this._service.getOperation(_3c3))||{};
},operationChanged:function(_3c4){
this.input.operationChanged(this.operation,this._operationInfo.parameters);
},createInput:function(){
var i=new wm.ServiceInput({name:"input",owner:this});
i.operationChanged(this.operation,this._operationInfo.parameters);
return i;
},inputChanged:function(){
this.doAutoUpdate();
},connectStartUpdate:function(){
if(this.owner&&this.owner instanceof wm.Application){
this.doStartUpdate();
}else{
if(this.owner&&this.owner.start){
this.connectOnce(this.owner,"onStart",this,"doStartUpdate");
}
}
},setAutoUpdate:function(_3c5){
this.autoUpdate=_3c5;
this.doAutoUpdate();
},setStartUpdate:function(_3c6){
this.startUpdate=_3c6;
if(this.startUpdate&&!this._loading&&this.isDesignLoaded()){
this.updateInternal();
}
},canStartUpdate:function(){
return this.startUpdate&&!this._loading&&(!window["PhoneGap"]||!this.saveInPhoneGap||this.isEmpty()||this.autoUpdate);
},doStartUpdate:function(){
if(this.canStartUpdate()){
this.updateInternal();
this._startUpdateComplete=true;
}
},canAutoUpdate:function(){
return (this.autoUpdate&&!this._loading&&(!this.startUpdate||this._startUpdateComplete||this.isDesignLoaded()));
},doAutoUpdate:function(){
if(this.canAutoUpdate()){
wm.job(this.getRuntimeId()+".doAutoUpdate",wm.isMobile?20:1,dojo.hitch(this,"updateInternal"));
}
},update:function(){
return this._isDesignLoaded?this.doDesigntimeUpdate():this._update();
},updateInternal:function(){
return this._isDesignLoaded?this.doDesigntimeUpdate():this._update();
},addToBacklog:function(){
var d=new dojo.Deferred();
if(this.inFlightBehavior=="executeLast"){
this._inFlightBacklog.pop();
}
if(this.inFlightBehavior=="executeLast"||this.inFlightBehavior=="executeAll"){
this._inFlightBacklog.push({args:this.getArgs(),operation:this.operation,deferred:d,eventChain:app.debugDialog?app.debugDialog.cacheEventChain():undefined});
}else{
d.errback("Unable to fire "+this.toString()+" because it is already firing, and the inFlightBehavior property is unset");
}
return d;
},_update:function(){
if(this.canUpdate()){
if(this._requester&&!this._isDesignLoaded){
var d=this.addToBacklog();
return d;
}
this.onBeforeUpdate(this.input);
wm.cancelJob(this.getRuntimeId()+".doAutoUpdate");
return this.request();
}else{
var _3c7=this.disabled?this.getRuntimeId()+" tried to fire but its disabled property prevented it":this.getRuntimeId()+".canUpdate() returns false";
this.blocked(_3c7);
var d=new dojo.Deferred();
d.errback(_3c7);
return d;
}
},canUpdate:function(){
var info={canUpdate:this._getCanUpdate()};
this.onCanUpdate(info);
return info.canUpdate;
},_getCanUpdate:function(){
return this._service&&this.operation&&!this.disabled;
},getArgs:function(){
return this.input.getArgs();
},getOperationType:function(){
var _3c8=this._service;
var _3c9;
if(_3c8){
_3c9=_3c8._operations[this.operation];
}
if(_3c9){
return _3c9.operationType;
}else{
return "";
}
},request:function(_3ca,_3cb,_3cc){
var args;
try{
args=_3ca||this.getArgs();
}
catch(e){
this.error(e);
return;
}
var d=this._requester=this._service.invoke(_3cb||this.operation,args,this.owner,this);
if(_3cc){
d.then(function(_3cd){
_3cc.callback(_3cd);
},function(_3ce){
_3cc.errback(_3ce);
});
}
return this.processRequest(d);
},blocked:function(_3cf){
},processRequest:function(_3d0){
var d=_3d0;
if(d){
d.addCallbacks(dojo.hitch(this,"result"),dojo.hitch(this,"error"));
return d;
}
},result:function(_3d1){
this._requester=false;
this.processResult(_3d1);
this._updateNextInQueue();
return _3d1;
},_updateNextInQueue:function(){
if(!this._isDesignLoaded&&this._inFlightBacklog){
if(this._inFlightBacklog.length){
wm.onidle(this,function(){
var _3d2=this._inFlightBacklog.shift();
if(_3d2){
this.request(_3d2.args,_3d2.operation,_3d2.deferred);
}
});
}else{
this.onInflightBacklogComplete();
}
}
},onInflightBacklogComplete:function(){
},processResult:function(_3d3){
this.onResult(_3d3);
this.onSuccess(_3d3);
if(!this.isDestroyed&&this.$.queue){
this.$.queue.update();
}
},error:function(_3d4){
this._requester=false;
this.processError(_3d4);
this._updateNextInQueue();
return _3d4;
},processError:function(_3d5){
this.onResult(_3d5);
this.onError(_3d5);
},_onCanUpdateBeforeStart:1,onCanUpdate:function(_3d6){
},onBeforeUpdate:function(_3d7){
},onResult:function(_3d8){
},onSuccess:function(_3d9){
},onError:function(_3da){
}});
dojo.declare("wm.ServiceInput",wm.Variable,{_allowLazyLoad:false,_getSchemaForType:function(_3db){
return this.owner&&this.owner._operationInfo?this.owner._operationInfo.parameters:null;
},isDataProp:function(_3dc){
return wm.isEmpty(this._dataSchema)||(_3dc in this._dataSchema);
},operationChanged:function(_3dd,_3de){
this.setType(_3dd+"Inputs");
this.setDataSchema(_3de);
if(this.$.binding&&_3de){
this.$.binding.refresh();
}
},getArgsHash:function(){
var data=this.getData(),args={},d;
for(var p in this._dataSchema){
args[p]=(data[p]===undefined||data[p]===null)?"":data[p];
}
return args;
},getArgs:function(){
wm.Variable.convertToHashMaps=true;
try{
var data=this.getData(true),args=[],d;
}
catch(e){
}
wm.Variable.convertToHashMaps=false;
for(var p in this._dataSchema){
if(data){
if(data[p] instanceof Date){
d=data[p].getTime();
}else{
d=data[p];
}
}else{
d=undefined;
}
args.push(d!==undefined?d:null);
}
return args;
}});
wm.ServiceCall.extend({clearInput:"(clear input)",updateNow:"(update now)",queue:"(serviceCalls)",servicesChanged:function(){
if(this.service){
var _3df=this.getOwnerApp();
this._service=wm.services.getService(this.service,_3df&&_3df.declaredClass=="StudioApplication");
if(!this._service){
this._service=new wm.Service({});
}
this._setOperation(this.operation,1);
}
},getUniqueName:function(_3e0){
if(_3e0==="input"){
return "input";
}
return this.inherited(arguments);
},doDesigntimeUpdate:function(){
this._designTime=true;
return studio.makeLiveDataCall(dojo.hitch(this,"_update"));
},doClearInput:function(){
this.input.destroy();
this.input=this.createInput();
},set_operation:function(_3e1){
this.setOperation(_3e1);
if(this.isDesignLoaded()&&dojo.indexOf(studio.selected,this)!=-1){
if(this.service=="securityService"){
this.startUpdate=_3e1!="logout";
}
studio.inspector.refocusEditor();
}
},getServicesList:function(){
return [""].concat(wm.services.getNamesList()||[]);
},showQueueDialog:function(){
var d=wm.ServiceQueue.dialog,q=this.$.queue;
if(d){
d.page.binding=q;
d.page.update();
}else{
wm.ServiceQueue.dialog=d=new wm.PageDialog({name:"queueDialog",owner:studio,contentWidth:600,contentHeight:400,hideControls:true,pageName:"QueueDialog",pageProperties:{binding:q}});
}
d.show();
},makePropEdit:function(_3e2,_3e3,_3e4){
var prop=this.schema?this.schema[_3e2]:null;
var name=(prop&&prop.shortname)?prop.shortname:_3e2;
switch(_3e2){
case "service":
return new wm.SelectMenu(dojo.mixin(_3e4,{options:this.getServicesList()}));
case "operation":
var s=this._service,_3e5=s&&s.getOperation(_3e3),_3e6=s&&s.getOperationsList();
if(!_3e5){
_3e3=_3e6?_3e6[0]:"";
if(_3e3&&_3e3!=this.operation){
this.set_operation(_3e3);
}
}
if(_3e6){
return new wm.SelectMenu(dojo.mixin(_3e4,{options:_3e6}));
}
break;
}
return this.inherited(arguments);
}});
wm.ServiceInputVariable=wm.ServiceInput;
}
if(!dojo._hasResource["wm.base.components.ServiceVariable"]){
dojo._hasResource["wm.base.components.ServiceVariable"]=true;
dojo.provide("wm.base.components.ServiceVariable");
dojo.declare("wm.ServiceVariable",[wm.Variable,wm.ServiceCall],{loadingDialog:null,downloadFile:false,_page:0,maxResults:0,designMaxResults:50,transposeHashMap:function(_3e7){
var data=[];
wm.forEachProperty(_3e7,function(_3e8,_3e9){
data.push({name:_3e9,dataValue:_3e8});
});
return data;
},processResult:function(_3ea){
if(wm.isHashMapType(this.type)){
_3ea=this.transposeHashMap(_3ea);
}
this.setData(_3ea);
if(this.service=="securityService"&&this.operation=="logout"){
wm.logoutSuccess();
}
this.inherited(arguments);
},processError:function(_3eb){
if(_3eb&&_3eb.message&&_3eb.message.indexOf("Invalid Long Polling Request:")===0){
this.request();
return;
}
this.handleSecurityErrors(_3eb);
this.inherited(arguments);
},handleSecurityErrors:function(_3ec){
var _3ed=(dojo.isObject(_3ec)?_3ec.message:_3ec).match(/(\d+)$/);
var _3ee=(_3ed)?_3ed[0]:"";
if(_3ee==403){
dojo.publish("session-expiration-servicecall",[this]);
if(app){
app._onSessionExpiration();
}
}else{
dojo.publish("service-variable-error",[this,_3ec]);
}
},setType:function(){
this.inherited(arguments);
if(this._isDesignLoaded&&this.input){
this.setService(this.service);
if(this==studio.selected){
studio.inspector.inspect(this);
}
}
},operationChanged:function(_3ef){
this.inherited(arguments);
var op=this._operationInfo;
if(op||_3ef){
this.setType(op.returnType);
this.clearData();
}
if((this.autoUpdate||this.startUpdate)&&!this._loading&&this.isDesignLoaded()){
this.update();
}
},getArgs:function(){
var args=this.inherited(arguments);
var _3f0=this.getOperationType();
if(_3f0=="hqlquery"){
var max=this.isDesignLoaded()?this.designMaxResults:this.maxResults;
var _3f1=max?{maxResults:max,firstResult:this.firstRow||0}:{};
args.push(_3f1);
}
return args;
},getDebugArgs:function(){
return this.input.getData();
},getTotal:function(){
return this.getCount();
},getPageCount:function(){
return Math.ceil(this.getTotal()/(this.getCount()||1));
},setPage:function(_3f2){
this._page=Math.max(0,Math.min(this.getPageCount()-1,_3f2));
this.firstRow=this._page*this.maxResults;
this.update();
},getPage:function(){
return this._page;
},setFirstPage:function(){
this.setPage(0);
},setPreviousPage:function(){
this.setPage(this._page-1);
},setNextPage:function(){
this.setPage(this._page+1);
},setLastPage:function(){
this.setPage(this.getPageCount());
},_update:function(){
if(this.loadingDialog&&!this._isDesignLoaded){
if(this.loadingDialog instanceof wm.LoadingDialog==false){
this.loadingDialog=new wm.LoadingDialog({owner:this,name:"loadingDialog",widgetToCover:this.loadingDialog});
this.loadingDialog.setServiceVariableToTrack(this);
}
}
return this.inherited(arguments);
},toString:function(_3f3){
var t=_3f3||"";
t+="; "+wm.getDictionaryItem("wm.ServiceVariable.toString_FIRING",{isFiring:Boolean(this._requester)});
return this.inherited(arguments,[t]);
},log:function(_3f4,_3f5,_3f6,_3f7){
if(!app.debugDialog){
return;
}
if(!this.debugId){
this.debugId=[];
}
if((_3f4!="serviceCall"&&_3f4!="serviceCallResponse")){
this._debug={trigger:_3f5||_3f4,eventName:_3f4,request:"",lastUpdate:new Date()};
}
if(_3f4=="autoUpdate"){
try{
var i=0;
var _3f8=arguments.callee.caller;
while(_3f8&&_3f8.nom!="dataValueChanged"&&i<15){
_3f8=_3f8.caller;
i++;
}
if(_3f8&&_3f8.nom=="dataValueChanged"){
var _3f9=_3f8.arguments[1];
this._debug.eventName="inputChanged: "+_3f8.arguments[0]+" set to "+(_3f9 instanceof wm.Component?_3f9.toString():_3f9);
}
}
catch(e){
}
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:"autoUpdate",sourceDescription:"An input has changed",resultDescription:"Because autoUpdate is set, "+this.getRuntimeId()+".update() was called",method:"update",affectedId:this.getRuntimeId(),firingId:this.getRuntimeId()})});
}else{
if(_3f4=="start"){
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:"start",sourceDescription:"Owner has loaded",resultDescription:"Because startUpdate is set, "+this.getRuntimeId()+".update() was called",method:"update",affectedId:this.getRuntimeId(),firingId:this.owner.getRuntimeId()})});
}else{
if(_3f4=="autoUpdateOnStart"){
var page=this.getParentPage()||app;
this._debug.trigger="autoUpdate"+(page&&page._loadingPage?": onStart":"unknown source");
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:"autoUpdate",sourceDescription:"An input has initialized",resultDescription:"Because autoUpdate is set, "+this.getRuntimeId()+".update() was called",method:"update",affectedId:this.getRuntimeId(),firingId:this.owner.getRuntimeId()})});
}else{
if(_3f4=="update"){
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:"update",sourceDescription:(_3f5?_3f5+"() called ":"")+this.getRuntimeId()+".update()",resultDescription:"Processing request to fire service variable",method:"update",affectedId:this.getRuntimeId(),firingId:""})});
}else{
if(_3f4=="serviceCall"){
if(_3f6&&_3f6.eventChain){
var _3fa=app.debugDialog.cacheEventChain();
app.debugDialog.restoreEventChain(_3f6.eventChain);
}
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:"serviceCall",sourceDescription:this.getRuntimeId()+".update()",resultDescription:"Sending request to server",method:"request",affectedId:this.getRuntimeId(),firingId:this.getRuntimeId()})});
this.debugEventChain=app.debugDialog.cacheEventChain();
if(_3fa){
app.debugDialog.restoreEventChain(_3fa);
}
}else{
if(_3f4=="serviceCallResponse"){
app.debugDialog.restoreEventChain(this.debugEventChain);
delete this.debugEventChain;
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:"serviceCallResponse",sourceDescription:"Response received from server",resultDescription:_3f7?"Calling "+this.getRuntimeId()+".onError()":"Calling "+this.getRuntimeId()+".onSuccess()",method:_3f7?"processError":"processResult",affectedId:this.getRuntimeId(),firingId:this.getRuntimeId()})});
if(this._debug&&this._debug.lastUpdate){
this._debug.duration=new Date().getTime()-this._debug.lastUpdate.getTime();
}
}else{
if(_3f4=="disabled"||"onCanUpdate"){
this.debugId.push({eventType:_3f4,id:app.debugDialog.newLogEvent({eventType:_3f4,sourceDescription:"Update was prevented by "+(_3f4=="disabled"?"disabled property":"onCanUpdate() call"),resultDescription:"Service did not fire",method:"update",affectedId:this.getRuntimeId(),firingId:""})});
}
}
}
}
}
}
}
if(_3f4!="serviceCall"&&_3f4!="serviceCallResponse"&&this._debug||this._debug&&!this._debug.eventId){
this._debug.eventId=this.debugId[this.debugId.length-1].id;
}
},endLog:function(_3fb){
if(!app.debugDialog){
return;
}
if(this.debugId&&this.debugId.length){
var _3fc=this.debugId.pop();
if(_3fc.eventType==_3fb){
app.debugDialog.endLogEvent(_3fc.id);
}
}
if(_3fb=="serviceCallResponse"){
app.debugDialog.clearEventChain();
}
},inputChanged:function(){
if(this.autoUpdate){
if(app.debugDialog){
this.log("autoUpdate");
}
this.inherited(arguments);
if(app.debugDialog){
this.endLog("autoUpdate");
}
}
},doStartUpdate:function(){
if(this.canStartUpdate()){
if(app.debugDialog){
this.log("start");
}
this.inherited(arguments);
if(app.debugDialog){
this.endLog("start");
}
}
},doAutoUpdate:function(){
if(this.canAutoUpdate()){
if(app.debugDialog&&!this._debug&&this._inPostInit){
this.log("autoUpdateOnStart");
}
this.inherited(arguments);
if(app.debugDialog){
this.endLog("autoUpdateOnStart");
}
}
},request:function(_3fd,_3fe,_3ff){
if(app.debugDialog&&this._debug){
this._debug.request=this.getDebugArgs();
}
if(app.debugDialog){
this.log("serviceCall",null,_3fe);
this.endLog("serviceCall",null,_3fe);
}
if(!this.downloadFile){
return this.inherited(arguments);
}else{
var args=_3fd||this.input.getArgsHash();
var _400;
if(wm.xhrPath){
_400=wm.xhrPath;
}else{
_400=window.location.href;
_400=_400.replace(/\?.*$/,"");
_400=_400.replace(/\/[^\/]*$/,"/");
}
var _401=_400+this._service._service.serviceUrl.replace(/\.json$/,".download");
var _402=dojo.byId("downloadFrame");
if(_402){
_402.parentNode.removeChild(_402);
}
_402=document.createElement("iframe");
dojo.attr(_402,{id:"downloadFrame",name:"downloadFrame"});
dojo.style(_402,{top:"1px",left:"1px",width:"1px",height:"1px",visibility:"hidden"});
dojo.body().appendChild(_402);
var _403=_402.contentDocument||_402.contentWindow.document;
_403.open("text/html");
_403.close();
var form=_403.createElement("form");
dojo.attr(form,{id:"downloadForm",method:"POST",action:_401});
var _404=_403.createElement("input");
dojo.attr(_404,{name:"method",value:_3fe||this.operation});
form.appendChild(_404);
wm.forEachProperty(args,function(_405,name){
var _406=_403.createElement("textarea");
dojo.attr(_406,{name:name,value:_405});
form.appendChild(_406);
});
_403.body.appendChild(form);
form.submit();
}
},blocked:function(_407){
this.log(this.disabled?"disabled":"onCanUpdate");
this.onBlocked();
this.endLog(this.disabled?"disabled":"onCanUpdate");
},onBlocked:function(_408){
},setDisabled:function(_409){
var _40a=this.disabled;
this.disabled=Boolean(_409);
},result:function(_40b){
delete this._lastError;
if(app.debugDialog){
this.log("serviceCallResponse");
if(this._jsonRpcServiceDeferred&&this._jsonRpcServiceDeferred.xhr){
var text=this._jsonRpcServiceDeferred.xhr.responseText;
this._lastResponse=(text||"").length>1000?text.substring(0,1000)+"...":text;
}
}
var _40c=this.inherited(arguments);
if(app.debugDialog){
this.endLog("serviceCallResponse");
}
return _40b;
},error:function(_40d){
if(djConfig.isDebug){
this.log("serviceCallResponse");
}
this._lastError=_40d;
this.inherited(arguments);
if(djConfig.isDebug){
this.endLog("serviceCallResponse");
}
return _40d;
}});
}
if(!dojo._hasResource["wm.base.widget.Container"]){
dojo._hasResource["wm.base.widget.Container"]=true;
dojo.provide("wm.base.widget.Container");
wm.define("wm.Container",wm.Control,{imageList:"",border:"0",container:true,lock:false,freeze:false,classNames:"wmcontainer",autoScroll:false,fitToContentWidth:false,fitToContentHeight:false,fitToContent:false,_needsFitToContent:false,constructor:function(){
this.c$=[];
},init:function(){
if(this.dockRight){
app.dockRight=this;
}
if(this.dockLeft){
app.dockLeft=this;
}
if(this.dockTop){
app.dockTop=this;
}
if(this.dockBottom){
app.dockBottom=this;
}
if(this.autoScroll&&app._touchEnabled&&!wm.disableTouchScroll){
var node=this.domNode;
this.connect(node,wm.isFakeMobile?"mousedown":"touchstart",this,"_ontouchstart");
if(!wm.isFakeMobile){
this.connect(node,"touchmove",this,"_ontouchmove");
this.connect(node,"touchend",this,"_ontouchend");
}
}
this.inherited(arguments);
this.setLayoutKind(this.layoutKind);
this.domNode.box=this.box="";
this._needsFitToContent=this.fitToContent=this.fitToContentWidth||this.fitToContentHeight;
},_ontouchstart:function(e){
if(app._touchY&&app._touchY.animationId){
window.clearInterval(app._touchY.animationId);
delete app._touchY.animationId;
}
if(!this._xscrollY){
return;
}
var node=this.domNode;
var _40e=e.touches?e.touches[0].target:e.target;
if(_40e.tagName=="INPUT"||_40e.tagName=="TEXTAREA"){
_40e.focus();
return;
}
dojo.stopEvent(e);
var y=e.touches&&e.touches.length?e.touches[0].screenY:e.screenY;
app._touchY={y:y,initialY:y,targetNode:_40e,targetWidget:this,time:new Date().getTime(),moved:false};
this.connect(node,wm.isFakeMobile?"mousemove":"touchmove",this,"_ontouchmove");
this.connect(node,wm.isFakeMobile?"mouseup":"touchend",this,"_ontouchend");
},_ontouchmove:function(e){
if(!app._touchY){
return;
}
dojo.publish("wmTouchMove",[this]);
var y=e.touches&&e.touches.length?e.touches[0].screenY:e.screenY;
var _40f=e.touches&&e.touches.length?e.touches[0].target:e.target;
if(_40f!=app._touchY.targetNode&&!wm.isFakeMobile){
return;
}
var node=this.domNode;
if(node.scrollHeight<=node.clientHeight){
return;
}
var _410=node.scrollTop;
var _411=app._touchY.y;
if(y==_411){
dojo.stopEvent(e);
return;
}
if(y<_411&&node.clientHeight+node.scrollTop>=node.scrollHeight||y>_411&&node.scrollTop<=0){
return;
}
var _412=_411-y;
var time=new Date().getTime();
var _413=time-app._touchY.time;
var _414=node.scrollTop;
var _415=_414+_412;
if(_415<0){
_415=0;
}else{
if(_415>node.scrollHeight){
_415=node.scrollHeight;
}
}
node.scrollTop=_415;
var _416=_410-node.scrollTop;
app._touchY.y=y;
app._touchY.velocity=_412/_413;
app._touchY.time=new Date().getTime();
if(Math.abs(y-app._touchY.initialY)>5){
app._touchY.moved=true;
}
dojo.stopEvent(e);
},_ontouchend:function(e){
var node=this.domNode;
if(node.scrollHeight<=node.clientHeight){
return;
}
if(app._touchY.velocity!=Infinity&&Math.abs(app._touchY.velocity)>0.15){
if(app._touchY.animationId){
window.clearInterval(app._touchY.animationId);
}
app._touchY.animationId=window.setInterval(dojo.hitch(this,"_onAnimateScroll"),50);
}
this.disconnectEvent("mousemove");
this.disconnectEvent("mouseup");
},_onAnimateScroll:function(){
var node=this.domNode;
app._touchY.velocity*=0.9;
var top=node.scrollTop;
var _417=node.scrollTop+Math.min(app._touchY.velocity*50,node.clientHeight);
node.scrollTop=_417;
if(app._touchY.velocity==Infinity||Math.abs(top-_417)<=1){
window.clearInterval(app._touchY.animationId);
return;
}
node.scrollTop+=Math.min(app._touchY.velocity*50,node.clientHeight);
},postInit:function(){
if(this.isDesignLoaded()){
this.setLock(this.lock);
}
this.inherited(arguments);
if(this.disabled){
wm.forEachProperty(this.widgets,dojo.hitch(this,function(w,name){
w.setParentDisabled(this._disabled);
}));
}
},connectOnEnterKey:function(){
this.connect(this.domNode,"onkeypress",this,"keypress");
},keypress:function(evt){
var self=this;
if(evt.keyCode==dojo.keys.ENTER&&evt.target.tagName!="TEXTAREA"){
wm.job(this.getRuntimeId()+".enterkeypress",50,dojo.hitch(this,function(){
if(!this.isDestroyed){
this.onEnterKeyPress(evt);
}
}));
}
},setThemeStyleType:function(_418){
var _419=this.getThemeStyleType();
if(_419){
this.removeUserClass(_419);
}
if(_418){
this.addUserClass(_418);
}
},getThemeStyleType:function(){
var _41a=["MainContent","EmphasizedContent","HeaderContent"];
if(this._classes&&this._classes.domNode){
for(var i=0;i<_41a.length;i++){
if(dojo.indexOf(this._classes.domNode,_41a[i])!=-1){
return _41a[i];
}
}
}
},destroy:function(){
if(this.dockRight){
delete app.dockRight;
}else{
if(this.dockLeft){
delete app.dockLeft;
}else{
if(this.dockTop){
delete app.dockTop;
}else{
if(this.dockBottom){
delete app.dockBottom;
}
}
}
}
if(this.domNode&&this.domNode.box){
delete this.domNode.box;
}
this.inherited(arguments);
},bc:function(){
this.inherited(arguments);
delete this.layoutJustify;
if(this.layoutAlign){
this.contentAlign=this.layoutAlign;
delete this.layoutAlign;
}
if(this.layoutFit){
this.fitToContentWidth=this.fitToContentHeight=this.layoutFit;
delete this.layoutFit;
}
if(this.box=="h"){
this.layoutKind="left-to-right";
}
if(this.boxPosition){
var _41b=["topLeft","center","bottomRight"],_41c=["top","middle","bottom"],_41d=["left","center","right"],h=this.layoutKind=="left-to-right",i=dojo.indexOf(_41b,this.boxPosition);
if(i!=-1){
if(h){
this.horizontalAlign=_41d[i];
}else{
this.verticalAlign=_41c[i];
}
}
}
},addWidget:function(_41e){
this.inherited(arguments);
if(this.box=="h"&&!_41e.width){
_41e.setProp("width","64px");
}else{
if(this.box=="v"&&!_41e.height){
_41e.setProp("height","64px");
}
}
},getOrderedWidgets:function(){
return this.c$;
},addControl:function(_41f){
this.c$.push(_41f);
},removeControl:function(_420){
if(this.c$){
for(var i=0,c;c=this.c$[i];i++){
if(c==_420){
this.c$.splice(i,1);
return i;
}
}
}
},removeAllControls:function(){
while(this.c$.length){
var c=this.c$[0];
this.removeControl(c);
c.destroy();
}
this.reflow();
},insertControl:function(_421,_422){
this.c$.splice(_422,0,_421);
},moveControl:function(_423,_424){
var i0=this.removeControl(_423);
if(_424==-1){
this.c$.push(_423);
}else{
this.c$.splice(_424,0,_423);
}
},indexOfControl:function(_425){
for(var i=0,c;c=this.c$[i];i++){
if(c==_425){
return i;
}
}
return -1;
},nextSibling:function(_426,_427){
for(var i=0,c;c=this.c$[i];i++){
if(c==_426){
if(!_427){
return this.c$[i+1];
}else{
for(var j=i+1;j<this.c$.length;j++){
if(this.c$[j].showing){
return this.c$[j];
}
}
}
}
}
},prevSibling:function(_428,_429){
for(var i=0,c;c=this.c$[i];i++){
if(c==_428){
if(!_429){
return this.c$[i-1];
}else{
for(var j=i-1;j>=0;j--){
if(this.c$[j].showing){
return this.c$[j];
}
}
}
}
}
},setAutoScroll:function(_42a){
this._xscrollX=false;
this._xscrollY=false;
this.inherited(arguments);
this.reflow();
},adjustSetSizeProp:function(n,v){
if(n=="height"&&this.fitToContentHeight&&this.getPreferredFitToContentHeight){
return this.getPreferredFitToContentHeight()+"px";
}
if(n=="width"&&this.fitToContentWidth&&this.getPreferredFitToContentWidth){
return this.getPreferredFitToContentWidth()+"px";
}
return v;
},reflow:function(){
this._boundsDirty=true;
if(!this.isReflowEnabled()){
return;
}
if(this.parent&&(this.fitToContent||this.parent.fitToContent)){
if(this._needsFitToContent){
delete this._needsFitToContent;
}
this.parent.reflow();
}else{
this.flow();
}
},adjustFlowForMobile:function(){
if(this.autoScroll||this.fitToContentHeight||studio.currentDeviceType=="desktop"||this._percEx.h){
return;
}
var max=0;
if(this.layoutKind=="left-to-right"){
max=this.bounds.h;
for(var i=0;i<this.c$.length;i++){
var c=this.c$[i];
if(c.enableTouchHeight&&!c._percEx.h&&c.mobileHeight){
if(c.bounds.h>max){
max=c.bounds.h;
}
}
}
}else{
var _42b=false;
for(var i=0;i<this.c$.length;i++){
var c=this.c$[i];
if(c.enableTouchHeight&&!c._percEx.h&&c.mobileHeight){
_42b=true;
break;
}
}
if(_42b){
max=this.getPreferredFitToContentHeight();
}
}
if(max>this.bounds.h){
this.enableTouchHeight=true;
var h=max+"px";
this.mobileHeight=h;
this.setHeight(h);
}
},flow:function(){
if(this._boundsDirty&&this.isReflowEnabled()){
if(this._isDesignLoaded){
this.adjustFlowForMobile();
}
this.layout.flow(this,false);
}
},renderControls:function(){
for(var i=0,c;c=this.c$[i];i++){
if(c.showing){
c.renderBounds();
}
}
},removeDelayedReflow:function(){
delete wm.Container.delayedReflowWidgets[this.getRuntimeId()];
},delayedReflow:function(){
if(wm.Container.delayedReflowWidgets[this.getRuntimeId()]){
return;
}
wm.Container.delayedReflowWidgets[this.getRuntimeId()]=this;
var _42c=[];
try{
wm.forEachProperty(wm.Container.delayedReflowWidgets,dojo.hitch(this,function(_42d,_42e){
if(_42d===this){
}else{
if(_42d.parent===this.parent){
delete wm.Container.delayedReflowWidgets[_42e];
delete wm.Container.delayedReflowWidgets[this.getRuntimeId()];
_42c.push(this.parent);
}else{
if(this.isAncestor(_42d)){
delete wm.Container.delayedReflowWidgets[this.getRuntimeId()];
}else{
if(_42d.isAncestor(this)){
delete wm.Container.delayedReflowWidgets[_42e];
}
}
}
}
}));
}
catch(e){
}
for(var i=0;i<_42c.length;i++){
_42c[i].delayedReflow();
}
if(!wm.Container._delayedReflowWidgetsId){
wm.Container._delayedReflowWidgetsId=window.setTimeout(wm.Container.runDelayedReflow,1);
}
},forEachControl:function(_42f,_430){
dojo.forEach(this.c$,function(_431){
_42f.apply(_431,(_430)?_430:[]);
});
},nodeBoundsChange:function(){
},imageListChanged:function(){
for(var i=0,c;c=this.c$[i];i++){
wm.fire(c,"imageListChanged");
}
},setImageList:function(_432){
this.imageList=_432;
this.imageListChanged();
},updateIsDirty:function(){
this.setValue("isDirty",this.getIsDirty());
wm.fire(this.parent,"updateIsDirty");
},getIsDirty:function(){
for(var i in this.widgets){
var w=this.widgets[i];
if(w.isDirty){
return true;
}else{
if(w.isDirty===undefined&&w.getIsDirty&&w.getIsDirty()){
return true;
}
}
}
},validate:function(){
this.setValue("invalid",this.getInvalid());
wm.fire(this.parent,"validate");
},getInvalid:function(){
var p=this.getParentPage();
for(var i in this.widgets){
var w=this.widgets[i];
if(p&&p.validateVisibleOnly&&(!w.showing||wm.Layer&&w instanceof wm.Layer&&!w.isActive())){
continue;
}
if(w.invalid){
return true;
}else{
if(w.invalid===undefined&&w.getInvalid&&w.getInvalid()){
return true;
}
}
}
if(dojo.isFunction(this.customGetValidate)){
return !this.customGetValidate();
}
return false;
},customGetValidate:function(){
return true;
},getInvalidWidget:function(){
var p=this.getParentPage();
for(var i in this.widgets){
var w=this.widgets[i];
if(p&&p.validateVisibleOnly&&(!w.showing||wm.Layer&&w instanceof wm.Layer&&!w.isActive())){
continue;
}
if(wm.isInstanceType(w,[wm.AbstractEditor,wm.Editor])){
if(w.getInvalid()){
return w;
}
}else{
if(wm.isInstanceType(w,wm.Container)){
var tmp=w.getInvalidWidget();
if(tmp){
return tmp;
}
}
}
}
return null;
},getLock:function(){
return this.lock||(this.parent&&wm.fire(this.parent,"getLock"))||false;
},setLock:function(_433){
var _434=this.lock;
this.lock=_433;
if(window["studio"]&&(this.lock!=_434||this.lock)){
studio.refreshComponentOnTree(this);
}
},getFreeze:function(){
return this.freeze||this.getLock();
},isWidgetTypeAllowed:function(_435){
return true;
},_reorientChildren:function(_436){
var _437=this.containerNode||this.domNode;
wm.forEachProperty(this.widgets,function(w){
if(w.domNode.parentNode!=_437){
return;
}
var ww=w.width;
w.width=w.height;
w.height=ww;
w.updateBounds();
});
},clearData:function(){
var _438=function(w){
if(wm.isInstanceType(w,[wm.AbstractEditor,wm.Editor])){
w.clear();
}
};
wm.forEachWidget(this,_438);
},resetData:function(){
var _439=function(w){
if(w instanceof wm.AbstractEditor){
w.reset();
}
};
wm.forEachWidget(this,_439);
},clearDirty:function(){
this.setValue("isDirty",false);
var _43a=function(w){
if(w instanceof wm.AbstractEditor){
w.clearDirty();
}
};
wm.forEachWidget(this,_43a);
},getCurrentMaxWidth:function(){
if(!this.parent||!this.parent.getCurrentMaxWidth){
return this.bounds.w-this.padBorderMargin.l-this.padBorderMargin.r;
}else{
if(this.fitToContent){
return this.parent.getCurrentMaxWidth();
}else{
if(this._percEx.w&&this.layoutKind=="top-to-bottom"){
return this.parent.getCurrentMaxWidth();
}else{
if(this._percEx.w&&this.layoutKind=="top-to-bottom"){
var _43b=this.parent.layout.getMaxFreeSpace(this.parent.c$,"w",this.parent.bounds.w-this.parent.padBorderMargin.l-this.parent.padBorderMargin.r);
return _43b+this.bounds.w;
}else{
return this.bounds.w-this.padBorderMargin.l-this.padBorderMargin.r;
}
}
}
}
},getCurrentMaxHeight:function(){
if(!this.parent||!this.parent.getCurrentMaxHeight){
return this.bounds.h-this.padBorderMargin.t-this.padBorderMargin.b;
}else{
if(this.fitToContent){
return this.parent.getCurrentMaxHeight();
}else{
if(this._percEx.h&&this.layoutKind=="left-to-right"){
return this.parent.getCurrentMaxHeight();
}else{
if(this._percEx.h&&this.layoutKind=="top-to-bottom"){
var _43c=this.parent.layout.getMaxFreeSpace(this.parent.c$,"h",this.parent.bounds.h-this.parent.padBorderMargin.t-this.parent.padBorderMargin.b);
return _43c+this.bounds.h;
}else{
return this.bounds.h-this.padBorderMargin.t-this.padBorderMargin.b;
}
}
}
}
}});
wm.Container.extend({getPreferredFitToContentWidth:function(){
var _43d=this.padBorderMargin.r+this.padBorderMargin.l;
var max=0;
var sum=0;
var _43e=0;
var v;
var _43f=0;
for(var i=0,c;c=this.c$[i];i++){
if(this.layout.inFlow(c)){
_43f++;
if(c.fitToContentWidth||c instanceof wm.Container&&c._percEx.w==100&&!c.autoScroll&&c.parent&&(c.parent.fitToContentWidth||c.parent.autoScroll)){
v=c.getPreferredFitToContentWidth();
}else{
if(!c._percEx.w){
v=c.bounds.w;
}else{
v=parseInt(c.minWidth)||c.getMinWidthProp();
if(c.bounds.w>v||this.c$.length==1){
if(_43e<100){
_43e+=c._percEx.w;
}
}else{
_43e=100;
}
}
}
max=Math.max(max,v);
sum+=v;
}
}
var _440=_43f==1;
if(!_440&&_43e&&_43e<100){
sum=Math.round(sum*100/_43e);
max=Math.round(max*100/_43e);
}
if(this.layoutKind=="fluid"){
return Math.min(this.bounds.w,max);
}
var _441=((this.layoutKind=="top-to-bottom")?max:sum)+_43d;
return Math.max(this.minWidth,Math.max(_441,wm.Control.prototype.getMinWidthProp.call(this)));
},getFluidHeight:function(){
return this.layout.flow(this,true);
},getPreferredFitToContentHeight:function(){
if(this.layoutKind=="fluid"){
return this.getFluidHeight();
}
var _442=this.padBorderMargin.t+this.padBorderMargin.b;
var max=0;
var sum=0;
var _443=0;
var v;
var _444=0;
for(var i=0,c;c=this.c$[i];i++){
if(this.layout.inFlow(c)){
_444++;
if(c.fitToContentHeight||c instanceof wm.Container&&c._percEx.h==100&&!c.autoScroll&&c.parent&&(c.parent.fitToContentHeight||c.parent.autoScroll)){
v=c.getPreferredFitToContentHeight();
}else{
if(!c._percEx.h){
v=c.bounds.h;
}else{
v=c.getMinHeightProp();
if(c.bounds.h>v||this.c$.length==1){
if(_443<100){
_443+=c._percEx.h;
}
}else{
_443=100;
}
}
}
max=Math.max(max,v);
sum+=v;
}
}
var _445=_444==1;
if(!_445&&_443&&_443<100){
sum=Math.round(sum*100/_443);
max=Math.round(max*100/_443);
}
var _446=((this.layoutKind=="left-to-right")?max:sum)+_442;
return Math.max(_446,wm.Control.prototype.getMinHeightProp.call(this));
},setBestWidth:function(){
this._inDesignResize=true;
this.setWidth(this.getPreferredFitToContentWidth()+"px");
delete this._inDesignResize;
},setBestHeight:function(){
this._inDesignResize=true;
this[this._isDesignLoaded?"set_height":"setHeight"](this.getPreferredFitToContentHeight()+"px");
delete this._inDesignResize;
},getMinWidthProp:function(){
if(this.fitToContentWidth){
return this.getPreferredFitToContentWidth();
}else{
return this.inherited(arguments);
}
},getMinHeightProp:function(){
if(this.fitToContentHeight){
return this.getPreferredFitToContentHeight();
}else{
return this.inherited(arguments);
}
},focusFirstEditor:function(){
for(var i=0;i<this.c$.length;i++){
var w=this.c$[i];
if(wm.isInstanceType(w,[wm.AbstractEditor,wm.Editor])){
w.focus();
return w;
}else{
if(wm.isInstanceType(w,wm.Container)){
var tmp=w.focusFirstEditor();
if(tmp){
return tmp;
}
}
}
}
return null;
},clearEditors:function(){
return this.clearData();
},onEnterKeyPress:function(_447){
}});
wm.Container.extend({layoutKind:"top-to-bottom",horizontalAlign:"justified",verticalAlign:"justified",setLayoutKind:function(_448){
if(this.layoutKind!=_448||!this.layout){
this.layoutKind=_448;
this.layout=wm.layout.cache[_448];
}
if(this.isDesignLoaded()){
dojo.publish("LayoutKindChanged",[this]);
}
this.reflow();
},setHorizontalAlign:function(_449){
this.horizontalAlign=_449;
this.reflow();
},setVerticalAlign:function(_44a){
this.verticalAlign=_44a;
this.reflow();
},setFitToContentWidth:function(_44b){
this.fitToContentWidth=_44b;
this.fitToContent=this.fitToContentWidth||this.fitToContentHeight;
this.updateBounds();
this.reflowParent();
this.calcFitToContent();
this.reflowParent();
},setFitToContentHeight:function(_44c){
this.fitToContentHeight=_44c;
this.fitToContent=this.fitToContentWidth||this.fitToContentHeight;
this.updateBounds();
this.reflowParent();
this.calcFitToContent();
this.reflowParent();
},calcFitToContent:function(){
if(this.fitToContentHeight){
this.height=this.bounds.h+"px";
this._percEx.h=0;
}
if(this.fitToContentWidth){
this.width=this.bounds.w+"px";
this._percEx.w=0;
}
},toHtml:function(_44d){
if(this.customToHtml!=this.constructor.prototype.customToHtml){
return this.customToHtml();
}
var html=[];
var _44e=0;
var _44f=[];
for(var i=0;i<this.c$.length;i++){
var c=this.c$[i];
if(this.layout.inFlow(c)){
_44f[i]=c.toHtml!=wm.Control.prototype.toHtml;
if(_44f[i]&&c.customToHtml!=c.constructor.prototype.customToHtml){
var _450=c.toHtml(_44d);
if(_450===""||_450===undefined||_450===null){
_44f[i]=false;
}
}
if(_44f[i]){
_44e++;
}
}
}
if(this.layoutKind=="top-to-bottom"||_44e<=1){
html.push("<div id='"+this.domNode.id+"' class='wmPanelTopToBottom'>");
for(var i=0;i<this.c$.length;i++){
if(_44f[i]){
var h=this.c$[i].toHtml(_44d);
if(h){
var _451=this.toHtmlStyles();
var _452=(this.c$[i]._classes&&this.c$[i]._classes.domNode?this.c$[i]._classes.domNode:[]);
_452=dojo.filter(_452,function(_453){
return _453.indexOf("wm_Font")==0||_453.indexOf("wm_Text")==0;
});
_452=_452.join(" ");
html.push("<div id='"+this.c$[i].domNode.id+"_Outer' "+_451+" class='"+_452+"'>"+h+"</div>");
}
}
}
}else{
var _454=_44d-4;
var _455=0;
var _456=[];
for(var i=0;i<this.c$.length;i++){
if(_44f[i]){
var c=this.c$[i];
if(!c._percEx.w){
_456[i]=c.bounds.w;
_454-=c.bounds.w;
}else{
_455+=c._percEx.w;
}
}
}
for(var i=0;i<this.c$.length;i++){
if(_44f[i]){
var c=this.c$[i];
if(c._percEx.w){
var _457=c._percEx.w/_455*_454;
_456[i]=_457;
}
}
}
html.push("<div id='"+this.domNode.id+"' class='wmPanelLeftToRight'>");
for(var i=0;i<this.c$.length;i++){
var h=this.c$[i].toHtml(_456[i]);
if(h){
var _451="";
var _452=(this.c$[i]._classes&&this.c$[i]._classes.domNode?this.c$[i]._classes.domNode:[]);
_452=dojo.filter(_452,function(_458){
return _458.indexOf("wm_Font")==0||_458.indexOf("wm_Text")==0;
});
_452=_452.join(" ");
html.push("<div id='"+this.c$[i].domNode.id+"_Outer' style='width:"+_456[i]+"px;' "+_451+" class='"+_452+"'>"+h+"</div>");
}
}
}
html.push("</div>");
return html.join("");
}});
wm.Container.delayedReflowWidgets={};
wm.Container._delayedReflowWidgetsId=0;
wm.Container.runDelayedReflow=function(){
var _459=wm.Container.delayedReflowWidgets;
wm.Container.delayedReflowWidgets={};
wm.Container._delayedReflowWidgetsId=0;
wm.forEachProperty(_459,function(_45a,_45b){
if(!_45a.isDestroyed){
_45a.reflow();
}
});
};
}
if(!dojo._hasResource["wm.base.widget.Layers.Decorator"]){
dojo._hasResource["wm.base.widget.Layers.Decorator"]=true;
dojo.provide("wm.base.widget.Layers.Decorator");
dojo.declare("wm.LayersDecorator",null,{decorationClass:"",constructor:function(_45c){
this.decoree=_45c;
},destroy:function(){
this.decoree=null;
},decorate:function(){
this.decorateContainer();
this.decorateLayers();
},decorateContainer:function(){
var d=this.decoree;
dojo.addClass(d.domNode,this.decorationClass);
},decorateLayers:function(){
dojo.forEach(this.decoree.layers,function(l,i){
this.decorateLayer(l,i);
},this);
},decorateLayer:function(_45d,_45e){
_45d.decorator=this;
},undecorate:function(){
this.undecorateContainer();
var _45f=this.decoree.layers;
for(var i=_45f.length-1;i>=0;i--){
this.undecorateLayer(_45f[i],i);
}
},undecorateContainer:function(){
dojo.removeClass(this.decoree.domNode,this.decorationClass);
},undecorateLayer:function(){
},setLayerShowing:function(_460,_461){
if(this.active){
wm.Control.prototype.setShowing.call(_460,_461);
}else{
_460.showing=_461;
}
},setLayerActive:function(_462,_463){
if(_462.active==_463&&_462.domNode.style.display!="none"){
return;
}
_462.inFlow=_463;
_462.active=_463;
var page=_462.getParentPage();
if(dojo.isIE<=9||wm.isAndroid<=3||this.decoree._cupdating||!page||page._loadingPage||window["studio"]||!this.decoree.transition||this.decoree.transition==="none"){
_462.domNode.style.display=_463?"":"none";
if(_463){
_462.reflowParent();
}
}else{
this.anim(_462,_463);
}
wm.fire(_462,"domNodeShowingChanged",[_463]);
},anim:function(_464,_465){
if(!_464._transitionEndSub){
if(!dojo.isIE||dojo.isIE>=10){
var _466;
if(dojo.isWebKit){
_466="webkitAnimationEnd";
}else{
if(dojo.isOpera){
_466="oanimationend";
}else{
if(dojo.isIE){
_466="MSAnimationEnd";
}else{
_466="animationend";
}
}
}
_464.domNode.addEventListener(_466,function(_467){
if(!_464.isActive()){
_464.domNode.style.display="none";
_464.domNode.style.opacity=1;
}
},false);
_464._transitionEndSub=true;
}
}
var _468=this.decoree.transition;
dojo.removeClass(_464.domNode,[_468+"OutLeftAnim",_468+"OutRightAnim",_468+"InLeftAnim",_468+"InRightAnim"]);
if(!_465){
var _469=_464._transitionNext?"Left":"Right";
dojo.addClass(_464.domNode,_468+"Out"+(_469)+"Anim");
}else{
var _469=_464._transitionNext?"Left":"Right";
_464.domNode.style.display="";
dojo.addClass(_464.domNode,_468+"In"+(_469)+"Anim");
_464.reflowParent();
}
},animFade:function(_46a,_46b){
if(_46b){
_46a.domNode.style.opacity=0.01;
_46a.domNode.style.display="";
}
var _46c=(_46b)?1:0.01;
var anim=dojo.animateProperty({node:_46a.domNode,properties:{opacity:_46c},duration:350});
dojo.connect(anim,"onEnd",function(){
if(!_46b){
_46a.domNode.style.display="none";
_46a.domNode.style.opacity=1;
}else{
_46a.reflow();
}
});
anim.play();
},activateLayer:function(_46d){
var d=this.decoree;
var old=d.getLayer(d.lastLayerIndex);
if(old&&old!=_46d){
old._transitionNext=_46d._transitionNext=_46d.getIndex()>old.getIndex();
this.setLayerActive(old,false);
}
this.setLayerActive(_46d,true);
},applyLayerCaption:function(){
},moveLayerIndex:function(_46e,_46f){
var d=this.decoree,l=d.getLayer(_46e);
d.client.removeControl(l);
d.client.insertControl(l,_46f);
}});
}
if(!dojo._hasResource["dojo.dnd.common"]){
dojo._hasResource["dojo.dnd.common"]=true;
dojo.provide("dojo.dnd.common");
dojo.getObject("dnd",true,dojo);
dojo.dnd.getCopyKeyState=dojo.isCopyKey;
dojo.dnd._uniqueId=0;
dojo.dnd.getUniqueId=function(){
var id;
do{
id=dojo._scopeName+"Unique"+(++dojo.dnd._uniqueId);
}while(dojo.byId(id));
return id;
};
dojo.dnd._empty={};
dojo.dnd.isFormElement=function(e){
var t=e.target;
if(t.nodeType==3){
t=t.parentNode;
}
return " button textarea input select option ".indexOf(" "+t.tagName.toLowerCase()+" ")>=0;
};
}
if(!dojo._hasResource["dojo.date.stamp"]){
dojo._hasResource["dojo.date.stamp"]=true;
dojo.provide("dojo.date.stamp");
dojo.getObject("date.stamp",true,dojo);
dojo.date.stamp.fromISOString=function(_470,_471){
if(!dojo.date.stamp._isoRegExp){
dojo.date.stamp._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
}
var _472=dojo.date.stamp._isoRegExp.exec(_470),_473=null;
if(_472){
_472.shift();
if(_472[1]){
_472[1]--;
}
if(_472[6]){
_472[6]*=1000;
}
if(_471){
_471=new Date(_471);
dojo.forEach(dojo.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(prop){
return _471["get"+prop]();
}),function(_474,_475){
_472[_475]=_472[_475]||_474;
});
}
_473=new Date(_472[0]||1970,_472[1]||0,_472[2]||1,_472[3]||0,_472[4]||0,_472[5]||0,_472[6]||0);
if(_472[0]<100){
_473.setFullYear(_472[0]||1970);
}
var _476=0,_477=_472[7]&&_472[7].charAt(0);
if(_477!="Z"){
_476=((_472[8]||0)*60)+(Number(_472[9])||0);
if(_477!="-"){
_476*=-1;
}
}
if(_477){
_476-=_473.getTimezoneOffset();
}
if(_476){
_473.setTime(_473.getTime()+_476*60000);
}
}
return _473;
};
dojo.date.stamp.toISOString=function(_478,_479){
var _47a=function(n){
return (n<10)?"0"+n:n;
};
_479=_479||{};
var _47b=[],_47c=_479.zulu?"getUTC":"get",date="";
if(_479.selector!="time"){
var year=_478[_47c+"FullYear"]();
date=["0000".substr((year+"").length)+year,_47a(_478[_47c+"Month"]()+1),_47a(_478[_47c+"Date"]())].join("-");
}
_47b.push(date);
if(_479.selector!="date"){
var time=[_47a(_478[_47c+"Hours"]()),_47a(_478[_47c+"Minutes"]()),_47a(_478[_47c+"Seconds"]())].join(":");
var _47d=_478[_47c+"Milliseconds"]();
if(_479.milliseconds){
time+="."+(_47d<100?"0":"")+_47a(_47d);
}
if(_479.zulu){
time+="Z";
}else{
if(_479.selector!="time"){
var _47e=_478.getTimezoneOffset();
var _47f=Math.abs(_47e);
time+=(_47e>0?"-":"+")+_47a(Math.floor(_47f/60))+":"+_47a(_47f%60);
}
}
_47b.push(time);
}
return _47b.join("T");
};
}
if(!dojo._hasResource["dojo.parser"]){
dojo._hasResource["dojo.parser"]=true;
dojo.provide("dojo.parser");
new Date("X");
dojo.parser=new function(){
var d=dojo;
function _480(_481){
if(d.isString(_481)){
return "string";
}
if(typeof _481=="number"){
return "number";
}
if(typeof _481=="boolean"){
return "boolean";
}
if(d.isFunction(_481)){
return "function";
}
if(d.isArray(_481)){
return "array";
}
if(_481 instanceof Date){
return "date";
}
if(_481 instanceof d._Url){
return "url";
}
return "object";
};
function _482(_483,type){
switch(type){
case "string":
return _483;
case "number":
return _483.length?Number(_483):NaN;
case "boolean":
return typeof _483=="boolean"?_483:!(_483.toLowerCase()=="false");
case "function":
if(d.isFunction(_483)){
_483=_483.toString();
_483=d.trim(_483.substring(_483.indexOf("{")+1,_483.length-1));
}
try{
if(_483===""||_483.search(/[^\w\.]+/i)!=-1){
return new Function(_483);
}else{
return d.getObject(_483,false)||new Function(_483);
}
}
catch(e){
return new Function();
}
case "array":
return _483?_483.split(/\s*,\s*/):[];
case "date":
switch(_483){
case "":
return new Date("");
case "now":
return new Date();
default:
return d.date.stamp.fromISOString(_483);
}
case "url":
return d.baseUrl+_483;
default:
return d.fromJson(_483);
}
};
var _484={},_485={};
d.connect(d,"extend",function(){
_485={};
});
function _486(cls,_487){
for(var name in cls){
if(name.charAt(0)=="_"){
continue;
}
if(name in _484){
continue;
}
_487[name]=_480(cls[name]);
}
return _487;
};
function _488(_489,_48a){
var c=_485[_489];
if(!c){
var cls=d.getObject(_489),_48b=null;
if(!cls){
return null;
}
if(!_48a){
_48b=_486(cls.prototype,{});
}
c={cls:cls,params:_48b};
}else{
if(!_48a&&!c.params){
c.params=_486(c.cls.prototype,{});
}
}
return c;
};
this._functionFromScript=function(_48c,_48d){
var _48e="";
var _48f="";
var _490=(_48c.getAttribute(_48d+"args")||_48c.getAttribute("args"));
if(_490){
d.forEach(_490.split(/\s*,\s*/),function(part,idx){
_48e+="var "+part+" = arguments["+idx+"]; ";
});
}
var _491=_48c.getAttribute("with");
if(_491&&_491.length){
d.forEach(_491.split(/\s*,\s*/),function(part){
_48e+="with("+part+"){";
_48f+="}";
});
}
return new Function(_48e+_48c.innerHTML+_48f);
};
this.instantiate=function(_492,_493,args){
var _494=[],_493=_493||{};
args=args||{};
var _495=(args.scope||d._scopeName)+"Type",_496="data-"+(args.scope||d._scopeName)+"-";
d.forEach(_492,function(obj){
if(!obj){
return;
}
var node,type,_497,_498,_499,_49a;
if(obj.node){
node=obj.node;
type=obj.type;
_49a=obj.fastpath;
_497=obj.clsInfo||(type&&_488(type,_49a));
_498=_497&&_497.cls;
_499=obj.scripts;
}else{
node=obj;
type=_495 in _493?_493[_495]:node.getAttribute(_495);
_497=type&&_488(type);
_498=_497&&_497.cls;
_499=(_498&&(_498._noScript||_498.prototype._noScript)?[]:d.query("> script[type^='dojo/']",node));
}
if(!_497){
throw new Error("Could not load class '"+type);
}
var _49b={};
if(args.defaults){
d._mixin(_49b,args.defaults);
}
if(obj.inherited){
d._mixin(_49b,obj.inherited);
}
if(_49a){
var _49c=node.getAttribute(_496+"props");
if(_49c&&_49c.length){
try{
_49c=d.fromJson.call(args.propsThis,"{"+_49c+"}");
d._mixin(_49b,_49c);
}
catch(e){
throw new Error(e.toString()+" in data-dojo-props='"+_49c+"'");
}
}
var _49d=node.getAttribute(_496+"attach-point");
if(_49d){
_49b.dojoAttachPoint=_49d;
}
var _49e=node.getAttribute(_496+"attach-event");
if(_49e){
_49b.dojoAttachEvent=_49e;
}
dojo.mixin(_49b,_493);
}else{
var _49f=node.attributes;
for(var name in _497.params){
var item=name in _493?{value:_493[name],specified:true}:_49f.getNamedItem(name);
if(!item||(!item.specified&&(!dojo.isIE||name.toLowerCase()!="value"))){
continue;
}
var _4a0=item.value;
switch(name){
case "class":
_4a0="className" in _493?_493.className:node.className;
break;
case "style":
_4a0="style" in _493?_493.style:(node.style&&node.style.cssText);
}
var _4a1=_497.params[name];
if(typeof _4a0=="string"){
_49b[name]=_482(_4a0,_4a1);
}else{
_49b[name]=_4a0;
}
}
}
var _4a2=[],_4a3=[];
d.forEach(_499,function(_4a4){
node.removeChild(_4a4);
var _4a5=(_4a4.getAttribute(_496+"event")||_4a4.getAttribute("event")),type=_4a4.getAttribute("type"),nf=d.parser._functionFromScript(_4a4,_496);
if(_4a5){
if(type=="dojo/connect"){
_4a2.push({event:_4a5,func:nf});
}else{
_49b[_4a5]=nf;
}
}else{
_4a3.push(nf);
}
});
var _4a6=_498.markupFactory||_498.prototype&&_498.prototype.markupFactory;
var _4a7=_4a6?_4a6(_49b,node,_498):new _498(_49b,node);
_494.push(_4a7);
var _4a8=(node.getAttribute(_496+"id")||node.getAttribute("jsId"));
if(_4a8){
d.setObject(_4a8,_4a7);
}
d.forEach(_4a2,function(_4a9){
d.connect(_4a7,_4a9.event,null,_4a9.func);
});
d.forEach(_4a3,function(func){
func.call(_4a7);
});
});
if(!_493._started){
d.forEach(_494,function(_4aa){
if(!args.noStart&&_4aa&&dojo.isFunction(_4aa.startup)&&!_4aa._started&&(!_4aa.getParent||!_4aa.getParent())){
_4aa.startup();
}
});
}
return _494;
};
this.parse=function(_4ab,args){
var root;
if(!args&&_4ab&&_4ab.rootNode){
args=_4ab;
root=args.rootNode;
}else{
root=_4ab;
}
root=root?dojo.byId(root):dojo.body();
args=args||{};
var _4ac=(args.scope||d._scopeName)+"Type",_4ad="data-"+(args.scope||d._scopeName)+"-";
function scan(_4ae,list){
var _4af=dojo.clone(_4ae.inherited);
dojo.forEach(["dir","lang"],function(name){
var val=_4ae.node.getAttribute(name);
if(val){
_4af[name]=val;
}
});
var _4b0=_4ae.clsInfo&&!_4ae.clsInfo.cls.prototype._noScript?_4ae.scripts:null;
var _4b1=(!_4ae.clsInfo||!_4ae.clsInfo.cls.prototype.stopParser)||(args&&args.template);
for(var _4b2=_4ae.node.firstChild;_4b2;_4b2=_4b2.nextSibling){
if(_4b2.nodeType==1){
var type,_4b3=_4b1&&_4b2.getAttribute(_4ad+"type");
if(_4b3){
type=_4b3;
}else{
type=_4b1&&_4b2.getAttribute(_4ac);
}
var _4b4=_4b3==type;
if(type){
var _4b5={"type":type,fastpath:_4b4,clsInfo:_488(type,_4b4),node:_4b2,scripts:[],inherited:_4af};
list.push(_4b5);
scan(_4b5,list);
}else{
if(_4b0&&_4b2.nodeName.toLowerCase()=="script"){
type=_4b2.getAttribute("type");
if(type&&/^dojo\/\w/i.test(type)){
_4b0.push(_4b2);
}
}else{
if(_4b1){
scan({node:_4b2,inherited:_4af},list);
}
}
}
}
}
};
var _4b6={};
if(args&&args.inherited){
for(var key in args.inherited){
if(args.inherited[key]){
_4b6[key]=args.inherited[key];
}
}
}
var list=[];
scan({node:root,inherited:_4b6},list);
var _4b7=args&&args.template?{template:true}:null;
return this.instantiate(list,_4b7,args);
};
}();
(function(){
var _4b8=function(){
if(dojo.config.parseOnLoad){
dojo.parser.parse();
}
};
if(dojo.getObject("dijit.wai.onload")===dojo._loaders[0]){
dojo._loaders.splice(1,0,_4b8);
}else{
dojo._loaders.unshift(_4b8);
}
})();
}
if(!dojo._hasResource["dojo.dnd.Container"]){
dojo._hasResource["dojo.dnd.Container"]=true;
dojo.provide("dojo.dnd.Container");
dojo.declare("dojo.dnd.Container",null,{skipForm:false,constructor:function(node,_4b9){
this.node=dojo.byId(node);
if(!_4b9){
_4b9={};
}
this.creator=_4b9.creator||null;
this.skipForm=_4b9.skipForm;
this.parent=_4b9.dropParent&&dojo.byId(_4b9.dropParent);
this.map={};
this.current=null;
this.containerState="";
dojo.addClass(this.node,"dojoDndContainer");
if(!(_4b9&&_4b9._skipStartup)){
this.startup();
}
this.events=[dojo.connect(this.node,"onmouseover",this,"onMouseOver"),dojo.connect(this.node,"onmouseout",this,"onMouseOut"),dojo.connect(this.node,"ondragstart",this,"onSelectStart"),dojo.connect(this.node,"onselectstart",this,"onSelectStart")];
},creator:function(){
},getItem:function(key){
return this.map[key];
},setItem:function(key,data){
this.map[key]=data;
},delItem:function(key){
delete this.map[key];
},forInItems:function(f,o){
o=o||dojo.global;
var m=this.map,e=dojo.dnd._empty;
for(var i in m){
if(i in e){
continue;
}
f.call(o,m[i],i,this);
}
return o;
},clearItems:function(){
this.map={};
},getAllNodes:function(){
return dojo.query("> .dojoDndItem",this.parent);
},sync:function(){
var map={};
this.getAllNodes().forEach(function(node){
if(node.id){
var item=this.getItem(node.id);
if(item){
map[node.id]=item;
return;
}
}else{
node.id=dojo.dnd.getUniqueId();
}
var type=node.getAttribute("dndType"),data=node.getAttribute("dndData");
map[node.id]={data:data||node.innerHTML,type:type?type.split(/\s*,\s*/):["text"]};
},this);
this.map=map;
return this;
},insertNodes:function(data,_4ba,_4bb){
if(!this.parent.firstChild){
_4bb=null;
}else{
if(_4ba){
if(!_4bb){
_4bb=this.parent.firstChild;
}
}else{
if(_4bb){
_4bb=_4bb.nextSibling;
}
}
}
if(_4bb){
for(var i=0;i<data.length;++i){
var t=this._normalizedCreator(data[i]);
this.setItem(t.node.id,{data:t.data,type:t.type});
this.parent.insertBefore(t.node,_4bb);
}
}else{
for(var i=0;i<data.length;++i){
var t=this._normalizedCreator(data[i]);
this.setItem(t.node.id,{data:t.data,type:t.type});
this.parent.appendChild(t.node);
}
}
return this;
},destroy:function(){
dojo.forEach(this.events,dojo.disconnect);
this.clearItems();
this.node=this.parent=this.current=null;
},markupFactory:function(_4bc,node){
_4bc._skipStartup=true;
return new dojo.dnd.Container(node,_4bc);
},startup:function(){
if(!this.parent){
this.parent=this.node;
if(this.parent.tagName.toLowerCase()=="table"){
var c=this.parent.getElementsByTagName("tbody");
if(c&&c.length){
this.parent=c[0];
}
}
}
this.defaultCreator=dojo.dnd._defaultCreator(this.parent);
this.sync();
},onMouseOver:function(e){
var n=e.relatedTarget;
while(n){
if(n==this.node){
break;
}
try{
n=n.parentNode;
}
catch(x){
n=null;
}
}
if(!n){
this._changeState("Container","Over");
this.onOverEvent();
}
n=this._getChildByEvent(e);
if(this.current==n){
return;
}
if(this.current){
this._removeItemClass(this.current,"Over");
}
if(n){
this._addItemClass(n,"Over");
}
this.current=n;
},onMouseOut:function(e){
for(var n=e.relatedTarget;n;){
if(n==this.node){
return;
}
try{
n=n.parentNode;
}
catch(x){
n=null;
}
}
if(this.current){
this._removeItemClass(this.current,"Over");
this.current=null;
}
this._changeState("Container","");
this.onOutEvent();
},onSelectStart:function(e){
if(!this.skipForm||!dojo.dnd.isFormElement(e)){
dojo.stopEvent(e);
}
},onOverEvent:function(){
},onOutEvent:function(){
},_changeState:function(type,_4bd){
var _4be="dojoDnd"+type;
var _4bf=type.toLowerCase()+"State";
dojo.replaceClass(this.node,_4be+_4bd,_4be+this[_4bf]);
this[_4bf]=_4bd;
},_addItemClass:function(node,type){
dojo.addClass(node,"dojoDndItem"+type);
},_removeItemClass:function(node,type){
dojo.removeClass(node,"dojoDndItem"+type);
},_getChildByEvent:function(e){
var node=e.target;
if(node){
for(var _4c0=node.parentNode;_4c0;node=_4c0,_4c0=node.parentNode){
if(_4c0==this.parent&&dojo.hasClass(node,"dojoDndItem")){
return node;
}
}
}
return null;
},_normalizedCreator:function(item,hint){
var t=(this.creator||this.defaultCreator).call(this,item,hint);
if(!dojo.isArray(t.type)){
t.type=["text"];
}
if(!t.node.id){
t.node.id=dojo.dnd.getUniqueId();
}
dojo.addClass(t.node,"dojoDndItem");
return t;
}});
dojo.dnd._createNode=function(tag){
if(!tag){
return dojo.dnd._createSpan;
}
return function(text){
return dojo.create(tag,{innerHTML:text});
};
};
dojo.dnd._createTrTd=function(text){
var tr=dojo.create("tr");
dojo.create("td",{innerHTML:text},tr);
return tr;
};
dojo.dnd._createSpan=function(text){
return dojo.create("span",{innerHTML:text});
};
dojo.dnd._defaultCreatorNodes={ul:"li",ol:"li",div:"div",p:"div"};
dojo.dnd._defaultCreator=function(node){
var tag=node.tagName.toLowerCase();
var c=tag=="tbody"||tag=="thead"?dojo.dnd._createTrTd:dojo.dnd._createNode(dojo.dnd._defaultCreatorNodes[tag]);
return function(item,hint){
var _4c1=item&&dojo.isObject(item),data,type,n;
if(_4c1&&item.tagName&&item.nodeType&&item.getAttribute){
data=item.getAttribute("dndData")||item.innerHTML;
type=item.getAttribute("dndType");
type=type?type.split(/\s*,\s*/):["text"];
n=item;
}else{
data=(_4c1&&item.data)?item.data:item;
type=(_4c1&&item.type)?item.type:["text"];
n=(hint=="avatar"?dojo.dnd._createSpan:c)(String(data));
}
if(!n.id){
n.id=dojo.dnd.getUniqueId();
}
return {node:n,data:data,type:type};
};
};
}
if(!dojo._hasResource["dojo.dnd.Selector"]){
dojo._hasResource["dojo.dnd.Selector"]=true;
dojo.provide("dojo.dnd.Selector");
dojo.declare("dojo.dnd.Selector",dojo.dnd.Container,{constructor:function(node,_4c2){
if(!_4c2){
_4c2={};
}
this.singular=_4c2.singular;
this.autoSync=_4c2.autoSync;
this.selection={};
this.anchor=null;
this.simpleSelection=false;
this.events.push(dojo.connect(this.node,"onmousedown",this,"onMouseDown"),dojo.connect(this.node,"onmouseup",this,"onMouseUp"));
},singular:false,getSelectedNodes:function(){
var t=new dojo.NodeList();
var e=dojo.dnd._empty;
for(var i in this.selection){
if(i in e){
continue;
}
t.push(dojo.byId(i));
}
return t;
},selectNone:function(){
return this._removeSelection()._removeAnchor();
},selectAll:function(){
this.forInItems(function(data,id){
this._addItemClass(dojo.byId(id),"Selected");
this.selection[id]=1;
},this);
return this._removeAnchor();
},deleteSelectedNodes:function(){
var e=dojo.dnd._empty;
for(var i in this.selection){
if(i in e){
continue;
}
var n=dojo.byId(i);
this.delItem(i);
dojo.destroy(n);
}
this.anchor=null;
this.selection={};
return this;
},forInSelectedItems:function(f,o){
o=o||dojo.global;
var s=this.selection,e=dojo.dnd._empty;
for(var i in s){
if(i in e){
continue;
}
f.call(o,this.getItem(i),i,this);
}
},sync:function(){
dojo.dnd.Selector.superclass.sync.call(this);
if(this.anchor){
if(!this.getItem(this.anchor.id)){
this.anchor=null;
}
}
var t=[],e=dojo.dnd._empty;
for(var i in this.selection){
if(i in e){
continue;
}
if(!this.getItem(i)){
t.push(i);
}
}
dojo.forEach(t,function(i){
delete this.selection[i];
},this);
return this;
},insertNodes:function(_4c3,data,_4c4,_4c5){
var _4c6=this._normalizedCreator;
this._normalizedCreator=function(item,hint){
var t=_4c6.call(this,item,hint);
if(_4c3){
if(!this.anchor){
this.anchor=t.node;
this._removeItemClass(t.node,"Selected");
this._addItemClass(this.anchor,"Anchor");
}else{
if(this.anchor!=t.node){
this._removeItemClass(t.node,"Anchor");
this._addItemClass(t.node,"Selected");
}
}
this.selection[t.node.id]=1;
}else{
this._removeItemClass(t.node,"Selected");
this._removeItemClass(t.node,"Anchor");
}
return t;
};
dojo.dnd.Selector.superclass.insertNodes.call(this,data,_4c4,_4c5);
this._normalizedCreator=_4c6;
return this;
},destroy:function(){
dojo.dnd.Selector.superclass.destroy.call(this);
this.selection=this.anchor=null;
},markupFactory:function(_4c7,node){
_4c7._skipStartup=true;
return new dojo.dnd.Selector(node,_4c7);
},onMouseDown:function(e){
if(this.autoSync){
this.sync();
}
if(!this.current){
return;
}
if(!this.singular&&!dojo.isCopyKey(e)&&!e.shiftKey&&(this.current.id in this.selection)){
this.simpleSelection=true;
if(e.button===dojo.mouseButtons.LEFT){
dojo.stopEvent(e);
}
return;
}
if(!this.singular&&e.shiftKey){
if(!dojo.isCopyKey(e)){
this._removeSelection();
}
var c=this.getAllNodes();
if(c.length){
if(!this.anchor){
this.anchor=c[0];
this._addItemClass(this.anchor,"Anchor");
}
this.selection[this.anchor.id]=1;
if(this.anchor!=this.current){
var i=0;
for(;i<c.length;++i){
var node=c[i];
if(node==this.anchor||node==this.current){
break;
}
}
for(++i;i<c.length;++i){
var node=c[i];
if(node==this.anchor||node==this.current){
break;
}
this._addItemClass(node,"Selected");
this.selection[node.id]=1;
}
this._addItemClass(this.current,"Selected");
this.selection[this.current.id]=1;
}
}
}else{
if(this.singular){
if(this.anchor==this.current){
if(dojo.isCopyKey(e)){
this.selectNone();
}
}else{
this.selectNone();
this.anchor=this.current;
this._addItemClass(this.anchor,"Anchor");
this.selection[this.current.id]=1;
}
}else{
if(dojo.isCopyKey(e)){
if(this.anchor==this.current){
delete this.selection[this.anchor.id];
this._removeAnchor();
}else{
if(this.current.id in this.selection){
this._removeItemClass(this.current,"Selected");
delete this.selection[this.current.id];
}else{
if(this.anchor){
this._removeItemClass(this.anchor,"Anchor");
this._addItemClass(this.anchor,"Selected");
}
this.anchor=this.current;
this._addItemClass(this.current,"Anchor");
this.selection[this.current.id]=1;
}
}
}else{
if(!(this.current.id in this.selection)){
this.selectNone();
this.anchor=this.current;
this._addItemClass(this.current,"Anchor");
this.selection[this.current.id]=1;
}
}
}
}
dojo.stopEvent(e);
},onMouseUp:function(e){
if(!this.simpleSelection){
return;
}
this.simpleSelection=false;
this.selectNone();
if(this.current){
this.anchor=this.current;
this._addItemClass(this.anchor,"Anchor");
this.selection[this.current.id]=1;
}
},onMouseMove:function(e){
this.simpleSelection=false;
},onOverEvent:function(){
this.onmousemoveEvent=dojo.connect(this.node,"onmousemove",this,"onMouseMove");
},onOutEvent:function(){
dojo.disconnect(this.onmousemoveEvent);
delete this.onmousemoveEvent;
},_removeSelection:function(){
var e=dojo.dnd._empty;
for(var i in this.selection){
if(i in e){
continue;
}
var node=dojo.byId(i);
if(node){
this._removeItemClass(node,"Selected");
}
}
this.selection={};
return this;
},_removeAnchor:function(){
if(this.anchor){
this._removeItemClass(this.anchor,"Anchor");
this.anchor=null;
}
return this;
}});
}
if(!dojo._hasResource["dojo.window"]){
dojo._hasResource["dojo.window"]=true;
dojo.provide("dojo.window");
dojo.getObject("window",true,dojo);
dojo.window.getBox=function(){
var _4c8=(dojo.doc.compatMode=="BackCompat")?dojo.body():dojo.doc.documentElement;
var _4c9=dojo._docScroll();
return {w:_4c8.clientWidth,h:_4c8.clientHeight,l:_4c9.x,t:_4c9.y};
};
dojo.window.get=function(doc){
if(dojo.isIE&&window!==document.parentWindow){
doc.parentWindow.execScript("document._parentWindow = window;","Javascript");
var win=doc._parentWindow;
doc._parentWindow=null;
return win;
}
return doc.parentWindow||doc.defaultView;
};
dojo.window.scrollIntoView=function(node,pos){
try{
node=dojo.byId(node);
var doc=node.ownerDocument||dojo.doc,body=doc.body||dojo.body(),html=doc.documentElement||body.parentNode,isIE=dojo.isIE,isWK=dojo.isWebKit;
if((!(dojo.isMoz||isIE||isWK||dojo.isOpera)||node==body||node==html)&&(typeof node.scrollIntoView!="undefined")){
node.scrollIntoView(false);
return;
}
var _4ca=doc.compatMode=="BackCompat",_4cb=(isIE>=9&&node.ownerDocument.parentWindow.frameElement)?((html.clientHeight>0&&html.clientWidth>0&&(body.clientHeight==0||body.clientWidth==0||body.clientHeight>html.clientHeight||body.clientWidth>html.clientWidth))?html:body):(_4ca?body:html),_4cc=isWK?body:_4cb,_4cd=_4cb.clientWidth,_4ce=_4cb.clientHeight,rtl=!dojo._isBodyLtr(),_4cf=pos||dojo.position(node),el=node.parentNode,_4d0=function(el){
return ((isIE<=6||(isIE&&_4ca))?false:(dojo.style(el,"position").toLowerCase()=="fixed"));
};
if(_4d0(node)){
return;
}
while(el){
if(el==body){
el=_4cc;
}
var _4d1=dojo.position(el),_4d2=_4d0(el);
if(el==_4cc){
_4d1.w=_4cd;
_4d1.h=_4ce;
if(_4cc==html&&isIE&&rtl){
_4d1.x+=_4cc.offsetWidth-_4d1.w;
}
if(_4d1.x<0||!isIE){
_4d1.x=0;
}
if(_4d1.y<0||!isIE){
_4d1.y=0;
}
}else{
var pb=dojo._getPadBorderExtents(el);
_4d1.w-=pb.w;
_4d1.h-=pb.h;
_4d1.x+=pb.l;
_4d1.y+=pb.t;
var _4d3=el.clientWidth,_4d4=_4d1.w-_4d3;
if(_4d3>0&&_4d4>0){
_4d1.w=_4d3;
_4d1.x+=(rtl&&(isIE||el.clientLeft>pb.l))?_4d4:0;
}
_4d3=el.clientHeight;
_4d4=_4d1.h-_4d3;
if(_4d3>0&&_4d4>0){
_4d1.h=_4d3;
}
}
if(_4d2){
if(_4d1.y<0){
_4d1.h+=_4d1.y;
_4d1.y=0;
}
if(_4d1.x<0){
_4d1.w+=_4d1.x;
_4d1.x=0;
}
if(_4d1.y+_4d1.h>_4ce){
_4d1.h=_4ce-_4d1.y;
}
if(_4d1.x+_4d1.w>_4cd){
_4d1.w=_4cd-_4d1.x;
}
}
var l=_4cf.x-_4d1.x,t=_4cf.y-Math.max(_4d1.y,0),r=l+_4cf.w-_4d1.w,bot=t+_4cf.h-_4d1.h;
if(r*l>0){
var s=Math[l<0?"max":"min"](l,r);
if(rtl&&((isIE==8&&!_4ca)||isIE>=9)){
s=-s;
}
_4cf.x+=el.scrollLeft;
el.scrollLeft+=s;
_4cf.x-=el.scrollLeft;
}
if(bot*t>0){
_4cf.y+=el.scrollTop;
el.scrollTop+=Math[t<0?"max":"min"](t,bot);
_4cf.y-=el.scrollTop;
}
el=(el!=_4cc)&&!_4d2&&el.parentNode;
}
}
catch(error){
console.error("scrollIntoView: "+error);
node.scrollIntoView(false);
}
};
}
if(!dojo._hasResource["dojo.dnd.autoscroll"]){
dojo._hasResource["dojo.dnd.autoscroll"]=true;
dojo.provide("dojo.dnd.autoscroll");
dojo.getObject("dnd",true,dojo);
dojo.dnd.getViewport=dojo.window.getBox;
dojo.dnd.V_TRIGGER_AUTOSCROLL=32;
dojo.dnd.H_TRIGGER_AUTOSCROLL=32;
dojo.dnd.V_AUTOSCROLL_VALUE=16;
dojo.dnd.H_AUTOSCROLL_VALUE=16;
dojo.dnd.autoScroll=function(e){
var v=dojo.window.getBox(),dx=0,dy=0;
if(e.clientX<dojo.dnd.H_TRIGGER_AUTOSCROLL){
dx=-dojo.dnd.H_AUTOSCROLL_VALUE;
}else{
if(e.clientX>v.w-dojo.dnd.H_TRIGGER_AUTOSCROLL){
dx=dojo.dnd.H_AUTOSCROLL_VALUE;
}
}
if(e.clientY<dojo.dnd.V_TRIGGER_AUTOSCROLL){
dy=-dojo.dnd.V_AUTOSCROLL_VALUE;
}else{
if(e.clientY>v.h-dojo.dnd.V_TRIGGER_AUTOSCROLL){
dy=dojo.dnd.V_AUTOSCROLL_VALUE;
}
}
window.scrollBy(dx,dy);
};
dojo.dnd._validNodes={"div":1,"p":1,"td":1};
dojo.dnd._validOverflow={"auto":1,"scroll":1};
dojo.dnd.autoScrollNodes=function(e){
for(var n=e.target;n;){
if(n.nodeType==1&&(n.tagName.toLowerCase() in dojo.dnd._validNodes)){
var s=dojo.getComputedStyle(n);
if(s.overflow.toLowerCase() in dojo.dnd._validOverflow){
var b=dojo._getContentBox(n,s),t=dojo.position(n,true);
var w=Math.min(dojo.dnd.H_TRIGGER_AUTOSCROLL,b.w/2),h=Math.min(dojo.dnd.V_TRIGGER_AUTOSCROLL,b.h/2),rx=e.pageX-t.x,ry=e.pageY-t.y,dx=0,dy=0;
if(dojo.isWebKit||dojo.isOpera){
rx+=dojo.body().scrollLeft;
ry+=dojo.body().scrollTop;
}
if(rx>0&&rx<b.w){
if(rx<w){
dx=-w;
}else{
if(rx>b.w-w){
dx=w;
}
}
}
if(ry>0&&ry<b.h){
if(ry<h){
dy=-h;
}else{
if(ry>b.h-h){
dy=h;
}
}
}
var _4d5=n.scrollLeft,_4d6=n.scrollTop;
n.scrollLeft=n.scrollLeft+dx;
n.scrollTop=n.scrollTop+dy;
if(_4d5!=n.scrollLeft||_4d6!=n.scrollTop){
return;
}
}
}
try{
n=n.parentNode;
}
catch(x){
n=null;
}
}
dojo.dnd.autoScroll(e);
};
}
if(!dojo._hasResource["dojo.dnd.Avatar"]){
dojo._hasResource["dojo.dnd.Avatar"]=true;
dojo.provide("dojo.dnd.Avatar");
dojo.declare("dojo.dnd.Avatar",null,{constructor:function(_4d7){
this.manager=_4d7;
this.construct();
},construct:function(){
this.isA11y=dojo.hasClass(dojo.body(),"dijit_a11y");
var a=dojo.create("table",{"class":"dojoDndAvatar",style:{position:"absolute",zIndex:"1999",margin:"0px"}}),_4d8=this.manager.source,node,b=dojo.create("tbody",null,a),tr=dojo.create("tr",null,b),td=dojo.create("td",null,tr),icon=this.isA11y?dojo.create("span",{id:"a11yIcon",innerHTML:this.manager.copy?"+":"<"},td):null,span=dojo.create("span",{innerHTML:_4d8.generateText?this._generateText():""},td),k=Math.min(5,this.manager.nodes.length),i=0;
dojo.attr(tr,{"class":"dojoDndAvatarHeader",style:{opacity:0.9}});
for(;i<k;++i){
if(_4d8.creator){
node=_4d8._normalizedCreator(_4d8.getItem(this.manager.nodes[i].id).data,"avatar").node;
}else{
node=this.manager.nodes[i].cloneNode(true);
if(node.tagName.toLowerCase()=="tr"){
var _4d9=dojo.create("table"),_4da=dojo.create("tbody",null,_4d9);
_4da.appendChild(node);
node=_4d9;
}
}
node.id="";
tr=dojo.create("tr",null,b);
td=dojo.create("td",null,tr);
td.appendChild(node);
dojo.attr(tr,{"class":"dojoDndAvatarItem",style:{opacity:(9-i)/10}});
}
this.node=a;
},destroy:function(){
dojo.destroy(this.node);
this.node=false;
},update:function(){
dojo[(this.manager.canDropFlag?"add":"remove")+"Class"](this.node,"dojoDndAvatarCanDrop");
if(this.isA11y){
var icon=dojo.byId("a11yIcon");
var text="+";
if(this.manager.canDropFlag&&!this.manager.copy){
text="< ";
}else{
if(!this.manager.canDropFlag&&!this.manager.copy){
text="o";
}else{
if(!this.manager.canDropFlag){
text="x";
}
}
}
icon.innerHTML=text;
}
dojo.query(("tr.dojoDndAvatarHeader td span"+(this.isA11y?" span":"")),this.node).forEach(function(node){
node.innerHTML=this._generateText();
},this);
},_generateText:function(){
return this.manager.nodes.length.toString();
}});
}
if(!dojo._hasResource["dojo.dnd.Manager"]){
dojo._hasResource["dojo.dnd.Manager"]=true;
dojo.provide("dojo.dnd.Manager");
dojo.declare("dojo.dnd.Manager",null,{constructor:function(){
this.avatar=null;
this.source=null;
this.nodes=[];
this.copy=true;
this.target=null;
this.canDropFlag=false;
this.events=[];
},OFFSET_X:16,OFFSET_Y:16,overSource:function(_4db){
if(this.avatar){
this.target=(_4db&&_4db.targetState!="Disabled")?_4db:null;
this.canDropFlag=Boolean(this.target);
this.avatar.update();
}
dojo.publish("/dnd/source/over",[_4db]);
},outSource:function(_4dc){
if(this.avatar){
if(this.target==_4dc){
this.target=null;
this.canDropFlag=false;
this.avatar.update();
dojo.publish("/dnd/source/over",[null]);
}
}else{
dojo.publish("/dnd/source/over",[null]);
}
},startDrag:function(_4dd,_4de,copy){
this.source=_4dd;
this.nodes=_4de;
this.copy=Boolean(copy);
this.avatar=this.makeAvatar();
dojo.body().appendChild(this.avatar.node);
dojo.publish("/dnd/start",[_4dd,_4de,this.copy]);
this.events=[dojo.connect(dojo.doc,"onmousemove",this,"onMouseMove"),dojo.connect(dojo.doc,"onmouseup",this,"onMouseUp"),dojo.connect(dojo.doc,"onkeydown",this,"onKeyDown"),dojo.connect(dojo.doc,"onkeyup",this,"onKeyUp"),dojo.connect(dojo.doc,"ondragstart",dojo.stopEvent),dojo.connect(dojo.body(),"onselectstart",dojo.stopEvent)];
var c="dojoDnd"+(copy?"Copy":"Move");
dojo.addClass(dojo.body(),c);
},canDrop:function(flag){
var _4df=Boolean(this.target&&flag);
if(this.canDropFlag!=_4df){
this.canDropFlag=_4df;
this.avatar.update();
}
},stopDrag:function(){
dojo.removeClass(dojo.body(),["dojoDndCopy","dojoDndMove"]);
dojo.forEach(this.events,dojo.disconnect);
this.events=[];
this.avatar.destroy();
this.avatar=null;
this.source=this.target=null;
this.nodes=[];
},makeAvatar:function(){
return new dojo.dnd.Avatar(this);
},updateAvatar:function(){
this.avatar.update();
},onMouseMove:function(e){
if(e.which===0){
this.onMouseUp();
return;
}
var a=this.avatar;
if(a){
dojo.dnd.autoScrollNodes(e);
var s=a.node.style;
s.left=(e.pageX+this.OFFSET_X)+"px";
s.top=(e.pageY+this.OFFSET_Y)+"px";
var copy=Boolean(this.source.copyState(dojo.isCopyKey(e)));
if(this.copy!=copy){
this._setCopyStatus(copy);
}
}
},onMouseUp:function(e){
if(this.avatar){
if(this.target&&this.canDropFlag){
var copy=Boolean(this.source.copyState(dojo.isCopyKey(e))),_4e0=[this.source,this.nodes,copy,this.target,e];
dojo.publish("/dnd/drop/before",_4e0);
dojo.publish("/dnd/drop",_4e0);
}else{
dojo.publish("/dnd/cancel");
}
this.stopDrag();
}
},onKeyDown:function(e){
if(this.avatar){
switch(e.keyCode){
case dojo.keys.CTRL:
var copy=Boolean(this.source.copyState(true));
if(this.copy!=copy){
this._setCopyStatus(copy);
}
break;
case dojo.keys.ESCAPE:
dojo.publish("/dnd/cancel");
this.stopDrag();
break;
}
}
},onKeyUp:function(e){
if(this.avatar&&e.keyCode==dojo.keys.CTRL){
var copy=Boolean(this.source.copyState(false));
if(this.copy!=copy){
this._setCopyStatus(copy);
}
}
},_setCopyStatus:function(copy){
this.copy=copy;
this.source._markDndStatus(this.copy);
this.updateAvatar();
dojo.replaceClass(dojo.body(),"dojoDnd"+(this.copy?"Copy":"Move"),"dojoDnd"+(this.copy?"Move":"Copy"));
}});
dojo.dnd._manager=null;
dojo.dnd.manager=function(){
if(!dojo.dnd._manager){
dojo.dnd._manager=new dojo.dnd.Manager();
}
return dojo.dnd._manager;
};
}
if(!dojo._hasResource["dojo.dnd.Source"]){
dojo._hasResource["dojo.dnd.Source"]=true;
dojo.provide("dojo.dnd.Source");
dojo.declare("dojo.dnd.Source",dojo.dnd.Selector,{isSource:true,horizontal:false,copyOnly:false,selfCopy:false,selfAccept:true,skipForm:false,withHandles:false,autoSync:false,delay:0,accept:["text"],generateText:true,constructor:function(node,_4e1){
dojo.mixin(this,dojo.mixin({},_4e1));
var type=this.accept;
if(type.length){
this.accept={};
for(var i=0;i<type.length;++i){
this.accept[type[i]]=1;
}
}
this.isDragging=false;
this.mouseDown=false;
this.targetAnchor=null;
this.targetBox=null;
this.before=true;
this._lastX=0;
this._lastY=0;
this.sourceState="";
if(this.isSource){
dojo.addClass(this.node,"dojoDndSource");
}
this.targetState="";
if(this.accept){
dojo.addClass(this.node,"dojoDndTarget");
}
if(this.horizontal){
dojo.addClass(this.node,"dojoDndHorizontal");
}
this.topics=[dojo.subscribe("/dnd/source/over",this,"onDndSourceOver"),dojo.subscribe("/dnd/start",this,"onDndStart"),dojo.subscribe("/dnd/drop",this,"onDndDrop"),dojo.subscribe("/dnd/cancel",this,"onDndCancel")];
},checkAcceptance:function(_4e2,_4e3){
if(this==_4e2){
return !this.copyOnly||this.selfAccept;
}
for(var i=0;i<_4e3.length;++i){
var type=_4e2.getItem(_4e3[i].id).type;
var flag=false;
for(var j=0;j<type.length;++j){
if(type[j] in this.accept){
flag=true;
break;
}
}
if(!flag){
return false;
}
}
return true;
},copyState:function(_4e4,self){
if(_4e4){
return true;
}
if(arguments.length<2){
self=this==dojo.dnd.manager().target;
}
if(self){
if(this.copyOnly){
return this.selfCopy;
}
}else{
return this.copyOnly;
}
return false;
},destroy:function(){
dojo.dnd.Source.superclass.destroy.call(this);
dojo.forEach(this.topics,dojo.unsubscribe);
this.targetAnchor=null;
},markupFactory:function(_4e5,node){
_4e5._skipStartup=true;
return new dojo.dnd.Source(node,_4e5);
},onMouseMove:function(e){
if(this.isDragging&&this.targetState=="Disabled"){
return;
}
dojo.dnd.Source.superclass.onMouseMove.call(this,e);
var m=dojo.dnd.manager();
if(!this.isDragging){
if(this.mouseDown&&this.isSource&&(Math.abs(e.pageX-this._lastX)>this.delay||Math.abs(e.pageY-this._lastY)>this.delay)){
var _4e6=this.getSelectedNodes();
if(_4e6.length){
m.startDrag(this,_4e6,this.copyState(dojo.isCopyKey(e),true));
}
}
}
if(this.isDragging){
var _4e7=false;
if(this.current){
if(!this.targetBox||this.targetAnchor!=this.current){
this.targetBox=dojo.position(this.current,true);
}
if(this.horizontal){
_4e7=(e.pageX-this.targetBox.x)<(this.targetBox.w/2);
}else{
_4e7=(e.pageY-this.targetBox.y)<(this.targetBox.h/2);
}
}
if(this.current!=this.targetAnchor||_4e7!=this.before){
this._markTargetAnchor(_4e7);
m.canDrop(!this.current||m.source!=this||!(this.current.id in this.selection));
}
}
},onMouseDown:function(e){
if(!this.mouseDown&&this._legalMouseDown(e)&&(!this.skipForm||!dojo.dnd.isFormElement(e))){
this.mouseDown=true;
this._lastX=e.pageX;
this._lastY=e.pageY;
dojo.dnd.Source.superclass.onMouseDown.call(this,e);
}
},onMouseUp:function(e){
if(this.mouseDown){
this.mouseDown=false;
dojo.dnd.Source.superclass.onMouseUp.call(this,e);
}
},onDndSourceOver:function(_4e8){
if(this!=_4e8){
this.mouseDown=false;
if(this.targetAnchor){
this._unmarkTargetAnchor();
}
}else{
if(this.isDragging){
var m=dojo.dnd.manager();
m.canDrop(this.targetState!="Disabled"&&(!this.current||m.source!=this||!(this.current.id in this.selection)));
}
}
},onDndStart:function(_4e9,_4ea,copy){
if(this.autoSync){
this.sync();
}
if(this.isSource){
this._changeState("Source",this==_4e9?(copy?"Copied":"Moved"):"");
}
var _4eb=this.accept&&this.checkAcceptance(_4e9,_4ea);
this._changeState("Target",_4eb?"":"Disabled");
if(this==_4e9){
dojo.dnd.manager().overSource(this);
}
this.isDragging=true;
},onDndDrop:function(_4ec,_4ed,copy,_4ee){
if(this==_4ee){
this.onDrop(_4ec,_4ed,copy);
}
this.onDndCancel();
},onDndCancel:function(){
if(this.targetAnchor){
this._unmarkTargetAnchor();
this.targetAnchor=null;
}
this.before=true;
this.isDragging=false;
this.mouseDown=false;
this._changeState("Source","");
this._changeState("Target","");
},onDrop:function(_4ef,_4f0,copy){
if(this!=_4ef){
this.onDropExternal(_4ef,_4f0,copy);
}else{
this.onDropInternal(_4f0,copy);
}
},onDropExternal:function(_4f1,_4f2,copy){
var _4f3=this._normalizedCreator;
if(this.creator){
this._normalizedCreator=function(node,hint){
return _4f3.call(this,_4f1.getItem(node.id).data,hint);
};
}else{
if(copy){
this._normalizedCreator=function(node,hint){
var t=_4f1.getItem(node.id);
var n=node.cloneNode(true);
n.id=dojo.dnd.getUniqueId();
return {node:n,data:t.data,type:t.type};
};
}else{
this._normalizedCreator=function(node,hint){
var t=_4f1.getItem(node.id);
_4f1.delItem(node.id);
return {node:node,data:t.data,type:t.type};
};
}
}
this.selectNone();
if(!copy&&!this.creator){
_4f1.selectNone();
}
this.insertNodes(true,_4f2,this.before,this.current);
if(!copy&&this.creator){
_4f1.deleteSelectedNodes();
}
this._normalizedCreator=_4f3;
},onDropInternal:function(_4f4,copy){
var _4f5=this._normalizedCreator;
if(this.current&&this.current.id in this.selection){
return;
}
if(copy){
if(this.creator){
this._normalizedCreator=function(node,hint){
return _4f5.call(this,this.getItem(node.id).data,hint);
};
}else{
this._normalizedCreator=function(node,hint){
var t=this.getItem(node.id);
var n=node.cloneNode(true);
n.id=dojo.dnd.getUniqueId();
return {node:n,data:t.data,type:t.type};
};
}
}else{
if(!this.current){
return;
}
this._normalizedCreator=function(node,hint){
var t=this.getItem(node.id);
return {node:node,data:t.data,type:t.type};
};
}
this._removeSelection();
this.insertNodes(true,_4f4,this.before,this.current);
this._normalizedCreator=_4f5;
},onDraggingOver:function(){
},onDraggingOut:function(){
},onOverEvent:function(){
dojo.dnd.Source.superclass.onOverEvent.call(this);
dojo.dnd.manager().overSource(this);
if(this.isDragging&&this.targetState!="Disabled"){
this.onDraggingOver();
}
},onOutEvent:function(){
dojo.dnd.Source.superclass.onOutEvent.call(this);
dojo.dnd.manager().outSource(this);
if(this.isDragging&&this.targetState!="Disabled"){
this.onDraggingOut();
}
},_markTargetAnchor:function(_4f6){
if(this.current==this.targetAnchor&&this.before==_4f6){
return;
}
if(this.targetAnchor){
this._removeItemClass(this.targetAnchor,this.before?"Before":"After");
}
this.targetAnchor=this.current;
this.targetBox=null;
this.before=_4f6;
if(this.targetAnchor){
this._addItemClass(this.targetAnchor,this.before?"Before":"After");
}
},_unmarkTargetAnchor:function(){
if(!this.targetAnchor){
return;
}
this._removeItemClass(this.targetAnchor,this.before?"Before":"After");
this.targetAnchor=null;
this.targetBox=null;
this.before=true;
},_markDndStatus:function(copy){
this._changeState("Source",copy?"Copied":"Moved");
},_legalMouseDown:function(e){
if(!dojo.mouseButtons.isLeft(e)){
return false;
}
if(!this.withHandles){
return true;
}
for(var node=e.target;node&&node!==this.node;node=node.parentNode){
if(dojo.hasClass(node,"dojoDndHandle")){
return true;
}
if(dojo.hasClass(node,"dojoDndItem")||dojo.hasClass(node,"dojoDndIgnore")){
break;
}
}
return false;
}});
dojo.declare("dojo.dnd.Target",dojo.dnd.Source,{constructor:function(node,_4f7){
this.isSource=false;
dojo.removeClass(this.node,"dojoDndSource");
},markupFactory:function(_4f8,node){
_4f8._skipStartup=true;
return new dojo.dnd.Target(node,_4f8);
}});
dojo.declare("dojo.dnd.AutoSource",dojo.dnd.Source,{constructor:function(node,_4f9){
this.autoSync=true;
},markupFactory:function(_4fa,node){
_4fa._skipStartup=true;
return new dojo.dnd.AutoSource(node,_4fa);
}});
}
if(!dojo._hasResource["wm.base.widget.Layers.TabsDecorator"]){
dojo._hasResource["wm.base.widget.Layers.TabsDecorator"]=true;
dojo.provide("wm.base.widget.Layers.TabsDecorator");
dojo.declare("wm.TabsDecorator",[wm.LayersDecorator,wm.TouchMixinOptional],{decorationClass:"wmtablayers",decoratorPadding:"7, 0, 0, 0",verticalDecoratorPadding:"0,0,0,7",undecorate:function(){
this.inherited(arguments);
this.tabsControl.destroy();
},decorateContainer:function(){
this.inherited(arguments);
this.btns=[];
if(this.tabsControl){
this.tabsControl.destroy();
}
this.tabsControl=new wm.TabsControl({parent:this.decoree,owner:this.decoree,padding:this.decoree.verticalButtons?this.verticalDecoratorPadding:this.decoratorPadding,name:"tabsControl"});
this.decoree.moveControl(this.tabsControl,0);
if(this.decoree.verticalButtons){
this.decoree.setLayoutKind("left-to-right");
}
if(this.decoree.dndTargetName||this.decoree._designer){
this.dndObj=new dojo.dnd.Source(this.tabsControl.domNode,{accept:[this.decoree.dndTargetName||"designMoveLayers"]});
this.dndObjConnect=this.tabsControl.connect(this.dndObj,"onDndDrop",this,"onTabDrop");
}
},createTab:function(_4fb,_4fc,_4fd){
var b=this.btns[_4fc]=document.createElement("button");
dojo.attr(b,"id",this.decoree.domNode.id+"_decorator_button"+this.btns.length);
dojo.attr(b,"type","button");
dojo.attr(b,"type","button");
b.style.display=_4fd.showing?"":"none";
this.setBtnText(b,_4fb,_4fd.closable||_4fd.destroyable);
if(!wm.isMobile){
this.decoree.connect(b,"onclick",dojo.hitch(this,"onTabClick",_4fd));
}else{
this.addTouchListener(b);
}
var _4fe=(this.decoree.verticalButtons)?"-verticaltab":"-tab";
b.className=this.decorationClass+_4fe+(_4fd.closable||_4fd.destroyable?" "+this.decorationClass+"-closabletab":"");
if(!_4fb){
b.style.display="none";
}
this.tabsControl.domNode.appendChild(b);
if(this.dndObj){
this.dndObj.destroy();
dojo.disconnect(this.dndObjConnect);
dojo.addClass(b,"dojoDndItem");
dojo.attr(b,"dndType",this.decoree.dndTargetName||"designMoveLayers");
this.dndObj=new dojo.dnd.Source(this.tabsControl.domNode,{accept:[this.decoree.dndTargetName||"designMoveLayers"]});
this.dndObjConnect=this.tabsControl.connect(this.dndObj,"onDndDrop",this,"onTabDrop");
}
},onTabClick:function(_4ff,evt){
if(this.decoree.isDesignLoaded()){
dojo.stopEvent(evt);
}
if(evt.type=="submit"){
return;
}
var _500={target:evt.target,clientX:evt.clientX,clientY:evt.clientY};
wm.onidle(this,function(){
this.tabClicked(_4ff,_500);
_500.target.style.borderWidth="";
});
},onTouchStart:function(_501){
var _502=_501.target;
while(_502.tagName!="BUTTON"&&_502.tagName!="BODY"){
_502=_502.parentNode;
}
var _503=dojo.indexOf(this.btns,_502);
if(_503>=0){
this._touchedLayer=this.decoree.layers[_503];
}
},onTouchMove:function(_504,_505,_506,_507,_508,_509,_50a){
},onTouchEnd:function(_50b,_50c){
if(!_50c){
this.tabClicked(this._touchedLayer,_50b);
}
delete this._touchedLayer;
},getRuntimeId:function(){
return this.decoree.getRuntimeId()+".decorator";
},onTabDrop:function(_50d,_50e,copy,_50f,_510){
if(dojo.dnd.manager().target!=this.dndObj){
return;
}
var _511=wm.getWidgetByDomNode(_50e[0]);
var _512=dojo.indexOf(_511.decorator.btns,_50e[0]);
if(_512==-1){
return;
}
var _513=_511.layers[_512];
if(!_513){
return;
}
var _514=dojo.indexOf(this.tabsControl.domNode.childNodes,_50e[0]);
var _515=false;
var _516=_513.parent!=this.decoree;
if(_516){
_513.setParent(this.decoree);
var _517=_511.layerIndex;
_511.layerIndex=-1;
_511.setLayerIndex(_511.layers.length>_517?_517:_511.layers.length-1);
var _518=this.btns;
var _519=this.tabsControl.domNode.childNodes;
if(_514==this.btns.length-1){
_515=true;
}
if(_50e[0].parentNode){
dojo.destroy(_50e[0]);
}
}else{
if(_512==_514){
_515=true;
}
}
if(_515){
var x=_510.offsetX;
var _51a=false;
for(var i=0;i<this.btns.length;i++){
var b=this.btns[i];
var _51b=dojo.marginBox(b);
_51b.l+=dojo._getContentBox(b).l;
if(_51b.l>x){
_514=i;
_51a=true;
break;
}
}
if(!_51a){
_514=this.btns.length;
}else{
if(_514>_512&&!_516){
_514--;
}
}
}
this.decoree.moveLayerIndex(_513,_514);
if(this.decoree.isDesignLoaded()){
studio.refreshWidgetsTree();
}
_513.activate();
_513.onTabDrop();
if(_511!=this.decoree&&_511.onTabRemoved){
_511.onTabRemoved();
}
this.decoree.onTabDrop();
},tabClicked:function(_51c,e){
var d=this.decoree;
var _51d=dojo.hasClass(e.target,"TabCloseIcon");
if(!_51d&&(_51c.closable||_51c.destroyable)){
var _51e=dojo.coords(e.target.firstChild);
var _51f=dojo.coords(e.target);
if(e.clientX>=_51e.x&&e.clientY<=_51e.y+_51e.h){
_51d=true;
}
}
if(_51d){
if(_51c.customCloseOrDestroy!=_51c.constructor.prototype.customCloseOrDestroy){
return _51c.customCloseOrDestroy(_51c);
}
_51c.onCloseOrDestroy();
if(_51c.parent.customCloseOrDestroy!=_51c.parent.constructor.prototype.customCloseOrDestroy){
return _51c.parent.customCloseOrDestroy(_51c.parent,_51c);
}
var _520=_51c.parent.getActiveLayer();
var _521=_520.getIndex();
var _522=_51c.parent;
_522.onCloseOrDestroy(_51c);
if(_51c.destroyable){
_51c.destroy();
}else{
_51c.hide();
}
this.decoree.renderBounds();
if(!_520.isDestroyed){
_520.activate();
_520.parent.layerIndex=dojo.indexOf(_520.parent.layers,_520);
}else{
if(_521>0){
_522.setLayerIndex(_521-1);
}else{
_522.setLayerIndex(0);
}
}
}else{
d.setLayer(_51c);
}
},decorateLayer:function(_523,_524){
this.inherited(arguments);
this.createTab(_523.caption,_524,_523);
},undecorateLayer:function(_525,_526){
dojo._destroyElement(this.btns[_526]);
this.btns.splice(_526,1);
},setLayerShowing:function(_527,_528){
var i=_527.getIndex();
if(i!=-1){
this.btns[i].style.display=_528?"":"none";
}
this.inherited(arguments);
},setLayerActive:function(_529,_52a){
var b=this.btns[_529.getIndex()];
if(b){
dojo[_52a?"addClass":"removeClass"](b,this.decorationClass+"-selected");
}
this.inherited(arguments);
},applyLayerCaption:function(_52b){
var d=this.decoree,i=_52b.getIndex();
if(i!=-1){
this.setBtnText(this.btns[i],_52b.caption,_52b.closable||_52b.destroyable);
}
},setBtnText:function(_52c,_52d,_52e){
var _52f=dojo.indexOf(this.btns,_52c);
var _530=this.decoree.layers[_52f];
if(_52d){
if(_52c.style.display&&_530.showing){
_52c.style.display="";
}
dojo[_52e?"addClass":"removeClass"](_52c,this.decorationClass+"-closabletab");
_52c.innerHTML=(_52e?"<span class='TabCloseIcon'>x</span>":"")+(_52d||"&nbsp;");
}else{
_52c.style.display="none";
}
},getBtn:function(_531){
var d=this.decoree,i=d.indexOfLayerCaption(_531);
if(i!=-1){
return this.btns[i];
}
},disenableTab:function(_532,_533){
var b=this.getBtn(_532);
if(b){
b.disabled=_533?"disabled":"";
}
},disableTab:function(_534){
this.disenableTab(_534,true);
},enableTab:function(_535){
this.disenableTab(_535,false);
},moveLayerIndex:function(_536,_537){
this.inherited(arguments);
var d=this.tabsControl.domNode,f=this.btns[_536],t=this.btns[_537],c=this.decoree.getCount()-1;
if(_537<_536){
d.insertBefore(f,t);
}else{
if(_537>_536){
if(_537==c){
d.appendChild(f);
}else{
var nl=this.btns[_537+1];
if(nl){
d.insertBefore(f,nl);
}
}
}
}
wm.Array.removeElement(this.btns,f);
wm.Array.insertElementAt(this.btns,f,_537);
}});
dojo.declare("wm.RoundedTabsDecorator",wm.TabsDecorator,{});
dojo.declare("wm.TabsControl",wm.Control,{height:"27px",width:"100%",border:0,init:function(){
if(this.parent&&this.parent.isRelativePositioned){
this.isRelativePositioned=true;
}
dojo.addClass(this.domNode,"wmtablayers-tabbar");
if(this.owner){
if(this.owner.verticalButtons){
this.height="100%";
this.width=this.owner.headerWidth;
}else{
this.height=this.owner._headerHeight;
}
}
this.inherited(arguments);
},updateHeaderHeight:function(){
if(this.owner._lockHeaderHeight){
return this.bounds.h;
}
var _538=dojo.marginBox(this.domNode).h;
return _538;
if(_538!=_currHeight){
dojo.marginBox(this.domNode,{h:_currHeight});
return _538;
}
return false;
}});
}
if(!dojo._hasResource["wm.base.widget.Layers"]){
dojo._hasResource["wm.base.widget.Layers"]=true;
dojo.provide("wm.base.widget.Layers");
dojo.declare("wm.Layer",wm.Container,{height:"100%",width:"100%",caption:"",layoutKind:"top-to-bottom",closable:false,destroyable:false,showDirtyFlag:false,destroy:function(){
this._isLayerDestroying=true;
var _539=this.parent;
if(_539&&_539 instanceof wm.Layers&&!_539.isDestroyed){
_539.setCaptionMapLayer(this.caption,null);
}
this.inherited(arguments);
if(_539&&_539.conditionalTabButtons&&!_539.decorator.tabsControl.isDestroyed){
_539.decorator.tabsControl.setShowing(_539.getVisibleLayerCount()>1);
}
},init:function(){
this.inherited(arguments);
if(this.title){
this.caption=this.title;
delete this.title;
}
this.setCaption(this.caption);
if(!this.isRelativePositioned){
dojo.addClass(this.domNode,"wmlayer");
}
},setParent:function(_53a){
this.inherited(arguments);
if(this.parent){
if(this.border===wm.Layer.prototype.border){
this.setBorder(this.parent.clientBorder);
}
if(this.borderColor===wm.Layer.prototype.borderColor){
this.setBorderColor(this.parent.clientBorderColor);
}
}
},setName:function(_53b){
if(this.parent){
delete this.parent.widgets[this.name];
}
this.addRemoveDefaultCssClass(false);
wm.Component.prototype.setName.apply(this,arguments);
if(this.parent){
this.parent.widgets[this.name]=this;
}
this.addRemoveDefaultCssClass(true);
},activate:function(){
var p=this.parent;
if((this.showing||wm.BreadcrumbLayers&&this.parent instanceof wm.BreadcrumbLayers)&&!this.isActive()){
if(!this.showing){
this.show();
}
p.setLayer(this);
}
},activateAllParents:function(){
var p=this.parent;
p.setLayer(this);
var _53c=this.parent.isAncestorInstanceOf(wm.Layer);
if(_53c){
_53c.activateAllParents();
}else{
_53c=this.parent.isAncestorInstanceOf(wm.Dialog);
if(_53c){
_53c.show();
}
}
},update:function(){
this.activate();
},isActive:function(){
return this.active;
},setShowing:function(_53d){
if(!this.canChangeShowing()){
return;
}
var p=this.parent;
if(this.showing!=_53d){
this.showing=_53d;
this.decorator.setLayerShowing(this,_53d);
if(!_53d&&p.layerIndex==this.getIndex()){
p.setNext();
}
}
if(p&&p.conditionalTabButtons&&!p.decorator.tabsControl.isDestroyed){
p.decorator.tabsControl.setShowing(p.getVisibleLayerCount()>1);
}
},show:function(){
this.setShowing(true);
},hide:function(){
this.setShowing(false);
},setCaption:function(_53e){
this.caption=_53e;
if(this.parent){
this.parent.setCaptionMapLayer(_53e,this);
}
if(this.decorator){
this.decorator.applyLayerCaption(this);
}
},setIsDirty:function(_53f){
if(this.isDirty!=_53f){
this.isDirty=_53f;
if(this.showDirtyFlag){
var _540=this.caption;
_540=_540.replace(/^\<span class="DirtyTab"\>\*\<\/span\>\s*/,"");
if(_53f){
_540="<span class=\"DirtyTab\">*</span> "+_540;
}
this.setCaption(_540);
}
}
},getIndex:function(){
var p=this.parent;
return p&&p.indexOfLayer(this);
},onShow:function(){
this.callOnShowParent();
},onDeactivate:function(){
},onCloseOrDestroy:function(){
},customCloseOrDestroy:function(){
},setClosable:function(_541){
this.closable=_541;
this.decorator.applyLayerCaption(this);
},setDestroyable:function(_542){
this.destroyable=_542;
this.decorator.applyLayerCaption(this);
},handleBack:function(_543){
if(this.active){
return false;
}
this.activate();
return true;
},onTabDrop:function(){
}});
dojo.declare("wm.Layers",wm.Container,{manageHistory:true,manageURL:false,isMobileFoldingParent:false,transition:"none",clientBorder:"",clientBorderColor:"",layerIndex:-1,defaultLayer:-1,decoratorClass:wm.LayersDecorator,layersType:"Layers",layoutKind:"top-to-bottom",height:"100%",width:"100%",destroy:function(){
this.inherited(arguments);
if(this.decorator){
this.decorator.destroy();
this.decorator=null;
}
this.layers=null;
this.captionMap=null;
this.client=null;
},prepare:function(){
this.layers=[];
this.captionMap=[];
this.inherited(arguments);
var _544=wm.isMobile||this._isDesignLoaded&&studio.currentDeviceType!="desktop";
this._headerHeight=(_544&&this.mobileHeaderHeight)?this.mobileHeaderHeight||this.headerHeight:this.headerHeight;
},build:function(){
this.inherited(arguments);
this.setLayersType(this.layersType);
},init:function(){
this.userDefHeaderHeight=this.headerHeight;
if(!this.isRelativePositioned){
dojo.addClass(this.domNode,"wmlayers");
}else{
this.setHeaderHeight("20px");
}
this.client=new wm.Panel({isRelativePositioned:this.isRelativePositioned,border:"0",margin:"0",padding:"0",name:"client",parent:this,owner:this,height:"100%",width:"100%",verticalAlign:"top",horizontalAlign:"left",flags:{notInspectable:true,bindInspectable:true}});
this.inherited(arguments);
this._isDesign=this.isDesignLoaded();
},postInit:function(){
this.inherited(arguments);
this._initDefaultLayer();
if(wm.widgetIsShowing(this)){
this._fireLayerOnShow();
}
if(this.manageURL&&this.owner.locationState){
this.restoreFromLocationHash(this.owner.locationState[this.getRuntimeId()]);
}
},_initDefaultLayer:function(){
var d=this.defaultLayer;
d=d!=-1?d:0;
var dl=this.getLayer(d);
if(dl&&!dl.showing){
d=this._getNextShownIndex(d);
dl=this.getLayer(d);
}
if(dl){
this._setLayerIndex(dl.getIndex());
}
},getVisibleLayerCount:function(){
var _545=0;
for(var i=0;i<this.layers.length;i++){
if(this.layers[i].showing){
_545++;
}
}
return _545;
},createLayer:function(_546){
var _547=_546;
if(!_547){
_547=this.owner.getUniqueName("layer1");
}
var name=_547;
if(name){
name=name.replace(/\s/g,"_");
}
var _548=this.owner.getUniqueName(name);
var _549={width:"100%",height:"100%",caption:_547,parent:this,horizontalAlign:"left",verticalAlign:"top",themeStyleType:this.themeStyleType,border:this.clientBorder,borderColor:this.clientBorderColor};
var o=this.getRoot();
if(o){
return o.createComponent(_548,"wm.Layer",_549);
}
},addPageContainerLayer:function(_54a,_54b,_54c){
var _54d=this.getLayerByCaption(_54b);
if(_54d){
if(_54c||_54c===undefined){
_54d.activate();
}
return _54d;
}
_54d=this.createLayer(_54b);
new wm.PageContainer({owner:this.owner,parent:_54d,name:this.owner.getUniqueName(_54d.name+"PageContainer"),width:"100%",height:"100%",pageName:_54a,deferLoad:false});
if(_54c||_54c===undefined){
_54d.activate();
}
if(this.conditionalTabButtons){
this.decorator.tabsControl.setShowing(this.getVisibleLayerCount()>1);
}
return _54d;
},themeStyleType:"",setThemeStyleType:function(_54e){
this.themeStyleType=_54e;
for(var i=0;i<this.layers.length;i++){
this.layers[i].setThemeStyleType(_54e);
}
},setClientBorder:function(_54f){
this.clientBorder=_54f;
var _550=this.isDesignLoaded()?"set_border":"setBorder";
for(var i=0;i<this.layers.length;i++){
this.layers[i][_550](_54f);
}
},setClientBorderColor:function(_551){
this.clientBorderColor=_551;
for(var i=0;i<this.layers.length;i++){
this.layers[i].setBorderColor(_551);
}
},addLayer:function(_552,_553){
var pg=this.createLayer(_552);
if(!_553){
this._setLayerIndex(this.getCount()-1);
}else{
pg.active=false;
}
return pg;
},addWidget:function(_554){
if(_554 instanceof wm.Layer){
this.client.addWidget(_554);
this.layers.push(_554);
this.setCaptionMapLayer(_554.caption,_554);
if(this.decorator){
this.decorator.decorateLayer(_554,this.getCount()-1);
this.decorator.setLayerActive(_554,false);
}
}else{
this.inherited(arguments);
}
},removeWidget:function(_555){
if(_555 instanceof wm.Layer){
var _556=_555.isActive();
var i=this.indexOfLayer(_555);
this.layers.splice(i,1);
this.setCaptionMapLayer(_555.caption,null);
this.decorator.undecorateLayer(_555,i);
_555.active=false;
_555.inFlow=false;
this.client.removeWidget(_555);
if(_556&&!this._isDestroying&&this.layers.length){
if(this.layers.length>i){
this.layerIndex=-1;
this.setLayerIndex(i);
}else{
this.setLayerIndex(i-1);
}
}else{
if(!this._isDestroying&&i<=this.layerIndex){
this.layerIndex--;
}
}
}else{
this.inherited(arguments);
}
},addControl:function(_557){
if(_557.owner==this){
this.inherited(arguments);
}else{
if(_557 instanceof wm.Layer){
this.client.addControl(_557);
}
}
},removeControl:function(_558){
if(_558.owner==this){
this.inherited(arguments);
}else{
if(_558 instanceof wm.Layer){
this.client.removeControl(_558);
}
}
},insertControl:function(_559,_55a){
if(_559 instanceof wm.Layer){
this.addControl(_559);
this.moveLayerIndex(_559,_55a);
}else{
this.inherited(arguments);
}
},moveControl:function(_55b,_55c){
if(_55b instanceof wm.Layer){
if(dojo.indexOf(this.layers,_55b)!=-1){
this.moveLayerIndex(_55b,_55c);
this.client.moveControl(_55b,_55b.getIndex());
}else{
}
}else{
this.inherited(arguments);
}
},isWidgetTypeAllowed:function(_55d){
return _55d=="wm.Layer";
},getLayer:function(_55e){
return this.layers[_55e!=undefined?_55e:this.layerIndex];
},getActiveLayer:function(){
if(this.layerIndex!=-1){
return this.layers[this.layerIndex];
}
var _55f=(this.defaultLayer==-1)?0:this.defaultLayer;
return this.layers[_55f];
},removeLayer:function(_560){
if(!this.layers){
return;
}
var p=this.getLayer(_560);
if(p){
this.removeWidget(p);
}
},indexOfLayer:function(_561){
for(var i=0,l;(l=this.getLayer(i));i++){
if(l==_561){
return i;
}
}
return -1;
},indexOfLayerName:function(_562){
for(var i=0,l;(l=this.getLayer(i));i++){
if(l.name==_562){
return i;
}
}
return -1;
},indexOfLayerCaption:function(_563){
return this.indexOfLayer(this.captionMap[_563]);
},getLayerCaption:function(_564){
var p=this.getLayer(_564);
return p&&p.caption;
},getLayerByCaption:function(_565){
return this.getLayer(this.indexOfLayerCaption(_565));
},setLayerByCaption:function(_566){
var p=this.captionMap[_566];
this.setLayerByName(p&&p.name?p.name:_566);
},setLayerByName:function(_567){
var l=this.client.widgets[_567];
if(l){
this.setLayer(l);
}else{
if(_567){
this.addLayer(_567);
}
}
},setLayer:function(_568){
if(_568 instanceof wm.Layer){
this.setProp("layerIndex",_568.getIndex());
}else{
this.setLayerByName(_568);
}
},setLayerInactive:function(_569){
wm.fire(_569.decorator,"deactivateLayer",[_569]);
_569.onDeactivate();
_569.onHide();
},setLayerIndex:function(_56a){
if(_56a==this.layerIndex){
return;
}
var _56b=!this.loading;
var _56c=this.layers[this.layerIndex];
var l=this.getLayer(_56a);
if(_56b){
var info={newIndex:_56a,canChange:undefined};
this.oncanchange(info);
if(info.canChange===false){
return;
}
_56a=info.newIndex;
}
if(_56a<0||_56a>this.getCount()-1){
return;
}
if(_56b&&_56c){
_56c.callOnHideParent();
}
this._setLayerIndex(_56a);
if(_56b){
if(l){
if(app.debugDialog&&!this.isAncestor(app.debugDialog)){
var i=0;
var _56d=arguments.callee.caller;
var _56e=["setProp","setLayer","setLayerByName","setLayerByCaption","addLayer","activate","update"];
while(_56d&&dojo.indexOf(_56e,_56d.nom)!=-1&&i<15){
_56d=_56d.caller;
i++;
}
var _56f=app.debugDialog.newLogEvent({eventType:"layer",sourceDescription:(_56d&&_56d.nom?_56d.nom+"()":""),resultDescription:"Activating Layer: "+l.getRuntimeId()+".activate()",firingId:l.getRuntimeId(),affectedId:l.getRuntimeId(),method:"hide"});
}
l.onShow();
if(_56f){
app.debugDialog.endLogEvent(_56f);
}
}
if(_56c){
_56c.onDeactivate();
_56c.onHide();
}
}
if(_56b&&this.lastLayerIndex!=this.layerIndex){
this.onchange(this.layerIndex);
}
if(!this._initialization&&_56c&&!this._isDesignLoaded&&this.manageHistory){
app.addHistory({id:_56c.getRuntimeId(),options:{},title:"Show "+l.caption});
}
},_setLayerIndex:function(_570){
this.lastLayerIndex=this.layerIndex;
this.layerIndex=_570;
var l=this.getLayer(_570);
if(l){
this.decorator.activateLayer(l);
var page=this.getParentPage();
if(page&&page.validateVisibleOnly){
this.validate();
}
}
},setDecoratorClass:function(_571){
this.decoratorClass=_571;
this.createDecorator();
},createDecorator:function(){
if(this.decorator){
this.decorator.destroy();
}
this.decorator=this.decoratorClass?new this.decoratorClass(this):null;
},setLayersType:function(_572){
var ctor=wm[_572+"Decorator"];
if(!ctor){
return;
}
this.layersType=_572;
var i=this.layerIndex;
if(this.decorator){
this.decorator.undecorate();
this.decorator.destroy();
this.decorator=null;
}
this.setDecoratorClass(ctor);
this.decorator.decorate();
this._setLayerIndex(i);
this.reflow();
},setDefaultLayer:function(_573){
this.defaultLayer=_573;
},getCount:function(){
return this.layers.length;
},setCaptionMapLayer:function(_574,_575){
try{
this.captionMap[_574]=_575;
}
catch(e){
}
},_getNextShownIndex:function(_576,_577){
var _578=this.layers.length;
for(var i=_576+1;i<_578&&!this.layers[i].showing;i++){
}
if(this.layers[i]&&this.layers[i].showing){
return i;
}
if(!_577){
return this._getPrevShownIndex(_576,true);
}
return 0;
},_getPrevShownIndex:function(_579,_57a){
for(var i=_579-1;i>=0&&!this.layers[i].showing;i--){
}
if(this.layers[i]&&this.layers[i].showing){
return i;
}
if(!_57a){
return this._getNextShownIndex(_579,true);
}
return 0;
},setNext:function(_57b){
var p=this._getNextShownIndex(Number(this.layerIndex),false);
if(p!==undefined){
this.setLayerIndex(p);
}
},setPrevious:function(_57c){
var p=this._getPrevShownIndex(Number(this.layerIndex),false);
if(p!==undefined){
this.setLayerIndex(p);
}
},moveLayerIndex:function(_57d,_57e){
if(_57e==-1){
_57e=this.layers.length-1;
}
var i=_57d.getIndex(),_57e=Math.max(0,Math.min(_57e,this.getCount()-1));
if(i==_57e){
return;
}
this.layers.splice(i,1);
this.layers.splice(_57e,0,_57d);
this.decorator.moveLayerIndex(i,_57e);
if(_57d.active){
this._setLayerIndex(_57e);
}else{
for(var i=0;i<this.layers.length;i++){
if(this.layers[i].active){
this.layerIndex=i;
break;
}
}
}
},_fireLayerOnShow:function(){
var l=this.getLayer(this.layerIndex);
l&&l.onShow();
},_onShowParent:function(){
this._fireLayerOnShow();
},clear:function(){
wm.forEach(this.widgets,function(w){
w.destroy();
});
this.widgets={};
this.layers=[];
this.domNode.innerHTML="";
},_oncanchangeBeforeStart:1,oncanchange:function(_57f){
var l=this.getLayer(_57f.newIndex);
_57f.canChange=(l&&l.showing);
},onchange:function(_580){
},headerHeight:"27px",mobileHeaderHeight:"37px",setHeaderHeight:function(_581){
if(this.layersType!="Tabs"&&this.layersType!="RoundedTabs"&&this.layersType!="Wizard"&&this.layersType!="Breadcrumb"){
return;
}
this._headerHeight=_581;
this.decorator&&this.decorator.tabsControl&&this.decorator.tabsControl.setHeight(_581);
delete this._lastTabHeight;
this.renderBounds();
},renderBounds:function(){
this.inherited(arguments);
if(this.layersType!="Tabs"&&this.layersType!="RoundedTabs"){
return;
}
if(!this.decorator||!this.decorator.tabsControl){
return;
}
if(this.decorator.tabsControl.isDestroyed){
return;
}
wm.job(this.getRuntimeId()+".renderBounds",10,this,function(){
if(this.isDestroyed||this._lockHeaderHeight){
return;
}
if(this.decorator.btns.length<=1){
return;
}
var _582=this.decorator.tabsControl.bounds.h;
this.decorator.tabsControl.domNode.style.height="auto";
var _583;
var _584,_585;
for(var i=this.decorator.btns.length-1;i>=1;i--){
if(this.decorator.btns[i].style.display!="none"){
if(!_585){
_585=this.decorator.btns[i];
}
_584=this.decorator.btns[i];
break;
}
}
if(_584&&Math.abs(_585.offsetTop-_584.offsetTop)>4){
if(this._headerHeight==this.decorator.tabsControl.height){
this.decorator.tabsControl.domNode.style.height=this.decorator.tabsControl.bounds.h+"px";
}else{
this.decorator.tabsControl.setHeight(this._headerHeight);
}
}else{
_583=Math.max(this.decorator.tabsControl.domNode.clientHeight,parseInt(this._headerHeight));
if(_583!=this.decorator.tabsControl.bounds.h){
this.decorator.tabsControl.setHeight(_583+"px");
}else{
this.decorator.tabsControl.domNode.style.height=this.decorator.tabsControl.bounds.h+"px";
}
}
});
},getMinHeightProp:function(){
if(this.minHeight){
return this.minHeight;
}
var _586=15;
if(this.layersType.match(/tabs/i)){
_586+=parseInt(this._headerHeight);
}
return _586;
},getMinWidthProp:function(){
if(this.minWidth){
return this.minWidth;
}
var _587=80;
if(this.layersType.match(/tabs/i)){
_587+=120;
}
return _587;
},restoreFromLocationHash:function(_588){
var _589=_588;
if(_589!==undefined){
var w=this.manageHistory;
this.manageHistory=false;
var _58a=Number(_588);
this.setLayerIndex(_588);
this.manageHistory=w;
}
},generateStateUrl:function(_58b){
if(!this._isDesignLoaded&&this.getActiveLayer()){
var _58c=this.defaultLayer==-1?0:this.defaultLayer;
var _58d=this.layerIndex;
if(_58d!=_58c&&!this.getActiveLayer()._mobileFoldingGenerated){
_58b[this.getRuntimeId()]=this.layerIndex;
}
}
}});
dojo.declare("wm.TabLayers",wm.Layers,{dndTargetName:"",themeStyleType:"ContentPanel",layersType:"Tabs",conditionalTabButtons:false,verticalButtons:false,headerWidth:"50px",postInit:function(){
this.inherited(arguments);
if(this.conditionalTabButtons){
this.decorator.tabsControl.setShowing(this.getVisibleLayerCount()>1);
}
},addLayer:function(_58e,_58f){
var _590=this.inherited(arguments);
if(!this._cupdating&&!this.owner._loadingPage){
this.renderBounds();
}
if(this.conditionalTabButtons){
this.decorator.tabsControl.setShowing(this.getVisibleLayerCount()>1);
}
return _590;
},removeLayer:function(_591){
this.inherited(arguments);
if(this.conditionalTabButtons&&!this.isDestroyed){
this.decorator.tabsControl.setShowing(this.getVisibleLayerCount()>1);
}
},onCloseOrDestroy:function(_592){
},customCloseOrDestroy:function(_593){
},onTabDrop:function(){
},onTabRemoved:function(){
}});
}
if(!dojo._hasResource["wm.base.RbacPlugin"]){
dojo._hasResource["wm.base.RbacPlugin"]=true;
dojo.provide("wm.base.RbacPlugin");
wm.Plugin.plugin("rbac",wm.Widget,{roles:"",prepare:function(){
this.rbacSocket(arguments);
if(this.roles&&this.roles.length&&app.isSecurityEnabled){
this._rbacShowingRequested=this.showing;
this.showing=this.updateRbacShowing(this.showing);
this.subscribe("wmRbacUpdate",this,"reshowRbac");
}
},reshowRbac:function(){
this.setShowing(this._rbacShowingRequested);
},setShowing:function(_594){
if(this instanceof wm.Layer==false&&this.roles){
_594=this.updateRbacShowing(_594);
}
this.rbacSocket(arguments);
},updateRbacShowing:function(_595){
if(!this._cupdating){
this._rbacShowingRequested=_595;
}
return _595&&this.isRbacShowAllowed();
},isRbacShowAllowed:function(){
var _596=this._getUserRoles();
if(_596){
for(var i=0,r;(r=this.roles[i]);i++){
for(var j=0,ur;(ur=_596[j]);j++){
if(r==ur){
return true;
}
}
}
return false;
}
return true;
},_getUserRoles:function(){
if(this.isDesignLoaded()){
return null;
}else{
return wm.getUserRoles();
}
}});
wm.Plugin.plugin("rbacLayer",wm.Layer,{setShowing:function(_597){
if(this.roles&&this.roles.length){
_597=this.updateRbacShowing(_597);
}
this.rbacLayerSocket(arguments);
}});
wm.Plugin.plugin("rbacservice",wm.ServiceVariable,{roles:"",update:function(){
if(djConfig.isDebug){
try{
this.log("update",arguments.callee.caller.nom||arguments.callee.caller.name||"anonymous");
}
catch(e){
}
}
if(!this.roles||this.isRbacUpdateAllowed()){
return this.rbacserviceSocket(arguments);
}else{
return new dojo.Deferred();
}
},updateInternal:function(){
if(!this.roles||this.isRbacUpdateAllowed()){
return this.rbacserviceSocket(arguments);
}else{
}
},isRbacUpdateAllowed:function(){
var _598=this._getUserRoles();
if(_598){
for(var i=0,r;(r=this.roles[i]);i++){
for(var j=0,ur;(ur=_598[j]);j++){
if(r==ur){
return true;
}
}
}
return false;
}
return true;
},_getUserRoles:function(){
if(this.isDesignLoaded()){
return null;
}else{
return wm.getUserRoles();
}
}});
}
if(!dojo._hasResource["wm.base.MobilePlugin"]){
dojo._hasResource["wm.base.MobilePlugin"]=true;
dojo.provide("wm.base.MobilePlugin");
wm.Plugin.plugin("mobile",wm.Control,{deviceSizes:"",prepare:function(_599){
this.mobileSocket(arguments);
if(this.deviceSizes||_599.deviceSizes||window["studio"]&&this.deviceType){
this._mobileShowingRequested=this.showing;
this.showing=this.updateMobileShowing(this.showing);
this.subscribe("deviceSizeRecalc",this,"reshowMobile");
}
},reshowMobile:function(){
this.setShowing(this._mobileShowingRequested||this.showing);
},setShowing:function(_59a){
if(this instanceof wm.Layer==false&&this.deviceSizes||this._isDesignLoaded&&this.deviceType){
_59a=this.updateMobileShowing(_59a);
}
this.mobileSocket(arguments);
},updateMobileShowing:function(_59b){
if(!this._cupdating){
this._mobileShowingRequested=_59b;
}
if(this.deviceSizes&&this.deviceSizes.length||this._isDesignLoaded&&this.deviceType){
return _59b&&this.isMobileShowAllowed();
}else{
return _59b;
}
},isMobileShowAllowed:function(){
if(window["studio"]&&this.isDesignLoaded()){
var _59c=studio.currentDeviceType;
if(_59c&&this.deviceType&&dojo.indexOf(this.deviceType,_59c)==-1){
return false;
}
var _59d=studio.deviceSizeSelect.getDataValue();
if(!_59d){
return true;
}
if(_59c=="desktop"||studio.portraitToggleButton.clicked){
_59d=_59d.width;
}else{
_59d=_59d.height;
}
if(_59d=="100%"){
return true;
}
_59d=app.appRoot.calcDeviceSize(parseInt(_59d));
var isOk=true;
if(this.deviceSizes&&dojo.indexOf(this.deviceSizes,_59d)==-1){
return false;
}
return true;
}else{
var _59d=app.appRoot.deviceSize;
return (!_59d||dojo.indexOf(this.deviceSizes,_59d)!=-1);
}
}});
wm.Plugin.plugin("mobileLayer",wm.Layer,{deviceSizes:"",setShowing:function(_59e){
_59e=this.updateMobileShowing(_59e);
this.mobileLayerSocket(arguments);
}});
}
if(!dojo._hasResource["wm.base.I18nPlugin"]){
dojo._hasResource["wm.base.I18nPlugin"]=true;
dojo.provide("wm.base.I18nPlugin");
wm.getDictionaryItem=function(name,_59f){
if(_59f==undefined){
return wm.locale.phrases[name];
}
var _5a0={};
for(var i in _59f){
_5a0[i]=(_59f[i]===undefined||_59f[i]===null)?"":_59f[i];
}
return dojo.string.substitute(wm.locale.phrases[name],_5a0);
};
wm.Plugin.plugin("i18n",wm.Component,{prepare:function(_5a1){
if(_5a1&&_5a1.owner){
var _5a2=_5a1.owner.getDictionaryItem(_5a1.name);
}
if(_5a2){
_5a1=dojo.mixin(_5a1,_5a2);
}
if(wm.branding){
var app=_5a1.owner?_5a1.owner.getOwnerApp():null;
if(app&&app._brandingDictionary){
var _5a3=_5a1.owner;
var _5a4;
if(_5a3==app){
_5a4="app";
}else{
if(_5a3 instanceof wm.Page){
_5a4=_5a3.declaredClass;
}
}
if(_5a4&&app._brandingDictionary[_5a4]&&app._brandingDictionary[_5a4][_5a1.name]){
var _5a5=app._brandingDictionary[_5a4][_5a1.name];
var _5a6=dojo.locale;
for(prop in _5a5){
var _5a7=_5a5[prop];
if(_5a7[_5a6]!==undefined){
_5a1[prop]=_5a7[_5a6];
}else{
if(_5a7["default"]!==undefined){
_5a1[prop]=_5a7["default"];
}
}
}
}
}
}
this.i18nSocket(arguments);
},getDictionaryItem:function(name,_5a8){
if(!this._i18nDictionary){
if(this.owner){
return this.owner.getDictionaryItem(name,_5a8);
}else{
return "";
}
}
if(_5a8==undefined){
return this._i18nDictionary[name];
}else{
var _5a9={};
for(var i in _5a8){
_5a9[i]=(_5a8[i]===undefined||_5a8[i]===null)?"":_5a8[i];
}
return dojo.string.substitute(this._i18nDictionary[name],_5a9);
}
}});
}
if(!dojo._hasResource["wm.base.components.NavigationService"]){
dojo._hasResource["wm.base.components.NavigationService"]=true;
dojo.provide("wm.base.components.NavigationService");
dojo.declare("wm.NavigationService",wm.Service,{layer:"",layers:"",operation:"",_operations:{gotoLayer:{parameters:{layer:{type:"wm.Layer"},showOnlyParentLayer:{type:"boolean"}},returnType:"any",hint:"This operations displays the selected layer."},nextLayer:{parameters:{layers:{type:"wm.Layers"}},returnType:"any",hint:"The operation displays the next layer in the selected layers widget."},previousLayer:{parameters:{layers:{type:"wm.Layers"}},returnType:"any",hint:"The operation displays the previous layer in the selected layers widget."},gotoPage:{parameters:{pageName:{type:"string"}},returnType:"any",hint:"This operation displays a different page and requires a pageName."},gotoHomePage:{returnType:"any",hint:"This operation displays the home page."},gotoPageContainerPage:{parameters:{pageName:{type:"string"},pageContainer:{type:"wm.PageContainer"}},returnType:"any",hint:"This operation displays a page in a pageContainer and requires both a pageContainer and a pageName."},gotoDialogPage:{parameters:{pageName:{type:"string"},hideControls:{type:"boolean"},title:{type:"string"},modal:{type:"boolean"},width:{type:"number"},height:{type:"number"}},returnType:"any",hint:"This operation displays a page in a dialog."},showToast:{parameters:{content:{type:"string"},duration:{type:"number"},cssClasses:{type:"string"},dialogPosition:{type:"string"}},returnType:"any",hint:"This operation displays a page in a dialog."}},update:function(){
this[this.operation||"gotoLayer"]();
},invoke:function(_5aa,_5ab,_5ac){
var d=this._deferred=new dojo.Deferred(),m=this[_5aa];
if(m){
_5ab.push(_5ac);
m.apply(this,_5ab);
}else{
this.onError();
d.errback("operation: "+_5aa+" does not exist.");
}
return d;
},doResult:function(){
if(this._resultConnect){
dojo.disconnect(this._resultConnect);
this._resultConnect=null;
}
if(this._cancelConnect){
dojo.disconnect(this._cancelConnect);
this._cancelConnect=null;
}
this.onResult();
if(this._deferred&&this._deferred.fired==-1){
this._deferred.callback(true);
}
this._deferred=null;
},doError:function(){
if(this._resultConnect){
dojo.disconnect(this._resultConnect);
this._resultConnect=null;
}
if(this._cancelConnect){
dojo.disconnect(this._cancelConnect);
this._cancelConnect=null;
}
this.onError();
if(this._deferred&&this._deferred.fired==-1){
this._deferred.callback(true);
}
this._deferred=null;
},gotoLayer:function(_5ad,_5ae){
var l=_5ad instanceof wm.Layer?_5ad:null;
if(l){
this.showLayer(l,_5ae);
}
this.doResult();
},nextLayer:function(_5af){
var l=_5af instanceof wm.Layers?_5af:null;
if(l){
l.setNext();
}
this.doResult();
},previousLayer:function(_5b0){
var l=_5b0 instanceof wm.Layers?_5b0:null;
if(l){
l.setPrevious();
}
this.doResult();
},showLayer:function(_5b1,_5b2){
var l=_5b1;
while(l){
wm.fire(l,"activate");
l=l.parent;
if(_5b2){
break;
}
}
},gotoPage:function(_5b3,_5b4){
var page=_5b4==app?app._page:_5b4.getParentPage();
if(!app._page||!page||page==app._page){
this._resultConnect=dojo.connect(app,"onPageChanged",this,"doResult");
this._cancelConnect=dojo.connect(app.pageContainer,"pageChangeIgnored",this,"doError");
wm.job(this.getRuntimeId()+": PageChange",1,function(){
app.loadPage(_5b3);
});
}else{
if(page.owner instanceof wm.PageContainer||page.owner instanceof wm.PageContainerMixin){
this.gotoPageContainerPage(_5b3,page.owner);
}
}
},gotoHomePage:function(_5b5){
this.gotoPage(app.main,_5b5);
},gotoPageContainerPage:function(_5b6,_5b7){
if(_5b7){
if(_5b6!=_5b7.pageName){
this._resultConnect=dojo.connect(_5b7,"onPageChanged",this,"doResult");
this._cancelConnect=dojo.connect(_5b7,"pageChangeIgnored",this,"doError");
_5b7.setPageName(_5b6);
}else{
this.doResult();
}
}else{
wm.logging&&undefined;
}
},gotoDialogPage:function(_5b8,_5b9,_5ba,_5bb,_5bc,_5bd){
this._resultConnect=dojo.connect(app.pageDialog,"onPageReady",this,"doResult");
app.pageDialog.showPage(_5b8,_5b9,String(_5bc||450)+"px",String(_5bd||300)+"px",_5ba,Boolean(_5bb));
},showToast:function(_5be,_5bf,_5c0,_5c1){
app.createToastDialog();
app.toastDialog.showToast(_5be,_5bf,_5c0,_5c1);
this._deferred.callback();
}});
wm.services.add({name:"navigationService",ctor:"wm.NavigationService",isClientService:true,clientHide:true});
dojo.declare("wm.NavigationCall",[wm.Component,wm.ServiceCall],{service:"navigationService",operation:"gotoLayer",processResult:function(_5c2){
if(!this.owner){
return;
}
return this.inherited(arguments);
},processError:function(_5c3){
if(!this.owner){
return;
}
return this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.components.NotificationService"]){
dojo._hasResource["wm.base.components.NotificationService"]=true;
dojo.provide("wm.base.components.NotificationService");
dojo.declare("wm.NotificationService",wm.Service,{operation:"",_operations:{alert:{parameters:{text:{type:"string"}},returnType:"any"},confirm:{parameters:{text:{type:"string"},OKButtonText:{type:"string"},CancelButtonText:{type:"string"}},returnType:"any"},prompt:{parameters:{text:{type:"string"},defaultValue:{type:"string"},OKButtonText:{type:"string"},CancelButtonText:{type:"string"}},returnType:"StringData"},warnOnce:{parameters:{text:{type:"string"},cookieName:{type:"string"}},returnType:"StringData"},toast:{parameters:{text:{type:"string"},duration:{type:"number"},cssClasses:{type:"string"},dialogPosition:{type:"string"}},returnType:"any",hint:"This operation displays a page in a dialog."}},update:function(){
this[this.operation]();
},invoke:function(_5c4,_5c5,_5c6){
var m=this[_5c4];
var d;
if(m){
_5c5.push(_5c6);
var newd=m.apply(this,_5c5);
if(newd instanceof dojo.Deferred){
d=newd;
}
}else{
this.onError();
d.errback("operation: "+_5c4+" does not exist.");
}
this._deferred=d||new dojo.Deferred();
return this._deferred;
},alert:function(text){
var d=new dojo.Deferred();
app.alert(text);
this.connectOnce(app.alertDialog,"onClose",function(){
d.callback();
});
return d;
},confirm:function(text,_5c7,_5c8){
var d=new dojo.Deferred();
var ok=_5c7||wm.getDictionaryItem("wm.Application.CAPTION_ALERT_OK");
var _5c9=_5c8||wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_CANCEL");
app.confirm(text,false,function(){
d.callback(true);
},function(){
d.errback();
},ok,_5c9,false);
return d;
},prompt:function(text,_5ca,_5cb,_5cc){
var d=new dojo.Deferred();
var ok=_5cb||wm.getDictionaryItem("wm.Application.CAPTION_ALERT_OK");
var _5cd=_5cc||wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_CANCEL");
app.prompt(text,_5ca,function(_5ce){
d.callback(_5ce);
},function(){
d.errback();
},ok,_5cd);
return d;
},warnOnce:function(text,_5cf){
var d=new dojo.Deferred();
if(!app.warnOnce(_5cf,text)){
d.callback();
}else{
this.connectOnce(app.alertDialog,"onClose",function(){
d.callback();
});
}
return d;
},toast:function(text,_5d0,_5d1,_5d2){
var d=new dojo.Deferred();
app.createToastDialog();
app.toastDialog.showToast(text,_5d0,_5d1,_5d2);
d.callback();
return d;
}});
wm.services.add({name:"notificationService",ctor:"wm.NotificationService",isClientService:true,clientHide:true});
dojo.declare("wm.NotificationCall",[wm.Component,wm.ServiceCall],{service:"notificationService",operation:"alert",processResult:function(_5d3){
switch(this.operation){
case "alert":
case "confirm":
case "prompt":
case "warnOnce":
this.onOk(_5d3);
break;
}
this.onClose();
},processError:function(){
this.onCancel();
this.onClose();
},onCancel:function(){
},onOk:function(_5d4){
},onClose:function(){
}});
wm.Object.extendSchema(wm.NotificationCall,{owner:{group:"common",order:1,readonly:true,options:["Page","Application"]},service:{ignore:1,writeonly:1},operation:{group:"data",order:1},updateNow:{ignore:1},queue:{ignore:1},clearInput:{group:"operation",operation:1,order:30},input:{group:"data",order:3,putWiresInSubcomponent:"input",bindTarget:1,treeBindField:true,editor:"wm.prop.NavigationGroupEditor"},inFlightBehavior:{ignore:1},autoUpdate:{ignore:1},startUpdate:{ignore:1},onError:{ignore:1},onSuccess:{ignore:1},onBeforeUpdate:{ignore:1},onCanUpdate:{ignore:1},onResult:{ignore:1}});
}
if(!dojo._hasResource["wm.base.components.PhoneGapService"]){
dojo._hasResource["wm.base.components.PhoneGapService"]=true;
dojo.provide("wm.base.components.PhoneGapService");
dojo.declare("wm.PhoneGapService",wm.Service,{operation:"",_operations:{contacts_read:{parameters:{filter:{type:"string"}},returnType:"[phonegap.Contact]"},contacts_delete:{parameters:{id:{type:"number"}},returnType:"any"},contacts_save:{parameters:{contact:{type:"phonegap.Contact"}},returnType:"any"},notification_beep:{parameters:{times:{type:"number"}},returnType:"any"},notification_vibrate:{parameters:{miliseconds:{type:"number"}},returnType:"any"},capture_audio:{parameters:{},returnType:"StringData"},capture_picture:{parameters:{quality:{type:"number"},sourceType:{type:"string"},allowEdit:{type:"boolean"}},returnType:"StringData"},geolocation_getCurrentPosition:{parameters:{enableHighAccuracy:{type:"boolean"},timeout:{type:"number"},maximumAge:{type:"number"}},returnType:"phonegap.Coordinates"}},update:function(){
this[this.operation]();
},invoke:function(_5d5,_5d6,_5d7){
var d=this._deferred=new dojo.Deferred(),m=this[_5d5];
if(m){
_5d6.push(_5d7);
var newd=m.apply(this,_5d6);
if(newd instanceof dojo.Deferred){
d=this._deferred=newd;
}
}else{
this.onError();
d.errback("operation: "+_5d5+" does not exist.");
}
return d;
},geolocation_getCurrentPosition:function(_5d8,_5d9,_5da){
var d=new dojo.Deferred();
if(window["PhoneGap"]){
navigator.geolocation.getCurrentPosition(dojo.hitch(this,function(_5db){
d.callback(_5db.coords);
}),function(_5dc){
d.errback(_5dc);
},{enableHighAccuracy:_5d8||false,timeout:_5d9||5000,maximumAge:_5da||1200000});
}
return d;
},capture_audio:function(){
var d=new dojo.Deferred();
if(window["PhoneGap"]){
navigator.device.capture.captureAudio(dojo.hitch(this,function(_5dd){
var _5de=_5dd[0].fullPath;
var name=_5dd[0].name;
this.readDataUrl(_5de,d);
}),function(_5df){
this.handleCaptureError(_5df.code,d);
},{limit:1});
}
return d;
},capture_picture:function(_5e0,_5e1,_5e2){
var _5e3={destinationType:Camera.DestinationType.DATA_URL};
if(!_5e1){
_5e3.sourceType=Camera.PictureSourceType.CAMERA;
}else{
_5e3.sourceType=Camera.PictureSourceType[_5e1.toUpperCase()];
}
_5e3.allowEdit=Boolean(_5e2);
if(_5e0!==undefined&&_5e0!==null){
_5e3.quality=_5e0;
}
var d=new dojo.Deferred();
if(window["PhoneGap"]){
navigator.camera.getPicture(dojo.hitch(this,function(_5e4){
d.callback({dataValue:"data:image/jpeg;base64,"+_5e4});
}),dojo.hitch(this,function(_5e5){
this.handleCaptureError(_5e5.code,d);
}),_5e3);
}
return d;
},handleCaptureError:function(_5e6,d){
switch(_5e6){
case 20:
d.errback("CAPTURE_NOT_SUPPORTED");
break;
case 0:
d.errback("CAPTURE_INTERNAL_ERR");
break;
case 1:
d.errback("CAPTURE_APPLICATION_BUSY");
break;
case 2:
d.errback("CAPTURE_INVALID_ARGUMENT");
break;
case 3:
d.errback("CAPTURE_NO_MEDIA_FILES");
break;
default:
d.errback(_5e6);
}
},readDataUrl:function(file,_5e7){
app.showLoadingDialog("Processing...");
var _5e8=new FileReader();
_5e8.onload=function(evt){
app.hideLoadingDialog();
_5e7.callback({dataValue:evt.target.result});
};
_5e8.onabort=_5e8.onerror=function(evt){
console.error("Reader Error:"+evt);
app.hideLoadingDialog();
_5e7.errback(evt);
};
_5e8.readAsDataURL(file);
},notification_beep:function(_5e9){
var d=new dojo.Deferred();
d.callback();
if(window["PhoneGap"]){
navigator.notification.beep(_5e9||1);
}
return d;
},notification_vibrate:function(_5ea){
var d=new dojo.Deferred();
d.callback();
if(window["PhoneGap"]){
navigator.notification.vibrate(_5ea||100);
}
return d;
},contacts_delete:function(id){
var d=new dojo.Deferred();
if(window["PhoneGap"]){
var _5eb=navigator.contacts.create();
_5eb.id=id;
_5eb.remove(function(_5ec){
d.callback(_5ec);
},function(_5ed){
console.error("ERROR: "+_5ed);
d.errback(_5ed);
});
}
return d;
},contacts_save:function(_5ee){
var d=new dojo.Deferred();
if(window["PhoneGap"]){
var _5ef=navigator.contacts.create();
for(var prop in _5ee){
if(typeof _5ee[prop]!="object"){
_5ef[prop]=_5ee[prop];
}
}
_5ef.name=new ContactName();
for(var prop in _5ee.name){
_5ef.name[prop]=_5ee.name[prop];
}
_5ef.addresses=[];
dojo.forEach(_5ee.address,function(_5f0){
var a=new ContactAddress();
for(var prop in _5f0){
a[prop]=_5f0[prop];
}
_5ef.addresses.push(a);
});
_5ef.phoneNumbers=[];
dojo.forEach(_5ee.phoneNumbers,function(_5f1){
var a=new ContactField(_5f1.name,_5f1.dataValue,false);
_5ef.phoneNumbers.push(a);
});
_5ef.emails=[];
dojo.forEach(_5ee.emails,function(_5f2){
var a=new ContactField(_5f2.name,_5f2.dataValue,false);
_5ef.emails.push(a);
});
_5ef.urls=[];
dojo.forEach(_5ee.urls,function(_5f3){
var a=new ContactField(_5f3.name,_5f3.dataValue,false);
_5ef.urls.push(a);
});
_5ef.organization=new ContactOrganization();
for(var prop in _5ee.organization){
_5ef.organization[prop]=_5ee.organization[prop];
}
_5ef.rawId=Number(_5ef.id);
_5ef.save(function(_5f4){
d.callback(_5f4);
},function(_5f5){
console.error("ERROR: "+_5f5);
d.errback(_5f5);
});
}
return d;
},contacts_read:function(_5f6){
var d=new dojo.Deferred();
if(window["PhoneGap"]){
var _5f7=new ContactFindOptions();
if(_5f6!=undefined&&_5f6!==""){
_5f7.filter=_5f6;
}
_5f7.multiple=true;
var _5f8=["displayName","name","nickname","phoneNumbers","emails","addresses","ims","organizations","birthday","note","photos","categories","urls"];
navigator.contacts.find(_5f8,function(_5f9){
var _5fa=function(_5fb){
var _5fc=[];
if(_5fb){
dojo.forEach(_5fb,function(item){
_5fc.push({name:item.type,dataValue:item.value});
});
}
return _5fc;
};
for(var i=0;i<_5f9.length;i++){
try{
_5f9[i].phoneNumbers=_5fa(_5f9[i].phoneNumbers);
_5f9[i].emails=_5fa(_5f9[i].emails);
_5f9[i].urls=_5fa(_5f9[i].urls);
_5f9[i].birthday=Number(_5f9[i].birthday);
_5f9[i].id=Number(_5f9[i].id);
}
catch(e){
console.error(e);
}
}
d.callback(_5f9);
},function(_5fd){
console.error("ERROR: "+_5fd);
d.errback(_5fd);
},_5f7);
}
return d;
}});
wm.services.add({name:"phoneGapService",ctor:"wm.PhoneGapService",isClientService:true,clientHide:true});
wm.typeManager.addType("phonegap.Contact",{internal:false,fields:{id:{type:"number",order:1,"exclude":["insert"],"include":["delete","read","update"],"noChange":["delete","read","update"],required:true},name:{type:"phonegap.ContactName",required:true},nickname:{type:"string",order:4},phoneNumbers:{type:"EntryData",isList:true,order:5},emails:{type:"EntryData",isList:true,order:6,hidden:true},addresses:{type:"phonegap.Address",isList:true,order:7,hidden:true},ims:{type:"EntryData",isList:true,order:8,hidden:true},organizations:{type:"phonegap.ContactOrganization",isList:true,order:9,hidden:true},birthday:{type:"java.util.Date",order:10},note:{type:"string",order:11},photos:{type:"StringData",isList:true,order:12,hidden:true},categories:{type:"StringData",isList:true,order:13,hidden:true},urls:{type:"EntryData",isList:true,order:14,hidden:true}}});
wm.typeManager.addType("phonegap.Address",{internal:false,fields:{pref:{type:"boolean",order:1},type:{type:"string",order:2},formatter:{type:"string",order:3},streetAddress:{type:"string",order:4},locality:{type:"string",order:5},region:{type:"string",order:6},postalCode:{type:"string",order:7},country:{type:"string",order:8}}});
wm.typeManager.addType("phonegap.ContactOrganization",{internal:false,fields:{pref:{type:"boolean",order:1},type:{type:"string",order:2},name:{type:"string",order:3},department:{type:"string",order:4},title:{type:"string",order:5}}});
wm.typeManager.addType("phonegap.ContactName",{internal:false,fields:{formatted:{type:"string",order:1},familyName:{type:"string",order:2},givenName:{type:"string",order:3},middleName:{type:"string",order:4},honorificPrefix:{type:"string",order:5},honorificSuffix:{type:"string",order:6}}});
wm.typeManager.addType("phonegap.Coordinates",{internal:false,fields:{latitude:{type:"number",order:1},longitude:{type:"number",order:2},altitude:{type:"number",order:3},accuracy:{type:"number",order:4},altitudeAccuracy:{type:"number",order:5},heading:{type:"number",order:6},speed:{type:"number",order:7}}});
dojo.declare("wm.PhoneGapCall",[wm.ServiceVariable],{_deviceReady:false,service:"phoneGapService",operation:"contacts_read",postInit:function(){
this.inherited(arguments);
document.addEventListener("deviceready",dojo.hitch(this,"_onDeviceReady"),false);
},_onDeviceReady:function(){
this._deviceReady=true;
if(this.autoUpdate||this.startUpdate){
this.update();
}
},update:function(){
if(this._deviceReady){
return this.inherited(arguments);
}
},updateInternal:function(){
if(this._deviceReady){
return this.inherited(arguments);
}
}});
wm.Object.extendSchema(wm.PhoneGapCall,{owner:{group:"common",order:1,readonly:true,options:["Page","Application"]},service:{ignore:1,writeonly:1},operation:{group:"data",order:1},updateNow:{ignore:1},queue:{ignore:1},clearInput:{group:"operation",operation:1,order:30},input:{group:"data",order:3,putWiresInSubcomponent:"input",bindTarget:1,treeBindField:true,editor:"wm.prop.NavigationGroupEditor"}});
}
if(!dojo._hasResource["wm.base.components.XhrService"]){
dojo._hasResource["wm.base.components.XhrService"]=true;
dojo.provide("wm.base.components.XhrService");
dojo.declare("wm.XhrService",wm.Service,{noInspector:true,operation:"",_operations:{basicRequest:{parameters:{url:{type:"string"},headers:{type:"EntryData",isList:1},requestType:{type:"string"},contentType:{type:"string"},useProxy:{type:"boolean"},parameters:{type:"EntryData",isList:true}},returnType:"string"}},invoke:function(_5fe,_5ff,_600){
var op=this._operations[_5fe];
var _601,_602,_603,url,_604,_605;
if(!op){
return;
}
if(op==this._operations.basicRequest){
url=_5ff[0];
_603=_5ff[1];
_602=_5ff[2]||"GET";
_604=_5ff[3]||"application/x-www-form-urlencoded";
_605=_5ff[4]===undefined?true:_5ff[4];
_601=_5ff[5];
var _606={};
dojo.forEach(_603,function(_607){
_606[_607.name]=_607.dataValue;
});
var _608={};
dojo.forEach(_601,function(p){
_608[p.name]=p.dataValue;
});
return this._invokeBasicRequest(url,_606,_602,_604,_605,_608,"string",_600);
}else{
var _609=op.allParameters||op.parameters;
_601={};
var i=0;
wm.forEachProperty(op.parameters,function(_60a,_60b){
_601[_60b]=_5ff[i];
i++;
});
url=op.url;
url=url.replace(/\$\{.*?\}/g,function(){
var _60c=arguments[0];
_60c=_60c.substring(2,_60c.length-1);
var _60d=_601[_60c];
if(_60d===undefined||_60d===null){
_60d=_609[_60c].defaultValue;
}
if(_60d===undefined||_60d===null){
_60d="";
}
return _60d;
});
if(op.requestType!==undefined){
_602=op.requestType;
}else{
if(_601.requestType){
_602=_601.requestType;
delete _601.requestType;
}else{
_602="GET";
}
}
if(op.contentType){
_604=op.contentType;
}else{
if(_601.contentType){
_604=_601.contentType;
delete _601.contentType;
}else{
_604="application/x-www-form-urlencoded";
}
}
if(op.useProxy!==undefined){
_605=op.useProxy;
}else{
_605=_601.useProxy;
delete _601.useProxy;
}
_603={};
var _60e={};
wm.forEachProperty(_609,function(_60f,_610){
var _611=_601[_610];
if(_611===null||_611===undefined){
_611=_60f.defaultValue;
if(_611===null||_611===undefined){
_611="";
}
}
if(_60f.transmitType=="header"){
_603[_610]=_611;
}else{
if(_60f.transmitType=="queryString"){
_60e[_610]=typeof _611=="string"&&!_60f.noEscape&&_602==="GET"?escape(_611):_611;
}
}
});
return this._invokeBasicRequest(url,_603,_602,_604,_605,_60e,op.returnType,op,_600);
}
},_invokeBasicRequest:function(url,_612,_613,_614,_615,_616,_617,op,_618){
var d=new dojo.Deferred();
if(wm.useProxyJsonServices!==undefined){
_615=wm.useProxyJsonServices;
}
_613=_613.toUpperCase();
var _619;
switch(_614){
case "application/json":
_619=_615?dojo.toJson(_616):_616;
break;
case "application/x-www-form-urlencoded":
if(!_615){
_619=_616;
}else{
_619="";
wm.forEachProperty(_616,function(_61a,key){
if(_619){
_619+="&";
}
_619+=escape(key)+"="+escape(_61a);
});
}
break;
}
if(_615){
if(this.jsonRpcService&&!this.jsonRpcService._service){
this.jsonRpcService.destroy();
delete this.jsonRpcService;
}
if(!this.jsonRpcService){
this.jsonRpcService=new wm.JsonRpcService({owner:_618,service:"waveMakerService"});
this.defaultHeaders=dojo.clone(this.jsonRpcService._service.requestHeaders);
}
this.jsonRpcService._service.requestHeaders=dojo.mixin(_612,this.defaultHeaders);
var _61b=this.jsonRpcService.requestAsync("remoteRESTCall",[url,_619,_613,_614]);
}else{
var _61c={headers:_612,handleAs:"text",contentType:_614,url:url};
if(_613=="GET"){
var _61d="";
wm.forEachProperty(_616,function(_61e,name){
if(_61e!==null&&_61e!==undefined){
if(_61d){
_61d+="&";
}
_61d+=name+"="+_61e;
}
});
if(_61d&&url.match(/\?/)){
url+="&"+_61d;
}else{
url+="?"+_61d;
}
_61c.url=url;
}else{
_61c.postData=dojo.toJson(_616);
}
var _61b=this._deferred=dojo.xhr(_613,_61c);
}
_61b.addCallbacks(dojo.hitch(this,"onResult",_616,op,d),dojo.hitch(this,"onError",_616,op,d));
return d;
},onResult:function(_61f,_620,_621,_622){
var _623;
try{
if(_622&&_622.match(/^\s*[\{\[]/)){
_623=dojo.fromJson(_622);
}else{
_623={dataValue:_622};
}
}
catch(e){
_623=_622;
}
_621.callback(_623);
},onError:function(_624,_625,_626,_627){
_626.errback(_627);
},addOperation:function(_628){
if(_628.useProxy===undefined){
_628.parameters.useProxy=this._operations.basicRequest.parameters.useProxy;
}
if(!_628.returnType){
_628.returnType="string";
}
if(!_628.contentType){
_628.contentType="application/x-www-form-urlencoded";
}
this._operations[_628.name]=_628;
},removeOperation:function(_629){
delete this._operations[_629];
}});
wm.services.add({name:"xhrService",ctor:"wm.XhrService",isClientService:true,clientHide:false});
dojo.declare("wm.XhrDefinition",wm.Component,{noInspector:true,url:"",requestType:"GET",headers:null,useProxy:true,parameters:null,returnType:"string",contentType:"application/x-www-form-urlencoded",postInit:function(){
this.inherited(arguments);
this.initType();
},destroy:function(){
wm.XhrService.prototype.removeOperation(this.name);
this.inherited(arguments);
},initType:function(){
if(this.url){
var _62a=dojo.clone(this.parameters);
wm.forEachProperty(_62a,function(_62b,_62c){
if(_62b.hidden){
delete _62a[_62c];
}
});
wm.XhrService.prototype.addOperation({name:this.name,url:this.url,requestType:this.requestType,headers:this.headers,parameters:_62a,allParameters:this.parameters,useProxy:this.useProxy,contentType:this.contentType,returnType:this.returnType});
}
},designSelect:function(){
var d=studio.navGotoEditor("XHRServiceEditor",studio.webServiceTab,this.name+"Layer",this.name);
d.page.setService(this);
}});
wm.Object.extendSchema(wm.XhrDefinition,{returnType:{type:"string"},url:{type:"string"},useProxy:{type:"boolean"},requestType:{type:"string"},contentType:{type:"string"},parameters:{type:"any"},headers:{type:"any"}});
}
if(!dojo._hasResource["dojox.uuid.generateRandomUuid"]){
dojo._hasResource["dojox.uuid.generateRandomUuid"]=true;
dojo.provide("dojox.uuid.generateRandomUuid");
dojox.uuid.generateRandomUuid=function(){
var _62d=16;
function _62e(){
var _62f=Math.floor((Math.random()%1)*Math.pow(2,32));
var _630=_62f.toString(_62d);
while(_630.length<8){
_630="0"+_630;
}
return _630;
};
var _631="-";
var _632="4";
var _633="8";
var a=_62e();
var b=_62e();
b=b.substring(0,4)+_631+_632+b.substring(5,8);
var c=_62e();
c=_633+c.substring(1,4)+_631+c.substring(4,8);
var d=_62e();
var _634=a+_631+b+_631+c+d;
_634=_634.toLowerCase();
return _634;
};
}
if(!dojo._hasResource["wm.base.components.JsonRpcService"]){
dojo._hasResource["wm.base.components.JsonRpcService"]=true;
dojo.provide("wm.base.components.JsonRpcService");
dojo.rpc.JsonService.extend({lastSubmissionId:Math.floor(Math.random(new Date().getTime())*1000000)});
wm.inflight={_inflight:[],_inflightNames:[],getCount:function(){
return this._inflight.length;
},change:function(){
},add:function(_635,_636,_637,_638,_639,_63a){
_635._timeStamp=new Date().getTime();
if(dojo.indexOf(this._inflight,_635)!=-1){
return;
}
this._inflight.push(_635);
var name;
if(_636!="runtimeService"){
name=_636+"."+_639;
}else{
if(_637){
name=_637+"."+_639;
}else{
if(_638[0]){
name=_638[0]+": "+_638[1];
}else{
name="LazyLoad: "+_638[1];
}
}
}
this._inflightNames.push(name);
_635.addBoth(dojo.hitch(this,"remove",_635));
this.change();
},remove:function(_63b,_63c){
var i=dojo.indexOf(this._inflight,_63b);
if(i==-1){
return;
}
var _63d=new Date().getTime()-_63b._timeStamp;
this._inflight.splice(i,1);
this._inflightNames.splice(i,1);
this.change();
return _63c;
},cancel:function(){
dojo.forEach(this._inflight,function(d){
if(!d.canceller){
d.canceller=function(){
};
}
d.cancel();
});
}};
dojo.subscribe("wm-unload-app",wm.inflight,"cancel");
dojo.declare("wm.JsonRpc",dojo.rpc.JsonService,{smd:null,required:false,sync:false,_designTime:false,requestHeaders:{},bind:function(_63e,_63f,_640,url){
url=url||this.serviceUrl;
if(_63e=="runQuery"&&_63f[0]==SALESFORCE_SERVICE){
url=wm.services.getService(SALESFORCE_SERVICE)._service.serviceUrl;
}
if(!url){
return;
}
var _641=this._requestHeaders||this.requestHeaders;
var _642={url:url||this.serviceUrl,postData:this.createRequest(_63e,_63f||[]),contentType:this.contentType,timeout:this.timeout,handleAs:"json",sync:this.sync,headers:_641};
if(this._requestHeaders){
delete this._requestHeaders;
}
if(this._designTime&&studio.isCloud()){
var _643=_642.postData;
_642.postData=this.createRequest("remoteRESTCall",[_642.url.replace(/^.*\//,studio._deployedUrl+"/"),_643,"POST","application/json"]);
_642.url="waveMakerService.json";
}
if(wm.xhrPath){
_642.url=wm.xhrPath+_642.url;
}
var def=dojo.rawXhrPost(_642);
if(this._designTime&&studio.isCloud()){
var _644=new dojo.Deferred();
def.addCallbacks(function(_645){
_644.callback(dojo.fromJson(_645.result));
},function(_646){
_644.errback(_646);
});
def=_644;
}
_640=dojo.mixin(_640,def.ioArgs);
def.addCallbacks(this.resultCallback(_640),this.errorCallback(_640));
},parseResults:function(obj){
return obj;
},addRequestHeader:function(_647,_648){
if(!this.requestHeaders){
this.requestHeaders={};
}
if(!this._requestHeaders){
this._requestHeaders=dojo.clone(this.requestHeaders);
}
this._requestHeaders[_647]=_648;
},setRequestHeaders:function(_649){
this._requestHeaders=_649;
},errorCallback:function(_64a){
return function(data){
_64a.errback(data);
};
}});
dojo.declare("wm.JsonRpcService",wm.Service,{operations:"",ready:false,service:"",timeout:0,errorLevel:10,sync:false,url:"",_methods:[],_operations:{},_service:null,init:function(){
this.inherited(arguments);
this.initService();
},setSync:function(_64b){
this.sync=_64b;
},getServiceRoot:function(){
return this.getPath()+"services/";
},getJsonPath:function(){
var p="";
if(this.isDesignLoaded()&&window.studio&&studio.project){
p="/"+studio.project.getProjectPath()+"/";
}
return p;
},initService:function(){
var n=this.service||this.name;
var rand=this.owner&&this.isDesignLoaded()&&studio.application?studio.application.getFullVersionNumber():(app&&!window["studio"]?app.getFullVersionNumber():new Date().getTime());
var _64c=this.url||n+".smd";
var url=this.url||(n&&(this.getServiceRoot()+n+".smd"));
this._service=null;
if(url){
try{
if(window["studio"]){
this._service=new wm.JsonRpc(url+"?rand="+rand);
}else{
if(wm.JsonRpcService.smdCache[url]){
this._service=wm.JsonRpcService.smdCache[url];
}else{
if(wm.JsonRpcService.smdCache[_64c]){
var _64d=wm.JsonRpcService.smdCache[_64c];
this._service=new wm.JsonRpc({methods:_64d.methods,serviceType:_64d.serviceType,serviceUrl:url.replace(/\.smd/,".json")});
}else{
var _64e=window["PhoneGap"]?"":"?rand="+rand;
this._service=new wm.JsonRpc(url+_64e);
this._service.serviceUrl="services/"+this._service.serviceUrl;
}
}
}
wm.JsonRpcService.smdCache[url]=this._service;
if(this._designTime){
this._service._designTime=true;
}
this._service.timeout=this.timeout;
this.ready=Boolean(this._service&&this._service.smd);
if(this.ready){
this._service.serviceUrl=this.getJsonPath()+this._service.serviceUrl;
this.listOperations();
}
}
catch(e){
}
}
},setName:function(_64f){
this.inherited(arguments);
if(!this.url){
this.initService();
}
},ensureArgs:function(_650,_651){
if(_650 in this._operations&&dojo.isArray(_651)){
var op=this._operations[_650],_652=0;
if(op){
for(var o in op.parameters){
_652++;
}
for(var i=_651.length;i<_652;i++){
_651.push(null);
}
}
}
},invoke:function(_653,_654,_655,_656){
this.invoke(_653,_654,_655,_656,false,false,null);
},invoke:function(_657,_658,_659,_65a,_65b,_65c,_65d){
if(!this._service){
return null;
}
this._service.sync=this.sync;
this.ensureArgs(_657,_658);
this.debugLastMethod=_657;
this.result=null;
this.error=null;
var d;
this._service._designTime=this._isDesignLoaded;
if(wm.connectionTimeout>0){
if(_65b){
this._service.addRequestHeader("wm-polling-request",_65d);
}else{
_65d=dojox.uuid.generateRandomUuid();
this._service.addRequestHeader("wm-initial-request",_65d);
}
d=this._service.callRemote(_657,_658||[]);
var _65e=_65c||new dojo.Deferred();
d.addCallbacks(dojo.hitch(this,"onLongResponseTimeResult",_657,_658,_659,_65a,_65b,_65d,_65e,d),dojo.hitch(this,"onLongResponseTimeError",_657,_658,_659,_65a,_65b,_65d,_65e,d));
d=_65e;
}else{
d=this._service.callRemote(_657,_658||[]);
d.addCallbacks(dojo.hitch(this,"onResult"),dojo.hitch(this,"onError"));
}
if(_65a&&app.debugDialog){
_65a._jsonRpcServiceDeferred=d;
}
wm.inflight.add(d,this.service,this.name,_658,_657,_65a);
this.inflight=true;
return d;
},request:function(_65f,_660,_661,_662,_663){
var d=this.invoke(_65f,_660,null,_663);
if(_661){
if(dojo.isFunction(_661)){
d.addCallback(_661);
}else{
d.addCallback(this.owner,_661);
}
}
if(_662){
if(dojo.isFunction(_662)){
d.addErrback(_662);
}else{
d.addErrback(this.owner,_662);
}
}
return d;
},requestSync:function(_664,_665,_666,_667,_668){
var s=this.sync;
this.sync=true;
var d=this.request.apply(this,[_664,_665,_666,_667,null,_668]);
this.sync=s;
return d;
},requestAsync:function(_669,_66a,_66b,_66c,_66d){
var s=this.sync;
this.sync=false;
var cb=_66b?dojo.hitch(this,function(){
this.sync=s;
return _66b.apply(this,dojo._toArray(arguments));
}):null,eb=_66c?dojo.hitch(this,function(){
this.sync=s;
return _66c.apply(this,dojo._toArray(arguments));
}):null;
return this.request(_669,_66a,cb,eb,null,_66d);
},getResultSync:function(_66e,_66f){
var d=this.requestSync(_66e,_66f);
return d.results[0];
},onLongResponseTimeResult:function(_670,_671,_672,_673,_674,_675,_676,_677,_678){
var r;
this.inflight=false;
var _679=false;
if(_674){
var _67a=_677.xhr.getResponseHeader("wm-json-response-status");
if(_67a=="processing"){
_679=true;
}else{
if(_67a=="error"){
return this.onLongResponseTimeError(_670,_671,_672,_673,_674,_675,_676,_678.result);
}else{
if(_67a=="done"){
r=this.fullResult=_678;
this.result=(r||0).result;
_676.callback(this.result);
}else{
_679=true;
}
}
}
if(_679){
wm.onidle(this,function(){
this.invoke(_670,_671,_672,_673,true,_676,_675);
});
}
}else{
_676.callback(this.onResult(_678));
}
},onLongResponseTimeError:function(_67b,_67c,_67d,_67e,_67f,_680,_681,_682,_683){
if(!_682.xhr){
_681.errback(_683);
return;
}
if((_682.xhr.status==504)||(_682.xhr.status==502&&_682.xhr.getResponseHeader("X-Squid-Error")==="ERR_ZERO_SIZE_OBJECT 0")){
this.invoke(_67b,_67c,_67d,_67e,true,_681,_680);
}else{
_681.errback(this.onError(_683));
}
},onResult:function(_684){
this.inflight=false;
var r=this.fullResult=_684;
this.result=(r||0).result;
return this.result;
},onError:function(_685){
this.inflight=false;
var _686=_685!=null&&dojo.isObject(_685)?_685.message:_685;
try{
if(!_685||_686.match(/No ServiceWire found/)&&!djConfig.isDebug){
return;
}
if(_686.indexOf("Invalid Long Polling Request:")==0){
var _687=_686.match(/Timeout for this server is: (\d+)/);
wm.connectionTimeout=_687?Number(_687[1]):30;
return;
}
if(console.groupCollapsed){
console.groupCollapsed("Service Call Failed: "+this.name+"."+this.debugLastMethod);
}else{
}
if(_686){
console.error(_686);
}
var _688=_686.match(/(\d+)$/);
var _689=(_688)?_688[0]:"";
if(_689==403){
dojo.publish("session-expiration",[]);
if(app){
app._onSessionExpiration();
}
}
}
catch(e){
if(wm.logging){
}
}
this.reportError(_685);
return this.error=_685;
},reportError:function(_68a){
var m=dojo.isString(_68a)?_68a:(_68a.message?"Error: "+_68a.message:"Unspecified Error");
m=(this.name?this.name+": ":"")+m;
if(this.errorLevel>5){
if(!_68a.dojoType=="cancel"){
console.error(m);
}
}else{
if(this.errorLevel>0){
wm.logging&&undefined;
}
}
},paramArrayToHash:function(_68b){
var hash={};
for(var i=0,p;(p=_68b[i]);i++){
hash[p.name]={type:p.type,hidden:p.hidden};
}
return hash;
},listOperations:function(){
this._methods=[];
this._operations={};
var m=(this._service.smd||0).methods||[];
for(var i=0,op;(op=m[i]);i++){
this._methods.push(op.name);
this._operations[op.name]={parameters:this.paramArrayToHash(op.parameters||[]),returnType:op.returnType||"any",operationType:op.operationType||""};
}
this._methods.sort();
},makePropEdit:function(_68c,_68d,_68e){
if(_68c=="operations"){
return new wm.SelectMenu(dojo.mixin(_68e,{options:this._methods||[]}));
}
return this.inherited(arguments);
}});
wm.Object.extendSchema(wm.JsonRpcService,{ready:{ignore:1}});
wm.JsonRpcService.description="Any JsonRpc service.";
wm.JsonRpcService.smdCache={};
}
if(!dojo._hasResource["wm.base.components.Timer"]){
dojo._hasResource["wm.base.components.Timer"]=true;
dojo.provide("wm.base.components.Timer");
dojo.declare("wm.Timer",wm.Component,{delay:500,repeating:true,_timeoutId:0,_intervalId:0,autoStart:false,count:0,init:function(){
this.inherited(arguments);
if(this.autoStart){
this.startTimer();
}
},startTimer:function(){
this.stopTimer();
this.count=0;
if(this.repeating){
this._intervalId=window.setInterval(dojo.hitch(this,"onTimerFire"),this.delay);
}else{
this._timeoutId=window.setTimeout(dojo.hitch(this,"onTimerFire"),this.delay);
}
},stopTimer:function(){
if(this._timeoutId){
window.clearTimeout(this._timeoutId);
this._timeoutId=0;
}
if(this._intervalId){
window.clearInterval(this._intervalId);
this._intervalId=0;
}
},destroy:function(){
this.stopTimer();
this.inherited(arguments);
},onTimerFire:function(){
this.count++;
this.valueChanged("count",this.count);
},activate:function(){
this.startTimer();
},update:function(){
this.startTimer();
},setRepeating:function(_68f){
var _690=this._timeoutId||this._intervalId;
if(_690){
this.stopTimer();
}
this.repeating=_68f;
if(_690){
this.startTimer();
}
},setDelay:function(_691){
var _692=this._timeoutId||this._intervalId;
if(_692){
this.stopTimer();
}
this.delay=_691;
if(_692){
this.startTimer();
}
}});
wm.Object.extendSchema(wm.Timer,{owner:{group:"common",order:1,ignore:1,unwritable:true,options:["Page","Application"],doc:1},autoStart:{group:"widgetName",subgroup:"behavior",bindTarget:true},delay:{group:"widgetName",subgroup:"behavior",bindTarget:true},count:{group:"widgetName",subgroup:"behavior",bindSource:true,ignore:true},repeating:{group:"widgetName",subgroup:"behavior"},startTimer:{method:1,doc:1},stopTimer:{method:1,doc:1},setDelay:{method:1,doc:1}});
}
if(!dojo._hasResource["wm.base.components.LiveView"]){
dojo._hasResource["wm.base.components.LiveView"]=true;
dojo.provide("wm.base.components.LiveView");
wm.getViewField=function(_693,_694){
if(_693){
var _695=wm.typeManager.getPropertyInfoFromSchema(_693,_694);
return {caption:wm.capitalize(_694.split(".").pop()),sortable:true,dataIndex:_694,type:_695.type,displayType:wm.getDisplayType(_695),required:_695.required,readonly:dojo.indexOf(_695.noChange||[],"read")>=0,includeLists:true,includeForms:true,order:_695.fieldOrder,subType:_695.fieldSubType};
}
};
wm.getDefaultView=function(_696,_697){
_697=_697||"";
var v=[],tm=wm.typeManager,_698=tm.getTypeSchema(_696),_699=_697?tm.getTypeSchema(tm.getPropertyInfoFromSchema(_698,_697).type):_698,_69a=wm.typeManager.getSimplePropNames(_699);
wm.forEach(_69a,function(f){
v.push(wm.getViewField(_698,(_697?_697+".":"")+f));
});
_69a=wm.typeManager.getStructuredPropNames(_699);
wm.forEach(_69a,function(_69b){
var type=_699[_69b].type;
var _69c=wm.typeManager.getType(type);
if(_69c&&!_69c.liveService){
v.push(wm.getViewField(_698,(_697?_697+".":"")+_69b));
var _69d=wm.typeManager.getSimplePropNames(_69c.fields);
wm.forEach(_69d,function(f){
var path=(_697?_697+".":"")+_69b+"."+f;
v.push(wm.getViewField(_698,path));
});
}
});
return v;
};
dojo.declare("wm.LiveView",wm.Component,{service:"",dataType:"",related:[],view:[],constructor:function(){
this.related=[];
this.view=[];
},init:function(){
this.inherited(arguments);
this.setDataType(this.dataType);
},loaded:function(){
this.inherited(arguments);
this.viewChanged();
},viewChanged:function(){
dojo.publish(this.getRuntimeId()+"-viewChanged",[this.getId()]);
},createDefaultView:function(){
this.setFields(this.related||[],wm.getDefaultView(this.dataType));
},getRelatedFields:function(){
if(!this.related||this.related.length==0){
this.related=this.getRequiredRelatedFields();
}
return this.related||[];
},getRequiredRelatedFields:function(){
try{
var ts=[];
var _69e=wm.typeManager.getTypeSchema(this.dataType);
for(var i in _69e){
var _69f=_69e[i];
var _6a0=wm.typeManager.isStructuredType(_69f.type);
if(_6a0&&_69f.required){
if(_69f.type=="com.sforce.soap.enterprise.salesforceservice.QueryResultType"){
continue;
}
this.addRelated(i);
ts.push(i);
}
}
return ts;
}
catch(e){
}
return [];
},setFields:function(_6a1,_6a2){
this.related=_6a1;
this._sortView(_6a2);
this.view=_6a2;
},getFieldIndex:function(_6a3){
var di=dojo.isObject(_6a3)?_6a3.dataIndex:_6a3;
for(var i=0,view=this.view,f;f=view[i];i++){
if(f.dataIndex==di){
return i;
}
}
return -1;
},hasField:function(_6a4){
return (this.getFieldIndex(_6a4)>-1);
},getRelatedIndex:function(_6a5){
for(var i=0,_6a6=this.related,r;r=_6a6[i];i++){
if(r==_6a5){
return i;
}
}
return -1;
},hasRelated:function(_6a7){
return (this.getRelatedIndex(_6a7)>-1);
},addField:function(_6a8){
var f=_6a8&&wm.getViewField(wm.typeManager.getTypeSchema(this.dataType),_6a8);
if(f&&!this.hasField(f)){
this.view.push(f);
this._sortView(this.view);
}
return f;
},removeField:function(_6a9){
var i=this.getFieldIndex(_6a9);
if(i>-1){
this.view.splice(i,1);
}
},addRelated:function(_6aa){
if(_6aa&&!this.hasRelated(_6aa)){
this.related.push(_6aa);
this.addRelatedDefaultView(_6aa);
}
},removeRelated:function(_6ab){
var i=this.getRelatedIndex(_6ab);
if(i>-1){
this.related.splice(i,1);
}
},addRelatedDefaultView:function(_6ac){
var _6ad=wm.getDefaultView(this.dataType,_6ac);
dojo.forEach(_6ad,function(f){
if(!this.hasField(f)){
this.view.push(f);
}
},this);
this._sortView();
},_sortView:function(_6ae){
if(dojo.isArray(_6ae)){
var t=this.dataType;
_6ae.sort(function(a,b){
if(wm.isNumber(a.order)||wm.isNumber(b.order)){
return wm.data.compareNumbers(a.order,b.order);
}else{
a=a.dataIndex;
b=b.dataIndex;
var al=a.split(".").length,bl=b.split(".").length;
return al==bl?wm.data.compare(a,b):wm.data.compareNumbers(al,bl);
}
});
}
},_copyView:function(_6af){
var view=[];
for(var i=0,v;(v=_6af[i]);i++){
view.push(dojo.mixin({},v));
}
return view;
},getViewById:function(_6b0){
if(_6b0 instanceof wm.LiveView){
return _6b0;
}else{
if(_6b0){
return this.getRoot().app.getValueById(_6b0);
}
}
},copyLiveView:function(_6b1){
var lv=this.getViewById(_6b1);
if(lv){
this.setService(lv.service);
this.setDataType(lv.dataType);
var v=this._copyView(lv.view);
this.setFields(lv.related,v);
}else{
this.clearView();
}
},clearView:function(){
this.setService("");
this.setDataType("");
this.setFields([],[]);
},setService:function(_6b2){
this.service=_6b2;
},setDataType:function(_6b3){
var t=this.dataType;
this.dataType=_6b3;
if(t!=this.dataType){
this.dataTypeChanged();
}
if(this._defaultView){
this.createDefaultView();
}
if(this._isDesignLoaded&&this.owner instanceof wm.Variable){
var _6b4=wm.typeManager.getType(this.dataType);
if(_6b4){
if(this.view){
for(var i=this.view.length-1;i>=0;i--){
if(this.view[i].dataIndex.indexOf(".")==-1){
if(!_6b4.fields[this.view[i].dataIndex]){
wm.Array.removeElementAt(this.view,i);
}
}
}
if(this.owner instanceof wm.LiveVariable){
wm.forEachProperty(_6b4.fields,dojo.hitch(this,function(_6b5,_6b6){
if(!wm.typeManager.isStructuredType(_6b5.type)){
if(!dojo.some(this.view,function(_6b7){
return _6b7.dataIndex==_6b6;
})){
this.addField(_6b6);
}
}
}));
}
}
}
}
},dataTypeChanged:function(){
this.related=[];
this.view=[];
},hasRelatedProp:function(_6b8){
for(var i=0,_6b9=this.related,r;(r=_6b9[i]);i++){
if(r==_6b8){
return true;
}
}
},getListView:function(_6ba){
var _6bb=wm.typeManager.getTypeSchema(this.getSubType(_6ba));
return dojo.filter(this.getSubView(_6ba),function(v){
return !wm.typeManager.isPropInList(_6bb,v.dataIndex);
});
},getSubType:function(_6bc){
if(_6bc){
var _6bd=wm.typeManager.getTypeSchema(this.dataType);
return (_6bd&&(wm.typeManager.getPropertyInfoFromSchema(_6bd,_6bc)||0).type)||this.dataType;
}else{
return this.dataType;
}
},getSubRelated:function(_6be){
_6be=_6be?_6be+".":"";
if(_6be){
var list=[],l=_6be.length;
dojo.forEach(this.related,function(r){
if(r.indexOf(_6be)==0){
list.push(r.substring(l));
}
});
return list;
}else{
return this.related;
}
},getSubView:function(_6bf){
if(this._isDesignLoaded&&this.owner instanceof wm.Variable&&this.view.length==0){
this.createDefaultView();
}
_6bf=_6bf?_6bf+".":"";
var view=this._copyView(this.view);
if(_6bf){
var list=[],l=_6bf.length;
dojo.forEach(view,function(v){
if(v.dataIndex.indexOf(_6bf)==0){
v.dataIndex=v.dataIndex.substring(l);
list.push(v);
}
});
return list;
}else{
return view;
}
},pickListExists:function(){
var _6c0=false;
if(SALESFORCE_SERVICE==this.service){
for(var i=0;i<this.view.length;i++){
var e=this.view[i];
if("picklist"==e.subType){
_6c0=true;
break;
}
}
}
return _6c0;
}});
wm.Object.extendSchema(wm.LiveView,{related:{ignore:1,writeonly:1},view:{ignore:1,writeonly:1},service:{ignore:1,writeonly:1},dataType:{ignore:1,writeonly:1}});
}
if(!dojo._hasResource["wm.base.components.LiveVariable"]){
dojo._hasResource["wm.base.components.LiveVariable"]=true;
dojo.provide("wm.base.components.LiveVariable");
dojo.declare("wm.LiveVariable",wm.ServiceVariable,{autoUpdate:true,startUpdate:true,operation:"read",firstRow:0,sourceData:null,matchMode:"start",ignoreCase:false,orderBy:"",liveSource:null,refireOnDbChange:false,maxResults:500,_rootField:"",destroy:function(){
this._unsubscribeLiveView();
this.inherited(arguments);
},init:function(){
this.inherited(arguments);
this.filter=new wm.Variable({name:"filter",owner:this,type:this.type||"any"});
this.sourceData=new wm.Variable({name:"sourceData",owner:this,type:this.type||"any"});
this.setupSubscriptions();
if(this.isList===undefined&&this.operation=="read"){
this.isList=true;
}
},setupSubscriptions:function(){
this.subscribe(this.filter.getRuntimeId()+"-changed",this,"filterChanged");
this.subscribe(this.sourceData.getRuntimeId()+"-changed",this,"sourceDataChanged");
},postInit:function(){
this._inLVPostInit=true;
this.inherited(arguments);
if(this.$.liveView){
this.setLiveView(this.$.liveView);
}else{
if(this.liveSource&&this.liveSource!="app"){
this.setLiveSource(this.liveSource);
}else{
this.setLiveView(this.liveView||this.createLiveView(this.type));
}
}
this._inPostInit=true;
this.doAutoUpdate();
this._inPostInit=false;
this._inLVPostInit=false;
},_subscribeLiveView:function(){
this._unsubscribeLiveView();
if(this.liveView){
this._liveViewSubscription=dojo.subscribe(this.liveView.getRuntimeId()+"-viewChanged",dojo.hitch(this,"_liveViewChanged"));
}
},_unsubscribeLiveView:function(){
dojo.unsubscribe(this._liveViewSubscription);
this._liveViewSubscription=null;
},isLiveType:function(){
return wm.typeManager.getLiveService(this.type);
},doAutoUpdate:function(){
if(this.isLiveType()){
this.inherited(arguments);
}
},filterChanged:function(){
if(this.autoUpdate){
if(djConfig.isDebug){
this.log("autoUpdate");
}
this.doAutoUpdate();
if(djConfig.isDebug){
this.endLog("autoUpdate");
}
}
},sourceDataChanged:function(){
if(this.autoUpdate){
if(djConfig.isDebug){
this.log("autoUpdate");
}
this.doAutoUpdate();
if(djConfig.isDebug){
this.endLog("autoUpdate");
}
}
},setFilter:function(_6c1){
if((_6c1||0).type==this.type){
this.filter.setDataSet(_6c1);
}
},setOrderBy:function(_6c2){
this.orderBy=_6c2;
this.doAutoUpdate();
},setSourceData:function(_6c3){
var _6c4=this.isLiveType();
if(!_6c4||(this.type&&_6c3&&!_6c3.declaredClass)||(_6c3||0).type==this.type){
this.sourceData.setDataSet(_6c3);
if(!_6c4){
this._updating++;
if(_6c3.liveView&&_6c3.liveView.getId().match(/^app\./)){
this.setLiveSource(this.sourceData.type);
}else{
if(!this.liveView){
this.liveView=this.createLiveView();
}
this.liveView.setDataType(_6c3.liveView.dataType);
this.liveView.related=dojo.clone(_6c3.liveView.related);
this.liveView.service=_6c3.liveView.service;
this.liveView.view=dojo.clone(_6c3.liveView.view);
this.setLiveView(this.liveView);
}
this._updating--;
}
}else{
if(!_6c3){
this.sourceData.setDataSet(null);
}
}
},setLiveSource:function(_6c5){
var s=this.liveSource=_6c5;
var v;
try{
if(this._isDesignLoaded){
v=studio.application.getValueById(s);
}else{
v=app.getValueById(s);
}
}
catch(e){
}
if(!v){
v=this.createLiveView(s);
}
if(v){
this.setLiveView(v);
}
if(!this._inLVPostInit){
this.doAutoUpdate();
}
},setLiveView:function(_6c6){
this.clearData();
this.liveView=_6c6;
if(this._isDesignLoaded){
this._subscribeLiveView();
}
this.setType(this.getViewType());
},createLiveView:function(_6c7){
return new wm.LiveView({name:"liveView",owner:this,dataType:_6c7,_defaultView:true});
},setType:function(_6c8){
var _6c9=this.sourceData.type+"|"+dojo.toJson(this.sourceData._dataSchema);
var _6ca=this.filter.type+"|"+dojo.toJson(this.filter._dataSchema);
this.inherited(arguments);
var _6cb=this._hasChanged;
if(this.operation=="read"&&wm.isEmpty(this.getData())){
this.isList=true;
}
this.filter.setType(this.type);
this.sourceData.setType(this.type);
if(this.liveView&&this.liveView.owner==this&&(this.liveView.dataType!=this.type||_6cb)){
this.liveView.setDataType(this.type);
this.liveView.createDefaultView();
}
var _6cc=this.sourceData.type+"|"+dojo.toJson(this.sourceData._dataSchema);
var _6cd=this.filter.type+"|"+dojo.toJson(this.filter._dataSchema);
if(!this._updating&&!this._inLVPostInit&&this.$.binding&&(_6cb||_6c9!=_6cc||_6ca!=_6cd)){
this.$.binding.refresh();
}
if(this.refireOnDbChange){
if(this._updateOnDbSubscribe){
dojo.unsubscribe(this._updateOnDbSubscribe);
}
if(this.type){
this._updateOnDbSubscribe=this.subscribe(this.type+"-server-changed",this,"updateOnDbChange");
}
}
},_liveViewChanged:function(){
this.setType(this.liveView.dataType);
if(this.isDesignLoaded()){
this.doAutoUpdate();
}
},operationChanged:function(){
},updateOnDbChange:function(_6ce){
if(_6ce===this){
return;
}
if(djConfig.isDebug){
this.log("autoUpdate","updateOnDbChange");
}
this.update();
},_update:function(){
if(this._designTime){
this._service=wm.getRuntimeServiceDesignTime(this);
}else{
this._service=wm.getRuntimeService(this);
}
return this.inherited(arguments);
},getArgs:function(){
wm.getDataConvertDates=true;
var d=this.sourceData.getData(true),t=this.sourceData.type||this.type,s=wm.typeManager.getService(this.type),args=[s,t,wm.isEmpty(d)?null:d];
if(this.operation=="read"){
args=args.concat(this._getReadArguments());
}
delete wm.getDataConvertDates;
return args;
},getDebugArgs:function(){
if(this.operation=="read"){
return this.filter.getData();
}else{
return this.sourceData.getData();
}
},_getReadArguments:function(){
var _6cf={properties:this._getEagerProps(this),filters:this._getFilters(),matchMode:this.matchMode,ignoreCase:this.ignoreCase},_6d0=this.orderBy?{orderBy:(this.orderBy||"").split(",")}:{},max=this.isDesignLoaded()?this.designMaxResults:this.maxResults,_6d1=max?{maxResults:max,firstResult:this.firstRow}:{};
dojo.mixin(_6d0,_6d1);
return [_6cf,_6d0];
},_getFilters:function(){
return this._getFilterValues(this.filter.getData());
},_getFilterValues:function(_6d2,_6d3){
var f=[],d,p;
for(var i in _6d2){
d=_6d2[i];
p=(_6d3?(_6d3||"")+".":"")+i;
if(dojo.isObject(d)&&d!==null){
f=f.concat(this._getFilterValues(d,p));
}else{
if(p!==undefined&&d!==undefined&&d!==null){
f.push(p+"="+d);
}
}
}
return f;
},_isSourceDataBound:function(){
var _6d4=this.$.binding.wires,w;
for(var i in _6d4){
w=_6d4[i];
if((w.targetProperty||"").indexOf("sourceData")==0){
return true;
}
}
},processResult:function(_6d5){
this.dataSetCount=this._service.fullResult?this._service.fullResult.dataSetSize:0;
if(this._appendData){
_6d5=this.data._list.concat(_6d5);
delete this._appendData;
}
this.inherited(arguments);
if(this.operation!="read"){
dojo.publish(this.type+"-server-changed",[this]);
}
},getPage:function(){
return Math.floor(this.firstRow/(this.maxResults||1));
},getTotalPages:function(){
return Math.ceil((this.dataSetCount||1)/(this.maxResults||1));
},setPage:function(_6d6){
_6d6=Math.max(0,Math.min(this.getTotalPages()-1,_6d6));
this.firstRow=_6d6*(this.maxResults||0);
this.update();
},setNextPage:function(){
this.setPage(this.getPage()+1);
},setPreviousPage:function(){
this.setPage(this.getPage()-1);
},setFirstPage:function(){
this.setPage(0);
},setLastPage:function(){
this.setPage(this.getTotalPages()-1);
}});
}
if(!dojo._hasResource["wm.base.components.LogoutVariable"]){
dojo._hasResource["wm.base.components.LogoutVariable"]=true;
dojo.provide("wm.base.components.LogoutVariable");
dojo.declare("wm.LogoutVariable",wm.ServiceVariable,{service:"securityService",operation:"logout",autoUpdate:0,startUpdate:0,clearDataOnLogout:true,logoutNavCall:null,init:function(){
this.inherited(arguments);
if(!this.clearDataOnLogout||window["PhoneGap"]){
this.logoutNavCall=new wm.NavigationCall({name:"logoutNavCall",owner:this,operation:"gotoPage"});
this.logoutNavCall.input.setData({pageName:"Login"});
}
},onSuccess:function(_6d7){
if(window["PhoneGap"]){
window.localStorage.clear();
}
if(!this.clearDataOnLogout||window["PhoneGap"]){
this.logoutNavCall.update();
}else{
window.location.reload();
}
},onError:function(_6d8){
this.inherited(arguments);
app.alert(wm.getDictionaryItem("wm.LogoutVariable.FAILED",{error:_6d8}));
},_end:0});
dojo.declare("wm.LoginVariable",wm.ServiceVariable,{useDefaultSuccessHandler:true,service:"securityService",operation:"login",_setOperation:function(_6d9){
this._service._operations.login={name:"login",parameters:{username:{type:"string"},password:{type:"string"},hash:{type:"string"}},returnType:"java.lang.String"};
this.inherited(arguments);
},request:function(){
var user=this.input.getValue("username");
var pass=this.input.getValue("password");
var hash=this.input.getValue("hash");
if(!user||!pass){
var d=new dojo.Deferred();
var e=new Error("Username and Password are required");
d.errback(e);
this.onResult();
this.onError(e);
return d;
}
var _6da=wm.login([user,pass,hash],this.useDefaultSuccessHandler?null:function(){
});
_6da.addCallbacks(dojo.hitch(this,function(){
this.onResult();
this.onSuccess();
}),dojo.hitch(this,function(e){
this.onResult();
this.onError(e);
}));
return _6da;
}});
}
if(!dojo._hasResource["wm.base.components.Page"]){
dojo._hasResource["wm.base.components.Page"]=true;
dojo.provide("wm.base.components.Page");
dojo.connect(window,"onresize",function(){
dojo.publish("window-resize");
});
var wmObjectList=[];
wm.getObject=function(_6db){
if(!wmObjectList[_6db]){
wmObjectList[_6db]=dojo.getObject(_6db);
}
return wmObjectList[_6db];
};
dojo.declare("wm.Page",wm.Component,{validateVisibleOnly:false,i18n:false,name:"",deletionDisabled:1,enableMobileFolding:false,create:function(){
this.inherited(arguments);
if(!this.name){
this.name=this.declaredClass.toLowerCase();
}
wm.Page.registerPage(this);
this.render();
},getMainPage:function(){
if(!this.owner){
return null;
}
var _6dc=this.owner;
while(_6dc.owner){
_6dc=_6dc.owner;
}
if(_6dc instanceof wm.Application){
return _6dc;
}
},destroy:function(){
this._isUnloading=true;
wm.Page.deregisterPage(this);
var _6dd=this.getMainPage();
if(_6dd){
_6dd.subPageUnloaded(this);
}
if(window.app){
window.app.subPageUnloaded(this);
}
wm.fire(this.root,"destroy");
this.inherited(arguments);
delete this.app;
delete this.domNode;
delete this.root;
_6dd=null;
delete this._designee;
},init:function(){
this.app=window.app;
if(this.owner==app.pageContainer){
window[this.name]=this;
}
this.owner[this.name]=this;
this.inherited(arguments);
},forEachWidget:function(_6de){
if(this.root){
return wm.forEachWidget(this.root,_6de);
}
},render:function(){
var _6df=(this.owner!=app.pageContainer);
var d=_6df?this.domNode||document.body:app.appRoot.domNode;
var ds=d.style;
dojo.addClass(d,this.declaredClass);
var _6e0=ds.left;
if(_6df){
ds.left="-100000px";
}
wm.timePage&&undefined;
this._loadingPage=true;
var _6e1=new Date().getTime();
var _6e2=this.constructor.widgets||this.widgets;
if(wm.isEmpty(_6e2)&&!this.isDesignLoaded()){
console.error("Page "+this.name+" has been corrupted, and no longer has a wm.Layout nor any widgets; please create a new project or edit "+this.name+".widgets.js by hand");
if(!wm.disablePageLoadingToast){
app.toastError(wm.getDictionaryItem("wm.Page.PAGE_ERRORS",{name:this.name}));
}
}
if(this.owner){
this.locationState=(this.owner==app.pageContainer)?app.locationState:this.owner._locationState;
}
if(wm.useDojoParser){
var _6e3=wm._dojoParserCurrentOwner;
wm._dojoParserCurrentOwner=this;
var _6e4=this.owner._pageLoader.htmlLoader.getHtmlNode();
while(_6e4.childNodes.length){
if(_6e4.firstChild){
this.domNode.appendChild(_6e4.firstChild);
}else{
_6e4.removeChild(_6e4.firstChild);
}
}
var _6e5=dojo.parser.parse(this.domNode);
wm._dojoParserCurrentOwner=_6e3;
}else{
if(app.debugDialog){
this.debugId=app.debugDialog.newLogEvent({eventType:"loadComponents",sourceDescription:"Page Loading",resultDescription:this.name+" page's widgets and components initialized",method:"loadComponents",affectedId:this.getRuntimeId(),firingId:this.getRuntimeId()});
}
this.loadComponents(_6e2,null);
if(this.debugId){
app.debugDialog.endLogEvent(this.debugId);
delete this.debugId;
}
}
wm.timePage&&undefined;
var self=this;
dojo.addOnLoad(dojo.hitch(this,function(){
this.postRender();
if(_6df){
ds.left=_6e0;
}
if(!this.root.isAncestorHidden()){
this.onShow();
}
this.root.callOnShowParent();
}));
},postRender:function(){
wm.timePage&&undefined;
wm.fire(this.root,"reflow");
wm.timePage&&undefined;
wm.fire(this,"unloadSupport");
try{
this._loadingPage=false;
if(this.root){
this.reflow();
}
if(app.debugDialog){
this.debugId=app.debugDialog.newLogEvent({eventType:"start",sourceDescription:"",resultDescription:this.name+".start()",method:"start",affectedId:this.getRuntimeId(),firingId:this.getRuntimeId()});
}
var _6e6=this.owner?this.owner._restoreBackState:undefined;
if(!window["studio"]||!studio.page||this!=studio.page&&!this.isAncestor(studio.page)){
this.start(_6e6,this.locationState);
}
if(this.debugId){
app.debugDialog.endLogEvent(this.debugId);
delete this.debugId;
}
this._startCalled=true;
if(wm.debugPerformance){
var _6e7=this.stopTimerWithName("LoadPage","wm.Layout");
}
this.onStart();
}
catch(e){
console.error("Failed to initialize page "+this.name+"; "+e);
}
},start:function(){
},reflow:function(){
wm.fire(this.root,"reflow");
},addComponent:function(_6e8){
this[_6e8.name]=_6e8;
if(_6e8 instanceof wm.Control){
if(this._designer&&dojo.isIE<=8){
var s=_6e8.domNode&&dojo.getComputedStyle(_6e8.domNode);
if(s&&s.backgroundImage=="none"){
_6e8.domNode.style.backgroundImage="url(images/blank.gif)";
}
}
}
this.inherited(arguments);
},removeComponent:function(_6e9){
delete this[_6e9.name];
this.inherited(arguments);
},isDesignLoaded:function(){
return this.name=="wip";
},getRoot:function(){
return this;
},getId:function(_6ea){
return _6ea;
},getRuntimeId:function(inId){
inId=this.name+(inId?"."+inId:"");
return this.owner!=app.pageContainer?this.owner.getRuntimeId(inId):inId;
},getComponent:function(_6eb){
return this.components[_6eb]||this[_6eb]||this.owner&&this.owner.getComponent(_6eb);
},_create:function(ctor,_6ec){
if(ctor.prototype instanceof dijit._Widget&&window.dijit){
return new wm.DijitWrapper(dojo.mixin(_6ec||{},{dijitClass:ctor,publishClass:p.declaredClass}));
}
return this.inherited(arguments);
},warnDroppedWidgets:function(_6ed,_6ee,_6ef,_6f0){
if(_6f0){
console.warn(_6ed+" was not loaded because its parent was not loaded");
}else{
console.warn(_6ed+" was not loaded because its deviceType property is "+_6ee+" and app is running as "+wm.device);
}
if(_6ef){
wm.forEachProperty(_6ef,dojo.hitch(this,function(w,_6f1){
if(_6f1!="binding"){
this.warnDroppedWidgets(_6f1,_6ee,w[3],true);
}
}));
}
},loadComponent:function(_6f2,_6f3,_6f4,_6f5,_6f6,_6f7,_6f8){
if(!this._isDesignLoaded&&_6f5.deviceType&&wm.device&&dojo.indexOf(_6f5.deviceType,wm.device)==-1){
if(djConfig.isDebug){
this.warnDroppedWidgets(_6f2,_6f5.deviceType.join(","),_6f7);
}
return;
}
if(wm.debugPerformance){
if(_6f4=="wm.Layout"){
if(dojo.isFF){
console.groupCollapsed("LOAD COMPONENT "+_6f4+": "+_6f2);
}else{
}
}
this.startTimerWithName("LoadComponent",_6f4);
this.startTimerWithName("LoadPage",_6f4);
}
var ctor=wm.getObject(_6f4);
if(!ctor){
try{
wm.getComponentStructure(_6f4);
ctor=dojo.getObject(_6f4);
}
catch(e){
}
if(!ctor){
ctor=wm.Box;
}
}
var _6f9={};
isWidget=(ctor.prototype instanceof wm.Control||ctor.prototype instanceof dijit._Widget);
if(isWidget){
var _6fa=(_6f3?_6f3.containerNode||_6f3.domNode:this.domNode);
_6f9={owner:this,parent:_6f3,domNode:_6fa?null:document.body,parentNode:_6fa};
}
if(!_6f9.owner){
if(_6f3&&_6f3 instanceof wm.Layout){
_6f9.owner=_6f3.owner;
}else{
if(_6f3){
_6f9.owner=_6f3;
}else{
_6f9.owner=this;
}
}
}
if(this[_6f2] instanceof wm.Binding){
c=this[_6f2];
}else{
_6f9=dojo.mixin({},_6f5,{name:_6f9.owner.getUniqueName(_6f2),_designer:this._designer,_loading:true},_6f9);
}
if(!c){
if(_6f5._isDesignLoaded===false){
delete _6f9._designer;
}
if(this.isRelativePositioned&&_6f4=="wm.Layout"){
_6f9.isRelativePositioned=true;
}
if(!this.isDesignLoaded()){
for(var p in _6f9){
if(p.indexOf("custom")==0&&dojo.isFunction(ctor.prototype[p])){
var _6fb=_6f9.owner;
_6f9[p]=dojo.hitch(_6fb,_6fb[_6f9[p]]);
}
}
}
var c=this._create(ctor,_6f9);
if(!_6f3&&isWidget){
c.moveable=false;
this.root=c;
}
}
this.makeEvents(_6f6,c);
if(_6f7){
this.loadComponents(_6f7,c);
}
c.loaded();
var _6fc=this.stopTimerWithName("LoadComponent",_6f4);
if(wm.debugPerformance){
if(_6f4=="wm.Layout"){
this.printPagePerformanceData();
}
}
return c;
},printPagePerformanceData:function(){
var _6fd={};
for(var _6fe in wm.Component.timingByComponent){
var obj=wm.Component.timingByComponent[_6fe];
var _6ff=false;
for(var i in obj){
if(wm.sum(obj[i])>10){
_6ff=true;
}
}
for(var i in obj){
if(!_6fd[i]){
_6fd[i]=0;
}
_6fd[i]+=wm.sum(obj[i]);
}
}
for(var i in _6fd){
}
},loadComponents:function(_700,_701){
for(var i in _700){
try{
this.loadComponent(i,_701,_700[i][0],_700[i][1]||{},_700[i][2],_700[i][3]);
}
catch(e){
console.error("FAILED TO LOAD "+"["+_700[i][1].name+"] "+i+": ",e);
}
}
},onShow:function(){
},onStart:function(_702){
},keydown:function(e){
for(var i=0;i<wm.dialog.showingList.length;i++){
if(wm.dialog.showingList[i].modal){
return;
}
}
if(this.owner!=app.pageContainer||this!=app._page){
return true;
}
var _703=(e.target.tagName=="INPUT");
var chr=app._keys[e.keyCode];
var _704=chr&&chr.length>1;
if(e.keyCode==dojo.keys.ESCAPE){
this.onEscapeKey();
}else{
if(e.shiftKey){
if(e.keyCode!=dojo.keys.SHIFT&&!_703){
if(this.onShiftKey(chr)){
dojo.stopEvent(e);
}
}
}else{
if(e.ctrlKey){
if(e.keyCode!=dojo.keys.CTRL){
if(this.onCtrlKey(chr)){
dojo.stopEvent(e);
}
}
}else{
if(e.keyCode==dojo.keys.ENTER&&!_703){
if(this.onEnterKey()){
dojo.stopEvent(e);
}
}else{
if(!_703&&e.keyCode){
if(_704){
if(this.onMiscKey(chr)){
dojo.stopEvent(e);
}
}else{
if(this.onLetterKey(chr)){
dojo.stopEvent(e);
}
}
}
}
}
}
}
},onEnterKey:function(){
},onShiftKey:function(_705){
},onCtrlKey:function(_706){
},onEscapeKey:function(){
},onLetterKey:function(_707){
},onMiscKey:function(_708){
},toString:function(_709){
var t=_709||"";
if(this._loadingPage){
t+="; PAGE LOADING";
}
return this.inherited(arguments,[t]);
},_end:0});
wm.Page.extend({designCreate:function(){
this.inherited(arguments);
this.app=this.isDesignLoaded()?studio.application:app;
},unloadSupport:function(){
if(!this.isDesignLoaded()&&window.studio&&window.studio._isWaveMakerStudio){
this.constructor._supported=false;
this.constructor.widgets={};
}
},generateEventName:function(_70a){
return _70a;
},_getProp:function(n){
if(window["studio"]&&this==studio.page&&this.isEventProp(n)){
return (getEvent(n,studio.getScript()))?n:"";
}
return this.inherited(arguments);
},writeComponents:function(){
var _70b=this.inherited(arguments);
var _70c=[];
var _70d=[];
dojo.forEach(_70b,function(item){
var _70e=item.indexOf("\"")+1;
var _70f=item.indexOf("\"",_70e);
var _710=item.substring(_70e,_70f);
var obj=dojo.getObject(_710);
if(obj&&obj.prototype instanceof wm.Control){
_70d.push(item);
}else{
_70c.push(item);
}
});
return _70c.concat(_70d);
},installDesignDictionary:function(_711){
var lang=studio.languageSelect.getDisplayValue();
var _712=lang==""||lang=="default";
this._editLanguage=lang;
var _713=wm.listComponents([this],wm.Component,false);
for(var i=0;i<_713.length;i++){
var c=_713[i];
var _714=c.listWriteableProperties();
for(var prop in _714){
var _715=c.getProp(prop);
if(_715===null||typeof _715!="object"||_715.declaredClass===undefined&&!wm.isNode(_715)){
if(c["_original_i18n_"+prop]!==undefined&&c["_original_i18n_"+prop]!=_715){
c.setProp(prop,c["_original_i18n_"+prop]);
_715=c["_original_i18n_"+prop];
delete c["_original_i18n_"+prop];
}
if(!_712){
c["_original_i18n_"+prop]=(typeof _715=="object")?dojo.clone(_715):_715;
}
}
}
}
this._designDictionary=_711;
for(var _716 in _711){
var c=this[_716];
if(c instanceof wm.Component){
var _717=_711[_716];
for(var prop in _717){
c.setProp(prop,_717[prop]);
}
}
}
},getLanguageWidgets:function(){
var _718={};
var _719=wm.listComponents([this],wm.Component,false);
for(var i=0;i<_719.length;i++){
var c=_719[i];
var _71a=c.listWriteableProperties();
for(var prop in _71a){
if(c.hasLocalizedProp(prop)){
if(!_718[c.name]){
_718[c.name]={};
}
_718[c.name][prop]=c.getProp(prop);
}
}
}
return _718;
},setPageProperty:function(_71b,_71c){
if(typeof _71c=="string"){
_71c="\""+_71c+"\"";
}
var text=studio.getScript();
var _71d;
var _71e=new RegExp("\""+_71b+"\": .*,");
if(text.match(_71e)){
_71d=text.replace(_71e,"\""+_71b+"\": "+_71c+",");
}else{
_71d=text.replace(/\{(.*?)\n/,"{$1\n\t\""+_71b+"\": "+_71c+",\n");
}
if(_71d!=text){
studio.setScript(_71d);
}
},getPageProperty:function(_71f){
if(typeof inValue=="string"){
inValue="\""+inValue+"\"";
}
var text=studio.getScript();
var _720=new RegExp("\""+_71f+"\": (.*),");
var _721=text.match(_720);
if(_721){
var _722=_721[1];
_722=_722.replace(/^\"/,"").replace(/\"$/,"");
if(typeof this[_71f]=="boolean"){
_722=(_722=="true");
}else{
if(typeof this[_71f]=="number"){
_722=parseInt(_722);
}
}
return _722;
}
},setI18n:function(_723){
this.i18n=Boolean(_723);
if(this._isDesignLoaded){
this.setPageProperty("i18n",this.i18n);
}
},getI18n:function(){
return this.getPageProperty("i18n");
},setPreferredDevice:function(_724){
this.preferredDevice=_724;
if(this._isDesignLoaded){
this.setPageProperty("preferredDevice",this.preferredDevice);
}
},getPreferredDevice:function(){
return this.getPageProperty("preferredDevice");
},setValidateVisibleOnly:function(_725){
this.validateVisibleOnly=Boolean(_725);
if(this._isDesignLoaded){
this.setPageProperty("validateVisibleOnly",this.validateVisibleOnly);
}
},getValidateVisibleOnly:function(){
return this.getPageProperty("validateVisibleOnly");
},set_enableMobileFolding:function(_726){
this.enableMobileFolding=Boolean(_726);
if(this._isDesignLoaded){
this.setPageProperty("enableMobileFolding",this.enableMobileFolding);
if(studio.currentDeviceType=="phone"){
studio.mobileFoldingToggleButton.setDisabled(!_726);
}
}
},onMobileFolding:function(){
},onMobileUnfolding:function(){
}});
wm.Object.extendSchema(wm.Page,{onStart:{events:["js","disableNoEvent"]},onShow:{events:["js","disableNoEvent"]},onShiftKey:{events:["js","disableNoEvent"]},onCtrlKey:{events:["js","disableNoEvent"]},onEscapeKey:{},onEnterKey:{},onLetterKey:{events:["js","disableNoEvent"]},onMiscKey:{events:["js","disableNoEvent"]},i18n:{group:"widgetName"},preferredDevice:{hidden:1},validateVisibleOnly:{group:"widgetName"},enableMobileFolding:{group:"widgetName"}});
wm.Part=wm.Page;
dojo.mixin(wm.Page,{byName:{},getPage:function(_727,_728){
var page=wm.Page.byName[wm.capitalize(_727)];
if(page&&page.length){
if(_728===undefined){
_728=page.length-1;
}
return page[_728];
}
},getPages:function(_729){
return wm.Page.byName[wm.capitalize(_729)];
},registerPage:function(_72a){
if(!wm.Page.byName[_72a.declaredClass]){
wm.Page.byName[_72a.declaredClass]=[];
}
wm.Page.byName[_72a.declaredClass].push(_72a);
},deregisterPage:function(_72b){
var a=wm.Page.byName[_72b.declaredClass];
if(a){
wm.Array.removeElement(a,_72b);
}
}});
wm.getPage=wm.Page.getPage;
}
if(!dojo._hasResource["wm.base.components.HtmlLoader"]){
dojo._hasResource["wm.base.components.HtmlLoader"]=true;
dojo.provide("wm.base.components.HtmlLoader");
wm.getNodeIds=function(_72c){
var ids=[];
dojo.forEach(_72c.childNodes,function(n){
if(n.id){
ids.push(n.id);
}
});
return ids;
};
dojo.declare("wm.HtmlLoader",wm.Component,{url:"",html:"",relativeUrl:true,init:function(){
this.inherited(arguments);
this.inherited(arguments);
if(this.url){
this.setUrl(this.url);
}else{
this.setHtml(this.html);
}
},destroy:function(){
this.html=null;
dojo.destroy(this._htmlNode);
this._htmlNode=null;
this.inherited(arguments);
},setUrl:function(_72d){
this.url=_72d||"";
if(this.url){
var _72e=this.relativeUrl?this.getPath()+this.url:this.url;
this.setHtml(wm.load(_72e,true));
}
},setHtml:function(_72f){
this.clearHtml();
this.html=_72f||"";
if(this.html){
this.addHtml(this.html);
}
dojo.publish("wm-markupchanged");
},clearHtml:function(){
this.html="";
this.removeHtml();
},getHtmlNode:function(){
if(!this._htmlNode){
var n=this._htmlNode=document.createElement("div");
n.style.display="none";
document.body.appendChild(n);
}
return this._htmlNode;
},addHtml:function(_730){
if(this.isDesignLoaded()){
var p=this.getPath();
_730=_730.replace(/<img([^>]*)src[^>]*=[^>]*(["'])([^(http:)\/][^>]*)\2/g,"<img$1src=\""+p+"$3\"");
}
var n=this.getHtmlNode();
n.innerHTML=[n.innerHTML,_730].join("\n");
},removeHtml:function(){
var n=this.getHtmlNode();
if(n){
n.innerHTML="";
}
},getNodeIds:function(){
return wm.getNodeIds(this.getHtmlNode());
}});
}
if(!dojo._hasResource["wm.base.components.CssLoader"]){
dojo._hasResource["wm.base.components.CssLoader"]=true;
dojo.provide("wm.base.components.CssLoader");
dojo.declare("wm.CssLoader",wm.Component,{url:"",css:"",relativeUrl:true,init:function(){
this.inherited(arguments);
if(this.url){
this.setUrl(this.url);
}else{
this.setCss(this.css);
}
},destroy:function(){
this._sheet=null;
this.inherited(arguments);
},getStyleSheet:function(){
if(dojo.isIE&&!this._sheet){
this._sheet=wm.CssLoader.sheet||(wm.CssLoader.sheet=this.makeSheet());
}
if(!this._sheet){
this._sheet=this.makeSheet();
}
return this._sheet;
},makeSheet:function(){
var _731=document.createElement("style");
_731.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(_731);
return _731;
},setUrl:function(_732){
this.url=_732||"";
if(this.url){
var _733=this.relativeUrl?this.getPath()+this.url:this.url;
this.setCss(wm.load(_733,true));
}
},setCss:function(_734){
this.clearCss();
this.css=_734||"";
if(this.css){
this.addCss(this.css);
}
},clearCss:function(){
this.css="";
this.removeCss();
},removeCss:function(){
if(dojo.isIE){
return;
}
var s=this.getStyleSheet();
if(s){
if(s.styleSheet){
s.styleSheet.cssText="";
}else{
while(s.firstChild){
s.removeChild(s.firstChild);
}
}
}
},addCss:function(_735){
if(this.isDesignLoaded()){
var p=this.getPath();
_735=_735.replace(/url\s*\(\s*([^(http:)\/].*)\.*\)/g,"url("+p+"$1)");
}
var s=this.getStyleSheet();
if(s.styleSheet){
s.styleSheet.cssText=[s.styleSheet.cssText,_735].join("\n");
}else{
s.appendChild(document.createTextNode("\n"));
s.appendChild(document.createTextNode(_735));
}
}});
}
if(!dojo._hasResource["wm.base.components.PageLoader"]){
dojo._hasResource["wm.base.components.PageLoader"]=true;
dojo.provide("wm.base.components.PageLoader");
wm.load=function(_736,_737,_738){
if(djConfig.isDebug&&!dojo.isFF){
}
if(_738){
var d=dojo.xhrGet({url:_736,sync:false,preventCache:!_737});
if(typeof _738=="function"){
d.addCallback(_738);
}
return d;
}else{
return dojo.xhrGet({url:_736,sync:true,preventCache:!_737}).results[0];
}
};
wm.dojoScriptLoader=function(uri){
try{
dojo._loadUri(uri);
}
catch(e){
console.error(e);
return false;
}
};
wm.gzScriptLoader=function(name){
try{
var path="resources/gzipped/";
dojo._loadUri(path+name.replace(/[.]/g,"/")+".js");
}
catch(e){
console.error("error while loading gzipped file ",e);
return false;
}
};
dojo.declare("wm.PageLoader",wm.Component,{init:function(){
this.randomNum=wm.saveTimestamp||Math.floor(Math.random()*1000000);
this.randomParam=window["PhoneGap"]?"":"?dojo.preventCache="+this.randomNum;
this.inherited(arguments);
this._pageConnections=[];
this.pageProps={};
this.cssLoader=new wm.CssLoader({owner:this,relativeUrl:false});
this.htmlLoader=new wm.HtmlLoader({owner:this,relativeUrl:false});
},pageConnect:function(){
var ctor=this.getPageCtor();
if(ctor){
var args=[ctor.prototype].concat(dojo._toArray(arguments));
this._pageConnections.push(dojo.connect.apply(dojo,args));
}
},_disconnectPage:function(){
dojo.forEach(this._pageConnections,dojo.disconnect);
},getPageCtor:function(){
return dojo.getObject(this.className||"");
},testForSecurityErrrors:function(path){
if(app.isSecurityEnabled){
try{
var _739=dojo._getText(path);
if(_739.match(/^\<\!DOCTYPE/)&&_739.match(/new\s*wm\.Application\(/)){
this.isSecurityError=true;
throw "SecurityError";
}
}
catch(e){
}
}
},loadCombinedFiles:function(_73a,_73b){
var _73c=_73b+".a.js"+this.randomParam;
delete dojo._loadedUrls[_73c];
wm.dojoScriptLoader(_73c);
var ctor=dojo.getObject(_73a);
if(ctor){
this.cssLoader.setCss(ctor.prototype._cssText);
this.htmlLoader.setHtml(ctor.prototype._htmlText);
}else{
this.testForSecurityErrrors(_73c);
}
return ctor;
},loadController:function(_73d,_73e){
var ctor=dojo.getObject(_73d);
if(!ctor&&!djConfig.isDebug){
ctor=this.loadCombinedFiles(_73d,_73e);
}
if(!ctor){
var _73f=_73e+".js"+this.randomParam;
delete dojo._loadedUrls[_73f];
wm.dojoScriptLoader(_73f);
ctor=dojo.getObject(_73d);
}
if(!ctor){
this.testForSecurityErrrors(_73f);
if(!wm.disablePageLoadingToast){
app.toastError(wm.getDictionaryItem("wm.Page.PAGE_ERRORS",{name:_73d}));
}
console.error("Error parsing "+_73e+".js");
this.onError("Error parsing "+_73e+".js");
ctor=dojo.declare(_73d,wm.Page);
}
return ctor;
},loadSupport:function(_740,_741){
if(!_740._supported){
this.cssLoader.setUrl(_741+".css"+this.randomParam);
_740.css=this.cssLoader.css;
this.htmlLoader.setUrl(_741+".html"+this.randomParam);
_740.html=this.htmlLoader.html;
_740.html=_740.css="";
var _742=_741+".widgets.js"+this.randomParam;
delete dojo._loadedUrls[_742];
wm.dojoScriptLoader(_742);
_740._supported=true;
}
},unloadSupport:function(ctor){
if(!ctor){
ctor=this.getPageCtor();
}
if(ctor){
ctor.css=ctor.html="";
ctor._supported=false;
}
},loadPageCode:function(_743){
var path=this.getPath()+wm.pagesFolder+_743+"/"+_743;
var ctor=dojo.getObject(_743);
if(!ctor){
ctor=this.loadController(_743,path);
}
if(ctor){
if(ctor.prototype._cssText===undefined||wm.isEmpty(ctor.widgets)){
this.loadSupport(ctor,path);
}
if(ctor.prototype.i18n){
try{
dojo["requireLocalization"]("language",_743);
ctor.prototype._i18nDictionary=dojo.i18n.getLocalization("language",_743);
}
catch(e){
}
}
}
return ctor;
},loadPage:function(_744,_745){
_745=_745||_744;
if(!_745){
wm.logging&&undefined;
return;
}
this.previousPage=this.page;
this.previousClassName=this.className;
this.className=_744;
try{
var ctor=this.loadPageCode(_744);
if(ctor){
this.onBeforeCreatePage();
this.createPage(ctor,_745);
this.pageChanged();
this.unloadSupport(ctor);
}else{
console.error("Page not found:",_744);
this.onError("Page not found:"+_744);
}
if(!this.page||!this.page.root){
console.error("Page not found:",_744);
this.onError("Page not loaded:"+_744);
}
}
catch(e){
if(this.isSecurityError){
delete this.isSecurityError;
app.onSessionExpiration();
}else{
console.error("Page not found:",_744);
this.onError(e);
}
}
},onError:function(_746){
},createPage:function(_747,_748){
var _749=dojo.mixin({name:_748,owner:this.owner,domNode:this.domNode,isRelativePositioned:this.isRelativePositioned},this.pageProps||{});
this.page=new _747(_749);
},destroyPage:function(_74a){
this._disconnectPage();
if(_74a){
wm.fire(_74a,"destroy");
}
},destroy:function(){
this.destroyPage();
delete this.cssLoader;
delete this.htmlLoader;
this.inherited(arguments);
if(this.domNode){
dojo.destroy(this.domNode);
this.domNode=null;
}
},pageChanged:function(){
this.onPageChanged(this.page,this.previousPage);
if(this.previousPage){
this.destroyPage(this.previousPage);
delete this.previousPage;
if(this.previousClassName){
try{
var _74b=dojo.getObject(this.previousClassName);
_74b._supported=false;
}
catch(e){
}
}
}
},onBeforeCreatePage:function(){
},onPageChanged:function(_74c,_74d){
},isDesignLoaded:function(){
if(!window["studio"]){
return false;
}
if(this.inherited(arguments)){
return true;
}
var o=this.owner;
while(o&&o instanceof wm.Application==false&&o!=studio.page){
o=o.owner;
}
if(o==studio.page){
return true;
}
return false;
}});
}
if(!dojo._hasResource["wm.base.components.Application"]){
dojo._hasResource["wm.base.components.Application"]=true;
dojo.provide("wm.base.components.Application");
wm.componentLoaders=wm.componentLoaders||{};
wm.registerComponentLoader=function(_74e,_74f){
wm.componentLoaders[_74e]=_74f;
};
dojo.declare("wm.Application",wm.Component,{debugDialog:null,sessionExpirationHandler:"nothing",touchToClickDelay:500,touchToRightClickDelay:1500,eventDelay:wm.isMobile?100:0,manageURL:false,manageHistory:true,i18n:false,main:"Main",tabletMain:"",phoneMain:"",isSecurityEnabled:false,phoneGapLoginPage:"Login",hintDelay:1500,disableDirtyEditorTracking:false,deletionDisabled:1,projectSubVersion:"Alpha",projectVersion:1,studioVersion:"",theme:"wm_notheme",toastPosition:"br",_lastTheme:"",init:function(){
this.history=[];
if(window["onpopstate"]!==undefined){
this._initializingBack=true;
this.connect(window,"onpopstate",this,"_onBack");
}
this.requireLocalization();
if(djConfig.isDebug){
dojo["require"]("common."+wm.version.replace(/[^a-zA-Z0-9]/g,"")+"_patches",true);
}
window.app=wm.application=wm.application||this;
this.connectList=[];
this.app=this;
if(this.i18n){
try{
dojo["requireLocalization"]("language","app");
this._i18nDictionary=dojo.i18n.getLocalization("language","app");
}
catch(e){
}
}
this.loadBranding();
this.inherited(arguments);
this._isDesignLoaded=(window["studio"]&&this!=app);
if(!this._isDesignLoaded){
wm.typeManager.initTypes();
}
if(this._isDesignLoaded){
studio._application=this;
}
var node=this._isDesignLoaded?null:document.body.parentNode;
if(node){
dojo.addClass(node,"WMApp");
}
var _750=window.location.search.match(/theme\=(.*?)\&/)||window.location.search.match(/theme\=(.*?)$/);
if(_750){
this._setTheme(_750[1],true);
}else{
if(wm.device=="phone"||window["studio"]&&studio.currentDeviceType=="phone"){
this._setTheme(this.phoneTheme||this.theme,true);
}else{
if(wm.device=="tablet"||window["studio"]&&studio.currentDeviceType=="tablet"){
this._setTheme(this.tabletTheme||this.theme,true);
}else{
this._setTheme(this.theme,true);
}
}
}
if(this._css){
this._cssLoader=new wm.CssLoader({owner:this});
this._cssLoader.setCss(this._css);
}
if(wm.isMobile){
if(wm.isAndroid>2||wm.isAndroid=="chrome"||wm.isIOS&&wm.isIOS>4){
}else{
this._touchEnabled=true;
}
}
this.$=this.components={};
this._setupKeys();
},_pollForTimezoneChange:function(){
if(new Date().getTimezoneOffset()!=wm.currentTimeZone){
wm.setTimeZoneOffset();
wm.currentTimeZone=new Date().getTimezoneOffset();
}
},getServerTimeOffset:function(){
if(!this.serverTimeSVar){
var _751=this.serverTimeSVar=new wm.ServiceVariable({owner:this,name:"serverTimeSVar",service:"waveMakerService",operation:"getServerTimeOffset",onSuccess:function(_752){
wm.serverTimeOffset=_752;
wm.setTimeZoneOffset();
wm.currentTimeZone=new Date().getTimezoneOffset();
}});
}
this.serverTimeSVar.update();
},_setupKeys:function(){
this._keys={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"BREAK",20:"CAPS",27:"ESC",32:" ",33:"PAGE UP",34:"PAGE DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"LEFT WINDOW",92:"RIGHT WINDOW",93:"SELECT",96:"NUMPAD 0",97:"NUMPAD 1",98:"NUMPAD 2",99:"NUMPAD 3",100:"NUMPAD 4",101:"NUMPAD 5",102:"NUMPAD 6",103:"NUMPAD 7",104:"NUMPAD 8",105:"NUMPAD 9",106:"NUMPAD *",107:"NUMPAD +",108:"NUMPAD ENTER",109:"NUMPAD -",110:"NUMPAD .",111:"NUMPAD /",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"\""};
},requireLocalization:function(){
if(djConfig.isDebug){
dojo.registerModulePath("wm.language",wm.libPath+"/wm/language");
}
wm.locale={};
wm.locale.phrases=dojo.i18n.getLocalization("wm.language","components");
wm.locale.props=dojo.i18n.getLocalization("wm.language","properties");
},loadBranding:function(){
if(wm.branding){
this._brandingDictionary=dojo.fromJson(wm.load("branding/"+wm.branding+"/branding.js"));
var _753=document.createElement("link");
_753.type="text/css";
_753.rel="stylesheet";
_753.href="branding/"+wm.branding+"/branding.css";
document.getElementsByTagName("head")[0].appendChild(_753);
}
},createDebugDialog:function(){
dojo["require"]("wm.base.debug.Dialog");
dojo["require"]("wm.base.components.JsonRpcService");
if(!this.debugDialog){
this.debugDialog=new wm.debug.Dialog({owner:this,titlebarButtons:"DebuggerHelpIcon",name:"debugDialog",width:"700px",height:"400px",corner:"cr"});
}
},setPhoneTheme:function(_754){
this.phoneTheme=_754;
if(wm.device=="phone"||window["studio"]&&studio.currentDeviceType=="phone"){
this._setTheme(_754||this.theme);
}
},setTabletTheme:function(_755){
this.tabletTheme=_755;
if(wm.device=="tablet"||window["studio"]&&studio.currentDeviceType=="tablet"){
this._setTheme(_755||this.theme);
}
},_setTheme:function(_756,_757,_758,_759,_75a,_75b){
if(_756.indexOf(".")==-1){
_756=_756.indexOf("wm_")==0?"wm.base.widget.themes."+_756:"common.themes."+_756;
}
var _75c=window.location.search.match(/theme\=(.*?)\&/)||window.location.search.match(/theme\=(.*?)$/);
var node;
if(this._isDesignLoaded){
if(studio.themesListVar.query({dataValue:_756,designer:"themedesigner"}).getCount()){
node=studio.designer.domNode;
}else{
node=studio.designerWrapper.domNode;
}
}else{
node=document.body;
}
if(this.themeName){
dojo.removeClass(studio.designer.domNode,this.themeName);
dojo.removeClass(studio.designerWrapper.domNode,this.themeName);
}
if(this._isDesignLoaded){
studio.themeChanged(_756);
}
if(this._isDesignLoaded&&!_757){
try{
if(this._isDesignLoaded&&!_757){
this._themeChanged=true;
this.cacheWidgets();
}
}
catch(e){
}
}
this._lastTheme=this._theme;
this._theme=_756;
this.themeName=_756.replace(/^.*\./,"");
dojo.addClass(node,this.themeName);
if(this._isDesignLoaded||!_757||_75c){
try{
this.loadThemeCss(this._theme,this._isDesignLoaded,_758);
this.loadThemePrototype(this._theme,_759);
if(this._isDesignLoaded&&!_757&&!_75a){
this.useWidgetCache();
}
}
catch(e){
if(_756!="wm_notheme"){
this._setTheme("wm_notheme",_757,_758,_759,_75a);
app.alert(wm.getDictionaryItem("wm.Application.ALERT_MISSING_THEME",{name:_756}));
}else{
app.alert(wm.getDictionaryItem("wm.Application.ALERT_MISSING_NOTHEME",{name:_756}));
}
return;
}
}else{
this.loadThemePrototype(this._theme,_759);
}
},cacheWidgets:function(){
if(!this._widgetsjs){
var _75d="";
var _75e=studio.page.components;
for(c in _75e){
if(_75e[c] instanceof wm.Dialog){
_75d+=_75e[c].write("")+",";
}
}
var _75f=dojo.fromJson("{"+_75d+studio.page.root.write("")+"}");
this._widgetsjs=_75f;
}
},useWidgetCache:function(){
studio.page.root.destroy();
delete studio.page.root;
var _760=studio.page.components;
for(c in _760){
if(_760[c] instanceof wm.Dialog){
_760[c].destroy();
}
}
studio.page.loadComponents(this._widgetsjs,null);
delete this._widgetsjs;
studio.page.reflow();
studio.refreshWidgetsTree();
},loadThemePrototype:function(_761,_762){
var _763=_761.replace(/^.*\./,"");
var _764=wm.Application.themeData[_761];
if(!_764||_762){
var path;
if(_761===_763){
if(_763.match(/^wm_/)){
path=dojo.moduleUrl("wm")+"base/widget/themes/"+_763+"/Theme.js";
}else{
path=dojo.moduleUrl("common")+"themes/"+_763+"/Theme.js";
}
}else{
path=dojo.moduleUrl(_761)+"/Theme.js";
}
_764=_762||dojo.fromJson(dojo.xhrGet({url:path,sync:true,preventCache:true}).results[0]);
wm.Application.themeData[_761]=_764||{};
}
var _765=_764["wm.Control"];
for(var j in _765){
wm.Control.prototype[j]=_765[j];
}
if(!wm.Application.themePrototypeData){
wm.Application.themePrototypeData={};
}
wm.Application.themePrototypeData["wm.Control"]=this._theme;
},loadThemePrototypeForClass:function(ctor,_766){
if(!this._theme||!ctor){
return;
}
var _767=ctor.prototype.declaredClass;
if(_767=="wm.Template"){
_767="wm.Panel";
}
var _768=wm.Application.themeData[this._theme];
var _769=_768[ctor.prototype.declaredClass];
var p=ctor.prototype;
if((window["StudioApplication"])){
if(!wm.defaultPrototypeValues){
wm.defaultPrototypeValues={};
}
if(!wm.defaultPrototypeValues[_767]){
wm.defaultPrototypeValues[_767]={};
var _76a=wm.Object.getSchemaClass(ctor).prototype;
for(var _76b in _76a){
var _76c=_76a[_76b];
if(typeof _76c=="object"&&_76c&&!_76c.method&&!_76c.ignore&&!_76c.readonly&&!_76c.operation&&!(typeof p[_76b]=="function")){
wm.defaultPrototypeValues[_767][_76b]=p[_76b];
}
}
if("desktopHeight" in wm.defaultPrototypeValues[_767]===false){
wm.defaultPrototypeValues[_767].desktopHeight=undefined;
}
}
if(wm.Application.themePrototypeData[_767]&&wm.Application.themePrototypeData[_767]!=this._theme){
var _76d=wm.defaultPrototypeValues[_767];
wm.forEachProperty(_76d,function(_76e,_76f){
if(_76e&&typeof _76e=="object"){
_76e=dojo.clone(_76e);
}
p[_76f]=_76e;
if(_766){
_766[_76f]=_76e;
}
});
}
}
if(wm.locale.props){
dojo.mixin(_769,wm.locale.props[_767]);
}
if(wm.Application.themePrototypeData[_767]!=this._theme){
if(_769){
for(var j in _769){
ctor.prototype[j]=_769[j];
if(_766){
_766[j]=_769[j];
}
}
}
wm.Application.themePrototypeData[_767]=this._theme;
}
},loadThemeCss:function(_770,_771,_772){
var _773=_770.replace(/^.*\./,"");
var path;
var _774;
if(_770===_773){
if(_773.match(/^wm_/)){
path=dojo.moduleUrl("wm")+"base/widget/themes/"+_773+"/theme.css";
}else{
path=dojo.moduleUrl("common")+"themes/"+_773+"/theme.css";
}
}else{
path=dojo.moduleUrl(_770)+"/theme.css";
}
if(_771){
var _775=path.replace(/\/[^\/]*$/,"/images");
while(_775.match(/[^\/]+\/\.\.\//)){
_775=_775.replace(/[^\/]+\/\.\.\//,"");
}
if(_772){
_774=_772;
}else{
var _776=dojo.xhrGet({url:path,sync:true,preventCache:false}).results;
if(_776[1]){
throw _776[1];
}
_774=_776[0]||"";
var _776=dojo.xhrGet({url:path.replace(/theme\.css/,"custom.css"),sync:true,preventCache:false}).results;
if(!_776[1]){
_774+=_776[0]||"";
}
}
_774=_774.replace(/url\s*\(\s*images/g,"url("+_775);
setCss("theme_ss",_774);
}else{
wm.headAppend(wm.createElement("link",{rel:"stylesheet",type:"text/css",href:path}));
}
},postInit:function(){
this.inherited(arguments);
},destroy:function(){
this._isDestroying=true;
wm.fire(this.scrim,"destroy");
wm.fire(this._runtimeService,"destroy");
this.inherited(arguments);
dojo.forEach(this.connectList,dojo.disconnect);
this.connectList=null;
delete this._page;
if(this.pageContainer){
this.pageContainer.destroy();
this.pageContainer=null;
}
if(this.domNode){
dojo.destroy(this.domNode);
this.domNode=null;
}
if(this.pageDialog){
this.pageDialog.destroy();
}
delete this.pageDialog;
if(this.scrim){
this.scrim.destroy();
}
delete this.scrim;
delete this.app;
},createPageContainer:function(){
if(!this._isDesignLoaded){
this.appRoot=new wm.AppRoot({owner:this,name:"appRoot",margin:"0",padding:"0",border:"0",borderColor:"0"});
if(wm.isMobile){
dojo.addClass(document.body,"wmmobile");
}
this.pageContainer=new wm.PageContainer({manageHistory:this.manageHistory,manageURL:this.manageURL,owner:this,parent:this.appRoot,width:"100%",height:"100%",margin:wm.AppRoot.prototype.margin,padding:wm.AppRoot.prototype.padding,border:wm.AppRoot.prototype.border,borderColor:wm.AppRoot.prototype.borderColor,getRuntimeId:function(){
return "";
}});
this.connectList[this.connectList.length]=this.connect(this.pageContainer._pageLoader,"onBeforeCreatePage",this,"beforeCreatePage");
this.connectList[this.connectList.length]=this.connect(this.pageContainer._pageLoader,"onPageChanged",this,"pageChanged");
}
},loadComponents:function(_777){
this._loading=true;
this.createComponents(_777);
this._loading=false;
},subPageLoaded:function(_778){
if(djConfig.isDebug){
if(this.debugSubPageList===undefined){
this.debugSubPageList={};
}
this.debugSubPageList[_778.name]=_778;
}
},subPageUnloaded:function(_779){
if(djConfig.isDebug&&_779){
if(this.debugSubPageList!=undefined){
delete (this.debugSubPageList[_779.name]);
}
}
},_onSessionExpiration:function(){
switch(this.sessionExpirationHandler){
case "nothing":
break;
case "navigateToLogin":
if(window.location.pathname.indexOf("index.html")!=-1){
window.location.pathname=location.pathname.replace(/index\.html/,"login.html");
}else{
window.location.pathname+=window.location.pathname.match(/\/$/)?"login.html":"/login.html";
}
break;
case "showLoginDialog":
if(!this._loginDialog){
this._loginDialog=new wm.PageDialog({name:"_loginDialog",owner:this,width:"80%",height:"80%",title:"Login",pageName:"Login",hideControls:true,noEscape:true,deferLoad:false});
}
this._loginDialog.show();
break;
}
wm.fire(this,"onSessionExpiration");
},qualifyName:function(_77a){
return _77a;
},addComponent:function(_77b){
this.inherited(arguments);
this[_77b.name]=_77b;
},removeComponent:function(_77c){
delete this[_77c.name];
this.inherited(arguments);
},getRuntimeService:function(_77d){
if(!this._runtimeService){
this._runtimeService=new wm.JsonRpcService({service:"runtimeService",_isDesignLoaded:this._isDesignLoaded,owner:_77d});
}
return this._runtimeService;
},getRuntimeServiceDesignTime:function(_77e){
if(!this._runtimeService){
this._runtimeService=new wm.JsonRpcService({service:"runtimeService",owner:_77e||this,designTime:true});
}
return this._runtimeService;
},getRoot:function(){
return this;
},getRuntimeId:function(inId){
return inId;
},getId:function(inId){
if(inId){
return "app."+inId;
}else{
return "app";
}
},reflow:function(_77f){
var d=this.domNode;
this.appRoot.reflow();
},reflowParent:function(){
this.reflow();
},loadComponent:function(_780,_781,_782,_783,_784,_785,_786){
return _781.createComponent(_780,_782,_783,_784,_785,this);
},hideLoadingIndicator:function(){
var l=dojo.byId("_wm_loading");
if(l){
dojo._destroyElement(l);
}
},run:function(){
app=wm.application=this;
dojo.addOnLoad(dojo.hitch(this,"runOnLoad"));
},runOnLoad:function(){
setTimeout(dojo.hitch(this,"doRun"),dojo.isIE<7?100:1);
},doRun:function(){
if(wm.isPhonegap){
if(!window["cordova"]&&!window["PhoneGap"]){
wm.job("doRun",100,this,"doRun");
return;
}
if(!window["PhoneGap"]){
window["PhoneGap"]=true;
}
if(document.body.nextSibling&&document.body.nextSibling.tagName=="IFRAME"){
dojo.destroy(document.body.nextSibling);
}
dojo["require"]("build.Gzipped.wm_phonegap_misc",true);
dojo.forEach(wm.componentFixList._phonegap,function(fix){
try{
fix();
}
catch(e){
}
});
}
if(!this._isDesignLoaded){
if(wm.serverTimeOffset===undefined){
this.getServerTimeOffset();
}else{
wm.currentTimeZone=new Date().getTimezoneOffset();
}
window.setInterval(dojo.hitch(this,"_pollForTimezoneChange"),10000);
}
this.createPageContainer();
this.domNode=this.appRoot.domNode;
this.reflow();
this.loadComponents(this.constructor.widgets||this.widgets);
if(!this.debugDialog){
if(this._overrideDebugDialog!==undefined){
if(this._overrideDebugDialog){
this.createDebugDialog();
}
}else{
if(djConfig.isDebug&&(wm.device!="phone"||wm.isFakeMobile)){
this.createDebugDialog();
}
}
}
if(!wm.isPhonegap){
this.pageDialog=new wm.PageDialog({name:"pageDialog",owner:this});
}
if(dojo.isIE<=8){
var _787=document.createElement("BUTTON");
_787.style.width="1px";
_787.style.height="1px";
this.domNode.appendChild(_787);
}
var main;
if(wm.device=="tablet"){
main=this.tabletMain;
}else{
if(wm.device=="phone"){
main=this.phoneMain;
}
}
if(!main){
main=this.main;
}
this.pageContainer._initialPageName=main;
if(window["PhoneGap"]&&this.isSecurityEnabled&&this.isLoginPageEnabled&&this.phoneGapLoginPage){
this.loadPage(this.phoneGapLoginPage);
}else{
this.loadPage(main);
}
this.hideLoadingIndicator();
},start:function(){
},getServerComponents:function(){
if(this.serverComponents===undefined){
this.loadServerComponents();
}
return this.serverComponents;
},loadServerComponents:function(_788){
if(_788&&this.serverComponents){
for(var i=0,c;c=this.serverComponents[i];i++){
if(c.type==_788){
this.serverComponents.splice(i--,1);
}
}
var cl=wm.componentLoaders[_788];
if(cl){
this.serverComponents=this.serverComponents.concat(cl.getComponents());
}
}else{
this.serverComponents=[];
for(var i in wm.componentLoaders){
this.serverComponents=this.serverComponents.concat(wm.componentLoaders[i].getComponents());
}
}
},addServerComponent:function(_789){
this.serverComponents.push(_789);
},removeServerComponent:function(_78a){
for(var i=0,c;c=this.serverComponents[i];i++){
if(c==_78a){
this.serverComponents.splice(i,1);
return i;
}
}
},removeServerComponentByName:function(_78b,_78c){
for(var i=0,c;c=this.serverComponents[i];i++){
if(c.type==_78c&&c.name==_78b){
this.serverComponents.splice(i,1);
return i;
}
}
},beforeCreatePage:function(){
this.pageContainer._pageLoader.pageConnect("start",this,"start");
this.pageLoadedDeferred=new dojo.Deferred();
},pageChanged:function(_78d,_78e){
this.page=this._page=_78d;
var n=_78d.name,o=(_78e||0).name;
if(o){
window[o]=undefined;
delete this[o];
}
window[n]=this[n]=this._page;
if(this.pageLoadedDeferred){
this.pageLoadedDeferred.callback({page:_78d,previousPage:_78e});
}
this.connect(document,"keydown",_78d,"keydown");
this.onPageChanged(_78d,_78e);
},loadPage:function(_78f){
var _790=!Boolean(this.pageContainer.page);
if(_790){
var hash=window.location.hash;
if(hash.length>1){
try{
this.locationState=dojo.fromJson(hash.substring(1));
}
catch(e){
try{
this.locationState=dojo.fromJson(unescape(hash.substring(1)));
}
catch(e){
}
}
}
if(this.manageURL){
this._pageName=this.locationState&&this.locationState.pageName?this.locationState.pageName:_78f;
}else{
this._pageName=_78f;
}
}else{
this._pageName=_78f;
}
try{
this.pageContainer.setPageName(this._pageName);
}
catch(e){
if(djConfig.isDebug){
console.error("loadPage error: "+e);
}
}
},forceReloadPage:function(){
this.loadPage(this._pageName);
},onPageChanged:function(_791,_792){
},onSessionExpiration:function(){
},getFullVersionNumber:function(){
return this.projectVersion+"."+this.projectSubVersion;
},getSessionId:function(){
if(!this.sessionId){
var a=new wm.JsonRpcService({service:"waveMakerService",sync:true});
a.requestSync("getSessionId",[]);
this.sessionId=a.result;
}
return this.sessionId;
},echoFile:function(_793,_794,_795){
if(!this.echoFileService){
this.echoFileService=new wm.ServiceVariable({owner:app,name:"echoFileService",downloadFile:true,service:"waveMakerService",operation:"echo"});
this.echoFileService.input.setType("");
wm.typeManager.addType("echoInputs",{internal:false,fields:{contents:{type:"java.lang.String"},fileType:{type:"java.lang.String"},fileName:{type:"java.lang.String"}}});
this.echoFileService.input.setType("echoInputs");
}
this.echoFileService.input.setData({contents:_793,fileType:_794,fileName:_795});
this.echoFileService.update();
},showLoadingDialog:function(_796,_797,_798){
if(!this.loadingDialog){
this.loadingDialog=new wm.LoadingDialog({owner:this,name:"loadingDialog",widgetToCover:this.appRoot});
}
this.loadingDialog.widgetToCover=_798||this.appRoot;
this.loadingDialog.setCaption(_796||"Loading...");
if(_797){
this.loadingDialog._label.setWidth(_797);
}
this.loadingDialog.show();
},hideLoadingDialog:function(){
if(this.loadingDialog){
this.loadingDialog.hide();
}
},warnOnce:function(_799,_79a){
var _79b=dojo.cookie(_799);
if(_79b){
return false;
}
wm.require("wm.Checkbox");
this.alert(_79a);
if(!this._warnOnceCheckbox){
this._warnOnceCheckbox=new wm.Checkbox({owner:this.alertDialog,parent:this.alertDialog.containerWidget.c$[0],margin:"10,0,0,0",height:"30px",width:"100%",caption:"Don't warn again",captionPosition:"right",captionAlign:"left",captionSize:"100%"});
}
if(this._warnOnceConnect){
this.disconnect(this._warnOnceConnect);
}
this._warnOnceConnect=this.alertDialog.connectOnce(this.alertDialog,"onClose",dojo.hitch(this,"_cleanupWarnOnce",_799));
return true;
},_cleanupWarnOnce:function(_79c){
if(this._warnOnceCheckbox.getChecked()){
dojo.cookie(_79c,true);
}
this._warnOnceCheckbox.destroy();
delete this._warnOnceCheckbox;
delete this._warnOnceConnect;
},alert:function(_79d,_79e){
if(!this.alertDialog){
this.loadThemePrototypeForClass(wm.Dialog);
this.alertDialog=new wm.GenericDialog({name:"alertDialog",_noAnimation:true,owner:this,title:wm.getDictionaryItem("wm.Application.TITLE_ALERT"),noEscape:false,width:"400px",height:"180px",button1Caption:wm.getDictionaryItem("wm.Application.CAPTION_ALERT_OK"),button1Close:true,userPrompt:""});
this.alertDialog.domNode.style.zIndex=45;
dojo.attr(this.alertDialog.domNode,"role","alertdialog");
}
if(this.alertDialog.width!="400px"){
this.alertDialog.setWidth("400px");
}
if(dojo.isObject(_79d)){
_79d=_79d.toString();
}
_79e=Boolean(_79e);
this.alertDialog.setUserPrompt(_79d);
this.alertDialog.setModal(!_79e);
this.alertDialog.show();
},confirmOKFunc:null,confirmCancelFunc:null,confirm:function(_79f,_7a0,_7a1,_7a2,_7a3,_7a4,_7a5){
var d=this.confirmDialogDeferred=new dojo.Deferred();
if(!this.confirmDialog){
this.loadThemePrototypeForClass(wm.Dialog);
this.confirmDialog=new wm.GenericDialog({name:"confirmDialog",_noAnimation:true,owner:this,noEscape:false,width:"350px",height:"180px",button1Caption:wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_OK"),button1Close:true,button2Caption:wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_CANCEL"),button2Close:true,userPrompt:"confirm..."});
this.confirmDialog.domNode.style.zIndex=50;
this.confirmDialog.connect(this.confirmDialog,"onButton1Click",this,"confirmDialogOKClick");
this.confirmDialog.connect(this.confirmDialog,"onButton2Click",this,"confirmDialogCancelClick");
this.confirmDialog.connect(this.confirmDialog,"_onEsc",this,"confirmDialogCancelClick");
dojo.attr(this.confirmDialog.domNode,"role","alertdialog");
}
_7a0=Boolean(_7a0);
this.confirmDialog.setUserPrompt(_79f);
this.confirmDialog.setModal(!_7a0);
this.confirmDialog.setShowInput(false);
this.confirmDialog.setTitle(wm.getDictionaryItem("wm.Application.TITLE_CONFIRM"));
this.confirmOKFunc=_7a1;
this.confirmCancelFunc=_7a2;
this.confirmDialog.setButton1Caption(_7a3||wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_OK"));
this.confirmDialog.setButton2Caption(_7a4||wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_CANCEL"));
if(!_7a5){
this.confirmDialog.show();
}
return d;
},prompt:function(_7a6,_7a7,_7a8,_7a9,_7aa,_7ab){
var d=this.confirmDialogDeferred=new dojo.Deferred();
this.confirm(_7a6,false,_7a8,_7a9,_7aa,_7ab,true);
this.confirmDialog.setShowInput(true);
this.confirmDialog.setTitle(wm.getDictionaryItem("wm.Application.TITLE_CONFIRM"));
this.confirmDialog.setInputDataValue(_7a7||"");
this.confirmDialog.show();
return d;
},confirmDialogOKClick:function(){
if(this.confirmDialog.showInput){
var val=this.confirmDialog.getInputDataValue();
if(!val){
this.confirmDialogDeferred.errback();
return this.confirmDialogCancelClick();
}else{
if(this.confirmOKFunc){
this.confirmOKFunc(val);
}
}
this.confirmDialogDeferred.callback(val);
}else{
if(this.confirmOKFunc){
this.confirmOKFunc();
}
this.confirmDialogDeferred.callback(val);
}
},confirmDialogCancelClick:function(){
if(this.confirmCancelFunc){
this.confirmCancelFunc();
}
if(this.confirmDialogDeferred){
this.confirmDialogDeferred.errback();
}
},createToastDialog:function(){
if(!this.toastDialog){
this.toastDialog=new wm.Toast({name:"toastDialog",owner:this});
}
},toastError:function(_7ac,_7ad){
this.createToastDialog();
this.toastDialog.showToast(_7ac,_7ad||8000,"Error");
},toastWarning:function(_7ae,_7af){
this.createToastDialog();
this.toastDialog.showToast(_7ae,_7af||8000,"Warning");
},toastSuccess:function(_7b0,_7b1){
this.createToastDialog();
this.toastDialog.showToast(_7b0,_7b1||5000,"Success");
},toastInfo:function(_7b2,_7b3){
this.createToastDialog();
this.toastDialog.showToast(_7b2,_7b3||5000,"Info");
},createToolTip:function(_7b4,node,_7b5,_7b6){
if(!this.toolTipDialog){
this.toolTipDialog=new wm.Dialog({_classes:{domNode:["AppToolTip"]},title:"",name:"toolTipDialog",modal:false,width:"350px",height:"50px",fitToContentHeight:true,owner:this,corner:"tr",_fixPosition:true,useContainerWidget:true,margin:"0",border:"1",padding:"4",manageHistory:false});
this.toolTipDialog.containerWidget.destroy();
this.toolTipDialog.useContainerWidget=false;
delete this.toolTipDialog.containerWidget;
delete this.toolTipDialog.containerNode;
var html=new wm.Html({owner:this.toolTipDialog,parent:this.toolTipDialog,autoScroll:false,name:"html",width:"100%",height:"100%",margin:"0",padding:"0",autoSizeHeight:true});
this.toolTipDialog.html=html;
}
this.toolTipDialog.tipOwner=_7b6;
if(node){
this.toolTipDialog.fixPositionNode=node;
}else{
this.toolTipDialog.fixPositionNode=null;
var _7b7=this.toolTipDialog.bounds.l=_7b5.screenX||_7b5.clientX||_7b5.mouseX;
var _7b8=this.toolTipDialog.bounds.t=_7b5.screenY||_7b5.clientY||_7b5.mouseY;
}
this.toolTipDialog.html.setHtml();
this.toolTipDialog.show();
this.toolTipDialog._cupdating=true;
this.toolTipDialog.html.setAutoSizeWidth(false);
this.toolTipDialog.html.setAutoSizeHeight(false);
this.toolTipDialog.setFitToContentHeight(false);
this.toolTipDialog.setFitToContentWidth(false);
this.toolTipDialog.setHeight("25px");
this.toolTipDialog.setWidth("350px");
this.toolTipDialog.html.setHeight("100%");
this.toolTipDialog.html.setWidth("100%");
this.toolTipDialog._cupdating=false;
this.toolTipDialog.renderBounds();
this.toolTipDialog.html.setHtml(_7b4);
if(String(_7b4).length<30){
this.toolTipDialog.html.setAutoSizeWidth(true);
this.toolTipDialog.setFitToContentWidth(true);
dojo.addClass(this.toolTipDialog.domNode,"NoWrap");
}else{
this.toolTipDialog.html.setAutoSizeHeight(true);
this.toolTipDialog.setFitToContentHeight(true);
dojo.removeClass(this.toolTipDialog.domNode,"NoWrap");
}
this.toolTipDialog.html.setWidth((6+this.toolTipDialog.html.domNode.firstChild.clientWidth)+"px");
this.toolTipDialog.setBestWidth();
var self=this;
if(this._testHintConnect){
dojo.disconnect(this._testHintConnect);
}
this._testHintConnect=this.connect(window.document.body,"onmousemove",this,function(evt){
if(evt.target===this.toolTipDialog.domNode||dojo.isDescendant(evt.target,this.toolTipDialog.domNode)){
return;
}
if(node){
if(evt.target!=node&&!dojo.isDescendant(evt.target,node)){
this.hideToolTip();
}
}else{
if(Math.abs(evt.clientX-_7b7)>20||Math.abs(evt.clientY-_7b8)>20){
this.hideToolTip();
}
}
});
},getToolTip:function(){
if(this.toolTipDialog){
return this.toolTipDialog.userPrompt;
}
return "";
},hideToolTip:function(){
dojo.disconnect(this._testHintConnect);
delete this._testHintConnect;
this.toolTipDialog.hide();
},createMinifiedDialogPanel:function(){
var _7b9=parseInt(parseInt(wm.isMobile?wm.Button.prototype.mobileHeight:wm.Button.prototype.height)*0.8);
_7b9+=3;
this.wmMinifiedDialogPanel=new wm.Panel({name:"wmMinifiedDialogPanel",width:"100%",height:_7b9+"px",border:"2,0,0,0",padding:"1,0,0,0",autoScroll:false,verticalAlign:"top",horizontalAlign:"left",layoutKind:"left-to-right",owner:this,parent:this.appRoot});
this.appRoot.reflow();
},createMinifiedDialogLabel:function(_7ba){
var l=new wm.Button({caption:_7ba,parent:app.wmMinifiedDialogPanel,owner:this,width:"100px",desktopHeight:"100%",height:"100%",margin:"0",padding:"0",border:"1"});
app.wmMinifiedDialogPanel.show();
return l;
},removeMinifiedDialogLabel:function(_7bb){
_7bb.destroy();
if(this.wmMinifiedDialogPanel){
this.wmMinifiedDialogPanel.setShowing(Boolean(this.wmMinifiedDialogPanel.c$.length));
}
},resizeMinifiedDialogPanel:function(){
var b={l:0,t:this._page.root.bounds.h-this.wmMinifiedDialogPanel.bounds.h,w:this._page.root.bounds.w,h:25};
this.wmMinifiedDialogPanel.setBounds(b);
this.wmMinifiedDialogPanel.renderBounds();
},createLeftToRightDockingPanel:function(){
if(!this._leftToRightDockingPanel){
this._leftToRightDockingPanel=new wm.Panel({name:"_leftToRightDockingPanel",width:"100%",height:"100%",border:"0",padding:"",layoutKind:"left-to-right",owner:this,parent:this.appRoot});
this.appRoot.moveControl(this._leftToRightDockingPanel,this.appRoot.indexOfControl(this.pageContainer));
this.pageContainer.setParent(this._leftToRightDockingPanel);
}
},dockDialog:function(_7bc,_7bd){
if(_7bd=="l"||_7bd=="r"){
this.createLeftToRightDockingPanel();
}
var _7be;
var _7bf=false;
switch(_7bd){
case "t":
if(this._topDock){
_7be=this._topDock;
}else{
_7bf=true;
_7be=this._topDock=new wm.Panel({owner:this,name:"_topDock",width:"100%",height:"100px",border:"0",padding:"",layoutKind:"left-to-right",parent:this.appRoot});
this.appRoot.moveControl(_7be,0);
this._topSplitter=new wm.Splitter({_classes:{domNode:["docksplitter"]},owner:this,parent:this.appRoot});
this.appRoot.moveControl(this._topSplitter,1);
this._topSplitter.findLayout();
}
break;
case "b":
if(this._bottomDock){
_7be=this._bottomDock;
}else{
_7bf=true;
_7be=this._bottomDock=new wm.Panel({owner:this,name:"_bottomDock",width:"100%",height:"100px",border:"0",padding:"",layoutKind:"left-to-right",parent:this.appRoot});
if(this.wmMinifiedDialogPanel){
this.appRoot.moveControl(_7be,this.wmMinifiedDialogPanel.getIndexInParent());
}
this._bottomSplitter=new wm.Splitter({_classes:{domNode:["docksplitter"]},owner:this,parent:this.appRoot});
this.appRoot.moveControl(this._bottomSplitter,_7be.getIndexInParent());
this._bottomSplitter.findLayout();
}
break;
case "l":
if(this._leftDock){
_7be=this._leftDock;
}else{
_7bf=true;
_7be=this._leftDock=new wm.Panel({owner:this,name:"_leftDock",width:"150px",height:"100%",border:"0",padding:"",layoutKind:"top-to-bottom",parent:this._leftToRightDockingPanel});
this._leftToRightDockingPanel.moveControl(_7be,0);
this._leftSplitter=new wm.Splitter({_classes:{domNode:["docksplitter"]},owner:this,parent:this._leftToRightDockingPanel});
this._leftToRightDockingPanel.moveControl(this._leftSplitter,1);
this._leftSplitter.findLayout();
}
break;
case "r":
if(this._rightDock){
_7be=this._rightDock;
}else{
_7bf=true;
this._rightSplitter=new wm.Splitter({_classes:{domNode:["docksplitter"]},owner:this,parent:this._leftToRightDockingPanel});
_7be=this._rightDock=new wm.Panel({owner:this,name:"_rightDock",width:"150px",height:"100%",border:"0",padding:"",layoutKind:"top-to-bottom",parent:this._leftToRightDockingPanel});
this._rightSplitter.findLayout();
}
break;
}
_7bc.setParent(_7be);
switch(_7bd){
case "t":
case "b":
if(_7bc.minHeight>_7be.bounds.h){
_7be.setHeight(_7bc.minHeight+"px");
}
_7bc.setWidth("100%");
break;
case "l":
case "r":
if(_7bc.minWidth>_7be.bounds.w){
_7be.setWidth(_7bc.minWidth+"px");
}
_7bc.setHeight("100%");
break;
}
if(_7bf){
this.appRoot.reflow();
}else{
if(!_7be.showing){
_7be.show();
if(_7be==this._topDock){
this._topSplitter.show();
}else{
if(_7be==this._bottomDock){
this._bottomSplitter.show();
}else{
if(_7be==this._rightDock){
this._rightSplitter.show();
}else{
if(_7be==this._leftDock){
this._leftSplitter.show();
}
}
}
}
}else{
_7be.reflow();
}
}
},removeDockedDialog:function(_7c0){
var _7c1=_7c0.parent;
_7c0.setParent(null);
if(_7c1.c$.length==0){
_7c1.hide();
if(_7c1==this._topDock){
this._topSplitter.hide();
}else{
if(_7c1==this._bottomDock){
this._bottomSplitter.hide();
}else{
if(_7c1==this._rightDock){
this._rightSplitter.hide();
}else{
if(_7c1==this._leftDock){
this._leftSplitter.hide();
}
}
}
}
}
},getDeviceSize:function(){
return this.appRoot?this.appRoot.deviceSize:"1000";
},addHistory:function(_7c2,_7c3){
if(this.history&&!this._handlingBack){
try{
if(!_7c3){
this.history.push({id:_7c2.id,options:_7c2.options});
}
var _7c4={};
this._handlingBack=true;
this._generateStateUrl(_7c4);
delete this._handlingBack;
if(window.history.pushState){
window.history.pushState(null,"",wm.isEmpty(_7c4)?"#":"#"+dojo.toJson(_7c4));
}
}
catch(e){
}
}
},_generateStateUrl:function(){
},generateStateUrl:function(_7c5){
},_onBack:function(_7c6){
if(this._initializingBack){
delete this._initializingBack;
return;
}
var _7c7=this.history.pop();
try{
if(_7c7){
var id=_7c7.id;
var c=this.getValueById(id);
if(c instanceof wm.Component&&c.handleBack){
try{
this._handlingBack=true;
if(!c.handleBack(_7c7.options)){
this._onBack();
}
}
catch(e){
}
delete this._handlingBack;
}else{
if(this.history.length){
this._onBack();
}
}
}
}
catch(e){
}
}});
wm.Application.themePrototypeData={};
wm.Application.themeData={};
}
if(!dojo._hasResource["wm.base.components.Property"]){
dojo._hasResource["wm.base.components.Property"]=true;
dojo.provide("wm.base.components.Property");
dojo.declare("wm.Property",wm.Component,{property:"",bindTarget:true,bindSource:true,isEvent:false,readonly:false,type:"",group:"",order:100,init:function(){
this.inherited(arguments);
if(this._isDesignLoaded&&this.owner===studio.page){
this.designTimeInit();
}
}});
}
if(!dojo._hasResource["wm.base.components.ImageList"]){
dojo._hasResource["wm.base.components.ImageList"]=true;
dojo.provide("wm.base.components.ImageList");
dojo.declare("wm.ImageList",wm.Component,{width:32,height:32,colCount:100,iconCount:100,url:"",postInit:function(){
this.inherited(arguments);
if(this.iconCount<this.colCount){
this.iconCount=this.colCount;
}
this.createStyleSheet();
},createStyleSheet:function(){
var id=this.getImageClass();
var _7c8=dojo.byId(id);
if(!_7c8){
_7c8=this.domNode=document.createElement("style");
_7c8.id=id;
_7c8.type="text/css";
document.getElementsByTagName("head")[0].appendChild(_7c8);
}
var url=this.url;
if(this.url.indexOf("lib/")==0){
url=dojo.moduleUrl("lib").path.replace(/lib\/$/,"")+url;
}else{
if(this.isDesignLoaded()&&this.owner!=studio){
url="/"+studio.project.getProjectPath()+"/"+url;
}
}
var text="";
for(var i=0;i<this.iconCount;i++){
if(text){
text+=",";
}
text+="."+id+"_"+i;
}
text+="{background-image: url("+url+") !important;background-repeat:no-repeat !important;width:"+this.width+"px;height: "+this.height+"px;}\n";
for(var i=0;i<this.iconCount;i++){
var col=i%this.colCount;
var row=Math.floor(i/this.colCount);
text+="."+id+"_"+i+" {background-position: -"+this.width*col+"px -"+(this.height*row)+"px !important;}\n";
}
setCss(_7c8,text);
},destroy:function(){
dojo.destroy(this.domNode);
this.inherited(arguments);
},getImageClass:function(_7c9){
var id="";
if(this.owner instanceof wm.Application){
id+="app";
}else{
if(this.isDesignLoaded()&&this.owner==studio.page){
id+=studio.project.pageName;
}else{
if(this.owner instanceof wm.Page){
id+=this.owner.declaredClass;
}else{
id+=this.owner.getRuntimeId().replace(/\./g,"_");
}
}
}
id+="_"+this.name;
if(_7c9==undefined){
return id;
}else{
return id+"_"+_7c9;
}
},getImageHtml:function(_7ca){
var col=_7ca%this.colCount;
var row=Math.floor(_7ca/this.colCount);
var url=this.url;
if(this.url.indexOf("lib/")==0){
url=dojo.moduleUrl("lib").path.replace(/lib\/$/,"")+url;
}else{
if(this.isDesignLoaded()&&this.owner!=studio){
if(url.match(/^resources/)){
url="projects/"+studio.project.projectName+"/"+url;
}else{
url="/"+studio.project.getProjectPath()+"/"+url;
}
}
}
return "<image src=\""+wm.theme.getImagesPath()+"blank.gif\""+" width=\""+this.width+"\""+" height=\""+this.height+"\""+" style=\""+"vertical-align: middle; "+"background:url("+url+") no-repeat "+(-this.width*col)+"px "+(-this.height*row)+"px;\""+">";
}});
}
if(!dojo._hasResource["wm.base.components.Binding"]){
dojo._hasResource["wm.base.components.Binding"]=true;
dojo.provide("wm.base.components.Binding");
dojo.declare("wm.Wire",wm.Component,{expression:"",source:"",targetProperty:"",targetId:"",destroy:function(){
this.disconnectWire();
this.inherited(arguments);
},setExpression:function(_7cb){
this.expression=_7cb||"";
this.connectWire();
},setSource:function(_7cc){
this.source=_7cc;
this.connectWire();
},setTargetProperty:function(_7cd){
this.targetProperty=_7cd;
this.connectWire();
},getFullTarget:function(){
return this.target.getId()+"."+this.targetProperty;
},canSetValue:function(){
if(this.expression){
var _7ce=wm.expression.getSources(this.expression),ft=this.getFullTarget();
for(var i=0,s;(s=_7ce[i]);i++){
if(s==ft){
wm.logging&&undefined;
return false;
}
}
}
return true;
},debugBindingEvent:function(_7cf){
try{
if(app.debugDialog&&!this.isAncestor(app.debugDialog)&&!this.owner._inRefresh&&(!this.expression||this.expression.match(/\$/))){
var _7d0="";
if(this.source&&!this.expression){
var _7d1=this.source;
wm.disableLazyLoad=true;
var _7d2=this.getValueById(_7d1);
wm.disableLazyLoad=false;
while(_7d1&&_7d2 instanceof wm.Component==false){
if(_7d1.indexOf(".")!=-1){
_7d1=_7d1.substring(0,_7d1.lastIndexOf("."));
_7d2=this.getValueById(_7d1);
}else{
break;
}
}
if(_7d2){
_7d0=_7d2.getRuntimeId();
}else{
_7d0=this.source+" not found";
}
}else{
if(this.expression){
_7d0="expression";
}
}
if(_7cf instanceof wm.Component){
_7cf=_7cf.getRuntimeId();
}else{
if(typeof _7cf=="string"){
_7cf="\""+_7cf+"\"";
}else{
_7cf=String(_7cf);
}
}
this.debugId=app.debugDialog.newLogEvent({eventType:"binding",sourceDescription:this.owner._loading?"Binding initialized":(this.expression?"Bind expression has changed":this.source+" has changed"),resultDescription:this.target.getRuntimeId()+".setValue(\""+this.targetProperty+"\", "+_7cf+")",eventName:this.expression?"Bind expression has changed":this.source+" has changed",affectedId:this.target.getRuntimeId(),firingId:_7d0,boundProperty:this.targetProperty,boundValue:_7cf instanceof wm.Component?"${"+_7cf.getRuntimeId()+"}":(typeof _7cf=="object"&&_7cf!==null&&_7cf.length)?"[ARRAY]":_7cf,boundSource:this.source,boundExpression:this.expression});
}
}
catch(e){
}
},endDebugBindingEvent:function(){
if(this.debugId){
app.debugDialog.endLogEvent(this.debugId);
delete this.debugId;
}
},_sourceValueChanged:function(_7d3){
if(wm.bindingsDisabled){
return;
}
var r=this.getRoot();
_7d3=this.expression?wm.expression.getValue(this.expression,r,r):_7d3;
if(this.canSetValue()){
this.debugBindingEvent(_7d3);
this.target.setValue(this.targetProperty,_7d3);
this.endDebugBindingEvent();
}
},sourceValueChanged:function(_7d4,inV2){
wm.logging&&undefined;
this._sourceValueChanged(_7d4);
},sourceTopUpdated:function(_7d5,inId){
wm.logging&&undefined;
this.refreshValue();
},sourceRootUpdated:function(){
wm.logging&&undefined;
if(this.source){
this.getValueById(this.source);
}
},refreshValue:function(){
try{
if(this._isDesignLoaded&&this.source&&this.source.indexOf("[")==0&&this.getValueById(this.source)===null){
return;
}
this._sourceValueChanged(this.source?this.getValueById(this.source):"");
}
catch(e){
}
},disconnectWire:function(){
this._disconnect();
this._unsubscribe();
},_watch:function(_7d6,_7d7){
wm.logging&&undefined;
if(_7d6.match(/^\[.*\]\./)){
var pre="";
_7d6=_7d6.replace(/^\[(.*?)\]/,"$1");
}else{
var pre=_7d6.indexOf("app.")==0?"":_7d7;
}
if(_7d6.indexOf(".owner.")!=-1||_7d6.indexOf("owner.")==0){
var _7d8=this.getValueById(_7d6);
var _7d9=false;
if(!_7d8){
_7d8=this.getValueById(_7d6.substring(0,_7d6.lastIndexOf(".")));
_7d9=true;
}
if(_7d8){
_7d6=_7d8.getRuntimeId()+(_7d9?_7d6.substring(_7d6.lastIndexOf(".")):"");
}
pre="";
}
var _7da=pre+_7d6+"-changed";
this.subscribe(_7da,this,"sourceValueChanged");
wm.logging&&undefined;
_7da=pre+_7d6+"-ownerChanged";
this.subscribe(_7da,this,"refreshValue");
wm.logging&&undefined;
var oid=_7d6.split(".");
oid.pop();
oid=oid.join(".");
if(oid&&oid!="app"){
_7da=pre+oid+"-ownerChanged";
this.subscribe(_7da,this,"sourceTopUpdated");
wm.logging&&undefined;
var p=_7d6.split("."),_7db=p.shift();
if(_7db=="app"&&p.length){
_7db+="."+p.shift();
}
if(_7db!=oid){
_7da=pre+_7db+"-rootChanged";
this.subscribe(_7da,this,"sourceRootUpdated");
wm.logging&&undefined;
}
}
},connectWire:function(){
this.disconnectWire();
this.target=this.target||(this.targetId?this.getRoot().getValueById(this.targetId):this.owner.owner);
if(!this.target){
this.bad=true;
return;
}
if(this.targetProperty&&(this.source||this.expression)){
this.subscribe("wmwidget-idchanged",this,"wireChanged");
var rid=this.getRootId();
if(this.expression){
dojo.forEach(wm.expression.getSources(this.expression),dojo.hitch(this,function(s){
this._watch(s,rid);
}));
}else{
this._watch(this.source,rid);
}
this.refreshValue();
}
},changeExpressionId:function(_7dc,_7dd){
var e=this.expression;
o="\\${"+_7dc.replace(new RegExp("\\.","g"),"\\.");
n="${"+_7dd,r=(e.match(o+"[\\.|}]"));
e=e.replace(new RegExp(o+"\\.","g"),n+".");
e=e.replace(new RegExp(o+"}","g"),n+"}");
this.expression=e;
return r;
},isPartialId:function(inId,_7de){
return (inId.indexOf(_7de)==0)&&(_7de.length==inId.length||inId.charAt(_7de.length)==".");
},isPartialRootId:function(inId,_7df){
if(!inId){
return;
}
inId=inId.match("^app.")?inId:this.getRootId()+inId;
return this.isPartialId(inId,_7df);
},getWireId:function(){
return (this.targetId?this.targetId+".":"")+this.targetProperty;
},wireChanged:function(_7e0,_7e1,_7e2,_7e3){
var _7e4,_7e5=this.getWireId();
if(this.expression){
_7e4=this.changeExpressionId(_7e0,_7e1);
}
if(this.isPartialRootId(this.source,_7e2)){
_7e4=true;
this.source=_7e1+this.source.slice(_7e0.length);
}
if(this.isPartialRootId(this.targetProperty,_7e2)){
_7e4=true;
this.targetProperty=_7e1+this.targetProperty.slice(_7e0.length);
}
if(this.isPartialRootId(this.targetId,_7e2)){
_7e4=true;
this.targetId=_7e1+this.targetId.slice(_7e0.length);
}
if(_7e4){
this.connectWire();
if(this.owner&&this.owner.wires){
delete this.owner.wires[_7e5];
this.owner.wires[this.getWireId()]=this;
}
}
}});
wm.Object.extendSchema(wm.Wire,{expression:{},source:{},targetProperty:{},targetId:{}});
dojo.declare("wm.Binding",wm.Component,{constructor:function(_7e6){
this.wires={};
},destroy:function(){
this.removeWires();
this.inherited(arguments);
},loaded:function(){
for(var i in this.components){
var c=this.components[i];
this.wires[c.getWireId()]=c;
c.connectWire();
}
this.inherited(arguments);
},refresh:function(){
this._inRefresh=true;
wm.forEachProperty(this.wires,function(w){
w.refreshValue();
});
this._inRefresh=false;
},addWire:function(_7e7,_7e8,_7e9,_7ea){
var id=(_7e7?_7e7+".":"")+_7e8;
this.removeWire(id);
var _7eb={name:this.getUniqueName("wire"),owner:this,targetId:_7e7,targetProperty:_7e8,source:_7e9,expression:_7ea};
var wire=this.wires[id]=new wm.Wire(_7eb);
wire.connectWire();
return wire;
},removeWire:function(_7ec,_7ed,_7ee){
var wire=this.wires[_7ec];
if(wire){
var s=_7ed==undefined||_7ed==wire.source,e=_7ee==undefined||_7ee==wire.expression;
if(s&&e){
wire.destroy();
delete this.wires[_7ec];
}
}
},findWiresByProps:function(_7ef){
var _7f0=function(w){
for(var i in _7ef){
if(_7ef[i]!=w[i]){
return;
}
}
return true;
};
return this.findWires(_7f0);
},findWires:function(_7f1){
var f=[];
if(_7f1){
wm.forEachProperty(this.wires,function(w){
if(_7f1(w)){
f.push(w);
}
});
}
return f;
},removeWireByProps:function(_7f2){
var _7f3=this.findWiresByProps(_7f2);
this.removeWiresList(_7f3);
},removeWireByProp:function(_7f4){
var _7f5=false;
wm.forEachProperty(this.wires,dojo.hitch(this,function(w){
if(w.targetProperty==_7f4){
delete this.wires[_7f4];
w.destroy();
_7f5=true;
}
}));
return _7f5;
},removeWireList:function(_7f6){
dojo.forEach(_7f6,dojo.hitch(this,function(w){
this.removeWire(w.getWireId());
}));
},removeWires:function(){
wm.forEachProperty(this.wires,function(w){
w.destroy();
});
this.wires={};
},write:function(_7f7){
return !wm.isEmpty(this.wires)?this.inherited(arguments):null;
}});
}
if(!dojo._hasResource["wm.base.components.TypeDefinition"]){
dojo._hasResource["wm.base.components.TypeDefinition"]=true;
dojo.provide("wm.base.components.TypeDefinition");
dojo.declare("wm.TypeDefinitionField",wm.Component,{fieldType:"String",isObject:false,isList:false,fieldName:"",toTypeObj:function(){
return {type:this.fieldType,isObject:this.isObject,isList:this.isList};
}});
dojo.declare("wm.TypeDefinition",wm.Component,{internal:false,collection:"Fields",fields:null,postInit:function(){
delete this.fields;
this.doAddType();
},doRemoveType:function(){
if(!this.internal){
wm.typeManager.removeType(this.name);
}
if(this._isDesignLoaded&&studio.application&&!studio.application._isDestroying){
studio.typesChanged();
}
},doAddType:function(){
this.fieldsAsTypes={};
for(var i in this.$){
this.fieldsAsTypes[this.$[i].fieldName]=this.$[i].toTypeObj();
}
wm.typeManager.addType(this.name,{internal:this.internal,fields:this.fieldsAsTypes});
if(this._isDesignLoaded&&studio.application&&!studio.application._isDestroying){
studio.typesChanged();
studio.refreshComponentTree();
}
},destroy:function(){
wm.typeManager.removeType(this.name);
this._isDestroying=true;
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.components.Security"]){
dojo._hasResource["wm.base.components.Security"]=true;
dojo.provide("wm.base.components.Security");
wm.disableUserPrincipalCookie=false;
wm.login=function(args,_7f8,_7f9,_7fa,_7fb){
if(_7fa===undefined||_7fa==null){
_7fa={j_username:args[0],j_password:args[1],hash:args[2]};
}
var _7fc=new dojo.Deferred();
var url=(_7fb?"/"+_7fb+"/":"")+"j_spring_security_check";
if(wm.xhrPath){
url=wm.xhrPath+url;
}
var def=dojo.xhrPost({url:url,content:_7fa,handleAs:"json"});
var _7fd=function(_7fe){
if(_7f9){
_7f9(_7fe.toString());
}
_7fc.errback(_7fe);
};
def.addErrback(_7fd);
var _7ff=function(_800){
if(app&&app._loginDialog&&app._loginDialog.showing){
app._loginDialog.hide();
}
_7fc.callback(_800);
var _801=location.protocol+"//"+location.host+location.pathname+location.search;
if(dojo.cookie.isSupported()&&!wm.disableUserPrincipalCookie){
var p={username:_7fa.j_username,roles:wm.getUserRoles(true)};
wm.setUserPrincipal(p);
}else{
wm.roles=wm.getUserRoles(true);
}
dojo.publish("wmRbacUpdate");
if(window["PhoneGap"]&&wm.serverTimeOffset===undefined){
app.getServerTimeOffset();
}
if(_7f8){
_7f8(_800);
}else{
if(window["PhoneGap"]){
app.loadPage(app.pageContainer._initialPageName);
}else{
if(_801!=_800){
location.href=_800;
}else{
if(app._page.name=="login"&&app.main!="login"){
app.loadPage(app.main);
}
}
}
}
};
def.addCallback(function(_802,_803){
if(_802.url){
_7ff(_802.url);
}else{
if(_802.error){
_7fd(new Error(_802.error));
}
}
});
return _7fc;
};
wm.getUserPrincipal=function(){
return wm.disableUserPrincipalCookie?{}:dojo.fromJson(dojo.cookie("wmUserPrincipal"))||{};
};
wm.setUserPrincipal=function(_804){
dojo.cookie("wmUserPrincipal",dojo.toJson(_804));
};
wm.clearUserPrincipal=function(){
dojo.cookie("wmUserPrincipal",null,{expires:-1});
};
wm.getUserRoles=function(_805){
if(!_805){
if(!wm.disableUserPrincipalCookie){
if(wm.getUserPrincipal().roles){
return wm.getUserPrincipal().roles;
}
}else{
if(wm.roles){
return wm.roles;
}
}
}
var s=wm.securityService||(wm.securityService=new wm.JsonRpcService({name:"securityService",sync:true}));
try{
if(s.ready){
s.request("getUserRoles",null);
if(s.result){
return s.result;
}
}
}
catch(x){
}
};
wm.logoutSuccess=function(){
if(dojo.cookie.isSupported()&&!wm.disableUserPrincipalCookie){
wm.clearUserPrincipal();
}else{
wm.roles=[];
}
dojo.publish("wmRbacUpdate");
};
wm.logout=function(){
var s=wm.securityService||(wm.securityService=new wm.JsonRpcService({name:"securityService",sync:true,errorLevel:2}));
try{
if(s.ready){
s.request("logout",null);
window.location.reload();
}
}
catch(x){
}
};
}
if(!dojo._hasResource["wm.base.widget.layout.Layout"]){
dojo._hasResource["wm.base.widget.layout.Layout"]=true;
dojo.provide("wm.base.widget.layout.Layout");
wm.inLayout=function(_806){
if(!_806){
return false;
}
var s=_806.style;
return s&&s.zIndex>=0&&s.zIndex<=1&&s.display!="none"&&s.visibility!="hidden"&&_806.tagName!="SCRIPT"&&_806.nodeType==1;
};
dojo.declare("wm.layout.Base",null,{inFlow:function(_807){
return _807.showing&&(_807.inFlow!==false)&&(_807 instanceof wm.Dialog&&_807.docked||_807._forceShowing||wm.inLayout(_807.domNode));
},flow:function(_808){
},suggest:function(_809,_80a,_80b){
},suggestSize:function(_80c,_80d,_80e){
},insert:function(_80f,_810,_811){
}});
dojo.mixin(wm.layout,{registry:{},cache:{},register:function(_812,_813){
this.registry[_812]=_813;
},addCache:function(_814,_815){
this.cache[_814]=_815;
},listLayouts:function(){
var list=[];
for(var n in this.registry){
list.push(n);
}
return list;
}});
}
if(!dojo._hasResource["wm.base.widget.layout.Box"]){
dojo._hasResource["wm.base.widget.layout.Box"]=true;
dojo.provide("wm.base.widget.layout.Box");
dojo.declare("wm.layout.Box",wm.layout.Base,{flow:function(_816,_817){
if(this.direction=="h"){
this._flow(_816,"l","t","w","h",_816.horizontalAlign,_816.verticalAlign,_817);
}else{
this._flow(_816,"t","l","h","w",_816.verticalAlign,_816.horizontalAlign,_817);
}
if(!_817){
_816.renderControls();
}
if(_816._autoSizeList){
var c;
while(c=_816._autoSizeList.pop()){
c.doAutoSize(1,1);
}
}
},_flow:function(_818,_819,_81a,_81b,_81c,_81d,_81e,_81f){
if(_818.fitToContentHeight){
if(_818.layoutKind=="top-to-bottom"){
_81d="top";
}
}
if(_818.fitToContentWidth){
if(_818.layoutKind=="left-to-right"){
_81d="left";
}
}
this.handleAutoSizingWidgets(_818);
if(_818.autoScroll){
this.handleAutoScrollBars(_818);
}
var b=_818.getContentBounds();
var _820=dojo.clone(b);
if(_818.autoScroll){
if(_818._preferredWidth>b.w){
b.w=_818._preferredWidth;
}
if(_818._preferredHeight>b.h){
b.h=_818._preferredHeight;
}
}
var _821=this.calcFlexRatio(_818.c$,_81b,b[_81b]);
var _822=b[_81b];
var _823=null;
if(_821.free){
var free=_821.free;
for(var i=0,c;c=_818.c$[i];i++){
if(this.inFlow(c)){
if(c._percEx[_81b]){
var _824=_821.ratio*c._percEx[_81b];
var size=Math.round(_824);
_823=c;
_822-=size;
var _825=_81b=="w"?"minWidth":wm.isMobile?"minMobileHeight":"minHeight";
var min=c[_825];
if(size<min){
size=min;
}
free-=size;
}else{
_822-=c.bounds.w;
}
}
}
switch(_81d){
case "bottom":
case "right":
b[_819]+=free;
break;
case "middle":
case "center":
b[_819]+=free/2;
if(b[_819]<0){
b[_819]=0;
}
break;
}
}
var _826=b[_81a];
var _827=b[_81c];
var _828=0;
var _829=0;
for(var i=0,c;c=_818.c$[i];i++){
if(this.inFlow(c)){
var _82a=c._percEx[_81b]?Math.round(_821.ratio*c._percEx[_81b]):NaN;
if(c._percEx[_81b]&&!isNaN(_82a)){
if(_823==c&&Math.abs(_822)<=1){
_82a+=_822;
}
}
b[_81b]=_82a;
if(wm.isMobile&&isNaN(b.w)){
b.w=parseInt(c.width);
}
var _825=_81b=="w"?"minWidth":wm.isMobile?"minMobileHeight":"minHeight";
if(b[_81b]<c[_825]){
b[_81b]=c[_825];
}
var _82b;
if(c._percEx[_81c]){
_82b=b[_81c]=Math.min(100,c._percEx[_81c])*_827*0.01;
}else{
_82b=c.bounds[_81c];
if(_81c=="w"&&c.width&&parseInt(c.width)>_82b){
_82b=parseInt(c.width);
}
delete b[_81c];
}
b[_81a]=_826;
if(c._percEx.h){
var _82c=c.getMinHeightProp();
if(_82c>b.h){
b.h=_82c;
if(_81c=="h"){
_82b=b.h;
}
}
}
if(c._percEx.w){
var _82d=c.getMinWidthProp();
if(_82d>b.w){
b.w=_82d;
if(_81c=="w"){
_82b=b.w;
}
}
}
switch(_81e){
case "justified":
if(djConfig.isDebug&&!wm.isInstanceType(_818,wm.Editor)&&_818.isDesignedComponent()&&_81c=="w"&&!wm.isInstanceType(_818,wm.Layers)&&!wm.isInstanceType(_818.owner,wm.Layers)){
dojo.deprecated("justified",_818.owner.toString()+":"+_818.toString()+"'s "+((_81c=="w")?"horizontalAlign":"verticalAlign")+" is set to 'justified', which may yield unexpected behaviors; please change this alignment in the property editor");
}
b[_81c]=_827;
break;
case "center":
case "middle":
if(_827>_82b){
b[_81a]=(_826+_827-_82b)/2;
}else{
b[_81a]=_826;
}
if(b[_81a]<0){
b[_81a]=0;
}
break;
case "bottom":
case "right":
b[_81a]=Math.max(0,_826+_827-_82b);
break;
}
if(wm.isMobile&&(b.w>_820.w||isNaN(b.w)&&c.bounds.w>_820.w)){
b.w=_820.w;
}
c.setBounds(b.l,b.t,b.w,b.h);
c._renderEngineBoundsSet=true;
if(c.flow){
c.flow();
}
b[_819]+=Math.max(0,c.bounds[_81b]);
_828=Math.max(_828,c.bounds[_81c]);
wm.flowees++;
}
}
},handleAutoSizingWidgets:function(_82e){
if(!_82e.isAncestorHiddenLayer()&&_82e.showing&&(!wm.isInstanceType(_82e,wm.Layer)||_82e.active)){
var _82f;
var _830;
for(var i=0;i<_82e.c$.length;i++){
var c=_82e.c$[i];
if(c.showing){
if(c._needsAutoSize&&(c.autoSizeWidth||c.autoSizeHeight)){
var _831=(c.owner instanceof wm.Page)?c.owner.root:c.owner;
if(!_831._autoSizeList){
_831._autoSizeList=[];
}
if(dojo.indexOf(_831._autoSizeList,c)==-1){
_831._autoSizeList.push(c);
}
}else{
if(c.fitToContent){
if(c.fitToContentHeight){
c.bounds.h=c.getPreferredFitToContentHeight();
}
if(c.fitToContentWidth){
c.bounds.w=c.getPreferredFitToContentWidth();
}
c.calcFitToContent();
if(c.fitToContentWidth){
_830=true;
}
if(c.fitToContentHeight){
_82f=true;
}
}
}
}
}
}
},handleAutoScrollBars:function(_832){
if(_832.fitToContentHeight){
_832._xscrollY=false;
_833="hidden";
}else{
var _834=_832._preferredHeight=_832.getPreferredFitToContentHeight();
var _835=_834>_832.bounds.h;
var _833=(_835)?"auto":"hidden";
_832._xscrollY=(_833=="auto");
}
if(!wm.isFakeMobile&&_832.domNode.style.overflowY!=_833){
_832.domNode.style.overflowY=_833;
_832.domNode.scrollTop=0;
}
if(_832.fitToContentWidth){
_832._xscrollX=false;
_836="hidden";
}else{
var _837=_832._preferredWidth=_832.getPreferredFitToContentWidth();
var _838=_837>_832.bounds.w;
var _836=(_838)?"auto":"hidden";
}
_832._xscrollX=(_836=="auto");
if(!wm.isFakeMobile&&_832.domNode.style.overflowX!=_836){
_832.domNode.style.overflowX=_836;
_832.domNode.scrollLeft=0;
}
},calcFlexRatio:function(inC$,_839,_83a){
var flex=0;
var free=_83a;
var _83b=0;
var _83c="getMin"+((_839=="h")?"Height":"Width")+"Prop";
var _83d=0;
for(var i=0,c;c=inC$[i];i++){
if(this.inFlow(c)){
_83d++;
}
}
for(var i=0,c;c=inC$[i];i++){
if(this.inFlow(c)){
if(c._percEx[_839]){
var _83e=c[_83c]();
var _83f=(Number(c._percEx[_839])||0)/100*_83a;
if(_83d==1){
flex=100;
_83b+=_83e;
}else{
if(_83e<_83f){
flex+=Number(c._percEx[_839])||0;
_83b+=_83e;
}else{
free-=Math.max(c.bounds[_839],c[_83c]());
}
}
}else{
free-=c.bounds[_839];
}
}
}
if(free-_83b<0){
free-=_83b;
}
if(flex&&flex<100){
flex=100;
}
var _840;
if(flex&&free>0){
_840=free/flex;
}else{
_840=0;
}
return {free:free,ratio:_840};
},getMaxFreeSpace:function(inC$,_841,_842){
var free=_842;
var _843=0;
var _844="min"+((_841=="h")?"Height":"Width");
for(var i=0,c;c=inC$[i];i++){
if(this.inFlow(c)){
if(c._percEx[_841]){
if(c[_844]){
_843+=c[_844];
}
}else{
free-=c.bounds[_841];
}
}
}
if(free-_843<0){
free-=_843;
}
return free;
}});
dojo.declare("wm.layout.HBox",wm.layout.Box,{direction:"h",suggest:function(_845,_846,_847){
var x=0;
for(var i=0,c;c=_845.c$[i];i++){
if(this.inFlow(c)){
if(_847.l<c.bounds.l+c.bounds.w/2){
x=c.bounds.l-1;
break;
}
x=c.bounds.r;
_847.control=c;
}
}
if(!_847.control){
_847.control=_845;
}
var _848=dojo.coords(_845.domNode);
var _849=dojo.coords(_847.control.domNode);
var _84a=_845.getStyleBounds();
if(_847.control==_845){
_847.l=_849.x;
}else{
_847.l=_849.x+_849.w;
}
_847.t=_848.y;
_847.h=_84a.h;
_847.i=i;
}});
dojo.declare("wm.layout.VBox",wm.layout.Box,{direction:"v",suggest:function(_84b,_84c,_84d){
var y=0;
for(var i=0,c;c=_84b.c$[i];i++){
if(this.inFlow(c)){
if(_84d.t<c.bounds.t+c.bounds.h/2){
y=c.bounds.t-1;
break;
}
y=c.bounds.b;
_84d.control=c;
}
}
if(!_84d.control){
_84d.control=_84b;
}
var _84e=dojo.coords(_84b.domNode);
var _84f=dojo.coords(_84d.control.domNode);
var _850=_84b.getStyleBounds();
_84d.l=_84e.x;
if(_84d.control==_84b){
_84d.t=_84f.y;
}else{
_84d.t=_84f.y+_84f.h;
}
_84d.w=_850.w;
_84d.i=i;
}});
wm.layout.register("left-to-right",wm.layout.HBox);
wm.layout.register("top-to-bottom",wm.layout.VBox);
wm.layout.addCache("left-to-right",new wm.layout.HBox());
wm.layout.addCache("top-to-bottom",new wm.layout.VBox());
}
if(!dojo._hasResource["dijit._base.focus"]){
dojo._hasResource["dijit._base.focus"]=true;
dojo.provide("dijit._base.focus");
dojo.mixin(dijit,{_curFocus:null,_prevFocus:null,isCollapsed:function(){
return dijit.getBookmark().isCollapsed;
},getBookmark:function(){
var bm,rg,tg,sel=dojo.doc.selection,cf=dijit._curFocus;
if(dojo.global.getSelection){
sel=dojo.global.getSelection();
if(sel){
if(sel.isCollapsed){
tg=cf?cf.tagName:"";
if(tg){
tg=tg.toLowerCase();
if(tg=="textarea"||(tg=="input"&&(!cf.type||cf.type.toLowerCase()=="text"))){
sel={start:cf.selectionStart,end:cf.selectionEnd,node:cf,pRange:true};
return {isCollapsed:(sel.end<=sel.start),mark:sel};
}
}
bm={isCollapsed:true};
if(sel.rangeCount){
bm.mark=sel.getRangeAt(0).cloneRange();
}
}else{
rg=sel.getRangeAt(0);
bm={isCollapsed:false,mark:rg.cloneRange()};
}
}
}else{
if(sel){
tg=cf?cf.tagName:"";
tg=tg.toLowerCase();
if(cf&&tg&&(tg=="button"||tg=="textarea"||tg=="input")){
if(sel.type&&sel.type.toLowerCase()=="none"){
return {isCollapsed:true,mark:null};
}else{
rg=sel.createRange();
return {isCollapsed:rg.text&&rg.text.length?false:true,mark:{range:rg,pRange:true}};
}
}
bm={};
try{
rg=sel.createRange();
bm.isCollapsed=!(sel.type=="Text"?rg.htmlText.length:rg.length);
}
catch(e){
bm.isCollapsed=true;
return bm;
}
if(sel.type.toUpperCase()=="CONTROL"){
if(rg.length){
bm.mark=[];
var i=0,len=rg.length;
while(i<len){
bm.mark.push(rg.item(i++));
}
}else{
bm.isCollapsed=true;
bm.mark=null;
}
}else{
bm.mark=rg.getBookmark();
}
}else{
console.warn("No idea how to store the current selection for this browser!");
}
}
return bm;
},moveToBookmark:function(_851){
var _852=dojo.doc,mark=_851.mark;
if(mark){
if(dojo.global.getSelection){
var sel=dojo.global.getSelection();
if(sel&&sel.removeAllRanges){
if(mark.pRange){
var r=mark;
var n=r.node;
n.selectionStart=r.start;
n.selectionEnd=r.end;
}else{
sel.removeAllRanges();
sel.addRange(mark);
}
}else{
console.warn("No idea how to restore selection for this browser!");
}
}else{
if(_852.selection&&mark){
var rg;
if(mark.pRange){
rg=mark.range;
}else{
if(dojo.isArray(mark)){
rg=_852.body.createControlRange();
dojo.forEach(mark,function(n){
rg.addElement(n);
});
}else{
rg=_852.body.createTextRange();
rg.moveToBookmark(mark);
}
}
rg.select();
}
}
}
},getFocus:function(menu,_853){
var node=!dijit._curFocus||(menu&&dojo.isDescendant(dijit._curFocus,menu.domNode))?dijit._prevFocus:dijit._curFocus;
return {node:node,bookmark:(node==dijit._curFocus)&&dojo.withGlobal(_853||dojo.global,dijit.getBookmark),openedForWindow:_853};
},focus:function(_854){
if(!_854){
return;
}
var node="node" in _854?_854.node:_854,_855=_854.bookmark,_856=_854.openedForWindow,_857=_855?_855.isCollapsed:false;
if(node){
var _858=(node.tagName.toLowerCase()=="iframe")?node.contentWindow:node;
if(_858&&_858.focus){
try{
_858.focus();
}
catch(e){
}
}
dijit._onFocusNode(node);
}
if(_855&&dojo.withGlobal(_856||dojo.global,dijit.isCollapsed)&&!_857){
if(_856){
_856.focus();
}
try{
dojo.withGlobal(_856||dojo.global,dijit.moveToBookmark,null,[_855]);
}
catch(e2){
}
}
},_activeStack:[],registerIframe:function(_859){
return dijit.registerWin(_859.contentWindow,_859);
},unregisterIframe:function(_85a){
dijit.unregisterWin(_85a);
},registerWin:function(_85b,_85c){
var _85d=function(evt){
dijit._justMouseDowned=true;
setTimeout(function(){
dijit._justMouseDowned=false;
},0);
if(dojo.isIE&&evt&&evt.srcElement&&evt.srcElement.parentNode==null){
return;
}
dijit._onTouchNode(_85c||evt.target||evt.srcElement,"mouse");
};
var doc=dojo.isIE?_85b.document.documentElement:_85b.document;
if(doc){
if(dojo.isIE){
_85b.document.body.attachEvent("onmousedown",_85d);
var _85e=function(evt){
if(evt.srcElement.tagName.toLowerCase()!="#document"&&dijit.isTabNavigable(evt.srcElement)){
dijit._onFocusNode(_85c||evt.srcElement);
}else{
dijit._onTouchNode(_85c||evt.srcElement);
}
};
doc.attachEvent("onactivate",_85e);
var _85f=function(evt){
dijit._onBlurNode(_85c||evt.srcElement);
};
doc.attachEvent("ondeactivate",_85f);
return function(){
_85b.document.detachEvent("onmousedown",_85d);
doc.detachEvent("onactivate",_85e);
doc.detachEvent("ondeactivate",_85f);
doc=null;
};
}else{
doc.body.addEventListener("mousedown",_85d,true);
var _860=function(evt){
dijit._onFocusNode(_85c||evt.target);
};
doc.addEventListener("focus",_860,true);
var _861=function(evt){
dijit._onBlurNode(_85c||evt.target);
};
doc.addEventListener("blur",_861,true);
return function(){
doc.body.removeEventListener("mousedown",_85d,true);
doc.removeEventListener("focus",_860,true);
doc.removeEventListener("blur",_861,true);
doc=null;
};
}
}
},unregisterWin:function(_862){
_862&&_862();
},_onBlurNode:function(node){
dijit._prevFocus=dijit._curFocus;
dijit._curFocus=null;
if(dijit._justMouseDowned){
return;
}
if(dijit._clearActiveWidgetsTimer){
clearTimeout(dijit._clearActiveWidgetsTimer);
}
dijit._clearActiveWidgetsTimer=setTimeout(function(){
delete dijit._clearActiveWidgetsTimer;
dijit._setStack([]);
dijit._prevFocus=null;
},100);
},_onTouchNode:function(node,by){
if(dijit._clearActiveWidgetsTimer){
clearTimeout(dijit._clearActiveWidgetsTimer);
delete dijit._clearActiveWidgetsTimer;
}
var _863=[];
try{
while(node){
var _864=dojo.attr(node,"dijitPopupParent");
if(_864){
node=dijit.byId(_864).domNode;
}else{
if(node.tagName&&node.tagName.toLowerCase()=="body"){
if(node===dojo.body()){
break;
}
node=dojo.window.get(node.ownerDocument).frameElement;
}else{
var id=node.getAttribute&&node.getAttribute("widgetId"),_865=id&&dijit.byId(id);
if(_865&&!(by=="mouse"&&_865.get("disabled"))){
_863.unshift(id);
}
node=node.parentNode;
}
}
}
}
catch(e){
}
dijit._setStack(_863,by);
},_onFocusNode:function(node){
if(!node){
return;
}
if(node.nodeType==9){
return;
}
dijit._onTouchNode(node);
if(node==dijit._curFocus){
return;
}
if(dijit._curFocus){
dijit._prevFocus=dijit._curFocus;
}
dijit._curFocus=node;
dojo.publish("focusNode",[node]);
},_setStack:function(_866,by){
var _867=dijit._activeStack;
dijit._activeStack=_866;
for(var _868=0;_868<Math.min(_867.length,_866.length);_868++){
if(_867[_868]!=_866[_868]){
break;
}
}
var _869;
for(var i=_867.length-1;i>=_868;i--){
_869=dijit.byId(_867[i]);
if(_869){
_869._focused=false;
_869.set("focused",false);
_869._hasBeenBlurred=true;
if(_869._onBlur){
_869._onBlur(by);
}
dojo.publish("widgetBlur",[_869,by]);
}
}
for(i=_868;i<_866.length;i++){
_869=dijit.byId(_866[i]);
if(_869){
_869._focused=true;
_869.set("focused",true);
if(_869._onFocus){
_869._onFocus(by);
}
dojo.publish("widgetFocus",[_869,by]);
}
}
}});
dojo.addOnLoad(function(){
var _86a=dijit.registerWin(window);
if(dojo.isIE){
dojo.addOnWindowUnload(function(){
dijit.unregisterWin(_86a);
_86a=null;
});
}
});
}
if(!dojo._hasResource["dojo.AdapterRegistry"]){
dojo._hasResource["dojo.AdapterRegistry"]=true;
dojo.provide("dojo.AdapterRegistry");
dojo.AdapterRegistry=function(_86b){
this.pairs=[];
this.returnWrappers=_86b||false;
};
dojo.extend(dojo.AdapterRegistry,{register:function(name,_86c,wrap,_86d,_86e){
this.pairs[((_86e)?"unshift":"push")]([name,_86c,wrap,_86d]);
},match:function(){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[1].apply(this,arguments)){
if((pair[3])||(this.returnWrappers)){
return pair[2];
}else{
return pair[2].apply(this,arguments);
}
}
}
throw new Error("No match found");
},unregister:function(name){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[0]==name){
this.pairs.splice(i,1);
return true;
}
}
return false;
}});
}
if(!dojo._hasResource["dijit._base.place"]){
dojo._hasResource["dijit._base.place"]=true;
dojo.provide("dijit._base.place");
dijit.getViewport=function(){
return dojo.window.getBox();
};
dijit.placeOnScreen=function(node,pos,_86f,_870){
var _871=dojo.map(_86f,function(_872){
var c={corner:_872,pos:{x:pos.x,y:pos.y}};
if(_870){
c.pos.x+=_872.charAt(1)=="L"?_870.x:-_870.x;
c.pos.y+=_872.charAt(0)=="T"?_870.y:-_870.y;
}
return c;
});
return dijit._place(node,_871);
};
dijit._place=function(node,_873,_874,_875){
var view=dojo.window.getBox();
if(!node.parentNode||String(node.parentNode.tagName).toLowerCase()!="body"){
dojo.body().appendChild(node);
}
var best=null;
dojo.some(_873,function(_876){
var _877=_876.corner;
var pos=_876.pos;
var _878=0;
var _879={w:_877.charAt(1)=="L"?(view.l+view.w)-pos.x:pos.x-view.l,h:_877.charAt(1)=="T"?(view.t+view.h)-pos.y:pos.y-view.t};
if(_874){
var res=_874(node,_876.aroundCorner,_877,_879,_875);
_878=typeof res=="undefined"?0:res;
}
var _87a=node.style;
var _87b=_87a.display;
var _87c=_87a.visibility;
_87a.visibility="hidden";
_87a.display="";
var mb=dojo.marginBox(node);
_87a.display=_87b;
_87a.visibility=_87c;
var _87d=Math.max(view.l,_877.charAt(1)=="L"?pos.x:(pos.x-mb.w)),_87e=Math.max(view.t,_877.charAt(0)=="T"?pos.y:(pos.y-mb.h)),endX=Math.min(view.l+view.w,_877.charAt(1)=="L"?(_87d+mb.w):pos.x),endY=Math.min(view.t+view.h,_877.charAt(0)=="T"?(_87e+mb.h):pos.y),_87f=endX-_87d,_880=endY-_87e;
_878+=(mb.w-_87f)+(mb.h-_880);
if(best==null||_878<best.overflow){
best={corner:_877,aroundCorner:_876.aroundCorner,x:_87d,y:_87e,w:_87f,h:_880,overflow:_878,spaceAvailable:_879};
}
return !_878;
});
if(best.overflow&&_874){
_874(node,best.aroundCorner,best.corner,best.spaceAvailable,_875);
}
var l=dojo._isBodyLtr(),s=node.style;
s.top=best.y+"px";
s[l?"left":"right"]=(l?best.x:view.w-best.x-best.w)+"px";
return best;
};
dijit.placeOnScreenAroundNode=function(node,_881,_882,_883){
_881=dojo.byId(_881);
var _884=dojo.position(_881,true);
return dijit._placeOnScreenAroundRect(node,_884.x,_884.y,_884.w,_884.h,_882,_883);
};
dijit.placeOnScreenAroundRectangle=function(node,_885,_886,_887){
return dijit._placeOnScreenAroundRect(node,_885.x,_885.y,_885.width,_885.height,_886,_887);
};
dijit._placeOnScreenAroundRect=function(node,x,y,_888,_889,_88a,_88b){
var _88c=[];
for(var _88d in _88a){
_88c.push({aroundCorner:_88d,corner:_88a[_88d],pos:{x:x+(_88d.charAt(1)=="L"?0:_888),y:y+(_88d.charAt(0)=="T"?0:_889)}});
}
return dijit._place(node,_88c,_88b,{w:_888,h:_889});
};
dijit.placementRegistry=new dojo.AdapterRegistry();
dijit.placementRegistry.register("node",function(n,x){
return typeof x=="object"&&typeof x.offsetWidth!="undefined"&&typeof x.offsetHeight!="undefined";
},dijit.placeOnScreenAroundNode);
dijit.placementRegistry.register("rect",function(n,x){
return typeof x=="object"&&"x" in x&&"y" in x&&"width" in x&&"height" in x;
},dijit.placeOnScreenAroundRectangle);
dijit.placeOnScreenAroundElement=function(node,_88e,_88f,_890){
return dijit.placementRegistry.match.apply(dijit.placementRegistry,arguments);
};
dijit.getPopupAroundAlignment=function(_891,_892){
var _893={};
dojo.forEach(_891,function(pos){
switch(pos){
case "after":
_893[_892?"BR":"BL"]=_892?"BL":"BR";
break;
case "before":
_893[_892?"BL":"BR"]=_892?"BR":"BL";
break;
case "below-alt":
_892=!_892;
case "below":
_893[_892?"BL":"BR"]=_892?"TL":"TR";
_893[_892?"BR":"BL"]=_892?"TR":"TL";
break;
case "above-alt":
_892=!_892;
case "above":
default:
_893[_892?"TL":"TR"]=_892?"BL":"BR";
_893[_892?"TR":"TL"]=_892?"BR":"BL";
break;
}
});
return _893;
};
}
if(!dojo._hasResource["dijit._base.window"]){
dojo._hasResource["dijit._base.window"]=true;
dojo.provide("dijit._base.window");
dijit.getDocumentWindow=function(doc){
return dojo.window.get(doc);
};
}
if(!dojo._hasResource["dijit._base.popup"]){
dojo._hasResource["dijit._base.popup"]=true;
dojo.provide("dijit._base.popup");
dijit.popup={_stack:[],_beginZIndex:1000,_idGen:1,_createWrapper:function(_894){
var _895=_894.declaredClass?_894._popupWrapper:(_894.parentNode&&dojo.hasClass(_894.parentNode,"dijitPopup")),node=_894.domNode||_894;
if(!_895){
_895=dojo.create("div",{"class":"dijitPopup",style:{display:"none"},role:"presentation"},dojo.body());
_895.appendChild(node);
var s=node.style;
s.display="";
s.visibility="";
s.position="";
s.top="0px";
if(_894.declaredClass){
_894._popupWrapper=_895;
dojo.connect(_894,"destroy",function(){
dojo.destroy(_895);
delete _894._popupWrapper;
});
}
}
return _895;
},moveOffScreen:function(_896){
var _897=this._createWrapper(_896);
dojo.style(_897,{visibility:"hidden",top:"-9999px",display:""});
},hide:function(_898){
var _899=this._createWrapper(_898);
dojo.style(_899,"display","none");
},getTopPopup:function(){
var _89a=this._stack;
for(var pi=_89a.length-1;pi>0&&_89a[pi].parent===_89a[pi-1].widget;pi--){
}
return _89a[pi];
},open:function(args){
var _89b=this._stack,_89c=args.popup,_89d=args.orient||((args.parent?args.parent.isLeftToRight():dojo._isBodyLtr())?{"BL":"TL","BR":"TR","TL":"BL","TR":"BR"}:{"BR":"TR","BL":"TL","TR":"BR","TL":"BL"}),_89e=args.around,id=(args.around&&args.around.id)?(args.around.id+"_dropdown"):("popup_"+this._idGen++);
while(_89b.length&&(!args.parent||!dojo.isDescendant(args.parent.domNode,_89b[_89b.length-1].widget.domNode))){
dijit.popup.close(_89b[_89b.length-1].widget);
}
var _89f=this._createWrapper(_89c);
dojo.attr(_89f,{id:id,style:{zIndex:this._beginZIndex+_89b.length},"class":"dijitPopup "+(_89c.baseClass||_89c["class"]||"").split(" ")[0]+"Popup",dijitPopupParent:args.parent?args.parent.id:""});
if(dojo.isIE||dojo.isMoz){
if(!_89c.bgIframe){
_89c.bgIframe=new dijit.BackgroundIframe(_89f);
}
}
var best=_89e?dijit.placeOnScreenAroundElement(_89f,_89e,_89d,_89c.orient?dojo.hitch(_89c,"orient"):null):dijit.placeOnScreen(_89f,args,_89d=="R"?["TR","BR","TL","BL"]:["TL","BL","TR","BR"],args.padding);
_89f.style.display="";
_89f.style.visibility="visible";
_89c.domNode.style.visibility="visible";
var _8a0=[];
_8a0.push(dojo.connect(_89f,"onkeypress",this,function(evt){
if(evt.charOrCode==dojo.keys.ESCAPE&&args.onCancel){
dojo.stopEvent(evt);
args.onCancel();
}else{
if(evt.charOrCode===dojo.keys.TAB){
dojo.stopEvent(evt);
var _8a1=this.getTopPopup();
if(_8a1&&_8a1.onCancel){
_8a1.onCancel();
}
}
}
}));
if(_89c.onCancel){
_8a0.push(dojo.connect(_89c,"onCancel",args.onCancel));
}
_8a0.push(dojo.connect(_89c,_89c.onExecute?"onExecute":"onChange",this,function(){
var _8a2=this.getTopPopup();
if(_8a2&&_8a2.onExecute){
_8a2.onExecute();
}
}));
_89b.push({widget:_89c,parent:args.parent,onExecute:args.onExecute,onCancel:args.onCancel,onClose:args.onClose,handlers:_8a0});
if(_89c.onOpen){
_89c.onOpen(best);
}
return best;
},close:function(_8a3){
var _8a4=this._stack;
while((_8a3&&dojo.some(_8a4,function(elem){
return elem.widget==_8a3;
}))||(!_8a3&&_8a4.length)){
var top=_8a4.pop(),_8a5=top.widget,_8a6=top.onClose;
if(_8a5.onClose){
_8a5.onClose();
}
dojo.forEach(top.handlers,dojo.disconnect);
if(_8a5&&_8a5.domNode){
this.hide(_8a5);
}
if(_8a6){
_8a6();
}
}
}};
dijit._frames=new function(){
var _8a7=[];
this.pop=function(){
var _8a8;
if(_8a7.length){
_8a8=_8a7.pop();
_8a8.style.display="";
}else{
if(dojo.isIE<9){
var burl=dojo.config["dojoBlankHtmlUrl"]||(dojo.moduleUrl("dojo","resources/blank.html")+"")||"javascript:\"\"";
var html="<iframe src='"+burl+"'"+" style='position: absolute; left: 0px; top: 0px;"+"z-index: -1; filter:Alpha(Opacity=\"0\");'>";
_8a8=dojo.doc.createElement(html);
}else{
_8a8=dojo.create("iframe");
_8a8.src="javascript:\"\"";
_8a8.className="dijitBackgroundIframe";
dojo.style(_8a8,"opacity",0.1);
}
_8a8.tabIndex=-1;
dijit.setWaiRole(_8a8,"presentation");
}
return _8a8;
};
this.push=function(_8a9){
_8a9.style.display="none";
_8a7.push(_8a9);
};
}();
dijit.BackgroundIframe=function(node){
if(!node.id){
throw new Error("no id");
}
if(dojo.isIE||dojo.isMoz){
var _8aa=(this.iframe=dijit._frames.pop());
node.appendChild(_8aa);
if(dojo.isIE<7||dojo.isQuirks){
this.resize(node);
this._conn=dojo.connect(node,"onresize",this,function(){
this.resize(node);
});
}else{
dojo.style(_8aa,{width:"100%",height:"100%"});
}
}
};
dojo.extend(dijit.BackgroundIframe,{resize:function(node){
if(this.iframe){
dojo.style(this.iframe,{width:node.offsetWidth+"px",height:node.offsetHeight+"px"});
}
},destroy:function(){
if(this._conn){
dojo.disconnect(this._conn);
this._conn=null;
}
if(this.iframe){
dijit._frames.push(this.iframe);
delete this.iframe;
}
}});
}
if(!dojo._hasResource["dijit._base.scroll"]){
dojo._hasResource["dijit._base.scroll"]=true;
dojo.provide("dijit._base.scroll");
dijit.scrollIntoView=function(node,pos){
dojo.window.scrollIntoView(node,pos);
};
}
if(!dojo._hasResource["dojo.uacss"]){
dojo._hasResource["dojo.uacss"]=true;
dojo.provide("dojo.uacss");
(function(){
var d=dojo,html=d.doc.documentElement,ie=d.isIE,_8ab=d.isOpera,maj=Math.floor,ff=d.isFF,_8ac=d.boxModel.replace(/-/,""),_8ad={dj_ie:ie,dj_ie6:maj(ie)==6,dj_ie7:maj(ie)==7,dj_ie8:maj(ie)==8,dj_ie9:maj(ie)==9,dj_quirks:d.isQuirks,dj_iequirks:ie&&d.isQuirks,dj_opera:_8ab,dj_khtml:d.isKhtml,dj_webkit:d.isWebKit,dj_safari:d.isSafari,dj_chrome:d.isChrome,dj_gecko:d.isMozilla,dj_ff3:maj(ff)==3};
_8ad["dj_"+_8ac]=true;
var _8ae="";
for(var clz in _8ad){
if(_8ad[clz]){
_8ae+=clz+" ";
}
}
html.className=d.trim(html.className+" "+_8ae);
dojo._loaders.unshift(function(){
if(!dojo._isBodyLtr()){
var _8af="dj_rtl dijitRtl "+_8ae.replace(/ /g,"-rtl ");
html.className=d.trim(html.className+" "+_8af);
}
});
})();
}
if(!dojo._hasResource["dijit._base.sniff"]){
dojo._hasResource["dijit._base.sniff"]=true;
dojo.provide("dijit._base.sniff");
}
if(!dojo._hasResource["dijit._base.typematic"]){
dojo._hasResource["dijit._base.typematic"]=true;
dojo.provide("dijit._base.typematic");
dijit.typematic={_fireEventAndReload:function(){
this._timer=null;
this._callback(++this._count,this._node,this._evt);
this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:(this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay)),this._minDelay);
this._timer=setTimeout(dojo.hitch(this,"_fireEventAndReload"),this._currentTimeout);
},trigger:function(evt,_8b0,node,_8b1,obj,_8b2,_8b3,_8b4){
if(obj!=this._obj){
this.stop();
this._initialDelay=_8b3||500;
this._subsequentDelay=_8b2||0.9;
this._minDelay=_8b4||10;
this._obj=obj;
this._evt=evt;
this._node=node;
this._currentTimeout=-1;
this._count=-1;
this._callback=dojo.hitch(_8b0,_8b1);
this._fireEventAndReload();
this._evt=dojo.mixin({faux:true},evt);
}
},stop:function(){
if(this._timer){
clearTimeout(this._timer);
this._timer=null;
}
if(this._obj){
this._callback(-1,this._node,this._evt);
this._obj=null;
}
},addKeyListener:function(node,_8b5,_8b6,_8b7,_8b8,_8b9,_8ba){
if(_8b5.keyCode){
_8b5.charOrCode=_8b5.keyCode;
dojo.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.","","2.0");
}else{
if(_8b5.charCode){
_8b5.charOrCode=String.fromCharCode(_8b5.charCode);
dojo.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.","","2.0");
}
}
return [dojo.connect(node,"onkeypress",this,function(evt){
if(evt.charOrCode==_8b5.charOrCode&&(_8b5.ctrlKey===undefined||_8b5.ctrlKey==evt.ctrlKey)&&(_8b5.altKey===undefined||_8b5.altKey==evt.altKey)&&(_8b5.metaKey===undefined||_8b5.metaKey==(evt.metaKey||false))&&(_8b5.shiftKey===undefined||_8b5.shiftKey==evt.shiftKey)){
dojo.stopEvent(evt);
dijit.typematic.trigger(evt,_8b6,node,_8b7,_8b5,_8b8,_8b9,_8ba);
}else{
if(dijit.typematic._obj==_8b5){
dijit.typematic.stop();
}
}
}),dojo.connect(node,"onkeyup",this,function(evt){
if(dijit.typematic._obj==_8b5){
dijit.typematic.stop();
}
})];
},addMouseListener:function(node,_8bb,_8bc,_8bd,_8be,_8bf){
var dc=dojo.connect;
return [dc(node,"mousedown",this,function(evt){
dojo.stopEvent(evt);
dijit.typematic.trigger(evt,_8bb,node,_8bc,node,_8bd,_8be,_8bf);
}),dc(node,"mouseup",this,function(evt){
dojo.stopEvent(evt);
dijit.typematic.stop();
}),dc(node,"mouseout",this,function(evt){
dojo.stopEvent(evt);
dijit.typematic.stop();
}),dc(node,"mousemove",this,function(evt){
evt.preventDefault();
}),dc(node,"dblclick",this,function(evt){
dojo.stopEvent(evt);
if(dojo.isIE){
dijit.typematic.trigger(evt,_8bb,node,_8bc,node,_8bd,_8be,_8bf);
setTimeout(dojo.hitch(this,dijit.typematic.stop),50);
}
})];
},addListener:function(_8c0,_8c1,_8c2,_8c3,_8c4,_8c5,_8c6,_8c7){
return this.addKeyListener(_8c1,_8c2,_8c3,_8c4,_8c5,_8c6,_8c7).concat(this.addMouseListener(_8c0,_8c3,_8c4,_8c5,_8c6,_8c7));
}};
}
if(!dojo._hasResource["dijit._base.wai"]){
dojo._hasResource["dijit._base.wai"]=true;
dojo.provide("dijit._base.wai");
dijit.wai={onload:function(){
var div=dojo.create("div",{id:"a11yTestNode",style:{cssText:"border: 1px solid;"+"border-color:red green;"+"position: absolute;"+"height: 5px;"+"top: -999px;"+"background-image: url(\""+(dojo.config.blankGif||dojo.moduleUrl("dojo","resources/blank.gif"))+"\");"}},dojo.body());
var cs=dojo.getComputedStyle(div);
if(cs){
var _8c8=cs.backgroundImage;
var _8c9=(cs.borderTopColor==cs.borderRightColor)||(_8c8!=null&&(_8c8=="none"||_8c8=="url(invalid-url:)"));
dojo[_8c9?"addClass":"removeClass"](dojo.body(),"dijit_a11y");
if(dojo.isIE){
div.outerHTML="";
}else{
dojo.body().removeChild(div);
}
}
}};
if(dojo.isIE||dojo.isMoz){
dojo._loaders.unshift(dijit.wai.onload);
}
dojo.mixin(dijit,{hasWaiRole:function(elem,role){
var _8ca=this.getWaiRole(elem);
return role?(_8ca.indexOf(role)>-1):(_8ca.length>0);
},getWaiRole:function(elem){
return dojo.trim((dojo.attr(elem,"role")||"").replace("wairole:",""));
},setWaiRole:function(elem,role){
dojo.attr(elem,"role",role);
},removeWaiRole:function(elem,role){
var _8cb=dojo.attr(elem,"role");
if(!_8cb){
return;
}
if(role){
var t=dojo.trim((" "+_8cb+" ").replace(" "+role+" "," "));
dojo.attr(elem,"role",t);
}else{
elem.removeAttribute("role");
}
},hasWaiState:function(elem,_8cc){
return elem.hasAttribute?elem.hasAttribute("aria-"+_8cc):!!elem.getAttribute("aria-"+_8cc);
},getWaiState:function(elem,_8cd){
return elem.getAttribute("aria-"+_8cd)||"";
},setWaiState:function(elem,_8ce,_8cf){
elem.setAttribute("aria-"+_8ce,_8cf);
},removeWaiState:function(elem,_8d0){
elem.removeAttribute("aria-"+_8d0);
}});
}
if(!dojo._hasResource["dijit._base"]){
dojo._hasResource["dijit._base"]=true;
dojo.provide("dijit._base");
}
if(!dojo._hasResource["dijit._Widget"]){
dojo._hasResource["dijit._Widget"]=true;
dojo.provide("dijit._Widget");
dojo.connect(dojo,"_connect",function(_8d1,_8d2){
if(_8d1&&dojo.isFunction(_8d1._onConnect)){
_8d1._onConnect(_8d2);
}
});
dijit._connectOnUseEventHandler=function(_8d3){
};
dijit._lastKeyDownNode=null;
if(dojo.isIE){
(function(){
var _8d4=function(evt){
dijit._lastKeyDownNode=evt.srcElement;
};
dojo.doc.attachEvent("onkeydown",_8d4);
dojo.addOnWindowUnload(function(){
dojo.doc.detachEvent("onkeydown",_8d4);
});
})();
}else{
dojo.doc.addEventListener("keydown",function(evt){
dijit._lastKeyDownNode=evt.target;
},true);
}
(function(){
dojo.declare("dijit._Widget",dijit._WidgetBase,{_deferredConnects:{onClick:"",onDblClick:"",onKeyDown:"",onKeyPress:"",onKeyUp:"",onMouseMove:"",onMouseDown:"",onMouseOut:"",onMouseOver:"",onMouseLeave:"",onMouseEnter:"",onMouseUp:""},onClick:dijit._connectOnUseEventHandler,onDblClick:dijit._connectOnUseEventHandler,onKeyDown:dijit._connectOnUseEventHandler,onKeyPress:dijit._connectOnUseEventHandler,onKeyUp:dijit._connectOnUseEventHandler,onMouseDown:dijit._connectOnUseEventHandler,onMouseMove:dijit._connectOnUseEventHandler,onMouseOut:dijit._connectOnUseEventHandler,onMouseOver:dijit._connectOnUseEventHandler,onMouseLeave:dijit._connectOnUseEventHandler,onMouseEnter:dijit._connectOnUseEventHandler,onMouseUp:dijit._connectOnUseEventHandler,create:function(_8d5,_8d6){
this._deferredConnects=dojo.clone(this._deferredConnects);
for(var attr in this.attributeMap){
delete this._deferredConnects[attr];
}
for(attr in this._deferredConnects){
if(this[attr]!==dijit._connectOnUseEventHandler){
delete this._deferredConnects[attr];
}
}
this.inherited(arguments);
if(this.domNode){
for(attr in this.params){
this._onConnect(attr);
}
}
},_onConnect:function(_8d7){
if(_8d7 in this._deferredConnects){
var _8d8=this[this._deferredConnects[_8d7]||"domNode"];
this.connect(_8d8,_8d7.toLowerCase(),_8d7);
delete this._deferredConnects[_8d7];
}
},focused:false,isFocusable:function(){
return this.focus&&(dojo.style(this.domNode,"display")!="none");
},onFocus:function(){
},onBlur:function(){
},_onFocus:function(e){
this.onFocus();
},_onBlur:function(){
this.onBlur();
},setAttribute:function(attr,_8d9){
dojo.deprecated(this.declaredClass+"::setAttribute(attr, value) is deprecated. Use set() instead.","","2.0");
this.set(attr,_8d9);
},attr:function(name,_8da){
if(dojo.config.isDebug){
var _8db=arguments.callee._ach||(arguments.callee._ach={}),_8dc=(arguments.callee.caller||"unknown caller").toString();
if(!_8db[_8dc]){
dojo.deprecated(this.declaredClass+"::attr() is deprecated. Use get() or set() instead, called from "+_8dc,"","2.0");
_8db[_8dc]=true;
}
}
var args=arguments.length;
if(args>=2||typeof name==="object"){
return this.set.apply(this,arguments);
}else{
return this.get(name);
}
},nodesWithKeyClick:["input","button"],connect:function(obj,_8dd,_8de){
var d=dojo,dc=d._connect,_8df=this.inherited(arguments,[obj,_8dd=="ondijitclick"?"onclick":_8dd,_8de]);
if(_8dd=="ondijitclick"){
if(d.indexOf(this.nodesWithKeyClick,obj.nodeName.toLowerCase())==-1){
var m=d.hitch(this,_8de);
_8df.push(dc(obj,"onkeydown",this,function(e){
if((e.keyCode==d.keys.ENTER||e.keyCode==d.keys.SPACE)&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey){
dijit._lastKeyDownNode=e.target;
if(!("openDropDown" in this&&obj==this._buttonNode)){
e.preventDefault();
}
}
}),dc(obj,"onkeyup",this,function(e){
if((e.keyCode==d.keys.ENTER||e.keyCode==d.keys.SPACE)&&e.target==dijit._lastKeyDownNode&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey){
dijit._lastKeyDownNode=null;
return m(e);
}
}));
}
}
return _8df;
},_onShow:function(){
this.onShow();
},onShow:function(){
},onHide:function(){
},onClose:function(){
return true;
}});
})();
}
if(!dojo._hasResource["dojo.cache"]){
dojo._hasResource["dojo.cache"]=true;
dojo.provide("dojo.cache");
var cache={};
dojo.cache=function(_8e0,url,_8e1){
if(typeof _8e0=="string"){
var _8e2=dojo.moduleUrl(_8e0,url);
}else{
_8e2=_8e0;
_8e1=url;
}
var key=_8e2.toString();
var val=_8e1;
if(_8e1!=undefined&&!dojo.isString(_8e1)){
val=("value" in _8e1?_8e1.value:undefined);
}
var _8e3=_8e1&&_8e1.sanitize?true:false;
if(typeof val=="string"){
val=cache[key]=_8e3?dojo.cache._sanitize(val):val;
}else{
if(val===null){
delete cache[key];
}else{
if(!(key in cache)){
val=dojo._getText(key);
cache[key]=_8e3?dojo.cache._sanitize(val):val;
}
val=cache[key];
}
}
return val;
};
dojo.cache._sanitize=function(val){
if(val){
val=val.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");
var _8e4=val.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
if(_8e4){
val=_8e4[1];
}
}else{
val="";
}
return val;
};
}
if(!dojo._hasResource["dijit._Templated"]){
dojo._hasResource["dijit._Templated"]=true;
dojo.provide("dijit._Templated");
dojo.declare("dijit._Templated",null,{templateString:null,templatePath:null,widgetsInTemplate:false,_skipNodeCache:false,_earlyTemplatedStartup:false,constructor:function(){
this._attachPoints=[];
this._attachEvents=[];
},_stringRepl:function(tmpl){
var _8e5=this.declaredClass,_8e6=this;
return dojo.string.substitute(tmpl,this,function(_8e7,key){
if(key.charAt(0)=="!"){
_8e7=dojo.getObject(key.substr(1),false,_8e6);
}
if(typeof _8e7=="undefined"){
throw new Error(_8e5+" template:"+key);
}
if(_8e7==null){
return "";
}
return key.charAt(0)=="!"?_8e7:_8e7.toString().replace(/"/g,"&quot;");
},this);
},buildRendering:function(){
var _8e8=dijit._Templated.getCachedTemplate(this.templatePath,this.templateString,this._skipNodeCache);
var node;
if(dojo.isString(_8e8)){
node=dojo._toDom(this._stringRepl(_8e8));
if(node.nodeType!=1){
throw new Error("Invalid template: "+_8e8);
}
}else{
node=_8e8.cloneNode(true);
}
this.domNode=node;
this.inherited(arguments);
this._attachTemplateNodes(node);
if(this.widgetsInTemplate){
var cw=(this._startupWidgets=dojo.parser.parse(node,{noStart:!this._earlyTemplatedStartup,template:true,inherited:{dir:this.dir,lang:this.lang},propsThis:this,scope:"dojo"}));
this._supportingWidgets=dijit.findWidgets(node);
this._attachTemplateNodes(cw,function(n,p){
return n[p];
});
}
this._fillContent(this.srcNodeRef);
},_fillContent:function(_8e9){
var dest=this.containerNode;
if(_8e9&&dest){
while(_8e9.hasChildNodes()){
dest.appendChild(_8e9.firstChild);
}
}
},_attachTemplateNodes:function(_8ea,_8eb){
_8eb=_8eb||function(n,p){
return n.getAttribute(p);
};
var _8ec=dojo.isArray(_8ea)?_8ea:(_8ea.all||_8ea.getElementsByTagName("*"));
var x=dojo.isArray(_8ea)?0:-1;
for(;x<_8ec.length;x++){
var _8ed=(x==-1)?_8ea:_8ec[x];
if(this.widgetsInTemplate&&(_8eb(_8ed,"dojoType")||_8eb(_8ed,"data-dojo-type"))){
continue;
}
var _8ee=_8eb(_8ed,"dojoAttachPoint")||_8eb(_8ed,"data-dojo-attach-point");
if(_8ee){
var _8ef,_8f0=_8ee.split(/\s*,\s*/);
while((_8ef=_8f0.shift())){
if(dojo.isArray(this[_8ef])){
this[_8ef].push(_8ed);
}else{
this[_8ef]=_8ed;
}
this._attachPoints.push(_8ef);
}
}
var _8f1=_8eb(_8ed,"dojoAttachEvent")||_8eb(_8ed,"data-dojo-attach-event");
if(_8f1){
var _8f2,_8f3=_8f1.split(/\s*,\s*/);
var trim=dojo.trim;
while((_8f2=_8f3.shift())){
if(_8f2){
var _8f4=null;
if(_8f2.indexOf(":")!=-1){
var _8f5=_8f2.split(":");
_8f2=trim(_8f5[0]);
_8f4=trim(_8f5[1]);
}else{
_8f2=trim(_8f2);
}
if(!_8f4){
_8f4=_8f2;
}
this._attachEvents.push(this.connect(_8ed,_8f2,_8f4));
}
}
}
var role=_8eb(_8ed,"waiRole");
if(role){
dijit.setWaiRole(_8ed,role);
}
var _8f6=_8eb(_8ed,"waiState");
if(_8f6){
dojo.forEach(_8f6.split(/\s*,\s*/),function(_8f7){
if(_8f7.indexOf("-")!=-1){
var pair=_8f7.split("-");
dijit.setWaiState(_8ed,pair[0],pair[1]);
}
});
}
}
},startup:function(){
dojo.forEach(this._startupWidgets,function(w){
if(w&&!w._started&&w.startup){
w.startup();
}
});
this.inherited(arguments);
},destroyRendering:function(){
dojo.forEach(this._attachPoints,function(_8f8){
delete this[_8f8];
},this);
this._attachPoints=[];
dojo.forEach(this._attachEvents,this.disconnect,this);
this._attachEvents=[];
this.inherited(arguments);
}});
dijit._Templated._templateCache={};
dijit._Templated.getCachedTemplate=function(_8f9,_8fa,_8fb){
var _8fc=dijit._Templated._templateCache;
var key=_8fa||_8f9;
var _8fd=_8fc[key];
if(_8fd){
try{
if(!_8fd.ownerDocument||_8fd.ownerDocument==dojo.doc){
return _8fd;
}
}
catch(e){
}
dojo.destroy(_8fd);
}
if(!_8fa){
_8fa=dojo.cache(_8f9,{sanitize:true});
}
_8fa=dojo.string.trim(_8fa);
if(_8fb||_8fa.match(/\$\{([^\}]+)\}/g)){
return (_8fc[key]=_8fa);
}else{
var node=dojo._toDom(_8fa);
if(node.nodeType!=1){
throw new Error("Invalid template: "+_8fa);
}
return (_8fc[key]=node);
}
};
if(dojo.isIE){
dojo.addOnWindowUnload(function(){
var _8fe=dijit._Templated._templateCache;
for(var key in _8fe){
var _8ff=_8fe[key];
if(typeof _8ff=="object"){
dojo.destroy(_8ff);
}
delete _8fe[key];
}
});
}
dojo.extend(dijit._Widget,{dojoAttachEvent:"",dojoAttachPoint:"",waiRole:"",waiState:""});
}
if(!dojo._hasResource["dijit._CssStateMixin"]){
dojo._hasResource["dijit._CssStateMixin"]=true;
dojo.provide("dijit._CssStateMixin");
dojo.declare("dijit._CssStateMixin",[],{cssStateNodes:{},hovering:false,active:false,_applyAttributes:function(){
this.inherited(arguments);
dojo.forEach(["onmouseenter","onmouseleave","onmousedown"],function(e){
this.connect(this.domNode,e,"_cssMouseEvent");
},this);
dojo.forEach(["disabled","readOnly","checked","selected","focused","state","hovering","active"],function(attr){
this.watch(attr,dojo.hitch(this,"_setStateClass"));
},this);
for(var ap in this.cssStateNodes){
this._trackMouseState(this[ap],this.cssStateNodes[ap]);
}
this._setStateClass();
},_cssMouseEvent:function(_900){
if(!this.disabled){
switch(_900.type){
case "mouseenter":
case "mouseover":
this._set("hovering",true);
this._set("active",this._mouseDown);
break;
case "mouseleave":
case "mouseout":
this._set("hovering",false);
this._set("active",false);
break;
case "mousedown":
this._set("active",true);
this._mouseDown=true;
var _901=this.connect(dojo.body(),"onmouseup",function(){
this._mouseDown=false;
this._set("active",false);
this.disconnect(_901);
});
break;
}
}
},_setStateClass:function(){
var _902=this.baseClass.split(" ");
function _903(_904){
_902=_902.concat(dojo.map(_902,function(c){
return c+_904;
}),"dijit"+_904);
};
if(!this.isLeftToRight()){
_903("Rtl");
}
if(this.checked){
_903("Checked");
}
if(this.state){
_903(this.state);
}
if(this.selected){
_903("Selected");
}
if(this.disabled){
_903("Disabled");
}else{
if(this.readOnly){
_903("ReadOnly");
}else{
if(this.active){
_903("Active");
}else{
if(this.hovering){
_903("Hover");
}
}
}
}
if(this._focused){
_903("Focused");
}
var tn=this.stateNode||this.domNode,_905={};
dojo.forEach(tn.className.split(" "),function(c){
_905[c]=true;
});
if("_stateClasses" in this){
dojo.forEach(this._stateClasses,function(c){
delete _905[c];
});
}
dojo.forEach(_902,function(c){
_905[c]=true;
});
var _906=[];
for(var c in _905){
_906.push(c);
}
var _907=_906.join(" ");
if(tn.className!=_907){
tn.className=_907;
}
this._stateClasses=_902;
},_trackMouseState:function(node,_908){
var _909=false,_90a=false,_90b=false;
var self=this,cn=dojo.hitch(this,"connect",node);
function _90c(){
var _90d=("disabled" in self&&self.disabled)||("readonly" in self&&self.readonly);
dojo.toggleClass(node,_908+"Hover",_909&&!_90a&&!_90d);
dojo.toggleClass(node,_908+"Active",_90a&&!_90d);
dojo.toggleClass(node,_908+"Focused",_90b&&!_90d);
};
cn("onmouseenter",function(){
_909=true;
_90c();
});
cn("onmouseleave",function(){
_909=false;
_90a=false;
_90c();
});
cn("onmousedown",function(){
_90a=true;
_90c();
});
cn("onmouseup",function(){
_90a=false;
_90c();
});
cn("onfocus",function(){
_90b=true;
_90c();
});
cn("onblur",function(){
_90b=false;
_90c();
});
this.watch("disabled",_90c);
this.watch("readOnly",_90c);
}});
}
if(!dojo._hasResource["dijit.form._FormWidget"]){
dojo._hasResource["dijit.form._FormWidget"]=true;
dojo.provide("dijit.form._FormWidget");
dojo.declare("dijit.form._FormWidget",[dijit._Widget,dijit._Templated,dijit._CssStateMixin],{name:"",alt:"",value:"",type:"text",tabIndex:"0",disabled:false,intermediateChanges:false,scrollOnFocus:true,attributeMap:dojo.delegate(dijit._Widget.prototype.attributeMap,{value:"focusNode",id:"focusNode",tabIndex:"focusNode",alt:"focusNode",title:"focusNode"}),postMixInProperties:function(){
this.nameAttrSetting=this.name?("name=\""+this.name.replace(/'/g,"&quot;")+"\""):"";
this.inherited(arguments);
},postCreate:function(){
this.inherited(arguments);
this.connect(this.domNode,"onmousedown","_onMouseDown");
},_setDisabledAttr:function(_90e){
this._set("disabled",_90e);
dojo.attr(this.focusNode,"disabled",_90e);
if(this.valueNode){
dojo.attr(this.valueNode,"disabled",_90e);
}
dijit.setWaiState(this.focusNode,"disabled",_90e);
if(_90e){
this._set("hovering",false);
this._set("active",false);
var _90f="tabIndex" in this.attributeMap?this.attributeMap.tabIndex:"focusNode";
dojo.forEach(dojo.isArray(_90f)?_90f:[_90f],function(_910){
var node=this[_910];
if(dojo.isWebKit||dijit.hasDefaultTabStop(node)){
node.setAttribute("tabIndex","-1");
}else{
node.removeAttribute("tabIndex");
}
},this);
}else{
if(this.tabIndex!=""){
this.focusNode.setAttribute("tabIndex",this.tabIndex);
}
}
},setDisabled:function(_911){
dojo.deprecated("setDisabled("+_911+") is deprecated. Use set('disabled',"+_911+") instead.","","2.0");
this.set("disabled",_911);
},_onFocus:function(e){
if(this.scrollOnFocus){
dojo.window.scrollIntoView(this.domNode);
}
this.inherited(arguments);
},isFocusable:function(){
return !this.disabled&&this.focusNode&&(dojo.style(this.domNode,"display")!="none");
},focus:function(){
if(!this.disabled){
dijit.focus(this.focusNode);
}
},compare:function(val1,val2){
if(typeof val1=="number"&&typeof val2=="number"){
return (isNaN(val1)&&isNaN(val2))?0:val1-val2;
}else{
if(val1>val2){
return 1;
}else{
if(val1<val2){
return -1;
}else{
return 0;
}
}
}
},onChange:function(_912){
},_onChangeActive:false,_handleOnChange:function(_913,_914){
if(_913===this._lastValueReported){
return;
}
if(this._lastValueReported==undefined&&(_914===null||!this._onChangeActive)){
this._resetValue=this._lastValueReported=_913;
}
this._pendingOnChange=this._pendingOnChange||(typeof _913!=typeof this._lastValueReported)||(this.compare(_913,this._lastValueReported)!=0);
if((this.intermediateChanges||_914||_914===undefined)&&this._pendingOnChange){
this._lastValueReported=_913;
this._pendingOnChange=false;
if(this._onChangeActive){
if(this._onChangeHandle){
clearTimeout(this._onChangeHandle);
}
this._onChangeHandle=setTimeout(dojo.hitch(this,function(){
this._onChangeHandle=null;
this.onChange(_913);
}),0);
}
}
},create:function(){
this.inherited(arguments);
this._onChangeActive=true;
},destroy:function(){
if(this._onChangeHandle){
clearTimeout(this._onChangeHandle);
this.onChange(this._lastValueReported);
}
this.inherited(arguments);
},setValue:function(_915){
dojo.deprecated("dijit.form._FormWidget:setValue("+_915+") is deprecated.  Use set('value',"+_915+") instead.","","2.0");
this.set("value",_915);
},getValue:function(){
dojo.deprecated(this.declaredClass+"::getValue() is deprecated. Use get('value') instead.","","2.0");
return this.get("value");
},_onMouseDown:function(e){
if(!e.ctrlKey&&dojo.mouseButtons.isLeft(e)&&this.isFocusable()){
var _916=this.connect(dojo.body(),"onmouseup",function(){
if(this.isFocusable()){
this.focus();
}
this.disconnect(_916);
});
}
}});
dojo.declare("dijit.form._FormValueWidget",dijit.form._FormWidget,{readOnly:false,attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{value:"",readOnly:"focusNode"}),_setReadOnlyAttr:function(_917){
dojo.attr(this.focusNode,"readOnly",_917);
dijit.setWaiState(this.focusNode,"readonly",_917);
this._set("readOnly",_917);
},postCreate:function(){
this.inherited(arguments);
if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){
this.connect(this.focusNode||this.domNode,"onkeydown",this._onKeyDown);
}
if(this._resetValue===undefined){
this._lastValueReported=this._resetValue=this.value;
}
},_setValueAttr:function(_918,_919){
this._handleOnChange(_918,_919);
},_handleOnChange:function(_91a,_91b){
this._set("value",_91a);
this.inherited(arguments);
},undo:function(){
this._setValueAttr(this._lastValueReported,false);
},reset:function(){
this._hasBeenBlurred=false;
this._setValueAttr(this._resetValue,true);
},_onKeyDown:function(e){
if(e.keyCode==dojo.keys.ESCAPE&&!(e.ctrlKey||e.altKey||e.metaKey)){
var te;
if(dojo.isIE){
e.preventDefault();
te=document.createEventObject();
te.keyCode=dojo.keys.ESCAPE;
te.shiftKey=e.shiftKey;
e.srcElement.fireEvent("onkeypress",te);
}
}
},_layoutHackIE7:function(){
if(dojo.isIE==7){
var _91c=this.domNode;
var _91d=_91c.parentNode;
var _91e=_91c.firstChild||_91c;
var _91f=_91e.style.filter;
var _920=this;
while(_91d&&_91d.clientHeight==0){
(function ping(){
var _921=_920.connect(_91d,"onscroll",function(e){
_920.disconnect(_921);
_91e.style.filter=(new Date()).getMilliseconds();
setTimeout(function(){
_91e.style.filter=_91f;
},0);
});
})();
_91d=_91d.parentNode;
}
}
}});
}
if(!dojo._hasResource["dijit.form.TextBox"]){
dojo._hasResource["dijit.form.TextBox"]=true;
dojo.provide("dijit.form.TextBox");
dojo.declare("dijit.form.TextBox",dijit.form._FormValueWidget,{trim:false,uppercase:false,lowercase:false,propercase:false,maxLength:"",selectOnClick:false,placeHolder:"",templateString:dojo.cache("dijit.form","templates/TextBox.html","<div class=\"dijit dijitReset dijitInline dijitLeft\" id=\"widget_${id}\" role=\"presentation\"\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class=\"dijitReset dijitInputInner\" dojoAttachPoint='textbox,focusNode' autocomplete=\"off\"\r\n\t\t\t${!nameAttrSetting} type='${type}'\r\n\t/></div\r\n></div>\r\n"),_singleNodeTemplate:"<input class=\"dijit dijitReset dijitLeft dijitInputField\" dojoAttachPoint=\"textbox,focusNode\" autocomplete=\"off\" type=\"${type}\" ${!nameAttrSetting} />",_buttonInputDisabled:dojo.isIE?"disabled":"",baseClass:"dijitTextBox",attributeMap:dojo.delegate(dijit.form._FormValueWidget.prototype.attributeMap,{maxLength:"focusNode"}),postMixInProperties:function(){
var type=this.type.toLowerCase();
if(this.templateString&&this.templateString.toLowerCase()=="input"||((type=="hidden"||type=="file")&&this.templateString==dijit.form.TextBox.prototype.templateString)){
this.templateString=this._singleNodeTemplate;
}
this.inherited(arguments);
},_setPlaceHolderAttr:function(v){
this._set("placeHolder",v);
if(!this._phspan){
this._attachPoints.push("_phspan");
this._phspan=dojo.create("span",{className:"dijitPlaceHolder dijitInputField"},this.textbox,"after");
}
this._phspan.innerHTML="";
this._phspan.appendChild(document.createTextNode(v));
this._updatePlaceHolder();
},_updatePlaceHolder:function(){
if(this._phspan){
this._phspan.style.display=(this.placeHolder&&!this._focused&&!this.textbox.value)?"":"none";
}
},_getValueAttr:function(){
return this.parse(this.get("displayedValue"),this.constraints);
},_setValueAttr:function(_922,_923,_924){
var _925;
if(_922!==undefined){
_925=this.filter(_922);
if(typeof _924!="string"){
if(_925!==null&&((typeof _925!="number")||!isNaN(_925))){
_924=this.filter(this.format(_925,this.constraints));
}else{
_924="";
}
}
}
if(_924!=null&&_924!=undefined&&((typeof _924)!="number"||!isNaN(_924))&&this.textbox.value!=_924){
this.textbox.value=_924;
this._set("displayedValue",this.get("displayedValue"));
}
this._updatePlaceHolder();
this.inherited(arguments,[_925,_923]);
},displayedValue:"",getDisplayedValue:function(){
dojo.deprecated(this.declaredClass+"::getDisplayedValue() is deprecated. Use set('displayedValue') instead.","","2.0");
return this.get("displayedValue");
},_getDisplayedValueAttr:function(){
return this.filter(this.textbox.value);
},setDisplayedValue:function(_926){
dojo.deprecated(this.declaredClass+"::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.","","2.0");
this.set("displayedValue",_926);
},_setDisplayedValueAttr:function(_927){
if(_927===null||_927===undefined){
_927="";
}else{
if(typeof _927!="string"){
_927=String(_927);
}
}
this.textbox.value=_927;
this._setValueAttr(this.get("value"),undefined);
this._set("displayedValue",this.get("displayedValue"));
},format:function(_928,_929){
return ((_928==null||_928==undefined)?"":(_928.toString?_928.toString():_928));
},parse:function(_92a,_92b){
return _92a;
},_refreshState:function(){
},_onInput:function(e){
if(e&&e.type&&/key/i.test(e.type)&&e.keyCode){
switch(e.keyCode){
case dojo.keys.SHIFT:
case dojo.keys.ALT:
case dojo.keys.CTRL:
case dojo.keys.TAB:
return;
}
}
if(this.intermediateChanges){
var _92c=this;
setTimeout(function(){
_92c._handleOnChange(_92c.get("value"),false);
},0);
}
this._refreshState();
this._set("displayedValue",this.get("displayedValue"));
},postCreate:function(){
if(dojo.isIE){
setTimeout(dojo.hitch(this,function(){
var s=dojo.getComputedStyle(this.domNode);
if(s){
var ff=s.fontFamily;
if(ff){
var _92d=this.domNode.getElementsByTagName("INPUT");
if(_92d){
for(var i=0;i<_92d.length;i++){
_92d[i].style.fontFamily=ff;
}
}
}
}
}),0);
}
this.textbox.setAttribute("value",this.textbox.value);
this.inherited(arguments);
if(dojo.isMoz||dojo.isOpera){
this.connect(this.textbox,"oninput","_onInput");
}else{
this.connect(this.textbox,"onkeydown","_onInput");
this.connect(this.textbox,"onkeyup","_onInput");
this.connect(this.textbox,"onpaste","_onInput");
this.connect(this.textbox,"oncut","_onInput");
}
},_blankValue:"",filter:function(val){
if(val===null){
return this._blankValue;
}
if(typeof val!="string"){
return val;
}
if(this.trim){
val=dojo.trim(val);
}
if(this.uppercase){
val=val.toUpperCase();
}
if(this.lowercase){
val=val.toLowerCase();
}
if(this.propercase){
val=val.replace(/[^\s]+/g,function(word){
return word.substring(0,1).toUpperCase()+word.substring(1);
});
}
return val;
},_setBlurValue:function(){
this._setValueAttr(this.get("value"),true);
},_onBlur:function(e){
if(this.disabled){
return;
}
this._setBlurValue();
this.inherited(arguments);
if(this._selectOnClickHandle){
this.disconnect(this._selectOnClickHandle);
}
if(this.selectOnClick&&dojo.isMoz){
this.textbox.selectionStart=this.textbox.selectionEnd=undefined;
}
this._updatePlaceHolder();
},_onFocus:function(by){
if(this.disabled||this.readOnly){
return;
}
if(this.selectOnClick&&by=="mouse"){
this._selectOnClickHandle=this.connect(this.domNode,"onmouseup",function(){
this.disconnect(this._selectOnClickHandle);
var _92e;
if(dojo.isIE){
var _92f=dojo.doc.selection.createRange();
var _930=_92f.parentElement();
_92e=_930==this.textbox&&_92f.text.length==0;
}else{
_92e=this.textbox.selectionStart==this.textbox.selectionEnd;
}
if(_92e){
dijit.selectInputText(this.textbox);
}
});
}
this._updatePlaceHolder();
this.inherited(arguments);
this._message="";
this._refreshState();
},reset:function(){
this.textbox.value="";
this.inherited(arguments);
}});
dijit.selectInputText=function(_931,_932,stop){
var _933=dojo.global;
var _934=dojo.doc;
_931=dojo.byId(_931);
if(isNaN(_932)){
_932=0;
}
if(isNaN(stop)){
stop=_931.value?_931.value.length:0;
}
dijit.focus(_931);
if(_934["selection"]&&dojo.body()["createTextRange"]){
if(_931.createTextRange){
var r=_931.createTextRange();
r.collapse(true);
r.moveStart("character",-99999);
r.moveStart("character",_932);
r.moveEnd("character",stop-_932);
r.select();
}
}else{
if(_933["getSelection"]){
if(_931.setSelectionRange){
_931.setSelectionRange(_932,stop);
}
}
}
};
}
if(!dojo._hasResource["dijit.Tooltip"]){
dojo._hasResource["dijit.Tooltip"]=true;
dojo.provide("dijit.Tooltip");
dojo.declare("dijit._MasterTooltip",[dijit._Widget,dijit._Templated],{duration:dijit.defaultDuration,templateString:dojo.cache("dijit","templates/Tooltip.html","<div class=\"dijitTooltip dijitTooltipLeft\" id=\"dojoTooltip\"\r\n\t><div class=\"dijitTooltipContainer dijitTooltipContents\" dojoAttachPoint=\"containerNode\" role='alert'></div\r\n\t><div class=\"dijitTooltipConnector\" dojoAttachPoint=\"connectorNode\"></div\r\n></div>\r\n"),postCreate:function(){
dojo.body().appendChild(this.domNode);
this.bgIframe=new dijit.BackgroundIframe(this.domNode);
this.fadeIn=dojo.fadeIn({node:this.domNode,duration:this.duration,onEnd:dojo.hitch(this,"_onShow")});
this.fadeOut=dojo.fadeOut({node:this.domNode,duration:this.duration,onEnd:dojo.hitch(this,"_onHide")});
},show:function(_935,_936,_937,rtl){
if(this.aroundNode&&this.aroundNode===_936){
return;
}
this.domNode.width="auto";
if(this.fadeOut.status()=="playing"){
this._onDeck=arguments;
return;
}
this.containerNode.innerHTML=_935;
var pos=dijit.placeOnScreenAroundElement(this.domNode,_936,dijit.getPopupAroundAlignment((_937&&_937.length)?_937:dijit.Tooltip.defaultPosition,!rtl),dojo.hitch(this,"orient"));
dojo.style(this.domNode,"opacity",0);
this.fadeIn.play();
this.isShowingNow=true;
this.aroundNode=_936;
},orient:function(node,_938,_939,_93a,_93b){
this.connectorNode.style.top="";
var _93c=_93a.w-this.connectorNode.offsetWidth;
node.className="dijitTooltip "+{"BL-TL":"dijitTooltipBelow dijitTooltipABLeft","TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight","TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"}[_938+"-"+_939];
this.domNode.style.width="auto";
var size=dojo.contentBox(this.domNode);
var _93d=Math.min((Math.max(_93c,1)),size.w);
var _93e=_93d<size.w;
this.domNode.style.width=_93d+"px";
if(_93e){
this.containerNode.style.overflow="auto";
var _93f=this.containerNode.scrollWidth;
this.containerNode.style.overflow="visible";
if(_93f>_93d){
_93f=_93f+dojo.style(this.domNode,"paddingLeft")+dojo.style(this.domNode,"paddingRight");
this.domNode.style.width=_93f+"px";
}
}
if(_939.charAt(0)=="B"&&_938.charAt(0)=="B"){
var mb=dojo.marginBox(node);
var _940=this.connectorNode.offsetHeight;
if(mb.h>_93a.h){
var _941=_93a.h-(_93b.h/2)-(_940/2);
this.connectorNode.style.top=_941+"px";
this.connectorNode.style.bottom="";
}else{
this.connectorNode.style.bottom=Math.min(Math.max(_93b.h/2-_940/2,0),mb.h-_940)+"px";
this.connectorNode.style.top="";
}
}else{
this.connectorNode.style.top="";
this.connectorNode.style.bottom="";
}
return Math.max(0,size.w-_93c);
},_onShow:function(){
if(dojo.isIE){
this.domNode.style.filter="";
}
},hide:function(_942){
if(this._onDeck&&this._onDeck[1]==_942){
this._onDeck=null;
}else{
if(this.aroundNode===_942){
this.fadeIn.stop();
this.isShowingNow=false;
this.aroundNode=null;
this.fadeOut.play();
}else{
}
}
},_onHide:function(){
this.domNode.style.cssText="";
this.containerNode.innerHTML="";
if(this._onDeck){
this.show.apply(this,this._onDeck);
this._onDeck=null;
}
}});
dijit.showTooltip=function(_943,_944,_945,rtl){
if(!dijit._masterTT){
dijit._masterTT=new dijit._MasterTooltip();
}
return dijit._masterTT.show(_943,_944,_945,rtl);
};
dijit.hideTooltip=function(_946){
if(!dijit._masterTT){
dijit._masterTT=new dijit._MasterTooltip();
}
return dijit._masterTT.hide(_946);
};
dojo.declare("dijit.Tooltip",dijit._Widget,{label:"",showDelay:400,connectId:[],position:[],_setConnectIdAttr:function(_947){
dojo.forEach(this._connections||[],function(_948){
dojo.forEach(_948,dojo.hitch(this,"disconnect"));
},this);
var ary=dojo.isArrayLike(_947)?_947:(_947?[_947]:[]);
this._connections=dojo.map(ary,function(id){
var node=dojo.byId(id);
return node?[this.connect(node,"onmouseenter","_onTargetMouseEnter"),this.connect(node,"onmouseleave","_onTargetMouseLeave"),this.connect(node,"onfocus","_onTargetFocus"),this.connect(node,"onblur","_onTargetBlur")]:[];
},this);
this._set("connectId",_947);
this._connectIds=ary;
},addTarget:function(node){
var id=node.id||node;
if(dojo.indexOf(this._connectIds,id)==-1){
this.set("connectId",this._connectIds.concat(id));
}
},removeTarget:function(node){
var id=node.id||node,idx=dojo.indexOf(this._connectIds,id);
if(idx>=0){
this._connectIds.splice(idx,1);
this.set("connectId",this._connectIds);
}
},buildRendering:function(){
this.inherited(arguments);
dojo.addClass(this.domNode,"dijitTooltipData");
},startup:function(){
this.inherited(arguments);
var ids=this.connectId;
dojo.forEach(dojo.isArrayLike(ids)?ids:[ids],this.addTarget,this);
},_onTargetMouseEnter:function(e){
this._onHover(e);
},_onTargetMouseLeave:function(e){
this._onUnHover(e);
},_onTargetFocus:function(e){
this._focus=true;
this._onHover(e);
},_onTargetBlur:function(e){
this._focus=false;
this._onUnHover(e);
},_onHover:function(e){
if(!this._showTimer){
var _949=e.target;
this._showTimer=setTimeout(dojo.hitch(this,function(){
this.open(_949);
}),this.showDelay);
}
},_onUnHover:function(e){
if(this._focus){
return;
}
if(this._showTimer){
clearTimeout(this._showTimer);
delete this._showTimer;
}
this.close();
},open:function(_94a){
if(this._showTimer){
clearTimeout(this._showTimer);
delete this._showTimer;
}
dijit.showTooltip(this.label||this.domNode.innerHTML,_94a,this.position,!this.isLeftToRight());
this._connectNode=_94a;
this.onShow(_94a,this.position);
},close:function(){
if(this._connectNode){
dijit.hideTooltip(this._connectNode);
delete this._connectNode;
this.onHide();
}
if(this._showTimer){
clearTimeout(this._showTimer);
delete this._showTimer;
}
},onShow:function(_94b,_94c){
},onHide:function(){
},uninitialize:function(){
this.close();
this.inherited(arguments);
}});
dijit.Tooltip.defaultPosition=["after","before"];
}
if(!dojo._hasResource["dijit.form.ValidationTextBox"]){
dojo._hasResource["dijit.form.ValidationTextBox"]=true;
dojo.provide("dijit.form.ValidationTextBox");
dojo.declare("dijit.form.ValidationTextBox",dijit.form.TextBox,{templateString:dojo.cache("dijit.form","templates/ValidationTextBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\" role=\"presentation\"\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class=\"dijitReset dijitInputInner\" dojoAttachPoint='textbox,focusNode' autocomplete=\"off\"\r\n\t\t\t${!nameAttrSetting} type='${type}'\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitValidationTextBox",required:false,promptMessage:"",invalidMessage:"$_unset_$",missingMessage:"$_unset_$",message:"",constraints:{},regExp:".*",regExpGen:function(_94d){
return this.regExp;
},state:"",tooltipPosition:[],_setValueAttr:function(){
this.inherited(arguments);
this.validate(this._focused);
},validator:function(_94e,_94f){
return (new RegExp("^(?:"+this.regExpGen(_94f)+")"+(this.required?"":"?")+"$",_94f.regExpOptions||"")).test(_94e)&&(!this.required||!this._isEmpty(_94e))&&(this._isEmpty(_94e)||this.parse(_94e,_94f)!==undefined);
},_isValidSubset:function(){
return this.textbox.value.search(this._partialre)==0;
},isValid:function(_950){
var _951=this.validator(this.textbox.value,this.constraints);
if(!_951&&this._isEmpty(this.textbox.value)&&this.required&&_950){
return true;
}
return _951;
},_isEmpty:function(_952){
return (this.trim?/^\s*$/:/^$/).test(_952);
},getErrorMessage:function(_953){
return (this.required&&this._isEmpty(this.textbox.value))?this.missingMessage:this.invalidMessage;
},getPromptMessage:function(_954){
return this.promptMessage;
},_maskValidSubsetError:true,validate:function(_955){
var _956="";
var _957=this.disabled||this.isValid(_955);
if(_957){
this._maskValidSubsetError=true;
}
var _958=this._isEmpty(this.textbox.value);
var _959=!_957&&_955&&this._isValidSubset();
this._set("state",_957?"":(((((!this._hasBeenBlurred||_955)&&_958)||_959)&&this._maskValidSubsetError)?"Incomplete":"Error"));
dijit.setWaiState(this.focusNode,"invalid",_957?"false":"true");
if(this.state=="Error"){
this._maskValidSubsetError=_955&&_959;
_956=this.getErrorMessage(_955);
}else{
if(this.state=="Incomplete"){
_956=this.getPromptMessage(_955);
this._maskValidSubsetError=!this._hasBeenBlurred||_955;
}else{
if(_958&&_955){
_956=this.getPromptMessage(_955);
}
}
}
if(_956&&wm.isDomShowing(this.domNode)){
this.set("message",_956);
}
return _957;
},displayMessage:function(_95a){
dijit.hideTooltip(this.domNode);
if(_95a&&this._focused){
dijit.showTooltip(_95a,this.domNode,this.tooltipPosition,!this.isLeftToRight());
}
},_refreshState:function(){
this.validate(this._focused);
this.inherited(arguments);
},constructor:function(){
this.constraints={};
},_setConstraintsAttr:function(_95b){
if(!_95b.locale&&this.lang){
_95b.locale=this.lang;
}
this._set("constraints",_95b);
this._computePartialRE();
},_computePartialRE:function(){
var p=this.regExpGen(this.constraints);
this.regExp=p;
var _95c="";
if(p!=".*"){
this.regExp.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g,function(re){
switch(re.charAt(0)){
case "{":
case "+":
case "?":
case "*":
case "^":
case "$":
case "|":
case "(":
_95c+=re;
break;
case ")":
_95c+="|$)";
break;
default:
_95c+="(?:"+re+"|$)";
break;
}
});
}
try{
"".search(_95c);
}
catch(e){
_95c=this.regExp;
console.warn("RegExp error in "+this.declaredClass+": "+this.regExp);
}
this._partialre="^(?:"+_95c+")$";
},postMixInProperties:function(){
this.inherited(arguments);
this.messages=dojo.i18n.getLocalization("dijit.form","validate",this.lang);
if(this.invalidMessage=="$_unset_$"){
this.invalidMessage=this.messages.invalidMessage;
}
if(!this.invalidMessage){
this.invalidMessage=this.promptMessage;
}
if(this.missingMessage=="$_unset_$"){
this.missingMessage=this.messages.missingMessage;
}
if(!this.missingMessage){
this.missingMessage=this.invalidMessage;
}
this._setConstraintsAttr(this.constraints);
},_setDisabledAttr:function(_95d){
this.inherited(arguments);
this._refreshState();
},_setRequiredAttr:function(_95e){
this._set("required",_95e);
dijit.setWaiState(this.focusNode,"required",_95e);
this._refreshState();
},_setMessageAttr:function(_95f){
this._set("message",_95f);
this.displayMessage(_95f);
},reset:function(){
this._maskValidSubsetError=true;
this.inherited(arguments);
},_onBlur:function(){
this.displayMessage("");
this.inherited(arguments);
}});
dojo.declare("dijit.form.MappedTextBox",dijit.form.ValidationTextBox,{postMixInProperties:function(){
this.inherited(arguments);
this.nameAttrSetting="";
},serialize:function(val,_960){
return val.toString?val.toString():"";
},toString:function(){
var val=this.filter(this.get("value"));
return val!=null?(typeof val=="string"?val:this.serialize(val,this.constraints)):"";
},validate:function(){
this.valueNode.value=this.toString();
return this.inherited(arguments);
},buildRendering:function(){
this.inherited(arguments);
this.valueNode=dojo.place("<input type='hidden'"+(this.name?" name='"+this.name.replace(/'/g,"&quot;")+"'":"")+"/>",this.textbox,"after");
},reset:function(){
this.valueNode.value="";
this.inherited(arguments);
}});
dojo.declare("dijit.form.RangeBoundTextBox",dijit.form.MappedTextBox,{rangeMessage:"",rangeCheck:function(_961,_962){
return ("min" in _962?(this.compare(_961,_962.min)>=0):true)&&("max" in _962?(this.compare(_961,_962.max)<=0):true);
},isInRange:function(_963){
return this.rangeCheck(this.get("value"),this.constraints);
},_isDefinitelyOutOfRange:function(){
var val=this.get("value");
var _964=false;
var _965=false;
if("min" in this.constraints){
var min=this.constraints.min;
min=this.compare(val,((typeof min=="number")&&min>=0&&val!=0)?0:min);
_964=(typeof min=="number")&&min<0;
}
if("max" in this.constraints){
var max=this.constraints.max;
max=this.compare(val,((typeof max!="number")||max>0)?max:0);
_965=(typeof max=="number")&&max>0;
}
return _964||_965;
},_isValidSubset:function(){
return this.inherited(arguments)&&!this._isDefinitelyOutOfRange();
},isValid:function(_966){
return this.inherited(arguments)&&((this._isEmpty(this.textbox.value)&&!this.required)||this.isInRange(_966));
},getErrorMessage:function(_967){
var v=this.get("value");
if(v!==null&&v!==""&&v!==undefined&&(typeof v!="number"||!isNaN(v))&&!this.isInRange(_967)){
return this.rangeMessage;
}
return this.inherited(arguments);
},postMixInProperties:function(){
this.inherited(arguments);
if(!this.rangeMessage){
this.messages=dojo.i18n.getLocalization("dijit.form","validate",this.lang);
this.rangeMessage=this.messages.rangeMessage;
}
},_setConstraintsAttr:function(_968){
this.inherited(arguments);
if(this.focusNode){
if(this.constraints.min!==undefined){
dijit.setWaiState(this.focusNode,"valuemin",this.constraints.min);
}else{
dijit.removeWaiState(this.focusNode,"valuemin");
}
if(this.constraints.max!==undefined){
dijit.setWaiState(this.focusNode,"valuemax",this.constraints.max);
}else{
dijit.removeWaiState(this.focusNode,"valuemax");
}
}
},_setValueAttr:function(_969,_96a){
dijit.setWaiState(this.focusNode,"valuenow",_969);
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.widget.Editors.dijit"]){
dojo._hasResource["wm.base.widget.Editors.dijit"]=true;
dojo.provide("wm.base.widget.Editors.dijit");
dijit.form._FormWidget.prototype.destroy=function(){
try{
wm.fire(this,"_hideTooltip");
if(this._onChangeHandle){
clearTimeout(this._onChangeHandle);
}
dijit._Widget.prototype.destroy.call(this);
}
catch(e){
}
};
dijit.form.ValidationTextBox.prototype.validate=function(_96b){
var _96c="";
var _96d=this.isValid(_96b);
var _96e=this._isEmpty(this.textbox.value);
this.state=(_96b||_96d||(!this._hasBeenBlurred&&_96e))?"":"Error";
this._setStateClass();
if(_96d){
dijit.setWaiState(this.focusNode,"invalid",_96d?"false":"true");
}
if(_96b&&_96e){
_96c=this.getPromptMessage(true);
}
if(!_96b&&this._hasBeenBlurred){
if(!_96c&&this.state=="Error"){
_96c=this.getErrorMessage(true);
}
}
if(_96b){
var _96f=this.domNode;
while(_96f&&!dojo.hasClass(_96f,"dojoxGridRow")){
_96f=_96f.parentNode;
}
if(this.domNode.parentNode){
this._lastRow=_96f;
this._lastCol=dojo.indexOf(this.domNode.parentNode.parentNode.parentNode.childNodes,this.domNode.parentNode.parentNode);
}else{
wm.job("GridValidationNode",20,this,function(){
if(this.domNode.parentNode){
this._lastRow=_96f;
this._lastCol=dojo.indexOf(this.domNode.parentNode.parentNode.parentNode.childNodes,this.domNode.parentNode.parentNode);
}
});
}
}
this.displayMessage(_96c);
return _96b||_96d;
};
dijit.form.ValidationTextBox.prototype._defaultValidator=dijit.form.ValidationTextBox.prototype.validator;
dijit.form.ValidationTextBox.prototype.validator=function(_970,_971){
var _972=dijit.form.ValidationTextBox.prototype._defaultValidator,_973=_972.call(this,_970,_971);
return _973&&(this.owner&&this.owner.validator?this.owner.validator(_970,_971):true);
};
dijit.form.ValidationTextBox.prototype.displayMessage=function(_974){
if(this._message==_974){
return;
}
this._message=_974;
this._cancelHideTooltip();
dijit.hideTooltip(this.domNode);
if(_974&&this.inGrid&&!this.domNode.parentNode){
wm.job("GridValidationNode",20,dojo.hitch(this,function(){
dijit.showTooltip(_974,this.domNode.parentNode||this._lastRow.firstChild.firstChild.firstChild.childNodes[this._lastCol],this.tooltipPosition);
dijit._hideTooltipHandle=setTimeout(dojo.hitch(this,function(){
wm.fire(this,"_hideTooltip");
}),2500);
}));
}else{
if(_974&&(!this.owner||!this.owner.readonly)){
dijit.showTooltip(_974,this.domNode,this.tooltipPosition);
dijit._hideTooltipHandle=setTimeout(dojo.hitch(this,function(){
wm.fire(this,"_hideTooltip");
}),this.tooltipDisplayTime||2500);
}
}
};
dijit.form.ValidationTextBox.prototype._hideTooltip=function(){
this._cancelHideTooltip();
wm.hideToolTip();
};
dijit.form.ValidationTextBox.prototype._cancelHideTooltip=function(){
clearTimeout(dijit._hideTooltipHandle);
dijit._hideTooltipHandle=null;
};
}
if(!dojo._hasResource["wm.base.widget.Formatters"]){
dojo._hasResource["wm.base.widget.Formatters"]=true;
dojo.provide("wm.base.widget.Formatters");
wm.formatters=["Number","Date","Time","DateTime","Currency","Array","Percent"];
wm.getFormatter=function(_975){
var c=_975;
if(c.slice(0,5)!="wm"){
c="wm."+c+"Formatter";
}
return dojo.getObject(c)||wm.DataFormatter;
};
dojo.declare("wm.DataFormatter",wm.Component,{getColProps:function(){
return {formatter:this.format};
},format:function(_976){
return (_976!==undefined)?_976:"&nbsp;";
},valueChanged:function(_977,_978){
this.inherited(arguments);
if(_977){
wm.fire(this.owner,"formatChanged");
}
}});
dojo.declare("wm.NumberFormatter",wm.DataFormatter,{digits:0,locale:"",round:false,noFormat:false,format:function(_979){
return (_979===undefined)?"-":(this.wmNoFormat?_979:dojo.number.format(_979,this.getFormatProps()));
},getFormatProps:function(){
return {places:Number(this.digits),locale:this.locale,round:this.round?0:-1};
},getColProps:function(){
return {formatter:this.format,getFormatProps:dojo.hitch(this,"getFormatProps"),wmNoFormat:this.noFormat};
}});
dojo.declare("wm.CurrencyFormatter",wm.NumberFormatter,{digits:2,currency:"",format:function(_97a){
return (_97a==undefined)?"-":dojo.currency.format(_97a,this.getFormatProps());
},getFormatProps:function(){
var p=this.inherited(arguments);
p.currency=this.currency=="$"?"USD":this.currency||(this._isDesignLoaded?studio.application.currencyLocale:app.currencyLocale)||"USD";
return p;
}});
dojo.declare("wm.ArrayFormatter",wm.DataFormatter,{separator:",",joinField:"dataValue",format:function(_97b){
var str="";
if(_97b){
if(_97b instanceof wm.Variable){
_97b.forEach(dojo.hitch(this,function(item){
if(str){
str+=this.separator+" ";
}
str+=item.getValue(this.joinField);
}));
}else{
dojo.forEach(_97b,function(item){
if(str){
str+=this.separator+" ";
}
if(item instanceof wm.Variable){
str+=item.getValue(this.joinField);
}else{
str+=item[this.joinField];
}
},this);
}
}
return str;
}});
dojo.declare("wm.DateTimeFormatter",wm.DataFormatter,{useLocalTime:true,formatLength:"medium",_selector:"",datePattern:"",timePattern:"",locale:"",format:function(_97c){
var opts={selector:this._selector,formatLength:this.formatLength,datePattern:this.datePattern,timePattern:this.timePattern,locale:this.locale};
var d=new Date(_97c);
if(!this.useLocalTime){
var _97d=this._selector=="date"?360:0;
d.setHours(0,60*d.getHours()+d.getMinutes()+60*wm.timezoneOffset+_97d);
}
if(isNaN(d.getTime())){
d=new Date(Number(_97c));
}
return (_97c==undefined)||isNaN(d.getTime())?"-":dojo.date.locale.format(d,opts);
},getColProps:function(){
return {_selector:this._selector,formatLength:this.formatLength,datePattern:this.datePattern,timePattern:this.timePattern,locale:this.locale,formatter:this.format};
}});
dojo.declare("wm.DateFormatter",wm.DateTimeFormatter,{_selector:"date",useLocalTime:false});
dojo.declare("wm.TimeFormatter",wm.DateTimeFormatter,{_selector:"time"});
dojo.declare("wm.PercentFormatter",wm.NumberFormatter,{divideBy100:false,getFormatProps:function(){
var p=this.inherited(arguments);
p.type="percent";
return p;
},format:function(_97e){
_97e=Number(_97e);
if(this.divideBy100){
_97e=_97e/100;
}
return this.inherited(arguments,[_97e]);
}});
wm.Object.extendSchema(wm.DataFormatter,{name:{ignore:1},diagnostics:{ignore:1}});
wm.Object.extendSchema(wm.DateTimeFormatter,{formatLength:{options:["short","medium","long","full"]}});
wm.Object.extendSchema(wm.DateFormatter,{timePattern:{ignore:1},useLocalTime:{ignore:0}});
wm.Object.extendSchema(wm.TimeFormatter,{datePattern:{ignore:1}});
}
if(!dojo._hasResource["wm.base.widget.Editors.AbstractEditor"]){
dojo._hasResource["wm.base.widget.Editors.AbstractEditor"]=true;
dojo.provide("wm.base.widget.Editors.AbstractEditor");
wm.propertyIsChanged=function(_97f,_980,_981){
var p=(_981||0).prototype;
return p&&p[_980]!==_97f;
};
wm.defaultEmptyValue=function(_982){
switch(_982){
case "Text":
return "";
case "Number":
return 0;
}
};
dojo.declare("wm.AbstractEditor",wm.Control,{_captionTagName:"div",changeKeycodes:[dojo.keys.ENTER,dojo.keys.NUMPAD_ENTER,dojo.keys.DELETE,dojo.keys.BACKSPACE],classNames:"wmeditor",dataValueBindingEvaluated:"onInsert",formatter:"",height:"24px",width:"300px",enableTouchHeight:true,mobileHeight:"35px",padding:"2",border:"0",editorBorder:true,dataValue:null,displayValue:null,emptyValue:"unset",required:false,readonly:false,ignoreParentReadonly:false,editorNode:null,isDirty:false,_lastValue:"",_lastValueReported:"",caption:"",captionPosition:"left",captionSize:"100px",captionNode:null,captionAlign:"right",singleLine:true,helpText:"",changeOnEnter:false,changeOnKey:false,_updating:0,scrim:true,init:function(){
this._editorConnects=[];
this.inherited(arguments);
},getMinHeightProp:function(){
if(this.minHeight){
return this.minHeight;
}
if(this.captionPosition=="left"||this.captionPosition=="right"||!this.caption){
return 20;
}else{
if(this.captionSize.match(/\%/)){
return 40;
}else{
return 20+parseInt(this.captionSize);
}
}
},getMinWidthProp:function(){
if(this.minWidth){
return this.minWidth;
}
if(this.captionPosition=="top"||this.captionPosition=="bottom"||!this.caption){
return 80;
}else{
if(this.captionSize.match(/\%/)){
return 120;
}else{
return 80+parseInt(this.captionSize);
}
}
},createCaption:function(){
var _983=document.createElement(this._captionTagName);
var s=_983.style;
s.padding="0px";
s.margin="0px";
dojo.addClass(_983,"wmeditor-caption");
dojo.addClass(_983,"wmlabel");
_983.innerHTML=this.caption;
this.domNode.appendChild(_983);
this.captionNode=_983;
this.setCaptionAlign(this.captionAlign);
this.setSingleLine(this.singleLine);
},postInit:function(){
this.createEditor();
this.inherited(arguments);
wm.fire(this,"ownerLoaded");
if(this.captionPosition!="left"){
this.setCaptionPosition(this.captionPosition);
}
this._inPostInit=true;
this.displayValue=this.getDisplayValue();
this.dataValue=this.getDataValue();
this.valueChanged("displayValue",this.displayValue);
this.valueChanged("dataValue",this.dataValue);
delete this._inPostInit;
},setCaption:function(_984){
var _985=this.caption;
this.caption=_984;
if(!this.captionNode){
return;
}
var cap=_984+((this.required&&!this.readonly)?"&nbsp;<span class=\"wmeditor-required\">*</span>":"");
this.captionNode.innerHTML=cap;
if(_985&&!_984||!_985&&_984){
dojo.style(this.captionNode,"display",(_984)?"block":"none");
this.sizeEditor();
}
},setCaptionSize:function(_986){
this.captionSize=_986;
this.sizeEditor();
},setCaptionAlign:function(_987){
this.captionAlign=_987;
if(this.captionNode){
dojo.style(this.captionNode,"textAlign",this.captionAlign);
}
},setCaptionPosition:function(pos){
var _988=this.captionPosition;
this.captionPosition=pos;
if((_988=="left"||_988=="right")&&(pos=="bottom"||pos=="top")){
if(this.height.match(/px/)&&parseInt(this.height)<48){
this.setValue("height","48px");
}
this.captionSize="28px";
}else{
if((pos=="left"||pos=="right")&&(_988=="bottom"||_988=="top")){
if(this.bounds.h>=48){
this.setValue("height",this.constructor.prototype.height);
}
if(this.captionSize.match(/px/)&&parseInt(this.captionSize)<100){
this.captionSize="100px";
}
}
}
this.sizeEditor();
},setCaptionPositionLF:function(_989,_98a){
if(!_98a){
_98a=this.isAncestorInstanceOf(wm.LiveFormBase)||this.isAncestorInstanceOf(wm.FormPanel);
}
if(_98a){
this.setCaptionPosition(_98a.captionPosition);
this.setCaptionSize(_98a.captionSize);
this.setCaptionAlign(_98a.captionAlign);
if(this.constructor.prototype.height==wm.AbstractEditor.prototype.height){
this.setValue("height",_98a.editorHeight);
}
}
this.sizeEditor();
},setSingleLine:function(_98b){
this.singleLine=_98b;
var s=this.captionNode.style;
s.whiteSpace=(_98b)?"nowrap":"normal";
s.overflow="hidden";
s.lineHeight=(this.singleLine)?s.height:"normal";
if(this.readOnlyNode){
this.updateReadOnlyNodeStyle();
}
},setDisabled:function(_98c){
this.inherited(arguments);
if(this.editor){
if(this.editor instanceof wm.Control){
dojo[this._disabled?"addClass":"removeClass"](this.captionNode,"wmeditor-caption-disabled");
}else{
if(!wm.isNode(this.editor)){
if(this._disabled!=this.editor.get("disabled")){
this.editor.set("disabled",Boolean(this._disabled));
dojo[this._disabled?"addClass":"removeClass"](this.captionNode,"wmeditor-caption-disabled");
}
}
}
}
},destroy:function(){
this.destroyEditor();
this.inherited(arguments);
},createHelpNode:function(){
this.helpNode=dojo.create("div",{className:"EditorHelpIcon"},this.domNode);
if(typeof this.helpText=="string"){
if(wm.isMobile){
this._helpTextTouchStartConnect=this.connect(this.helpNode,"ontouchstart",this,function(e){
this._helpTouchPos={x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY};
});
this._helpTextTouchMoveConnect=this.connect(this.helpNode,"ontouchmove",this,function(e){
if(!this._helpTouchPos){
return;
}
if(Math.abs(this._helpTouchPos.x-e.targetTouches[0].clientX)>=5||Math.abs(this._helpTouchPos.y-e.targetTouches[0].clientY)>=5){
delete this._helpTouchPos;
}
});
this._helpTextTouchEndConnect=this.connect(this.helpNode,"ontouchend",this,function(e){
if(!this._helpTouchPos){
return;
}
app.alert(this.helpText);
});
}else{
this._helpTextOverConnect=this.connect(this.helpNode,"onmouseover",this,function(e){
wm.job(this.getRuntimeId()+".helpText",100,dojo.hitch(this,function(){
var _98d=dojo.coords(this.helpNode);
app.createToolTip(this.helpText,null,{mouseX:_98d.x,mouseY:_98d.y+_98d.h});
}));
});
this._helpTextOutConnect=this.connect(this.helpNode,"onmouseout",this,function(){
wm.job(this.getRuntimeId()+".helpText",100,dojo.hitch(this,function(){
if(app.getToolTip()==this.helpText){
app.hideToolTip();
}
}));
});
}
}
this.connect(this.helpNode,"onclick",this,"onHelpClick");
},onHelpClick:function(){
},destroyHelpNode:function(){
dojo.destroy(this.helpNode);
wm.Array.removeElement(this._connections,this._helpTextOverConnect);
wm.Array.removeElement(this._connections,this._helpTextOutConnect);
wm.Array.removeElement(this._connections,this._helpTextTouchStartConnect);
wm.Array.removeElement(this._connections,this._helpTextTouchMoveConnect);
wm.Array.removeElement(this._connections,this._helpTextTouchEndConnect);
dojo.disconnect(this._helpTextOverConnect);
dojo.disconnect(this._helpTextOutConnect);
dojo.disconnect(this._helpTextStartConnect);
dojo.disconnect(this._helpTextMoveConnect);
dojo.disconnect(this._helpTextEndConnect);
},createEditor:function(_98e){
if(!this.captionNode){
this.createCaption();
}
if(this.helpText&&!this.helpNode){
this.createHelpNode();
}
this.destroyEditor();
var n=document.createElement("div");
this.domNode.appendChild(n);
this.startTimerWithName("CreateDijit",this.declaredClass);
this.editor=this._createEditor(n,_98e);
dojo.attr(this.captionNode,"for",this.editor.id);
this.editorNode=wm.isNode(this.editor)?this.editor:this.editor.domNode;
this.editorNode.style.margin="0";
this.editorNode.style.padding="0";
this.stopTimerWithName("CreateDijit",this.declaredClass);
if(this.editor){
if(this._disabled){
this.setDisabled(this.disabled);
}
this.styleEditor();
if(this.validationEnabled()){
this.validatorNode=this._getValidatorNode();
}
this.sizeEditor();
this.connectEditor();
this.setRequired(this.required);
this.setInitialValue();
this.setReadonly(this.readonly);
}
if(this.editor&&this.editor.displayMessage&&this.editor instanceof dijit._WidgetBase){
this.editor.displayMessage=dojo.hitch(this,"_displayMessage");
}
return this.editor;
},_displayMessage:function(_98f){
if(!this.showMessages){
return;
}
var o=dojo.getObject(this.editor.declaredClass);
if(o){
o.prototype.displayMessage.apply(this.editor,arguments);
}
},validationEnabled:function(){
return true;
},_createEditor:function(_990,_991){
return new dijit.form.TextBox(this.getEditorProps(_990,_991));
},destroyEditor:function(){
this.disconnectEditor();
wm.fire(this.editor,"destroy");
this.editor=null;
},styleEditor:function(){
if(this.isRelativePositioned){
if(this.captionNode){
dojo.addClass(this.captionNode,"wmInlineDiv");
}
return;
}
dojo.style(this.editorNode,{position:"absolute"});
if(this.captionNode){
dojo.style(this.captionNode,{position:"absolute"});
}
},sizeEditor:function(){
if(this._cupdating){
return;
}
var e=(this.readonly)?this.readOnlyNode:this.editor;
if(e){
var _992=this.getContentBounds();
var _993=this.captionPosition;
var _994=(_993=="left"||_993=="right")?wm.AbstractEditor.captionPaddingWidth:wm.AbstractEditor.captionPaddingHeight;
var w=_992.w;
var h=_992.h;
var _995;
var _996;
var _997=_992.h;
var _998;
var _999;
var _99a=16;
var _99b=4;
var _99c=Boolean(this.helpText);
if(!this.caption||this.captionSize=="0px"||this.captionSize=="0%"){
_995=0;
_996=w;
_999=h;
}else{
if(_993=="left"||_993=="right"){
if(this.fixedEditorWidth&&_993=="right"){
_996=this.fixedEditorWidth;
_995=w-_996-(this.helpText?_99a+_99b:0);
_99c=false;
}else{
var _99d=this.minEditorWidth||wm.isMobile?32:16;
var _99e=(this.captionSize.match(/px/))?parseInt(this.captionSize):Math.floor(parseInt(this.captionSize)*w/100);
if(w-_99e<(_99d||0)){
_996=_99d;
_995=w-_996-(this.helpText?_99a+_99b:0);
_99c=false;
}else{
_995=_99e;
_996=w-_995;
}
}
_998=(_997)?_997:"";
_999=_998;
}else{
_998=(this.captionSize.match(/px/))?parseInt(this.captionSize):Math.floor(parseInt(this.captionSize)*_997/100);
if(_998>_997){
_998=_997-16;
}
_999=(_997-_998);
_995=(w)?w:"";
_996=_995;
if(this.helpText){
_995-=_99a+_99b;
}
}
}
_995=Math.round(_995);
_996=Math.round(_996);
if(_99c){
if(this.captionPosition=="left"||!this.caption){
_996-=_99a+_99b;
}else{
_995-=_99a+_99b;
}
}
if(this._editorPaddingLeft&&_995){
_996-=this._editorPaddingLeft;
}
if(this._editorPaddingRight&&_995){
_996-=this._editorPaddingRight;
}
var s=this.captionNode.style;
var _99f=(_995-((_993=="right"||_993=="left")?_994:0));
_99f=(_99f)?_99f:0;
if(_99f<0){
_99f=0;
}
var form=wm.FormPanel&&this.isAncestorInstanceOf(wm.FormPanel);
if(!this.maxCaptionWidth&&(!form||!form.autoSizeCaption||form.autoSizeCaption&&this._isMaxEditor===false)){
s.width=_99f+"px";
}else{
s.display="inline-block";
}
s.height=((_998&&_998>0)?_998:0)+"px";
s.lineHeight=(s.lineHeight!="normal")?s.height:"normal";
var _9a0=(_993=="right")?(_992.l+_996+_994):_992.l;
if(_993=="right"&&_99c){
_9a0-=_99a+_99b;
}
s.left=_9a0+"px";
s.top=(_993=="bottom")?(_999+_992.t-_994)+"px":_992.t+"px";
var b={w:_996,h:_999,l:((_993=="left"&&_995)?_995:0)+_992.l,t:((_993=="top"&&_998)?_998:0)+_992.t};
if(!b.w||b.w<0){
b.w=0;
}
if(!b.h||b.h<0){
b.h=0;
}
if(e instanceof wm.Control){
var _9a1=e._cupdating;
e._cupdating=true;
e.setBorder((this.editorBorder)?"1":"0");
e.setBounds(b);
e._cupdating=_9a1;
if(e.invalidCss){
e.render();
}else{
e.renderBounds();
}
e.reflow();
}else{
var _9a2=(e["domNode"])?e.domNode:e;
var s=_9a2.style;
if(this.editorBorder&&b.w&&b.h){
s.borderWidth="1px";
if(!this._editorBackgroundColor){
s.backgroundColor="";
}
s.backgroundImage="";
b.w-=2;
b.h-=2;
if(s.lineHeight!="normal"){
s.lineHeight=(b.h)+"px";
}
}else{
s.borderWidth="0px";
if(!this._editorBackgroundColor){
s.backgroundColor="transparent";
}
s.backgroundImage="none";
if(s.lineHeight!="normal"&&b.h){
s.lineHeight=b.h+"px";
}
}
s.width=b.w+"px";
s.height=b.h+"px";
s.left=b.l+"px";
s.top=b.t+"px";
}
if(e==this.readOnlyNode){
this.updateReadOnlyNodeStyle(b.h);
}
this._editorHeight=b.h;
this._editorWidth=b.w;
}
if(this.helpText&&this.helpNode){
var s=this.helpNode.style;
s.top=(this.caption)?(parseInt(this.captionNode.style.top)+(this.captionPosition=="bottom"?5:0))+"px":b.t+"px";
s.left=(this.getContentBounds().w-16)+"px";
}
},setHelpText:function(_9a3){
var _9a4=this.helpText;
this.helpText=_9a3;
if(_9a3&&!this.helpNode){
this.createHelpNode();
this.sizeEditor();
}else{
if(!_9a3&&this.helpNode){
this.destroyHelpNode();
this.sizeEditor();
}else{
if(_9a3&&!_9a4){
this.sizeEditor();
}
}
}
},updateReadOnlyNodeStyle:function(h){
var s=this.readOnlyNode.style;
var _9a5=this.getReadOnlyNodeOverflow();
if(s.overflow!=_9a5){
s.overflow=_9a5;
}
var _9a6=this.getReadOnlyNodeLineHeight();
if(s.lineHeight!=_9a6){
s.lineHeight=(_9a6=="normal")?_9a6:_9a6+"px";
}
var _9a7=this.getReadOnlyNodeWhiteSpace();
if(s.whiteSpace!=_9a7){
s.whiteSpace=_9a7;
}
var _9a8=this.getReadOnlyNodeWordWrap();
if(s.wordWrap!=_9a8){
s.wordWrap=_9a8;
}
},getReadOnlyNodeLineHeight:function(){
if(this.singleLine){
return parseInt(this.readOnlyNode.style.height)+((this.editorBorder)?2:0);
}else{
return "normal";
}
},getReadOnlyNodeOverflow:function(){
return "hidden";
},getReadOnlyNodeWhiteSpace:function(){
return this.singleLine?"nowrap":"";
},getReadOnlyNodeWordWrap:function(){
return "normal";
},adjustCaptionPositionForMobile:function(){
if(this.isAncestorHidden()){
return;
}
if(this.captionPosition=="left"||this.captionPosition=="right"){
var _9a9=this.getMinWidthProp();
if(_9a9>this.parent.getContentBounds().w){
this._captionPosition=this.captionPosition;
this._captionAlign=this.captionAlign;
this._captionSize=this.captionSize;
this._editorHeight=this.height;
this.captionPosition="top";
this.setCaptionAlign("left");
var _9aa=parseInt(this.height);
this.captionSize="20px";
this.bounds.h=_9aa+20;
this.setBounds(this.bounds);
wm.job(this.parent.getRuntimeId()+".adjustForMobileEditorCaption",1,this.parent,function(){
if(!this.isDestroyed){
this.setBestHeight();
this._heightAdjustedForMobileCaption=true;
if(this.bounds.h>this.parent.bounds.h){
this.setAutoScroll(true);
}
}
});
}
}else{
if(this._captionPosition){
this.captionPosition=this._captionPosition;
var _9ab=this.captionSize;
this.captionSize=this._captionSize;
var _9a9=this.getMinWidthProp(true);
this.captionPosition="top";
this.captionSize=_9ab;
if(_9a9<=this.parent.getContentBounds().w){
this.captionPosition=this._captionPosition;
delete this._captionPosition;
this.setCaptionAlign(this._captionAlign);
delete this._captionAlign;
this.captionSize=this._captionSize;
delete this._captionSize;
this.bounds.h=this._editorHeight;
delete this._editorHeight;
this.setBounds(this.bounds);
wm.job(this.parent.getRuntimeId()+".adjustForMobileEditorCaption",1,this.parent,function(){
if(!this.isDestroyed&&this._heightAdjustedForMobileCaption){
this.setBestHeight();
}
});
}
}
}
},renderBounds:function(){
if(!this._initializing&&wm.device=="phone"&&this.parent.layoutKind=="top-to-bottom"&&!this._percEx.h){
this.adjustCaptionPositionForMobile();
}
this.inherited(arguments);
this.sizeEditor();
},setEditorBorder:function(_9ac){
this.editorBorder=_9ac;
this.sizeEditor();
},addEditorConnect:function(_9ad){
this._editorConnects.push(dojo.connect.apply(dojo,arguments));
},connectEditor:function(){
this.disconnectEditor();
this.addEditorConnect(this.editor,"onChange",this,"changed");
this.addEditorConnect(this.editor,"onBlur",this,"blurred");
this.addEditorConnect(this.editor,"_onFocus",this,"focused");
var _9ae=this.editor.focusNode||this.editor.domNode||this.editor;
this.addEditorConnect(_9ae,"onkeypress",this,"keypressed");
if(_9ae.tagName=="INPUT"){
try{
this.addEditorConnect(_9ae,"oncut",this,"keypressed");
this.addEditorConnect(_9ae,"onpaste",this,"keypressed");
}
catch(e){
}
}
if(this.validationEnabled()){
this.addEditorConnect(this.editor,"validate",this,"editorValidated");
}
},disconnectEditor:function(){
dojo.forEach(this._editorConnects,dojo.disconnect);
this._editorConnects=[];
},invalidate:function(){
delete this._isValid;
},keypressed:function(_9af){
if(_9af.type=="cut"||_9af.type=="paste"||wm.isMobile||_9af.charCode||_9af.keyCode==dojo.keys.BACKSPACE||_9af.keyCode==dojo.keys.DELETE||dojo.indexOf(this.changeKeycodes,_9af.keyCode)!=-1){
this.validate();
this.dokeypress(_9af);
}
},blurred:function(){
this.validate();
this.doOnblur();
},focused:function(){
dojo.publish("wm.AbstractEditor-focused",[this]);
this.doOnfocus();
},doOnblur:function(){
if(!this.disabled){
wm.onidle(this,function(){
this.onblur();
});
}
},onblur:function(){
},doOnfocus:function(){
if(!this.disabled){
wm.onidle(this,function(){
this.onfocus();
});
}
},onfocus:function(){
},changed:function(){
this.validate();
this.doOnchange();
},doOnchange:function(){
if(this.editorChanged()){
var e=this.editor;
if(!this._loading&&!this.isUpdating()&&!this.readonly&&e&&!this.isLoading()){
this.onchange(this.getDisplayValue(),this.getDataValue(),this._inSetDataValue);
}
}
},onchange:function(_9b0,_9b1,_9b2){
},_getValidatorNode:function(){
var n=this.editor&&this.editor instanceof dijit._WidgetBase&&this.editor.domNode.firstChild;
if(!n){
return null;
}
for(var i=0,c,_9b3=n.childNodes;c=_9b3[i];i++){
if(dojo.hasClass(c,"dijitValidationIcon")){
return c;
}
}
},editorValidated:function(){
if(this.validatorNode){
this.validatorNode.style.display=this.editor.state=="Error"?"":"none";
}
},validate:function(){
if(this.validationEnabled()){
this.invalidate();
}
wm.job(this.getRuntimeId()+"_validate",25,dojo.hitch(this,function(){
if(!this.isDestroyed){
if(this.parent){
wm.fire(this.parent,"validate");
}
this.valueChanged("invalid",this.getInvalid());
}
}));
},getEditorProps:function(_9b4,_9b5){
return dojo.mixin({srcNodeRef:_9b4,owner:this,disabled:this.disabled},_9b5||{});
},isValid:function(){
return !this.getInvalid();
},getInvalid:function(){
var _9b6=this.validationEnabled();
if(_9b6&&this.editor&&this.editor.isValid){
if(this._isValid===undefined){
this._isValid=this.editor.isValid();
}
return !(this.readonly||this._isValid);
}else{
if(this.required&&!this.readonly){
var _9b7=this.getDataValue();
if(_9b7===undefined||_9b7===null||_9b7===""){
return true;
}
}
}
},setInvalid:function(_9b8){
if(_9b8===undefined){
_9b8=true;
}
this._isValid=false;
if(this.editor instanceof dijit._WidgetBase){
this.editor.set("state",_9b8?"Error":"");
}
this.editorValidated();
this.valueChanged("invalid",Boolean(_9b8));
},_getReadonlyValue:function(){
return this.getDisplayValue()||"";
},createReadOnlyNode:function(){
var node=dojo.create("div");
dojo.addClass(node,"wmeditor-readonlyNode");
dojo.attr(node,"role","textbox");
dojo.attr(node,"aria-readonly",true);
dojo.attr(node,"aria-labelledby",this.domNode.id);
var _9b9=node.style;
_9b9.lineHeight="normal";
_9b9.position="absolute";
_9b9.whiteSpace=(this.singleLine)?"nowrap":"normal";
return node;
},setReadonly:function(_9ba,_9bb){
var r=this.readonly;
this.readonly=_9ba;
if(r!=this.readonly){
this.setCaption(this.caption);
}
var _9bc=this.domNode;
if(!this.readOnlyNode&&this.readonly){
this.readOnlyNode=this.createReadOnlyNode();
}
if(this.readOnlyNode){
if(this.readonly&&this.readOnlyNode.parentNode!=_9bc){
dojo.place(this.readOnlyNode,_9bc,"last");
}else{
if(!this.readonly&&this.readOnlyNode.parentNode==_9bc){
_9bc.removeChild(this.readOnlyNode);
}
}
}
if(_9bb){
if(this.readonly){
this.editorNode.style.display="none";
}else{
this.editorNode.style.display="block";
}
}else{
if(!this.readonly&&this.editorNode.parentNode!=_9bc){
dojo.place(this.editorNode,_9bc,"last");
}else{
if(this.readonly&&this.editorNode.parentNode==_9bc){
_9bc.removeChild(this.editorNode);
}
}
}
this.invalidCss=true;
this.render();
if(this.readonly){
wm.fire(this.editor,"_hideTooltip");
}
this.updateReadonlyValue();
},updateReadonlyValue:function(_9bd){
if(this.readonly&&this.readOnlyNode){
var _9be;
if(this.$.format&&this.$.format.declaredClass!="wm.DataFormatter"){
_9be=this.$.format.format(_9bd||this.getDataValue());
}else{
if(this.formatter&&dojo.isFunction(this.owner[this.formatter])){
try{
_9be=this.owner[this.formatter](this,_9bd||this.getDataValue());
}
catch(e){
console.error("Formatter error in "+this.toString()+": "+e);
}
}
}
if(_9be===undefined){
_9be=_9bd||this._getReadonlyValue();
}
this.readOnlyNode.innerHTML=_9be;
}
},getDisplayValue:function(){
return this.editor&&this.editor.declaredClass&&this.editor.get&&this.editor.get("displayedValue")?this.editor.get("displayedValue")||"":this.getEditorValue()||"";
},makeEmptyValue:function(){
if(this.emptyValue=="unset"&&this.display){
return wm.defaultEmptyValue(this.display);
}
switch(this.emptyValue){
case "null":
return null;
case "false":
return false;
case "emptyString":
return "";
case "zero":
return 0;
}
},getEditorValue:function(){
var v;
if(this.editor){
v=this.editor.get("value");
}
return (v||v===0)?v:this.makeEmptyValue();
},normalizeDataValue:function(_9bf){
return _9bf;
},setEditorValue:function(_9c0){
if(this.editor){
_9c0=_9c0===undefined?null:_9c0;
_9c0=this.normalizeDataValue(_9c0);
var _9c1=this.editor.get("value");
this.editor.set("value",_9c0,false);
this.editor._lastValueReported=_9c0?_9c0:"";
if(_9c1!=_9c0){
this.changed();
}else{
if((typeof _9c0!="object"||_9c0===null)&&this.dataValue!==_9c0){
this.displayValue=this.getDisplayValue();
this.dataValue=this.getDataValue();
}
}
this.updateReadonlyValue();
}else{
this.dataValue=_9c0;
}
},setDisplayValue:function(_9c2){
this.setEditorValue(_9c2);
},setRequired:function(_9c3){
var _9c4=this.required;
this.required=_9c3;
if(this.editor){
this.editor.required=_9c3;
if(this.required||_9c4){
this.validate();
this.setCaption(this.caption);
}
}
},getRequired:function(){
return this.required;
},beginEditUpdate:function(_9c5){
this._updating++;
},endEditUpdate:function(_9c6){
this._updating--;
},requireChanged:function(){
this.setCaption(this.caption);
},setInitialValue:function(){
this.beginEditUpdate();
try{
this.setEditorValue(wm.propertyIsChanged(this.dataValue,"dataValue",this.constructor)?this.dataValue:this.displayValue);
}
catch(e){
}
this.endEditUpdate();
this.clearDirty(true);
},editorChanged:function(){
var _9c7=this.getDisplayValue();
var _9c8=false;
if(this.displayValue!=_9c7){
this.valueChanged("displayValue",this.displayValue=_9c7);
_9c8=true;
}
var _9c9=this.getDataValue();
if(this.calcIsDirty(_9c9,this._lastValueReported)){
this.valueChanged("dataValue",this.dataValue=_9c9);
_9c8=true;
}else{
this.dataValue=_9c9;
}
if(_9c8){
if(this._inPostInit){
this._lastValue=this.dataValue;
}
this.updateIsDirty();
}
return _9c8;
},calcIsDirty:function(val1,val2){
if(val1===undefined||val1===null){
val1="";
}
if(val2===undefined||val2===null){
val2="";
}
return val1!=val2;
},clearDirty:function(_9ca){
this._lastValueReported=this._lastValue=this.dataValue==null?this.makeEmptyValue():this.dataValue;
this.updateIsDirty();
},updateIsDirty:function(){
var _9cb=this.isDirty;
var _9cc=true;
if(this._initializing){
_9cc=false;
this._lastValueReported=this._lastValue=this.dataValue==null?this.makeEmptyValue():this.dataValue;
}else{
if(!this.calcIsDirty(this.dataValue,this._lastValue)){
_9cc=false;
}else{
if((this.dataValue===""||this.dataValue===null||this.dataValue===undefined)&&(this._lastValue===""||this._lastValue===null||this._lastValue===undefined)){
_9cc=false;
}
}
}
this.valueChanged("isDirty",this.isDirty=_9cc);
if(_9cb!=this.isDirty){
dojo.toggleClass(this.domNode,"isDirty",this.isDirty);
}
if(!app.disableDirtyEditorTracking){
wm.fire(this.parent,"updateIsDirty");
}
},getDataValue:function(){
if(this.isReady()){
return this.getEditorValue();
}else{
if(this.dataValue===null||this.dataValue===undefined||this.dataValue===""){
return this.makeEmptyValue();
}else{
return this.dataValue;
}
}
},setDataValue:function(_9cd){
this._inSetDataValue=true;
if(_9cd===undefined){
_9cd=null;
}
this.setEditorValue(_9cd);
if(_9cd===""||_9cd===null){
this.resetState();
}
if(!this.isUpdating()){
this.clearDirty();
}
delete this._inSetDataValue;
},isUpdating:function(){
return this._updating>0;
},isReady:function(){
return Boolean(this.editor);
},canFocus:function(){
return !this.readonly;
},focus:function(){
wm.fire(this.editor,"focus");
},reset:function(){
this.setDataValue(this._lastValue);
this.resetState();
},resetState:function(){
this.invalidate();
var e=this.editor;
if(e&&e instanceof dijit._WidgetBase){
e._hasBeenBlurred=false;
wm.fire(e,"_hideTooltip");
if(this.validatorNode&&!this.getDisplayValue()){
this.validatorNode.style.display="none";
e.set("state","Normal");
e._setStateClass();
}
}
},clear:function(){
this._lastValue=this.makeEmptyValue();
this.setDataValue(null);
},listOwnerProperties:function(){
var p=dojo.mixin({},wm.Component.prototype.listProperties.apply(this)||{});
for(var i in p){
if(!p[i].isOwnerProperty){
delete p[i];
}
}
return p;
},listProperties:function(){
var p=dojo.mixin({},this.inherited(arguments)||{});
for(var i in p){
if(p[i].isOwnerProperty){
delete p[i];
}
}
return p;
},valueChanged:function(_9ce,_9cf){
if(this._updating&&(_9ce=="dataValue"||_9ce=="isDirty"||_9ce=="displayValue"||_9ce=="invalid")){
return;
}
if(_9ce=="dataValue"){
this._lastValueReported=_9cf;
}
this.inherited(arguments);
},isLoading:function(){
return this._loading;
},dokeypress:function(_9d0){
if(this.changeOnKey||(this.changeOnEnter&&_9d0.keyCode==dojo.keys.ENTER)){
wm.onidle(this,"doChangeOnKey",_9d0);
}
if(_9d0.keyCode==dojo.keys.ENTER){
wm.onidle(this,"onEnterKeyPress",[this]);
}
},doChangeOnKey:function(_9d1){
var e=this.editor;
this.changed();
},setDefaultOnInsert:function(){
if(this.editor&&this.defaultInsert!==undefined){
if(this.$.binding&&this.$.binding.wires.defaultInsert){
this.$.binding.wires.defaultInsert.refreshValue();
}
this.editor.set("value",this.defaultInsert,false);
this.invalidate();
}
},onEnterKeyPress:function(){
},toHtml:function(_9d2){
var _9d3=_9d2-4;
var _9d4="2px 4px 2px 4px";
_9d3-=8;
_9d3-=2;
var _9d5=125;
var _9d6=(_9d3-_9d5<100||this.captionPosition=="top"||this.captionPosition=="bottom");
var _9d7=this.toHtmlStyles();
if(this.caption&&this.captionSize!="0px"&&this.captionSize!="0%"&&!_9d6){
var _9d8=4;
var _9d9=_9d3-_9d5;
return "<div "+_9d7+" class='wmeditor' id='"+this.domNode.id+"' style='margin: "+_9d4+";'><div class='wmeditor-label' style='width:"+(_9d5-_9d8)+"px;padding-right:"+_9d8+"px;display:inline-block;'>"+this.caption+"</div><div class='wmeditor-value' style='display: inline-block;width:"+_9d9+"px'>"+(this.getDisplayValue()||"&nbsp;")+"</div></div>";
}else{
var html=[];
html.push("<div "+_9d7+" class='wmeditor' id='"+this.domNode.id+"' style='margin: "+_9d4+";'>");
if(this.caption&&this.captionSize!="0px"&&this.captionSize!="0%"){
html.push("<div class='wmeditor-label' >"+this.caption+"</div>");
}
html.push("<div class='wmeditor-value'>"+(this.getDisplayValue()||"&nbsp;")+"</div>");
html.push("</div>");
return html.join("\n");
}
}});
wm.AbstractEditor.captionPaddingWidth=8;
wm.AbstractEditor.captionPaddingHeight=2;
dojo.declare("wm.AbstractEditorContainer",wm.AbstractEditor,{containerLayoutKind:"left-to-right",editorBorder:false,_createEditor:function(_9da,_9db){
this.editor=new wm.Container({owner:this,parent:this,name:"editContainer",width:"100%",height:"100%",padding:"0",margin:"0",layoutKind:this.containerLayoutKind,verticalAlign:"top",horizontalAlign:"left"});
return this.editor;
},_onShowParent:function(){
if(this.editor){
this.editor.callOnShowParent();
}
},_onHideParent:function(){
if(this.editor){
this.editor.callOnHideParent();
}
},sizeEditor:function(){
this.inherited(arguments);
this.flow();
},flow:function(){
if(this.editor){
this.editor.flow();
}
},setDisabled:function(_9dc){
wm.Control.prototype.setDisabled.call(this,_9dc);
},focus:function(_9dd){
},blur:function(_9de){
},_getValidatorNode:function(){
return null;
},setEditorValue:function(_9df){
this.dataValue=_9df;
},getEditorValue:function(){
return this.dataValue;
}});
}
if(!dojo._hasResource["dijit.form.SimpleTextarea"]){
dojo._hasResource["dijit.form.SimpleTextarea"]=true;
dojo.provide("dijit.form.SimpleTextarea");
dojo.declare("dijit.form.SimpleTextarea",dijit.form.TextBox,{baseClass:"dijitTextBox dijitTextArea",attributeMap:dojo.delegate(dijit.form._FormValueWidget.prototype.attributeMap,{rows:"textbox",cols:"textbox"}),rows:"3",cols:"20",templateString:"<textarea ${!nameAttrSetting} dojoAttachPoint='focusNode,containerNode,textbox' autocomplete='off'></textarea>",postMixInProperties:function(){
if(!this.value&&this.srcNodeRef){
this.value=this.srcNodeRef.value;
}
this.inherited(arguments);
},buildRendering:function(){
this.inherited(arguments);
if(dojo.isIE&&this.cols){
dojo.addClass(this.textbox,"dijitTextAreaCols");
}
},filter:function(_9e0){
if(_9e0){
_9e0=_9e0.replace(/\r/g,"");
}
return this.inherited(arguments);
},_previousValue:"",_onInput:function(e){
if(this.maxLength){
var _9e1=parseInt(this.maxLength);
var _9e2=this.textbox.value.replace(/\r/g,"");
var _9e3=_9e2.length-_9e1;
if(_9e3>0){
if(e){
dojo.stopEvent(e);
}
var _9e4=this.textbox;
if(_9e4.selectionStart){
var pos=_9e4.selectionStart;
var cr=0;
if(dojo.isOpera){
cr=(this.textbox.value.substring(0,pos).match(/\r/g)||[]).length;
}
this.textbox.value=_9e2.substring(0,pos-_9e3-cr)+_9e2.substring(pos-cr);
_9e4.setSelectionRange(pos-_9e3,pos-_9e3);
}else{
if(dojo.doc.selection){
_9e4.focus();
var _9e5=dojo.doc.selection.createRange();
_9e5.moveStart("character",-_9e3);
_9e5.text="";
_9e5.select();
}
}
}
this._previousValue=this.textbox.value;
}
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.widget.Editors.Text"]){
dojo._hasResource["wm.base.widget.Editors.Text"]=true;
dojo.provide("wm.base.widget.Editors.Text");
dojo.declare("wm.ResizableEditor",wm.AbstractEditor,{maxHeight:96,getReadOnlyNodeLineHeight:function(){
if(this.autoSizeHeight){
return "normal";
}else{
return this.inherited(arguments);
}
},getReadOnlyNodeWhiteSpace:function(){
if(this.autoSizeWidth){
return "nowrap";
}else{
if(this.autoSizeHeight){
return "normal";
}else{
return this.singleLine?"nowrap":"normal";
}
}
},getReadOnlyNodeOverflow:function(){
if(dojo.marginBox(this.readOnlyNode).h<40){
return "hidden";
}
if(this.autoSizeHeight||this.autoSizeWidth){
return (this._autoSizeNeedsOverflow)?"auto":"hidden";
}else{
return "hidden";
}
},updateReadonlyValue:function(_9e6){
this.inherited(arguments);
if(this.readonly&&this.readOnlyNode&&this.readOnlyNode.style.width&&(this.autoSizeHeight||this.autoSizeWidth)){
this.doAutoSize(1,1);
}
},_onShowParent:function(){
if(this._needsAutoSize){
wm.job(this.getRuntimeId()+".autoSize",1,dojo.hitch(this,"doAutoSize"));
}
},doAutoSize:function(_9e7,_9e8){
if(!this.readonly){
return;
}
if(this._doingAutoSize||!this.autoSizeHeight&&!this.autoSizeWidth){
return;
}
if(!_9e8&&!this._needsAutoSize){
return;
}
if(this.isAncestorHidden()){
return;
}
this._doingAutoSize=true;
this._needsAutoSize=false;
var _9e9=this.readOnlyNode.style;
var _9ea=wm.Label.sizingNode;
_9ea.innerHTML=this.readOnlyNode.innerHTML;
_9ea.className=this.readOnlyNode.className;
var s=_9ea.style;
s.position="absolute";
s.paddingRight="5px";
s.paddingTop="5px";
s.lineHeight=_9e9.lineHeight;
s.whiteSpace=_9e9.whiteSpace;
this.domNode.appendChild(_9ea);
if(this.autoSizeHeight&&!this._percEx.h){
s.height="";
s.width=_9e9.width;
var _9eb=_9ea.clientHeight;
var _9ec=_9eb;
if(this.caption){
if(this.captionPosition=="top"||this.captionPosition=="bottom"){
_9ec+=parseInt(this.captionNode.style.height)+wm.AbstractEditor.captionPaddingHeight;
}
}
var _9ed=this.getMinHeightProp();
if(_9ed>_9ec){
_9ec=_9ed;
}
if(this.maxHeight&&this.maxHeight<_9ec&&(dojo.marginBox(this.readOnlyNode).h>40)){
_9ec=this.maxHeight;
_9e9.overflow="auto";
this._autoSizeNeedsOverflow=true;
}else{
_9e9.overflow="hidden";
this._autoSizeNeedsOverflow=false;
}
if(_9e7){
this.setHeight(_9ec+"px");
}else{
this.bounds.h=_9ec;
this.height=_9ec+"px";
}
}else{
if(this.autoSizeWidth&&!this._percEx.w){
var _9ee;
if(this.parent.layoutKind=="left-to-right"){
_9ee=this.parent.layout.getMaxFreeSpace(this.parent.c$,"w",this.parent.bounds.w);
_9ee+=this.bounds.w;
}else{
_9ee=this.parent.getCurrentMaxWidth();
}
s.height=_9e9.height;
s.width="";
var _9ef=_9ea.clientWidth;
var _9f0=_9ef;
if(this.caption){
if(this.captionPosition=="left"||this.captionPosition=="right"){
_9f0+=parseInt(this.captionNode.style.width)+wm.AbstractEditor.captionPaddingWidth;
}
}
if(_9f0>_9ee){
_9f0=_9ee;
_9e9.overflow="auto";
this._autoSizeNeedsOverflow=true;
}else{
_9e9.overflow="hidden";
this._autoSizeNeedsOverflow=false;
}
var _9f1=this.getMinWidthProp();
if(_9f1>_9f0){
_9f0=_9f1;
}
if(_9e7){
this.setWidth(_9f0+"px");
}else{
this.bounds.w=_9f0;
this.width=_9f0+"px";
}
}
}
_9ea.parentNode.removeChild(_9ea);
this.disruptChromeOverflow("readOnlyNode");
this.updateReadOnlyNodeStyle();
this._doingAutoSize=false;
},setAutoSizeWidth:function(_9f2){
this.inherited(arguments);
if(this.readOnlyNode&&this.readonly){
this.updateReadOnlyNodeStyle();
}
},setAutoSizeHeight:function(_9f3){
this.inherited(arguments);
if(this.readOnlyNode&&this.readonly){
this.updateReadOnlyNodeStyle();
}
},setMaxHeight:function(_9f4){
this.inherited(arguments);
if(!this.maxHeight&&this.readOnlyNode){
this.readOnlyNode.style.overflow="hidden";
}
if(this.readOnlyNode){
this.updateReadOnlyNodeStyle();
this.doAutoSize(1,1);
}
},addUserClass:function(_9f5,_9f6){
this.inherited(arguments);
if((this.autoSizeHeight||this.autoSizeWidth)&&this.isDesignLoaded()){
this.doAutoSize(1,1);
}
},getAutoSize:function(_9f7){
return this.autoSizeHeight?"height":this.autoSizeWidth?"width":"none";
},setAutoSize:function(_9f8){
if(_9f8=="none"){
if(this.autoSizeHeight){
this.setAutoSizeHeight(false);
}
if(this.autoSizeWidth){
this.setAutoSizeWidth(false);
}
}else{
if(_9f8=="width"){
if(this.autoSizeHeight){
this.setAutoSizeHeight(false);
}
if(!this.autoSizeWidth){
this.setAutoSizeWidth(true);
}
}else{
if(_9f8=="height"){
if(!this.autoSizeHeight){
this.setAutoSizeHeight(true);
}
if(this.autoSizeWidth){
this.setAutoSizeWidth(false);
}
}
}
}
}});
dojo.declare("wm.Text",wm.ResizableEditor,{selectOnClick:false,resetButton:false,placeHolder:"",changeOnKey:false,changeOnEnter:true,showMessages:true,promptMessage:"",invalidMessage:"",password:false,maxChars:"",regExp:".*",_passwordChar:"&#8226;",tooltipDisplayTime:2000,getEditorProps:function(_9f9,_9fa){
var p=dojo.mixin(this.inherited(arguments),{selectOnClick:this.selectOnClick,promptMessage:this.promptMessage,invalidMessage:this.invalidMessage||"$_unset_$",placeHolder:this.placeHolder,regExp:this.regExp,constraints:{regExpOptions:this.regExpOptions},value:this.displayValue,required:this.required,tooltipDisplayTime:this.tooltipDisplayTime});
if(this.password){
p.type="password";
}
if(this.maxChars){
p.maxLength=this.maxChars;
}
return dojo.mixin(p,_9fa||{});
},_onDijitFocus:function(){
if(this.disabled){
return;
}
var val=this.editor.get("value");
if(val){
var _9fb=this.editor.format(val);
if(_9fb!==undefined){
this.editor.textbox.value=_9fb;
}
}
this.inherited(arguments);
},validationEnabled:function(){
return (this.regExp&&this.regExp!=".*")||this.required;
},setSelectOnClick:function(_9fc){
this.selectOnClick=_9fc;
if(this.editor){
this.editor.attr("selectOnClick",_9fc);
}
},setPlaceHolder:function(_9fd){
this.placeHolder=_9fd;
if(this.editor){
this.editor.attr("placeHolder",_9fd);
}
},setPassword:function(_9fe){
this.password=_9fe;
this.createEditor();
var pos=this.captionPosition;
this.captionPosition="";
this.setCaptionPosition(pos);
},setRegExp:function(_9ff){
this.regExp=_9ff;
if(!this._cupdating){
this.createEditor();
}
},selectText:function(){
dijit.selectInputText(this.editor.focusNode);
},_createEditor:function(_a00,_a01){
var _a02;
if(this.validationEnabled()||this.promptMessage){
_a02=new dijit.form.ValidationTextBox(this.getEditorProps(_a00,_a01));
}else{
_a02=new dijit.form.TextBox(this.getEditorProps(_a00,_a01));
}
if(this.resetButton){
dojo.addClass(this.domNode,"wmreseteditor");
if(wm.isMobile){
this._resetButtonNode=document.createElement("span");
this._resetButtonNode.innerHTML="X";
var s=this._resetButtonNode.style;
s.position="absolute";
s.fontWeight="bold";
s.top="1px";
s.right="1px";
s.width="16px";
s.textShadow="1px 1px #aaa";
}else{
this._resetButtonNode=document.createElement("img");
this._resetButtonNode.src=this._resetButtonUrl||dojo.moduleUrl("lib.images.boolean.Signage")+"Close_gray.png";
var s=this._resetButtonNode.style;
s.position="absolute";
s.width="16px";
s.height="16px";
s.top="1px";
s.right="1px";
}
_a02.domNode.appendChild(this._resetButtonNode);
this._resetButtonConnect=dojo.connect(this._resetButtonNode,"onclick",this,function(){
wm.onidle(this,function(){
this._onResetClick();
this.setDataValue("");
});
});
}
return _a02;
},_onResetClick:function(){
},sizeEditor:function(){
this.inherited(arguments);
if(this._cupdating){
return;
}
if(dojo.isFF||dojo.isIE){
var _a03=dojo.query("input.dijitInputInner",this.domNode)[0];
if(_a03){
_a03.style.height=this.editorNode.style.height;
_a03.style.lineHeight=this.editorNode.style.lineHeight;
}
}
},destroy:function(){
if(this._resetButtonNode){
dojo.destroy(this._resetButtonNode);
}
if(this._resetButtonConnect){
dojo.disconnect(this._resetButtonConnect);
}
this.inherited(arguments);
},validator:function(_a04,_a05){
var l=Number(this.maxChars);
return this.maxChars!==""&&!isNaN(l)?_a04.length<=l:true;
},_getReadonlyValue:function(){
var v=this.inherited(arguments);
if(this.password){
for(var i=0,a=[],l=v.length;i<l;i++){
a.push(this._passwordChar);
}
v=a.join("");
}
return v;
},setResetButton:function(_a06){
if(this._resetButtonConnect){
dojo.disconnect(this._resetButtonConnect);
delete this._resetButtonConnect;
}
this.resetButton=_a06;
dojo[_a06?"addClass":"removeClass"](this.domNode,"wmreseteditor");
this.createEditor();
},getCursorPosition:function(){
var _a07=0;
var ctrl=this.editor?this.editor.focusNode||this.editor:null;
if(document.selection){
this.focus();
var Sel=document.selection.createRange();
Sel.moveStart("character",-ctrl.value.length);
_a07=Sel.text.length;
}else{
if(ctrl.selectionStart||ctrl.selectionStart=="0"){
_a07=ctrl.selectionStart;
}
}
return (_a07);
},getCursorLength:function(){
var _a08=0;
var ctrl=this.editor?this.editor.focusNode||this.editor:null;
if(document.selection){
this.focus();
var Sel=document.selection.createRange();
Sel.moveStart("character",-ctrl.value.length);
_a08=Sel.text.length;
}else{
if(ctrl.selectionStart||ctrl.selectionStart=="0"){
return ctrl.selectionStart-ctrl.selectionEnd;
}
}
},setCursorPosition:function(pos){
var ctrl=this.editor?this.editor.focusNode||this.editor:null;
if(ctrl.setSelectionRange){
this.focus();
ctrl.setSelectionRange(pos,pos);
}else{
if(ctrl.createTextRange){
var _a09=ctrl.createTextRange();
_a09.collapse(true);
_a09.moveEnd("character",pos);
_a09.moveStart("character",pos);
_a09.select();
}
}
},afterPaletteDrop:function(){
this.inherited(arguments);
var _a0a=this.getParentForm();
if(_a0a){
this.emptyValue="emptyString";
}
}});
dojo.declare("wm.LargeTextArea",wm.Text,{_editorPaddingLeft:3,_editorPaddingRight:3,showMessages:false,width:"300px",height:"96px",captionSize:"24px",captionPosition:"top",captionAlign:"left",singleLine:false,changeOnEnter:false,normalizeDataValue:function(_a0b){
if(_a0b===undefined||_a0b===null){
return "";
}else{
return String(_a0b);
}
},_createEditor:function(_a0c,_a0d){
var _a0e=new dijit.form.SimpleTextarea(this.getEditorProps(_a0c,_a0d));
_a0e.domNode.style.lineHeight="normal";
return _a0e;
},validationEnabled:function(){
return false;
},sizeEditor:function(){
this.inherited(arguments);
},setSingleLine:function(_a0f){
this.inherited(arguments);
this.captionNode.style.lineHeight="normal";
},getReadOnlyNodeLineHeight:function(){
return "normal";
},getReadOnlyNodeWhiteSpace:function(){
if(this.autoSizeWidth){
return this.inherited(arguments);
}else{
return "normal";
}
},getReadOnlyNodeOverflow:function(){
if(this.autoSizeWidth||this.autoSizeHeight){
return this.inherited(arguments);
}else{
return "auto";
}
},getMinHeightProp:function(){
return this.minHeight||80;
}});
}
if(!dojo._hasResource["dijit._Container"]){
dojo._hasResource["dijit._Container"]=true;
dojo.provide("dijit._Container");
dojo.declare("dijit._Container",null,{isContainer:true,buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},addChild:function(_a10,_a11){
var _a12=this.containerNode;
if(_a11&&typeof _a11=="number"){
var _a13=this.getChildren();
if(_a13&&_a13.length>=_a11){
_a12=_a13[_a11-1].domNode;
_a11="after";
}
}
dojo.place(_a10.domNode,_a12,_a11);
if(this._started&&!_a10._started){
_a10.startup();
}
},removeChild:function(_a14){
if(typeof _a14=="number"){
_a14=this.getChildren()[_a14];
}
if(_a14){
var node=_a14.domNode;
if(node&&node.parentNode){
node.parentNode.removeChild(node);
}
}
},hasChildren:function(){
return this.getChildren().length>0;
},destroyDescendants:function(_a15){
dojo.forEach(this.getChildren(),function(_a16){
_a16.destroyRecursive(_a15);
});
},_getSiblingOfChild:function(_a17,dir){
var node=_a17.domNode,_a18=(dir>0?"nextSibling":"previousSibling");
do{
node=node[_a18];
}while(node&&(node.nodeType!=1||!dijit.byNode(node)));
return node&&dijit.byNode(node);
},getIndexOfChild:function(_a19){
return dojo.indexOf(this.getChildren(),_a19);
},startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_a1a){
_a1a.startup();
});
this.inherited(arguments);
}});
}
if(!dojo._hasResource["dojo.dnd.Mover"]){
dojo._hasResource["dojo.dnd.Mover"]=true;
dojo.provide("dojo.dnd.Mover");
dojo.declare("dojo.dnd.Mover",null,{constructor:function(node,e,host){
this.node=dojo.byId(node);
var pos=e.touches?e.touches[0]:e;
this.marginBox={l:pos.pageX,t:pos.pageY};
this.mouseButton=e.button;
var h=(this.host=host),d=node.ownerDocument;
this.events=[dojo.connect(d,"onmousemove",this,"onFirstMove"),dojo.connect(d,"ontouchmove",this,"onFirstMove"),dojo.connect(d,"onmousemove",this,"onMouseMove"),dojo.connect(d,"ontouchmove",this,"onMouseMove"),dojo.connect(d,"onmouseup",this,"onMouseUp"),dojo.connect(d,"ontouchend",this,"onMouseUp"),dojo.connect(d,"ondragstart",dojo.stopEvent),dojo.connect(d.body,"onselectstart",dojo.stopEvent)];
if(h&&h.onMoveStart){
h.onMoveStart(this);
}
},onMouseMove:function(e){
dojo.dnd.autoScroll(e);
var m=this.marginBox,pos=e.touches?e.touches[0]:e;
this.host.onMove(this,{l:m.l+pos.pageX,t:m.t+pos.pageY},e);
dojo.stopEvent(e);
},onMouseUp:function(e){
if(dojo.isWebKit&&dojo.isMac&&this.mouseButton==2?e.button==0:this.mouseButton==e.button){
this.destroy();
}
dojo.stopEvent(e);
},onFirstMove:function(e){
var s=this.node.style,l,t,h=this.host;
switch(s.position){
case "relative":
case "absolute":
l=Math.round(parseFloat(s.left))||0;
t=Math.round(parseFloat(s.top))||0;
break;
default:
s.position="absolute";
var m=dojo.marginBox(this.node);
var b=dojo.doc.body;
var bs=dojo.getComputedStyle(b);
var bm=dojo._getMarginBox(b,bs);
var bc=dojo._getContentBox(b,bs);
l=m.l-(bc.l-bm.l);
t=m.t-(bc.t-bm.t);
break;
}
this.marginBox.l=l-this.marginBox.l;
this.marginBox.t=t-this.marginBox.t;
if(h&&h.onFirstMove){
h.onFirstMove(this,e);
}
dojo.disconnect(this.events.shift());
dojo.disconnect(this.events.shift());
},destroy:function(){
dojo.forEach(this.events,dojo.disconnect);
var h=this.host;
if(h&&h.onMoveStop){
h.onMoveStop(this);
}
this.events=this.node=this.host=null;
}});
}
if(!dojo._hasResource["dojo.dnd.Moveable"]){
dojo._hasResource["dojo.dnd.Moveable"]=true;
dojo.provide("dojo.dnd.Moveable");
dojo.declare("dojo.dnd.Moveable",null,{handle:"",delay:0,skip:false,constructor:function(node,_a1b){
this.node=dojo.byId(node);
if(!_a1b){
_a1b={};
}
this.handle=_a1b.handle?dojo.byId(_a1b.handle):null;
if(!this.handle){
this.handle=this.node;
}
this.delay=_a1b.delay>0?_a1b.delay:0;
this.skip=_a1b.skip;
this.mover=_a1b.mover?_a1b.mover:dojo.dnd.Mover;
this.events=[dojo.connect(this.handle,"onmousedown",this,"onMouseDown"),dojo.connect(this.handle,"ontouchstart",this,"onMouseDown"),dojo.connect(this.handle,"ondragstart",this,"onSelectStart"),dojo.connect(this.handle,"onselectstart",this,"onSelectStart")];
},markupFactory:function(_a1c,node){
return new dojo.dnd.Moveable(node,_a1c);
},destroy:function(){
dojo.forEach(this.events,dojo.disconnect);
this.events=this.node=this.handle=null;
},onMouseDown:function(e){
if(this.skip&&dojo.dnd.isFormElement(e)){
return;
}
if(this.delay){
this.events.push(dojo.connect(this.handle,"onmousemove",this,"onMouseMove"),dojo.connect(this.handle,"ontouchmove",this,"onMouseMove"),dojo.connect(this.handle,"onmouseup",this,"onMouseUp"),dojo.connect(this.handle,"ontouchend",this,"onMouseUp"));
var pos=e.touches?e.touches[0]:e;
this._lastX=pos.pageX;
this._lastY=pos.pageY;
}else{
this.onDragDetected(e);
}
dojo.stopEvent(e);
},onMouseMove:function(e){
var pos=e.touches?e.touches[0]:e;
if(Math.abs(pos.pageX-this._lastX)>this.delay||Math.abs(pos.pageY-this._lastY)>this.delay){
this.onMouseUp(e);
this.onDragDetected(e);
}
dojo.stopEvent(e);
},onMouseUp:function(e){
for(var i=0;i<2;++i){
dojo.disconnect(this.events.pop());
}
dojo.stopEvent(e);
},onSelectStart:function(e){
if(!this.skip||!dojo.dnd.isFormElement(e)){
dojo.stopEvent(e);
}
},onDragDetected:function(e){
new this.mover(this.node,e,this);
},onMoveStart:function(_a1d){
dojo.publish("/dnd/move/start",[_a1d]);
dojo.addClass(dojo.body(),"dojoMove");
dojo.addClass(this.node,"dojoMoveItem");
},onMoveStop:function(_a1e){
dojo.publish("/dnd/move/stop",[_a1e]);
dojo.removeClass(dojo.body(),"dojoMove");
dojo.removeClass(this.node,"dojoMoveItem");
},onFirstMove:function(_a1f,e){
},onMove:function(_a20,_a21,e){
this.onMoving(_a20,_a21);
var s=_a20.node.style;
s.left=_a21.l+"px";
s.top=_a21.t+"px";
this.onMoved(_a20,_a21);
},onMoving:function(_a22,_a23){
},onMoved:function(_a24,_a25){
}});
}
if(!dojo._hasResource["dojo.dnd.move"]){
dojo._hasResource["dojo.dnd.move"]=true;
dojo.provide("dojo.dnd.move");
dojo.declare("dojo.dnd.move.constrainedMoveable",dojo.dnd.Moveable,{constraints:function(){
},within:false,markupFactory:function(_a26,node){
return new dojo.dnd.move.constrainedMoveable(node,_a26);
},constructor:function(node,_a27){
if(!_a27){
_a27={};
}
this.constraints=_a27.constraints;
this.within=_a27.within;
},onFirstMove:function(_a28){
var c=this.constraintBox=this.constraints.call(this,_a28);
c.r=c.l+c.w;
c.b=c.t+c.h;
if(this.within){
var mb=dojo._getMarginSize(_a28.node);
c.r-=mb.w;
c.b-=mb.h;
}
},onMove:function(_a29,_a2a){
var c=this.constraintBox,s=_a29.node.style;
this.onMoving(_a29,_a2a);
_a2a.l=_a2a.l<c.l?c.l:c.r<_a2a.l?c.r:_a2a.l;
_a2a.t=_a2a.t<c.t?c.t:c.b<_a2a.t?c.b:_a2a.t;
s.left=_a2a.l+"px";
s.top=_a2a.t+"px";
this.onMoved(_a29,_a2a);
}});
dojo.declare("dojo.dnd.move.boxConstrainedMoveable",dojo.dnd.move.constrainedMoveable,{box:{},markupFactory:function(_a2b,node){
return new dojo.dnd.move.boxConstrainedMoveable(node,_a2b);
},constructor:function(node,_a2c){
var box=_a2c&&_a2c.box;
this.constraints=function(){
return box;
};
}});
dojo.declare("dojo.dnd.move.parentConstrainedMoveable",dojo.dnd.move.constrainedMoveable,{area:"content",markupFactory:function(_a2d,node){
return new dojo.dnd.move.parentConstrainedMoveable(node,_a2d);
},constructor:function(node,_a2e){
var area=_a2e&&_a2e.area;
this.constraints=function(){
var n=this.node.parentNode,s=dojo.getComputedStyle(n),mb=dojo._getMarginBox(n,s);
if(area=="margin"){
return mb;
}
var t=dojo._getMarginExtents(n,s);
mb.l+=t.l,mb.t+=t.t,mb.w-=t.w,mb.h-=t.h;
if(area=="border"){
return mb;
}
t=dojo._getBorderExtents(n,s);
mb.l+=t.l,mb.t+=t.t,mb.w-=t.w,mb.h-=t.h;
if(area=="padding"){
return mb;
}
t=dojo._getPadExtents(n,s);
mb.l+=t.l,mb.t+=t.t,mb.w-=t.w,mb.h-=t.h;
return mb;
};
}});
dojo.dnd.constrainedMover=dojo.dnd.move.constrainedMover;
dojo.dnd.boxConstrainedMover=dojo.dnd.move.boxConstrainedMover;
dojo.dnd.parentConstrainedMover=dojo.dnd.move.parentConstrainedMover;
}
if(!dojo._hasResource["dijit._HasDropDown"]){
dojo._hasResource["dijit._HasDropDown"]=true;
dojo.provide("dijit._HasDropDown");
dojo.declare("dijit._HasDropDown",null,{buttonNodeType:wm.isMobile?"span":"input",_buttonNode:null,_arrowWrapperNode:null,_popupStateNode:null,_aroundNode:null,dropDown:null,autoWidth:true,forceWidth:false,maxHeight:0,dropDownPosition:["below","above"],_stopClickEvents:true,_onDropDownMouseDown:function(e){
if(this.disabled||this.readOnly){
return;
}
if(e instanceof Event){
dojo.stopEvent(e);
}
this._docHandler=this.connect(dojo.doc,"onmouseup","_onDropDownMouseUp");
if(!e.type.ontouchend&&!e.type.mouseup&&this._opened||!this._opened){
this.toggleDropDown();
}
},_onDropDownMouseUp:function(e){
if(e&&this._docHandler){
this.disconnect(this._docHandler);
}
var _a2f=this.dropDown,_a30=false;
if(e&&this._opened){
var c=dojo.position(this._buttonNode,true);
if(!(e.pageX>=c.x&&e.pageX<=c.x+c.w)||!(e.pageY>=c.y&&e.pageY<=c.y+c.h)){
var t=e.target;
while(t&&!_a30){
if(dojo.hasClass(t,"dijitPopup")){
_a30=true;
}else{
t=t.parentNode;
}
}
if(_a30){
t=e.target;
if(_a2f.onItemClick){
var _a31;
while(t&&!(_a31=dijit.byNode(t))){
t=t.parentNode;
}
if(_a31&&_a31.onClick&&_a31.getParent){
_a31.getParent().onItemClick(_a31,e);
}
}
return;
}
}
}
if(this._opened&&_a2f.focus&&_a2f.autoFocus!==false){
window.setTimeout(dojo.hitch(_a2f,"focus"),1);
}
},_onDropDownClick:function(e){
if(this._stopClickEvents){
dojo.stopEvent(e);
}
},buildRendering:function(){
this.inherited(arguments);
this._buttonNode=this._buttonNode||this.focusNode||this.domNode;
this._popupStateNode=this._popupStateNode||this.focusNode||this._buttonNode;
var _a32={"after":this.isLeftToRight()?"Right":"Left","before":this.isLeftToRight()?"Left":"Right","above":"Up","below":"Down","left":"Left","right":"Right"}[this.dropDownPosition[0]]||this.dropDownPosition[0]||"Down";
dojo.addClass(this._arrowWrapperNode||this._buttonNode,"dijit"+_a32+"ArrowButton");
},postCreate:function(){
this.inherited(arguments);
if(!wm||!wm.isMobile){
this.connect(this._buttonNode,"onmousedown","_onDropDownMouseDown");
this.connect(this._buttonNode,"onclick","_onDropDownClick");
}else{
if(wm&&wm.isFakeMobile||navigator.userAgent.match(/(phone|ipad) OS (1|2|3|4)_/i)){
this.connect(this._buttonNode,"onmousedown","touchStart");
this.connect(this._buttonNode,"onmousemove","touchMove");
this.connect(this._buttonNode,"onmouseup","touchEnd");
}else{
this.connect(this._buttonNode,"ontouchstart","touchStart");
this.connect(this._buttonNode,"ontouchmove","touchMove");
this.connect(this._buttonNode,"ontouchend","touchEnd");
}
}
this.connect(this.focusNode,"onkeypress","_onKey");
this.connect(this.focusNode,"onkeyup","_onKeyUp");
},touchStart:function(e){
dojo.stopEvent(e);
if(!this._isTouched){
this._isTouched=true;
this.domNode.style.backgroundColor="black";
this.domNode.style.color="white";
}
},touchMove:function(e){
if(this._isTouched){
delete this._isTouched;
this.domNode.style.backgroundColor="";
this.domNode.style.color="";
}
},touchEnd:function(e){
if(this._isTouched){
if(e instanceof Event){
dojo.stopEvent(e);
}
this.domNode.style.backgroundColor="";
this.domNode.style.color="";
this._onDropDownMouseDown(e||{type:"ontouchend"});
}
},destroy:function(){
if(this.dropDown){
if(!this.dropDown._destroyed){
this.dropDown.destroyRecursive();
}
delete this.dropDown;
}
this.inherited(arguments);
},_onKey:function(e){
if(this.disabled||this.readOnly){
return;
}
var d=this.dropDown,_a33=e.target;
if(d&&this._opened&&d.handleKey){
if(d.handleKey(e)===false){
dojo.stopEvent(e);
return;
}
}
if(d&&this._opened&&e.charOrCode==dojo.keys.ESCAPE){
this.closeDropDown();
dojo.stopEvent(e);
}else{
if(!this._opened&&(e.charOrCode==dojo.keys.DOWN_ARROW||((e.charOrCode==dojo.keys.ENTER||e.charOrCode==" ")&&((_a33.tagName||"").toLowerCase()!=="input"||(_a33.type&&_a33.type.toLowerCase()!=="text"))))){
this._toggleOnKeyUp=true;
dojo.stopEvent(e);
}
}
},_onKeyUp:function(){
if(this._toggleOnKeyUp){
delete this._toggleOnKeyUp;
this.toggleDropDown();
var d=this.dropDown;
if(d&&d.focus){
setTimeout(dojo.hitch(d,"focus"),1);
}
}
},_onBlur:function(){
var _a34=dijit._curFocus&&this.dropDown&&dojo.isDescendant(dijit._curFocus,this.dropDown.domNode);
this.closeDropDown(_a34);
this.inherited(arguments);
},isLoaded:function(){
return true;
},loadDropDown:function(_a35){
_a35();
},toggleDropDown:function(){
if(this.disabled||this.readOnly){
return;
}
if(!this._opened){
if(!this.isLoaded()){
this.loadDropDown(dojo.hitch(this,"openDropDown"));
return;
}else{
this.openDropDown();
}
}else{
this.closeDropDown();
}
},openDropDown:function(){
var _a36=this.dropDown,_a37=_a36.domNode,_a38=this._aroundNode||this.domNode,self=this;
if(!this._preparedNode){
this._preparedNode=true;
if(_a37.style.width){
this._explicitDDWidth=true;
}
if(_a37.style.height){
this._explicitDDHeight=true;
}
}
if(this.maxHeight||this.forceWidth||this.autoWidth){
var _a39={display:"",visibility:"hidden"};
if(!this._explicitDDWidth){
_a39.width="";
}
if(!this._explicitDDHeight){
_a39.height="";
}
dojo.style(_a37,_a39);
var _a3a=this.maxHeight;
if(_a3a==-1){
var _a3b=dojo.window.getBox(),_a3c=dojo.position(_a38,false);
_a3a=Math.floor(Math.max(_a3c.y,_a3b.h-(_a3c.y+_a3c.h)));
}
if(_a36.startup&&!_a36._started){
_a36.startup();
}
dijit.popup.moveOffScreen(_a36);
var mb=dojo._getMarginSize(_a37);
var _a3d=(_a3a&&mb.h>_a3a);
dojo.style(_a37,{overflowX:"hidden",overflowY:_a3d?"auto":"hidden"});
if(_a3d){
mb.h=_a3a;
if("w" in mb){
mb.w+=16;
}
}else{
delete mb.h;
}
if(this.forceWidth){
mb.w=_a38.offsetWidth;
}else{
if(this.autoWidth){
mb.w=Math.max(mb.w,_a38.offsetWidth);
}else{
delete mb.w;
}
}
if(dojo.isFunction(_a36.resize)){
_a36.resize(mb);
}else{
dojo.marginBox(_a37,mb);
}
}
var _a3e=dijit.popup.open({parent:this,popup:_a36,around:_a38,orient:dijit.getPopupAroundAlignment((this.dropDownPosition&&this.dropDownPosition.length)?this.dropDownPosition:["below"],this.isLeftToRight()),onExecute:function(){
self.closeDropDown(true);
},onCancel:function(){
self.closeDropDown(true);
},onClose:function(){
dojo.attr(self._popupStateNode,"popupActive",false);
dojo.removeClass(self._popupStateNode,"dijitHasDropDownOpen");
self._opened=false;
}});
dojo.attr(this._popupStateNode,"popupActive","true");
dojo.addClass(self._popupStateNode,"dijitHasDropDownOpen");
this._opened=true;
return _a3e;
},closeDropDown:function(_a3f){
if(this._opened){
if(_a3f){
this.focus();
}
dijit.popup.close(this.dropDown);
this._opened=false;
}
}});
}
if(!dojo._hasResource["dijit.form.Button"]){
dojo._hasResource["dijit.form.Button"]=true;
dojo.provide("dijit.form.Button");
dojo.declare("dijit.form.Button",dijit.form._FormWidget,{label:"",showLabel:true,iconClass:"",type:"button",baseClass:"dijitButton",templateString:dojo.cache("dijit.form","templates/Button.html","<span class=\"dijit dijitReset dijitInline\"\r\n\t><span class=\"dijitReset dijitInline dijitButtonNode\"\r\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\"\r\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\r\n\t\t\tdojoAttachPoint=\"titleNode,focusNode\"\r\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\r\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\" dojoAttachPoint=\"iconNode\"></span\r\n\t\t\t><span class=\"dijitReset dijitToggleButtonIconChar\">&#x25CF;</span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\r\n\t\t\t\tid=\"${id}_label\"\r\n\t\t\t\tdojoAttachPoint=\"containerNode\"\r\n\t\t\t></span\r\n\t\t></span\r\n\t></span\r\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\r\n\t\tdojoAttachPoint=\"valueNode\"\r\n/></span>\r\n"),attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{value:"valueNode"}),_onClick:function(e){
if(this.disabled){
return false;
}
this._clicked();
return this.onClick(e);
},_onButtonClick:function(e){
if(this._onClick(e)===false){
e.preventDefault();
}else{
if(this.type=="submit"&&!(this.valueNode||this.focusNode).form){
for(var node=this.domNode;node.parentNode;node=node.parentNode){
var _a40=dijit.byNode(node);
if(_a40&&typeof _a40._onSubmit=="function"){
_a40._onSubmit(e);
break;
}
}
}else{
if(this.valueNode){
this.valueNode.click();
e.preventDefault();
}
}
}
},buildRendering:function(){
this.inherited(arguments);
dojo.setSelectable(this.focusNode,false);
},_fillContent:function(_a41){
if(_a41&&(!this.params||!("label" in this.params))){
this.set("label",_a41.innerHTML);
}
},_setShowLabelAttr:function(val){
if(this.containerNode){
dojo.toggleClass(this.containerNode,"dijitDisplayNone",!val);
}
this._set("showLabel",val);
},onClick:function(e){
return true;
},_clicked:function(e){
},setLabel:function(_a42){
dojo.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0");
this.set("label",_a42);
},_setLabelAttr:function(_a43){
this._set("label",_a43);
this.containerNode.innerHTML=_a43;
if(this.showLabel==false&&!this.params.title){
this.titleNode.title=dojo.trim(this.containerNode.innerText||this.containerNode.textContent||"");
}
},_setIconClassAttr:function(val){
var _a44=this.iconClass||"dijitNoIcon",_a45=val||"dijitNoIcon";
dojo.replaceClass(this.iconNode,_a45,_a44);
this._set("iconClass",val);
}});
dojo.declare("dijit.form.DropDownButton",[dijit.form.Button,dijit._Container,dijit._HasDropDown],{baseClass:"dijitDropDownButton",templateString:dojo.cache("dijit.form","templates/DropDownButton.html","<span class=\"dijit dijitReset dijitInline\"\r\n\t><span class='dijitReset dijitInline dijitButtonNode'\r\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\" dojoAttachPoint=\"_buttonNode\"\r\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\r\n\t\t\tdojoAttachPoint=\"focusNode,titleNode,_arrowWrapperNode\"\r\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\r\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\r\n\t\t\t\tdojoAttachPoint=\"iconNode\"\r\n\t\t\t></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\r\n\t\t\t\tdojoAttachPoint=\"containerNode,_popupStateNode\"\r\n\t\t\t\tid=\"${id}_label\"\r\n\t\t\t></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\r\n\t\t></span\r\n\t></span\r\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\r\n\t\tdojoAttachPoint=\"valueNode\"\r\n/></span>\r\n"),_fillContent:function(){
if(this.srcNodeRef){
var _a46=dojo.query("*",this.srcNodeRef);
dijit.form.DropDownButton.superclass._fillContent.call(this,_a46[0]);
this.dropDownContainer=this.srcNodeRef;
}
},startup:function(){
if(this._started){
return;
}
if(!this.dropDown&&this.dropDownContainer){
var _a47=dojo.query("[widgetId]",this.dropDownContainer)[0];
this.dropDown=dijit.byNode(_a47);
delete this.dropDownContainer;
}
if(this.dropDown){
dijit.popup.hide(this.dropDown);
}
this.inherited(arguments);
},isLoaded:function(){
var _a48=this.dropDown;
return (!!_a48&&(!_a48.href||_a48.isLoaded));
},loadDropDown:function(){
var _a49=this.dropDown;
if(!_a49){
return;
}
if(!this.isLoaded()){
var _a4a=dojo.connect(_a49,"onLoad",this,function(){
dojo.disconnect(_a4a);
this.openDropDown();
});
_a49.refresh();
}else{
this.openDropDown();
}
},isFocusable:function(){
return this.inherited(arguments)&&!this._mouseDown;
}});
dojo.declare("dijit.form.ComboButton",dijit.form.DropDownButton,{templateString:dojo.cache("dijit.form","templates/ComboButton.html","<table class=\"dijit dijitReset dijitInline dijitLeft\"\r\n\tcellspacing='0' cellpadding='0' role=\"presentation\"\r\n\t><tbody role=\"presentation\"><tr role=\"presentation\"\r\n\t\t><td class=\"dijitReset dijitStretch dijitButtonNode\" dojoAttachPoint=\"buttonNode\" dojoAttachEvent=\"ondijitclick:_onButtonClick,onkeypress:_onButtonKeyPress\"\r\n\t\t><div id=\"${id}_button\" class=\"dijitReset dijitButtonContents\"\r\n\t\t\tdojoAttachPoint=\"titleNode\"\r\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\r\n\t\t\t><div class=\"dijitReset dijitInline dijitIcon\" dojoAttachPoint=\"iconNode\" role=\"presentation\"></div\r\n\t\t\t><div class=\"dijitReset dijitInline dijitButtonText\" id=\"${id}_label\" dojoAttachPoint=\"containerNode\" role=\"presentation\"></div\r\n\t\t></div\r\n\t\t></td\r\n\t\t><td id=\"${id}_arrow\" class='dijitReset dijitRight dijitButtonNode dijitArrowButton'\r\n\t\t\tdojoAttachPoint=\"_popupStateNode,focusNode,_buttonNode\"\r\n\t\t\tdojoAttachEvent=\"onkeypress:_onArrowKeyPress\"\r\n\t\t\ttitle=\"${optionsTitle}\"\r\n\t\t\trole=\"button\" aria-haspopup=\"true\"\r\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" role=\"presentation\"></div\r\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" role=\"presentation\">&#9660;</div\r\n\t\t></td\r\n\t\t><td style=\"display:none !important;\"\r\n\t\t\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" dojoAttachPoint=\"valueNode\"\r\n\t\t/></td></tr></tbody\r\n></table>\r\n"),attributeMap:dojo.mixin(dojo.clone(dijit.form.Button.prototype.attributeMap),{id:"",tabIndex:["focusNode","titleNode"],title:"titleNode"}),optionsTitle:"",baseClass:"dijitComboButton",cssStateNodes:{"buttonNode":"dijitButtonNode","titleNode":"dijitButtonContents","_popupStateNode":"dijitDownArrowButton"},_focusedNode:null,_onButtonKeyPress:function(evt){
if(evt.charOrCode==dojo.keys[this.isLeftToRight()?"RIGHT_ARROW":"LEFT_ARROW"]){
dijit.focus(this._popupStateNode);
dojo.stopEvent(evt);
}
},_onArrowKeyPress:function(evt){
if(evt.charOrCode==dojo.keys[this.isLeftToRight()?"LEFT_ARROW":"RIGHT_ARROW"]){
dijit.focus(this.titleNode);
dojo.stopEvent(evt);
}
},focus:function(_a4b){
if(!this.disabled){
dijit.focus(_a4b=="start"?this.titleNode:this._popupStateNode);
}
}});
dojo.declare("dijit.form.ToggleButton",dijit.form.Button,{baseClass:"dijitToggleButton",checked:false,attributeMap:dojo.mixin(dojo.clone(dijit.form.Button.prototype.attributeMap),{checked:"focusNode"}),_clicked:function(evt){
this.set("checked",!this.checked);
},_setCheckedAttr:function(_a4c,_a4d){
this._set("checked",_a4c);
dojo.attr(this.focusNode||this.domNode,"checked",_a4c);
dijit.setWaiState(this.focusNode||this.domNode,"pressed",_a4c);
this._handleOnChange(_a4c,_a4d);
},setChecked:function(_a4e){
dojo.deprecated("setChecked("+_a4e+") is deprecated. Use set('checked',"+_a4e+") instead.","","2.0");
this.set("checked",_a4e);
},reset:function(){
this._hasBeenBlurred=false;
this.set("checked",this.params.checked||false);
}});
}
if(!dojo._hasResource["dojo.number"]){
dojo._hasResource["dojo.number"]=true;
dojo.provide("dojo.number");
dojo.getObject("number",true,dojo);
dojo.number.format=function(_a4f,_a50){
_a50=dojo.mixin({},_a50||{});
var _a51=dojo.i18n.normalizeLocale(_a50.locale),_a52=dojo.i18n.getLocalization("dojo.cldr","number",_a51);
_a50.customs=_a52;
var _a53=_a50.pattern||_a52[(_a50.type||"decimal")+"Format"];
if(isNaN(_a4f)||Math.abs(_a4f)==Infinity){
return null;
}
return dojo.number._applyPattern(_a4f,_a53,_a50);
};
dojo.number._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/;
dojo.number._applyPattern=function(_a54,_a55,_a56){
_a56=_a56||{};
var _a57=_a56.customs.group,_a58=_a56.customs.decimal,_a59=_a55.split(";"),_a5a=_a59[0];
_a55=_a59[(_a54<0)?1:0]||("-"+_a5a);
if(_a55.indexOf("%")!=-1){
_a54*=100;
}else{
if(_a55.indexOf("‰")!=-1){
_a54*=1000;
}else{
if(_a55.indexOf("¤")!=-1){
_a57=_a56.customs.currencyGroup||_a57;
_a58=_a56.customs.currencyDecimal||_a58;
_a55=_a55.replace(/\u00a4{1,3}/,function(_a5b){
var prop=["symbol","currency","displayName"][_a5b.length-1];
return _a56[prop]||_a56.currency||"";
});
}else{
if(_a55.indexOf("E")!=-1){
throw new Error("exponential notation not supported");
}
}
}
}
var _a5c=dojo.number._numberPatternRE;
var _a5d=_a5a.match(_a5c);
if(!_a5d){
throw new Error("unable to find a number expression in pattern: "+_a55);
}
if(_a56.fractional===false){
_a56.places=0;
}
return _a55.replace(_a5c,dojo.number._formatAbsolute(_a54,_a5d[0],{decimal:_a58,group:_a57,places:_a56.places,round:_a56.round}));
};
dojo.number.round=function(_a5e,_a5f,_a60){
var _a61=10/(_a60||10);
return (_a61*+_a5e).toFixed(_a5f)/_a61;
};
if((0.9).toFixed()==0){
(function(){
var _a62=dojo.number.round;
dojo.number.round=function(v,p,m){
var d=Math.pow(10,-p||0),a=Math.abs(v);
if(!v||a>=d||a*Math.pow(10,p+1)<5){
d=0;
}
return _a62(v,p,m)+(v>0?d:-d);
};
})();
}
dojo.number._formatAbsolute=function(_a63,_a64,_a65){
_a65=_a65||{};
if(_a65.places===true){
_a65.places=0;
}
if(_a65.places===Infinity){
_a65.places=6;
}
var _a66=_a64.split("."),_a67=typeof _a65.places=="string"&&_a65.places.indexOf(","),_a68=_a65.places;
if(_a67){
_a68=_a65.places.substring(_a67+1);
}else{
if(!(_a68>=0)){
_a68=(_a66[1]||[]).length;
}
}
if(!(_a65.round<0)){
_a63=dojo.number.round(_a63,_a68,_a65.round);
}
var _a69=String(Math.abs(_a63)).split("."),_a6a=_a69[1]||"";
if(_a66[1]||_a65.places){
if(_a67){
_a65.places=_a65.places.substring(0,_a67);
}
var pad=_a65.places!==undefined?_a65.places:(_a66[1]&&_a66[1].lastIndexOf("0")+1);
if(pad>_a6a.length){
_a69[1]=dojo.string.pad(_a6a,pad,"0",true);
}
if(_a68<_a6a.length){
_a69[1]=_a6a.substr(0,_a68);
}
}else{
if(_a69[1]){
_a69.pop();
}
}
var _a6b=_a66[0].replace(",","");
pad=_a6b.indexOf("0");
if(pad!=-1){
pad=_a6b.length-pad;
if(pad>_a69[0].length){
_a69[0]=dojo.string.pad(_a69[0],pad);
}
if(_a6b.indexOf("#")==-1){
_a69[0]=_a69[0].substr(_a69[0].length-pad);
}
}
var _a6c=_a66[0].lastIndexOf(","),_a6d,_a6e;
if(_a6c!=-1){
_a6d=_a66[0].length-_a6c-1;
var _a6f=_a66[0].substr(0,_a6c);
_a6c=_a6f.lastIndexOf(",");
if(_a6c!=-1){
_a6e=_a6f.length-_a6c-1;
}
}
var _a70=[];
for(var _a71=_a69[0];_a71;){
var off=_a71.length-_a6d;
_a70.push((off>0)?_a71.substr(off):_a71);
_a71=(off>0)?_a71.slice(0,off):"";
if(_a6e){
_a6d=_a6e;
delete _a6e;
}
}
_a69[0]=_a70.reverse().join(_a65.group||",");
return _a69.join(_a65.decimal||".");
};
dojo.number.regexp=function(_a72){
return dojo.number._parseInfo(_a72).regexp;
};
dojo.number._parseInfo=function(_a73){
_a73=_a73||{};
var _a74=dojo.i18n.normalizeLocale(_a73.locale),_a75=dojo.i18n.getLocalization("dojo.cldr","number",_a74),_a76=_a73.pattern||_a75[(_a73.type||"decimal")+"Format"],_a77=_a75.group,_a78=_a75.decimal,_a79=1;
if(_a76.indexOf("%")!=-1){
_a79/=100;
}else{
if(_a76.indexOf("‰")!=-1){
_a79/=1000;
}else{
var _a7a=_a76.indexOf("¤")!=-1;
if(_a7a){
_a77=_a75.currencyGroup||_a77;
_a78=_a75.currencyDecimal||_a78;
}
}
}
var _a7b=_a76.split(";");
if(_a7b.length==1){
_a7b.push("-"+_a7b[0]);
}
var re=dojo.regexp.buildGroupRE(_a7b,function(_a7c){
_a7c="(?:"+dojo.regexp.escapeString(_a7c,".")+")";
return _a7c.replace(dojo.number._numberPatternRE,function(_a7d){
var _a7e={signed:false,separator:_a73.strict?_a77:[_a77,""],fractional:_a73.fractional,decimal:_a78,exponent:false},_a7f=_a7d.split("."),_a80=_a73.places;
if(_a7f.length==1&&_a79!=1){
_a7f[1]="###";
}
if(_a7f.length==1||_a80===0){
_a7e.fractional=false;
}else{
if(_a80===undefined){
_a80=_a73.pattern?_a7f[1].lastIndexOf("0")+1:Infinity;
}
if(_a80&&_a73.fractional==undefined){
_a7e.fractional=true;
}
if(!_a73.places&&(_a80<_a7f[1].length)){
_a80+=","+_a7f[1].length;
}
_a7e.places=_a80;
}
var _a81=_a7f[0].split(",");
if(_a81.length>1){
_a7e.groupSize=_a81.pop().length;
if(_a81.length>1){
_a7e.groupSize2=_a81.pop().length;
}
}
return "("+dojo.number._realNumberRegexp(_a7e)+")";
});
},true);
if(_a7a){
re=re.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,function(_a82,_a83,_a84,_a85){
var prop=["symbol","currency","displayName"][_a84.length-1],_a86=dojo.regexp.escapeString(_a73[prop]||_a73.currency||"");
_a83=_a83?"[\\s\\xa0]":"";
_a85=_a85?"[\\s\\xa0]":"";
if(!_a73.strict){
if(_a83){
_a83+="*";
}
if(_a85){
_a85+="*";
}
return "(?:"+_a83+_a86+_a85+")?";
}
return _a83+_a86+_a85;
});
}
return {regexp:re.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:_a77,decimal:_a78,factor:_a79};
};
dojo.number.parse=function(_a87,_a88){
var info=dojo.number._parseInfo(_a88),_a89=(new RegExp("^"+info.regexp+"$")).exec(_a87);
if(!_a89){
return NaN;
}
var _a8a=_a89[1];
if(!_a89[1]){
if(!_a89[2]){
return NaN;
}
_a8a=_a89[2];
info.factor*=-1;
}
_a8a=_a8a.replace(new RegExp("["+info.group+"\\s\\xa0"+"]","g"),"").replace(info.decimal,".");
return _a8a*info.factor;
};
dojo.number._realNumberRegexp=function(_a8b){
_a8b=_a8b||{};
if(!("places" in _a8b)){
_a8b.places=Infinity;
}
if(typeof _a8b.decimal!="string"){
_a8b.decimal=".";
}
if(!("fractional" in _a8b)||/^0/.test(_a8b.places)){
_a8b.fractional=[true,false];
}
if(!("exponent" in _a8b)){
_a8b.exponent=[true,false];
}
if(!("eSigned" in _a8b)){
_a8b.eSigned=[true,false];
}
var _a8c=dojo.number._integerRegexp(_a8b),_a8d=dojo.regexp.buildGroupRE(_a8b.fractional,function(q){
var re="";
if(q&&(_a8b.places!==0)){
re="\\"+_a8b.decimal;
if(_a8b.places==Infinity){
re="(?:"+re+"\\d+)?";
}else{
re+="\\d{"+_a8b.places+"}";
}
}
return re;
},true);
var _a8e=dojo.regexp.buildGroupRE(_a8b.exponent,function(q){
if(q){
return "([eE]"+dojo.number._integerRegexp({signed:_a8b.eSigned})+")";
}
return "";
});
var _a8f=_a8c+_a8d;
if(_a8d){
_a8f="(?:(?:"+_a8f+")|(?:"+_a8d+"))";
}
return _a8f+_a8e;
};
dojo.number._integerRegexp=function(_a90){
_a90=_a90||{};
if(!("signed" in _a90)){
_a90.signed=[true,false];
}
if(!("separator" in _a90)){
_a90.separator="";
}else{
if(!("groupSize" in _a90)){
_a90.groupSize=3;
}
}
var _a91=dojo.regexp.buildGroupRE(_a90.signed,function(q){
return q?"[-+]":"";
},true);
var _a92=dojo.regexp.buildGroupRE(_a90.separator,function(sep){
if(!sep){
return "(?:\\d+)";
}
sep=dojo.regexp.escapeString(sep);
if(sep==" "){
sep="\\s";
}else{
if(sep==" "){
sep="\\s\\xa0";
}
}
var grp=_a90.groupSize,grp2=_a90.groupSize2;
if(grp2){
var _a93="(?:0|[1-9]\\d{0,"+(grp2-1)+"}(?:["+sep+"]\\d{"+grp2+"})*["+sep+"]\\d{"+grp+"})";
return ((grp-grp2)>0)?"(?:"+_a93+"|(?:0|[1-9]\\d{0,"+(grp-1)+"}))":_a93;
}
return "(?:0|[1-9]\\d{0,"+(grp-1)+"}(?:["+sep+"]\\d{"+grp+"})*)";
},true);
return _a91+_a92;
};
}
if(!dojo._hasResource["dijit.form.HorizontalSlider"]){
dojo._hasResource["dijit.form.HorizontalSlider"]=true;
dojo.provide("dijit.form.HorizontalSlider");
dojo.declare("dijit.form.HorizontalSlider",[dijit.form._FormValueWidget,dijit._Container],{templateString:dojo.cache("dijit.form","templates/HorizontalSlider.html","<table class=\"dijit dijitReset dijitSlider dijitSliderH\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\"\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t\t><td dojoAttachPoint=\"topDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH\"></td\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\r\n\t\t\t><div class=\"dijitSliderDecrementIconH\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${!nameAttrSetting}\r\n\t\t\t/><div class=\"dijitReset dijitSliderBarContainerH\" role=\"presentation\" dojoAttachPoint=\"sliderBarContainer\"\r\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"progressBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"\r\n\t\t\t\t\t><div class=\"dijitSliderMoveable dijitSliderMoveableH\"\r\n\t\t\t\t\t\t><div dojoAttachPoint=\"sliderHandle,focusNode\" class=\"dijitSliderImageHandle dijitSliderImageHandleH\" dojoAttachEvent=\"onmousedown:_onHandleClick\" role=\"slider\" valuemin=\"${minimum}\" valuemax=\"${maximum}\"></div\r\n\t\t\t\t\t></div\r\n\t\t\t\t></div\r\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"></div\r\n\t\t\t></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\r\n\t\t\t><div class=\"dijitSliderIncrementIconH\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\r\n\t\t></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t\t><td dojoAttachPoint=\"containerNode,bottomDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH\"></td\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t></tr\r\n></table>\r\n"),value:0,showButtons:true,minimum:0,maximum:100,discreteValues:Infinity,pageIncrement:2,clickSelect:true,slideDuration:dijit.defaultDuration,widgetsInTemplate:true,attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{id:""}),baseClass:"dijitSlider",cssStateNodes:{incrementButton:"dijitSliderIncrementButton",decrementButton:"dijitSliderDecrementButton",focusNode:"dijitSliderThumb"},_mousePixelCoord:"pageX",_pixelCount:"w",_startingPixelCoord:"x",_startingPixelCount:"l",_handleOffsetCoord:"left",_progressPixelSize:"width",dynamicSlider:false,_onKeyUp:function(e){
if(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey){
return;
}
this._setValueAttr(this.value,true);
},_onKeyPress:function(e){
if(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey){
return;
}
switch(e.charOrCode){
case dojo.keys.HOME:
this._setValueAttr(this.minimum,false);
break;
case dojo.keys.END:
this._setValueAttr(this.maximum,false);
break;
case ((this._descending||this.isLeftToRight())?dojo.keys.RIGHT_ARROW:dojo.keys.LEFT_ARROW):
case (this._descending===false?dojo.keys.DOWN_ARROW:dojo.keys.UP_ARROW):
case (this._descending===false?dojo.keys.PAGE_DOWN:dojo.keys.PAGE_UP):
this.increment(e);
break;
case ((this._descending||this.isLeftToRight())?dojo.keys.LEFT_ARROW:dojo.keys.RIGHT_ARROW):
case (this._descending===false?dojo.keys.UP_ARROW:dojo.keys.DOWN_ARROW):
case (this._descending===false?dojo.keys.PAGE_UP:dojo.keys.PAGE_DOWN):
this.decrement(e);
break;
default:
return;
}
dojo.stopEvent(e);
},_onHandleClick:function(e){
if(this.disabled||this.readOnly){
return;
}
if(!dojo.isIE){
dijit.focus(this.sliderHandle);
}
dojo.stopEvent(e);
},_isReversed:function(){
return !this.isLeftToRight();
},_onBarClick:function(e){
if(this.disabled||this.readOnly||!this.clickSelect){
return;
}
dijit.focus(this.sliderHandle);
dojo.stopEvent(e);
var _a94=dojo.position(this.sliderBarContainer,true);
var _a95=e[this._mousePixelCoord]-_a94[this._startingPixelCoord];
this._setPixelValue(this._isReversed()?(_a94[this._pixelCount]-_a95):_a95,_a94[this._pixelCount],true);
this._movable.onMouseDown(e);
},_setPixelValue:function(_a96,_a97,_a98){
if(this.dynamicSlider){
var now=new Date().getTime();
if(!this._dynamicSliderTimestamp||this._dynamicSliderTimestamp+100<now){
_a98=true;
this._dynamicSliderTimestamp=now;
if(this.domNode&&this.domNode.id){
wm.cancelJob(this.domNode.id+"._setPixelValue");
}
}else{
if(this.domNode&&this.domNode.id){
var self=this;
wm.job(this.domNode.id+"._setPixelValue",60,function(){
self._setValueAttr((this.maximum-this.minimum)*_a99/_a9a+this.minimum,true);
});
}
}
}
if(this.disabled||this.readOnly){
return;
}
_a96=_a96<0?0:_a97<_a96?_a97:_a96;
var _a9a=this.discreteValues;
if(_a9a<=1||_a9a==Infinity){
_a9a=_a97;
}
_a9a--;
var _a9b=_a97/_a9a;
var _a99=Math.round(_a96/_a9b);
this._setValueAttr((this.maximum-this.minimum)*_a99/_a9a+this.minimum,_a98);
},_setValueAttr:function(_a9c,_a9d){
this._set("value",_a9c);
this.valueNode.value=_a9c;
dijit.setWaiState(this.focusNode,"valuenow",_a9c);
this.inherited(arguments);
var _a9e=(_a9c-this.minimum)/(this.maximum-this.minimum);
var _a9f=(this._descending===false)?this.remainingBar:this.progressBar;
var _aa0=(this._descending===false)?this.progressBar:this.remainingBar;
if(this._inProgressAnim&&this._inProgressAnim.status!="stopped"){
this._inProgressAnim.stop(true);
}
if(_a9d&&this.slideDuration>0&&_a9f.style[this._progressPixelSize]){
var _aa1=this;
var _aa2={};
var _aa3=parseFloat(_a9f.style[this._progressPixelSize]);
var _aa4=this.slideDuration*(_a9e-_aa3/100);
if(_aa4==0){
return;
}
if(_aa4<0){
_aa4=0-_aa4;
}
_aa2[this._progressPixelSize]={start:_aa3,end:_a9e*100,units:"%"};
this._inProgressAnim=dojo.animateProperty({node:_a9f,duration:_aa4,onAnimate:function(v){
_aa0.style[_aa1._progressPixelSize]=(100-parseFloat(v[_aa1._progressPixelSize]))+"%";
},onEnd:function(){
delete _aa1._inProgressAnim;
},properties:_aa2});
this._inProgressAnim.play();
}else{
_a9f.style[this._progressPixelSize]=(_a9e*100)+"%";
_aa0.style[this._progressPixelSize]=((1-_a9e)*100)+"%";
}
},_bumpValue:function(_aa5,_aa6){
if(this.disabled||this.readOnly){
return;
}
var s=dojo.getComputedStyle(this.sliderBarContainer);
var c=dojo._getContentBox(this.sliderBarContainer,s);
var _aa7=this.discreteValues;
if(_aa7<=1||_aa7==Infinity){
_aa7=c[this._pixelCount];
}
_aa7--;
var _aa8=(this.value-this.minimum)*_aa7/(this.maximum-this.minimum)+_aa5;
if(_aa8<0){
_aa8=0;
}
if(_aa8>_aa7){
_aa8=_aa7;
}
_aa8=_aa8*(this.maximum-this.minimum)/_aa7+this.minimum;
this._setValueAttr(_aa8,_aa6);
},_onClkBumper:function(val){
if(this.disabled||this.readOnly||!this.clickSelect){
return;
}
this._setValueAttr(val,true);
},_onClkIncBumper:function(){
this._onClkBumper(this._descending===false?this.minimum:this.maximum);
},_onClkDecBumper:function(){
this._onClkBumper(this._descending===false?this.maximum:this.minimum);
},decrement:function(e){
this._bumpValue(e.charOrCode==dojo.keys.PAGE_DOWN?-this.pageIncrement:-1);
},increment:function(e){
this._bumpValue(e.charOrCode==dojo.keys.PAGE_UP?this.pageIncrement:1);
},_mouseWheeled:function(evt){
dojo.stopEvent(evt);
var _aa9=!dojo.isMozilla;
var _aaa=evt[(_aa9?"wheelDelta":"detail")]*(_aa9?1:-1);
this._bumpValue(_aaa<0?-1:1,true);
},startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_aab){
if(this[_aab.container]!=this.containerNode){
this[_aab.container].appendChild(_aab.domNode);
}
},this);
this.inherited(arguments);
},_typematicCallback:function(_aac,_aad,e){
if(_aac==-1){
this._setValueAttr(this.value,true);
}else{
this[(_aad==(this._descending?this.incrementButton:this.decrementButton))?"decrement":"increment"](e);
}
},buildRendering:function(){
this.inherited(arguments);
if(this.showButtons){
this.incrementButton.style.display="";
this.decrementButton.style.display="";
}
var _aae=dojo.query("label[for=\""+this.id+"\"]");
if(_aae.length){
_aae[0].id=(this.id+"_label");
dijit.setWaiState(this.focusNode,"labelledby",_aae[0].id);
}
dijit.setWaiState(this.focusNode,"valuemin",this.minimum);
dijit.setWaiState(this.focusNode,"valuemax",this.maximum);
},postCreate:function(){
this.inherited(arguments);
if(this.showButtons){
this._connects.push(dijit.typematic.addMouseListener(this.decrementButton,this,"_typematicCallback",25,500));
this._connects.push(dijit.typematic.addMouseListener(this.incrementButton,this,"_typematicCallback",25,500));
}
this.connect(this.domNode,!dojo.isMozilla?"onmousewheel":"DOMMouseScroll","_mouseWheeled");
var _aaf=dojo.declare(dijit.form._SliderMover,{widget:this});
this._movable=new dojo.dnd.Moveable(this.sliderHandle,{mover:_aaf});
this._layoutHackIE7();
},destroy:function(){
this._movable.destroy();
if(this._inProgressAnim&&this._inProgressAnim.status!="stopped"){
this._inProgressAnim.stop(true);
}
this._supportingWidgets=dijit.findWidgets(this.domNode);
this.inherited(arguments);
}});
dojo.declare("dijit.form._SliderMover",dojo.dnd.Mover,{onMouseMove:function(e){
var _ab0=this.widget;
var _ab1=_ab0._abspos;
if(!_ab1){
_ab1=_ab0._abspos=dojo.position(_ab0.sliderBarContainer,true);
_ab0._setPixelValue_=dojo.hitch(_ab0,"_setPixelValue");
_ab0._isReversed_=_ab0._isReversed();
}
var _ab2=e.touches?e.touches[0]:e,_ab3=_ab2[_ab0._mousePixelCoord]-_ab1[_ab0._startingPixelCoord];
_ab0._setPixelValue_(_ab0._isReversed_?(_ab1[_ab0._pixelCount]-_ab3):_ab3,_ab1[_ab0._pixelCount],false);
},onMouseUp:function(e){
this.inherited(arguments);
this.destroy();
},destroy:function(e){
dojo.dnd.Mover.prototype.destroy.apply(this,arguments);
var _ab4=this.widget;
_ab4._abspos=null;
_ab4._setValueAttr(_ab4.value,true);
}});
}
if(!dojo._hasResource["dijit.form.VerticalSlider"]){
dojo._hasResource["dijit.form.VerticalSlider"]=true;
dojo.provide("dijit.form.VerticalSlider");
dojo.declare("dijit.form.VerticalSlider",dijit.form.HorizontalSlider,{templateString:dojo.cache("dijit.form","templates/VerticalSlider.html","<table class=\"dijit dijitReset dijitSlider dijitSliderV\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\"\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV\"\r\n\t\t\t><div class=\"dijitSliderIncrementIconV\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><center><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderTopBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div></center\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td dojoAttachPoint=\"leftDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationL dijitSliderDecorationV\"></td\r\n\t\t><td class=\"dijitReset dijitSliderDecorationC\" style=\"height:100%;\"\r\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${!nameAttrSetting}\r\n\t\t\t/><center class=\"dijitReset dijitSliderBarContainerV\" role=\"presentation\" dojoAttachPoint=\"sliderBarContainer\"\r\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarV dijitSliderRemainingBar dijitSliderRemainingBarV\" dojoAttachEvent=\"onmousedown:_onBarClick\"><!--#5629--></div\r\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"progressBar\" class=\"dijitSliderBar dijitSliderBarV dijitSliderProgressBar dijitSliderProgressBarV\" dojoAttachEvent=\"onmousedown:_onBarClick\"\r\n\t\t\t\t\t><div class=\"dijitSliderMoveable dijitSliderMoveableV\" style=\"vertical-align:top;\"\r\n\t\t\t\t\t\t><div dojoAttachPoint=\"sliderHandle,focusNode\" class=\"dijitSliderImageHandle dijitSliderImageHandleV\" dojoAttachEvent=\"onmousedown:_onHandleClick\" role=\"slider\" valuemin=\"${minimum}\" valuemax=\"${maximum}\"></div\r\n\t\t\t\t\t></div\r\n\t\t\t\t></div\r\n\t\t\t></center\r\n\t\t></td\r\n\t\t><td dojoAttachPoint=\"containerNode,rightDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationR dijitSliderDecorationV\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><center><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderBottomBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div></center\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV\"\r\n\t\t\t><div class=\"dijitSliderDecrementIconV\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n></table>\r\n"),_mousePixelCoord:"pageY",_pixelCount:"h",_startingPixelCoord:"y",_startingPixelCount:"t",_handleOffsetCoord:"top",_progressPixelSize:"height",_descending:true,_isReversed:function(){
return this._descending;
}});
}
if(!dojo._hasResource["dijit.form._Spinner"]){
dojo._hasResource["dijit.form._Spinner"]=true;
dojo.provide("dijit.form._Spinner");
dojo.declare("dijit.form._Spinner",dijit.form.RangeBoundTextBox,{defaultTimeout:500,minimumTimeout:10,timeoutChangeRate:0.9,smallDelta:1,largeDelta:10,templateString:dojo.cache("dijit.form","templates/Spinner.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\" role=\"presentation\"\r\n\t><div class=\"dijitReset dijitButtonNode dijitSpinnerButtonContainer\"\r\n\t\t><input class=\"dijitReset dijitInputField dijitSpinnerButtonInner\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t/><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton\"\r\n\t\t\tdojoAttachPoint=\"upArrowNode\"\r\n\t\t\t><div class=\"dijitArrowButtonInner\"\r\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9650;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t\t\t${_buttonInputDisabled}\r\n\t\t\t/></div\r\n\t\t></div\r\n\t\t><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton\"\r\n\t\t\tdojoAttachPoint=\"downArrowNode\"\r\n\t\t\t><div class=\"dijitArrowButtonInner\"\r\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9660;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t\t\t${_buttonInputDisabled}\r\n\t\t\t/></div\r\n\t\t></div\r\n\t></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' dojoAttachPoint=\"textbox,focusNode\" type=\"${type}\" dojoAttachEvent=\"onkeypress:_onKeyPress\"\r\n\t\t\trole=\"spinbutton\" autocomplete=\"off\" ${!nameAttrSetting}\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitSpinner",cssStateNodes:{"upArrowNode":"dijitUpArrowButton","downArrowNode":"dijitDownArrowButton"},adjust:function(val,_ab5){
return val;
},_arrowPressed:function(_ab6,_ab7,_ab8){
if(this.disabled||this.readOnly){
return;
}
this._setValueAttr(this.adjust(this.get("value"),_ab7*_ab8),false);
dijit.selectInputText(this.textbox,this.textbox.value.length);
},_arrowReleased:function(node){
this._wheelTimer=null;
if(this.disabled||this.readOnly){
return;
}
},_typematicCallback:function(_ab9,node,evt){
var inc=this.smallDelta;
if(node==this.textbox){
var k=dojo.keys;
var key=evt.charOrCode;
inc=(key==k.PAGE_UP||key==k.PAGE_DOWN)?this.largeDelta:this.smallDelta;
node=(key==k.UP_ARROW||key==k.PAGE_UP)?this.upArrowNode:this.downArrowNode;
}
if(_ab9==-1){
this._arrowReleased(node);
}else{
this._arrowPressed(node,(node==this.upArrowNode)?1:-1,inc);
}
},_wheelTimer:null,_mouseWheeled:function(evt){
dojo.stopEvent(evt);
var _aba=evt.detail?(evt.detail*-1):(evt.wheelDelta/120);
if(_aba!==0){
var node=this[(_aba>0?"upArrowNode":"downArrowNode")];
this._arrowPressed(node,_aba,this.smallDelta);
if(!this._wheelTimer){
clearTimeout(this._wheelTimer);
}
this._wheelTimer=setTimeout(dojo.hitch(this,"_arrowReleased",node),50);
}
},postCreate:function(){
this.inherited(arguments);
this.connect(this.domNode,!dojo.isMozilla?"onmousewheel":"DOMMouseScroll","_mouseWheeled");
this._connects.push(dijit.typematic.addListener(this.upArrowNode,this.textbox,{charOrCode:dojo.keys.UP_ARROW,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout));
this._connects.push(dijit.typematic.addListener(this.downArrowNode,this.textbox,{charOrCode:dojo.keys.DOWN_ARROW,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout));
this._connects.push(dijit.typematic.addListener(this.upArrowNode,this.textbox,{charOrCode:dojo.keys.PAGE_UP,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout));
this._connects.push(dijit.typematic.addListener(this.downArrowNode,this.textbox,{charOrCode:dojo.keys.PAGE_DOWN,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout));
}});
}
if(!dojo._hasResource["dijit.form.NumberTextBox"]){
dojo._hasResource["dijit.form.NumberTextBox"]=true;
dojo.provide("dijit.form.NumberTextBox");
dojo.declare("dijit.form.NumberTextBoxMixin",null,{regExpGen:dojo.number.regexp,value:NaN,editOptions:{pattern:"#.######"},_formatter:dojo.number.format,_setConstraintsAttr:function(_abb){
var _abc=typeof _abb.places=="number"?_abb.places:0;
if(_abc){
_abc++;
}
if(typeof _abb.max!="number"){
_abb.max=9*Math.pow(10,15-_abc);
}
if(typeof _abb.min!="number"){
_abb.min=-9*Math.pow(10,15-_abc);
}
this.inherited(arguments,[_abb]);
if(this.focusNode&&this.focusNode.value&&!isNaN(this.value)){
this.set("value",this.value);
}
},_onFocus:function(){
if(this.disabled){
return;
}
var val=this.get("value");
if(typeof val=="number"&&!isNaN(val)){
var _abd=this.format(val,this.constraints);
if(_abd!==undefined){
this.textbox.value=_abd;
}
}
this.inherited(arguments);
},format:function(_abe,_abf){
var _ac0=String(_abe);
if(typeof _abe!="number"){
return _ac0;
}
if(isNaN(_abe)){
return "";
}
if(!("rangeCheck" in this&&this.rangeCheck(_abe,_abf))&&_abf.exponent!==false&&/\de[-+]?\d/i.test(_ac0)){
return _ac0;
}
if(this.editOptions&&this._focused){
_abf=dojo.mixin({},_abf,this.editOptions);
}
return this._formatter(_abe,_abf);
},_parser:dojo.number.parse,parse:function(_ac1,_ac2){
var v=this._parser(_ac1,dojo.mixin({},_ac2,(this.editOptions&&this._focused)?this.editOptions:{}));
if(this.editOptions&&this._focused&&isNaN(v)){
v=this._parser(_ac1,_ac2);
}
return v;
},_getDisplayedValueAttr:function(){
var v=this.inherited(arguments);
return isNaN(v)?this.textbox.value:v;
},filter:function(_ac3){
return (_ac3===null||_ac3===""||_ac3===undefined)?NaN:this.inherited(arguments);
},serialize:function(_ac4,_ac5){
return (typeof _ac4!="number"||isNaN(_ac4))?"":this.inherited(arguments);
},_setBlurValue:function(){
var val=dojo.hitch(dojo.mixin({},this,{_focused:true}),"get")("value");
this._setValueAttr(val,true);
},_setValueAttr:function(_ac6,_ac7,_ac8){
if(_ac6!==undefined&&_ac8===undefined){
_ac8=String(_ac6);
if(typeof _ac6=="number"){
if(isNaN(_ac6)){
_ac8="";
}else{
if(("rangeCheck" in this&&this.rangeCheck(_ac6,this.constraints))||this.constraints.exponent===false||!/\de[-+]?\d/i.test(_ac8)){
_ac8=undefined;
}
}
}else{
if(!_ac6){
_ac8="";
_ac6=NaN;
}else{
_ac6=undefined;
}
}
}
this.inherited(arguments,[_ac6,_ac7,_ac8]);
},_getValueAttr:function(){
var v=this.inherited(arguments);
if(isNaN(v)&&this.textbox.value!==""){
if(this.constraints.exponent!==false&&/\de[-+]?\d/i.test(this.textbox.value)&&(new RegExp("^"+dojo.number._realNumberRegexp(dojo.mixin({},this.constraints))+"$").test(this.textbox.value))){
var n=Number(this.textbox.value);
return isNaN(n)?undefined:n;
}else{
return undefined;
}
}else{
return v;
}
},isValid:function(_ac9){
if(!this._focused||this._isEmpty(this.textbox.value)){
return this.inherited(arguments);
}else{
var v=this.get("value");
if(!isNaN(v)&&this.rangeCheck(v,this.constraints)){
if(this.constraints.exponent!==false&&/\de[-+]?\d/i.test(this.textbox.value)){
return true;
}else{
return this.inherited(arguments);
}
}else{
return false;
}
}
}});
dojo.declare("dijit.form.NumberTextBox",[dijit.form.RangeBoundTextBox,dijit.form.NumberTextBoxMixin],{baseClass:"dijitTextBox dijitNumberTextBox"});
}
if(!dojo._hasResource["dijit.form.NumberSpinner"]){
dojo._hasResource["dijit.form.NumberSpinner"]=true;
dojo.provide("dijit.form.NumberSpinner");
dojo.declare("dijit.form.NumberSpinner",[dijit.form._Spinner,dijit.form.NumberTextBoxMixin],{adjust:function(val,_aca){
var tc=this.constraints,v=isNaN(val),_acb=!isNaN(tc.max),_acc=!isNaN(tc.min);
if(v&&_aca!=0){
val=(_aca>0)?_acc?tc.min:_acb?tc.max:0:_acb?this.constraints.max:_acc?tc.min:0;
}
var _acd=val+_aca;
if(v||isNaN(_acd)){
return val;
}
if(_acb&&(_acd>tc.max)){
_acd=tc.max;
}
if(_acc&&(_acd<tc.min)){
_acd=tc.min;
}
return _acd;
},_onKeyPress:function(e){
if((e.charOrCode==dojo.keys.HOME||e.charOrCode==dojo.keys.END)&&!(e.ctrlKey||e.altKey||e.metaKey)&&typeof this.get("value")!="undefined"){
var _ace=this.constraints[(e.charOrCode==dojo.keys.HOME?"min":"max")];
if(typeof _ace=="number"){
this._setValueAttr(_ace,false);
}
dojo.stopEvent(e);
}
}});
}
if(!dojo._hasResource["dojo.cldr.monetary"]){
dojo._hasResource["dojo.cldr.monetary"]=true;
dojo.provide("dojo.cldr.monetary");
dojo.getObject("cldr.monetary",true,dojo);
dojo.cldr.monetary.getData=function(code){
var _acf={ADP:0,AFN:0,ALL:0,AMD:0,BHD:3,BIF:0,BYR:0,CLF:0,CLP:0,COP:0,CRC:0,DJF:0,ESP:0,GNF:0,GYD:0,HUF:0,IDR:0,IQD:0,IRR:3,ISK:0,ITL:0,JOD:3,JPY:0,KMF:0,KPW:0,KRW:0,KWD:3,LAK:0,LBP:0,LUF:0,LYD:3,MGA:0,MGF:0,MMK:0,MNT:0,MRO:0,MUR:0,OMR:3,PKR:0,PYG:0,RSD:0,RWF:0,SLL:0,SOS:0,STD:0,SYP:0,TMM:0,TND:3,TRL:0,TZS:0,UGX:0,UZS:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,YER:0,ZMK:0,ZWD:0};
var _ad0={CHF:5};
var _ad1=_acf[code],_ad2=_ad0[code];
if(typeof _ad1=="undefined"){
_ad1=2;
}
if(typeof _ad2=="undefined"){
_ad2=0;
}
return {places:_ad1,round:_ad2};
};
}
if(!dojo._hasResource["dojo.currency"]){
dojo._hasResource["dojo.currency"]=true;
dojo.provide("dojo.currency");
dojo.getObject("currency",true,dojo);
dojo.currency._mixInDefaults=function(_ad3){
_ad3=_ad3||{};
_ad3.type="currency";
var _ad4=dojo.i18n.getLocalization("dojo.cldr","currency",_ad3.locale)||{};
var iso=_ad3.currency;
var data=dojo.cldr.monetary.getData(iso);
dojo.forEach(["displayName","symbol","group","decimal"],function(prop){
data[prop]=_ad4[iso+"_"+prop];
});
data.fractional=[true,false];
return dojo.mixin(data,_ad3);
};
dojo.currency.format=function(_ad5,_ad6){
return dojo.number.format(_ad5,dojo.currency._mixInDefaults(_ad6));
};
dojo.currency.regexp=function(_ad7){
return dojo.number.regexp(dojo.currency._mixInDefaults(_ad7));
};
dojo.currency.parse=function(_ad8,_ad9){
return dojo.number.parse(_ad8,dojo.currency._mixInDefaults(_ad9));
};
}
if(!dojo._hasResource["dijit.form.CurrencyTextBox"]){
dojo._hasResource["dijit.form.CurrencyTextBox"]=true;
dojo.provide("dijit.form.CurrencyTextBox");
dojo.declare("dijit.form.CurrencyTextBox",dijit.form.NumberTextBox,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",regExpGen:function(_ada){
return "("+(this._focused?this.inherited(arguments,[dojo.mixin({},_ada,this.editOptions)])+"|":"")+dojo.currency.regexp(_ada)+")";
},_formatter:dojo.currency.format,_parser:dojo.currency.parse,parse:function(_adb,_adc){
var v=this.inherited(arguments);
if(isNaN(v)&&/\d+/.test(_adb)){
v=dojo.hitch(dojo.mixin({},this,{_parser:dijit.form.NumberTextBox.prototype._parser}),"inherited")(arguments);
}
return v;
},_setConstraintsAttr:function(_add){
if(!_add.currency&&this.currency){
_add.currency=this.currency;
}
this.inherited(arguments,[dojo.currency._mixInDefaults(dojo.mixin(_add,{exponent:false}))]);
}});
}
if(!dojo._hasResource["wm.base.widget.Editors.Number"]){
dojo._hasResource["wm.base.widget.Editors.Number"]=true;
dojo.provide("wm.base.widget.Editors.Number");
dijit.form.NumberTextBox.extend({format:function(_ade,_adf){
var _ae0=String(_ade);
if(typeof _ade!="number"){
return _ae0;
}
if(isNaN(_ade)){
return "";
}
if(!("rangeCheck" in this&&this.rangeCheck(_ade,_adf))&&_adf.exponent!==false&&/de[-+]?d/i.test(_ae0)){
return _ae0;
}
_adf=dojo.mixin({},_adf,this.editOptions);
if(!this._focused){
delete _adf.pattern;
}
return this._formatter(_ade,_adf);
},_refreshState:function(){
var _ae1=this.get("displayedValue");
var _ae2=_ae1.indexOf(".");
if(this.editOptions.places&&this.editOptions.placeWhileTyping&&_ae2!=-1){
var _ae3=_ae1.substr(0,_ae2)+"."+_ae1.substr(_ae2+1,this.editOptions.places);
if(_ae3!=_ae1){
this.focusNode.value=_ae3;
}
}
this.inherited(arguments);
}});
dojo.declare("wm.Number",wm.Text,{spinnerButtons:false,minimum:"",maximum:"",places:"",noFormatting:false,applyPlacesWhileTyping:false,_messages:{rangeMin:"Minimum number must be less than the maximum setting of ${0}.",rangeMax:"Maximum number must be greater than the minimum setting of ${0}."},rangeMessage:"",validationEnabled:function(){
return true;
},connectEditor:function(){
this.inherited(arguments);
if(this.spinnerButtons){
this.addEditorConnect(this.editor,"onClick",this,"changed");
}
},getEditorConstraints:function(){
var _ae4={};
if(!isNaN(parseInt(this.minimum))){
_ae4.min=Number(this.minimum);
}
if(!isNaN(parseInt(this.maximum))){
_ae4.max=Number(this.maximum);
}
return _ae4;
},getEditorProps:function(_ae5,_ae6){
var v=this.displayValue;
var _ae7=this.getEditorConstraints();
var p=dojo.mixin(this.inherited(arguments),{constraints:_ae7,rangeMessage:this.rangeMessage,required:this.required,value:v?Number(v):"",editOptions:dojo.clone(dijit.form.NumberTextBox.prototype.editOptions)},_ae6||{});
if(this.noFormatting){
p._formatter=function(_ae8){
return _ae8;
};
}
var _ae9=this._getPlaces();
if(_ae9!==""){
p.editOptions.places=_ae9;
p.editOptions.placeWhileTyping=this.applyPlacesWhileTyping;
}
return p;
},_getPlaces:function(){
if(this.places===""){
return this.places;
}else{
return Number(this.places);
}
},_createEditor:function(_aea,_aeb){
var e;
if(this.spinnerButtons&&!wm.isMobile){
e=new dijit.form.NumberSpinner(this.getEditorProps(_aea,_aeb));
}else{
e=new dijit.form.NumberTextBox(this.getEditorProps(_aea,_aeb));
}
return e;
},setMaximum:function(_aec){
var v=(_aec==="")?"":Number(_aec);
if(this.minimum===""||this.minimum<v||v===""){
this.maximum=v;
if(this.editor){
this.editor._setConstraintsAttr(this.getEditorConstraints());
this.editor.validate();
}
}else{
if(this.isDesignLoaded()&&!(this.$.binding&&this.$.binding.wires.maximum)){
app.alert(dojo.string.substitute(this._messages.rangeMax,[this.minimum]));
}
}
},setMinimum:function(_aed){
var v=(_aed==="")?"":Number(_aed);
if(this.maximum===""||v<this.maximum||v===""){
this.minimum=v;
if(this.editor){
this.editor._setConstraintsAttr(this.getEditorConstraints());
this.editor.validate();
}
}else{
if(this.isDesignLoaded()&&!(this.$.binding&&this.$.binding.wires.minimum)){
app.alert(dojo.string.substitute(this._messages.rangeMin,[this.maximum]));
}
}
},_getReadonlyValue:function(){
return dojo.number.format(this.getDataValue(),this.getFormatProps());
},getFormatProps:function(){
var _aee={};
if(this.places&&this.places!=""){
_aee.places=parseInt(this.places);
}
return _aee;
},setSpinnerButtons:function(_aef){
if(this.spinnerButtons!=_aef){
this.spinnerButtons=_aef;
this.createEditor();
}
},calcIsDirty:function(a,b){
if(a===0&&b===""||a===""&&b===0){
return false;
}
return a!==b;
}});
dojo.declare("wm.Currency",wm.Number,{currency:"",getEditorProps:function(_af0,_af1){
var prop=this.inherited(arguments);
if(prop.constraints){
delete prop.constraints.pattern;
}
return dojo.mixin(prop,{currency:this.currency||(this._isDesignLoaded?studio.application.currencyLocale:app.currencyLocale)||"USD"},_af1||{});
},_createEditor:function(_af2,_af3){
return new dijit.form.CurrencyTextBox(this.getEditorProps(_af2,_af3));
},_getReadonlyValue:function(){
return dojo.currency.format(this.dataValue,{currency:this.currency||(this._isDesignLoaded?studio.application.currencyLocale:app.currencyLocale)||"USD",places:parseInt(this.places)});
},setEditorValue:function(_af4){
var v=_af4;
if(this.editor){
v=dojo.currency.parse(dojo.currency.format(String(v).replace(/[^0-9\-\.]/g,""),this.editor.constraints),this.editor.constraints);
}
wm.AbstractEditor.prototype.setEditorValue.call(this,v);
},getDataValue:function(){
return this.dataValue;
},editorChanged:function(){
var _af5=this.dataValue;
this.dataValue=this.getEditorValue();
var _af6=this.displayValue;
this.displayValue=this._getReadonlyValue();
var _af7=false;
if(_af5!=this._lastValue){
this.valueChanged("dataValue",this.dataValue);
_af7=true;
}
if(_af6!=this.displayValue){
this.valueChanged("displayValue",this.displayValue);
_af7=true;
}
if(_af7){
if(this._inPostInit){
this._lastValue=this.dataValue;
}
this.updateIsDirty();
}
return _af7;
},setCurrency:function(_af8){
this.currency=_af8;
this.createEditor();
}});
}
if(!dojo._hasResource["dijit.form.ToggleButton"]){
dojo._hasResource["dijit.form.ToggleButton"]=true;
dojo.provide("dijit.form.ToggleButton");
}
if(!dojo._hasResource["dijit.form.CheckBox"]){
dojo._hasResource["dijit.form.CheckBox"]=true;
dojo.provide("dijit.form.CheckBox");
dojo.declare("dijit.form.CheckBox",dijit.form.ToggleButton,{templateString:dojo.cache("dijit.form","templates/CheckBox.html","<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\r\n\t><input\r\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\r\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\r\n\t\tdojoAttachPoint=\"focusNode\"\r\n\t \tdojoAttachEvent=\"onclick:_onClick\"\r\n/></div>\r\n"),baseClass:"dijitCheckBox",type:"checkbox",value:"on",readOnly:false,attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{readOnly:"focusNode"}),_setReadOnlyAttr:function(_af9){
this._set("readOnly",_af9);
dojo.attr(this.focusNode,"readOnly",_af9);
dijit.setWaiState(this.focusNode,"readonly",_af9);
},_setValueAttr:function(_afa,_afb){
if(typeof _afa=="string"){
this._set("value",_afa);
dojo.attr(this.focusNode,"value",_afa);
_afa=true;
}
if(this._created){
this.set("checked",_afa,_afb);
}
},_getValueAttr:function(){
return (this.checked?this.value:false);
},_setLabelAttr:undefined,postMixInProperties:function(){
if(this.value==""){
this.value="on";
}
this.checkedAttrSetting=this.checked?"checked":"";
this.inherited(arguments);
},_fillContent:function(_afc){
},reset:function(){
this._hasBeenBlurred=false;
this.set("checked",this.params.checked||false);
this._set("value",this.params.value||"on");
dojo.attr(this.focusNode,"value",this.value);
},_onFocus:function(){
if(this.id){
dojo.query("label[for='"+this.id+"']").addClass("dijitFocusedLabel");
}
this.inherited(arguments);
},_onBlur:function(){
if(this.id){
dojo.query("label[for='"+this.id+"']").removeClass("dijitFocusedLabel");
}
this.inherited(arguments);
},_onClick:function(e){
if(this.readOnly){
dojo.stopEvent(e);
return false;
}
return this.inherited(arguments);
}});
dojo.declare("dijit.form.RadioButton",dijit.form.CheckBox,{type:"radio",baseClass:"dijitRadio",_setCheckedAttr:function(_afd){
this.inherited(arguments);
if(!this._created){
return;
}
if(_afd){
var _afe=this;
dojo.query("INPUT[type=radio]",this.focusNode.form||dojo.doc).forEach(function(_aff){
if(_aff.name==_afe.name&&_aff!=_afe.focusNode&&_aff.form==_afe.focusNode.form){
var _b00=dijit.getEnclosingWidget(_aff);
if(_b00&&_b00.checked){
_b00.set("checked",false);
}
}
});
}
},_clicked:function(e){
if(!this.checked){
this.set("checked",true);
}
}});
}
if(!dojo._hasResource["wm.base.widget.Editors.Checkbox"]){
dojo._hasResource["wm.base.widget.Editors.Checkbox"]=true;
dojo.provide("wm.base.widget.Editors.Checkbox");
dojo.declare("wm.Checkbox",wm.AbstractEditor,{_captionTagName:"label",classNames:"wmeditor wmeditor-cbeditor",width:"180px",dataType:"boolean",startChecked:false,checkedValue:true,fixedEditorWidth:wm.isMobile?32:16,touchStart:function(){
if(this._disabled){
return;
}
this._touched=true;
this.editorNode.style.backgroundColor="black";
if(this.getChecked()){
this.editorNode.style.color="white";
}
wm.job(this.getRuntimeId()+"."+".touch",app.touchToClickDelay,dojo.hitch(this,"touchEnd"));
},touchMove:function(){
if(this._touched){
wm.cancelJob(this.getRuntimeId()+"."+".touch");
this.editorNode.style.backgroundColor="";
this.editorNode.style.color="";
this._touched=false;
}
},touchEnd:function(evt){
if(this._touched){
wm.cancelJob(this.getRuntimeId()+"."+".touch");
this.editorNode.style.backgroundColor="";
this.editorNode.style.color="";
this.setChecked(!this.getChecked(),true);
this._touched=false;
}
},_createEditor:function(_b01,_b02){
var e=new dijit.form.CheckBox(this.getEditorProps(_b01,_b02));
if(wm.isMobile||this._isDesignLoaded&&studio.currentDeviceType!="desktop"){
e._connects.forEach(function(c){
dojo.disconnect(c[0]);
});
e._connects=[];
var a=document.createElement("div");
a.className="wmcheckbox_x";
a.innerHTML="X";
e.domNode.appendChild(a);
dojo.connect(this.domNode,wm.isFakeMobile?"onmousedown":"ontouchstart",this,"touchStart");
dojo.connect(this.domNode,wm.isFakeMobile?"onmousemove":"ontouchmove",this,"touchMove");
dojo.connect(this.domNode,wm.isFakeMobile?"onmouseup":"ontouchend",this,"touchEnd");
}
return e;
},setRequired:function(){
},connectEditor:function(){
this.inherited(arguments);
},sizeEditor:function(){
if(this._cupdating){
return;
}
this.inherited(arguments);
var node=this.editorNode;
var size=wm.isMobile||this._isDesignLoaded&&studio.currentDeviceType!="desktop"?32:16;
node.style.width=size+"px";
node.style.height=size+"px";
var _b03=parseInt(node.style.lineHeight);
node.style.marginTop=(Math.floor(_b03-size)/2)+"px";
},styleEditor:function(){
this.inherited(arguments);
var n=this.captionNode;
if(n){
dojo.setSelectable(n,false);
}
},render:function(){
this.inherited(arguments);
this.domNode.style.textAlign=(this.captionPosition=="right")?"right":"";
},setInitialValue:function(){
this.beginEditUpdate();
if(this.startChecked&&!this._setEditorValueCalled||Boolean(this.dataValue)){
this.setChecked(true);
}
this.endEditUpdate();
},editorChanged:function(){
if(this.inherited(arguments)){
this.valueChanged("checked",this.getChecked());
return true;
}
return false;
},changed:function(){
if(this.editor){
this.editor._lastValueReported=this.getChecked();
}
this.inherited(arguments);
this.valueChanged("checked",this.getChecked());
},getChecked:function(){
if(this.editor){
return Boolean(this.editor.checked);
}else{
return Boolean(this.dataValue);
}
},setChecked:function(_b04,_b05){
if(!_b05){
this._inSetDataValue=true;
}
try{
this.editor.set("checked",_b04,false);
if(!this._cupdating){
this.changed();
}
this._lastValue=this.getEditorValue();
}
catch(e){
}
delete this._inSetDataValue;
},getDisplayValue:function(){
return this.getDataValue();
},setDisplayValue:function(_b06){
},getEditorValue:function(){
var c=this.editor&&this.editor.checked;
var v=this.checkedValue;
if(v===undefined){
v=this.getTypedValue(1);
}else{
v=this.getTypedValue(v);
}
return c?v:this.makeEmptyValue();
},makeEmptyValue:function(){
return this.getTypedValue(this.inherited(arguments));
},getTypedValue:function(_b07){
var v=_b07;
switch(this.dataType){
case "string":
if(v===false){
v="false";
}else{
if(v===0){
v="0";
}else{
if(!v){
v="";
}else{
v=String(v);
}
}
}
return v;
case "number":
var n=Number(v);
return isNaN(n)?Number(Boolean(v)):n;
default:
return Boolean(v);
}
},setEditorValue:function(_b08){
this._setEditorValueCalled=true;
if(this.editor){
var _b09=this.getChecked();
this.editor.set("checked",Boolean(_b08),false);
if(_b09!=Boolean(_b08)){
this.changed();
}
}
},updateReadonlyValue:function(){
},setStartChecked:function(_b0a){
this.startChecked=_b0a;
this.createEditor();
},set_startChecked:function(_b0b){
this.dataValue=Boolean(_b0b);
this.setStartChecked(_b0b);
},setDataType:function(_b0c){
this.dataType=_b0c;
if(_b0c=="boolean"){
this.displayValue=true;
}
switch(_b0c){
case "string":
break;
case "number":
if(typeof this.checkedValue=="number"){
}else{
if(String(this.checkedValue).match(/^[0-9.]+$/)){
}else{
app.toastWarning(studio.getDictionaryItem("wm.Checkbox.TOAST_WARN_CHECKED_VALUE_NOT_A_NUMBER"));
}
}
break;
case "boolean":
if(typeof this.checkedValue=="boolean"){
}else{
if(this.checkedValue=="true"){
this.checkedValue=true;
}else{
if(this.checkedValue=="false"){
this.checkedValue=false;
}else{
app.toastWarning(studio.getDictionaryItem("wm.Checkbox.TOAST_WARN_CHECKED_VALUE_NOT_A_BOOLEAN"));
}
}
}
break;
}
},setDisabled:function(_b0d){
this.inherited(arguments);
if(!this.editor){
return;
}
this.editor.set("disabled",this.readonly||this._disabled);
},setReadonly:function(_b0e){
this.readonly=_b0e;
if(!this.editor){
return;
}
if(!this.readOnlyNode){
this.readOnlyNode=this.editor;
}
this.editor.set("disabled",this.readonly||this._disabled);
},getMinWidthProp:function(){
if(this.minWidth){
return this.minWidth;
}
var _b0f=wm.isMobile||this._isDesignLoaded&&studio.currentDeviceType!="desktop"?32:16;
var _b10=64;
if(this.captionPosition=="top"||this.captionPosition=="bottom"||!this.caption){
return 40;
}else{
if(this.captionSize.match(/\%/)){
return _b0f+_b10;
}else{
return _b0f+4+parseInt(this.captionSize);
}
}
}});
}
if(!dojo._hasResource["wm.base.widget.Editors.DataSetEditor"]){
dojo._hasResource["wm.base.widget.Editors.DataSetEditor"]=true;
dojo.provide("wm.base.widget.Editors.DataSetEditor");
dojo.declare("wm.DataSetEditor",wm.AbstractEditor,{_multiSelect:false,dataSet:null,options:"",displayType:"Text",dataField:"",displayField:"",displayExpression:"",startUpdate:false,_allFields:"All Fields",selectedItem:null,init:function(){
this.inherited(arguments);
this.selectedItem=new wm.Variable({name:"selectedItem",owner:this});
if(this._multiSelect){
this.selectedItem.setIsList(true);
}
},postInit:function(){
if(this.options){
this.setOptionsVariable();
}
if(!this.displayField){
this._setDisplayField();
if(!this.dataField&&this.dataSet&&this.dataSet.type&&wm.defaultTypes[this.dataSet.type]){
this.dataField="dataValue";
}
}
this.inherited(arguments);
if(this.startUpdate){
this.update();
}
},_setDisplayField:function(){
var _b11=this.dataSet;
if(!_b11&&this.formField){
var form=this.getParentForm();
if(form){
_b11=form.dataSet;
}
if(_b11){
var _b12=_b11._dataSchema;
var _b13=_b12[this.formField];
if(_b13){
var type=_b13.type;
var _b14=wm.typeManager.getDisplayField(type);
}else{
if(this.formField&&app.debugDialog){
app.toastError(this.formField+" is an invalid formField for "+this.getRuntimeId());
}
}
}
}else{
if(_b11&&_b11.type){
var type=_b11.type;
var _b14=wm.typeManager.getDisplayField(type);
}
}
if(_b14){
return this.setDisplayField(_b14);
}
},update:function(){
if(this.dataSet instanceof wm.ServiceVariable){
if(app.debugDialog){
var _b15=this.dataSet.log("update",this.getRuntimeId()+".update()");
}
var d=this.dataSet.updateInternal();
if(_b15){
app.debugDialog.endLogEvent(_b15);
}
return d;
}
},hasValues:function(){
return (this.options||this.dataSet&&!this.dataSet.isEmpty());
},isAllDataFields:function(){
return (this.dataField==this._allFields||this.dataField=="");
},setDefaultOnInsert:function(){
if(this.editor&&this.defaultInsert){
if(this.$.binding&&this.$.binding.wires.defaultInsert){
this.$.binding.wires.defaultInsert.refreshValue();
}
this.setEditorValue(this.defaultInsert);
this.changed();
}
},setInitialValue:function(){
this.beginEditUpdate();
this.selectedItem.setType(this.dataSet instanceof wm.Variable?this.dataSet.type:"AnyData");
var _b16=this.dataValue;
var _b17=this.displayValue;
if(this.dataValue!==null&&wm.propertyIsChanged(_b16,"dataValue",wm.AbstractEditor)){
this.setEditorValue(_b16);
}else{
this.setDisplayValue(_b17);
}
this.endEditUpdate();
if(!this._cupdating){
var _b17=this.getDisplayValue();
if(_b17!=this.displayValue){
this.changed();
}
}
},formatData:function(_b18){
try{
if(this._formatter){
return this._formatter.format(_b18);
}else{
if(this.displayType){
var ctor=wm.getFormatter(this.displayType);
this._formatter=new ctor({name:"format",owner:this});
return this._formatter.format(_b18);
}else{
return _b18;
}
}
}
catch(e){
}
},isReady:function(){
return this.inherited(arguments)&&this.hasValues();
},editorChanged:function(){
if(this.dataSet&&this.dataSet.getCount()){
return this.inherited(arguments);
}else{
if(this.isDirty){
this.clearDirty();
}
}
},isAllDataFields:function(){
return (this.dataField==this._allFields||this.dataField=="");
},setDataSet:function(_b19){
this.dataSet=_b19;
if(_b19&&_b19.type!=this.selectedItem.type){
this.selectedItem.setType(_b19.type);
}
var _b1a=this.dataValue;
this.updateIsDirty();
},setDisplayField:function(_b1b){
this.displayField=_b1b;
if(!this._cupdating){
this.createEditor();
}
},setDisplayExpression:function(_b1c){
this.displayExpression=_b1c;
if(!this._cupdating){
this.createEditor();
}
},setDataField:function(_b1d){
if(_b1d=="All Fields"){
this.dataField="";
}else{
this.dataField=_b1d;
}
},clear:function(){
this.inherited(arguments);
this.selectedItem.clearData();
},_getOptionsData:function(){
var data=[];
if(!this.options){
return data;
}
var opts=dojo.isArray(this.options)?this.options:this.options.split(",");
for(var i=0,l=opts.length,d;i<l;i++){
d=dojo.string.trim(String(opts[i]));
data[i]={name:d,dataValue:d};
}
return data;
},setOptionsVariable:function(){
var opts=this._getOptionsData();
var ds=this.dataSet=new wm.Variable({name:"optionsVar",owner:this,type:"StringData"});
ds.setData(opts);
if(this._isDesignLoaded){
this.displayField="dataValue";
this.dataField="dataValue";
}
},setOptions:function(_b1e){
var _b1f=this._cupdating;
this._cupdating=true;
if(_b1e){
if(this.$.binding&&this.$.binding.wires.dataSet){
this.$.binding.removeWireByProp("dataSet");
}
if(!this.displayField){
this.displayField="dataValue";
if(!this.dataField){
this.dataField="dataValue";
}
}
this.options=_b1e;
this.setOptionsVariable();
this.setDataSet(this.dataSet);
}else{
var _b20=this.options;
this.options="";
if(this.dataSet&&this.dataSet.owner==this&&_b20){
this.dataSet.clearData();
this.setDataSet(this.dataSet);
}
}
if(!_b1f){
this._cupdating=false;
if(!this.invalidCss){
this.sizeEditor();
}else{
this.render();
}
}
},_getDisplayData:function(_b21){
var _b22;
if(wm.isInstanceType(_b21,wm.Variable)){
_b22=_b21;
}else{
_b22=new wm.Variable({_temporaryComponent:true});
if(this.dataSet){
_b22.setType(this.dataSet.type);
}
_b22.setData(dojo.clone(_b21));
}
var de=this.displayExpression,v=_b22;
var _b23=de?wm.expression.getValue(de,v,this.owner):_b22.getValue(this.displayField);
if(this.displayType&&this.displayType!="Text"){
_b23=this.formatData(_b23);
}
return _b23==null?"":String(_b23);
},calcIsDirty:function(val1,val2){
var _b24="";
var _b25="";
if(this.dataField){
_b24=dojo.isArray(val1)?val1.join(","):String(val1||"");
_b25=dojo.isArray(val2)?val2.join(","):String(val2||"");
return _b24!=_b25;
}
if(val1 instanceof wm.Variable&&val1.isList||dojo.isArray(val1)){
var _b26=val1 instanceof wm.Variable?val1.getCount():val1.length;
for(var i=0;i<_b26;i++){
if(i){
_b24+=",";
}
_b24+=this._getDisplayData(val1 instanceof wm.Variable?val1.getItem(i):val1[i]);
}
}else{
if(val1!==null&&typeof val1=="object"){
_b24=this._getDisplayData(val1);
}else{
if(val1==null){
_b24="";
}else{
_b24=val1;
}
}
}
if(val2 instanceof wm.Variable&&val2.isList||dojo.isArray(val2)){
var _b26=val2 instanceof wm.Variable?val2.getCount():val2.length;
for(var i=0;i<_b26;i++){
if(i){
_b25+=",";
}
_b25+=this._getDisplayData(val2 instanceof wm.Variable?val2.getItem(i):val2[i]);
}
}else{
if(val2!==null&&typeof val2=="object"){
_b25=this._getDisplayData(val2);
}else{
if(val2==null){
_b25="";
}else{
_b25=val2;
}
}
}
return _b24!=_b25;
},setEditorValue:function(_b27){
this._setEditorValue(_b27,false);
this.updateReadonlyValue();
},setDisplayValue:function(_b28){
this._setEditorValue(_b28,true);
this.updateReadonlyValue();
this.clearDirty();
},_setEditorValue:function(_b29,_b2a){
var self=this;
if(!this.selectedItem||!this.dataSet){
this.dataValue=_b29;
return;
}
this.beginEditUpdate();
try{
var _b2b=this._lastValue;
var _b2c=this._cupdating;
this._cupdating=true;
this.deselectAll();
this._cupdating=_b2c;
this._lastValue=_b2b;
if(_b29 instanceof wm.Variable){
_b29=_b29.getData();
}
var _b2d;
if(!_b2a&&this.dataField){
_b2d=this.dataField;
}else{
if(!this.displayExpression){
_b2d=this.displayField;
}
}
if(_b2d||this.displayExpression){
if(!dojo.isArray(_b29)){
_b29=_b29===undefined||_b29===null?[]:[_b29];
}
var _b2e;
_b2e=_b29.length;
var _b2f=this.dataSet.getCount();
if(_b2f==0){
this.dataValue=this._multiSelect?_b29:_b29[0];
}else{
for(var i=0;i<_b2e;i++){
var _b30=dojo.isArray(_b29)?_b29[i]:_b29;
var _b31;
if(_b2d&&_b30!==null&&typeof _b30=="object"){
_b31=_b30 instanceof wm.Variable?_b30.getValue(_b2d):_b30[_b2d];
}else{
if(!_b2d&&_b30!==null&&typeof _b30=="object"){
_b31=this._getDisplayData(_b30);
}else{
_b31=_b30;
}
}
var _b32=false;
for(var j=0;j<_b2f;j++){
var item=this.dataSet.isList?this.dataSet.getItem(j):this.dataSet;
var _b33=_b2d?item.getValue(_b2d):this._getDisplayData(item);
if(_b33==_b31){
_b32=true;
this.selectItem(j);
break;
}
}
if(!_b32){
this._onSetEditorValueFailed(_b29);
}
}
}
}
}
catch(e){
console.error(e);
}
this.endEditUpdate();
this.changed();
if(this.isDataSetValueValid(this.dataValue)){
this._lastValue=dojo.clone(this.dataValue);
}else{
this.dataValue="";
}
},isDataSetValueValid:function(_b34){
if(dojo.isArray(_b34)){
for(var i=0;i<_b34.length;i++){
if(_b34[i] instanceof wm.Component){
return false;
}
}
return true;
}else{
return !(_b34 instanceof wm.Component);
}
},_onSetEditorValueFailed:function(_b35){
},getEditorValue:function(){
if(!this.selectedItem){
return null;
}
if(this._dataValueValid){
return this.dataValue;
}
if(!this.dataSet||this.dataSet.getCount()==0){
return this.dataValue;
}
var _b36=[];
if(this.dataField){
var _b37=this.selectedItem.getCount();
for(var i=0;i<_b37;i++){
_b36.push(this.selectedItem.isList?this.selectedItem.getItem(i).getValue(this.dataField):this.selectedItem.getValue(this.dataField));
}
}else{
_b36=this.selectedItem.getData();
if(_b36!==null&&!dojo.isArray(_b36)){
_b36=[_b36];
}
}
if(!this._multiSelect&&_b36){
var _b36=_b36[0];
return (_b36||_b36===0)?_b36:this.makeEmptyValue();
}else{
return _b36;
}
},validationEnabled:function(){
return false;
},getDisplayValue:function(){
var _b38="";
var _b39=this.selectedItem.getCount();
for(var i=0;i<_b39;i++){
if(i){
_b38+=", ";
}
_b38+=this._getDisplayData(this.selectedItem.isList?this.selectedItem.getItem(i):this.selectedItem);
}
return _b38;
},deselectAll:function(){
this.clear();
}});
dojo.declare("wm.CheckboxSet",[wm.DataSetEditor,wm.TouchScrollMixinOptional],{singleLine:false,_multiSelect:true,_focused:false,height:"100px",mobileHeight:"150px",editors:null,_dijitClass:"dijit.form.CheckBox",postInit:function(){
this.inherited(arguments);
},setDataSet:function(_b3a){
this.inherited(arguments);
this.createEditor();
},connectEditor:function(){
},destroyEditor:function(){
var _b3b=this.editor;
if(this.dijits){
var self=this;
dojo.forEach(this.dijits,function(d){
d.destroy();
});
}
this.dijits=[];
this.inherited(arguments);
dojo.destroy(_b3b);
},_createEditor:function(_b3c){
this.editor=_b3c;
this.readOnlyNode=_b3c;
this.editor.className="wmCheckboxSet";
var html="";
if(this.dataSet){
var _b3d=this.dataSet.getCount();
for(var i=0;i<_b3d;i++){
var item=this.dataSet.getItem(i);
var id=this.getRuntimeId().replace(/\./g,"__")+"__"+i;
html+="<div class='wmCheckboxSetItem'><input id='"+id+"' name='"+this.getRuntimeId().replace(".","_")+"' dojoType='"+this._dijitClass+"' value='"+i+"'>";
if(wm.isMobile){
html+="<label class='wmeditor-caption'>"+this._getDisplayData(item)+"</label></div>";
}else{
html+="<label class='wmeditor-caption' for='"+id+"'>"+this._getDisplayData(item)+"</label></div>";
}
}
this.editor.innerHTML=html;
this.dijits=dojo.parser.parse(this.editor);
if(wm.isMobile){
dojo.forEach(this.dijits,dojo.hitch(this,function(e,i){
var a=document.createElement("div");
a.className="wmcheckbox_x";
a.innerHTML="X";
a.id=this.getRuntimeId()+"_x_"+i;
e.domNode.appendChild(a);
}));
}
var self=this;
dojo.forEach(this.dijits,function(_b3e){
self.connect(_b3e,"onChange",self,"changed");
self.connect(_b3e,"onFocus",self,"_onEditorFocused");
self.connect(_b3e,"onBlur",self,"_onEditorBlurred");
_b3e.domNode.style.lineHeight="normal";
});
}
this._scrollNode=this.editor;
return this.editor;
},_getTouchNode:function(_b3f){
var node=_b3f.touches?_b3f.touches[0].target:_b3f.target;
while(node&&node!=this.domNode&&!dojo.hasClass(node,"wmCheckboxSetItem")){
node=node.parentNode;
}
if(!node||node==this.domNode){
return;
}
return node;
},onTouchStart:function(_b40){
this.inherited(arguments);
var node=this._touchCheckboxNode=this._getTouchNode(_b40);
if(node&&dojo.hasClass(node,"wmCheckboxSetItem")){
dojo.addClass(node.firstChild,"dijitCheckBoxActive");
}
},onTouchMove:function(_b41,_b42,_b43,_b44,_b45,_b46,_b47){
this.inherited(arguments);
if(this._touchCheckboxNode&&(Math.abs(_b43)>5||Math.abs(_b46)>5)){
dojo.removeClass(this._touchCheckboxNode.firstChild,"dijitCheckBoxActive");
delete this._touchCheckboxNode;
}
},onTouchEnd:function(_b48,_b49){
this.inherited(arguments);
if(!_b49&&this._touchCheckboxNode&&this.dijits){
dojo.removeClass(this._touchCheckboxNode.firstChild,"dijitCheckBoxActive");
var _b4a=dojo.indexOf(dojo.query(".wmCheckboxSetItem",this.domNode),this._touchCheckboxNode);
if(_b4a!=-1){
this.dijits[_b4a].set("checked",!this.dijits[_b4a].get("checked"));
}
}
},_onEditorFocused:function(){
if(!this._focused){
this._focused=true;
this.focused();
}
},_onEditorBlurred:function(){
wm.job(this.getRuntimeId()+".Blurred",100,dojo.hitch(this,function(){
if(this._focused&&!dojo.isDescendant(document.activeElement,this.domNode)){
this._focused=false;
this.blurred();
}
}));
},changed:function(){
if(!this.dijits){
return;
}
var data=[];
for(var i=0;i<this.dijits.length;i++){
if(this.dijits[i].checked){
data.push(this.dataSet.getItem(i));
}
}
this._dataValueValid=false;
this.selectedItem.setData(data);
this.inherited(arguments);
this._dataValueValid=true;
},destroy:function(){
this.inherited(arguments);
},updateReadonlyValue:function(){
if(this.readonly){
this.setReadonly(true);
}
},setReadonly:function(_b4b){
var _b4c=this.readonly;
this.readonly=Boolean(_b4b);
if(!this.dijits){
return;
}
for(var i=0;i<this.dijits.length;i++){
var e=this.dijits[i];
var _b4d=e.get("checked");
e.set("disabled",this.readonly||this._disabled);
if(!_b4d){
e.domNode.parentNode.style.display=this.readonly?"none":"";
}else{
if(_b4c){
e.domNode.parentNode.style.display="";
}
}
}
},setDisabled:function(_b4e){
this.inherited(arguments);
var d=this._disabled;
if(!this.dijits){
return;
}
for(var i=0;i<this.dijits.length;i++){
var e=this.dijits[i];
e.set("disabled",this._disabled||this.readonly);
}
},deselectAll:function(){
if(!this.dijits){
return;
}
for(var i=0;i<this.dijits.length;i++){
this.dijits[i].set("checked",false,false);
this.dijits[i]._lastValueReported=false;
}
},selectItem:function(_b4f){
if(!this.dijits){
return;
}
this.dijits[_b4f].set("checked",true,false);
this.dijits[_b4f]._lastValueReported=true;
},getReadOnlyNodeOverflow:function(){
return "auto";
}});
dojo.declare("wm.ListSet",wm.DataSetEditor,{renderVisibleRowsOnly:true,singleLine:false,showSearchBar:true,selectionMode:"multiple",height:"100px",mobileHeight:"150px",editors:null,deleteColumn:false,deleteConfirm:"Are you sure you want to delete this?",prepare:function(_b50){
if(_b50&&_b50.readonly){
delete _b50.readonly;
}
this._multiSelect=this.selectionMode=="multiple"||this.selectionMode=="checkbox";
this.inherited(arguments);
},setSelectionMode:function(_b51){
this.selectionMode=_b51;
if(this.grid){
this.grid.setSelectionMode(_b51);
}
this._multiSelect=this.selectionMode=="multiple"||this.selectionMode=="checkbox";
},setOptions:function(_b52){
this._typeWas=this.dataSet?this.dataSet.type:"";
this.inherited(arguments);
if(this._typeWas!=this.type){
this.grid.setColumns([{show:true,width:"100%",isCustomField:Boolean(this.displayExpression),mobileColumn:true,field:this.displayExpression?"_name":this.displayField||"_name",expression:this.displayExpression}]);
this.grid.renderDojoObj();
this.setEditorValue(this.dataValue);
}
delete this._typeWas;
},setDataSet:function(_b53){
var _b54;
if(this._typeWas){
_b54=this._typeWas;
}else{
_b54=this.dataSet?this.dataSet.type:"";
}
this.inherited(arguments);
if(this.grid){
if(_b53&&_b53.type!=_b54){
this.createEditor();
}
var _b55=this.dataValue;
this.grid.setDataSet(_b53);
this._inSetDataValue=true;
this.setEditorValue(_b55);
delete this._inSetDataValue;
}
},changed:function(){
var _b56=this.dataValue;
if(_b56&&typeof _b56=="object"){
_b56=dojo.toJson(_b56);
}
this.selectedItem.setDataSet(this.grid.selectedItem);
var _b57=this.getDataValue();
if(_b57&&typeof _b57=="object"){
_b57=dojo.toJson(_b57);
}
if(_b56!==_b57){
this.doOnchange();
}
},doOnchange:function(){
var e=this.editor;
if(!this._loading&&!this.isUpdating()&&!this.readonly&&e&&!this.isLoading()){
this.displayValue=this.getDisplayValue();
this.dataValue=this.getDataValue();
this.valueChanged("displayValue",this.displayValue);
this.valueChanged("dataValue",this.dataValue);
this.onchange(this.getDisplayValue(),this.getDataValue(),this._inSetDataValue);
}
},_onShowParent:function(){
if(this.grid){
this.grid.renderDojoObj();
}
},flow:function(){
if(this.editor){
this.editor.flow();
}
},setShowSearchBar:function(_b58){
this.showSearchBar=Boolean(_b58);
if(this.showSearchBar){
if(!this.searchBar){
this.createSearchBar();
this.editor.moveControl(this.searchBar,0);
}else{
this.searchBar.show();
}
}else{
if(this.searchBar){
this.searchBar.hide();
}
}
},createSearchBar:function(){
this.searchBar=new wm.Text({owner:this,parent:this.editor,width:"100%",caption:"",changeOnKey:true,emptyValue:"emptyString",name:"searchBar"});
if(!this._noFilter){
this.connect(this.searchBar,"onchange",this,"filterList");
}
},filterList:function(_b59,_b5a){
var _b5b=this.grid.getRowCount();
var _b5c={};
if(_b59){
for(var i=0;i<this.grid.columns.length&&this.grid.columns[i].controller;i++){
}
_b5c[this.grid.columns[i].field]="*"+_b59+"*";
}
this.grid.setQuery(_b5c);
},_createEditor:function(_b5d){
this.editor=new wm.Container({owner:this,parent:this,name:"ListSetContainer",width:"100%",height:"100%",layoutKind:"top-to-bottom",verticalAlign:"top",horizontalAlign:"left"});
if(this.showSearchBar){
this.createSearchBar();
}
wm.require("wm.List");
this.grid=new wm.List({renderVisibleRowsOnly:this.renderVisibleRowsOnly,owner:this,parent:this.editor,name:"grid",width:"100%",height:"100%",noHeader:true,margin:"0",padding:"0",border:"0",minWidth:10,deleteColumn:this.deleteColumn,deleteConfirm:this.deleteConfirm,selectionMode:this.selectionMode});
this.grid.connect(this.grid,"renderDojoObj",this,"renderGrid");
this.grid.connect(this.grid,"onRowDeleted",this,"onRowDeleted");
this.grid._isDesignLoaded=false;
this.grid.setColumns([{show:true,width:"100%",isCustomField:Boolean(this.displayExpression),mobileColumn:true,field:this.displayExpression?"_name":this.displayField||"_name",formatFunc:this.displayType!="Text"?"wm_"+this.displayType.toLowerCase()+"_formatter":"",expression:this.displayExpression}]);
if(this.dataSet){
this.grid.setDataSet(this.dataSet);
}
return this.editor;
},setReadonly:function(_b5e){
},setDeleteColumn:function(_b5f){
this.deleteColumn=_b5f;
if(this.grid){
this.grid.setDeleteColumn(_b5f);
}
},setDeleteConfirm:function(_b60){
this.deleteConfirm=_b60;
if(this.grid){
this.grid.deleteConfirm=_b60;
}
},renderGrid:function(){
if(this.grid.dojoObj){
this.grid.dojoObj.scroller.contentNodes[0].parentNode.style.overflowX="hidden";
}
},connectEditor:function(){
if(!this.$.binding){
new wm.Binding({name:"binding",owner:this});
}
this.selectedItem.$.binding.addWire("","dataSet",this.name+".editor.selectedItem");
this.connect(this.grid,"onSelectionChange",this,"changed");
},deselectAll:function(){
this.grid.deselectAll();
},selectItem:function(_b61){
this.grid.setSelectedRow(_b61);
},onRowDeleted:function(_b62,_b63){
}});
}
if(!dojo._hasResource["dojo.data.util.sorter"]){
dojo._hasResource["dojo.data.util.sorter"]=true;
dojo.provide("dojo.data.util.sorter");
dojo.getObject("data.util.sorter",true,dojo);
dojo.data.util.sorter.basicComparator=function(a,b){
var r=-1;
if(a===null){
a=undefined;
}
if(b===null){
b=undefined;
}
if(a==b){
r=0;
}else{
if(a>b||a==null){
r=1;
}
}
return r;
};
dojo.data.util.sorter.createSortFunction=function(_b64,_b65){
var _b66=[];
function _b67(attr,dir,comp,s){
return function(_b68,_b69){
var a=s.getValue(_b68,attr);
var b=s.getValue(_b69,attr);
return dir*comp(a,b);
};
};
var _b6a;
var map=_b65.comparatorMap;
var bc=dojo.data.util.sorter.basicComparator;
for(var i=0;i<_b64.length;i++){
_b6a=_b64[i];
var attr=_b6a.attribute;
if(attr){
var dir=(_b6a.descending)?-1:1;
var comp=bc;
if(map){
if(typeof attr!=="string"&&("toString" in attr)){
attr=attr.toString();
}
comp=map[attr]||bc;
}
_b66.push(_b67(attr,dir,comp,_b65));
}
}
return function(rowA,rowB){
var i=0;
while(i<_b66.length){
var ret=_b66[i++](rowA,rowB);
if(ret!==0){
return ret;
}
}
return 0;
};
};
}
if(!dojo._hasResource["dojo.data.util.simpleFetch"]){
dojo._hasResource["dojo.data.util.simpleFetch"]=true;
dojo.provide("dojo.data.util.simpleFetch");
dojo.getObject("data.util.simpleFetch",true,dojo);
dojo.data.util.simpleFetch.fetch=function(_b6b){
_b6b=_b6b||{};
if(!_b6b.store){
_b6b.store=this;
}
var self=this;
var _b6c=function(_b6d,_b6e){
if(_b6e.onError){
var _b6f=_b6e.scope||dojo.global;
_b6e.onError.call(_b6f,_b6d,_b6e);
}
};
var _b70=function(_b71,_b72){
var _b73=_b72.abort||null;
var _b74=false;
var _b75=_b72.start?_b72.start:0;
var _b76=(_b72.count&&(_b72.count!==Infinity))?(_b75+_b72.count):_b71.length;
_b72.abort=function(){
_b74=true;
if(_b73){
_b73.call(_b72);
}
};
var _b77=_b72.scope||dojo.global;
if(!_b72.store){
_b72.store=self;
}
if(_b72.onBegin){
_b72.onBegin.call(_b77,_b71.length,_b72);
}
if(_b72.sort){
_b71.sort(dojo.data.util.sorter.createSortFunction(_b72.sort,self));
}
if(_b72.onItem){
for(var i=_b75;(i<_b71.length)&&(i<_b76);++i){
var item=_b71[i];
if(!_b74){
_b72.onItem.call(_b77,item,_b72);
}
}
}
if(_b72.onComplete&&!_b74){
var _b78=null;
if(!_b72.onItem){
_b78=_b71.slice(_b75,_b76);
}
_b72.onComplete.call(_b77,_b78,_b72);
}
};
this._fetchItems(_b6b,_b70,_b6c);
return _b6b;
};
}
if(!dojo._hasResource["dojo.data.util.filter"]){
dojo._hasResource["dojo.data.util.filter"]=true;
dojo.provide("dojo.data.util.filter");
dojo.getObject("data.util.filter",true,dojo);
dojo.data.util.filter.patternToRegExp=function(_b79,_b7a){
var rxp="^";
var c=null;
for(var i=0;i<_b79.length;i++){
c=_b79.charAt(i);
switch(c){
case "\\":
rxp+=c;
i++;
rxp+=_b79.charAt(i);
break;
case "*":
rxp+=".*";
break;
case "?":
rxp+=".";
break;
case "$":
case "^":
case "/":
case "+":
case ".":
case "|":
case "(":
case ")":
case "{":
case "}":
case "[":
case "]":
rxp+="\\";
default:
rxp+=c;
}
}
rxp+="$";
if(_b7a){
return new RegExp(rxp,"mi");
}else{
return new RegExp(rxp,"m");
}
};
}
if(!dojo._hasResource["dijit.form.ComboBox"]){
dojo._hasResource["dijit.form.ComboBox"]=true;
dojo.provide("dijit.form.ComboBox");
dojo.declare("dijit.form.ComboBoxMixin",dijit._HasDropDown,{item:null,pageSize:Infinity,store:null,fetchProperties:{},query:{},autoComplete:true,highlightMatch:"first",searchDelay:100,searchAttr:"name",labelAttr:"",labelType:"text",queryExpr:"${0}*",ignoreCase:true,hasDownArrow:true,templateString:dojo.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t>\r\n\t\t\t    <!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0\r\n\t\t\t      WaveMaker: Unfortunate hack to replace input with span to avoid focus issues with mobile that cause keyboards to pop open -->\r\n<${buttonNodeType} class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitComboBox",dropDownClass:"dijit.form._ComboBoxMenu",cssStateNodes:{"_buttonNode":"dijitDownArrowButton"},maxHeight:-1,_stopClickEvents:false,_getCaretPos:function(_b7b){
var pos=0;
if(typeof (_b7b.selectionStart)=="number"){
pos=_b7b.selectionStart;
}else{
if(dojo.isIE){
var tr=dojo.doc.selection.createRange().duplicate();
var ntr=_b7b.createTextRange();
tr.move("character",0);
ntr.move("character",0);
try{
ntr.setEndPoint("EndToEnd",tr);
pos=String(ntr.text).replace(/\r/g,"").length;
}
catch(e){
}
}
}
return pos;
},_setCaretPos:function(_b7c,_b7d){
_b7d=parseInt(_b7d);
dijit.selectInputText(_b7c,_b7d,_b7d);
},_setDisabledAttr:function(_b7e){
this.inherited(arguments);
dijit.setWaiState(this.domNode,"disabled",_b7e);
},_abortQuery:function(){
if(this.searchTimer){
clearTimeout(this.searchTimer);
this.searchTimer=null;
}
if(this._fetchHandle){
if(this._fetchHandle.abort){
this._fetchHandle.abort();
}
this._fetchHandle=null;
}
},_onInput:function(evt){
if(!this.searchTimer&&(evt.type=="paste"||evt.type=="input")&&this._lastInput!=this.textbox.value){
this.searchTimer=setTimeout(dojo.hitch(this,function(){
this._onKey({charOrCode:229});
}),100);
}
this.inherited(arguments);
},_onKey:function(evt){
var key=evt.charOrCode;
if(evt.altKey||((evt.ctrlKey||evt.metaKey)&&(key!="x"&&key!="v"))||key==dojo.keys.SHIFT){
return;
}
var _b7f=false;
var pw=this.dropDown;
var dk=dojo.keys;
var _b80=null;
this._prev_key_backspace=false;
this._abortQuery();
this.inherited(arguments);
if(this._opened){
_b80=pw.getHighlightedOption();
}
switch(key){
case dk.PAGE_DOWN:
case dk.DOWN_ARROW:
case dk.PAGE_UP:
case dk.UP_ARROW:
if(this._opened){
this._announceOption(_b80);
}
dojo.stopEvent(evt);
break;
case dk.ENTER:
if(_b80){
if(_b80==pw.nextButton){
this._nextSearch(1);
dojo.stopEvent(evt);
break;
}else{
if(_b80==pw.previousButton){
this._nextSearch(-1);
dojo.stopEvent(evt);
break;
}
}
}else{
this._setBlurValue();
this._setCaretPos(this.focusNode,this.focusNode.value.length);
}
if(this._opened||this._fetchHandle){
evt.preventDefault();
}
case dk.TAB:
var _b81=this.get("displayedValue");
if(pw&&(_b81==pw._messages["previousMessage"]||_b81==pw._messages["nextMessage"])){
break;
}
if(_b80){
this._selectOption();
}
if(this._opened){
this._lastQuery=null;
this.closeDropDown();
}
break;
case " ":
if(_b80){
dojo.stopEvent(evt);
this._selectOption();
this.closeDropDown();
}else{
_b7f=true;
}
break;
case dk.DELETE:
case dk.BACKSPACE:
this._prev_key_backspace=true;
_b7f=true;
break;
default:
_b7f=typeof key=="string"||key==229;
}
if(_b7f){
this.item=undefined;
this.searchTimer=setTimeout(dojo.hitch(this,"_startSearchFromInput"),1);
}
},_autoCompleteText:function(text){
var fn=this.focusNode;
dijit.selectInputText(fn,fn.value.length);
var _b82=this.ignoreCase?"toLowerCase":"substr";
if(text[_b82](0).indexOf(this.focusNode.value[_b82](0))==0){
var cpos=this._getCaretPos(fn);
if((cpos+1)>fn.value.length){
fn.value=text;
dijit.selectInputText(fn,cpos);
}
}else{
fn.value=text;
dijit.selectInputText(fn);
}
},_openResultList:function(_b83,_b84){
this._fetchHandle=null;
if(this.disabled||this.readOnly||(_b84.query[this.searchAttr]!=this._lastQuery)){
return;
}
var _b85=this.dropDown._highlighted_option&&dojo.hasClass(this.dropDown._highlighted_option,"dijitMenuItemSelected");
this.dropDown.clearResultList();
if(!_b83.length&&!this._maxOptions){
this.closeDropDown();
return;
}
_b84._maxOptions=this._maxOptions;
var _b86=this.dropDown.createOptions(_b83,_b84,dojo.hitch(this,"_getMenuLabelFromItem"));
this._showResultList();
if(_b84.direction){
if(1==_b84.direction){
this.dropDown.highlightFirstOption();
}else{
if(-1==_b84.direction){
this.dropDown.highlightLastOption();
}
}
if(_b85){
this._announceOption(this.dropDown.getHighlightedOption());
}
}else{
if(this.autoComplete&&!this._prev_key_backspace&&!/^[*]+$/.test(_b84.query[this.searchAttr])){
this._announceOption(_b86[1]);
}
}
},_showResultList:function(){
this.closeDropDown(true);
this.displayMessage("");
this.openDropDown();
dijit.setWaiState(this.domNode,"expanded","true");
},loadDropDown:function(_b87){
this._startSearchAll();
},isLoaded:function(){
return false;
},closeDropDown:function(){
this._abortQuery();
if(this._opened){
this.inherited(arguments);
dijit.setWaiState(this.domNode,"expanded","false");
dijit.removeWaiState(this.focusNode,"activedescendant");
}
},_setBlurValue:function(){
var _b88=this.get("displayedValue");
var pw=this.dropDown;
if(pw&&(_b88==pw._messages["previousMessage"]||_b88==pw._messages["nextMessage"])){
this._setValueAttr(this._lastValueReported,true);
}else{
if(typeof this.item=="undefined"){
this.item=null;
this.set("displayedValue",_b88);
}else{
if(_b88===""){
this.item=null;
this.set("displayedValue",_b88);
}else{
if(this.value!=this._lastValueReported){
dijit.form._FormValueWidget.prototype._setValueAttr.call(this,this.value,true);
}
this._refreshState();
}
}
}
},_onBlur:function(){
this.closeDropDown();
this.inherited(arguments);
},_setItemAttr:function(item,_b89,_b8a){
if(!_b8a){
_b8a=this.store.getValue(item,this.searchAttr);
}
var _b8b=this._getValueField()!=this.searchAttr?this.store.getIdentity(item):_b8a;
this._set("item",item);
dijit.form.ComboBox.superclass._setValueAttr.call(this,_b8b,_b89,_b8a);
},_announceOption:function(node){
if(!node){
return;
}
var _b8c;
if(node==this.dropDown.nextButton||node==this.dropDown.previousButton){
_b8c=node.innerHTML;
this.item=undefined;
this.value="";
}else{
_b8c=this.store.getValue(node.item,this.searchAttr).toString();
this.set("item",node.item,false,_b8c);
}
this.focusNode.value=this.focusNode.value.substring(0,this._lastInput.length);
dijit.setWaiState(this.focusNode,"activedescendant",dojo.attr(node,"id"));
this._autoCompleteText(_b8c);
},_selectOption:function(evt){
if(evt){
this._announceOption(evt.target);
}
this.closeDropDown();
this._setCaretPos(this.focusNode,this.focusNode.value.length);
dijit.form._FormValueWidget.prototype._setValueAttr.call(this,this.value,true);
},_startSearchAll:function(){
this._startSearch("");
},_startSearchFromInput:function(){
this._startSearch(this.focusNode.value.replace(/([\\\*\?])/g,"\\$1"));
},_getQueryString:function(text){
return dojo.string.substitute(this.queryExpr,[text]);
},_startSearch:function(key){
if(!this.dropDown){
var _b8d=this.id+"_popup",_b8e=dojo.getObject(this.dropDownClass,false);
this.dropDown=new _b8e({onChange:dojo.hitch(this,this._selectOption),id:_b8d,dir:this.dir});
dijit.removeWaiState(this.focusNode,"activedescendant");
dijit.setWaiState(this.textbox,"owns",_b8d);
}
var _b8f=dojo.clone(this.query);
this._lastInput=key;
this._lastQuery=_b8f[this.searchAttr]=this._getQueryString(key);
this.searchTimer=setTimeout(dojo.hitch(this,function(_b90,_b91){
this.searchTimer=null;
var _b92={queryOptions:{ignoreCase:this.ignoreCase,deep:true},query:_b90,onBegin:dojo.hitch(this,"_setMaxOptions"),onComplete:dojo.hitch(this,"_openResultList"),onError:function(_b93){
_b91._fetchHandle=null;
console.error("dijit.form.ComboBox: "+_b93);
_b91.closeDropDown();
},start:0,count:this.pageSize};
dojo.mixin(_b92,_b91.fetchProperties);
this._fetchHandle=_b91.store.fetch(_b92);
var _b94=function(_b95,_b96){
_b95.start+=_b95.count*_b96;
_b95.direction=_b96;
this._fetchHandle=this.store.fetch(_b95);
this.focus();
};
this._nextSearch=this.dropDown.onPage=dojo.hitch(this,_b94,this._fetchHandle);
},_b8f,this),this.searchDelay);
},_setMaxOptions:function(size,_b97){
this._maxOptions=size;
},_getValueField:function(){
return this.searchAttr;
},constructor:function(){
this.query={};
this.fetchProperties={};
},postMixInProperties:function(){
if(!this.store){
var _b98=this.srcNodeRef;
this.store=new dijit.form._ComboBoxDataStore(_b98);
if(!("value" in this.params)){
var item=(this.item=this.store.fetchSelectedItem());
if(item){
var _b99=this._getValueField();
this.value=this.store.getValue(item,_b99);
}
}
}
this.inherited(arguments);
},postCreate:function(){
var _b9a=dojo.query("label[for=\""+this.id+"\"]");
if(_b9a.length){
_b9a[0].id=(this.id+"_label");
dijit.setWaiState(this.domNode,"labelledby",_b9a[0].id);
}
this.inherited(arguments);
},_setHasDownArrowAttr:function(val){
this.hasDownArrow=val;
this._buttonNode.style.display=val?"":"none";
},_getMenuLabelFromItem:function(item){
var _b9b=this.labelFunc(item,this.store),_b9c=this.labelType;
if(this.highlightMatch!="none"&&this.labelType=="text"&&this._lastInput){
_b9b=this.doHighlight(_b9b,this._escapeHtml(this._lastInput));
_b9c="html";
}
return {html:_b9c=="html",label:_b9b};
},doHighlight:function(_b9d,find){
var _b9e=(this.ignoreCase?"i":"")+(this.highlightMatch=="all"?"g":""),i=this.queryExpr.indexOf("${0}");
find=dojo.regexp.escapeString(find);
return this._escapeHtml(_b9d).replace(new RegExp((i==0?"^":"")+"("+find+")"+(i==(this.queryExpr.length-4)?"$":""),_b9e),"<span class=\"dijitComboBoxHighlightMatch\">$1</span>");
},_escapeHtml:function(str){
str=String(str).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
return str;
},reset:function(){
this.item=null;
this.inherited(arguments);
},labelFunc:function(item,_b9f){
return _b9f.getValue(item,this.labelAttr||this.searchAttr).toString();
}});
dojo.declare("dijit.form._ComboBoxMenu",[dijit._Widget,dijit._Templated,dijit._CssStateMixin],{templateString:"<ul class='dijitReset dijitMenu' dojoAttachEvent='onmousedown:_onMouseDown,onmouseup:_onMouseUp,onmouseover:_onMouseOver,onmouseout:_onMouseOut' style='overflow: \"auto\"; overflow-x: \"hidden\";'>"+"<li class='dijitMenuItem dijitMenuPreviousButton' dojoAttachPoint='previousButton' role='option'></li>"+"<li class='dijitMenuItem dijitMenuNextButton' dojoAttachPoint='nextButton' role='option'></li>"+"</ul>",_messages:null,baseClass:"dijitComboBoxMenu",postMixInProperties:function(){
this.inherited(arguments);
this._messages=dojo.i18n.getLocalization("dijit.form","ComboBox",this.lang);
},buildRendering:function(){
this.inherited(arguments);
this.previousButton.innerHTML=this._messages["previousMessage"];
this.nextButton.innerHTML=this._messages["nextMessage"];
},_setValueAttr:function(_ba0){
this.value=_ba0;
this.onChange(_ba0);
},onChange:function(_ba1){
},onPage:function(_ba2){
},onClose:function(){
this._blurOptionNode();
},_createOption:function(item,_ba3){
var _ba4=dojo.create("li",{"class":"dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl"),role:"option"});
var _ba5=_ba3(item);
if(_ba5.html){
_ba4.innerHTML=_ba5.label;
}else{
_ba4.appendChild(dojo.doc.createTextNode(_ba5.label));
}
if(_ba4.innerHTML==""){
_ba4.innerHTML="&nbsp;";
}
_ba4.item=item;
return _ba4;
},createOptions:function(_ba6,_ba7,_ba8){
this.previousButton.style.display=(_ba7.start==0)?"none":"";
dojo.attr(this.previousButton,"id",this.id+"_prev");
dojo.forEach(_ba6,function(item,i){
var _ba9=this._createOption(item,_ba8);
if(item.indent){
dojo.addClass(_ba9,"indentOption"+((item.indent===true)?"":item.indent));
}
dojo.attr(_ba9,"id",this.id+i);
this.domNode.insertBefore(_ba9,this.nextButton);
},this);
var _baa=false;
if(_ba7._maxOptions&&_ba7._maxOptions!=-1){
if((_ba7.start+_ba7.count)<_ba7._maxOptions){
_baa=true;
}else{
if((_ba7.start+_ba7.count)>_ba7._maxOptions&&_ba7.count==_ba6.length){
_baa=true;
}
}
}else{
if(_ba7.count==_ba6.length){
_baa=true;
}
}
this.nextButton.style.display=_baa?"":"none";
dojo.attr(this.nextButton,"id",this.id+"_next");
return this.domNode.childNodes;
},clearResultList:function(){
while(this.domNode.childNodes.length>2){
this.domNode.removeChild(this.domNode.childNodes[this.domNode.childNodes.length-2]);
}
this._blurOptionNode();
},_onMouseDown:function(evt){
dojo.stopEvent(evt);
},_onMouseUp:function(evt){
if(evt.target===this.domNode||!this._highlighted_option){
return;
}else{
if(evt.target==this.previousButton){
this._blurOptionNode();
this.onPage(-1);
}else{
if(evt.target==this.nextButton){
this._blurOptionNode();
this.onPage(1);
}else{
var tgt=evt.target;
while(!tgt.item){
tgt=tgt.parentNode;
}
this._setValueAttr({target:tgt},true);
}
}
}
},_onMouseOver:function(evt){
if(evt.target===this.domNode){
return;
}
var tgt=evt.target;
if(!(tgt==this.previousButton||tgt==this.nextButton)){
while(!tgt.item){
tgt=tgt.parentNode;
}
}
this._focusOptionNode(tgt);
},_onMouseOut:function(evt){
if(evt.target===this.domNode){
return;
}
this._blurOptionNode();
},_focusOptionNode:function(node){
if(this._highlighted_option!=node){
this._blurOptionNode();
this._highlighted_option=node;
dojo.addClass(this._highlighted_option,"dijitMenuItemSelected");
}
},_blurOptionNode:function(){
if(this._highlighted_option){
dojo.removeClass(this._highlighted_option,"dijitMenuItemSelected");
this._highlighted_option=null;
}
},_highlightNextOption:function(){
if(!this.getHighlightedOption()){
var fc=this.domNode.firstChild;
this._focusOptionNode(fc.style.display=="none"?fc.nextSibling:fc);
}else{
var ns=this._highlighted_option.nextSibling;
if(ns&&ns.style.display!="none"){
this._focusOptionNode(ns);
}else{
this.highlightFirstOption();
}
}
dojo.window.scrollIntoView(this._highlighted_option);
},highlightFirstOption:function(){
var _bab=this.domNode.firstChild;
var _bac=_bab.nextSibling;
this._focusOptionNode(_bac.style.display=="none"?_bab:_bac);
dojo.window.scrollIntoView(this._highlighted_option);
},highlightLastOption:function(){
this._focusOptionNode(this.domNode.lastChild.previousSibling);
dojo.window.scrollIntoView(this._highlighted_option);
},_highlightPrevOption:function(){
if(!this.getHighlightedOption()){
var lc=this.domNode.lastChild;
this._focusOptionNode(lc.style.display=="none"?lc.previousSibling:lc);
}else{
var ps=this._highlighted_option.previousSibling;
if(ps&&ps.style.display!="none"){
this._focusOptionNode(ps);
}else{
this.highlightLastOption();
}
}
dojo.window.scrollIntoView(this._highlighted_option);
},_page:function(up){
var _bad=0;
var _bae=this.domNode.scrollTop;
var _baf=dojo.style(this.domNode,"height");
if(!this.getHighlightedOption()){
this._highlightNextOption();
}
while(_bad<_baf){
if(up){
if(!this.getHighlightedOption().previousSibling||this._highlighted_option.previousSibling.style.display=="none"){
break;
}
this._highlightPrevOption();
}else{
if(!this.getHighlightedOption().nextSibling||this._highlighted_option.nextSibling.style.display=="none"){
break;
}
this._highlightNextOption();
}
var _bb0=this.domNode.scrollTop;
_bad+=(_bb0-_bae)*(up?-1:1);
_bae=_bb0;
}
},pageUp:function(){
this._page(true);
},pageDown:function(){
this._page(false);
},getHighlightedOption:function(){
var ho=this._highlighted_option;
return (ho&&ho.parentNode)?ho:null;
},handleKey:function(evt){
switch(evt.charOrCode){
case dojo.keys.DOWN_ARROW:
this._highlightNextOption();
return false;
case dojo.keys.PAGE_DOWN:
this.pageDown();
return false;
case dojo.keys.UP_ARROW:
this._highlightPrevOption();
return false;
case dojo.keys.PAGE_UP:
this.pageUp();
return false;
default:
return true;
}
}});
dojo.declare("dijit.form.ComboBox",[dijit.form.ValidationTextBox,dijit.form.ComboBoxMixin],{_setValueAttr:function(_bb1,_bb2,_bb3){
this._set("item",null);
var self=this;
this.store.fetchItemByIdentity({identity:_bb1,onItem:function(item){
self._set("item",item);
}});
if(!_bb1){
_bb1="";
}
dijit.form.ValidationTextBox.prototype._setValueAttr.call(this,_bb1,_bb2,_bb3);
}});
dojo.declare("dijit.form._ComboBoxDataStore",null,{constructor:function(root){
this.root=root;
if(root.tagName!="SELECT"&&root.firstChild){
root=dojo.query("select",root);
if(root.length>0){
root=root[0];
}else{
this.root.innerHTML="<SELECT>"+this.root.innerHTML+"</SELECT>";
root=this.root.firstChild;
}
this.root=root;
}
dojo.query("> option",root).forEach(function(node){
node.innerHTML=dojo.trim(node.innerHTML);
});
},getValue:function(item,_bb4,_bb5){
return (_bb4=="value")?item.value:(item.innerText||item.textContent||"");
},isItemLoaded:function(_bb6){
return true;
},getFeatures:function(){
return {"dojo.data.api.Read":true,"dojo.data.api.Identity":true};
},_fetchItems:function(args,_bb7,_bb8){
if(!args.query){
args.query={};
}
if(!args.query.name){
args.query.name="";
}
if(!args.queryOptions){
args.queryOptions={};
}
var _bb9=dojo.data.util.filter.patternToRegExp(args.query.name,args.queryOptions.ignoreCase),_bba=dojo.query("> option",this.root).filter(function(_bbb){
return (_bbb.innerText||_bbb.textContent||"").match(_bb9);
});
if(args.sort){
_bba.sort(dojo.data.util.sorter.createSortFunction(args.sort,this));
}
_bb7(_bba,args);
},close:function(_bbc){
return;
},getLabel:function(item){
return item.innerHTML;
},getIdentity:function(item){
return dojo.attr(item,"value");
},fetchItemByIdentity:function(args){
var item=dojo.query("> option[value='"+args.identity+"']",this.root)[0];
args.onItem(item);
},fetchSelectedItem:function(){
var root=this.root,si=root.selectedIndex;
return typeof si=="number"?dojo.query("> option:nth-child("+(si!=-1?si+1:1)+")",root)[0]:null;
}});
dojo.extend(dijit.form._ComboBoxDataStore,dojo.data.util.simpleFetch);
}
if(!dojo._hasResource["dijit.form.FilteringSelect"]){
dojo._hasResource["dijit.form.FilteringSelect"]=true;
dojo.provide("dijit.form.FilteringSelect");
dojo.declare("dijit.form.FilteringSelect",[dijit.form.MappedTextBox,dijit.form.ComboBoxMixin],{required:true,_lastDisplayedValue:"",_isValidSubset:function(){
return this._opened;
},isValid:function(){
return this.item||(!this.required&&this.get("displayedValue")=="");
},_refreshState:function(){
if(!this.searchTimer){
this.inherited(arguments);
}
},_callbackSetLabel:function(_bbd,_bbe,_bbf){
if((_bbe&&_bbe.query[this.searchAttr]!=this._lastQuery)||(!_bbe&&_bbd.length&&this.store.getIdentity(_bbd[0])!=this._lastQuery)){
return;
}
if(!_bbd.length){
this.valueNode.value="";
dijit.form.TextBox.superclass._setValueAttr.call(this,"",_bbf||(_bbf===undefined&&!this._focused));
this._set("item",null);
this.validate(this._focused);
}else{
this.set("item",_bbd[0],_bbf);
}
},_openResultList:function(_bc0,_bc1){
if(_bc1.query[this.searchAttr]!=this._lastQuery){
return;
}
dijit.form.ComboBoxMixin.prototype._openResultList.apply(this,arguments);
if(this.item===undefined){
this.validate(true);
}
},_getValueAttr:function(){
return this.valueNode.value;
},_getValueField:function(){
return "value";
},_setValueAttr:function(_bc2,_bc3){
if(!this._onChangeActive){
_bc3=null;
}
this._lastQuery=_bc2;
if(_bc2===null||_bc2===""){
this._setDisplayedValueAttr("",_bc3);
return;
}
var self=this;
this.store.fetchItemByIdentity({identity:_bc2,onItem:function(item){
self._callbackSetLabel(item?[item]:[],undefined,_bc3);
}});
},_setItemAttr:function(item,_bc4,_bc5){
this.inherited(arguments);
this.valueNode.value=this.value;
this._lastDisplayedValue=this.textbox.value;
},_getDisplayQueryString:function(text){
return text.replace(/([\\\*\?])/g,"\\$1");
},_setDisplayedValueAttr:function(_bc6,_bc7){
if(_bc6==null){
_bc6="";
}
if(!this._created){
if(!("displayedValue" in this.params)){
return;
}
_bc7=false;
}
if(this.store){
this.closeDropDown();
var _bc8=dojo.clone(this.query);
this._lastQuery=_bc8[this.searchAttr]=this._getDisplayQueryString(_bc6);
this.textbox.value=_bc6;
this._lastDisplayedValue=_bc6;
this._set("displayedValue",_bc6);
var _bc9=this;
var _bca={query:_bc8,queryOptions:{ignoreCase:this.ignoreCase,deep:true},onComplete:function(_bcb,_bcc){
_bc9._fetchHandle=null;
dojo.hitch(_bc9,"_callbackSetLabel")(_bcb,_bcc,_bc7);
},onError:function(_bcd){
_bc9._fetchHandle=null;
console.error("dijit.form.FilteringSelect: "+_bcd);
dojo.hitch(_bc9,"_callbackSetLabel")([],undefined,false);
}};
dojo.mixin(_bca,this.fetchProperties);
this._fetchHandle=this.store.fetch(_bca);
}
},undo:function(){
this.set("displayedValue",this._lastDisplayedValue);
}});
}
if(!dojo._hasResource["wm.base.widget.Editors.Select"]){
dojo._hasResource["wm.base.widget.Editors.Select"]=true;
dojo.provide("wm.base.widget.Editors.Select");
dojo.declare("wm.SelectMenu",wm.DataSetEditor,{indentField:"",placeHolder:"",_storeNameField:"_selectMenuName",pageSize:20,allowNone:false,autoComplete:true,hasDownArrow:true,restrictValues:true,_selectedData:null,displayMenuExpression:"",init:function(){
if(wm.isMobile){
this.manageHistory=true;
}
this.inherited(arguments);
},handleBack:function(_bce){
this.editor.closeDropDown();
this.editor.dropDown.hide();
return true;
},generateStore:function(){
if(wm.isMobile){
return;
}
var data=[];
if(this.dataSet){
var _bcf=this.dataSet.getCount();
for(var i=0;i<_bcf;i++){
var v=this.dataSet.getItem(i);
var item={id:i,name:this._getDisplayData(v)};
if(this.displayMenuExpression){
item.menuField=wm.expression.getValue(this.displayMenuExpression,v,this.owner);
}
if(this.indentField){
item.indent=Boolean(this.dataSet.getItem(i).getValue(this.indentField));
}
data.push(item);
}
}
if(this.allowNone){
data.unshift({id:-1,name:""});
}
return new wm.base.data.SimpleStore(data,"name",this);
},getEditorProps:function(_bd0,_bd1){
var _bd2=this.generateStore();
return dojo.mixin(this.inherited(arguments),{placeHolder:this.placeHolder,required:this.required,store:_bd2,autoComplete:this.autoComplete,hasDownArrow:this.hasDownArrow,searchAttr:"name",labelAttr:this.displayMenuExpression?"menuField":null,labelType:this.displayMenuExpression?"html":"text",pageSize:this.pageSize?this.pageSize:Infinity},_bd1||{});
},_createEditor:function(_bd3,_bd4){
var e;
if(wm.isMobile){
e=new wm.dijit.form.ComboBox(this.getEditorProps(_bd3,_bd4));
e.owner=this;
dojo.attr(e.focusNode,"readonly",true);
}else{
if(this.restrictValues){
e=new dijit.form.FilteringSelect(this.getEditorProps(_bd3,_bd4));
}else{
e=new dijit.form.ComboBox(this.getEditorProps(_bd3,_bd4));
}
}
return e;
},showPopup:function(){
if(this.editor){
this.editor.openDropDown();
}
},setPlaceHolder:function(_bd5){
this.placeHolder=_bd5;
if(this.editor){
this.editor.attr("placeHolder",_bd5);
}
},setRestrictValues:function(_bd6){
var _bd7=this.getEditorValue();
var _bd8=this.restrictValues;
this.restrictValues=_bd6;
if(this.editor&&_bd8!=_bd6){
this.createEditor();
this.setEditorValue(_bd7);
}
},_onSetEditorValueFailed:function(_bd9){
if(!this.restrictValues){
this.editor.set("displayedValue",_bd9);
}
},setDataSet:function(_bda,_bdb){
this._inSetDataSet=true;
this.inherited(arguments);
if(this.editor){
this.editor.set("store",this.generateStore());
if(!_bdb){
this.setEditorValue(this.dataValue);
}
}
delete this._inSetDataSet;
},clear:function(){
if(this.editor){
var _bdc=this.editor.get("displayedValue");
if(this.restrictValues){
this.editor.set("value","",false);
}else{
this.editor.set("value",undefined,false);
}
this.editor.item=null;
this.selectedItem.clearData();
this._lastValue=this.makeEmptyValue();
if(!this._inSetDataSet){
this.displayValue="";
this.dataValue=null;
this.editor._lastValueReported="";
this.updateReadonlyValue();
this.resetState();
}
if(!this._cupdating&&_bdc&&this.hasValues()){
this.changed();
}
}else{
this.resetState();
}
},validationEnabled:function(){
return this.restrictValues||this.required;
},_getValidatorNode:function(){
var _bdd=dojo.query(".dijitValidationContainer",this.editor.domNode)[0];
_bdd.firstChild.value="";
return _bdd;
},blurred:function(){
this.inherited(arguments);
var _bde=this.displayValue;
if(this.getDisplayValue()!=_bde){
this.doOnchange();
}
},getInvalid:function(){
if(!this.validationEnabled()){
if(this.required&&!this.getDataValue()){
return true;
}
return false;
}
var _bdf;
if(!this.editor||this.editor._focused){
_bdf=true;
}else{
var _be0=this.getDataValue();
var _be1=Boolean(_be0);
var _be2=this.getDisplayValue();
this._isValid=(!this.restrictValues||(_be2&&_be1||!_be2));
if(this.readonly){
_bdf=true;
}else{
if(this.required){
if(!this.restrictValues&&!_be2){
_bdf=false;
}else{
if(this.restrictValues&&!_be1){
_bdf=false;
}else{
_bdf=true;
}
}
}else{
if(this.restrictValues&&_be2&&!_be1){
_bdf=false;
}else{
_bdf=true;
}
}
}
}
if(_bdf){
this.validatorNode.style.display="none";
}
return !_bdf;
},getSelectedIndex:function(){
if(this.editor.item){
return this.editor.item.id;
}
return -1;
},getEditorValue:function(){
var _be3=this.inherited(arguments);
if(!_be3&&!this.restrictValues){
_be3=this.editor.get("displayedValue");
}
return (_be3||_be3===0)?_be3:this.makeEmptyValue();
},getDisplayValue:function(){
if(this.editor){
return this.editor.get("displayedValue");
}
return null;
},blurred:function(){
this.changed();
this.doOnblur();
},changed:function(){
if(wm.isMobile&&this.editor&&this.editor.focusNode==document.activeElement){
this.editor.focusNode.blur();
return;
}
var item;
var _be4;
if(this.editor){
item=this.editor.get("item");
}
var _be5=null;
if(this.editor){
var _be6=this.editor.get("displayedValue");
}
if(item&&wm.isMobile){
this.selectedItem.setData(item);
}else{
if(item&&_be6==item.name){
_be4=item.id;
var _be5=this.dataSet?this.dataSet.getItem(_be4):null;
this.selectedItem.setData(_be5);
}else{
this.selectedItem.setData(null);
}
}
if(this.editor&&this.editor._lastValueReported===""&&_be6!==""){
this.editor._lastValueReported=_be6;
}
return this.inherited(arguments);
},selectItem:function(_be7){
if(!this.editor){
return;
}
var item=this.dataSet.getItem(_be7);
this.selectedItem.setData(item);
this.editor.set("value",this._getDisplayData(item),false);
if(wm.isMobile){
this.editor.item=item.getData();
}
}});
dojo.declare("wm.Lookup",wm.SelectMenu,{dataType:"",dataField:"",autoDataSet:true,startUpdate:true,maxResults:500,ignoreCase:true,postInit:function(){
if(this.autoDataSet&&this.formField){
this.createDataSet();
}else{
if(!this.autoDataSet){
this.startUpdate=false;
}
}
this.inherited(arguments);
},createDataSet:function(){
wm.fire(this.$.liveVariable,"destroy");
var _be8=this.getParentForm();
if(_be8){
if(wm.isInstanceType(_be8,wm.LiveForm)&&!_be8.dataSet){
return;
}
if(wm.isInstanceType(_be8,wm.DataForm)&&!_be8.dataSet&&!_be8.type){
return;
}
if(!wm.getFormLiveView||!wm.getFormField){
return;
}
var view=wm.getFormLiveView(_be8);
var _be9=wm.isInstanceType(_be8,wm.DataForm)?_be8.type:_be8.dataSet&&_be8.dataSet.type;
var ff=wm.getFormField(this);
try{
var _bea;
if(this.dataType){
_bea=this.dataType;
}else{
if(_be8 instanceof wm.ServiceInputForm){
var _beb=_be8.dataOutput._dataSchema;
if(_beb){
_bea=_beb[ff]?_beb[ff].type:null;
}
}else{
if(_be9&&_be9!="any"){
_bea=wm.typeManager.getType(_be9).fields[ff].type;
}else{
_bea="string";
}
}
}
}
catch(e){
}
if(view){
view.addRelated(ff);
}
var lv=this.dataSet=new wm.LiveVariable({name:"liveVariable",owner:this,autoUpdate:false,startUpdate:false,_rootField:view?ff:null,liveView:view,liveSource:view?undefined:_bea,maxResults:this.maxResults,ignoreCase:this.ignoreCase,refireOnDbChange:true,orderBy:this.orderBy});
this.selectedItem.setType(this.dataSet.type);
this.createDataSetWire(lv);
}
},createDataSetWire:function(_bec){
if(!this.$.binding){
new wm.Binding({name:"binding",owner:this});
}
var w=this._dataSetWire=new wm.Wire({name:"dataFieldWire",target:this,owner:this.$.binding,source:_bec.getId(),targetProperty:"dataSet"});
w.connectWire();
},setAutoDataSet:function(_bed){
this.autoDataSet=_bed;
if(this.autoDataSet){
this.createDataSet();
if(this.dataSet){
var _bee=this.debugAutoSetData();
this.update();
if(_bee){
app.debugDialog.endLogEvent(_bee);
}
}
}
},debugAutoSetData:function(){
if(app.debugDialog){
var _bef=app.debugDialog.newLogEvent({eventType:"update",sourceDescription:"Initializing "+this.getRuntimeId(),resultDescription:this.getRuntimeId()+".setAutoDataSet() called to populate Lookup editor from server",affectedId:this.getRuntimeId(),firingId:this.getRuntimeId(),method:"update"});
return _bef;
}
},_getFormSource:function(_bf0){
if(this.isAncestorInstanceOf(wm.RelatedEditor)){
var w=wm.data.getPropWire(_bf0,"dataSet");
return w&&w.source&&this.getRoot().getValueById(w.source);
}else{
var lf=this.isAncestorInstanceOf(wm.LiveForm)||this.isAncestorInstanceOf(wm.DataForm);
if(lf&&this.formField){
return lf.dataSet.getValue(this.formField);
}
}
},changed:function(){
if(this.isUpdating()){
return;
}
this.inherited(arguments);
if(wm.getParentForm){
var f=wm.getParentForm(this);
}
if(this.relationshipName&&!this.selectedItem.isEmpty()){
var _bf1=this.getParentForm();
var _bf2=_bf1.getParentForm();
_bf2.dataOutput.setValue(this.relationshipName,this.selectedItem);
}
}});
if(wm.isMobile){
wm.Lookup.extend({_createEditor:function(){
var e=this.inherited(arguments);
this.connect(e,"openDropDown",this,"_onOpenDropDown");
return e;
},_onOpenDropDown:function(){
this.inherited(arguments);
}});
}
dojo.declare("wm.FilteringLookup",wm.Lookup,{startUpdate:false,restrictValues:true,changeOnKey:true,pageSize:25,autoComplete:true,hasDownArrow:false,placeHolder:"Start typing to find matches",filterField:"",prepare:function(){
this.inherited(arguments);
this.maxResults=this.pageSize;
this.filterField=this.displayField;
this.orderBy="asc: "+this.displayField;
if(!this.autoDataSet){
this.changeOnKey=true;
}
},_onchange:function(_bf3){
if(this.disabled||this.readonly||!this.isActive()){
return;
}
var _bf4=this.autoDataSet&&this.getParentForm();
var _bf5=_bf3||this.editor.get("displayedValue");
if(_bf4){
var _bf6=this.dataSet.filter.getValue(this.filterField);
}
if(!this.editor.get("item")){
this.dataValue="";
}
if(_bf5!=this._lastQueryValue){
this._lastQueryValue=_bf5;
if(_bf4){
this.dataSet.filter.setValue(this.filterField,_bf5);
if(_bf5===undefined||_bf5===null||_bf5===""){
this.dataSet.setData([]);
}else{
this.dataSet.update();
}
}else{
this.displayValue=_bf5;
this.valueChanged("displayValue",_bf5);
this.dataSet.update();
}
}
},getDisplayValue:function(){
if(this.editor){
return this.editor.get("displayedValue");
}else{
return this.inherited(arguments);
}
},setDataValue:function(_bf7){
if(this.dataSet&&_bf7){
this.dataSet.setData(_bf7?[_bf7]:null);
}
this.inherited(arguments);
},setPageSize:function(_bf8){
this.maxResults=this.pageSize=_bf8;
},isActive:function(){
return this.editor._focused||this.editor.dropDown&&this.editor.dropDown.domNode.parentNode&&this.editor.dropDown.domNode.parentNode.style.display!="none";
}});
if(!wm.isMobile){
wm.FilteringLookup.extend({getEditorProps:function(_bf9,_bfa){
var p=this.inherited(arguments);
p.queryExpr="*";
return p;
},setDataSet:function(_bfb){
this.inherited(arguments,[_bfb,true]);
if(this.dataSet&&!this.dataSet.isEmpty()&&this.isActive()){
wm.job(this.getRuntimeId()+".handleSetDataSet",1,dojo.hitch(this,function(){
if(this.editor.declaredClass!="wm.dijit.form.ComboBox"){
var item=this.editor.get("item");
if(item){
if(item[this._storeNameField]!=this.editor.get("displayedValue")){
item=null;
}
}
if(!item&&this.editor.get("displayedValue")){
this.editor._startSearchFromInput();
}
this._onchange();
}
}));
}
},doOnchange:function(){
this._onchange();
if(this.editor.get("item")){
this.inherited(arguments);
}
},_end:0});
}else{
wm.FilteringLookup.extend({getEditorProps:function(_bfc,_bfd){
var p=this.inherited(arguments);
p.noFilter=true;
delete p.placeHolder;
return p;
},setDataSet:function(_bfe){
this.inherited(arguments,[_bfe,true]);
if(this.dataSet){
if(this.editor&&this.editor.dropDown){
this.editor.listSet.setDataSet(this.dataSet);
}
}
},_onOpenDropDown:function(){
var l=this.editor.listSet;
l.searchBar.setPlaceHolder(this.placeHolder);
if(this._searchBarChangeConnect){
dojo.disconnect(this._searchBarChangeConnect);
wm.Array.removeElement(this._connections,this._searchBarChangeConnect);
}
this._searchBarChangeConnect=l.searchBar.connect(l.searchBar,"onchange",this,function(_bff,_c00){
this._onchange(_bff);
});
},_end:0});
}
dojo.declare("wm.dijit.form.ComboBox",[dijit.form.ValidationTextBox,dijit._HasDropDown],{baseClass:"dijitTextBox dijitComboBox",popupClass:"wm.ListSet",forceWidth:false,autoWidth:false,value:"",noFilter:false,templateString:dojo.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t>\r\n\t\t\t    <!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0\r\n\t\t\t      WaveMaker: Unfortunate hack to replace input with span to avoid focus issues with mobile that cause keyboards to pop open -->\r\n<${buttonNodeType} class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),hasDownArrow:true,openOnClick:true,buildRendering:function(){
this.inherited(arguments);
this._buttonNode=this.domNode;
},createDropDown:function(){
this.dropDown=new wm.Dialog({owner:this.owner,corner:wm.device=="phone"?"cc":"cc",fixPositionNode:wm.device=="tablet"?this.focusNode:undefined,width:wm.device=="phone"?"100%":"350px",height:wm.device=="phone"?"100%":"600px",border:"1",borderColor:"#666",useContainerWidget:true,padding:"0",margin:"10",title:"",destroyRecursive:function(){
if(!this.isDestroyed){
this.destroy();
}
}});
this.dropDown.dialogScrim.connect(this.dropDown.dialogScrim.domNode,wm.isFakeMobile?"onclick":"ontouchstart",this.dropDown,"hide");
var c=this.dropDown.containerWidget;
c.setPadding("0");
c.setMargin("0");
this.listSet=wm.ListSet({owner:this.dropDown,parent:c,_noFilter:this.noFilter,selectionMode:"radio",captionAlign:"left",captionPosition:"top",caption:"",border:"0",editorBorder:false,padding:"0",width:"100%",height:"100%",onchange:dojo.hitch(this,function(_c01,_c02,_c03){
if(this._cupdating||_c03){
return;
}
var data=this.owner.allowNone&&this.listSet.grid.getSelectedIndex()==0?null:this.listSet.grid.selectedItem.getData();
var _c04=data?this.owner._getDisplayData(data):null;
if(data||this.listSet.grid.getSelectedIndex()==0){
this.set("value",_c04);
if(data){
data.name=this.listSet.grid.getCell(this.listSet.grid.getSelectedIndex(),"name");
}
this.set("item",data);
this.displayedValue=_c04;
this.owner.changed();
this.closeDropDown();
this.dropDown.hide();
}
})});
this.listSet.grid.setSelectionMode("radio");
this.closeButton=new wm.ToolButton({owner:this.owner,name:"closeButton",border:"1",borderColor:"#222",_classes:{domNode:["SelectCloseButton"]},width:"30px",height:"100%",margin:"4",padding:"0 4 0 4",parent:this.dropDown.titleBar,caption:"X",onclick:dojo.hitch(this,function(){
this.closeDropDown();
this.dropDown.hide();
})});
},openDropDown:function(_c05){
app.addHistory({id:this.owner.getRuntimeId(),options:{},title:"Hide Popup"});
if(!this.dropDown){
this.createDropDown();
}
this.listSet.setShowing(false);
this._cupdating=true;
this.dropDown.setTitle(this.owner.caption);
this.listSet.setDataSet(null);
this.dropDown.setShowing(true);
if(this.owner.displayExpression||this.owner.displayMenuExpression){
this.listSet.setDisplayField("");
this.listSet.setDisplayExpression(this.owner.displayMenuExpression||this.owner.displayExpression);
}else{
this.listSet.setDisplayExpression("");
this.listSet.setDisplayField(this.owner.displayField);
}
if(this.owner.allowNone){
if(!this.owner._dataSet){
this.owner._dataSet=new wm.Variable();
}
this.owner._dataSet.setDataSet(this.owner.dataSet);
var _c06={};
for(var _c07 in this.owner._dataSet._dataSchema){
_c06[_c07]="";
}
this.owner._dataSet.addItem(_c06,0);
this.listSet.setDataSet(this.owner._dataSet);
}else{
this.listSet.setDataSet(this.owner.dataSet);
}
wm.onidle(this,function(){
this.listSet.setShowing(true);
this.listSet.grid._render();
this._cupdating=true;
this.listSet.grid._cupdating=true;
this.listSet.setDataValue(this.owner.dataValue);
this.listSet.grid._cupdating=false;
this._cupdating=false;
});
this._opened=true;
return true;
}});
}
if(!dojo._hasResource["wm.base.widget.AppRoot"]){
dojo._hasResource["wm.base.widget.AppRoot"]=true;
dojo.provide("wm.base.widget.AppRoot");
dojo.declare("wm.AppRoot",wm.Container,{classNames:"wmapproot",width:"",height:"",deviceSize:"",create:function(){
this.inherited(arguments);
this.deviceSize=wm.deviceSize||this.calcDeviceSize(window.innerWidth||document.documentElement.clientWidth);
app.valueChanged("deviceSize",this.deviceSize);
},build:function(){
this.domNode=this.owner.domNode=dojo.byId(this.owner.domNode)||document.body;
this.domNode.style.cssText+=this.style+"overflow: hidden; position: relative;";
dojo.attr(this.domNode,"role","application");
},init:function(){
var _c08=this.domNode.id;
this.inherited(arguments);
this.domNode.id=_c08;
this._isOldAndroidBrowser=(navigator.vendor||"").match(/Google/i)&&navigator.userAgent.match(/android/i);
if(!this._isOldAndroidBrowser&&"onorientationchange" in window){
window.addEventListener("orientationchange",dojo.hitch(this,"resize"));
}else{
this.subscribe("window-resize",this,"resize");
}
},getRuntimeId:function(){
return "approot";
},_onOrientationChange:function(){
this._inResize=true;
var _c09=Math.min(screen.width,window.innerWidth);
var _c0a=Math.min(screen.height,window.innerHeight);
var max=Math.max(_c09,_c0a);
var min=Math.min(_c09,_c0a);
switch(window.orientation){
case 90:
case -90:
case 270:
this.setBounds(null,null,max,min);
if(app.appTitleBar){
app.appTitleBar.hide();
}
break;
default:
this.setBounds(null,null,min,max);
if(app.appTitleBar){
app.appTitleBar.show();
}
}
app.valueChanged("deviceSize",this.deviceSize);
dojo.publish("deviceSizeRecalc");
this.reflow();
this._inResize=false;
},resize:function(){
this._inResize=true;
if(!wm.deviceSize){
var _c0b=this.deviceSize;
this.updateBounds();
this.deviceSize=this.calcDeviceSize(this.bounds.w);
if(_c0b!=this.deviceSize){
app.valueChanged("deviceSize",this.deviceSize);
dojo.publish("deviceSizeRecalc");
}
}
this.reflow();
if(this._isOldAndroidBrowser&&app.wmMinifiedDialogPanel){
app.wmMinifiedDialogPanel.hide();
wm.onidle(app.wmMinifiedDialogPanel,"show");
}
this._inResize=false;
},updateBounds:function(){
this._percEx={w:100,h:100};
var pn=this.domNode.parentNode;
var _c0c,_c0d;
if(window["PhoneGap"]){
_c0d=Math.min(screen.height,window.innerHeight);
pn.style.height=_c0d+"px";
_c0c=Math.min(screen.width,window.innerWidth||20000);
}else{
if(wm.isIOS){
if(window.orientation==90||window.orientation==-90){
var min=Math.min(window.innerWidth,window.innerHeight);
var max=Math.max(window.innerWidth,window.innerHeight);
_c0c=max;
_c0d=min;
}else{
_c0d=Math.max(window.innerHeight,window.innerWidth);
_c0c=Math.min(window.innerHeight,window.innerWidth);
}
this.domNode.style.position="relative";
}else{
if(wm.device=="phone"){
}else{
if(wm.isMobile){
pn.style.height="100%";
}
}
}
}
if(wm.isMobile){
if(!_c0c){
_c0c=Math.min(screen.width,window.innerWidth||20000,pn.offsetWidth);
}
if(!_c0d){
_c0d=Math.min(screen.height,window.innerHeight||20000,pn.offsetHeight||1000);
}
}else{
_c0c=pn.offsetWidth;
_c0d=pn.offsetHeight;
}
this.setBounds(0,0,_c0c,_c0d);
},forceRerenderComponents:function(wIn){
wm.forEachWidget(wIn,function(w){
w.invalidCss=true;
w.renderCss();
});
},reflow:function(){
if(this._cupdating){
return;
}
if(!this._inResize){
this.updateBounds();
}
this.renderBounds();
if(window["getComputedStyle"]){
try{
this.domNode.style.borderRight="solid 1px transparent";
var _c0e=Number(window.getComputedStyle(this.domNode).getPropertyValue("border-right-width").replace(/px/,""));
var _c0f=app._currentZoomLevel;
app._currentZoomLevel=1/_c0e;
if(app._currentZoomLevel==1){
app._currentZoomLevel=0;
}
if(_c0f&&_c0f!=app._currentZoomLevel){
this.forceRerenderComponents(this);
var self=this;
wm.forEachProperty(app.$,function(c){
if(c instanceof wm.Dialog){
self.forceRerenderComponents(c);
}
});
wm.forEachProperty(wm.Page.byName,function(_c10){
dojo.forEach(_c10,function(page){
wm.forEachProperty(page.$,function(c){
if(c instanceof wm.Dialog){
self.forceRerenderComponents(c);
}
});
});
});
}
this.domNode.style.borderRight="solid 0px transparent";
dojo.publish("BrowserZoomed");
}
catch(e){
}
}
this.inherited(arguments);
},calcDeviceSize:function(_c11){
if(_c11>=1800){
return "1800";
}else{
if(_c11>=1400){
return "1400";
}else{
if(_c11>=1150){
return "1150";
}else{
if(_c11>=900){
return "900";
}else{
if(_c11>=650){
return "650";
}else{
if(_c11>=450){
return "450";
}else{
if(_c11>=300){
return "300";
}else{
return "200";
}
}
}
}
}
}
}
}});
}
if(!dojo._hasResource["wm.base.widget.Label"]){
dojo._hasResource["wm.base.widget.Label"]=true;
dojo.provide("wm.base.widget.Label");
dojo.declare("wm.Label",[wm.Control,wm.TouchMixinOptional],{width:"200px",height:"24px",caption:"Label",link:"",display:"",padding:4,singleLine:true,align:"none",init:function(){
dojo.addClass(this.domNode,"wmlabel");
this.inherited(arguments);
if(!wm.isMobile){
this.connect(this.domNode,"onclick",this,"_onclick");
}
},build:function(){
this.inherited(arguments);
if(!this.noSizeNode){
this.sizeNode=document.createElement("div");
dojo.addClass(this.sizeNode,"wmSizeNode");
this.domNode.appendChild(this.sizeNode);
}else{
this.sizeNode=this.domNode;
}
},onTouchEnd:function(evt,_c12){
if(_c12){
return;
}
if(document.activeElement.tagName=="INPUT"){
var id=document.activeElement.id;
var d=dijit.byId(id);
if(d){
d._onBlur();
}else{
document.activeElement.blur();
}
}
if(!this._disabled){
this.click(evt);
}
},_onclick:function(_c13){
if(this.name=="label2"){
}
if(this._disabled){
return;
}
var _c14=dojo.isIE&&_c13?{clientX:_c13.clientX,clientY:_c13.clientY,offsetX:_c13.offsetX,offsetY:_c13.offsetY,screenX:_c13.screenX,screenY:_c13.screenY,pageX:_c13.pageX,pageY:_c13.pageY,x:_c13.x,y:_c13.y,target:_c13.target,currentTarget:_c13.currentTarget,"type":_c13.type}:_c13||{};
window.setTimeout(dojo.hitch(this,"click",_c14),5);
},click:function(e){
this.onclick(e);
},postInit:function(){
this.inherited(arguments);
this.caption=this.label||this.content||this.caption;
delete this.content;
delete this.label;
this.renderLabel();
this.valueChanged("caption",this.caption);
this.valueChanged("link",this.link);
if(this.onclick!=this.constructor.prototype.onclick){
dojo.addClass(this.domNode,"onClickEvent");
}
},renderLabel:function(){
if(this._loading){
return;
}
var c=this.caption;
if(this.$.format){
c=this.$.format.format(c);
}else{
if(this.display&&dojo.isFunction(this.owner[this.display])){
try{
c=this.owner[this.display](this,c);
}
catch(e){
console.error("Formatter error in "+this.toString()+": "+e);
}
}
}
if(this.link){
if(this._disabled){
c=["<a href=\"#\">",c,"</a>"].join("");
}else{
c=["<a ",(this.link.indexOf("#")==-1&&this.link.indexOf("javascript")==-1)?"target=\"_blank\" ":"","href=\"",this.link,"\">",c,"</a>"].join("");
}
}
if(this.domNode.innerHTML!=c){
this.sizeNode.innerHTML=c;
}
var _c15=(this.singleLine||this.autoSizeWidth)?"nowrap":"normal";
if(this.domNode.style.whiteSpace!=_c15){
this.domNode.style.whiteSpace=_c15;
}
var _c16=(this.align=="none")?"":this.align;
if(this._align!=_c16&&(!this.styles||!this.styles.textAlign)){
this.domNode.style.textAlign=_c16;
this._align=_c16;
}
},setDisabled:function(_c17){
this.inherited(arguments);
if(!this._cupdating){
this.renderLabel();
}
},setCaption:function(_c18){
if(_c18==undefined){
_c18="";
}
var _c19=this.sizeNode.innerHTML;
if(_c18&&dojo.isArray(_c18)){
_c18=_c18.join(", ");
}else{
if(_c18&&dojo.isObject(_c18)&&(!this.$.format||this.$.format instanceof wm.ArrayFormatter===false)){
_c18="";
}
}
this.caption=_c18;
this.renderLabel();
if(_c19!=this.sizeNode.innerHTML&&(this.autoSizeHeight||this.autoSizeWidth)){
this.scheduleAutoSize();
}
this.valueChanged("caption",_c18);
},scheduleAutoSize:function(){
this._needsAutoSize=true;
return wm.job(this.getRuntimeId()+": doAutoSize",10,dojo.hitch(this,function(){
this.doAutoSize(true,false);
}));
},_onShowParent:function(){
if(this._needsAutoSize){
this.scheduleAutoSize();
}
},doAutoSize:function(_c1a,_c1b){
if(this._doingAutoSize||!this.autoSizeHeight&&!this.autoSizeWidth){
return;
}
if(!_c1b&&!this._needsAutoSize){
return;
}
if(this.isAncestorHidden()){
return;
}
this._doingAutoSize=true;
this._needsAutoSize=false;
var _c1c=this.sizeNode;
var _c1d=_c1c.offsetHeight;
var _c1e=_c1c.offsetWidth;
if(this.autoSizeHeight){
var _c1f=_c1d+this.padBorderMargin.t+this.padBorderMargin.b;
if(_c1f<this.minHeight){
_c1f=this.minHeight;
}
if(_c1e>this.bounds.w){
_c1f+=17;
}
this.bounds.h=_c1f;
this.height=_c1f+"px";
var p=this.parent;
while(p.parent&&(p.autoSizeHeight||p.fitToContentHeight)){
p=p.parent;
}
p.delayedReflow();
}
if(this.autoSizeWidth){
var _c20=_c1e+this.padBorderMargin.l+this.padBorderMargin.r;
if(_c1d>this.bounds.h){
_c20+=17;
}
this.bounds.w=_c20;
this.width=_c20+"px";
var p=this.parent;
while(p.parent&&(p.autoSizeWidth||p.fitToContentWidth)){
p=p.parent;
}
p.delayedReflow();
}
if(this.isDesignLoaded()&&dojo.indexOf(studio.designer.selected,this)!=-1){
studio.inspector.reinspect();
}
this._doingAutoSize=false;
},setLink:function(_c21){
var _c22=this.link;
this.link=_c21;
this.renderLabel();
this.valueChanged("link",_c21);
},setSingleLine:function(_c23){
var _c24=this.singleLine;
this.singleLine=_c23;
if(_c24!=_c23){
this.domNode.style.lineHeight=(_c23)?this.bounds.h+"px":"normal";
}
this.renderLabel();
if(_c23&&this.autoSizeHeight){
this.autoSizeHeight=false;
}
if(_c23!=_c24&&(this.autoSizeHeight||this.autoSizeWidth)){
this.scheduleAutoSize();
}
},setAlign:function(_c25){
this.align=_c25;
this.renderLabel();
},formatChanged:function(){
this.renderLabel();
},onclick:function(_c26){
},toHtml:function(){
var _c27=this.toHtmlStyles();
return "<div "+_c27+" style='text-align:"+(this.align||"left")+";' id='"+this.domNode.id+"'>"+(this.sizeNode.innerHTML)+"</div>";
}});
wm.Label.sizingNode=document.createElement("div");
}
if(!dojo._hasResource["wm.base.widget.Spacer"]){
dojo._hasResource["wm.base.widget.Spacer"]=true;
dojo.provide("wm.base.widget.Spacer");
dojo.declare("wm.Spacer",wm.Control,{classNames:"wmspacer",border:0,getMinWidthProp:function(){
return this.minWidth||0;
},getMinHeightProp:function(){
return this.minHeight||0;
}});
}
if(!dojo._hasResource["wm.base.widget.Panel"]){
dojo._hasResource["wm.base.widget.Panel"]=true;
dojo.provide("wm.base.widget.Panel");
dojo.declare("wm.Panel",wm.Container,{classNames:"wmcontainer wmpanel",setThemeStyleType:function(_c28){
var _c29=this.write("");
_c29=dojo.fromJson(_c29.replace(/^.*?\:/,""));
var name=this.name;
var _c2a=this.parent;
var _c2b=this.owner;
var _c2c=dojo.indexOf(this.parent.c$,this);
this.destroy();
var _c2d=_c2a.createComponent(name,"wm."+(_c28||"")+"Panel",_c29[1],_c29[2],_c29[3],_c2b);
_c2a.moveControl(_c2d,_c2c);
_c2a.reflow();
studio.refreshVisualTree();
studio.select(_c2d);
},getThemeStyleType:function(){
return this.declaredClass.replace(/^wm\.(.*)Panel/,"$1");
}});
dojo.declare("wm.MainContentPanel",wm.Panel,{classNames:"wmcontainer wmpanel MainContent"});
dojo.declare("wm.EmphasizedContentPanel",wm.Panel,{classNames:"wmcontainer wmpanel EmphasizedContent"});
dojo.declare("wm.HeaderContentPanel",wm.Panel,{classNames:"wmcontainer wmpanel HeaderContent"});
dojo.declare("wm.FancyPanel",wm.Panel,{freeze:true,classNames:"wmcontainer wmfancypanel",title:"Panel Heading",labelWidget:null,containerWidget:null,layoutKind:"top-to-bottom",innerLayoutKind:"top-to-bottom",innerHorizontalAlign:"left",innerVerticalAlign:"top",margin:"6",padding:"0",border:"0",innerBorder:"3",borderColor:"#404040",width:"100%",height:"100%",_topImgWidth:0,_bottomImgWidth:0,labelHeight:30,themeStyleType:"ContentPanel",init:function(){
if(!this.labelHeight){
this.labelHeight=30;
}
var _c2e=this._classes;
var _c2f={domNode:[]};
for(var i=_c2e.domNode.length-1;i>=0;i--){
if(_c2e.domNode[i].match(/^wm_Border_(Bottom|Drop)/)){
_c2f.domNode.push(_c2e.domNode[i]);
wm.Array.removeElementAt(_c2e.domNode,i);
}
}
try{
this.layout=wm.layout.cache["top-to-bottom"];
this.inherited(arguments);
this._isDesign=this.isDesignLoaded();
this.labelWidget=new wm.Label({border:this.innerBorder,borderColor:this.borderColor,showing:Boolean(this.title),_classes:_c2e,name:"labelWidget",caption:this.title,width:"100%",height:this.labelHeight+"px",padding:"0,0,0,10",owner:this,parent:this,flags:{notInspectable:true}});
var _c30=String(this.innerBorder);
_c30=this._parseExtents(_c30);
this.containerWidget=new wm.Container({_classes:_c2f,name:"containerWidget",layoutKind:this.innerLayoutKind,width:"100%",height:"100%",owner:this,parent:this,noInspector:true,autoScroll:this.autoScroll,horizontalAlign:this.innerHorizontalAlign,verticalAlign:this.innerVerticalAlign,fitToContentHeight:this.fitToContentHeight,fitToContentWidth:this.fitToContentWidth,border:"0,"+_c30.r+","+_c30.b+","+_c30.l,borderColor:this.borderColor,_assignChildrenToOwner:this.owner});
this.containerWidget.setLayoutKind(this.innerLayoutKind);
this.widgets.labelWidget=this.labelWidget;
this.widgets.containerWidget=this.containerWidget;
this.setTitle(this.title);
}
catch(e){
alert("PANEL:"+e);
}
},setFitToContentHeight:function(_c31){
this.inherited(arguments);
if(this.containerWidget){
this.containerWidget.setFitToContentHeight(_c31);
if(!_c31){
this.containerWidget.setHeight("100%");
}
}
},setFitToContentWidth:function(_c32){
this.inherited(arguments);
if(this.containerWidget){
this.containerWidget.setFitToContentWidth(_c32);
if(!_c32){
this.containerWidget.setWidth("100%");
}
}
},setBorder:function(_c33){
wm.Control.prototype.setBorder.call(this,"0");
},setShowing:function(_c34){
this.inherited(arguments);
if(dojo.isIE<9){
if(this._topLeftCornerImg){
this._topLeftCornerImg.style.display=(this.showing)?"block":"none";
this._topRightCornerImg.style.display=(this.showing)?"block":"none";
}
if(this._bottomLeftCornerImg){
this._bottomLeftCornerImg.style.display=(this.showing)?"block":"none";
this._bottomRightCornerImg.style.display=(this.showing)?"block":"none";
}
}
},getMinHeightProp:function(){
if(this.minHeight){
return Number(this.minHeight);
}
if(!this.containerWidget){
return this.inherited(arguments);
}
return this.containerWidget.getMinHeightProp()+((this.labelWidget&&this.labelWidget.showing)?this.labelWidget.bounds.h:0)+30;
},getPreferredFitToContentWidth:function(){
var _c35=this.padBorderMargin.r+this.padBorderMargin.l;
var max=0;
var sum=0;
var v;
for(var i=0,c;c=this.c$[i];i++){
if(this.layout.inFlow(c)){
if(c instanceof wm.Container){
if(c.fitToContentWidth||c._percEx.w){
v=c.getPreferredFitToContentWidth();
}else{
v=c.bounds.w;
}
}else{
if(c._percEx.w){
v=c.getMinWidthProp();
}else{
v=c.bounds.w;
}
}
max=Math.max(max,v);
sum+=v;
}
}
var _c36=((this.layoutKind=="top-to-bottom")?max:sum)+_c35;
return Math.max(this.minWidth,Math.max(_c36,30));
},getPreferredFitToContentHeight:function(){
var _c37=this.padBorderMargin.t+this.padBorderMargin.b;
var max=0;
var sum=0;
var v;
for(var i=0,c;c=this.c$[i];i++){
if(this.layout.inFlow(c)){
if(c instanceof wm.Container){
if(c.fitToContentHeight||c._percEx.h){
v=c.getPreferredFitToContentHeight();
}else{
v=c.bounds.h;
}
}else{
if(c.fitToContentHeight||c._percEx.h){
v=c.getMinHeightProp();
}else{
v=c.bounds.h;
}
}
max=Math.max(max,v);
sum+=v;
}
}
var _c38=((this.layoutKind=="left-to-right")?max:sum)+_c37;
return Math.max(this.minHeight,Math.max(_c38,15));
},destroy:function(){
if(dojo.isIE<9){
if(this._topLeftCornerImg){
dojo.destroy(this._topLeftCornerImg);
dojo.destroy(this._topRightCornerImg);
}
if(this._bottomLeftCornerImg){
dojo.destroy(this._bottomLeftCornerImg);
dojo.destroy(this._bottomRightCornerImg);
}
}
this.inherited(arguments);
},flow:function(){
this.inherited(arguments);
if(dojo.isIE<9){
this.renderCorners();
}
},renderCorners:function(){
if(!this._topLeftCornerImg){
return;
}
if(this._topLeftCornerImg.className.match(/px/)){
this._topLeftCornerImg.style.top=this._topRightCornerImg.style.top=(this.bounds.t+this.marginExtents.t)+"px";
this._topLeftCornerImg.style.left=(this.bounds.l+this.marginExtents.l)+"px";
this._topRightCornerImg.style.left=(this.bounds.r-this._topImgWidth-this.marginExtents.r)+"px";
}
if(this._bottomLeftCornerImg.className.match(/px/)){
this._bottomLeftCornerImg.style.top=this._bottomRightCornerImg.style.top=(this.bounds.b-this.marginExtents.b-this._bottomImgHeight)+"px";
this._bottomLeftCornerImg.style.left=(this.bounds.l+this.marginExtents.l)+"px";
this._bottomRightCornerImg.style.left=(this.bounds.r-this._bottomImgWidth-this.marginExtents.r)+"px";
}
},postInit:function(){
var _c39=[];
for(var i=0;i<this.c$.length;i++){
var c=this.c$[i];
if(this.$[c.name]!=c&&c instanceof wm.Control){
_c39.push(c);
}
}
for(var i=0;i<_c39.length;i++){
var c=_c39[i];
c.setParent(this.containerWidget);
if(c.designWrapper){
c.designWrapper.controlParentChanged();
}
}
this.inherited(arguments);
},writeComponents:function(_c3a,_c3b){
var _c3c=[];
if(this.containerWidget){
_c3c=_c3c.concat(this.containerWidget.writeComponents(_c3a,_c3b));
}
if(this.components.binding&&!wm.isEmpty(this.components.binding.$)){
_c3c=_c3c.concat(this.components.binding.write(_c3a,_c3b));
}
return _c3c;
},setInnerHorizontalAlign:function(_c3d){
this.innerHorizontalAlign=_c3d;
if(this.containerWidget){
this.containerWidget.setHorizontalAlign(_c3d);
}
},setInnerVerticalAlign:function(_c3e){
this.innerVerticalAlign=_c3e;
if(this.containerWidget){
this.containerWidget.setVerticalAlign(_c3e);
}
},setInnerLayoutKind:function(_c3f){
this.innerLayoutKind=_c3f;
if(this.containerWidget){
this.containerWidget.setLayoutKind(_c3f);
}
},setInnerBorder:function(_c40){
_c40=String(_c40);
this.innerBorder=_c40;
this.labelWidget.setBorder(_c40);
var b=this._parseExtents(_c40);
this.containerWidget.setBorder("0,"+b.r+","+b.b+","+b.l);
},setLayoutKind:function(_c41){
wm.Panel.prototype.setLayoutKind.call(this,"top-to-bottom");
if(this.containerWidget){
this.setInnerLayoutKind(_c41);
}
},setTitle:function(_c42){
var _c43=this.title;
this.title=_c42;
if(this.containerWidget){
this.labelWidget.setCaption(_c42);
this.labelWidget.setShowing(Boolean(_c42));
}
},setThemeStyleType:function(_c44){
this.containerWidget.setThemeStyleType(_c44);
this.themeStyleType=_c44;
},setLabelHeight:function(_c45){
this.labelHeight=_c45;
this.labelWidget.setHeight(_c45);
},toHtml:function(_c46){
var _c47=_c46-12;
return "<div id='"+this.domNode.id+"' class='"+this.classNames+"'><div class='wmFancyPanel-labelWidget'>"+this.title+"</div><div class='wmFancyPanel-containerWidget'>"+this.containerWidget.toHtml(_c47)+"</div></div>";
}});
}
if(!dojo._hasResource["wm.base.widget.Layout"]){
dojo._hasResource["wm.base.widget.Layout"]=true;
dojo.provide("wm.base.widget.Layout");
dojo.declare("wm.Layout",wm.Container,{mobileFoldingType:"wm.TabLayers",classNames:"wmlayout",autoScroll:true,fit:false,width:"100%",height:"100%",_mobileFolded:false,create:function(){
this.inherited(arguments);
},build:function(){
this.inherited(arguments);
this.domNode.style.cssText+=this.style+"overflow: hidden; position: relative;";
},init:function(){
if(this.isDesignLoaded()&&this.owner==studio.page){
this.parent=studio.designer;
}else{
if(this.owner&&this.owner.owner instanceof wm.PageContainer){
this.parent=this.owner.owner;
}
}
this.inherited(arguments);
this.subscribe("deviceSizeRecalc",this,"resize");
},postInit:function(){
this.inherited(arguments);
if(app.appRoot.deviceSize=="tiny"||app.appRoot.deviceSize=="300"){
this.foldUI();
}
},resize:function(){
if(app.appRoot.deviceSize=="tiny"||app.appRoot.deviceSize=="300"){
if(!this._mobileFolded){
this.foldUI();
}
}else{
if(this._mobileFolded){
this.unfoldUI();
}
}
},foldUI:function(){
if(!this.owner.enableMobileFolding){
return;
}
this._mobileFolded=true;
var _c48;
var _c49=[];
var _c4a=false;
wm.forEachWidget(this,function(w){
if(w._mobileFoldingParent){
}else{
if(w.mobileFolding){
_c49.push(w);
w._mobileFoldingParentIndex=w.parent.indexOfControl(w);
_c4a=true;
}else{
if(w.isMobileFoldingParent&&!_c48){
_c48=w;
}
}
}
},true);
if(!_c48){
_c48=this;
}
if(_c49.length>1||_c48 instanceof wm.Layers&&_c48.layers.length>=1&&_c49.length>=1){
var _c4b;
if(!_c48.showing){
_c48.setShowing(true);
}
if(_c48 instanceof wm.Layers==false){
var ctor=dojo.getObject(this.mobileFoldingType)||wm.TabLayers;
this.mobileFoldingLayers=new ctor({owner:this.owner,parent:_c48,name:"_mobileLayers",width:"100%",height:"100%"});
this.mobileFoldingLayers.setIndexInParent(0);
_c48=this.mobileFoldingLayers;
}else{
this.owner._mobileLayers=_c48;
_c48.setIndexInParent(_c49[0].getIndexInParent());
}
var _c4c=_c48.transition;
_c48.transition="none";
_c48._cupdating=true;
_c49=_c49.sort(function(a,b){
if(a.mobileFoldingIndex===b.mobileFoldingIndex||a.mobileFoldingIndex>b.mobileFoldingIndex){
return 1;
}else{
return -1;
}
});
for(var i=0;i<_c49.length;i++){
_c49[i]._mobileFoldingParent=_c49[i].parent;
if(_c49[i] instanceof wm.Layer==false){
_c49[i]._mobileFoldingWidth=_c49[i].width;
_c49[i]._mobileFoldingHeight=_c49[i].height;
var l=_c48.addLayer(_c49[i].mobileFoldingCaption,true);
_c49[i].setParent(l);
_c49[i].setWidth("100%");
_c49[i].setHeight("100%");
l._mobileFoldingGenerated=true;
}else{
if(_c49[i].parent!=_c48){
var l=_c49[i];
_c49[i].setParent(_c48);
}else{
var l=_c49[i];
}
}
if(String(_c49[i].mobileFoldingIndex).length){
_c48.moveLayerIndex(_c48.layers[_c48.layers.length-1],Number(_c49[i].mobileFoldingIndex));
if(_c49[i].active){
_c48.layerIndex=_c49[i].getIndex();
}
}
}
_c48._cupdating=false;
if(_c4b){
_c4b.activate();
}else{
_c48.setLayerIndex(0);
}
_c48.transition=_c4c;
if(this.mobileFoldingLayers){
for(var i=1;i<this.c$.length;i++){
var c=this.c$[i];
if(c.showing){
c.hide();
c._mobileFoldingShowing=true;
}
}
}
}
wm.fire(this.owner,"onMobileFolding");
},unfoldUI:function(){
if(!this.owner.enableMobileFolding){
return;
}
this._mobileFolded=false;
if(this.mobileFoldingLayers){
for(var i=1;i<this.c$.length;i++){
var c=this.c$[i];
if(c._mobileFoldingShowing){
c.setShowing(true);
delete c._mobileFoldingShowing;
}
}
}
var _c4d=[];
wm.forEachWidget(this,function(w){
if(w._mobileFoldingParent){
if(w.parent!=w._mobileFoldingParent){
w.setParent(w._mobileFoldingParent);
}
if(w instanceof wm.Layer){
w.parent.setLayerIndex(w,w._mobileFoldingParentIndex);
}else{
w.parent.moveControl(w,w._mobileFoldingParentIndex);
}
if(w._mobileFoldingWidth){
w.setWidth(w._mobileFoldingWidth);
w.setHeight(w._mobileFoldingHeight);
}
delete w._mobileFoldingParent;
delete w._mobileFoldingParentIndex;
}
if(w._mobileFoldingGenerated){
_c4d.push(w);
}
},true);
var _c4e;
var _c4f;
dojo.forEach(_c4d,function(w){
w._cupdating=true;
if(!_c4f){
_c4f=w.parent;
_c4e=_c4f.layerIndex;
}
if(w.getIndex()>=w.parent.layerIndex){
_c4e--;
}
w.destroy();
w._cupdating=false;
});
if(this.mobileFoldingLayers){
this.mobileFoldingLayers.destroy();
delete this.mobileFoldingLayers;
}
delete this.owner._mobileLayers;
if(_c4f&&!_c4f.isDestroyed){
_c4f.setLayerIndex(Math.max(0,_c4e));
}
wm.fire(this.owner,"onMobileUnfolding");
},updateBounds:function(){
this._percEx={w:100,h:100};
this.setBounds(this.parent.getContentBounds());
},reflow:function(){
if(this._cupdating||this.isDestroyed){
return;
}
this.updateBounds();
this.renderBounds();
this.inherited(arguments);
}});
wm.LayoutBox=wm.Layout;
}
if(!dojo._hasResource["wm.base.widget.Bevel"]){
dojo._hasResource["wm.base.widget.Bevel"]=true;
dojo.provide("wm.base.widget.Bevel");
dojo.declare("wm.Bevel",wm.Widget,{className:"wmbevel",flex:0,bevelSize:4,init:function(){
this.inherited(arguments);
},getOrientedStyleName:function(){
return this.className+" "+this.className+(this.vertical?"-h":"-v");
},addOrientation:function(){
dojo.addClass(this.domNode,this.getOrientedStyleName());
},removeOrientation:function(){
dojo.removeClass(this.domNode,this.getOrientedStyleName());
},updateSize:function(){
var h=(this.parent||0).layoutKind=="left-to-right",d=this.bevelSize+"px";
this.setWidth(h?d:"100%");
this.setHeight(h?"100%":d);
},setParent:function(){
this.inherited(arguments);
this.addOrientation();
this.updateSize();
},toHtml:function(){
return "<hr/>";
}});
}
if(!dojo._hasResource["wm.base.drag.capture"]){
dojo._hasResource["wm.base.drag.capture"]=true;
dojo.provide("wm.base.drag.capture");
kit=dojo;
kit.declare("wm.Capture",null,{isCaptured:false,setEvents:function(){
this.events={};
kit.forEach(arguments,kit.hitch(this,"addEvent"));
},addEvent:function(_c50){
if(!this[_c50]){
this[_c50]=function(){
};
}
this.events[_c50]=kit.hitch(this,_c50);
},capture:function(){
if(this.isCaptured){
return;
}
this.doCapture();
this.isCaptured=true;
},release:function(){
if(!this.isCaptured){
return;
}
this.doRelease();
this.isCaptured=false;
}});
if(kit.isIE){
wm.Capture.extend({_bind:function(_c51,_c52,_c53){
var on="on"+_c52,old=_c51[on];
_c51[on]=function(){
_c53(kit.fixEvent());
};
return old;
},_unbind:function(_c54,_c55,_c56){
var on="on"+_c55;
_c54[on]=_c56;
},doCapture:function(){
var n=document.body,e,oldf,newf;
n.setCapture(true);
this._captures={};
for(var i in this.events){
if(!(0)[i]){
this._captures[i]=this._bind(n,i,this.events[i]);
}
}
},doRelease:function(){
var n=document.body;
for(var i in this._captures){
if(!(0)[i]){
this._unbind(n,i,this._captures[i]);
}
}
this._captures=null;
n.releaseCapture(true);
}});
}else{
wm.Capture.extend({doCapture:function(_c57){
for(var i in this.events){
if(!(0)[i]){
document.addEventListener(i,this.events[i],true);
}
}
},doRelease:function(){
for(var i in this.events){
if(!(0)[i]){
document.removeEventListener(i,this.events[i],true);
}
}
this.isCaptured=false;
}});
}
kit.declare("wm.MouseCapture",wm.Capture,{constructor:function(){
this.setEvents("mousemove","mouseup","mouseout","click");
},mousedown:function(e){
kit.stopEvent(e);
this.capture();
},mousemove:function(e){
},mouseout:function(e){
},mouseup:function(e){
this.release();
kit.stopEvent(e);
},click:function(e){
alert("MouseCapture saw a click!");
}});
}
if(!dojo._hasResource["wm.base.drag.drag"]){
dojo._hasResource["wm.base.drag.drag"]=true;
dojo.provide("wm.base.drag.drag");
dojo.declare("wm.Drag",null,{hysteresis:4,dx:0,dy:0,px:0,py:0,constructor:function(){
this.initNodes();
},initNodes:function(){
this.scrimNode=document.createElement("div");
var css="position: absolute; z-index: 200; width: 100%; height: 100%; top: 0; left: 0; display: none;";
css+="background-color: transparent;";
this.scrimNode.style.cssText=css;
document.body.appendChild(this.scrimNode);
},setCursor:function(_c58){
if(!this.avatarNode){
this.scrimNode.style.cursor=_c58;
return;
}
if(_c58=="no-drop"){
dojo.addClass(this.avatarNode,"invalidDropCSS");
}else{
dojo.removeClass(this.avatarNode,"invalidDropCSS");
}
this.scrimNode.style.cursor="default";
},mousedown:function(e){
this.inherited(arguments);
this.mouseIsDown=true;
this.dragging=false;
this.dx=0;
this.dy=0;
this.px=e.pageX;
this.py=e.pageY;
if(this.scrimEarly){
}
},mouseout:function(e){
if(this.mouseIsDown&&!this.dragging){
this.start(e);
}
},mousemove:function(e){
if(this.mouseIsDown){
this.dx=e.pageX-this.px;
this.dy=e.pageY-this.py;
if(this.dragging){
this.drag(e);
}else{
if(Math.sqrt(this.dx*this.dx+this.dy*this.dy)>this.hysteresis){
this.start(e);
}
}
}
},start:function(e){
this.dragging=true;
wm.showHideNode(this.scrimNode,true);
this.onstart(e);
},drag:function(e){
this.ondrag(e);
},mouseup:function(e){
this.inherited(arguments);
this.mouseIsDown=false;
this.finish();
if(this.dragging){
this.dragging=false;
this.drop();
}
},drop:function(){
this.ondrop();
},finish:function(){
wm.showHideNode(this.scrimNode,false);
},onstart:function(e){
},ondrag:function(e){
},ondrop:function(){
}});
dojo.declare("wm.MouseDrag",[wm.MouseCapture,wm.Drag],{});
dojo.declare("wm.DragDropper",wm.MouseDrag,{initNodes:function(){
this.inherited(arguments);
this.avatarNode=document.createElement("div");
dojo.addClass(this.avatarNode,"dragAvatarCSS");
this.avatarNode.style.cssText="display: none;";
this.avatarNode.innerHTML="(control)";
this.scrimNode.appendChild(this.avatarNode);
},showHideAvatar:function(_c59){
wm.showHideNode(this.avatarNode,_c59);
},setAvatarContent:function(_c5a){
this.avatarNode.innerHTML=_c5a;
},update:function(e){
this.pxp=this.px+this.dx;
this.pyp=this.py+this.dy;
dojo._setMarginBox(this.avatarNode,this.pxp+12,this.pyp+16);
},start:function(e){
this.inherited(arguments);
this.update();
wm.showHideNode(this.avatarNode,true);
},drag:function(){
this.inherited(arguments);
this.update();
},finish:function(){
wm.showHideNode(this.avatarNode,false);
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.widget.Splitter"]){
dojo._hasResource["wm.base.widget.Splitter"]=true;
dojo.provide("wm.base.widget.Splitter");
dojo.declare("wm.SplitterResize",wm.MouseDrag,{beginResize:function(e,_c5b){
this.splitter=_c5b;
this.setCursor(this.splitter.vertical?"w-resize":"n-resize");
this.mousedown(e);
},drag:function(){
this.inherited(arguments);
this.splitter.drag(this.dx,this.dy);
},finish:function(){
this.inherited(arguments);
this.splitter.drop();
}});
dojo.declare("wm.Splitter",wm.Bevel,{className:"wmsplitter",minimum:-1,maximum:-1,mode:dojo.isMoz<4||dojo.isIE<9?2:0,layout:"",constructor:function(){
wm.Splitter.resizer=wm.Splitter.resizer||new wm.SplitterResize();
},init:function(){
this.inherited(arguments);
this.splitterWidget=this.parentIsSplitter?this.parent:this;
this.findLayout();
this.connectEvents(this.domNode,["mousedown","dblclick"]);
},findLayout:function(){
var v=this.splitterWidget.parent.layoutKind=="left-to-right";
var p=this.splitterWidget.parent.prevSibling(this.splitterWidget,true);
if(p){
var l=v?(p.width=="100%"?"right":"left"):(p.height=="100%"?"bottom":"top");
this.setLayout(l);
}
},updateSize:function(){
if(this._isDestroying){
return;
}
var _c5c=this.parentIsSplitter?this.parent:this;
var h=(_c5c.parent||0).layoutKind=="left-to-right",d=this.bevelSize+"px";
this.setWidth(h?d:"100%");
this.setHeight(h?"100%":d);
},setLayout:function(_c5d){
this.layout=_c5d;
this.removeOrientation();
this.vertical=this.layout=="left"||this.layout=="right";
this.addOrientation();
this.updateSize();
},getSizeControl:function(){
var _c5e=this.splitterWidget;
switch(this.layout){
case "left":
case "top":
this.percentSizeControl=_c5e.parent.nextSibling(_c5e,true);
return _c5e.parent.prevSibling(_c5e,true);
case "right":
case "bottom":
this.percentSizeControl=_c5e.parent.prevSibling(_c5e,true);
return _c5e.parent.nextSibling(_c5e,true);
}
},getPosition:function(){
return {top:this.splitterWidget.bounds.t,left:this.splitterWidget.bounds.l};
},mousedown:function(e){
this.sizeControl=this.getSizeControl();
if(!this.sizeControl){
return;
}
var _c5f=this.sizeControl.getIndexInParent()>this.getIndexInParent()?this.sizeControl.parent.c$[this.sizeControl.getIndexInParent()-2]:this.sizeControl.parent.c$[this.sizeControl.getIndexInParent()+2];
this.size=this.sizeControl.cloneBounds();
this.containerSize=this.sizeControl.parent.cloneBounds();
this.initialPosition=this.getPosition();
this.position=this.getPosition();
wm.Splitter.resizer.beginResize(e,this);
switch(this.layout){
case "top":
case "bottom":
this._boundsMax=this.sizeControl.parent.bounds.h-_c5f.getPreferredFitToContentHeight()+this.sizeControl.bounds.h;
this._boundsMin=this.sizeControl.getPreferredFitToContentHeight?this.sizeControl.getPreferredFitToContentHeight():this.sizeControl.getMinHeightProp();
break;
case "left":
case "right":
this._boundsMax=this.sizeControl.parent.bounds.w-_c5f.getPreferredFitToContentWidth()+this.sizeControl.bounds.w;
this._boundsMin=this.sizeControl.getPreferredFitToContentWidth?this.sizeControl.getPreferredFitToContentWidth():this.sizeControl.getMinWidthProp();
break;
}
},drag:function(inDx,inDy){
if(this.vertical){
this.moveX(inDx);
}else{
this.moveY(inDy);
}
this.changing();
},drop:function(){
this.change();
},changing:function(){
this._collapsed=false;
switch(this.mode){
case 0:
this.adjustSize();
break;
default:
break;
}
},change:function(){
this.adjustSize();
},boundValue:function(_c60){
var _c61=this.splitterWidget;
var x=_c60;
if(this.minimum!=-1){
_c60=Math.max(this.minimum,_c60);
}
if(this.maximum!=-1){
_c60=Math.min(this.maximum,_c60);
}
var _c62=_c61.parent.getContentBounds();
if(_c60<this._boundsMin){
_c60=this._boundsMin;
}else{
if(_c60>this._boundsMax){
_c60=this._boundsMax;
}
}
this.atLimit=(x!=_c60);
return _c60;
},adjustSize:function(){
var dx=this.position.left-this.initialPosition.left;
var dy=this.position.top-this.initialPosition.top;
var w=this.size.w+(this.layout=="right"?-dx:dx);
var h=this.size.h+(this.layout=="bottom"?-dy:dy);
if(this.layout=="top"||this.layout=="bottom"){
this.sizeControl.setHeight(h+"px");
}else{
this.sizeControl.setWidth(w+"px");
}
},move:function(inD,_c63,_c64){
if(inD==0){
return;
}
this.position[_c63]=this.initialPosition[_c63]+inD;
if(this.layout==_c63){
this.position[_c63]=this.boundValue(this.position[_c63]);
}else{
var e=this.containerSize[_c64];
this.position[_c63]=e-this.boundValue(e-this.position[_c63]);
}
this.splitterWidget.domNode.style[_c63]=this.position[_c63]+"px";
},moveX:function(inDx){
this.move(inDx,"left","w");
},moveY:function(inDy){
this.move(inDy,"top","h");
},dblclick:function(){
if(this._collapsed){
this.expand();
}else{
this.collapse();
}
},collapse:function(){
this._collapsed=true;
this.initialPosition=this.getPosition();
this._expandedPosition=dojo.mixin({},this.initialPosition);
switch(this.layout){
case "left":
this.position.left=0;
break;
case "top":
this.position.top=0;
break;
case "right":
this.position.left=this.boundValue(this.position.left+this.size.w);
break;
case "bottom":
this.position.top=this.boundValue(this.position.top+this.size.h);
break;
}
this.change();
},expand:function(){
this._collapsed=false;
this.initialPosition=this.getPosition();
dojo.mixin(this.position,this._expandedPosition);
this.change();
}});
}
if(!dojo._hasResource["wm.base.widget.Buttons.ToolButton"]){
dojo._hasResource["wm.base.widget.Buttons.ToolButton"]=true;
dojo.provide("wm.base.widget.Buttons.ToolButton");
dojo.declare("wm.ToolButton",[wm.Control,wm.TouchMixinOptional],{enableTouchHeight:true,mobileHeight:"40px",width:"80px",border:0,padding:"",margin:"",caption:"",classNames:"wmtoolbutton",iconUrl:"",iconWidth:"16px",iconHeight:"16px",iconMargin:"0 10px 0 0",clicked:false,build:function(){
if(!this.domNode){
this.domNode=document.createElement("button");
dojo.attr(this.domNode,"type","button");
}
this.btnNode=this.domNode;
},init:function(){
this.inherited(arguments);
if(!wm.isMobile){
this.connect(this.btnNode,"onclick",this,function(evt){
this.click(evt,true);
});
}
this.imageListChanged();
},onTouchStart:function(evt,_c65){
dojo.addClass(this.btnNode,"Active");
},onTouchMove:function(){
dojo.removeClass(this.btnNode,"Active");
},onTouchEnd:function(evt,_c66){
if(_c66){
return;
}
dojo.removeClass(this.btnNode,"Active");
if(document.activeElement.tagName=="INPUT"){
var id=document.activeElement.id;
var d=dijit.byId(id);
if(d){
d._onBlur();
}else{
document.activeElement.blur();
}
}
this.click(evt,true);
},click:function(_c67,_c68){
if(!this._disabled){
if(!this.clicked){
this.setProp("clicked",true);
}
if(!_c68){
this.onclick(_c67,this);
}else{
var _c69=dojo.isIE&&_c67?{clientX:_c67.clientX,clientY:_c67.clientY,offsetX:_c67.offsetX,offsetY:_c67.offsetY,screenX:_c67.screenX,screenY:_c67.screenY,pageX:_c67.pageX,pageY:_c67.pageY,x:_c67.x,y:_c67.y,target:_c67.target,currentTarget:_c67.currentTarget,"type":_c67.type}:_c67||{};
wm.onidle(this,function(){
if(!this._isDestroyed){
this.onclick(_c69,this);
}
});
}
if(app.toolTipDialog&&this==app.toolTipDialog.tipOwner){
app.toolTipDialog.hide();
}
}
},onclick:function(){
},setDisabled:function(_c6a){
var _c6b=this._disabled;
this.inherited(arguments);
var _c6c=this._disabled;
if(Boolean(_c6b)!=Boolean(_c6c)||this._cupdating){
this.btnNode.disabled=_c6c?"disabled":"";
dojo[_c6c?"addClass":"removeClass"](this.domNode,"wmbutton-disabled");
if(this._imageList&&parseInt(this.imageIndex)!=NaN&&this.imageIndex!=-1&&this.declaredClass=="wm.ToolButton"){
this.updateImageListButtonHtml();
}
}
},setSelected:function(_c6d){
this.selected=_c6d;
if(this._imageList&&this.imageIndex&&this.declaredClass=="wm.ToolButton"){
this.updateImageListButtonHtml();
}
},setCaption:function(_c6e){
this.caption=_c6e;
if(!this._cupdating){
this.invalidCss=true;
this.render(true,true);
}
this.valueChanged("caption",this.caption);
},setIconUrl:function(_c6f){
this.iconUrl=_c6f;
this.invalidCss=true;
this.render(true,true);
},setIconWidth:function(w){
this.iconWidth=w;
this.invalidCss=true;
this.render(true,true);
},setIconHeight:function(h){
this.iconHeight=h;
this.invalidCss=true;
this.render(true,true);
},setIconMargin:function(m){
this.iconMargin=m;
this.invalidCss=true;
this.render(true,true);
},setContent:function(_c70){
this.setCaption(_c70);
},imageListChanged:function(){
this.inherited(arguments);
this.invalidCss=true;
this.render(true,true);
},getCurrentImageIndex:function(){
if(this.declaredClass!="wm.ToolButton"){
return this.inherited(arguments);
}else{
if(this._disabled){
return this.imageIndex+this._imageList.colCount*2;
}
if(this.selected){
return this.imageIndex+this._imageList.colCount;
}
}
return this.imageIndex;
},updateImageListButtonHtml:function(){
var sl=this.singleLine?"line-height: "+this.height+"; ":"";
var _c71=this.caption?"<span style=\"padding-left: 2px; "+sl+"\">"+(this.caption==undefined?"":this.caption)+"</span>":"";
var ii=this.getCurrentImageIndex();
this.btnNode.innerHTML=this._imageList.getImageHtml(ii)+_c71;
},render:function(_c72,_c73){
if(!_c72&&(!this.invalidCss||!this.isReflowEnabled())){
return;
}
if(!_c73){
this.inherited(arguments);
}
var il=this._imageList;
if(il&&il.getImageHtml&&this.imageIndex>=0){
if(this.btnNode!=this.domNode){
this.btnNode.style.padding="0px";
}
this.updateImageListButtonHtml();
}else{
if(this.iconUrl){
var url=this.iconUrl;
var root;
if(url.indexOf("lib/")===0){
root=dojo.moduleUrl("lib").path.replace(/lib\/$/,"");
url=root+url;
}else{
root=this.getPath()||"";
}
var sl=this.singleLine?"line-height: "+this.height+"; ":"";
var _c74=this.caption?"<span style=\"padding-left: 2px; "+sl+"\">"+(this.caption==undefined?"":this.caption)+"</span>":"";
this.btnNode.innerHTML="<img src='"+wm.theme.getImagesPath()+"blank.gif' style='margin: "+this.iconMargin+"; width: "+this.iconWidth+"; height: "+this.iconHeight+"; vertical-align: middle; background:url("+root+url+") no-repeat; background-color: transparent;' />"+_c74;
if(this.btnNode!=this.domNode){
this.btnNode.style.padding="0px";
}
}else{
this.btnNode.innerHTML=this.caption;
if(this.btnNode!=this.domNode){
this.btnNode.style.padding="";
}
}
}
},renderBounds:function(){
this.inherited(arguments);
if(dojo.isIE&&dojo.isIE<9){
if(this.btnNode.firstChild&&this.btnNode.firstChild.style){
this.btnNode.firstChild.style.padding="1px";
wm.job(this.getRuntimeId()+".IEButtonTrick",5,dojo.hitch(this,function(){
this.btnNode.firstChild.style.padding="0px";
}));
}else{
this.btnNode.style.padding=this.padding=="1"?"2":"1";
wm.job(this.getRuntimeId()+".IEButtonTrick",5,dojo.hitch(this,function(){
this.btnNode.style.padding=this.paddingExtents.t+"px "+this.paddingExtents.r+"px "+this.paddingExtents.b+"px "+this.paddingExtents.l+"px";
}));
}
}
},destroy:function(){
if(this.btnNode){
dojo.destroy(this.btnNode);
this.btnNode=null;
}
if(this.domNode){
dojo.destroy(this.domNode);
this.domNode=null;
}
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.widget.Buttons.Button"]){
dojo._hasResource["wm.base.widget.Buttons.Button"]=true;
dojo.provide("wm.base.widget.Buttons.Button");
dojo.declare("wm.Button",wm.ToolButton,{desktopHeight:"32px",height:"32px",border:1,borderColor:"#ABB8CF",margin:4,caption:"Button",classNames:"wmbutton"});
dojo.declare("wm.IconButton",wm.Button,{build:function(){
this.inherited(arguments);
var html="<table class='dijitMenuTable' style='width:100%'><tbody class='dijitReset'><tr class='dijitMenuItem dijitReset'><td class='dijitReset dijitMenuItemIconCell' style='width:"+(parseInt(this.iconWidth)+4)+"px;'><"+(this._useIconUrl?"img":"div")+" style='display:none;width:"+this.iconWidth+";height:"+this.iconHeight+";'/></td><td class='dijitReset dijitMenuItemLabel'>"+this.caption+"</td><td class='dijitReset dijitMenuArrow'><div class='popupIcon'/></td></tr></tbody></table>";
this.domNode.innerHTML=html;
},render:function(_c75){
if(!_c75&&(!this.invalidCss||!this.isReflowEnabled())){
return;
}
wm.Control.prototype.render.call(this,_c75);
dojo.query(".dijitMenuItemLabel",this.domNode)[0].innerHTML=this.caption;
var img=this._iconImage=dojo.query(".dijitMenuItemIconCell "+(this._useIconUrl?"img":"div"),this.domNode)[0];
img.style.width=this.iconWidth;
img.style.height=this.iconHeight;
if(this.iconUrl){
img.src=this.iconUrl;
}
img.style.display=this.iconUrl||this.iconClass?"block":"none";
var _c76=parseInt(this.iconWidth)||0;
img.parentNode.style.width=(_c76+4)+"px";
}});
dojo.declare("wm.MobileIconButton",wm.ToolButton,{direction:"down",caption:"Back",height:"40px",displayWhenHistoryEmpty:"",historyEmptyIfLessThanOrEqualTo:0,classNames:"wmMobileButton",init:function(){
this.inherited(arguments);
if(!this._isDesignLoaded&&this.direction=="back"&&this.displayWhenHistoryEmpty){
this.connect(app,"_onBack",this,"updateEmptyState");
this.connect(app,"addHistory",this,"updateEmptyState");
this.updateEmptyState();
}
},updateEmptyState:function(){
var _c77=app.history&&app.history.length>this.historyEmptyIfLessThanOrEqualTo;
switch(this.displayWhenHistoryEmpty){
case "hidden":
this.setShowing(_c77);
break;
case "disabled":
this.setDisabled(!_c77);
break;
}
},build:function(){
this.inherited(arguments);
if(this.direction=="back"){
var btn=dojo.create("DIV",{className:"mblArrowBackButton"},this.domNode,"first");
var head=dojo.create("DIV",{className:"mblArrowBackButtonHead"},btn);
var body=dojo.create("DIV",{className:"mblArrowBackButtonBody mblArrowButtonText",innerHTML:this.caption},btn);
this.captionNode=body;
dojo.addClass(this.domNode,"wmBackButton");
}else{
var icon=this.iconNode=document.createElement("div");
dojo.addClass(icon,"mblArrow "+"mbl"+wm.capitalize(this.direction)+"Arrow");
this.domNode.appendChild(icon);
}
},setCaption:function(_c78){
this.caption=_c78;
if(this.captionNode){
this.captionNode.innerHTML=_c78;
}
},render:function(_c79,_c7a){
wm.Control.prototype.render.call(this,_c79);
}});
}
if(!dojo._hasResource["wm.base.widget.Buttons.ToggleButton"]){
dojo._hasResource["wm.base.widget.Buttons.ToggleButton"]=true;
dojo.provide("wm.base.widget.Buttons.ToggleButton");
dojo.declare("wm.ToggleButton",wm.ToolButton,{height:"32px",border:1,borderColor:"#ABB8CF",margin:4,captionUp:"Btn Up",captionDown:"Btn Down",classNames:"wmbutton wmtogglebutton",init:function(){
this.caption=this.captionUp;
this.inherited(arguments);
if(this.clicked){
this.setClicked(true);
}
},click:function(_c7b){
this.setProp("clicked",!this.clicked);
wm.onidle(this,function(){
this.onclick(_c7b,this);
});
},setClicked:function(_c7c){
if(_c7c!=this.clicked||this._cupdating){
this.clicked=_c7c;
this.valueChanged("clicked",_c7c);
this.setCaption(this.clicked?this.captionDown:this.captionUp);
dojo[this.clicked?"addClass":"removeClass"](this.domNode,"toggleButtonDown");
}
},setCaptionUp:function(_c7d){
this.captionUp=_c7d;
if(!this.clicked){
this.setCaption(_c7d);
}
},setCaptionDown:function(_c7e){
this.captionDown=_c7e;
if(this.clicked){
this.setCaption(_c7e);
}
}});
dojo.declare("wm.ToggleButtonPanel",wm.Container,{border:"1",buttonBorder:"0,1,0,0",lastButtonBorder:"0",manageURL:false,manageHistory:false,classNames:"wmtogglebuttonpanel",layoutKind:"left-to-right",currentButton:-1,currentButtonName:"",currentButtonCaption:"",height:"40px",enableTouchHeight:true,width:"100%",buttonMargins:"0",init:function(){
this._btns=[];
this.inherited(arguments);
},postInit:function(){
this.inherited(arguments);
if(this.manageURL&&this.owner.locationState){
this.restoreFromLocationHash(this.owner.locationState[this.getRuntimeId()]);
}
if(this.buttonBorder||this.lastButtonBorder){
dojo.forEach(this.c$,function(_c7f,i){
var _c80=i==this.c$.length-1?this.lastButtonBorder||this.buttonBorder:this.buttonBorder;
if(_c7f.border!=_c80){
_c7f.setBorder(_c80);
}
},this);
}
if(this.buttonBorderColor){
dojo.forEach(this.c$,function(_c81,i){
if(_c81.borderColor!=this.buttonBorderColor){
_c81.setBorderColor(this.buttonBorderColor);
}
},this);
}
},addWidget:function(_c82){
this.inherited(arguments);
if(_c82 instanceof wm.ToolButton){
_c82.setHeight("100%");
this._btns.push(_c82);
_c82.connect(_c82,"onclick",dojo.hitch(this,"changed",_c82));
_c82.setMargin(this.buttonMargins);
}
},removeWidget:function(_c83){
this.inherited(arguments);
wm.Array.removeElement(this._btns,_c83);
},changed:function(_c84){
var _c85=this.currentButton;
if(_c84 instanceof wm.ToolButton){
this.currentButton=_c84;
this.currentButtonName=_c84.name;
this.currentButtonCaption=_c84.caption;
if(_c84){
dojo.addClass(_c84.domNode,"toggleButtonDown");
}
if(this.currentButton!==_c85){
if(_c85 instanceof wm.ToolButton){
_c85.setValue("clicked",false);
}
this.valueChanged("currentButton",this.currentButton);
this.onChange(this.currentButton);
}
this.currentButton.clicked=true;
}else{
if(_c85 instanceof wm.ToolButton){
_c85.setValue("clicked",false);
}
this.currentButton=null;
if(_c85 instanceof wm.ToolButton){
this.valueChanged("currentButton",this.currentButton);
this.onChange(this.currentButton);
}
}
this.valueChanged("currentButtonName",this.currentButtonName);
this.valueChanged("currentButtonCaption",this.currentButtonCaption);
if(_c85 instanceof wm.ToolButton&&_c85!=_c84){
dojo.removeClass(_c85.domNode,"toggleButtonDown");
if(!this._isDesignLoaded&&!this._inBack&&this.manageHistory&&_c84){
app.addHistory({id:this.getRuntimeId(),options:{name:_c85.name},title:_c84.caption+" Selected"});
}
}
},setCurrentButton:function(_c86){
var self=this;
wm.job(this.getRuntimeId()+".setCurrentButton",1,function(){
if(_c86 instanceof wm.ToolButton){
_c86.click({type:"click"});
}else{
self.changed(null);
}
});
},onChange:function(_c87){
},handleBack:function(_c88){
this._inBack=true;
var name=_c88?_c88.name:null;
var _c89=this.owner[name];
if(_c89&&this.currentButton!=_c89){
_c89.click({type:"click"});
}
delete this._inBack;
return true;
},restoreFromLocationHash:function(_c8a){
this.manageHistory=false;
if(_c8a!==undefined){
if(this.owner[_c8a]){
this.setCurrentButton(this.owner[_c8a]);
}
}
this.manageHistory=true;
},generateStateUrl:function(_c8b){
if(this.currentButton){
_c8b[this.getRuntimeId()]=this.currentButton.name;
}
}});
}
if(!dojo._hasResource["wm.base.widget.Picture"]){
dojo._hasResource["wm.base.widget.Picture"]=true;
dojo.provide("wm.base.widget.Picture");
dojo.declare("wm.Picture",[wm.Control,wm.TouchMixinOptional],{aspect:"none",hint:"",width:"100px",height:"100px",link:"",source:"",init:function(){
this.inherited(arguments);
var d=this.domNode;
d.innerHTML="<a><img></a>";
dojo.addClass(d,"wmpicture");
this.linkNode=d.firstChild;
this._touchNode=this.img=this.linkNode.firstChild;
dojo.addClass(this.img,"wmpicture-image");
if(!wm.isMobile){
this.connect(this.img,"click",this,"_onclick");
this.connect(this.linkNode,"click",this,"_onclick");
}
this.setSource(this.source);
this.setAspect(this.aspect);
this.setLink(this.link);
if(this.imageList){
this.imageListChanged();
}
},postInit:function(){
this.inherited(arguments);
if(this.onclick!=this.constructor.prototype.onclick){
dojo.addClass(this.domNode,"onClickEvent");
}
},setSource:function(_c8c){
this.source=_c8c||"";
this.valueChanged("source",this.source);
this.img.style.display=this.source?"":"none";
var root;
if(this.source.slice(0,4)=="http"||this.source.slice(0,1)=="/"){
root="";
}else{
if(this.source.indexOf("lib/")==0){
root=dojo.moduleUrl("lib").path.replace(/lib\/$/,"");
}else{
root=this.getPath();
}
}
this.img.src=root+this.source;
},setAspect:function(_c8d){
var s=this.img.style,w="width",h="height",a=this.aspect=_c8d;
s.width=(a=="v"?"100%":"");
s.height=(a=="h"?"100%":"");
},setLink:function(_c8e){
this.link=_c8e;
if(_c8e){
this.linkNode.target="_blank";
this.linkNode.href=_c8e;
}else{
this.linkNode.removeAttribute("href");
}
this.valueChanged("link",_c8e);
},onTouchEnd:function(evt,_c8f){
if(_c8f){
return;
}
if(document.activeElement.tagName=="INPUT"){
var id=document.activeElement.id;
var d=dijit.byId(id);
if(d){
d._onBlur();
}else{
document.activeElement.blur();
}
}
if(!this._disabled){
this.onclick(evt);
}
},_onclick:function(_c90){
dojo.stopEvent(_c90);
if(this._disabled){
return;
}
var _c91=dojo.isIE&&_c90?{clientX:_c90.clientX,clientY:_c90.clientY,offsetX:_c90.offsetX,offsetY:_c90.offsetY,screenX:_c90.screenX,screenY:_c90.screenY,pageX:_c90.pageX,pageY:_c90.pageY,x:_c90.x,y:_c90.y,target:_c90.target,currentTarget:_c90.currentTarget,"type":_c90.type}:_c90||{};
window.setTimeout(dojo.hitch(this,"onclick",_c91),5);
},onclick:function(){
},imageListChanged:function(){
this.inherited(arguments);
if(this._imageList){
this.linkNode.style.display="inline-block";
this.linkNode.className="wmpicture "+this._imageList.getImageClass(this.imageIndex);
}
},toHtml:function(){
var _c92=this.toHtmlStyles();
return "<img "+_c92+" class='wmpicture' style='width:"+this.bounds.w+"px;height:"+this.bounds.h+"px' src='"+this.img.src+"'/>";
}});
}
if(!dojo._hasResource["wm.base.widget.Html"]){
dojo._hasResource["wm.base.widget.Html"]=true;
dojo.provide("wm.base.widget.Html");
dojo.declare("wm.Html",wm.Control,{minHeight:15,width:"100%",height:"200px",html:"",htmlIsResource:false,autoScroll:true,allowScriptTags:false,init:function(){
dojo.addClass(this.domNode,"wmhtml");
this.inherited(arguments);
this.connect(this.domNode,"onclick",this,function(evt){
wm.onidle(this,"onclick",evt);
});
if(this.html&&String(this.html).indexOf("resources/")===0){
this.htmlIsResource=true;
}
this.setHtml(this.html);
},build:function(){
this.inherited(arguments);
this.sizeNode=document.createElement("div");
dojo.addClass(this.sizeNode,"wmSizeNode");
this.domNode.appendChild(this.sizeNode);
},getHtml:function(){
return this.sizeNode.innerHTML;
},setHtml:function(_c93){
var _c94=this.sizeNode.innerHTML;
if(_c93&&this.htmlIsResource){
if(!this.htmlLoader){
this.htmlLoader=new wm.HtmlLoader({owner:this,relativeUrl:true});
}
this.htmlLoader._htmlNode=this.sizeNode;
this.htmlLoader.setUrl(_c93);
this.html=_c93;
this.valueChanged("html",_c93);
if(_c94!=this.sizeNode.innerHTML&&(this.autoSizeHeight||this.autoSizeWidth)){
this.scheduleAutoSize();
}
return;
}
if(_c93&&dojo.isArray(_c93)){
_c93=_c93.join("");
}
if(_c93&&_c93.value){
_c93=_c93.value;
}
this.html=this.sizeNode.innerHTML=(_c93==undefined?"":_c93);
this.valueChanged("html",this.inHtml);
if(_c94!=this.sizeNode.innerHTML&&(this.autoSizeHeight||this.autoSizeWidth)){
this.scheduleAutoSize();
}
if(this.allowScriptTags){
this.processScriptTags();
}
},processScriptTags:function(){
var _c95=dojo.query("script",main.html1.domNode);
var _c96=document.createElement("div");
dojo.forEach(_c95,function(node){
var _c97=node.parentNode;
var _c98=dojo.indexOf(_c97.childNodes,node);
_c96.appendChild(node);
var _c99=_c96.innerHTML;
var n=document.createElement("script");
var _c9a={};
var _c9b=_c99.replace(/\<script\s*/,"").replace(/\>.*/,"").split(/\s+/);
var _c9c="";
var _c9d="";
for(var i=0;i<_c9b.length;i++){
var part=_c9b[i];
if(!_c9d){
var _c9e=part.match(/^(.*?)\s*\=\s*(.*)\s*$/);
if(_c9e){
var name=_c9e[1];
var _c9f=_c9e[2];
}
}else{
_c9f=_c9d+" "+part;
_c9d="";
}
if(_c9f){
_c9f=_c9f.replace(/^"(.*)"/,"$1");
_c9f=_c9f.replace(/^'(.*)'/,"$1");
if(_c9f.match(/^['"]/)){
_c9d=_c9f;
_c9c=name;
}else{
dojo.attr(n,name,_c9f);
}
}
}
try{
n.innerText=node.innerText;
}
catch(e){
}
try{
n.textContent=node.textContent;
}
catch(e){
}
dojo.destroy(node);
dojo.place(n,_c97,_c98);
},this);
},scheduleAutoSize:function(){
this._needsAutoSize=true;
return wm.job(this.getRuntimeId()+": doAutoSize",10,dojo.hitch(this,function(){
this.doAutoSize(true,true);
}));
},_onShowParent:function(){
if(this._needsAutoSize){
this.scheduleAutoSize();
}
},doAutoSize:function(_ca0,_ca1){
if(this._doingAutoSize||!this.autoSizeHeight&&!this.autoSizeWidth){
return;
}
if(!_ca1&&!this._needsAutoSize){
return;
}
if(this.isAncestorHidden()){
return;
}
this._doingAutoSize=true;
this._needsAutoSize=false;
var _ca2=this.sizeNode;
var _ca3=_ca2.offsetHeight;
var _ca4=_ca2.offsetWidth;
if(this.autoSizeHeight){
var _ca5=_ca3+this.padBorderMargin.t+this.padBorderMargin.b;
if(_ca5<this.minHeight){
_ca5=this.minHeight;
}
if(_ca4>this.bounds.w){
_ca5+=17;
}
this.bounds.h=_ca5;
this.height=_ca5+"px";
var p=this.parent;
while(p.parent&&(p.autoSizeHeight||p.fitToContentHeight)){
p=p.parent;
}
p.delayedReflow();
}
if(this.autoSizeWidth){
var _ca6=_ca4+this.padBorderMargin.l+this.padBorderMargin.r;
if(_ca3>this.bounds.h){
_ca6+=17;
}
this.bounds.w=_ca6;
this.width=_ca6+"px";
var p=this.parent;
while(p.parent&&(p.autoSizeWidth||p.fitToContentWidth)){
p=p.parent;
}
p.delayedReflow();
}
if(this.isDesignLoaded()&&dojo.indexOf(studio.designer.selected,this)!=-1){
studio.inspector.reinspect();
}
this._doingAutoSize=false;
},appendHtml:function(_ca7){
if(_ca7&&dojo.isArray(_ca7)){
_ca7=_ca7.join("");
}
if(_ca7&&_ca7.value){
_ca7=_ca7.value;
}
this.sizeNode.innerHTML+=(_ca7==undefined?"":_ca7);
this.html=this.sizeNode.innerHTML;
this.valueChanged("html",this.inHtml);
},onclick:function(){
},addUserClass:function(_ca8,_ca9){
this.inherited(arguments);
if(this.isDesignLoaded()){
if(this.autoSizeHeight||this.autoSizeWidth){
this.doAutoSize(1,1);
}
}
},getAutoSize:function(){
if(this.autoSizeWidth){
return "width";
}
if(this.autoSizeHeight){
return "height";
}
return "none";
},setAutoSize:function(_caa){
if(_caa=="none"){
if(this.autoSizeWidth){
this.setAutoSizeWidth(false);
}
if(this.autoSizeHeight){
this.setAutoSizeHeight(false);
}
}else{
if(_caa=="width"){
if(!this.autoSizeWidth){
this.setAutoSizeWidth(true);
}
if(this.autoSizeHeight){
this.setAutoSizeHeight(false);
}
}else{
if(_caa=="height"){
if(this.autoSizeWidth){
this.setAutoSizeWidth(false);
}
if(!this.autoSizeHeight){
this.setAutoSizeHeight(true);
}
}
}
}
},toHtml:function(){
return this.html;
}});
}
if(!dojo._hasResource["wm.base.widget.VirtualList"]){
dojo._hasResource["wm.base.widget.VirtualList"]=true;
dojo.provide("wm.base.widget.VirtualList");
dojo.declare("wm.VirtualListItem",wm.TouchMixin,{selected:false,className:"wmlist-item",getRuntimeId:function(){
return this.list.getRuntimeId()+"."+this.index;
},constructor:function(_cab,_cac,_cad,_cae,_caf){
this.list=_cab;
this.index=_caf===undefined?this.list._formatIndex:_caf;
this._connections=[];
this._subscriptions=[];
this._debugSubscriptions=[];
if(_cae){
this.domNode=_cae;
}else{
this.create();
}
this.setContent(_cac,_cad);
},subscribe:function(){
wm.Component.prototype.subscribe.apply(this,arguments);
},connect:function(){
wm.Component.prototype.connect.apply(this,arguments);
},disconnectEvent:function(){
wm.Component.prototype.disconnectEvent.apply(this,arguments);
},destroy:function(){
dojo.forEach(this._connections,function(_cb0){
dojo.disconnect(_cb0);
});
dojo.forEach(this._subscriptions,function(_cb1){
dojo.unsubscribe(_cb1);
});
},create:function(){
var n=this.domNode=document.createElement("div");
dojo.addClass(n,this.className);
this.makeConnections();
},makeConnections:function(){
if(!wm.isMobile){
this.connect(this.domNode,"mouseover",this,"mouseover"),this.connect(this.domNode,"mouseout",this,"mouseout");
this.connect(this.domNode,"click",this,function(evt){
wm.onidle(this,"click",{target:evt.target});
});
this.connect(this.domNode,"dblclick",this,function(evt){
wm.onidle(this,"dblclick",{target:evt.target});
});
}else{
this.addTouchListener();
}
},onTouchStart:function(evt){
if(!this.list._disabled&&!this.selected&&this.list._selectionMode!="none"||this.list._selectionMode=="multiple"){
if(this.selected){
this._deselectionIndicatorOnly=true;
this.deselect(true);
}else{
this._selectionIndicatorOnly=true;
this.select(true);
}
this.list._touchedItem=this;
}
this.list._ontouchstart(evt,this.index,this.getData?this.getData():null);
},onTouchMove:function(evt,yPos,_cb2,_cb3){
if(this.list._touchedItem==this){
delete this.list._touchedItem;
if(this._selectionIndicatorOnly){
delete this._selectionIndicatorOnly;
this.deselect();
}else{
if(this._deselectionIndicatorOnly){
delete this._deselectionIndicatorOnly;
this.select();
}
}
}
this.list._ontouchmove(evt,yPos,_cb2,_cb3);
},onTouchEnd:function(evt,_cb4){
delete this._selectionIndicatorOnly;
delete this._deselectionIndicatorOnly;
if(this.list._touchedItem==this){
this.list._touchedItem=null;
if(!evt){
evt={target:this.domNode};
}
this.click(evt);
}
this.list._ontouchend(evt);
},onLongTouch:function(posX,posY){
delete this._selectionIndicatorOnly;
delete this._deselectionIndicatorOnly;
this.list._touchedItem=null;
this.longClick();
},setContent:function(_cb5){
this.domNode.innerHTML=_cb5;
},getContent:function(){
return this.domNode.innerHTML;
},doOver:function(){
dojo.addClass(this.domNode,this.className+"-over");
},mouseover:function(e){
if(e&&e.currentTarget==this.domNode){
this.list._onmouseover(e,this);
}
},mouseout:function(e){
if(e.currentTarget==this.domNode){
dojo.removeClass(this.domNode,this.className+"-over");
}
},click:function(e){
this.list.onclick(e,this);
},longClick:function(){
this.list.onLongClick(this);
},dblclick:function(e){
this.list.ondblclick(e,this);
},select:function(_cb6){
if(!_cb6){
this.selected=true;
}
dojo.addClass(this.domNode,this.className+"-selected");
},deselect:function(_cb7){
if(!_cb7){
this.selected=false;
}
dojo.removeClass(this.domNode,this.className+"-selected");
}});
dojo.declare("wm.VirtualList",wm.Control,{manageHistory:true,headerVisible:true,toggleSelect:false,width:"250px",height:"150px",box:"v",selectionMode:"single",_selectionMode:"single",className:"wmlist",selectedItem:null,init:function(){
this.inherited(arguments);
this.items=[];
this.selection=[];
this.selectedItem=new wm.Variable({name:"selectedItem",owner:this,isList:this._selectionMode=="multiple"});
this.createHeaderNode();
this.createListNode();
this.domNode.appendChild(this.headerNode);
this.domNode.appendChild(this.listNodeWrapper||this.listNode);
this.setHeaderVisible(this.headerVisible);
if(this.onselect){
this.connect(this,"onSelect",this,"onselect");
}
if(this.ondeselect){
this.connect(this,"onDeselect",this,"ondeselect");
}
},postSetupScroller:function(){
var _cb8=this._listTouchScroll.scroller?this._listTouchScroll.scroller.outer:null;
if(_cb8){
_cb8.style.width="100%";
}
},dataSetToSelectedItem:function(_cb9){
this.selectedItem.setLiveView((_cb9||0).liveView);
this.selectedItem.setType(_cb9?_cb9.type:"any");
},getCount:function(){
return this.items.length;
},getItem:function(_cba){
return this.items[_cba];
},getItemByCallback:function(_cbb){
for(var i=0;i<this.getCount();i++){
var d=this.items[i].getData();
if(_cbb(d)){
return this.items[i];
}
}
},getItemByFieldName:function(_cbc,_cbd){
for(var i=0;i<this.getCount();i++){
var d=this.items[i].getData();
if(d[_cbc]==_cbd){
return this.items[i];
}
}
},createListNode:function(){
if(wm.isMobile){
this.listNodeWrapper=document.createElement("div");
dojo.addClass(this.listNodeWrapper,"wmlist-wrapper");
}
this.listNode=document.createElement("div");
this.listNode.flex=1;
dojo.addClass(this.listNode,"wmlist-list");
if(wm.isMobile){
this.listNodeWrapper.appendChild(this.listNode);
}
},createHeaderNode:function(){
this.headerNode=document.createElement("div");
dojo.addClass(this.headerNode,"wmlist-header");
},renderBounds:function(){
var _cbe=this.inherited(arguments);
if(_cbe){
var _cbf=this.isAncestorHidden();
if(this.headerVisible&&!_cbf){
wm.job(this.getRuntimeId()+".postRenderBounds",1,dojo.hitch(this,"postRenderBounds"));
}
}
return _cbe;
},postRenderBounds:function(){
if(!this.isAncestorHidden()){
var _cc0=(this.noHeader||!this.headerVisible)?{h:0}:dojo.marginBox(this.headerNode);
var _cc1=this.getContentBounds().h-_cc0.h;
(this.listNodeWrapper||this.listNode).style.height=Math.max(0,_cc1)+"px";
}
},clear:function(_cc2){
this._setHeaderVisible(false);
while(this.getCount()){
this.removeItem(this.getCount()-1);
}
this.deselectAll(_cc2);
this._clearSelectedData();
},createItem:function(_cc3){
return new wm.VirtualListItem(this,_cc3);
},addItem:function(_cc4,_cc5){
var item=this.createItem(_cc4);
var _cc6=this.listNode;
dojo.setSelectable(item.domNode,false);
if(_cc5!=undefined){
this.items.splice(_cc5,0,item);
item.index=_cc5;
this.selection.splice(_cc5,0,false);
this.updateItemIndexes(_cc5+1,1);
var _cc7=_cc6.childNodes[_cc5];
if(_cc7){
_cc6.insertBefore(item.domNode,_cc6.childNodes[_cc5]);
}else{
_cc6.appendChild(item.domNode);
}
}else{
this.items.push(item);
item.index=this.items.length-1;
_cc6.appendChild(item.domNode);
}
return item;
},removeItem:function(_cc8){
var li=this.getItem(_cc8);
if(li){
if(li.domNode&&li.domNode.parentNode){
this.listNode.removeChild(li.domNode);
}
this.items.splice(_cc8,1);
this.selection.splice(_cc8,1);
this.updateItemIndexes(_cc8,-1);
li.destroy();
}
},updateItemIndexes:function(_cc9,_cca){
for(var i=_cc9,l=this.getCount(),li;i<l&&(li=this.items[i]);i++){
li.index+=_cca;
}
},removeItems:function(_ccb){
for(var i=_ccb.length,_ccc;((_ccc=_ccb[i])!=undefined);i--){
this.removeItem(_ccc);
}
},modifyItem:function(_ccd,_cce){
var li=this.getItem(_ccd);
(li?li.setContent(_cce):this.addItem(_cce));
},renderHeader:function(_ccf){
this.headerNode.innerHTML=_ccf;
},_setHeaderVisible:function(_cd0){
this.headerNode.style.display=_cd0?"":"none";
},setHeaderVisible:function(_cd1){
this.headerVisible=_cd1;
if(this.headerVisible){
this.renderHeader();
}
this._setHeaderVisible(this.headerVisible);
this.reflow();
},_addSelectedData:function(_cd2){
if(this._selectionMode=="multiple"){
if(!dojo.isArray(this.selected)){
this.selected=[];
}
if(_cd2&&dojo.indexOf(this.selected,_cd2.index)==-1){
this.selected.push(_cd2.index);
}
var data=[];
dojo.forEach(this.selected,dojo.hitch(this,function(_cd3){
var v=this.getItemData(_cd3);
if(typeof v=="object"){
data.push(v);
}else{
data.push({dataValue:v});
}
}));
this.selectedItem.setData(data);
this.setValue("emptySelection",this.selected.length==0);
this.setValue("isRowSelected",this.selected.length>0);
}else{
this.selected=_cd2;
var d=this.selected?this.selected.getData():{},s=this.selectedItem;
if(dojo.isObject(d)&&!wm.typeManager.getType(s.type)){
s.setDataSchema(d);
}
if(this.selected&&dojo.isObject(d)){
s.setData(d);
}else{
s.clearData();
}
this.setValue("emptySelection",Boolean(!this.selected));
this.setValue("isRowSelected",Boolean(this.selected));
}
},_removeSelectedData:function(_cd4){
if(this._selectionMode=="multiple"){
this.selected=wm.Array.removeElement(this.selected,_cd4.index);
}
this._addSelectedData(null);
},_clearSelectedData:function(){
this.selected=this._selectionMode=="multiple"?[]:null;
this.selectedItem.setData(null);
this.setValue("emptySelection",true);
this.setValue("isRowSelected",false);
},addToSelection:function(_cd5){
if(!_cd5){
return;
}
this.selection[_cd5.index]=true;
this.lastSelected=this.selected;
this._addSelectedData(_cd5);
_cd5.select();
},removeFromSelection:function(_cd6){
this.selection[_cd6.index]=false;
_cd6.deselect();
this._removeSelectedData(_cd6);
},deselectAll:function(_cd7){
dojo.forEach(this.items,function(i){
if(i){
i.deselect();
}
});
var _cd8=this.selection?this.selection.length:0;
this.selection=[];
this.selected=this._selectionMode=="multiple"?[]:null;
if(!_cd7&&_cd8){
this._clearSelectedData();
this.onSelectionChange();
}
},isSelected:function(_cd9){
return this.selection[_cd9.index];
},ctrlSelect:function(_cda){
if(this.isSelected(_cda)){
this.eventDeselect(_cda);
}else{
this.eventSelect(_cda);
}
},shiftSelect:function(_cdb){
var t=s=(this.selected||this.lastSelected||0).index,e=_cdb.index,t;
this.deselectAll();
if(s>e){
s=e;
e=t;
}
for(var i=s,li;i<=e&&(li=this.getItem(i));i++){
this.addToSelection(li);
}
},clickSelect:function(_cdc,_cdd){
if(this._selectionMode=="none"||this._disabled){
return;
}
var _cde=this.getSelectedIndex();
if(this._selectionMode=="multiple"&&(_cdd.ctrlKey||_cdd.shiftKey)){
if(_cdd.ctrlKey){
this.ctrlSelect(_cdc);
}else{
if(_cdd.shiftKey){
this.shiftSelect(_cdc);
}
}
}else{
if(this._selectionMode=="multiple"){
if(dojo.indexOf(this.selected,_cdc.index)==-1){
this.eventSelect(_cdc);
}else{
this.eventDeselect(_cdc,false);
}
}else{
var s=this.selected,_cdf=s&&s.index,_ce0=_cdc.index;
if(_cdf!==_ce0){
this.eventDeselect(_cdc,true);
this.eventSelect(_cdc);
}else{
if(this.toggleSelect){
this.eventDeselect(_cdc);
}
}
}
}
if(!this._isDesignLoaded&&!this._handlingBack&&this.manageHistory&&!this.isNavigationMenu){
app.addHistory({id:this.getRuntimeId(),options:{selectedRow:_cde},title:"SelectionChange"});
}
},eventDeselect:function(_ce1,_ce2){
if(this._disabled){
return;
}
if(this._selectionMode=="multiple"){
this.removeFromSelection(_ce1);
}else{
this.deselectAll(_ce2);
}
if(!_ce2){
wm.job(this.getRuntimeId()+".eventSelect",0,dojo.hitch(this,function(){
this.onDeselect(_ce1);
this.onSelectionChange();
}));
}
},eventSelect:function(_ce3){
if(this._disabled){
return;
}
var _ce4={canSelect:true};
this._oncanselect(_ce3,_ce4);
if(_ce4.canSelect){
this.addToSelection(_ce3);
if(!this._cupdating){
wm.job(this.getRuntimeId()+".eventSelect",0,dojo.hitch(this,function(){
this.onSelect(_ce3);
this.onSelectionChange();
}));
}
}
},select:function(_ce5){
if(_ce5){
if(this._selectionMode!="multiple"){
this.deselectAll();
}
this.eventSelect(_ce5);
}
},selectByIndex:function(_ce6){
var i=this.getItem(_ce6);
if(i){
this.select(i);
}
},getSelectedIndex:function(){
if(this._selectionMode=="multiple"){
return this.selected;
}else{
return this.selected?this.selected.index:-1;
}
},handleBack:function(_ce7){
this._handlingBack=true;
try{
var _ce8=_ce7.selectedRow;
this.select(_ce8);
}
catch(e){
}
delete this._handlingBack;
return true;
},_oncanmouseover:function(_ce9,_cea,_ceb){
},onLongClick:function(_cec){
},onclick:function(_ced,_cee){
var _cef=_ced.target;
if(_cef.firstChild&&dojo.attr(_cef.firstChild,"wmcontroller")){
_cef=_cef.firstChild;
}
if(_cef&&dojo.attr(_cef,"wmcontroller")){
if(_cef.type=="checkbox"){
if(!_cee.selected){
this.eventSelect(_cee);
}else{
this.eventDeselect(_cee);
}
if(_ced instanceof Event){
dojo.stopEvent(_ced);
}
}else{
if(_cef.type=="radio"){
var _cf0=this.toggleSelect;
this.toggleSelect=false;
this.clickSelect(_cee,_ced);
this.toggleSelect=_cf0;
dojo.stopEvent(_ced);
}else{
if(dojo.hasClass(_cef,"wmDeleteColumn")||dojo.hasClass(_cef,"wmDeleteColumnImage")){
this._deleteItem(_cee);
}
}
}
}else{
this.clickSelect(_cee,_ced);
}
},_deleteItem:function(_cf1){
if(this.deleteConfirm){
app.confirm(this.deleteConfirm,false,dojo.hitch(this,function(){
this.deleteItem(_cf1);
}));
}else{
this.deleteItem(_cf1);
}
},deleteItem:function(_cf2){
var _cf3=dojo.indexOf(this.items,_cf2);
wm.Array.removeElementAt(this.items,_cf3);
dojo.destroy(_cf2.domNode);
return _cf3;
},ondblclick:function(_cf4,_cf5){
},onSelectionChange:function(){
},onselect:function(_cf6){
},ondeselect:function(_cf7){
},onSelect:function(_cf8){
},onDeselect:function(_cf9){
},_oncanselect:function(_cfa,_cfb){
},_onmouseover:function(_cfc,_cfd){
var _cfe={canMouseOver:true};
this._oncanmouseover(_cfc,_cfd,_cfe);
if(_cfe.canMouseOver){
_cfd.doOver();
}
}});
}
if(!dojo._hasResource["wm.base.widget.Table.builder"]){
dojo._hasResource["wm.base.widget.Table.builder"]=true;
dojo.provide("wm.base.widget.Table.builder");
wm.getTr=function(_cff,_d00){
return _cff&&((_cff.rows||0)[_d00]||_cff.childNodes[_d00]);
};
wm.getTd=function(_d01,_d02,_d03){
return (wm.getTr(_d01,_d02)||0).childNodes[_d03];
};
dojo.declare("wm.table.builder",null,{rowCount:0,colCount:0,constructor:function(_d04,_d05,_d06){
this.className=_d04||"";
this.rowClassName=_d05||"";
this.columnClassName=_d06||"";
},_table:["<table class=\"","","\" cellspacing=\"0\" cellpadding=\"0\">"],generateCell:function(_d07,_d08,_d09){
var tag=(_d09?"th":"td");
var html=["<",tag," "];
var s=this.getCellStyle&&this.getCellStyle(_d07,_d08);
var c=this.getCellClass&&this.getCellClass(_d07,_d08);
c=(c?c+" ":"")+this.columnClassName;
s&&html.push([" style=\"",s,"\""].join(""));
c&&html.push([" class=\"",c,"\""].join(""));
html.push(">");
html.push(this.getCellContent(_d07,_d08,_d09));
html.push("</"+tag+">");
return html.join("");
},generateRow:function(_d0a,_d0b){
var s=(this.getRowStyle)&&this.getRowStyle(_d0a),c=this.rowClassName||((this.getRowClass)&&this.getRowClass(_d0a));
var html=["<tr"," style=\"",s,"\" class=\"",c,"\">"];
for(var i=0,l=this.colCount;i<l;i++){
html.push(this.generateCell(_d0a,i,_d0b));
}
html.push("</tr>");
return html.join("");
},generateTableStart:function(){
var _d0c=this._table.concat([]);
_d0c[1]=this.className;
return _d0c.join("");
},generateTableEnd:function(){
return "</table>";
},generateHtml:function(){
result=[this.generateTableStart()];
for(var i=0,l=this.rowCount;i<l;i++){
result.push(this.generateRow(i));
}
result.push(this.generateTableEnd());
return result.join("");
},generateHeaderHtml:function(){
result=[this.generateTableStart()];
result.push(this.generateRow(-1,true));
result.push(this.generateTableEnd());
return result.join("");
},generateEmptyTable:function(){
return [this.generateTableStart(),this.generateTableEnd()].join("");
}});
}
if(!dojo._hasResource["wm.base.widget.List"]){
dojo._hasResource["wm.base.widget.List"]=true;
dojo.provide("wm.base.widget.List");
dojo.declare("wm.ListItem",wm.VirtualListItem,{top:0,create:function(){
this.inherited(arguments);
if(!this.domNode.id){
dojo.addClass(this.domNode,"wmlist-item");
this.rowId=this.list.nextRowId++;
this.domNode.id=this.list.getRuntimeId()+"_ITEM_"+this.rowId;
}
},format:function(_d0d,_d0e){
this.list.inSetContent=true;
var _d0f=(this.list.format?this.list.format(_d0e,_d0d):_d0d);
delete this.list.inSetContent;
return _d0f;
},setContent:function(_d10,_d11){
var f=this.format(_d10,this.index);
this.inherited(arguments,[f]);
this._data=this.getData();
},getData:function(){
return this.list.getItemData(this.index);
},update:function(){
var html=this.format(this.getData(),this.index);
this.domNode.innerHTML=html;
},getColumnFromNode:function(_d12){
if(_d12){
while(_d12.tagName!="TD"){
_d12=_d12.parentNode;
}
var td=_d12,tr=_d12.parentNode;
for(var i=0,c;(c=tr.childNodes[i]);i++){
if(c==td){
return i;
}
}
}
return -1;
},select:function(_d13){
this.inherited(arguments);
if(!_d13&&this.list.columns&&(this.list.selectionMode=="checkbox"||this.list.selectionMode=="radio")){
wm.job(this.getRuntimeId()+"changeCheckedStatus",10,this,function(){
dojo.query("input",this.domNode)[0].checked=true;
});
}
},deselect:function(_d14){
this.inherited(arguments);
if(!_d14&&this.list.columns&&(this.list.selectionMode=="checkbox"||this.list.selectionMode=="radio")){
wm.job(this.getRuntimeId()+"changeCheckedStatus",10,this,function(){
dojo.query("input",this.domNode)[0].checked=false;
});
}
}});
wm.Object.extendSchema(wm.ListItem,{getData:{group:"method",returns:"Object"}});
dojo.declare("wm.List",wm.VirtualList,{scrollToTopOnDataChange:false,_regenerateOnDeviceChange:1,_scrollTop:0,styleAsGrid:true,rightNavArrow:false,selectFirstRow:false,scrollToSelection:false,renderVisibleRowsOnly:true,autoSizeHeight:false,nextRowId:0,query:{},width:"100%",height:"200px",minWidth:150,minHeight:60,deleteColumn:false,deleteConfirm:"Are you sure you want to delete this?",autoScroll:false,constructor:function(){
this._data=[];
},columnWidths:"",dataFields:"",classNames:"wmlist",columns:"",_columnsHash:"",getItemForNode:function(_d15){
var _d16=wm.Array.indexOf(this.items,_d15.id.replace(/^.*_/,""),function(item,id){
return item&&item.rowId==id;
});
if(_d16==-1){
return null;
}
return this.items[_d16];
},deleteItem:function(_d17){
var _d18=this.inherited(arguments);
dojo.query(".wmlist-item.Odd",this.domNode).removeClass("Odd");
dojo.query(".wmlist-item:nth-child(odd)",this.domNode).addClass("Odd");
var data=this._data[_d18];
wm.Array.removeElementAt(this._data,_d18);
this.onRowDeleted(_d18,data);
},onRowDeleted:function(_d19,_d1a){
},setColumns:function(_d1b){
this.columns=_d1b;
this._setSelectionColumn(this.selectionMode);
this._setDeleteColumn(this.deleteColumn);
this._setRightArrowColumn(this.rightNavArrow);
this._columnsHash={};
var _d1c=0;
for(var i=0;i<this.columns.length;i++){
var _d1d=this.columns[i];
this._columnsHash[_d1d.field||_d1d.id]=_d1d;
if(!_d1d.width){
_d1d.width="100%";
}
if(_d1d.width.match(/\%/)){
_d1c+=Number(_d1d.width);
}
if(_d1d.field=="PHONE COLUMN"&&!this._isDesignLoaded){
_d1d.expression=_d1d.expression.replace(/\$\{wm\.runtimeId\}/g,this.getRuntimeId()).replace(/wm\.List\.prototype\./g,"app.getValueById('"+this.getRuntimeId()+"').");
}
}
if(!this.isDesignLoaded()&&dojo.isIE<=10){
for(var i=0;i<this.columns.length;i++){
var _d1d=this.columns[i];
var w=_d1d.width;
if(w.match(/\%/)){
_d1d.width=(w*100/_d1c)+"%";
}
}
}
},setSelectionMode:function(_d1e){
this.selectionMode=_d1e;
if(_d1e=="checkbox"||_d1e=="extended"){
_d1e="multiple";
}else{
if(_d1e=="radio"){
_d1e="single";
}else{
if(_d1e=="extended"){
_d1e=this.selectionMode="multiple";
}
}
}
this._selectionMode=_d1e;
if(!this.columns){
this.convertToColumns();
}else{
this.setColumns(this.columns);
}
this._render();
},_setRightArrowColumn:function(_d1f){
if(this.columns){
for(var i=this.columns.length-1;i>=0;i--){
if(this.columns[i].controller=="rightarrow"){
wm.Array.removeElementAt(this.columns,i);
}
}
if(_d1f){
this.columns.push({show:true,controller:"rightarrow",width:"20px",title:"-",field:"_rightArrow",mobileColumn:true});
}
}
},_setSelectionColumn:function(){
if(this.columns){
var _d20=false;
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].controller=="radio"||this.columns[i].controller=="checkbox"){
_d20=true;
if(this.selectionMode=="checkbox"||this.selectionMode=="radio"){
this.columns[i].controller=this.selectionMode;
}else{
wm.Array.removeElementAt(this.columns,i);
}
break;
}
}
if(!_d20&&(this.selectionMode=="radio"||this.selectionMode=="checkbox")){
var _d21=this.columns[0].controller?1:0;
wm.Array.insertElementAt(this.columns,{width:"25px",title:"-",controller:this.selectionMode,field:"_selector",show:true,mobileColumn:true},_d21);
}
}
},convertToColumns:function(){
if(this.dataFields){
var _d22=this.dataFields.split(/\s*,\s*/);
}else{
if(this.dataSet&&this.dataSet._dataSchema){
var _d22=wm.typeManager.getSimplePropNames(this.dataSet._dataSchema);
}
}
if(_d22&&_d22.length){
this.columns=[];
for(var i=0;i<_d22.length;i++){
this.columns.push({width:"100%",field:_d22[i],show:true,title:wm.capitalize(_d22[i])});
}
}
if(this.columns){
this.setColumns(this.columns);
}
},init:function(){
this.inherited(arguments);
this.setSelectionMode(this.selectionMode);
if(this.noHeader){
this.headerVisible=false;
}
if(!this.styleAsGrid&&(!this._classes||!this._classes.domNode||dojo.indexOf(this._classes.domNode,"MobileListStyle")==-1)){
this.addUserClass("MobileListStyle");
}else{
if(this.styleAsGrid&&(!this._classes||!this._classes.domNode||dojo.indexOf(this._classes.domNode,"GridListStyle")==-1)){
this.addUserClass("GridListStyle");
}
}
var _d23=this.spacerNodeTop=document.createElement("div");
_d23.className="wmlist-spacer";
this.listNode.appendChild(_d23);
var _d24=this.spacerNodeBottom=document.createElement("div");
_d24.className="wmlist-spacer";
this.listNode.appendChild(_d24);
this.createSelectedItem();
this.createBuilder();
if(!this.columns&&this.columnWidths&&this.dataFields.split(",").length!=this.columnWidths.split(",").length){
console.error("Column width count does not match field list count");
}
this._setDataFields(this.dataFields);
this.setColumnWidths(this.columnWidths);
this._render();
this.domNode.onboundschange=dojo.hitch(this,"updateHeaderWidth");
},postInit:function(){
this.inherited(arguments);
if(this.renderVisibleRowsOnly&&!this._isDesignLoaded){
this.connect(this.listNode,"onscroll",this,wm.isMobile?"blockScrolling":"_onScroll");
}
if(wm.isIOS){
this.connect(this.domNode,"ontouchstart",dojo,"stopEvent");
if(this.listNodeWrapper){
this.connect(this.listNodeWrapper,"ontouchstart",dojo,"stopEvent");
}
}
},setDisabled:function(_d25){
this.inherited(arguments);
dojo.toggleClass(this.domNode,"Disabled",this._disabled);
},_ontouchstart:function(e){
if(this._touchY&&this._touchY.animationId){
window.clearInterval(this._touchY.animationId);
}
this._touchY={time:new Date().getTime()};
if(this.listNode.clientHeight>this.listNodeWrapper.clientHeight){
dojo.stopEvent(e);
}
},_ontouchmove:function(e,yPos,_d26,_d27){
if(this.listNode.clientHeight<=this.listNodeWrapper.clientHeight||_d27>0&&this.getScrollTop()==0||_d27<0&&this.getScrollTop()>=Math.max(this.listNode.scrollHeight,this.listNodeWrapper.scrollHeight)){
return;
}
var time=new Date().getTime();
var _d28=time-this._touchY.time;
var _d29=this._scrollTop;
var _d2a=_d29-_d27;
if(_d2a<0){
_d2a=0;
}else{
if(_d2a>this.listNode.scrollHeight){
_d2a=this.listNode.scrollHeight;
}
}
this.setScrollTop(_d2a);
this._touchY={velocity:-_d27/_d28,time:new Date().getTime()};
dojo.stopEvent(e);
dojo.publish("wmTouchMove",[this]);
},_ontouchend:function(e,_d2b){
if(this.listNode.scrollHeight<=this.listNodeWrapper.clientHeight){
return;
}
if(this._touchedItem){
this._touchedItem.onTouchEnd();
}
if(this._touchY.velocity!=Infinity&&Math.abs(this._touchY.velocity)>0.01){
if(this._touchY.animationId){
window.clearInterval(this._touchY.animationId);
}
this._touchY.animationId=window.setInterval(dojo.hitch(this,"_onAnimateScroll"),50);
}
},_onAnimateScroll:function(){
this._touchY.velocity*=0.9;
var _d2c=this.spacerNodeBottom.offsetTop-this.listNodeWrapper.clientHeight;
var _d2d=(this._touchY.velocity==Infinity||Math.abs(this._touchY.velocity)<0.01||this.getScrollTop()>_d2c);
if(!_d2d){
var inc=Math.min(this._touchY.velocity*50,this.getListNodeHeight());
if(this._scrollTop+inc>_d2c){
inc=_d2c-this._scrollTop;
}
}
if(_d2d||!inc||Math.abs(inc)<=1){
window.clearInterval(this._touchY.animationId);
delete this._touchY.animationId;
return;
}
this.setScrollTop(this._scrollTop+inc);
this._onScroll();
},setScrollTop:function(_d2e){
var min=0;
var max=this.listNode.scrollHeight;
var top;
if(_d2e<min){
top=min;
}else{
if(_d2e>max){
top=max;
}else{
top=_d2e;
}
}
if(wm.isMobile){
var _d2f=this._scrollTop;
top=Math.min(top,Math.max(0,this.listNode.clientHeight-this.listNodeWrapper.clientHeight));
if(dojo.isWebKit){
this.listNode.style.WebkitTransform="translate(0,-"+top+"px)";
}else{
if(dojo.isMoz){
this.listNode.style.MozTransform="translate(0,-"+top+"px)";
}else{
if(dojo.isOpera){
this.listNode.style.OTransform="translate(0,-"+top+"px)";
}else{
if(dojo.isIE==8){
this.listNodeWrapper.scrollTop=top;
}else{
if(dojo.isIE){
this.listNode.style.MsTransform="translate(0,-"+top+"px)";
}
}
}
}
}
this.listNode.style.transform="translate(0,-"+top+"px)";
this._scrollTop=top;
if(!this._inScroll){
this._onScroll(top>_d2f?"down":"up");
}
}else{
this.listNode.scrollTop=top;
}
},isItemShowing:function(_d30){
if(!_d30.domNode.parentNode){
return 0;
}
var box={t:_d30.domNode.offsetTop};
box.b=box.t+_d30.domNode.clientHeight;
var _d31=this.getScrollTop();
var _d32=this.getListNodeHeight();
var _d33=_d31+_d32;
if(box.t>=_d31&&box.b<=_d33){
return 2;
}else{
if(box.b>=_d31&&box.t<_d31){
return 1;
}else{
if(box.t<=_d33&&box.b>_d33){
return -1;
}else{
return 0;
}
}
}
},scrollToRow:function(_d34){
if(_d34>this._data.length){
_d34=this._data.length-1;
}
var _d35=Boolean(this.items[_d34]);
var item=this.getItem(_d34);
var top,_d36;
if(item.domNode.parentNode){
var box=dojo.marginBox(item.domNode);
_d36=box.h;
var _d37=box.t;
}else{
_d36=this.avgHeight;
}
var _d38=!_d35?0:this.isItemShowing(item);
switch(_d38){
case 2:
break;
case 1:
top=item.domNode.offsetTop;
this.setScrollTop(top-(_d36-item.domNode.clientHeight));
break;
case -1:
this.setScrollTop(_d37-this.getListNodeHeight()+_d36);
break;
default:
var _d39=this.getScrollTop();
var _d3a=this.spacerNodeBottom.clientHeight+this.spacerNodeTop.clientHeight+this.getListNodeHeight();
if(item&&item.domNode.parentNode&&(_d34==0||this.items[_d34-1])){
top=item.domNode.offsetTop;
}else{
top=_d36*_d34;
}
var _d3b=this.spacerNodeBottom.clientHeight;
var _d3c=this.spacerNodeTop.clientHeight;
var _d3d=top-_d36;
this.spacerNodeTop.style.height=_d3d+"px";
this.spacerNodeBottom.style.height=(_d3b-_d3d+_d3c)+"px";
this._inScroll=true;
this.setScrollTop(Math.max(0,top-15));
this._inScroll=false;
var _d3e=this.getScrollTop()-_d39;
var rows=this.listNode.childNodes;
var _d3f=[];
for(var i=1;i<rows.length-1;i++){
var node=rows[i];
if(node.className.match(/wmlist-item/)){
_d3f.push(node);
}
}
dojo.forEach(_d3f,function(node){
node.parentNode.removeChild(node);
});
this.scrollDownAddItems(Math.max(0,_d34-1));
this._lastScrollTop=this.getScrollTop();
var _d40=this.items[this._data.length-1];
if(_d40&&this.isItemShowing(_d40)){
var box=dojo.marginBox(_d40.domNode);
var _d41=box.h;
var _d42=box.t;
this.setScrollTop(this.listNode.scrollHeight-_d41+this.getListNodeHeight());
this._lastScrollTop=this.getScrollTop();
}
}
},getItem:function(_d43){
if(!this.items[_d43]&&_d43<this._data.length){
this.addItem(this.getItemData(_d43),_d43);
}
return this.items[_d43];
},createSelectedItem:function(){
this.selectedItem=new wm.Variable({name:"selectedItem",owner:this});
},createBuilder:function(){
this.builder=new wm.table.builder(this.className+"-table",this.className+"-row",this.className+"-cell");
this.builder.getCellContent=dojo.hitch(this,"getCellContent");
this.builder.getCellStyle=dojo.hitch(this,"getCellStyle");
this.builder.getCellClass=dojo.hitch(this,"getCellClass");
},createItem:function(_d44,_d45,_d46){
return new wm.ListItem(this,_d44,null,_d45,_d46);
},getEmptySelection:function(){
return !this.hasSelection();
},hasSelection:function(){
if(dojo.isArray(this.selected)){
return this.selected.length>0;
}else{
return Boolean(this.selected);
}
},setDeleteColumn:function(_d47){
this.deleteColumn=_d47;
if(!this.columns){
this.convertToColumns();
}else{
this.setColumns(this.columns);
}
this._render();
},_setDeleteColumn:function(){
if(this.columns){
var _d48=false;
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].controller=="deleteColumn"){
_d48=true;
if(!this.deleteColumn){
wm.Array.removeElementAt(this.columns,i);
}
break;
}
}
if(!_d48&&this.deleteColumn){
this.columns.unshift({width:"25px",title:"-",controller:"deleteColumn",field:"_deleteColumn",show:true,mobileColumn:true});
}
}
},_setDataFields:function(_d49){
if(!this.columns&&this.dataSet){
if(this._isDesignLoaded){
this.updateColumnData(false);
}else{
this.convertToColumns();
}
}
if(this.columns){
this._dataFields=[];
var _d4a=false;
var _d4b=(this._isDesignLoaded||window["studio"]&&this.isOwnedBy(studio.page));
var _d4c=_d4b?studio.currentDeviceType=="phone":wm.device=="phone";
var _d4d=_d4b?studio.currentDeviceType=="tablet":wm.device=="tablet";
var _d4e=true;
if(_d4c||_d4d){
for(var i=0;i<this.columns.length;i++){
var c=this.columns[i];
if(c.mobileColumn&&!c.controller){
_d4a=true;
}
if(!c.controller&&c.show){
_d4e=false;
}
}
}
if(_d4a&&(_d4e||_d4c||this.desktopWidthExcedesBounds())){
this._useMobileColumn=_d4a;
}else{
this._useMobileColumn=_d4a=false;
}
for(var i=0;i<this.columns.length;i++){
var c=this.columns[i];
var show=_d4a&&c.mobileColumn||!_d4a&&c.show||c.controller;
if(show){
this._dataFields.push(this.columns[i].field||this.columns[i].id);
}
}
}else{
var d=this.dataFields=_d49||"";
if(d){
var s=d.split(","),d=[];
for(var i=0,v,f;(f=s[i]);i++){
v=dojo.trim(f);
if(v){
d.push(v);
}
}
}else{
var _d4f=(this.dataSet||0)._dataSchema;
if(_d4f){
var d=[];
for(var i in _d4f){
var ti=_d4f[i];
if(!(ti||0).isList&&!wm.typeManager.isStructuredType((ti||0).type)){
d.push(i);
}
}
}else{
var row=this._data;
if(dojo.isArray(row)){
row=row[0];
}
if(dojo.isObject(row)&&!dojo.isArray(row)){
d=[];
for(var i in row){
if(!dojo.isObject(row[i])){
d.push(dojo.trim(i));
}
}
}
}
}
this.trimDataSetObjectFields(d);
this._dataFields=d;
}
},desktopWidthExcedesBounds:function(){
var _d50=20;
var _d51=0;
dojo.forEach(this.columns,function(_d52){
if(_d52.show){
_d51++;
var w=String(_d52.width);
if(w.indexOf("%")!=-1){
_d50+=80;
}else{
var _d53=parseInt(w);
if(_d53){
_d50+=_d53;
}
}
}
});
var _d54=this.domNode.style.width||app.appRoot.bounds.w;
return (_d50>_d54)&&_d51>1;
},getDataSetObjectFields:function(){
var o={};
if(!this.dataSet){
return o;
}
var t=this.dataSet.type,tt=wm.typeManager.getTypeSchema(t)||{};
for(var i in tt){
if(wm.typeManager.isStructuredType(tt[i])){
o[i]=tt[i];
}
}
return o;
},trimDataSetObjectFields:function(_d55){
var f=this.getDataSetObjectFields();
for(var i in f){
for(var j=0,df;(df=_d55[j]);j++){
if(df==i){
_d55.splice(j,1);
break;
}
}
}
},setDataFields:function(_d56){
this._setDataFields(_d56);
this._render();
},setColumnWidths:function(_d57){
var c=this.columnWidths=_d57;
this._columnWidths=dojo.isArray(c)?c:c.split(",");
this._render();
},shouldShowHeader:function(){
var _d58=this._dataFields;
return (this.headerVisible&&(_d58||this._headerContent));
},getHeaderContent:function(){
return this._headerContent||this.builder.generateHeaderHtml();
},renderHeader:function(){
var s=this.shouldShowHeader();
this._setHeaderVisible(s);
if(s){
this.headerNode.innerHTML=this.getHeaderContent();
this.updateHeaderWidth();
}
},updateHeaderWidth:function(){
if(this.columns){
return;
}
var f=this.items&&this.items[0];
var n=f&&f.domNode.firstChild;
var b=n&&dojo.marginBox(n);
if(b&&this.headerNode.firstChild&&b.w){
dojo.marginBox(this.headerNode.firstChild,{w:b.w});
}
},_render:function(){
if(!this._cupdating){
if(this.dataSet){
this.renderDataSet(this.dataSet);
}else{
this.renderData(this._data);
}
}
},clear:function(_d59){
this._data=null;
this.inherited(arguments);
},getDataItemCount:function(){
return this._data?this._data.length:0;
},canSetDataSet:function(_d5a){
return Boolean(_d5a);
},setDataSet:function(_d5b){
try{
var _d5c=this.dataSet;
if(!this.canSetDataSet(_d5b)){
this.dataSet="";
}else{
this.dataSet=_d5b;
}
var t=(_d5b||0).type||"AnyData";
if(this._paging==="inc"){
var _d5d=this.getScrollTop();
if(this.loadingNode&&this.loadingNode.parentNode){
this.listNode.removeChild(this.loadingNode);
}
this._data=_d5b.getData();
this.updateBottomSpacerHeight();
this.setScrollTop(_d5d);
this.scrollDownAddItems();
delete this._paging;
}else{
if(this._isDesignLoaded&&this.columns&&this.columns.length&&_d5b&&_d5b.type){
if(this._typeChangedConnect){
dojo.disconnect(this._typeChangedConnect);
}
this._typeChangedConnect=this.connect(_d5b,"typeChanged",this,function(){
this.updateColumnData(true);
this._render();
});
if(!_d5c||!_d5c.type||_d5c.type==_d5b.type){
this.updateColumnData(true);
}
}
this.setSelectedItemType(t);
this.dataSetToSelectedItem(_d5b);
this.onsetdata(this.dataSet);
this.renderDataSet(this.dataSet);
}
}
catch(e){
alert(e.toString());
}
},setSelectedItemType:function(_d5e){
this.selectedItem.dataSet="";
this.selectedItem.setType(_d5e);
},update:function(){
var ds=this.getValueById((this.components.binding.wires["dataSet"]||0).source);
wm.fire(ds,"update");
},renderDataSet:function(_d5f){
if(this.isAncestorHidden()&&!this._renderHiddenGrid&&!this._isDesignLoaded){
this._renderDojoObjSkipped=true;
return;
}
this._renderDojoObjSkipped=false;
var d=_d5f instanceof wm.Variable?_d5f.getData():[];
d=this.runQuery(d);
this.renderData(d);
},doAutoSize:function(){
},setAutoSizeHeight:function(_d60){
this.autoSizeHeight=_d60;
this._render();
},setBestHeight:function(){
if(this.autoSizeHeight){
this._doingAutoSize=true;
var _d61=0;
if(this.items.length){
var _d62=dojo.coords(this.items[this.items.length-1].domNode);
_d61+=_d62.h+_d62.t;
}
if(this.headerVisible){
var _d62=dojo.coords(this.headerNode);
_d61+=_d62.h+_d62.t;
}
_d61+=this.padBorderMargin.b+this.padBorderMargin.t+2;
this.setHeight(_d61+"px");
this._doingAutoSize=false;
}
},_onShowParent:function(){
if(this._renderDojoObjSkipped&&!this._headerRendered||this.spacerNodeTop.clientHeight){
wm.onidle(this,"_render");
}
if(this.isNavigationMenu){
this.deselectAll();
}
},setShowing:function(_d63){
var _d64=this.showing;
this.inherited(arguments);
if(!_d64&&_d63){
this._onShowParent();
}
},renderData_optimized:function(_d65){
var _d66=this.selectedItem.getData();
this.clear(true);
this._data=_d65;
if(!this.dataFields){
this._setDataFields();
}
this.updateBuilder();
if(!this._data){
return;
}
this.renderHeader();
this._headerRendered=true;
var i=0;
var f=dojo.hitch(this,function(_d67,_d68,_d69,_d6a){
var max=Math.min(i+_d68,this.getDataItemCount());
for(;i<max;i++){
this.addItem(this.getItemData(i),i);
this._formatIndex=null;
}
if(i<this.getDataItemCount()){
wm.onidle(this,function(){
_d69(i,_d68,_d69,_d6a);
});
}else{
_d6a();
}
});
var _d6b=dojo.hitch(this,function(){
dojo.query(".wmlist-item:nth-child(odd)",this.domNode).addClass("Odd");
this.reflow();
if(this._listTouchScroll&&!this._listTouchScroll.scrollers.outer.style.width){
wm.job(this.getRuntimeId()+"ListSetupScroller",1,dojo.hitch(this._listTouchScroll,"setupScroller"));
}
var _d6c=dojo.isArray(_d66);
if(this.columns&&(_d6c&&_d66.length||!_d6c&&_d66||this.selectFirstRow)){
this.selectItemOnGrid(_d66);
}
this.onRenderData();
});
f(0,20,f,_d6b);
},renderBounds:function(){
var h=parseInt(this.domNode.style.height);
if(this.inherited(arguments)&&this.renderVisibleRowsOnly&&!this._isDesignLoaded){
if(this._renderDojoObjSkipped){
this._render();
}else{
var _d6d=this.listNode.childNodes.length>2?this.getItemForNode(this.listNode.childNodes[1]):null;
if(this.bounds.h>h){
this._onScroll("down");
}else{
this._onScroll("up");
}
}
}
},renderData:function(_d6e){
var _d6f=wm.device=="phone"?this.maxRenderedRowsPhone:this.maxRenderedRows;
if(this.selectedItem.type){
var _d70=this.selectedItem.getData();
}
this.clear(true);
if(this.scrollToTopOnDataChange){
this._inScroll=true;
this.setScrollTop(0);
delete this._inScroll;
}
this._data=_d6e;
if(!this.dataFields){
this._setDataFields();
}
this.updateBuilder();
this.renderHeader();
this.spacerNodeBottom.style.height="0px";
this.spacerNodeTop.style.height="0px";
if(!this._data){
return;
}
this._scrollDirection="down";
if(this.renderVisibleRowsOnly&&!this._isDesignLoaded){
if(!this.isAncestorHidden()&&this.getListNodeHeight()>0&&!this._loading){
this.scrollDownAddItems(0);
this.avgHeight=this.getAverageItemHeight();
this.updateBottomSpacerHeight();
var sc=this.getScrollTop();
if(sc>0){
this.setScrollTop(sc);
}
}else{
this._renderDojoObjSkipped=true;
}
}else{
var _d71=this.getDataItemCount();
for(var i=0;i<_d71;i++){
this.addItem(this.getItemData(i),i);
}
this.addOddClasses();
if(this.autoSizeHeight){
if(!this.isAncestorHidden()||this._isDesignLoaded){
this.setBestHeight();
}else{
this._renderDojoObjSkipped=true;
}
}
}
this.reflow();
var _d72=dojo.isArray(_d70);
if(this.columns&&(_d72&&_d70.length||!_d72&&_d70||this.selectFirstRow)){
this.selectItemOnGrid(_d70);
}
this.onRenderData();
},_renderItem:function(i){
var item=this.items[i];
if(item){
if(!item.domNode.parentNode||!item.domNode.parentNode.tagName){
var _d73=this.listNode;
var _d74=this.findNextSiblingNode(i);
var _d75=this.spacerNodeBottom.offsetTop;
_d73.insertBefore(item.domNode,_d74);
if(this._isScrolling){
if(this._scrollDirection=="down"){
this.updateBottomSpacerHeight();
if(_d74!=this.spacerNodeBottom){
this.spacerNodeTop.style.height=(this.spacerNodeTop.clientHeight-this.items[i].domNode.clientHeight)+"px";
}
}else{
var _d76=this.spacerNodeBottom.offsetTop-_d75;
this.spacerNodeTop.style.height=(this.spacerNodeTop.clientHeight-_d76)+"px";
}
}
}
}else{
var _d77=false;
this._formatIndex=i;
var _d75=this.spacerNodeBottom.offsetTop;
this.addItem(this.getItemData(i),i);
item=this.items[i];
this._formatIndex=null;
if(this._isScrolling){
if(this._scrollDirection=="down"){
this.updateBottomSpacerHeight();
}else{
if(!_d77){
if(!item.height){
item.height=item.domNode.clientHeight;
}
var _d76=this.spacerNodeBottom.offsetTop-_d75;
this.spacerNodeTop.style.height=(this.spacerNodeTop.clientHeight-_d76)+"px";
}
}
}
}
if(i==0){
this.spacerNodeTop.style.height="0px";
}else{
if(i==this.getDataItemCount()-1){
this.spacerNodeBottom.style.height="0px";
}
}
},getNodeFromItem:function(_d78){
if(_d78){
return _d78.domNode;
}else{
return null;
}
},findNextSiblingNode:function(_d79){
var _d7a=this.listNode;
if(_d79==0){
return _d7a.childNodes[1];
}
if(this.items[_d79-1]){
var _d7b=this.getNodeFromItem(this.items[_d79-1]);
if(_d7b.parentNode&&_d7b.parentNode.tagName){
return _d7a.childNodes[dojo.indexOf(_d7a.childNodes,_d7b)+1];
}
}
if(this.items[_d79+1]){
var node=this.getNodeFromItem(this.items[_d79+1]);
if(node.parentNode&&node.parentNode.tagName){
return node;
}
}
for(var i=_d79-2;i>=0;i--){
if(this.items[i]){
var node=this.getNodeFromItem(this.items[i]);
if(node.parentNode&&node.parentNode.tagName){
return _d7a.childNodes[dojo.indexOf(_d7a.childNodes,node)+1];
}
}
}
return _d7a.childNodes[1];
},onStyleRow:function(_d7c,_d7d){
},_onStyleRowBeforeStart:1,addItem:function(_d7e,_d7f,_d80){
var item=this.createItem(_d7e,_d80,_d7f);
var _d81=this.listNode;
dojo.setSelectable(item.domNode,false);
if(_d7f!=undefined){
this.items[_d7f]=item;
var _d82=this.findNextSiblingNode(_d7f);
if(_d82){
_d81.insertBefore(item.domNode,_d82);
}else{
_d81.insertBefore(item.domNode,this.spacerNodeBottom);
}
}else{
this.items.push(item);
item.index=this.items.length-1;
var _d82=(this.items.length==_d7f+1)?this.spacerNodeBottom:_d81.childNodes[_d7f+1];
_d81.insertBefore(item.domNode,_d82);
}
try{
var _d83=item.getData();
if(_d83){
var _d84={customClasses:"",customStyles:""};
this.onStyleRow(_d84,_d83);
if(_d84.customClasses){
dojo.addClass(item.domNode,_d84.customClasses);
}
if(_d84.customStyles){
item.domNode.style.cssText=_d84.customStyles;
}
}
}
catch(e){
}
return item;
},addSpacer:function(_d85,_d86){
var _d87=document.createElement("div");
_d87.className="wmlist-spacer";
_d87.style.height=_d86+"px";
var _d88=this.listNode.childNodes[_d85+1];
this.listNode.insertBefore(_d87,_d88);
this.items[_d85]=_d87;
},addVisibleItems:function(_d89){
var _d8a=this.listNode;
var _d8b=this.getDataItemCount();
if(_d8b==0){
return;
}
var _d8c=this.getScrollTop();
var _d8d=this.getListNodeHeight()+_d8c;
var _d8e=this.avgHeight=this.getAverageItemHeight();
if(_d89===undefined){
_d89=Math.floor(_d8c/_d8e);
_d89=Math.max(0,_d89-10);
_d89=Math.min(_d89,_d8b);
}
if(this._scrollDirection=="down"){
for(var i=0;i<_d89;i++){
if(!this.items[i]){
this.addSpacer(i,_d8e);
_d8f+=_d8e;
}
}
}else{
var _d90=_d8a.childNodes[1];
var _d91=this.getItemForNode(_d90);
}
var _d8f=_d8d-1;
for(var i=_d89;i<_d8b&&_d8f<_d8d;i++){
this._renderItem(i);
if(!this.items[i]){
this._renderItem(i);
}
_d8f=this.items[i].domNode.offsetTop+this.items[i].domNode.clientHeight;
}
var _d92=i+10;
for(;i<_d8b&&i<_d92;i++){
this._renderItem(i);
}
this.addOddClasses();
},updateTopSpacerHeight:function(){
var _d93=this.listNode.childNodes[1];
if(!_d93){
this.spacerNodeTop.style.height="0px";
}else{
var item=this.getItemForNode(_d93);
var _d94=dojo.indexOf(this.items,item);
var _d95=_d94*this.getAverageItemHeight();
this.spacerNodeTop.style.height=_d95+"px";
}
},updateBottomSpacerHeight:function(){
var _d96=this.getDataItemCount();
var rows=this.listNode.childNodes;
if(rows<=2){
this.spacerNodeBottom.style.height="0px";
return;
}
var _d97=rows[rows.length-2];
var _d98=this.getItemForNode(_d97);
var _d99=dojo.indexOf(this.items,_d98);
var _d9a=_d96-_d99-1;
if(_d9a>0){
this.spacerNodeBottom.style.height=(_d9a*this.avgHeight)+"px";
}else{
this.spacerNodeBottom.style.height="0px";
}
},getListNodeHeight:function(){
return (this.listNodeWrapper||this.listNode).clientHeight;
},getScrollTop:function(){
if(wm.isMobile){
return this._scrollTop;
}else{
var _d9b=this.listNode;
return _d9b.scrollTop;
}
},updateAverageItemHeight:function(){
var h=0;
var _d9c=0;
var rows=this.listNode.childNodes;
for(var i=1;i<rows.length-2;i++){
h+=rows[i].clientHeight;
}
if(h>0){
this.avgHeight=h/(rows.length-3);
}
return this.avgHeight;
},getAverageItemHeight:function(){
return this.avgHeight||20;
},blockScrolling:function(){
this.listNodeWrapper.scrollTop=0;
},_onScroll:function(_d9d,_d9e){
if(this._inScroll){
return;
}
this._inScroll=true;
try{
if(this._lastScrollTime&&(new Date().getTime()-this._lastScrollTime)<10){
return;
}
this._isScrolling=true;
var _d9f=this.getScrollTop();
if(_d9d=="down"||_d9d!="up"&&(this._lastScrollTop===undefined||this._lastScrollTop<_d9f)){
this._scrollDirection="down";
this.scrollDownRemoveItems();
this.scrollDownAddItems();
}else{
if(this._lastScrollTop>_d9f){
this._scrollDirection="up";
this.scrollUpRemoveItems();
this.scrollUpAddItems();
wm.job(this.getRuntimeId()+".testScrollTop",200,this,"scrollUpAddItems");
}else{
this.scrollDownAddItems();
this.scrollUpAddItems();
}
}
}
catch(e){
}
finally{
this._lastScrollTop=_d9f;
this._lastScrollTime=new Date().getTime();
this._isScrolling=false;
delete this._inScroll;
}
},_testScrollTop:function(){
this._onScroll(null,true);
},getLastItemNode:function(){
for(var i=this.listNode.childNodes.length-1;i>=0;i--){
if(this.listNode.childNodes[i].id){
return this.listNode.childNodes[i];
}
}
},scrollDownAddItems:function(_da0){
var _da1=0;
var _da2=this.listNode;
var _da3=this.getDataItemCount();
if(_da3==0){
return;
}
var _da4=this.getScrollTop();
var _da5=this.getListNodeHeight();
var _da6=0;
var _da7=_da5+_da4+this.spacerNodeTop.offsetTop;
dojo.forEach(this.listNode.childNodes,function(node){
node.style.border="";
});
if(_da0!==undefined){
_da6=this.getScrollTop();
}else{
var _da8=this.getLastItemNode();
if(_da8){
var item=this.getItemForNode(_da8);
var _da9=dojo.indexOf(this.items,item);
_da0=_da9+1;
_da6=item.domNode.offsetTop+item.domNode.clientHeight;
}else{
_da1=this.getAverageItemHeight();
_da0=Math.floor(_da4/_da1);
_da6=this.spacerNodeTop.clientHeight;
}
if(_da2.childNodes.length==2){
var _daa=_da1*_da0;
var _dab=this.spacerNodeTop.clientHeight;
var _dac=_daa-_dab;
this.spacerNodeTop.style.height=_daa+"px";
var _dad=this.spacerNodeBottom.clientHeight;
_dad=_dad-_dac;
this.spacerNodeBottom.style.height=_dad+"px";
}
}
var _dae=false;
for(var i=_da0;i<_da3&&_da6<_da7;i++){
_dae=true;
this._renderItem(i);
if(!_da1){
_da1=this.items[i].domNode.clientHeight||22;
}
_da6+=_da1;
}
if(i<_da3){
if(_dae){
this._renderItem(i);
}
}else{
if(!this._paging){
if(this.dataSet instanceof wm.LiveVariable&&this.dataSet.getPage()<this.dataSet.getTotalPages()-1){
this.dataSet._appendData=true;
this.dataSet.setNextPage();
this._paging="inc";
}else{
this.onScrollToBottom();
var svar=!this.dataSet||this.dataSet instanceof wm.ServiceVariable?this.dataSet:this.dataSet.isAncestorInstanceOf(wm.ServiceVariable);
if(svar&&svar._requester){
this._paging="inc";
}
}
if(this._paging){
var _da2=this.listNode;
var node=this.loadingNode||dojo.create("div",{className:"wmlist-item wmlist-loading",innerHTML:"Loading..."});
_da2.insertBefore(node,this.spacerNodeBottom);
this.loadingNode=node;
}
}
}
this.addOddClasses();
this.updateAverageItemHeight();
},onScrollToBottom:function(){
},addOddClasses:function(){
wm.job(this.getRuntimeId()+".addOddClasses",10,this,function(){
dojo.query(".wmlist-item",this.domNode).forEach(function(node){
var id=parseInt(node.id.replace(/^.*_/,""));
dojo.toggleClass(node,"Odd",Boolean(id%2));
});
});
},scrollDownRemoveItems:function(){
var _daf=this.getScrollTop();
var _db0=this.spacerNodeTop.clientHeight;
var _db1=this.getAverageItemHeight();
var _db2=_daf-_db1;
var _db0=this.spacerNodeTop.clientHeight;
var rows=this.listNode.childNodes;
var _db3=[];
for(var i=1;i<rows.length-1;i++){
var node=rows[i];
var h=node.clientHeight;
if(h+_db0<_db2){
_db3.push(node);
_db0+=h;
}else{
break;
}
}
this.spacerNodeTop.style.height=_db0+"px";
dojo.forEach(_db3,function(node){
node.parentNode.removeChild(node);
});
},scrollUpRemoveItems:function(){
var _db4=this.avgHeight=this.getAverageItemHeight();
var _db5=this._listTouchScroll?this.listNode.parentNode:this.listNode;
var _db6=this.getScrollTop()+this.getListNodeHeight()+this.spacerNodeTop.offsetTop;
var rows=this.listNode.childNodes;
var _db7=parseInt(this.spacerNodeBottom.style.height)||0;
while(rows.length>2){
var row=rows[rows.length-2];
if(row.offsetTop>_db6){
row.parentNode.removeChild(row);
}else{
break;
}
}
this.updateBottomSpacerHeight();
},scrollUpAddItems:function(){
var _db8=this.listNode;
var _db9=this.getDataItemCount();
if(_db9==0){
return;
}
var _dba=this.getScrollTop();
var _dbb=this.getListNodeHeight()+_dba+this.spacerNodeTop.offsetTop;
var _dbc=this.getAverageItemHeight();
var _dbd=_dba;
var _dbe;
if(this.listNode.childNodes.length>2){
var item=this.getItemForNode(this.getLastItemNode());
var _dbf=dojo.indexOf(this.items,item);
_dbe=_dbf-1;
}else{
_dbe=Math.floor(_dbb/_dbc);
}
var _dc0=(_dba&&_db8.childNodes.length==2);
if(_dc0){
this.spacerNodeBottom.style.height=_dbc*(_db9-_dbe)+"px";
}
for(var i=_dbe;i>=0;i--){
this._renderItem(i);
if(this.items[i].domNode.offsetTop+this.items[i].domNode.clientHeight<_dbd){
break;
}
}
if(i>=0){
this._renderItem(i);
}
this.updateAverageItemHeight();
if(_dba<=0){
this.spacerNodeTop.style.height="0px";
}else{
if(_dc0){
this.spacerNodeTop.style.height=_dbc*i+"px";
}
}
this.addOddClasses();
},onRenderData:function(){
},selectItemOnGrid:function(obj,_dc1){
if(obj instanceof wm.Variable){
obj=obj.getData();
}
if(obj===undefined||obj===null){
obj={};
}
var _dc2=[];
dojo.forEach(this.columns,function(col){
if(col.displayType=="Date"){
_dc2.push(col.field||col.id);
}
});
if(!_dc1){
_dc1=this.primaryKeyFields||this.dataSet?wm.data.getIncludeFields(this.dataSet.type):this._pkList||[];
}
if(_dc1.length==0&&this.dataSet){
var _dc3=wm.typeManager.getTypeSchema(this.dataSet.type);
for(var _dc4 in _dc3){
_dc1.push(_dc4);
}
}
var q={};
dojo.forEach(_dc1,function(f){
q[f]=obj[f];
if(dojo.indexOf(_dc2,f)!=-1){
q[f]=new Date(obj[f]);
}
});
var _dc5=this.runQuery(this._data,q);
if(_dc5.length<1){
if(this.selectFirstRow){
this.setSelectedRow(0);
}else{
this.deselectAll();
}
return;
}
if(_dc5[0]._rowNumber!=undefined){
this._cupdating=true;
this.setSelectedRow(_dc5[0]._rowNumber);
this._cupdating=false;
}else{
if(this.selectFirstRow){
this.setSelectedRow(0);
}else{
this.deselectAll();
}
}
},runQuery:function(_dc6,_dc7){
var _dc8=_dc7||this.query;
if(wm.isEmpty(_dc8)){
return _dc6;
}else{
var _dc9=[];
for(var i=0;i<_dc6.length;i++){
var d=_dc6[i];
if(this.queryItem(_dc8,d,i)){
d._rowNumber=i;
_dc9.push(d);
}
}
return _dc9;
}
},queryItem:function(_dca,_dcb,_dcc){
var w="*";
var _dcd=true;
for(var key in _dca){
if(this._columnsHash&&this._columnsHash[key]&&this._columnsHash[key].isCustomField){
var col=this._columnsHash[key];
if(col.expression){
_dcb[key]=wm.expression.getValue(col.expression,_dcb,this.owner);
}else{
if(col.formatFunc){
switch(col.formatFunc){
case "wm_date_formatter":
case "Date (WaveMaker)":
case "wm_localdate_formatter":
case "Local Date (WaveMaker)":
case "wm_time_formatter":
case "Time (WaveMaker)":
case "wm_number_formatter":
case "Number (WaveMaker)":
case "wm_currency_formatter":
case "Currency (WaveMaker)":
case "wm_image_formatter":
case "Image (WaveMaker)":
case "wm_link_formatter":
case "Link (WaveMaker)":
break;
case "wm_array_formatter":
_dcb[key]=this.arrayFormatter(key,col.formatProps,null,null,null,_dcb[k]);
break;
default:
if(!this.isDesignLoaded()){
_dcb[key]=dojo.hitch(this.owner,col.formatFunc)("",_dcc,dojo.indexOf(this.columns,col),key,{customStyles:[],customClasses:[]},_dcb);
}
}
}
}
}
var a=_dcb[key];
if(dojo.isString(a)){
a=a.replace(/\\([^\\])/g,"$1");
}
var b=_dca[key];
var _dce=true;
if(dojo.isString(b)){
b=b.replace(/\\([^\\])/g,"$1");
if(b.charAt(0)==w){
b=b.substring(1);
_dce=false;
}
}
if(b==w){
continue;
}
if(dojo.isString(a)&&dojo.isString(b)){
if(b.charAt(b.length-1)==w){
b=b.slice(0,-1);
}
a=a.toLowerCase();
b=b.toLowerCase();
var _dcf=a.indexOf(b);
if(_dcf==-1||_dcf>0&&_dce){
_dcd=false;
break;
}
}else{
if(a!==b){
_dcd=false;
break;
}
}
}
return _dcd;
},getHeading:function(_dd0){
if(this.columns){
var _dd1=this._columnsHash[_dd0];
var _dd2=_dd1.title;
return _dd2==null?"":_dd2;
}else{
var d=this._dataSource;
var s=d&&d.schema||0;
var si=s[_dd0]||0;
if(si.label){
return wm.capitalize(si.label);
}else{
var _dd3=_dd0.replace(/^.*\./,"");
return wm.capitalize(_dd3);
}
}
},getItemData:function(_dd4){
return this._data[_dd4];
},_getColumnDef:function(_dd5){
var _dd6=this._useMobileColumn;
var _dd7=dojo.some(this.columns,function(c){
return c.mobileColumn&&!c.controller;
});
var _dd8=-1;
for(var i=0;i<this.columns.length;i++){
if(_dd6&&this.columns[i].mobileColumn||(!_dd7||!_dd6)&&this.columns[i].show){
_dd8++;
}
if(_dd8==_dd5){
return this.columns[i];
}
}
},getCellContent:function(_dd9,_dda,_ddb,_ddc){
var _ddd=this._dataFields&&this._dataFields[_dda];
var _dde;
var i=this._formatIndex!=null?this._formatIndex:this.getCount();
if(this._firstItemIndex!==undefined){
i+=this._firstItemIndex;
}
if(_ddb){
_dde="<div>"+this.getHeading(_ddd);
}else{
if(this.columns){
var _ddf=this._getColumnDef(_dda);
if(_ddf.controller){
if(_ddf.controller=="deleteColumn"){
_dde="<div wmcontroller='true' class='wmDeleteColumn'><div wmcontroller='true' class='wmDeleteColumnImage'/></div>";
}else{
if(_ddf.controller=="rightarrow"){
_dde="<div class='mblArrowContainer'><div class='mblRightArrow mblArrow' /></div>";
}else{
_dde="<input wmcontroller='true' type='"+_ddf.controller+"' />";
}
}
}else{
var _de0=this._data[i];
var _dde=_de0;
var _de1=_ddd.split(".");
for(var _de2=0;_de2<_de1.length;_de2++){
if(_dde&&typeof _dde=="object"){
_dde=_dde[_de1[_de2]];
}else{
_dde=null;
}
}
_dde=this.formatCell(_ddd,_dde,_de0,i,_dda);
}
}
}
if(_dde==undefined){
var d=this.getItemData(i);
f=wm.decapitalize(_ddd);
_dde=_ddd?d[_ddd]:d;
}
var info={column:_dda,data:_dde,header:_ddb};
this.onformat(info,_dda,_dde,_ddb,_de0);
if(!this.inSetContent){
this._formatIndex=null;
}
if(_dde===undefined||_dde===null){
_dde="";
}
return "<div class='wmlist-content'>"+info.data+"</div>";
},getColWidth:function(_de3){
if(this.columns){
return this.columns[_de3].width;
}else{
var c=this._columnWidths;
if(!c||c.length==0||c.length==1&&!c[0]||c[_de3]===undefined){
return Math.round(100/this.builder.colCount)+"%";
}else{
return c[_de3];
}
}
},getCellStyle:function(_de4,_de5){
if(this.columns){
var text=[];
var _de6=this._dataFields[_de5];
var col=this._columnsHash[_de6];
var _de7=col.align;
if(_de4!=-1){
_de4=this._formatIndex!=null?this._formatIndex:this.getCount();
var data=this._data[_de4];
if(col.backgroundColor){
var _de8=wm.expression.getValue(col.backgroundColor,data,this.owner);
if(_de8){
text.push("background-color:"+_de8);
}
}
if(col.textColor){
var _de9=wm.expression.getValue(col.textColor,data,this.owner);
if(_de9){
text.push("color:"+_de9);
}
}
}
var _dea=col.width;
if(_dea){
text.push("width:"+_dea);
}
if(_de7){
text.push("text-align:"+_de7);
}
return text.join(";");
}else{
return "width: "+this.getColWidth(_de5)+";";
}
},updateBuilder:function(){
this.builder.colCount=this._dataFields?this._dataFields.length:1;
this.builder.rowCount=1;
},format:function(_deb,_dec){
this._formatIndex=_deb;
return this.builder.generateHtml(_dec);
},_onformatBeforeStart:1,onformat:function(_ded,_dee,_def,_df0,_df1){
},onsetdata:function(_df2){
}});
wm.List.extend({renderDojoObj:function(){
this._render();
},formatCell:function(_df3,_df4,_df5,_df6,_df7){
var col;
if(!this._columnsHash||!this._columnsHash[_df3]){
if(this.columns){
dojo.forEach(this.columns,function(c){
if(c.field==_df3||c.id==_df3){
col=c;
}
});
}
if(!col){
return _df4;
}
}else{
col=this._columnsHash[_df3];
}
var _df8="";
if(col.expression){
var expr=col.expression;
try{
if(col.field=="PHONE COLUMN"){
expr=expr.replace(/\$\{wm\.rowId\}/g,_df6);
}
if(expr.indexOf("${this}")!=-1){
expr=expr.replace(/\$\{this\}/g,dojo.toJson(_df5));
}
if(this._isDesignLoaded){
expr=expr.replace(/\$\{wm\.runtimeId\}/g,this.getRuntimeId()).replace(/wm\.List\.prototype\./g,"app.getValueById('"+this.getRuntimeId()+"').");
}
_df8=wm.expression.getValue(expr,_df5,this.owner);
}
catch(e){
}
}else{
_df8=_df4;
}
if(col.formatFunc){
switch(col.formatFunc){
case "wm_date_formatter":
case "Date (WaveMaker)":
_df8=this.dateFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_localdate_formatter":
case "Local Date (WaveMaker)":
_df8=this.localDateFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_time_formatter":
case "Time (WaveMaker)":
_df8=this.timeFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_number_formatter":
case "Number (WaveMaker)":
_df8=this.numberFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_array_formatter":
_df8=this.arrayFormatter(col.field||col.id,col.formatProps||{},null,null,null,_df8);
break;
case "wm_currency_formatter":
case "Currency (WaveMaker)":
_df8=this.currencyFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_image_formatter":
case "Image (WaveMaker)":
_df8=this.imageFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_link_formatter":
case "Link (WaveMaker)":
_df8=this.linkFormatter(col.formatProps||{},null,null,null,_df8);
break;
case "wm_button_formatter":
_df8=this.buttonFormatter(_df3,col.formatProps||{},null,null,null,_df8,_df6);
break;
default:
if(!this.isDesignLoaded()){
if(this.owner[col.formatFunc]){
_df8=dojo.hitch(this.owner,col.formatFunc)(_df8,_df6,_df7,_df3,{customStyles:[],customClasses:[]},_df5);
}
}else{
_df8="<i>runtime only...</i>";
}
break;
}
}
return _df8;
},dateFormatter:function(_df9,_dfa,_dfb,_dfc,_dfd){
if(!_dfd){
return _dfd;
}else{
if(typeof _dfd=="number"){
_dfd=new Date(_dfd);
}else{
if(_dfd instanceof Date==false){
return _dfd;
}
}
}
var _dfe=_df9.dateType||"date";
if(!_df9.useLocalTime){
var _dff=_dfe=="date"?360:0;
_dfd.setHours(0,60*_dfd.getHours()+_dfd.getMinutes()+60*wm.timezoneOffset+_dff);
}
var _e00={fullYear:true,selector:_dfe,formatLength:_df9.formatLength||"short",locale:dojo.locale,datePattern:_df9.datePattern,timePattern:_df9.timePattern};
return dojo.date.locale.format(_dfd,_e00);
},numberFormatter:function(_e01,_e02,_e03,_e04,_e05){
var _e06={places:_e01.dijits||0,round:_e01.round?0:-1,type:_e01.numberType};
return dojo.number.format(_e05,_e06);
},arrayFormatter:function(_e07,_e08,_e09,_e0a,_e0b,_e0c){
if(!_e08.joinFieldName){
_e08.joinFieldName="dataValue";
}
if(!_e08.separator){
_e08.separator=",";
}
var str="";
if(_e0c){
dojo.forEach(_e0c,function(item){
if(str){
str+=_e08.separator+" ";
}
str+=item[_e08.joinFieldName];
});
}
return str;
},currencyFormatter:function(_e0d,_e0e,_e0f,_e10,_e11){
var _e12=false;
if(this instanceof wm.DojoGrid){
_e12=this._isDesignLoaded;
}
return dojo.currency.format(_e11,{currency:_e0d.currency||(_e12?studio.application.currencyLocale:app.currencyLocale)||"USD",places:_e0d.dijits==undefined?2:_e0d.dijits,round:_e0d.round?0:-1});
},imageFormatter:function(_e13,_e14,_e15,_e16,_e17){
if(_e17&&_e17!=""){
var _e18=_e13.width?" width=\""+_e13.width+"px\"":"";
var _e19=_e13.height?" height=\""+_e13.height+"px\"":"";
if(_e13.prefix){
if(_e13.prefix.match(/\/$/)&&_e17.indexOf("/")==0){
_e17=_e17.substring(1);
}
_e17=_e13.prefix+_e17;
}
if(_e13.postfix){
_e17=_e17+_e13.postfix;
}
return "<img "+_e18+_e19+" src=\""+_e17+"\">";
}
return "";
},linkFormatter:function(_e1a,_e1b,_e1c,_e1d,_e1e){
if(_e1e&&_e1e!=""){
var _e1f=String(_e1e);
var _e20=String(_e1e);
if(_e1a.prefix){
_e20=_e1a.prefix+_e20;
}
if(_e1a.postfix){
_e20=_e20+_e1a.postfix;
}
var _e21=_e1a.target||"_NewWindow";
if(_e20.indexOf("://")==-1&&_e20.charAt(0)!="/"){
_e20="http://"+_e20;
}
return "<a href=\""+_e20+"\" target=\""+_e21+"\">"+_e1f+"</a>";
}
return _e1e;
},buttonFormatter:function(_e22,_e23,_e24,_e25,_e26,_e27,_e28,_e29){
if(_e27!==null&&_e27!==undefined&&_e27!==""){
var _e2a=_e23.buttonclass?" class=\""+_e23.buttonclass+"\" ":" class=\"wmbutton\" ";
var _e2b=this.getRuntimeId()+".gridButtonClicked(event,\""+_e22+"\","+_e28+")' ";
if(wm.isMobile&&!wm.isFakeMobile){
_e2b="ontouchstart='"+this.getRuntimeId()+".gridButtonTouchStart(event)' ontouchmove='"+this.getRuntimeId()+".gridButtonTouchMove(event)' ontouchend='"+_e2b+"'";
}else{
_e2b="onclick='"+_e2b+"'";
}
return "<button "+_e2b+_e2a+">"+_e27+"</button>";
}
return _e27;
},gridButtonTouchStart:function(_e2c){
_e2c=_e2c||window.event;
dojo.stopEvent(_e2c);
this._buttonTouchPos={y:_e2c.targetTouches?_e2c.targetTouches[0].clientY:_e2c.clientY,x:_e2c.targetTouches?_e2c.targetTouches[0].clientX:_e2c.clientX,isClick:true};
},gridButtonTouchMove:function(_e2d){
_e2d=_e2d||window.event;
dojo.stopEvent(_e2d);
if(this._buttonTouchPos.isClick){
var y=_e2d.targetTouches?_e2d.targetTouches[0].clientY:_e2d.clientY;
var x=_e2d.targetTouches?_e2d.targetTouches[0].clientX:_e2d.clientX;
this._buttonTouchPos.isClick=(Math.abs(y-this._buttonTouchPos.y)<5&&Math.abs(x-this._buttonTouchPos.x)<5);
}
},gridButtonClicked:function(_e2e,_e2f,_e30){
_e2e=_e2e||window.event;
dojo.stopEvent(_e2e);
if(wm.isMobile&&!this._buttonTouchPos.isClick){
return;
}
var _e31=this._data[_e30];
this.onGridButtonClick(_e2f,_e31,_e30);
},onGridButtonClick:function(_e32,_e33,_e34){
},setSelectedRow:function(_e35){
this.eventSelect(this.items[_e35]);
},setSelectedItem:function(_e36){
if(_e36 instanceof wm.Variable){
_e36=_e36.getData();
}
if(!_e36){
this.deselectAll();
return;
}
wm.forEachProperty(_e36,function(_e37,_e38){
if(typeof _e37=="object"){
delete _e36[_e38];
}
});
this.selectByQuery(_e36);
},select:function(_e39){
var _e3a;
var item;
if(_e39===null){
_e3a=-1;
item=null;
}else{
if(typeof _e39=="object"){
_e3a=_e39.index;
item=_e39;
}else{
_e3a=_e39;
item=this.items[_e3a];
}
}
if((!this.isAncestorHidden()||this.renderVisibleRowsOnly)&&!this._isDesignLoaded){
var _e3b=this._renderHiddenGrid;
this._renderHiddenGrid=true;
this.scrollToRow(_e3a);
this._renderHiddenGrid=_e3b;
item=this.getItem(_e3a);
}
if(item){
this.inherited(arguments,[item]);
}
},selectByIndex:function(_e3c){
this.select(_e3c);
},selectByQuery:function(_e3d){
if(!this.dataSet){
return;
}
if(!_e3d){
this.deselectAll();
return;
}
var _e3e=this.dataSet.query(_e3d);
if(this.renderVisibleRowsOnly){
this.renderVisibleRowsOnly=false;
this._render();
this.renderVisibleRowsOnly=true;
}
this.deselectAll();
var _e3f=_e3e.getCount();
for(var i=0;i<_e3f;i++){
var item=_e3e.data._list[i];
this.addToSelection(this.items[dojo.indexOf(this.dataSet.data._list,item)]);
if(this._selectionMode=="single"){
break;
}
}
},getRow:function(_e40){
return this._data[_e40];
},findRowIndexByFieldValue:function(_e41,_e42){
var item;
for(var i=0;i<this._data.length;i++){
item=this._data[i];
if(item[_e41]===_e42){
return i;
}
}
return -1;
},getCell:function(_e43,_e44){
var row=this._data[_e43];
if(row){
var col=this._columnsHash?this._columnsHash[_e44]:null;
if(col&&col.isCustomField){
if(col.expression){
return wm.expression.getValue(col.expression,row,this.owner);
}else{
if(col.formatFunc){
switch(col.formatFunc){
case "wm_date_formatter":
case "Date (WaveMaker)":
case "wm_localdate_formatter":
case "Local Date (WaveMaker)":
case "wm_time_formatter":
case "Time (WaveMaker)":
case "wm_number_formatter":
case "Number (WaveMaker)":
case "wm_currency_formatter":
case "Currency (WaveMaker)":
case "wm_image_formatter":
case "Image (WaveMaker)":
case "wm_link_formatter":
case "Link (WaveMaker)":
return undefined;
default:
if(!this.isDesignLoaded()){
return dojo.hitch(this.owner,col.formatFunc)("",_e43,dojo.indexOf(this.columns,col),_e44,{customStyles:[],customClasses:[]},row);
}
}
}
}
return undefined;
}else{
return row[_e44];
}
}
return "";
},setCell:function(_e45,_e46,_e47,_e48){
var item=this.dataSet.getItem(_e45);
item.beginUpdate();
item.setValue(_e46,_e47);
item.endUpdate();
var row=this._data[_e45];
if(row){
row[_e46]=_e47;
if(!_e48){
this.items[_e45].setContent(row);
}
}
},getIsRowSelected:function(){
return !this.getEmptySelection();
},deleteRow:function(_e49){
this.dataSet.removeItem(_e49);
this._render();
},getRowCount:function(){
return this.items.length;
},addRow:function(_e4a,_e4b){
if(this.getRowCount()==0&&this.variable){
this.dataSet.setData([_e4a]);
if(_e4b){
this.select(0);
}
return;
}
var data=dojo.clone(_e4a);
var v=new wm.Variable({type:this.dataSet.type});
v.setData(data);
var _e4c=this.dataSet.getCount();
this.dataSet.addItem(v);
this.dataSet.getItem(_e4c).data._new=true;
if(_e4b||_e4b===undefined){
this.select(_e4c);
}
},addEmptyRow:function(_e4d){
var obj={};
var _e4e=false;
for(var i=0;i<this.columns.length;i++){
var _e4f=this.columns[i];
var _e50=_e4f.field||_e4f.id;
var _e51=_e50.split(".");
var _e52=this.dataSet.type;
var type=wm.typeManager.getType(_e52);
for(var _e53=0;_e53<_e51.length;_e53++){
if(type&&type.fields){
var _e54=type.fields[_e51[_e53]];
if(_e54){
_e52=type.fields[_e51[_e53]].type;
type=wm.typeManager.getType(_e52);
}else{
type="java.lang.String";
}
}
}
var _e55=null;
switch(_e52){
case "java.lang.Integer":
case "java.lang.Double":
case "java.lang.Float":
case "java.lang.Short":
_e55=0;
break;
case "java.lang.Date":
_e55=new Date().getTime();
_e4e=true;
break;
case "java.lang.Boolean":
_e55=false;
break;
default:
_e55="";
_e4e=true;
}
var _e56=obj;
for(var _e53=0;_e53<_e51.length;_e53++){
if(_e53+1<_e51.length){
if(!_e56[_e51[_e53]]){
_e56[_e51[_e53]]={};
}
_e56=_e56[_e51[_e53]];
}else{
_e56[_e51[_e53]]=_e55;
}
}
}
this.addRow(obj,_e4d);
},getDataSet:function(){
return this.dataSet;
},setSortIndex:function(){
console.warn("setSortIndex not implemented for wm.List");
},setSortField:function(){
console.warn("setSortField not implemented for wm.List");
},setQuery:function(_e57){
this.query=_e57;
this.renderDataSet(this.dataSet);
},getColumnIndex:function(_e58){
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].field==_e58||this.columsn[i].id==_e58){
return i;
}
}
return -1;
},getColumnShowing:function(_e59,_e5a,_e5b){
var _e5c=this.getColumnIndex(_e59);
if(_e5c!=-1){
var c=this.columns[_e5c];
var show=this._useMobileColumn&&c.mobileColumn||!this._useMobileColumn&&c.show;
return show;
}
},setColumnShowing:function(_e5d,_e5e,_e5f){
var _e60=this.getColumnIndex(_e5d);
if(_e60!=-1&&this.columns[_e60].show!=_e5e){
this.columns[_e60].show=_e5e;
this.setColumns(this.columns);
this._setDataFields();
if(!_e5f){
this._render();
}
}
},setColumnWidth:function(_e61,_e62,_e63){
this._columnsHash[_e61].width=_e62;
if(!_e63){
this._render();
}
},getCellClass:function(_e64,_e65){
if(!this.columns){
return;
}
if(_e64!=-1){
_e64=this._formatIndex!=null?this._formatIndex:this.getCount();
var _e66=this._dataFields[_e65];
var col=this._columnsHash[_e66];
var data=this._data[_e64];
if(col.cssClass){
return wm.expression.getValue(col.cssClass,data,this.owner);
}
}
return "";
}});
if(wm.isMobile){
wm.DojoGrid=wm.List;
}
wm.FocusablePanelRegistry=[];
dojo.declare("wm.FocusableList",wm.List,{init:function(){
this.inherited(arguments);
wm.FocusablePanelRegistry.push(this);
dojo.connect(document,"keydown",this,"keydown");
},nextFocus:null,nextFocusableItemField:null,priorFocus:null,hasFocus:false,focusOnStart:false,focusEventTime:0,defaultFocusListIndex:0,getNextFocus:function(){
if(!(this.nextFocus instanceof Object)){
this.setNextFocus(this.nextFocus);
}
return this.nextFocus;
},setNextFocus:function(_e67){
if(!(_e67 instanceof Object)){
var tmp=this.getRoot()[_e67];
this.nextFocus=tmp||this.nextFocus;
}else{
this.nextFocus=_e67;
}
},getPriorFocus:function(){
if(!(this.priorFocus instanceof Object)){
this.setPriorFocus(this.priorFocus);
}
return this.priorFocus;
},setPriorFocus:function(_e68){
if(!(_e68 instanceof Object)){
this.priorFocus=this.getRoot()[_e68];
}else{
this.priorFocus=_e68;
}
},setFocus:function(_e69,e){
this.focusEventTime=(e)?e.timeStamp:0;
this.hasFocus=_e69;
if(_e69){
this.show();
dojo.addClass(this.domNode,"wmselectedlist");
this.setBorderColor("rgb(0,0,160)");
for(var i=0;i<wm.FocusablePanelRegistry.length;i++){
if(wm.FocusablePanelRegistry[i]!=this){
wm.FocusablePanelRegistry[i].setFocus(false,e);
}
}
if(this.getSelectedIndex()==-1){
this.deselectAll(true);
if(this.defaultFocusListIndex!=-1){
this.eventSelect(this.getItem(this.defaultFocusListIndex));
}
}
if(this.getNextFocus() instanceof Object){
this.getNextFocus().show();
}
}else{
dojo.removeClass(this.domNode,"wmselectedlist");
this.setBorderColor("transparent");
}
},show:function(){
this.inherited(arguments);
var _e6a=this.parent;
while(_e6a&&!(_e6a instanceof wm.Layer)){
_e6a=_e6a.parent;
}
if(this.autoShowLayer){
if(_e6a&&(_e6a instanceof wm.Layer)&&!_e6a.active){
_e6a.parent.setLayer(_e6a);
}
}
},onclick:function(_e6b,_e6c){
this.inherited(arguments);
this.setFocus(true,_e6b);
},eventSelect:function(_e6d){
if(this.nextFocusableItemField){
var data=_e6d.getData();
var _e6e=new wm.Object();
_e6e.data=data;
var next=_e6e.getValue("data."+this.nextFocusableItemField);
if(next){
this.setNextFocus(next);
if(this.getNextFocus() instanceof Object){
this.getNextFocus().show();
}
}
}
this.inherited(arguments);
},keydown:function(e){
if(e.target&&e.target.nodeName.toLowerCase()=="input"){
return;
}
if(!this.hasFocus||this.focusEventTime==e.timeStamp){
return;
}
if(e.ctrlKey||e.shiftKey){
return;
}
if(e.keyCode==dojo.keys.UP_ARROW){
var _e6f=this.getSelectedIndex();
_e6f=_e6f-1;
if(_e6f<0){
_e6f=this.getCount()+_e6f;
}
_e6f=_e6f%this.getCount();
this.deselectAll(true);
this.eventSelect(this.getItem(_e6f));
dojo.stopEvent(e);
}else{
if(e.keyCode==dojo.keys.DOWN_ARROW){
var _e6f=this.getSelectedIndex();
_e6f=(_e6f+1)%this.getCount();
this.deselectAll(true);
this.eventSelect(this.getItem(_e6f));
dojo.stopEvent(e);
}else{
if(e.keyCode==dojo.keys.RIGHT_ARROW&&this.nextFocus){
this.getNextFocus().setFocus(true,e);
dojo.stopEvent(e);
}else{
if(e.keyCode==dojo.keys.LEFT_ARROW&&this.priorFocus){
this.deselectAll();
this.getPriorFocus().setFocus(true,e);
dojo.stopEvent(e);
if(this.nextFocus){
this.getNextFocus().hideNextChain();
}
}
}
}
}
},setDataSet:function(_e70){
this.inherited(arguments);
if(this.focusOnStart){
this.setFocus(true,0);
window.focus();
}
this.focusOnStart=false;
},hideNextChain:function(){
this.hide();
if(this.nextFocus){
this.getNextFocus().hideNextChain();
}
}});
dojo.declare("wm.FocusablePanel",wm.Container,{init:function(){
this.inherited(arguments);
wm.FocusablePanelRegistry.push(this);
dojo.connect(document,"keydown",this,"keydown");
dojo.connect(this.domNode,"click",this,"onclick");
if(this.focusOnStart){
this.setFocus(true,0);
}
},autoShowLayer:false,autoFormFocus:null,nextFocus:null,priorFocus:null,hasFocus:false,focusOnStart:false,focusEventTime:0,getNextFocus:function(){
if(!(this.nextFocus instanceof Object)){
this.setNextFocus(this.nextFocus);
}
return this.nextFocus;
},setNextFocus:function(_e71){
if(!(_e71 instanceof Object)){
var tmp=this.getRoot()[_e71];
this.nextFocus=tmp||this.nextFocus;
}else{
this.nextFocus=_e71;
}
},getPriorFocus:function(){
if(!(this.priorFocus instanceof Object)){
this.setPriorFocus(this.priorFocus);
}
return this.priorFocus;
},setPriorFocus:function(_e72){
if(!(this.priorFocus instanceof Object)){
this.priorFocus=this.getRoot()[_e72];
}else{
this.priorFocus=_e72;
}
},setFocus:function(_e73,e){
this.focusEventTime=e.timeStamp;
this.hasFocus=_e73;
if(_e73){
this.show();
this.setBorderColor("rgb(0,0,160)");
if(this.autoFormFocus){
this.getRoot()[this.autoFormFocus].focus();
}
for(var i=0;i<wm.FocusablePanelRegistry.length;i++){
if(wm.FocusablePanelRegistry[i]!=this){
wm.FocusablePanelRegistry[i].setFocus(false,e);
}
}
if(this.getNextFocus() instanceof Object){
this.getNextFocus().show();
}
}else{
this.setBorderColor("transparent");
}
},show:function(){
this.inherited(arguments);
var _e74=this.parent;
while(_e74&&!(_e74 instanceof wm.Layer)){
_e74=_e74.parent;
}
if(this.autoShowLayer){
if(_e74&&(_e74 instanceof wm.Layer)&&!_e74.active){
_e74.parent.setLayer(_e74);
}
}
},onclick:function(_e75,_e76){
this.inherited(arguments);
this.setFocus(true,_e75);
},keydown:function(e){
if(e.target&&e.target.nodeName.toLowerCase()=="input"){
return;
}
if(!this.hasFocus||this.focusEventTime==e.timeStamp){
return;
}
if(e.ctrlKey||e.shiftKey){
return;
}
if(e.keyCode==dojo.keys.RIGHT_ARROW&&this.nextFocus){
this.getNextFocus().setFocus(true,e);
dojo.stopEvent(e);
}else{
if(e.keyCode==dojo.keys.LEFT_ARROW&&this.priorFocus){
this.getPriorFocus().setFocus(true,e);
dojo.stopEvent(e);
if(this.nextFocus){
this.getNextFocus().hideNextChain();
}
}else{
if(e.keyCode==dojo.keys.ENTER||e.keyCode==dojo.keys.NUMPAD_ENTER){
this.ondblclick({},this.selectedItem);
}
}
}
},hideNextChain:function(){
this.hide();
if(this.nextFocus){
this.getNextFocus().hideNextChain();
}
}});
}
if(!dojo._hasResource["wm.base.widget.Layers.BreadcrumbDecorator"]){
dojo._hasResource["wm.base.widget.Layers.BreadcrumbDecorator"]=true;
dojo.provide("wm.base.widget.Layers.BreadcrumbDecorator");
dojo.declare("wm.BreadcrumbDecorator",wm.TabsDecorator,{decorationClass:"wmbreadcrumblayers",decoratorPadding:"2",setLayerActive:function(_e77,_e78){
var _e79=!_e77._isShowing;
this.inherited(arguments);
if(_e77._isDesignLoaded||this.decoree._cupdating){
return;
}
var _e7a=this.decoree.layers;
if(_e78){
if(!_e79){
var _e7b=_e77.getIndex();
for(var i=_e7a.length-1;i>_e7b;i--){
if(_e7a[i].showing){
break;
}
}
if(i>_e7b&&!this.decoree._isDesignLoaded){
this.decoree.moveLayerIndex(_e77,i+1);
}
_e77.show();
if(_e77.showing){
_e77.domNode.style.display="";
_e77.reflow();
}
}else{
for(var i=_e77.getIndex()+1;i<_e7a.length;i++){
if(_e7a[i].showing){
_e7a[i].setShowing(false);
}
}
}
this.decoree.layerIndex=_e77.getIndex();
var _e7c=this.decoree.layers.length;
for(var i=_e77.getIndex()+1;i<_e7c;i++){
if(this.decoree.layers[i].showing){
this.decoree.layers[i].hide();
}
}
}
}});
}
if(!dojo._hasResource["wm.base.widget.BreadcrumbLayers"]){
dojo._hasResource["wm.base.widget.BreadcrumbLayers"]=true;
dojo.provide("wm.base.widget.BreadcrumbLayers");
dojo.declare("wm.BreadcrumbLayers",wm.Layers,{conditionalTabButtons:true,themeStyleType:"ContentPanel",layersType:"Breadcrumb",transition:"fade",headerWidth:"50px",postInit:function(){
this.inherited(arguments);
this._inBreadcrumbPostInit=true;
var _e7d=this.getActiveLayer();
if(!this._isDesignLoaded){
for(var i=0;i<this.layers.length;i++){
if(this.layers[i]!=_e7d){
this.layers[i].setShowing(false);
}
}
}
delete this._inBreadcrumbPostInit;
},oncanchange:function(_e7e){
var l=this.getLayer(_e7e.newIndex);
_e7e.canChange=l;
},addWidget:function(_e7f){
this.inherited(arguments);
if(!this._isDesignLoaded&&!this._loading&&_e7f instanceof wm.Layer&&!_e7f.isActive()){
_e7f.setShowing(false);
}
},_setLayerIndex:function(_e80){
var l=this.layers[_e80];
if(l&&!l.showing){
l.setShowing(true);
l._isShowing=true;
}
this.inherited(arguments);
if(l){
delete l._isShowing;
}
}});
}
if(!dojo._hasResource["wm.base.widget.PageContainer"]){
dojo._hasResource["wm.base.widget.PageContainer"]=true;
dojo.provide("wm.base.widget.PageContainer");
wm.pagesFolder="pages/";
dojo.declare("wm.PageContainer",wm.Control,{manageHistory:false,manageURL:false,subpageProplist:null,subpageEventlist:null,subpageMethodlist:null,width:"100%",height:"100%",pageName:"",phonePageName:"",tabletPageName:"",deferLoad:false,loadParentFirst:true,classNames:"wmpagecontainer",init:function(){
this.pageLoadedList=[];
this.inherited(arguments);
this.createPageLoader();
this.pageLoadedDeferred=new dojo.Deferred();
this.updatePageName();
this._initialPageName=this._pageName;
if(this.manageURL&&app&&app.locationState&&app.locationState[this.getRuntimeId()]){
this.pageName=this._pageName=app.locationState[this.getRuntimeId()];
this._restoringLocationState=true;
}
if(app&&app.locationState){
this._locationState=app.locationState;
}
if(!this.deferLoad||!this.isAncestorHidden()){
this.loadPage(this._pageName);
}
dojo.addOnWindowUnload(this,"destroy");
if(this.subpageEventlist&&!this._isDesignLoaded){
for(var _e81 in this.subpageEventlist){
if(this[_e81]===undefined){
this[_e81]=function(){
};
}
}
}
if(this.subpageMethodlist&&!this._isDesignLoaded){
wm.forEachProperty(this.subpageMethodlist,dojo.hitch(this,function(_e82,name){
this[name]=dojo.hitch(this,function(){
var w=this.page.getValueById(_e82.replace(/\..*?$/,""));
var f=w[_e82.replace(/^.*\./,"")];
f.apply(w,arguments);
});
}));
}
if(this._isDesignLoaded){
this.subscribe("deviceSizeRecalc",dojo.hitch(this,"updateDesignTimePageName"));
}
},updatePageName:function(){
var _e83=this._isDesignLoaded?studio.currentDeviceType:wm.device;
if(_e83=="phone"&&this.phonePageName){
this._pageName=this.phonePageName;
}else{
if(_e83=="tablet"&&this.tabletPageName){
this._pageName=this.tabletPageName;
}else{
this._pageName=this.pageName;
}
}
if(this._isDesignLoaded&&!this._cupdating){
this.loadPage(this._pageName);
}
},postInit:function(){
this.inherited(arguments);
if(this.isDesignedComponent()&&this.designWrapper){
dojo.addClass(this.designWrapper.domNode,"pageContainerDesignWrapper");
this.designWrapper.domNode.style.backgroundColor="white";
this.createOpenPageButton();
}
if(this.isDesignedComponent()&&this.getRoot() instanceof wm.Application){
this.subscribe("Page-Saved",dojo.hitch(this,function(){
if(this._pageName==studio.project.pageName){
this.forceReloadPage();
}
}));
}
},setBoundProp:function(_e84){
if(this["_inSetBoundProp_"+_e84]){
return;
}
this["_inSetBoundProp_"+_e84]=true;
try{
var _e85=this.getProp(_e84);
this[_e84]=_e85;
this.valueChanged(_e84,_e85);
if(_e85 instanceof wm.Variable){
var id=this.getRuntimeId(_e84);
dojo.publish(id+"-ownerChanged");
}
}
catch(e){
}
delete this["_inSetBoundProp_"+_e84];
},setProp:function(_e86,_e87){
if(this.subpageProplist!==null&&this.page&&this.subpageProplist[_e86]){
var prop=this.subpageProplist[_e86];
if(prop){
if(_e87 instanceof wm.Component===false){
this[_e86]=_e87;
}
if(prop.indexOf(".")==-1&&this.page.getValue(prop) instanceof wm.Variable){
return this.page.getValue(prop).setDataSet(_e87);
}else{
return this.page.setValue(prop,_e87);
}
}
}else{
if(this.subpageEventlist!==null&&this.page&&this.subpageEventlist[_e86]){
var prop=this.subpageEventlist[_e86];
if(prop){
if(this._isDesignLoaded){
return this.setEvent(_e86,_e87);
}else{
return this.inherited(arguments);
}
}
}
}
return this.inherited(arguments);
},getProp:function(_e88){
if(this.subpageProplist!==null&&this.page){
var prop=this.subpageProplist[_e88];
if(prop){
return this.page.getValue(prop);
}
}
if(this._isDesignLoaded&&this.subpageEventlist!==null&&this.page){
var prop=this.subpageEventlist[_e88];
if(prop){
return this._getProp(_e88);
}
}
return this.inherited(arguments);
},onError:function(_e89){
},createPageLoader:function(){
this._pageLoader=new wm.PageLoader({owner:this,domNode:this.domNode,isRelativePositioned:this.isRelativePositioned});
this._connections.push(this.connect(this._pageLoader,"onPageChanged",this,"pageChanged"));
this._connections.push(this.connect(this._pageLoader,"onError",this,"onError"));
},getMainPage:function(){
var _e8a=this.owner;
while(_e8a.owner){
_e8a=_e8a.owner;
}
if(_e8a instanceof wm.Application){
return _e8a;
}
},destroy:function(){
if(this.isDestroyed){
return;
}
var _e8b=this.getMainPage();
if(_e8b){
_e8b.subPageUnloaded(this.page);
}
try{
this.inherited(arguments);
}
catch(e){
}
if(this._pageLoader){
this.destroyPreviousPage();
this._pageLoader.destroy();
this._pageLoader=null;
}
_e8b=null;
},destroyPreviousPage:function(){
for(var i=0;i<this.pageLoadedList.length;i++){
try{
this._pageLoader.destroyPage(this.pageLoadedList[i]);
}
catch(e){
}
}
this.pageLoadedList=[];
},pageChanged:function(_e8c,_e8d){
try{
this.destroyPreviousPage();
this.pageLoadedList.push(_e8c);
this.page=_e8c;
this[_e8c.name]=_e8c;
var _e8e=this.getMainPage();
if(_e8e){
_e8e.subPageLoaded(this.page);
}
if(this.page.root){
this.page.root.parent=this;
}
if(this.pageLoadedDeferred){
this.pageLoadedDeferred.callback({page:_e8c,previousPage:_e8d});
delete this.pageLoadedDeferred;
}
this.onPageChanged(_e8c,_e8d);
var o=(_e8d||0).name;
if(o&&this[o]){
delete this[o];
}
}
catch(e){
}
},loadPage:function(_e8f){
try{
if(!this.pageLoadedDeferred){
this.pageLoadedDeferred=new dojo.Deferred();
}
var d=this.isDesignLoaded(),s=wm.studioConfig;
if(d&&s&&s.preventSubPages){
return;
}
var _e90=_e8f.charAt(0).toLowerCase()+_e8f.slice(1);
if(_e90){
if(!d&&this.loadParentFirst){
var _e91=this.getParentPage();
}
if(!d&&this.loadParentFirst&&_e91&&_e91._loadingPage){
if(!this._pageLoaderConnectedToOwnerStart){
if(this._currentPageConnect){
dojo.disconnect(this._currentPageConnect);
}
this._currentPageConnect=this.owner.connect(this.owner,"onStart",dojo.hitch(this,"pageLoaderOnOwnerStart",_e8f,_e90));
this._pageLoaderConnectedToOwnerStart=true;
}
}else{
this._pageLoader.loadPage(_e8f,_e90);
if(this._currentPageConnect){
dojo.disconnect(this._currentPageConnect);
}
if(this._pageLoader.page._startCalled){
this.onStart();
}else{
this._currentPageConnect=this._pageLoader.page.connect(this._pageLoader.page,"onStart",this,"onStart");
}
}
}else{
this.destroyPreviousPage();
}
}
catch(e){
console.error("PageContainer page  '"+_e8f+"' failed to load: "+e);
}
},pageLoaderOnOwnerStart:function(_e92,_e93){
this._pageLoaderConnectedToOwnerStart=false;
this._pageLoader.loadPage(_e92,_e93);
this._pageLoader.page.connect(this._pageLoader.page,"onStart",this,"onStart");
},onStart:function(){
delete this._locationState;
if(this.parent&&this.page&&!dojo.coords(this.page.root.domNode).w){
this.parent.reflow();
}
if(this.subpageEventlist&&this.page){
for(var _e94 in this.subpageEventlist){
var _e95=this.page[_e94];
if(_e95&&_e95.isEvent&&!this._isDesignLoaded){
var _e96=_e95.property.replace(/\..*?$/,"");
var _e97=_e95.property.replace(/^.*\./,"");
var _e98=this.page.getValue(_e96);
this.connect(_e98,_e97,this,_e94);
}
}
}
if(this.subpageProplist){
for(var _e94 in this.subpageProplist){
var v=this[_e94];
if(v instanceof wm.Component&&v.isDestroyed){
v=this[_e94]=undefined;
}
if(v!==undefined){
this.setProp(_e94,this[_e94]);
}
var _e99=this.page[_e94];
if(_e99&&_e99.bindSource){
var _e9a=this.page.getRuntimeId()+"."+_e99.property;
this.subscribe(_e9a+"-changed",dojo.hitch(this,"setBoundProp",_e94));
var _e9b=_e99.property.lastIndexOf(".");
if(_e9b!=-1){
_e9a=this.page.getRuntimeId()+"."+_e99.property.substring(0,_e9b);
this.subscribe(_e9a+"-changed",dojo.hitch(this,"setBoundProp",_e94));
}
}
}
if(this.$.binding){
this.$.binding.refresh();
}
}
if(this._restoringLocationState||(this.manageHistory||this.manageURL)&&this._lastPageName&&this._lastPageName!=this._pageName&&!this._isDesignLoaded){
app.addHistory({id:app&&app.pageContainer==this?"app.pageContainer":this.getRuntimeId(),options:this._backState,title:"Show "+this._pageName},!this.manageHistory||this._restoringLocationState);
delete this._backState;
}
delete this._restoringLocationState;
},handleBack:function(_e9c){
if(!_e9c.pageName||_e9c.pageName==this._pageName){
return false;
}
this._restoreBackState=_e9c;
this.setPageName(_e9c.pageName);
delete this._restoreBackState;
return true;
},generateStateUrl:function(_e9d){
if(this.page&&this._pageName!==this._initialPageName){
_e9d[app&&app.pageContainer==this?"pageName":this.getRuntimeId()]=this._pageName;
}
if(this.page&&this.page.generateStateUrl){
this.page.generateStateUrl(_e9d);
}
},forEachWidget:function(_e9e){
if(this.page){
return this.page.forEachWidget(_e9e);
}
},setPageName:function(_e9f,_ea0){
if(this._pageLoading){
return;
}
if(this.manageHistory&&this._pageName!=_e9f&&!this._isDesignLoaded){
this._backState={pageName:this._pageName};
if(this.page&&this.page.generateBackState){
this.page.generateBackState(this._backState);
}
}
this._lastPageName=this._pageName;
if(this._designerOpenPageButton){
dojo[this._pageName?"addClass":"removeClass"](this._designerOpenPageButton,"hasPageName");
}
var o=this._pageName;
this._pageName=this[_ea0||"pageName"]=_e9f||"";
if(this.isDesignedComponent()&&this.designWrapper){
this.createOpenPageButton();
}
this.pageLoadedDeferred=new dojo.Deferred();
if(o!=this._pageName||!this.page){
this.loadPage(this._pageName);
}else{
this.pageChangeIgnored();
}
this.valueChanged("pageName",this._pageName);
},pageChangeIgnored:function(){
},forceReloadPage:function(){
var _ea1=this._pageName;
this.setPageName(null);
delete window[_ea1];
this.setPageName(_ea1);
},onPageChanged:function(_ea2,_ea3){
},_onShowParent:function(){
this.revealed();
},_onHideParent:function(){
if(this.page){
wm.fire(this.page,"onHide");
this.page.root.callOnHideParent();
}
},revealed:function(){
if(!this.page){
this.loadPage(this._pageName);
}else{
this.page.onShow();
if(this.page.root){
this.page.root.callOnShowParent();
}
}
},flow:function(){
if(this._boundsDirty){
wm.fire(this.page,"reflow");
}
},reflow:function(){
this._boundsDirty=true;
this.flow();
},hasPageLoaded:function(_ea4){
if(!_ea4){
return Boolean(this.page);
}
return Boolean(this.page&&this.page.name==_ea4);
},toHtml:function(){
if(this.page&&this.page.root){
return this.page.root.toHtml();
}else{
return "";
}
},updateIsDirty:function(){
this.setValue("isDirty",this.getIsDirty());
wm.fire(this.parent,"updateIsDirty");
},getIsDirty:function(){
if(this.page&&!this.page.isDestroyed){
return this.page.root.getIsDirty();
}
},getOrderedWidgets:function(){
if(this._isDesignLoaded){
return [];
}
if(this.page){
return [this.page.root];
}else{
return [];
}
}});
}
if(!dojo._hasResource["wm.base.widget.Scrim"]){
dojo._hasResource["wm.base.widget.Scrim"]=true;
dojo.provide("wm.base.widget.Scrim");
dojo.declare("wm.Scrim",wm.Widget,{_noAnimation:false,showing:false,waitCursor:true,init:function(){
if(this.owner&&this.owner.isDesignedComponent()){
studio.designer.domNode.appendChild(this.domNode);
}else{
document.body.appendChild(this.domNode);
}
this.inherited(arguments);
dojo.addClass(this.domNode,"wmscrim");
this.domNode.style.zIndex=20;
this.domNode.style.position="absolute";
if(this.waitCursor){
this.domNode.style.cursor="wait";
}
this.subscribe("window-resize",this,"resize");
},resize:function(){
wm.onidle(this,function(){
if(this.showing){
this.reflowParent();
}
});
},reflowParent:function(){
if(this.domNode.parentNode){
dojo.marginBox(this.domNode,dojo.contentBox(this.domNode.parentNode));
}
},scrimify:function(){
var f=dojo.hitch.apply(dojo,arguments);
this.setShowing(true);
try{
f();
}
finally{
this.setShowing(false);
}
},scrimOnIdle:function(){
this.setShowing(true);
var self=this,args=arguments;
setTimeout(function(){
self.scrimify.apply(self,args);
},100);
},setShowing:function(_ea5){
if(this._cupdating||this._noAnimation){
return this.inherited(arguments);
}
var _ea6=(this._cupdating||this.showing==_ea5)?0:app.dialogAnimationTime;
if(_ea5){
if(_ea6){
if(this._hideAnimation){
this._hideAnimation.stop();
}
this._showAnimation=this._showAnimation||dojo.animateProperty({node:this.domNode,properties:{opacity:0.35},duration:_ea6});
if(this._showAnimation.status()!="playing"){
this.domNode.style.opacity=0.01;
this.inherited(arguments);
this._showAnimation.play();
}
}else{
this.inherited(arguments);
}
}else{
if(_ea6){
if(this._showAnimation){
this._showAnimation.stop();
}
this._hideAnimation=this._hideAnimation||dojo.animateProperty({node:this.domNode,properties:{opacity:0.01},duration:_ea6,onEnd:dojo.hitch(this,function(){
if(!this.domNode){
return;
}
wm.Control.prototype.setShowing.call(this,false);
})});
if(this._hideAnimation.status()!="playing"){
this._hideAnimation.play();
}
}else{
this.inherited(arguments);
}
}
},scrimifyDeferred:function(_ea7){
this.setShowing(true);
_ea7.addCallback(dojo.hitch(this,this.setShowing,false));
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.Dialog"]){
dojo._hasResource["wm.base.widget.Dialogs.Dialog"]=true;
dojo.provide("wm.base.widget.Dialogs.Dialog");
wm.dialog={showingList:[],tabIndexChanges:{}};
wm.dialog.getNextZIndex=function(_ea8,_ea9){
var _eaa=30;
if(!wm.dialog.showingList.length){
return _eaa;
}
for(var i=0;i<wm.dialog.showingList.length;i++){
if(!_ea8||_ea8&&wm.dialog.showingList[i]._isDesignLoaded){
if(wm.dialog.showingList[i] instanceof wm.Toast==false&&!wm.dialog.showingList[i].docked){
if(!_ea9||wm.dialog.showingList[i]!=this){
_eaa=Math.max(_eaa,wm.dialog.showingList[i].domNode.style.zIndex);
}
}
}
}
return _eaa+5;
};
wm.dismiss=function(_eab,_eac){
var o=_eab;
while(o&&!dojo.isFunction(o.dismiss)){
o=o.owner;
}
wm.fire(o,"dismiss",[_eac]);
};
wm.bgIframe={create:function(){
var html=["<iframe src='javascript:\"\"'"," style='position: absolute; left: 0px; top: 0px;"," z-index: 2; filter:Alpha(Opacity=\"0\");'>"].join(""),f=this.domNode=(dojo.isIE&&dojo.isIE<9)?document.createElement(html):document.createElement("IFRAME");
app.appRoot.domNode.appendChild(f);
f.style.display="none";
if(dojo.isMoz){
f.style.position="absolute";
f.style.left=f.style.top="0px";
f.style.opacity=0;
f.style.zIndex=2;
}
dojo.subscribe("window-resize",this,"size");
},setShowing:function(_ead,_eae){
if(!this.domNode){
return;
}
if(_eae||_ead!=this.showing){
this.domNode.style.display=_ead?"":"none";
this.showing=_ead;
}
if(_ead){
this.size();
}
},size:function(_eaf){
if(!this.domNode||!this.showing){
return;
}
if(_eaf){
this.sizeNode=_eaf;
}
var _eb0=this.sizeNode||document.body;
dojo.marginBox(this.domNode,dojo.contentBox(_eb0));
}};
dojo.addOnLoad(function(){
if((dojo.isIE&&dojo.isIE<7)||(dojo.isFF&&dojo.isFF<4&&navigator.userAgent.indexOf("Macintosh")!=-1)){
wm.bgIframe.create();
}
});
dojo.declare("wm.DialogResize",wm.MouseDrag,{beginResize:function(e,_eb1){
this.dialog=_eb1;
this.mousedown(e);
},drag:function(){
this.inherited(arguments);
this.dialog.drag(this.dx,this.dy);
},finish:function(){
this.inherited(arguments);
this.dialog.drop();
}});
dojo.declare("wm.Dialog",wm.Container,{manageHistory:true,manageURL:false,enableTouchHeight:true,titlebarButtons:"",containerClass:"MainContent",corner:"cc",scrim:true,useContainerWidget:false,useButtonBar:false,_minified:false,_maxified:false,noEscape:false,noMinify:false,noMaxify:false,layoutKind:"top-to-bottom",horizontalAlign:"left",verticalAlign:"top",border:2,borderColor:"rgb(80,80,80)",titlebarBorder:"1",titlebarBorderColor:"black",titlebarHeight:"23",mobileTitlebarHeight:"35",titleBarButtonsOnRight:false,footerBorder:"1,0,0,0",containerPadding:"5",margin:"3",width:"640px",height:"400px",showing:false,dialogScrim:null,modal:true,showTitleButtonsWhenDocked:false,noLeftRightDocking:true,noTopBottomDocking:true,constructor:function(){
wm.Dialog.resizer=wm.Dialog.resizer||new wm.DialogResize();
},init:function(){
if(wm.isMobile){
this.titlebarHeight=this.mobileTitlebarHeight;
}
this.inherited(arguments);
if(this._isDesignLoaded){
this.flags.noModelDrop=true;
}
if(!this.docked){
if(this._isDesignLoaded){
studio.designer.domNode.appendChild(this.domNode);
}else{
app.appRoot.domNode.appendChild(this.domNode);
}
}
this.dialogScrim=new wm.Scrim({owner:this,_classes:{domNode:["wmdialog-scrim"]},waitCursor:false});
this.createTitle();
if(!this._isDesignLoaded){
this.connectEvents(this.domNode,["mousedown"]);
}
},postInit:function(){
this.inherited(arguments);
this._animEnabled=true;
if(dojo.isIE<=9||wm.isAndroid<=3||this._noAnimation){
this._animEnabled=false;
}
if(this._animEnabled){
var _eb2;
if(dojo.isWebKit){
_eb2="webkitAnimationEnd";
}else{
if(dojo.isIE){
_eb2="MSAnimationEnd";
}else{
if(dojo.isOpera){
_eb2="oanimationend";
}else{
_eb2="animationend";
}
}
}
this.domNode.addEventListener(_eb2,dojo.hitch(this,"animEnd"),false);
}
dojo.addClass(this.domNode,"wmdialog");
this.domNode.style.position="absolute";
if(!this.docked){
this.domNode.style.zIndex=wm.dialog.getNextZIndex(this._isDesignLoaded);
}
if(this.designWrapper){
this.designWrapper.domNode.style.zIndex=this.domNode.style.zIndex+1;
}
if(!this.docked){
this.domNode.style.display="none";
}
this._connections.push(this.connect(document,"keydown",this,"keydown"));
this._subscriptions.push(dojo.subscribe("window-resize",this,"windowResize"));
this.setModal(this.modal);
this.setTitlebarBorder(this.titlebarBorder);
this.setTitlebarBorderColor(this.titlebarBorderColor);
var _eb3,_eb4;
var _eb5=(this.declaredClass=="wm.Dialog"||this._pageOwnsWidgets)?this.owner:this;
if(this.containerWidgetId!==undefined){
if(this.containerWidgetId){
_eb3=this.owner.getValueById(this.containerWidgetId);
if(!_eb3){
return;
}
_eb4=_eb3.domNode;
}
}else{
if(this.c$.length==1){
if(this.useContainerWidget){
_eb3=this.containerWidget||new wm.Container({_classes:{domNode:["wmdialogcontainer",this.containerClass]},name:_eb5.getUniqueName("containerWidget"),parent:this,owner:_eb5,layoutKind:"top-to-bottom",padding:this.containerPadding,fitToContentHeight:this.fitToContentHeight,margin:"0",border:"0",width:"100%",height:"100%",horizontalAlign:"left",verticalAlign:"top",autoScroll:true});
_eb4=_eb3.domNode;
}else{
_eb4=this.domNode;
}
}else{
_eb3=this.c$[1];
}
}
if(this.buttonBarId!==undefined){
if(this.buttonBarId){
this.buttonBar=this.owner.getValueById(this.buttonBarId);
}
}else{
if(this.c$.length<3){
if(this.useButtonBar&&this.useContainerWidget){
this.createButtonBar();
}
}else{
this.buttonBar=this.c$[2];
}
}
if(_eb3){
this.containerWidget=_eb3;
}
this.containerNode=_eb4;
if(this.docked){
this.show();
}
},setUseButtonBar:function(_eb6){
this.useButtonBar=_eb6;
if(_eb6&&!this.buttonBar){
this.createButtonBar();
this.reflow();
}else{
if(!_eb6&&this.buttonBar){
this.buttonBar.destroy();
delete this.buttonBar;
this.reflow();
}
}
},createButtonBar:function(){
var _eb7=(this.declaredClass=="wm.Dialog"||this instanceof wm.DesignableDialog)?this.owner:this;
this.buttonBar=new wm.ButtonBarPanel({name:"buttonBar",owner:_eb7,parent:this,border:this.footerBorder,borderColor:this.titlebarBorderColor});
this.reflow();
},setTitlebarBorder:function(_eb8){
this.titlebarBorder=_eb8;
var _eb9=(String(_eb8).match(","))?_eb8:"0,0,"+_eb8+",0";
this.titleBar.setBorder(_eb9);
this.titleBar.setHeight((parseInt(this.titlebarHeight)+this.titleBar.padBorderMargin.t+this.titleBar.padBorderMargin.b)+"px");
},setTitlebarBorderColor:function(_eba){
this.titlebarBorderColor=_eba;
this.titleBar.setBorderColor(_eba);
},setFooterBorder:function(_ebb){
this.footerBorder=_ebb;
if(this.buttonBar){
this.buttonBar.setBorder(_ebb);
}
},setFooterBorderColor:function(_ebc){
this.footerBorderColor=_ebc;
if(this.buttonBar){
this.buttonBar.setBorderColor(_ebc);
}
},setModal:function(_ebd){
dojo[_ebd?"removeClass":"addClass"](this.domNode,"nonmodaldialog");
this.modal=(_ebd===undefined||_ebd===null)?true:_ebd;
if(this.dojoMoveable){
this.dojoMoveable.destroy();
this.dojoMoveable=null;
}
if(!_ebd&&!this.dojoMoveable){
this.dojoMoveable=new dojo.dnd.Moveable(this.domNode,{handle:this.titleLabel.domNode});
this.connect(this.dojoMoveable,"onMouseDown",this,function(){
if(!this.modal){
if(this.docked){
this._userSized=true;
this.setDocked(false);
}
var _ebe=wm.dialog.getNextZIndex(this._isDesignLoaded,this);
this.domNode.style.zIndex=_ebe;
}
});
this.connect(this.dojoMoveable,"onMoveStop",this,function(){
if(this._openingTitleBarMenu){
return;
}
this._userSized=true;
this.bounds.l=parseInt(this.domNode.style.left);
this.bounds.t=parseInt(this.domNode.style.top);
if(!this._maxified){
if(!this.insureDialogVisible(true)){
if(this.bounds.t<0&&!this.noTopBottomDocking||this.bounds.t+this.bounds.h>app.appRoot.bounds.b&&!this.noTopBottomDocking||this.bounds.l<0&&!this.noLeftRightDocking||this.bounds.w+this.bounds.l>app.appRoot.bounds.r&&!this.noLeftRightDocking){
this.setDocked(true);
}
}
}
this.setBounds(this.bounds);
if(!this.docked){
var _ebf=false;
if(this.bounds.l>app.appRoot.bounds.r){
this.bounds.l=app.appRoot.bounds.r-100;
_ebf=true;
}
if(this.bounds.r<0){
this.bounds.l=-this.bounds.w+100;
_ebf=true;
}
if(this.bounds.t>app.appRoot.bounds.b){
this.bounds.t=app.appRoot.bounds.b-100;
_ebf=true;
}
if(this.bounds.t<0){
this.bounds.t=0;
_ebf=true;
}
if(_ebf){
this.setBounds(this.bounds);
wm.Control.prototype.renderBounds.call(this);
}
}
});
}
if(this.showing&&!this._isDesignLoaded){
this.dialogScrim.setShowing(this.modal);
wm.bgIframe.setShowing(!this.modal&&!this.isDesignedComponent());
}
this.titleButtonPanel.setShowing(!this.modal&&(!this.docked||this.showTitleButtonsWhenDocked));
},setNoEscape:function(_ec0){
this.noEscape=_ec0;
this.titleClose.setShowing(!this.modal&&!this.noEscape&&!wm.isMobile);
},setDocked:function(_ec1,_ec2,_ec3){
if(this._isDesignLoaded){
return;
}
var _ec4=this.docked;
if(Boolean(_ec4)==Boolean(_ec1)){
return;
}
this.docked=_ec1;
if(_ec1){
this._dock(_ec2,_ec3);
dojo.addClass(this.domNode,"Docked");
}else{
this._undock();
dojo.removeClass(this.domNode,"Docked");
}
},_dock:function(_ec5,edge){
var _ec6=this.border;
var _ec7=this.margin;
if(!edge){
if(this.bounds.t<0&&!this.noTopBottomDocking){
edge="t";
}else{
if(this.bounds.t+this.bounds.h>app.appRoot.bounds.b&&!this.noTopBottomDocking){
edge="b";
}else{
if(this.bounds.l<0&&!this.noLeftRightDocking){
edge="l";
}else{
if(!this.noLeftRightDocking){
edge="r";
}
}
}
}
}
if(!this.showTitleButtonsWhenDocked){
this.titleButtonPanel.hide();
}
this._dockData=dojo.clone(this.bounds);
this._dockData.edge=edge;
this._dockData.border=_ec6;
this._dockData.margin=_ec7;
this.setBorder("0");
this.setMargin("0");
if(!_ec5){
if(edge=="t"&&app.dockTop&&!app.dockTop.parent.isAncestorHidden()){
_ec5=app.dockTop;
}else{
if(edge=="b"&&app.dockBottom&&!app.dockBottom.parent.isAncestorHidden()){
_ec5=app.dockBottom;
}else{
if(edge=="l"&&app.dockLeft&&!app.dockLeft.parent.isAncestorHidden()){
_ec5=app.dockLeft;
}else{
if(edge=="r"&&app.dockRight&&!app.dockRight.parent.isAncestorHidden()){
_ec5=app.dockRight;
}else{
_ec5=app.appRoot;
}
}
}
}
}
if(!_ec5.showing){
_ec5.setShowing(true);
}
if(_ec5==app.appRoot){
app.dockDialog(this,edge);
}else{
this.setParent(_ec5);
this.setWidth("100%");
this.setHeight("100%");
_ec5.show();
_ec5.reflow();
}
this.onDock();
},onDock:function(){
},_undock:function(){
this.docked=false;
if(!wm.isMobile){
this.titleButtonPanel.show();
}
if(!this._dockData){
this._dockData=dojo.clone(this.bounds);
}
if(this._dockData.edge=="t"||this._dockData.edge=="b"){
this._dockData.t=Math.floor(dojo.coords(this.domNode).y);
}else{
this._dockData.l=Math.floor(dojo.coords(this.domNode).x);
}
this._cupdating=true;
if(this._dockData.border!==undefined){
this.setBorder(this._dockData.border);
}else{
this.setBorder(wm.Dialog.prototype.border);
}
if(this._dockData.margin!==undefined){
this.setMargin(this._dockData.margin);
}else{
this.setMargin(wm.Dialog.prototype.margin);
}
this.setWidth(((this._dockData.w||this.bounds.w)-20)+"px");
this.setHeight(((this._dockData.h||this.bounds.h)-20)+"px");
this.setBounds({t:this._dockData.t||this.bounds.t,l:this._dockData.l||this.bounds.l});
this._cupdating=false;
delete this._dockData;
var _ec8=this.parent;
app.removeDockedDialog(this);
if(this._isDesignLoaded){
studio.designer.domNode.appendChild(this.domNode);
}else{
app.appRoot.domNode.appendChild(this.domNode);
}
this.render();
this.flow();
if(_ec8.dockRight||_ec8.dockLeft||_ec8.dockTop||_ec8.dockBottom){
if(_ec8.c$.length==0){
_ec8.hide();
}else{
_ec8.reflow();
}
}else{
app.reflow();
}
this.onUndock();
},onUndock:function(){
},minify:function(){
this._minified=true;
this.setShowing(false);
if(!app.wmMinifiedDialogPanel){
app.createMinifiedDialogPanel();
}
this.minifiedLabel=app.createMinifiedDialogLabel(this.title);
this.minifiedLabel.connect(this.minifiedLabel,"onclick",this,function(){
app.removeMinifiedDialogLabel(this.minifiedLabel);
delete this.minifiedLabel;
app.wmMinifiedDialogPanel.reflow();
this._minified=false;
this.setShowing(true);
});
app.wmMinifiedDialogPanel.reflow();
},unminify:function(_ec9,_eca){
if(!this._minified){
return;
}
app.removeMinifiedDialogLabel(this.minifiedLabel);
delete this.minifiedLabel;
app.wmMinifiedDialogPanel.reflow();
this._minified=false;
if(!_eca){
this.show();
}
},maxify:function(){
if(this.docked){
this._undock();
}
if(this._maxified){
this._maxified=false;
dojo.removeClass(this.domNode,"wmDialogMaxify");
this.bounds.h=parseInt(this.height);
this.bounds.w=parseInt(this.width);
}else{
this._maxified=true;
dojo.addClass(this.domNode,"wmDialogMaxify");
}
this.renderBounds();
this.reflow();
},windowResize:function(){
this.reflow();
this.delayedRenderBounds();
},reflowParent:function(){
if(this.docked&&this.parent){
this.parent.reflow();
}else{
this.renderBounds();
this.reflow();
}
},dismiss:function(e){
this.setShowing(false,false,true);
var why=""||dojo.isString(e)?e:e&&e.target&&e.target.innerHTML;
this.onClose(why);
why=null;
},destroy:function(){
this._destroying=true;
if(this._minified){
app.removeMinifiedDialogLabel(this.minifiedLabel);
delete this.minifiedLabel;
}
if(this.showing){
this.dismiss();
}
if(this.dialogScrim){
this.dialogScrim.destroy();
}
if(this.minifiedLabel){
this.minfiedLabel.destroy();
}
this.inherited(arguments);
},flow:function(){
if(this.showing){
this.renderBounds();
this.inherited(arguments);
if(dojo.isChrome&&this.buttonBar&&!this._chromeButtonBarHack){
this._chromeButtonBarHack=true;
this.buttonBar.bounds.h++;
this.buttonBar.renderBounds();
}
this.dialogScrim.reflowParent();
}
},getPreferredFitToContentHeight:function(){
var _ecb=this.inherited(arguments);
var min=this.minHeight;
return Math.max(min,_ecb);
},getPreferredFitToContentWidth:function(){
var _ecc=this.inherited(arguments);
var min=this.minWidth;
return Math.max(min,_ecc);
},setFitToContentWidth:function(_ecd){
this.inherited(arguments);
this.reflow();
},setFitToContentHeight:function(_ece){
this.inherited(arguments);
this.reflow();
},delayedRenderBounds:function(){
wm.job(this.getRuntimeId()+".renderBounds",5,dojo.hitch(this,function(){
var _ecf=dojo.clone(this.bounds);
this.renderBounds();
if(_ecf.w!=this.bounds.w||_ecf.h!=this.bounds.h){
this.reflow();
}
}));
},renderBounds:function(){
if(this.docked){
return this.inherited(arguments);
}
if(this.showing){
if(this.fitToContentHeight&&!this._userSized){
this.bounds.h=this.getPreferredFitToContentHeight();
this.height=this.bounds.h+"px";
}
if(this.fitToContentWidth&&!this._userSized){
this.bounds.w=this.getPreferredFitToContentWidth();
this.width=this.bounds.w+"px";
}
if(this._minified){
var _ed0=app.appRoot.bounds;
var t=_ed0.h-30;
var l=_ed0.w-200;
this.setBounds(l,t,200,30);
}else{
if(this._maxified){
var _ed0=app.appRoot.bounds;
this.setBounds(20,20,_ed0.w-40,_ed0.h-40);
}else{
if(this._userSized){
this.insureDialogVisible();
}else{
if(!this.fixPositionNode&&this.positionNear){
var _ed1=this.owner.getValueById(this.positionNear);
if(_ed1){
this.fixPositionNode=_ed1.domNode;
}
}
if(this.fixPositionNode){
this.renderBoundsByPositionNode();
}else{
if(!this._fixPosition){
this.renderBoundsByCorner();
}else{
this.insureDialogVisible();
}
}
wm.bgIframe.size();
}
}
}
return this.inherited(arguments);
}
},setCorner:function(_ed2){
this.corner=_ed2.replace(/top/,"t").replace(/bottom/,"b").replace(/left/,"l").replace(/right/,"r").replace(/center/,"c").replace(/ /,"");
if(this.positionNear){
this.renderBoundsByPositionNode();
}else{
this.renderBoundsByCorner();
}
},insureDialogVisible:function(_ed3){
if(!this.showing){
return;
}
var w=this.bounds.w;
var h=this.bounds.h;
var _ed4=this._isDesignLoaded;
var W=(_ed4)?studio.designer.bounds.w:(app._page)?app._page.root.bounds.w:window.clientWidth;
var H=(_ed4)?studio.designer.bounds.h:(app._page)?app._page.root.bounds.h:window.clientHeight;
if(this.bounds.t+this.bounds.h>H){
if(_ed3){
return false;
}else{
this.bounds.t=H-this.bounds.h;
}
}
if(this.bounds.l+this.bounds.w>W){
if(_ed3){
return false;
}else{
this.bounds.l=W-this.bounds.w;
}
}
if(this.bounds.t<0){
if(_ed3){
return false;
}else{
this.bounds.t=0;
}
}
if(this.bounds.l<0){
if(_ed3){
return false;
}else{
this.bounds.l=0;
}
}
if(!_ed3){
wm.Control.prototype.renderBounds.call(this);
}
return true;
},renderBoundsByPositionNode:function(){
if(!this.fixPositionNode){
return;
}
var o=dojo._abs(this.fixPositionNode);
if(this._isDesignLoaded){
var _ed5=dojo._abs(studio.designer.domNode);
o.x-=_ed5.x;
o.y-=_ed5.y;
}
var _ed6=this.corner||"bc";
var top=_ed6.substring(0,1);
var left=_ed6.substring(1,2);
switch(left){
case "l":
this.bounds.l=o.x-this.bounds.w;
break;
case "r":
this.bounds.l=o.x+o.w;
break;
case "c":
this.bounds.l=o.x+(o.w-this.bounds.w)/2;
}
switch(top){
case "t":
this.bounds.t=o.y-this.bounds.h;
break;
case "b":
this.bounds.t=o.y+o.h;
break;
case "c":
this.bounds.t=o.y+(o.h-this.bounds.h)/2;
}
this.insureDialogVisible();
this.setBounds(this.bounds);
},renderBoundsByCorner:function(){
if(!this.showing){
return;
}
var w=this.width;
var h=this.height;
var _ed7=this._isDesignLoaded;
var W=(_ed7)?studio.designer.bounds.w:this.domNode.parentNode.clientWidth;
var H=(_ed7)?studio.designer.bounds.h:this.domNode.parentNode.clientHeight;
if(String(w).match(/\%/)){
w=W*parseInt(w)/100;
}else{
w=parseInt(w);
}
if(String(h).match(/\%/)){
h=H*parseInt(h)/100;
}else{
h=parseInt(h);
}
var _ed8=10;
if(w>W-_ed8*2){
w=W-_ed8*2;
}
if(h>H-_ed8*2){
h=H-_ed8*2;
}
var t,l;
var top=this.corner.substring(0,1);
var left=this.corner.substring(1,2);
var _ed9=[];
var _eda=this.getOwnerApp();
if(!this._percEx.h&&!this._percEx.w){
for(var i=0;i<wm.dialog.showingList.length;i++){
if(wm.dialog.showingList[i]!=this&&wm.dialog.showingList[i].getOwnerApp()==_eda&&(!window["studio"]||this!=window["studio"].dialog)){
_ed9.push(wm.dialog.showingList[i]);
}
}
h=parseInt(h);
var last=wm.Array.last(_ed9);
}
switch(left){
case "l":
l=_ed8;
break;
case "r":
l=W-w-_ed8;
break;
case "c":
l=Math.floor((W-w)/2);
if(last&&last.corner==this.corner){
l+=25;
}
break;
}
switch(top){
case "t":
t=_ed8;
break;
case "b":
t=H-h-_ed8;
break;
case "c":
t=Math.floor((H-h)/2);
if(last&&last.corner==this.corner){
t+=25;
}
break;
}
this.setBounds(l,t,w,h);
wm.Control.prototype.renderBounds.call(this);
},setContent:function(_edb){
this.containerNode.innerHTML=_edb;
},animEnd:function(){
if(this.showing){
}else{
if(this.docked){
this.setDocked(false);
}
this.domNode.style.display="none";
}
},setShowing:function(_edc,_edd,_ede){
if(app.debugDialog){
var _edf=["_setValue","setProp","setValue"];
}
wm.Array.removeElement(wm.dialog.showingList,this);
if(!this.docked&&_edc&&(!window["studio"]||this!=window["studio"].dialog)){
var _ee0=wm.dialog.getNextZIndex(this._isDesignLoaded);
wm.dialog.showingList.push(this);
this.domNode.style.zIndex=_ee0;
if(this.modal){
this.dialogScrim.domNode.style.zIndex=_ee0-1;
}
}
if(_edc&&this._minified){
this.unminify(null,true);
delete this.showing;
}
wm.bgIframe.setShowing(_edc&&this.modal&&!this.isDesignedComponent());
if(_edc!=this.showing&&this.modal&&!this._isDesignLoaded){
this.dialogScrim.setShowing(_edc);
}
var _ee1=this.showing;
var _ee2=Boolean(this.showing)!=Boolean(_edc);
if(_ee2&&this._animEnabled){
dojo.removeClass(this.domNode,["fadeInAnim","fadeOutAnim"]);
}
if(_edc&&_ee2){
if(this._animEnabled){
this.domNode.opacity=0.01;
}
this.inherited(arguments);
if(this._animEnabled){
dojo.addClass(this.domNode,"fadeInAnim");
}else{
this.animEnd();
}
if(this.modal&&!this._noAutoFocus){
this.domNode.tabIndex=-1;
this.domNode.focus();
}
if(app.debugDialog&&this!=app.debugDialog){
var i=0;
var _ee3=arguments.callee.caller;
_edf.push("show");
while(_ee3&&dojo.indexOf(_edf,_ee3.nom)!=-1&&i<15){
_ee3=_ee3.caller;
i++;
}
var _ee4=app.debugDialog.newLogEvent({eventType:"dialog",sourceDescription:(_ee3&&_ee3.nom?_ee3.nom+"()":""),resultDescription:"Showing dialog: "+this.getRuntimeId()+".setShowing(true)",firingId:this.getRuntimeId(),affectedId:this.getRuntimeId(),method:"show"});
}
this.callOnShowParent();
this.onShow();
if(_ee4){
app.debugDialog.endLogEvent(_ee4);
}
}else{
if(!_edc&&_ee2){
this.callOnHideParent();
this.showing=Boolean(_edc);
if(this._animEnabled){
dojo.addClass(this.domNode,"fadeOutAnim");
}else{
this.animEnd();
}
this.showing=false;
if(app.debugDialog&&this!=app.debugDialog){
var i=0;
var _ee3=arguments.callee.caller;
_edf.push("hide");
while(_ee3&&dojo.indexOf(_edf,_ee3.nom)!=-1&&i<15){
_ee3=_ee3.caller;
i++;
}
var _ee4=app.debugDialog.newLogEvent({eventType:"dialog",sourceDescription:(_ee3&&_ee3.nom?_ee3.nom+"()":""),resultDescription:"Hiding dialog: "+this.getRuntimeId()+".setShowing(false)",firingId:this.getRuntimeId(),affectedId:this.getRuntimeId(),method:"hide"});
}
if(!_ede&&!this._minified){
this.onClose("");
}
if(_ee4){
app.debugDialog.endLogEvent(_ee4);
}
}
}
if(this.designWrapper){
this.designWrapper.setShowing(_edc);
}
if(_edc&&this.modal&&app&&app._page&&wm.isEmpty(wm.dialog.tabIndexChanges)){
dojo.query("input, button",app._page.root.domNode).forEach(function(_ee5){
wm.dialog.tabIndexChanges[_ee5.id]=_ee5.tabIndex;
_ee5.tabIndex=-1;
});
}else{
if(!_edc&&this.modal){
wm.forEachProperty(wm.dialog.tabIndexChanges,function(_ee6,inId){
var node=dojo.byId(inId);
if(node){
node.tabIndex=_ee6||0;
}
});
wm.dialog.tabIndexChanges={};
}
}
if(!this._initializing&&!this._isDesignLoaded&&_ee2&&this.manageHistory){
app.addHistory({id:this.getRuntimeId(),options:{},title:"Hide "+this.title});
}
},canProcessKeyboardEvent:function(_ee7){
if(!this.showing||this.docked){
return false;
}
var _ee8=dojo.query(".wmdialog");
var _ee9=parseInt(this.domNode.style.zIndex);
for(var i=0;i<_ee8.length;i++){
if(_ee8[i].style.display!="none"&&parseInt(_ee8[i].style.zIndex)>_ee9){
return false;
}
}
return true;
},_onEsc:function(){
},keydown:function(_eea){
if(!this.canProcessKeyboardEvent(_eea)){
return true;
}
if(_eea.keyCode==dojo.keys.ESCAPE&&!this.noEscape){
if(this._isDesignLoaded&&studio.selected.getParentDialog()==this){
return;
}
if(this.showing){
this.callOnHideParent();
this._onEsc();
this.setShowing(false);
this.onClose("cancel");
if(!this._isDesignLoaded){
_eea._wmstop=true;
}
dojo.stopEvent(_eea);
}
}else{
if(_eea.keyCode==dojo.keys.ENTER){
if(this.$.textInput&&this.$.textInput.getDataValue){
this.onEnterKeyPress(this.$.textInput.getDataValue(),_eea);
}else{
this.onEnterKeyPress("",_eea);
}
}
}
return true;
},onEnterKeyPress:function(_eeb){
},onShow:function(){
},onClose:function(_eec){
},handleBack:function(_eed){
if(!this.showing&&!this._showAnimation){
return false;
}
this.hide();
return true;
},restoreFromLocationHash:function(_eee){
this.show();
},generateStateUrl:function(_eef){
if(this.showing||this._showAnimation&&!this._isDesignLoaded){
_eef[this.getRuntimeId()]=1;
}
},setTitlebarHeight:function(_ef0){
this.titlebarHeight=_ef0;
if(this.titleBar){
this.titleBar.setHeight(_ef0+"px");
}
},createTitle:function(){
var _ef1=(String(this.titlebarBorder).match(","))?this.titlebarBorder:"0,0,"+this.titlebarBorder+",0";
this.titleBar=new wm.Container({_classes:{domNode:["dialogtitlebar"]},showing:this.title,name:"titleBar",parent:this,owner:this,width:"100%",desktopHeight:this.titlebarHeight+"px",mobileHeight:this.mobileTitlebarHeight+"px",margin:"0",padding:"0",border:_ef1,borderColor:this.titlebarBorderColor,verticalAlign:"middle",layoutKind:"left-to-right",flags:{notInspectable:true}});
var _ef2=this.titleButtonPanel=new wm.Panel({parent:this.titleBar,owner:this,name:"titleButtonBar",width:wm.isMobile?this.mobileTitlebarHeight+"px":(!this.noEscape?20:0)+(!this.noMinify?20:0)+(!this.noMaxify?20:0)+"px",height:"100%",layoutKind:"left-to-right",horizontalAlign:"left",verticalAlign:"top",showing:!this.modal&&(!this.docked||this.showTitleButtonsWhenDocked)});
if(wm.isMobile){
this.menuButton=new wm.MobileIconButton({direction:"down",noInspector:true,name:"menuButton",width:this.mobileTitlebarHeight+"px",height:"100%",margin:"0",parent:_ef2,owner:this,onclick:dojo.hitch(this,function(_ef3){
this.setShowing(false);
})});
}
this.titleClose=new wm.ToolButton({_classes:{domNode:["dialogclosebutton"]},noInspector:true,name:"titleClose",hint:wm.getDictionaryItem("wm.Dialog.HINT_CLOSE"),width:"19px",height:"19px",margin:"3,0,0,3",parent:_ef2,owner:this,showing:!this.noEscape&&!wm.isMobile});
this.titleMinify=new wm.ToolButton({_classes:{domNode:["dialogminifybutton"]},noInspector:true,hint:wm.getDictionaryItem("wm.Dialog.HINT_MINIFY"),name:"titleMinify",width:"19px",height:"19px",margin:"3,0,0,3",parent:_ef2,owner:this,showing:!this.noMinify&&!wm.isMobile});
this.titleMaxify=new wm.ToolButton({_classes:{domNode:["dialogmaxifybutton"]},noInspector:true,hint:wm.getDictionaryItem("wm.Dialog.HINT_MAXIFY"),name:"titleMinify",caption:" ",width:"19px",height:"19px",margin:"3,0,0,3",parent:_ef2,owner:this,showing:!this.noMaxify&&!wm.isMobile});
this.titleLabel=new wm.Label({noInspector:true,name:"dialogTitleLabel",parent:this.titleBar,owner:this,caption:this.title,showing:Boolean(this.title),margin:"3,3,0,10",width:"100%",height:"100%"});
this.connect(this.titleClose,"onclick",this,"dismiss");
this.connect(this.titleMinify,"onclick",this,"minify");
this.connect(this.titleMaxify,"onclick",this,"maxify");
if(this.titlebarButtons&&!wm.isMobile){
var _ef4=this.titlebarButtons.split(/\s*,\s*/);
for(var i=0;i<_ef4.length;i++){
new wm.ToolButton({_classes:{domNode:[_ef4[i]]},noInspector:true,name:_ef4[i],caption:" ",width:"19px",height:"19px",margin:"3,0,0,3",parent:this.titleBar,owner:this,onclick:dojo.hitch(this,"onMiscButtonClick",_ef4[i])});
}
new wm.Spacer({owner:this,parent:this.titleBar,width:"5px"});
}
if(this.titleBarButtonsOnRight){
this.titleBar.c$.reverse();
_ef2.c$.reverse();
}
},onMiscButtonClick:function(_ef5){
},setTitlebarButtons:function(_ef6){
this.titlebarButtons=_ef6;
this.titleBar.destroy();
this.createTitle();
this.moveControl(this.titleBar,0);
this.reflow();
},setNoMinify:function(val){
this.noMinify=val;
if(this.titleMinify){
this.titleMinify.setShowing(!val&&!wm.isMobile);
}
},setNoMaxify:function(val){
this.noMaxify=val;
if(this.titleMaxify){
this.titleMaxify.setShowing(!val&&!wm.isMobile);
}
},setTitle:function(_ef7){
this.title=_ef7;
if(this.titleLabel){
this.titleLabel.setCaption(_ef7);
this.titleLabel.setShowing(true);
}
if(this.titleBar){
this.titleBar.setShowing(Boolean(_ef7));
}
},setSizeProp:function(n,v,_ef8){
this.inherited(arguments);
if(v&&v.match("%")){
}
if(this.docked){
return;
}
if(this.isReflowEnabled()){
this.renderBounds();
}
if(this.designWrapper){
this.designWrapper.controlBoundsChange();
this.designWrapper.renderBounds();
}
this.reflow();
},update:function(){
this.show();
},activate:function(){
this.show();
},deactivate:function(){
this.hide();
},mousedown:function(e){
if(!this.modal&&!this.docked){
var _ef9=wm.dialog.getNextZIndex(this._isDesignLoaded,this);
this.domNode.style.zIndex=_ef9;
}
if(!this.modal&&!this.noMaxify&&e.target==this.domNode){
this._initialPosition=dojo.clone(this.bounds);
var _efa=e.clientX-this.marginExtents.l-this.borderExtents.l;
var _efb=e.clientX;
var _efc=e.clientY-this.marginExtents.t-this.borderExtents.t;
var _efd=e.clientY;
if(_efa-12<=this.bounds.l&&_efa+12>=this.bounds.l){
this._dragBorderX="left";
}else{
if(_efb-12<=this.bounds.r&&_efb+12>=this.bounds.r){
this._dragBorderX="right";
}else{
this._dragBorderX="";
}
}
if(_efc-12<=this.bounds.t&&_efc+12>=this.bounds.t){
this._dragBorderY="top";
}else{
if(_efd-12<=this.bounds.b&&_efd+12>=this.bounds.b){
this._dragBorderY="bottom";
}else{
this._dragBorderY="";
}
}
switch(this._dragBorderX+this._dragBorderY){
case "lefttop":
wm.Dialog.resizer.setCursor("nw-resize");
break;
case "leftbottom":
wm.Dialog.resizer.setCursor("sw-resize");
break;
case "righttop":
wm.Dialog.resizer.setCursor("ne-resize");
break;
case "rightbottom":
wm.Dialog.resizer.setCursor("se-resize");
break;
case "top":
wm.Dialog.resizer.setCursor("n-resize");
break;
case "bottom":
wm.Dialog.resizer.setCursor("s-resize");
break;
case "left":
wm.Dialog.resizer.setCursor("w-resize");
break;
case "right":
wm.Dialog.resizer.setCursor("e-resize");
break;
}
wm.Dialog.resizer.beginResize(e,this);
}
},drag:function(inDx,inDy){
this._userSized=true;
if(this._dragBorderX=="left"){
this.setBounds(this._initialPosition.l+inDx,NaN,this._initialPosition.w-inDx,NaN);
}else{
if(this._dragBorderX=="right"){
this.setBounds(NaN,NaN,this._initialPosition.r-this._initialPosition.l+inDx,NaN);
}
}
if(this._dragBorderY=="top"){
this.setBounds(NaN,this._initialPosition.t+inDy,NaN,this._initialPosition.h-inDy,NaN);
}else{
if(this._dragBorderY=="bottom"){
this.setBounds(NaN,NaN,NaN,this._initialPosition.b-this._initialPosition.t+inDy);
}
}
this.renderBounds();
if(!dojo.isIE||dojo.isIE>=9){
if(this.docked){
app.reflow();
}else{
this.reflow();
}
}
},drop:function(){
this.reflow();
},setPositionNear:function(_efe){
if(_efe instanceof wm.Component){
this.positionNear=_efe.getId();
this.fixPositionNode=_efe.domNode;
}else{
this.positionNear=_efe;
var _eff=this.owner.getValueById(_efe);
this.fixPositionNode=_eff?_eff.domNode:null;
}
this.renderBounds();
},adjustFlowForMobile:function(){
}});
dojo.declare("wm.ButtonBarPanel",wm.Panel,{classNames:"wmcontainer wmpanel dialogfooter",width:"100%",height:(wm.isMobile?wm.Button.prototype.mobileHeight:wm.Button.prototype.desktopHeight)||wm.Button.prototype.height,padding:"0",desktopHeight:wm.Button.prototype.desktopHeight||wm.Button.prototype.height,mobileHeight:wm.Button.prototype.mobileHeight||wm.Button.prototype.height,enableTouchHeight:true,horizontalAlign:"right",verticalAlign:"top",fitToContentHeight:true,layoutKind:"left-to-right",init:function(){
this.inherited(arguments);
var d=this.isAncestorInstanceOf(wm.Dialog);
if(d&&(!d.buttonBar||d.buttonBar.isDestroyed)){
d.buttonBar=this;
}
},destroy:function(){
var d=this.isAncestorInstanceOf(wm.Dialog);
if(d&&d.buttonBar==this){
delete d.buttonBar;
}
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.WidgetsJsDialog"]){
dojo._hasResource["wm.base.widget.Dialogs.WidgetsJsDialog"]=true;
dojo.provide("wm.base.widget.Dialogs.WidgetsJsDialog");
dojo.declare("wm.WidgetsJsDialog",wm.Dialog,{margin:"0,4,4,0",useContainerWidget:true,widgets_data:null,widgets_json:"",width:"400px",height:"150px",setShowing:function(_f00,_f01){
this.inherited(arguments);
if(this.isReflowEnabled()&&!this._rendered){
this.leafFirstRenderCss();
this._rendered=true;
}
},postInit:function(){
this.inherited(arguments);
if(!this.widgets_data){
this.setWidgetsJson(this.widgets_json);
}
this.generateContents();
this.containerWidget.setPadding("0");
this.renderBounds();
this.reflow();
},setWidgetsJson:function(_f02){
try{
this.widgets_json=_f02;
this.widgets_data=dojo.fromJson(this.widgets_json);
if(!this._cupdating){
this.generateContents();
}
}
catch(e){
console.error(e);
}
},generateContents:function(){
if(this._generated){
return;
}
this._generated=true;
this.containerWidget._cupdating=true;
this.containerWidget.createComponents(this.widgets_data,this);
this.containerWidget._cupdating=false;
this.containerWidget.reflow();
if(this.button_data){
if(!this.buttonBar){
var _f03=this.containerWidget;
var _f04=this.containerNode;
delete this.containerWidget;
delete this.containerNode;
this.createButtonBar();
this.containerWidget=_f03;
this.containerNode=_f04;
}
this.buttonBar.createComponents(this.button_data,this);
}
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.Toast"]){
dojo._hasResource["wm.base.widget.Dialogs.Toast"]=true;
dojo.provide("wm.base.widget.Dialogs.Toast");
dojo.declare("wm.Toast",wm.WidgetsJsDialog,{autoSetBorderColor:true,manageHistory:false,manageURL:false,classNames:"wmtoast wmtoastExtraSpecific",title:"",modal:false,useContainerWidget:true,_timeoutId:0,duration:5000,content:"Toast",height:"100px",width:"350px",corner:"br",border:"2",margin:"0",imgHeight:"100%",imgWidth:"30px",imgMargin:"4,0,0,4",prepare:function(){
this.inherited(arguments);
this.widgets_data={img:["wm.Picture",{_classes:{domNode:["ToastLeft"]},width:this.imgWidth,height:this.imgHeight,margin:this.imgMargin}],rightColumn:["wm.Panel",{layoutKind:"top-to-bottom",width:"100%",height:"100%",fitToContentHeight:true,padding:"0"},{},{title:["wm.Label",{_classes:{domNode:["wmtoasttitle"]},height:"20px",width:"100%",singleLine:true}],message:["wm.Label",{_classes:{domNode:["wmtoastmessage"]},height:"100px",width:"100%",singleLine:false,autoSizeHeight:true}]}]};
},postInit:function(){
this.inherited(arguments);
this.containerWidget.setLayoutKind("left-to-right");
this.containerWidget.setPadding("4");
this.img=this.containerWidget.c$[0];
this.title=this.containerWidget.c$[1].c$[0];
this.message=this.containerWidget.c$[1].c$[1];
this.setContent(this.content);
this.connectEvents(this.domNode,["click"]);
},click:function(){
this.hide();
this.onToastClick();
},onToastClick:function(){
},setShowing:function(_f05,_f06){
if(!_f05){
window.clearTimeout(this._timeoutId);
delete this._timeoutId;
}
this.inherited(arguments);
if(_f05){
this.renderBounds();
this.domNode.style.zIndex=1000;
}
},renderBounds:function(){
this.renderBoundsByCorner();
},setContent:function(_f07){
this.content=_f07;
if(this.message){
this.message.setCaption(_f07);
}
},setTitle:function(_f08){
if(this.title){
this.title.setCaption(_f08);
}
},showToast:function(_f09,_f0a,_f0b,_f0c,_f0d){
if(_f09 instanceof Error){
_f09=_f09.toString();
}
if(!_f0b){
_f0b="Info";
}
if(_f0c){
_f0c=_f0c.replace(/top/,"t").replace(/bottom/,"b").replace(/left/,"l").replace(/right/,"r").replace(/center/,"c").replace(/ /,"");
}
this.corner=_f0c||app.toastPosition||"br";
if(this._timeoutId){
window.clearTimeout(this._timeoutId);
this.hide();
this._timeoutId=0;
}
var _f0e=wm.getDictionaryItem("wm.Toast.STATUS_"+(_f0b||"").toUpperCase())||"";
this.setTitle(_f0d||_f0e||_f0b);
_f0b=_f0b||"Info";
this._toastType=_f0b=_f0b||"Info";
var _f0f=(_f0b)?_f0b.split(" "):[];
if(this.autoSetBorderColor){
if(dojo.indexOf(_f0f,"Success")!=-1){
this.setBorderColor("rgb(0,120,0)");
}else{
if(dojo.indexOf(_f0f,"Error")!=-1){
this.setBorderColor("rgb(120,0,0)");
}else{
if(dojo.indexOf(_f0f,"Warning")!=-1){
this.setBorderColor("#f9a215");
}else{
this.setBorderColor("rgb(0,0,0)");
}
}
}
}
this.message.autoSizeHeight=false;
this.setContent(_f09);
this.message.autoSizeHeight=true;
this.duration=_f0a||this.duration;
this.domNode.className=this.classNames+" "+((_f0b)?_f0b:"");
this.show();
this.message.doAutoSize(true,true);
this.containerWidget.removeDelayedReflow();
this.containerWidget.reflow();
this.setHeight((this.containerWidget.padBorderMargin.t+this.containerWidget.padBorderMargin.b+this.message.parent.bounds.h+this.padBorderMargin.t+this.padBorderMargin.b)+"px");
this._timeoutId=window.setTimeout(dojo.hitch(this,"hide"),this.duration);
},update:function(){
this.showToast(this.content,this.duration,this.domNode.className);
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.GenericDialog"]){
dojo._hasResource["wm.base.widget.Dialogs.GenericDialog"]=true;
dojo.provide("wm.base.widget.Dialogs.GenericDialog");
dojo.declare("wm.GenericDialog",wm.WidgetsJsDialog,{manageHistory:false,manageURL:false,enterKeyIsButton:1,noEscape:true,title:"Generic Dialog",footerBorder:"",footerBorderColor:"",padding:"0",regExp:".*",button1Caption:"",button2Caption:"",button3Caption:"",button4Caption:"",button1Close:false,button2Close:false,button3Close:false,button4Close:false,userPrompt:"Testing...",showInput:false,prepare:function(){
this.inherited(arguments);
if("enterKeyIsButton1" in this){
this.enterKeyIsButton=this.enterKeyIsButton1?1:0;
delete this.enterKeyIsButton1;
}
this.widgets_data={genericInfoPanel:["wm.Panel",{layoutKind:"top-to-bottom",width:"100%",height:"100%",horizontalAlign:"left",verticalAlign:"top",autoScroll:true,fitToContentHeight:true,padding:"10,5,10,5"},{},{userQuestionLabel:["wm.Html",{autoScroll:false,"height":"25px",autoSizeHeight:true,"width":"100%",html:""}],textInput:["wm.Text",{"width":"100%","captionSize":"0%","showing":false},{},{}]}]};
this.button_data={button4:["wm.Button",{"width":"130px","showing":false},{"onclick":"buttonClick"}],button3:["wm.Button",{"width":"130px","showing":false},{"onclick":"buttonClick"}],button2:["wm.Button",{"width":"130px","showing":false},{"onclick":"buttonClick"}],button1:["wm.Button",{"width":"130px","showing":false},{"onclick":"buttonClick"}]};
},postInit:function(){
this.inherited(arguments);
this.containerWidget=this.c$[1];
this.containerWidget.flags.notInspectable=true;
if(!this.buttonBar){
this.buttonBar=this.containerWidget.c$[this.containerWidget.c$.length-1];
this.buttonBar.flags.notInspectable=true;
this.setFooterBorder(this.footerBorder);
this.setFooterBorderColor(this.footerBorderColor);
}
if(this.regExp!=".*"){
this.$.textInput.setRegExp(this.regExp);
}
var _f10=false;
for(var i=1;i<=6;i++){
var _f11=this["button"+i+"Caption"];
var _f12=this.$["button"+i];
if(_f11){
_f10=true;
_f12.setCaption(_f11);
if(this["button"+i+"Close"]){
_f12.addUserClass("SubmitButton");
}
_f12.show();
}
if(this.buttonBar){
this.buttonBar.setShowing(_f10);
}
this.setShowInput(this.showInput);
}
if(this.$.userQuestionLabel){
this.$.userQuestionLabel.setHtml(this.userPrompt);
}
this.containerWidget.setFitToContentHeight(true);
},setFooterBorder:function(_f13){
this.footerBorder=_f13;
if(this.buttonBar){
this.buttonBar.setBorder(_f13);
this.buttonBar.setHeight((34+this.buttonBar.padBorderMargin.t+this.buttonBar.padBorderMargin.b)+"px");
}
},setFooterBorderColor:function(_f14){
this.footerBorderColor=_f14;
if(this.buttonBar){
this.buttonBar.setBorderColor(_f14);
}
},reflow:function(){
try{
if(this._userSized){
return this.inherited(arguments);
}else{
if(!this._settingHeight){
var _f15=this.getPreferredFitToContentHeight();
if(dojo.isChrome){
_f15--;
}
this._settingHeight=true;
this.setHeight(_f15+"px");
this._settingHeight=false;
this.inherited(arguments);
}
}
}
catch(e){
this._settingHeight=false;
}
},setShowing:function(_f16,_f17){
this.inherited(arguments);
if(_f16){
if(this.$.userQuestionLabel){
this.$.userQuestionLabel.doAutoSize(true,true);
}
if(this.showInput&&this.$.textInput&&this.$.textInput.focus){
this.$.textInput.focus();
}
wm.onidle(this,"reflow");
}
},setShowInput:function(_f18){
this.showInput=_f18;
if(this.$.textInput){
this.$.textInput.setShowing(_f18);
}
},setInputDataValue:function(_f19){
if(this.$.textInput){
this.$.textInput.setDataValue(_f19);
}
},getInputDataValue:function(_f1a){
var _f1b;
if(this.$.textInput){
_f1b=this.$.textInput.getDataValue();
if(dojo.isString(_f1b)){
_f1b=dojo.trim(_f1b);
}
return _f1b;
}
},setUserPrompt:function(_f1c){
this.userPrompt=_f1c;
if(this.$.userQuestionLabel){
this.$.userQuestionLabel.setHtml(_f1c);
}
},setButton1Caption:function(_f1d){
this.setButtonCaption(1,_f1d);
},setButton2Caption:function(_f1e){
this.setButtonCaption(2,_f1e);
},setButton3Caption:function(_f1f){
this.setButtonCaption(3,_f1f);
},setButton4Caption:function(_f20){
this.setButtonCaption(4,_f20);
},setButtonCaption:function(_f21,_f22){
var _f23=this.$["button"+_f21];
this["button"+_f21+"Caption"]=_f22;
if(!_f23){
return;
}
if(_f22){
_f23.setCaption(_f22);
_f23.show();
}else{
_f23.hide();
}
if(this.buttonBar){
this.buttonBar.setShowing(this.button1Caption||this.button2Caption||this.button3Caption||this.button4Caption);
}
},onEnterKeyPress:function(_f24,_f25){
if(this.enterKeyIsButton){
this.buttonClick(this.$["button"+this.enterKeyIsButton]);
dojo.stopEvent(_f25);
}
},buttonClick:function(_f26){
var name=_f26.name;
var id=parseInt(name.match(/\d+/)[0]);
if(this["button"+id+"Close"]){
this.dismiss();
}
var text=(this.$.textInput)?this.$.textInput.getDataValue():"";
switch(id){
case 1:
this.onButton1Click(_f26,text);
break;
case 2:
this.onButton2Click(_f26,text);
break;
case 3:
this.onButton3Click(_f26,text);
break;
case 4:
this.onButton4Click(_f26,text);
break;
}
},onButton1Click:function(_f27,_f28){
},onButton2Click:function(_f29,_f2a){
},onButton3Click:function(_f2b,_f2c){
},onButton4Click:function(_f2d,_f2e){
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.PageDialog"]){
dojo._hasResource["wm.base.widget.Dialogs.PageDialog"]=true;
dojo.provide("wm.base.widget.Dialogs.PageDialog");
dojo.declare("wm.pageContainerMixin",null,{pageName:"",hideControls:false,pageProperties:null,deferLoad:false,initPageContainer:function(){
this.pageContainer=new wm.PageContainer({loadParentFirst:false,deferLoad:false,parent:this,owner:this,flex:1,pageProperties:this.pageProperties});
this._connections.push(this.connect(this.pageContainer,"onPageChanged",this,"_pageChanged"));
this._connections.push(this.connect(this.pageContainer,"onError",this,"onError"));
this.pageContainer.dismiss=dojo.hitch(this,"dismiss");
if(this.pageName&&!this.deferLoad){
this.setPage(this.pageName);
}else{
this.pageContainer._pageName=this.pageName;
}
this.createControls();
},onError:function(_f2f){
},setPage:function(_f30){
if(_f30){
if(this.pageContainer.pageName!=_f30){
if(this.page){
this.page.root.hide();
}
this.pageContainer.setPageName(_f30);
}else{
this.onPageReady();
}
}
},showPage:function(_f31,_f32,_f33,_f34,_f35,_f36){
if(_f35!==undefined){
this.setTitle(_f35);
}
if(_f36!==undefined){
this.setModal(_f36);
}
this.setContainerOptions(_f32,_f33,_f34);
this.setShowing(true);
this.setPage(_f31);
this.reflow();
},setContainerOptions:function(_f37,_f38,_f39){
this.setHideControls(_f37);
},_pageChanged:function(){
this.page=this.pageContainer.page;
this[this.page.name]=this.page;
this.onPageReady();
this.reflow();
wm.focusContainer(this.page.root);
},onPageReady:function(){
},forEachWidget:function(_f3a){
return this.pageContainer.forEachWidget(_f3a);
},createControls:function(){
var cp=this.controlsPanel=new wm.ButtonBarPanel({parent:this,owner:this,layoutKind:"top-to-bottom",horizontalAlign:"left",verticalAlign:"top",height:"40px",width:"100%",border:this.footerBorder||"",borderColor:this.footerBorderColor||"",flags:{notInspectable:true}});
if(!this.noBevel){
this.controlsBevel=new wm.Bevel({parent:cp,owner:this});
}
var bp=this.buttonPanel=new wm.Panel({parent:cp,owner:this,width:"100%",height:"100%",layoutKind:"left-to-right",horizontalAlign:"right",fitToContentHeight:true});
dojo.addClass(bp.domNode,"wmpagedialog-controlspanel");
this.closeButton=new wm.Button({parent:bp,owner:this,caption:wm.getDictionaryItem("wm.PageDialog.CAPTION_CLOSE"),width:"80px"});
this._connections.push(this.connect(this.closeButton,"onclick",this,"dismiss"));
cp.setShowing(!this.hideControls);
cp=null;
bp=null;
},setHideControls:function(_f3b){
if(_f3b!==undefined){
this.hideControls=_f3b;
this.controlsPanel.setShowing(!_f3b);
}
},destroy:function(){
if(this.controlsPanel){
this.controlsPanel.destroy();
this.controlsPanel=null;
}
if(this.closeButton){
this.closeButton.destroy();
this.closeButton=null;
}
if(this.controlsBevel){
this.controlsBevel.destroy();
this.controlsBevel=null;
}
if(this.buttonPanel){
this.buttonPanel.destroy();
this.buttonPanel=null;
}
if(this.pageContainer){
this.pageContainer.dismiss=null;
this.pageContainer.destroy();
this.pageContainer=null;
}
this.inherited(arguments);
}});
dojo.declare("wm.PageDialog",[wm.Dialog,wm.pageContainerMixin],{noBevel:false,footerBorder:"",footerBorderColor:"",postInit:function(){
this.inherited(arguments);
this.initPageContainer();
},setPageName:function(_f3c){
if(this._pageLoading){
return;
}
if(this.isDesignLoaded()){
var _f3d=studio.getDictionaryItem("wm.PageContainer.NEW_PAGE_OPTION");
if(_f3c==_f3d){
return this.pageContainer.createNewPage();
}
}
return this.setPage(_f3c);
},setPage:function(_f3e){
this.pageName=_f3e;
if(_f3e&&this.pageContainer.pageName!=_f3e){
this.showLoadingIndicator();
}
this.inherited(arguments);
},setContainerOptions:function(_f3f,_f40,_f41){
_f40=_f40||wm.Dialog.prototype.contentWidth;
_f41=_f41||wm.Dialog.prototype.contentHeight;
if(!dojo.isString(_f40)){
_f40+="px";
}
if(!dojo.isString(_f41)){
_f41+="px";
}
this.setWidth(_f40);
this.setHeight(_f41);
this.inherited(arguments);
},hideLoadingIndicator:function(){
if(this._loader){
dojo._destroyElement(this._loader);
delete this._loader;
}
},showLoadingIndicator:function(){
if(this.width<150||this.height<80){
return;
}
var text="&nbsp;Loading...";
var _f42=wm.theme.getImagesPath()+"loadingThrobber.gif";
this._loader=wm.createElement("div",{id:"_wm_loading_"+this.id,innerHTML:"<div class=\"_wm_loading\" style=\"position: absolute; font-weight: bold; font-size: 10pt; z-index: 100; top: 40%; left: 40%;\"><img alt=\"loading\" style=\"vertical-align: middle\" src=\""+_f42+"\" />"+text+"</div>"});
this.domNode.appendChild(this._loader);
},onPageReady:function(){
this.hideLoadingIndicator();
},destroy:function(){
this.inherited(arguments);
if(this.containerNode){
dojo.destroy(this.containerNode);
this.containerNode=null;
}
this.c$=[];
},keydown:function(_f43){
if(!this.canProcessKeyboardEvent(_f43)){
return true;
}
if(_f43.keyCode==dojo.keys.ESCAPE&&this.page&&this.page.onEscapeKey){
this.page.onEscapeKey();
}
this.inherited(arguments);
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.DesignableDialog"]){
dojo._hasResource["wm.base.widget.Dialogs.DesignableDialog"]=true;
dojo.provide("wm.base.widget.Dialogs.DesignableDialog");
dojo.declare("wm.DesignableDialog",wm.Dialog,{_pageOwnsWidgets:true,useButtonBar:false,border:"1",borderColor:"black",titlebarBorder:"1",titlebarBorderColor:"black",footerBorderColor:"black",scrim:false,useContainerWidget:true,title:"Dialog",postInit:function(){
this.inherited(arguments);
delete this.containerNode;
}});
}
if(!dojo._hasResource["wm.base.widget.Dialogs.LoadingDialog"]){
dojo._hasResource["wm.base.widget.Dialogs.LoadingDialog"]=true;
dojo.provide("wm.base.widget.Dialogs.LoadingDialog");
dojo.declare("wm.LoadingDialog",wm.Dialog,{caption:"Loading...",captionWidth:"60px",image:"",imageWidth:"20px",imageHeight:"20px",containerClass:"",widgetToCover:null,serviceVariableToTrack:null,classNames:"wmloadingdialog wm_FontColor_White",useContainerWidget:true,modal:false,noMinify:true,noMaxify:true,noEscape:true,border:0,title:"",_noAnimation:true,postInit:function(){
this.inherited(arguments);
dojo.removeClass(this.domNode,"wmdialog");
this.containerWidget.setLayoutKind("left-to-right");
this.containerWidget.setVerticalAlign("middle");
this.containerWidget.setHorizontalAlign("center");
this.containerWidget.setFitToContentHeight();
this.setImage(this.image);
this.setCaption(this.caption);
this.setServiceVariableToTrack(this.serviceVariableToTrack);
},setServiceVariableToTrack:function(_f44){
if(this._isDesignLoaded){
return;
}
if(_f44&&_f44.length){
_f44=dojo.map(_f44,function(_f45){
if(dojo.isString(_f45)){
return this.owner.getValueById(_f45);
}else{
return _f45;
}
},this);
}
if(_f44&&!dojo.isArray(_f44)){
_f44=[_f44];
}
this.serviceVariableToTrack=_f44;
if(this._onResultConnect){
dojo.forEach(this._onResultConnect,function(c){
dojo.disconnect(c);
wm.Array.removeElement(this._connections,c);
},this);
dojo.forEach(this._onRequestConnect,function(c){
dojo.disconnect(c);
wm.Array.removeElement(this._connections,c);
},this);
}
this._onResultConnect=[];
this._onRequestConnect=[];
if(this.serviceVariableToTrack&&this.serviceVariableToTrack.length){
dojo.forEach(this.serviceVariableToTrack,function(svar){
this._onResultConnect.push(this.connect(svar,"onResult",dojo.hitch(this,"svarDone",svar)));
this._onRequestConnect.push(this.connect(svar,"request",dojo.hitch(this,"svarStart",svar)));
},this);
}
},svarDone:function(svar){
if(!this._currentSVars){
this._currentSVars=[];
}
wm.Array.removeElement(this._currentSVars,svar);
if(this._currentSVars.length==0){
this.hide();
}
},svarStart:function(svar){
if(!this._currentSVars){
this._currentSVars=[];
}
this._currentSVars.push(svar);
if(!this.showing){
this.show();
}
},show:function(){
this._getWidgetToCover();
if(this.widgetToCover&&this.widgetToCover instanceof wm.Control&&!this.widgetToCover.isAncestorHidden()){
this.inherited(arguments);
}
},setImage:function(_f46){
var _f47=this.image=_f46;
if(!_f47){
_f47=dojo.moduleUrl("lib.images.common").toString()+"loadingThrobber.gif";
}
this._setImage(_f47);
},_setImage:function(_f48){
if(!this._picture){
this._picture=new wm.Picture({owner:this,parent:this.containerWidget,name:"loadingPicture",source:_f48,width:this.imageWidth,height:this.imageHeight});
}else{
this._picture.setSource(_f48);
}
},setImageWidth:function(_f49){
this.imageWidth=_f49;
if(this._picture){
this._picture.setWidth(_f49);
}
},setImageHeight:function(_f4a){
this.imageHeight=_f4a;
if(this._picture){
this._picture.setHeight(_f4a);
}
},setCaption:function(_f4b){
this.caption=_f4b;
if(!this.caption){
return;
}
if(!this._label){
this._label=new wm.Label({owner:this,parent:this.containerWidget,name:"loadingLabel",width:this.captionWidth,height:"20px",caption:_f4b,singleLine:false,autoSizeHeight:true});
}else{
this._label.setCaption(this.caption);
}
},setShowing:function(_f4c,_f4d,_f4e){
this.inherited(arguments);
if(_f4c){
this._getWidgetToCover();
if(this.widgetToCover){
this.setMargin(this.widgetToCover.margin);
var node=this.widgetToCover.domNode;
if(window.getComputedStyle){
var _f4f,_f50,_f51,_f52,_f53;
var _f54=window.getComputedStyle(node);
_f4f=_f54.getPropertyValue("border-radius")||_f54.getPropertyValue("-webkit-border-radius")||_f54.getPropertyValue("-moz-border-radius")||_f54.getPropertyValue("-ms-border-radius")||_f54.getPropertyValue("-o-border-radius");
if(_f4f){
this.domNode.style.borderRadius=_f4f;
if(dojo.isWebKit){
this.domNode.style.WebkitBorderRadius=_f4f;
}else{
if(dojo.isFF){
this.domNode.style.MozBorderRadius=_f4f;
}
}
}else{
this.domNode.style.borderTopLeftRadius=_f54.getPropertyValue("border-top-left-radius");
this.domNode.style.borderTopRightRadius=_f54.getPropertyValue("border-top-right-radius");
this.domNode.style.borderBottomLeftRadius=_f54.getPropertyValue("border-bottom-left-radius");
this.domNode.style.borderBottomRightRadius=_f54.getPropertyValue("border-bottom-right-radius");
}
}
var _f55=node.style.zIndex||0;
while(node.parentNode&&node.parentNode.tagName!="BODY"){
node=node.parentNode;
if(node.style.zIndex){
_f55=Math.max(_f55,node.style.zIndex);
}
}
this.domNode.style.zIndex=_f55+1;
}
}
},_getWidgetToCover:function(){
if(this.widgetToCover){
if(dojo.isString(this.widgetToCover)){
this.widgetToCover=this.owner.getValueById(this.widgetToCover);
}
}
return this.widgetToCover;
},renderBounds:function(){
this._getWidgetToCover();
if(this.widgetToCover){
try{
var _f56=this.widgetToCover.domNode.parentNode;
if(this.domNode.parentNode!=_f56){
_f56.appendChild(this.domNode);
}
var b=dojo.clone(this.widgetToCover.bounds);
b.l-=this.widgetToCover.borderExtents.l;
b.r+=this.widgetToCover.borderExtents.r;
b.w=b.r-b.l;
b.t-=this.widgetToCover.borderExtents.t;
b.b+=this.widgetToCover.borderExtents.b;
b.h=b.b-b.t;
this.setBounds(b);
wm.Control.prototype.renderBounds.call(this);
}
catch(e){
}
}
}});
}
dojo.i18n._preloadLocalizations("dojo.nls.lib_build_mobile",["ROOT","ar","ca","cs","da","de","de-de","el","en","en-au","en-gb","en-us","es","es-es","fi","fi-fi","fr","fr-fr","he","he-il","hu","it","it-it","ja","ja-jp","ko","ko-kr","nb","nl","nl-nl","pl","pt","pt-br","pt-pt","ru","sk","sl","sv","th","tr","xx","zh","zh-cn","zh-tw"]);
