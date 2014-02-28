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

dojo.provide("wm.compressed.wm_dojo_grid");
if(!dojo._hasResource["dijit._Container"]){
dojo._hasResource["dijit._Container"]=true;
dojo.provide("dijit._Container");
dojo.declare("dijit._Container",null,{isContainer:true,buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},addChild:function(_1,_2){
var _3=this.containerNode;
if(_2&&typeof _2=="number"){
var _4=this.getChildren();
if(_4&&_4.length>=_2){
_3=_4[_2-1].domNode;
_2="after";
}
}
dojo.place(_1.domNode,_3,_2);
if(this._started&&!_1._started){
_1.startup();
}
},removeChild:function(_5){
if(typeof _5=="number"){
_5=this.getChildren()[_5];
}
if(_5){
var _6=_5.domNode;
if(_6&&_6.parentNode){
_6.parentNode.removeChild(_6);
}
}
},hasChildren:function(){
return this.getChildren().length>0;
},destroyDescendants:function(_7){
dojo.forEach(this.getChildren(),function(_8){
_8.destroyRecursive(_7);
});
},_getSiblingOfChild:function(_9,_a){
var _b=_9.domNode,_c=(_a>0?"nextSibling":"previousSibling");
do{
_b=_b[_c];
}while(_b&&(_b.nodeType!=1||!dijit.byNode(_b)));
return _b&&dijit.byNode(_b);
},getIndexOfChild:function(_d){
return dojo.indexOf(this.getChildren(),_d);
},startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_e){
_e.startup();
});
this.inherited(arguments);
}});
}
if(!dojo._hasResource["dijit._Contained"]){
dojo._hasResource["dijit._Contained"]=true;
dojo.provide("dijit._Contained");
dojo.declare("dijit._Contained",null,{getParent:function(){
var _f=dijit.getEnclosingWidget(this.domNode.parentNode);
return _f&&_f.isContainer?_f:null;
},_getSibling:function(_10){
var _11=this.domNode;
do{
_11=_11[_10+"Sibling"];
}while(_11&&_11.nodeType!=1);
return _11&&dijit.byNode(_11);
},getPreviousSibling:function(){
return this._getSibling("previous");
},getNextSibling:function(){
return this._getSibling("next");
},getIndexInParent:function(){
var p=this.getParent();
if(!p||!p.getIndexOfChild){
return -1;
}
return p.getIndexOfChild(this);
}});
}
if(!dojo._hasResource["dijit.layout._LayoutWidget"]){
dojo._hasResource["dijit.layout._LayoutWidget"]=true;
dojo.provide("dijit.layout._LayoutWidget");
dojo.declare("dijit.layout._LayoutWidget",[dijit._Widget,dijit._Container,dijit._Contained],{baseClass:"dijitLayoutContainer",isLayoutContainer:true,buildRendering:function(){
this.inherited(arguments);
dojo.addClass(this.domNode,"dijitContainer");
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
var _12=this.getParent&&this.getParent();
if(!(_12&&_12.isLayoutContainer)){
this.resize();
this.connect(dojo.isIE?this.domNode:dojo.global,"onresize",function(){
this.resize();
});
}
},resize:function(_13,_14){
var _15=this.domNode;
if(_13){
dojo.marginBox(_15,_13);
if(_13.t){
_15.style.top=_13.t+"px";
}
if(_13.l){
_15.style.left=_13.l+"px";
}
}
var mb=_14||{};
dojo.mixin(mb,_13||{});
if(!("h" in mb)||!("w" in mb)){
mb=dojo.mixin(dojo.marginBox(_15),mb);
}
var cs=dojo.getComputedStyle(_15);
var me=dojo._getMarginExtents(_15,cs);
var be=dojo._getBorderExtents(_15,cs);
var bb=(this._borderBox={w:mb.w-(me.w+be.w),h:mb.h-(me.h+be.h)});
var pe=dojo._getPadExtents(_15,cs);
this._contentBox={l:dojo._toPixelValue(_15,cs.paddingLeft),t:dojo._toPixelValue(_15,cs.paddingTop),w:bb.w-pe.w,h:bb.h-pe.h};
this.layout();
},layout:function(){
},_setupChild:function(_16){
var cls=this.baseClass+"-child "+(_16.baseClass?this.baseClass+"-"+_16.baseClass:"");
dojo.addClass(_16.domNode,cls);
},addChild:function(_17,_18){
this.inherited(arguments);
if(this._started){
this._setupChild(_17);
}
},removeChild:function(_19){
var cls=this.baseClass+"-child"+(_19.baseClass?" "+this.baseClass+"-"+_19.baseClass:"");
dojo.removeClass(_19.domNode,cls);
this.inherited(arguments);
}});
dijit.layout.marginBox2contentBox=function(_1a,mb){
var cs=dojo.getComputedStyle(_1a);
var me=dojo._getMarginExtents(_1a,cs);
var pb=dojo._getPadBorderExtents(_1a,cs);
return {l:dojo._toPixelValue(_1a,cs.paddingLeft),t:dojo._toPixelValue(_1a,cs.paddingTop),w:mb.w-(me.w+pb.w),h:mb.h-(me.h+pb.h)};
};
(function(){
var _1b=function(_1c){
return _1c.substring(0,1).toUpperCase()+_1c.substring(1);
};
var _1d=function(_1e,dim){
var _1f=_1e.resize?_1e.resize(dim):dojo.marginBox(_1e.domNode,dim);
if(_1f){
dojo.mixin(_1e,_1f);
}else{
dojo.mixin(_1e,dojo.marginBox(_1e.domNode));
dojo.mixin(_1e,dim);
}
};
dijit.layout.layoutChildren=function(_20,dim,_21,_22,_23){
dim=dojo.mixin({},dim);
dojo.addClass(_20,"dijitLayoutContainer");
_21=dojo.filter(_21,function(_24){
return _24.region!="center"&&_24.layoutAlign!="client";
}).concat(dojo.filter(_21,function(_25){
return _25.region=="center"||_25.layoutAlign=="client";
}));
dojo.forEach(_21,function(_26){
var elm=_26.domNode,pos=(_26.region||_26.layoutAlign);
var _27=elm.style;
_27.left=dim.l+"px";
_27.top=dim.t+"px";
_27.position="absolute";
dojo.addClass(elm,"dijitAlign"+_1b(pos));
var _28={};
if(_22&&_22==_26.id){
_28[_26.region=="top"||_26.region=="bottom"?"h":"w"]=_23;
}
if(pos=="top"||pos=="bottom"){
_28.w=dim.w;
_1d(_26,_28);
dim.h-=_26.h;
if(pos=="top"){
dim.t+=_26.h;
}else{
_27.top=dim.t+dim.h+"px";
}
}else{
if(pos=="left"||pos=="right"){
_28.h=dim.h;
_1d(_26,_28);
dim.w-=_26.w;
if(pos=="left"){
dim.l+=_26.w;
}else{
_27.left=dim.l+dim.w+"px";
}
}else{
if(pos=="client"||pos=="center"){
_1d(_26,dim);
}
}
}
});
};
})();
}
if(!dojo._hasResource["dijit.dijit"]){
dojo._hasResource["dijit.dijit"]=true;
dojo.provide("dijit.dijit");
}
if(!dojo._hasResource["dijit._KeyNavContainer"]){
dojo._hasResource["dijit._KeyNavContainer"]=true;
dojo.provide("dijit._KeyNavContainer");
dojo.declare("dijit._KeyNavContainer",dijit._Container,{tabIndex:"0",_keyNavCodes:{},connectKeyNavHandlers:function(_29,_2a){
var _2b=(this._keyNavCodes={});
var _2c=dojo.hitch(this,this.focusPrev);
var _2d=dojo.hitch(this,this.focusNext);
dojo.forEach(_29,function(_2e){
_2b[_2e]=_2c;
});
dojo.forEach(_2a,function(_2f){
_2b[_2f]=_2d;
});
_2b[dojo.keys.HOME]=dojo.hitch(this,"focusFirstChild");
_2b[dojo.keys.END]=dojo.hitch(this,"focusLastChild");
this.connect(this.domNode,"onkeypress","_onContainerKeypress");
this.connect(this.domNode,"onfocus","_onContainerFocus");
},startupKeyNavChildren:function(){
dojo.forEach(this.getChildren(),dojo.hitch(this,"_startupChild"));
},addChild:function(_30,_31){
dijit._KeyNavContainer.superclass.addChild.apply(this,arguments);
this._startupChild(_30);
},focus:function(){
this.focusFirstChild();
},focusFirstChild:function(){
var _32=this._getFirstFocusableChild();
if(_32){
this.focusChild(_32);
}
},focusLastChild:function(){
var _33=this._getLastFocusableChild();
if(_33){
this.focusChild(_33);
}
},focusNext:function(){
var _34=this._getNextFocusableChild(this.focusedChild,1);
this.focusChild(_34);
},focusPrev:function(){
var _35=this._getNextFocusableChild(this.focusedChild,-1);
this.focusChild(_35,true);
},focusChild:function(_36,_37){
if(this.focusedChild&&_36!==this.focusedChild){
this._onChildBlur(this.focusedChild);
}
_36.set("tabIndex",this.tabIndex);
_36.focus(_37?"end":"start");
this._set("focusedChild",_36);
},_startupChild:function(_38){
_38.set("tabIndex","-1");
this.connect(_38,"_onFocus",function(){
_38.set("tabIndex",this.tabIndex);
});
this.connect(_38,"_onBlur",function(){
_38.set("tabIndex","-1");
});
},_onContainerFocus:function(evt){
if(evt.target!==this.domNode){
return;
}
this.focusFirstChild();
dojo.attr(this.domNode,"tabIndex","-1");
},_onBlur:function(evt){
if(this.tabIndex){
dojo.attr(this.domNode,"tabIndex",this.tabIndex);
}
this.inherited(arguments);
},_onContainerKeypress:function(evt){
if(evt.ctrlKey||evt.altKey){
return;
}
var _39=this._keyNavCodes[evt.charOrCode];
if(_39){
_39();
dojo.stopEvent(evt);
}
},_onChildBlur:function(_3a){
},_getFirstFocusableChild:function(){
return this._getNextFocusableChild(null,1);
},_getLastFocusableChild:function(){
return this._getNextFocusableChild(null,-1);
},_getNextFocusableChild:function(_3b,dir){
if(_3b){
_3b=this._getSiblingOfChild(_3b,dir);
}
var _3c=this.getChildren();
for(var i=0;i<_3c.length;i++){
if(!_3b){
_3b=_3c[(dir>0)?0:(_3c.length-1)];
}
if(_3b.isFocusable()){
return _3b;
}
_3b=this._getSiblingOfChild(_3b,dir);
}
return null;
}});
}
if(!dojo._hasResource["dijit.MenuItem"]){
dojo._hasResource["dijit.MenuItem"]=true;
dojo.provide("dijit.MenuItem");
dojo.declare("dijit.MenuItem",[dijit._Widget,dijit._Templated,dijit._Contained,dijit._CssStateMixin],{templateString:dojo.cache("dijit","templates/MenuItem.html","<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\r\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\r\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\r\n\t<!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 \r\n\t      WaveMaker: removed class which caused vertical menus to show icon space even when no icon was specified. -->\r\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon\" dojoAttachPoint=\"iconNode\"/>\r\n\t</td>\r\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode\"></td>\r\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\r\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">\r\n\t\t<div dojoAttachPoint=\"arrowWrapper\" style=\"visibility: hidden\">\r\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\"/>\r\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\r\n\t\t</div>\r\n\t</td>\r\n</tr>\r\n"),attributeMap:dojo.delegate(dijit._Widget.prototype.attributeMap,{label:{node:"containerNode",type:"innerHTML"},iconClass:{node:"iconNode",type:"class"}}),baseClass:"dijitMenuItem",label:"",iconClass:"",accelKey:"",disabled:false,_fillContent:function(_3d){
if(_3d&&!("label" in this.params)){
this.set("label",_3d.innerHTML);
}
},buildRendering:function(){
this.inherited(arguments);
var _3e=this.id+"_text";
dojo.attr(this.containerNode,"id",_3e);
if(this.accelKeyNode){
dojo.attr(this.accelKeyNode,"id",this.id+"_accel");
_3e+=" "+this.id+"_accel";
}
dijit.setWaiState(this.domNode,"labelledby",_3e);
dojo.setSelectable(this.domNode,false);
},_onHover:function(){
this.getParent().onItemHover(this);
},_onUnhover:function(){
this.getParent().onItemUnhover(this);
this._set("hovering",false);
},_onClick:function(evt){
this.getParent().onItemClick(this,evt);
dojo.stopEvent(evt);
},onClick:function(evt){
},focus:function(){
try{
if(dojo.isIE==8){
this.containerNode.focus();
}
dijit.focus(this.focusNode);
}
catch(e){
}
},_onFocus:function(){
this._setSelected(true);
this.getParent()._onItemFocus(this);
this.inherited(arguments);
},_setSelected:function(_3f){
dojo.toggleClass(this.domNode,"dijitMenuItemSelected",_3f);
},setLabel:function(_40){
dojo.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0");
this.set("label",_40);
},setDisabled:function(_41){
dojo.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0");
this.set("disabled",_41);
},_setDisabledAttr:function(_42){
dijit.setWaiState(this.focusNode,"disabled",_42?"true":"false");
this._set("disabled",_42);
},_setAccelKeyAttr:function(_43){
this.accelKeyNode.style.display=_43?"":"none";
this.accelKeyNode.innerHTML=_43;
dojo.attr(this.containerNode,"colSpan",_43?"1":"2");
this._set("accelKey",_43);
}});
}
if(!dojo._hasResource["dijit.PopupMenuItem"]){
dojo._hasResource["dijit.PopupMenuItem"]=true;
dojo.provide("dijit.PopupMenuItem");
dojo.declare("dijit.PopupMenuItem",dijit.MenuItem,{_fillContent:function(){
if(this.srcNodeRef){
var _44=dojo.query("*",this.srcNodeRef);
dijit.PopupMenuItem.superclass._fillContent.call(this,_44[0]);
this.dropDownContainer=this.srcNodeRef;
}
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
if(!this.popup){
var _45=dojo.query("[widgetId]",this.dropDownContainer)[0];
this.popup=dijit.byNode(_45);
}
dojo.body().appendChild(this.popup.domNode);
this.popup.startup();
this.popup.domNode.style.display="none";
if(this.arrowWrapper){
dojo.style(this.arrowWrapper,"visibility","");
}
dijit.setWaiState(this.focusNode,"haspopup","true");
},destroyDescendants:function(){
if(this.popup){
if(!this.popup._destroyed){
this.popup.destroyRecursive();
}
delete this.popup;
}
this.inherited(arguments);
}});
}
if(!dojo._hasResource["dijit.CheckedMenuItem"]){
dojo._hasResource["dijit.CheckedMenuItem"]=true;
dojo.provide("dijit.CheckedMenuItem");
dojo.declare("dijit.CheckedMenuItem",dijit.MenuItem,{templateString:dojo.cache("dijit","templates/CheckedMenuItem.html","<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitemcheckbox\" tabIndex=\"-1\"\r\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\r\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\r\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\r\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\r\n\t</td>\r\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode,labelNode\"></td>\r\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\r\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&nbsp;</td>\r\n</tr>\r\n"),checked:false,_setCheckedAttr:function(_46){
dojo.toggleClass(this.domNode,"dijitCheckedMenuItemChecked",_46);
dijit.setWaiState(this.domNode,"checked",_46);
this._set("checked",_46);
},onChange:function(_47){
},_onClick:function(e){
if(!this.disabled){
this.set("checked",!this.checked);
this.onChange(this.checked);
}
this.inherited(arguments);
}});
}
if(!dojo._hasResource["dijit.MenuSeparator"]){
dojo._hasResource["dijit.MenuSeparator"]=true;
dojo.provide("dijit.MenuSeparator");
dojo.declare("dijit.MenuSeparator",[dijit._Widget,dijit._Templated,dijit._Contained],{templateString:dojo.cache("dijit","templates/MenuSeparator.html","<tr class=\"dijitMenuSeparator\">\r\n\t<td class=\"dijitMenuSeparatorIconCell\">\r\n\t\t<div class=\"dijitMenuSeparatorTop\"></div>\r\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\r\n\t</td>\r\n\t<td colspan=\"3\" class=\"dijitMenuSeparatorLabelCell\">\r\n\t\t<div class=\"dijitMenuSeparatorTop dijitMenuSeparatorLabel\"></div>\r\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\r\n\t</td>\r\n</tr>\r\n"),buildRendering:function(){
this.inherited(arguments);
dojo.setSelectable(this.domNode,false);
},isFocusable:function(){
return false;
}});
}
if(!dojo._hasResource["dijit.Menu"]){
dojo._hasResource["dijit.Menu"]=true;
dojo.provide("dijit.Menu");
dojo.declare("dijit._MenuBase",[dijit._Widget,dijit._Templated,dijit._KeyNavContainer],{parentMenu:null,popupDelay:500,startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_48){
_48.startup();
});
this.startupKeyNavChildren();
this.inherited(arguments);
},onExecute:function(){
},onCancel:function(_49){
},_moveToPopup:function(evt){
if(this.focusedChild&&this.focusedChild.popup&&!this.focusedChild.disabled){
this.focusedChild._onClick(evt);
}else{
var _4a=this._getTopMenu();
if(_4a&&_4a._isMenuBar){
_4a.focusNext();
}
}
},_onPopupHover:function(evt){
if(this.currentPopup&&this.currentPopup._pendingClose_timer){
var _4b=this.currentPopup.parentMenu;
if(_4b.focusedChild){
_4b.focusedChild._setSelected(false);
}
_4b.focusedChild=this.currentPopup.from_item;
_4b.focusedChild._setSelected(true);
this._stopPendingCloseTimer(this.currentPopup);
}
},onItemHover:function(_4c){
if(this.isActive||this.openOnHover){
this.focusChild(_4c);
if(this.openOnHover||(this.focusedChild.popup&&!this.focusedChild.disabled&&!this.hover_timer)){
this.hover_timer=setTimeout(dojo.hitch(this,"_openPopup"),this.popupDelay);
}
}
if(this.focusedChild){
this.focusChild(_4c);
}
this._hoveredChild=_4c;
},_onChildBlur:function(_4d){
this._stopPopupTimer();
_4d._setSelected(false);
var _4e=_4d.popup;
if(_4e){
this._stopPendingCloseTimer(_4e);
_4e._pendingClose_timer=setTimeout(function(){
_4e._pendingClose_timer=null;
if(_4e.parentMenu){
_4e.parentMenu.currentPopup=null;
}
dijit.popup.close(_4e);
},this.popupDelay);
}
},onItemUnhover:function(_4f){
if(this.isActive){
this._stopPopupTimer();
}
if(this._hoveredChild==_4f){
this._hoveredChild=null;
}
},_stopPopupTimer:function(){
if(this.hover_timer){
clearTimeout(this.hover_timer);
this.hover_timer=null;
}
},_stopPendingCloseTimer:function(_50){
if(_50._pendingClose_timer){
clearTimeout(_50._pendingClose_timer);
_50._pendingClose_timer=null;
}
},_stopFocusTimer:function(){
if(this._focus_timer){
clearTimeout(this._focus_timer);
this._focus_timer=null;
}
},_getTopMenu:function(){
for(var top=this;top.parentMenu;top=top.parentMenu){
}
return top;
},onItemClick:function(_51,evt){
if(typeof this.isShowingNow=="undefined"){
this._markActive();
}
this.focusChild(_51);
if(_51.disabled){
return false;
}
if(_51.popup){
this._openPopup();
}else{
this.onExecute();
_51.onClick(evt);
}
},_openPopup:function(){
this._stopPopupTimer();
var _52=this.focusedChild;
if(!_52){
return;
}
var _53=_52.popup;
if(_53.isShowingNow){
return;
}
if(this.currentPopup){
this._stopPendingCloseTimer(this.currentPopup);
dijit.popup.close(this.currentPopup);
}
_53.parentMenu=this;
_53.from_item=_52;
var _54=this;
dijit.popup.open({parent:this,popup:_53,around:_52.domNode,orient:this._orient||(this.isLeftToRight()?{"TR":"TL","TL":"TR","BR":"BL","BL":"BR"}:{"TL":"TR","TR":"TL","BL":"BR","BR":"BL"}),onCancel:function(){
_54.focusChild(_52);
_54._cleanUp();
_52._setSelected(true);
_54.focusedChild=_52;
},onExecute:dojo.hitch(this,"_cleanUp")});
this.currentPopup=_53;
_53.connect(_53.domNode,"onmouseenter",dojo.hitch(_54,"_onPopupHover"));
if(_53.focus){
_53._focus_timer=setTimeout(dojo.hitch(_53,function(){
this._focus_timer=null;
this.focus();
}),0);
}
},_markActive:function(){
this.isActive=true;
dojo.replaceClass(this.domNode,"dijitMenuActive","dijitMenuPassive");
},onOpen:function(e){
this.isShowingNow=true;
this._markActive();
},_markInactive:function(){
this.isActive=false;
dojo.replaceClass(this.domNode,"dijitMenuPassive","dijitMenuActive");
},onClose:function(){
this._stopFocusTimer();
this._markInactive();
this.isShowingNow=false;
this.parentMenu=null;
},_closeChild:function(){
this._stopPopupTimer();
var _55=this.focusedChild&&this.focusedChild.from_item;
if(this.currentPopup){
if(dijit._curFocus&&dojo.isDescendant(dijit._curFocus,this.currentPopup.domNode)){
this.focusedChild.focusNode.focus();
}
dijit.popup.close(this.currentPopup);
this.currentPopup=null;
}
if(this.focusedChild){
this.focusedChild._setSelected(false);
this.focusedChild._onUnhover();
this.focusedChild=null;
}
},_onItemFocus:function(_56){
if(this._hoveredChild&&this._hoveredChild!=_56){
this._hoveredChild._onUnhover();
}
},_onBlur:function(){
this._cleanUp();
this.inherited(arguments);
},_cleanUp:function(){
this._closeChild();
if(typeof this.isShowingNow=="undefined"){
this._markInactive();
}
}});
dojo.declare("dijit.Menu",dijit._MenuBase,{constructor:function(){
this._bindings=[];
},templateString:dojo.cache("dijit","templates/Menu.html","<table class=\"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable\" role=\"menu\" tabIndex=\"${tabIndex}\" dojoAttachEvent=\"onkeypress:_onKeyPress\" cellspacing=\"0\">\r\n  <tbody class=\"dijitReset\" dojoAttachPoint=\"containerNode\"></tbody>\r\n</table>\r\n"),baseClass:"dijitMenu",targetNodeIds:[],contextMenuForWindow:false,leftClickToOpen:false,refocus:true,postCreate:function(){
if(this.contextMenuForWindow){
this.bindDomNode(dojo.body());
}else{
dojo.forEach(this.targetNodeIds,this.bindDomNode,this);
}
var k=dojo.keys,l=this.isLeftToRight();
this._openSubMenuKey=l?k.RIGHT_ARROW:k.LEFT_ARROW;
this._closeSubMenuKey=l?k.LEFT_ARROW:k.RIGHT_ARROW;
this.connectKeyNavHandlers([k.UP_ARROW],[k.DOWN_ARROW]);
},_onKeyPress:function(evt){
if(evt.ctrlKey||evt.altKey){
return;
}
switch(evt.charOrCode){
case this._openSubMenuKey:
this._moveToPopup(evt);
dojo.stopEvent(evt);
break;
case this._closeSubMenuKey:
if(this.parentMenu){
if(this.parentMenu._isMenuBar){
this.parentMenu.focusPrev();
}else{
this.onCancel(false);
}
}else{
dojo.stopEvent(evt);
}
break;
}
},_iframeContentWindow:function(_57){
var win=dojo.window.get(this._iframeContentDocument(_57))||this._iframeContentDocument(_57)["__parent__"]||(_57.name&&dojo.doc.frames[_57.name])||null;
return win;
},_iframeContentDocument:function(_58){
var doc=_58.contentDocument||(_58.contentWindow&&_58.contentWindow.document)||(_58.name&&dojo.doc.frames[_58.name]&&dojo.doc.frames[_58.name].document)||null;
return doc;
},bindDomNode:function(_59){
_59=dojo.byId(_59);
var cn;
if(_59.tagName.toLowerCase()=="iframe"){
var _5a=_59,win=this._iframeContentWindow(_5a);
cn=dojo.withGlobal(win,dojo.body);
}else{
cn=(_59==dojo.body()?dojo.doc.documentElement:_59);
}
var _5b={node:_59,iframe:_5a};
dojo.attr(_59,"_dijitMenu"+this.id,this._bindings.push(_5b));
var _5c=dojo.hitch(this,function(cn){
return [dojo.connect(cn,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(evt){
dojo.stopEvent(evt);
this._scheduleOpen(evt.target,_5a,{x:evt.pageX,y:evt.pageY});
}),dojo.connect(cn,"onkeydown",this,function(evt){
if(evt.shiftKey&&evt.keyCode==dojo.keys.F10){
dojo.stopEvent(evt);
this._scheduleOpen(evt.target,_5a);
}
})];
});
_5b.connects=cn?_5c(cn):[];
if(_5a){
_5b.onloadHandler=dojo.hitch(this,function(){
var win=this._iframeContentWindow(_5a);
cn=dojo.withGlobal(win,dojo.body);
_5b.connects=_5c(cn);
});
if(_5a.addEventListener){
_5a.addEventListener("load",_5b.onloadHandler,false);
}else{
_5a.attachEvent("onload",_5b.onloadHandler);
}
}
},unBindDomNode:function(_5d){
var _5e;
try{
_5e=dojo.byId(_5d);
}
catch(e){
return;
}
var _5f="_dijitMenu"+this.id;
if(_5e&&dojo.hasAttr(_5e,_5f)){
var bid=dojo.attr(_5e,_5f)-1,b=this._bindings[bid];
dojo.forEach(b.connects,dojo.disconnect);
var _60=b.iframe;
if(_60){
if(_60.removeEventListener){
_60.removeEventListener("load",b.onloadHandler,false);
}else{
_60.detachEvent("onload",b.onloadHandler);
}
}
dojo.removeAttr(_5e,_5f);
delete this._bindings[bid];
}
},_scheduleOpen:function(_61,_62,_63){
if(!this._openTimer){
this._openTimer=setTimeout(dojo.hitch(this,function(){
delete this._openTimer;
this._openMyself({target:_61,iframe:_62,coords:_63});
}),1);
}
},_openMyself:function(_64){
var _65=_64.target,_66=_64.iframe,_67=_64.coords;
if(_67){
if(_66){
var od=_65.ownerDocument,ifc=dojo.position(_66,true),win=this._iframeContentWindow(_66),_68=dojo.withGlobal(win,"_docScroll",dojo);
var cs=dojo.getComputedStyle(_66),tp=dojo._toPixelValue,_69=(dojo.isIE&&dojo.isQuirks?0:tp(_66,cs.paddingLeft))+(dojo.isIE&&dojo.isQuirks?tp(_66,cs.borderLeftWidth):0),top=(dojo.isIE&&dojo.isQuirks?0:tp(_66,cs.paddingTop))+(dojo.isIE&&dojo.isQuirks?tp(_66,cs.borderTopWidth):0);
_67.x+=ifc.x+_69-_68.x;
_67.y+=ifc.y+top-_68.y;
}
}else{
_67=dojo.position(_65,true);
_67.x+=10;
_67.y+=10;
}
var _6a=this;
var _6b=dijit.getFocus(this);
function _6c(){
if(_6a.refocus){
dijit.focus(_6b);
}
dijit.popup.close(_6a);
};
dijit.popup.open({popup:this,x:_67.x,y:_67.y,onExecute:_6c,onCancel:_6c,orient:this.isLeftToRight()?"L":"R"});
this.focus();
this._onBlur=function(){
this.inherited("_onBlur",arguments);
dijit.popup.close(this);
};
},uninitialize:function(){
dojo.forEach(this._bindings,function(b){
if(b){
this.unBindDomNode(b.node);
}
},this);
this.inherited(arguments);
}});
}
if(!dojo._hasResource["dojox.html.metrics"]){
dojo._hasResource["dojox.html.metrics"]=true;
dojo.provide("dojox.html.metrics");
(function(){
var dhm=dojox.html.metrics;
dhm.getFontMeasurements=function(){
var _6d={"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,"small":0,"medium":0,"large":0,"x-large":0,"xx-large":0};
if(dojo.isIE){
dojo.doc.documentElement.style.fontSize="100%";
}
var div=dojo.doc.createElement("div");
var ds=div.style;
ds.position="absolute";
ds.left="-100px";
ds.top="0";
ds.width="30px";
ds.height="1000em";
ds.borderWidth="0";
ds.margin="0";
ds.padding="0";
ds.outline="0";
ds.lineHeight="1";
ds.overflow="hidden";
dojo.body().appendChild(div);
for(var p in _6d){
ds.fontSize=p;
_6d[p]=Math.round(div.offsetHeight*12/16)*16/12/1000;
}
dojo.body().removeChild(div);
div=null;
return _6d;
};
var _6e=null;
dhm.getCachedFontMeasurements=function(_6f){
if(_6f||!_6e){
_6e=dhm.getFontMeasurements();
}
return _6e;
};
var _70=null,_71={};
dhm.getTextBox=function(_72,_73,_74){
var m,s;
if(!_70){
m=_70=dojo.doc.createElement("div");
var c=dojo.doc.createElement("div");
c.appendChild(m);
s=c.style;
s.overflow="scroll";
s.position="absolute";
s.left="0px";
s.top="-10000px";
s.width="1px";
s.height="1px";
s.visibility="hidden";
s.borderWidth="0";
s.margin="0";
s.padding="0";
s.outline="0";
dojo.body().appendChild(c);
}else{
m=_70;
}
m.className="";
s=m.style;
s.borderWidth="0";
s.margin="0";
s.padding="0";
s.outline="0";
if(arguments.length>1&&_73){
for(var i in _73){
if(i in _71){
continue;
}
s[i]=_73[i];
}
}
if(arguments.length>2&&_74){
m.className=_74;
}
m.innerHTML=_72;
var box=dojo.position(m);
box.w=m.parentNode.scrollWidth;
return box;
};
var _75={w:16,h:16};
dhm.getScrollbar=function(){
return {w:_75.w,h:_75.h};
};
dhm._fontResizeNode=null;
dhm.initOnFontResize=function(_76){
var f=dhm._fontResizeNode=dojo.doc.createElement("iframe");
var fs=f.style;
fs.position="absolute";
fs.width="5em";
fs.height="10em";
fs.top="-10000px";
if(dojo.isIE){
f.onreadystatechange=function(){
if(f.contentWindow.document.readyState=="complete"){
f.onresize=f.contentWindow.parent[dojox._scopeName].html.metrics._fontresize;
}
};
}else{
f.onload=function(){
f.contentWindow.onresize=f.contentWindow.parent[dojox._scopeName].html.metrics._fontresize;
};
}
f.setAttribute("src","javascript:'<html><head><script>if(\"loadFirebugConsole\" in window){window.loadFirebugConsole();}</script></head><body></body></html>'");
dojo.body().appendChild(f);
dhm.initOnFontResize=function(){
};
};
dhm.onFontResize=function(){
};
dhm._fontresize=function(){
dhm.onFontResize();
};
dojo.addOnUnload(function(){
var f=dhm._fontResizeNode;
if(f){
if(dojo.isIE&&f.onresize){
f.onresize=null;
}else{
if(f.contentWindow&&f.contentWindow.onresize){
f.contentWindow.onresize=null;
}
}
dhm._fontResizeNode=null;
}
});
dojo.addOnLoad(function(){
try{
var n=dojo.doc.createElement("div");
n.style.cssText="top:0;left:0;width:100px;height:100px;overflow:scroll;position:absolute;visibility:hidden;";
dojo.body().appendChild(n);
_75.w=n.offsetWidth-n.clientWidth;
_75.h=n.offsetHeight-n.clientHeight;
dojo.body().removeChild(n);
delete n;
}
catch(e){
}
if("fontSizeWatch" in dojo.config&&!!dojo.config.fontSizeWatch){
dhm.initOnFontResize();
}
});
})();
}
if(!dojo._hasResource["dojox.grid.util"]){
dojo._hasResource["dojox.grid.util"]=true;
dojo.provide("dojox.grid.util");
(function(){
var dgu=dojox.grid.util;
dgu.na="...";
dgu.rowIndexTag="gridRowIndex";
dgu.gridViewTag="gridView";
dgu.fire=function(ob,ev,_77){
var fn=ob&&ev&&ob[ev];
return fn&&(_77?fn.apply(ob,_77):ob[ev]());
};
dgu.setStyleHeightPx=function(_78,_79){
if(_79>=0){
var s=_78.style;
var v=_79+"px";
if(_78&&s["height"]!=v){
s["height"]=v;
}
}
};
dgu.mouseEvents=["mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"];
dgu.keyEvents=["keyup","keydown","keypress"];
dgu.funnelEvents=function(_7a,_7b,_7c,_7d){
var _7e=(_7d?_7d:dgu.mouseEvents.concat(dgu.keyEvents));
for(var i=0,l=_7e.length;i<l;i++){
_7b.connect(_7a,"on"+_7e[i],_7c);
}
};
dgu.removeNode=function(_7f){
_7f=dojo.byId(_7f);
_7f&&_7f.parentNode&&_7f.parentNode.removeChild(_7f);
return _7f;
};
dgu.arrayCompare=function(inA,inB){
for(var i=0,l=inA.length;i<l;i++){
if(inA[i]!=inB[i]){
return false;
}
}
return (inA.length==inB.length);
};
dgu.arrayInsert=function(_80,_81,_82){
if(_80.length<=_81){
_80[_81]=_82;
}else{
_80.splice(_81,0,_82);
}
};
dgu.arrayRemove=function(_83,_84){
_83.splice(_84,1);
};
dgu.arraySwap=function(_85,inI,inJ){
var _86=_85[inI];
_85[inI]=_85[inJ];
_85[inJ]=_86;
};
})();
}
if(!dojo._hasResource["dojox.grid._Scroller"]){
dojo._hasResource["dojox.grid._Scroller"]=true;
dojo.provide("dojox.grid._Scroller");
(function(){
var _87=function(_88){
var i=0,n,p=_88.parentNode;
while((n=p.childNodes[i++])){
if(n==_88){
return i-1;
}
}
return -1;
};
var _89=function(_8a){
if(!_8a){
return;
}
var _8b=function(inW){
return inW.domNode&&dojo.isDescendant(inW.domNode,_8a,true);
};
var ws=dijit.registry.filter(_8b);
for(var i=0,w;(w=ws[i]);i++){
w.destroy();
}
delete ws;
};
var _8c=function(_8d){
var _8e=dojo.byId(_8d);
return (_8e&&_8e.tagName?_8e.tagName.toLowerCase():"");
};
var _8f=function(_90,_91){
var _92=[];
var i=0,n;
while((n=_90.childNodes[i])){
i++;
if(_8c(n)==_91){
_92.push(n);
}
}
return _92;
};
var _93=function(_94){
return _8f(_94,"div");
};
dojo.declare("dojox.grid._Scroller",null,{constructor:function(_95){
this.setContentNodes(_95);
this.pageHeights=[];
this.pageNodes=[];
this.stack=[];
},rowCount:0,defaultRowHeight:32,keepRows:100,contentNode:null,scrollboxNode:null,defaultPageHeight:0,keepPages:10,pageCount:0,windowHeight:0,firstVisibleRow:0,lastVisibleRow:0,averageRowHeight:0,page:0,pageTop:0,init:function(_96,_97,_98){
switch(arguments.length){
case 3:
this.rowsPerPage=_98;
case 2:
this.keepRows=_97;
case 1:
this.rowCount=_96;
default:
break;
}
this.defaultPageHeight=this.defaultRowHeight*this.rowsPerPage;
this.pageCount=this._getPageCount(this.rowCount,this.rowsPerPage);
this.setKeepInfo(this.keepRows);
this.invalidate();
if(this.scrollboxNode){
this.scrollboxNode.scrollTop=0;
this.scroll(0);
this.scrollboxNode.onscroll=dojo.hitch(this,"onscroll");
}
},_getPageCount:function(_99,_9a){
return _99?(Math.ceil(_99/_9a)||1):0;
},destroy:function(){
this.invalidateNodes();
delete this.contentNodes;
delete this.contentNode;
delete this.scrollboxNode;
},setKeepInfo:function(_9b){
this.keepRows=_9b;
this.keepPages=!this.keepRows?this.keepPages:Math.max(Math.ceil(this.keepRows/this.rowsPerPage),2);
},setContentNodes:function(_9c){
this.contentNodes=_9c;
this.colCount=(this.contentNodes?this.contentNodes.length:0);
this.pageNodes=[];
for(var i=0;i<this.colCount;i++){
this.pageNodes[i]=[];
}
},getDefaultNodes:function(){
return this.pageNodes[0]||[];
},invalidate:function(){
this._invalidating=true;
this.invalidateNodes();
this.pageHeights=[];
this.height=(this.pageCount?(this.pageCount-1)*this.defaultPageHeight+this.calcLastPageHeight():0);
this.resize();
this._invalidating=false;
},updateRowCount:function(_9d){
this.invalidateNodes();
this.rowCount=_9d;
var _9e=this.pageCount;
if(_9e===0){
this.height=1;
}
this.pageCount=this._getPageCount(this.rowCount,this.rowsPerPage);
if(this.pageCount<_9e){
for(var i=_9e-1;i>=this.pageCount;i--){
this.height-=this.getPageHeight(i);
delete this.pageHeights[i];
}
}else{
if(this.pageCount>_9e){
this.height+=this.defaultPageHeight*(this.pageCount-_9e-1)+this.calcLastPageHeight();
}
}
this.resize();
},pageExists:function(_9f){
return Boolean(this.getDefaultPageNode(_9f));
},measurePage:function(_a0){
if(this.grid.rowHeight){
var _a1=this.grid.rowHeight+1;
return ((_a0+1)*this.rowsPerPage>this.rowCount?this.rowCount-_a0*this.rowsPerPage:this.rowsPerPage)*_a1;
}
var n=this.getDefaultPageNode(_a0);
return (n&&n.innerHTML)?n.offsetHeight:undefined;
},positionPage:function(_a2,_a3){
for(var i=0;i<this.colCount;i++){
this.pageNodes[i][_a2].style.top=_a3+"px";
}
},repositionPages:function(_a4){
var _a5=this.getDefaultNodes();
var _a6=0;
for(var i=0;i<this.stack.length;i++){
_a6=Math.max(this.stack[i],_a6);
}
var n=_a5[_a4];
var y=(n?this.getPageNodePosition(n)+this.getPageHeight(_a4):0);
for(var p=_a4+1;p<=_a6;p++){
n=_a5[p];
if(n){
if(this.getPageNodePosition(n)==y){
return;
}
this.positionPage(p,y);
}
y+=this.getPageHeight(p);
}
},installPage:function(_a7){
for(var i=0;i<this.colCount;i++){
this.contentNodes[i].appendChild(this.pageNodes[i][_a7]);
}
},preparePage:function(_a8,_a9){
var p=(_a9?this.popPage():null);
for(var i=0;i<this.colCount;i++){
var _aa=this.pageNodes[i];
var _ab=(p===null?this.createPageNode():this.invalidatePageNode(p,_aa));
_ab.pageIndex=_a8;
_aa[_a8]=_ab;
}
},renderPage:function(_ac){
var _ad=[];
var i,j;
for(i=0;i<this.colCount;i++){
_ad[i]=this.pageNodes[i][_ac];
}
for(i=0,j=_ac*this.rowsPerPage;(i<this.rowsPerPage)&&(j<this.rowCount);i++,j++){
this.renderRow(j,_ad);
}
},removePage:function(_ae){
for(var i=0,j=_ae*this.rowsPerPage;i<this.rowsPerPage;i++,j++){
this.removeRow(j);
}
},destroyPage:function(_af){
for(var i=0;i<this.colCount;i++){
var n=this.invalidatePageNode(_af,this.pageNodes[i]);
if(n){
dojo.destroy(n);
}
}
},pacify:function(_b0){
},pacifying:false,pacifyTicks:200,setPacifying:function(_b1){
if(this.pacifying!=_b1){
this.pacifying=_b1;
this.pacify(this.pacifying);
}
},startPacify:function(){
this.startPacifyTicks=new Date().getTime();
},doPacify:function(){
var _b2=(new Date().getTime()-this.startPacifyTicks)>this.pacifyTicks;
this.setPacifying(true);
this.startPacify();
return _b2;
},endPacify:function(){
this.setPacifying(false);
},resize:function(){
if(this.scrollboxNode){
this.windowHeight=this.scrollboxNode.clientHeight;
}
for(var i=0;i<this.colCount;i++){
dojox.grid.util.setStyleHeightPx(this.contentNodes[i],Math.max(1,this.height));
}
var _b3=(!this._invalidating);
if(!_b3){
var ah=this.grid.get("autoHeight");
if(typeof ah=="number"&&ah<=Math.min(this.rowsPerPage,this.rowCount)){
_b3=true;
}
}
if(_b3){
this.needPage(this.page,this.pageTop);
}
var _b4=(this.page<this.pageCount-1)?this.rowsPerPage:((this.rowCount%this.rowsPerPage)||this.rowsPerPage);
var _b5=this.getPageHeight(this.page);
this.averageRowHeight=(_b5>0&&_b4>0)?(_b5/_b4):0;
},calcLastPageHeight:function(){
if(!this.pageCount){
return 0;
}
var _b6=this.pageCount-1;
var _b7=((this.rowCount%this.rowsPerPage)||(this.rowsPerPage))*this.defaultRowHeight;
this.pageHeights[_b6]=_b7;
return _b7;
},updateContentHeight:function(_b8){
this.height+=_b8;
this.resize();
},updatePageHeight:function(_b9,_ba,_bb){
if(this.pageExists(_b9)){
var oh=this.getPageHeight(_b9);
var h=(this.measurePage(_b9));
if(h===undefined){
h=oh;
}
this.pageHeights[_b9]=h;
if(oh!=h){
this.updateContentHeight(h-oh);
var ah=this.grid.get("autoHeight");
if((typeof ah=="number"&&ah>this.rowCount)||(ah===true&&!_ba)){
if(!_bb){
this.grid.sizeChange();
}else{
var ns=this.grid.viewsNode.style;
ns.height=parseInt(ns.height)+h-oh+"px";
this.repositionPages(_b9);
}
}else{
this.repositionPages(_b9);
}
}
return h;
}
return 0;
},rowHeightChanged:function(_bc,_bd){
this.updatePageHeight(Math.floor(_bc/this.rowsPerPage),false,_bd);
},invalidateNodes:function(){
while(this.stack.length){
this.destroyPage(this.popPage());
}
},createPageNode:function(){
var p=document.createElement("div");
dojo.attr(p,"role","presentation");
p.style.position="absolute";
p.style[dojo._isBodyLtr()?"left":"right"]="0";
return p;
},getPageHeight:function(_be){
var ph=this.pageHeights[_be];
return (ph!==undefined?ph:this.defaultPageHeight);
},pushPage:function(_bf){
return this.stack.push(_bf);
},popPage:function(){
return this.stack.shift();
},findPage:function(_c0){
var i=0,h=0;
for(var ph=0;i<this.pageCount;i++,h+=ph){
ph=this.getPageHeight(i);
if(h+ph>=_c0){
break;
}
}
this.page=i;
this.pageTop=h;
},buildPage:function(_c1,_c2,_c3){
this.preparePage(_c1,_c2);
this.positionPage(_c1,_c3);
this.installPage(_c1);
this.renderPage(_c1);
this.pushPage(_c1);
},needPage:function(_c4,_c5){
var h=this.getPageHeight(_c4),oh=h;
if(!this.pageExists(_c4)){
this.buildPage(_c4,(!this.grid._autoHeight&&this.keepPages&&(this.stack.length>=this.keepPages)),_c5);
h=this.updatePageHeight(_c4,true);
}else{
this.positionPage(_c4,_c5);
}
return h;
},onscroll:function(){
this.scroll(this.scrollboxNode.scrollTop);
},scroll:function(_c6){
this.grid.scrollTop=_c6;
if(this.colCount){
this.startPacify();
this.findPage(_c6);
var h=this.height;
var b=this.getScrollBottom(_c6);
for(var p=this.page,y=this.pageTop;(p<this.pageCount)&&((b<0)||(y<b));p++){
y+=this.needPage(p,y);
}
this.firstVisibleRow=this.getFirstVisibleRow(this.page,this.pageTop,_c6);
this.lastVisibleRow=this.getLastVisibleRow(p-1,y,b);
if(h!=this.height){
this.repositionPages(p-1);
}
this.endPacify();
}
},getScrollBottom:function(_c7){
return (this.windowHeight>=0?_c7+this.windowHeight:-1);
},processNodeEvent:function(e,_c8){
var t=e.target;
while(t&&(t!=_c8)&&t.parentNode&&(t.parentNode.parentNode!=_c8)){
t=t.parentNode;
}
if(!t||!t.parentNode||(t.parentNode.parentNode!=_c8)){
return false;
}
var _c9=t.parentNode;
e.topRowIndex=_c9.pageIndex*this.rowsPerPage;
e.rowIndex=e.topRowIndex+_87(t);
e.rowTarget=t;
return true;
},processEvent:function(e){
return this.processNodeEvent(e,this.contentNode);
},renderRow:function(_ca,_cb){
},removeRow:function(_cc){
},getDefaultPageNode:function(_cd){
return this.getDefaultNodes()[_cd];
},positionPageNode:function(_ce,_cf){
},getPageNodePosition:function(_d0){
return _d0.offsetTop;
},invalidatePageNode:function(_d1,_d2){
var p=_d2[_d1];
if(p){
delete _d2[_d1];
this.removePage(_d1,p);
_89(p);
p.innerHTML="";
}
return p;
},getPageRow:function(_d3){
return _d3*this.rowsPerPage;
},getLastPageRow:function(_d4){
return Math.min(this.rowCount,this.getPageRow(_d4+1))-1;
},getFirstVisibleRow:function(_d5,_d6,_d7){
if(!this.pageExists(_d5)){
return 0;
}
var row=this.getPageRow(_d5);
var _d8=this.getDefaultNodes();
var _d9=_93(_d8[_d5]);
for(var i=0,l=_d9.length;i<l&&_d6<_d7;i++,row++){
_d6+=_d9[i].offsetHeight;
}
return (row?row-1:row);
},getLastVisibleRow:function(_da,_db,_dc){
if(!this.pageExists(_da)){
return 0;
}
var _dd=this.getDefaultNodes();
var row=this.getLastPageRow(_da);
var _de=_93(_dd[_da]);
for(var i=_de.length-1;i>=0&&_db>_dc;i--,row--){
_db-=_de[i].offsetHeight;
}
return row+1;
},findTopRow:function(_df){
var _e0=this.getDefaultNodes();
var _e1=_93(_e0[this.page]);
for(var i=0,l=_e1.length,t=this.pageTop,h;i<l;i++){
h=_e1[i].offsetHeight;
t+=h;
if(t>=_df){
this.offset=h-(t-_df);
return i+this.page*this.rowsPerPage;
}
}
return -1;
},findScrollTop:function(_e2){
var _e3=Math.floor(_e2/this.rowsPerPage);
var t=0;
var i,l;
for(i=0;i<_e3;i++){
t+=this.getPageHeight(i);
}
this.pageTop=t;
this.page=_e3;
this.needPage(_e3,this.pageTop);
var _e4=this.getDefaultNodes();
var _e5=_93(_e4[_e3]);
var r=_e2-this.rowsPerPage*_e3;
for(i=0,l=_e5.length;i<l&&i<r;i++){
t+=_e5[i].offsetHeight;
}
return t;
},dummy:0});
})();
}
if(!dojo._hasResource["dojox.grid.cells._base"]){
dojo._hasResource["dojox.grid.cells._base"]=true;
dojo.provide("dojox.grid.cells._base");
dojo.declare("dojox.grid._DeferredTextWidget",dijit._Widget,{deferred:null,_destroyOnRemove:true,postCreate:function(){
if(this.deferred){
this.deferred.addBoth(dojo.hitch(this,function(_e6){
if(this.domNode){
this.domNode.innerHTML=_e6;
}
}));
}
}});
(function(){
var _e7=function(_e8){
try{
dojox.grid.util.fire(_e8,"focus");
dojox.grid.util.fire(_e8,"select");
}
catch(e){
}
};
var _e9=function(){
setTimeout(dojo.hitch.apply(dojo,arguments),0);
};
var dgc=dojox.grid.cells;
dojo.declare("dojox.grid.cells._Base",null,{styles:"",classes:"",editable:false,alwaysEditing:false,formatter:null,defaultValue:"...",value:null,hidden:false,noresize:false,draggable:true,_valueProp:"value",_formatPending:false,constructor:function(_ea){
this._props=_ea||{};
dojo.mixin(this,_ea);
if(this.draggable===undefined){
this.draggable=true;
}
},_defaultFormat:function(_eb,_ec){
var s=this.grid.formatterScope||this;
var f=this.formatter;
if(f&&s&&typeof f=="string"){
f=this.formatter=s[f];
}
var v=(_eb!=this.defaultValue&&f)?f.apply(s,_ec):_eb;
if(typeof v=="undefined"){
return this.defaultValue;
}
if(v&&v.addBoth){
v=new dojox.grid._DeferredTextWidget({deferred:v},dojo.create("span",{innerHTML:this.defaultValue}));
}
if(v&&v.declaredClass&&v.startup){
return "<div class='dojoxGridStubNode' linkWidget='"+v.id+"' cellIdx='"+this.index+"'>"+this.defaultValue+"</div>";
}
return v;
},format:function(_ed,_ee){
var f,i=this.grid.edit.info,d=this.get?this.get(_ed,_ee):(this.value||this.defaultValue);
d=(d&&d.replace&&this.grid.escapeHTMLInData)?d.replace(/&/g,"&amp;").replace(/</g,"&lt;"):d;
if(this.editable&&(this.alwaysEditing||(i.rowIndex==_ed&&i.cell==this))){
return this.formatEditing(d,_ed);
}else{
return this._defaultFormat(d,[d,_ed,this]);
}
},formatEditing:function(_ef,_f0){
},getNode:function(_f1){
return this.view.getCellNode(_f1,this.index);
},getHeaderNode:function(){
return this.view.getHeaderCellNode(this.index);
},getEditNode:function(_f2){
return (this.getNode(_f2)||0).firstChild||0;
},canResize:function(){
var uw=this.unitWidth;
return uw&&(uw!=="auto");
},isFlex:function(){
var uw=this.unitWidth;
return uw&&dojo.isString(uw)&&(uw=="auto"||uw.slice(-1)=="%");
},applyEdit:function(_f3,_f4){
this.grid.edit.applyCellEdit(_f3,this,_f4);
},cancelEdit:function(_f5){
this.grid.doCancelEdit(_f5);
},_onEditBlur:function(_f6){
if(this.grid.edit.isEditCell(_f6,this.index)){
this.grid.edit.apply();
}
},registerOnBlur:function(_f7,_f8){
if(this.commitOnBlur){
dojo.connect(_f7,"onblur",function(e){
setTimeout(dojo.hitch(this,"_onEditBlur",_f8),250);
});
}
},needFormatNode:function(_f9,_fa){
this._formatPending=true;
_e9(this,"_formatNode",_f9,_fa);
},cancelFormatNode:function(){
this._formatPending=false;
},_formatNode:function(_fb,_fc){
if(this._formatPending){
this._formatPending=false;
dojo.setSelectable(this.grid.domNode,true);
this.formatNode(this.getEditNode(_fc),_fb,_fc);
}
},formatNode:function(_fd,_fe,_ff){
if(dojo.isIE){
_e9(this,"focus",_ff,_fd);
}else{
this.focus(_ff,_fd);
}
},dispatchEvent:function(m,e){
if(m in this){
return this[m](e);
}
},getValue:function(_100){
return this.getEditNode(_100)[this._valueProp];
},setValue:function(_101,_102){
var n=this.getEditNode(_101);
if(n){
n[this._valueProp]=_102;
}
},focus:function(_103,_104){
_e7(_104||this.getEditNode(_103));
},save:function(_105){
this.value=this.value||this.getValue(_105);
},restore:function(_106){
this.setValue(_106,this.value);
},_finish:function(_107){
dojo.setSelectable(this.grid.domNode,false);
this.cancelFormatNode();
},apply:function(_108){
this.applyEdit(this.getValue(_108),_108);
this._finish(_108);
},cancel:function(_109){
this.cancelEdit(_109);
this._finish(_109);
}});
dgc._Base.markupFactory=function(node,_10a){
var d=dojo;
var _10b=d.trim(d.attr(node,"formatter")||"");
if(_10b){
_10a.formatter=dojo.getObject(_10b)||_10b;
}
var get=d.trim(d.attr(node,"get")||"");
if(get){
_10a.get=dojo.getObject(get);
}
var _10c=function(attr,cell,_10d){
var _10e=d.trim(d.attr(node,attr)||"");
if(_10e){
cell[_10d||attr]=!(_10e.toLowerCase()=="false");
}
};
_10c("sortDesc",_10a);
_10c("editable",_10a);
_10c("alwaysEditing",_10a);
_10c("noresize",_10a);
_10c("draggable",_10a);
var _10f=d.trim(d.attr(node,"loadingText")||d.attr(node,"defaultValue")||"");
if(_10f){
_10a.defaultValue=_10f;
}
var _110=function(attr,cell,_111){
var _112=d.trim(d.attr(node,attr)||"")||undefined;
if(_112){
cell[_111||attr]=_112;
}
};
_110("styles",_10a);
_110("headerStyles",_10a);
_110("cellStyles",_10a);
_110("classes",_10a);
_110("headerClasses",_10a);
_110("cellClasses",_10a);
};
dojo.declare("dojox.grid.cells.Cell",dgc._Base,{constructor:function(){
this.keyFilter=this.keyFilter;
},keyFilter:null,formatEditing:function(_113,_114){
this.needFormatNode(_113,_114);
return "<input class=\"dojoxGridInput\" type=\"text\" value=\""+_113+"\">";
},formatNode:function(_115,_116,_117){
this.inherited(arguments);
this.registerOnBlur(_115,_117);
},doKey:function(e){
if(this.keyFilter){
var key=String.fromCharCode(e.charCode);
if(key.search(this.keyFilter)==-1){
dojo.stopEvent(e);
}
}
},_finish:function(_118){
this.inherited(arguments);
var n=this.getEditNode(_118);
try{
dojox.grid.util.fire(n,"blur");
}
catch(e){
}
}});
dgc.Cell.markupFactory=function(node,_119){
dgc._Base.markupFactory(node,_119);
var d=dojo;
var _11a=d.trim(d.attr(node,"keyFilter")||"");
if(_11a){
_119.keyFilter=new RegExp(_11a);
}
};
dojo.declare("dojox.grid.cells.RowIndex",dgc.Cell,{name:"Row",postscript:function(){
this.editable=false;
},get:function(_11b){
return _11b+1;
}});
dgc.RowIndex.markupFactory=function(node,_11c){
dgc.Cell.markupFactory(node,_11c);
};
dojo.declare("dojox.grid.cells.Select",dgc.Cell,{options:null,values:null,returnIndex:-1,constructor:function(_11d){
this.values=this.values||this.options;
},formatEditing:function(_11e,_11f){
this.needFormatNode(_11e,_11f);
var h=["<select class=\"dojoxGridSelect\">"];
for(var i=0,o,v;((o=this.options[i])!==undefined)&&((v=this.values[i])!==undefined);i++){
h.push("<option",(_11e==v?" selected":"")," value=\""+v+"\"",">",o,"</option>");
}
h.push("</select>");
return h.join("");
},getValue:function(_120){
var n=this.getEditNode(_120);
if(n){
var i=n.selectedIndex,o=n.options[i];
return this.returnIndex>-1?i:o.value||o.innerHTML;
}
}});
dgc.Select.markupFactory=function(node,cell){
dgc.Cell.markupFactory(node,cell);
var d=dojo;
var _121=d.trim(d.attr(node,"options")||"");
if(_121){
var o=_121.split(",");
if(o[0]!=_121){
cell.options=o;
}
}
var _122=d.trim(d.attr(node,"values")||"");
if(_122){
var v=_122.split(",");
if(v[0]!=_122){
cell.values=v;
}
}
};
dojo.declare("dojox.grid.cells.AlwaysEdit",dgc.Cell,{alwaysEditing:true,_formatNode:function(_123,_124){
this.formatNode(this.getEditNode(_124),_123,_124);
},applyStaticValue:function(_125){
var e=this.grid.edit;
e.applyCellEdit(this.getValue(_125),this,_125);
e.start(this,_125,true);
}});
dgc.AlwaysEdit.markupFactory=function(node,cell){
dgc.Cell.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.Bool",dgc.AlwaysEdit,{_valueProp:"checked",formatEditing:function(_126,_127){
return "<input class=\"dojoxGridInput\" type=\"checkbox\""+(_126?" checked=\"checked\"":"")+" style=\"width: auto\" />";
},doclick:function(e){
if(e.target.tagName=="INPUT"){
this.applyStaticValue(e.rowIndex);
}
}});
dgc.Bool.markupFactory=function(node,cell){
dgc.AlwaysEdit.markupFactory(node,cell);
};
})();
}
if(!dojo._hasResource["dojox.grid.cells"]){
dojo._hasResource["dojox.grid.cells"]=true;
dojo.provide("dojox.grid.cells");
}
if(!dojo._hasResource["dojox.grid._Builder"]){
dojo._hasResource["dojox.grid._Builder"]=true;
dojo.provide("dojox.grid._Builder");
(function(){
var dg=dojox.grid;
var _128=function(td){
return td.cellIndex>=0?td.cellIndex:dojo.indexOf(td.parentNode.cells,td);
};
var _129=function(tr){
return tr.rowIndex>=0?tr.rowIndex:dojo.indexOf(tr.parentNode.childNodes,tr);
};
var _12a=function(_12b,_12c){
return _12b&&((_12b.rows||0)[_12c]||_12b.childNodes[_12c]);
};
var _12d=function(node){
for(var n=node;n&&n.tagName!="TABLE";n=n.parentNode){
}
return n;
};
var _12e=function(_12f,_130){
for(var n=_12f;n&&_130(n);n=n.parentNode){
}
return n;
};
var _131=function(_132){
var name=_132.toUpperCase();
return function(node){
return node.tagName!=name;
};
};
var _133=dojox.grid.util.rowIndexTag;
var _134=dojox.grid.util.gridViewTag;
dg._Builder=dojo.extend(function(view){
if(view){
this.view=view;
this.grid=view.grid;
}
},{view:null,_table:"<table class=\"dojoxGridRowTable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\"",getTableArray:function(){
var html=[this._table];
if(this.view.viewWidth){
html.push([" style=\"width:",this.view.viewWidth,";\""].join(""));
}
html.push(">");
return html;
},generateCellMarkup:function(_135,_136,_137,_138){
var _139=[],html;
if(_138){
var _13a=_135.index!=_135.grid.getSortIndex()?"":_135.grid.sortInfo>0?"aria-sort=\"ascending\"":"aria-sort=\"descending\"";
if(!_135.id){
_135.id=this.grid.id+"Hdr"+_135.index;
}
html=["<th tabIndex=\"-1\" aria-readonly=\"true\" role=\"columnheader\"",_13a,"id=\"",_135.id,"\""];
}else{
var _13b=this.grid.editable&&!_135.editable?"aria-readonly=\"true\"":"";
html=["<td tabIndex=\"-1\" role=\"gridcell\"",_13b];
}
if(_135.colSpan){
html.push(" colspan=\"",_135.colSpan,"\"");
}
if(_135.rowSpan){
html.push(" rowspan=\"",_135.rowSpan,"\"");
}
html.push(" class=\"dojoxGridCell ");
if(_135.classes){
html.push(_135.classes," ");
}
if(_137){
html.push(_137," ");
}
_139.push(html.join(""));
_139.push("");
html=["\" idx=\"",_135.index,"\" style=\""];
if(_136&&_136[_136.length-1]!=";"){
_136+=";";
}
html.push(_135.styles,_136||"",_135.hidden?"display:none;":"");
if(_135.unitWidth){
html.push("width:",_135.unitWidth,";");
}
_139.push(html.join(""));
_139.push("");
html=["\""];
if(_135.attrs){
html.push(" ",_135.attrs);
}
html.push(">");
_139.push(html.join(""));
_139.push("");
_139.push(_138?"</th>":"</td>");
return _139;
},isCellNode:function(_13c){
return Boolean(_13c&&_13c!=dojo.doc&&dojo.attr(_13c,"idx"));
},getCellNodeIndex:function(_13d){
return _13d?Number(dojo.attr(_13d,"idx")):-1;
},getCellNode:function(_13e,_13f){
for(var i=0,row;((row=_12a(_13e.firstChild,i))&&row.cells);i++){
for(var j=0,cell;(cell=row.cells[j]);j++){
if(this.getCellNodeIndex(cell)==_13f){
return cell;
}
}
}
return null;
},findCellTarget:function(_140,_141){
var n=_140;
while(n&&(!this.isCellNode(n)||(n.offsetParent&&_134 in n.offsetParent.parentNode&&n.offsetParent.parentNode[_134]!=this.view.id))&&(n!=_141)){
n=n.parentNode;
}
return n!=_141?n:null;
},baseDecorateEvent:function(e){
e.dispatch="do"+e.type;
e.grid=this.grid;
e.sourceView=this.view;
e.cellNode=this.findCellTarget(e.target,e.rowNode);
e.cellIndex=this.getCellNodeIndex(e.cellNode);
e.cell=(e.cellIndex>=0?this.grid.getCell(e.cellIndex):null);
},findTarget:function(_142,_143){
var n=_142;
while(n&&(n!=this.domNode)&&(!(_143 in n)||(_134 in n&&n[_134]!=this.view.id))){
n=n.parentNode;
}
return (n!=this.domNode)?n:null;
},findRowTarget:function(_144){
return this.findTarget(_144,_133);
},isIntraNodeEvent:function(e){
try{
return (e.cellNode&&e.relatedTarget&&dojo.isDescendant(e.relatedTarget,e.cellNode));
}
catch(x){
return false;
}
},isIntraRowEvent:function(e){
try{
var row=e.relatedTarget&&this.findRowTarget(e.relatedTarget);
return !row&&(e.rowIndex==-1)||row&&(e.rowIndex==row.gridRowIndex);
}
catch(x){
return false;
}
},dispatchEvent:function(e){
if(e.dispatch in this){
return this[e.dispatch](e);
}
return false;
},domouseover:function(e){
if(e.cellNode&&(e.cellNode!=this.lastOverCellNode)){
this.lastOverCellNode=e.cellNode;
this.grid.onMouseOver(e);
}
this.grid.onMouseOverRow(e);
},domouseout:function(e){
if(e.cellNode&&(e.cellNode==this.lastOverCellNode)&&!this.isIntraNodeEvent(e,this.lastOverCellNode)){
this.lastOverCellNode=null;
this.grid.onMouseOut(e);
if(!this.isIntraRowEvent(e)){
this.grid.onMouseOutRow(e);
}
}
},domousedown:function(e){
if(e.cellNode){
this.grid.onMouseDown(e);
}
this.grid.onMouseDownRow(e);
}});
dg._ContentBuilder=dojo.extend(function(view){
dg._Builder.call(this,view);
},dg._Builder.prototype,{update:function(){
this.prepareHtml();
},prepareHtml:function(){
var _145=this.grid.get,_146=this.view.structure.cells;
for(var j=0,row;(row=_146[j]);j++){
for(var i=0,cell;(cell=row[i]);i++){
cell.get=cell.get||(cell.value==undefined)&&_145;
cell.markup=this.generateCellMarkup(cell,cell.cellStyles,cell.cellClasses,false);
if(!this.grid.editable&&cell.editable){
this.grid.editable=true;
}
}
}
},generateHtml:function(_147,_148){
var html=this.getTableArray(),v=this.view,_149=v.structure.cells,item=this.grid.getItem(_148);
dojox.grid.util.fire(this.view,"onBeforeRow",[_148,_149]);
for(var j=0,row;(row=_149[j]);j++){
if(row.hidden||row.header){
continue;
}
html.push(!row.invisible?"<tr>":"<tr class=\"dojoxGridInvisible\">");
for(var i=0,cell,m,cc,cs;(cell=row[i]);i++){
m=cell.markup;
cc=cell.customClasses=[];
cs=cell.customStyles=[];
m[5]=cell.format(_148,item);
m[1]=cc.join(" ");
m[3]=cs.join(";");
html.push.apply(html,m);
}
html.push("</tr>");
}
html.push("</table>");
return html.join("");
},decorateEvent:function(e){
e.rowNode=this.findRowTarget(e.target);
if(!e.rowNode){
return false;
}
e.rowIndex=e.rowNode[_133];
this.baseDecorateEvent(e);
e.cell=this.grid.getCell(e.cellIndex);
dojo.IEGridEvent=e;
return true;
}});
dg._HeaderBuilder=dojo.extend(function(view){
this.moveable=null;
dg._Builder.call(this,view);
},dg._Builder.prototype,{_skipBogusClicks:false,overResizeWidth:4,minColWidth:1,update:function(){
if(this.tableMap){
this.tableMap.mapRows(this.view.structure.cells);
}else{
this.tableMap=new dg._TableMap(this.view.structure.cells);
}
},generateHtml:function(_14a,_14b){
var html=this.getTableArray(),_14c=this.view.structure.cells;
dojox.grid.util.fire(this.view,"onBeforeRow",[-1,_14c]);
for(var j=0,row;(row=_14c[j]);j++){
if(row.hidden){
continue;
}
html.push(!row.invisible?"<tr>":"<tr class=\"dojoxGridInvisible\">");
for(var i=0,cell,_14d;(cell=row[i]);i++){
cell.customClasses=[];
cell.customStyles=[];
if(this.view.simpleStructure){
if(cell.draggable){
if(cell.headerClasses){
if(cell.headerClasses.indexOf("dojoDndItem")==-1){
cell.headerClasses+=" dojoDndItem";
}
}else{
cell.headerClasses="dojoDndItem";
}
}
if(cell.attrs){
if(cell.attrs.indexOf("dndType='gridColumn_")==-1){
cell.attrs+=" dndType='gridColumn_"+this.grid.id+"'";
}
}else{
cell.attrs="dndType='gridColumn_"+this.grid.id+"'";
}
}
_14d=this.generateCellMarkup(cell,cell.headerStyles,cell.headerClasses,true);
_14d[5]=(_14b!=undefined?_14b:_14a(cell));
_14d[3]=cell.customStyles.join(";");
_14d[1]=cell.customClasses.join(" ");
html.push(_14d.join(""));
}
html.push("</tr>");
}
html.push("</table>");
return html.join("");
},getCellX:function(e){
var n,x=e.layerX;
if(dojo.isMoz||dojo.isIE>=9){
n=_12e(e.target,_131("th"));
x-=(n&&n.offsetLeft)||0;
var t=e.sourceView.getScrollbarWidth();
if(!dojo._isBodyLtr()){
table=_12e(n,_131("table"));
x-=(table&&table.offsetLeft)||0;
}
}
n=_12e(e.target,function(){
if(!n||n==e.cellNode){
return false;
}
x+=(n.offsetLeft<0?0:n.offsetLeft);
return true;
});
return x;
},decorateEvent:function(e){
this.baseDecorateEvent(e);
e.rowIndex=-1;
e.cellX=this.getCellX(e);
return true;
},prepareResize:function(e,mod){
do{
var i=_128(e.cellNode);
e.cellNode=(i?e.cellNode.parentNode.cells[i+mod]:null);
e.cellIndex=(e.cellNode?this.getCellNodeIndex(e.cellNode):-1);
}while(e.cellNode&&e.cellNode.style.display=="none");
return Boolean(e.cellNode);
},canResize:function(e){
if(!e.cellNode||e.cellNode.colSpan>1){
return false;
}
var cell=this.grid.getCell(e.cellIndex);
return !cell.noresize&&cell.canResize();
},overLeftResizeArea:function(e){
if(dojo.hasClass(dojo.body(),"dojoDndMove")){
return false;
}
if(dojo.isIE){
var tN=e.target;
if(dojo.hasClass(tN,"dojoxGridArrowButtonNode")||dojo.hasClass(tN,"dojoxGridArrowButtonChar")){
return false;
}
}
if(dojo._isBodyLtr()){
return (e.cellIndex>0)&&(e.cellX>0&&e.cellX<this.overResizeWidth)&&this.prepareResize(e,-1);
}
var t=e.cellNode&&(e.cellX>0&&e.cellX<this.overResizeWidth);
return t;
},overRightResizeArea:function(e){
if(dojo.hasClass(dojo.body(),"dojoDndMove")){
return false;
}
if(dojo.isIE){
var tN=e.target;
if(dojo.hasClass(tN,"dojoxGridArrowButtonNode")||dojo.hasClass(tN,"dojoxGridArrowButtonChar")){
return false;
}
}
if(dojo._isBodyLtr()){
return e.cellNode&&(e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth);
}
return (e.cellIndex>0)&&(e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth)&&this.prepareResize(e,-1);
},domousemove:function(e){
if(!this.moveable){
var c=(this.overRightResizeArea(e)?"dojoxGridColResize":(this.overLeftResizeArea(e)?"dojoxGridColResize":""));
if(c&&!this.canResize(e)){
c="dojoxGridColNoResize";
}
dojo.toggleClass(e.sourceView.headerNode,"dojoxGridColNoResize",(c=="dojoxGridColNoResize"));
dojo.toggleClass(e.sourceView.headerNode,"dojoxGridColResize",(c=="dojoxGridColResize"));
if(dojo.isIE){
var t=e.sourceView.headerNode.scrollLeft;
e.sourceView.headerNode.scrollLeft=t;
}
if(c){
dojo.stopEvent(e);
}
}
},domousedown:function(e){
if(!this.moveable){
if((this.overRightResizeArea(e)||this.overLeftResizeArea(e))&&this.canResize(e)){
this.beginColumnResize(e);
}else{
this.grid.onMouseDown(e);
this.grid.onMouseOverRow(e);
}
}
},doclick:function(e){
if(this._skipBogusClicks){
dojo.stopEvent(e);
return true;
}
return false;
},colResizeSetup:function(e,_14e){
var _14f=dojo.contentBox(e.sourceView.headerNode);
if(_14e){
this.lineDiv=document.createElement("div");
var vw=(dojo.position||dojo._abs)(e.sourceView.headerNode,true);
var _150=dojo.contentBox(e.sourceView.domNode);
var l=e.pageX;
if(!dojo._isBodyLtr()&&dojo.isIE<8){
l-=dojox.html.metrics.getScrollbar().w;
}
dojo.style(this.lineDiv,{top:vw.y+"px",left:l+"px",height:(_150.h+_14f.h)+"px"});
dojo.addClass(this.lineDiv,"dojoxGridResizeColLine");
this.lineDiv._origLeft=l;
dojo.body().appendChild(this.lineDiv);
}
var _151=[],_152=this.tableMap.findOverlappingNodes(e.cellNode);
for(var i=0,cell;(cell=_152[i]);i++){
_151.push({node:cell,index:this.getCellNodeIndex(cell),width:cell.offsetWidth});
}
var view=e.sourceView;
var adj=dojo._isBodyLtr()?1:-1;
var _153=e.grid.views.views;
var _154=[];
for(var j=view.idx+adj,_155;(_155=_153[j]);j=j+adj){
_154.push({node:_155.headerNode,left:window.parseInt(_155.headerNode.style.left)});
}
var _156=view.headerContentNode.firstChild;
var drag={scrollLeft:e.sourceView.headerNode.scrollLeft,view:view,node:e.cellNode,index:e.cellIndex,w:dojo.contentBox(e.cellNode).w,vw:_14f.w,table:_156,tw:dojo.contentBox(_156).w,spanners:_151,followers:_154};
return drag;
},beginColumnResize:function(e){
this.moverDiv=document.createElement("div");
dojo.style(this.moverDiv,{position:"absolute",left:0});
dojo.body().appendChild(this.moverDiv);
dojo.addClass(this.grid.domNode,"dojoxGridColumnResizing");
var m=(this.moveable=new dojo.dnd.Moveable(this.moverDiv));
var drag=this.colResizeSetup(e,true);
m.onMove=dojo.hitch(this,"doResizeColumn",drag);
dojo.connect(m,"onMoveStop",dojo.hitch(this,function(){
this.endResizeColumn(drag);
if(drag.node.releaseCapture){
drag.node.releaseCapture();
}
this.moveable.destroy();
delete this.moveable;
this.moveable=null;
dojo.removeClass(this.grid.domNode,"dojoxGridColumnResizing");
}));
if(e.cellNode.setCapture){
e.cellNode.setCapture();
}
m.onMouseDown(e);
},doResizeColumn:function(_157,_158,_159){
var _15a=_159.l;
var data={deltaX:_15a,w:_157.w+(dojo._isBodyLtr()?_15a:-_15a),vw:_157.vw+_15a,tw:_157.tw+_15a};
this.dragRecord={inDrag:_157,mover:_158,leftTop:_159};
if(data.w>=this.minColWidth){
if(!_158){
this.doResizeNow(_157,data);
}else{
dojo.style(this.lineDiv,"left",(this.lineDiv._origLeft+data.deltaX)+"px");
}
}
},endResizeColumn:function(_15b){
if(this.dragRecord){
var _15c=this.dragRecord.leftTop;
var _15d=dojo._isBodyLtr()?_15c.l:-_15c.l;
_15d+=Math.max(_15b.w+_15d,this.minColWidth)-(_15b.w+_15d);
if(dojo.isWebKit&&_15b.spanners.length){
_15d+=dojo._getPadBorderExtents(_15b.spanners[0].node).w;
}
var data={deltaX:_15d,w:_15b.w+_15d,vw:_15b.vw+_15d,tw:_15b.tw+_15d};
this.doResizeNow(_15b,data);
delete this.dragRecord;
}
dojo.destroy(this.lineDiv);
dojo.destroy(this.moverDiv);
dojo.destroy(this.moverDiv);
delete this.moverDiv;
this._skipBogusClicks=true;
_15b.view.update();
this._skipBogusClicks=false;
this.grid.onResizeColumn(_15b.index,_15b,data);
},doResizeNow:function(_15e,data){
_15e.view.convertColPctToFixed();
if(_15e.view.flexCells&&!_15e.view.testFlexCells()){
var t=_12d(_15e.node);
if(t){
(t.style.width="");
}
}
var i,s,sw,f,fl;
for(i=0;(s=_15e.spanners[i]);i++){
sw=s.width+data.deltaX;
if(sw>0){
s.node.style.width=sw+"px";
_15e.view.setColWidth(s.index,sw);
}
}
if(dojo._isBodyLtr()||!dojo.isIE){
for(i=0;(f=_15e.followers[i]);i++){
fl=f.left+data.deltaX;
f.node.style.left=fl+"px";
}
}
_15e.node.style.width=data.w+"px";
_15e.view.setColWidth(_15e.index,data.w);
_15e.view.headerNode.style.width=data.vw+"px";
_15e.view.setColumnsWidth(data.tw);
if(!dojo._isBodyLtr()){
_15e.view.headerNode.scrollLeft=_15e.scrollLeft+data.deltaX;
}
}});
dg._TableMap=dojo.extend(function(rows){
this.mapRows(rows);
},{map:null,mapRows:function(_15f){
var _160=_15f.length;
if(!_160){
return;
}
this.map=[];
var row;
for(var k=0;(row=_15f[k]);k++){
this.map[k]=[];
}
for(var j=0;(row=_15f[j]);j++){
for(var i=0,x=0,cell,_161,_162;(cell=row[i]);i++){
while(this.map[j][x]){
x++;
}
this.map[j][x]={c:i,r:j};
_162=cell.rowSpan||1;
_161=cell.colSpan||1;
for(var y=0;y<_162;y++){
for(var s=0;s<_161;s++){
this.map[j+y][x+s]=this.map[j][x];
}
}
x+=_161;
}
}
},dumpMap:function(){
for(var j=0,row,h="";(row=this.map[j]);j++,h=""){
for(var i=0,cell;(cell=row[i]);i++){
h+=cell.r+","+cell.c+"   ";
}
}
},getMapCoords:function(_163,_164){
for(var j=0,row;(row=this.map[j]);j++){
for(var i=0,cell;(cell=row[i]);i++){
if(cell.c==_164&&cell.r==_163){
return {j:j,i:i};
}
}
}
return {j:-1,i:-1};
},getNode:function(_165,_166,_167){
var row=_165&&_165.rows[_166];
return row&&row.cells[_167];
},_findOverlappingNodes:function(_168,_169,_16a){
var _16b=[];
var m=this.getMapCoords(_169,_16a);
for(var j=0,row;(row=this.map[j]);j++){
if(j==m.j){
continue;
}
var rw=row[m.i];
var n=(rw?this.getNode(_168,rw.r,rw.c):null);
if(n){
_16b.push(n);
}
}
return _16b;
},findOverlappingNodes:function(_16c){
return this._findOverlappingNodes(_12d(_16c),_129(_16c.parentNode),_128(_16c));
}});
})();
}
if(!dojo._hasResource["dojox.grid._View"]){
dojo._hasResource["dojox.grid._View"]=true;
dojo.provide("dojox.grid._View");
(function(){
var _16d=function(_16e,_16f){
return _16e.style.cssText==undefined?_16e.getAttribute("style"):_16e.style.cssText;
};
dojo.declare("dojox.grid._View",[dijit._Widget,dijit._Templated],{defaultWidth:"18em",viewWidth:"",templateString:"<div class=\"dojoxGridView\" role=\"presentation\">\r\n\t<div class=\"dojoxGridHeader\" dojoAttachPoint=\"headerNode\" role=\"presentation\">\r\n\t\t<div dojoAttachPoint=\"headerNodeContainer\" style=\"width:9000em\" role=\"presentation\">\r\n\t\t\t<div dojoAttachPoint=\"headerContentNode\" role=\"row\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<input type=\"checkbox\" class=\"dojoxGridHiddenFocus\" dojoAttachPoint=\"hiddenFocusNode\" role=\"presentation\" />\r\n\t<input type=\"checkbox\" class=\"dojoxGridHiddenFocus\" role=\"presentation\" />\r\n\t<div class=\"dojoxGridScrollbox\" dojoAttachPoint=\"scrollboxNode\" role=\"presentation\">\r\n\t\t<div class=\"dojoxGridContent\" dojoAttachPoint=\"contentNode\" hidefocus=\"hidefocus\" role=\"presentation\"></div>\r\n\t</div>\r\n</div>\r\n",themeable:false,classTag:"dojoxGrid",marginBottom:0,rowPad:2,_togglingColumn:-1,_headerBuilderClass:dojox.grid._HeaderBuilder,_contentBuilderClass:dojox.grid._ContentBuilder,postMixInProperties:function(){
this.rowNodes={};
},postCreate:function(){
this.connect(this.scrollboxNode,"onscroll","doscroll");
dojox.grid.util.funnelEvents(this.contentNode,this,"doContentEvent",["mouseover","mouseout","click","dblclick","contextmenu","mousedown"]);
dojox.grid.util.funnelEvents(this.headerNode,this,"doHeaderEvent",["dblclick","mouseover","mouseout","mousemove","mousedown","click","contextmenu"]);
this.content=new this._contentBuilderClass(this);
this.header=new this._headerBuilderClass(this);
if(!dojo._isBodyLtr()){
this.headerNodeContainer.style.width="";
}
},destroy:function(){
dojo.destroy(this.headerNode);
delete this.headerNode;
for(var i in this.rowNodes){
dojo.destroy(this.rowNodes[i]);
}
this.rowNodes={};
if(this.source){
this.source.destroy();
}
this.inherited(arguments);
},focus:function(){
if(dojo.isIE||dojo.isWebKit||dojo.isOpera){
this.hiddenFocusNode.focus();
}else{
this.scrollboxNode.focus();
}
},setStructure:function(_170){
var vs=(this.structure=_170);
if(vs.width&&!isNaN(vs.width)){
this.viewWidth=vs.width+"em";
}else{
this.viewWidth=vs.width||(vs.noscroll?"auto":this.viewWidth);
}
this._onBeforeRow=vs.onBeforeRow||function(){
};
this._onAfterRow=vs.onAfterRow||function(){
};
this.noscroll=vs.noscroll;
if(this.noscroll){
this.scrollboxNode.style.overflow="hidden";
}
this.simpleStructure=Boolean(vs.cells.length==1);
this.testFlexCells();
this.updateStructure();
},_cleanupRowWidgets:function(_171){
if(_171){
dojo.forEach(dojo.query("[widgetId]",_171).map(dijit.byNode),function(w){
if(w._destroyOnRemove){
w.destroy();
delete w;
}else{
if(w.domNode&&w.domNode.parentNode){
w.domNode.parentNode.removeChild(w.domNode);
}
}
});
}
},onBeforeRow:function(_172,_173){
this._onBeforeRow(_172,_173);
if(_172>=0){
this._cleanupRowWidgets(this.getRowNode(_172));
}
},onAfterRow:function(_174,_175,_176){
this._onAfterRow(_174,_175,_176);
var g=this.grid;
dojo.forEach(dojo.query(".dojoxGridStubNode",_176),function(n){
if(n&&n.parentNode){
var lw=n.getAttribute("linkWidget");
var _177=window.parseInt(dojo.attr(n,"cellIdx"),10);
var _178=g.getCell(_177);
var w=dijit.byId(lw);
if(w){
n.parentNode.replaceChild(w.domNode,n);
if(!w._started){
w.startup();
}
}else{
n.innerHTML="";
}
}
},this);
},testFlexCells:function(){
this.flexCells=false;
for(var j=0,row;(row=this.structure.cells[j]);j++){
for(var i=0,cell;(cell=row[i]);i++){
cell.view=this;
this.flexCells=this.flexCells||cell.isFlex();
}
}
return this.flexCells;
},updateStructure:function(){
this.header.update();
this.content.update();
},getScrollbarWidth:function(){
var _179=this.hasVScrollbar();
var _17a=dojo.style(this.scrollboxNode,"overflow");
if(this.noscroll||!_17a||_17a=="hidden"){
_179=false;
}else{
if(_17a=="scroll"){
_179=true;
}
}
return (_179?dojox.html.metrics.getScrollbar().w:0);
},getColumnsWidth:function(){
var h=this.headerContentNode;
return h&&h.firstChild?h.firstChild.offsetWidth:0;
},setColumnsWidth:function(_17b){
this.headerContentNode.firstChild.style.width=_17b+"px";
if(this.viewWidth){
this.viewWidth=_17b+"px";
}
},getWidth:function(){
return this.viewWidth||(this.getColumnsWidth()+this.getScrollbarWidth())+"px";
},getContentWidth:function(){
return Math.max(0,dojo._getContentBox(this.domNode).w-this.getScrollbarWidth())+"px";
},render:function(){
this.scrollboxNode.style.height="";
this.renderHeader();
if(this._togglingColumn>=0){
this.setColumnsWidth(this.getColumnsWidth()-this._togglingColumn);
this._togglingColumn=-1;
}
var _17c=this.grid.layout.cells;
var _17d=dojo.hitch(this,function(node,_17e){
!dojo._isBodyLtr()&&(_17e=!_17e);
var inc=_17e?-1:1;
var idx=this.header.getCellNodeIndex(node)+inc;
var cell=_17c[idx];
while(cell&&cell.getHeaderNode()&&cell.getHeaderNode().style.display=="none"){
idx+=inc;
cell=_17c[idx];
}
if(cell){
return cell.getHeaderNode();
}
return null;
});
if(this.grid.columnReordering&&this.simpleStructure){
if(this.source){
this.source.destroy();
}
var _17f="dojoxGrid_bottomMarker";
var _180="dojoxGrid_topMarker";
if(this.bottomMarker){
dojo.destroy(this.bottomMarker);
}
this.bottomMarker=dojo.byId(_17f);
if(this.topMarker){
dojo.destroy(this.topMarker);
}
this.topMarker=dojo.byId(_180);
if(!this.bottomMarker){
this.bottomMarker=dojo.create("div",{"id":_17f,"class":"dojoxGridColPlaceBottom"},dojo.body());
this._hide(this.bottomMarker);
this.topMarker=dojo.create("div",{"id":_180,"class":"dojoxGridColPlaceTop"},dojo.body());
this._hide(this.topMarker);
}
this.arrowDim=dojo.contentBox(this.bottomMarker);
var _181=dojo.contentBox(this.headerContentNode.firstChild.rows[0]).h;
this.source=new dojo.dnd.Source(this.headerContentNode.firstChild.rows[0],{horizontal:true,accept:["gridColumn_"+this.grid.id],viewIndex:this.index,generateText:false,onMouseDown:dojo.hitch(this,function(e){
this.header.decorateEvent(e);
if((this.header.overRightResizeArea(e)||this.header.overLeftResizeArea(e))&&this.header.canResize(e)&&!this.header.moveable){
this.header.beginColumnResize(e);
}else{
if(this.grid.headerMenu){
this.grid.headerMenu.onCancel(true);
}
if(e.button===(dojo.isIE?1:0)){
dojo.dnd.Source.prototype.onMouseDown.call(this.source,e);
}
}
}),onMouseOver:dojo.hitch(this,function(e){
var src=this.source;
if(src._getChildByEvent(e)){
dojo.dnd.Source.prototype.onMouseOver.apply(src,arguments);
}
}),_markTargetAnchor:dojo.hitch(this,function(_182){
var src=this.source;
if(src.current==src.targetAnchor&&src.before==_182){
return;
}
if(src.targetAnchor&&_17d(src.targetAnchor,src.before)){
src._removeItemClass(_17d(src.targetAnchor,src.before),src.before?"After":"Before");
}
dojo.dnd.Source.prototype._markTargetAnchor.call(src,_182);
var _183=_182?src.targetAnchor:_17d(src.targetAnchor,src.before);
var _184=0;
if(!_183){
_183=src.targetAnchor;
_184=dojo.contentBox(_183).w+this.arrowDim.w/2+2;
}
var pos=(dojo.position||dojo._abs)(_183,true);
var left=Math.floor(pos.x-this.arrowDim.w/2+_184);
dojo.style(this.bottomMarker,"visibility","visible");
dojo.style(this.topMarker,"visibility","visible");
dojo.style(this.bottomMarker,{"left":left+"px","top":(_181+pos.y)+"px"});
dojo.style(this.topMarker,{"left":left+"px","top":(pos.y-this.arrowDim.h)+"px"});
if(src.targetAnchor&&_17d(src.targetAnchor,src.before)){
src._addItemClass(_17d(src.targetAnchor,src.before),src.before?"After":"Before");
}
}),_unmarkTargetAnchor:dojo.hitch(this,function(){
var src=this.source;
if(!src.targetAnchor){
return;
}
if(src.targetAnchor&&_17d(src.targetAnchor,src.before)){
src._removeItemClass(_17d(src.targetAnchor,src.before),src.before?"After":"Before");
}
this._hide(this.bottomMarker);
this._hide(this.topMarker);
dojo.dnd.Source.prototype._unmarkTargetAnchor.call(src);
}),destroy:dojo.hitch(this,function(){
dojo.disconnect(this._source_conn);
dojo.unsubscribe(this._source_sub);
dojo.dnd.Source.prototype.destroy.call(this.source);
if(this.bottomMarker){
dojo.destroy(this.bottomMarker);
delete this.bottomMarker;
}
if(this.topMarker){
dojo.destroy(this.topMarker);
delete this.topMarker;
}
}),onDndCancel:dojo.hitch(this,function(){
dojo.dnd.Source.prototype.onDndCancel.call(this.source);
this._hide(this.bottomMarker);
this._hide(this.topMarker);
})});
this._source_conn=dojo.connect(this.source,"onDndDrop",this,"_onDndDrop");
this._source_sub=dojo.subscribe("/dnd/drop/before",this,"_onDndDropBefore");
this.source.startup();
}
},_hide:function(node){
dojo.style(node,{left:"-10000px",top:"-10000px","visibility":"hidden"});
},_onDndDropBefore:function(_185,_186,copy){
if(dojo.dnd.manager().target!==this.source){
return;
}
this.source._targetNode=this.source.targetAnchor;
this.source._beforeTarget=this.source.before;
var _187=this.grid.views.views;
var _188=_187[_185.viewIndex];
var _189=_187[this.index];
if(_189!=_188){
_188.convertColPctToFixed();
_189.convertColPctToFixed();
}
},_onDndDrop:function(_18a,_18b,copy){
if(dojo.dnd.manager().target!==this.source){
if(dojo.dnd.manager().source===this.source){
this._removingColumn=true;
}
return;
}
this._hide(this.bottomMarker);
this._hide(this.topMarker);
var _18c=function(n){
return n?dojo.attr(n,"idx"):null;
};
var w=dojo.marginBox(_18b[0]).w;
if(_18a.viewIndex!==this.index){
var _18d=this.grid.views.views;
var _18e=_18d[_18a.viewIndex];
var _18f=_18d[this.index];
if(_18e.viewWidth&&_18e.viewWidth!="auto"){
_18e.setColumnsWidth(_18e.getColumnsWidth()-w);
}
if(_18f.viewWidth&&_18f.viewWidth!="auto"){
_18f.setColumnsWidth(_18f.getColumnsWidth());
}
}
var stn=this.source._targetNode;
var stb=this.source._beforeTarget;
!dojo._isBodyLtr()&&(stb=!stb);
var _190=this.grid.layout;
var idx=this.index;
delete this.source._targetNode;
delete this.source._beforeTarget;
_190.moveColumn(_18a.viewIndex,idx,_18c(_18b[0]),_18c(stn),stb);
},renderHeader:function(){
this.headerContentNode.innerHTML=this.header.generateHtml(this._getHeaderContent);
if(this.flexCells){
this.contentWidth=this.getContentWidth();
this.headerContentNode.firstChild.style.width=this.contentWidth;
}
dojox.grid.util.fire(this,"onAfterRow",[-1,this.structure.cells,this.headerContentNode]);
},_getHeaderContent:function(_191){
var n=_191.name||_191.grid.getCellName(_191);
var ret=["<div class=\"dojoxGridSortNode"];
if(_191.index!=_191.grid.getSortIndex()){
ret.push("\">");
}else{
ret=ret.concat([" ",_191.grid.sortInfo>0?"dojoxGridSortUp":"dojoxGridSortDown","\"><div class=\"dojoxGridArrowButtonChar\">",_191.grid.sortInfo>0?"&#9650;":"&#9660;","</div><div class=\"dojoxGridArrowButtonNode\" role=\"presentation\"></div>","<div class=\"dojoxGridColCaption\">"]);
}
ret=ret.concat([n,"</div></div>"]);
return ret.join("");
},resize:function(){
this.adaptHeight();
this.adaptWidth();
},hasHScrollbar:function(_192){
var _193=this._hasHScroll||false;
if(this._hasHScroll==undefined||_192){
if(this.noscroll){
this._hasHScroll=false;
}else{
var _194=dojo.style(this.scrollboxNode,"overflow");
if(_194=="hidden"){
this._hasHScroll=false;
}else{
if(_194=="scroll"){
this._hasHScroll=true;
}else{
this._hasHScroll=(this.scrollboxNode.offsetWidth-this.getScrollbarWidth()<this.contentNode.offsetWidth);
}
}
}
}
if(_193!==this._hasHScroll){
this.grid.update();
}
return this._hasHScroll;
},hasVScrollbar:function(_195){
var _196=this._hasVScroll||false;
if(this._hasVScroll==undefined||_195){
if(this.noscroll){
this._hasVScroll=false;
}else{
var _197=dojo.style(this.scrollboxNode,"overflow");
if(_197=="hidden"){
this._hasVScroll=false;
}else{
if(_197=="scroll"){
this._hasVScroll=true;
}else{
this._hasVScroll=(this.scrollboxNode.scrollHeight>this.scrollboxNode.clientHeight);
}
}
}
}
if(_196!==this._hasVScroll){
this.grid.update();
}
return this._hasVScroll;
},convertColPctToFixed:function(){
var _198=false;
this.grid.initialWidth="";
var _199=dojo.query("th",this.headerContentNode);
var _19a=dojo.map(_199,function(c,vIdx){
var w=c.style.width;
dojo.attr(c,"vIdx",vIdx);
if(w&&w.slice(-1)=="%"){
_198=true;
}else{
if(w&&w.slice(-2)=="px"){
return window.parseInt(w,10);
}
}
return dojo.contentBox(c).w;
});
if(_198){
dojo.forEach(this.grid.layout.cells,function(cell,idx){
if(cell.view==this){
var _19b=cell.view.getHeaderCellNode(cell.index);
if(_19b&&dojo.hasAttr(_19b,"vIdx")){
var vIdx=window.parseInt(dojo.attr(_19b,"vIdx"));
this.setColWidth(idx,_19a[vIdx]);
dojo.removeAttr(_19b,"vIdx");
}
}
},this);
return true;
}
return false;
},adaptHeight:function(_19c){
if(!this.grid._autoHeight){
var h=(this.domNode.style.height&&parseInt(this.domNode.style.height.replace(/px/,""),10))||this.domNode.clientHeight;
var self=this;
var _19d=function(){
var v;
for(var i in self.grid.views.views){
v=self.grid.views.views[i];
if(v!==self&&v.hasHScrollbar()){
return true;
}
}
return false;
};
if(_19c||(this.noscroll&&_19d())){
h-=dojox.html.metrics.getScrollbar().h;
}
dojox.grid.util.setStyleHeightPx(this.scrollboxNode,h);
}
this.hasVScrollbar(true);
},adaptWidth:function(){
if(this.flexCells){
this.contentWidth=this.getContentWidth();
this.headerContentNode.firstChild.style.width=this.contentWidth;
}
var w=this.scrollboxNode.offsetWidth-this.getScrollbarWidth();
if(!this._removingColumn){
w=Math.max(w,this.getColumnsWidth())+"px";
}else{
w=Math.min(w,this.getColumnsWidth())+"px";
this._removingColumn=false;
}
var cn=this.contentNode;
cn.style.width=w;
this.hasHScrollbar(true);
},setSize:function(w,h){
var ds=this.domNode.style;
var hs=this.headerNode.style;
if(w){
ds.width=w;
hs.width=w;
}
ds.height=(h>=0?h+"px":"");
},renderRow:function(_19e){
var _19f=this.createRowNode(_19e);
this.buildRow(_19e,_19f);
this.grid.edit.restore(this,_19e);
return _19f;
},createRowNode:function(_1a0){
var node=document.createElement("div");
node.className=this.classTag+"Row";
if(this instanceof dojox.grid._RowSelector){
dojo.attr(node,"role","presentation");
}else{
dojo.attr(node,"role","row");
if(this.grid.selectionMode!="none"){
dojo.attr(node,"aria-selected","false");
}
}
node[dojox.grid.util.gridViewTag]=this.id;
node[dojox.grid.util.rowIndexTag]=_1a0;
this.rowNodes[_1a0]=node;
return node;
},buildRow:function(_1a1,_1a2){
this.buildRowContent(_1a1,_1a2);
this.styleRow(_1a1,_1a2);
},buildRowContent:function(_1a3,_1a4){
_1a4.innerHTML=this.content.generateHtml(_1a3,_1a3);
if(this.flexCells&&this.contentWidth){
_1a4.firstChild.style.width=this.contentWidth;
}
dojox.grid.util.fire(this,"onAfterRow",[_1a3,this.structure.cells,_1a4]);
},rowRemoved:function(_1a5){
if(_1a5>=0){
this._cleanupRowWidgets(this.getRowNode(_1a5));
}
this.grid.edit.save(this,_1a5);
delete this.rowNodes[_1a5];
},getRowNode:function(_1a6){
return this.rowNodes[_1a6];
},getCellNode:function(_1a7,_1a8){
var row=this.getRowNode(_1a7);
if(row){
return this.content.getCellNode(row,_1a8);
}
},getHeaderCellNode:function(_1a9){
if(this.headerContentNode){
return this.header.getCellNode(this.headerContentNode,_1a9);
}
},styleRow:function(_1aa,_1ab){
_1ab._style=_16d(_1ab);
this.styleRowNode(_1aa,_1ab);
},styleRowNode:function(_1ac,_1ad){
if(_1ad){
this.doStyleRowNode(_1ac,_1ad);
}
},doStyleRowNode:function(_1ae,_1af){
this.grid.styleRowNode(_1ae,_1af);
},updateRow:function(_1b0){
var _1b1=this.getRowNode(_1b0);
if(_1b1){
_1b1.style.height="";
this.buildRow(_1b0,_1b1);
}
if(dojo.isIE&&dojo.IEGridEvent&&dojo.IEGridEvent.rowIndex!==undefined&&dojo.IEGridEvent.cellIndex!==undefined&&dojo.IEGridEvent.rowIndex==_1b0){
var _1b2=dojo.query("td",_1b1)[dojo.IEGridEvent.cellIndex];
var _1b3=dojo.query("input",_1b2);
if(_1b3.length){
dojo.IEGridEvent.target=_1b3[0];
}else{
dojo.IEGridEvent.target=_1b2;
}
}
return _1b1;
},updateRowStyles:function(_1b4){
this.styleRowNode(_1b4,this.getRowNode(_1b4));
},lastTop:0,firstScroll:0,doscroll:function(_1b5){
var _1b6=dojo._isBodyLtr();
if(this.firstScroll<2){
if((!_1b6&&this.firstScroll==1)||(_1b6&&this.firstScroll===0)){
var s=dojo.marginBox(this.headerNodeContainer);
if(dojo.isIE){
this.headerNodeContainer.style.width=s.w+this.getScrollbarWidth()+"px";
}else{
if(dojo.isMoz){
this.headerNodeContainer.style.width=s.w-this.getScrollbarWidth()+"px";
this.scrollboxNode.scrollLeft=_1b6?this.scrollboxNode.clientWidth-this.scrollboxNode.scrollWidth:this.scrollboxNode.scrollWidth-this.scrollboxNode.clientWidth;
}
}
}
this.firstScroll++;
}
this.headerNode.scrollLeft=this.scrollboxNode.scrollLeft;
var top=this.scrollboxNode.scrollTop;
if(top!==this.lastTop){
this.grid.scrollTo(top);
}
},setScrollTop:function(_1b7){
this.lastTop=_1b7;
this.scrollboxNode.scrollTop=_1b7;
return this.scrollboxNode.scrollTop;
},doContentEvent:function(e){
if(this.content.decorateEvent(e)){
this.grid.onContentEvent(e);
}
},doHeaderEvent:function(e){
if(this.header.decorateEvent(e)){
this.grid.onHeaderEvent(e);
}
},dispatchContentEvent:function(e){
return this.content.dispatchEvent(e);
},dispatchHeaderEvent:function(e){
return this.header.dispatchEvent(e);
},setColWidth:function(_1b8,_1b9){
this.grid.setCellWidth(_1b8,_1b9+"px");
},update:function(){
if(!this.domNode){
return;
}
this.content.update();
this.grid.update();
var left=this.scrollboxNode.scrollLeft;
this.scrollboxNode.scrollLeft=left;
this.headerNode.scrollLeft=left;
}});
dojo.declare("dojox.grid._GridAvatar",dojo.dnd.Avatar,{construct:function(){
var dd=dojo.doc;
var a=dd.createElement("table");
a.cellPadding=a.cellSpacing="0";
a.className="dojoxGridDndAvatar";
a.style.position="absolute";
a.style.zIndex=1999;
a.style.margin="0px";
var b=dd.createElement("tbody");
var tr=dd.createElement("tr");
var td=dd.createElement("td");
var img=dd.createElement("td");
tr.className="dojoxGridDndAvatarItem";
img.className="dojoxGridDndAvatarItemImage";
img.style.width="16px";
var _1ba=this.manager.source,node;
if(_1ba.creator){
node=_1ba._normalizedCreator(_1ba.getItem(this.manager.nodes[0].id).data,"avatar").node;
}else{
node=this.manager.nodes[0].cloneNode(true);
var _1bb,_1bc;
if(node.tagName.toLowerCase()=="tr"){
_1bb=dd.createElement("table");
_1bc=dd.createElement("tbody");
_1bc.appendChild(node);
_1bb.appendChild(_1bc);
node=_1bb;
}else{
if(node.tagName.toLowerCase()=="th"){
_1bb=dd.createElement("table");
_1bc=dd.createElement("tbody");
var r=dd.createElement("tr");
_1bb.cellPadding=_1bb.cellSpacing="0";
r.appendChild(node);
_1bc.appendChild(r);
_1bb.appendChild(_1bc);
node=_1bb;
}
}
}
node.id="";
td.appendChild(node);
tr.appendChild(img);
tr.appendChild(td);
dojo.style(tr,"opacity",0.9);
b.appendChild(tr);
a.appendChild(b);
this.node=a;
var m=dojo.dnd.manager();
this.oldOffsetY=m.OFFSET_Y;
m.OFFSET_Y=1;
},destroy:function(){
dojo.dnd.manager().OFFSET_Y=this.oldOffsetY;
this.inherited(arguments);
}});
var _1bd=dojo.dnd.manager().makeAvatar;
dojo.dnd.manager().makeAvatar=function(){
var src=this.source;
if(src.viewIndex!==undefined&&!dojo.hasClass(dojo.body(),"dijit_a11y")){
return new dojox.grid._GridAvatar(this);
}
return _1bd.call(dojo.dnd.manager());
};
})();
}
if(!dojo._hasResource["dojox.grid._RowSelector"]){
dojo._hasResource["dojox.grid._RowSelector"]=true;
dojo.provide("dojox.grid._RowSelector");
dojo.declare("dojox.grid._RowSelector",dojox.grid._View,{defaultWidth:"2em",noscroll:true,padBorderWidth:2,buildRendering:function(){
this.inherited("buildRendering",arguments);
this.scrollboxNode.style.overflow="hidden";
this.headerNode.style.visibility="hidden";
},getWidth:function(){
return this.viewWidth||this.defaultWidth;
},buildRowContent:function(_1be,_1bf){
var w=this.contentWidth||0;
_1bf.innerHTML="<table class=\"dojoxGridRowbarTable\" style=\"width:"+w+"px;height:1px;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\"><tr><td class=\"dojoxGridRowbarInner\">&nbsp;</td></tr></table>";
},renderHeader:function(){
},updateRow:function(){
},resize:function(){
this.adaptHeight();
},adaptWidth:function(){
if(!("contentWidth" in this)&&this.contentNode){
this.contentWidth=this.contentNode.offsetWidth-this.padBorderWidth;
}
},doStyleRowNode:function(_1c0,_1c1){
var n=["dojoxGridRowbar dojoxGridNonNormalizedCell"];
if(this.grid.rows.isOver(_1c0)){
n.push("dojoxGridRowbarOver");
}
if(this.grid.selection.isSelected(_1c0)){
n.push("dojoxGridRowbarSelected");
}
_1c1.className=n.join(" ");
},domouseover:function(e){
this.grid.onMouseOverRow(e);
},domouseout:function(e){
if(!this.isIntraRowEvent(e)){
this.grid.onMouseOutRow(e);
}
}});
}
if(!dojo._hasResource["dojox.grid._Layout"]){
dojo._hasResource["dojox.grid._Layout"]=true;
dojo.provide("dojox.grid._Layout");
dojo.declare("dojox.grid._Layout",null,{constructor:function(_1c2){
this.grid=_1c2;
},cells:[],structure:null,defaultWidth:"6em",moveColumn:function(_1c3,_1c4,_1c5,_1c6,_1c7){
var _1c8=this.structure[_1c3].cells[0];
var _1c9=this.structure[_1c4].cells[0];
var cell=null;
var _1ca=0;
var _1cb=0;
for(var i=0,c;c=_1c8[i];i++){
if(c.index==_1c5){
_1ca=i;
break;
}
}
cell=_1c8.splice(_1ca,1)[0];
cell.view=this.grid.views.views[_1c4];
for(i=0,c=null;c=_1c9[i];i++){
if(c.index==_1c6){
_1cb=i;
break;
}
}
if(!_1c7){
_1cb+=1;
}
_1c9.splice(_1cb,0,cell);
var _1cc=this.grid.getCell(this.grid.getSortIndex());
if(_1cc){
_1cc._currentlySorted=this.grid.getSortAsc();
}
this.cells=[];
_1c5=0;
var v;
for(i=0;v=this.structure[i];i++){
for(var j=0,cs;cs=v.cells[j];j++){
for(var k=0;c=cs[k];k++){
c.index=_1c5;
this.cells.push(c);
if("_currentlySorted" in c){
var si=_1c5+1;
si*=c._currentlySorted?1:-1;
this.grid.sortInfo=si;
delete c._currentlySorted;
}
_1c5++;
}
}
}
dojo.forEach(this.cells,function(c){
var _1cd=c.markup[2].split(" ");
var _1ce=parseInt(_1cd[1].substring(5));
if(_1ce!=c.index){
_1cd[1]="idx=\""+c.index+"\"";
c.markup[2]=_1cd.join(" ");
}
});
this.grid.setupHeaderMenu();
},setColumnVisibility:function(_1cf,_1d0){
var cell=this.cells[_1cf];
if(cell.hidden==_1d0){
cell.hidden=!_1d0;
var v=cell.view,w=v.viewWidth;
if(w&&w!="auto"){
v._togglingColumn=dojo.marginBox(cell.getHeaderNode()).w||0;
}
v.update();
return true;
}else{
return false;
}
},addCellDef:function(_1d1,_1d2,_1d3){
var self=this;
var _1d4=function(_1d5){
var w=0;
if(_1d5.colSpan>1){
w=0;
}else{
w=_1d5.width||self._defaultCellProps.width||self.defaultWidth;
if(!isNaN(w)){
w=w+"em";
}
}
return w;
};
var _1d6={grid:this.grid,subrow:_1d1,layoutIndex:_1d2,index:this.cells.length};
if(_1d3&&_1d3 instanceof dojox.grid.cells._Base){
var _1d7=dojo.clone(_1d3);
_1d6.unitWidth=_1d4(_1d7._props);
_1d7=dojo.mixin(_1d7,this._defaultCellProps,_1d3._props,_1d6);
return _1d7;
}
var _1d8=_1d3.type||_1d3.cellType||this._defaultCellProps.type||this._defaultCellProps.cellType||dojox.grid.cells.Cell;
_1d6.unitWidth=_1d4(_1d3);
return new _1d8(dojo.mixin({},this._defaultCellProps,_1d3,_1d6));
},addRowDef:function(_1d9,_1da){
var _1db=[];
var _1dc=0,_1dd=0,_1de=true;
for(var i=0,def,cell;(def=_1da[i]);i++){
cell=this.addCellDef(_1d9,i,def);
_1db.push(cell);
this.cells.push(cell);
if(_1de&&cell.relWidth){
_1dc+=cell.relWidth;
}else{
if(cell.width){
var w=cell.width;
if(typeof w=="string"&&w.slice(-1)=="%"){
_1dd+=window.parseInt(w,10);
}else{
if(w=="auto"){
_1de=false;
}
}
}
}
}
if(_1dc&&_1de){
dojo.forEach(_1db,function(cell){
if(cell.relWidth){
cell.width=cell.unitWidth=((cell.relWidth/_1dc)*(100-_1dd))+"%";
}
});
}
return _1db;
},addRowsDef:function(_1df){
var _1e0=[];
if(dojo.isArray(_1df)){
if(dojo.isArray(_1df[0])){
for(var i=0,row;_1df&&(row=_1df[i]);i++){
_1e0.push(this.addRowDef(i,row));
}
}else{
_1e0.push(this.addRowDef(0,_1df));
}
}
return _1e0;
},addViewDef:function(_1e1){
this._defaultCellProps=_1e1.defaultCell||{};
if(_1e1.width&&_1e1.width=="auto"){
delete _1e1.width;
}
return dojo.mixin({},_1e1,{cells:this.addRowsDef(_1e1.rows||_1e1.cells)});
},setStructure:function(_1e2){
this.fieldIndex=0;
this.cells=[];
var s=this.structure=[];
if(this.grid.rowSelector){
var sel={type:dojox._scopeName+".grid._RowSelector"};
if(dojo.isString(this.grid.rowSelector)){
var _1e3=this.grid.rowSelector;
if(_1e3=="false"){
sel=null;
}else{
if(_1e3!="true"){
sel["width"]=_1e3;
}
}
}else{
if(!this.grid.rowSelector){
sel=null;
}
}
if(sel){
s.push(this.addViewDef(sel));
}
}
var _1e4=function(def){
return ("name" in def||"field" in def||"get" in def);
};
var _1e5=function(def){
if(dojo.isArray(def)){
if(dojo.isArray(def[0])||_1e4(def[0])){
return true;
}
}
return false;
};
var _1e6=function(def){
return (def!==null&&dojo.isObject(def)&&("cells" in def||"rows" in def||("type" in def&&!_1e4(def))));
};
if(dojo.isArray(_1e2)){
var _1e7=false;
for(var i=0,st;(st=_1e2[i]);i++){
if(_1e6(st)){
_1e7=true;
break;
}
}
if(!_1e7){
s.push(this.addViewDef({cells:_1e2}));
}else{
for(i=0;(st=_1e2[i]);i++){
if(_1e5(st)){
s.push(this.addViewDef({cells:st}));
}else{
if(_1e6(st)){
s.push(this.addViewDef(st));
}
}
}
}
}else{
if(_1e6(_1e2)){
s.push(this.addViewDef(_1e2));
}
}
this.cellCount=this.cells.length;
this.grid.setupHeaderMenu();
}});
}
if(!dojo._hasResource["dojox.grid._ViewManager"]){
dojo._hasResource["dojox.grid._ViewManager"]=true;
dojo.provide("dojox.grid._ViewManager");
dojo.declare("dojox.grid._ViewManager",null,{constructor:function(_1e8){
this.grid=_1e8;
},defaultWidth:200,views:[],resize:function(){
this.onEach("resize");
},render:function(){
this.onEach("render");
},addView:function(_1e9){
_1e9.idx=this.views.length;
this.views.push(_1e9);
},destroyViews:function(){
for(var i=0,v;v=this.views[i];i++){
v.destroy();
}
this.views=[];
},getContentNodes:function(){
var _1ea=[];
for(var i=0,v;v=this.views[i];i++){
_1ea.push(v.contentNode);
}
return _1ea;
},forEach:function(_1eb){
for(var i=0,v;v=this.views[i];i++){
_1eb(v,i);
}
},onEach:function(_1ec,_1ed){
_1ed=_1ed||[];
for(var i=0,v;v=this.views[i];i++){
if(_1ec in v){
v[_1ec].apply(v,_1ed);
}
}
},normalizeHeaderNodeHeight:function(){
var _1ee=[];
for(var i=0,v;(v=this.views[i]);i++){
if(v.headerContentNode.firstChild){
_1ee.push(v.headerContentNode);
}
}
this.normalizeRowNodeHeights(_1ee);
},normalizeRowNodeHeights:function(_1ef){
var h=0;
var _1f0=[];
if(this.grid.rowHeight){
h=this.grid.rowHeight;
}else{
if(_1ef.length<=1){
return;
}
for(var i=0,n;(n=_1ef[i]);i++){
if(!dojo.hasClass(n,"dojoxGridNonNormalizedCell")){
_1f0[i]=n.firstChild.offsetHeight;
h=Math.max(h,_1f0[i]);
}
}
h=(h>=0?h:0);
if(dojo.isMoz&&h){
h++;
}
}
for(i=0;(n=_1ef[i]);i++){
if(_1f0[i]!=h){
n.firstChild.style.height=h+"px";
}
}
},resetHeaderNodeHeight:function(){
for(var i=0,v,n;(v=this.views[i]);i++){
n=v.headerContentNode.firstChild;
if(n){
n.style.height="";
}
}
},renormalizeRow:function(_1f1){
var _1f2=[];
for(var i=0,v,n;(v=this.views[i])&&(n=v.getRowNode(_1f1));i++){
n.firstChild.style.height="";
_1f2.push(n);
}
this.normalizeRowNodeHeights(_1f2);
},getViewWidth:function(_1f3){
return this.views[_1f3].getWidth()||this.defaultWidth;
},measureHeader:function(){
this.resetHeaderNodeHeight();
this.forEach(function(_1f4){
_1f4.headerContentNode.style.height="";
});
var h=0;
this.forEach(function(_1f5){
h=Math.max(_1f5.headerNode.offsetHeight,h);
});
return h;
},measureContent:function(){
var h=0;
this.forEach(function(_1f6){
h=Math.max(_1f6.domNode.offsetHeight,h);
});
return h;
},findClient:function(_1f7){
var c=this.grid.elasticView||-1;
if(c<0){
for(var i=1,v;(v=this.views[i]);i++){
if(v.viewWidth){
for(i=1;(v=this.views[i]);i++){
if(!v.viewWidth){
c=i;
break;
}
}
break;
}
}
}
if(c<0){
c=Math.floor(this.views.length/2);
}
return c;
},arrange:function(l,w){
var i,v,vw,len=this.views.length;
var c=(w<=0?len:this.findClient());
var _1f8=function(v,l){
var ds=v.domNode.style;
var hs=v.headerNode.style;
if(!dojo._isBodyLtr()){
ds.right=l+"px";
if(dojo.isMoz){
hs.right=l+v.getScrollbarWidth()+"px";
hs.width=parseInt(hs.width,10)-v.getScrollbarWidth()+"px";
}else{
hs.right=l+"px";
}
}else{
ds.left=l+"px";
hs.left=l+"px";
}
ds.top=0+"px";
hs.top=0;
};
for(i=0;(v=this.views[i])&&(i<c);i++){
vw=this.getViewWidth(i);
v.setSize(vw,0);
_1f8(v,l);
if(v.headerContentNode&&v.headerContentNode.firstChild){
vw=v.getColumnsWidth()+v.getScrollbarWidth();
}else{
vw=v.domNode.offsetWidth;
}
l+=vw;
}
i++;
var r=w;
for(var j=len-1;(v=this.views[j])&&(i<=j);j--){
vw=this.getViewWidth(j);
v.setSize(vw,0);
vw=v.domNode.offsetWidth;
r-=vw;
_1f8(v,r);
}
if(c<len){
v=this.views[c];
vw=Math.max(1,r-l);
v.setSize(vw+"px",0);
_1f8(v,l);
}
return l;
},renderRow:function(_1f9,_1fa,_1fb){
var _1fc=[];
for(var i=0,v,n,_1fd;(v=this.views[i])&&(n=_1fa[i]);i++){
_1fd=v.renderRow(_1f9);
n.appendChild(_1fd);
_1fc.push(_1fd);
}
if(!_1fb){
this.normalizeRowNodeHeights(_1fc);
}
},rowRemoved:function(_1fe){
this.onEach("rowRemoved",[_1fe]);
},updateRow:function(_1ff,_200){
for(var i=0,v;v=this.views[i];i++){
v.updateRow(_1ff);
}
if(!_200){
this.renormalizeRow(_1ff);
}
},updateRowStyles:function(_201){
this.onEach("updateRowStyles",[_201]);
},setScrollTop:function(_202){
var top=_202;
for(var i=0,v;v=this.views[i];i++){
top=v.setScrollTop(_202);
if(dojo.isIE&&v.headerNode&&v.scrollboxNode){
v.headerNode.scrollLeft=v.scrollboxNode.scrollLeft;
}
}
return top;
},getFirstScrollingView:function(){
for(var i=0,v;(v=this.views[i]);i++){
if(v.hasHScrollbar()||v.hasVScrollbar()){
return v;
}
}
return null;
}});
}
if(!dojo._hasResource["dojox.grid._RowManager"]){
dojo._hasResource["dojox.grid._RowManager"]=true;
dojo.provide("dojox.grid._RowManager");
(function(){
var _203=function(_204,_205){
if(_204.style.cssText==undefined){
_204.setAttribute("style",_205);
}else{
_204.style.cssText=_205;
}
};
dojo.declare("dojox.grid._RowManager",null,{constructor:function(_206){
this.grid=_206;
},linesToEms:2,overRow:-2,prepareStylingRow:function(_207,_208){
return {index:_207,node:_208,odd:Boolean(_207&1),selected:!!this.grid.selection.isSelected(_207),over:this.isOver(_207),customStyles:"",customClasses:"dojoxGridRow"};
},styleRowNode:function(_209,_20a){
var row=this.prepareStylingRow(_209,_20a);
this.grid.onStyleRow(row);
this.applyStyles(row);
},applyStyles:function(_20b){
var i=_20b;
i.node.className=i.customClasses;
var h=i.node.style.height;
_203(i.node,i.customStyles+";"+(i.node._style||""));
i.node.style.height=h;
},updateStyles:function(_20c){
this.grid.updateRowStyles(_20c);
},setOverRow:function(_20d){
var last=this.overRow;
this.overRow=_20d;
if((last!=this.overRow)&&(dojo.isString(last)||last>=0)){
this.updateStyles(last);
}
this.updateStyles(this.overRow);
},isOver:function(_20e){
return (this.overRow==_20e&&!dojo.hasClass(this.grid.domNode,"dojoxGridColumnResizing"));
}});
})();
}
if(!dojo._hasResource["dojox.grid._FocusManager"]){
dojo._hasResource["dojox.grid._FocusManager"]=true;
dojo.provide("dojox.grid._FocusManager");
dojo.declare("dojox.grid._FocusManager",null,{constructor:function(_20f){
this.grid=_20f;
this.cell=null;
this.rowIndex=-1;
this._connects=[];
this._headerConnects=[];
this.headerMenu=this.grid.headerMenu;
this._connects.push(dojo.connect(this.grid.domNode,"onfocus",this,"doFocus"));
this._connects.push(dojo.connect(this.grid.domNode,"onblur",this,"doBlur"));
this._connects.push(dojo.connect(this.grid.domNode,"oncontextmenu",this,"doContextMenu"));
this._connects.push(dojo.connect(this.grid.lastFocusNode,"onfocus",this,"doLastNodeFocus"));
this._connects.push(dojo.connect(this.grid.lastFocusNode,"onblur",this,"doLastNodeBlur"));
this._connects.push(dojo.connect(this.grid,"_onFetchComplete",this,"_delayedCellFocus"));
this._connects.push(dojo.connect(this.grid,"postrender",this,"_delayedHeaderFocus"));
},destroy:function(){
dojo.forEach(this._connects,dojo.disconnect);
dojo.forEach(this._headerConnects,dojo.disconnect);
delete this.grid;
delete this.cell;
},_colHeadNode:null,_colHeadFocusIdx:null,_contextMenuBindNode:null,tabbingOut:false,focusClass:"dojoxGridCellFocus",focusView:null,initFocusView:function(){
this.focusView=this.grid.views.getFirstScrollingView()||this.focusView||this.grid.views.views[0];
this._initColumnHeaders();
},isFocusCell:function(_210,_211){
return (this.cell==_210)&&(this.rowIndex==_211);
},isLastFocusCell:function(){
if(this.cell){
return (this.rowIndex==this.grid.rowCount-1)&&(this.cell.index==this.grid.layout.cellCount-1);
}
return false;
},isFirstFocusCell:function(){
if(this.cell){
return (this.rowIndex===0)&&(this.cell.index===0);
}
return false;
},isNoFocusCell:function(){
return (this.rowIndex<0)||!this.cell;
},isNavHeader:function(){
return (!!this._colHeadNode);
},getHeaderIndex:function(){
if(this._colHeadNode){
return dojo.indexOf(this._findHeaderCells(),this._colHeadNode);
}else{
return -1;
}
},_focusifyCellNode:function(_212){
var n=this.cell&&this.cell.getNode(this.rowIndex);
if(n){
dojo.toggleClass(n,this.focusClass,_212);
if(_212){
var sl=this.scrollIntoView();
try{
if(!this.grid.edit.isEditing()){
dojox.grid.util.fire(n,"focus");
if(sl){
this.cell.view.scrollboxNode.scrollLeft=sl;
}
}
}
catch(e){
}
}
}
},_delayedCellFocus:function(){
if(this.isNavHeader()||!this.grid._focused){
return;
}
var n=this.cell&&this.cell.getNode(this.rowIndex);
if(n){
try{
if(!this.grid.edit.isEditing()){
dojo.toggleClass(n,this.focusClass,true);
this.blurHeader();
dojox.grid.util.fire(n,"focus");
}
}
catch(e){
}
}
},_delayedHeaderFocus:function(){
if(this.isNavHeader()){
this.focusHeader();
this.grid.domNode.focus();
}
},_initColumnHeaders:function(){
dojo.forEach(this._headerConnects,dojo.disconnect);
this._headerConnects=[];
var _213=this._findHeaderCells();
for(var i=0;i<_213.length;i++){
this._headerConnects.push(dojo.connect(_213[i],"onfocus",this,"doColHeaderFocus"));
this._headerConnects.push(dojo.connect(_213[i],"onblur",this,"doColHeaderBlur"));
}
},_findHeaderCells:function(){
var _214=dojo.query("th",this.grid.viewsHeaderNode);
var _215=[];
for(var i=0;i<_214.length;i++){
var _216=_214[i];
var _217=dojo.hasAttr(_216,"tabIndex");
var _218=dojo.attr(_216,"tabIndex");
if(_217&&_218<0){
_215.push(_216);
}
}
return _215;
},_setActiveColHeader:function(_219,_21a,_21b){
dojo.attr(this.grid.domNode,"aria-activedescendant",_219.id);
if(_21b!=null&&_21b>=0&&_21b!=_21a){
dojo.toggleClass(this._findHeaderCells()[_21b],this.focusClass,false);
}
dojo.toggleClass(_219,this.focusClass,true);
this._colHeadNode=_219;
this._colHeadFocusIdx=_21a;
this._scrollHeader(this._colHeadFocusIdx);
},scrollIntoView:function(){
var info=(this.cell?this._scrollInfo(this.cell):null);
if(!info||!info.s){
return null;
}
var rt=this.grid.scroller.findScrollTop(this.rowIndex);
if(info.n&&info.sr){
if(info.n.offsetLeft+info.n.offsetWidth>info.sr.l+info.sr.w){
info.s.scrollLeft=info.n.offsetLeft+info.n.offsetWidth-info.sr.w;
}else{
if(info.n.offsetLeft<info.sr.l){
info.s.scrollLeft=info.n.offsetLeft;
}
}
}
if(info.r&&info.sr){
if(rt+info.r.offsetHeight>info.sr.t+info.sr.h){
this.grid.setScrollTop(rt+info.r.offsetHeight-info.sr.h);
}else{
if(rt<info.sr.t){
this.grid.setScrollTop(rt);
}
}
}
return info.s.scrollLeft;
},_scrollInfo:function(cell,_21c){
if(cell){
var cl=cell,sbn=cl.view.scrollboxNode,sbnr={w:sbn.clientWidth,l:sbn.scrollLeft,t:sbn.scrollTop,h:sbn.clientHeight},rn=cl.view.getRowNode(this.rowIndex);
return {c:cl,s:sbn,sr:sbnr,n:(_21c?_21c:cell.getNode(this.rowIndex)),r:rn};
}
return null;
},_scrollHeader:function(_21d){
var info=null;
if(this._colHeadNode){
var cell=this.grid.getCell(_21d);
info=this._scrollInfo(cell,cell.getNode(0));
}
if(info&&info.s&&info.sr&&info.n){
var _21e=info.sr.l+info.sr.w;
if(info.n.offsetLeft+info.n.offsetWidth>_21e){
info.s.scrollLeft=info.n.offsetLeft+info.n.offsetWidth-info.sr.w;
}else{
if(info.n.offsetLeft<info.sr.l){
info.s.scrollLeft=info.n.offsetLeft;
}else{
if(dojo.isIE<=7&&cell&&cell.view.headerNode){
cell.view.headerNode.scrollLeft=info.s.scrollLeft;
}
}
}
}
},_isHeaderHidden:function(){
var _21f=this.focusView;
if(!_21f){
for(var i=0,_220;(_220=this.grid.views.views[i]);i++){
if(_220.headerNode){
_21f=_220;
break;
}
}
}
return (_21f&&dojo.getComputedStyle(_21f.headerNode).display=="none");
},colSizeAdjust:function(e,_221,_222){
var _223=this._findHeaderCells();
var view=this.focusView;
if(!view){
for(var i=0,_224;(_224=this.grid.views.views[i]);i++){
if(_224.header.tableMap.map){
view=_224;
break;
}
}
}
var _225=_223[_221];
if(!view||(_221==_223.length-1&&_221===0)){
return;
}
view.content.baseDecorateEvent(e);
e.cellNode=_225;
e.cellIndex=view.content.getCellNodeIndex(e.cellNode);
e.cell=(e.cellIndex>=0?this.grid.getCell(e.cellIndex):null);
if(view.header.canResize(e)){
var _226={l:_222};
var drag=view.header.colResizeSetup(e,false);
view.header.doResizeColumn(drag,null,_226);
view.update();
}
},styleRow:function(_227){
return;
},setFocusIndex:function(_228,_229){
this.setFocusCell(this.grid.getCell(_229),_228);
},setFocusCell:function(_22a,_22b){
if(_22a&&!this.isFocusCell(_22a,_22b)){
this.tabbingOut=false;
if(this._colHeadNode){
this.blurHeader();
}
this._colHeadNode=this._colHeadFocusIdx=null;
this.focusGridView();
this._focusifyCellNode(false);
this.cell=_22a;
this.rowIndex=_22b;
this._focusifyCellNode(true);
}
if(dojo.isOpera){
setTimeout(dojo.hitch(this.grid,"onCellFocus",this.cell,this.rowIndex),1);
}else{
this.grid.onCellFocus(this.cell,this.rowIndex);
}
},next:function(){
if(this.cell){
var row=this.rowIndex,col=this.cell.index+1,cc=this.grid.layout.cellCount-1,rc=this.grid.rowCount-1;
if(col>cc){
col=0;
row++;
}
if(row>rc){
col=cc;
row=rc;
}
if(this.grid.edit.isEditing()){
var _22c=this.grid.getCell(col);
if(!this.isLastFocusCell()&&(!_22c.editable||this.grid.canEdit&&!this.grid.canEdit(_22c,row))){
this.cell=_22c;
this.rowIndex=row;
this.next();
return;
}
}
this.setFocusIndex(row,col);
}
},previous:function(){
if(this.cell){
var row=(this.rowIndex||0),col=(this.cell.index||0)-1;
if(col<0){
col=this.grid.layout.cellCount-1;
row--;
}
if(row<0){
row=0;
col=0;
}
if(this.grid.edit.isEditing()){
var _22d=this.grid.getCell(col);
if(!this.isFirstFocusCell()&&!_22d.editable){
this.cell=_22d;
this.rowIndex=row;
this.previous();
return;
}
}
this.setFocusIndex(row,col);
}
},move:function(_22e,_22f){
var _230=_22f<0?-1:1;
if(this.isNavHeader()){
var _231=this._findHeaderCells();
var _232=currentIdx=dojo.indexOf(_231,this._colHeadNode);
currentIdx+=_22f;
while(currentIdx>=0&&currentIdx<_231.length&&_231[currentIdx].style.display=="none"){
currentIdx+=_230;
}
if((currentIdx>=0)&&(currentIdx<_231.length)){
this._setActiveColHeader(_231[currentIdx],currentIdx,_232);
}
}else{
if(this.cell){
var sc=this.grid.scroller,r=this.rowIndex,rc=this.grid.rowCount-1,row=Math.min(rc,Math.max(0,r+_22e));
if(_22e){
if(_22e>0){
if(row>sc.getLastPageRow(sc.page)){
this.grid.setScrollTop(this.grid.scrollTop+sc.findScrollTop(row)-sc.findScrollTop(r));
}
}else{
if(_22e<0){
if(row<=sc.getPageRow(sc.page)){
this.grid.setScrollTop(this.grid.scrollTop-sc.findScrollTop(r)-sc.findScrollTop(row));
}
}
}
}
var cc=this.grid.layout.cellCount-1,i=this.cell.index,col=Math.min(cc,Math.max(0,i+_22f));
var cell=this.grid.getCell(col);
while(col>=0&&col<cc&&cell&&cell.hidden===true){
col+=_230;
cell=this.grid.getCell(col);
}
if(!cell||cell.hidden===true){
col=i;
}
var n=cell.getNode(row);
if(!n&&_22e){
if((row+_22e)>=0&&(row+_22e)<=rc){
this.move(_22e>0?++_22e:--_22e,_22f);
}
return;
}else{
if((!n||dojo.style(n,"display")==="none")&&_22f){
if((col+_22e)>=0&&(col+_22e)<=cc){
this.move(_22e,_22f>0?++_22f:--_22f);
}
return;
}
}
this.setFocusIndex(row,col);
if(_22e){
this.grid.updateRow(r);
}
}
}
},previousKey:function(e){
if(this.grid.edit.isEditing()){
dojo.stopEvent(e);
this.previous();
}else{
if(!this.isNavHeader()&&!this._isHeaderHidden()){
this.grid.domNode.focus();
dojo.stopEvent(e);
}else{
this.tabOut(this.grid.domNode);
if(this._colHeadFocusIdx!=null){
dojo.toggleClass(this._findHeaderCells()[this._colHeadFocusIdx],this.focusClass,false);
this._colHeadFocusIdx=null;
}
this._focusifyCellNode(false);
}
}
},nextKey:function(e){
var _233=(this.grid.rowCount===0);
if(e.target===this.grid.domNode&&this._colHeadFocusIdx==null){
this.focusHeader();
dojo.stopEvent(e);
}else{
if(this.isNavHeader()){
this.blurHeader();
if(!this.findAndFocusGridCell()){
this.tabOut(this.grid.lastFocusNode);
}
this._colHeadNode=this._colHeadFocusIdx=null;
}else{
if(this.grid.edit.isEditing()){
dojo.stopEvent(e);
this.next();
}else{
this.tabOut(this.grid.lastFocusNode);
}
}
}
},tabOut:function(_234){
this.tabbingOut=true;
_234.focus();
},focusGridView:function(){
dojox.grid.util.fire(this.focusView,"focus");
},focusGrid:function(_235){
this.focusGridView();
this._focusifyCellNode(true);
},findAndFocusGridCell:function(){
var _236=true;
var _237=(this.grid.rowCount===0);
if(this.isNoFocusCell()&&!_237){
var _238=0;
var cell=this.grid.getCell(_238);
if(cell.hidden){
_238=this.isNavHeader()?this._colHeadFocusIdx:0;
}
this.setFocusIndex(0,_238);
}else{
if(this.cell&&!_237){
if(this.focusView&&!this.focusView.rowNodes[this.rowIndex]){
this.grid.scrollToRow(this.rowIndex);
}
this.focusGrid();
}else{
_236=false;
}
}
this._colHeadNode=this._colHeadFocusIdx=null;
return _236;
},focusHeader:function(){
var _239=this._findHeaderCells();
var _23a=this._colHeadFocusIdx;
if(this._isHeaderHidden()){
this.findAndFocusGridCell();
}else{
if(!this._colHeadFocusIdx){
if(this.isNoFocusCell()){
this._colHeadFocusIdx=0;
}else{
this._colHeadFocusIdx=this.cell.index;
}
}
}
this._colHeadNode=_239[this._colHeadFocusIdx];
while(this._colHeadNode&&this._colHeadFocusIdx>=0&&this._colHeadFocusIdx<_239.length&&this._colHeadNode.style.display=="none"){
this._colHeadFocusIdx++;
this._colHeadNode=_239[this._colHeadFocusIdx];
}
if(this._colHeadNode&&this._colHeadNode.style.display!="none"){
if(this.headerMenu&&this._contextMenuBindNode!=this.grid.domNode){
this.headerMenu.unBindDomNode(this.grid.viewsHeaderNode);
this.headerMenu.bindDomNode(this.grid.domNode);
this._contextMenuBindNode=this.grid.domNode;
}
this._setActiveColHeader(this._colHeadNode,this._colHeadFocusIdx,_23a);
this._scrollHeader(this._colHeadFocusIdx);
this._focusifyCellNode(false);
}else{
this.findAndFocusGridCell();
}
},blurHeader:function(){
dojo.removeClass(this._colHeadNode,this.focusClass);
dojo.removeAttr(this.grid.domNode,"aria-activedescendant");
if(this.headerMenu&&this._contextMenuBindNode==this.grid.domNode){
var _23b=this.grid.viewsHeaderNode;
this.headerMenu.unBindDomNode(this.grid.domNode);
this.headerMenu.bindDomNode(_23b);
this._contextMenuBindNode=_23b;
}
},doFocus:function(e){
if(e&&e.target!=e.currentTarget){
dojo.stopEvent(e);
return;
}
if(!this.tabbingOut){
this.focusHeader();
}
this.tabbingOut=false;
dojo.stopEvent(e);
},doBlur:function(e){
dojo.stopEvent(e);
},doContextMenu:function(e){
if(!this.headerMenu){
dojo.stopEvent(e);
}
},doLastNodeFocus:function(e){
if(this.tabbingOut){
this._focusifyCellNode(false);
}else{
if(this.grid.rowCount>0){
if(this.isNoFocusCell()){
this.setFocusIndex(0,0);
}
this._focusifyCellNode(true);
}else{
this.focusHeader();
}
}
this.tabbingOut=false;
dojo.stopEvent(e);
},doLastNodeBlur:function(e){
dojo.stopEvent(e);
},doColHeaderFocus:function(e){
this._setActiveColHeader(e.target,dojo.attr(e.target,"idx"),this._colHeadFocusIdx);
this._scrollHeader(this.getHeaderIndex());
dojo.stopEvent(e);
},doColHeaderBlur:function(e){
dojo.toggleClass(e.target,this.focusClass,false);
}});
}
if(!dojo._hasResource["dojox.grid._EditManager"]){
dojo._hasResource["dojox.grid._EditManager"]=true;
dojo.provide("dojox.grid._EditManager");
dojo.declare("dojox.grid._EditManager",null,{constructor:function(_23c){
this.grid=_23c;
if(dojo.isIE){
this.connections=[dojo.connect(document.body,"onfocus",dojo.hitch(this,"_boomerangFocus"))];
}else{
this.connections=[dojo.connect(this.grid,"onBlur",this,"apply")];
}
},info:{},destroy:function(){
dojo.forEach(this.connections,dojo.disconnect);
},cellFocus:function(_23d,_23e){
if(this.grid.singleClickEdit||this.isEditRow(_23e)){
this.setEditCell(_23d,_23e);
}else{
this.apply();
}
if(this.isEditing()||(_23d&&_23d.editable&&_23d.alwaysEditing)){
this._focusEditor(_23d,_23e);
}
},rowClick:function(e){
if(this.isEditing()&&!this.isEditRow(e.rowIndex)){
this.apply();
}
},styleRow:function(_23f){
if(_23f.index==this.info.rowIndex){
_23f.customClasses+=" dojoxGridRowEditing";
}
},dispatchEvent:function(e){
var c=e.cell,ed=(c&&c["editable"])?c:0;
return ed&&ed.dispatchEvent(e.dispatch,e);
},isEditing:function(){
return this.info.rowIndex!==undefined;
},isEditCell:function(_240,_241){
return (this.info.rowIndex===_240)&&(this.info.cell.index==_241);
},isEditRow:function(_242){
return this.info.rowIndex===_242;
},setEditCell:function(_243,_244){
if(!this.isEditCell(_244,_243.index)&&this.grid.canEdit&&this.grid.canEdit(_243,_244)){
this.start(_243,_244,_243.editable||this.isEditRow(_244));
}
},_focusEditor:function(_245,_246){
dojox.grid.util.fire(_245,"focus",[_246]);
},focusEditor:function(){
if(this.isEditing()){
this._focusEditor(this.info.cell,this.info.rowIndex);
}
},_boomerangWindow:500,_shouldCatchBoomerang:function(){
return this._catchBoomerang>new Date().getTime();
},_boomerangFocus:function(){
if(this._shouldCatchBoomerang()){
this.grid.focus.focusGrid();
this.focusEditor();
this._catchBoomerang=0;
}
},_doCatchBoomerang:function(){
if(dojo.isIE){
this._catchBoomerang=new Date().getTime()+this._boomerangWindow;
}
},start:function(_247,_248,_249){
this.grid.beginUpdate();
this.editorApply();
if(this.isEditing()&&!this.isEditRow(_248)){
this.applyRowEdit();
this.grid.updateRow(_248);
}
if(_249){
this.info={cell:_247,rowIndex:_248};
this.grid.doStartEdit(_247,_248);
this.grid.updateRow(_248);
}else{
this.info={};
}
this.grid.endUpdate();
this.grid.focus.focusGrid();
this._focusEditor(_247,_248);
this._doCatchBoomerang();
},_editorDo:function(_24a){
var c=this.info.cell;
if(c&&c.editable){
c[_24a](this.info.rowIndex);
}
},editorApply:function(){
try{
this._editorDo("apply");
}
catch(e){
this._editorDo("cancel");
}
},editorCancel:function(){
this._editorDo("cancel");
},applyCellEdit:function(_24b,_24c,_24d){
if(this.grid.canEdit(_24c,_24d)){
this.grid.doApplyCellEdit(_24b,_24d,_24c.field);
}
},applyRowEdit:function(){
this.grid.doApplyEdit(this.info.rowIndex,this.info.cell.field);
},apply:function(){
if(this.isEditing()){
this.grid.beginUpdate();
this.editorApply();
this.applyRowEdit();
this.info={};
this.grid.endUpdate();
this.grid.focus.focusGrid();
this._doCatchBoomerang();
}
},cancel:function(){
if(this.isEditing()){
this.grid.beginUpdate();
this.editorCancel();
this.info={};
this.grid.endUpdate();
this.grid.focus.focusGrid();
this._doCatchBoomerang();
}
},save:function(_24e,_24f){
var c=this.info.cell;
if(this.isEditRow(_24e)&&(!_24f||c.view==_24f)&&c.editable){
c.save(c,this.info.rowIndex);
}
},restore:function(_250,_251){
var c=this.info.cell;
if(this.isEditRow(_251)&&c.view==_250&&c.editable){
c.restore(c,this.info.rowIndex);
}
}});
}
if(!dojo._hasResource["dojox.grid.Selection"]){
dojo._hasResource["dojox.grid.Selection"]=true;
dojo.provide("dojox.grid.Selection");
dojo.declare("dojox.grid.Selection",null,{constructor:function(_252){
this.grid=_252;
this.selected=[];
this.setMode(_252.selectionMode);
},mode:"extended",selected:null,updating:0,selectedIndex:-1,setMode:function(mode){
if(this.selected.length){
this.deselectAll();
}
if(mode!="extended"&&mode!="multiple"&&mode!="single"&&mode!="none"){
this.mode="extended";
}else{
this.mode=mode;
}
},onCanSelect:function(_253){
return this.grid.onCanSelect(_253);
},onCanDeselect:function(_254){
return this.grid.onCanDeselect(_254);
},onSelected:function(_255){
},onDeselected:function(_256){
},onChanging:function(){
},onChanged:function(){
},isSelected:function(_257){
if(this.mode=="none"){
return false;
}
return this.selected[_257];
},getFirstSelected:function(){
if(!this.selected.length||this.mode=="none"){
return -1;
}
for(var i=0,l=this.selected.length;i<l;i++){
if(this.selected[i]){
return i;
}
}
return -1;
},getNextSelected:function(_258){
if(this.mode=="none"){
return -1;
}
for(var i=_258+1,l=this.selected.length;i<l;i++){
if(this.selected[i]){
return i;
}
}
return -1;
},getSelected:function(){
var _259=[];
for(var i=0,l=this.selected.length;i<l;i++){
if(this.selected[i]){
_259.push(i);
}
}
return _259;
},getSelectedCount:function(){
var c=0;
for(var i=0;i<this.selected.length;i++){
if(this.selected[i]){
c++;
}
}
return c;
},_beginUpdate:function(){
if(this.updating===0){
this.onChanging();
}
this.updating++;
},_endUpdate:function(){
this.updating--;
if(this.updating===0){
this.onChanged();
}
},select:function(_25a){
if(this.mode=="none"){
return;
}
if(this.mode!="multiple"){
this.deselectAll(_25a);
this.addToSelection(_25a);
}else{
this.toggleSelect(_25a);
}
},addToSelection:function(_25b){
if(this.mode=="none"){
return;
}
if(dojo.isArray(_25b)){
dojo.forEach(_25b,this.addToSelection,this);
return;
}
_25b=Number(_25b);
if(this.selected[_25b]){
this.selectedIndex=_25b;
}else{
if(this.onCanSelect(_25b)!==false){
this.selectedIndex=_25b;
var _25c=this.grid.getRowNode(_25b);
if(_25c){
dojo.attr(_25c,"aria-selected","true");
}
this._beginUpdate();
this.selected[_25b]=true;
this.onSelected(_25b);
this._endUpdate();
}
}
},deselect:function(_25d){
if(this.mode=="none"){
return;
}
if(dojo.isArray(_25d)){
dojo.forEach(_25d,this.deselect,this);
return;
}
_25d=Number(_25d);
if(this.selectedIndex==_25d){
this.selectedIndex=-1;
}
if(this.selected[_25d]){
if(this.onCanDeselect(_25d)===false){
return;
}
var _25e=this.grid.getRowNode(_25d);
if(_25e){
dojo.attr(_25e,"aria-selected","false");
}
this._beginUpdate();
delete this.selected[_25d];
this.onDeselected(_25d);
this._endUpdate();
}
},setSelected:function(_25f,_260){
this[(_260?"addToSelection":"deselect")](_25f);
},toggleSelect:function(_261){
if(dojo.isArray(_261)){
dojo.forEach(_261,this.toggleSelect,this);
return;
}
this.setSelected(_261,!this.selected[_261]);
},_range:function(_262,inTo,func){
var s=(_262>=0?_262:inTo),e=inTo;
if(s>e){
e=s;
s=inTo;
}
for(var i=s;i<=e;i++){
func(i);
}
},selectRange:function(_263,inTo){
this._range(_263,inTo,dojo.hitch(this,"addToSelection"));
},deselectRange:function(_264,inTo){
this._range(_264,inTo,dojo.hitch(this,"deselect"));
},insert:function(_265){
this.selected.splice(_265,0,false);
if(this.selectedIndex>=_265){
this.selectedIndex++;
}
},remove:function(_266){
this.selected.splice(_266,1);
if(this.selectedIndex>=_266){
this.selectedIndex--;
}
},deselectAll:function(_267){
for(var i in this.selected){
if((i!=_267)&&(this.selected[i]===true)){
this.deselect(i);
}
}
},clickSelect:function(_268,_269,_26a){
if(this.mode=="none"){
return;
}
this._beginUpdate();
if(this.mode!="extended"){
this.select(_268);
}else{
var _26b=this.selectedIndex;
if(!_269){
this.deselectAll(_268);
}
if(_26a){
this.selectRange(_26b,_268);
}else{
if(_269){
this.toggleSelect(_268);
}else{
this.addToSelection(_268);
}
}
}
this._endUpdate();
},clickSelectEvent:function(e){
if(!this.grid.disabled){
this.clickSelect(e.rowIndex,dojo.isCopyKey(e),e.shiftKey);
}
},clear:function(){
this._beginUpdate();
this.deselectAll();
this._endUpdate();
}});
}
if(!dojo._hasResource["dojox.grid._Events"]){
dojo._hasResource["dojox.grid._Events"]=true;
dojo.provide("dojox.grid._Events");
dojo.declare("dojox.grid._Events",null,{cellOverClass:"dojoxGridCellOver",onKeyEvent:function(e){
this.dispatchKeyEvent(e);
},onContentEvent:function(e){
this.dispatchContentEvent(e);
},onHeaderEvent:function(e){
this.dispatchHeaderEvent(e);
},onStyleRow:function(_26c){
var i=_26c;
i.customClasses+=(i.odd?" dojoxGridRowOdd":"")+(i.selected?" dojoxGridRowSelected":"")+(i.over?" dojoxGridRowOver":"");
this.focus.styleRow(_26c);
this.edit.styleRow(_26c);
},onKeyDown:function(e){
if(e.altKey||e.metaKey){
return;
}
var dk=dojo.keys;
var _26d;
switch(e.keyCode){
case dk.ESCAPE:
this.edit.cancel();
break;
case dk.ENTER:
if(!this.edit.isEditing()){
_26d=this.focus.getHeaderIndex();
if(_26d>=0){
this.setSortIndex(_26d);
break;
}else{
this.selection.clickSelect(this.focus.rowIndex,dojo.isCopyKey(e),e.shiftKey);
}
dojo.stopEvent(e);
}
var _26e=false;
if(!e.shiftKey){
var _26f=this.edit.isEditing();
if(_26f){
var _270=this.focus.focusView||this.views.views[0];
_270.content.decorateEvent(e);
_26e=true;
}
this.edit.apply();
if(!_26f){
this.edit.setEditCell(this.focus.cell,this.focus.rowIndex);
}
}
if(!this.edit.isEditing()){
if(!_26e){
var _270=this.focus.focusView||this.views.views[0];
_270.content.decorateEvent(e);
}
this.onRowClick(e);
dojo.stopEvent(e);
}
break;
case dk.SPACE:
if(!this.edit.isEditing()){
_26d=this.focus.getHeaderIndex();
if(_26d>=0){
this.setSortIndex(_26d);
break;
}else{
this.selection.clickSelect(this.focus.rowIndex,dojo.isCopyKey(e),e.shiftKey);
}
dojo.stopEvent(e);
}
break;
case dk.TAB:
this.focus[e.shiftKey?"previousKey":"nextKey"](e);
break;
case dk.LEFT_ARROW:
case dk.RIGHT_ARROW:
if(!this.edit.isEditing()){
var _271=e.keyCode;
dojo.stopEvent(e);
_26d=this.focus.getHeaderIndex();
if(_26d>=0&&(e.shiftKey&&e.ctrlKey)){
this.focus.colSizeAdjust(e,_26d,(_271==dk.LEFT_ARROW?-1:1)*5);
}else{
var _272=(_271==dk.LEFT_ARROW)?1:-1;
if(dojo._isBodyLtr()){
_272*=-1;
}
this.focus.move(0,_272);
}
}
break;
case dk.UP_ARROW:
if(!this.edit.isEditing()&&this.focus.rowIndex!==0){
dojo.stopEvent(e);
this.focus.move(-1,0);
}
break;
case dk.DOWN_ARROW:
if(!this.edit.isEditing()&&this.focus.rowIndex+1!=this.rowCount){
dojo.stopEvent(e);
this.focus.move(1,0);
}
break;
case dk.PAGE_UP:
if(!this.edit.isEditing()&&this.focus.rowIndex!==0){
dojo.stopEvent(e);
if(this.focus.rowIndex!=this.scroller.firstVisibleRow+1){
this.focus.move(this.scroller.firstVisibleRow-this.focus.rowIndex,0);
}else{
this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex-1));
this.focus.move(this.scroller.firstVisibleRow-this.scroller.lastVisibleRow+1,0);
}
}
break;
case dk.PAGE_DOWN:
if(!this.edit.isEditing()&&this.focus.rowIndex+1!=this.rowCount){
dojo.stopEvent(e);
if(this.focus.rowIndex!=this.scroller.lastVisibleRow-1){
this.focus.move(this.scroller.lastVisibleRow-this.focus.rowIndex-1,0);
}else{
this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex+1));
this.focus.move(this.scroller.lastVisibleRow-this.scroller.firstVisibleRow-1,0);
}
}
break;
default:
break;
}
},onMouseOver:function(e){
e.rowIndex==-1?this.onHeaderCellMouseOver(e):this.onCellMouseOver(e);
},onMouseOut:function(e){
e.rowIndex==-1?this.onHeaderCellMouseOut(e):this.onCellMouseOut(e);
},onMouseDown:function(e){
e.rowIndex==-1?this.onHeaderCellMouseDown(e):this.onCellMouseDown(e);
},onMouseOverRow:function(e){
if(!this.rows.isOver(e.rowIndex)){
this.rows.setOverRow(e.rowIndex);
e.rowIndex==-1?this.onHeaderMouseOver(e):this.onRowMouseOver(e);
}
},onMouseOutRow:function(e){
if(this.rows.isOver(-1)){
this.onHeaderMouseOut(e);
}else{
if(!this.rows.isOver(-2)){
this.rows.setOverRow(-2);
this.onRowMouseOut(e);
}
}
},onMouseDownRow:function(e){
if(e.rowIndex!=-1){
this.onRowMouseDown(e);
}
},onCellMouseOver:function(e){
if(e.cellNode){
dojo.addClass(e.cellNode,this.cellOverClass);
}
},onCellMouseOut:function(e){
if(e.cellNode){
dojo.removeClass(e.cellNode,this.cellOverClass);
}
},onCellMouseDown:function(e){
},onCellClick:function(e){
this._click[0]=this._click[1];
this._click[1]=e;
if(!this.edit.isEditCell(e.rowIndex,e.cellIndex)){
this.focus.setFocusCell(e.cell,e.rowIndex);
}
this.onRowClick(e);
},onCellDblClick:function(e){
if(this._click.length>1&&dojo.isIE){
this.edit.setEditCell(this._click[1].cell,this._click[1].rowIndex);
}else{
if(this._click.length>1&&this._click[0].rowIndex!=this._click[1].rowIndex){
this.edit.setEditCell(this._click[0].cell,this._click[0].rowIndex);
}else{
this.edit.setEditCell(e.cell,e.rowIndex);
}
}
this.onRowDblClick(e);
},onCellContextMenu:function(e){
this.onRowContextMenu(e);
},onCellFocus:function(_273,_274){
this.edit.cellFocus(_273,_274);
},onRowClick:function(e){
this.edit.rowClick(e);
this.selection.clickSelectEvent(e);
},onRowDblClick:function(e){
},onRowMouseOver:function(e){
},onRowMouseOut:function(e){
},onRowMouseDown:function(e){
},onRowContextMenu:function(e){
dojo.stopEvent(e);
},onHeaderMouseOver:function(e){
},onHeaderMouseOut:function(e){
},onHeaderCellMouseOver:function(e){
if(e.cellNode){
dojo.addClass(e.cellNode,this.cellOverClass);
}
},onHeaderCellMouseOut:function(e){
if(e.cellNode){
dojo.removeClass(e.cellNode,this.cellOverClass);
}
},onHeaderCellMouseDown:function(e){
},onHeaderClick:function(e){
},onHeaderCellClick:function(e){
this.setSortIndex(e.cell.index);
this.onHeaderClick(e);
},onHeaderDblClick:function(e){
},onHeaderCellDblClick:function(e){
this.onHeaderDblClick(e);
},onHeaderCellContextMenu:function(e){
this.onHeaderContextMenu(e);
},onHeaderContextMenu:function(e){
if(!this.headerMenu){
dojo.stopEvent(e);
}
},onStartEdit:function(_275,_276){
},onApplyCellEdit:function(_277,_278,_279){
},onCancelEdit:function(_27a){
},onApplyEdit:function(_27b){
},onCanSelect:function(_27c){
return true;
},onCanDeselect:function(_27d){
return true;
},onSelected:function(_27e){
this.updateRowStyles(_27e);
},onDeselected:function(_27f){
this.updateRowStyles(_27f);
},onSelectionChanged:function(){
}});
}
if(!dojo._hasResource["dojox.grid._Grid"]){
dojo._hasResource["dojox.grid._Grid"]=true;
dojo.provide("dojox.grid._Grid");
(function(){
if(!dojo.isCopyKey){
dojo.isCopyKey=dojo.dnd.getCopyKeyState;
}
dojo.declare("dojox.grid._Grid",[dijit._Widget,dijit._Templated,dojox.grid._Events],{templateString:"<div hidefocus=\"hidefocus\" role=\"grid\" dojoAttachEvent=\"onmouseout:_mouseOut\">\r\n\t<div class=\"dojoxGridMasterHeader\" dojoAttachPoint=\"viewsHeaderNode\" role=\"presentation\"></div>\r\n\t<div class=\"dojoxGridMasterView\" dojoAttachPoint=\"viewsNode\" role=\"presentation\"></div>\r\n\t<div class=\"dojoxGridMasterMessages\" style=\"display: none;\" dojoAttachPoint=\"messagesNode\"></div>\r\n\t<span dojoAttachPoint=\"lastFocusNode\" tabindex=\"0\"></span>\r\n</div>\r\n",classTag:"dojoxGrid",rowCount:5,keepRows:75,rowsPerPage:25,autoWidth:false,initialWidth:"",autoHeight:"",rowHeight:0,autoRender:true,defaultHeight:"15em",height:"",structure:null,elasticView:-1,singleClickEdit:false,selectionMode:"extended",rowSelector:"",columnReordering:false,headerMenu:null,placeholderLabel:"GridColumns",selectable:false,_click:null,loadingMessage:"<span class='dojoxGridLoading'>${loadingState}</span>",errorMessage:"<span class='dojoxGridError'>${errorState}</span>",noDataMessage:"",escapeHTMLInData:true,formatterScope:null,editable:false,sortInfo:0,themeable:true,_placeholders:null,_layoutClass:dojox.grid._Layout,buildRendering:function(){
this.inherited(arguments);
if(!this.domNode.getAttribute("tabIndex")){
this.domNode.tabIndex="0";
}
this.createScroller();
this.createLayout();
this.createViews();
this.createManagers();
this.createSelection();
this.connect(this.selection,"onSelected","onSelected");
this.connect(this.selection,"onDeselected","onDeselected");
this.connect(this.selection,"onChanged","onSelectionChanged");
dojox.html.metrics.initOnFontResize();
this.connect(dojox.html.metrics,"onFontResize","textSizeChanged");
dojox.grid.util.funnelEvents(this.domNode,this,"doKeyEvent",dojox.grid.util.keyEvents);
if(this.selectionMode!="none"){
dojo.attr(this.domNode,"aria-multiselectable",this.selectionMode=="single"?"false":"true");
}
dojo.addClass(this.domNode,this.classTag);
if(!this.isLeftToRight()){
dojo.addClass(this.domNode,this.classTag+"Rtl");
}
},postMixInProperties:function(){
this.inherited(arguments);
var _280=dojo.i18n.getLocalization("dijit","loading",this.lang);
this.loadingMessage=dojo.string.substitute(this.loadingMessage,_280);
this.errorMessage=dojo.string.substitute(this.errorMessage,_280);
if(this.srcNodeRef&&this.srcNodeRef.style.height){
this.height=this.srcNodeRef.style.height;
}
this._setAutoHeightAttr(this.autoHeight,true);
this.lastScrollTop=this.scrollTop=0;
},postCreate:function(){
this._placeholders=[];
this._setHeaderMenuAttr(this.headerMenu);
this._setStructureAttr(this.structure);
this._click=[];
this.inherited(arguments);
if(this.domNode&&this.autoWidth&&this.initialWidth){
this.domNode.style.width=this.initialWidth;
}
if(this.domNode&&!this.editable){
dojo.attr(this.domNode,"aria-readonly","true");
}
},destroy:function(){
this.domNode.onReveal=null;
this.domNode.onSizeChange=null;
delete this._click;
this.edit.destroy();
delete this.edit;
this.views.destroyViews();
if(this.scroller){
this.scroller.destroy();
delete this.scroller;
}
if(this.focus){
this.focus.destroy();
delete this.focus;
}
if(this.headerMenu&&this._placeholders.length){
dojo.forEach(this._placeholders,function(p){
p.unReplace(true);
});
this.headerMenu.unBindDomNode(this.viewsHeaderNode);
}
this.inherited(arguments);
},_setAutoHeightAttr:function(ah,_281){
if(typeof ah=="string"){
if(!ah||ah=="false"){
ah=false;
}else{
if(ah=="true"){
ah=true;
}else{
ah=window.parseInt(ah,10);
}
}
}
if(typeof ah=="number"){
if(isNaN(ah)){
ah=false;
}
if(ah<0){
ah=true;
}else{
if(ah===0){
ah=false;
}
}
}
this.autoHeight=ah;
if(typeof ah=="boolean"){
this._autoHeight=ah;
}else{
if(typeof ah=="number"){
this._autoHeight=(ah>=this.get("rowCount"));
}else{
this._autoHeight=false;
}
}
if(this._started&&!_281){
this.render();
}
},_getRowCountAttr:function(){
return this.updating&&this.invalidated&&this.invalidated.rowCount!=undefined?this.invalidated.rowCount:this.rowCount;
},textSizeChanged:function(){
this.render();
},sizeChange:function(){
this.update();
},createManagers:function(){
this.rows=new dojox.grid._RowManager(this);
this.focus=new dojox.grid._FocusManager(this);
this.edit=new dojox.grid._EditManager(this);
},createSelection:function(){
this.selection=new dojox.grid.Selection(this);
},createScroller:function(){
this.scroller=new dojox.grid._Scroller();
this.scroller.grid=this;
this.scroller.renderRow=dojo.hitch(this,"renderRow");
this.scroller.removeRow=dojo.hitch(this,"rowRemoved");
},createLayout:function(){
this.layout=new this._layoutClass(this);
this.connect(this.layout,"moveColumn","onMoveColumn");
},onMoveColumn:function(){
this.render();
},onResizeColumn:function(_282){
},createViews:function(){
this.views=new dojox.grid._ViewManager(this);
this.views.createView=dojo.hitch(this,"createView");
},createView:function(_283,idx){
var c=dojo.getObject(_283);
var view=new c({grid:this,index:idx});
this.viewsNode.appendChild(view.domNode);
this.viewsHeaderNode.appendChild(view.headerNode);
this.views.addView(view);
dojo.attr(this.domNode,"align",dojo._isBodyLtr()?"left":"right");
return view;
},buildViews:function(){
for(var i=0,vs;(vs=this.layout.structure[i]);i++){
this.createView(vs.type||dojox._scopeName+".grid._View",i).setStructure(vs);
}
this.scroller.setContentNodes(this.views.getContentNodes());
},_setStructureAttr:function(_284){
var s=_284;
if(s&&dojo.isString(s)){
dojo.deprecated("dojox.grid._Grid.set('structure', 'objVar')","use dojox.grid._Grid.set('structure', objVar) instead","2.0");
s=dojo.getObject(s);
}
this.structure=s;
if(!s){
if(this.layout.structure){
s=this.layout.structure;
}else{
return;
}
}
this.views.destroyViews();
this.focus.focusView=null;
if(s!==this.layout.structure){
this.layout.setStructure(s);
}
this._structureChanged();
},setStructure:function(_285){
dojo.deprecated("dojox.grid._Grid.setStructure(obj)","use dojox.grid._Grid.set('structure', obj) instead.","2.0");
this._setStructureAttr(_285);
},getColumnTogglingItems:function(){
return dojo.map(this.layout.cells,function(cell){
if(!cell.menuItems){
cell.menuItems=[];
}
var self=this;
var item=new dijit.CheckedMenuItem({label:cell.name,checked:!cell.hidden,_gridCell:cell,onChange:function(_286){
if(self.layout.setColumnVisibility(this._gridCell.index,_286)){
var _287=this._gridCell.menuItems;
if(_287.length>1){
dojo.forEach(_287,function(item){
if(item!==this){
item.setAttribute("checked",_286);
}
},this);
}
_286=dojo.filter(self.layout.cells,function(c){
if(c.menuItems.length>1){
dojo.forEach(c.menuItems,"item.set('disabled', false);");
}else{
c.menuItems[0].set("disabled",false);
}
return !c.hidden;
});
if(_286.length==1){
dojo.forEach(_286[0].menuItems,"item.set('disabled', true);");
}
}
},destroy:function(){
var _288=dojo.indexOf(this._gridCell.menuItems,this);
this._gridCell.menuItems.splice(_288,1);
delete this._gridCell;
dijit.CheckedMenuItem.prototype.destroy.apply(this,arguments);
}});
cell.menuItems.push(item);
return item;
},this);
},_setHeaderMenuAttr:function(menu){
if(this._placeholders&&this._placeholders.length){
dojo.forEach(this._placeholders,function(p){
p.unReplace(true);
});
this._placeholders=[];
}
if(this.headerMenu){
this.headerMenu.unBindDomNode(this.viewsHeaderNode);
}
this.headerMenu=menu;
if(!menu){
return;
}
this.headerMenu.bindDomNode(this.viewsHeaderNode);
if(this.headerMenu.getPlaceholders){
this._placeholders=this.headerMenu.getPlaceholders(this.placeholderLabel);
}
},setHeaderMenu:function(menu){
dojo.deprecated("dojox.grid._Grid.setHeaderMenu(obj)","use dojox.grid._Grid.set('headerMenu', obj) instead.","2.0");
this._setHeaderMenuAttr(menu);
},setupHeaderMenu:function(){
if(this._placeholders&&this._placeholders.length){
dojo.forEach(this._placeholders,function(p){
if(p._replaced){
p.unReplace(true);
}
p.replace(this.getColumnTogglingItems());
},this);
}
},_fetch:function(_289){
this.setScrollTop(0);
},getItem:function(_28a){
return null;
},showMessage:function(_28b){
if(_28b){
this.messagesNode.innerHTML=_28b;
this.messagesNode.style.display="";
}else{
this.messagesNode.innerHTML="";
this.messagesNode.style.display="none";
}
},_structureChanged:function(){
this.buildViews();
if(this.autoRender&&this._started){
this.render();
}
},hasLayout:function(){
return this.layout.cells.length;
},resize:function(_28c,_28d){
this._pendingChangeSize=_28c;
this._pendingResultSize=_28d;
this.sizeChange();
},_getPadBorder:function(){
this._padBorder=this._padBorder||dojo._getPadBorderExtents(this.domNode);
return this._padBorder;
},_getHeaderHeight:function(){
var vns=this.viewsHeaderNode.style,t=vns.display=="none"?0:this.views.measureHeader();
vns.height=t+"px";
this.views.normalizeHeaderNodeHeight();
return t;
},_resize:function(_28e,_28f){
_28e=_28e||this._pendingChangeSize;
_28f=_28f||this._pendingResultSize;
delete this._pendingChangeSize;
delete this._pendingResultSize;
if(!this.domNode){
return;
}
var pn=this.domNode.parentNode;
if(!pn||pn.nodeType!=1||!this.hasLayout()||pn.style.visibility=="hidden"||pn.style.display=="none"){
return;
}
var _290=this._getPadBorder();
var hh=undefined;
var h;
if(this._autoHeight){
this.domNode.style.height="auto";
}else{
if(typeof this.autoHeight=="number"){
h=hh=this._getHeaderHeight();
h+=(this.scroller.averageRowHeight*this.autoHeight);
this.domNode.style.height=h+"px";
}else{
if(this.domNode.clientHeight<=_290.h){
if(pn==document.body){
this.domNode.style.height=this.defaultHeight;
}else{
if(this.height){
this.domNode.style.height=this.height;
}else{
this.fitTo="parent";
}
}
}
}
}
if(_28f){
_28e=_28f;
}
if(_28e){
dojo.marginBox(this.domNode,_28e);
this.height=this.domNode.style.height;
delete this.fitTo;
}else{
if(this.fitTo=="parent"){
h=this._parentContentBoxHeight=this._parentContentBoxHeight||dojo._getContentBox(pn).h;
this.domNode.style.height=Math.max(0,h)+"px";
}
}
var _291=dojo.some(this.views.views,function(v){
return v.flexCells;
});
if(!this._autoHeight&&(h||dojo._getContentBox(this.domNode).h)===0){
this.viewsHeaderNode.style.display="none";
}else{
this.viewsHeaderNode.style.display="block";
if(!_291&&hh===undefined){
hh=this._getHeaderHeight();
}
}
if(_291){
hh=undefined;
}
this.adaptWidth();
this.adaptHeight(hh);
this.postresize();
},adaptWidth:function(){
var _292=(!this.initialWidth&&this.autoWidth);
var w=_292?0:this.domNode.clientWidth||(this.domNode.offsetWidth-this._getPadBorder().w),vw=this.views.arrange(1,w);
this.views.onEach("adaptWidth");
if(_292){
this.domNode.style.width=vw+"px";
}
},adaptHeight:function(_293){
var t=_293===undefined?this._getHeaderHeight():_293;
var h=(this._autoHeight?-1:Math.max(this.domNode.clientHeight-t,0)||0);
this.views.onEach("setSize",[0,h]);
this.views.onEach("adaptHeight");
if(!this._autoHeight){
var _294=0,_295=0;
var _296=dojo.filter(this.views.views,function(v){
var has=v.hasHScrollbar();
if(has){
_294++;
}else{
_295++;
}
return (!has);
});
if(_294>0&&_295>0){
dojo.forEach(_296,function(v){
v.adaptHeight(true);
});
}
}
if(this.autoHeight===true||h!=-1||(typeof this.autoHeight=="number"&&this.autoHeight>=this.get("rowCount"))){
this.scroller.windowHeight=h;
}else{
this.scroller.windowHeight=Math.max(this.domNode.clientHeight-t,0);
}
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
if(this.autoRender){
this.render();
}
},render:function(){
if(!this.domNode){
return;
}
if(!this._started){
return;
}
if(!this.hasLayout()){
this.scroller.init(0,this.keepRows,this.rowsPerPage);
return;
}
this.update=this.defaultUpdate;
this._render();
},_render:function(){
this.scroller.init(this.get("rowCount"),this.keepRows,this.rowsPerPage);
this.prerender();
this.setScrollTop(0);
this.postrender();
},prerender:function(){
this.keepRows=this._autoHeight?0:this.keepRows;
this.scroller.setKeepInfo(this.keepRows);
this.views.render();
this._resize();
},postrender:function(){
this.postresize();
this.focus.initFocusView();
dojo.setSelectable(this.domNode,this.selectable);
},postresize:function(){
if(this._autoHeight){
var size=Math.max(this.views.measureContent())+"px";
this.viewsNode.style.height=size;
}
},renderRow:function(_297,_298){
this.views.renderRow(_297,_298,this._skipRowRenormalize);
},rowRemoved:function(_299){
this.views.rowRemoved(_299);
},invalidated:null,updating:false,beginUpdate:function(){
this.invalidated=[];
this.updating=true;
},endUpdate:function(){
this.updating=false;
var i=this.invalidated,r;
if(i.all){
this.update();
}else{
if(i.rowCount!=undefined){
this.updateRowCount(i.rowCount);
}else{
for(r in i){
this.updateRow(Number(r));
}
}
}
this.invalidated=[];
},defaultUpdate:function(){
if(!this.domNode){
return;
}
if(this.updating){
this.invalidated.all=true;
return;
}
this.lastScrollTop=this.scrollTop;
this.prerender();
this.scroller.invalidateNodes();
this.setScrollTop(this.lastScrollTop);
this.postrender();
},update:function(){
this.render();
},updateRow:function(_29a){
_29a=Number(_29a);
if(this.updating){
this.invalidated[_29a]=true;
}else{
this.views.updateRow(_29a);
if(this.scroller){
this.scroller.rowHeightChanged(_29a);
}
}
},updateRows:function(_29b,_29c){
_29b=Number(_29b);
_29c=Number(_29c);
var i;
if(this.updating){
for(i=0;i<_29c;i++){
this.invalidated[i+_29b]=true;
}
}else{
for(i=0;i<_29c;i++){
this.views.updateRow(i+_29b,this._skipRowRenormalize);
}
this.scroller.rowHeightChanged(_29b);
}
},updateRowCount:function(_29d){
if(this.updating){
this.invalidated.rowCount=_29d;
}else{
this.rowCount=_29d;
this._setAutoHeightAttr(this.autoHeight,true);
if(this.layout.cells.length){
this.scroller.updateRowCount(_29d);
}
this._resize();
if(this.layout.cells.length){
this.setScrollTop(this.scrollTop);
}
}
},updateRowStyles:function(_29e){
this.views.updateRowStyles(_29e);
},getRowNode:function(_29f){
if(this.focus.focusView&&!(this.focus.focusView instanceof dojox.grid._RowSelector)){
return this.focus.focusView.rowNodes[_29f];
}else{
for(var i=0,_2a0;(_2a0=this.views.views[i]);i++){
if(!(_2a0 instanceof dojox.grid._RowSelector)){
return _2a0.rowNodes[_29f];
}
}
}
return null;
},rowHeightChanged:function(_2a1){
this.views.renormalizeRow(_2a1);
this.scroller.rowHeightChanged(_2a1);
},fastScroll:true,delayScroll:false,scrollRedrawThreshold:(dojo.isIE?100:50),scrollTo:function(_2a2){
if(!this.fastScroll){
this.setScrollTop(_2a2);
return;
}
var _2a3=Math.abs(this.lastScrollTop-_2a2);
this.lastScrollTop=_2a2;
if(_2a3>this.scrollRedrawThreshold||this.delayScroll){
this.delayScroll=true;
this.scrollTop=_2a2;
this.views.setScrollTop(_2a2);
if(this._pendingScroll){
window.clearTimeout(this._pendingScroll);
}
var _2a4=this;
this._pendingScroll=window.setTimeout(function(){
delete _2a4._pendingScroll;
_2a4.finishScrollJob();
},200);
}else{
this.setScrollTop(_2a2);
}
},finishScrollJob:function(){
this.delayScroll=false;
this.setScrollTop(this.scrollTop);
},setScrollTop:function(_2a5){
this.scroller.scroll(this.views.setScrollTop(_2a5));
},scrollToRow:function(_2a6){
this.setScrollTop(this.scroller.findScrollTop(_2a6)+1);
},styleRowNode:function(_2a7,_2a8){
if(_2a8){
this.rows.styleRowNode(_2a7,_2a8);
}
},_mouseOut:function(e){
this.rows.setOverRow(-2);
},getCell:function(_2a9){
return this.layout.cells[_2a9];
},setCellWidth:function(_2aa,_2ab){
this.getCell(_2aa).unitWidth=_2ab;
},getCellName:function(_2ac){
return "Cell "+_2ac.index;
},canSort:function(_2ad){
},sort:function(){
},getSortAsc:function(_2ae){
_2ae=_2ae==undefined?this.sortInfo:_2ae;
return Boolean(_2ae>0);
},getSortIndex:function(_2af){
_2af=_2af==undefined?this.sortInfo:_2af;
return Math.abs(_2af)-1;
},setSortIndex:function(_2b0,_2b1){
var si=_2b0+1;
if(_2b1!=undefined){
si*=(_2b1?1:-1);
}else{
if(this.getSortIndex()==_2b0){
si=-this.sortInfo;
}
}
this.setSortInfo(si);
},setSortInfo:function(_2b2){
if(this.canSort(_2b2)){
this.sortInfo=_2b2;
this.sort();
this.update();
}
},doKeyEvent:function(e){
e.dispatch="do"+e.type;
this.onKeyEvent(e);
},_dispatch:function(m,e){
if(m in this){
return this[m](e);
}
return false;
},dispatchKeyEvent:function(e){
this._dispatch(e.dispatch,e);
},dispatchContentEvent:function(e){
this.edit.dispatchEvent(e)||e.sourceView.dispatchContentEvent(e)||this._dispatch(e.dispatch,e);
},dispatchHeaderEvent:function(e){
e.sourceView.dispatchHeaderEvent(e)||this._dispatch("doheader"+e.type,e);
},dokeydown:function(e){
this.onKeyDown(e);
},doclick:function(e){
if(e.cellNode){
this.onCellClick(e);
}else{
this.onRowClick(e);
}
},dodblclick:function(e){
if(e.cellNode){
this.onCellDblClick(e);
}else{
this.onRowDblClick(e);
}
},docontextmenu:function(e){
if(e.cellNode){
this.onCellContextMenu(e);
}else{
this.onRowContextMenu(e);
}
},doheaderclick:function(e){
if(e.cellNode){
this.onHeaderCellClick(e);
}else{
this.onHeaderClick(e);
}
},doheaderdblclick:function(e){
if(e.cellNode){
this.onHeaderCellDblClick(e);
}else{
this.onHeaderDblClick(e);
}
},doheadercontextmenu:function(e){
if(e.cellNode){
this.onHeaderCellContextMenu(e);
}else{
this.onHeaderContextMenu(e);
}
},doStartEdit:function(_2b3,_2b4){
this.onStartEdit(_2b3,_2b4);
},doApplyCellEdit:function(_2b5,_2b6,_2b7){
this.onApplyCellEdit(_2b5,_2b6,_2b7);
},doCancelEdit:function(_2b8){
this.onCancelEdit(_2b8);
},doApplyEdit:function(_2b9){
this.onApplyEdit(_2b9);
},addRow:function(){
this.updateRowCount(this.get("rowCount")+1);
},removeSelectedRows:function(){
if(this.allItemsSelected){
this.updateRowCount(0);
}else{
this.updateRowCount(Math.max(0,this.get("rowCount")-this.selection.getSelected().length));
}
this.selection.clear();
}});
dojox.grid._Grid.markupFactory=function(_2ba,node,ctor,_2bb){
var d=dojo;
var _2bc=function(n){
var w=d.attr(n,"width")||"auto";
if((w!="auto")&&(w.slice(-2)!="em")&&(w.slice(-1)!="%")){
w=parseInt(w,10)+"px";
}
return w;
};
if(!_2ba.structure&&node.nodeName.toLowerCase()=="table"){
_2ba.structure=d.query("> colgroup",node).map(function(cg){
var sv=d.attr(cg,"span");
var v={noscroll:(d.attr(cg,"noscroll")=="true")?true:false,__span:(!!sv?parseInt(sv,10):1),cells:[]};
if(d.hasAttr(cg,"width")){
v.width=_2bc(cg);
}
return v;
});
if(!_2ba.structure.length){
_2ba.structure.push({__span:Infinity,cells:[]});
}
d.query("thead > tr",node).forEach(function(tr,_2bd){
var _2be=0;
var _2bf=0;
var _2c0;
var _2c1=null;
d.query("> th",tr).map(function(th){
if(!_2c1){
_2c0=0;
_2c1=_2ba.structure[0];
}else{
if(_2be>=(_2c0+_2c1.__span)){
_2bf++;
_2c0+=_2c1.__span;
var _2c2=_2c1;
_2c1=_2ba.structure[_2bf];
}
}
var cell={name:d.trim(d.attr(th,"name")||th.innerHTML),colSpan:parseInt(d.attr(th,"colspan")||1,10),type:d.trim(d.attr(th,"cellType")||""),id:d.trim(d.attr(th,"id")||"")};
_2be+=cell.colSpan;
var _2c3=d.attr(th,"rowspan");
if(_2c3){
cell.rowSpan=_2c3;
}
if(d.hasAttr(th,"width")){
cell.width=_2bc(th);
}
if(d.hasAttr(th,"relWidth")){
cell.relWidth=window.parseInt(dojo.attr(th,"relWidth"),10);
}
if(d.hasAttr(th,"hidden")){
cell.hidden=(d.attr(th,"hidden")=="true"||d.attr(th,"hidden")===true);
}
if(_2bb){
_2bb(th,cell);
}
cell.type=cell.type?dojo.getObject(cell.type):dojox.grid.cells.Cell;
if(cell.type&&cell.type.markupFactory){
cell.type.markupFactory(th,cell);
}
if(!_2c1.cells[_2bd]){
_2c1.cells[_2bd]=[];
}
_2c1.cells[_2bd].push(cell);
});
});
}
return new ctor(_2ba,node);
};
})();
}
if(!dojo._hasResource["dojox.grid.DataSelection"]){
dojo._hasResource["dojox.grid.DataSelection"]=true;
dojo.provide("dojox.grid.DataSelection");
dojo.declare("dojox.grid.DataSelection",dojox.grid.Selection,{getFirstSelected:function(){
var idx=dojox.grid.Selection.prototype.getFirstSelected.call(this);
if(idx==-1){
return null;
}
return this.grid.getItem(idx);
},getNextSelected:function(_2c4){
var _2c5=this.grid.getItemIndex(_2c4);
var idx=dojox.grid.Selection.prototype.getNextSelected.call(this,_2c5);
if(idx==-1){
return null;
}
return this.grid.getItem(idx);
},getSelected:function(){
var _2c6=[];
for(var i=0,l=this.selected.length;i<l;i++){
if(this.selected[i]){
_2c6.push(this.grid.getItem(i));
}
}
return _2c6;
},addToSelection:function(_2c7){
if(this.mode=="none"){
return;
}
var idx=null;
if(typeof _2c7=="number"||typeof _2c7=="string"){
idx=_2c7;
}else{
idx=this.grid.getItemIndex(_2c7);
}
dojox.grid.Selection.prototype.addToSelection.call(this,idx);
},deselect:function(_2c8){
if(this.mode=="none"){
return;
}
var idx=null;
if(typeof _2c8=="number"||typeof _2c8=="string"){
idx=_2c8;
}else{
idx=this.grid.getItemIndex(_2c8);
}
dojox.grid.Selection.prototype.deselect.call(this,idx);
},deselectAll:function(_2c9){
var idx=null;
if(_2c9||typeof _2c9=="number"){
if(typeof _2c9=="number"||typeof _2c9=="string"){
idx=_2c9;
}else{
idx=this.grid.getItemIndex(_2c9);
}
dojox.grid.Selection.prototype.deselectAll.call(this,idx);
}else{
this.inherited(arguments);
}
}});
}
if(!dojo._hasResource["dojox.grid.DataGrid"]){
dojo._hasResource["dojox.grid.DataGrid"]=true;
dojo.provide("dojox.grid.DataGrid");
dojo.declare("dojox.grid.DataGrid",dojox.grid._Grid,{store:null,query:null,queryOptions:null,fetchText:"...",sortFields:null,updateDelay:1,items:null,_store_connects:null,_by_idty:null,_by_idx:null,_cache:null,_pages:null,_pending_requests:null,_bop:-1,_eop:-1,_requests:0,rowCount:0,_isLoaded:false,_isLoading:false,postCreate:function(){
this._pages=[];
this._store_connects=[];
this._by_idty={};
this._by_idx=[];
this._cache=[];
this._pending_requests={};
this._setStore(this.store);
this.inherited(arguments);
},createSelection:function(){
this.selection=new dojox.grid.DataSelection(this);
},get:function(_2ca,_2cb){
if(_2cb&&this.field=="_item"&&!this.fields){
return _2cb;
}else{
if(_2cb&&this.fields){
var ret=[];
var s=this.grid.store;
dojo.forEach(this.fields,function(f){
ret=ret.concat(s.getValues(_2cb,f));
});
return ret;
}else{
if(!_2cb&&typeof _2ca==="string"){
return this.inherited(arguments);
}
}
}
return (!_2cb?this.defaultValue:(!this.field?this.value:(this.field=="_item"?_2cb:this.grid.store.getValue(_2cb,this.field))));
},_checkUpdateStatus:function(){
if(this.updateDelay>0){
var _2cc=false;
if(this._endUpdateDelay){
clearTimeout(this._endUpdateDelay);
delete this._endUpdateDelay;
_2cc=true;
}
if(!this.updating){
this.beginUpdate();
_2cc=true;
}
if(_2cc){
var _2cd=this;
this._endUpdateDelay=setTimeout(function(){
delete _2cd._endUpdateDelay;
_2cd.endUpdate();
},this.updateDelay);
}
}
},_onSet:function(item,_2ce,_2cf,_2d0){
this._checkUpdateStatus();
var idx=this.getItemIndex(item);
if(idx>-1){
this.updateRow(idx);
}
},_createItem:function(item,_2d1){
var idty=this._hasIdentity?this.store.getIdentity(item):dojo.toJson(this.query)+":idx:"+_2d1+":sort:"+dojo.toJson(this.getSortProps());
var o=this._by_idty[idty]={idty:idty,item:item};
return o;
},_addItem:function(item,_2d2,_2d3){
this._by_idx[_2d2]=this._createItem(item,_2d2);
if(!_2d3){
this.updateRow(_2d2);
}
},_onNew:function(item,_2d4){
this._checkUpdateStatus();
var _2d5=this.get("rowCount");
this._addingItem=true;
this.updateRowCount(_2d5+1);
this._addingItem=false;
this._addItem(item,_2d5);
this.showMessage();
},_onDelete:function(item){
this._checkUpdateStatus();
var idx=this._getItemIndex(item,true);
if(idx>=0){
this._pages=[];
this._bop=-1;
this._eop=-1;
var o=this._by_idx[idx];
this._by_idx.splice(idx,1);
delete this._by_idty[o.idty];
this.updateRowCount(this.get("rowCount")-1);
if(this.get("rowCount")===0){
this.showMessage(this.noDataMessage);
}
}
},_onRevert:function(){
this._refresh();
},setStore:function(_2d6,_2d7,_2d8){
this._setQuery(_2d7,_2d8);
this._setStore(_2d6);
this._refresh(true);
},setQuery:function(_2d9,_2da){
this._setQuery(_2d9,_2da);
this._refresh(true);
},setItems:function(_2db){
this.items=_2db;
this._setStore(this.store);
this._refresh(true);
},_setQuery:function(_2dc,_2dd){
this.query=_2dc;
this.queryOptions=_2dd||this.queryOptions;
},_setStore:function(_2de){
if(this.store&&this._store_connects){
dojo.forEach(this._store_connects,this.disconnect,this);
}
this.store=_2de;
if(this.store){
var f=this.store.getFeatures();
var h=[];
this._canEdit=!!f["dojo.data.api.Write"]&&!!f["dojo.data.api.Identity"];
this._hasIdentity=!!f["dojo.data.api.Identity"];
if(!!f["dojo.data.api.Notification"]&&!this.items){
h.push(this.connect(this.store,"onSet","_onSet"));
h.push(this.connect(this.store,"onNew","_onNew"));
h.push(this.connect(this.store,"onDelete","_onDelete"));
}
if(this._canEdit){
h.push(this.connect(this.store,"revert","_onRevert"));
}
this._store_connects=h;
}
},_onFetchBegin:function(size,req){
if(!this.scroller){
return;
}
if(this.rowCount!=size){
if(req.isRender){
this.scroller.init(size,this.keepRows,this.rowsPerPage);
this.rowCount=size;
this._setAutoHeightAttr(this.autoHeight,true);
this._skipRowRenormalize=true;
this.prerender();
this._skipRowRenormalize=false;
}else{
this.updateRowCount(size);
}
}
if(!size){
this.views.render();
this._resize();
this.showMessage(this.noDataMessage);
this.focus.initFocusView();
}else{
this.showMessage();
}
},_onFetchComplete:function(_2df,req){
if(!this.scroller){
return;
}
if(_2df&&_2df.length>0){
dojo.forEach(_2df,function(item,idx){
this._addItem(item,req.start+idx,true);
},this);
this.updateRows(req.start,_2df.length);
if(req.isRender){
this.setScrollTop(0);
this.postrender();
}else{
if(this._lastScrollTop){
this.setScrollTop(this._lastScrollTop);
}
}
}
delete this._lastScrollTop;
if(!this._isLoaded){
this._isLoading=false;
this._isLoaded=true;
}
this._pending_requests[req.start]=false;
},_onFetchError:function(err,req){
delete this._lastScrollTop;
if(!this._isLoaded){
this._isLoading=false;
this._isLoaded=true;
this.showMessage(this.errorMessage);
}
this._pending_requests[req.start]=false;
this.onFetchError(err,req);
},onFetchError:function(err,req){
},_fetch:function(_2e0,_2e1){
_2e0=_2e0||0;
if(this.store&&!this._pending_requests[_2e0]){
if(!this._isLoaded&&!this._isLoading){
this._isLoading=true;
this.showMessage(this.loadingMessage);
}
this._pending_requests[_2e0]=true;
try{
if(this.items){
var _2e2=this.items;
var _2e3=this.store;
this.rowsPerPage=_2e2.length;
var req={start:_2e0,count:this.rowsPerPage,isRender:_2e1};
this._onFetchBegin(_2e2.length,req);
var _2e4=0;
dojo.forEach(_2e2,function(i){
if(!_2e3.isItemLoaded(i)){
_2e4++;
}
});
if(_2e4===0){
this._onFetchComplete(_2e2,req);
}else{
var _2e5=function(item){
_2e4--;
if(_2e4===0){
this._onFetchComplete(_2e2,req);
}
};
dojo.forEach(_2e2,function(i){
if(!_2e3.isItemLoaded(i)){
_2e3.loadItem({item:i,onItem:_2e5,scope:this});
}
},this);
}
}else{
this.store.fetch({start:_2e0,count:this.rowsPerPage,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,isRender:_2e1,onBegin:dojo.hitch(this,"_onFetchBegin"),onComplete:dojo.hitch(this,"_onFetchComplete"),onError:dojo.hitch(this,"_onFetchError")});
}
}
catch(e){
this._onFetchError(e,{start:_2e0,count:this.rowsPerPage});
}
}
},_clearData:function(){
this.updateRowCount(0);
this._by_idty={};
this._by_idx=[];
this._pages=[];
this._bop=this._eop=-1;
this._isLoaded=false;
this._isLoading=false;
},getItem:function(idx){
var data=this._by_idx[idx];
if(!data||(data&&!data.item)){
this._preparePage(idx);
return null;
}
return data.item;
},getItemIndex:function(item){
return this._getItemIndex(item,false);
},_getItemIndex:function(item,_2e6){
if(!_2e6&&!this.store.isItem(item)){
return -1;
}
var idty=this._hasIdentity?this.store.getIdentity(item):null;
for(var i=0,l=this._by_idx.length;i<l;i++){
var d=this._by_idx[i];
if(d&&((idty&&d.idty==idty)||(d.item===item))){
return i;
}
}
return -1;
},filter:function(_2e7,_2e8){
this.query=_2e7;
if(_2e8){
this._clearData();
}
this._fetch();
},_getItemAttr:function(idx,attr){
var item=this.getItem(idx);
return (!item?this.fetchText:this.store.getValue(item,attr));
},_render:function(){
if(this.domNode.parentNode){
this.scroller.init(this.get("rowCount"),this.keepRows,this.rowsPerPage);
this.prerender();
this._fetch(0,true);
}
},_requestsPending:function(_2e9){
return this._pending_requests[_2e9];
},_rowToPage:function(_2ea){
return (this.rowsPerPage?Math.floor(_2ea/this.rowsPerPage):_2ea);
},_pageToRow:function(_2eb){
return (this.rowsPerPage?this.rowsPerPage*_2eb:_2eb);
},_preparePage:function(_2ec){
if((_2ec<this._bop||_2ec>=this._eop)&&!this._addingItem){
var _2ed=this._rowToPage(_2ec);
this._needPage(_2ed);
this._bop=_2ed*this.rowsPerPage;
this._eop=this._bop+(this.rowsPerPage||this.get("rowCount"));
}
},_needPage:function(_2ee){
if(!this._pages[_2ee]){
this._pages[_2ee]=true;
this._requestPage(_2ee);
}
},_requestPage:function(_2ef){
var row=this._pageToRow(_2ef);
var _2f0=Math.min(this.rowsPerPage,this.get("rowCount")-row);
if(_2f0>0){
this._requests++;
if(!this._requestsPending(row)){
setTimeout(dojo.hitch(this,"_fetch",row,false),1);
}
}
},getCellName:function(_2f1){
return _2f1.field;
},_refresh:function(_2f2){
this._clearData();
this._fetch(0,_2f2);
},sort:function(){
this.edit.apply();
this._lastScrollTop=this.scrollTop;
this._refresh();
},canSort:function(){
return (!this._isLoading);
},getSortProps:function(){
var c=this.getCell(this.getSortIndex());
if(!c){
if(this.sortFields){
return this.sortFields;
}
return null;
}else{
var desc=c["sortDesc"];
var si=!(this.sortInfo>0);
if(typeof desc=="undefined"){
desc=si;
}else{
desc=si?!desc:desc;
}
return [{attribute:c.field,descending:desc}];
}
},styleRowState:function(_2f3){
if(this.store&&this.store.getState){
var _2f4=this.store.getState(_2f3.index),c="";
for(var i=0,ss=["inflight","error","inserting"],s;s=ss[i];i++){
if(_2f4[s]){
c=" dojoxGridRow-"+s;
break;
}
}
_2f3.customClasses+=c;
}
},onStyleRow:function(_2f5){
this.styleRowState(_2f5);
this.inherited(arguments);
},canEdit:function(_2f6,_2f7){
return this._canEdit&&!this.disabled;
},_copyAttr:function(idx,attr){
var row={};
var _2f8={};
var src=this.getItem(idx);
return this.store.getValue(src,attr);
},doStartEdit:function(_2f9,_2fa){
if(!this._cache[_2fa]){
this._cache[_2fa]=this._copyAttr(_2fa,_2f9.field);
}
this.onStartEdit(_2f9,_2fa);
},doApplyCellEdit:function(_2fb,_2fc,_2fd){
this.store.fetchItemByIdentity({identity:this._by_idx[_2fc].idty,onItem:dojo.hitch(this,function(item){
var _2fe=this.store.getValue(item,_2fd);
if(typeof _2fe=="number"){
if(typeof _2fb=="boolean"){
_2fb=_2fb?1:0;
}else{
if(_2fb instanceof Date){
_2fb=_2fb.getTime();
}else{
_2fb=isNaN(_2fb)||_2fb===null?null:parseFloat(_2fb);
}
}
}else{
if(typeof _2fe=="boolean"){
_2fb=_2fb=="true"?true:_2fb=="false"?false:_2fb;
}else{
if(_2fe instanceof Date){
var _2ff=new Date(_2fb);
_2fb=isNaN(_2ff.getTime())?_2fb:_2ff;
}
}
}
this.store.setValue(item,_2fd,_2fb);
this.onApplyCellEdit(_2fb,_2fc,_2fd);
})});
},doCancelEdit:function(_300){
var _301=this._cache[_300];
if(_301){
this.updateRow(_300);
delete this._cache[_300];
}
this.onCancelEdit.apply(this,arguments);
},doApplyEdit:function(_302,_303){
var _304=this._cache[_302];
this.onApplyEdit(_302);
},removeSelectedRows:function(){
if(this._canEdit){
this.edit.apply();
var fx=dojo.hitch(this,function(_305){
if(_305.length){
dojo.forEach(_305,this.store.deleteItem,this.store);
this.selection.clear();
}
});
if(this.allItemsSelected){
this.store.fetch({query:this.query,queryOptions:this.queryOptions,onComplete:fx});
}else{
fx(this.selection.getSelected());
}
}
}});
dojox.grid.DataGrid.cell_markupFactory=function(_306,node,_307){
var _308=dojo.trim(dojo.attr(node,"field")||"");
if(_308){
_307.field=_308;
}
_307.field=_307.field||_307.name;
var _309=dojo.trim(dojo.attr(node,"fields")||"");
if(_309){
_307.fields=_309.split(",");
}
if(_306){
_306(node,_307);
}
};
dojox.grid.DataGrid.markupFactory=function(_30a,node,ctor,_30b){
return dojox.grid._Grid.markupFactory(_30a,node,ctor,dojo.partial(dojox.grid.DataGrid.cell_markupFactory,_30b));
};
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
var _30c=this.dropDown,_30d=false;
if(e&&this._opened){
var c=dojo.position(this._buttonNode,true);
if(!(e.pageX>=c.x&&e.pageX<=c.x+c.w)||!(e.pageY>=c.y&&e.pageY<=c.y+c.h)){
var t=e.target;
while(t&&!_30d){
if(dojo.hasClass(t,"dijitPopup")){
_30d=true;
}else{
t=t.parentNode;
}
}
if(_30d){
t=e.target;
if(_30c.onItemClick){
var _30e;
while(t&&!(_30e=dijit.byNode(t))){
t=t.parentNode;
}
if(_30e&&_30e.onClick&&_30e.getParent){
_30e.getParent().onItemClick(_30e,e);
}
}
return;
}
}
}
if(this._opened&&_30c.focus&&_30c.autoFocus!==false){
window.setTimeout(dojo.hitch(_30c,"focus"),1);
}
},_onDropDownClick:function(e){
if(this._stopClickEvents){
dojo.stopEvent(e);
}
},buildRendering:function(){
this.inherited(arguments);
this._buttonNode=this._buttonNode||this.focusNode||this.domNode;
this._popupStateNode=this._popupStateNode||this.focusNode||this._buttonNode;
var _30f={"after":this.isLeftToRight()?"Right":"Left","before":this.isLeftToRight()?"Left":"Right","above":"Up","below":"Down","left":"Left","right":"Right"}[this.dropDownPosition[0]]||this.dropDownPosition[0]||"Down";
dojo.addClass(this._arrowWrapperNode||this._buttonNode,"dijit"+_30f+"ArrowButton");
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
var d=this.dropDown,_310=e.target;
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
if(!this._opened&&(e.charOrCode==dojo.keys.DOWN_ARROW||((e.charOrCode==dojo.keys.ENTER||e.charOrCode==" ")&&((_310.tagName||"").toLowerCase()!=="input"||(_310.type&&_310.type.toLowerCase()!=="text"))))){
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
var _311=dijit._curFocus&&this.dropDown&&dojo.isDescendant(dijit._curFocus,this.dropDown.domNode);
this.closeDropDown(_311);
this.inherited(arguments);
},isLoaded:function(){
return true;
},loadDropDown:function(_312){
_312();
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
var _313=this.dropDown,_314=_313.domNode,_315=this._aroundNode||this.domNode,self=this;
if(!this._preparedNode){
this._preparedNode=true;
if(_314.style.width){
this._explicitDDWidth=true;
}
if(_314.style.height){
this._explicitDDHeight=true;
}
}
if(this.maxHeight||this.forceWidth||this.autoWidth){
var _316={display:"",visibility:"hidden"};
if(!this._explicitDDWidth){
_316.width="";
}
if(!this._explicitDDHeight){
_316.height="";
}
dojo.style(_314,_316);
var _317=this.maxHeight;
if(_317==-1){
var _318=dojo.window.getBox(),_319=dojo.position(_315,false);
_317=Math.floor(Math.max(_319.y,_318.h-(_319.y+_319.h)));
}
if(_313.startup&&!_313._started){
_313.startup();
}
dijit.popup.moveOffScreen(_313);
var mb=dojo._getMarginSize(_314);
var _31a=(_317&&mb.h>_317);
dojo.style(_314,{overflowX:"hidden",overflowY:_31a?"auto":"hidden"});
if(_31a){
mb.h=_317;
if("w" in mb){
mb.w+=16;
}
}else{
delete mb.h;
}
if(this.forceWidth){
mb.w=_315.offsetWidth;
}else{
if(this.autoWidth){
mb.w=Math.max(mb.w,_315.offsetWidth);
}else{
delete mb.w;
}
}
if(dojo.isFunction(_313.resize)){
_313.resize(mb);
}else{
dojo.marginBox(_314,mb);
}
}
var _31b=dijit.popup.open({parent:this,popup:_313,around:_315,orient:dijit.getPopupAroundAlignment((this.dropDownPosition&&this.dropDownPosition.length)?this.dropDownPosition:["below"],this.isLeftToRight()),onExecute:function(){
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
return _31b;
},closeDropDown:function(_31c){
if(this._opened){
if(_31c){
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
var _31d=dijit.byNode(node);
if(_31d&&typeof _31d._onSubmit=="function"){
_31d._onSubmit(e);
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
},_fillContent:function(_31e){
if(_31e&&(!this.params||!("label" in this.params))){
this.set("label",_31e.innerHTML);
}
},_setShowLabelAttr:function(val){
if(this.containerNode){
dojo.toggleClass(this.containerNode,"dijitDisplayNone",!val);
}
this._set("showLabel",val);
},onClick:function(e){
return true;
},_clicked:function(e){
},setLabel:function(_31f){
dojo.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0");
this.set("label",_31f);
},_setLabelAttr:function(_320){
this._set("label",_320);
this.containerNode.innerHTML=_320;
if(this.showLabel==false&&!this.params.title){
this.titleNode.title=dojo.trim(this.containerNode.innerText||this.containerNode.textContent||"");
}
},_setIconClassAttr:function(val){
var _321=this.iconClass||"dijitNoIcon",_322=val||"dijitNoIcon";
dojo.replaceClass(this.iconNode,_322,_321);
this._set("iconClass",val);
}});
dojo.declare("dijit.form.DropDownButton",[dijit.form.Button,dijit._Container,dijit._HasDropDown],{baseClass:"dijitDropDownButton",templateString:dojo.cache("dijit.form","templates/DropDownButton.html","<span class=\"dijit dijitReset dijitInline\"\r\n\t><span class='dijitReset dijitInline dijitButtonNode'\r\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\" dojoAttachPoint=\"_buttonNode\"\r\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\r\n\t\t\tdojoAttachPoint=\"focusNode,titleNode,_arrowWrapperNode\"\r\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\r\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\r\n\t\t\t\tdojoAttachPoint=\"iconNode\"\r\n\t\t\t></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\r\n\t\t\t\tdojoAttachPoint=\"containerNode,_popupStateNode\"\r\n\t\t\t\tid=\"${id}_label\"\r\n\t\t\t></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\r\n\t\t></span\r\n\t></span\r\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\r\n\t\tdojoAttachPoint=\"valueNode\"\r\n/></span>\r\n"),_fillContent:function(){
if(this.srcNodeRef){
var _323=dojo.query("*",this.srcNodeRef);
dijit.form.DropDownButton.superclass._fillContent.call(this,_323[0]);
this.dropDownContainer=this.srcNodeRef;
}
},startup:function(){
if(this._started){
return;
}
if(!this.dropDown&&this.dropDownContainer){
var _324=dojo.query("[widgetId]",this.dropDownContainer)[0];
this.dropDown=dijit.byNode(_324);
delete this.dropDownContainer;
}
if(this.dropDown){
dijit.popup.hide(this.dropDown);
}
this.inherited(arguments);
},isLoaded:function(){
var _325=this.dropDown;
return (!!_325&&(!_325.href||_325.isLoaded));
},loadDropDown:function(){
var _326=this.dropDown;
if(!_326){
return;
}
if(!this.isLoaded()){
var _327=dojo.connect(_326,"onLoad",this,function(){
dojo.disconnect(_327);
this.openDropDown();
});
_326.refresh();
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
},focus:function(_328){
if(!this.disabled){
dijit.focus(_328=="start"?this.titleNode:this._popupStateNode);
}
}});
dojo.declare("dijit.form.ToggleButton",dijit.form.Button,{baseClass:"dijitToggleButton",checked:false,attributeMap:dojo.mixin(dojo.clone(dijit.form.Button.prototype.attributeMap),{checked:"focusNode"}),_clicked:function(evt){
this.set("checked",!this.checked);
},_setCheckedAttr:function(_329,_32a){
this._set("checked",_329);
dojo.attr(this.focusNode||this.domNode,"checked",_329);
dijit.setWaiState(this.focusNode||this.domNode,"pressed",_329);
this._handleOnChange(_329,_32a);
},setChecked:function(_32b){
dojo.deprecated("setChecked("+_32b+") is deprecated. Use set('checked',"+_32b+") instead.","","2.0");
this.set("checked",_32b);
},reset:function(){
this._hasBeenBlurred=false;
this.set("checked",this.params.checked||false);
}});
}
if(!dojo._hasResource["dijit.form.DropDownButton"]){
dojo._hasResource["dijit.form.DropDownButton"]=true;
dojo.provide("dijit.form.DropDownButton");
}
if(!dojo._hasResource["dijit.Calendar"]){
dojo._hasResource["dijit.Calendar"]=true;
dojo.provide("dijit.Calendar");
dojo.declare("dijit.Calendar",[dijit._Widget,dijit._Templated,dijit._CssStateMixin],{templateString:dojo.cache("dijit","templates/Calendar.html","<table cellspacing=\"0\" cellpadding=\"0\" class=\"dijitCalendarContainer\" role=\"grid\" dojoAttachEvent=\"onkeypress: _onKeyPress\" aria-labelledby=\"${id}_year\">\r\n\t<thead>\r\n\t\t<tr class=\"dijitReset dijitCalendarMonthContainer\" valign=\"top\">\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementMonth\">\r\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarDecrease\" role=\"presentation\"/>\r\n\t\t\t\t<span dojoAttachPoint=\"decreaseArrowNode\" class=\"dijitA11ySideArrow\">-</span>\r\n\t\t\t</th>\r\n\t\t\t<!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 \r\n\t\t\t      WaveMaker: Moved year into header for cleaner mobile UI -->\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementYear\">\r\n\t\t\t  <span dojoAttachPoint=\"previousYearLabelNode\" class=\"dijitInline dijitCalendarPreviousYear\"></span>\r\n\t\t\t</th>\r\n\r\n\t\t\t<th class='dijitReset' colspan=\"3\">\r\n\t\t\t\t<div dojoType=\"dijit.form.DropDownButton\" dojoAttachPoint=\"monthDropDownButton\"\r\n\t\t\t\t\tid=\"${id}_mddb\" tabIndex=\"-1\">\r\n\t\t\t\t</div>\r\n\t\t\t</th>\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementYear\">\r\n\t\t\t  <span dojoAttachPoint=\"nextYearLabelNode\" class=\"dijitInline dijitCalendarNextYear\"></span>\r\n\t\t\t</th>\r\n\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementMonth\">\r\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarIncrease\" role=\"presentation\"/>\r\n\t\t\t\t<span dojoAttachPoint=\"increaseArrowNode\" class=\"dijitA11ySideArrow\">+</span>\r\n\t\t\t</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th class=\"dijitReset dijitCalendarDayLabelTemplate\" role=\"columnheader\"><span class=\"dijitCalendarDayLabel\"></span></th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody dojoAttachEvent=\"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp\" class=\"dijitReset dijitCalendarBodyContainer\">\r\n\t\t<tr class=\"dijitReset dijitCalendarWeekTemplate\" role=\"row\">\r\n\t\t\t<td class=\"dijitReset dijitCalendarDateTemplate\" role=\"gridcell\"><span class=\"dijitCalendarDateLabel\"></span></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n\t<!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 \r\n\tWaveMaker: Moved year into header for cleaner mobile UI -->\r\n\t<tfoot class=\"dijitReset dijitCalendarYearContainer\" style='display:none'>\r\n\t\t<tr>\r\n\t\t\t<td class='dijitReset' valign=\"top\" colspan=\"7\">\r\n\t\t\t\t<h3 class=\"dijitCalendarYearLabel\">\r\n\t\t\t\t<span dojoAttachPoint=\"currentYearLabelNode\" class=\"dijitInline dijitCalendarSelectedYear\" id=\"${id}_year\"></span>\r\n\t\t\t\t</h3>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tfoot>\r\n</table>\r\n"),widgetsInTemplate:true,value:new Date(""),datePackage:"dojo.date",dayWidth:"narrow",tabIndex:"0",currentFocus:new Date(),baseClass:"dijitCalendar",cssStateNodes:{"decrementMonth":"dijitCalendarArrow","incrementMonth":"dijitCalendarArrow","previousYearLabelNode":"dijitCalendarPreviousYear","nextYearLabelNode":"dijitCalendarNextYear"},_isValidDate:function(_32c){
return _32c&&!isNaN(_32c)&&typeof _32c=="object"&&_32c.toString()!=this.constructor.prototype.value.toString();
},setValue:function(_32d){
dojo.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");
this.set("value",_32d);
},_getValueAttr:function(){
var _32e=new this.dateClassObj(this.value);
_32e.setHours(0,0,0,0);
if(_32e.getDate()<this.value.getDate()){
_32e=this.dateFuncObj.add(_32e,"hour",1);
}
return _32e;
},_setValueAttr:function(_32f,_330){
if(_32f){
_32f=new this.dateClassObj(_32f);
}
if(this._isValidDate(_32f)){
if(!this._isValidDate(this.value)||this.dateFuncObj.compare(_32f,this.value)){
_32f.setHours(1,0,0,0);
if(!this.isDisabledDate(_32f,this.lang)){
this._set("value",_32f);
var _331=dojo.query("[dijitDateValue="+_32f.valueOf()+"]",this.domNode);
if(_331.length){
dojo.addClass(_331[0],"dijitCalendarSelectedDate");
}
this.set("currentFocus",_32f);
if(_330||typeof _330=="undefined"){
this.onChange(this.get("value"));
this.onValueSelected(this.get("value"));
}
}
}
}else{
this._set("value",null);
this.set("currentFocus",this.currentFocus);
}
},_setText:function(node,text){
while(node.firstChild){
node.removeChild(node.firstChild);
}
node.appendChild(dojo.doc.createTextNode(text));
},_populateGrid:function(){
var _332=new this.dateClassObj(this.currentFocus);
_332.setDate(1);
var _333=_332.getDay(),_334=this.dateFuncObj.getDaysInMonth(_332),_335=this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(_332,"month",-1)),_336=new this.dateClassObj(),_337=dojo.cldr.supplemental.getFirstDayOfWeek(this.lang);
if(_337>_333){
_337-=7;
}
dojo.query(".dijitCalendarDateTemplate",this.domNode).forEach(function(_338,i){
i+=_337;
var date=new this.dateClassObj(_332),_339,_33a="dijitCalendar",adj=0;
if(i<_333){
_339=_335-_333+i+1;
adj=-1;
_33a+="Previous";
}else{
if(i>=(_333+_334)){
_339=i-_333-_334+1;
adj=1;
_33a+="Next";
}else{
_339=i-_333+1;
_33a+="Current";
}
}
if(adj){
date=this.dateFuncObj.add(date,"month",adj);
}
date.setDate(_339);
if(!this.dateFuncObj.compare(date,_336,"date")){
_33a="dijitCalendarCurrentDate "+_33a;
}
if(this._isSelectedDate(date,this.lang)){
_33a="dijitCalendarSelectedDate "+_33a;
}
if(this.isDisabledDate(date,this.lang)){
_33a="dijitCalendarDisabledDate "+_33a;
}
var _33b=this.getClassForDate(date,this.lang);
if(_33b){
_33a=_33b+" "+_33a;
}
_338.className=_33a+"Month dijitCalendarDateTemplate";
_338.dijitDateValue=date.valueOf();
dojo.attr(_338,"dijitDateValue",date.valueOf());
var _33c=dojo.query(".dijitCalendarDateLabel",_338)[0],text=date.getDateLocalized?date.getDateLocalized(this.lang):date.getDate();
this._setText(_33c,text);
},this);
var _33d=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,_332);
this.monthDropDownButton.dropDown.set("months",_33d);
var _33e=this.dateLocaleModule.getNames("months","abbr","standAlone",this.lang,_332);
this.monthDropDownButton.containerNode.innerHTML=(dojo.isIE==6?"":"<div class='dijitSpacer'>"+this.monthDropDownButton.dropDown.domNode.innerHTML+"</div>")+"<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>"+_33e[_332.getMonth()]+" "+_332.getFullYear()+"</div>";
var y=_332.getFullYear()-1;
var d=new this.dateClassObj();
dojo.forEach(["previous","current","next"],function(name){
d.setFullYear(y++);
this._setText(this[name+"YearLabelNode"],this.dateLocaleModule.format(d,{selector:"year",locale:this.lang}));
},this);
},goToToday:function(){
this.set("value",new this.dateClassObj());
},constructor:function(args){
var _33f=(args.datePackage&&(args.datePackage!="dojo.date"))?args.datePackage+".Date":"Date";
this.dateClassObj=dojo.getObject(_33f,false);
this.datePackage=args.datePackage||this.datePackage;
this.dateFuncObj=dojo.getObject(this.datePackage,false);
this.dateLocaleModule=dojo.getObject(this.datePackage+".locale",false);
},postMixInProperties:function(){
if(isNaN(this.value)){
delete this.value;
}
this.inherited(arguments);
},buildRendering:function(){
this.inherited(arguments);
dojo.setSelectable(this.domNode,false);
var _340=dojo.hitch(this,function(_341,n){
var _342=dojo.query(_341,this.domNode)[0];
for(var i=0;i<n;i++){
_342.parentNode.appendChild(_342.cloneNode(true));
}
});
_340(".dijitCalendarDayLabelTemplate",6);
_340(".dijitCalendarDateTemplate",6);
_340(".dijitCalendarWeekTemplate",5);
var _343=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang);
var _344=dojo.cldr.supplemental.getFirstDayOfWeek(this.lang);
dojo.query(".dijitCalendarDayLabel",this.domNode).forEach(function(_345,i){
this._setText(_345,_343[(i+_344)%7]);
},this);
var _346=new this.dateClassObj(this.currentFocus);
this.monthDropDownButton.dropDown=new dijit.Calendar._MonthDropDown({id:this.id+"_mdd",onChange:dojo.hitch(this,"_onMonthSelect")});
this.set("currentFocus",_346,false);
var _347=this;
var _348=function(_349,_34a,adj){
_347._connects.push(dijit.typematic.addMouseListener(_347[_349],_347,function(_34b){
if(_34b>=0){
_347._adjustDisplay(_34a,adj);
}
},0.8,500));
};
_348("incrementMonth","month",1);
_348("decrementMonth","month",-1);
_348("nextYearLabelNode","year",1);
_348("previousYearLabelNode","year",-1);
},_adjustDisplay:function(part,_34c){
this._setCurrentFocusAttr(this.dateFuncObj.add(this.currentFocus,part,_34c));
},_setCurrentFocusAttr:function(date,_34d){
var _34e=this.currentFocus,_34f=_34e?dojo.query("[dijitDateValue="+_34e.valueOf()+"]",this.domNode)[0]:null;
date=new this.dateClassObj(date);
date.setHours(1,0,0,0);
this._set("currentFocus",date);
this._populateGrid();
var _350=dojo.query("[dijitDateValue="+date.valueOf()+"]",this.domNode)[0];
_350.setAttribute("tabIndex",this.tabIndex);
if(this._focused||_34d){
_350.focus();
}
if(_34f&&_34f!=_350){
if(dojo.isWebKit){
_34f.setAttribute("tabIndex","-1");
}else{
_34f.removeAttribute("tabIndex");
}
}
},focus:function(){
this._setCurrentFocusAttr(this.currentFocus,true);
},_onMonthSelect:function(_351){
this.currentFocus=this.dateFuncObj.add(this.currentFocus,"month",_351-this.currentFocus.getMonth());
this._populateGrid();
},_onDayClick:function(evt){
dojo.stopEvent(evt);
for(var node=evt.target;node&&!node.dijitDateValue;node=node.parentNode){
}
if(node&&!dojo.hasClass(node,"dijitCalendarDisabledDate")){
this.set("value",node.dijitDateValue);
}
},_onDayMouseOver:function(evt){
var node=dojo.hasClass(evt.target,"dijitCalendarDateLabel")?evt.target.parentNode:evt.target;
if(node&&(node.dijitDateValue||node==this.previousYearLabelNode||node==this.nextYearLabelNode)){
dojo.addClass(node,"dijitCalendarHoveredDate");
this._currentNode=node;
}
},_onDayMouseOut:function(evt){
if(!this._currentNode){
return;
}
if(evt.relatedTarget&&evt.relatedTarget.parentNode==this._currentNode){
return;
}
var cls="dijitCalendarHoveredDate";
if(dojo.hasClass(this._currentNode,"dijitCalendarActiveDate")){
cls+=" dijitCalendarActiveDate";
}
dojo.removeClass(this._currentNode,cls);
this._currentNode=null;
},_onDayMouseDown:function(evt){
var node=evt.target.parentNode;
if(node&&node.dijitDateValue){
dojo.addClass(node,"dijitCalendarActiveDate");
this._currentNode=node;
}
},_onDayMouseUp:function(evt){
var node=evt.target.parentNode;
if(node&&node.dijitDateValue){
dojo.removeClass(node,"dijitCalendarActiveDate");
}
},handleKey:function(evt){
var dk=dojo.keys,_352=-1,_353,_354=this.currentFocus;
switch(evt.keyCode){
case dk.RIGHT_ARROW:
_352=1;
case dk.LEFT_ARROW:
_353="day";
if(!this.isLeftToRight()){
_352*=-1;
}
break;
case dk.DOWN_ARROW:
_352=1;
case dk.UP_ARROW:
_353="week";
break;
case dk.PAGE_DOWN:
_352=1;
case dk.PAGE_UP:
_353=evt.ctrlKey||evt.altKey?"year":"month";
break;
case dk.END:
_354=this.dateFuncObj.add(_354,"month",1);
_353="day";
case dk.HOME:
_354=new this.dateClassObj(_354);
_354.setDate(1);
break;
case dk.ENTER:
case dk.SPACE:
this.set("value",this.currentFocus);
break;
default:
return true;
}
if(_353){
_354=this.dateFuncObj.add(_354,_353,_352);
}
this._setCurrentFocusAttr(_354);
return false;
},_onKeyPress:function(evt){
if(!this.handleKey(evt)){
dojo.stopEvent(evt);
}
},onValueSelected:function(date){
},onChange:function(date){
},_isSelectedDate:function(_355,_356){
return this._isValidDate(this.value)&&!this.dateFuncObj.compare(_355,this.value,"date");
},isDisabledDate:function(_357,_358){
},getClassForDate:function(_359,_35a){
}});
dojo.declare("dijit.Calendar._MonthDropDown",[dijit._Widget,dijit._Templated],{months:[],templateString:"<div class='dijitCalendarMonthMenu dijitMenu' "+"dojoAttachEvent='onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'></div>",_setMonthsAttr:function(_35b){
this.domNode.innerHTML=dojo.map(_35b,function(_35c,idx){
return _35c?"<div class='dijitCalendarMonthLabel' month='"+idx+"'>"+_35c+"</div>":"";
}).join("");
},_onClick:function(evt){
this.onChange(dojo.attr(evt.target,"month"));
},onChange:function(_35d){
},_onMenuHover:function(evt){
dojo.toggleClass(evt.target,"dijitCalendarMonthLabelHover",evt.type=="mouseover");
}});
}
if(!dojo._hasResource["dijit.form._DateTimeTextBox"]){
dojo._hasResource["dijit.form._DateTimeTextBox"]=true;
dojo.provide("dijit.form._DateTimeTextBox");
new Date("X");
dojo.declare("dijit.form._DateTimeTextBox",[dijit.form.RangeBoundTextBox,dijit._HasDropDown],{templateString:dojo.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t>\r\n\t\t\t    <!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0\r\n\t\t\t      WaveMaker: Unfortunate hack to replace input with span to avoid focus issues with mobile that cause keyboards to pop open -->\r\n<${buttonNodeType} class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),hasDownArrow:true,openOnClick:true,regExpGen:dojo.date.locale.regexp,datePackage:"dojo.date",compare:function(val1,val2){
var _35e=this._isInvalidDate(val1);
var _35f=this._isInvalidDate(val2);
return _35e?(_35f?0:-1):(_35f?1:dojo.date.compare(val1,val2,this._selector));
},forceWidth:true,format:function(_360,_361){
if(!_360){
return "";
}
return this.dateLocaleModule.format(_360,_361);
},"parse":function(_362,_363){
return this.dateLocaleModule.parse(_362,_363)||(this._isEmpty(_362)?null:undefined);
},serialize:function(val,_364){
if(val.toGregorian){
val=val.toGregorian();
}
return dojo.date.stamp.toISOString(val,_364);
},dropDownDefaultValue:new Date(),value:new Date(""),_blankValue:null,popupClass:"",_selector:"",constructor:function(args){
var _365=args.datePackage?args.datePackage+".Date":"Date";
this.dateClassObj=dojo.getObject(_365,false);
this.value=new this.dateClassObj("");
this.datePackage=args.datePackage||this.datePackage;
this.dateLocaleModule=dojo.getObject(this.datePackage+".locale",false);
this.regExpGen=this.dateLocaleModule.regexp;
this._invalidDate=dijit.form._DateTimeTextBox.prototype.value.toString();
},buildRendering:function(){
this.inherited(arguments);
if(!this.hasDownArrow){
this._buttonNode.style.display="none";
}
if(this.openOnClick||!this.hasDownArrow){
this._buttonNode=this.domNode;
this.baseClass+=" dijitComboBoxOpenOnClick";
}
},_setConstraintsAttr:function(_366){
_366.selector=this._selector;
_366.fullYear=true;
var _367=dojo.date.stamp.fromISOString;
if(typeof _366.min=="string"){
_366.min=_367(_366.min);
}
if(typeof _366.max=="string"){
_366.max=_367(_366.max);
}
this.inherited(arguments);
},_isInvalidDate:function(_368){
return !_368||isNaN(_368)||typeof _368!="object"||_368.toString()==this._invalidDate;
},_setValueAttr:function(_369,_36a,_36b){
if(_369!==undefined){
if(typeof _369=="string"){
_369=dojo.date.stamp.fromISOString(_369);
}
if(this._isInvalidDate(_369)){
_369=null;
}
if(_369 instanceof Date&&!(this.dateClassObj instanceof Date)){
_369=new this.dateClassObj(_369);
}
}
this.inherited(arguments);
if(this.dropDown){
this.dropDown.set("value",_369,false);
}
},_set:function(attr,_36c){
if(attr=="value"&&this.value instanceof Date&&this.compare(_36c,this.value)==0){
return;
}
this.inherited(arguments);
},_setDropDownDefaultValueAttr:function(val){
if(this._isInvalidDate(val)){
val=new this.dateClassObj();
}
this.dropDownDefaultValue=val;
},openDropDown:function(_36d){
if(this.dropDown){
this.dropDown.destroy();
}
var _36e=dojo.getObject(this.popupClass,false),_36f=this,_370=this.get("value");
this.dropDown=new _36e({onChange:function(_371){
dijit.form._DateTimeTextBox.superclass._setValueAttr.call(_36f,_371,true);
},id:this.id+"_popup",dir:_36f.dir,lang:_36f.lang,value:_370,currentFocus:!this._isInvalidDate(_370)?_370:this.dropDownDefaultValue,constraints:_36f.constraints,filterString:_36f.filterString,datePackage:_36f.datePackage,isDisabledDate:function(date){
return !_36f.rangeCheck(date,_36f.constraints);
}});
this.inherited(arguments);
},_getDisplayedValueAttr:function(){
return this.textbox.value;
},_setDisplayedValueAttr:function(_372,_373){
this._setValueAttr(this.parse(_372,this.constraints),_373,_372);
}});
}
if(!dojo._hasResource["dijit.form.DateTextBox"]){
dojo._hasResource["dijit.form.DateTextBox"]=true;
dojo.provide("dijit.form.DateTextBox");
dojo.declare("dijit.form.DateTextBox",dijit.form._DateTimeTextBox,{baseClass:"dijitTextBox dijitComboBox dijitDateTextBox",popupClass:"dijit.Calendar",_selector:"date",value:new Date("")});
}
if(!dojo._hasResource["dijit._TimePicker"]){
dojo._hasResource["dijit._TimePicker"]=true;
dojo.provide("dijit._TimePicker");
dojo.declare("dijit._TimePicker",[dijit._Widget,dijit._Templated],{templateString:dojo.cache("dijit","templates/TimePicker.html","<div id=\"widget_${id}\" class=\"dijitMenu\"\r\n    ><div dojoAttachPoint=\"upArrow\" class=\"dijitButtonNode dijitUpArrowButton\" dojoAttachEvent=\"onmouseenter:_buttonMouse,onmouseleave:_buttonMouse\"\r\n\t\t><div class=\"dijitReset dijitInline dijitArrowButtonInner\" role=\"presentation\">&nbsp;</div\r\n\t\t><div class=\"dijitArrowButtonChar\">&#9650;</div></div\r\n    ><div dojoAttachPoint=\"timeMenu,focusNode\" dojoAttachEvent=\"onclick:_onOptionSelected,onmouseover,onmouseout\"></div\r\n    ><div dojoAttachPoint=\"downArrow\" class=\"dijitButtonNode dijitDownArrowButton\" dojoAttachEvent=\"onmouseenter:_buttonMouse,onmouseleave:_buttonMouse\"\r\n\t\t><div class=\"dijitReset dijitInline dijitArrowButtonInner\" role=\"presentation\">&nbsp;</div\r\n\t\t><div class=\"dijitArrowButtonChar\">&#9660;</div></div\r\n></div>\r\n"),baseClass:"dijitTimePicker",clickableIncrement:"T00:15:00",visibleIncrement:"T01:00:00",visibleRange:"T05:00:00",value:new Date(),_visibleIncrement:2,_clickableIncrement:1,_totalIncrements:10,constraints:{},serialize:dojo.date.stamp.toISOString,setValue:function(_374){
dojo.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");
this.set("value",_374);
},_setValueAttr:function(date){
this._set("value",date);
this._showText();
},_setFilterStringAttr:function(val){
this._set("filterString",val);
this._showText();
},isDisabledDate:function(_375,_376){
return false;
},_getFilteredNodes:function(_377,_378,_379,_37a){
var _37b=[],_37c=_37a?_37a.date:this._refDate,n,i=_377,max=this._maxIncrement+Math.abs(i),chk=_379?-1:1,dec=_379?1:0,inc=1-dec;
do{
i=i-dec;
n=this._createOption(i);
if(n){
if((_379&&n.date>_37c)||(!_379&&n.date<_37c)){
break;
}
_37b[_379?"unshift":"push"](n);
_37c=n.date;
}
i=i+inc;
}while(_37b.length<_378&&(i*chk)<max);
return _37b;
},_showText:function(){
var _37d=dojo.date.stamp.fromISOString;
this.timeMenu.innerHTML="";
this._clickableIncrementDate=_37d(this.clickableIncrement);
this._visibleIncrementDate=_37d(this.visibleIncrement);
this._visibleRangeDate=_37d(this.visibleRange);
var _37e=function(date){
return date.getHours()*60*60+date.getMinutes()*60+date.getSeconds();
},_37f=_37e(this._clickableIncrementDate),_380=_37e(this._visibleIncrementDate),_381=_37e(this._visibleRangeDate),time=(this.value||this.currentFocus).getTime();
this._refDate=new Date(time-time%(_380*1000));
this._refDate.setFullYear(1970,0,1);
this._clickableIncrement=1;
this._totalIncrements=_381/_37f;
this._visibleIncrement=_380/_37f;
this._maxIncrement=(60*60*24)/_37f;
var _382=this._getFilteredNodes(0,Math.min(this._totalIncrements>>1,10)-1),_383=this._getFilteredNodes(0,Math.min(this._totalIncrements,10)-_382.length,true,_382[0]);
dojo.forEach(_383.concat(_382),function(n){
this.timeMenu.appendChild(n);
},this);
},constructor:function(){
this.constraints={};
},postMixInProperties:function(){
this.inherited(arguments);
this._setConstraintsAttr(this.constraints);
},_setConstraintsAttr:function(_384){
dojo.mixin(this,_384);
if(!_384.locale){
_384.locale=this.lang;
}
},postCreate:function(){
this.connect(this.timeMenu,dojo.isIE?"onmousewheel":"DOMMouseScroll","_mouseWheeled");
this._connects.push(dijit.typematic.addMouseListener(this.upArrow,this,"_onArrowUp",33,250));
this._connects.push(dijit.typematic.addMouseListener(this.downArrow,this,"_onArrowDown",33,250));
this.inherited(arguments);
},_buttonMouse:function(e){
dojo.toggleClass(e.currentTarget,e.currentTarget==this.upArrow?"dijitUpArrowHover":"dijitDownArrowHover",e.type=="mouseenter"||e.type=="mouseover");
},_createOption:function(_385){
var date=new Date(this._refDate);
var _386=this._clickableIncrementDate;
date.setHours(date.getHours()+_386.getHours()*_385,date.getMinutes()+_386.getMinutes()*_385,date.getSeconds()+_386.getSeconds()*_385);
if(this.constraints.selector=="time"){
date.setFullYear(1970,0,1);
}
var _387=dojo.date.locale.format(date,this.constraints);
if(this.filterString&&_387.toLowerCase().indexOf(this.filterString)!==0){
return null;
}
var div=dojo.create("div",{"class":this.baseClass+"Item"});
div.date=date;
div.index=_385;
dojo.create("div",{"class":this.baseClass+"ItemInner",innerHTML:_387},div);
if(_385%this._visibleIncrement<1&&_385%this._visibleIncrement>-1){
dojo.addClass(div,this.baseClass+"Marker");
}else{
if(!(_385%this._clickableIncrement)){
dojo.addClass(div,this.baseClass+"Tick");
}
}
if(this.isDisabledDate(date)){
dojo.addClass(div,this.baseClass+"ItemDisabled");
}
if(this.value&&!dojo.date.compare(this.value,date,this.constraints.selector)){
div.selected=true;
dojo.addClass(div,this.baseClass+"ItemSelected");
if(dojo.hasClass(div,this.baseClass+"Marker")){
dojo.addClass(div,this.baseClass+"MarkerSelected");
}else{
dojo.addClass(div,this.baseClass+"TickSelected");
}
this._highlightOption(div,true);
}
return div;
},_onOptionSelected:function(tgt){
var _388=tgt.target.date||tgt.target.parentNode.date;
if(!_388||this.isDisabledDate(_388)){
return;
}
this._highlighted_option=null;
this.set("value",_388);
this.onChange(_388);
},onChange:function(time){
},_highlightOption:function(node,_389){
if(!node){
return;
}
if(_389){
if(this._highlighted_option){
this._highlightOption(this._highlighted_option,false);
}
this._highlighted_option=node;
}else{
if(this._highlighted_option!==node){
return;
}else{
this._highlighted_option=null;
}
}
dojo.toggleClass(node,this.baseClass+"ItemHover",_389);
if(dojo.hasClass(node,this.baseClass+"Marker")){
dojo.toggleClass(node,this.baseClass+"MarkerHover",_389);
}else{
dojo.toggleClass(node,this.baseClass+"TickHover",_389);
}
},onmouseover:function(e){
this._keyboardSelected=null;
var tgr=(e.target.parentNode===this.timeMenu)?e.target:e.target.parentNode;
if(!dojo.hasClass(tgr,this.baseClass+"Item")){
return;
}
this._highlightOption(tgr,true);
},onmouseout:function(e){
this._keyboardSelected=null;
var tgr=(e.target.parentNode===this.timeMenu)?e.target:e.target.parentNode;
this._highlightOption(tgr,false);
},_mouseWheeled:function(e){
this._keyboardSelected=null;
dojo.stopEvent(e);
var _38a=(dojo.isIE?e.wheelDelta:-e.detail);
this[(_38a>0?"_onArrowUp":"_onArrowDown")]();
},_onArrowUp:function(_38b){
if(typeof _38b=="number"&&_38b==-1){
return;
}
if(!this.timeMenu.childNodes.length){
return;
}
var _38c=this.timeMenu.childNodes[0].index;
var divs=this._getFilteredNodes(_38c,1,true,this.timeMenu.childNodes[0]);
if(divs.length){
this.timeMenu.removeChild(this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]);
this.timeMenu.insertBefore(divs[0],this.timeMenu.childNodes[0]);
}
},_onArrowDown:function(_38d){
if(typeof _38d=="number"&&_38d==-1){
return;
}
if(!this.timeMenu.childNodes.length){
return;
}
var _38e=this.timeMenu.childNodes[this.timeMenu.childNodes.length-1].index+1;
var divs=this._getFilteredNodes(_38e,1,false,this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]);
if(divs.length){
this.timeMenu.removeChild(this.timeMenu.childNodes[0]);
this.timeMenu.appendChild(divs[0]);
}
},handleKey:function(e){
var dk=dojo.keys;
if(e.charOrCode==dk.DOWN_ARROW||e.charOrCode==dk.UP_ARROW){
dojo.stopEvent(e);
if(this._highlighted_option&&!this._highlighted_option.parentNode){
this._highlighted_option=null;
}
var _38f=this.timeMenu,tgt=this._highlighted_option||dojo.query("."+this.baseClass+"ItemSelected",_38f)[0];
if(!tgt){
tgt=_38f.childNodes[0];
}else{
if(_38f.childNodes.length){
if(e.charOrCode==dk.DOWN_ARROW&&!tgt.nextSibling){
this._onArrowDown();
}else{
if(e.charOrCode==dk.UP_ARROW&&!tgt.previousSibling){
this._onArrowUp();
}
}
if(e.charOrCode==dk.DOWN_ARROW){
tgt=tgt.nextSibling;
}else{
tgt=tgt.previousSibling;
}
}
}
this._highlightOption(tgt,true);
this._keyboardSelected=tgt;
return false;
}else{
if(e.charOrCode==dk.ENTER||e.charOrCode===dk.TAB){
if(!this._keyboardSelected&&e.charOrCode===dk.TAB){
return true;
}
if(this._highlighted_option){
this._onOptionSelected({target:this._highlighted_option});
}
return e.charOrCode===dk.TAB;
}
}
}});
}
if(!dojo._hasResource["dijit.form.TimeTextBox"]){
dojo._hasResource["dijit.form.TimeTextBox"]=true;
dojo.provide("dijit.form.TimeTextBox");
dojo.declare("dijit.form.TimeTextBox",dijit.form._DateTimeTextBox,{baseClass:"dijitTextBox dijitComboBox dijitTimeTextBox",popupClass:"dijit._TimePicker",_selector:"time",value:new Date(""),_onKey:function(evt){
this.inherited(arguments);
switch(evt.keyCode){
case dojo.keys.ENTER:
case dojo.keys.TAB:
case dojo.keys.ESCAPE:
case dojo.keys.DOWN_ARROW:
case dojo.keys.UP_ARROW:
break;
default:
setTimeout(dojo.hitch(this,function(){
var val=this.get("displayedValue");
this.filterString=(val&&!this.parse(val,this.constraints))?val.toLowerCase():"";
if(this._opened){
this.closeDropDown();
}
this.openDropDown();
}),0);
}
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
dojo.data.util.sorter.createSortFunction=function(_390,_391){
var _392=[];
function _393(attr,dir,comp,s){
return function(_394,_395){
var a=s.getValue(_394,attr);
var b=s.getValue(_395,attr);
return dir*comp(a,b);
};
};
var _396;
var map=_391.comparatorMap;
var bc=dojo.data.util.sorter.basicComparator;
for(var i=0;i<_390.length;i++){
_396=_390[i];
var attr=_396.attribute;
if(attr){
var dir=(_396.descending)?-1:1;
var comp=bc;
if(map){
if(typeof attr!=="string"&&("toString" in attr)){
attr=attr.toString();
}
comp=map[attr]||bc;
}
_392.push(_393(attr,dir,comp,_391));
}
}
return function(rowA,rowB){
var i=0;
while(i<_392.length){
var ret=_392[i++](rowA,rowB);
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
dojo.data.util.simpleFetch.fetch=function(_397){
_397=_397||{};
if(!_397.store){
_397.store=this;
}
var self=this;
var _398=function(_399,_39a){
if(_39a.onError){
var _39b=_39a.scope||dojo.global;
_39a.onError.call(_39b,_399,_39a);
}
};
var _39c=function(_39d,_39e){
var _39f=_39e.abort||null;
var _3a0=false;
var _3a1=_39e.start?_39e.start:0;
var _3a2=(_39e.count&&(_39e.count!==Infinity))?(_3a1+_39e.count):_39d.length;
_39e.abort=function(){
_3a0=true;
if(_39f){
_39f.call(_39e);
}
};
var _3a3=_39e.scope||dojo.global;
if(!_39e.store){
_39e.store=self;
}
if(_39e.onBegin){
_39e.onBegin.call(_3a3,_39d.length,_39e);
}
if(_39e.sort){
_39d.sort(dojo.data.util.sorter.createSortFunction(_39e.sort,self));
}
if(_39e.onItem){
for(var i=_3a1;(i<_39d.length)&&(i<_3a2);++i){
var item=_39d[i];
if(!_3a0){
_39e.onItem.call(_3a3,item,_39e);
}
}
}
if(_39e.onComplete&&!_3a0){
var _3a4=null;
if(!_39e.onItem){
_3a4=_39d.slice(_3a1,_3a2);
}
_39e.onComplete.call(_3a3,_3a4,_39e);
}
};
this._fetchItems(_397,_39c,_398);
return _397;
};
}
if(!dojo._hasResource["dojo.data.util.filter"]){
dojo._hasResource["dojo.data.util.filter"]=true;
dojo.provide("dojo.data.util.filter");
dojo.getObject("data.util.filter",true,dojo);
dojo.data.util.filter.patternToRegExp=function(_3a5,_3a6){
var rxp="^";
var c=null;
for(var i=0;i<_3a5.length;i++){
c=_3a5.charAt(i);
switch(c){
case "\\":
rxp+=c;
i++;
rxp+=_3a5.charAt(i);
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
if(_3a6){
return new RegExp(rxp,"mi");
}else{
return new RegExp(rxp,"m");
}
};
}
if(!dojo._hasResource["dijit.form.ComboBox"]){
dojo._hasResource["dijit.form.ComboBox"]=true;
dojo.provide("dijit.form.ComboBox");
dojo.declare("dijit.form.ComboBoxMixin",dijit._HasDropDown,{item:null,pageSize:Infinity,store:null,fetchProperties:{},query:{},autoComplete:true,highlightMatch:"first",searchDelay:100,searchAttr:"name",labelAttr:"",labelType:"text",queryExpr:"${0}*",ignoreCase:true,hasDownArrow:true,templateString:dojo.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t>\r\n\t\t\t    <!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0\r\n\t\t\t      WaveMaker: Unfortunate hack to replace input with span to avoid focus issues with mobile that cause keyboards to pop open -->\r\n<${buttonNodeType} class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitComboBox",dropDownClass:"dijit.form._ComboBoxMenu",cssStateNodes:{"_buttonNode":"dijitDownArrowButton"},maxHeight:-1,_stopClickEvents:false,_getCaretPos:function(_3a7){
var pos=0;
if(typeof (_3a7.selectionStart)=="number"){
pos=_3a7.selectionStart;
}else{
if(dojo.isIE){
var tr=dojo.doc.selection.createRange().duplicate();
var ntr=_3a7.createTextRange();
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
},_setCaretPos:function(_3a8,_3a9){
_3a9=parseInt(_3a9);
dijit.selectInputText(_3a8,_3a9,_3a9);
},_setDisabledAttr:function(_3aa){
this.inherited(arguments);
dijit.setWaiState(this.domNode,"disabled",_3aa);
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
var _3ab=false;
var pw=this.dropDown;
var dk=dojo.keys;
var _3ac=null;
this._prev_key_backspace=false;
this._abortQuery();
this.inherited(arguments);
if(this._opened){
_3ac=pw.getHighlightedOption();
}
switch(key){
case dk.PAGE_DOWN:
case dk.DOWN_ARROW:
case dk.PAGE_UP:
case dk.UP_ARROW:
if(this._opened){
this._announceOption(_3ac);
}
dojo.stopEvent(evt);
break;
case dk.ENTER:
if(_3ac){
if(_3ac==pw.nextButton){
this._nextSearch(1);
dojo.stopEvent(evt);
break;
}else{
if(_3ac==pw.previousButton){
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
var _3ad=this.get("displayedValue");
if(pw&&(_3ad==pw._messages["previousMessage"]||_3ad==pw._messages["nextMessage"])){
break;
}
if(_3ac){
this._selectOption();
}
if(this._opened){
this._lastQuery=null;
this.closeDropDown();
}
break;
case " ":
if(_3ac){
dojo.stopEvent(evt);
this._selectOption();
this.closeDropDown();
}else{
_3ab=true;
}
break;
case dk.DELETE:
case dk.BACKSPACE:
this._prev_key_backspace=true;
_3ab=true;
break;
default:
_3ab=typeof key=="string"||key==229;
}
if(_3ab){
this.item=undefined;
this.searchTimer=setTimeout(dojo.hitch(this,"_startSearchFromInput"),1);
}
},_autoCompleteText:function(text){
var fn=this.focusNode;
dijit.selectInputText(fn,fn.value.length);
var _3ae=this.ignoreCase?"toLowerCase":"substr";
if(text[_3ae](0).indexOf(this.focusNode.value[_3ae](0))==0){
var cpos=this._getCaretPos(fn);
if((cpos+1)>fn.value.length){
fn.value=text;
dijit.selectInputText(fn,cpos);
}
}else{
fn.value=text;
dijit.selectInputText(fn);
}
},_openResultList:function(_3af,_3b0){
this._fetchHandle=null;
if(this.disabled||this.readOnly||(_3b0.query[this.searchAttr]!=this._lastQuery)){
return;
}
var _3b1=this.dropDown._highlighted_option&&dojo.hasClass(this.dropDown._highlighted_option,"dijitMenuItemSelected");
this.dropDown.clearResultList();
if(!_3af.length&&!this._maxOptions){
this.closeDropDown();
return;
}
_3b0._maxOptions=this._maxOptions;
var _3b2=this.dropDown.createOptions(_3af,_3b0,dojo.hitch(this,"_getMenuLabelFromItem"));
this._showResultList();
if(_3b0.direction){
if(1==_3b0.direction){
this.dropDown.highlightFirstOption();
}else{
if(-1==_3b0.direction){
this.dropDown.highlightLastOption();
}
}
if(_3b1){
this._announceOption(this.dropDown.getHighlightedOption());
}
}else{
if(this.autoComplete&&!this._prev_key_backspace&&!/^[*]+$/.test(_3b0.query[this.searchAttr])){
this._announceOption(_3b2[1]);
}
}
},_showResultList:function(){
this.closeDropDown(true);
this.displayMessage("");
this.openDropDown();
dijit.setWaiState(this.domNode,"expanded","true");
},loadDropDown:function(_3b3){
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
var _3b4=this.get("displayedValue");
var pw=this.dropDown;
if(pw&&(_3b4==pw._messages["previousMessage"]||_3b4==pw._messages["nextMessage"])){
this._setValueAttr(this._lastValueReported,true);
}else{
if(typeof this.item=="undefined"){
this.item=null;
this.set("displayedValue",_3b4);
}else{
if(_3b4===""){
this.item=null;
this.set("displayedValue",_3b4);
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
},_setItemAttr:function(item,_3b5,_3b6){
if(!_3b6){
_3b6=this.store.getValue(item,this.searchAttr);
}
var _3b7=this._getValueField()!=this.searchAttr?this.store.getIdentity(item):_3b6;
this._set("item",item);
dijit.form.ComboBox.superclass._setValueAttr.call(this,_3b7,_3b5,_3b6);
},_announceOption:function(node){
if(!node){
return;
}
var _3b8;
if(node==this.dropDown.nextButton||node==this.dropDown.previousButton){
_3b8=node.innerHTML;
this.item=undefined;
this.value="";
}else{
_3b8=this.store.getValue(node.item,this.searchAttr).toString();
this.set("item",node.item,false,_3b8);
}
this.focusNode.value=this.focusNode.value.substring(0,this._lastInput.length);
dijit.setWaiState(this.focusNode,"activedescendant",dojo.attr(node,"id"));
this._autoCompleteText(_3b8);
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
var _3b9=this.id+"_popup",_3ba=dojo.getObject(this.dropDownClass,false);
this.dropDown=new _3ba({onChange:dojo.hitch(this,this._selectOption),id:_3b9,dir:this.dir});
dijit.removeWaiState(this.focusNode,"activedescendant");
dijit.setWaiState(this.textbox,"owns",_3b9);
}
var _3bb=dojo.clone(this.query);
this._lastInput=key;
this._lastQuery=_3bb[this.searchAttr]=this._getQueryString(key);
this.searchTimer=setTimeout(dojo.hitch(this,function(_3bc,_3bd){
this.searchTimer=null;
var _3be={queryOptions:{ignoreCase:this.ignoreCase,deep:true},query:_3bc,onBegin:dojo.hitch(this,"_setMaxOptions"),onComplete:dojo.hitch(this,"_openResultList"),onError:function(_3bf){
_3bd._fetchHandle=null;
console.error("dijit.form.ComboBox: "+_3bf);
_3bd.closeDropDown();
},start:0,count:this.pageSize};
dojo.mixin(_3be,_3bd.fetchProperties);
this._fetchHandle=_3bd.store.fetch(_3be);
var _3c0=function(_3c1,_3c2){
_3c1.start+=_3c1.count*_3c2;
_3c1.direction=_3c2;
this._fetchHandle=this.store.fetch(_3c1);
this.focus();
};
this._nextSearch=this.dropDown.onPage=dojo.hitch(this,_3c0,this._fetchHandle);
},_3bb,this),this.searchDelay);
},_setMaxOptions:function(size,_3c3){
this._maxOptions=size;
},_getValueField:function(){
return this.searchAttr;
},constructor:function(){
this.query={};
this.fetchProperties={};
},postMixInProperties:function(){
if(!this.store){
var _3c4=this.srcNodeRef;
this.store=new dijit.form._ComboBoxDataStore(_3c4);
if(!("value" in this.params)){
var item=(this.item=this.store.fetchSelectedItem());
if(item){
var _3c5=this._getValueField();
this.value=this.store.getValue(item,_3c5);
}
}
}
this.inherited(arguments);
},postCreate:function(){
var _3c6=dojo.query("label[for=\""+this.id+"\"]");
if(_3c6.length){
_3c6[0].id=(this.id+"_label");
dijit.setWaiState(this.domNode,"labelledby",_3c6[0].id);
}
this.inherited(arguments);
},_setHasDownArrowAttr:function(val){
this.hasDownArrow=val;
this._buttonNode.style.display=val?"":"none";
},_getMenuLabelFromItem:function(item){
var _3c7=this.labelFunc(item,this.store),_3c8=this.labelType;
if(this.highlightMatch!="none"&&this.labelType=="text"&&this._lastInput){
_3c7=this.doHighlight(_3c7,this._escapeHtml(this._lastInput));
_3c8="html";
}
return {html:_3c8=="html",label:_3c7};
},doHighlight:function(_3c9,find){
var _3ca=(this.ignoreCase?"i":"")+(this.highlightMatch=="all"?"g":""),i=this.queryExpr.indexOf("${0}");
find=dojo.regexp.escapeString(find);
return this._escapeHtml(_3c9).replace(new RegExp((i==0?"^":"")+"("+find+")"+(i==(this.queryExpr.length-4)?"$":""),_3ca),"<span class=\"dijitComboBoxHighlightMatch\">$1</span>");
},_escapeHtml:function(str){
str=String(str).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
return str;
},reset:function(){
this.item=null;
this.inherited(arguments);
},labelFunc:function(item,_3cb){
return _3cb.getValue(item,this.labelAttr||this.searchAttr).toString();
}});
dojo.declare("dijit.form._ComboBoxMenu",[dijit._Widget,dijit._Templated,dijit._CssStateMixin],{templateString:"<ul class='dijitReset dijitMenu' dojoAttachEvent='onmousedown:_onMouseDown,onmouseup:_onMouseUp,onmouseover:_onMouseOver,onmouseout:_onMouseOut' style='overflow: \"auto\"; overflow-x: \"hidden\";'>"+"<li class='dijitMenuItem dijitMenuPreviousButton' dojoAttachPoint='previousButton' role='option'></li>"+"<li class='dijitMenuItem dijitMenuNextButton' dojoAttachPoint='nextButton' role='option'></li>"+"</ul>",_messages:null,baseClass:"dijitComboBoxMenu",postMixInProperties:function(){
this.inherited(arguments);
this._messages=dojo.i18n.getLocalization("dijit.form","ComboBox",this.lang);
},buildRendering:function(){
this.inherited(arguments);
this.previousButton.innerHTML=this._messages["previousMessage"];
this.nextButton.innerHTML=this._messages["nextMessage"];
},_setValueAttr:function(_3cc){
this.value=_3cc;
this.onChange(_3cc);
},onChange:function(_3cd){
},onPage:function(_3ce){
},onClose:function(){
this._blurOptionNode();
},_createOption:function(item,_3cf){
var _3d0=dojo.create("li",{"class":"dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl"),role:"option"});
var _3d1=_3cf(item);
if(_3d1.html){
_3d0.innerHTML=_3d1.label;
}else{
_3d0.appendChild(dojo.doc.createTextNode(_3d1.label));
}
if(_3d0.innerHTML==""){
_3d0.innerHTML="&nbsp;";
}
_3d0.item=item;
return _3d0;
},createOptions:function(_3d2,_3d3,_3d4){
this.previousButton.style.display=(_3d3.start==0)?"none":"";
dojo.attr(this.previousButton,"id",this.id+"_prev");
dojo.forEach(_3d2,function(item,i){
var _3d5=this._createOption(item,_3d4);
if(item.indent){
dojo.addClass(_3d5,"indentOption"+((item.indent===true)?"":item.indent));
}
dojo.attr(_3d5,"id",this.id+i);
this.domNode.insertBefore(_3d5,this.nextButton);
},this);
var _3d6=false;
if(_3d3._maxOptions&&_3d3._maxOptions!=-1){
if((_3d3.start+_3d3.count)<_3d3._maxOptions){
_3d6=true;
}else{
if((_3d3.start+_3d3.count)>_3d3._maxOptions&&_3d3.count==_3d2.length){
_3d6=true;
}
}
}else{
if(_3d3.count==_3d2.length){
_3d6=true;
}
}
this.nextButton.style.display=_3d6?"":"none";
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
var _3d7=this.domNode.firstChild;
var _3d8=_3d7.nextSibling;
this._focusOptionNode(_3d8.style.display=="none"?_3d7:_3d8);
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
var _3d9=0;
var _3da=this.domNode.scrollTop;
var _3db=dojo.style(this.domNode,"height");
if(!this.getHighlightedOption()){
this._highlightNextOption();
}
while(_3d9<_3db){
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
var _3dc=this.domNode.scrollTop;
_3d9+=(_3dc-_3da)*(up?-1:1);
_3da=_3dc;
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
dojo.declare("dijit.form.ComboBox",[dijit.form.ValidationTextBox,dijit.form.ComboBoxMixin],{_setValueAttr:function(_3dd,_3de,_3df){
this._set("item",null);
var self=this;
this.store.fetchItemByIdentity({identity:_3dd,onItem:function(item){
self._set("item",item);
}});
if(!_3dd){
_3dd="";
}
dijit.form.ValidationTextBox.prototype._setValueAttr.call(this,_3dd,_3de,_3df);
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
},getValue:function(item,_3e0,_3e1){
return (_3e0=="value")?item.value:(item.innerText||item.textContent||"");
},isItemLoaded:function(_3e2){
return true;
},getFeatures:function(){
return {"dojo.data.api.Read":true,"dojo.data.api.Identity":true};
},_fetchItems:function(args,_3e3,_3e4){
if(!args.query){
args.query={};
}
if(!args.query.name){
args.query.name="";
}
if(!args.queryOptions){
args.queryOptions={};
}
var _3e5=dojo.data.util.filter.patternToRegExp(args.query.name,args.queryOptions.ignoreCase),_3e6=dojo.query("> option",this.root).filter(function(_3e7){
return (_3e7.innerText||_3e7.textContent||"").match(_3e5);
});
if(args.sort){
_3e6.sort(dojo.data.util.sorter.createSortFunction(args.sort,this));
}
_3e3(_3e6,args);
},close:function(_3e8){
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
if(!dojo._hasResource["dojo.data.ItemFileReadStore"]){
dojo._hasResource["dojo.data.ItemFileReadStore"]=true;
dojo.provide("dojo.data.ItemFileReadStore");
dojo.declare("dojo.data.ItemFileReadStore",null,{constructor:function(_3e9){
this._arrayOfAllItems=[];
this._arrayOfTopLevelItems=[];
this._loadFinished=false;
this._jsonFileUrl=_3e9.url;
this._ccUrl=_3e9.url;
this.url=_3e9.url;
this._jsonData=_3e9.data;
this.data=null;
this._datatypeMap=_3e9.typeMap||{};
if(!this._datatypeMap["Date"]){
this._datatypeMap["Date"]={type:Date,deserialize:function(_3ea){
return dojo.date.stamp.fromISOString(_3ea);
}};
}
this._features={"dojo.data.api.Read":true,"dojo.data.api.Identity":true};
this._itemsByIdentity=null;
this._storeRefPropName="_S";
this._itemNumPropName="_0";
this._rootItemPropName="_RI";
this._reverseRefMap="_RRM";
this._loadInProgress=false;
this._queuedFetches=[];
if(_3e9.urlPreventCache!==undefined){
this.urlPreventCache=_3e9.urlPreventCache?true:false;
}
if(_3e9.hierarchical!==undefined){
this.hierarchical=_3e9.hierarchical?true:false;
}
if(_3e9.clearOnClose){
this.clearOnClose=true;
}
if("failOk" in _3e9){
this.failOk=_3e9.failOk?true:false;
}
},url:"",_ccUrl:"",data:null,typeMap:null,clearOnClose:false,urlPreventCache:false,failOk:false,hierarchical:true,_assertIsItem:function(item){
if(!this.isItem(item)){
throw new Error("dojo.data.ItemFileReadStore: Invalid item argument.");
}
},_assertIsAttribute:function(_3eb){
if(typeof _3eb!=="string"){
throw new Error("dojo.data.ItemFileReadStore: Invalid attribute argument.");
}
},getValue:function(item,_3ec,_3ed){
var _3ee=this.getValues(item,_3ec);
return (_3ee.length>0)?_3ee[0]:_3ed;
},getValues:function(item,_3ef){
this._assertIsItem(item);
this._assertIsAttribute(_3ef);
if(_3ef.indexOf(".")!=-1){
var _3f0=_3ef.split(/\./);
var _3f1=item;
for(var i=0;i<_3f0.length;i++){
var key=_3f0[i];
if(_3f1[key]&&_3f1[key][0]){
_3f1=i==_3f0.length-1?_3f1[key]:_3f1[key][0];
}else{
_3f1=null;
break;
}
}
if(_3f1!==null){
return _3f1;
}
}
return (item[_3ef]||[]).slice(0);
},getAttributes:function(item){
this._assertIsItem(item);
var _3f2=[];
for(var key in item){
if((key!==this._storeRefPropName)&&(key!==this._itemNumPropName)&&(key!==this._rootItemPropName)&&(key!==this._reverseRefMap)){
_3f2.push(key);
}
}
return _3f2;
},hasAttribute:function(item,_3f3){
this._assertIsItem(item);
this._assertIsAttribute(_3f3);
return (_3f3 in item);
},containsValue:function(item,_3f4,_3f5){
var _3f6=undefined;
if(typeof _3f5==="string"){
_3f6=dojo.data.util.filter.patternToRegExp(_3f5,false);
}
return this._containsValue(item,_3f4,_3f5,_3f6);
},_containsValue:function(item,_3f7,_3f8,_3f9){
return dojo.some(this.getValues(item,_3f7),function(_3fa){
if(_3fa!==null&&!dojo.isObject(_3fa)&&_3f9){
if(_3fa.toString().match(_3f9)){
return true;
}
}else{
if(_3f8===_3fa){
return true;
}
}
});
},isItem:function(_3fb){
if(_3fb&&_3fb[this._storeRefPropName]===this){
if(this._arrayOfAllItems[_3fb[this._itemNumPropName]]===_3fb){
return true;
}
}
return false;
},isItemLoaded:function(_3fc){
return this.isItem(_3fc);
},loadItem:function(_3fd){
this._assertIsItem(_3fd.item);
},getFeatures:function(){
return this._features;
},getLabel:function(item){
if(this._labelAttr&&this.isItem(item)){
return this.getValue(item,this._labelAttr);
}
return undefined;
},getLabelAttributes:function(item){
if(this._labelAttr){
return [this._labelAttr];
}
return null;
},_fetchItems:function(_3fe,_3ff,_400){
var self=this,_401=function(_402,_403){
var _404=[],i,key;
if(_402.query){
var _405,_406=_402.queryOptions?_402.queryOptions.ignoreCase:false;
var _407={};
for(key in _402.query){
_405=_402.query[key];
if(typeof _405==="string"){
_407[key]=dojo.data.util.filter.patternToRegExp(_405,_406);
}else{
if(_405 instanceof RegExp){
_407[key]=_405;
}
}
}
for(i=0;i<_403.length;++i){
var _408=true;
var _409=_403[i];
if(_409===null){
_408=false;
}else{
for(key in _402.query){
_405=_402.query[key];
if(!self._containsValue(_409,key,_405,_407[key])){
_408=false;
}
}
}
if(_408){
_404.push(_409);
}
}
_3ff(_404,_402);
}else{
for(i=0;i<_403.length;++i){
var item=_403[i];
if(item!==null){
_404.push(item);
}
}
_3ff(_404,_402);
}
};
if(this._loadFinished){
_401(_3fe,this._getItemsArray(_3fe.queryOptions));
}else{
if(this._jsonFileUrl!==this._ccUrl){
dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
this._ccUrl=this._jsonFileUrl;
this.url=this._jsonFileUrl;
}else{
if(this.url!==this._ccUrl){
this._jsonFileUrl=this.url;
this._ccUrl=this.url;
}
}
if(this.data!=null){
this._jsonData=this.data;
this.data=null;
}
if(this._jsonFileUrl){
if(this._loadInProgress){
this._queuedFetches.push({args:_3fe,filter:_401});
}else{
this._loadInProgress=true;
var _40a={url:self._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};
var _40b=dojo.xhrGet(_40a);
_40b.addCallback(function(data){
try{
self._getItemsFromLoadedData(data);
self._loadFinished=true;
self._loadInProgress=false;
_401(_3fe,self._getItemsArray(_3fe.queryOptions));
self._handleQueuedFetches();
}
catch(e){
self._loadFinished=true;
self._loadInProgress=false;
_400(e,_3fe);
}
});
_40b.addErrback(function(_40c){
self._loadInProgress=false;
_400(_40c,_3fe);
});
var _40d=null;
if(_3fe.abort){
_40d=_3fe.abort;
}
_3fe.abort=function(){
var df=_40b;
if(df&&df.fired===-1){
df.cancel();
df=null;
}
if(_40d){
_40d.call(_3fe);
}
};
}
}else{
if(this._jsonData){
try{
this._loadFinished=true;
this._getItemsFromLoadedData(this._jsonData);
this._jsonData=null;
_401(_3fe,this._getItemsArray(_3fe.queryOptions));
}
catch(e){
_400(e,_3fe);
}
}else{
_400(new Error("dojo.data.ItemFileReadStore: No JSON source data was provided as either URL or a nested Javascript object."),_3fe);
}
}
}
},_handleQueuedFetches:function(){
if(this._queuedFetches.length>0){
for(var i=0;i<this._queuedFetches.length;i++){
var _40e=this._queuedFetches[i],_40f=_40e.args,_410=_40e.filter;
if(_410){
_410(_40f,this._getItemsArray(_40f.queryOptions));
}else{
this.fetchItemByIdentity(_40f);
}
}
this._queuedFetches=[];
}
},_getItemsArray:function(_411){
if(_411&&_411.deep){
return this._arrayOfAllItems;
}
return this._arrayOfTopLevelItems;
},close:function(_412){
if(this.clearOnClose&&this._loadFinished&&!this._loadInProgress){
if(((this._jsonFileUrl==""||this._jsonFileUrl==null)&&(this.url==""||this.url==null))&&this.data==null){
}
this._arrayOfAllItems=[];
this._arrayOfTopLevelItems=[];
this._loadFinished=false;
this._itemsByIdentity=null;
this._loadInProgress=false;
this._queuedFetches=[];
}
},_getItemsFromLoadedData:function(_413){
var _414=false,self=this;
function _415(_416){
var _417=((_416!==null)&&(typeof _416==="object")&&(!dojo.isArray(_416)||_414)&&(!dojo.isFunction(_416))&&(_416.constructor==Object||dojo.isArray(_416))&&(typeof _416._reference==="undefined")&&(typeof _416._type==="undefined")&&(typeof _416._value==="undefined")&&self.hierarchical);
return _417;
};
function _418(_419){
self._arrayOfAllItems.push(_419);
for(var _41a in _419){
var _41b=_419[_41a];
if(_41b){
if(dojo.isArray(_41b)){
var _41c=_41b;
for(var k=0;k<_41c.length;++k){
var _41d=_41c[k];
if(_415(_41d)){
_418(_41d);
}
}
}else{
if(_415(_41b)){
_418(_41b);
}
}
}
}
};
this._labelAttr=_413.label;
var i,item;
this._arrayOfAllItems=[];
this._arrayOfTopLevelItems=_413.items;
for(i=0;i<this._arrayOfTopLevelItems.length;++i){
item=this._arrayOfTopLevelItems[i];
if(dojo.isArray(item)){
_414=true;
}
_418(item);
item[this._rootItemPropName]=true;
}
var _41e={},key;
for(i=0;i<this._arrayOfAllItems.length;++i){
item=this._arrayOfAllItems[i];
for(key in item){
if(key!==this._rootItemPropName){
var _41f=item[key];
if(_41f!==null){
if(!dojo.isArray(_41f)){
item[key]=[_41f];
}
}else{
item[key]=[null];
}
}
_41e[key]=key;
}
}
while(_41e[this._storeRefPropName]){
this._storeRefPropName+="_";
}
while(_41e[this._itemNumPropName]){
this._itemNumPropName+="_";
}
while(_41e[this._reverseRefMap]){
this._reverseRefMap+="_";
}
var _420;
var _421=_413.identifier;
if(_421){
this._itemsByIdentity={};
this._features["dojo.data.api.Identity"]=_421;
for(i=0;i<this._arrayOfAllItems.length;++i){
item=this._arrayOfAllItems[i];
_420=item[_421];
var _422=_420[0];
if(!Object.hasOwnProperty.call(this._itemsByIdentity,_422)){
this._itemsByIdentity[_422]=item;
}else{
if(this._jsonFileUrl){
throw new Error("dojo.data.ItemFileReadStore:  The json data as specified by: ["+this._jsonFileUrl+"] is malformed.  Items within the list have identifier: ["+_421+"].  Value collided: ["+_422+"]");
}else{
if(this._jsonData){
throw new Error("dojo.data.ItemFileReadStore:  The json data provided by the creation arguments is malformed.  Items within the list have identifier: ["+_421+"].  Value collided/not unique: ["+_422+"]");
}
}
}
}
}else{
this._features["dojo.data.api.Identity"]=Number;
}
for(i=0;i<this._arrayOfAllItems.length;++i){
item=this._arrayOfAllItems[i];
item[this._storeRefPropName]=this;
item[this._itemNumPropName]=i;
}
for(i=0;i<this._arrayOfAllItems.length;++i){
item=this._arrayOfAllItems[i];
for(key in item){
_420=item[key];
for(var j=0;j<_420.length;++j){
_41f=_420[j];
if(_41f!==null&&typeof _41f=="object"){
if(("_type" in _41f)&&("_value" in _41f)){
var type=_41f._type;
var _423=this._datatypeMap[type];
if(!_423){
throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '"+type+"'");
}else{
if(dojo.isFunction(_423)){
_420[j]=new _423(_41f._value);
}else{
if(dojo.isFunction(_423.deserialize)){
_420[j]=_423.deserialize(_41f._value);
}else{
throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");
}
}
}
}
if(_41f._reference){
var _424=_41f._reference;
if(!dojo.isObject(_424)){
_420[j]=this._getItemByIdentity(_424);
}else{
for(var k=0;k<this._arrayOfAllItems.length;++k){
var _425=this._arrayOfAllItems[k],_426=true;
for(var _427 in _424){
if(_425[_427]!=_424[_427]){
_426=false;
}
}
if(_426){
_420[j]=_425;
}
}
}
if(this.referenceIntegrity){
var _428=_420[j];
if(this.isItem(_428)){
this._addReferenceToMap(_428,item,key);
}
}
}else{
if(this.isItem(_41f)){
if(this.referenceIntegrity){
this._addReferenceToMap(_41f,item,key);
}
}
}
}
}
}
}
},_addReferenceToMap:function(_429,_42a,_42b){
},getIdentity:function(item){
var _42c=this._features["dojo.data.api.Identity"];
if(_42c===Number){
return item[this._itemNumPropName];
}else{
var _42d=item[_42c];
if(_42d){
return _42d[0];
}
}
return null;
},fetchItemByIdentity:function(_42e){
var item,_42f;
if(!this._loadFinished){
var self=this;
if(this._jsonFileUrl!==this._ccUrl){
dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
this._ccUrl=this._jsonFileUrl;
this.url=this._jsonFileUrl;
}else{
if(this.url!==this._ccUrl){
this._jsonFileUrl=this.url;
this._ccUrl=this.url;
}
}
if(this.data!=null&&this._jsonData==null){
this._jsonData=this.data;
this.data=null;
}
if(this._jsonFileUrl){
if(this._loadInProgress){
this._queuedFetches.push({args:_42e});
}else{
this._loadInProgress=true;
var _430={url:self._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};
var _431=dojo.xhrGet(_430);
_431.addCallback(function(data){
var _432=_42e.scope?_42e.scope:dojo.global;
try{
self._getItemsFromLoadedData(data);
self._loadFinished=true;
self._loadInProgress=false;
item=self._getItemByIdentity(_42e.identity);
if(_42e.onItem){
_42e.onItem.call(_432,item);
}
self._handleQueuedFetches();
}
catch(error){
self._loadInProgress=false;
if(_42e.onError){
_42e.onError.call(_432,error);
}
}
});
_431.addErrback(function(_433){
self._loadInProgress=false;
if(_42e.onError){
var _434=_42e.scope?_42e.scope:dojo.global;
_42e.onError.call(_434,_433);
}
});
}
}else{
if(this._jsonData){
self._getItemsFromLoadedData(self._jsonData);
self._jsonData=null;
self._loadFinished=true;
item=self._getItemByIdentity(_42e.identity);
if(_42e.onItem){
_42f=_42e.scope?_42e.scope:dojo.global;
_42e.onItem.call(_42f,item);
}
}
}
}else{
item=this._getItemByIdentity(_42e.identity);
if(_42e.onItem){
_42f=_42e.scope?_42e.scope:dojo.global;
_42e.onItem.call(_42f,item);
}
}
},_getItemByIdentity:function(_435){
var item=null;
if(this._itemsByIdentity&&Object.hasOwnProperty.call(this._itemsByIdentity,_435)){
item=this._itemsByIdentity[_435];
}else{
if(Object.hasOwnProperty.call(this._arrayOfAllItems,_435)){
item=this._arrayOfAllItems[_435];
}
}
if(item===undefined){
item=null;
}
return item;
},getIdentityAttributes:function(item){
var _436=this._features["dojo.data.api.Identity"];
if(_436===Number){
return null;
}else{
return [_436];
}
},_forceLoad:function(){
var self=this;
if(this._jsonFileUrl!==this._ccUrl){
dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
this._ccUrl=this._jsonFileUrl;
this.url=this._jsonFileUrl;
}else{
if(this.url!==this._ccUrl){
this._jsonFileUrl=this.url;
this._ccUrl=this.url;
}
}
if(this.data!=null){
this._jsonData=this.data;
this.data=null;
}
if(this._jsonFileUrl){
var _437={url:this._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk,sync:true};
var _438=dojo.xhrGet(_437);
_438.addCallback(function(data){
try{
if(self._loadInProgress!==true&&!self._loadFinished){
self._getItemsFromLoadedData(data);
self._loadFinished=true;
}else{
if(self._loadInProgress){
throw new Error("dojo.data.ItemFileReadStore:  Unable to perform a synchronous load, an async load is in progress.");
}
}
}
catch(e){
throw e;
}
});
_438.addErrback(function(_439){
throw _439;
});
}else{
if(this._jsonData){
self._getItemsFromLoadedData(self._jsonData);
self._jsonData=null;
self._loadFinished=true;
}
}
}});
dojo.extend(dojo.data.ItemFileReadStore,dojo.data.util.simpleFetch);
}
if(!dojo._hasResource["dijit.form.ToggleButton"]){
dojo._hasResource["dijit.form.ToggleButton"]=true;
dojo.provide("dijit.form.ToggleButton");
}
if(!dojo._hasResource["dijit.form.CheckBox"]){
dojo._hasResource["dijit.form.CheckBox"]=true;
dojo.provide("dijit.form.CheckBox");
dojo.declare("dijit.form.CheckBox",dijit.form.ToggleButton,{templateString:dojo.cache("dijit.form","templates/CheckBox.html","<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\r\n\t><input\r\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\r\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\r\n\t\tdojoAttachPoint=\"focusNode\"\r\n\t \tdojoAttachEvent=\"onclick:_onClick\"\r\n/></div>\r\n"),baseClass:"dijitCheckBox",type:"checkbox",value:"on",readOnly:false,attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{readOnly:"focusNode"}),_setReadOnlyAttr:function(_43a){
this._set("readOnly",_43a);
dojo.attr(this.focusNode,"readOnly",_43a);
dijit.setWaiState(this.focusNode,"readonly",_43a);
},_setValueAttr:function(_43b,_43c){
if(typeof _43b=="string"){
this._set("value",_43b);
dojo.attr(this.focusNode,"value",_43b);
_43b=true;
}
if(this._created){
this.set("checked",_43b,_43c);
}
},_getValueAttr:function(){
return (this.checked?this.value:false);
},_setLabelAttr:undefined,postMixInProperties:function(){
if(this.value==""){
this.value="on";
}
this.checkedAttrSetting=this.checked?"checked":"";
this.inherited(arguments);
},_fillContent:function(_43d){
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
dojo.declare("dijit.form.RadioButton",dijit.form.CheckBox,{type:"radio",baseClass:"dijitRadio",_setCheckedAttr:function(_43e){
this.inherited(arguments);
if(!this._created){
return;
}
if(_43e){
var _43f=this;
dojo.query("INPUT[type=radio]",this.focusNode.form||dojo.doc).forEach(function(_440){
if(_440.name==_43f.name&&_440!=_43f.focusNode&&_440.form==_43f.focusNode.form){
var _441=dijit.getEnclosingWidget(_440);
if(_441&&_441.checked){
_441.set("checked",false);
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
if(!dojo._hasResource["dijit.form._Spinner"]){
dojo._hasResource["dijit.form._Spinner"]=true;
dojo.provide("dijit.form._Spinner");
dojo.declare("dijit.form._Spinner",dijit.form.RangeBoundTextBox,{defaultTimeout:500,minimumTimeout:10,timeoutChangeRate:0.9,smallDelta:1,largeDelta:10,templateString:dojo.cache("dijit.form","templates/Spinner.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\" role=\"presentation\"\r\n\t><div class=\"dijitReset dijitButtonNode dijitSpinnerButtonContainer\"\r\n\t\t><input class=\"dijitReset dijitInputField dijitSpinnerButtonInner\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t/><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton\"\r\n\t\t\tdojoAttachPoint=\"upArrowNode\"\r\n\t\t\t><div class=\"dijitArrowButtonInner\"\r\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9650;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t\t\t${_buttonInputDisabled}\r\n\t\t\t/></div\r\n\t\t></div\r\n\t\t><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton\"\r\n\t\t\tdojoAttachPoint=\"downArrowNode\"\r\n\t\t\t><div class=\"dijitArrowButtonInner\"\r\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9660;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t\t\t${_buttonInputDisabled}\r\n\t\t\t/></div\r\n\t\t></div\r\n\t></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' dojoAttachPoint=\"textbox,focusNode\" type=\"${type}\" dojoAttachEvent=\"onkeypress:_onKeyPress\"\r\n\t\t\trole=\"spinbutton\" autocomplete=\"off\" ${!nameAttrSetting}\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitSpinner",cssStateNodes:{"upArrowNode":"dijitUpArrowButton","downArrowNode":"dijitDownArrowButton"},adjust:function(val,_442){
return val;
},_arrowPressed:function(_443,_444,_445){
if(this.disabled||this.readOnly){
return;
}
this._setValueAttr(this.adjust(this.get("value"),_444*_445),false);
dijit.selectInputText(this.textbox,this.textbox.value.length);
},_arrowReleased:function(node){
this._wheelTimer=null;
if(this.disabled||this.readOnly){
return;
}
},_typematicCallback:function(_446,node,evt){
var inc=this.smallDelta;
if(node==this.textbox){
var k=dojo.keys;
var key=evt.charOrCode;
inc=(key==k.PAGE_UP||key==k.PAGE_DOWN)?this.largeDelta:this.smallDelta;
node=(key==k.UP_ARROW||key==k.PAGE_UP)?this.upArrowNode:this.downArrowNode;
}
if(_446==-1){
this._arrowReleased(node);
}else{
this._arrowPressed(node,(node==this.upArrowNode)?1:-1,inc);
}
},_wheelTimer:null,_mouseWheeled:function(evt){
dojo.stopEvent(evt);
var _447=evt.detail?(evt.detail*-1):(evt.wheelDelta/120);
if(_447!==0){
var node=this[(_447>0?"upArrowNode":"downArrowNode")];
this._arrowPressed(node,_447,this.smallDelta);
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
if(!dojo._hasResource["dojo.number"]){
dojo._hasResource["dojo.number"]=true;
dojo.provide("dojo.number");
dojo.getObject("number",true,dojo);
dojo.number.format=function(_448,_449){
_449=dojo.mixin({},_449||{});
var _44a=dojo.i18n.normalizeLocale(_449.locale),_44b=dojo.i18n.getLocalization("dojo.cldr","number",_44a);
_449.customs=_44b;
var _44c=_449.pattern||_44b[(_449.type||"decimal")+"Format"];
if(isNaN(_448)||Math.abs(_448)==Infinity){
return null;
}
return dojo.number._applyPattern(_448,_44c,_449);
};
dojo.number._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/;
dojo.number._applyPattern=function(_44d,_44e,_44f){
_44f=_44f||{};
var _450=_44f.customs.group,_451=_44f.customs.decimal,_452=_44e.split(";"),_453=_452[0];
_44e=_452[(_44d<0)?1:0]||("-"+_453);
if(_44e.indexOf("%")!=-1){
_44d*=100;
}else{
if(_44e.indexOf("‰")!=-1){
_44d*=1000;
}else{
if(_44e.indexOf("¤")!=-1){
_450=_44f.customs.currencyGroup||_450;
_451=_44f.customs.currencyDecimal||_451;
_44e=_44e.replace(/\u00a4{1,3}/,function(_454){
var prop=["symbol","currency","displayName"][_454.length-1];
return _44f[prop]||_44f.currency||"";
});
}else{
if(_44e.indexOf("E")!=-1){
throw new Error("exponential notation not supported");
}
}
}
}
var _455=dojo.number._numberPatternRE;
var _456=_453.match(_455);
if(!_456){
throw new Error("unable to find a number expression in pattern: "+_44e);
}
if(_44f.fractional===false){
_44f.places=0;
}
return _44e.replace(_455,dojo.number._formatAbsolute(_44d,_456[0],{decimal:_451,group:_450,places:_44f.places,round:_44f.round}));
};
dojo.number.round=function(_457,_458,_459){
var _45a=10/(_459||10);
return (_45a*+_457).toFixed(_458)/_45a;
};
if((0.9).toFixed()==0){
(function(){
var _45b=dojo.number.round;
dojo.number.round=function(v,p,m){
var d=Math.pow(10,-p||0),a=Math.abs(v);
if(!v||a>=d||a*Math.pow(10,p+1)<5){
d=0;
}
return _45b(v,p,m)+(v>0?d:-d);
};
})();
}
dojo.number._formatAbsolute=function(_45c,_45d,_45e){
_45e=_45e||{};
if(_45e.places===true){
_45e.places=0;
}
if(_45e.places===Infinity){
_45e.places=6;
}
var _45f=_45d.split("."),_460=typeof _45e.places=="string"&&_45e.places.indexOf(","),_461=_45e.places;
if(_460){
_461=_45e.places.substring(_460+1);
}else{
if(!(_461>=0)){
_461=(_45f[1]||[]).length;
}
}
if(!(_45e.round<0)){
_45c=dojo.number.round(_45c,_461,_45e.round);
}
var _462=String(Math.abs(_45c)).split("."),_463=_462[1]||"";
if(_45f[1]||_45e.places){
if(_460){
_45e.places=_45e.places.substring(0,_460);
}
var pad=_45e.places!==undefined?_45e.places:(_45f[1]&&_45f[1].lastIndexOf("0")+1);
if(pad>_463.length){
_462[1]=dojo.string.pad(_463,pad,"0",true);
}
if(_461<_463.length){
_462[1]=_463.substr(0,_461);
}
}else{
if(_462[1]){
_462.pop();
}
}
var _464=_45f[0].replace(",","");
pad=_464.indexOf("0");
if(pad!=-1){
pad=_464.length-pad;
if(pad>_462[0].length){
_462[0]=dojo.string.pad(_462[0],pad);
}
if(_464.indexOf("#")==-1){
_462[0]=_462[0].substr(_462[0].length-pad);
}
}
var _465=_45f[0].lastIndexOf(","),_466,_467;
if(_465!=-1){
_466=_45f[0].length-_465-1;
var _468=_45f[0].substr(0,_465);
_465=_468.lastIndexOf(",");
if(_465!=-1){
_467=_468.length-_465-1;
}
}
var _469=[];
for(var _46a=_462[0];_46a;){
var off=_46a.length-_466;
_469.push((off>0)?_46a.substr(off):_46a);
_46a=(off>0)?_46a.slice(0,off):"";
if(_467){
_466=_467;
delete _467;
}
}
_462[0]=_469.reverse().join(_45e.group||",");
return _462.join(_45e.decimal||".");
};
dojo.number.regexp=function(_46b){
return dojo.number._parseInfo(_46b).regexp;
};
dojo.number._parseInfo=function(_46c){
_46c=_46c||{};
var _46d=dojo.i18n.normalizeLocale(_46c.locale),_46e=dojo.i18n.getLocalization("dojo.cldr","number",_46d),_46f=_46c.pattern||_46e[(_46c.type||"decimal")+"Format"],_470=_46e.group,_471=_46e.decimal,_472=1;
if(_46f.indexOf("%")!=-1){
_472/=100;
}else{
if(_46f.indexOf("‰")!=-1){
_472/=1000;
}else{
var _473=_46f.indexOf("¤")!=-1;
if(_473){
_470=_46e.currencyGroup||_470;
_471=_46e.currencyDecimal||_471;
}
}
}
var _474=_46f.split(";");
if(_474.length==1){
_474.push("-"+_474[0]);
}
var re=dojo.regexp.buildGroupRE(_474,function(_475){
_475="(?:"+dojo.regexp.escapeString(_475,".")+")";
return _475.replace(dojo.number._numberPatternRE,function(_476){
var _477={signed:false,separator:_46c.strict?_470:[_470,""],fractional:_46c.fractional,decimal:_471,exponent:false},_478=_476.split("."),_479=_46c.places;
if(_478.length==1&&_472!=1){
_478[1]="###";
}
if(_478.length==1||_479===0){
_477.fractional=false;
}else{
if(_479===undefined){
_479=_46c.pattern?_478[1].lastIndexOf("0")+1:Infinity;
}
if(_479&&_46c.fractional==undefined){
_477.fractional=true;
}
if(!_46c.places&&(_479<_478[1].length)){
_479+=","+_478[1].length;
}
_477.places=_479;
}
var _47a=_478[0].split(",");
if(_47a.length>1){
_477.groupSize=_47a.pop().length;
if(_47a.length>1){
_477.groupSize2=_47a.pop().length;
}
}
return "("+dojo.number._realNumberRegexp(_477)+")";
});
},true);
if(_473){
re=re.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,function(_47b,_47c,_47d,_47e){
var prop=["symbol","currency","displayName"][_47d.length-1],_47f=dojo.regexp.escapeString(_46c[prop]||_46c.currency||"");
_47c=_47c?"[\\s\\xa0]":"";
_47e=_47e?"[\\s\\xa0]":"";
if(!_46c.strict){
if(_47c){
_47c+="*";
}
if(_47e){
_47e+="*";
}
return "(?:"+_47c+_47f+_47e+")?";
}
return _47c+_47f+_47e;
});
}
return {regexp:re.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:_470,decimal:_471,factor:_472};
};
dojo.number.parse=function(_480,_481){
var info=dojo.number._parseInfo(_481),_482=(new RegExp("^"+info.regexp+"$")).exec(_480);
if(!_482){
return NaN;
}
var _483=_482[1];
if(!_482[1]){
if(!_482[2]){
return NaN;
}
_483=_482[2];
info.factor*=-1;
}
_483=_483.replace(new RegExp("["+info.group+"\\s\\xa0"+"]","g"),"").replace(info.decimal,".");
return _483*info.factor;
};
dojo.number._realNumberRegexp=function(_484){
_484=_484||{};
if(!("places" in _484)){
_484.places=Infinity;
}
if(typeof _484.decimal!="string"){
_484.decimal=".";
}
if(!("fractional" in _484)||/^0/.test(_484.places)){
_484.fractional=[true,false];
}
if(!("exponent" in _484)){
_484.exponent=[true,false];
}
if(!("eSigned" in _484)){
_484.eSigned=[true,false];
}
var _485=dojo.number._integerRegexp(_484),_486=dojo.regexp.buildGroupRE(_484.fractional,function(q){
var re="";
if(q&&(_484.places!==0)){
re="\\"+_484.decimal;
if(_484.places==Infinity){
re="(?:"+re+"\\d+)?";
}else{
re+="\\d{"+_484.places+"}";
}
}
return re;
},true);
var _487=dojo.regexp.buildGroupRE(_484.exponent,function(q){
if(q){
return "([eE]"+dojo.number._integerRegexp({signed:_484.eSigned})+")";
}
return "";
});
var _488=_485+_486;
if(_486){
_488="(?:(?:"+_488+")|(?:"+_486+"))";
}
return _488+_487;
};
dojo.number._integerRegexp=function(_489){
_489=_489||{};
if(!("signed" in _489)){
_489.signed=[true,false];
}
if(!("separator" in _489)){
_489.separator="";
}else{
if(!("groupSize" in _489)){
_489.groupSize=3;
}
}
var _48a=dojo.regexp.buildGroupRE(_489.signed,function(q){
return q?"[-+]":"";
},true);
var _48b=dojo.regexp.buildGroupRE(_489.separator,function(sep){
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
var grp=_489.groupSize,grp2=_489.groupSize2;
if(grp2){
var _48c="(?:0|[1-9]\\d{0,"+(grp2-1)+"}(?:["+sep+"]\\d{"+grp2+"})*["+sep+"]\\d{"+grp+"})";
return ((grp-grp2)>0)?"(?:"+_48c+"|(?:0|[1-9]\\d{0,"+(grp-1)+"}))":_48c;
}
return "(?:0|[1-9]\\d{0,"+(grp-1)+"}(?:["+sep+"]\\d{"+grp+"})*)";
},true);
return _48a+_48b;
};
}
if(!dojo._hasResource["dijit.form.NumberTextBox"]){
dojo._hasResource["dijit.form.NumberTextBox"]=true;
dojo.provide("dijit.form.NumberTextBox");
dojo.declare("dijit.form.NumberTextBoxMixin",null,{regExpGen:dojo.number.regexp,value:NaN,editOptions:{pattern:"#.######"},_formatter:dojo.number.format,_setConstraintsAttr:function(_48d){
var _48e=typeof _48d.places=="number"?_48d.places:0;
if(_48e){
_48e++;
}
if(typeof _48d.max!="number"){
_48d.max=9*Math.pow(10,15-_48e);
}
if(typeof _48d.min!="number"){
_48d.min=-9*Math.pow(10,15-_48e);
}
this.inherited(arguments,[_48d]);
if(this.focusNode&&this.focusNode.value&&!isNaN(this.value)){
this.set("value",this.value);
}
},_onFocus:function(){
if(this.disabled){
return;
}
var val=this.get("value");
if(typeof val=="number"&&!isNaN(val)){
var _48f=this.format(val,this.constraints);
if(_48f!==undefined){
this.textbox.value=_48f;
}
}
this.inherited(arguments);
},format:function(_490,_491){
var _492=String(_490);
if(typeof _490!="number"){
return _492;
}
if(isNaN(_490)){
return "";
}
if(!("rangeCheck" in this&&this.rangeCheck(_490,_491))&&_491.exponent!==false&&/\de[-+]?\d/i.test(_492)){
return _492;
}
if(this.editOptions&&this._focused){
_491=dojo.mixin({},_491,this.editOptions);
}
return this._formatter(_490,_491);
},_parser:dojo.number.parse,parse:function(_493,_494){
var v=this._parser(_493,dojo.mixin({},_494,(this.editOptions&&this._focused)?this.editOptions:{}));
if(this.editOptions&&this._focused&&isNaN(v)){
v=this._parser(_493,_494);
}
return v;
},_getDisplayedValueAttr:function(){
var v=this.inherited(arguments);
return isNaN(v)?this.textbox.value:v;
},filter:function(_495){
return (_495===null||_495===""||_495===undefined)?NaN:this.inherited(arguments);
},serialize:function(_496,_497){
return (typeof _496!="number"||isNaN(_496))?"":this.inherited(arguments);
},_setBlurValue:function(){
var val=dojo.hitch(dojo.mixin({},this,{_focused:true}),"get")("value");
this._setValueAttr(val,true);
},_setValueAttr:function(_498,_499,_49a){
if(_498!==undefined&&_49a===undefined){
_49a=String(_498);
if(typeof _498=="number"){
if(isNaN(_498)){
_49a="";
}else{
if(("rangeCheck" in this&&this.rangeCheck(_498,this.constraints))||this.constraints.exponent===false||!/\de[-+]?\d/i.test(_49a)){
_49a=undefined;
}
}
}else{
if(!_498){
_49a="";
_498=NaN;
}else{
_498=undefined;
}
}
}
this.inherited(arguments,[_498,_499,_49a]);
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
},isValid:function(_49b){
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
dojo.declare("dijit.form.NumberSpinner",[dijit.form._Spinner,dijit.form.NumberTextBoxMixin],{adjust:function(val,_49c){
var tc=this.constraints,v=isNaN(val),_49d=!isNaN(tc.max),_49e=!isNaN(tc.min);
if(v&&_49c!=0){
val=(_49c>0)?_49e?tc.min:_49d?tc.max:0:_49d?this.constraints.max:_49e?tc.min:0;
}
var _49f=val+_49c;
if(v||isNaN(_49f)){
return val;
}
if(_49d&&(_49f>tc.max)){
_49f=tc.max;
}
if(_49e&&(_49f<tc.min)){
_49f=tc.min;
}
return _49f;
},_onKeyPress:function(e){
if((e.charOrCode==dojo.keys.HOME||e.charOrCode==dojo.keys.END)&&!(e.ctrlKey||e.altKey||e.metaKey)&&typeof this.get("value")!="undefined"){
var _4a0=this.constraints[(e.charOrCode==dojo.keys.HOME?"min":"max")];
if(typeof _4a0=="number"){
this._setValueAttr(_4a0,false);
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
var _4a1={ADP:0,AFN:0,ALL:0,AMD:0,BHD:3,BIF:0,BYR:0,CLF:0,CLP:0,COP:0,CRC:0,DJF:0,ESP:0,GNF:0,GYD:0,HUF:0,IDR:0,IQD:0,IRR:3,ISK:0,ITL:0,JOD:3,JPY:0,KMF:0,KPW:0,KRW:0,KWD:3,LAK:0,LBP:0,LUF:0,LYD:3,MGA:0,MGF:0,MMK:0,MNT:0,MRO:0,MUR:0,OMR:3,PKR:0,PYG:0,RSD:0,RWF:0,SLL:0,SOS:0,STD:0,SYP:0,TMM:0,TND:3,TRL:0,TZS:0,UGX:0,UZS:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,YER:0,ZMK:0,ZWD:0};
var _4a2={CHF:5};
var _4a3=_4a1[code],_4a4=_4a2[code];
if(typeof _4a3=="undefined"){
_4a3=2;
}
if(typeof _4a4=="undefined"){
_4a4=0;
}
return {places:_4a3,round:_4a4};
};
}
if(!dojo._hasResource["dojo.currency"]){
dojo._hasResource["dojo.currency"]=true;
dojo.provide("dojo.currency");
dojo.getObject("currency",true,dojo);
dojo.currency._mixInDefaults=function(_4a5){
_4a5=_4a5||{};
_4a5.type="currency";
var _4a6=dojo.i18n.getLocalization("dojo.cldr","currency",_4a5.locale)||{};
var iso=_4a5.currency;
var data=dojo.cldr.monetary.getData(iso);
dojo.forEach(["displayName","symbol","group","decimal"],function(prop){
data[prop]=_4a6[iso+"_"+prop];
});
data.fractional=[true,false];
return dojo.mixin(data,_4a5);
};
dojo.currency.format=function(_4a7,_4a8){
return dojo.number.format(_4a7,dojo.currency._mixInDefaults(_4a8));
};
dojo.currency.regexp=function(_4a9){
return dojo.number.regexp(dojo.currency._mixInDefaults(_4a9));
};
dojo.currency.parse=function(_4aa,_4ab){
return dojo.number.parse(_4aa,dojo.currency._mixInDefaults(_4ab));
};
}
if(!dojo._hasResource["dijit.form.CurrencyTextBox"]){
dojo._hasResource["dijit.form.CurrencyTextBox"]=true;
dojo.provide("dijit.form.CurrencyTextBox");
dojo.declare("dijit.form.CurrencyTextBox",dijit.form.NumberTextBox,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",regExpGen:function(_4ac){
return "("+(this._focused?this.inherited(arguments,[dojo.mixin({},_4ac,this.editOptions)])+"|":"")+dojo.currency.regexp(_4ac)+")";
},_formatter:dojo.currency.format,_parser:dojo.currency.parse,parse:function(_4ad,_4ae){
var v=this.inherited(arguments);
if(isNaN(v)&&/\d+/.test(_4ad)){
v=dojo.hitch(dojo.mixin({},this,{_parser:dijit.form.NumberTextBox.prototype._parser}),"inherited")(arguments);
}
return v;
},_setConstraintsAttr:function(_4af){
if(!_4af.currency&&this.currency){
_4af.currency=this.currency;
}
this.inherited(arguments,[dojo.currency._mixInDefaults(dojo.mixin(_4af,{exponent:false}))]);
}});
}
if(!dojo._hasResource["dojo.dnd.move"]){
dojo._hasResource["dojo.dnd.move"]=true;
dojo.provide("dojo.dnd.move");
dojo.declare("dojo.dnd.move.constrainedMoveable",dojo.dnd.Moveable,{constraints:function(){
},within:false,markupFactory:function(_4b0,node){
return new dojo.dnd.move.constrainedMoveable(node,_4b0);
},constructor:function(node,_4b1){
if(!_4b1){
_4b1={};
}
this.constraints=_4b1.constraints;
this.within=_4b1.within;
},onFirstMove:function(_4b2){
var c=this.constraintBox=this.constraints.call(this,_4b2);
c.r=c.l+c.w;
c.b=c.t+c.h;
if(this.within){
var mb=dojo._getMarginSize(_4b2.node);
c.r-=mb.w;
c.b-=mb.h;
}
},onMove:function(_4b3,_4b4){
var c=this.constraintBox,s=_4b3.node.style;
this.onMoving(_4b3,_4b4);
_4b4.l=_4b4.l<c.l?c.l:c.r<_4b4.l?c.r:_4b4.l;
_4b4.t=_4b4.t<c.t?c.t:c.b<_4b4.t?c.b:_4b4.t;
s.left=_4b4.l+"px";
s.top=_4b4.t+"px";
this.onMoved(_4b3,_4b4);
}});
dojo.declare("dojo.dnd.move.boxConstrainedMoveable",dojo.dnd.move.constrainedMoveable,{box:{},markupFactory:function(_4b5,node){
return new dojo.dnd.move.boxConstrainedMoveable(node,_4b5);
},constructor:function(node,_4b6){
var box=_4b6&&_4b6.box;
this.constraints=function(){
return box;
};
}});
dojo.declare("dojo.dnd.move.parentConstrainedMoveable",dojo.dnd.move.constrainedMoveable,{area:"content",markupFactory:function(_4b7,node){
return new dojo.dnd.move.parentConstrainedMoveable(node,_4b7);
},constructor:function(node,_4b8){
var area=_4b8&&_4b8.area;
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
var _4b9=dojo.position(this.sliderBarContainer,true);
var _4ba=e[this._mousePixelCoord]-_4b9[this._startingPixelCoord];
this._setPixelValue(this._isReversed()?(_4b9[this._pixelCount]-_4ba):_4ba,_4b9[this._pixelCount],true);
this._movable.onMouseDown(e);
},_setPixelValue:function(_4bb,_4bc,_4bd){
if(this.dynamicSlider){
var now=new Date().getTime();
if(!this._dynamicSliderTimestamp||this._dynamicSliderTimestamp+100<now){
_4bd=true;
this._dynamicSliderTimestamp=now;
if(this.domNode&&this.domNode.id){
wm.cancelJob(this.domNode.id+"._setPixelValue");
}
}else{
if(this.domNode&&this.domNode.id){
var self=this;
wm.job(this.domNode.id+"._setPixelValue",60,function(){
self._setValueAttr((this.maximum-this.minimum)*_4be/_4bf+this.minimum,true);
});
}
}
}
if(this.disabled||this.readOnly){
return;
}
_4bb=_4bb<0?0:_4bc<_4bb?_4bc:_4bb;
var _4bf=this.discreteValues;
if(_4bf<=1||_4bf==Infinity){
_4bf=_4bc;
}
_4bf--;
var _4c0=_4bc/_4bf;
var _4be=Math.round(_4bb/_4c0);
this._setValueAttr((this.maximum-this.minimum)*_4be/_4bf+this.minimum,_4bd);
},_setValueAttr:function(_4c1,_4c2){
this._set("value",_4c1);
this.valueNode.value=_4c1;
dijit.setWaiState(this.focusNode,"valuenow",_4c1);
this.inherited(arguments);
var _4c3=(_4c1-this.minimum)/(this.maximum-this.minimum);
var _4c4=(this._descending===false)?this.remainingBar:this.progressBar;
var _4c5=(this._descending===false)?this.progressBar:this.remainingBar;
if(this._inProgressAnim&&this._inProgressAnim.status!="stopped"){
this._inProgressAnim.stop(true);
}
if(_4c2&&this.slideDuration>0&&_4c4.style[this._progressPixelSize]){
var _4c6=this;
var _4c7={};
var _4c8=parseFloat(_4c4.style[this._progressPixelSize]);
var _4c9=this.slideDuration*(_4c3-_4c8/100);
if(_4c9==0){
return;
}
if(_4c9<0){
_4c9=0-_4c9;
}
_4c7[this._progressPixelSize]={start:_4c8,end:_4c3*100,units:"%"};
this._inProgressAnim=dojo.animateProperty({node:_4c4,duration:_4c9,onAnimate:function(v){
_4c5.style[_4c6._progressPixelSize]=(100-parseFloat(v[_4c6._progressPixelSize]))+"%";
},onEnd:function(){
delete _4c6._inProgressAnim;
},properties:_4c7});
this._inProgressAnim.play();
}else{
_4c4.style[this._progressPixelSize]=(_4c3*100)+"%";
_4c5.style[this._progressPixelSize]=((1-_4c3)*100)+"%";
}
},_bumpValue:function(_4ca,_4cb){
if(this.disabled||this.readOnly){
return;
}
var s=dojo.getComputedStyle(this.sliderBarContainer);
var c=dojo._getContentBox(this.sliderBarContainer,s);
var _4cc=this.discreteValues;
if(_4cc<=1||_4cc==Infinity){
_4cc=c[this._pixelCount];
}
_4cc--;
var _4cd=(this.value-this.minimum)*_4cc/(this.maximum-this.minimum)+_4ca;
if(_4cd<0){
_4cd=0;
}
if(_4cd>_4cc){
_4cd=_4cc;
}
_4cd=_4cd*(this.maximum-this.minimum)/_4cc+this.minimum;
this._setValueAttr(_4cd,_4cb);
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
var _4ce=!dojo.isMozilla;
var _4cf=evt[(_4ce?"wheelDelta":"detail")]*(_4ce?1:-1);
this._bumpValue(_4cf<0?-1:1,true);
},startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_4d0){
if(this[_4d0.container]!=this.containerNode){
this[_4d0.container].appendChild(_4d0.domNode);
}
},this);
this.inherited(arguments);
},_typematicCallback:function(_4d1,_4d2,e){
if(_4d1==-1){
this._setValueAttr(this.value,true);
}else{
this[(_4d2==(this._descending?this.incrementButton:this.decrementButton))?"decrement":"increment"](e);
}
},buildRendering:function(){
this.inherited(arguments);
if(this.showButtons){
this.incrementButton.style.display="";
this.decrementButton.style.display="";
}
var _4d3=dojo.query("label[for=\""+this.id+"\"]");
if(_4d3.length){
_4d3[0].id=(this.id+"_label");
dijit.setWaiState(this.focusNode,"labelledby",_4d3[0].id);
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
var _4d4=dojo.declare(dijit.form._SliderMover,{widget:this});
this._movable=new dojo.dnd.Moveable(this.sliderHandle,{mover:_4d4});
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
var _4d5=this.widget;
var _4d6=_4d5._abspos;
if(!_4d6){
_4d6=_4d5._abspos=dojo.position(_4d5.sliderBarContainer,true);
_4d5._setPixelValue_=dojo.hitch(_4d5,"_setPixelValue");
_4d5._isReversed_=_4d5._isReversed();
}
var _4d7=e.touches?e.touches[0]:e,_4d8=_4d7[_4d5._mousePixelCoord]-_4d6[_4d5._startingPixelCoord];
_4d5._setPixelValue_(_4d5._isReversed_?(_4d6[_4d5._pixelCount]-_4d8):_4d8,_4d6[_4d5._pixelCount],false);
},onMouseUp:function(e){
this.inherited(arguments);
this.destroy();
},destroy:function(e){
dojo.dnd.Mover.prototype.destroy.apply(this,arguments);
var _4d9=this.widget;
_4d9._abspos=null;
_4d9._setValueAttr(_4d9.value,true);
}});
}
if(!dojo._hasResource["dijit._editor.selection"]){
dojo._hasResource["dijit._editor.selection"]=true;
dojo.provide("dijit._editor.selection");
dojo.getObject("_editor.selection",true,dijit);
dojo.mixin(dijit._editor.selection,{getType:function(){
if(dojo.isIE<9){
return dojo.doc.selection.type.toLowerCase();
}else{
var _4da="text";
var oSel;
try{
oSel=dojo.global.getSelection();
}
catch(e){
}
if(oSel&&oSel.rangeCount==1){
var _4db=oSel.getRangeAt(0);
if((_4db.startContainer==_4db.endContainer)&&((_4db.endOffset-_4db.startOffset)==1)&&(_4db.startContainer.nodeType!=3)){
_4da="control";
}
}
return _4da;
}
},getSelectedText:function(){
if(dojo.isIE<9){
if(dijit._editor.selection.getType()=="control"){
return null;
}
return dojo.doc.selection.createRange().text;
}else{
var _4dc=dojo.global.getSelection();
if(_4dc){
return _4dc.toString();
}
}
return "";
},getSelectedHtml:function(){
if(dojo.isIE<9){
if(dijit._editor.selection.getType()=="control"){
return null;
}
return dojo.doc.selection.createRange().htmlText;
}else{
var _4dd=dojo.global.getSelection();
if(_4dd&&_4dd.rangeCount){
var i;
var html="";
for(i=0;i<_4dd.rangeCount;i++){
var frag=_4dd.getRangeAt(i).cloneContents();
var div=dojo.doc.createElement("div");
div.appendChild(frag);
html+=div.innerHTML;
}
return html;
}
return null;
}
},getSelectedElement:function(){
if(dijit._editor.selection.getType()=="control"){
if(dojo.isIE<9){
var _4de=dojo.doc.selection.createRange();
if(_4de&&_4de.item){
return dojo.doc.selection.createRange().item(0);
}
}else{
var _4df=dojo.global.getSelection();
return _4df.anchorNode.childNodes[_4df.anchorOffset];
}
}
return null;
},getParentElement:function(){
if(dijit._editor.selection.getType()=="control"){
var p=this.getSelectedElement();
if(p){
return p.parentNode;
}
}else{
if(dojo.isIE<9){
var r=dojo.doc.selection.createRange();
r.collapse(true);
return r.parentElement();
}else{
var _4e0=dojo.global.getSelection();
if(_4e0){
var node=_4e0.anchorNode;
while(node&&(node.nodeType!=1)){
node=node.parentNode;
}
return node;
}
}
}
return null;
},hasAncestorElement:function(_4e1){
return this.getAncestorElement.apply(this,arguments)!=null;
},getAncestorElement:function(_4e2){
var node=this.getSelectedElement()||this.getParentElement();
return this.getParentOfType(node,arguments);
},isTag:function(node,tags){
if(node&&node.tagName){
var _4e3=node.tagName.toLowerCase();
for(var i=0;i<tags.length;i++){
var _4e4=String(tags[i]).toLowerCase();
if(_4e3==_4e4){
return _4e4;
}
}
}
return "";
},getParentOfType:function(node,tags){
while(node){
if(this.isTag(node,tags).length){
return node;
}
node=node.parentNode;
}
return null;
},collapse:function(_4e5){
if(window.getSelection){
var _4e6=dojo.global.getSelection();
if(_4e6.removeAllRanges){
if(_4e5){
_4e6.collapseToStart();
}else{
_4e6.collapseToEnd();
}
}else{
_4e6.collapse(_4e5);
}
}else{
if(dojo.isIE){
var _4e7=dojo.doc.selection.createRange();
_4e7.collapse(_4e5);
_4e7.select();
}
}
},remove:function(){
var sel=dojo.doc.selection;
if(dojo.isIE<9){
if(sel.type.toLowerCase()!="none"){
sel.clear();
}
return sel;
}else{
sel=dojo.global.getSelection();
sel.deleteFromDocument();
return sel;
}
},selectElementChildren:function(_4e8,_4e9){
var win=dojo.global;
var doc=dojo.doc;
var _4ea;
_4e8=dojo.byId(_4e8);
if(doc.selection&&dojo.isIE<9&&dojo.body().createTextRange){
_4ea=_4e8.ownerDocument.body.createTextRange();
_4ea.moveToElementText(_4e8);
if(!_4e9){
try{
_4ea.select();
}
catch(e){
}
}
}else{
if(win.getSelection){
var _4eb=dojo.global.getSelection();
if(dojo.isOpera){
if(_4eb.rangeCount){
_4ea=_4eb.getRangeAt(0);
}else{
_4ea=doc.createRange();
}
_4ea.setStart(_4e8,0);
_4ea.setEnd(_4e8,(_4e8.nodeType==3)?_4e8.length:_4e8.childNodes.length);
_4eb.addRange(_4ea);
}else{
_4eb.selectAllChildren(_4e8);
}
}
}
},selectElement:function(_4ec,_4ed){
var _4ee;
var doc=dojo.doc;
var win=dojo.global;
_4ec=dojo.byId(_4ec);
if(dojo.isIE<9&&dojo.body().createTextRange){
try{
var tg=_4ec.tagName?_4ec.tagName.toLowerCase():"";
if(tg==="img"||tg==="table"){
_4ee=dojo.body().createControlRange();
}else{
_4ee=dojo.body().createRange();
}
_4ee.addElement(_4ec);
if(!_4ed){
_4ee.select();
}
}
catch(e){
this.selectElementChildren(_4ec,_4ed);
}
}else{
if(dojo.global.getSelection){
var _4ef=win.getSelection();
_4ee=doc.createRange();
if(_4ef.removeAllRanges){
if(dojo.isOpera){
if(_4ef.getRangeAt(0)){
_4ee=_4ef.getRangeAt(0);
}
}
_4ee.selectNode(_4ec);
_4ef.removeAllRanges();
_4ef.addRange(_4ee);
}
}
}
},inSelection:function(node){
if(node){
var _4f0;
var doc=dojo.doc;
var _4f1;
if(dojo.global.getSelection){
var sel=dojo.global.getSelection();
if(sel&&sel.rangeCount>0){
_4f1=sel.getRangeAt(0);
}
if(_4f1&&_4f1.compareBoundaryPoints&&doc.createRange){
try{
_4f0=doc.createRange();
_4f0.setStart(node,0);
if(_4f1.compareBoundaryPoints(_4f1.START_TO_END,_4f0)===1){
return true;
}
}
catch(e){
}
}
}else{
if(doc.selection){
_4f1=doc.selection.createRange();
try{
_4f0=node.ownerDocument.body.createControlRange();
if(_4f0){
_4f0.addElement(node);
}
}
catch(e1){
try{
_4f0=node.ownerDocument.body.createTextRange();
_4f0.moveToElementText(node);
}
catch(e2){
}
}
if(_4f1&&_4f0){
if(_4f1.compareEndPoints("EndToStart",_4f0)===1){
return true;
}
}
}
}
}
return false;
}});
}
if(!dojo._hasResource["dijit._editor.range"]){
dojo._hasResource["dijit._editor.range"]=true;
dojo.provide("dijit._editor.range");
dijit.range={};
dijit.range.getIndex=function(node,_4f2){
var ret=[],retR=[];
var stop=_4f2;
var _4f3=node;
var _4f4,n;
while(node!=stop){
var i=0;
_4f4=node.parentNode;
while((n=_4f4.childNodes[i++])){
if(n===node){
--i;
break;
}
}
ret.unshift(i);
retR.unshift(i-_4f4.childNodes.length);
node=_4f4;
}
if(ret.length>0&&_4f3.nodeType==3){
n=_4f3.previousSibling;
while(n&&n.nodeType==3){
ret[ret.length-1]--;
n=n.previousSibling;
}
n=_4f3.nextSibling;
while(n&&n.nodeType==3){
retR[retR.length-1]++;
n=n.nextSibling;
}
}
return {o:ret,r:retR};
};
dijit.range.getNode=function(_4f5,_4f6){
if(!dojo.isArray(_4f5)||_4f5.length==0){
return _4f6;
}
var node=_4f6;
dojo.every(_4f5,function(i){
if(i>=0&&i<node.childNodes.length){
node=node.childNodes[i];
}else{
node=null;
return false;
}
return true;
});
return node;
};
dijit.range.getCommonAncestor=function(n1,n2,root){
root=root||n1.ownerDocument.body;
var _4f7=function(n){
var as=[];
while(n){
as.unshift(n);
if(n!==root){
n=n.parentNode;
}else{
break;
}
}
return as;
};
var n1as=_4f7(n1);
var n2as=_4f7(n2);
var m=Math.min(n1as.length,n2as.length);
var com=n1as[0];
for(var i=1;i<m;i++){
if(n1as[i]===n2as[i]){
com=n1as[i];
}else{
break;
}
}
return com;
};
dijit.range.getAncestor=function(node,_4f8,root){
root=root||node.ownerDocument.body;
while(node&&node!==root){
var name=node.nodeName.toUpperCase();
if(_4f8.test(name)){
return node;
}
node=node.parentNode;
}
return null;
};
dijit.range.BlockTagNames=/^(?:P|DIV|H1|H2|H3|H4|H5|H6|ADDRESS|PRE|OL|UL|LI|DT|DE)$/;
dijit.range.getBlockAncestor=function(node,_4f9,root){
root=root||node.ownerDocument.body;
_4f9=_4f9||dijit.range.BlockTagNames;
var _4fa=null,_4fb;
while(node&&node!==root){
var name=node.nodeName.toUpperCase();
if(!_4fa&&_4f9.test(name)){
_4fa=node;
}
if(!_4fb&&(/^(?:BODY|TD|TH|CAPTION)$/).test(name)){
_4fb=node;
}
node=node.parentNode;
}
return {blockNode:_4fa,blockContainer:_4fb||node.ownerDocument.body};
};
dijit.range.atBeginningOfContainer=function(_4fc,node,_4fd){
var _4fe=false;
var _4ff=(_4fd==0);
if(!_4ff&&node.nodeType==3){
if(/^[\s\xA0]+$/.test(node.nodeValue.substr(0,_4fd))){
_4ff=true;
}
}
if(_4ff){
var _500=node;
_4fe=true;
while(_500&&_500!==_4fc){
if(_500.previousSibling){
_4fe=false;
break;
}
_500=_500.parentNode;
}
}
return _4fe;
};
dijit.range.atEndOfContainer=function(_501,node,_502){
var _503=false;
var _504=(_502==(node.length||node.childNodes.length));
if(!_504&&node.nodeType==3){
if(/^[\s\xA0]+$/.test(node.nodeValue.substr(_502))){
_504=true;
}
}
if(_504){
var _505=node;
_503=true;
while(_505&&_505!==_501){
if(_505.nextSibling){
_503=false;
break;
}
_505=_505.parentNode;
}
}
return _503;
};
dijit.range.adjacentNoneTextNode=function(_506,next){
var node=_506;
var len=(0-_506.length)||0;
var prop=next?"nextSibling":"previousSibling";
while(node){
if(node.nodeType!=3){
break;
}
len+=node.length;
node=node[prop];
}
return [node,len];
};
dijit.range._w3c=Boolean(window["getSelection"]);
dijit.range.create=function(win){
if(dijit.range._w3c){
return (win||dojo.global).document.createRange();
}else{
return new dijit.range.W3CRange;
}
};
dijit.range.getSelection=function(win,_507){
if(dijit.range._w3c){
return win.getSelection();
}else{
var s=new dijit.range.ie.selection(win);
if(!_507){
s._getCurrentSelection();
}
return s;
}
};
if(!dijit.range._w3c){
dijit.range.ie={cachedSelection:{},selection:function(win){
this._ranges=[];
this.addRange=function(r,_508){
this._ranges.push(r);
if(!_508){
r._select();
}
this.rangeCount=this._ranges.length;
};
this.removeAllRanges=function(){
this._ranges=[];
this.rangeCount=0;
};
var _509=function(){
var r=win.document.selection.createRange();
var type=win.document.selection.type.toUpperCase();
if(type=="CONTROL"){
return new dijit.range.W3CRange(dijit.range.ie.decomposeControlRange(r));
}else{
return new dijit.range.W3CRange(dijit.range.ie.decomposeTextRange(r));
}
};
this.getRangeAt=function(i){
return this._ranges[i];
};
this._getCurrentSelection=function(){
this.removeAllRanges();
var r=_509();
if(r){
this.addRange(r,true);
}
};
},decomposeControlRange:function(_50a){
var _50b=_50a.item(0),_50c=_50a.item(_50a.length-1);
var _50d=_50b.parentNode,_50e=_50c.parentNode;
var _50f=dijit.range.getIndex(_50b,_50d).o;
var _510=dijit.range.getIndex(_50c,_50e).o+1;
return [_50d,_50f,_50e,_510];
},getEndPoint:function(_511,end){
var _512=_511.duplicate();
_512.collapse(!end);
var _513="EndTo"+(end?"End":"Start");
var _514=_512.parentElement();
var _515,_516,_517;
if(_514.childNodes.length>0){
dojo.every(_514.childNodes,function(node,i){
var _518;
if(node.nodeType!=3){
_512.moveToElementText(node);
if(_512.compareEndPoints(_513,_511)>0){
if(_517&&_517.nodeType==3){
_515=_517;
_518=true;
}else{
_515=_514;
_516=i;
return false;
}
}else{
if(i==_514.childNodes.length-1){
_515=_514;
_516=_514.childNodes.length;
return false;
}
}
}else{
if(i==_514.childNodes.length-1){
_515=node;
_518=true;
}
}
if(_518&&_515){
var _519=dijit.range.adjacentNoneTextNode(_515)[0];
if(_519){
_515=_519.nextSibling;
}else{
_515=_514.firstChild;
}
var _51a=dijit.range.adjacentNoneTextNode(_515);
_519=_51a[0];
var _51b=_51a[1];
if(_519){
_512.moveToElementText(_519);
_512.collapse(false);
}else{
_512.moveToElementText(_514);
}
_512.setEndPoint(_513,_511);
_516=_512.text.length-_51b;
return false;
}
_517=node;
return true;
});
}else{
_515=_514;
_516=0;
}
if(!end&&_515.nodeType==1&&_516==_515.childNodes.length){
var _51c=_515.nextSibling;
if(_51c&&_51c.nodeType==3){
_515=_51c;
_516=0;
}
}
return [_515,_516];
},setEndPoint:function(_51d,_51e,_51f){
var _520=_51d.duplicate(),node,len;
if(_51e.nodeType!=3){
if(_51f>0){
node=_51e.childNodes[_51f-1];
if(node){
if(node.nodeType==3){
_51e=node;
_51f=node.length;
}else{
if(node.nextSibling&&node.nextSibling.nodeType==3){
_51e=node.nextSibling;
_51f=0;
}else{
_520.moveToElementText(node.nextSibling?node:_51e);
var _521=node.parentNode;
var _522=_521.insertBefore(node.ownerDocument.createTextNode(" "),node.nextSibling);
_520.collapse(false);
_521.removeChild(_522);
}
}
}
}else{
_520.moveToElementText(_51e);
_520.collapse(true);
}
}
if(_51e.nodeType==3){
var _523=dijit.range.adjacentNoneTextNode(_51e);
var _524=_523[0];
len=_523[1];
if(_524){
_520.moveToElementText(_524);
_520.collapse(false);
if(_524.contentEditable!="inherit"){
len++;
}
}else{
_520.moveToElementText(_51e.parentNode);
_520.collapse(true);
}
_51f+=len;
if(_51f>0){
if(_520.move("character",_51f)!=_51f){
console.error("Error when moving!");
}
}
}
return _520;
},decomposeTextRange:function(_525){
var _526=dijit.range.ie.getEndPoint(_525);
var _527=_526[0],_528=_526[1];
var _529=_526[0],_52a=_526[1];
if(_525.htmlText.length){
if(_525.htmlText==_525.text){
_52a=_528+_525.text.length;
}else{
_526=dijit.range.ie.getEndPoint(_525,true);
_529=_526[0],_52a=_526[1];
}
}
return [_527,_528,_529,_52a];
},setRange:function(_52b,_52c,_52d,_52e,_52f,_530){
var _531=dijit.range.ie.setEndPoint(_52b,_52c,_52d);
_52b.setEndPoint("StartToStart",_531);
if(!_530){
var end=dijit.range.ie.setEndPoint(_52b,_52e,_52f);
}
_52b.setEndPoint("EndToEnd",end||_531);
return _52b;
}};
dojo.declare("dijit.range.W3CRange",null,{constructor:function(){
if(arguments.length>0){
this.setStart(arguments[0][0],arguments[0][1]);
this.setEnd(arguments[0][2],arguments[0][3]);
}else{
this.commonAncestorContainer=null;
this.startContainer=null;
this.startOffset=0;
this.endContainer=null;
this.endOffset=0;
this.collapsed=true;
}
},_updateInternal:function(){
if(this.startContainer!==this.endContainer){
this.commonAncestorContainer=dijit.range.getCommonAncestor(this.startContainer,this.endContainer);
}else{
this.commonAncestorContainer=this.startContainer;
}
this.collapsed=(this.startContainer===this.endContainer)&&(this.startOffset==this.endOffset);
},setStart:function(node,_532){
_532=parseInt(_532);
if(this.startContainer===node&&this.startOffset==_532){
return;
}
delete this._cachedBookmark;
this.startContainer=node;
this.startOffset=_532;
if(!this.endContainer){
this.setEnd(node,_532);
}else{
this._updateInternal();
}
},setEnd:function(node,_533){
_533=parseInt(_533);
if(this.endContainer===node&&this.endOffset==_533){
return;
}
delete this._cachedBookmark;
this.endContainer=node;
this.endOffset=_533;
if(!this.startContainer){
this.setStart(node,_533);
}else{
this._updateInternal();
}
},setStartAfter:function(node,_534){
this._setPoint("setStart",node,_534,1);
},setStartBefore:function(node,_535){
this._setPoint("setStart",node,_535,0);
},setEndAfter:function(node,_536){
this._setPoint("setEnd",node,_536,1);
},setEndBefore:function(node,_537){
this._setPoint("setEnd",node,_537,0);
},_setPoint:function(what,node,_538,ext){
var _539=dijit.range.getIndex(node,node.parentNode).o;
this[what](node.parentNode,_539.pop()+ext);
},_getIERange:function(){
var r=(this._body||this.endContainer.ownerDocument.body).createTextRange();
dijit.range.ie.setRange(r,this.startContainer,this.startOffset,this.endContainer,this.endOffset,this.collapsed);
return r;
},getBookmark:function(body){
this._getIERange();
return this._cachedBookmark;
},_select:function(){
var r=this._getIERange();
r.select();
},deleteContents:function(){
var r=this._getIERange();
r.pasteHTML("");
this.endContainer=this.startContainer;
this.endOffset=this.startOffset;
this.collapsed=true;
},cloneRange:function(){
var r=new dijit.range.W3CRange([this.startContainer,this.startOffset,this.endContainer,this.endOffset]);
r._body=this._body;
return r;
},detach:function(){
this._body=null;
this.commonAncestorContainer=null;
this.startContainer=null;
this.startOffset=0;
this.endContainer=null;
this.endOffset=0;
this.collapsed=true;
}});
}
}
if(!dojo._hasResource["dijit._editor.html"]){
dojo._hasResource["dijit._editor.html"]=true;
dojo.provide("dijit._editor.html");
dojo.getObject("_editor",true,dijit);
dijit._editor.escapeXml=function(str,_53a){
str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
if(!_53a){
str=str.replace(/'/gm,"&#39;");
}
return str;
};
dijit._editor.getNodeHtml=function(node){
var _53b;
switch(node.nodeType){
case 1:
var _53c=node.nodeName.toLowerCase();
if(!_53c||_53c.charAt(0)=="/"){
return "";
}
_53b="<"+_53c;
var _53d=[];
var attr;
if(dojo.isIE&&node.outerHTML){
var s=node.outerHTML;
s=s.substr(0,s.indexOf(">")).replace(/(['"])[^"']*\1/g,"");
var reg=/(\b\w+)\s?=/g;
var m,key;
while((m=reg.exec(s))){
key=m[1];
if(key.substr(0,3)!="_dj"){
if(key=="src"||key=="href"){
if(node.getAttribute("_djrealurl")){
_53d.push([key,node.getAttribute("_djrealurl")]);
continue;
}
}
var val,_53e;
switch(key){
case "style":
val=node.style.cssText.toLowerCase();
break;
case "class":
val=node.className;
break;
case "width":
if(_53c==="img"){
_53e=/width=(\S+)/i.exec(s);
if(_53e){
val=_53e[1];
}
break;
}
case "height":
if(_53c==="img"){
_53e=/height=(\S+)/i.exec(s);
if(_53e){
val=_53e[1];
}
break;
}
default:
val=node.getAttribute(key);
}
if(val!=null){
_53d.push([key,val.toString()]);
}
}
}
}else{
var i=0;
while((attr=node.attributes[i++])){
var n=attr.name;
if(n.substr(0,3)!="_dj"){
var v=attr.value;
if(n=="src"||n=="href"){
if(node.getAttribute("_djrealurl")){
v=node.getAttribute("_djrealurl");
}
}
_53d.push([n,v]);
}
}
}
_53d.sort(function(a,b){
return a[0]<b[0]?-1:(a[0]==b[0]?0:1);
});
var j=0;
while((attr=_53d[j++])){
_53b+=" "+attr[0]+"=\""+(dojo.isString(attr[1])?dijit._editor.escapeXml(attr[1],true):attr[1])+"\"";
}
if(_53c==="script"){
_53b+=">"+node.innerHTML+"</"+_53c+">";
}else{
if(node.childNodes.length){
_53b+=">"+dijit._editor.getChildrenHtml(node)+"</"+_53c+">";
}else{
switch(_53c){
case "br":
case "hr":
case "img":
case "input":
case "base":
case "meta":
case "area":
case "basefont":
_53b+=" />";
break;
default:
_53b+="></"+_53c+">";
}
}
}
break;
case 4:
case 3:
_53b=dijit._editor.escapeXml(node.nodeValue,true);
break;
case 8:
_53b="<!--"+dijit._editor.escapeXml(node.nodeValue,true)+"-->";
break;
default:
_53b="<!-- Element not recognized - Type: "+node.nodeType+" Name: "+node.nodeName+"-->";
}
return _53b;
};
dijit._editor.getChildrenHtml=function(dom){
var out="";
if(!dom){
return out;
}
var _53f=dom["childNodes"]||dom;
var _540=!dojo.isIE||_53f!==dom;
var node,i=0;
while((node=_53f[i++])){
if(!_540||node.parentNode==dom){
out+=dijit._editor.getNodeHtml(node);
}
}
return out;
};
}
if(!dojo._hasResource["dijit._editor.RichText"]){
dojo._hasResource["dijit._editor.RichText"]=true;
dojo.provide("dijit._editor.RichText");
if(!dojo.config["useXDomain"]||dojo.config["allowXdRichTextSave"]){
if(dojo._postLoad){
(function(){
var _541=dojo.doc.createElement("textarea");
_541.id=dijit._scopeName+"._editor.RichText.value";
dojo.style(_541,{display:"none",position:"absolute",top:"-100px",height:"3px",width:"3px"});
dojo.body().appendChild(_541);
})();
}else{
try{
dojo.doc.write("<textarea id=\""+dijit._scopeName+"._editor.RichText.value\" "+"style=\"display:none;position:absolute;top:-100px;left:-100px;height:3px;width:3px;overflow:hidden;\"></textarea>");
}
catch(e){
}
}
}
dojo.declare("dijit._editor.RichText",[dijit._Widget,dijit._CssStateMixin],{constructor:function(_542){
this.contentPreFilters=[];
this.contentPostFilters=[];
this.contentDomPreFilters=[];
this.contentDomPostFilters=[];
this.editingAreaStyleSheets=[];
this.events=[].concat(this.events);
this._keyHandlers={};
if(_542&&dojo.isString(_542.value)){
this.value=_542.value;
}
this.onLoadDeferred=new dojo.Deferred();
},baseClass:"dijitEditor",inheritWidth:false,focusOnLoad:false,name:"",styleSheets:"",height:"300px",minHeight:"1em",isClosed:true,isLoaded:false,_SEPARATOR:"@@**%%__RICHTEXTBOUNDRY__%%**@@",_NAME_CONTENT_SEP:"@@**%%:%%**@@",onLoadDeferred:null,isTabIndent:false,disableSpellCheck:false,postCreate:function(){
if("textarea"==this.domNode.tagName.toLowerCase()){
console.warn("RichText should not be used with the TEXTAREA tag.  See dijit._editor.RichText docs.");
}
this.contentPreFilters=[dojo.hitch(this,"_preFixUrlAttributes")].concat(this.contentPreFilters);
if(dojo.isMoz){
this.contentPreFilters=[this._normalizeFontStyle].concat(this.contentPreFilters);
this.contentPostFilters=[this._removeMozBogus].concat(this.contentPostFilters);
}
if(dojo.isWebKit){
this.contentPreFilters=[this._removeWebkitBogus].concat(this.contentPreFilters);
this.contentPostFilters=[this._removeWebkitBogus].concat(this.contentPostFilters);
}
if(dojo.isIE){
this.contentPostFilters=[this._normalizeFontStyle].concat(this.contentPostFilters);
}
this.inherited(arguments);
dojo.publish(dijit._scopeName+"._editor.RichText::init",[this]);
this.open();
this.setupDefaultShortcuts();
},setupDefaultShortcuts:function(){
var exec=dojo.hitch(this,function(cmd,arg){
return function(){
return !this.execCommand(cmd,arg);
};
});
var _543={b:exec("bold"),i:exec("italic"),u:exec("underline"),a:exec("selectall"),s:function(){
this.save(true);
},m:function(){
this.isTabIndent=!this.isTabIndent;
},"1":exec("formatblock","h1"),"2":exec("formatblock","h2"),"3":exec("formatblock","h3"),"4":exec("formatblock","h4"),"\\":exec("insertunorderedlist")};
if(!dojo.isIE){
_543.Z=exec("redo");
}
for(var key in _543){
this.addKeyHandler(key,true,false,_543[key]);
}
},events:["onKeyPress","onKeyDown","onKeyUp"],captureEvents:[],_editorCommandsLocalized:false,_localizeEditorCommands:function(){
if(dijit._editor._editorCommandsLocalized){
this._local2NativeFormatNames=dijit._editor._local2NativeFormatNames;
this._native2LocalFormatNames=dijit._editor._native2LocalFormatNames;
return;
}
dijit._editor._editorCommandsLocalized=true;
dijit._editor._local2NativeFormatNames={};
dijit._editor._native2LocalFormatNames={};
this._local2NativeFormatNames=dijit._editor._local2NativeFormatNames;
this._native2LocalFormatNames=dijit._editor._native2LocalFormatNames;
var _544=["div","p","pre","h1","h2","h3","h4","h5","h6","ol","ul","address"];
var _545="",_546,i=0;
while((_546=_544[i++])){
if(_546.charAt(1)!=="l"){
_545+="<"+_546+"><span>content</span></"+_546+"><br/>";
}else{
_545+="<"+_546+"><li>content</li></"+_546+"><br/>";
}
}
var _547={position:"absolute",top:"0px",zIndex:10,opacity:0.01};
var div=dojo.create("div",{style:_547,innerHTML:_545});
dojo.body().appendChild(div);
var _548=dojo.hitch(this,function(){
var node=div.firstChild;
while(node){
try{
dijit._editor.selection.selectElement(node.firstChild);
var _549=node.tagName.toLowerCase();
this._local2NativeFormatNames[_549]=document.queryCommandValue("formatblock");
this._native2LocalFormatNames[this._local2NativeFormatNames[_549]]=_549;
node=node.nextSibling.nextSibling;
}
catch(e){
}
}
div.parentNode.removeChild(div);
div.innerHTML="";
});
setTimeout(_548,0);
},open:function(_54a){
if(!this.onLoadDeferred||this.onLoadDeferred.fired>=0){
this.onLoadDeferred=new dojo.Deferred();
}
if(!this.isClosed){
this.close();
}
dojo.publish(dijit._scopeName+"._editor.RichText::open",[this]);
if(arguments.length==1&&_54a.nodeName){
this.domNode=_54a;
}
var dn=this.domNode;
var html;
if(dojo.isString(this.value)){
html=this.value;
delete this.value;
dn.innerHTML="";
}else{
if(dn.nodeName&&dn.nodeName.toLowerCase()=="textarea"){
var ta=(this.textarea=dn);
this.name=ta.name;
html=ta.value;
dn=this.domNode=dojo.doc.createElement("div");
dn.setAttribute("widgetId",this.id);
ta.removeAttribute("widgetId");
dn.cssText=ta.cssText;
dn.className+=" "+ta.className;
dojo.place(dn,ta,"before");
var _54b=dojo.hitch(this,function(){
dojo.style(ta,{display:"block",position:"absolute",top:"-1000px"});
if(dojo.isIE){
var s=ta.style;
this.__overflow=s.overflow;
s.overflow="hidden";
}
});
if(dojo.isIE){
setTimeout(_54b,10);
}else{
_54b();
}
if(ta.form){
var _54c=ta.value;
this.reset=function(){
var _54d=this.getValue();
if(_54d!=_54c){
this.replaceValue(_54c);
}
};
dojo.connect(ta.form,"onsubmit",this,function(){
dojo.attr(ta,"disabled",this.disabled);
ta.value=this.getValue();
});
}
}else{
html=dijit._editor.getChildrenHtml(dn);
dn.innerHTML="";
}
}
var _54e=dojo.contentBox(dn);
this._oldHeight=_54e.h;
this._oldWidth=_54e.w;
this.value=html;
if(dn.nodeName&&dn.nodeName=="LI"){
dn.innerHTML=" <br>";
}
this.header=dn.ownerDocument.createElement("div");
dn.appendChild(this.header);
this.editingArea=dn.ownerDocument.createElement("div");
dn.appendChild(this.editingArea);
this.footer=dn.ownerDocument.createElement("div");
dn.appendChild(this.footer);
if(!this.name){
this.name=this.id+"_AUTOGEN";
}
if(this.name!==""&&(!dojo.config["useXDomain"]||dojo.config["allowXdRichTextSave"])){
var _54f=dojo.byId(dijit._scopeName+"._editor.RichText.value");
if(_54f&&_54f.value!==""){
var _550=_54f.value.split(this._SEPARATOR),i=0,dat;
while((dat=_550[i++])){
var data=dat.split(this._NAME_CONTENT_SEP);
if(data[0]==this.name){
html=data[1];
_550=_550.splice(i,1);
_54f.value=_550.join(this._SEPARATOR);
break;
}
}
}
if(!dijit._editor._globalSaveHandler){
dijit._editor._globalSaveHandler={};
dojo.addOnUnload(function(){
var id;
for(id in dijit._editor._globalSaveHandler){
var f=dijit._editor._globalSaveHandler[id];
if(dojo.isFunction(f)){
f();
}
}
});
}
dijit._editor._globalSaveHandler[this.id]=dojo.hitch(this,"_saveContent");
}
this.isClosed=false;
var ifr=(this.editorObject=this.iframe=dojo.doc.createElement("iframe"));
ifr.id=this.id+"_iframe";
this._iframeSrc=this._getIframeDocTxt();
ifr.style.border="none";
ifr.style.width="100%";
if(this._layoutMode){
ifr.style.height="100%";
}else{
if(dojo.isIE>=7){
if(this.height){
ifr.style.height=this.height;
}
if(this.minHeight){
ifr.style.minHeight=this.minHeight;
}
}else{
ifr.style.height=this.height?this.height:this.minHeight;
}
}
ifr.frameBorder=0;
ifr._loadFunc=dojo.hitch(this,function(win){
this.window=win;
this.document=this.window.document;
if(dojo.isIE){
this._localizeEditorCommands();
}
this.onLoad(html);
});
var s="javascript:parent."+dijit._scopeName+".byId(\""+this.id+"\")._iframeSrc";
ifr.setAttribute("src",s);
this.editingArea.appendChild(ifr);
if(dojo.isSafari<=4){
var src=ifr.getAttribute("src");
if(!src||src.indexOf("javascript")==-1){
setTimeout(function(){
ifr.setAttribute("src",s);
},0);
}
}
if(dn.nodeName=="LI"){
dn.lastChild.style.marginTop="-1.2em";
}
dojo.addClass(this.domNode,this.baseClass);
},_local2NativeFormatNames:{},_native2LocalFormatNames:{},_getIframeDocTxt:function(){
var _551=dojo.getComputedStyle(this.domNode);
var html="";
var _552=true;
if(dojo.isIE||dojo.isWebKit||(!this.height&&!dojo.isMoz)){
html="<div id='dijitEditorBody'></div>";
_552=false;
}else{
if(dojo.isMoz){
this._cursorToStart=true;
html="&nbsp;";
}
}
var font=[_551.fontWeight,_551.fontSize,_551.fontFamily].join(" ");
var _553=_551.lineHeight;
if(_553.indexOf("px")>=0){
_553=parseFloat(_553)/parseFloat(_551.fontSize);
}else{
if(_553.indexOf("em")>=0){
_553=parseFloat(_553);
}else{
_553="normal";
}
}
var _554="";
var self=this;
this.style.replace(/(^|;)\s*(line-|font-?)[^;]+/ig,function(_555){
_555=_555.replace(/^;/ig,"")+";";
var s=_555.split(":")[0];
if(s){
s=dojo.trim(s);
s=s.toLowerCase();
var i;
var sC="";
for(i=0;i<s.length;i++){
var c=s.charAt(i);
switch(c){
case "-":
i++;
c=s.charAt(i).toUpperCase();
default:
sC+=c;
}
}
dojo.style(self.domNode,sC,"");
}
_554+=_555+";";
});
var _556=dojo.query("label[for=\""+this.id+"\"]");
return [this.isLeftToRight()?"<html>\n<head>\n":"<html dir='rtl'>\n<head>\n",(dojo.isMoz&&_556.length?"<title>"+_556[0].innerHTML+"</title>\n":""),"<meta http-equiv='Content-Type' content='text/html'>\n","<style>\n","\tbody,html {\n","\t\tbackground:transparent;\n","\t\tpadding: 1px 0 0 0;\n","\t\tmargin: -1px 0 0 0;\n",((dojo.isWebKit)?"\t\twidth: 100%;\n":""),((dojo.isWebKit)?"\t\theight: 100%;\n":""),"\t}\n","\tbody{\n","\t\ttop:0px;\n","\t\tleft:0px;\n","\t\tright:0px;\n","\t\tfont:",font,";\n",((this.height||dojo.isOpera)?"":"\t\tposition: fixed;\n"),"\t\tmin-height:",this.minHeight,";\n","\t\tline-height:",_553,";\n","\t}\n","\tp{ margin: 1em 0; }\n",(!_552&&!this.height?"\tbody,html {overflow-y: hidden;}\n":""),"\t#dijitEditorBody{overflow-x: auto; overflow-y:"+(this.height?"auto;":"hidden;")+" outline: 0px;}\n","\tli > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; }\n",(!dojo.isIE?"\tli{ min-height:1.2em; }\n":""),"</style>\n",this._applyEditingAreaStyleSheets(),"\n","</head>\n<body ",(_552?"id='dijitEditorBody' ":""),"onload='frameElement._loadFunc(window,document)' style='"+_554+"'>",html,"</body>\n</html>"].join("");
},_applyEditingAreaStyleSheets:function(){
var _557=[];
if(this.styleSheets){
_557=this.styleSheets.split(";");
this.styleSheets="";
}
_557=_557.concat(this.editingAreaStyleSheets);
this.editingAreaStyleSheets=[];
var text="",i=0,url;
while((url=_557[i++])){
var _558=(new dojo._Url(dojo.global.location,url)).toString();
this.editingAreaStyleSheets.push(_558);
text+="<link rel=\"stylesheet\" type=\"text/css\" href=\""+_558+"\"/>";
}
return text;
},addStyleSheet:function(uri){
var url=uri.toString();
if(url.charAt(0)=="."||(url.charAt(0)!="/"&&!uri.host)){
url=(new dojo._Url(dojo.global.location,url)).toString();
}
if(dojo.indexOf(this.editingAreaStyleSheets,url)>-1){
return;
}
this.editingAreaStyleSheets.push(url);
this.onLoadDeferred.addCallback(dojo.hitch(this,function(){
if(this.document.createStyleSheet){
this.document.createStyleSheet(url);
}else{
var head=this.document.getElementsByTagName("head")[0];
var _559=this.document.createElement("link");
_559.rel="stylesheet";
_559.type="text/css";
_559.href=url;
head.appendChild(_559);
}
}));
},removeStyleSheet:function(uri){
var url=uri.toString();
if(url.charAt(0)=="."||(url.charAt(0)!="/"&&!uri.host)){
url=(new dojo._Url(dojo.global.location,url)).toString();
}
var _55a=dojo.indexOf(this.editingAreaStyleSheets,url);
if(_55a==-1){
return;
}
delete this.editingAreaStyleSheets[_55a];
dojo.withGlobal(this.window,"query",dojo,["link:[href=\""+url+"\"]"]).orphan();
},disabled:false,_mozSettingProps:{"styleWithCSS":false},_setDisabledAttr:function(_55b){
_55b=!!_55b;
this._set("disabled",_55b);
if(!this.isLoaded){
return;
}
if(dojo.isIE||dojo.isWebKit||dojo.isOpera){
var _55c=dojo.isIE&&(this.isLoaded||!this.focusOnLoad);
if(_55c){
this.editNode.unselectable="on";
}
this.editNode.contentEditable=!_55b;
if(_55c){
var _55d=this;
setTimeout(function(){
_55d.editNode.unselectable="off";
},0);
}
}else{
try{
this.document.designMode=(_55b?"off":"on");
}
catch(e){
return;
}
if(!_55b&&this._mozSettingProps){
var ps=this._mozSettingProps;
for(var n in ps){
if(ps.hasOwnProperty(n)){
try{
this.document.execCommand(n,false,ps[n]);
}
catch(e2){
}
}
}
}
}
this._disabledOK=true;
},onLoad:function(html){
if(!this.window.__registeredWindow){
this.window.__registeredWindow=true;
this._iframeRegHandle=dijit.registerIframe(this.iframe);
}
if(!dojo.isIE&&!dojo.isWebKit&&(this.height||dojo.isMoz)){
this.editNode=this.document.body;
}else{
this.editNode=this.document.body.firstChild;
var _55e=this;
if(dojo.isIE){
this.tabStop=dojo.create("div",{tabIndex:-1},this.editingArea);
this.iframe.onfocus=function(){
_55e.editNode.setActive();
};
}
}
this.focusNode=this.editNode;
var _55f=this.events.concat(this.captureEvents);
var ap=this.iframe?this.document:this.editNode;
dojo.forEach(_55f,function(item){
this.connect(ap,item.toLowerCase(),item);
},this);
this.connect(ap,"onmouseup","onClick");
if(dojo.isIE){
this.connect(this.document,"onmousedown","_onIEMouseDown");
this.editNode.style.zoom=1;
}else{
this.connect(this.document,"onmousedown",function(){
delete this._cursorToStart;
});
}
if(dojo.isWebKit){
this._webkitListener=this.connect(this.document,"onmouseup","onDisplayChanged");
this.connect(this.document,"onmousedown",function(e){
var t=e.target;
if(t&&(t===this.document.body||t===this.document)){
setTimeout(dojo.hitch(this,"placeCursorAtEnd"),0);
}
});
}
if(dojo.isIE){
try{
this.document.execCommand("RespectVisibilityInDesign",true,null);
}
catch(e){
}
}
this.isLoaded=true;
this.set("disabled",this.disabled);
var _560=dojo.hitch(this,function(){
this.setValue(html);
if(this.onLoadDeferred){
this.onLoadDeferred.callback(true);
}
this.onDisplayChanged();
if(this.focusOnLoad){
dojo.addOnLoad(dojo.hitch(this,function(){
setTimeout(dojo.hitch(this,"focus"),this.updateInterval);
}));
}
this.value=this.getValue(true);
});
if(this.setValueDeferred){
this.setValueDeferred.addCallback(_560);
}else{
_560();
}
},onKeyDown:function(e){
if(e.keyCode===dojo.keys.TAB&&this.isTabIndent){
dojo.stopEvent(e);
if(this.queryCommandEnabled((e.shiftKey?"outdent":"indent"))){
this.execCommand((e.shiftKey?"outdent":"indent"));
}
}
if(dojo.isIE){
if(e.keyCode==dojo.keys.TAB&&!this.isTabIndent){
if(e.shiftKey&&!e.ctrlKey&&!e.altKey){
this.iframe.focus();
}else{
if(!e.shiftKey&&!e.ctrlKey&&!e.altKey){
this.tabStop.focus();
}
}
}else{
if(e.keyCode===dojo.keys.BACKSPACE&&this.document.selection.type==="Control"){
dojo.stopEvent(e);
this.execCommand("delete");
}else{
if((65<=e.keyCode&&e.keyCode<=90)||(e.keyCode>=37&&e.keyCode<=40)){
e.charCode=e.keyCode;
this.onKeyPress(e);
}
}
}
}
return true;
},onKeyUp:function(e){
return;
},setDisabled:function(_561){
dojo.deprecated("dijit.Editor::setDisabled is deprecated","use dijit.Editor::attr(\"disabled\",boolean) instead",2);
this.set("disabled",_561);
},_setValueAttr:function(_562){
this.setValue(_562);
},_setDisableSpellCheckAttr:function(_563){
if(this.document){
dojo.attr(this.document.body,"spellcheck",!_563);
}else{
this.onLoadDeferred.addCallback(dojo.hitch(this,function(){
dojo.attr(this.document.body,"spellcheck",!_563);
}));
}
this._set("disableSpellCheck",_563);
},onKeyPress:function(e){
var c=(e.keyChar&&e.keyChar.toLowerCase())||e.keyCode,_564=this._keyHandlers[c],args=arguments;
if(_564&&!e.altKey){
dojo.some(_564,function(h){
if(!(h.shift^e.shiftKey)&&!(h.ctrl^(e.ctrlKey||e.metaKey))){
if(!h.handler.apply(this,args)){
e.preventDefault();
}
return true;
}
},this);
}
if(!this._onKeyHitch){
this._onKeyHitch=dojo.hitch(this,"onKeyPressed");
}
setTimeout(this._onKeyHitch,1);
return true;
},addKeyHandler:function(key,ctrl,_565,_566){
if(!dojo.isArray(this._keyHandlers[key])){
this._keyHandlers[key]=[];
}
this._keyHandlers[key].push({shift:_565||false,ctrl:ctrl||false,handler:_566});
},onKeyPressed:function(){
this.onDisplayChanged();
},onClick:function(e){
this.onDisplayChanged(e);
},_onIEMouseDown:function(e){
if(!this._focused&&!this.disabled){
this.focus();
}
},_onBlur:function(e){
this.inherited(arguments);
var _567=this.getValue(true);
if(_567!=this.value){
this.onChange(_567);
}
this._set("value",_567);
},_onFocus:function(e){
if(!this.disabled){
if(!this._disabledOK){
this.set("disabled",false);
}
this.inherited(arguments);
}
},blur:function(){
if(!dojo.isIE&&this.window.document.documentElement&&this.window.document.documentElement.focus){
this.window.document.documentElement.focus();
}else{
if(dojo.doc.body.focus){
dojo.doc.body.focus();
}
}
},focus:function(){
if(!this.isLoaded){
this.focusOnLoad=true;
return;
}
if(this._cursorToStart){
delete this._cursorToStart;
if(this.editNode.childNodes){
this.placeCursorAtStart();
return;
}
}
if(!dojo.isIE){
dijit.focus(this.iframe);
}else{
if(this.editNode&&this.editNode.focus){
this.iframe.fireEvent("onfocus",document.createEventObject());
}
}
},updateInterval:200,_updateTimer:null,onDisplayChanged:function(e){
if(this._updateTimer){
clearTimeout(this._updateTimer);
}
if(!this._updateHandler){
this._updateHandler=dojo.hitch(this,"onNormalizedDisplayChanged");
}
this._updateTimer=setTimeout(this._updateHandler,this.updateInterval);
},onNormalizedDisplayChanged:function(){
delete this._updateTimer;
},onChange:function(_568){
},_normalizeCommand:function(cmd,_569){
var _56a=cmd.toLowerCase();
if(_56a=="formatblock"){
if(dojo.isSafari&&_569===undefined){
_56a="heading";
}
}else{
if(_56a=="hilitecolor"&&!dojo.isMoz){
_56a="backcolor";
}
}
return _56a;
},_qcaCache:{},queryCommandAvailable:function(_56b){
var ca=this._qcaCache[_56b];
if(ca!==undefined){
return ca;
}
return (this._qcaCache[_56b]=this._queryCommandAvailable(_56b));
},_queryCommandAvailable:function(_56c){
var ie=1;
var _56d=1<<1;
var _56e=1<<2;
var _56f=1<<3;
function _570(_571){
return {ie:Boolean(_571&ie),mozilla:Boolean(_571&_56d),webkit:Boolean(_571&_56e),opera:Boolean(_571&_56f)};
};
var _572=null;
switch(_56c.toLowerCase()){
case "bold":
case "italic":
case "underline":
case "subscript":
case "superscript":
case "fontname":
case "fontsize":
case "forecolor":
case "hilitecolor":
case "justifycenter":
case "justifyfull":
case "justifyleft":
case "justifyright":
case "delete":
case "selectall":
case "toggledir":
_572=_570(_56d|ie|_56e|_56f);
break;
case "createlink":
case "unlink":
case "removeformat":
case "inserthorizontalrule":
case "insertimage":
case "insertorderedlist":
case "insertunorderedlist":
case "indent":
case "outdent":
case "formatblock":
case "inserthtml":
case "undo":
case "redo":
case "strikethrough":
case "tabindent":
_572=_570(_56d|ie|_56f|_56e);
break;
case "blockdirltr":
case "blockdirrtl":
case "dirltr":
case "dirrtl":
case "inlinedirltr":
case "inlinedirrtl":
_572=_570(ie);
break;
case "cut":
case "copy":
case "paste":
_572=_570(ie|_56d|_56e);
break;
case "inserttable":
_572=_570(_56d|ie);
break;
case "insertcell":
case "insertcol":
case "insertrow":
case "deletecells":
case "deletecols":
case "deleterows":
case "mergecells":
case "splitcell":
_572=_570(ie|_56d);
break;
default:
return false;
}
return (dojo.isIE&&_572.ie)||(dojo.isMoz&&_572.mozilla)||(dojo.isWebKit&&_572.webkit)||(dojo.isOpera&&_572.opera);
},execCommand:function(_573,_574){
var _575;
this.focus();
_573=this._normalizeCommand(_573,_574);
if(_574!==undefined){
if(_573=="heading"){
throw new Error("unimplemented");
}else{
if((_573=="formatblock")&&dojo.isIE){
_574="<"+_574+">";
}
}
}
var _576="_"+_573+"Impl";
if(this[_576]){
_575=this[_576](_574);
}else{
_574=arguments.length>1?_574:null;
if(_574||_573!="createlink"){
_575=this.document.execCommand(_573,false,_574);
}
}
this.onDisplayChanged();
return _575;
},queryCommandEnabled:function(_577){
if(this.disabled||!this._disabledOK){
return false;
}
_577=this._normalizeCommand(_577);
if(dojo.isMoz||dojo.isWebKit){
if(_577=="unlink"){
return this._sCall("hasAncestorElement",["a"]);
}else{
if(_577=="inserttable"){
return true;
}
}
}
if(dojo.isWebKit){
if(_577=="cut"||_577=="copy"){
var sel=this.window.getSelection();
if(sel){
sel=sel.toString();
}
return !!sel;
}else{
if(_577=="paste"){
return true;
}
}
}
var elem=dojo.isIE?this.document.selection.createRange():this.document;
try{
return elem.queryCommandEnabled(_577);
}
catch(e){
return false;
}
},queryCommandState:function(_578){
if(this.disabled||!this._disabledOK){
return false;
}
_578=this._normalizeCommand(_578);
try{
return this.document.queryCommandState(_578);
}
catch(e){
return false;
}
},queryCommandValue:function(_579){
if(this.disabled||!this._disabledOK){
return false;
}
var r;
_579=this._normalizeCommand(_579);
if(dojo.isIE&&_579=="formatblock"){
r=this._native2LocalFormatNames[this.document.queryCommandValue(_579)];
}else{
if(dojo.isMoz&&_579==="hilitecolor"){
var _57a;
try{
_57a=this.document.queryCommandValue("styleWithCSS");
}
catch(e){
_57a=false;
}
this.document.execCommand("styleWithCSS",false,true);
r=this.document.queryCommandValue(_579);
this.document.execCommand("styleWithCSS",false,_57a);
}else{
r=this.document.queryCommandValue(_579);
}
}
return r;
},_sCall:function(name,args){
return dojo.withGlobal(this.window,name,dijit._editor.selection,args);
},placeCursorAtStart:function(){
this.focus();
var _57b=false;
if(dojo.isMoz){
var _57c=this.editNode.firstChild;
while(_57c){
if(_57c.nodeType==3){
if(_57c.nodeValue.replace(/^\s+|\s+$/g,"").length>0){
_57b=true;
this._sCall("selectElement",[_57c]);
break;
}
}else{
if(_57c.nodeType==1){
_57b=true;
var tg=_57c.tagName?_57c.tagName.toLowerCase():"";
if(/br|input|img|base|meta|area|basefont|hr|link/.test(tg)){
this._sCall("selectElement",[_57c]);
}else{
this._sCall("selectElementChildren",[_57c]);
}
break;
}
}
_57c=_57c.nextSibling;
}
}else{
_57b=true;
this._sCall("selectElementChildren",[this.editNode]);
}
if(_57b){
this._sCall("collapse",[true]);
}
},placeCursorAtEnd:function(){
this.focus();
var _57d=false;
if(dojo.isMoz){
var last=this.editNode.lastChild;
while(last){
if(last.nodeType==3){
if(last.nodeValue.replace(/^\s+|\s+$/g,"").length>0){
_57d=true;
this._sCall("selectElement",[last]);
break;
}
}else{
if(last.nodeType==1){
_57d=true;
if(last.lastChild){
this._sCall("selectElement",[last.lastChild]);
}else{
this._sCall("selectElement",[last]);
}
break;
}
}
last=last.previousSibling;
}
}else{
_57d=true;
this._sCall("selectElementChildren",[this.editNode]);
}
if(_57d){
this._sCall("collapse",[false]);
}
},getValue:function(_57e){
if(this.textarea){
if(this.isClosed||!this.isLoaded){
return this.textarea.value;
}
}
return this._postFilterContent(null,_57e);
},_getValueAttr:function(){
return this.getValue(true);
},setValue:function(html){
if(!this.isLoaded){
this.onLoadDeferred.addCallback(dojo.hitch(this,function(){
this.setValue(html);
}));
return;
}
this._cursorToStart=true;
if(this.textarea&&(this.isClosed||!this.isLoaded)){
this.textarea.value=html;
}else{
html=this._preFilterContent(html);
var node=this.isClosed?this.domNode:this.editNode;
if(html&&dojo.isMoz&&html.toLowerCase()=="<p></p>"){
html="<p>&nbsp;</p>";
}
if(!html&&dojo.isWebKit){
html="&nbsp;";
}
node.innerHTML=html;
this._preDomFilterContent(node);
}
this.onDisplayChanged();
this._set("value",this.getValue(true));
},replaceValue:function(html){
if(this.isClosed){
this.setValue(html);
}else{
if(this.window&&this.window.getSelection&&!dojo.isMoz){
this.setValue(html);
}else{
if(this.window&&this.window.getSelection){
html=this._preFilterContent(html);
this.execCommand("selectall");
if(!html){
this._cursorToStart=true;
html="&nbsp;";
}
this.execCommand("inserthtml",html);
this._preDomFilterContent(this.editNode);
}else{
if(this.document&&this.document.selection){
this.setValue(html);
}
}
}
}
this._set("value",this.getValue(true));
},_preFilterContent:function(html){
var ec=html;
dojo.forEach(this.contentPreFilters,function(ef){
if(ef){
ec=ef(ec);
}
});
return ec;
},_preDomFilterContent:function(dom){
dom=dom||this.editNode;
dojo.forEach(this.contentDomPreFilters,function(ef){
if(ef&&dojo.isFunction(ef)){
ef(dom);
}
},this);
},_postFilterContent:function(dom,_57f){
var ec;
if(!dojo.isString(dom)){
dom=dom||this.editNode;
if(this.contentDomPostFilters.length){
if(_57f){
dom=dojo.clone(dom);
}
dojo.forEach(this.contentDomPostFilters,function(ef){
dom=ef(dom);
});
}
ec=dijit._editor.getChildrenHtml(dom);
}else{
ec=dom;
}
if(!dojo.trim(ec.replace(/^\xA0\xA0*/,"").replace(/\xA0\xA0*$/,"")).length){
ec="";
}
dojo.forEach(this.contentPostFilters,function(ef){
ec=ef(ec);
});
return ec;
},_saveContent:function(e){
var _580=dojo.byId(dijit._scopeName+"._editor.RichText.value");
if(_580.value){
_580.value+=this._SEPARATOR;
}
_580.value+=this.name+this._NAME_CONTENT_SEP+this.getValue(true);
},escapeXml:function(str,_581){
str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
if(!_581){
str=str.replace(/'/gm,"&#39;");
}
return str;
},getNodeHtml:function(node){
dojo.deprecated("dijit.Editor::getNodeHtml is deprecated","use dijit._editor.getNodeHtml instead",2);
return dijit._editor.getNodeHtml(node);
},getNodeChildrenHtml:function(dom){
dojo.deprecated("dijit.Editor::getNodeChildrenHtml is deprecated","use dijit._editor.getChildrenHtml instead",2);
return dijit._editor.getChildrenHtml(dom);
},close:function(save){
if(this.isClosed){
return;
}
if(!arguments.length){
save=true;
}
if(save){
this._set("value",this.getValue(true));
}
if(this.interval){
clearInterval(this.interval);
}
if(this._webkitListener){
this.disconnect(this._webkitListener);
delete this._webkitListener;
}
if(dojo.isIE){
this.iframe.onfocus=null;
}
this.iframe._loadFunc=null;
if(this._iframeRegHandle){
dijit.unregisterIframe(this._iframeRegHandle);
delete this._iframeRegHandle;
}
if(this.textarea){
var s=this.textarea.style;
s.position="";
s.left=s.top="";
if(dojo.isIE){
s.overflow=this.__overflow;
this.__overflow=null;
}
this.textarea.value=this.value;
dojo.destroy(this.domNode);
this.domNode=this.textarea;
}else{
this.domNode.innerHTML=this.value;
}
delete this.iframe;
dojo.removeClass(this.domNode,this.baseClass);
this.isClosed=true;
this.isLoaded=false;
delete this.editNode;
delete this.focusNode;
if(this.window&&this.window._frameElement){
this.window._frameElement=null;
}
this.window=null;
this.document=null;
this.editingArea=null;
this.editorObject=null;
},destroy:function(){
if(!this.isClosed){
this.close(false);
}
this.inherited(arguments);
if(dijit._editor._globalSaveHandler){
delete dijit._editor._globalSaveHandler[this.id];
}
},_removeMozBogus:function(html){
return html.replace(/\stype="_moz"/gi,"").replace(/\s_moz_dirty=""/gi,"").replace(/_moz_resizing="(true|false)"/gi,"");
},_removeWebkitBogus:function(html){
html=html.replace(/\sclass="webkit-block-placeholder"/gi,"");
html=html.replace(/\sclass="apple-style-span"/gi,"");
html=html.replace(/<meta charset=\"utf-8\" \/>/gi,"");
return html;
},_normalizeFontStyle:function(html){
return html.replace(/<(\/)?strong([ \>])/gi,"<$1b$2").replace(/<(\/)?em([ \>])/gi,"<$1i$2");
},_preFixUrlAttributes:function(html){
return html.replace(/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2").replace(/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2");
},_inserthorizontalruleImpl:function(_582){
if(dojo.isIE){
return this._inserthtmlImpl("<hr>");
}
return this.document.execCommand("inserthorizontalrule",false,_582);
},_unlinkImpl:function(_583){
if((this.queryCommandEnabled("unlink"))&&(dojo.isMoz||dojo.isWebKit)){
var a=this._sCall("getAncestorElement",["a"]);
this._sCall("selectElement",[a]);
return this.document.execCommand("unlink",false,null);
}
return this.document.execCommand("unlink",false,_583);
},_hilitecolorImpl:function(_584){
var _585;
if(dojo.isMoz){
this.document.execCommand("styleWithCSS",false,true);
_585=this.document.execCommand("hilitecolor",false,_584);
this.document.execCommand("styleWithCSS",false,false);
}else{
_585=this.document.execCommand("hilitecolor",false,_584);
}
return _585;
},_backcolorImpl:function(_586){
if(dojo.isIE){
_586=_586?_586:null;
}
return this.document.execCommand("backcolor",false,_586);
},_forecolorImpl:function(_587){
if(dojo.isIE){
_587=_587?_587:null;
}
return this.document.execCommand("forecolor",false,_587);
},_inserthtmlImpl:function(_588){
_588=this._preFilterContent(_588);
var rv=true;
if(dojo.isIE){
var _589=this.document.selection.createRange();
if(this.document.selection.type.toUpperCase()=="CONTROL"){
var n=_589.item(0);
while(_589.length){
_589.remove(_589.item(0));
}
n.outerHTML=_588;
}else{
_589.pasteHTML(_588);
}
_589.select();
}else{
if(dojo.isMoz&&!_588.length){
this._sCall("remove");
}else{
rv=this.document.execCommand("inserthtml",false,_588);
}
}
return rv;
},_boldImpl:function(_58a){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("bold",false,_58a);
},_italicImpl:function(_58b){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("italic",false,_58b);
},_underlineImpl:function(_58c){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("underline",false,_58c);
},_strikethroughImpl:function(_58d){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("strikethrough",false,_58d);
},getHeaderHeight:function(){
return this._getNodeChildrenHeight(this.header);
},getFooterHeight:function(){
return this._getNodeChildrenHeight(this.footer);
},_getNodeChildrenHeight:function(node){
var h=0;
if(node&&node.childNodes){
var i;
for(i=0;i<node.childNodes.length;i++){
var size=dojo.position(node.childNodes[i]);
h+=size.h;
}
}
return h;
},_isNodeEmpty:function(node,_58e){
if(node.nodeType==1){
if(node.childNodes.length>0){
return this._isNodeEmpty(node.childNodes[0],_58e);
}
return true;
}else{
if(node.nodeType==3){
return (node.nodeValue.substring(_58e)=="");
}
}
return false;
},_removeStartingRangeFromRange:function(node,_58f){
if(node.nextSibling){
_58f.setStart(node.nextSibling,0);
}else{
var _590=node.parentNode;
while(_590&&_590.nextSibling==null){
_590=_590.parentNode;
}
if(_590){
_58f.setStart(_590.nextSibling,0);
}
}
return _58f;
},_adaptIESelection:function(){
var _591=dijit.range.getSelection(this.window);
if(_591&&_591.rangeCount&&!_591.isCollapsed){
var _592=_591.getRangeAt(0);
var _593=_592.startContainer;
var _594=_592.startOffset;
while(_593.nodeType==3&&_594>=_593.length&&_593.nextSibling){
_594=_594-_593.length;
_593=_593.nextSibling;
}
var _595=null;
while(this._isNodeEmpty(_593,_594)&&_593!=_595){
_595=_593;
_592=this._removeStartingRangeFromRange(_593,_592);
_593=_592.startContainer;
_594=0;
}
_591.removeAllRanges();
_591.addRange(_592);
}
}});
}
if(!dojo._hasResource["dijit.ToolbarSeparator"]){
dojo._hasResource["dijit.ToolbarSeparator"]=true;
dojo.provide("dijit.ToolbarSeparator");
dojo.declare("dijit.ToolbarSeparator",[dijit._Widget,dijit._Templated],{templateString:"<div class=\"dijitToolbarSeparator dijitInline\" role=\"presentation\"></div>",buildRendering:function(){
this.inherited(arguments);
dojo.setSelectable(this.domNode,false);
},isFocusable:function(){
return false;
}});
}
if(!dojo._hasResource["dijit.Toolbar"]){
dojo._hasResource["dijit.Toolbar"]=true;
dojo.provide("dijit.Toolbar");
dojo.declare("dijit.Toolbar",[dijit._Widget,dijit._Templated,dijit._KeyNavContainer],{templateString:"<div class=\"dijit\" role=\"toolbar\" tabIndex=\"${tabIndex}\" dojoAttachPoint=\"containerNode\">"+"</div>",baseClass:"dijitToolbar",postCreate:function(){
this.inherited(arguments);
this.connectKeyNavHandlers(this.isLeftToRight()?[dojo.keys.LEFT_ARROW]:[dojo.keys.RIGHT_ARROW],this.isLeftToRight()?[dojo.keys.RIGHT_ARROW]:[dojo.keys.LEFT_ARROW]);
},startup:function(){
if(this._started){
return;
}
this.startupKeyNavChildren();
this.inherited(arguments);
}});
}
if(!dojo._hasResource["dijit._editor._Plugin"]){
dojo._hasResource["dijit._editor._Plugin"]=true;
dojo.provide("dijit._editor._Plugin");
dojo.declare("dijit._editor._Plugin",null,{constructor:function(args,node){
this.params=args||{};
dojo.mixin(this,this.params);
this._connects=[];
this._attrPairNames={};
},editor:null,iconClassPrefix:"dijitEditorIcon",button:null,command:"",useDefaultCommand:true,buttonClass:dijit.form.Button,disabled:false,getLabel:function(key){
return this.editor.commands[key];
},_initButton:function(){
if(this.command.length){
var _596=this.getLabel(this.command),_597=this.editor,_598=this.iconClassPrefix+" "+this.iconClassPrefix+this.command.charAt(0).toUpperCase()+this.command.substr(1);
if(!this.button){
var _599=dojo.mixin({label:_596,dir:_597.dir,lang:_597.lang,showLabel:false,iconClass:_598,dropDown:this.dropDown,tabIndex:"-1"},this.params||{});
this.button=new this.buttonClass(_599);
}
}
if(this.get("disabled")&&this.button){
this.button.set("disabled",this.get("disabled"));
}
},destroy:function(){
dojo.forEach(this._connects,dojo.disconnect);
if(this.dropDown){
this.dropDown.destroyRecursive();
}
},connect:function(o,f,tf){
this._connects.push(dojo.connect(o,f,this,tf));
},updateState:function(){
var e=this.editor,c=this.command,_59a,_59b;
if(!e||!e.isLoaded||!c.length){
return;
}
var _59c=this.get("disabled");
if(this.button){
try{
_59b=!_59c&&e.queryCommandEnabled(c);
if(this.enabled!==_59b){
this.enabled=_59b;
this.button.set("disabled",!_59b);
}
if(typeof this.button.checked=="boolean"){
_59a=e.queryCommandState(c);
if(this.checked!==_59a){
this.checked=_59a;
this.button.set("checked",e.queryCommandState(c));
}
}
}
catch(e){
}
}
},setEditor:function(_59d){
this.editor=_59d;
this._initButton();
if(this.button&&this.useDefaultCommand){
if(this.editor.queryCommandAvailable(this.command)){
this.connect(this.button,"onClick",dojo.hitch(this.editor,"execCommand",this.command,this.commandArg));
}else{
this.button.domNode.style.display="none";
}
}
this.connect(this.editor,"onNormalizedDisplayChanged","updateState");
},setToolbar:function(_59e){
if(this.button){
_59e.addChild(this.button);
}
},set:function(name,_59f){
if(typeof name==="object"){
for(var x in name){
this.set(x,name[x]);
}
return this;
}
var _5a0=this._getAttrNames(name);
if(this[_5a0.s]){
var _5a1=this[_5a0.s].apply(this,Array.prototype.slice.call(arguments,1));
}else{
this._set(name,_59f);
}
return _5a1||this;
},get:function(name){
var _5a2=this._getAttrNames(name);
return this[_5a2.g]?this[_5a2.g]():this[name];
},_setDisabledAttr:function(_5a3){
this.disabled=_5a3;
this.updateState();
},_getAttrNames:function(name){
var apn=this._attrPairNames;
if(apn[name]){
return apn[name];
}
var uc=name.charAt(0).toUpperCase()+name.substr(1);
return (apn[name]={s:"_set"+uc+"Attr",g:"_get"+uc+"Attr"});
},_set:function(name,_5a4){
var _5a5=this[name];
this[name]=_5a4;
}});
}
if(!dojo._hasResource["dijit._editor.plugins.EnterKeyHandling"]){
dojo._hasResource["dijit._editor.plugins.EnterKeyHandling"]=true;
dojo.provide("dijit._editor.plugins.EnterKeyHandling");
dojo.declare("dijit._editor.plugins.EnterKeyHandling",dijit._editor._Plugin,{blockNodeForEnter:"BR",constructor:function(args){
if(args){
if("blockNodeForEnter" in args){
args.blockNodeForEnter=args.blockNodeForEnter.toUpperCase();
}
dojo.mixin(this,args);
}
},setEditor:function(_5a6){
if(this.editor===_5a6){
return;
}
this.editor=_5a6;
if(this.blockNodeForEnter=="BR"){
this.editor.customUndo=true;
_5a6.onLoadDeferred.addCallback(dojo.hitch(this,function(d){
this.connect(_5a6.document,"onkeypress",function(e){
if(e.charOrCode==dojo.keys.ENTER){
var ne=dojo.mixin({},e);
ne.shiftKey=true;
if(!this.handleEnterKey(ne)){
dojo.stopEvent(e);
}
}
});
return d;
}));
}else{
if(this.blockNodeForEnter){
var h=dojo.hitch(this,this.handleEnterKey);
_5a6.addKeyHandler(13,0,0,h);
_5a6.addKeyHandler(13,0,1,h);
this.connect(this.editor,"onKeyPressed","onKeyPressed");
}
}
},onKeyPressed:function(e){
if(this._checkListLater){
if(dojo.withGlobal(this.editor.window,"isCollapsed",dijit)){
var _5a7=dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,["LI"]);
if(!_5a7){
dijit._editor.RichText.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);
var _5a8=dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,[this.blockNodeForEnter]);
if(_5a8){
_5a8.innerHTML=this.bogusHtmlContent;
if(dojo.isIE){
var r=this.editor.document.selection.createRange();
r.move("character",-1);
r.select();
}
}else{
console.error("onKeyPressed: Cannot find the new block node");
}
}else{
if(dojo.isMoz){
if(_5a7.parentNode.parentNode.nodeName=="LI"){
_5a7=_5a7.parentNode.parentNode;
}
}
var fc=_5a7.firstChild;
if(fc&&fc.nodeType==1&&(fc.nodeName=="UL"||fc.nodeName=="OL")){
_5a7.insertBefore(fc.ownerDocument.createTextNode(" "),fc);
var _5a9=dijit.range.create(this.editor.window);
_5a9.setStart(_5a7.firstChild,0);
var _5aa=dijit.range.getSelection(this.editor.window,true);
_5aa.removeAllRanges();
_5aa.addRange(_5a9);
}
}
}
this._checkListLater=false;
}
if(this._pressedEnterInBlock){
if(this._pressedEnterInBlock.previousSibling){
this.removeTrailingBr(this._pressedEnterInBlock.previousSibling);
}
delete this._pressedEnterInBlock;
}
},bogusHtmlContent:"&nbsp;",blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI)$/,handleEnterKey:function(e){
var _5ab,_5ac,_5ad,_5ae,_5af,_5b0,doc=this.editor.document,br,rs,txt;
if(e.shiftKey){
var _5b1=dojo.withGlobal(this.editor.window,"getParentElement",dijit._editor.selection);
var _5b2=dijit.range.getAncestor(_5b1,this.blockNodes);
if(_5b2){
if(_5b2.tagName=="LI"){
return true;
}
_5ab=dijit.range.getSelection(this.editor.window);
_5ac=_5ab.getRangeAt(0);
if(!_5ac.collapsed){
_5ac.deleteContents();
_5ab=dijit.range.getSelection(this.editor.window);
_5ac=_5ab.getRangeAt(0);
}
if(dijit.range.atBeginningOfContainer(_5b2,_5ac.startContainer,_5ac.startOffset)){
br=doc.createElement("br");
_5ad=dijit.range.create(this.editor.window);
_5b2.insertBefore(br,_5b2.firstChild);
_5ad.setStartBefore(br.nextSibling);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
}else{
if(dijit.range.atEndOfContainer(_5b2,_5ac.startContainer,_5ac.startOffset)){
_5ad=dijit.range.create(this.editor.window);
br=doc.createElement("br");
_5b2.appendChild(br);
_5b2.appendChild(doc.createTextNode(" "));
_5ad.setStart(_5b2.lastChild,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
}else{
rs=_5ac.startContainer;
if(rs&&rs.nodeType==3){
txt=rs.nodeValue;
dojo.withGlobal(this.editor.window,function(){
_5ae=doc.createTextNode(txt.substring(0,_5ac.startOffset));
_5af=doc.createTextNode(txt.substring(_5ac.startOffset));
_5b0=doc.createElement("br");
if(_5af.nodeValue==""&&dojo.isWebKit){
_5af=doc.createTextNode(" ");
}
dojo.place(_5ae,rs,"after");
dojo.place(_5b0,_5ae,"after");
dojo.place(_5af,_5b0,"after");
dojo.destroy(rs);
_5ad=dijit.range.create(dojo.gobal);
_5ad.setStart(_5af,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
});
return false;
}
return true;
}
}
}else{
_5ab=dijit.range.getSelection(this.editor.window);
if(_5ab.rangeCount){
_5ac=_5ab.getRangeAt(0);
if(_5ac&&_5ac.startContainer){
if(!_5ac.collapsed){
_5ac.deleteContents();
_5ab=dijit.range.getSelection(this.editor.window);
_5ac=_5ab.getRangeAt(0);
}
rs=_5ac.startContainer;
if(rs&&rs.nodeType==3){
dojo.withGlobal(this.editor.window,dojo.hitch(this,function(){
var _5b3=false;
var _5b4=_5ac.startOffset;
if(rs.length<_5b4){
ret=this._adjustNodeAndOffset(rs,_5b4);
rs=ret.node;
_5b4=ret.offset;
}
txt=rs.nodeValue;
_5ae=doc.createTextNode(txt.substring(0,_5b4));
_5af=doc.createTextNode(txt.substring(_5b4));
_5b0=doc.createElement("br");
if(!_5af.length){
_5af=doc.createTextNode(" ");
_5b3=true;
}
if(_5ae.length){
dojo.place(_5ae,rs,"after");
}else{
_5ae=rs;
}
dojo.place(_5b0,_5ae,"after");
dojo.place(_5af,_5b0,"after");
dojo.destroy(rs);
_5ad=dijit.range.create(dojo.gobal);
_5ad.setStart(_5af,0);
_5ad.setEnd(_5af,_5af.length);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
if(_5b3&&!dojo.isWebKit){
dijit._editor.selection.remove();
}else{
dijit._editor.selection.collapse(true);
}
}));
}else{
dojo.withGlobal(this.editor.window,dojo.hitch(this,function(){
var _5b5=doc.createElement("br");
rs.appendChild(_5b5);
var _5b6=doc.createTextNode(" ");
rs.appendChild(_5b6);
_5ad=dijit.range.create(dojo.global);
_5ad.setStart(_5b6,0);
_5ad.setEnd(_5b6,_5b6.length);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
dijit._editor.selection.collapse(true);
}));
}
}
}else{
dijit._editor.RichText.prototype.execCommand.call(this.editor,"inserthtml","<br>");
}
}
return false;
}
var _5b7=true;
_5ab=dijit.range.getSelection(this.editor.window);
_5ac=_5ab.getRangeAt(0);
if(!_5ac.collapsed){
_5ac.deleteContents();
_5ab=dijit.range.getSelection(this.editor.window);
_5ac=_5ab.getRangeAt(0);
}
var _5b8=dijit.range.getBlockAncestor(_5ac.endContainer,null,this.editor.editNode);
var _5b9=_5b8.blockNode;
if((this._checkListLater=(_5b9&&(_5b9.nodeName=="LI"||_5b9.parentNode.nodeName=="LI")))){
if(dojo.isMoz){
this._pressedEnterInBlock=_5b9;
}
if(/^(\s|&nbsp;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|\xA0)<\/span>)?(<br>)?$/.test(_5b9.innerHTML)){
_5b9.innerHTML="";
if(dojo.isWebKit){
_5ad=dijit.range.create(this.editor.window);
_5ad.setStart(_5b9,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
}
this._checkListLater=false;
}
return true;
}
if(!_5b8.blockNode||_5b8.blockNode===this.editor.editNode){
try{
dijit._editor.RichText.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);
}
catch(e2){
}
_5b8={blockNode:dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,[this.blockNodeForEnter]),blockContainer:this.editor.editNode};
if(_5b8.blockNode){
if(_5b8.blockNode!=this.editor.editNode&&(!(_5b8.blockNode.textContent||_5b8.blockNode.innerHTML).replace(/^\s+|\s+$/g,"").length)){
this.removeTrailingBr(_5b8.blockNode);
return false;
}
}else{
_5b8.blockNode=this.editor.editNode;
}
_5ab=dijit.range.getSelection(this.editor.window);
_5ac=_5ab.getRangeAt(0);
}
var _5ba=doc.createElement(this.blockNodeForEnter);
_5ba.innerHTML=this.bogusHtmlContent;
this.removeTrailingBr(_5b8.blockNode);
var _5bb=_5ac.endOffset;
var node=_5ac.endContainer;
if(node.length<_5bb){
var ret=this._adjustNodeAndOffset(node,_5bb);
node=ret.node;
_5bb=ret.offset;
}
if(dijit.range.atEndOfContainer(_5b8.blockNode,node,_5bb)){
if(_5b8.blockNode===_5b8.blockContainer){
_5b8.blockNode.appendChild(_5ba);
}else{
dojo.place(_5ba,_5b8.blockNode,"after");
}
_5b7=false;
_5ad=dijit.range.create(this.editor.window);
_5ad.setStart(_5ba,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
if(this.editor.height){
dojo.window.scrollIntoView(_5ba);
}
}else{
if(dijit.range.atBeginningOfContainer(_5b8.blockNode,_5ac.startContainer,_5ac.startOffset)){
dojo.place(_5ba,_5b8.blockNode,_5b8.blockNode===_5b8.blockContainer?"first":"before");
if(_5ba.nextSibling&&this.editor.height){
_5ad=dijit.range.create(this.editor.window);
_5ad.setStart(_5ba.nextSibling,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
dojo.window.scrollIntoView(_5ba.nextSibling);
}
_5b7=false;
}else{
if(_5b8.blockNode===_5b8.blockContainer){
_5b8.blockNode.appendChild(_5ba);
}else{
dojo.place(_5ba,_5b8.blockNode,"after");
}
_5b7=false;
if(_5b8.blockNode.style){
if(_5ba.style){
if(_5b8.blockNode.style.cssText){
_5ba.style.cssText=_5b8.blockNode.style.cssText;
}
}
}
rs=_5ac.startContainer;
var _5bc;
if(rs&&rs.nodeType==3){
var _5bd,_5be;
_5bb=_5ac.endOffset;
if(rs.length<_5bb){
ret=this._adjustNodeAndOffset(rs,_5bb);
rs=ret.node;
_5bb=ret.offset;
}
txt=rs.nodeValue;
_5ae=doc.createTextNode(txt.substring(0,_5bb));
_5af=doc.createTextNode(txt.substring(_5bb,txt.length));
dojo.place(_5ae,rs,"before");
dojo.place(_5af,rs,"after");
dojo.destroy(rs);
var _5bf=_5ae.parentNode;
while(_5bf!==_5b8.blockNode){
var tg=_5bf.tagName;
var _5c0=doc.createElement(tg);
if(_5bf.style){
if(_5c0.style){
if(_5bf.style.cssText){
_5c0.style.cssText=_5bf.style.cssText;
}
}
}
if(_5bf.tagName==="FONT"){
if(_5bf.color){
_5c0.color=_5bf.color;
}
if(_5bf.face){
_5c0.face=_5bf.face;
}
if(_5bf.size){
_5c0.size=_5bf.size;
}
}
_5bd=_5af;
while(_5bd){
_5be=_5bd.nextSibling;
_5c0.appendChild(_5bd);
_5bd=_5be;
}
dojo.place(_5c0,_5bf,"after");
_5ae=_5bf;
_5af=_5c0;
_5bf=_5bf.parentNode;
}
_5bd=_5af;
if(_5bd.nodeType==1||(_5bd.nodeType==3&&_5bd.nodeValue)){
_5ba.innerHTML="";
}
_5bc=_5bd;
while(_5bd){
_5be=_5bd.nextSibling;
_5ba.appendChild(_5bd);
_5bd=_5be;
}
}
_5ad=dijit.range.create(this.editor.window);
var _5c1;
var _5c2=_5bc;
if(this.blockNodeForEnter!=="BR"){
while(_5c2){
_5c1=_5c2;
_5be=_5c2.firstChild;
_5c2=_5be;
}
if(_5c1&&_5c1.parentNode){
_5ba=_5c1.parentNode;
_5ad.setStart(_5ba,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
if(this.editor.height){
dijit.scrollIntoView(_5ba);
}
if(dojo.isMoz){
this._pressedEnterInBlock=_5b8.blockNode;
}
}else{
_5b7=true;
}
}else{
_5ad.setStart(_5ba,0);
_5ab.removeAllRanges();
_5ab.addRange(_5ad);
if(this.editor.height){
dijit.scrollIntoView(_5ba);
}
if(dojo.isMoz){
this._pressedEnterInBlock=_5b8.blockNode;
}
}
}
}
return _5b7;
},_adjustNodeAndOffset:function(node,_5c3){
while(node.length<_5c3&&node.nextSibling&&node.nextSibling.nodeType==3){
_5c3=_5c3-node.length;
node=node.nextSibling;
}
var ret={"node":node,"offset":_5c3};
return ret;
},removeTrailingBr:function(_5c4){
var para=/P|DIV|LI/i.test(_5c4.tagName)?_5c4:dijit._editor.selection.getParentOfType(_5c4,["P","DIV","LI"]);
if(!para){
return;
}
if(para.lastChild){
if((para.childNodes.length>1&&para.lastChild.nodeType==3&&/^[\s\xAD]*$/.test(para.lastChild.nodeValue))||para.lastChild.tagName=="BR"){
dojo.destroy(para.lastChild);
}
}
if(!para.childNodes.length){
para.innerHTML=this.bogusHtmlContent;
}
}});
}
if(!dojo._hasResource["dijit.Editor"]){
dojo._hasResource["dijit.Editor"]=true;
dojo.provide("dijit.Editor");
dojo.declare("dijit.Editor",dijit._editor.RichText,{plugins:null,extraPlugins:null,constructor:function(){
if(!dojo.isArray(this.plugins)){
this.plugins=["undo","redo","|","cut","copy","paste","|","bold","italic","underline","strikethrough","|","insertOrderedList","insertUnorderedList","indent","outdent","|","justifyLeft","justifyRight","justifyCenter","justifyFull","dijit._editor.plugins.EnterKeyHandling"];
}
this._plugins=[];
this._editInterval=this.editActionInterval*1000;
if(dojo.isIE){
this.events.push("onBeforeDeactivate");
this.events.push("onBeforeActivate");
}
},postMixInProperties:function(){
this.setValueDeferred=new dojo.Deferred();
this.inherited(arguments);
},postCreate:function(){
this._steps=this._steps.slice(0);
this._undoedSteps=this._undoedSteps.slice(0);
if(dojo.isArray(this.extraPlugins)){
this.plugins=this.plugins.concat(this.extraPlugins);
}
this.inherited(arguments);
this.commands=dojo.i18n.getLocalization("dijit._editor","commands",this.lang);
if(!this.toolbar){
this.toolbar=new dijit.Toolbar({dir:this.dir,lang:this.lang});
this.header.appendChild(this.toolbar.domNode);
}
dojo.forEach(this.plugins,this.addPlugin,this);
this.setValueDeferred.callback(true);
dojo.addClass(this.iframe.parentNode,"dijitEditorIFrameContainer");
dojo.addClass(this.iframe,"dijitEditorIFrame");
dojo.attr(this.iframe,"allowTransparency",true);
if(dojo.isWebKit){
dojo.style(this.domNode,"KhtmlUserSelect","none");
}
this.toolbar.startup();
this.onNormalizedDisplayChanged();
},destroy:function(){
dojo.forEach(this._plugins,function(p){
if(p&&p.destroy){
p.destroy();
}
});
this._plugins=[];
this.toolbar.destroyRecursive();
delete this.toolbar;
this.inherited(arguments);
},addPlugin:function(_5c5,_5c6){
var args=dojo.isString(_5c5)?{name:_5c5}:_5c5;
if(!args.setEditor){
var o={"args":args,"plugin":null,"editor":this};
dojo.publish(dijit._scopeName+".Editor.getPlugin",[o]);
if(!o.plugin){
var pc=dojo.getObject(args.name);
if(pc){
o.plugin=new pc(args);
}
}
if(!o.plugin){
console.warn("Cannot find plugin",_5c5);
return;
}
_5c5=o.plugin;
}
if(arguments.length>1){
this._plugins[_5c6]=_5c5;
}else{
this._plugins.push(_5c5);
}
_5c5.setEditor(this);
if(dojo.isFunction(_5c5.setToolbar)){
_5c5.setToolbar(this.toolbar);
}
},startup:function(){
},resize:function(size){
if(size){
dijit.layout._LayoutWidget.prototype.resize.apply(this,arguments);
}
},layout:function(){
var _5c7=(this._contentBox.h-(this.getHeaderHeight()+this.getFooterHeight()+dojo._getPadBorderExtents(this.iframe.parentNode).h+dojo._getMarginExtents(this.iframe.parentNode).h));
this.editingArea.style.height=_5c7+"px";
if(this.iframe){
this.iframe.style.height="100%";
}
this._layoutMode=true;
},_onIEMouseDown:function(e){
var _5c8;
var b=this.document.body;
var _5c9=b.clientWidth;
var _5ca=b.clientHeight;
var _5cb=b.clientLeft;
var _5cc=b.offsetWidth;
var _5cd=b.offsetHeight;
var _5ce=b.offsetLeft;
bodyDir=b.dir?b.dir.toLowerCase():"";
if(bodyDir!="rtl"){
if(_5c9<_5cc&&e.x>_5c9&&e.x<_5cc){
_5c8=true;
}
}else{
if(e.x<_5cb&&e.x>_5ce){
_5c8=true;
}
}
if(!_5c8){
if(_5ca<_5cd&&e.y>_5ca&&e.y<_5cd){
_5c8=true;
}
}
if(!_5c8){
delete this._cursorToStart;
delete this._savedSelection;
if(e.target.tagName=="BODY"){
setTimeout(dojo.hitch(this,"placeCursorAtEnd"),0);
}
this.inherited(arguments);
}
},onBeforeActivate:function(e){
this._restoreSelection();
},onBeforeDeactivate:function(e){
if(this.customUndo){
this.endEditing(true);
}
if(e.target.tagName!="BODY"){
this._saveSelection();
}
},customUndo:true,editActionInterval:3,beginEditing:function(cmd){
if(!this._inEditing){
this._inEditing=true;
this._beginEditing(cmd);
}
if(this.editActionInterval>0){
if(this._editTimer){
clearTimeout(this._editTimer);
}
this._editTimer=setTimeout(dojo.hitch(this,this.endEditing),this._editInterval);
}
},_steps:[],_undoedSteps:[],execCommand:function(cmd){
if(this.customUndo&&(cmd=="undo"||cmd=="redo")){
return this[cmd]();
}else{
if(this.customUndo){
this.endEditing();
this._beginEditing();
}
var r;
var _5cf=/copy|cut|paste/.test(cmd);
try{
r=this.inherited(arguments);
if(dojo.isWebKit&&_5cf&&!r){
throw {code:1011};
}
}
catch(e){
if(e.code==1011&&_5cf){
var sub=dojo.string.substitute,_5d0={cut:"X",copy:"C",paste:"V"};
alert(sub(this.commands.systemShortcut,[this.commands[cmd],sub(this.commands[dojo.isMac?"appleKey":"ctrlKey"],[_5d0[cmd]])]));
}
r=false;
}
if(this.customUndo){
this._endEditing();
}
return r;
}
},queryCommandEnabled:function(cmd){
if(this.customUndo&&(cmd=="undo"||cmd=="redo")){
return cmd=="undo"?(this._steps.length>1):(this._undoedSteps.length>0);
}else{
return this.inherited(arguments);
}
},_moveToBookmark:function(b){
var _5d1=b.mark;
var mark=b.mark;
var col=b.isCollapsed;
var r,_5d2,_5d3,sel;
if(mark){
if(dojo.isIE<9){
if(dojo.isArray(mark)){
_5d1=[];
dojo.forEach(mark,function(n){
_5d1.push(dijit.range.getNode(n,this.editNode));
},this);
dojo.withGlobal(this.window,"moveToBookmark",dijit,[{mark:_5d1,isCollapsed:col}]);
}else{
if(mark.startContainer&&mark.endContainer){
sel=dijit.range.getSelection(this.window);
if(sel&&sel.removeAllRanges){
sel.removeAllRanges();
r=dijit.range.create(this.window);
_5d2=dijit.range.getNode(mark.startContainer,this.editNode);
_5d3=dijit.range.getNode(mark.endContainer,this.editNode);
if(_5d2&&_5d3){
r.setStart(_5d2,mark.startOffset);
r.setEnd(_5d3,mark.endOffset);
sel.addRange(r);
}
}
}
}
}else{
sel=dijit.range.getSelection(this.window);
if(sel&&sel.removeAllRanges){
sel.removeAllRanges();
r=dijit.range.create(this.window);
_5d2=dijit.range.getNode(mark.startContainer,this.editNode);
_5d3=dijit.range.getNode(mark.endContainer,this.editNode);
if(_5d2&&_5d3){
r.setStart(_5d2,mark.startOffset);
r.setEnd(_5d3,mark.endOffset);
sel.addRange(r);
}
}
}
}
},_changeToStep:function(from,to){
this.setValue(to.text);
var b=to.bookmark;
if(!b){
return;
}
this._moveToBookmark(b);
},undo:function(){
var ret=false;
if(!this._undoRedoActive){
this._undoRedoActive=true;
this.endEditing(true);
var s=this._steps.pop();
if(s&&this._steps.length>0){
this.focus();
this._changeToStep(s,this._steps[this._steps.length-1]);
this._undoedSteps.push(s);
this.onDisplayChanged();
delete this._undoRedoActive;
ret=true;
}
delete this._undoRedoActive;
}
return ret;
},redo:function(){
var ret=false;
if(!this._undoRedoActive){
this._undoRedoActive=true;
this.endEditing(true);
var s=this._undoedSteps.pop();
if(s&&this._steps.length>0){
this.focus();
this._changeToStep(this._steps[this._steps.length-1],s);
this._steps.push(s);
this.onDisplayChanged();
ret=true;
}
delete this._undoRedoActive;
}
return ret;
},endEditing:function(_5d4){
if(this._editTimer){
clearTimeout(this._editTimer);
}
if(this._inEditing){
this._endEditing(_5d4);
this._inEditing=false;
}
},_getBookmark:function(){
var b=dojo.withGlobal(this.window,dijit.getBookmark);
var tmp=[];
if(b&&b.mark){
var mark=b.mark;
if(dojo.isIE<9){
var sel=dijit.range.getSelection(this.window);
if(!dojo.isArray(mark)){
if(sel){
var _5d5;
if(sel.rangeCount){
_5d5=sel.getRangeAt(0);
}
if(_5d5){
b.mark=_5d5.cloneRange();
}else{
b.mark=dojo.withGlobal(this.window,dijit.getBookmark);
}
}
}else{
dojo.forEach(b.mark,function(n){
tmp.push(dijit.range.getIndex(n,this.editNode).o);
},this);
b.mark=tmp;
}
}
try{
if(b.mark&&b.mark.startContainer){
tmp=dijit.range.getIndex(b.mark.startContainer,this.editNode).o;
b.mark={startContainer:tmp,startOffset:b.mark.startOffset,endContainer:b.mark.endContainer===b.mark.startContainer?tmp:dijit.range.getIndex(b.mark.endContainer,this.editNode).o,endOffset:b.mark.endOffset};
}
}
catch(e){
b.mark=null;
}
}
return b;
},_beginEditing:function(cmd){
if(this._steps.length===0){
this._steps.push({"text":dijit._editor.getChildrenHtml(this.editNode),"bookmark":this._getBookmark()});
}
},_endEditing:function(_5d6){
var v=dijit._editor.getChildrenHtml(this.editNode);
this._undoedSteps=[];
this._steps.push({text:v,bookmark:this._getBookmark()});
},onKeyDown:function(e){
if(!dojo.isIE&&!this.iframe&&e.keyCode==dojo.keys.TAB&&!this.tabIndent){
this._saveSelection();
}
if(!this.customUndo){
this.inherited(arguments);
return;
}
var k=e.keyCode,ks=dojo.keys;
if(e.ctrlKey&&!e.altKey){
if(k==90||k==122){
dojo.stopEvent(e);
this.undo();
return;
}else{
if(k==89||k==121){
dojo.stopEvent(e);
this.redo();
return;
}
}
}
this.inherited(arguments);
switch(k){
case ks.ENTER:
case ks.BACKSPACE:
case ks.DELETE:
this.beginEditing();
break;
case 88:
case 86:
if(e.ctrlKey&&!e.altKey&&!e.metaKey){
this.endEditing();
if(e.keyCode==88){
this.beginEditing("cut");
setTimeout(dojo.hitch(this,this.endEditing),1);
}else{
this.beginEditing("paste");
setTimeout(dojo.hitch(this,this.endEditing),1);
}
break;
}
default:
if(!e.ctrlKey&&!e.altKey&&!e.metaKey&&(e.keyCode<dojo.keys.F1||e.keyCode>dojo.keys.F15)){
this.beginEditing();
break;
}
case ks.ALT:
this.endEditing();
break;
case ks.UP_ARROW:
case ks.DOWN_ARROW:
case ks.LEFT_ARROW:
case ks.RIGHT_ARROW:
case ks.HOME:
case ks.END:
case ks.PAGE_UP:
case ks.PAGE_DOWN:
this.endEditing(true);
break;
case ks.CTRL:
case ks.SHIFT:
case ks.TAB:
break;
}
},_onBlur:function(){
this.inherited(arguments);
this.endEditing(true);
},_saveSelection:function(){
try{
this._savedSelection=this._getBookmark();
}
catch(e){
}
},_restoreSelection:function(){
if(this._savedSelection){
delete this._cursorToStart;
if(dojo.withGlobal(this.window,"isCollapsed",dijit)){
this._moveToBookmark(this._savedSelection);
}
delete this._savedSelection;
}
},onClick:function(){
this.endEditing(true);
this.inherited(arguments);
},replaceValue:function(html){
if(!this.customUndo){
this.inherited(arguments);
}else{
if(this.isClosed){
this.setValue(html);
}else{
this.beginEditing();
if(!html){
html="&nbsp;";
}
this.setValue(html);
this.endEditing();
}
}
},_setDisabledAttr:function(_5d7){
var _5d8=dojo.hitch(this,function(){
if((!this.disabled&&_5d7)||(!this._buttonEnabledPlugins&&_5d7)){
dojo.forEach(this._plugins,function(p){
p.set("disabled",true);
});
}else{
if(this.disabled&&!_5d7){
dojo.forEach(this._plugins,function(p){
p.set("disabled",false);
});
}
}
});
this.setValueDeferred.addCallback(_5d8);
this.inherited(arguments);
},_setStateClass:function(){
try{
this.inherited(arguments);
if(this.document&&this.document.body){
dojo.style(this.document.body,"color",dojo.style(this.iframe,"color"));
}
}
catch(e){
}
}});
dojo.subscribe(dijit._scopeName+".Editor.getPlugin",null,function(o){
if(o.plugin){
return;
}
var args=o.args,p;
var _5d9=dijit._editor._Plugin;
var name=args.name;
switch(name){
case "undo":
case "redo":
case "cut":
case "copy":
case "paste":
case "insertOrderedList":
case "insertUnorderedList":
case "indent":
case "outdent":
case "justifyCenter":
case "justifyFull":
case "justifyLeft":
case "justifyRight":
case "delete":
case "selectAll":
case "removeFormat":
case "unlink":
case "insertHorizontalRule":
p=new _5d9({command:name});
break;
case "bold":
case "italic":
case "underline":
case "strikethrough":
case "subscript":
case "superscript":
p=new _5d9({buttonClass:dijit.form.ToggleButton,command:name});
break;
case "|":
p=new _5d9({button:new dijit.ToolbarSeparator(),setEditor:function(_5da){
this.editor=_5da;
}});
}
o.plugin=p;
});
}
if(!dojo._hasResource["dojox.grid.cells.dijit"]){
dojo._hasResource["dojox.grid.cells.dijit"]=true;
dojo.provide("dojox.grid.cells.dijit");
(function(){
var dgc=dojox.grid.cells;
dojo.declare("dojox.grid.cells._Widget",dgc._Base,{widgetClass:dijit.form.TextBox,constructor:function(_5db){
this.widget=null;
if(typeof this.widgetClass=="string"){
dojo.deprecated("Passing a string to widgetClass is deprecated","pass the widget class object instead","2.0");
this.widgetClass=dojo.getObject(this.widgetClass);
}
},formatEditing:function(_5dc,_5dd){
this.needFormatNode(_5dc,_5dd);
return "<div></div>";
},getValue:function(_5de){
return this.widget.get("value");
},setValue:function(_5df,_5e0){
if(this.widget&&this.widget.set){
if(this.widget.onLoadDeferred){
var self=this;
this.widget.onLoadDeferred.addCallback(function(){
self.widget.set("value",_5e0===null?"":_5e0);
});
}else{
this.widget.set("value",_5e0);
}
}else{
this.inherited(arguments);
}
},getWidgetProps:function(_5e1){
return dojo.mixin({dir:this.dir,lang:this.lang},this.widgetProps||{},{constraints:dojo.mixin({},this.constraint)||{},inGrid:true,value:_5e1});
},createWidget:function(_5e2,_5e3,_5e4){
return new this.widgetClass(this.getWidgetProps(_5e3),_5e2);
},attachWidget:function(_5e5,_5e6,_5e7){
_5e5.appendChild(this.widget.domNode);
this.setValue(_5e7,_5e6);
},formatNode:function(_5e8,_5e9,_5ea){
if(!this.widgetClass){
return _5e9;
}
if(!this.widget){
this.widget=this.createWidget.apply(this,arguments);
}else{
this.attachWidget.apply(this,arguments);
}
this.sizeWidget.apply(this,arguments);
this.grid.views.renormalizeRow(_5ea);
this.grid.scroller.rowHeightChanged(_5ea,true);
this.focus();
return undefined;
},sizeWidget:function(_5eb,_5ec,_5ed){
var p=this.getNode(_5ed),box=dojo.contentBox(p);
dojo.marginBox(this.widget.domNode,{w:box.w});
},focus:function(_5ee,_5ef){
if(this.widget){
this.widget._message="";
setTimeout(dojo.hitch(this.widget,function(){
dojox.grid.util.fire(this,"focus");
}),0);
}
},_finish:function(_5f0){
this.inherited(arguments);
dojox.grid.util.removeNode(this.widget.domNode);
if(dojo.isIE){
dojo.setSelectable(this.widget.domNode,true);
}
}});
dgc._Widget.markupFactory=function(node,cell){
dgc._Base.markupFactory(node,cell);
var d=dojo;
var _5f1=d.trim(d.attr(node,"widgetProps")||"");
var _5f2=d.trim(d.attr(node,"constraint")||"");
var _5f3=d.trim(d.attr(node,"widgetClass")||"");
if(_5f1){
cell.widgetProps=d.fromJson(_5f1);
}
if(_5f2){
cell.constraint=d.fromJson(_5f2);
}
if(_5f3){
cell.widgetClass=d.getObject(_5f3);
}
};
dojo.declare("dojox.grid.cells.ComboBox",dgc._Widget,{widgetClass:dijit.form.ComboBox,getWidgetProps:function(_5f4){
var _5f5=[];
dojo.forEach(this.options,function(o){
_5f5.push({name:o,value:o});
});
var _5f6=new dojo.data.ItemFileReadStore({data:{identifier:"name",items:_5f5}});
return dojo.mixin({},this.widgetProps||{},{value:_5f4,store:_5f6});
},getValue:function(){
var e=this.widget;
e.set("displayedValue",e.get("displayedValue"));
return e.get("value");
}});
dgc.ComboBox.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
var d=dojo;
var _5f7=d.trim(d.attr(node,"options")||"");
if(_5f7){
var o=_5f7.split(",");
if(o[0]!=_5f7){
cell.options=o;
}
}
};
dojo.declare("dojox.grid.cells.DateTextBox",dgc._Widget,{widgetClass:dijit.form.DateTextBox,setValue:function(_5f8,_5f9){
if(this.widget){
this.widget.set("value",new Date(_5f9));
}else{
this.inherited(arguments);
}
},getWidgetProps:function(_5fa){
if(this.constraint){
if(typeof this.constraint.max=="number"){
this.constraint.max=new Date(this.constraint.max);
}
if(typeof this.constraint.min=="number"){
this.constraint.min=new Date(this.constraint.min);
}
}
return dojo.mixin(this.inherited(arguments),{value:_5fa?new Date(_5fa):null});
}});
dgc.DateTextBox.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.NumberTextBox",dgc._Widget,{widgetClass:dijit.form.NumberTextBox});
dgc.NumberTextBox.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.ValidationTextBox",dgc._Widget,{widgetClass:dijit.form.ValidationTextBox,getWidgetProps:function(_5fb){
var _5fc=this.inherited(arguments);
return _5fc;
}});
dgc.ValidationTextBox.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.TimeTextBox",dgc._Widget,{widgetClass:dijit.form.TimeTextBox});
dgc.TimeTextBox.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.CheckBox",dgc._Widget,{widgetClass:dijit.form.CheckBox,getValue:function(){
return this.widget.checked;
},setValue:function(_5fd,_5fe){
if(this.widget&&this.widget.attributeMap.checked){
this.widget.set("checked",_5fe);
}else{
this.inherited(arguments);
}
},sizeWidget:function(_5ff,_600,_601){
return;
}});
dgc.CheckBox.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.Editor",dgc._Widget,{widgetClass:dijit.Editor,getWidgetProps:function(_602){
return dojo.mixin({},this.widgetProps||{},{height:this.widgetHeight||"100px"});
},createWidget:function(_603,_604,_605){
var _606=new this.widgetClass(this.getWidgetProps(_604),_603);
dojo.connect(_606,"onLoad",dojo.hitch(this,"populateEditor"));
return _606;
},formatNode:function(_607,_608,_609){
this.content=_608;
this.inherited(arguments);
if(dojo.isMoz){
var e=this.widget;
e.open();
if(this.widgetToolbar){
dojo.place(e.toolbar.domNode,e.editingArea,"before");
}
}
},populateEditor:function(){
this.widget.set("value",this.content);
this.widget.placeCursorAtEnd();
}});
dgc.Editor.markupFactory=function(node,cell){
dgc._Widget.markupFactory(node,cell);
var d=dojo;
var h=dojo.trim(dojo.attr(node,"widgetHeight")||"");
if(h){
if((h!="auto")&&(h.substr(-2)!="em")){
h=parseInt(h,10)+"px";
}
cell.widgetHeight=h;
}
};
})();
}
if(!dojo._hasResource["dojo.data.ItemFileWriteStore"]){
dojo._hasResource["dojo.data.ItemFileWriteStore"]=true;
dojo.provide("dojo.data.ItemFileWriteStore");
dojo.declare("dojo.data.ItemFileWriteStore",dojo.data.ItemFileReadStore,{constructor:function(_60a){
this._features["dojo.data.api.Write"]=true;
this._features["dojo.data.api.Notification"]=true;
this._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}};
if(!this._datatypeMap["Date"].serialize){
this._datatypeMap["Date"].serialize=function(obj){
return dojo.date.stamp.toISOString(obj,{zulu:true});
};
}
if(_60a&&(_60a.referenceIntegrity===false)){
this.referenceIntegrity=false;
}
this._saveInProgress=false;
},referenceIntegrity:true,_assert:function(_60b){
if(!_60b){
throw new Error("assertion failed in ItemFileWriteStore");
}
},_getIdentifierAttribute:function(){
var _60c=this.getFeatures()["dojo.data.api.Identity"];
return _60c;
},newItem:function(_60d,_60e){
this._assert(!this._saveInProgress);
if(!this._loadFinished){
this._forceLoad();
}
if(typeof _60d!="object"&&typeof _60d!="undefined"){
throw new Error("newItem() was passed something other than an object");
}
var _60f=null;
var _610=this._getIdentifierAttribute();
if(_610===Number){
_60f=this._arrayOfAllItems.length;
}else{
_60f=_60d[_610];
if(typeof _60f==="undefined"){
throw new Error("newItem() was not passed an identity for the new item");
}
if(dojo.isArray(_60f)){
throw new Error("newItem() was not passed an single-valued identity");
}
}
if(this._itemsByIdentity){
this._assert(typeof this._itemsByIdentity[_60f]==="undefined");
}
this._assert(typeof this._pending._newItems[_60f]==="undefined");
this._assert(typeof this._pending._deletedItems[_60f]==="undefined");
var _611={};
_611[this._storeRefPropName]=this;
_611[this._itemNumPropName]=this._arrayOfAllItems.length;
if(this._itemsByIdentity){
this._itemsByIdentity[_60f]=_611;
_611[_610]=[_60f];
}
this._arrayOfAllItems.push(_611);
var _612=null;
if(_60e&&_60e.parent&&_60e.attribute){
_612={item:_60e.parent,attribute:_60e.attribute,oldValue:undefined};
var _613=this.getValues(_60e.parent,_60e.attribute);
if(_613&&_613.length>0){
var _614=_613.slice(0,_613.length);
if(_613.length===1){
_612.oldValue=_613[0];
}else{
_612.oldValue=_613.slice(0,_613.length);
}
_614.push(_611);
this._setValueOrValues(_60e.parent,_60e.attribute,_614,false);
_612.newValue=this.getValues(_60e.parent,_60e.attribute);
}else{
this._setValueOrValues(_60e.parent,_60e.attribute,_611,false);
_612.newValue=_611;
}
}else{
_611[this._rootItemPropName]=true;
this._arrayOfTopLevelItems.push(_611);
}
this._pending._newItems[_60f]=_611;
for(var key in _60d){
if(key===this._storeRefPropName||key===this._itemNumPropName){
throw new Error("encountered bug in ItemFileWriteStore.newItem");
}
var _615=_60d[key];
if(!dojo.isArray(_615)){
_615=[_615];
}
_611[key]=_615;
if(this.referenceIntegrity){
for(var i=0;i<_615.length;i++){
var val=_615[i];
if(this.isItem(val)){
this._addReferenceToMap(val,_611,key);
}
}
}
}
this.onNew(_611,_612);
return _611;
},_removeArrayElement:function(_616,_617){
var _618=dojo.indexOf(_616,_617);
if(_618!=-1){
_616.splice(_618,1);
return true;
}
return false;
},deleteItem:function(item){
this._assert(!this._saveInProgress);
this._assertIsItem(item);
var _619=item[this._itemNumPropName];
var _61a=this.getIdentity(item);
if(this.referenceIntegrity){
var _61b=this.getAttributes(item);
if(item[this._reverseRefMap]){
item["backup_"+this._reverseRefMap]=dojo.clone(item[this._reverseRefMap]);
}
dojo.forEach(_61b,function(_61c){
dojo.forEach(this.getValues(item,_61c),function(_61d){
if(this.isItem(_61d)){
if(!item["backupRefs_"+this._reverseRefMap]){
item["backupRefs_"+this._reverseRefMap]=[];
}
item["backupRefs_"+this._reverseRefMap].push({id:this.getIdentity(_61d),attr:_61c});
this._removeReferenceFromMap(_61d,item,_61c);
}
},this);
},this);
var _61e=item[this._reverseRefMap];
if(_61e){
for(var _61f in _61e){
var _620=null;
if(this._itemsByIdentity){
_620=this._itemsByIdentity[_61f];
}else{
_620=this._arrayOfAllItems[_61f];
}
if(_620){
for(var _621 in _61e[_61f]){
var _622=this.getValues(_620,_621)||[];
var _623=dojo.filter(_622,function(_624){
return !(this.isItem(_624)&&this.getIdentity(_624)==_61a);
},this);
this._removeReferenceFromMap(item,_620,_621);
if(_623.length<_622.length){
this._setValueOrValues(_620,_621,_623,true);
}
}
}
}
}
}
this._arrayOfAllItems[_619]=null;
item[this._storeRefPropName]=null;
if(this._itemsByIdentity){
delete this._itemsByIdentity[_61a];
}
this._pending._deletedItems[_61a]=item;
if(item[this._rootItemPropName]){
this._removeArrayElement(this._arrayOfTopLevelItems,item);
}
this.onDelete(item);
return true;
},setValue:function(item,_625,_626){
return this._setValueOrValues(item,_625,_626,true);
},setValues:function(item,_627,_628){
return this._setValueOrValues(item,_627,_628,true);
},unsetAttribute:function(item,_629){
return this._setValueOrValues(item,_629,[],true);
},_setValueOrValues:function(item,_62a,_62b,_62c){
this._assert(!this._saveInProgress);
this._assertIsItem(item);
this._assert(dojo.isString(_62a));
this._assert(typeof _62b!=="undefined");
var _62d=this._getIdentifierAttribute();
if(_62a==_62d){
throw new Error("ItemFileWriteStore does not have support for changing the value of an item's identifier.");
}
var _62e=this._getValueOrValues(item,_62a);
var _62f=this.getIdentity(item);
if(!this._pending._modifiedItems[_62f]){
var _630={};
for(var key in item){
if((key===this._storeRefPropName)||(key===this._itemNumPropName)||(key===this._rootItemPropName)){
_630[key]=item[key];
}else{
if(key===this._reverseRefMap){
_630[key]=dojo.clone(item[key]);
}else{
_630[key]=item[key].slice(0,item[key].length);
}
}
}
this._pending._modifiedItems[_62f]=_630;
}
var _631=false;
if(dojo.isArray(_62b)&&_62b.length===0){
_631=delete item[_62a];
_62b=undefined;
if(this.referenceIntegrity&&_62e){
var _632=_62e;
if(!dojo.isArray(_632)){
_632=[_632];
}
for(var i=0;i<_632.length;i++){
var _633=_632[i];
if(this.isItem(_633)){
this._removeReferenceFromMap(_633,item,_62a);
}
}
}
}else{
var _634;
if(dojo.isArray(_62b)){
var _635=_62b;
_634=_62b.slice(0,_62b.length);
}else{
_634=[_62b];
}
if(this.referenceIntegrity){
if(_62e){
var _632=_62e;
if(!dojo.isArray(_632)){
_632=[_632];
}
var map={};
dojo.forEach(_632,function(_636){
if(this.isItem(_636)){
var id=this.getIdentity(_636);
map[id.toString()]=true;
}
},this);
dojo.forEach(_634,function(_637){
if(this.isItem(_637)){
var id=this.getIdentity(_637);
if(map[id.toString()]){
delete map[id.toString()];
}else{
this._addReferenceToMap(_637,item,_62a);
}
}
},this);
for(var rId in map){
var _638;
if(this._itemsByIdentity){
_638=this._itemsByIdentity[rId];
}else{
_638=this._arrayOfAllItems[rId];
}
this._removeReferenceFromMap(_638,item,_62a);
}
}else{
for(var i=0;i<_634.length;i++){
var _633=_634[i];
if(this.isItem(_633)){
this._addReferenceToMap(_633,item,_62a);
}
}
}
}
var _639=item;
var _63a=_62a.split(/\./);
while(_639&&_63a.length>1){
_639=_639[_63a[0]];
_63a.shift();
if(_639){
_639=_639[0];
}
}
if(_639){
_639[_63a[0]]=_634;
}else{
item[_62a]=_634;
}
_631=true;
}
if(_62c){
this.onSet(item,_62a,_62e,_62b);
}
return _631;
},_addReferenceToMap:function(_63b,_63c,_63d){
var _63e=this.getIdentity(_63c);
var _63f=_63b[this._reverseRefMap];
if(!_63f){
_63f=_63b[this._reverseRefMap]={};
}
var _640=_63f[_63e];
if(!_640){
_640=_63f[_63e]={};
}
_640[_63d]=true;
},_removeReferenceFromMap:function(_641,_642,_643){
var _644=this.getIdentity(_642);
var _645=_641[this._reverseRefMap];
var _646;
if(_645){
for(_646 in _645){
if(_646==_644){
delete _645[_646][_643];
if(this._isEmpty(_645[_646])){
delete _645[_646];
}
}
}
if(this._isEmpty(_645)){
delete _641[this._reverseRefMap];
}
}
},_dumpReferenceMap:function(){
var i;
for(i=0;i<this._arrayOfAllItems.length;i++){
var item=this._arrayOfAllItems[i];
if(item&&item[this._reverseRefMap]){
}
}
},_getValueOrValues:function(item,_647){
var _648=undefined;
if(this.hasAttribute(item,_647)){
var _649=this.getValues(item,_647);
if(_649.length==1){
_648=_649[0];
}else{
_648=_649;
}
}
return _648;
},_flatten:function(_64a){
if(this.isItem(_64a)){
var item=_64a;
var _64b=this.getIdentity(item);
var _64c={_reference:_64b};
return _64c;
}else{
if(typeof _64a==="object"){
for(var type in this._datatypeMap){
var _64d=this._datatypeMap[type];
if(dojo.isObject(_64d)&&!dojo.isFunction(_64d)){
if(_64a instanceof _64d.type){
if(!_64d.serialize){
throw new Error("ItemFileWriteStore:  No serializer defined for type mapping: ["+type+"]");
}
return {_type:type,_value:_64d.serialize(_64a)};
}
}else{
if(_64a instanceof _64d){
return {_type:type,_value:_64a.toString()};
}
}
}
}
return _64a;
}
},_getNewFileContentString:function(){
var _64e={};
var _64f=this._getIdentifierAttribute();
if(_64f!==Number){
_64e.identifier=_64f;
}
if(this._labelAttr){
_64e.label=this._labelAttr;
}
_64e.items=[];
for(var i=0;i<this._arrayOfAllItems.length;++i){
var item=this._arrayOfAllItems[i];
if(item!==null){
var _650={};
for(var key in item){
if(key!==this._storeRefPropName&&key!==this._itemNumPropName&&key!==this._reverseRefMap&&key!==this._rootItemPropName){
var _651=key;
var _652=this.getValues(item,_651);
if(_652.length==1){
_650[_651]=this._flatten(_652[0]);
}else{
var _653=[];
for(var j=0;j<_652.length;++j){
_653.push(this._flatten(_652[j]));
_650[_651]=_653;
}
}
}
}
_64e.items.push(_650);
}
}
var _654=true;
return dojo.toJson(_64e,_654);
},_isEmpty:function(_655){
var _656=true;
if(dojo.isObject(_655)){
var i;
for(i in _655){
_656=false;
break;
}
}else{
if(dojo.isArray(_655)){
if(_655.length>0){
_656=false;
}
}
}
return _656;
},save:function(_657){
this._assert(!this._saveInProgress);
this._saveInProgress=true;
var self=this;
var _658=function(){
self._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}};
self._saveInProgress=false;
if(_657&&_657.onComplete){
var _659=_657.scope||dojo.global;
_657.onComplete.call(_659);
}
};
var _65a=function(err){
self._saveInProgress=false;
if(_657&&_657.onError){
var _65b=_657.scope||dojo.global;
_657.onError.call(_65b,err);
}
};
if(this._saveEverything){
var _65c=this._getNewFileContentString();
this._saveEverything(_658,_65a,_65c);
}
if(this._saveCustom){
this._saveCustom(_658,_65a);
}
if(!this._saveEverything&&!this._saveCustom){
_658();
}
},revert:function(){
this._assert(!this._saveInProgress);
var _65d;
for(_65d in this._pending._modifiedItems){
var _65e=this._pending._modifiedItems[_65d];
var _65f=null;
if(this._itemsByIdentity){
_65f=this._itemsByIdentity[_65d];
}else{
_65f=this._arrayOfAllItems[_65d];
}
_65e[this._storeRefPropName]=this;
for(key in _65f){
delete _65f[key];
}
dojo.mixin(_65f,_65e);
}
var _660;
for(_65d in this._pending._deletedItems){
_660=this._pending._deletedItems[_65d];
_660[this._storeRefPropName]=this;
var _661=_660[this._itemNumPropName];
if(_660["backup_"+this._reverseRefMap]){
_660[this._reverseRefMap]=_660["backup_"+this._reverseRefMap];
delete _660["backup_"+this._reverseRefMap];
}
this._arrayOfAllItems[_661]=_660;
if(this._itemsByIdentity){
this._itemsByIdentity[_65d]=_660;
}
if(_660[this._rootItemPropName]){
this._arrayOfTopLevelItems.push(_660);
}
}
for(_65d in this._pending._deletedItems){
_660=this._pending._deletedItems[_65d];
if(_660["backupRefs_"+this._reverseRefMap]){
dojo.forEach(_660["backupRefs_"+this._reverseRefMap],function(_662){
var _663;
if(this._itemsByIdentity){
_663=this._itemsByIdentity[_662.id];
}else{
_663=this._arrayOfAllItems[_662.id];
}
this._addReferenceToMap(_663,_660,_662.attr);
},this);
delete _660["backupRefs_"+this._reverseRefMap];
}
}
for(_65d in this._pending._newItems){
var _664=this._pending._newItems[_65d];
_664[this._storeRefPropName]=null;
this._arrayOfAllItems[_664[this._itemNumPropName]]=null;
if(_664[this._rootItemPropName]){
this._removeArrayElement(this._arrayOfTopLevelItems,_664);
}
if(this._itemsByIdentity){
delete this._itemsByIdentity[_65d];
}
}
this._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}};
return true;
},isDirty:function(item){
if(item){
var _665=this.getIdentity(item);
return new Boolean(this._pending._newItems[_665]||this._pending._modifiedItems[_665]||this._pending._deletedItems[_665]).valueOf();
}else{
if(!this._isEmpty(this._pending._newItems)||!this._isEmpty(this._pending._modifiedItems)||!this._isEmpty(this._pending._deletedItems)){
return true;
}
return false;
}
},onSet:function(item,_666,_667,_668){
},onNew:function(_669,_66a){
},onDelete:function(_66b){
},close:function(_66c){
if(this.clearOnClose){
if(!this.isDirty()){
this.inherited(arguments);
}else{
throw new Error("dojo.data.ItemFileWriteStore: There are unsaved changes present in the store.  Please save or revert the changes before invoking close.");
}
}
}});
}
if(!dojo._hasResource["dojox.grid._Selector"]){
dojo._hasResource["dojox.grid._Selector"]=true;
dojo.provide("dojox.grid._Selector");
(function(){
dojox.grid._InputSelectorHeaderBuilder=dojo.extend(function(view){
dojox.grid._HeaderBuilder.call(this,view);
},dojox.grid._HeaderBuilder.prototype,{generateHtml:function(){
var w=this.view.contentWidth||0;
var _66d=this.view.grid.selection.getSelectedCount();
var _66e=(_66d&&_66d==this.view.grid.rowCount)?" dijitCheckBoxChecked dijitChecked":"";
return "<table style=\"width:"+w+"px;\" "+"border=\"0\" cellspacing=\"0\" cellpadding=\"0\" "+"role=\"presentation\"><tr><th style=\"text-align: center;\">"+"<div class=\"dojoxGridCheckSelector dijitReset dijitInline dijitCheckBox"+_66e+"\"></div></th></tr></table>";
},doclick:function(e){
var _66f=this.view.grid.selection.getSelectedCount();
this.view._selectionChanging=true;
if(_66f==this.view.grid.rowCount){
this.view.grid.selection.deselectAll();
}else{
this.view.grid.selection.selectRange(0,this.view.grid.rowCount-1);
}
this.view._selectionChanging=false;
this.view.onSelectionChanged();
return true;
}});
dojox.grid._SelectorContentBuilder=dojo.extend(function(view){
dojox.grid._ContentBuilder.call(this,view);
},dojox.grid._ContentBuilder.prototype,{generateHtml:function(_670,_671){
var w=this.view.contentWidth||0;
return "<table class=\"dojoxGridRowbarTable\" style=\"width:"+w+"px;\" border=\"0\" "+"cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\"><tr>"+"<td  style=\"text-align: center;\" class=\"dojoxGridRowbarInner\">"+this.getCellContent(_671)+"</td></tr></table>";
},getCellContent:function(_672){
return "&nbsp;";
},findTarget:function(){
var t=dojox.grid._ContentBuilder.prototype.findTarget.apply(this,arguments);
return t;
},domouseover:function(e){
this.view.grid.onMouseOverRow(e);
},domouseout:function(e){
if(!this.isIntraRowEvent(e)){
this.view.grid.onMouseOutRow(e);
}
},doclick:function(e){
var idx=e.rowIndex;
var _673=this.view.grid.selection.isSelected(idx);
var mode=this.view.grid.selection.mode;
if(!_673){
if(mode=="single"){
this.view.grid.selection.select(idx);
}else{
if(mode!="none"){
this.view.grid.selection.addToSelection(idx);
}
}
}else{
this.view.grid.selection.deselect(idx);
}
return true;
}});
dojox.grid._InputSelectorContentBuilder=dojo.extend(function(view){
dojox.grid._SelectorContentBuilder.call(this,view);
},dojox.grid._SelectorContentBuilder.prototype,{getCellContent:function(_674){
var v=this.view;
var type=v.inputType=="checkbox"?"CheckBox":"Radio";
var _675=!!v.grid.selection.isSelected(_674)?" dijit"+type+"Checked dijitChecked":"";
return "<div class=\"dojoxGridCheckSelector dijitReset dijitInline dijit"+type+_675+"\"></div>";
}});
dojo.declare("dojox.grid._Selector",dojox.grid._View,{inputType:"",selectionMode:"",defaultWidth:"2em",noscroll:true,padBorderWidth:2,_contentBuilderClass:dojox.grid._SelectorContentBuilder,postCreate:function(){
this.inherited(arguments);
if(this.selectionMode){
this.grid.selection.mode=this.selectionMode;
}
this.connect(this.grid.selection,"onSelected","onSelected");
this.connect(this.grid.selection,"onDeselected","onDeselected");
},buildRendering:function(){
this.inherited(arguments);
this.scrollboxNode.style.overflow="hidden";
},getWidth:function(){
return this.viewWidth||this.defaultWidth;
},resize:function(){
this.adaptHeight();
},setStructure:function(s){
this.inherited(arguments);
if(s.defaultWidth){
this.defaultWidth=s.defaultWidth;
}
},adaptWidth:function(){
if(!("contentWidth" in this)&&this.contentNode){
this.contentWidth=this.contentNode.offsetWidth-this.padBorderWidth;
}
},doStyleRowNode:function(_676,_677){
var n=["dojoxGridRowbar dojoxGridNonNormalizedCell"];
if(this.grid.rows.isOver(_676)){
n.push("dojoxGridRowbarOver");
}
if(this.grid.selection.isSelected(_676)){
n.push("dojoxGridRowbarSelected");
}
_677.className=n.join(" ");
},onSelected:function(_678){
this.grid.updateRow(_678);
},onDeselected:function(_679){
this.grid.updateRow(_679);
}});
if(!dojox.grid._View.prototype._headerBuilderClass&&!dojox.grid._View.prototype._contentBuilderClass){
dojox.grid._Selector.prototype.postCreate=function(){
this.connect(this.scrollboxNode,"onscroll","doscroll");
dojox.grid.util.funnelEvents(this.contentNode,this,"doContentEvent",["mouseover","mouseout","click","dblclick","contextmenu","mousedown"]);
dojox.grid.util.funnelEvents(this.headerNode,this,"doHeaderEvent",["dblclick","mouseover","mouseout","mousemove","mousedown","click","contextmenu"]);
if(this._contentBuilderClass){
this.content=new this._contentBuilderClass(this);
}else{
this.content=new dojox.grid._ContentBuilder(this);
}
if(this._headerBuilderClass){
this.header=new this._headerBuilderClass(this);
}else{
this.header=new dojox.grid._HeaderBuilder(this);
}
if(!dojo._isBodyLtr()){
this.headerNodeContainer.style.width="";
}
this.connect(this.grid.selection,"onSelected","onSelected");
this.connect(this.grid.selection,"onDeselected","onDeselected");
};
}
dojo.declare("dojox.grid._RadioSelector",dojox.grid._Selector,{inputType:"radio",selectionMode:"single",_contentBuilderClass:dojox.grid._InputSelectorContentBuilder,buildRendering:function(){
this.inherited(arguments);
this.headerNode.style.visibility="hidden";
},renderHeader:function(){
}});
dojo.declare("dojox.grid._CheckBoxSelector",dojox.grid._Selector,{inputType:"checkbox",_headerBuilderClass:dojox.grid._InputSelectorHeaderBuilder,_contentBuilderClass:dojox.grid._InputSelectorContentBuilder,postCreate:function(){
this.inherited(arguments);
this.connect(this.grid,"onSelectionChanged","onSelectionChanged");
this.connect(this.grid,"updateRowCount","_updateVisibility");
},renderHeader:function(){
this.inherited(arguments);
this._updateVisibility(this.grid.rowCount);
},_updateVisibility:function(_67a){
this.headerNode.style.visibility=_67a?"":"hidden";
},onSelectionChanged:function(){
if(this._selectionChanging){
return;
}
var _67b=dojo.query(".dojoxGridCheckSelector",this.headerNode)[0];
var g=this.grid;
var s=(g.rowCount&&g.rowCount==g.selection.getSelectedCount());
g.allItemsSelected=s||false;
dojo.toggleClass(_67b,"dijitChecked",g.allItemsSelected);
dojo.toggleClass(_67b,"dijitCheckBoxChecked",g.allItemsSelected);
}});
})();
}
if(!dojo._hasResource["dojox.grid._CheckBoxSelector"]){
dojo._hasResource["dojox.grid._CheckBoxSelector"]=true;
dojo.provide("dojox.grid._CheckBoxSelector");
}
if(!dojo._hasResource["dojox.grid._RadioSelector"]){
dojo._hasResource["dojox.grid._RadioSelector"]=true;
dojo.provide("dojox.grid._RadioSelector");
}
if(!dojo._hasResource["wm.base.widget.DojoGrid"]){
dojo._hasResource["wm.base.widget.DojoGrid"]=true;
dojo.provide("wm.base.widget.DojoGrid");
dojo.declare("wm.DojoGrid",wm.Control,{_regenerateOnDeviceChange:1,resortOnDataUpdate:true,columnReordering:true,manageHistory:true,deleteConfirm:"Are you sure you want to delete this?",deleteColumn:false,noHeader:false,margin:4,width:"100%",height:"200px",minWidth:150,minHeight:60,variable:null,dataSet:null,dsType:null,store:null,query:"",queryOptions:{ignoreCase:true},dojoObj:null,singleClickEdit:false,liveEditing:false,selectedItem:null,emptySelection:true,isRowSelected:false,selectionMode:"single",_selectionMode:"",addFormName:"",columns:null,selectFirstRow:false,caseSensitiveSort:true,sortingEnabled:true,classNames:"wmdojogrid GridListStyle",requiredLibs:["dojox.grid.DataGrid","dojox.grid.cells.dijit","dojo.data.ItemFileWriteStore","dojo.string","dojox.grid._CheckBoxSelector","dojox.grid._RadioSelector"],setLocalizationStructure:function(_67c){
this.localizationStructure=_67c;
for(var i=0;i<this.columns.length;i++){
var c=this.columns[i];
if(this.localizationStructure[c.field]){
c.title=this.localizationStructure[c.field];
}
}
if(!this._cupdating&&this.dojoObj){
this.renderDojoObj();
}
},init:function(){
this.setSelectionMode(this.selectionMode);
if(!this.columns){
this.columns=[];
}else{
if(this.localizationStructure){
this.setLocalizationStructure(this.localizationStructure);
}
}
for(var i=0;i<this.requiredLibs.length;i++){
dojo["require"](this.requiredLibs[i]);
}
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].id){
this.columns[i].field=this.columns[i].id;
delete this.columns[i].id;
}
}
this.inherited(arguments);
var _67d={name:"selectedItem",owner:this,json:this._selectionMode=="multiple"?"[]":"",type:this.variable?this.variable.type:"any"};
this.selectedItem=new wm.Variable(_67d);
this.updateSelectedItem(-1);
this.setSelectionMode(this.selectionMode);
if(!this.styles||!this.styles.fontSize){
dojo.addClass(this.domNode,"wmNoFontSize");
}
},setNoHeader:function(_67e){
this.noHeader=_67e;
dojo.toggleClass(this.domNode,"dojoGridNoHeader",_67e);
},postInit:function(){
this.inherited(arguments);
this.subscribe("window-resize",this,"resize");
if(this.noHeader){
this.setNoHeader(this.noHeader);
}
if(this.variable&&this.variable.getData()||this.columns&&this.columns.length){
this.renderDojoObj();
}
if(this._isDesignLoaded){
this.subscribe("deviceSizeRecalc",dojo.hitch(this,"deviceTypeChange"));
}
},dataSetToSelectedItem:function(){
this.selectedItem.dataSet="";
this.selectedItem.setLiveView((this.variable||0).liveView);
this.selectedItem.setType(this.variable&&this.variable.type?this.variable.type:"any");
},setSelectedRow:function(_67f,_680,_681){
if(!this.dataSet){
return;
}
if(!this.dojoObj&&!this._renderHiddenGrid){
this._renderHiddenGrid=true;
this.renderDojoObj();
this._renderHiddenGrid=false;
}
if(this._setRowTimeout){
window.clearTimeout(this._setRowTimeout);
delete this._setRowTimeout;
}
if(_680==undefined){
_680=true;
}
if(_680){
if(wm.isEmpty(this.getRow(_67f))){
this.scrollToRow(_67f);
wm.onidle(this,function(){
this.setSelectedRow(_67f);
if(_681){
_681();
}
});
}else{
if(this._selectionMode=="multiple"&&dojo.indexOf(this.getSelectedIndex(),_67f)!=-1){
return;
}
this.dojoObj.selection.select(_67f);
if(!this._cupdating){
this.onSelectionChange();
this.onSelect();
}
this.scrollToRow(_67f);
if(_681){
_681();
}
}
}else{
this.dojoObj.selection.setSelected(_67f,_680);
this.onSelectionChange();
this.onDeselect();
}
},scrollToRow:function(_682){
if(this.dojoObj&&(this.dojoObj.scroller.firstVisibleRow>_682||this.dojoObj.scroller.lastVisibleRow<_682)){
this.dojoObj.scrollToRow(_682);
}
},setSelectedItem:function(_683){
if(_683 instanceof wm.Variable){
_683=_683.getData();
}
if(!_683){
this.deselectAll();
return;
}
wm.forEachProperty(_683,function(_684,_685){
if(typeof _684=="object"){
delete _683[_685];
}
});
this.selectByQuery(_683);
},selectItemOnGrid:function(obj,_686){
if(!this.store){
return;
}
if(obj instanceof wm.Variable){
obj=obj.getData();
}
if(obj===undefined||obj===null){
obj={};
}
var _687=this.getDateFields();
if(!_686){
_686=this.primaryKeyFields||wm.data.getIncludeFields(this.variable.type);
}
if(_686.length==0){
var _688=wm.typeManager.getTypeSchema(this.variable.type);
for(var _689 in _688){
_686.push(_689);
}
}
var q={};
dojo.forEach(_686,function(f){
q[f]=obj[f];
if(dojo.indexOf(_687,f)!=-1){
q[f]=new Date(obj[f]);
}
});
var _68a=this;
var _68b=function(_68c,_68d){
if(_68c.length<1){
if(_68a.selectFirstRow){
_68a.setSelectedRow(0);
}else{
_68a.deselectAll();
}
return;
}
var idx=_68a.dojoObj.getItemIndex(_68c[0]);
if(idx==-1){
idx=_68a.variable.getItemIndexByPrimaryKey(obj,_686);
}
if(idx==-1&&this.selectFirstRow){
idx=0;
}
if(idx>=0){
if(this._setRowTimeout){
window.clearTimeout(this._setRowTimeout);
}
this._setRowTimeout=setTimeout(function(){
_68a.scrollToRow(idx);
wm.onidle(_68a,function(){
this._cupdating=true;
try{
this.setSelectedRow(idx);
}
catch(e){
}
this._cupdating=false;
});
},0);
}else{
_68a.deselectAll();
}
};
this.store.fetch({query:q,onComplete:_68b});
},deselectAll:function(){
var _68e=this.hasSelection();
if(this.dojoObj){
this.dojoObj.selection.clear();
}
this.updateSelectedItem(-1);
if(_68e){
this.onSelectionChange();
this.onDeselect();
}
},select:function(_68f,_690,_691){
this.setSelectedRow(_68f,_690,_691);
},selectionChange:function(){
var _692=this.dojoObj.selection.getSelected();
var _693=false;
if(!this._curSelectionObj||!wm.Array.equals(this._curSelectionObj,_692)){
_693=true;
}
if(_693){
this._selectedItemTimeStamp=new Date().getTime();
if(this._selectionMode=="multiple"){
this.updateAllSelectedItem();
}else{
if(!this._isDesignLoaded&&!this._handlingBack&&this.manageHistory){
app.addHistory({id:this.getRuntimeId(),options:{selectedRow:this._lastSelectedIndex},title:"SelectionChange"});
}
this.updateSelectedItem(this.getSelectedIndex());
}
if(!this.rendering&&!this._cupdating){
this.onSelectionChange();
if(_692&&_692.length){
this.onSelect();
}else{
this.onDeselect();
}
}
this._curSelectionObj=[];
for(var i=0;i<_692.length;i++){
this._curSelectionObj.push(_692[i]);
}
}
},resize:function(){
this.cancelEdit();
},cellEditted:function(_694,_695,_696){
if(_694&&typeof _694=="object"&&_694 instanceof Date===false&&this.dojoObj.edit.info.cell.widget.store){
_694=this.itemToJSONObject(this.dojoObj.edit.info.cell.widget.store,_694);
delete _694.wmDojoStoreId;
}
var _697;
if(this.dojoObj.edit.info.cell&&this.dojoObj.edit.info.cell.widget){
var _698=this.dojoObj.edit.info.cell.widget;
if(_698 instanceof dijit.form.ComboBox&&typeof _694=="object"){
if(wm.isEmpty(_694)&&_698.getValue("displayedValue")){
_697=true;
}
}else{
_697=_698.isValid&&!_698.isValid();
}
if(_697){
wm.onidle(this,function(){
if(this.selectedItem.getValue(_696) instanceof wm.Variable==false){
var col=dojo.filter(this.columns,function(_699){
return _699.field==_696;
})[0];
if(col){
this.setCellStatusIndicator(this.getCellNode(_69a,_696),col,"invalid");
}
}else{
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].field.indexOf(_696+".")==0){
this.setCellStatusIndicator(tthis.getCellNode(_69a,this.columns[i].field),this.columns[i],"invalid");
}
}
}
});
}
}
var _69b=this.getRowData(_695)._wmVariable;
if(_69b){
_69b=_69b[0];
}
if(_69b){
var _69c=_69b._allowLazyLoad;
_69b._allowLazyLoad=false;
var _69d=_69b.getValue(_696);
_69b._allowLazyLoad=_69c;
if(_69d instanceof wm.Variable){
_69d=_69d.getData();
}
if(typeof _69d=="object"&&typeof _694=="object"&&dojo.toJson(_69d)==dojo.toJson(_694)){
return;
}
if(_69d===_694){
return;
}
}
if(this.selectionMode!="none"){
var _69a=this.getSelectedIndex();
if(_69a!=_695){
this.setSelectedRow(_695,true);
}else{
this.updateSelectedItem(_69a);
}
var _69c=this.selectedItem._allowLazyLoad;
this.selectedItem._allowLazyLoad=false;
var _69d=this.selectedItem.getValue(_696);
this.selectedItem._allowLazyLoad=_69c;
if(_69d instanceof wm.Variable){
_69d=_69d.getData();
}
if(typeof _69d=="object"&&typeof _694=="object"&&dojo.toJson(_69d)==dojo.toJson(_694)){
return;
}
if(_69d===_694){
return;
}
this.selectedItem.setValue(_696,_694);
}
if(_696.indexOf(".")!=-1){
var _69e=_696.split(".");
var _69f=_69e.shift();
var obj=this.getCell(_695,_69f);
if(obj[_69e.join(".")]){
obj[_69e.join(".")][0]=_694;
}else{
obj[_69e.join(".")]=[_694];
}
}
if(_69b){
_69b.beginUpdate();
_69b.setValue(_696,_694);
_69b.endUpdate();
}
if(this.liveEditing&&!_697){
this.writeSelectedItem();
wm.onidle(this,function(){
if(this.selectedItem.getValue(_696) instanceof wm.Variable==false){
var col=dojo.filter(this.columns,function(_6a0){
return _6a0.field==_696;
})[0];
this.setCellStatusIndicator(this.getCellNode(_695,_696),col,"dirty");
}else{
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].field.indexOf(_696+".")==0){
this.setCellStatusIndicator(this.getCellNode(_695,this.columns[i].field),this.columns[i],"dirty");
}
}
}
});
}
this.onCellEdited(_694,_695,_696,_697);
},updateSelectedItem:function(_6a1){
this._lastSelectedIndex=_6a1;
if(_6a1==-1||this.getRowCount()==0){
this.selectedItem.clearData();
}else{
if(_6a1<this.getRowCount()){
var _6a2=this.getRowData(_6a1);
if(_6a2){
this.selectedItem.setDataSet(_6a2._wmVariable[0]);
}else{
this._storeFetch(dojo.hitch(this,function(_6a3){
this.selectedItem.setDataSet(_6a3[0]._wmVariable[0]);
}));
}
}else{
this.selectedItem.setDataSet(null);
}
}
this.setValue("emptySelection",!this.hasSelection());
this.setValue("isRowSelected",this.hasSelection());
},createNewLiveVariable:function(){
var lvar=new wm.LiveVariable({owner:this,operation:"update",inFlightBehavior:"executeAll",name:"liveVar",type:this.dataSet.type,liveSource:this.getDataSet().liveSource,autoUpdate:false,startUpdate:false});
this.connect(lvar,"onSuccess",this,"_onLiveEditSuccess");
this.connect(lvar,"onError",this,"_onLiveEditError");
this.connect(lvar,"onResult",this,"_onLiveEditResult");
return lvar;
},isEmptyLiveType:function(_6a4,_6a5){
var _6a6=wm.typeManager.getType(_6a4);
if(_6a6&&_6a6.liveService){
var _6a7=wm.typeManager.getPrimaryKey(_6a6);
if(_6a7&&_6a5&&(_6a5[_6a7]===undefined||_6a5[_6a7]===null||_6a5[_6a7]===0)){
return true;
}
}
return false;
},writeSelectedItem:function(){
var _6a8;
var _6a9=this.getSelectedIndex();
if(dojo.isArray(_6a9)){
if(_6a9.length==0){
return;
}
_6a9=_6a9[0];
}
var row=this.getRow(_6a9);
var _6aa=row._wmVariable.data._new?"insert":"update";
var _6ab=this.selectedItem.getData();
wm.forEachProperty(this.selectedItem._dataSchema,dojo.hitch(this,function(_6ac,_6ad){
if(wm.typeManager.isStructuredType(_6ac.type)&&_6ab[_6ad]===null&&this.selectedItem&&this.selectedItem.data&&this.selectedItem.data[_6ad]){
_6ab[_6ad]={};
}
}));
if(dojo.isArray(_6ab)){
_6ab=_6ab[0];
}
if(_6aa=="insert"){
var _6ae=this.selectedItem._dataSchema;
for(var _6af in _6ae){
if(_6ab[_6af]===undefined||_6ab[_6af]===null||this.isEmptyLiveType(_6ae[_6af].type,_6ab[_6af])){
if(_6ae[_6af].required){
console.warn("Can not write a '"+this.selectedItem.type+"' when required field '"+_6af+"' has no value");
return;
}
}
}
}
var _6ae=this.selectedItem._dataSchema;
for(var _6af in _6ae){
if(_6ab[_6af] instanceof Date){
_6ab[_6af]=_6ab[_6af].getTime();
}
}
if(_6aa==="insert"){
this.onLiveEditBeforeInsert(_6ab);
}else{
this.onLiveEditBeforeUpdate(_6ab);
}
if(!this.liveVariable){
this.liveVariable=this.createNewLiveVariable();
}
this.liveVariable.setSourceData(_6ab);
this.liveVariable.operation=_6aa;
var _6a8=this.liveVariable.update();
if(_6aa=="insert"){
this.handleInsertResult(_6a8,_6a9);
}else{
if(_6aa=="update"){
this.handleUpdateResult(_6a8,_6a9);
}
}
},onLiveEditBeforeInsert:function(_6b0){
},onLiveEditBeforeUpdate:function(_6b1){
},onLiveEditBeforeDelete:function(_6b2){
},_onLiveEditSuccess:function(_6b3){
this["onLiveEdit"+wm.capitalize(this.liveVariable.operation)+"Success"](this.liveVariable.getData());
},_onLiveEditError:function(_6b4){
this["onLiveEdit"+wm.capitalize(this.liveVariable.operation)+"Error"](_6b4);
},_onLiveEditResult:function(_6b5){
this["onLiveEdit"+wm.capitalize(this.liveVariable.operation)+"Result"](this.liveVariable.getData());
},onLiveEditInsertSuccess:function(_6b6){
},onLiveEditUpdateSuccess:function(_6b7){
},onLiveEditDeleteSuccess:function(_6b8){
},onLiveEditInsertResult:function(_6b9){
},onLiveEditUpdateResult:function(_6ba){
},onLiveEditDeleteResult:function(_6bb){
},onLiveEditInsertError:function(_6bc){
},onLiveEditUpdateError:function(_6bd){
},onLiveEditDeleteError:function(_6be){
},handleInsertResult:function(_6bf,_6c0){
_6bf.addCallback(dojo.hitch(this,function(_6c1){
var data=this.getRowData(_6c0);
delete data._wmVariable[0].data._new;
this.setUneditableFields(_6c0,_6c1);
this.updateSelectedItem(_6c0);
var _6c2=this.dojoObj.layout.cells[0].getNode(_6c0);
if(_6c2){
var _6c3=_6c2.parentNode;
}
if(_6c3){
var _6c4=dojo.query("td.dirty",_6c3).removeClass("dirty saveFailed").addClass("saved");
}
}));
_6bf.addErrback(dojo.hitch(this,function(_6c5){
console.error(_6c5);
}));
},setCellStatusIndicator:function(_6c6,_6c7,_6c8){
if(!_6c6||!_6c7){
return;
}
if(_6c6.clientWidth<25){
return;
}
dojo.removeClass(_6c6,"dirty saveFailed saved");
dojo.addClass(_6c6,_6c7.align+"Align "+_6c8);
if(_6c7.align=="right"){
}
},handleUpdateResult:function(_6c9,_6ca){
_6c9.addCallback(dojo.hitch(this,function(_6cb){
var data=this.getRowData(_6ca);
var _6cc=this.dojoObj.layout.cells[0].getNode(_6ca);
if(_6cc){
var _6cd=_6cc.parentNode;
}
if(_6cd){
dojo.query("td.dirty",_6cd).forEach(dojo.hitch(this,function(cell){
var col=this.columns[dojo.attr(cell,"idx")];
var _6ce=col.field;
var _6cf=this.getCell(_6ca,_6ce);
var _6d0=_6ce.indexOf(".")==-1?_6cb[_6ce]:wm.expression.getValue("${"+_6ce+"}",_6cb);
if(_6cf==_6d0){
this.setCellStatusIndicator(cell,col,"saved");
}
}));
}
}));
_6c9.addErrback(dojo.hitch(this,function(_6d1){
console.error(_6d1);
var _6d2=this.dojoObj.layout.cells[0].getNode(_6ca);
if(_6d2){
var _6d3=_6d2.parentNode;
}
if(_6d3){
dojo.query("td.dirty",_6d3).forEach(dojo.hitch(this,function(cell){
dojo.addClass(cell,"saveFailed");
}));
}
}));
},setUneditableFields:function(_6d4,data){
var _6d5=this.getRow(_6d4);
var type=wm.typeManager.getType(this.getDataSet().type);
var _6d6=this.columns;
for(var i=0;i<_6d6.length;i++){
var _6d7=type.fields[_6d6[i].field];
if(_6d7){
if(_6d7.exclude.length){
this.setCell(_6d4,_6d6[i].field,data[_6d6[i].field]);
_6d5[_6d6[i].field]=data[_6d6[i].field];
}else{
if(_6d5[_6d6[i].field]=="&nbsp;"){
_6d5[_6d6[i].field]="";
}
}
}
}
_6d5._wmVariable.beginUpdate();
_6d5._wmVariable.setData(_6d5);
_6d5._wmVariable.endUpdate();
},updateAllSelectedItem:function(){
if(!this.dojoObj){
return;
}
this.selectedItem.clearData();
var _6d8=this.dojoObj.selection.getSelected();
var _6d9=[];
dojo.forEach(_6d8,function(obj){
_6d9.push(this.itemToJSONObject(this.store,obj));
},this);
this.selectedItem._setArrayData(_6d9);
this.selectedItem.notify();
this.setValue("emptySelection",!this.hasSelection());
this.setValue("isRowSelected",this.hasSelection());
},getSelectedIndex:function(){
if(!this.dojoObj){
return -1;
}
if(this._selectionMode=="multiple"){
var _6da=this.dojoObj.selection.selected;
var _6db=[];
for(var row in _6da){
_6db.push(Number(row));
}
return _6db;
}else{
return this.dojoObj.selection.selectedIndex;
}
},getRowData:function(_6dc){
return this.dojoObj.getItem(_6dc);
},findRowIndexByFieldValue:function(_6dd,_6de){
var item;
for(var i=0;i<this.getRowCount();i++){
item=this.dojoObj.getItem(i);
if(this.store.getValue(item,_6dd)==_6de){
return this.dojoObj.getItemIndex(item);
}
}
return -1;
},getCell:function(_6df,_6e0){
var item=this.dojoObj.getItem(_6df);
var col;
var idx;
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].field==_6e0||this.columns[i].id==_6e0){
col=this.columns[i];
idx=i;
break;
}
}
if(col&&col.isCustomField){
if(col.expression){
return this.getExpressionValue(col.expression,_6df,this.getRow(_6df),true);
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
return dojo.hitch(this.owner,col.formatFunc)("",_6df,idx,col.field||col.id,{customStyles:[],customClasses:[]},this.getRow(_6df));
}
}
}
}
return undefined;
}else{
return this.dojoObj.store.getValue(item,_6e0);
}
},getCellNode:function(_6e1,_6e2){
var _6e3=this.dojoObj.layout.cells;
for(var i=0;i<_6e3.length;i++){
if(_6e3[i].field==_6e2){
return this.dojoObj.layout.cells[i].getNode(_6e1);
}
}
},editCell:function(_6e4,_6e5){
wm.onidle(this,function(){
var _6e6=this.dojoObj.layout.cells;
for(var i=0;i<_6e6.length;i++){
if(_6e6[i].field==_6e5){
this.dojoObj.edit.setEditCell(_6e6[i],_6e4);
this.dojoObj.focus.setFocusCell(_6e6[i],_6e4);
return;
}
}
});
},cancelEdit:function(){
if(this.dojoObj&&this.dojoObj.edit){
this.dojoObj.edit.cancel();
}
},applyEdit:function(){
if(this.dojoObj&&this.dojoObj.edit){
this.dojoObj.edit.apply();
}
},setCell:function(_6e7,_6e8,_6e9,_6ea){
if(_6e7<0){
console.error("setCell requires 0 or greater for row index");
return;
}
var item=this.dojoObj.getItem(_6e7);
this.dojoObj.store._setValueOrValues(item,_6e8,_6e9,!_6ea);
if(item._wmVariable&&item._wmVariable[0]){
item._wmVariable[0].beginUpdate();
item._wmVariable[0].setValue(_6e8,_6e9);
item._wmVariable[0].endUpdate();
}
if(this.getSelectedIndex()==_6e7){
this.updateSelectedItem(_6e7);
}
if(item._wmVariable&&item._wmVariable[0]){
item._wmVariable[0].beginUpdate();
item._wmVariable[0].setValue(_6e8,_6e9);
item._wmVariable[0].endUpdate();
}
if(this.getSelectedIndex()==_6e7){
this.updateSelectedItem(_6e7);
}
},deleteRow:function(_6eb){
var _6ec;
if(this.liveEditing){
_6ec=this.getRow(_6eb);
}
if(this.liveEditing&&(!_6ec._wmVariable||!_6ec._wmVariable.data._new)){
var _6ed=this.selectedItem._dataSchema;
for(var _6ee in _6ed){
if(_6ec[_6ee] instanceof Date){
_6ec[_6ee]=_6ec[_6ee].getTime();
}
}
var _6ef=this.liveVariable;
if(!_6ef){
_6ef=this.liveVariable=this.createNewLiveVariable();
}
_6ef.operation="delete";
this.onLiveEditBeforeDelete(_6ec);
_6ef.setSourceData(_6ec);
var _6f0=_6ef.update();
_6f0.addCallback(dojo.hitch(this,function(_6f1){
if(this.getSelectedIndex()==_6eb){
this.updateSelectedItem(-1);
}
var item=this.getRowData(_6eb);
this.dojoObj.store.deleteItem(item);
}));
_6f0.addErrback(dojo.hitch(this,function(_6f2){
console.error(_6f2);
app.toastError(_6f2.message);
}));
return;
}
this.updateSelectedItem(-1);
var item=this.getRowData(_6eb);
this.dojoObj.store.deleteItem(item);
if(this.dataSet&&this.dataSet.data&&this.dataSet.data._list){
var _6f3=dojo.indexOf(this.dataSet.data._list,item._wmVariable[0]);
if(_6f3!=-1){
this.dataSet.beginUpdate();
this.dataSet.removeItem(_6f3);
this.dataSet.endUpdate();
}
}
},addRow:function(_6f4,_6f5,_6f6){
var _6f7=null;
var _6f8,item;
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].fieldType&&this.columns[i].fieldType!="dojox.grid.cells.Bool"){
_6f7=this.columns[i];
break;
}
}
if(this.getRowCount()==0&&this.variable){
this.variable.beginUpdate();
this.variable.setData([_6f4]);
this.variable.endUpdate();
this.variable.getItem(0).data._new=true;
item=this.variable.getItem(0);
_6f8=0;
}else{
var data=dojo.clone(_6f4);
var v=new wm.Variable({type:this.dataSet.type});
v.setData(data);
_6f8=this.dataSet.getCount();
this.dataSet.beginUpdate();
this.dataSet.addItem(v);
this.dataSet.endUpdate();
item=this.dataSet.getItem(_6f8);
}
item.data._new=true;
var obj=item.getData();
var _6f9=this.getDateFields();
this.replaceDateFields(_6f9,obj);
obj._wmVariable=item;
this.store.newItem(obj);
var cell=this.dojoObj.layout.cells[0].getNode(_6f8);
if(!cell){
this.dojoObj.render();
}
if(_6f5||_6f5===undefined){
this.setSelectedRow(_6f8);
this.selectionChange();
if(this.liveEditing&&(_6f6||_6f6===undefined)){
this.writeSelectedItem();
}
wm.onidle(this,function(){
this.dojoObj.scrollToRow(_6f8);
if(_6f7){
this.editCell(_6f8,_6f7.field);
}
});
}
},addEmptyRow:function(_6fa){
var set=function(obj,_6fb,_6fc){
for(var _6fd=0;_6fd<_6fb.length;_6fd++){
if(_6fd+1<_6fb.length){
if(!obj[_6fb[_6fd]]){
obj[_6fb[_6fd]]={};
}
obj=obj[_6fb[_6fd]];
}else{
obj[_6fb[_6fd]]=_6fc;
}
}
};
var obj={};
var _6fe=this.deleteColumn||this.selectionMode=="checkbox"||this.selectionMode=="radio";
var _6ff=[];
for(var i=0;i<this.columns.length;i++){
var _700=this.columns[i];
var _701=_700.field||_700.id;
if(_701=="PHONE COLUMN"){
continue;
}
var _702=_701.split(".");
var _703=this.dataSet.type;
var type=wm.typeManager.getType(_703);
for(var _704=0;_704<_702.length;_704++){
if(type&&type.fields){
var _705=type.fields[_702[_704]];
if(_705){
_703=type.fields[_702[_704]].type;
type=wm.typeManager.getType(_703);
}else{
type="java.lang.String";
}
}
}
var _706=null;
switch(_703){
case "java.lang.Integer":
case "java.lang.Double":
case "java.lang.Float":
case "java.lang.Short":
_706=0;
if(_700.show){
_6fe=true;
}
break;
case "java.util.Date":
_706=new Date().getTime();
if(_700.show){
_6fe=true;
}
break;
case "java.lang.Boolean":
_706=false;
break;
default:
_706="";
_6ff.push(_700);
}
set(obj,_702,_706);
}
if(!_6fe&&_6ff.length){
var _700=_6ff[0];
var _701=_700.field||_700.id;
var _702=_701.split(".");
set(obj,_702,_706);
set(obj,_702,"&nbsp;");
}
this.addRow(obj,_6fa);
},getRowCount:function(){
if(!this.dojoObj&&this.dataSet){
return this.dataSet.getCount();
}else{
if(!this.dojoObj){
return 0;
}else{
return Math.max(this.dojoObj.rowCount,this.dojoObj._by_idx.length);
}
}
},hasSelection:function(){
var _707=this.getSelectedIndex();
if(dojo.isArray(_707)){
return Boolean(_707.length);
}else{
return Boolean(_707!=-1);
}
},getEmptySelection:function(){
return !this.hasSelection();
},getIsRowSelected:function(){
return !this.getEmptySelection();
},renderBounds:function(){
this.inherited(arguments);
this.resizeDijit();
},resizeDijit:function(){
if(this.dojoObj){
this.dojoObj.resize();
}
},addDojoProps:function(_708){
},renderDojoObj:function(){
if(this._cupdating){
return;
}
if(this.dojoObj!=null){
this.dojoObj.destroy();
this.dojoObj=null;
}
if(!this.variable&&(!this.columns||!this.columns.length)){
return;
}
if(this.isAncestorHidden()&&!this._renderHiddenGrid){
this._renderDojoObjSkipped=true;
return;
}
this._renderDojoObjSkipped=false;
this.rendering=true;
if(this._resetStore){
this.setDojoStore();
delete this._resetStore;
}
var _709=this.getStructure();
if(_709[0].length==0){
_709={};
}
var _70a={escapeHTMLInData:false,structure:_709,store:this.store,singleClickEdit:this.singleClickEdit,columnReordering:this.columnReordering,queryOptions:this.queryOptions,query:this.query||{},updateDelay:0};
this.addDojoProps(_70a);
this.dojoObj=new dojox.grid.DataGrid(_70a,dojo.create("div",{style:"width:100%;height:100%"},this.domNode));
this.dojoObj.canSort=dojo.hitch(this,"canSort");
if(this._disabled){
this.dojoObj.set("disabled",true);
}
this.connectDojoEvents();
this.setSelectionMode(this.selectionMode);
this.dojoRenderer();
if(this._lastSortFieldName&&this.resortOnDataUpdate){
this.setSortField(this._lastSortFieldName,this._lastSortAsc);
}
var _70b=this.selectedItem.getData();
var _70c=dojo.isArray(_70b);
if(_70c&&_70b.length||!_70c&&_70b||this.selectFirstRow){
this.selectItemOnGrid(this.selectedItem);
}
this.onRenderData();
var _70d=this;
setTimeout(function(){
_70d.rendering=false;
},0);
},canSort:function(){
return this.dojoObj&&!this.dojoObj.isLoading&&this.sortingEnabled;
},dojoRenderer:function(){
if(!this.dojoObj){
return;
}
var _70e=(this.noHeader&&(this.selectionMode=="checkbox"||this.selectionMode=="radio"));
if(_70e){
this.setNoHeader(false);
}
this.dojoObj.startup();
if(_70e){
wm.onidle(this,function(){
this.setNoHeader(true);
});
}
if(this.styles&&this.styles.fontSize){
this.dojoObj.domNode.style.fontSize=this.styles.fontSize;
}
this.dojoObj.updateDelay=1;
if(this._isDesignLoaded){
var self=this;
wm.job(this.getRuntimeId()+".renderBounds",1,function(){
self.renderBounds();
});
}
wm.onidle(this,"_postDojoRenderer");
},_postDojoRenderer:function(){
if(!this.dojoObj){
return;
}
var v=this.dojoObj.views.views[0];
if(v&&v.scrollboxNode.scrollHeight==v.scrollboxNode.clientHeight&&v._hasVScroll){
this.dojoObj.prerender();
}
},onRenderData:function(){
},_onShowParent:function(){
if(this._renderDojoObjSkipped){
wm.onidle(this,"renderDojoObj");
}
},setShowing:function(_70f){
var _710=this.showing;
this.inherited(arguments);
if(!_710&&_70f){
this._onShowParent();
}
},connectDojoEvents:function(){
dojo.connect(this.dojoObj,"onSelectionChanged",this,"selectionChange");
if(this.isDesignLoaded()){
dojo.connect(this.dojoObj,"onMoveColumn",this,"_onMoveColumn");
dojo.connect(this.dojoObj,"onResizeColumn",this,"_onResizeColumn");
dojo.connect(this.dojoObj.domNode,"oncontextmenu",this,"showContextMenu");
if(dojo.isFF){
dojo.connect(this.dojoObj,"onHeaderCellMouseDown",this,function(evt){
if(evt.button==2||evt.ctrlKey){
dojo.stopEvent(evt);
this.showContextMenu(evt);
}
});
}else{
dojo.connect(this.dojoObj,"onHeaderContextMenu",this,"showContextMenu");
}
dojo.connect(this.dojoObj,"onRowContextMenu",this,"showContextMenu");
dojo.connect(this.dojoObj,"onCellContextMenu",this,"showContextMenu");
}else{
dojo.connect(this.dojoObj,"onCellContextMenu",this,"_onCellRightClick");
dojo.connect(this.dojoObj,"onApplyCellEdit",this,"cellEditted");
dojo.connect(this.dojoObj,"onClick",this,"_onClick");
dojo.connect(this.dojoObj,"onCellDblClick",this,"_onCellDblClick");
dojo.connect(this.dojoObj,"sort",this,"_onSort");
}
dojo.connect(this.dojoObj,"onStyleRow",this,"styleRow");
},styleRow:function(_711){
try{
var _712=_711.index;
var _713=this.getRowData(_712);
if(_713){
var _714=_713._wmVariable[0].data._new;
if(_714&&this.liveEditing){
_711.customClasses+=" dojoxGridRow-inserting";
}
this.onStyleRow(_711,_713);
}
}
catch(e){
}
},onStyleRow:function(_715,_716){
},getDataSet:function(){
if(this.variable){
return this.variable;
}else{
if(this.$.binding&&this.$.binding.wires.dataSet){
return this.getValueById(this.$.binding.wires.dataSet.source);
}
}
},setDataSet:function(_717,_718){
if(this._typeChangedConnect){
this.disconnectEvent("typeChanged");
delete this._typeChangedConnect;
}
this.dataSet=this.variable=_717;
var _719=false;
if(this.variable){
this.dataSetToSelectedItem();
if(this._isDesignLoaded&&this.columns.length&&_717&&_717.type){
if(this._typeChangedConnect){
dojo.disconnect(this._typeChangedConnect);
}
this._typeChangedConnect=this.connect(_717,"typeChanged",this,function(){
wm.job(this.getRuntimeId()+".typeChanged",50,this,function(){
if(!this.isDestroyed){
this.updateColumnData();
this.setDojoStore();
this.renderDojoObj();
}
});
});
this.updateColumnData();
_719=true;
}
}
if(this._isDesignLoaded&&!this._loading&&!_719){
this.setColumnData();
}
this._resetStore=true;
if(_717&&_717 instanceof wm.Variable){
this.selectedItem.setType(_717.type);
}
if(this.allLibsLoaded()){
this.renderDojoObj();
}else{
var _71a=this;
dojo.addOnLoad(function(){
_71a.renderDojoObj();
});
}
},allLibsLoaded:function(){
for(var i=0;i<this.requiredLibs.length;i++){
if(!dojo.getObject(this.requiredLibs[i])){
return false;
}
}
return true;
},setSortIndex:function(_71b,_71c){
this.dojoObj.setSortIndex(_71b,_71c);
},setSortField:function(_71d,_71e){
var _71f=this.dojoObj.layout.cells;
for(var i=0;i<_71f.length;i++){
if(_71f[i].field==_71d){
this.dojoObj.setSortIndex(_71f[i].index,_71e);
}
}
},customSort:function(a,b){
return "";
},setDojoStore:function(){
if(!this.variable){
this.store=null;
this.dsType=null;
return;
}
var _720={"items":[]};
var _721=this.variable.getData()||[];
if(!dojo.isArray(_721)&&!wm.isEmpty(_721)){
_721=[_721];
}
if(this.customSort!=this.constructor.prototype.customSort&&dojo.isFunction(this.customSort)){
_721=_721.sort(this.customSort);
}
var _722=this.getDateFields();
dojo.forEach(_721,dojo.hitch(this,"replaceDateFields",_722));
if(_721){
for(var i=0;i<_721.length;i++){
_721[i]._wmVariable=this.variable.getItem(i);
}
}
_720.items=_721;
this.store=new dojo.data.ItemFileWriteStore({data:_720});
if(!this.caseSensitiveSort){
this.makeSortingInsensitive();
}
},replaceDateFields:function(_723,obj){
var _724={};
dojo.forEach(_723,function(f){
if(obj[f]){
_724[f]=new Date(obj[f]);
}
});
obj=dojo.mixin({},obj,_724);
},makeSortingInsensitive:function(){
this.store.comparatorMap={};
dojo.forEach(this.columns,function(col){
if(col.displayType=="Text"||col.displayType=="String"){
this.store.comparatorMap[col.field]=dojo.hitch(this,"sortNoCase");
}
},this);
},sortNoCase:function(a,b){
var a=String(a).toLowerCase();
var b=String(b).toLowerCase();
if(a>b){
return 1;
}
if(a<b){
return -1;
}
return 0;
},setDisabled:function(_725){
this.inherited(arguments);
if(this.dojoObj){
this.dojoObj.set("disabled",this._disabled);
}
},setQuery:function(q){
this.query=q;
if(this.dojoObj){
this.dojoObj.setQuery(q);
}
},selectByQuery:function(_726){
if(!this.dojoObj||!this.dataSet){
return;
}
if(!_726){
this.deselectAll();
return;
}
var _727=this.dataSet.query(_726);
this._storeFetch(dojo.hitch(this,function(_728){
this.deselectAll();
for(var i=0;i<_728.length;i++){
if(dojo.indexOf(_727.data._list,_728[i]._wmVariable[0])!=-1){
this.dojoObj.selection.addToSelection(i);
if(this._selectionMode=="single"){
break;
}
}
}
}));
},_storeFetch:function(_729){
this.dojoObj.store.fetch({sort:this.dojoObj.getSortProps(),query:this.dojoObj.query,queryOptions:this.dojoObj.queryOptions,onComplete:_729});
},getStructure:function(){
var _72a=[];
var _72b=this._isDesignLoaded?studio.currentDeviceType=="phone":wm.device=="phone";
var _72c=_72b||(this._isDesignLoaded?studio.currentDeviceType=="tablet":wm.device=="tablet");
if(this.deleteColumn){
_72a.push({hidden:false,name:"-",width:"20px","get":dojo.hitch(this,"getExpressionValue","'<div class=\\'wmDeleteColumn\\'></div>'"),field:"_deleteColumn"});
}
var _72d=(this._isDesignLoaded||window["studio"]&&this.isOwnedBy(studio.page));
var _72e=false;
var _72f=_72d?studio.currentDeviceType=="phone":wm.device=="phone";
var _730=_72d?studio.currentDeviceType=="tablet":wm.device=="tablet";
var _731=true;
if(_72f||_730){
for(var i=0;i<this.columns.length;i++){
var c=this.columns[i];
if(c.mobileColumn){
_72e=true;
}
if(c.show){
_731=false;
}
}
}
if(_72e&&(_731||studio.currentDeviceType=="phone"||_72d&&!this.owner._loadingPage&&wm.List.prototype.desktopWidthExcedesBounds.call(this))){
}else{
_72e=false;
}
var _732=0;
dojo.forEach(this.columns,function(col){
var show=_72e&&col.mobileColumn||!_72e&&col.show;
if(show&&col.width.indexOf("%")!=-1){
_732+=parseInt(col.width);
}
});
dojo.forEach(this.columns,function(col){
if(!_72e&&col.field=="PHONE COLUMN"&&!col.show){
return;
}
var _733=col.options||col.editorProps&&col.editorProps.options;
var show=_72e&&col.mobileColumn||!_72e&&col.show;
var _734=col.width;
if(show&&_734.indexOf("%")!=-1){
_734=Math.floor((100*parseInt(_734)/_732))+"%";
}
var obj={hidden:!show,field:col.field,constraint:col.constraints,name:col.title?col.title:"-",width:_734,fieldType:col.fieldType=="dojox.grid.cells._Widget"&&col.editorProps&&col.editorProps.regExp?"dojox.grid.cells.ValidationTextBox":col.fieldType,widgetProps:col.editorProps,options:typeof _733=="string"?_733.split(/\s*,\s*/):_733,editable:show&&(col.editable||col.fieldType),expression:col.expression,displayType:col.displayType};
if(obj.widgetProps){
obj.widgetProps=dojo.mixin({owner:this},obj.widgetProps);
if(obj.fieldType=="dojox.grid.cells.ComboBox"){
obj.fieldType="wm.grid.cells.ComboBox";
obj.widgetProps.searchAttr=obj.widgetProps.displayField;
}
}
if(obj.fieldType=="dojox.grid.cells.DateTextBox"){
obj.fieldType="wm.grid.cells.DateTextBox";
}
if(obj.fieldType=="wm.grid.cells.DateTextBox"){
if(!obj.widgetProps){
obj.widgetProps={owner:this};
}
}
if(col.editorProps&&col.editorProps.selectDataSet&&col.fieldType=="dojox.grid.cells.ComboBox"){
var _735=this.owner[col.editorProps.selectDataSet]||this.owner.getValueById(col.editorProps.selectDataSet);
if(_735){
if(!_735.isEmpty()){
obj.options=wm.grid.cells.ComboBox.prototype.cleansComboBoxOptions(_735);
}
if(this["_connectOnSetData."+col.field]){
dojo.disconnect(this["_connectOnSetData."+col.field]);
}
this["_connectOnSetData."+col.field]=this.connect(_735,"onSetData",dojo.hitch(this,"updateEditorDataSet",_735,col.field));
}
}
if(col.align&&col.align!=""){
obj.styles="text-align:"+col.align+";";
}
if(col.formatFunc&&col.formatFunc!=""||col.backgroundColor||col.textColor||col.cssClass){
switch(col.formatFunc){
case "wm_date_formatter":
case "Date (WaveMaker)":
obj.formatter=dojo.hitch(this,"dateFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_localdate_formatter":
case "Local Date (WaveMaker)":
obj.formatter=dojo.hitch(this,"localDateFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_time_formatter":
case "Time (WaveMaker)":
obj.formatter=dojo.hitch(this,"timeFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_number_formatter":
case "Number (WaveMaker)":
obj.formatter=dojo.hitch(this,"numberFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_array_formatter":
obj.formatter=dojo.hitch(this,"arrayFormatter",col.field,col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_currency_formatter":
case "Currency (WaveMaker)":
obj.formatter=dojo.hitch(this,"currencyFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_image_formatter":
case "Image (WaveMaker)":
obj.formatter=dojo.hitch(this,"imageFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_link_formatter":
case "Link (WaveMaker)":
obj.formatter=dojo.hitch(this,"linkFormatter",col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
case "wm_button_formatter":
obj.formatter=dojo.hitch(this,"buttonFormatter",col.field,col.formatProps||{},col.backgroundColor,col.textColor,col.cssClass);
break;
default:
try{
obj.formatter=dojo.hitch(this,"customFormatter",col.formatFunc,col.backgroundColor,col.textColor,col.cssClass);
}
catch(e){
}
break;
}
}
if(obj.fieldType&&obj.fieldType!=""){
obj.type=dojo.getObject(obj.fieldType);
}
if(obj.expression&&obj.expression!=""&&!obj.get){
obj.get=dojo.hitch(this,"getExpressionValue",obj.expression);
}else{
if(obj.field&&obj.field.indexOf(".")!=-1&&!obj.get){
obj.get=dojo.hitch(this,"getExpressionValue","${"+obj.field+"}");
}
}
_72a.push(obj);
},this);
_72a=[_72a];
if(this.selectionMode=="checkbox"){
_72a.unshift({type:"dojox.grid._CheckBoxSelector",width:_72c?"40px":"20px"});
}else{
if(this.selectionMode=="radio"){
_72a.unshift({type:"dojox.grid._RadioSelector",width:_72c?"40px":"20px"});
}
}
return _72a;
},updateEditorDataSet:function(_736,_737){
var _738=this.dojoObj.layout.cells;
if(_738){
for(var i=0;i<_738.length;i++){
if(_738[i].field===_737){
_738[i].options=wm.grid.cells.ComboBox.prototype.cleansComboBoxOptions(_736);
if(_738[i].widget){
_738[i].widget.set("store",wm.grid.cells.ComboBox.prototype.generateStore(_738[i].options,_738[i].widgetProps.displayField));
}
break;
}
}
}
},getColumnIndex:function(_739){
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].field==_739){
return i;
}
}
return -1;
},getColumn:function(_73a){
var _73b=this.getColumnIndex(_73a);
if(_73b!=-1){
return this.columns[_73b];
}
},setColumns:function(_73c){
this.columns=_73c;
this.renderDojoObj();
},setColumnShowing:function(_73d,_73e,_73f){
var _740=this.getColumnIndex(_73d);
if(_740!=-1&&this.columns[_740].show!=_73e){
this.columns[_740].show=_73e;
if(!_73f){
this.renderDojoObj();
}
}
},getColumnShowing:function(_741,_742,_743){
var _744=this.getColumnIndex(_741);
if(_744!=-1){
return this.columns[_744].show;
}
},setColumnWidth:function(_745,_746,_747){
var _748=this.getColumnIndex(_745);
if(_748!=-1&&this.columns[_748].width!=_746){
this.columns[_748].width=_746;
if(!_747){
this.renderDojoObj();
}
}
},setColumnComboBoxOptions:function(_749,_74a){
for(var i=0;i<this.columns.length;i++){
if(this.columns[i].field==_749){
this.columns[i].options=_74a;
this.columns[i].fieldType="dojox.grid.cells.ComboBox";
this.renderDojoObj();
break;
}
}
},setColumnData:function(){
if(!this.variable||(this.variable.type==this.dsType&&this.columns.length>0)){
return;
}
this.dsType=this.variable.type;
this.columns=[];
var _74b=this.getViewFields();
var _74c=Math.round(this.bounds.w/80);
dojo.forEach(_74b,function(f,i){
var _74d="left";
var _74e="100%";
var _74f="";
if(f.displayType=="Number"){
_74d="right";
_74e="80px";
}else{
if(f.displayType=="Date"){
_74e="80px";
_74f="wm_date_formatter";
}
}
this.columns.push({show:i<_74c,field:f.dataIndex,title:f.caption,width:_74e,displayType:f.displayType,align:_74d,formatFunc:_74f});
},this);
if(this._isDesignLoaded){
this.regenerateMobileColumn(this.columns);
}
},updateColumnData:function(){
var _750={dataValue:{type:this.variable.type}};
var _751=this.getViewFields()||_750;
var w=this.width=="100%"?this.parent.bounds.w:this.parent.bounds.w;
var _752=Math.round(w/80);
dojo.forEach(_751,function(f,i){
if(dojo.some(this.columns,function(item){
return item.field==f.dataIndex;
})){
return;
}
var _753=wm.typeManager.getTypeSchema(this.variable.type)||_750;
if(wm.typeManager.isPropInList(_753,f.dataIndex)){
return;
}
var _754="left";
var _755="100%";
var _756="";
if(f.displayType=="Number"){
_754="right";
_755="80px";
}else{
if(f.displayType=="Date"){
_755="80px";
_756="wm_date_formatter";
}
}
this.columns.push({show:false,field:f.dataIndex,title:wm.capitalize(f.dataIndex),width:_755,displayType:f.displayType,align:_754,formatFunc:_756});
},this);
var _757=[];
var _758=false;
dojo.forEach(this.columns,dojo.hitch(this,function(col){
if(col.mobileColumn||col.field=="PHONE COLUMN"){
_758=true;
}
if(col.isCustomField||col.field=="PHONE COLUMN"){
_757.push(col);
return;
}
if(dojo.some(_751,dojo.hitch(this,function(_759){
return _759.dataIndex==col.field;
}))){
_757.push(col);
return;
}
return;
}));
if(!_758){
_757.push({mobileColumn:true,align:"left",field:"PHONE COLUMN",show:false,title:"-",width:"100%",expression:"'<div class=\"MobileRowTitle\">"+_757[0].title+": ' + ${"+_757[0].field+"} + '</div>'"});
}
if(dojo.every(_757,function(col){
return !col.show;
})){
var _752=Math.max(1,Math.round(this.bounds.w/80));
dojo.forEach(_757,function(col,i){
if(i<_752&&col.field!="PHONE COLUMN"){
col.show=true;
}
});
}
this.columns=_757;
if(this._isDesignLoaded){
this.regenerateMobileColumn(this.columns);
}
},getDateFields:function(){
var _75a=[];
dojo.forEach(this.columns,function(col){
if(col.displayType=="Date"){
_75a.push(col.field);
}
});
return _75a;
},setSelectionMode:function(_75b){
this.selectionMode=_75b;
if(_75b=="checkbox"){
this._selectionMode="multiple";
if(this.dojoObj){
this.dojoObj.selection.setMode("multiple");
}
}else{
if(_75b=="radio"){
this._selectionMode="single";
if(this.dojoObj){
this.dojoObj.selection.setMode("single");
}
}else{
if(_75b=="extended"){
this._selectionMode="multiple";
if(this.dojoObj){
this.dojoObj.selection.setMode(_75b);
}
}else{
this._selectionMode=_75b;
if(this.dojoObj){
this.dojoObj.selection.setMode(_75b);
}
}
}
}
},getViewFields:function(){
var _75c=[];
if(this.variable instanceof wm.LiveVariable){
_75c=this.variable.getViewFields();
}else{
if(this.variable.name&&this.variable.owner instanceof wm.LiveVariable){
_75c=this.variable.owner.getViewFields();
}else{
if(this.variable instanceof wm.Variable&&wm.typeManager.getType(this.variable.type)&&wm.typeManager.getType(this.variable.type).liveService){
_75c=wm.getDefaultView(this.variable.type)||[];
}else{
_75c=wm.typeManager.getFieldList(this.variable._dataSchema,"",3);
}
}
}
return _75c;
},setDeleteColumn:function(_75d){
this.deleteColumn=_75d;
this.renderDojoObj();
},_onGridEvent:function(evt){
var _75e={};
if(!evt.grid){
if(dojo.IEGridEvent){
evt.target=dojo.IEGridEvent.target;
evt.grid=dojo.IEGridEvent.grid;
evt.cell=dojo.IEGridEvent.cell;
evt.cellIndex=dojo.IEGridEvent.cellIndex;
evt.rowIndex=dojo.IEGridEvent.rowIndex;
evt.rowNode=dojo.IEGridEvent.rowNode;
evt.sourceView=dojo.IEGridEvent.sourceView;
}else{
return {};
}
}
_75e.cellNode=evt.cellNode;
_75e.rowNode=evt.rowNode;
_75e.rowId=evt.rowIndex;
_75e.selectedItem=this.selectedItem;
if(evt.cell){
_75e.fieldId=evt.cell.field;
}
return _75e;
},_onSort:function(){
var _75f=this.selectedItem.getData();
if(_75f){
this.selectItemOnGrid(this.selectedItem);
}
var _760=this.dojoObj.structure[0];
var _761=_760[Math.abs(this.dojoObj.sortInfo)-1].field;
this.onSort(_761);
this._lastSortFieldName=_761;
this._lastSortAsc=this.dojoObj.sortInfo>0;
},onSort:function(_762){
},_onClick:function(evt){
if(evt.target&&dojo.hasClass(evt.target,"dojoxGridScrollbox")){
this.applyEdit();
return;
}
var _763=this._onGridEvent(evt);
if(!_763.rowId&&_763.rowId!=0){
return;
}
if(_763.rowId==-1){
this.onHeaderClick(evt,_763.selectedItem,_763.rowId,_763.fieldId,_763.rowNode,_763.cellNode);
}else{
if(_763.fieldId=="_deleteColumn"){
var _764=this.getRow(_763.rowId);
if(this.deleteConfirm){
app.confirm(this.deleteConfirm,false,dojo.hitch(this,function(){
this.deleteRow(_763.rowId);
this.onRowDeleted(_763.rowId,_764);
}));
}else{
this.deleteRow(_763.rowId);
this.onRowDeleted(_763.rowId,_764);
}
}else{
this.onClick(evt,_763.selectedItem,_763.rowId,_763.fieldId,_763.rowNode,_763.cellNode);
}
}
},_onCellDblClick:function(evt){
var _765=this._onGridEvent(evt);
this.onCellDblClick(evt,_765.selectedItem,_765.rowId,_765.fieldId,_765.rowNode,_765.cellNode);
},_onCellRightClick:function(evt){
var _766=this._onGridEvent(evt);
this.onCellRightClick(evt,_766.selectedItem,_766.rowId,_766.fieldId,_766.rowNode,_766.cellNode);
},onRowDeleted:function(_767,_768){
},onClick:function(evt,_769,_76a,_76b,_76c,_76d){
},onCellDblClick:function(evt,_76e,_76f,_770,_771,_772){
},onCellRightClick:function(evt,_773,_774,_775,_776,_777){
},onCellEdited:function(_778,_779,_77a,_77b){
},onHeaderClick:function(evt,_77c,_77d,_77e,_77f,_780){
},handleBack:function(_781){
this._handlingBack=true;
try{
var _782=_781.selectedRow;
if(_782==-1){
this.deselectAll();
}else{
this.select(_782);
}
}
catch(e){
}
delete this._handlingBack;
return true;
},onSelectionChange:function(){
},onSelect:function(){
},onDeselect:function(){
},addColumnToCSV:function(_783,_784,_785){
if(dojo.isString(_784)){
_784=_784.replace(/\"/g,"\\\"");
}
_783.push("\""+_784+"\"");
_783.push(",");
},addBreakToCSV:function(_786){
_786.pop();
_786.push("\n");
},showCSVData:function(_787){
app.echoFile(this.toCSV(_787),"text/csv",this.name+".csv");
},toHtml:function(){
if(this._renderDojoObjSkipped){
this._renderHiddenGrid=true;
this.renderDojoObj();
this._renderHiddenGrid=false;
}
var _788=this.toHtmlStyles();
var html="<table "+_788+" border='0' cellspacing='0' cellpadding='0' class='wmdojogrid'><thead><tr>";
dojo.forEach(this.columns,function(col,idx){
if(!col.show){
return;
}
html+="<th style='"+(col.width.match(/px/)?col.width:"")+"'>"+col.title+"</th>";
},this);
html+="</tr></thead><tbody>";
var _789=this.variable.getData();
dojo.forEach(_789,function(obj,_78a){
dojo.forEach(this.columns,function(col,idx){
if(!col.show){
return;
}
try{
var _78b=obj[col.field||col.id];
if(!_78b&&!col.isCustomField){
var _78b=obj;
var _78c=col.field||col.id;
while(_78c.indexOf(".")!=-1){
var _78d=_78c.indexOf(".");
_78b=_78b[_78c.substring(0,_78d)];
_78c=_78c.substring(_78d+1);
}
_78b=_78b[_78c];
}
if(col.expression){
_78b=this.getExpressionValue(col.expression,idx,obj,true);
}
if(col.formatFunc){
switch(col.formatFunc){
case "wm_date_formatter":
case "Date (WaveMaker)":
_78b=this.dateFormatter(col.formatProps||{},"","","",_78b,idx);
break;
case "wm_localdate_formatter":
case "Local Date (WaveMaker)":
_78b=this.localDateFormatter(col.formatProps||{},"","","",_78b,idx);
break;
case "wm_time_formatter":
case "Time (WaveMaker)":
_78b=this.timeFormatter(col.formatProps||{},"","","",_78b,idx);
break;
case "wm_number_formatter":
case "Number (WaveMaker)":
_78b=this.numberFormatter(col.formatProps||{},"","","",_78b,idx);
break;
case "wm_array_formatter":
_78b=this.arrayFormatter(col.field,col.formatProps||{},"","","",_78b,idx);
break;
case "wm_currency_formatter":
case "Currency (WaveMaker)":
_78b=this.currencyFormatter(col.formatProps||{},"","","",_78b,idx);
break;
case "wm_image_formatter":
case "Image (WaveMaker)":
_78b=this.imageFormatter(col.formatProps||{},"","","",_78b,idx);
break;
case "wm_link_formatter":
case "Link (WaveMaker)":
break;
default:
if(!this.isDesignLoaded()){
_78b=dojo.hitch(this.owner,col.formatFunc)(_78b,_78a,idx,col.field||col.id,{customStyles:[],customClasses:[]},obj);
}
break;
}
}
}
catch(e){
_78b="";
}
html+="<td>"+_78b+"</td>";
},this);
html+="</tr>";
},this);
return html+="</tbody></table>";
},toCSV:function(_78e){
if(this._renderDojoObjSkipped){
this._renderHiddenGrid=true;
this.renderDojoObj();
this._renderHiddenGrid=false;
}
var _78f=[];
dojo.forEach(this.columns,function(col,idx){
if(!col.show&&!_78e||col.field=="PHONE COLUMN"){
return;
}
this.addColumnToCSV(_78f,col.title,col.formatFunc);
},this);
if(_78f.length==0){
return "CSV Data cannot be extracted for this Grid.";
}
this.addBreakToCSV(_78f);
var _790=this.variable.getData();
dojo.forEach(_790,function(obj,_791){
dojo.forEach(this.columns,function(col,idx){
if(!col.show&&!_78e||col.field=="PHONE COLUMN"){
return;
}
try{
var _792=obj[col.field];
if(!_792){
var _792=obj;
var _793=col.field;
while(_793.indexOf(".")!=-1){
var _794=_793.indexOf(".");
_792=_792[_793.substring(0,_794)];
_793=_793.substring(_794+1);
}
_792=_792[_793];
}
if(col.expression){
_792=this.getExpressionValue(col.expression,idx,obj,true);
}
if(col.formatFunc){
if(col.formatFunc){
switch(col.formatFunc){
case "wm_date_formatter":
case "Date (WaveMaker)":
_792=this.dateFormatter(col.formatProps||{},"","","",_792,idx);
break;
case "wm_localdate_formatter":
case "Local Date (WaveMaker)":
_792=this.localDateFormatter(col.formatProps||{},"","","",_792,idx);
break;
case "wm_time_formatter":
case "Time (WaveMaker)":
_792=this.timeFormatter(col.formatProps||{},"","","",_792,idx);
break;
case "wm_number_formatter":
case "Number (WaveMaker)":
_792=this.numberFormatter(col.formatProps||{},"","","",_792,idx);
break;
case "wm_array_formatter":
_792=this.arrayFormatter(col.field,col.formatProps||{},"","","",_792,idx);
break;
case "wm_currency_formatter":
case "Currency (WaveMaker)":
_792=this.currencyFormatter(col.formatProps||{},"","","",_792,idx);
break;
case "wm_image_formatter":
case "Image (WaveMaker)":
_792=this.imageFormatter(col.formatProps||{},"","","",_792,idx);
break;
case "wm_link_formatter":
case "Link (WaveMaker)":
break;
default:
if(!this.isDesignLoaded()){
_792=dojo.hitch(this.owner,col.formatFunc)(_792,_791,idx,col.field||col.id,{customStyles:[],customClasses:[]},obj);
}
break;
}
}
}
}
catch(e){
_792="";
}
this.addColumnToCSV(_78f,_792);
},this);
this.addBreakToCSV(_78f);
},this);
return _78f.join("");
},getExpressionValue:function(exp,idx,_795,_796){
var _797="..";
if(!_795){
return _797;
}
var json=_795;
if(typeof _795=="object"&&_795!==null&&_795._0!==undefined){
json=this.itemToJSONObject(this.store,_795);
}
if(!json){
return _797;
}
if(this._isDesignLoaded&&studio.currentDeviceType!="desktop"){
exp=exp.replace(/\$\{wm\.rowId\}/g,String(idx));
exp=exp.replace(/\$\{this\}/g,dojo.toJson(json));
exp=exp.replace(/\$\{wm\.runtimeId\}/g,this.getRuntimeId()).replace(/wm\.List\.prototype\./g,"app.getValueById('"+this.getRuntimeId()+"').");
}
try{
_797=wm.expression.getValue(exp,json,this.owner);
}
catch(e){
}
return _797;
},dateFormatter:function(_798,_799,_79a,_79b,_79c,_79d,_79e){
if(this instanceof wm.DojoGrid){
this.handleColorFuncs(_79e,_799,_79a,_79b,_79d);
}
if(!_79c){
return _79c;
}else{
if(typeof _79c=="number"||_79c instanceof Date){
_79c=new Date(_79c);
}else{
if(_79c instanceof Date==false){
return _79c;
}
}
}
var _79f=_798.dateType||"date";
if(!_798.useLocalTime){
var _7a0=_79f=="date"?360:0;
_79c.setHours(0,60*_79c.getHours()+_79c.getMinutes()+wm.timezoneOffset*60+_7a0);
}
var _7a1={fullYear:true,selector:_79f,formatLength:_798.formatLength||"short",locale:dojo.locale,datePattern:_798.datePattern,timePattern:_798.timePattern};
return dojo.date.locale.format(_79c,_7a1);
},localDateFormatter:function(_7a2,_7a3,_7a4,_7a5,_7a6,_7a7,_7a8){
if(this instanceof wm.DojoGrid){
this.handleColorFuncs(_7a8,_7a3,_7a4,_7a5,_7a7);
}
if(!_7a6){
return _7a6;
}else{
if(typeof _7a6=="number"||_7a6 instanceof Date){
_7a6=new Date(_7a6);
}else{
if(_7a6 instanceof Date==false){
return _7a6;
}else{
if(typeof inDatum=="number"){
inDatum=new Date(inDatum);
}else{
if(inDatum instanceof Date==false){
return inDatum;
}
}
}
}
}
var _7a9={selector:"date",formatLength:"short",locale:dojo.locale};
return dojo.date.locale.format(_7a6,_7a9);
},timeFormatter:function(_7aa,_7ab,_7ac,_7ad,_7ae,_7af,_7b0){
if(this instanceof wm.DojoGrid){
this.handleColorFuncs(_7b0,_7ab,_7ac,_7ad,_7af);
}
if(!_7ae){
return _7ae;
}else{
if(typeof _7ae=="number"||_7ae instanceof Date){
_7ae=new Date(_7ae);
}else{
if(_7ae instanceof Date==false){
return _7ae;
}
}
}
_7ae.setHours(_7ae.getHours()+wm.timezoneOffset,0,0);
var _7b1={selector:"time",formatLength:"short",locale:dojo.locale};
return dojo.date.locale.format(_7ae,_7b1);
},numberFormatter:function(_7b2,_7b3,_7b4,_7b5,_7b6,_7b7,_7b8){
if(this instanceof wm.DojoGrid){
this.handleColorFuncs(_7b8,_7b3,_7b4,_7b5,_7b7);
}
var _7b9={places:_7b2.dijits||0,round:_7b2.round?0:-1,type:_7b2.numberType};
return dojo.number.format(_7b6,_7b9);
},currencyFormatter:function(_7ba,_7bb,_7bc,_7bd,_7be,_7bf,_7c0){
var _7c1=false;
if(this instanceof wm.DojoGrid){
this.handleColorFuncs(_7c0,_7bb,_7bc,_7bd,_7bf);
_7c1=this._isDesignLoaded;
}
return dojo.currency.format(_7be,{currency:_7ba.currency||(_7c1?studio.application.currencyLocale:app.currencyLocale)||"USD",places:_7ba.dijits==undefined?2:_7ba.dijits,round:_7ba.round?0:-1});
},imageFormatter:function(_7c2,_7c3,_7c4,_7c5,_7c6,_7c7,_7c8){
if(this instanceof wm.DojoGrid){
this.handleColorFuncs(_7c8,_7c3,_7c4,_7c5,_7c7);
}
if(_7c6&&_7c6!=""){
var _7c9=_7c2.width?" width=\""+_7c2.width+"px\"":"";
var _7ca=_7c2.height?" height=\""+_7c2.height+"px\"":"";
if(_7c2.prefix){
if(_7c2.prefix.match(/\/$/)&&_7c6.indexOf("/")==0){
_7c6=_7c6.substring(1);
}
_7c6=_7c2.prefix+_7c6;
}
if(_7c2.postfix){
_7c6=_7c6+_7c2.postfix;
}
return "<img "+_7c9+_7ca+" src=\""+_7c6+"\">";
}
return _7c6;
},buttonFormatter:function(_7cb,_7cc,_7cd,_7ce,_7cf,_7d0,_7d1,_7d2){
this.handleColorFuncs(_7d2,_7cd,_7ce,_7cf,_7d1);
if(_7d0!==null&&_7d0!==undefined&&_7d0!==""){
var _7d3=_7cc.buttonclass?" class=\""+_7cc.buttonclass+"\" ":" class=\"wmbutton\" ";
var _7d4="onclick='app.getValueById(\""+this.getRuntimeId()+"\").gridButtonClicked(event,\""+_7cb+"\","+_7d1+")' ";
return "<button "+_7d4+_7cc.buttonclick+_7d3+">"+_7d0+"</button>";
}
return _7d0;
},gridButtonClicked:function(_7d5,_7d6,_7d7){
_7d5=_7d5||window.event;
dojo.stopEvent(_7d5);
this.applyEdit();
var _7d8=this.getRow(_7d7);
this.onGridButtonClick(_7d6,_7d8,_7d7);
},onGridButtonClick:function(_7d9,_7da,_7db){
},linkFormatter:function(_7dc,_7dd,_7de,_7df,_7e0,_7e1,_7e2){
this.handleColorFuncs(_7e2,_7dd,_7de,_7df,_7e1);
if(_7e0&&_7e0!=""){
var _7e3=String(_7e0);
var _7e4=String(_7e0);
if(_7dc.prefix){
_7e4=_7dc.prefix+_7e4;
}
if(_7dc.postfix){
_7e4=_7e4+_7dc.postfix;
}
var _7e5=_7dc.target||"_NewWindow";
if(_7e4.indexOf("://")==-1&&_7e4.charAt(0)!="/"){
_7e4="http://"+_7e4;
}
return "<a href=\""+_7e4+"\" target=\""+_7e5+"\">"+_7e3+"</a>";
}
return _7e0;
},arrayFormatter:function(_7e6,_7e7,_7e8,_7e9,_7ea,_7eb,_7ec,_7ed){
if(!_7e7.joinFieldName){
_7e7.joinFieldName="dataValue";
}
if(!_7e7.separator){
_7e7.separator=",";
}
var str="";
var data=this.getRow(_7ec);
if(data){
var _7ee=data._wmVariable;
}
if(_7ee){
var data=_7ee.getValue(_7e6).getData();
}
if(data){
dojo.forEach(data,function(item){
if(str){
str+=_7e7.separator+" ";
}
str+=item[_7e7.joinFieldName];
});
}
return str;
},customFormatter:function(_7ef,_7f0,_7f1,_7f2,_7f3,_7f4,_7f5){
try{
var _7f6=this.getRow(_7f4);
this.handleColorFuncs(_7f5,_7f0,_7f1,_7f2,_7f4);
if(_7ef&&this.owner[_7ef]){
return dojo.hitch(this.owner,_7ef,_7f3,_7f4,_7f5.index,_7f5.field,_7f5,_7f6)();
}else{
return _7f3;
}
}
catch(e){
}
return "";
},handleColorFuncs:function(_7f7,_7f8,_7f9,_7fa,_7fb){
var _7fc=this.getRow(_7fb);
if(_7f8){
var _7fd=this.getExpressionValue(_7f8,null,_7fc,true);
if(_7fd){
_7f7.customStyles.push("background-color: "+_7fd);
}
}
if(_7f9){
var _7fd=this.getExpressionValue(_7f9,null,_7fc,true);
if(_7fd){
_7f7.customStyles.push("color: "+_7fd);
}
}
if(_7fa){
var _7fd=this.getExpressionValue(_7fa,null,_7fc,true);
if(_7fd){
_7f7.customClasses.push(_7fd);
}
}
},getNumColumns:function(_7fe){
if(_7fe){
return this.columns.length;
}
return dojo.filter(this.columns,function(col){
return col.show;
}).length;
},getNumRows:function(){
return this.getRowCount();
},getRow:function(idx){
var _7ff=this.getRowData(idx)||{};
var json=this.itemToJSONObject(this.store,_7ff);
if(_7ff._wmVariable){
json._wmVariable=_7ff._wmVariable[0];
}
return json;
}});
wm.DojoGrid.description="A dojo grid.";
wm.DojoGrid.extend({itemToJSONObject:function(_800,item){
var json={};
if(item&&_800){
var _801=wm.isEmpty(item)?[]:_800.getAttributes(item);
_801=dojo.filter(_801,function(_802){
return _802.indexOf("_")!==0;
});
if(_801&&_801.length>0){
var i;
for(i=0;i<_801.length;i++){
var _803=_800.getValues(item,_801[i]);
if(_803){
if(_803.length>1){
var j;
json[_801[i]]=[];
for(j=0;j<_803.length;j++){
var _804=_803[j];
if(_800.isItem(_804)){
json[_801[i]].push(this.itemToJSONObject(_800,_804));
}else{
json[_801[i]].push(_804);
}
}
}else{
if(_800.isItem(_803[0])){
json[_801[i]]=this.itemToJSONObject(_800,_803[0]);
}else{
json[_801[i]]=_803[0];
}
}
}
}
}
}
return json;
}});
dojo.declare("wm.grid.cells.ComboBox",dojox.grid.cells._Widget,{restrictValues:true,isSimpleType:false,widgetClass:dijit.form.ComboBox,getWidgetProps:function(_805){
if(this.widgetProps&&this.widgetProps.isSimpleType){
this.isSimpleType=this.widgetProps.isSimpleType;
}
this.restrictValues=this.widgetProps&&this.widgetProps.restrictValues!==undefined?this.widgetProps.restrictValues:true;
return dojo.mixin({},this.widgetProps||{},{value:_805,store:this.generateStore(this.options,this.widgetProps.displayField)});
},cleansComboBoxOptions:function(_806){
var data=_806.getData();
for(var i=0;i<data.length;i++){
var o=data[i];
wm.forEachProperty(o,function(_807,name){
if(typeof _807=="object"){
delete o[name];
}
});
}
return data;
},generateStore:function(_808,_809){
var _80a=[];
dojo.forEach(_808,function(o,i){
if(typeof o=="string"){
var tmp={};
tmp[_809]=o;
o=tmp;
}
o.wmDojoStoreId=i;
_80a.push(o);
},this);
var _80b=new dojo.data.ItemFileReadStore({data:{identifier:"wmDojoStoreId",items:_80a}});
return _80b;
},apply:function(_80c){
if(this.grid.canEdit(this,_80c)){
if(!this.widget){
return;
}
var name=this.field;
var _80d=name.replace(/\..*?$/,"");
var item=this.widget.item;
var _80e=this.widget.store;
if(this.widgetProps.owner){
var _80f=this.widget.get("value");
if(_80f===""){
_810=null;
}else{
if(!item&&_80f){
dojo.forEach(this.options,dojo.hitch(this,function(_811){
try{
if(_811[this.widgetProps.displayField][0]==_80f){
this.widget.set("item",_811);
item=_811;
}
}
catch(e){
}
}));
}
var _810=this.widgetProps.owner.itemToJSONObject(_80e,item);
if(this.isSimpleType&&typeof _810=="object"){
_810=_810[this.widgetProps.displayField];
}
var _812=this.grid.getItem(_80c);
if(!this.restrictValues&&this.isSimpleType&&_810===undefined){
_810=this.widget.get("value");
}
}
if(_810&&!this.isSimpleType){
_810=item;
}
this.grid.doApplyCellEdit(_810,_80c,_80d);
}
}
this._finish(_80c);
},getValue:function(){
var e=this.widget;
e.set("displayedValue",e.get("displayedValue"));
return e.get("value");
}});
dojo.declare("wm.grid.cells.DateTextBox",dojox.grid.cells.DateTextBox,{apply:function(_813){
var _814=this.widgetProps.owner;
var _815=_814.getColumn(this.field);
var _816=_815.formatterProps;
var _817=_816&&_816.useLocalTime;
var _818=this.getValue(_813);
if(!_817&&_818){
_818.setHours(0,-60*wm.timezoneOffset+6,0);
}
this.applyEdit(_818,_813);
this._finish(_813);
},getWidgetProps:function(_819){
if(this.constraint){
if(typeof this.constraint.max=="number"){
this.constraint.max=new Date(this.constraint.max);
}
if(typeof this.constraint.min=="number"){
this.constraint.min=new Date(this.constraint.min);
}
}
return dojo.mixin(this.inherited(arguments),{value:_819?new Date(_819):null});
}});
dojo.declare("dojox.grid.cells.NumberTextBox",dojox.grid.cells._Widget,{widgetClass:dijit.form.NumberTextBox,apply:function(_81a){
var _81b=this.getValue(_81a);
if(isNaN(_81b)){
_81b=null;
}
this.applyEdit(_81b,_81a);
this._finish(_81a);
}});
dojox.grid.cells.NumberTextBox.markupFactory=function(node,cell){
dojox.grid.cells._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.ValidationTextBox",dojox.grid.cells._Widget,{widgetClass:dijit.form.ValidationTextBox,getWidgetProps:function(_81c){
var _81d=this.inherited(arguments);
return _81d;
}});
dojox.grid.cells.ValidationTextBox.markupFactory=function(node,cell){
dojox.grid.cells._Widget.markupFactory(node,cell);
};
dojo.declare("dojox.grid.cells.TimeTextBox",dojox.grid.cells._Widget,{widgetClass:dijit.form.TimeTextBox});
dojox.grid.cells.TimeTextBox.markupFactory=function(node,cell){
dojox.grid.cells._Widget.markupFactory(node,cell);
};
}
dojo.i18n._preloadLocalizations("dojo.nls.wm_dojo_grid",["ROOT","ar","ca","cs","da","de","de-de","el","en","en-au","en-gb","en-us","es","es-es","fi","fi-fi","fr","fr-fr","he","he-il","hu","it","it-it","ja","ja-jp","ko","ko-kr","nb","nl","nl-nl","pl","pt","pt-br","pt-pt","ru","sk","sl","sv","th","tr","xx","zh","zh-cn","zh-tw"]);
