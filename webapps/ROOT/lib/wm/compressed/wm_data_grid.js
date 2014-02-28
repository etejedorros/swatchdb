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

dojo.provide("wm.compressed.wm_data_grid");
if(!dojo._hasResource["dojox.grid.compat._grid.lib"]){
dojo._hasResource["dojox.grid.compat._grid.lib"]=true;
dojo.provide("dojox.grid.compat._grid.lib");
dojo.mixin(dojox.grid,{na:"...",nop:function(){
},getTdIndex:function(td){
return td.cellIndex>=0?td.cellIndex:dojo.indexOf(td.parentNode.cells,td);
},getTrIndex:function(tr){
return tr.rowIndex>=0?tr.rowIndex:dojo.indexOf(tr.parentNode.childNodes,tr);
},getTr:function(_1,_2){
return _1&&((_1.rows||0)[_2]||_1.childNodes[_2]);
},getTd:function(_3,_4,_5){
return (dojox.grid.getTr(_3,_4)||0)[_5];
},findTable:function(_6){
for(var n=_6;n&&n.tagName!="TABLE";n=n.parentNode){
}
return n;
},ascendDom:function(_7,_8){
for(var n=_7;n&&_8(n);n=n.parentNode){
}
return n;
},makeNotTagName:function(_9){
var _a=_9.toUpperCase();
return function(_b){
return _b.tagName!=_a;
};
},fire:function(ob,ev,_c){
var fn=ob&&ev&&ob[ev];
return fn&&(_c?fn.apply(ob,_c):ob[ev]());
},setStyleText:function(_d,_e){
if(_d.style.cssText==undefined){
_d.setAttribute("style",_e);
}else{
_d.style.cssText=_e;
}
},getStyleText:function(_f,_10){
return (_f.style.cssText==undefined?_f.getAttribute("style"):_f.style.cssText);
},setStyle:function(_11,_12,_13){
if(_11&&_11.style[_12]!=_13){
_11.style[_12]=_13;
}
},setStyleHeightPx:function(_14,_15){
if(_15>=0){
dojox.grid.setStyle(_14,"height",_15+"px");
}
},mouseEvents:["mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"],keyEvents:["keyup","keydown","keypress"],funnelEvents:function(_16,_17,_18,_19){
var _1a=(_19?_19:dojox.grid.mouseEvents.concat(dojox.grid.keyEvents));
for(var i=0,l=_1a.length;i<l;i++){
dojo.connect(_16,"on"+_1a[i],_17,_18);
}
},removeNode:function(_1b){
_1b=dojo.byId(_1b);
_1b&&_1b.parentNode&&_1b.parentNode.removeChild(_1b);
return _1b;
},getScrollbarWidth:function(){
if(this._scrollBarWidth){
return this._scrollBarWidth;
}
this._scrollBarWidth=18;
try{
var e=document.createElement("div");
e.style.cssText="top:0;left:0;width:100px;height:100px;overflow:scroll;position:absolute;visibility:hidden;";
document.body.appendChild(e);
this._scrollBarWidth=e.offsetWidth-e.clientWidth;
document.body.removeChild(e);
delete e;
}
catch(ex){
}
return this._scrollBarWidth;
},getRef:function(_1c,_1d,_1e){
var obj=_1e||dojo.global,_1f=_1c.split("."),_20=_1f.pop();
for(var i=0,p;obj&&(p=_1f[i]);i++){
obj=(p in obj?obj[p]:(_1d?obj[p]={}:undefined));
}
return {obj:obj,prop:_20};
},getProp:function(_21,_22,_23){
with(dojox.grid.getRef(_21,_22,_23)){
return (obj)&&(prop)&&(prop in obj?obj[prop]:(_22?obj[prop]={}:undefined));
}
},indexInParent:function(_24){
var i=0,n,p=_24.parentNode;
while((n=p.childNodes[i++])){
if(n==_24){
return i-1;
}
}
return -1;
},cleanNode:function(_25){
if(!_25){
return;
}
var _26=function(inW){
return inW.domNode&&dojo.isDescendant(inW.domNode,_25,true);
};
var ws=dijit.registry.filter(_26);
for(var i=0,w;(w=ws[i]);i++){
w.destroy();
}
delete ws;
},getTagName:function(_27){
var _28=dojo.byId(_27);
return (_28&&_28.tagName?_28.tagName.toLowerCase():"");
},nodeKids:function(_29,_2a){
var _2b=[];
var i=0,n;
while((n=_29.childNodes[i++])){
if(dojox.grid.getTagName(n)==_2a){
_2b.push(n);
}
}
return _2b;
},divkids:function(_2c){
return dojox.grid.nodeKids(_2c,"div");
},focusSelectNode:function(_2d){
try{
dojox.grid.fire(_2d,"focus");
dojox.grid.fire(_2d,"select");
}
catch(e){
}
},whenIdle:function(){
setTimeout(dojo.hitch.apply(dojo,arguments),0);
},arrayCompare:function(inA,inB){
for(var i=0,l=inA.length;i<l;i++){
if(inA[i]!=inB[i]){
return false;
}
}
return (inA.length==inB.length);
},arrayInsert:function(_2e,_2f,_30){
if(_2e.length<=_2f){
_2e[_2f]=_30;
}else{
_2e.splice(_2f,0,_30);
}
},arrayRemove:function(_31,_32){
_31.splice(_32,1);
},arraySwap:function(_33,inI,inJ){
var _34=_33[inI];
_33[inI]=_33[inJ];
_33[inJ]=_34;
},initTextSizePoll:function(_35){
var f=document.createElement("div");
with(f.style){
top="0px";
left="0px";
position="absolute";
visibility="hidden";
}
f.innerHTML="TheQuickBrownFoxJumpedOverTheLazyDog";
document.body.appendChild(f);
var fw=f.offsetWidth;
var job=function(){
if(f.offsetWidth!=fw){
fw=f.offsetWidth;
dojox.grid.textSizeChanged();
}
};
window.setInterval(job,_35||200);
dojox.grid.initTextSizePoll=dojox.grid.nop;
},textSizeChanged:function(){
}});
dojox.grid.jobs={cancel:function(_36){
if(_36){
window.clearTimeout(_36);
}
},jobs:[],job:function(_37,_38,_39){
dojox.grid.jobs.cancelJob(_37);
var job=function(){
delete dojox.grid.jobs.jobs[_37];
_39();
};
dojox.grid.jobs.jobs[_37]=setTimeout(job,_38);
},cancelJob:function(_3a){
dojox.grid.jobs.cancel(dojox.grid.jobs.jobs[_3a]);
}};
}
if(!dojo._hasResource["dojox.grid.compat._grid.scroller"]){
dojo._hasResource["dojox.grid.compat._grid.scroller"]=true;
dojo.provide("dojox.grid.compat._grid.scroller");
dojo.declare("dojox.grid.scroller.base",null,{constructor:function(){
this.pageHeights=[];
this.stack=[];
},rowCount:0,defaultRowHeight:10,keepRows:100,contentNode:null,scrollboxNode:null,defaultPageHeight:0,keepPages:10,pageCount:0,windowHeight:0,firstVisibleRow:0,lastVisibleRow:0,page:0,pageTop:0,init:function(_3b,_3c,_3d){
switch(arguments.length){
case 3:
this.rowsPerPage=_3d;
case 2:
this.keepRows=_3c;
case 1:
this.rowCount=_3b;
}
this.defaultPageHeight=this.defaultRowHeight*this.rowsPerPage;
this.pageCount=Math.ceil(this.rowCount/this.rowsPerPage);
this.setKeepInfo(this.keepRows);
this.invalidate();
if(this.scrollboxNode){
this.scrollboxNode.scrollTop=0;
this.scroll(0);
this.scrollboxNode.onscroll=dojo.hitch(this,"onscroll");
}
},setKeepInfo:function(_3e){
this.keepRows=_3e;
this.keepPages=!this.keepRows?this.keepRows:Math.max(Math.ceil(this.keepRows/this.rowsPerPage),2);
},invalidate:function(){
this.invalidateNodes();
this.pageHeights=[];
this.height=(this.pageCount?(this.pageCount-1)*this.defaultPageHeight+this.calcLastPageHeight():0);
this.resize();
},updateRowCount:function(_3f){
this.invalidateNodes();
this.rowCount=_3f;
var _40=this.pageCount;
this.pageCount=Math.ceil(this.rowCount/this.rowsPerPage);
if(this.pageCount<_40){
for(var i=_40-1;i>=this.pageCount;i--){
this.height-=this.getPageHeight(i);
delete this.pageHeights[i];
}
}else{
if(this.pageCount>_40){
this.height+=this.defaultPageHeight*(this.pageCount-_40-1)+this.calcLastPageHeight();
}
}
this.resize();
},pageExists:function(_41){
},measurePage:function(_42){
},positionPage:function(_43,_44){
},repositionPages:function(_45){
},installPage:function(_46){
},preparePage:function(_47,_48,_49){
},renderPage:function(_4a){
},removePage:function(_4b){
},pacify:function(_4c){
},pacifying:false,pacifyTicks:200,setPacifying:function(_4d){
if(this.pacifying!=_4d){
this.pacifying=_4d;
this.pacify(this.pacifying);
}
},startPacify:function(){
this.startPacifyTicks=new Date().getTime();
},doPacify:function(){
var _4e=(new Date().getTime()-this.startPacifyTicks)>this.pacifyTicks;
this.setPacifying(true);
this.startPacify();
return _4e;
},endPacify:function(){
this.setPacifying(false);
},resize:function(){
if(this.scrollboxNode){
this.windowHeight=this.scrollboxNode.clientHeight;
}
dojox.grid.setStyleHeightPx(this.contentNode,this.height);
},calcLastPageHeight:function(){
if(!this.pageCount){
return 0;
}
var _4f=this.pageCount-1;
var _50=((this.rowCount%this.rowsPerPage)||(this.rowsPerPage))*this.defaultRowHeight;
this.pageHeights[_4f]=_50;
return _50;
},updateContentHeight:function(_51){
this.height+=_51;
this.resize();
},updatePageHeight:function(_52){
if(this.pageExists(_52)){
var oh=this.getPageHeight(_52);
var h=(this.measurePage(_52))||(oh);
this.pageHeights[_52]=h;
if((h)&&(oh!=h)){
this.updateContentHeight(h-oh);
this.repositionPages(_52);
}
}
},rowHeightChanged:function(_53){
this.updatePageHeight(Math.floor(_53/this.rowsPerPage));
},invalidateNodes:function(){
while(this.stack.length){
this.destroyPage(this.popPage());
}
},createPageNode:function(){
var p=document.createElement("div");
p.style.position="absolute";
p.style[dojo._isBodyLtr()?"left":"right"]="0";
return p;
},getPageHeight:function(_54){
var ph=this.pageHeights[_54];
return (ph!==undefined?ph:this.defaultPageHeight);
},pushPage:function(_55){
return this.stack.push(_55);
},popPage:function(){
return this.stack.shift();
},findPage:function(_56){
var i=0,h=0;
for(var ph=0;i<this.pageCount;i++,h+=ph){
ph=this.getPageHeight(i);
if(h+ph>=_56){
break;
}
}
this.page=i;
this.pageTop=h;
},buildPage:function(_57,_58,_59){
this.preparePage(_57,_58);
this.positionPage(_57,_59);
this.installPage(_57);
this.renderPage(_57);
this.pushPage(_57);
},needPage:function(_5a,_5b){
var h=this.getPageHeight(_5a),oh=h;
if(!this.pageExists(_5a)){
this.buildPage(_5a,this.keepPages&&(this.stack.length>=this.keepPages),_5b);
h=this.measurePage(_5a)||h;
this.pageHeights[_5a]=h;
if(h&&(oh!=h)){
this.updateContentHeight(h-oh);
}
}else{
this.positionPage(_5a,_5b);
}
return h;
},onscroll:function(){
this.scroll(this.scrollboxNode.scrollTop);
},scroll:function(_5c){
this.startPacify();
this.findPage(_5c);
var h=this.height;
var b=this.getScrollBottom(_5c);
for(var p=this.page,y=this.pageTop;(p<this.pageCount)&&((b<0)||(y<b));p++){
y+=this.needPage(p,y);
}
this.firstVisibleRow=this.getFirstVisibleRow(this.page,this.pageTop,_5c);
this.lastVisibleRow=this.getLastVisibleRow(p-1,y,b);
if(h!=this.height){
this.repositionPages(p-1);
}
this.endPacify();
},getScrollBottom:function(_5d){
return (this.windowHeight>=0?_5d+this.windowHeight:-1);
},processNodeEvent:function(e,_5e){
var t=e.target;
while(t&&(t!=_5e)&&t.parentNode&&(t.parentNode.parentNode!=_5e)){
t=t.parentNode;
}
if(!t||!t.parentNode||(t.parentNode.parentNode!=_5e)){
return false;
}
var _5f=t.parentNode;
e.topRowIndex=_5f.pageIndex*this.rowsPerPage;
e.rowIndex=e.topRowIndex+dojox.grid.indexInParent(t);
e.rowTarget=t;
return true;
},processEvent:function(e){
return this.processNodeEvent(e,this.contentNode);
},dummy:0});
dojo.declare("dojox.grid.scroller",dojox.grid.scroller.base,{constructor:function(){
this.pageNodes=[];
},renderRow:function(_60,_61){
},removeRow:function(_62){
},getDefaultNodes:function(){
return this.pageNodes;
},getDefaultPageNode:function(_63){
return this.getDefaultNodes()[_63];
},positionPageNode:function(_64,_65){
_64.style.top=_65+"px";
},getPageNodePosition:function(_66){
return _66.offsetTop;
},repositionPageNodes:function(_67,_68){
var _69=0;
for(var i=0;i<this.stack.length;i++){
_69=Math.max(this.stack[i],_69);
}
var n=_68[_67];
var y=(n?this.getPageNodePosition(n)+this.getPageHeight(_67):0);
for(var p=_67+1;p<=_69;p++){
n=_68[p];
if(n){
if(this.getPageNodePosition(n)==y){
return;
}
this.positionPage(p,y);
}
y+=this.getPageHeight(p);
}
},invalidatePageNode:function(_6a,_6b){
var p=_6b[_6a];
if(p){
delete _6b[_6a];
this.removePage(_6a,p);
dojox.grid.cleanNode(p);
p.innerHTML="";
}
return p;
},preparePageNode:function(_6c,_6d,_6e){
var p=(_6d===null?this.createPageNode():this.invalidatePageNode(_6d,_6e));
p.pageIndex=_6c;
p.id=(this._pageIdPrefix||"")+"page-"+_6c;
_6e[_6c]=p;
},pageExists:function(_6f){
return Boolean(this.getDefaultPageNode(_6f));
},measurePage:function(_70){
var p=this.getDefaultPageNode(_70);
var h=p.offsetHeight;
if(!this._defaultRowHeight){
if(p){
this._defaultRowHeight=8;
var fr=p.firstChild;
if(fr){
var _71=dojo.doc.createTextNode("T");
fr.appendChild(_71);
this._defaultRowHeight=fr.offsetHeight;
fr.removeChild(_71);
}
}
}
return (this.rowsPerPage==h)?(h*this._defaultRowHeight):h;
},positionPage:function(_72,_73){
this.positionPageNode(this.getDefaultPageNode(_72),_73);
},repositionPages:function(_74){
this.repositionPageNodes(_74,this.getDefaultNodes());
},preparePage:function(_75,_76){
this.preparePageNode(_75,(_76?this.popPage():null),this.getDefaultNodes());
},installPage:function(_77){
this.contentNode.appendChild(this.getDefaultPageNode(_77));
},destroyPage:function(_78){
var p=this.invalidatePageNode(_78,this.getDefaultNodes());
dojox.grid.removeNode(p);
},renderPage:function(_79){
var _7a=this.pageNodes[_79];
for(var i=0,j=_79*this.rowsPerPage;(i<this.rowsPerPage)&&(j<this.rowCount);i++,j++){
this.renderRow(j,_7a);
}
},removePage:function(_7b){
for(var i=0,j=_7b*this.rowsPerPage;i<this.rowsPerPage;i++,j++){
this.removeRow(j);
}
},getPageRow:function(_7c){
return _7c*this.rowsPerPage;
},getLastPageRow:function(_7d){
return Math.min(this.rowCount,this.getPageRow(_7d+1))-1;
},getFirstVisibleRowNodes:function(_7e,_7f,_80,_81){
var row=this.getPageRow(_7e);
var _82=dojox.grid.divkids(_81[_7e]);
for(var i=0,l=_82.length;i<l&&_7f<_80;i++,row++){
_7f+=_82[i].offsetHeight;
}
return (row?row-1:row);
},getFirstVisibleRow:function(_83,_84,_85){
if(!this.pageExists(_83)){
return 0;
}
return this.getFirstVisibleRowNodes(_83,_84,_85,this.getDefaultNodes());
},getLastVisibleRowNodes:function(_86,_87,_88,_89){
var row=this.getLastPageRow(_86);
var _8a=dojox.grid.divkids(_89[_86]);
for(var i=_8a.length-1;i>=0&&_87>_88;i--,row--){
_87-=_8a[i].offsetHeight;
}
return row+1;
},getLastVisibleRow:function(_8b,_8c,_8d){
if(!this.pageExists(_8b)){
return 0;
}
return this.getLastVisibleRowNodes(_8b,_8c,_8d,this.getDefaultNodes());
},findTopRowForNodes:function(_8e,_8f){
var _90=dojox.grid.divkids(_8f[this.page]);
for(var i=0,l=_90.length,t=this.pageTop,h;i<l;i++){
h=_90[i].offsetHeight;
t+=h;
if(t>=_8e){
this.offset=h-(t-_8e);
return i+this.page*this.rowsPerPage;
}
}
return -1;
},findScrollTopForNodes:function(_91,_92){
var _93=Math.floor(_91/this.rowsPerPage);
var t=0;
for(var i=0;i<_93;i++){
t+=this.getPageHeight(i);
}
this.pageTop=t;
this.needPage(_93,this.pageTop);
var _94=dojox.grid.divkids(_92[_93]);
var r=_91-this.rowsPerPage*_93;
for(var i=0,l=_94.length;i<l&&i<r;i++){
t+=_94[i].offsetHeight;
}
return t;
},findTopRow:function(_95){
return this.findTopRowForNodes(_95,this.getDefaultNodes());
},findScrollTop:function(_96){
return this.findScrollTopForNodes(_96,this.getDefaultNodes());
},dummy:0});
dojo.declare("dojox.grid.scroller.columns",dojox.grid.scroller,{constructor:function(_97){
this.setContentNodes(_97);
},setContentNodes:function(_98){
this.contentNodes=_98;
this.colCount=(this.contentNodes?this.contentNodes.length:0);
this.pageNodes=[];
for(var i=0;i<this.colCount;i++){
this.pageNodes[i]=[];
}
},getDefaultNodes:function(){
return this.pageNodes[0]||[];
},scroll:function(_99){
if(this.colCount){
dojox.grid.scroller.prototype.scroll.call(this,_99);
}
},resize:function(){
if(this.scrollboxNode){
this.windowHeight=this.scrollboxNode.clientHeight;
}
for(var i=0;i<this.colCount;i++){
dojox.grid.setStyleHeightPx(this.contentNodes[i],this.height);
}
},positionPage:function(_9a,_9b){
for(var i=0;i<this.colCount;i++){
this.positionPageNode(this.pageNodes[i][_9a],_9b);
}
},preparePage:function(_9c,_9d){
var p=(_9d?this.popPage():null);
for(var i=0;i<this.colCount;i++){
this.preparePageNode(_9c,p,this.pageNodes[i]);
}
},installPage:function(_9e){
for(var i=0;i<this.colCount;i++){
this.contentNodes[i].appendChild(this.pageNodes[i][_9e]);
}
},destroyPage:function(_9f){
for(var i=0;i<this.colCount;i++){
dojox.grid.removeNode(this.invalidatePageNode(_9f,this.pageNodes[i]));
}
},renderPage:function(_a0){
var _a1=[];
for(var i=0;i<this.colCount;i++){
_a1[i]=this.pageNodes[i][_a0];
}
for(var i=0,j=_a0*this.rowsPerPage;(i<this.rowsPerPage)&&(j<this.rowCount);i++,j++){
this.renderRow(j,_a1);
}
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.drag"]){
dojo._hasResource["dojox.grid.compat._grid.drag"]=true;
dojo.provide("dojox.grid.compat._grid.drag");
(function(){
var _a2=dojox.grid.drag={};
_a2.dragging=false;
_a2.hysteresis=2;
_a2.capture=function(_a3){
if(_a3.setCapture){
_a3.setCapture();
}else{
document.addEventListener("mousemove",_a3.onmousemove,true);
document.addEventListener("mouseup",_a3.onmouseup,true);
document.addEventListener("click",_a3.onclick,true);
}
};
_a2.release=function(_a4){
if(_a4.releaseCapture){
_a4.releaseCapture();
}else{
document.removeEventListener("click",_a4.onclick,true);
document.removeEventListener("mouseup",_a4.onmouseup,true);
document.removeEventListener("mousemove",_a4.onmousemove,true);
}
};
_a2.start=function(_a5,_a6,_a7,_a8,_a9){
if(!_a5||_a2.dragging){
return;
}
_a2.dragging=true;
_a2.elt=_a5;
_a2.events={drag:_a6||dojox.grid.nop,end:_a7||dojox.grid.nop,start:_a9||dojox.grid.nop,oldmove:_a5.onmousemove,oldup:_a5.onmouseup,oldclick:_a5.onclick};
_a2.positionX=(_a8&&("screenX" in _a8)?_a8.screenX:false);
_a2.positionY=(_a8&&("screenY" in _a8)?_a8.screenY:false);
_a2.started=(_a2.position===false);
_a5.onmousemove=_a2.mousemove;
_a5.onmouseup=_a2.mouseup;
_a5.onclick=_a2.click;
_a2.capture(_a2.elt);
};
_a2.end=function(){
_a2.release(_a2.elt);
_a2.elt.onmousemove=_a2.events.oldmove;
_a2.elt.onmouseup=_a2.events.oldup;
_a2.elt.onclick=_a2.events.oldclick;
_a2.elt=null;
try{
if(_a2.started){
_a2.events.end();
}
}
finally{
_a2.dragging=false;
}
};
_a2.calcDelta=function(_aa){
_aa.deltaX=_aa.screenX-_a2.positionX;
_aa.deltaY=_aa.screenY-_a2.positionY;
};
_a2.hasMoved=function(_ab){
return Math.abs(_ab.deltaX)+Math.abs(_ab.deltaY)>_a2.hysteresis;
};
_a2.mousemove=function(_ac){
_ac=dojo.fixEvent(_ac);
dojo.stopEvent(_ac);
_a2.calcDelta(_ac);
if((!_a2.started)&&(_a2.hasMoved(_ac))){
_a2.events.start(_ac);
_a2.started=true;
}
if(_a2.started){
_a2.events.drag(_ac);
}
};
_a2.mouseup=function(_ad){
dojo.stopEvent(dojo.fixEvent(_ad));
_a2.end();
};
_a2.click=function(_ae){
dojo.stopEvent(dojo.fixEvent(_ae));
};
})();
}
if(!dojo._hasResource["dojox.grid.compat._grid.builder"]){
dojo._hasResource["dojox.grid.compat._grid.builder"]=true;
dojo.provide("dojox.grid.compat._grid.builder");
dojo.declare("dojox.grid.Builder",null,{constructor:function(_af){
this.view=_af;
this.grid=_af.grid;
},view:null,_table:"<table class=\"dojoxGrid-row-table\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"wairole:presentation\">",generateCellMarkup:function(_b0,_b1,_b2,_b3){
var _b4=[],_b5;
if(_b3){
_b5=["<th tabIndex=\"-1\" role=\"wairole:columnheader\""];
}else{
_b5=["<td tabIndex=\"-1\" role=\"wairole:gridcell\""];
}
_b0.colSpan&&_b5.push(" colspan=\"",_b0.colSpan,"\"");
_b0.rowSpan&&_b5.push(" rowspan=\"",_b0.rowSpan,"\"");
_b5.push(" class=\"dojoxGrid-cell ");
_b0.classes&&_b5.push(_b0.classes," ");
_b2&&_b5.push(_b2," ");
_b4.push(_b5.join(""));
_b4.push("");
_b5=["\" idx=\"",_b0.index,"\" style=\""];
_b5.push(_b0.styles,_b1||"");
_b0.unitWidth&&_b5.push("width:",_b0.unitWidth,";");
_b4.push(_b5.join(""));
_b4.push("");
_b5=["\""];
_b0.attrs&&_b5.push(" ",_b0.attrs);
_b5.push(">");
_b4.push(_b5.join(""));
_b4.push("");
_b4.push("</td>");
return _b4;
},isCellNode:function(_b6){
return Boolean(_b6&&_b6.getAttribute&&_b6.getAttribute("idx"));
},getCellNodeIndex:function(_b7){
return _b7?Number(_b7.getAttribute("idx")):-1;
},getCellNode:function(_b8,_b9){
for(var i=0,row;row=dojox.grid.getTr(_b8.firstChild,i);i++){
for(var j=0,_ba;_ba=row.cells[j];j++){
if(this.getCellNodeIndex(_ba)==_b9){
return _ba;
}
}
}
},findCellTarget:function(_bb,_bc){
var n=_bb;
while(n&&(!this.isCellNode(n)||(dojox.grid.gridViewTag in n.offsetParent.parentNode&&n.offsetParent.parentNode[dojox.grid.gridViewTag]!=this.view.id))&&(n!=_bc)){
n=n.parentNode;
}
return n!=_bc?n:null;
},baseDecorateEvent:function(e){
e.dispatch="do"+e.type;
e.grid=this.grid;
e.sourceView=this.view;
e.cellNode=this.findCellTarget(e.target,e.rowNode);
e.cellIndex=this.getCellNodeIndex(e.cellNode);
e.cell=(e.cellIndex>=0?this.grid.getCell(e.cellIndex):null);
},findTarget:function(_bd,_be){
var n=_bd;
while(n&&(n!=this.domNode)&&(!(_be in n)||(dojox.grid.gridViewTag in n&&n[dojox.grid.gridViewTag]!=this.view.id))){
n=n.parentNode;
}
return (n!=this.domNode)?n:null;
},findRowTarget:function(_bf){
return this.findTarget(_bf,dojox.grid.rowIndexTag);
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
dojo.declare("dojox.grid.contentBuilder",dojox.grid.Builder,{update:function(){
this.prepareHtml();
},prepareHtml:function(){
var _c0=this.grid.get,_c1=this.view.structure.rows;
for(var j=0,row;(row=_c1[j]);j++){
for(var i=0,_c2;(_c2=row[i]);i++){
_c2.get=_c2.get||(_c2.value==undefined)&&_c0;
_c2.markup=this.generateCellMarkup(_c2,_c2.cellStyles,_c2.cellClasses,false);
}
}
},generateHtml:function(_c3,_c4){
var _c5=[this._table],v=this.view,obr=v.onBeforeRow,_c6=v.structure.rows;
obr&&obr(_c4,_c6);
for(var j=0,row;(row=_c6[j]);j++){
if(row.hidden||row.header){
continue;
}
_c5.push(!row.invisible?"<tr>":"<tr class=\"dojoxGrid-invisible\">");
for(var i=0,_c7,m,cc,cs;(_c7=row[i]);i++){
m=_c7.markup,cc=_c7.customClasses=[],cs=_c7.customStyles=[];
m[5]=_c7.format(_c3);
m[1]=cc.join(" ");
m[3]=cs.join(";");
_c5.push.apply(_c5,m);
}
_c5.push("</tr>");
}
_c5.push("</table>");
return _c5.join("");
},decorateEvent:function(e){
e.rowNode=this.findRowTarget(e.target);
if(!e.rowNode){
return false;
}
e.rowIndex=e.rowNode[dojox.grid.rowIndexTag];
this.baseDecorateEvent(e);
e.cell=this.grid.getCell(e.cellIndex);
return true;
}});
dojo.declare("dojox.grid.headerBuilder",dojox.grid.Builder,{bogusClickTime:0,overResizeWidth:4,minColWidth:1,_table:"<table class=\"dojoxGrid-row-table\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"wairole:presentation\"",update:function(){
this.tableMap=new dojox.grid.tableMap(this.view.structure.rows);
},generateHtml:function(_c8,_c9){
var _ca=[this._table],_cb=this.view.structure.rows;
if(this.view.viewWidth){
_ca.push([" style=\"width:",this.view.viewWidth,";\""].join(""));
}
_ca.push(">");
dojox.grid.fire(this.view,"onBeforeRow",[-1,_cb]);
for(var j=0,row;(row=_cb[j]);j++){
if(row.hidden){
continue;
}
_ca.push(!row.invisible?"<tr>":"<tr class=\"dojoxGrid-invisible\">");
for(var i=0,_cc,_cd;(_cc=row[i]);i++){
_cc.customClasses=[];
_cc.customStyles=[];
_cd=this.generateCellMarkup(_cc,_cc.headerStyles,_cc.headerClasses,true);
_cd[5]=(_c9!=undefined?_c9:_c8(_cc));
_cd[3]=_cc.customStyles.join(";");
_cd[1]=_cc.customClasses.join(" ");
_ca.push(_cd.join(""));
}
_ca.push("</tr>");
}
_ca.push("</table>");
return _ca.join("");
},getCellX:function(e){
var x=e.layerX;
if(dojo.isMoz){
var n=dojox.grid.ascendDom(e.target,dojox.grid.makeNotTagName("th"));
x-=(n&&n.offsetLeft)||0;
var t=e.sourceView.getScrollbarWidth();
if(!dojo._isBodyLtr()&&e.sourceView.headerNode.scrollLeft<t){
x-=t;
}
}
var n=dojox.grid.ascendDom(e.target,function(){
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
var i=dojox.grid.getTdIndex(e.cellNode);
e.cellNode=(i?e.cellNode.parentNode.cells[i+mod]:null);
e.cellIndex=(e.cellNode?this.getCellNodeIndex(e.cellNode):-1);
return Boolean(e.cellNode);
},canResize:function(e){
if(!e.cellNode||e.cellNode.colSpan>1){
return false;
}
var _ce=this.grid.getCell(e.cellIndex);
return !_ce.noresize&&!_ce.isFlex();
},overLeftResizeArea:function(e){
if(dojo._isBodyLtr()){
return (e.cellIndex>0)&&(e.cellX<this.overResizeWidth)&&this.prepareResize(e,-1);
}
var t=e.cellNode&&(e.cellX<this.overResizeWidth);
return;
},overRightResizeArea:function(e){
if(dojo._isBodyLtr()){
return e.cellNode&&(e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth);
}
return (e.cellIndex>0)&&(e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth)&&this.prepareResize(e,-1);
},domousemove:function(e){
var c=(this.overRightResizeArea(e)?"e-resize":(this.overLeftResizeArea(e)?"w-resize":""));
if(c&&!this.canResize(e)){
c="not-allowed";
}
e.sourceView.headerNode.style.cursor=c||"";
if(c){
dojo.stopEvent(e);
}
},domousedown:function(e){
if(!dojox.grid.drag.dragging){
if((this.overRightResizeArea(e)||this.overLeftResizeArea(e))&&this.canResize(e)){
this.beginColumnResize(e);
}else{
this.grid.onMouseDown(e);
this.grid.onMouseOverRow(e);
}
}
},doclick:function(e){
if(new Date().getTime()<this.bogusClickTime){
dojo.stopEvent(e);
return true;
}
},beginColumnResize:function(e){
dojo.stopEvent(e);
var _cf=[],_d0=this.tableMap.findOverlappingNodes(e.cellNode);
for(var i=0,_d1;(_d1=_d0[i]);i++){
_cf.push({node:_d1,index:this.getCellNodeIndex(_d1),width:_d1.offsetWidth});
}
var _d2={scrollLeft:e.sourceView.headerNode.scrollLeft,view:e.sourceView,node:e.cellNode,index:e.cellIndex,w:e.cellNode.clientWidth,spanners:_cf};
dojox.grid.drag.start(e.cellNode,dojo.hitch(this,"doResizeColumn",_d2),dojo.hitch(this,"endResizeColumn",_d2),e);
},doResizeColumn:function(_d3,_d4){
var _d5=dojo._isBodyLtr();
if(_d5){
var w=_d3.w+_d4.deltaX;
}else{
var w=_d3.w-_d4.deltaX;
}
if(w>=this.minColWidth){
for(var i=0,s,sw;(s=_d3.spanners[i]);i++){
if(_d5){
sw=s.width+_d4.deltaX;
}else{
sw=s.width-_d4.deltaX;
}
s.node.style.width=sw+"px";
_d3.view.setColWidth(s.index,sw);
}
_d3.node.style.width=w+"px";
_d3.view.setColWidth(_d3.index,w);
if(!_d5){
_d3.view.headerNode.scrollLeft=(_d3.scrollLeft-_d4.deltaX);
}
}
if(_d3.view.flexCells&&!_d3.view.testFlexCells()){
var t=dojox.grid.findTable(_d3.node);
t&&(t.style.width="");
}
},endResizeColumn:function(_d6){
this.bogusClickTime=new Date().getTime()+30;
setTimeout(dojo.hitch(_d6.view,"update"),50);
}});
dojo.declare("dojox.grid.tableMap",null,{constructor:function(_d7){
this.mapRows(_d7);
},map:null,mapRows:function(_d8){
var _d9=_d8.length;
if(!_d9){
return;
}
this.map=[];
for(var j=0,row;(row=_d8[j]);j++){
this.map[j]=[];
}
for(var j=0,row;(row=_d8[j]);j++){
for(var i=0,x=0,_da,_db,_dc;(_da=row[i]);i++){
while(this.map[j][x]){
x++;
}
this.map[j][x]={c:i,r:j};
_dc=_da.rowSpan||1;
_db=_da.colSpan||1;
for(var y=0;y<_dc;y++){
for(var s=0;s<_db;s++){
this.map[j+y][x+s]=this.map[j][x];
}
}
x+=_db;
}
}
},dumpMap:function(){
for(var j=0,row,h="";(row=this.map[j]);j++,h=""){
for(var i=0,_dd;(_dd=row[i]);i++){
h+=_dd.r+","+_dd.c+"   ";
}
}
},getMapCoords:function(_de,_df){
for(var j=0,row;(row=this.map[j]);j++){
for(var i=0,_e0;(_e0=row[i]);i++){
if(_e0.c==_df&&_e0.r==_de){
return {j:j,i:i};
}
}
}
return {j:-1,i:-1};
},getNode:function(_e1,_e2,_e3){
var row=_e1&&_e1.rows[_e2];
return row&&row.cells[_e3];
},_findOverlappingNodes:function(_e4,_e5,_e6){
var _e7=[];
var m=this.getMapCoords(_e5,_e6);
var row=this.map[m.j];
for(var j=0,row;(row=this.map[j]);j++){
if(j==m.j){
continue;
}
with(row[m.i]){
var n=this.getNode(_e4,r,c);
if(n){
_e7.push(n);
}
}
}
return _e7;
},findOverlappingNodes:function(_e8){
return this._findOverlappingNodes(dojox.grid.findTable(_e8),dojox.grid.getTrIndex(_e8.parentNode),dojox.grid.getTdIndex(_e8));
}});
dojox.grid.rowIndexTag="gridRowIndex";
dojox.grid.gridViewTag="gridView";
}
if(!dojo._hasResource["dojox.grid.compat._grid.view"]){
dojo._hasResource["dojox.grid.compat._grid.view"]=true;
dojo.provide("dojox.grid.compat._grid.view");
dojo.declare("dojox.GridView",[dijit._Widget,dijit._Templated],{defaultWidth:"18em",viewWidth:"",templateString:"<div class=\"dojoxGrid-view\">\r\n\t<div class=\"dojoxGrid-header\" dojoAttachPoint=\"headerNode\">\r\n\t\t<div dojoAttachPoint=\"headerNodeContainer\" style=\"width:9000em\">\r\n\t\t\t<div dojoAttachPoint=\"headerContentNode\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<input type=\"checkbox\" class=\"dojoxGrid-hidden-focus\" dojoAttachPoint=\"hiddenFocusNode\" />\r\n\t<input type=\"checkbox\" class=\"dojoxGrid-hidden-focus\" />\r\n\t<div class=\"dojoxGrid-scrollbox\" dojoAttachPoint=\"scrollboxNode\">\r\n\t\t<div class=\"dojoxGrid-content\" dojoAttachPoint=\"contentNode\" hidefocus=\"hidefocus\"></div>\r\n\t</div>\r\n</div>\r\n",themeable:false,classTag:"dojoxGrid",marginBottom:0,rowPad:2,postMixInProperties:function(){
this.rowNodes=[];
},postCreate:function(){
this.connect(this.scrollboxNode,"onscroll","doscroll");
dojox.grid.funnelEvents(this.contentNode,this,"doContentEvent",["mouseover","mouseout","click","dblclick","contextmenu","mousedown"]);
dojox.grid.funnelEvents(this.headerNode,this,"doHeaderEvent",["dblclick","mouseover","mouseout","mousemove","mousedown","click","contextmenu"]);
this.content=new dojox.grid.contentBuilder(this);
this.header=new dojox.grid.headerBuilder(this);
if(!dojo._isBodyLtr()){
this.headerNodeContainer.style.width="";
}
},destroy:function(){
dojox.grid.removeNode(this.headerNode);
this.inherited("destroy",arguments);
},focus:function(){
if(dojo.isWebKit||dojo.isOpera){
this.hiddenFocusNode.focus();
}else{
this.scrollboxNode.focus();
}
},setStructure:function(_e9){
var vs=(this.structure=_e9);
if(vs.width&&!isNaN(vs.width)){
this.viewWidth=vs.width+"em";
}else{
this.viewWidth=vs.width||this.viewWidth;
}
this.onBeforeRow=vs.onBeforeRow;
this.noscroll=vs.noscroll;
if(this.noscroll){
this.scrollboxNode.style.overflow="hidden";
}
this.testFlexCells();
this.updateStructure();
},testFlexCells:function(){
this.flexCells=false;
for(var j=0,row;(row=this.structure.rows[j]);j++){
for(var i=0,_ea;(_ea=row[i]);i++){
_ea.view=this;
this.flexCells=this.flexCells||_ea.isFlex();
}
}
return this.flexCells;
},updateStructure:function(){
this.header.update();
this.content.update();
},getScrollbarWidth:function(){
return (this.noscroll?0:dojox.grid.getScrollbarWidth());
},getColumnsWidth:function(){
return this.headerContentNode.firstChild.offsetWidth;
},getWidth:function(){
return this.viewWidth||(this.getColumnsWidth()+this.getScrollbarWidth())+"px";
},getContentWidth:function(){
return Math.max(0,dojo._getContentBox(this.domNode).w-this.getScrollbarWidth())+"px";
},render:function(){
this.scrollboxNode.style.height="";
this.renderHeader();
},renderHeader:function(){
this.headerContentNode.innerHTML=this.header.generateHtml(this._getHeaderContent);
},_getHeaderContent:function(_eb){
var n=_eb.name||_eb.grid.getCellName(_eb);
if(_eb.index!=_eb.grid.getSortIndex()){
return n;
}
return ["<div class=\"",_eb.grid.sortInfo>0?"dojoxGrid-sort-down":"dojoxGrid-sort-up","\"><div class=\"gridArrowButtonChar\">",_eb.grid.sortInfo>0?"&#9660;":"&#9650;","</div>",n,"</div>"].join("");
},resize:function(){
this.adaptHeight();
this.adaptWidth();
},hasScrollbar:function(){
return (this.scrollboxNode.clientHeight!=this.scrollboxNode.offsetHeight);
},adaptHeight:function(){
if(!this.grid.autoHeight){
var h=this.domNode.clientHeight;
if(!this.hasScrollbar()){
h-=dojox.grid.getScrollbarWidth();
}
dojox.grid.setStyleHeightPx(this.scrollboxNode,h);
}
},adaptWidth:function(){
if(this.flexCells){
this.contentWidth=this.getContentWidth();
this.headerContentNode.firstChild.style.width=this.contentWidth;
}
var w=this.scrollboxNode.offsetWidth-this.getScrollbarWidth();
w=Math.max(w,this.getColumnsWidth())+"px";
with(this.contentNode){
style.width="";
offsetWidth;
style.width=w;
}
},setSize:function(w,h){
with(this.domNode.style){
if(w){
width=w;
}
height=(h>=0?h+"px":"");
}
with(this.headerNode.style){
if(w){
width=w;
}
}
},renderRow:function(_ec,_ed){
var _ee=this.createRowNode(_ec);
this.buildRow(_ec,_ee,_ed);
this.grid.edit.restore(this,_ec);
return _ee;
},createRowNode:function(_ef){
var _f0=document.createElement("div");
_f0.className=this.classTag+"-row";
_f0[dojox.grid.gridViewTag]=this.id;
_f0[dojox.grid.rowIndexTag]=_ef;
this.rowNodes[_ef]=_f0;
return _f0;
},buildRow:function(_f1,_f2){
this.buildRowContent(_f1,_f2);
this.styleRow(_f1,_f2);
},buildRowContent:function(_f3,_f4){
_f4.innerHTML=this.content.generateHtml(_f3,_f3);
if(this.flexCells){
_f4.firstChild.style.width=this.contentWidth;
}
},rowRemoved:function(_f5){
this.grid.edit.save(this,_f5);
delete this.rowNodes[_f5];
},getRowNode:function(_f6){
return this.rowNodes[_f6];
},getCellNode:function(_f7,_f8){
var row=this.getRowNode(_f7);
if(row){
return this.content.getCellNode(row,_f8);
}
},styleRow:function(_f9,_fa){
_fa._style=dojox.grid.getStyleText(_fa);
this.styleRowNode(_f9,_fa);
},styleRowNode:function(_fb,_fc){
if(_fc){
this.doStyleRowNode(_fb,_fc);
}
},doStyleRowNode:function(_fd,_fe){
this.grid.styleRowNode(_fd,_fe);
},updateRow:function(_ff,_100,_101){
var _102=this.getRowNode(_ff);
if(_102){
_102.style.height="";
this.buildRow(_ff,_102);
}
return _102;
},updateRowStyles:function(_103){
this.styleRowNode(_103,this.getRowNode(_103));
},lastTop:0,firstScroll:0,doscroll:function(_104){
var _105=dojo._isBodyLtr();
if(this.firstScroll<2){
if((!_105&&this.firstScroll==1)||(_105&&this.firstScroll==0)){
var s=dojo.marginBox(this.headerNodeContainer);
if(dojo.isIE){
this.headerNodeContainer.style.width=s.w+this.getScrollbarWidth()+"px";
}else{
if(dojo.isMoz){
this.headerNodeContainer.style.width=s.w-this.getScrollbarWidth()+"px";
if(_105){
this.scrollboxNode.scrollLeft=this.scrollboxNode.scrollWidth-this.scrollboxNode.clientWidth;
}else{
this.scrollboxNode.scrollLeft=this.scrollboxNode.clientWidth-this.scrollboxNode.scrollWidth;
}
}
}
}
this.firstScroll++;
}
this.headerNode.scrollLeft=this.scrollboxNode.scrollLeft;
var top=this.scrollboxNode.scrollTop;
if(top!=this.lastTop){
this.grid.scrollTo(top);
}
},setScrollTop:function(_106){
this.lastTop=_106;
this.scrollboxNode.scrollTop=_106;
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
},setColWidth:function(_107,_108){
this.grid.setCellWidth(_107,_108+"px");
},update:function(){
var left=this.scrollboxNode.scrollLeft;
this.content.update();
this.grid.update();
this.scrollboxNode.scrollLeft=left;
this.headerNode.scrollLeft=left;
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.views"]){
dojo._hasResource["dojox.grid.compat._grid.views"]=true;
dojo.provide("dojox.grid.compat._grid.views");
dojo.declare("dojox.grid.views",null,{constructor:function(_109){
this.grid=_109;
},defaultWidth:200,views:[],resize:function(){
this.onEach("resize");
},render:function(){
this.onEach("render");
},addView:function(_10a){
_10a.idx=this.views.length;
this.views.push(_10a);
},destroyViews:function(){
for(var i=0,v;v=this.views[i];i++){
v.destroy();
}
this.views=[];
},getContentNodes:function(){
var _10b=[];
for(var i=0,v;v=this.views[i];i++){
_10b.push(v.contentNode);
}
return _10b;
},forEach:function(_10c){
for(var i=0,v;v=this.views[i];i++){
_10c(v,i);
}
},onEach:function(_10d,_10e){
_10e=_10e||[];
for(var i=0,v;v=this.views[i];i++){
if(_10d in v){
v[_10d].apply(v,_10e);
}
}
},normalizeHeaderNodeHeight:function(){
var _10f=[];
for(var i=0,v;(v=this.views[i]);i++){
if(v.headerContentNode.firstChild){
_10f.push(v.headerContentNode);
}
}
this.normalizeRowNodeHeights(_10f);
},normalizeRowNodeHeights:function(_110){
var h=0;
for(var i=0,n,o;(n=_110[i]);i++){
h=Math.max(h,(n.firstChild.clientHeight)||(n.firstChild.offsetHeight));
}
h=(h>=0?h:0);
if(dojo.isFF>=3&&h){
h++;
}
var hpx=h+"px";
for(var i=0,n;(n=_110[i]);i++){
if(n.firstChild.clientHeight!=h){
n.firstChild.style.height=hpx;
}
}
if(_110&&_110[0]){
_110[0].parentNode.offsetHeight;
}
},resetHeaderNodeHeight:function(){
for(var i=0,v,n;(v=this.views[i]);i++){
n=v.headerContentNode.firstChild;
if(n){
n.style.height="";
}
}
},renormalizeRow:function(_111){
var _112=[];
for(var i=0,v,n;(v=this.views[i])&&(n=v.getRowNode(_111));i++){
n.firstChild.style.height="";
_112.push(n);
}
this.normalizeRowNodeHeights(_112);
},getViewWidth:function(_113){
return this.views[_113].getWidth()||this.defaultWidth;
},measureHeader:function(){
this.resetHeaderNodeHeight();
this.forEach(function(_114){
_114.headerContentNode.style.height="";
});
var h=0;
this.forEach(function(_115){
h=Math.max(_115.headerNode.offsetHeight,h);
});
return h;
},measureContent:function(){
var h=0;
this.forEach(function(_116){
h=Math.max(_116.domNode.offsetHeight,h);
});
return h;
},findClient:function(_117){
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
var _118=function(v,l){
with(v.domNode.style){
if(!dojo._isBodyLtr()){
right=l+"px";
}else{
left=l+"px";
}
top=0+"px";
}
with(v.headerNode.style){
if(!dojo._isBodyLtr()){
right=l+"px";
}else{
left=l+"px";
}
top=0;
}
};
for(i=0;(v=this.views[i])&&(i<c);i++){
vw=this.getViewWidth(i);
v.setSize(vw,0);
_118(v,l);
vw=v.domNode.offsetWidth;
l+=vw;
}
i++;
var r=w;
for(var j=len-1;(v=this.views[j])&&(i<=j);j--){
vw=this.getViewWidth(j);
v.setSize(vw,0);
vw=v.domNode.offsetWidth;
r-=vw;
_118(v,r);
}
if(c<len){
v=this.views[c];
vw=Math.max(1,r-l);
v.setSize(vw+"px",0);
_118(v,l);
}
return l;
},renderRow:function(_119,_11a){
var _11b=[];
for(var i=0,v,n,_11c;(v=this.views[i])&&(n=_11a[i]);i++){
_11c=v.renderRow(_119);
n.appendChild(_11c);
_11b.push(_11c);
}
this.normalizeRowNodeHeights(_11b);
},rowRemoved:function(_11d){
this.onEach("rowRemoved",[_11d]);
},updateRow:function(_11e,_11f){
for(var i=0,v;v=this.views[i];i++){
v.updateRow(_11e,_11f);
}
this.renormalizeRow(_11e);
},updateRowStyles:function(_120){
this.onEach("updateRowStyles",[_120]);
},setScrollTop:function(_121){
var top=_121;
for(var i=0,v;v=this.views[i];i++){
top=v.setScrollTop(_121);
}
return top;
},getFirstScrollingView:function(){
for(var i=0,v;(v=this.views[i]);i++){
if(v.hasScrollbar()){
return v;
}
}
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.cell"]){
dojo._hasResource["dojox.grid.compat._grid.cell"]=true;
dojo.provide("dojox.grid.compat._grid.cell");
dojo.declare("dojox.grid.cell",null,{styles:"",constructor:function(_122){
dojo.mixin(this,_122);
if(this.editor){
this.editor=new this.editor(this);
}
},format:function(_123){
var f,i=this.grid.edit.info,d=this.get?this.get(_123):this.value;
d=(d&&d.replace&&this.grid.escapeHTMLInData)?d.replace(/</g,"&lt;"):d;
if(this.editor&&(this.editor.alwaysOn||(i.rowIndex==_123&&i.cell==this))){
return this.editor.format(d,_123);
}else{
return (f=this.formatter)?f.call(this,d,_123):d;
}
},getNode:function(_124){
return this.view.getCellNode(_124,this.index);
},isFlex:function(){
var uw=this.unitWidth;
return uw&&(uw=="auto"||uw.slice(-1)=="%");
},applyEdit:function(_125,_126){
this.grid.edit.applyCellEdit(_125,this,_126);
},cancelEdit:function(_127){
this.grid.doCancelEdit(_127);
},_onEditBlur:function(_128){
if(this.grid.edit.isEditCell(_128,this.index)){
this.grid.edit.apply();
}
},registerOnBlur:function(_129,_12a){
if(this.commitOnBlur){
dojo.connect(_129,"onblur",function(e){
setTimeout(dojo.hitch(this,"_onEditBlur",_12a),250);
});
}
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.layout"]){
dojo._hasResource["dojox.grid.compat._grid.layout"]=true;
dojo.provide("dojox.grid.compat._grid.layout");
dojo.declare("dojox.grid.layout",null,{constructor:function(_12b){
this.grid=_12b;
},cells:[],structure:null,defaultWidth:"6em",setStructure:function(_12c){
this.fieldIndex=0;
this.cells=[];
var s=this.structure=[];
for(var i=0,_12d,rows;(_12d=_12c[i]);i++){
s.push(this.addViewDef(_12d));
}
this.cellCount=this.cells.length;
},addViewDef:function(_12e){
this._defaultCellProps=_12e.defaultCell||{};
return dojo.mixin({},_12e,{rows:this.addRowsDef(_12e.rows||_12e.cells)});
},addRowsDef:function(_12f){
var _130=[];
for(var i=0,row;_12f&&(row=_12f[i]);i++){
_130.push(this.addRowDef(i,row));
}
return _130;
},addRowDef:function(_131,_132){
var _133=[];
for(var i=0,def,cell;(def=_132[i]);i++){
cell=this.addCellDef(_131,i,def);
_133.push(cell);
this.cells.push(cell);
}
return _133;
},addCellDef:function(_134,_135,_136){
var w=0;
if(_136.colSpan>1){
w=0;
}else{
if(!isNaN(_136.width)){
w=_136.width+"em";
}else{
w=_136.width||this.defaultWidth;
}
}
var _137=_136.field!=undefined?_136.field:(_136.get?-1:this.fieldIndex);
if((_136.field!=undefined)||!_136.get){
this.fieldIndex=(_136.field>-1?_136.field:this.fieldIndex)+1;
}
return new dojox.grid.cell(dojo.mixin({},this._defaultCellProps,_136,{grid:this.grid,subrow:_134,layoutIndex:_135,index:this.cells.length,fieldIndex:_137,unitWidth:w}));
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.rows"]){
dojo._hasResource["dojox.grid.compat._grid.rows"]=true;
dojo.provide("dojox.grid.compat._grid.rows");
dojo.declare("dojox.grid.rows",null,{constructor:function(_138){
this.grid=_138;
},linesToEms:2,defaultRowHeight:1,overRow:-2,getHeight:function(_139){
return "";
},getDefaultHeightPx:function(){
return 32;
},prepareStylingRow:function(_13a,_13b){
return {index:_13a,node:_13b,odd:Boolean(_13a&1),selected:this.grid.selection.isSelected(_13a),over:this.isOver(_13a),customStyles:"",customClasses:"dojoxGrid-row"};
},styleRowNode:function(_13c,_13d){
var row=this.prepareStylingRow(_13c,_13d);
this.grid.onStyleRow(row);
this.applyStyles(row);
},applyStyles:function(_13e){
with(_13e){
node.className=customClasses;
var h=node.style.height;
dojox.grid.setStyleText(node,customStyles+";"+(node._style||""));
node.style.height=h;
}
},updateStyles:function(_13f){
this.grid.updateRowStyles(_13f);
},setOverRow:function(_140){
var last=this.overRow;
this.overRow=_140;
if((last!=this.overRow)&&(last>=0)){
this.updateStyles(last);
}
this.updateStyles(this.overRow);
},isOver:function(_141){
return (this.overRow==_141);
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.focus"]){
dojo._hasResource["dojox.grid.compat._grid.focus"]=true;
dojo.provide("dojox.grid.compat._grid.focus");
dojo.declare("dojox.grid.focus",null,{constructor:function(_142){
this.grid=_142;
this.cell=null;
this.rowIndex=-1;
dojo.connect(this.grid.domNode,"onfocus",this,"doFocus");
},tabbingOut:false,focusClass:"dojoxGrid-cell-focus",focusView:null,initFocusView:function(){
this.focusView=this.grid.views.getFirstScrollingView();
},isFocusCell:function(_143,_144){
return (this.cell==_143)&&(this.rowIndex==_144);
},isLastFocusCell:function(){
return (this.rowIndex==this.grid.rowCount-1)&&(this.cell.index==this.grid.layout.cellCount-1);
},isFirstFocusCell:function(){
return (this.rowIndex==0)&&(this.cell.index==0);
},isNoFocusCell:function(){
return (this.rowIndex<0)||!this.cell;
},_focusifyCellNode:function(_145){
var n=this.cell&&this.cell.getNode(this.rowIndex);
if(n){
dojo.toggleClass(n,this.focusClass,_145);
if(_145){
this.scrollIntoView();
try{
if(!this.grid.edit.isEditing()){
dojox.grid.fire(n,"focus");
}
}
catch(e){
}
}
}
},scrollIntoView:function(){
if(!this.cell){
return;
}
var c=this.cell,s=c.view.scrollboxNode,sr={w:s.clientWidth,l:s.scrollLeft,t:s.scrollTop,h:s.clientHeight},n=c.getNode(this.rowIndex),r=c.view.getRowNode(this.rowIndex),rt=this.grid.scroller.findScrollTop(this.rowIndex);
if(n.offsetLeft+n.offsetWidth>sr.l+sr.w){
s.scrollLeft=n.offsetLeft+n.offsetWidth-sr.w;
}else{
if(n.offsetLeft<sr.l){
s.scrollLeft=n.offsetLeft;
}
}
if(rt+r.offsetHeight>sr.t+sr.h){
this.grid.setScrollTop(rt+r.offsetHeight-sr.h);
}else{
if(rt<sr.t){
this.grid.setScrollTop(rt);
}
}
},styleRow:function(_146){
return;
},setFocusIndex:function(_147,_148){
this.setFocusCell(this.grid.getCell(_148),_147);
},setFocusCell:function(_149,_14a){
if(_149&&!this.isFocusCell(_149,_14a)){
this.tabbingOut=false;
this.focusGridView();
this._focusifyCellNode(false);
this.cell=_149;
this.rowIndex=_14a;
this._focusifyCellNode(true);
}
if(dojo.isOpera){
setTimeout(dojo.hitch(this.grid,"onCellFocus",this.cell,this.rowIndex),1);
}else{
this.grid.onCellFocus(this.cell,this.rowIndex);
}
},next:function(){
var row=this.rowIndex,col=this.cell.index+1,cc=this.grid.layout.cellCount-1,rc=this.grid.rowCount-1;
if(col>cc){
col=0;
row++;
}
if(row>rc){
col=cc;
row=rc;
}
this.setFocusIndex(row,col);
},previous:function(){
var row=(this.rowIndex||0),col=(this.cell.index||0)-1;
if(col<0){
col=this.grid.layout.cellCount-1;
row--;
}
if(row<0){
row=0;
col=0;
}
this.setFocusIndex(row,col);
},move:function(_14b,_14c){
var rc=this.grid.rowCount-1,cc=this.grid.layout.cellCount-1,r=this.rowIndex,i=this.cell.index,row=Math.min(rc,Math.max(0,r+_14b)),col=Math.min(cc,Math.max(0,i+_14c));
this.setFocusIndex(row,col);
if(_14b){
this.grid.updateRow(r);
}
},previousKey:function(e){
if(this.isFirstFocusCell()){
this.tabOut(this.grid.domNode);
}else{
dojo.stopEvent(e);
this.previous();
}
},nextKey:function(e){
if(this.isLastFocusCell()){
this.tabOut(this.grid.lastFocusNode);
}else{
dojo.stopEvent(e);
this.next();
}
},tabOut:function(_14d){
this.tabbingOut=true;
_14d.focus();
},focusGridView:function(){
dojox.grid.fire(this.focusView,"focus");
},focusGrid:function(_14e){
this.focusGridView();
this._focusifyCellNode(true);
},doFocus:function(e){
if(e&&e.target!=e.currentTarget){
return;
}
if(!this.tabbingOut&&this.isNoFocusCell()){
this.setFocusIndex(0,0);
}
this.tabbingOut=false;
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.selection"]){
dojo._hasResource["dojox.grid.compat._grid.selection"]=true;
dojo.provide("dojox.grid.compat._grid.selection");
dojo.declare("dojox.grid.selection",null,{constructor:function(_14f){
this.grid=_14f;
this.selected=[];
},multiSelect:true,selected:null,updating:0,selectedIndex:-1,onCanSelect:function(_150){
return this.grid.onCanSelect(_150);
},onCanDeselect:function(_151){
return this.grid.onCanDeselect(_151);
},onSelected:function(_152){
return this.grid.onSelected(_152);
},onDeselected:function(_153){
return this.grid.onDeselected(_153);
},onChanging:function(){
},onChanged:function(){
return this.grid.onSelectionChanged();
},isSelected:function(_154){
return this.selected[_154];
},getFirstSelected:function(){
for(var i=0,l=this.selected.length;i<l;i++){
if(this.selected[i]){
return i;
}
}
return -1;
},getNextSelected:function(_155){
for(var i=_155+1,l=this.selected.length;i<l;i++){
if(this.selected[i]){
return i;
}
}
return -1;
},getSelected:function(){
var _156=[];
for(var i=0,l=this.selected.length;i<l;i++){
if(this.selected[i]){
_156.push(i);
}
}
return _156;
},getSelectedCount:function(){
var c=0;
for(var i=0;i<this.selected.length;i++){
if(this.selected[i]){
c++;
}
}
return c;
},beginUpdate:function(){
if(this.updating==0){
this.onChanging();
}
this.updating++;
},endUpdate:function(){
this.updating--;
if(this.updating==0){
this.onChanged();
}
},select:function(_157){
this.unselectAll(_157);
this.addToSelection(_157);
},addToSelection:function(_158){
_158=Number(_158);
if(this.selected[_158]){
this.selectedIndex=_158;
}else{
if(this.onCanSelect(_158)!==false){
this.selectedIndex=_158;
this.beginUpdate();
this.selected[_158]=true;
this.grid.onSelected(_158);
this.endUpdate();
}
}
},deselect:function(_159){
_159=Number(_159);
if(this.selectedIndex==_159){
this.selectedIndex=-1;
}
if(this.selected[_159]){
if(this.onCanDeselect(_159)===false){
return;
}
this.beginUpdate();
delete this.selected[_159];
this.grid.onDeselected(_159);
this.endUpdate();
}
},setSelected:function(_15a,_15b){
this[(_15b?"addToSelection":"deselect")](_15a);
},toggleSelect:function(_15c){
this.setSelected(_15c,!this.selected[_15c]);
},insert:function(_15d){
this.selected.splice(_15d,0,false);
if(this.selectedIndex>=_15d){
this.selectedIndex++;
}
},remove:function(_15e){
this.selected.splice(_15e,1);
if(this.selectedIndex>=_15e){
this.selectedIndex--;
}
},unselectAll:function(_15f){
for(var i in this.selected){
if((i!=_15f)&&(this.selected[i]===true)){
this.deselect(i);
}
}
},shiftSelect:function(_160,inTo){
var s=(_160>=0?_160:inTo),e=inTo;
if(s>e){
e=s;
s=inTo;
}
for(var i=s;i<=e;i++){
this.addToSelection(i);
}
},clickSelect:function(_161,_162,_163){
this.beginUpdate();
if(!this.multiSelect){
this.select(_161);
}else{
var _164=this.selectedIndex;
if(!_162){
this.unselectAll(_161);
}
if(_163){
this.shiftSelect(_164,_161);
}else{
if(_162){
this.toggleSelect(_161);
}else{
this.addToSelection(_161);
}
}
}
this.endUpdate();
},clickSelectEvent:function(e){
this.clickSelect(e.rowIndex,dojo.isCopyKey(e),e.shiftKey);
},clear:function(){
this.beginUpdate();
this.unselectAll();
this.endUpdate();
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.edit"]){
dojo._hasResource["dojox.grid.compat._grid.edit"]=true;
dojo.provide("dojox.grid.compat._grid.edit");
dojo.declare("dojox.grid.edit",null,{constructor:function(_165){
this.grid=_165;
this.connections=[];
if(dojo.isIE){
this.connections.push(dojo.connect(document.body,"onfocus",dojo.hitch(this,"_boomerangFocus")));
}
},info:{},destroy:function(){
dojo.forEach(this.connections,dojo.disconnect);
},cellFocus:function(_166,_167){
if(this.grid.singleClickEdit||this.isEditRow(_167)){
this.setEditCell(_166,_167);
}else{
this.apply();
}
if(this.isEditing()||(_166&&(_166.editor||0).alwaysOn)){
this._focusEditor(_166,_167);
}
},rowClick:function(e){
if(this.isEditing()&&!this.isEditRow(e.rowIndex)){
this.apply();
}
},styleRow:function(_168){
if(_168.index==this.info.rowIndex){
_168.customClasses+=" dojoxGrid-row-editing";
}
},dispatchEvent:function(e){
var c=e.cell,ed=c&&c.editor;
return ed&&ed.dispatchEvent(e.dispatch,e);
},isEditing:function(){
return this.info.rowIndex!==undefined;
},isEditCell:function(_169,_16a){
return (this.info.rowIndex===_169)&&(this.info.cell.index==_16a);
},isEditRow:function(_16b){
return this.info.rowIndex===_16b;
},setEditCell:function(_16c,_16d){
if(!this.isEditCell(_16d,_16c.index)&&this.grid.canEdit(_16c,_16d)){
this.start(_16c,_16d,this.isEditRow(_16d)||_16c.editor);
}
},_focusEditor:function(_16e,_16f){
dojox.grid.fire(_16e.editor,"focus",[_16f]);
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
},start:function(_170,_171,_172){
this.grid.beginUpdate();
this.editorApply();
if(this.isEditing()&&!this.isEditRow(_171)){
this.applyRowEdit();
this.grid.updateRow(_171);
}
if(_172){
this.info={cell:_170,rowIndex:_171};
this.grid.doStartEdit(_170,_171);
this.grid.updateRow(_171);
}else{
this.info={};
}
this.grid.endUpdate();
this.grid.focus.focusGrid();
this._focusEditor(_170,_171);
this._doCatchBoomerang();
},_editorDo:function(_173){
var c=this.info.cell;
c&&c.editor&&c.editor[_173](this.info.rowIndex);
},editorApply:function(){
this._editorDo("apply");
},editorCancel:function(){
this._editorDo("cancel");
},applyCellEdit:function(_174,_175,_176){
if(this.grid.canEdit(_175,_176)){
this.grid.doApplyCellEdit(_174,_176,_175.fieldIndex);
}
},applyRowEdit:function(){
this.grid.doApplyEdit(this.info.rowIndex);
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
},save:function(_177,_178){
var c=this.info.cell;
if(this.isEditRow(_177)&&(!_178||c.view==_178)&&c.editor){
c.editor.save(c,this.info.rowIndex);
}
},restore:function(_179,_17a){
var c=this.info.cell;
if(this.isEditRow(_17a)&&c.view==_179&&c.editor){
c.editor.restore(c,this.info.rowIndex);
}
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.rowbar"]){
dojo._hasResource["dojox.grid.compat._grid.rowbar"]=true;
dojo.provide("dojox.grid.compat._grid.rowbar");
dojo.declare("dojox.GridRowView",dojox.GridView,{defaultWidth:"3em",noscroll:true,padBorderWidth:2,buildRendering:function(){
this.inherited("buildRendering",arguments);
this.scrollboxNode.style.overflow="hidden";
this.headerNode.style.visibility="hidden";
},getWidth:function(){
return this.viewWidth||this.defaultWidth;
},buildRowContent:function(_17b,_17c){
var w=this.contentNode.offsetWidth-this.padBorderWidth;
_17c.innerHTML="<table style=\"width:"+w+"px;\" role=\"wairole:presentation\"><tr><td class=\"dojoxGrid-rowbar-inner\"></td></tr></table>";
},renderHeader:function(){
},resize:function(){
this.adaptHeight();
},adaptWidth:function(){
},doStyleRowNode:function(_17d,_17e){
var n=["dojoxGrid-rowbar"];
if(this.grid.rows.isOver(_17d)){
n.push("dojoxGrid-rowbar-over");
}
if(this.grid.selection.isSelected(_17d)){
n.push("dojoxGrid-rowbar-selected");
}
_17e.className=n.join(" ");
},domouseover:function(e){
this.grid.onMouseOverRow(e);
},domouseout:function(e){
if(!this.isIntraRowEvent(e)){
this.grid.onMouseOutRow(e);
}
}});
}
if(!dojo._hasResource["dojox.grid.compat._grid.publicEvents"]){
dojo._hasResource["dojox.grid.compat._grid.publicEvents"]=true;
dojo.provide("dojox.grid.compat._grid.publicEvents");
dojox.grid.publicEvents={cellOverClass:"dojoxGrid-cell-over",onKeyEvent:function(e){
this.dispatchKeyEvent(e);
},onContentEvent:function(e){
this.dispatchContentEvent(e);
},onHeaderEvent:function(e){
this.dispatchHeaderEvent(e);
},onStyleRow:function(_17f){
with(_17f){
customClasses+=(odd?" dojoxGrid-row-odd":"")+(selected?" dojoxGrid-row-selected":"")+(over?" dojoxGrid-row-over":"");
}
this.focus.styleRow(_17f);
this.edit.styleRow(_17f);
},onKeyDown:function(e){
if(e.altKey||e.ctrlKey||e.metaKey){
return;
}
var dk=dojo.keys;
switch(e.keyCode){
case dk.ESCAPE:
this.edit.cancel();
break;
case dk.ENTER:
if(!e.shiftKey){
var _180=this.edit.isEditing();
this.edit.apply();
if(!_180){
this.edit.setEditCell(this.focus.cell,this.focus.rowIndex);
}
}
break;
case dk.TAB:
this.focus[e.shiftKey?"previousKey":"nextKey"](e);
break;
case dk.LEFT_ARROW:
case dk.RIGHT_ARROW:
if(!this.edit.isEditing()){
dojo.stopEvent(e);
var _181=(e.keyCode==dk.LEFT_ARROW)?1:-1;
if(dojo._isBodyLtr()){
_181*=-1;
}
this.focus.move(0,_181);
}
break;
case dk.UP_ARROW:
if(!this.edit.isEditing()&&this.focus.rowIndex!=0){
dojo.stopEvent(e);
this.focus.move(-1,0);
}
break;
case dk.DOWN_ARROW:
if(!this.edit.isEditing()&&this.focus.rowIndex+1!=this.model.count){
dojo.stopEvent(e);
this.focus.move(1,0);
}
break;
case dk.PAGE_UP:
if(!this.edit.isEditing()&&this.focus.rowIndex!=0){
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
if(!this.edit.isEditing()&&this.focus.rowIndex+1!=this.model.count){
dojo.stopEvent(e);
if(this.focus.rowIndex!=this.scroller.lastVisibleRow-1){
this.focus.move(this.scroller.lastVisibleRow-this.focus.rowIndex-1,0);
}else{
this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex+1));
this.focus.move(this.scroller.lastVisibleRow-this.scroller.firstVisibleRow-1,0);
}
}
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
dojo.addClass(e.cellNode,this.cellOverClass);
},onCellMouseOut:function(e){
dojo.removeClass(e.cellNode,this.cellOverClass);
},onCellMouseDown:function(e){
},onCellClick:function(e){
this._click[0]=this._click[1];
this._click[1]=e;
if(!this.edit.isEditCell(e.rowIndex,e.cellIndex)){
this.focus.setFocusCell(e.cell,e.rowIndex);
}
this.onRowClick(e);
},onCellDblClick:function(e){
if(dojo.isIE){
this.edit.setEditCell(this._click[1].cell,this._click[1].rowIndex);
}else{
if(this._click[0].rowIndex!=this._click[1].rowIndex){
this.edit.setEditCell(this._click[0].cell,this._click[0].rowIndex);
}else{
this.edit.setEditCell(e.cell,e.rowIndex);
}
}
this.onRowDblClick(e);
},onCellContextMenu:function(e){
this.onRowContextMenu(e);
},onCellFocus:function(_182,_183){
this.edit.cellFocus(_182,_183);
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
dojo.addClass(e.cellNode,this.cellOverClass);
},onHeaderCellMouseOut:function(e){
dojo.removeClass(e.cellNode,this.cellOverClass);
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
dojo.stopEvent(e);
},onStartEdit:function(_184,_185){
},onApplyCellEdit:function(_186,_187,_188){
},onCancelEdit:function(_189){
},onApplyEdit:function(_18a){
},onCanSelect:function(_18b){
return true;
},onCanDeselect:function(_18c){
return true;
},onSelected:function(_18d){
this.updateRowStyles(_18d);
},onDeselected:function(_18e){
this.updateRowStyles(_18e);
},onSelectionChanged:function(){
}};
}
if(!dojo._hasResource["dojox.grid.compat.VirtualGrid"]){
dojo._hasResource["dojox.grid.compat.VirtualGrid"]=true;
dojo.provide("dojox.grid.compat.VirtualGrid");
dojo.declare("dojox.VirtualGrid",[dijit._Widget,dijit._Templated],{templateString:"<div class=\"dojoxGrid\" hidefocus=\"hidefocus\" role=\"wairole:grid\">\r\n\t<div class=\"dojoxGrid-master-header\" dojoAttachPoint=\"viewsHeaderNode\"></div>\r\n\t<div class=\"dojoxGrid-master-view\" dojoAttachPoint=\"viewsNode\"></div>\r\n\t<span dojoAttachPoint=\"lastFocusNode\" tabindex=\"0\"></span>\r\n</div>\r\n",classTag:"dojoxGrid",get:function(_18f){
},rowCount:5,keepRows:75,rowsPerPage:25,autoWidth:false,autoHeight:false,autoRender:true,defaultHeight:"15em",structure:"",elasticView:-1,singleClickEdit:false,_click:null,escapeHTMLInData:true,sortInfo:0,themeable:true,buildRendering:function(){
this.inherited(arguments);
if(this.get==dojox.VirtualGrid.prototype.get){
this.get=null;
}
if(!this.domNode.getAttribute("tabIndex")){
this.domNode.tabIndex="0";
}
this.createScroller();
this.createLayout();
this.createViews();
this.createManagers();
dojox.grid.initTextSizePoll();
this.connect(dojox.grid,"textSizeChanged","textSizeChanged");
dojox.grid.funnelEvents(this.domNode,this,"doKeyEvent",dojox.grid.keyEvents);
this.connect(this,"onShow","renderOnIdle");
},postCreate:function(){
this.styleChanged=this._styleChanged;
this.setStructure(this.structure);
this._click=[];
},destroy:function(){
this.domNode.onReveal=null;
this.domNode.onSizeChange=null;
this.edit.destroy();
this.views.destroyViews();
this.inherited(arguments);
},styleChanged:function(){
this.setStyledClass(this.domNode,"");
},_styleChanged:function(){
this.styleChanged();
this.update();
},textSizeChanged:function(){
setTimeout(dojo.hitch(this,"_textSizeChanged"),1);
},_textSizeChanged:function(){
if(this.domNode){
this.views.forEach(function(v){
v.content.update();
});
this.render();
}
},sizeChange:function(){
dojox.grid.jobs.job(this.id+"SizeChange",50,dojo.hitch(this,"update"));
},renderOnIdle:function(){
setTimeout(dojo.hitch(this,"render"),1);
},createManagers:function(){
this.rows=new dojox.grid.rows(this);
this.focus=new dojox.grid.focus(this);
this.selection=new dojox.grid.selection(this);
this.edit=new dojox.grid.edit(this);
},createScroller:function(){
this.scroller=new dojox.grid.scroller.columns();
this.scroller._pageIdPrefix=this.id+"-";
this.scroller.renderRow=dojo.hitch(this,"renderRow");
this.scroller.removeRow=dojo.hitch(this,"rowRemoved");
},createLayout:function(){
this.layout=new dojox.grid.layout(this);
},createViews:function(){
this.views=new dojox.grid.views(this);
this.views.createView=dojo.hitch(this,"createView");
},createView:function(_190){
if(dojo.isAIR){
var obj=window;
var _191=_190.split(".");
for(var i=0;i<_191.length;i++){
if(typeof obj[_191[i]]=="undefined"){
var _192=_191[0];
for(var j=1;j<=i;j++){
_192+="."+_191[j];
}
throw new Error(_192+" is undefined");
}
obj=obj[_191[i]];
}
var c=obj;
}else{
var c=eval(_190);
}
var view=new c({grid:this});
this.viewsNode.appendChild(view.domNode);
this.viewsHeaderNode.appendChild(view.headerNode);
this.views.addView(view);
return view;
},buildViews:function(){
for(var i=0,vs;(vs=this.layout.structure[i]);i++){
this.createView(vs.type||dojox._scopeName+".GridView").setStructure(vs);
}
this.scroller.setContentNodes(this.views.getContentNodes());
},setStructure:function(_193){
this.views.destroyViews();
this.structure=_193;
if((this.structure)&&(dojo.isString(this.structure))){
this.structure=dojox.grid.getProp(this.structure);
}
if(!this.structure){
this.structure=window["layout"];
}
if(!this.structure){
return;
}
this.layout.setStructure(this.structure);
this._structureChanged();
},_structureChanged:function(){
this.buildViews();
if(this.autoRender){
this.render();
}
},hasLayout:function(){
return this.layout.cells.length;
},resize:function(_194){
this._sizeBox=_194;
this._resize();
this.sizeChange();
},_getPadBorder:function(){
this._padBorder=this._padBorder||dojo._getPadBorderExtents(this.domNode);
return this._padBorder;
},_resize:function(){
if(!this.domNode.parentNode||this.domNode.parentNode.nodeType!=1||!this.hasLayout()){
return;
}
var _195=this._getPadBorder();
if(this.autoHeight){
this.domNode.style.height="auto";
this.viewsNode.style.height="";
}else{
if(this.flex>0){
}else{
if(this.domNode.clientHeight<=_195.h){
if(this.domNode.parentNode==document.body){
this.domNode.style.height=this.defaultHeight;
}else{
this.fitTo="parent";
}
}
}
}
if(this._sizeBox){
dojo.contentBox(this.domNode,this._sizeBox);
}else{
if(this.fitTo=="parent"){
var h=dojo._getContentBox(this.domNode.parentNode).h;
dojo.marginBox(this.domNode,{h:Math.max(0,h)});
}
}
var h=dojo._getContentBox(this.domNode).h;
if(h==0&&!this.autoHeight){
this.viewsHeaderNode.style.display="none";
}else{
this.viewsHeaderNode.style.display="block";
}
this.adaptWidth();
this.adaptHeight();
this.scroller.defaultRowHeight=this.rows.getDefaultHeightPx()+1;
this.postresize();
},adaptWidth:function(){
var w=this.autoWidth?0:this.domNode.clientWidth||(this.domNode.offsetWidth-this._getPadBorder().w);
var vw=this.views.arrange(1,w);
this.views.onEach("adaptWidth");
if(this.autoWidth){
this.domNode.style.width=vw+"px";
}
},adaptHeight:function(){
var vns=this.viewsHeaderNode.style,t=vns.display=="none"?0:this.views.measureHeader();
vns.height=t+"px";
this.views.normalizeHeaderNodeHeight();
var h=(this.autoHeight?-1:Math.max(this.domNode.clientHeight-t,0)||0);
this.views.onEach("setSize",[0,h]);
this.views.onEach("adaptHeight");
this.scroller.windowHeight=h;
},render:function(){
if(!this.domNode){
return;
}
if(!this.hasLayout()){
this.scroller.init(0,this.keepRows,this.rowsPerPage);
return;
}
this.update=this.defaultUpdate;
this.scroller.init(this.rowCount,this.keepRows,this.rowsPerPage);
this.prerender();
this.setScrollTop(0);
this.postrender();
},prerender:function(){
this.keepRows=this.autoHeight?0:this.constructor.prototype.keepRows;
this.scroller.setKeepInfo(this.keepRows);
this.views.render();
this._resize();
},postrender:function(){
this.postresize();
this.focus.initFocusView();
dojo.setSelectable(this.domNode,false);
},postresize:function(){
if(this.autoHeight){
this.viewsNode.style.height=this.views.measureContent()+"px";
}
},renderRow:function(_196,_197){
this.views.renderRow(_196,_197);
},rowRemoved:function(_198){
this.views.rowRemoved(_198);
},invalidated:null,updating:false,beginUpdate:function(){
if(this.invalidated==null){
this.invalidated={rows:[],count:1,all:false,rowCount:undefined};
}else{
this.invalidated.count++;
}
this.updating=true;
},endUpdate:function(){
var i=this.invalidated;
if(--i.count===0){
this.updating=false;
if(i.rows.length>0){
for(var r in i.rows){
this.updateRow(Number(r));
}
this.invalidated.rows=[];
}
if(i.rowCount!=undefined){
this.updateRowCount(i.rowCount);
i.rowCount=undefined;
}
if(i.all){
this.update();
i.all=false;
}
}
},defaultUpdate:function(){
if(!this.domNode){
return;
}
if(this.updating){
this.invalidated.all=true;
return;
}
this.prerender();
this.scroller.invalidateNodes();
this.setScrollTop(this.scrollTop);
this.postrender();
},update:function(){
this.render();
},updateRow:function(_199){
_199=Number(_199);
if(this.updating){
this.invalidated.rows[_199]=true;
}else{
this.views.updateRow(_199,this.rows.getHeight(_199));
this.scroller.rowHeightChanged(_199);
}
},updateRowCount:function(_19a){
if(this.updating){
this.invalidated.rowCount=_19a;
}else{
this.rowCount=_19a;
if(this.layout.cells.length){
this.scroller.updateRowCount(_19a);
this.setScrollTop(this.scrollTop);
}
this._resize();
}
},updateRowStyles:function(_19b){
this.views.updateRowStyles(_19b);
},rowHeightChanged:function(_19c){
this.views.renormalizeRow(_19c);
this.scroller.rowHeightChanged(_19c);
},fastScroll:true,delayScroll:false,scrollRedrawThreshold:(dojo.isIE?100:50),scrollTo:function(_19d){
if(!this.fastScroll){
this.setScrollTop(_19d);
return;
}
var _19e=Math.abs(this.lastScrollTop-_19d);
this.lastScrollTop=_19d;
if(_19e>this.scrollRedrawThreshold||this.delayScroll){
this.delayScroll=true;
this.scrollTop=_19d;
this.views.setScrollTop(_19d);
dojox.grid.jobs.job("dojoxGrid-scroll",200,dojo.hitch(this,"finishScrollJob"));
}else{
this.setScrollTop(_19d);
}
},finishScrollJob:function(){
this.delayScroll=false;
this.setScrollTop(this.scrollTop);
},setScrollTop:function(_19f){
this.scrollTop=this.views.setScrollTop(_19f);
this.scroller.scroll(this.scrollTop);
},scrollToRow:function(_1a0){
this.setScrollTop(this.scroller.findScrollTop(_1a0)+1);
},styleRowNode:function(_1a1,_1a2){
if(_1a2){
this.rows.styleRowNode(_1a1,_1a2);
}
},getCell:function(_1a3){
return this.layout.cells[_1a3];
},setCellWidth:function(_1a4,_1a5){
this.getCell(_1a4).unitWidth=_1a5;
},getCellName:function(_1a6){
return "Cell "+_1a6.index;
},canSort:function(_1a7){
},sort:function(){
},getSortAsc:function(_1a8){
_1a8=_1a8==undefined?this.sortInfo:_1a8;
return Boolean(_1a8>0);
},getSortIndex:function(_1a9){
_1a9=_1a9==undefined?this.sortInfo:_1a9;
return Math.abs(_1a9)-1;
},setSortIndex:function(_1aa,_1ab){
var si=_1aa+1;
if(_1ab!=undefined){
si*=(_1ab?1:-1);
}else{
if(this.getSortIndex()==_1aa){
si=-this.sortInfo;
}
}
this.setSortInfo(si);
},setSortInfo:function(_1ac){
if(this.canSort(_1ac)){
this.sortInfo=_1ac;
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
},doStartEdit:function(_1ad,_1ae){
this.onStartEdit(_1ad,_1ae);
},doApplyCellEdit:function(_1af,_1b0,_1b1){
this.onApplyCellEdit(_1af,_1b0,_1b1);
},doCancelEdit:function(_1b2){
this.onCancelEdit(_1b2);
},doApplyEdit:function(_1b3){
this.onApplyEdit(_1b3);
},addRow:function(){
this.updateRowCount(this.rowCount+1);
},removeSelectedRows:function(){
this.updateRowCount(Math.max(0,this.rowCount-this.selection.getSelected().length));
this.selection.clear();
}});
dojo.mixin(dojox.VirtualGrid.prototype,dojox.grid.publicEvents);
}
if(!dojo._hasResource["dojox.grid.compat._data.fields"]){
dojo._hasResource["dojox.grid.compat._data.fields"]=true;
dojo.provide("dojox.grid.compat._data.fields");
dojo.declare("dojox.grid.data.Mixer",null,{constructor:function(){
this.defaultValue={};
this.values=[];
},count:function(){
return this.values.length;
},clear:function(){
this.values=[];
},build:function(_1b4){
var _1b5=dojo.mixin({owner:this},this.defaultValue);
_1b5.key=_1b4;
this.values[_1b4]=_1b5;
return _1b5;
},getDefault:function(){
return this.defaultValue;
},setDefault:function(_1b6){
for(var i=0,a;(a=arguments[i]);i++){
dojo.mixin(this.defaultValue,a);
}
},get:function(_1b7){
return this.values[_1b7]||this.build(_1b7);
},_set:function(_1b8,_1b9){
var v=this.get(_1b8);
for(var i=1;i<arguments.length;i++){
dojo.mixin(v,arguments[i]);
}
this.values[_1b8]=v;
},set:function(){
if(arguments.length<1){
return;
}
var a=arguments[0];
if(!dojo.isArray(a)){
this._set.apply(this,arguments);
}else{
if(a.length&&a[0]["default"]){
this.setDefault(a.shift());
}
for(var i=0,l=a.length;i<l;i++){
this._set(i,a[i]);
}
}
},insert:function(_1ba,_1bb){
if(_1ba>=this.values.length){
this.values[_1ba]=_1bb;
}else{
this.values.splice(_1ba,0,_1bb);
}
},remove:function(_1bc){
this.values.splice(_1bc,1);
},swap:function(_1bd,_1be){
dojox.grid.arraySwap(this.values,_1bd,_1be);
},move:function(_1bf,_1c0){
dojox.grid.arrayMove(this.values,_1bf,_1c0);
}});
dojox.grid.data.compare=function(a,b){
return (a>b?1:(a==b?0:-1));
};
dojo.declare("dojox.grid.data.Field",null,{constructor:function(_1c1){
this.name=_1c1;
this.compare=dojox.grid.data.compare;
},na:dojox.grid.na});
dojo.declare("dojox.grid.data.Fields",dojox.grid.data.Mixer,{constructor:function(_1c2){
var _1c3=_1c2?_1c2:dojox.grid.data.Field;
this.defaultValue=new _1c3();
},indexOf:function(_1c4){
for(var i=0;i<this.values.length;i++){
var v=this.values[i];
if(v&&v.key==_1c4){
return i;
}
}
return -1;
}});
}
if(!dojo._hasResource["dojox.grid.compat._data.model"]){
dojo._hasResource["dojox.grid.compat._data.model"]=true;
dojo.provide("dojox.grid.compat._data.model");
dojo.declare("dojox.grid.data.Model",null,{constructor:function(_1c5,_1c6){
this.observers=[];
this.fields=new dojox.grid.data.Fields();
if(_1c5){
this.fields.set(_1c5);
}
this.setData(_1c6);
},count:0,updating:0,observer:function(_1c7,_1c8){
this.observers.push({o:_1c7,p:_1c8||"model"});
},notObserver:function(_1c9){
for(var i=0,m,o;(o=this.observers[i]);i++){
if(o.o==_1c9){
this.observers.splice(i,1);
return;
}
}
},notify:function(_1ca,_1cb){
var a=_1cb||[];
for(var i=0,m,o;(o=this.observers[i]);i++){
m=o.p+_1ca;
o=o.o;
(m in o)&&(o[m].apply(o,a));
}
},clear:function(){
this.fields.clear();
this.clearData();
},beginUpdate:function(){
this.notify("BeginUpdate",arguments);
},endUpdate:function(){
this.notify("EndUpdate",arguments);
},clearData:function(){
this.setData(null);
},change:function(){
this.notify("Change",arguments);
},insertion:function(){
this.notify("Insertion",arguments);
this.notify("Change",arguments);
},removal:function(){
this.notify("Removal",arguments);
this.notify("Change",arguments);
},insert:function(_1cc){
if(!this._insert.apply(this,arguments)){
return false;
}
this.insertion.apply(this,dojo._toArray(arguments,1));
return true;
},remove:function(_1cd){
if(!this._remove.apply(this,arguments)){
return false;
}
this.removal.apply(this,arguments);
return true;
},canSort:function(){
return this.sort!=null;
},generateComparator:function(_1ce,_1cf,_1d0,_1d1){
return function(a,b){
var ineq=_1ce(a[_1cf],b[_1cf]);
return ineq?(_1d0?ineq:-ineq):_1d1&&_1d1(a,b);
};
},makeComparator:function(_1d2){
var idx,col,_1d3,_1d4=null;
for(var i=_1d2.length-1;i>=0;i--){
idx=_1d2[i];
col=Math.abs(idx)-1;
if(col>=0){
_1d3=this.fields.get(col);
_1d4=this.generateComparator(_1d3.compare,_1d3.key,idx>0,_1d4);
}
}
return _1d4;
},sort:null,dummy:0});
dojo.declare("dojox.grid.data.Rows",dojox.grid.data.Model,{allChange:function(){
this.notify("AllChange",arguments);
this.notify("Change",arguments);
},rowChange:function(){
this.notify("RowChange",arguments);
},datumChange:function(){
this.notify("DatumChange",arguments);
},beginModifyRow:function(_1d5){
if(!this.cache[_1d5]){
this.cache[_1d5]=this.copyRow(_1d5);
}
},endModifyRow:function(_1d6){
var _1d7=this.cache[_1d6];
if(_1d7){
var data=this.getRow(_1d6);
if(!dojox.grid.arrayCompare(_1d7,data)){
this.update(_1d7,data,_1d6);
}
delete this.cache[_1d6];
}
},cancelModifyRow:function(_1d8){
var _1d9=this.cache[_1d8];
if(_1d9){
this.setRow(_1d9,_1d8);
delete this.cache[_1d8];
}
}});
dojo.declare("dojox.grid.data.Table",dojox.grid.data.Rows,{constructor:function(){
this.cache=[];
},colCount:0,data:null,cache:null,measure:function(){
this.count=this.getRowCount();
this.colCount=this.getColCount();
this.allChange();
},getRowCount:function(){
return (this.data?this.data.length:0);
},getColCount:function(){
return (this.data&&this.data.length?this.data[0].length:this.fields.count());
},badIndex:function(_1da,_1db){
console.error("dojox.grid.data.Table: badIndex");
},isGoodIndex:function(_1dc,_1dd){
return (_1dc>=0&&_1dc<this.count&&(arguments.length<2||(_1dd>=0&&_1dd<this.colCount)));
},getRow:function(_1de){
return this.data[_1de];
},copyRow:function(_1df){
return this.getRow(_1df).slice(0);
},getDatum:function(_1e0,_1e1){
return this.data[_1e0][_1e1];
},get:function(){
throw ("Plain \"get\" no longer supported. Use \"getRow\" or \"getDatum\".");
},setData:function(_1e2){
this.data=(_1e2||[]);
this.allChange();
},setRow:function(_1e3,_1e4){
this.data[_1e4]=_1e3;
this.rowChange(_1e3,_1e4);
this.change();
},setDatum:function(_1e5,_1e6,_1e7){
this.data[_1e6][_1e7]=_1e5;
this.datumChange(_1e5,_1e6,_1e7);
},set:function(){
throw ("Plain \"set\" no longer supported. Use \"setData\", \"setRow\", or \"setDatum\".");
},setRows:function(_1e8,_1e9){
for(var i=0,l=_1e8.length,r=_1e9;i<l;i++,r++){
this.setRow(_1e8[i],r);
}
},update:function(_1ea,_1eb,_1ec){
return true;
},_insert:function(_1ed,_1ee){
dojox.grid.arrayInsert(this.data,_1ee,_1ed);
this.count++;
return true;
},_remove:function(_1ef){
for(var i=_1ef.length-1;i>=0;i--){
dojox.grid.arrayRemove(this.data,_1ef[i]);
}
this.count-=_1ef.length;
return true;
},sort:function(){
this.data.sort(this.makeComparator(arguments));
},swap:function(_1f0,_1f1){
dojox.grid.arraySwap(this.data,_1f0,_1f1);
this.rowChange(this.getRow(_1f0),_1f0);
this.rowChange(this.getRow(_1f1),_1f1);
this.change();
},dummy:0});
dojo.declare("dojox.grid.data.Objects",dojox.grid.data.Table,{constructor:function(_1f2,_1f3,_1f4){
if(!_1f2){
this.autoAssignFields();
}
},allChange:function(){
this.notify("FieldsChange");
this.inherited(arguments);
},autoAssignFields:function(){
var d=this.data[0],i=0,_1f5;
for(var f in d){
_1f5=this.fields.get(i++);
if(!dojo.isString(_1f5.key)){
_1f5.key=f;
}
}
},setData:function(_1f6){
this.data=(_1f6||[]);
this.autoAssignFields();
this.allChange();
},getDatum:function(_1f7,_1f8){
return this.data[_1f7][this.fields.get(_1f8).key];
}});
dojo.declare("dojox.grid.data.Dynamic",dojox.grid.data.Table,{constructor:function(){
this.page=[];
this.pages=[];
},page:null,pages:null,rowsPerPage:100,requests:0,bop:-1,eop:-1,clearData:function(){
this.pages=[];
this.bop=this.eop=-1;
this.setData([]);
},getRowCount:function(){
return this.count;
},getColCount:function(){
return this.fields.count();
},setRowCount:function(_1f9){
this.count=_1f9;
this.change();
},requestsPending:function(_1fa){
},rowToPage:function(_1fb){
return (this.rowsPerPage?Math.floor(_1fb/this.rowsPerPage):_1fb);
},pageToRow:function(_1fc){
return (this.rowsPerPage?this.rowsPerPage*_1fc:_1fc);
},requestRows:function(_1fd,_1fe){
},rowsProvided:function(_1ff,_200){
this.requests--;
if(this.requests==0){
this.requestsPending(false);
}
},requestPage:function(_201){
var row=this.pageToRow(_201);
var _202=Math.min(this.rowsPerPage,this.count-row);
if(_202>0){
this.requests++;
this.requestsPending(true);
setTimeout(dojo.hitch(this,"requestRows",row,_202),1);
}
},needPage:function(_203){
if(!this.pages[_203]){
this.pages[_203]=true;
this.requestPage(_203);
}
},preparePage:function(_204,_205){
if(_204<this.bop||_204>=this.eop){
var _206=this.rowToPage(_204);
this.needPage(_206);
this.bop=_206*this.rowsPerPage;
this.eop=this.bop+(this.rowsPerPage||this.count);
}
},isRowLoaded:function(_207){
return Boolean(this.data[_207]);
},removePages:function(_208){
for(var i=0,r;((r=_208[i])!=undefined);i++){
this.pages[this.rowToPage(r)]=false;
}
this.bop=this.eop=-1;
},remove:function(_209){
this.removePages(_209);
dojox.grid.data.Table.prototype.remove.apply(this,arguments);
},getRow:function(_20a){
var row=this.data[_20a];
if(!row){
this.preparePage(_20a);
}
return row;
},getDatum:function(_20b,_20c){
var row=this.getRow(_20b);
return (row?row[_20c]:this.fields.get(_20c).na);
},setDatum:function(_20d,_20e,_20f){
var row=this.getRow(_20e);
if(row){
row[_20f]=_20d;
this.datumChange(_20d,_20e,_20f);
}else{
console.error("["+this.declaredClass+"] dojox.grid.data.dynamic.set: cannot set data on a non-loaded row");
}
},canSort:function(){
return false;
}});
dojox.grid.data.table=dojox.grid.data.Table;
dojox.grid.data.dynamic=dojox.grid.data.Dynamic;
dojo.declare("dojox.grid.data.DojoData",dojox.grid.data.Dynamic,{constructor:function(_210,_211,args){
this.count=1;
this._rowIdentities={};
this._currentlyProcessing=[];
if(args){
dojo.mixin(this,args);
}
if(this.store){
var f=this.store.getFeatures();
this._canNotify=f["dojo.data.api.Notification"];
this._canWrite=f["dojo.data.api.Write"];
this._canIdentify=f["dojo.data.api.Identity"];
if(this._canNotify){
dojo.connect(this.store,"onSet",this,"_storeDatumChange");
dojo.connect(this.store,"onDelete",this,"_storeDatumDelete");
dojo.connect(this.store,"onNew",this,"_storeDatumNew");
}
if(this._canWrite){
dojo.connect(this.store,"revert",this,"refresh");
}
}
},markupFactory:function(args,node){
return new dojox.grid.data.DojoData(null,null,args);
},query:{name:"*"},store:null,_currentlyProcessing:null,_canNotify:false,_canWrite:false,_canIdentify:false,_rowIdentities:{},clientSort:false,sortFields:null,queryOptions:null,setData:function(_212){
this.store=_212;
this.data=[];
this.allChange();
},setRowCount:function(_213){
this.count=_213;
this.allChange();
},beginReturn:function(_214){
if(this.count!=_214){
this.setRowCount(_214);
}
},_setupFields:function(_215){
if(this.fields._nameMaps){
return;
}
var m={};
var _216=dojo.map(this.store.getAttributes(_215),function(item,idx){
m[item]=idx;
m[idx+".idx"]=item;
return {name:item,key:item};
},this);
this.fields._nameMaps=m;
this.fields.set(_216);
this.notify("FieldsChange");
},_getRowFromItem:function(item){
},_createRow:function(item){
var row={};
row.__dojo_data_item=item;
dojo.forEach(this.fields.values,function(a){
var _217=this.store.getValue(item,a.name);
row[a.name]=(_217===undefined||_217===null)?"":_217;
},this);
return row;
},processRows:function(_218,_219){
if(!_218||_218.length==0){
return;
}
this._setupFields(_218[0]);
dojo.forEach(_218,function(item,idx){
var row=this._createRow(item);
this._setRowId(item,_219.start,idx);
this.setRow(row,_219.start+idx);
},this);
this.endUpdate();
},requestRows:function(_21a,_21b){
this.beginUpdate();
var row=_21a||0;
var _21c={start:row,count:this.rowsPerPage,query:this.query,sort:this.sortFields,queryOptions:this.queryOptions,onBegin:dojo.hitch(this,"beginReturn"),onComplete:dojo.hitch(this,"processRows"),onError:dojo.hitch(this,"processError")};
this.store.fetch(_21c);
},getDatum:function(_21d,_21e){
var row=this.getRow(_21d);
var _21f=this.fields.values[_21e];
return row&&_21f?row[_21f.name]:_21f?_21f.na:"?";
},setDatum:function(_220,_221,_222){
var n=this.fields._nameMaps[_222+".idx"];
if(n){
this.data[_221][n]=_220;
this.datumChange(_220,_221,_222);
}
},copyRow:function(_223){
var row={};
var _224={};
var src=this.getRow(_223);
for(var x in src){
if(src[x]!=_224[x]){
row[x]=src[x];
}
}
return row;
},_attrCompare:function(_225,data){
dojo.forEach(this.fields.values,function(a){
if(_225[a.name]!=data[a.name]){
return false;
}
},this);
return true;
},endModifyRow:function(_226){
var _227=this.cache[_226];
if(_227){
var data=this.getRow(_226);
if(!this._attrCompare(_227,data)){
this.update(_227,data,_226);
}
delete this.cache[_226];
}
},cancelModifyRow:function(_228){
var _229=this.cache[_228];
if(_229){
this.setRow(_229,_228);
delete this.cache[_228];
}
},_setRowId:function(item,_22a,idx){
if(this._canIdentify){
this._rowIdentities[this.store.getIdentity(item)]={rowId:_22a+idx,item:item};
}else{
var _22b=dojo.toJson(this.query)+":start:"+_22a+":idx:"+idx+":sort:"+dojo.toJson(this.sortFields);
this._rowIdentities[_22b]={rowId:_22a+idx,item:item};
}
},_getRowId:function(item,_22c){
var _22d=null;
if(this._canIdentify&&!_22c){
var _22e=this._rowIdentities[this.store.getIdentity(item)];
if(_22e){
_22d=_22e.rowId;
}
}else{
var id;
for(id in this._rowIdentities){
if(this._rowIdentities[id].item===item){
_22d=this._rowIdentities[id].rowId;
break;
}
}
}
return _22d;
},_storeDatumChange:function(item,attr,_22f,_230){
var _231=this._getRowId(item);
var row=this.getRow(_231);
if(row){
row[attr]=_230;
var _232=this.fields._nameMaps[attr];
this.notify("DatumChange",[_230,_231,_232]);
}
},_storeDatumDelete:function(item){
if(dojo.indexOf(this._currentlyProcessing,item)!=-1){
return;
}
var _233=this._getRowId(item,true);
if(_233!=null){
this._removeItems([_233]);
}
},_storeDatumNew:function(item){
if(this._disableNew){
return;
}
this._insertItem(item,this.data.length);
},insert:function(item,_234){
this._disableNew=true;
var i=this.store.newItem(item);
this._disableNew=false;
this._insertItem(i,_234);
},_insertItem:function(_235,_236){
if(!this.fields._nameMaps){
this._setupFields(_235);
}
var row=this._createRow(_235);
for(var i in this._rowIdentities){
var _237=this._rowIdentities[i];
if(_237.rowId>=_236){
_237.rowId++;
}
}
this._setRowId(_235,0,_236);
dojox.grid.data.Dynamic.prototype.insert.apply(this,[row,_236]);
},datumChange:function(_238,_239,_23a){
if(this._canWrite){
var row=this.getRow(_239);
var _23b=this.fields._nameMaps[_23a+".idx"];
this.store.setValue(row.__dojo_data_item,_23b,_238);
}else{
this.notify("DatumChange",arguments);
}
},insertion:function(){
this.notify("Insertion",arguments);
this.notify("Change",arguments);
},removal:function(){
this.notify("Removal",arguments);
this.notify("Change",arguments);
},remove:function(_23c){
for(var i=_23c.length-1;i>=0;i--){
var item=this.data[_23c[i]].__dojo_data_item;
this._currentlyProcessing.push(item);
this.store.deleteItem(item);
}
this._removeItems(_23c);
this._currentlyProcessing=[];
},_removeItems:function(_23d){
dojox.grid.data.Dynamic.prototype.remove.apply(this,arguments);
this._rowIdentities={};
for(var i=0;i<this.data.length;i++){
this._setRowId(this.data[i].__dojo_data_item,0,i);
}
},canSort:function(){
return true;
},sort:function(_23e){
var col=Math.abs(_23e)-1;
this.sortFields=[{"attribute":this.fields.values[col].name,"descending":(_23e>0)}];
this.refresh();
},refresh:function(){
this.clearData(true);
this.requestRows();
},clearData:function(_23f){
this._rowIdentities={};
this.pages=[];
this.bop=this.eop=-1;
this.count=0;
this.setData((_23f?this.store:[]));
},processError:function(_240,_241){
}});
}
if(!dojo._hasResource["dojox.grid.compat._data.editors"]){
dojo._hasResource["dojox.grid.compat._data.editors"]=true;
dojo.provide("dojox.grid.compat._data.editors");
dojo.provide("dojox.grid.compat.editors");
dojo.declare("dojox.grid.editors.Base",null,{constructor:function(_242){
this.cell=_242;
},_valueProp:"value",_formatPending:false,format:function(_243,_244){
},needFormatNode:function(_245,_246){
this._formatPending=true;
dojox.grid.whenIdle(this,"_formatNode",_245,_246);
},cancelFormatNode:function(){
this._formatPending=false;
},_formatNode:function(_247,_248){
if(this._formatPending){
this._formatPending=false;
dojo.setSelectable(this.cell.grid.domNode,true);
this.formatNode(this.getNode(_248),_247,_248);
}
},getNode:function(_249){
return (this.cell.getNode(_249)||0).firstChild||0;
},formatNode:function(_24a,_24b,_24c){
if(dojo.isIE){
dojox.grid.whenIdle(this,"focus",_24c,_24a);
}else{
this.focus(_24c,_24a);
}
},dispatchEvent:function(m,e){
if(m in this){
return this[m](e);
}
},getValue:function(_24d){
return this.getNode(_24d)[this._valueProp];
},setValue:function(_24e,_24f){
var n=this.getNode(_24e);
if(n){
n[this._valueProp]=_24f;
}
},focus:function(_250,_251){
dojox.grid.focusSelectNode(_251||this.getNode(_250));
},save:function(_252){
this.value=this.value||this.getValue(_252);
},restore:function(_253){
this.setValue(_253,this.value);
},_finish:function(_254){
dojo.setSelectable(this.cell.grid.domNode,false);
this.cancelFormatNode(this.cell);
},apply:function(_255){
this.cell.applyEdit(this.getValue(_255),_255);
this._finish(_255);
},cancel:function(_256){
this.cell.cancelEdit(_256);
this._finish(_256);
}});
dojox.grid.editors.base=dojox.grid.editors.Base;
dojo.declare("dojox.grid.editors.Input",dojox.grid.editors.Base,{constructor:function(_257){
this.keyFilter=this.keyFilter||this.cell.keyFilter;
},keyFilter:null,format:function(_258,_259){
this.needFormatNode(_258,_259);
return "<input class=\"dojoxGrid-input\" type=\"text\" value=\""+_258+"\">";
},formatNode:function(_25a,_25b,_25c){
this.inherited(arguments);
this.cell.registerOnBlur(_25a,_25c);
},doKey:function(e){
if(this.keyFilter){
var key=String.fromCharCode(e.charCode);
if(key.search(this.keyFilter)==-1){
dojo.stopEvent(e);
}
}
},_finish:function(_25d){
this.inherited(arguments);
var n=this.getNode(_25d);
try{
dojox.grid.fire(n,"blur");
}
catch(e){
}
}});
dojox.grid.editors.input=dojox.grid.editors.Input;
dojo.declare("dojox.grid.editors.Select",dojox.grid.editors.Input,{constructor:function(_25e){
this.options=this.options||this.cell.options;
this.values=this.values||this.cell.values||this.options;
},format:function(_25f,_260){
this.needFormatNode(_25f,_260);
var h=["<select class=\"dojoxGrid-select\">"];
for(var i=0,o,v;((o=this.options[i])!==undefined)&&((v=this.values[i])!==undefined);i++){
h.push("<option",(_25f==v?" selected":"")," value=\""+v+"\"",">",o,"</option>");
}
h.push("</select>");
return h.join("");
},getValue:function(_261){
var n=this.getNode(_261);
if(n){
var i=n.selectedIndex,o=n.options[i];
return this.cell.returnIndex?i:o.value||o.innerHTML;
}
}});
dojox.grid.editors.select=dojox.grid.editors.Select;
dojo.declare("dojox.grid.editors.AlwaysOn",dojox.grid.editors.Input,{alwaysOn:true,_formatNode:function(_262,_263){
this.formatNode(this.getNode(_263),_262,_263);
},applyStaticValue:function(_264){
var e=this.cell.grid.edit;
e.applyCellEdit(this.getValue(_264),this.cell,_264);
e.start(this.cell,_264,true);
}});
dojox.grid.editors.alwaysOn=dojox.grid.editors.AlwaysOn;
dojo.declare("dojox.grid.editors.Bool",dojox.grid.editors.AlwaysOn,{_valueProp:"checked",format:function(_265,_266){
return "<input class=\"dojoxGrid-input\" type=\"checkbox\""+(_265?" checked=\"checked\"":"")+" style=\"width: auto\" />";
},doclick:function(e){
if(e.target.tagName=="INPUT"){
this.applyStaticValue(e.rowIndex);
}
}});
dojox.grid.editors.bool=dojox.grid.editors.Bool;
}
if(!dojo._hasResource["dijit._Container"]){
dojo._hasResource["dijit._Container"]=true;
dojo.provide("dijit._Container");
dojo.declare("dijit._Container",null,{isContainer:true,buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},addChild:function(_267,_268){
var _269=this.containerNode;
if(_268&&typeof _268=="number"){
var _26a=this.getChildren();
if(_26a&&_26a.length>=_268){
_269=_26a[_268-1].domNode;
_268="after";
}
}
dojo.place(_267.domNode,_269,_268);
if(this._started&&!_267._started){
_267.startup();
}
},removeChild:function(_26b){
if(typeof _26b=="number"){
_26b=this.getChildren()[_26b];
}
if(_26b){
var node=_26b.domNode;
if(node&&node.parentNode){
node.parentNode.removeChild(node);
}
}
},hasChildren:function(){
return this.getChildren().length>0;
},destroyDescendants:function(_26c){
dojo.forEach(this.getChildren(),function(_26d){
_26d.destroyRecursive(_26c);
});
},_getSiblingOfChild:function(_26e,dir){
var node=_26e.domNode,_26f=(dir>0?"nextSibling":"previousSibling");
do{
node=node[_26f];
}while(node&&(node.nodeType!=1||!dijit.byNode(node)));
return node&&dijit.byNode(node);
},getIndexOfChild:function(_270){
return dojo.indexOf(this.getChildren(),_270);
},startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_271){
_271.startup();
});
this.inherited(arguments);
}});
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
var _272=this.dropDown,_273=false;
if(e&&this._opened){
var c=dojo.position(this._buttonNode,true);
if(!(e.pageX>=c.x&&e.pageX<=c.x+c.w)||!(e.pageY>=c.y&&e.pageY<=c.y+c.h)){
var t=e.target;
while(t&&!_273){
if(dojo.hasClass(t,"dijitPopup")){
_273=true;
}else{
t=t.parentNode;
}
}
if(_273){
t=e.target;
if(_272.onItemClick){
var _274;
while(t&&!(_274=dijit.byNode(t))){
t=t.parentNode;
}
if(_274&&_274.onClick&&_274.getParent){
_274.getParent().onItemClick(_274,e);
}
}
return;
}
}
}
if(this._opened&&_272.focus&&_272.autoFocus!==false){
window.setTimeout(dojo.hitch(_272,"focus"),1);
}
},_onDropDownClick:function(e){
if(this._stopClickEvents){
dojo.stopEvent(e);
}
},buildRendering:function(){
this.inherited(arguments);
this._buttonNode=this._buttonNode||this.focusNode||this.domNode;
this._popupStateNode=this._popupStateNode||this.focusNode||this._buttonNode;
var _275={"after":this.isLeftToRight()?"Right":"Left","before":this.isLeftToRight()?"Left":"Right","above":"Up","below":"Down","left":"Left","right":"Right"}[this.dropDownPosition[0]]||this.dropDownPosition[0]||"Down";
dojo.addClass(this._arrowWrapperNode||this._buttonNode,"dijit"+_275+"ArrowButton");
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
var d=this.dropDown,_276=e.target;
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
if(!this._opened&&(e.charOrCode==dojo.keys.DOWN_ARROW||((e.charOrCode==dojo.keys.ENTER||e.charOrCode==" ")&&((_276.tagName||"").toLowerCase()!=="input"||(_276.type&&_276.type.toLowerCase()!=="text"))))){
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
var _277=dijit._curFocus&&this.dropDown&&dojo.isDescendant(dijit._curFocus,this.dropDown.domNode);
this.closeDropDown(_277);
this.inherited(arguments);
},isLoaded:function(){
return true;
},loadDropDown:function(_278){
_278();
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
var _279=this.dropDown,_27a=_279.domNode,_27b=this._aroundNode||this.domNode,self=this;
if(!this._preparedNode){
this._preparedNode=true;
if(_27a.style.width){
this._explicitDDWidth=true;
}
if(_27a.style.height){
this._explicitDDHeight=true;
}
}
if(this.maxHeight||this.forceWidth||this.autoWidth){
var _27c={display:"",visibility:"hidden"};
if(!this._explicitDDWidth){
_27c.width="";
}
if(!this._explicitDDHeight){
_27c.height="";
}
dojo.style(_27a,_27c);
var _27d=this.maxHeight;
if(_27d==-1){
var _27e=dojo.window.getBox(),_27f=dojo.position(_27b,false);
_27d=Math.floor(Math.max(_27f.y,_27e.h-(_27f.y+_27f.h)));
}
if(_279.startup&&!_279._started){
_279.startup();
}
dijit.popup.moveOffScreen(_279);
var mb=dojo._getMarginSize(_27a);
var _280=(_27d&&mb.h>_27d);
dojo.style(_27a,{overflowX:"hidden",overflowY:_280?"auto":"hidden"});
if(_280){
mb.h=_27d;
if("w" in mb){
mb.w+=16;
}
}else{
delete mb.h;
}
if(this.forceWidth){
mb.w=_27b.offsetWidth;
}else{
if(this.autoWidth){
mb.w=Math.max(mb.w,_27b.offsetWidth);
}else{
delete mb.w;
}
}
if(dojo.isFunction(_279.resize)){
_279.resize(mb);
}else{
dojo.marginBox(_27a,mb);
}
}
var _281=dijit.popup.open({parent:this,popup:_279,around:_27b,orient:dijit.getPopupAroundAlignment((this.dropDownPosition&&this.dropDownPosition.length)?this.dropDownPosition:["below"],this.isLeftToRight()),onExecute:function(){
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
return _281;
},closeDropDown:function(_282){
if(this._opened){
if(_282){
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
var _283=dijit.byNode(node);
if(_283&&typeof _283._onSubmit=="function"){
_283._onSubmit(e);
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
},_fillContent:function(_284){
if(_284&&(!this.params||!("label" in this.params))){
this.set("label",_284.innerHTML);
}
},_setShowLabelAttr:function(val){
if(this.containerNode){
dojo.toggleClass(this.containerNode,"dijitDisplayNone",!val);
}
this._set("showLabel",val);
},onClick:function(e){
return true;
},_clicked:function(e){
},setLabel:function(_285){
dojo.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0");
this.set("label",_285);
},_setLabelAttr:function(_286){
this._set("label",_286);
this.containerNode.innerHTML=_286;
if(this.showLabel==false&&!this.params.title){
this.titleNode.title=dojo.trim(this.containerNode.innerText||this.containerNode.textContent||"");
}
},_setIconClassAttr:function(val){
var _287=this.iconClass||"dijitNoIcon",_288=val||"dijitNoIcon";
dojo.replaceClass(this.iconNode,_288,_287);
this._set("iconClass",val);
}});
dojo.declare("dijit.form.DropDownButton",[dijit.form.Button,dijit._Container,dijit._HasDropDown],{baseClass:"dijitDropDownButton",templateString:dojo.cache("dijit.form","templates/DropDownButton.html","<span class=\"dijit dijitReset dijitInline\"\r\n\t><span class='dijitReset dijitInline dijitButtonNode'\r\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\" dojoAttachPoint=\"_buttonNode\"\r\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\r\n\t\t\tdojoAttachPoint=\"focusNode,titleNode,_arrowWrapperNode\"\r\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\r\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\r\n\t\t\t\tdojoAttachPoint=\"iconNode\"\r\n\t\t\t></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\r\n\t\t\t\tdojoAttachPoint=\"containerNode,_popupStateNode\"\r\n\t\t\t\tid=\"${id}_label\"\r\n\t\t\t></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\r\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\r\n\t\t></span\r\n\t></span\r\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\r\n\t\tdojoAttachPoint=\"valueNode\"\r\n/></span>\r\n"),_fillContent:function(){
if(this.srcNodeRef){
var _289=dojo.query("*",this.srcNodeRef);
dijit.form.DropDownButton.superclass._fillContent.call(this,_289[0]);
this.dropDownContainer=this.srcNodeRef;
}
},startup:function(){
if(this._started){
return;
}
if(!this.dropDown&&this.dropDownContainer){
var _28a=dojo.query("[widgetId]",this.dropDownContainer)[0];
this.dropDown=dijit.byNode(_28a);
delete this.dropDownContainer;
}
if(this.dropDown){
dijit.popup.hide(this.dropDown);
}
this.inherited(arguments);
},isLoaded:function(){
var _28b=this.dropDown;
return (!!_28b&&(!_28b.href||_28b.isLoaded));
},loadDropDown:function(){
var _28c=this.dropDown;
if(!_28c){
return;
}
if(!this.isLoaded()){
var _28d=dojo.connect(_28c,"onLoad",this,function(){
dojo.disconnect(_28d);
this.openDropDown();
});
_28c.refresh();
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
},focus:function(_28e){
if(!this.disabled){
dijit.focus(_28e=="start"?this.titleNode:this._popupStateNode);
}
}});
dojo.declare("dijit.form.ToggleButton",dijit.form.Button,{baseClass:"dijitToggleButton",checked:false,attributeMap:dojo.mixin(dojo.clone(dijit.form.Button.prototype.attributeMap),{checked:"focusNode"}),_clicked:function(evt){
this.set("checked",!this.checked);
},_setCheckedAttr:function(_28f,_290){
this._set("checked",_28f);
dojo.attr(this.focusNode||this.domNode,"checked",_28f);
dijit.setWaiState(this.focusNode||this.domNode,"pressed",_28f);
this._handleOnChange(_28f,_290);
},setChecked:function(_291){
dojo.deprecated("setChecked("+_291+") is deprecated. Use set('checked',"+_291+") instead.","","2.0");
this.set("checked",_291);
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
dojo.declare("dijit.Calendar",[dijit._Widget,dijit._Templated,dijit._CssStateMixin],{templateString:dojo.cache("dijit","templates/Calendar.html","<table cellspacing=\"0\" cellpadding=\"0\" class=\"dijitCalendarContainer\" role=\"grid\" dojoAttachEvent=\"onkeypress: _onKeyPress\" aria-labelledby=\"${id}_year\">\r\n\t<thead>\r\n\t\t<tr class=\"dijitReset dijitCalendarMonthContainer\" valign=\"top\">\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementMonth\">\r\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarDecrease\" role=\"presentation\"/>\r\n\t\t\t\t<span dojoAttachPoint=\"decreaseArrowNode\" class=\"dijitA11ySideArrow\">-</span>\r\n\t\t\t</th>\r\n\t\t\t<!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 \r\n\t\t\t      WaveMaker: Moved year into header for cleaner mobile UI -->\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementYear\">\r\n\t\t\t  <span dojoAttachPoint=\"previousYearLabelNode\" class=\"dijitInline dijitCalendarPreviousYear\"></span>\r\n\t\t\t</th>\r\n\r\n\t\t\t<th class='dijitReset' colspan=\"3\">\r\n\t\t\t\t<div dojoType=\"dijit.form.DropDownButton\" dojoAttachPoint=\"monthDropDownButton\"\r\n\t\t\t\t\tid=\"${id}_mddb\" tabIndex=\"-1\">\r\n\t\t\t\t</div>\r\n\t\t\t</th>\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementYear\">\r\n\t\t\t  <span dojoAttachPoint=\"nextYearLabelNode\" class=\"dijitInline dijitCalendarNextYear\"></span>\r\n\t\t\t</th>\r\n\r\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementMonth\">\r\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarIncrease\" role=\"presentation\"/>\r\n\t\t\t\t<span dojoAttachPoint=\"increaseArrowNode\" class=\"dijitA11ySideArrow\">+</span>\r\n\t\t\t</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th class=\"dijitReset dijitCalendarDayLabelTemplate\" role=\"columnheader\"><span class=\"dijitCalendarDayLabel\"></span></th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody dojoAttachEvent=\"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp\" class=\"dijitReset dijitCalendarBodyContainer\">\r\n\t\t<tr class=\"dijitReset dijitCalendarWeekTemplate\" role=\"row\">\r\n\t\t\t<td class=\"dijitReset dijitCalendarDateTemplate\" role=\"gridcell\"><span class=\"dijitCalendarDateLabel\"></span></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n\t<!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 \r\n\tWaveMaker: Moved year into header for cleaner mobile UI -->\r\n\t<tfoot class=\"dijitReset dijitCalendarYearContainer\" style='display:none'>\r\n\t\t<tr>\r\n\t\t\t<td class='dijitReset' valign=\"top\" colspan=\"7\">\r\n\t\t\t\t<h3 class=\"dijitCalendarYearLabel\">\r\n\t\t\t\t<span dojoAttachPoint=\"currentYearLabelNode\" class=\"dijitInline dijitCalendarSelectedYear\" id=\"${id}_year\"></span>\r\n\t\t\t\t</h3>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tfoot>\r\n</table>\r\n"),widgetsInTemplate:true,value:new Date(""),datePackage:"dojo.date",dayWidth:"narrow",tabIndex:"0",currentFocus:new Date(),baseClass:"dijitCalendar",cssStateNodes:{"decrementMonth":"dijitCalendarArrow","incrementMonth":"dijitCalendarArrow","previousYearLabelNode":"dijitCalendarPreviousYear","nextYearLabelNode":"dijitCalendarNextYear"},_isValidDate:function(_292){
return _292&&!isNaN(_292)&&typeof _292=="object"&&_292.toString()!=this.constructor.prototype.value.toString();
},setValue:function(_293){
dojo.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");
this.set("value",_293);
},_getValueAttr:function(){
var _294=new this.dateClassObj(this.value);
_294.setHours(0,0,0,0);
if(_294.getDate()<this.value.getDate()){
_294=this.dateFuncObj.add(_294,"hour",1);
}
return _294;
},_setValueAttr:function(_295,_296){
if(_295){
_295=new this.dateClassObj(_295);
}
if(this._isValidDate(_295)){
if(!this._isValidDate(this.value)||this.dateFuncObj.compare(_295,this.value)){
_295.setHours(1,0,0,0);
if(!this.isDisabledDate(_295,this.lang)){
this._set("value",_295);
var _297=dojo.query("[dijitDateValue="+_295.valueOf()+"]",this.domNode);
if(_297.length){
dojo.addClass(_297[0],"dijitCalendarSelectedDate");
}
this.set("currentFocus",_295);
if(_296||typeof _296=="undefined"){
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
var _298=new this.dateClassObj(this.currentFocus);
_298.setDate(1);
var _299=_298.getDay(),_29a=this.dateFuncObj.getDaysInMonth(_298),_29b=this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(_298,"month",-1)),_29c=new this.dateClassObj(),_29d=dojo.cldr.supplemental.getFirstDayOfWeek(this.lang);
if(_29d>_299){
_29d-=7;
}
dojo.query(".dijitCalendarDateTemplate",this.domNode).forEach(function(_29e,i){
i+=_29d;
var date=new this.dateClassObj(_298),_29f,_2a0="dijitCalendar",adj=0;
if(i<_299){
_29f=_29b-_299+i+1;
adj=-1;
_2a0+="Previous";
}else{
if(i>=(_299+_29a)){
_29f=i-_299-_29a+1;
adj=1;
_2a0+="Next";
}else{
_29f=i-_299+1;
_2a0+="Current";
}
}
if(adj){
date=this.dateFuncObj.add(date,"month",adj);
}
date.setDate(_29f);
if(!this.dateFuncObj.compare(date,_29c,"date")){
_2a0="dijitCalendarCurrentDate "+_2a0;
}
if(this._isSelectedDate(date,this.lang)){
_2a0="dijitCalendarSelectedDate "+_2a0;
}
if(this.isDisabledDate(date,this.lang)){
_2a0="dijitCalendarDisabledDate "+_2a0;
}
var _2a1=this.getClassForDate(date,this.lang);
if(_2a1){
_2a0=_2a1+" "+_2a0;
}
_29e.className=_2a0+"Month dijitCalendarDateTemplate";
_29e.dijitDateValue=date.valueOf();
dojo.attr(_29e,"dijitDateValue",date.valueOf());
var _2a2=dojo.query(".dijitCalendarDateLabel",_29e)[0],text=date.getDateLocalized?date.getDateLocalized(this.lang):date.getDate();
this._setText(_2a2,text);
},this);
var _2a3=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,_298);
this.monthDropDownButton.dropDown.set("months",_2a3);
var _2a4=this.dateLocaleModule.getNames("months","abbr","standAlone",this.lang,_298);
this.monthDropDownButton.containerNode.innerHTML=(dojo.isIE==6?"":"<div class='dijitSpacer'>"+this.monthDropDownButton.dropDown.domNode.innerHTML+"</div>")+"<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>"+_2a4[_298.getMonth()]+" "+_298.getFullYear()+"</div>";
var y=_298.getFullYear()-1;
var d=new this.dateClassObj();
dojo.forEach(["previous","current","next"],function(name){
d.setFullYear(y++);
this._setText(this[name+"YearLabelNode"],this.dateLocaleModule.format(d,{selector:"year",locale:this.lang}));
},this);
},goToToday:function(){
this.set("value",new this.dateClassObj());
},constructor:function(args){
var _2a5=(args.datePackage&&(args.datePackage!="dojo.date"))?args.datePackage+".Date":"Date";
this.dateClassObj=dojo.getObject(_2a5,false);
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
var _2a6=dojo.hitch(this,function(_2a7,n){
var _2a8=dojo.query(_2a7,this.domNode)[0];
for(var i=0;i<n;i++){
_2a8.parentNode.appendChild(_2a8.cloneNode(true));
}
});
_2a6(".dijitCalendarDayLabelTemplate",6);
_2a6(".dijitCalendarDateTemplate",6);
_2a6(".dijitCalendarWeekTemplate",5);
var _2a9=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang);
var _2aa=dojo.cldr.supplemental.getFirstDayOfWeek(this.lang);
dojo.query(".dijitCalendarDayLabel",this.domNode).forEach(function(_2ab,i){
this._setText(_2ab,_2a9[(i+_2aa)%7]);
},this);
var _2ac=new this.dateClassObj(this.currentFocus);
this.monthDropDownButton.dropDown=new dijit.Calendar._MonthDropDown({id:this.id+"_mdd",onChange:dojo.hitch(this,"_onMonthSelect")});
this.set("currentFocus",_2ac,false);
var _2ad=this;
var _2ae=function(_2af,_2b0,adj){
_2ad._connects.push(dijit.typematic.addMouseListener(_2ad[_2af],_2ad,function(_2b1){
if(_2b1>=0){
_2ad._adjustDisplay(_2b0,adj);
}
},0.8,500));
};
_2ae("incrementMonth","month",1);
_2ae("decrementMonth","month",-1);
_2ae("nextYearLabelNode","year",1);
_2ae("previousYearLabelNode","year",-1);
},_adjustDisplay:function(part,_2b2){
this._setCurrentFocusAttr(this.dateFuncObj.add(this.currentFocus,part,_2b2));
},_setCurrentFocusAttr:function(date,_2b3){
var _2b4=this.currentFocus,_2b5=_2b4?dojo.query("[dijitDateValue="+_2b4.valueOf()+"]",this.domNode)[0]:null;
date=new this.dateClassObj(date);
date.setHours(1,0,0,0);
this._set("currentFocus",date);
this._populateGrid();
var _2b6=dojo.query("[dijitDateValue="+date.valueOf()+"]",this.domNode)[0];
_2b6.setAttribute("tabIndex",this.tabIndex);
if(this._focused||_2b3){
_2b6.focus();
}
if(_2b5&&_2b5!=_2b6){
if(dojo.isWebKit){
_2b5.setAttribute("tabIndex","-1");
}else{
_2b5.removeAttribute("tabIndex");
}
}
},focus:function(){
this._setCurrentFocusAttr(this.currentFocus,true);
},_onMonthSelect:function(_2b7){
this.currentFocus=this.dateFuncObj.add(this.currentFocus,"month",_2b7-this.currentFocus.getMonth());
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
var dk=dojo.keys,_2b8=-1,_2b9,_2ba=this.currentFocus;
switch(evt.keyCode){
case dk.RIGHT_ARROW:
_2b8=1;
case dk.LEFT_ARROW:
_2b9="day";
if(!this.isLeftToRight()){
_2b8*=-1;
}
break;
case dk.DOWN_ARROW:
_2b8=1;
case dk.UP_ARROW:
_2b9="week";
break;
case dk.PAGE_DOWN:
_2b8=1;
case dk.PAGE_UP:
_2b9=evt.ctrlKey||evt.altKey?"year":"month";
break;
case dk.END:
_2ba=this.dateFuncObj.add(_2ba,"month",1);
_2b9="day";
case dk.HOME:
_2ba=new this.dateClassObj(_2ba);
_2ba.setDate(1);
break;
case dk.ENTER:
case dk.SPACE:
this.set("value",this.currentFocus);
break;
default:
return true;
}
if(_2b9){
_2ba=this.dateFuncObj.add(_2ba,_2b9,_2b8);
}
this._setCurrentFocusAttr(_2ba);
return false;
},_onKeyPress:function(evt){
if(!this.handleKey(evt)){
dojo.stopEvent(evt);
}
},onValueSelected:function(date){
},onChange:function(date){
},_isSelectedDate:function(_2bb,_2bc){
return this._isValidDate(this.value)&&!this.dateFuncObj.compare(_2bb,this.value,"date");
},isDisabledDate:function(_2bd,_2be){
},getClassForDate:function(_2bf,_2c0){
}});
dojo.declare("dijit.Calendar._MonthDropDown",[dijit._Widget,dijit._Templated],{months:[],templateString:"<div class='dijitCalendarMonthMenu dijitMenu' "+"dojoAttachEvent='onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'></div>",_setMonthsAttr:function(_2c1){
this.domNode.innerHTML=dojo.map(_2c1,function(_2c2,idx){
return _2c2?"<div class='dijitCalendarMonthLabel' month='"+idx+"'>"+_2c2+"</div>":"";
}).join("");
},_onClick:function(evt){
this.onChange(dojo.attr(evt.target,"month"));
},onChange:function(_2c3){
},_onMenuHover:function(evt){
dojo.toggleClass(evt.target,"dijitCalendarMonthLabelHover",evt.type=="mouseover");
}});
}
if(!dojo._hasResource["dijit.form._DateTimeTextBox"]){
dojo._hasResource["dijit.form._DateTimeTextBox"]=true;
dojo.provide("dijit.form._DateTimeTextBox");
new Date("X");
dojo.declare("dijit.form._DateTimeTextBox",[dijit.form.RangeBoundTextBox,dijit._HasDropDown],{templateString:dojo.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t>\r\n\t\t\t    <!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0\r\n\t\t\t      WaveMaker: Unfortunate hack to replace input with span to avoid focus issues with mobile that cause keyboards to pop open -->\r\n<${buttonNodeType} class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),hasDownArrow:true,openOnClick:true,regExpGen:dojo.date.locale.regexp,datePackage:"dojo.date",compare:function(val1,val2){
var _2c4=this._isInvalidDate(val1);
var _2c5=this._isInvalidDate(val2);
return _2c4?(_2c5?0:-1):(_2c5?1:dojo.date.compare(val1,val2,this._selector));
},forceWidth:true,format:function(_2c6,_2c7){
if(!_2c6){
return "";
}
return this.dateLocaleModule.format(_2c6,_2c7);
},"parse":function(_2c8,_2c9){
return this.dateLocaleModule.parse(_2c8,_2c9)||(this._isEmpty(_2c8)?null:undefined);
},serialize:function(val,_2ca){
if(val.toGregorian){
val=val.toGregorian();
}
return dojo.date.stamp.toISOString(val,_2ca);
},dropDownDefaultValue:new Date(),value:new Date(""),_blankValue:null,popupClass:"",_selector:"",constructor:function(args){
var _2cb=args.datePackage?args.datePackage+".Date":"Date";
this.dateClassObj=dojo.getObject(_2cb,false);
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
},_setConstraintsAttr:function(_2cc){
_2cc.selector=this._selector;
_2cc.fullYear=true;
var _2cd=dojo.date.stamp.fromISOString;
if(typeof _2cc.min=="string"){
_2cc.min=_2cd(_2cc.min);
}
if(typeof _2cc.max=="string"){
_2cc.max=_2cd(_2cc.max);
}
this.inherited(arguments);
},_isInvalidDate:function(_2ce){
return !_2ce||isNaN(_2ce)||typeof _2ce!="object"||_2ce.toString()==this._invalidDate;
},_setValueAttr:function(_2cf,_2d0,_2d1){
if(_2cf!==undefined){
if(typeof _2cf=="string"){
_2cf=dojo.date.stamp.fromISOString(_2cf);
}
if(this._isInvalidDate(_2cf)){
_2cf=null;
}
if(_2cf instanceof Date&&!(this.dateClassObj instanceof Date)){
_2cf=new this.dateClassObj(_2cf);
}
}
this.inherited(arguments);
if(this.dropDown){
this.dropDown.set("value",_2cf,false);
}
},_set:function(attr,_2d2){
if(attr=="value"&&this.value instanceof Date&&this.compare(_2d2,this.value)==0){
return;
}
this.inherited(arguments);
},_setDropDownDefaultValueAttr:function(val){
if(this._isInvalidDate(val)){
val=new this.dateClassObj();
}
this.dropDownDefaultValue=val;
},openDropDown:function(_2d3){
if(this.dropDown){
this.dropDown.destroy();
}
var _2d4=dojo.getObject(this.popupClass,false),_2d5=this,_2d6=this.get("value");
this.dropDown=new _2d4({onChange:function(_2d7){
dijit.form._DateTimeTextBox.superclass._setValueAttr.call(_2d5,_2d7,true);
},id:this.id+"_popup",dir:_2d5.dir,lang:_2d5.lang,value:_2d6,currentFocus:!this._isInvalidDate(_2d6)?_2d6:this.dropDownDefaultValue,constraints:_2d5.constraints,filterString:_2d5.filterString,datePackage:_2d5.datePackage,isDisabledDate:function(date){
return !_2d5.rangeCheck(date,_2d5.constraints);
}});
this.inherited(arguments);
},_getDisplayedValueAttr:function(){
return this.textbox.value;
},_setDisplayedValueAttr:function(_2d8,_2d9){
this._setValueAttr(this.parse(_2d8,this.constraints),_2d9,_2d8);
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
dojo.declare("dijit._TimePicker",[dijit._Widget,dijit._Templated],{templateString:dojo.cache("dijit","templates/TimePicker.html","<div id=\"widget_${id}\" class=\"dijitMenu\"\r\n    ><div dojoAttachPoint=\"upArrow\" class=\"dijitButtonNode dijitUpArrowButton\" dojoAttachEvent=\"onmouseenter:_buttonMouse,onmouseleave:_buttonMouse\"\r\n\t\t><div class=\"dijitReset dijitInline dijitArrowButtonInner\" role=\"presentation\">&nbsp;</div\r\n\t\t><div class=\"dijitArrowButtonChar\">&#9650;</div></div\r\n    ><div dojoAttachPoint=\"timeMenu,focusNode\" dojoAttachEvent=\"onclick:_onOptionSelected,onmouseover,onmouseout\"></div\r\n    ><div dojoAttachPoint=\"downArrow\" class=\"dijitButtonNode dijitDownArrowButton\" dojoAttachEvent=\"onmouseenter:_buttonMouse,onmouseleave:_buttonMouse\"\r\n\t\t><div class=\"dijitReset dijitInline dijitArrowButtonInner\" role=\"presentation\">&nbsp;</div\r\n\t\t><div class=\"dijitArrowButtonChar\">&#9660;</div></div\r\n></div>\r\n"),baseClass:"dijitTimePicker",clickableIncrement:"T00:15:00",visibleIncrement:"T01:00:00",visibleRange:"T05:00:00",value:new Date(),_visibleIncrement:2,_clickableIncrement:1,_totalIncrements:10,constraints:{},serialize:dojo.date.stamp.toISOString,setValue:function(_2da){
dojo.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");
this.set("value",_2da);
},_setValueAttr:function(date){
this._set("value",date);
this._showText();
},_setFilterStringAttr:function(val){
this._set("filterString",val);
this._showText();
},isDisabledDate:function(_2db,_2dc){
return false;
},_getFilteredNodes:function(_2dd,_2de,_2df,_2e0){
var _2e1=[],_2e2=_2e0?_2e0.date:this._refDate,n,i=_2dd,max=this._maxIncrement+Math.abs(i),chk=_2df?-1:1,dec=_2df?1:0,inc=1-dec;
do{
i=i-dec;
n=this._createOption(i);
if(n){
if((_2df&&n.date>_2e2)||(!_2df&&n.date<_2e2)){
break;
}
_2e1[_2df?"unshift":"push"](n);
_2e2=n.date;
}
i=i+inc;
}while(_2e1.length<_2de&&(i*chk)<max);
return _2e1;
},_showText:function(){
var _2e3=dojo.date.stamp.fromISOString;
this.timeMenu.innerHTML="";
this._clickableIncrementDate=_2e3(this.clickableIncrement);
this._visibleIncrementDate=_2e3(this.visibleIncrement);
this._visibleRangeDate=_2e3(this.visibleRange);
var _2e4=function(date){
return date.getHours()*60*60+date.getMinutes()*60+date.getSeconds();
},_2e5=_2e4(this._clickableIncrementDate),_2e6=_2e4(this._visibleIncrementDate),_2e7=_2e4(this._visibleRangeDate),time=(this.value||this.currentFocus).getTime();
this._refDate=new Date(time-time%(_2e6*1000));
this._refDate.setFullYear(1970,0,1);
this._clickableIncrement=1;
this._totalIncrements=_2e7/_2e5;
this._visibleIncrement=_2e6/_2e5;
this._maxIncrement=(60*60*24)/_2e5;
var _2e8=this._getFilteredNodes(0,Math.min(this._totalIncrements>>1,10)-1),_2e9=this._getFilteredNodes(0,Math.min(this._totalIncrements,10)-_2e8.length,true,_2e8[0]);
dojo.forEach(_2e9.concat(_2e8),function(n){
this.timeMenu.appendChild(n);
},this);
},constructor:function(){
this.constraints={};
},postMixInProperties:function(){
this.inherited(arguments);
this._setConstraintsAttr(this.constraints);
},_setConstraintsAttr:function(_2ea){
dojo.mixin(this,_2ea);
if(!_2ea.locale){
_2ea.locale=this.lang;
}
},postCreate:function(){
this.connect(this.timeMenu,dojo.isIE?"onmousewheel":"DOMMouseScroll","_mouseWheeled");
this._connects.push(dijit.typematic.addMouseListener(this.upArrow,this,"_onArrowUp",33,250));
this._connects.push(dijit.typematic.addMouseListener(this.downArrow,this,"_onArrowDown",33,250));
this.inherited(arguments);
},_buttonMouse:function(e){
dojo.toggleClass(e.currentTarget,e.currentTarget==this.upArrow?"dijitUpArrowHover":"dijitDownArrowHover",e.type=="mouseenter"||e.type=="mouseover");
},_createOption:function(_2eb){
var date=new Date(this._refDate);
var _2ec=this._clickableIncrementDate;
date.setHours(date.getHours()+_2ec.getHours()*_2eb,date.getMinutes()+_2ec.getMinutes()*_2eb,date.getSeconds()+_2ec.getSeconds()*_2eb);
if(this.constraints.selector=="time"){
date.setFullYear(1970,0,1);
}
var _2ed=dojo.date.locale.format(date,this.constraints);
if(this.filterString&&_2ed.toLowerCase().indexOf(this.filterString)!==0){
return null;
}
var div=dojo.create("div",{"class":this.baseClass+"Item"});
div.date=date;
div.index=_2eb;
dojo.create("div",{"class":this.baseClass+"ItemInner",innerHTML:_2ed},div);
if(_2eb%this._visibleIncrement<1&&_2eb%this._visibleIncrement>-1){
dojo.addClass(div,this.baseClass+"Marker");
}else{
if(!(_2eb%this._clickableIncrement)){
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
var _2ee=tgt.target.date||tgt.target.parentNode.date;
if(!_2ee||this.isDisabledDate(_2ee)){
return;
}
this._highlighted_option=null;
this.set("value",_2ee);
this.onChange(_2ee);
},onChange:function(time){
},_highlightOption:function(node,_2ef){
if(!node){
return;
}
if(_2ef){
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
dojo.toggleClass(node,this.baseClass+"ItemHover",_2ef);
if(dojo.hasClass(node,this.baseClass+"Marker")){
dojo.toggleClass(node,this.baseClass+"MarkerHover",_2ef);
}else{
dojo.toggleClass(node,this.baseClass+"TickHover",_2ef);
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
var _2f0=(dojo.isIE?e.wheelDelta:-e.detail);
this[(_2f0>0?"_onArrowUp":"_onArrowDown")]();
},_onArrowUp:function(_2f1){
if(typeof _2f1=="number"&&_2f1==-1){
return;
}
if(!this.timeMenu.childNodes.length){
return;
}
var _2f2=this.timeMenu.childNodes[0].index;
var divs=this._getFilteredNodes(_2f2,1,true,this.timeMenu.childNodes[0]);
if(divs.length){
this.timeMenu.removeChild(this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]);
this.timeMenu.insertBefore(divs[0],this.timeMenu.childNodes[0]);
}
},_onArrowDown:function(_2f3){
if(typeof _2f3=="number"&&_2f3==-1){
return;
}
if(!this.timeMenu.childNodes.length){
return;
}
var _2f4=this.timeMenu.childNodes[this.timeMenu.childNodes.length-1].index+1;
var divs=this._getFilteredNodes(_2f4,1,false,this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]);
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
var _2f5=this.timeMenu,tgt=this._highlighted_option||dojo.query("."+this.baseClass+"ItemSelected",_2f5)[0];
if(!tgt){
tgt=_2f5.childNodes[0];
}else{
if(_2f5.childNodes.length){
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
dojo.data.util.sorter.createSortFunction=function(_2f6,_2f7){
var _2f8=[];
function _2f9(attr,dir,comp,s){
return function(_2fa,_2fb){
var a=s.getValue(_2fa,attr);
var b=s.getValue(_2fb,attr);
return dir*comp(a,b);
};
};
var _2fc;
var map=_2f7.comparatorMap;
var bc=dojo.data.util.sorter.basicComparator;
for(var i=0;i<_2f6.length;i++){
_2fc=_2f6[i];
var attr=_2fc.attribute;
if(attr){
var dir=(_2fc.descending)?-1:1;
var comp=bc;
if(map){
if(typeof attr!=="string"&&("toString" in attr)){
attr=attr.toString();
}
comp=map[attr]||bc;
}
_2f8.push(_2f9(attr,dir,comp,_2f7));
}
}
return function(rowA,rowB){
var i=0;
while(i<_2f8.length){
var ret=_2f8[i++](rowA,rowB);
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
dojo.data.util.simpleFetch.fetch=function(_2fd){
_2fd=_2fd||{};
if(!_2fd.store){
_2fd.store=this;
}
var self=this;
var _2fe=function(_2ff,_300){
if(_300.onError){
var _301=_300.scope||dojo.global;
_300.onError.call(_301,_2ff,_300);
}
};
var _302=function(_303,_304){
var _305=_304.abort||null;
var _306=false;
var _307=_304.start?_304.start:0;
var _308=(_304.count&&(_304.count!==Infinity))?(_307+_304.count):_303.length;
_304.abort=function(){
_306=true;
if(_305){
_305.call(_304);
}
};
var _309=_304.scope||dojo.global;
if(!_304.store){
_304.store=self;
}
if(_304.onBegin){
_304.onBegin.call(_309,_303.length,_304);
}
if(_304.sort){
_303.sort(dojo.data.util.sorter.createSortFunction(_304.sort,self));
}
if(_304.onItem){
for(var i=_307;(i<_303.length)&&(i<_308);++i){
var item=_303[i];
if(!_306){
_304.onItem.call(_309,item,_304);
}
}
}
if(_304.onComplete&&!_306){
var _30a=null;
if(!_304.onItem){
_30a=_303.slice(_307,_308);
}
_304.onComplete.call(_309,_30a,_304);
}
};
this._fetchItems(_2fd,_302,_2fe);
return _2fd;
};
}
if(!dojo._hasResource["dojo.data.util.filter"]){
dojo._hasResource["dojo.data.util.filter"]=true;
dojo.provide("dojo.data.util.filter");
dojo.getObject("data.util.filter",true,dojo);
dojo.data.util.filter.patternToRegExp=function(_30b,_30c){
var rxp="^";
var c=null;
for(var i=0;i<_30b.length;i++){
c=_30b.charAt(i);
switch(c){
case "\\":
rxp+=c;
i++;
rxp+=_30b.charAt(i);
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
if(_30c){
return new RegExp(rxp,"mi");
}else{
return new RegExp(rxp,"m");
}
};
}
if(!dojo._hasResource["dijit.form.ComboBox"]){
dojo._hasResource["dijit.form.ComboBox"]=true;
dojo.provide("dijit.form.ComboBox");
dojo.declare("dijit.form.ComboBoxMixin",dijit._HasDropDown,{item:null,pageSize:Infinity,store:null,fetchProperties:{},query:{},autoComplete:true,highlightMatch:"first",searchDelay:100,searchAttr:"name",labelAttr:"",labelType:"text",queryExpr:"${0}*",ignoreCase:true,hasDownArrow:true,templateString:dojo.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t>\r\n\t\t\t    <!-- Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0\r\n\t\t\t      WaveMaker: Unfortunate hack to replace input with span to avoid focus issues with mobile that cause keyboards to pop open -->\r\n<${buttonNodeType} class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitComboBox",dropDownClass:"dijit.form._ComboBoxMenu",cssStateNodes:{"_buttonNode":"dijitDownArrowButton"},maxHeight:-1,_stopClickEvents:false,_getCaretPos:function(_30d){
var pos=0;
if(typeof (_30d.selectionStart)=="number"){
pos=_30d.selectionStart;
}else{
if(dojo.isIE){
var tr=dojo.doc.selection.createRange().duplicate();
var ntr=_30d.createTextRange();
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
},_setCaretPos:function(_30e,_30f){
_30f=parseInt(_30f);
dijit.selectInputText(_30e,_30f,_30f);
},_setDisabledAttr:function(_310){
this.inherited(arguments);
dijit.setWaiState(this.domNode,"disabled",_310);
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
var _311=false;
var pw=this.dropDown;
var dk=dojo.keys;
var _312=null;
this._prev_key_backspace=false;
this._abortQuery();
this.inherited(arguments);
if(this._opened){
_312=pw.getHighlightedOption();
}
switch(key){
case dk.PAGE_DOWN:
case dk.DOWN_ARROW:
case dk.PAGE_UP:
case dk.UP_ARROW:
if(this._opened){
this._announceOption(_312);
}
dojo.stopEvent(evt);
break;
case dk.ENTER:
if(_312){
if(_312==pw.nextButton){
this._nextSearch(1);
dojo.stopEvent(evt);
break;
}else{
if(_312==pw.previousButton){
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
var _313=this.get("displayedValue");
if(pw&&(_313==pw._messages["previousMessage"]||_313==pw._messages["nextMessage"])){
break;
}
if(_312){
this._selectOption();
}
if(this._opened){
this._lastQuery=null;
this.closeDropDown();
}
break;
case " ":
if(_312){
dojo.stopEvent(evt);
this._selectOption();
this.closeDropDown();
}else{
_311=true;
}
break;
case dk.DELETE:
case dk.BACKSPACE:
this._prev_key_backspace=true;
_311=true;
break;
default:
_311=typeof key=="string"||key==229;
}
if(_311){
this.item=undefined;
this.searchTimer=setTimeout(dojo.hitch(this,"_startSearchFromInput"),1);
}
},_autoCompleteText:function(text){
var fn=this.focusNode;
dijit.selectInputText(fn,fn.value.length);
var _314=this.ignoreCase?"toLowerCase":"substr";
if(text[_314](0).indexOf(this.focusNode.value[_314](0))==0){
var cpos=this._getCaretPos(fn);
if((cpos+1)>fn.value.length){
fn.value=text;
dijit.selectInputText(fn,cpos);
}
}else{
fn.value=text;
dijit.selectInputText(fn);
}
},_openResultList:function(_315,_316){
this._fetchHandle=null;
if(this.disabled||this.readOnly||(_316.query[this.searchAttr]!=this._lastQuery)){
return;
}
var _317=this.dropDown._highlighted_option&&dojo.hasClass(this.dropDown._highlighted_option,"dijitMenuItemSelected");
this.dropDown.clearResultList();
if(!_315.length&&!this._maxOptions){
this.closeDropDown();
return;
}
_316._maxOptions=this._maxOptions;
var _318=this.dropDown.createOptions(_315,_316,dojo.hitch(this,"_getMenuLabelFromItem"));
this._showResultList();
if(_316.direction){
if(1==_316.direction){
this.dropDown.highlightFirstOption();
}else{
if(-1==_316.direction){
this.dropDown.highlightLastOption();
}
}
if(_317){
this._announceOption(this.dropDown.getHighlightedOption());
}
}else{
if(this.autoComplete&&!this._prev_key_backspace&&!/^[*]+$/.test(_316.query[this.searchAttr])){
this._announceOption(_318[1]);
}
}
},_showResultList:function(){
this.closeDropDown(true);
this.displayMessage("");
this.openDropDown();
dijit.setWaiState(this.domNode,"expanded","true");
},loadDropDown:function(_319){
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
var _31a=this.get("displayedValue");
var pw=this.dropDown;
if(pw&&(_31a==pw._messages["previousMessage"]||_31a==pw._messages["nextMessage"])){
this._setValueAttr(this._lastValueReported,true);
}else{
if(typeof this.item=="undefined"){
this.item=null;
this.set("displayedValue",_31a);
}else{
if(_31a===""){
this.item=null;
this.set("displayedValue",_31a);
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
},_setItemAttr:function(item,_31b,_31c){
if(!_31c){
_31c=this.store.getValue(item,this.searchAttr);
}
var _31d=this._getValueField()!=this.searchAttr?this.store.getIdentity(item):_31c;
this._set("item",item);
dijit.form.ComboBox.superclass._setValueAttr.call(this,_31d,_31b,_31c);
},_announceOption:function(node){
if(!node){
return;
}
var _31e;
if(node==this.dropDown.nextButton||node==this.dropDown.previousButton){
_31e=node.innerHTML;
this.item=undefined;
this.value="";
}else{
_31e=this.store.getValue(node.item,this.searchAttr).toString();
this.set("item",node.item,false,_31e);
}
this.focusNode.value=this.focusNode.value.substring(0,this._lastInput.length);
dijit.setWaiState(this.focusNode,"activedescendant",dojo.attr(node,"id"));
this._autoCompleteText(_31e);
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
var _31f=this.id+"_popup",_320=dojo.getObject(this.dropDownClass,false);
this.dropDown=new _320({onChange:dojo.hitch(this,this._selectOption),id:_31f,dir:this.dir});
dijit.removeWaiState(this.focusNode,"activedescendant");
dijit.setWaiState(this.textbox,"owns",_31f);
}
var _321=dojo.clone(this.query);
this._lastInput=key;
this._lastQuery=_321[this.searchAttr]=this._getQueryString(key);
this.searchTimer=setTimeout(dojo.hitch(this,function(_322,_323){
this.searchTimer=null;
var _324={queryOptions:{ignoreCase:this.ignoreCase,deep:true},query:_322,onBegin:dojo.hitch(this,"_setMaxOptions"),onComplete:dojo.hitch(this,"_openResultList"),onError:function(_325){
_323._fetchHandle=null;
console.error("dijit.form.ComboBox: "+_325);
_323.closeDropDown();
},start:0,count:this.pageSize};
dojo.mixin(_324,_323.fetchProperties);
this._fetchHandle=_323.store.fetch(_324);
var _326=function(_327,_328){
_327.start+=_327.count*_328;
_327.direction=_328;
this._fetchHandle=this.store.fetch(_327);
this.focus();
};
this._nextSearch=this.dropDown.onPage=dojo.hitch(this,_326,this._fetchHandle);
},_321,this),this.searchDelay);
},_setMaxOptions:function(size,_329){
this._maxOptions=size;
},_getValueField:function(){
return this.searchAttr;
},constructor:function(){
this.query={};
this.fetchProperties={};
},postMixInProperties:function(){
if(!this.store){
var _32a=this.srcNodeRef;
this.store=new dijit.form._ComboBoxDataStore(_32a);
if(!("value" in this.params)){
var item=(this.item=this.store.fetchSelectedItem());
if(item){
var _32b=this._getValueField();
this.value=this.store.getValue(item,_32b);
}
}
}
this.inherited(arguments);
},postCreate:function(){
var _32c=dojo.query("label[for=\""+this.id+"\"]");
if(_32c.length){
_32c[0].id=(this.id+"_label");
dijit.setWaiState(this.domNode,"labelledby",_32c[0].id);
}
this.inherited(arguments);
},_setHasDownArrowAttr:function(val){
this.hasDownArrow=val;
this._buttonNode.style.display=val?"":"none";
},_getMenuLabelFromItem:function(item){
var _32d=this.labelFunc(item,this.store),_32e=this.labelType;
if(this.highlightMatch!="none"&&this.labelType=="text"&&this._lastInput){
_32d=this.doHighlight(_32d,this._escapeHtml(this._lastInput));
_32e="html";
}
return {html:_32e=="html",label:_32d};
},doHighlight:function(_32f,find){
var _330=(this.ignoreCase?"i":"")+(this.highlightMatch=="all"?"g":""),i=this.queryExpr.indexOf("${0}");
find=dojo.regexp.escapeString(find);
return this._escapeHtml(_32f).replace(new RegExp((i==0?"^":"")+"("+find+")"+(i==(this.queryExpr.length-4)?"$":""),_330),"<span class=\"dijitComboBoxHighlightMatch\">$1</span>");
},_escapeHtml:function(str){
str=String(str).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
return str;
},reset:function(){
this.item=null;
this.inherited(arguments);
},labelFunc:function(item,_331){
return _331.getValue(item,this.labelAttr||this.searchAttr).toString();
}});
dojo.declare("dijit.form._ComboBoxMenu",[dijit._Widget,dijit._Templated,dijit._CssStateMixin],{templateString:"<ul class='dijitReset dijitMenu' dojoAttachEvent='onmousedown:_onMouseDown,onmouseup:_onMouseUp,onmouseover:_onMouseOver,onmouseout:_onMouseOut' style='overflow: \"auto\"; overflow-x: \"hidden\";'>"+"<li class='dijitMenuItem dijitMenuPreviousButton' dojoAttachPoint='previousButton' role='option'></li>"+"<li class='dijitMenuItem dijitMenuNextButton' dojoAttachPoint='nextButton' role='option'></li>"+"</ul>",_messages:null,baseClass:"dijitComboBoxMenu",postMixInProperties:function(){
this.inherited(arguments);
this._messages=dojo.i18n.getLocalization("dijit.form","ComboBox",this.lang);
},buildRendering:function(){
this.inherited(arguments);
this.previousButton.innerHTML=this._messages["previousMessage"];
this.nextButton.innerHTML=this._messages["nextMessage"];
},_setValueAttr:function(_332){
this.value=_332;
this.onChange(_332);
},onChange:function(_333){
},onPage:function(_334){
},onClose:function(){
this._blurOptionNode();
},_createOption:function(item,_335){
var _336=dojo.create("li",{"class":"dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl"),role:"option"});
var _337=_335(item);
if(_337.html){
_336.innerHTML=_337.label;
}else{
_336.appendChild(dojo.doc.createTextNode(_337.label));
}
if(_336.innerHTML==""){
_336.innerHTML="&nbsp;";
}
_336.item=item;
return _336;
},createOptions:function(_338,_339,_33a){
this.previousButton.style.display=(_339.start==0)?"none":"";
dojo.attr(this.previousButton,"id",this.id+"_prev");
dojo.forEach(_338,function(item,i){
var _33b=this._createOption(item,_33a);
if(item.indent){
dojo.addClass(_33b,"indentOption"+((item.indent===true)?"":item.indent));
}
dojo.attr(_33b,"id",this.id+i);
this.domNode.insertBefore(_33b,this.nextButton);
},this);
var _33c=false;
if(_339._maxOptions&&_339._maxOptions!=-1){
if((_339.start+_339.count)<_339._maxOptions){
_33c=true;
}else{
if((_339.start+_339.count)>_339._maxOptions&&_339.count==_338.length){
_33c=true;
}
}
}else{
if(_339.count==_338.length){
_33c=true;
}
}
this.nextButton.style.display=_33c?"":"none";
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
var _33d=this.domNode.firstChild;
var _33e=_33d.nextSibling;
this._focusOptionNode(_33e.style.display=="none"?_33d:_33e);
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
var _33f=0;
var _340=this.domNode.scrollTop;
var _341=dojo.style(this.domNode,"height");
if(!this.getHighlightedOption()){
this._highlightNextOption();
}
while(_33f<_341){
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
var _342=this.domNode.scrollTop;
_33f+=(_342-_340)*(up?-1:1);
_340=_342;
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
dojo.declare("dijit.form.ComboBox",[dijit.form.ValidationTextBox,dijit.form.ComboBoxMixin],{_setValueAttr:function(_343,_344,_345){
this._set("item",null);
var self=this;
this.store.fetchItemByIdentity({identity:_343,onItem:function(item){
self._set("item",item);
}});
if(!_343){
_343="";
}
dijit.form.ValidationTextBox.prototype._setValueAttr.call(this,_343,_344,_345);
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
},getValue:function(item,_346,_347){
return (_346=="value")?item.value:(item.innerText||item.textContent||"");
},isItemLoaded:function(_348){
return true;
},getFeatures:function(){
return {"dojo.data.api.Read":true,"dojo.data.api.Identity":true};
},_fetchItems:function(args,_349,_34a){
if(!args.query){
args.query={};
}
if(!args.query.name){
args.query.name="";
}
if(!args.queryOptions){
args.queryOptions={};
}
var _34b=dojo.data.util.filter.patternToRegExp(args.query.name,args.queryOptions.ignoreCase),_34c=dojo.query("> option",this.root).filter(function(_34d){
return (_34d.innerText||_34d.textContent||"").match(_34b);
});
if(args.sort){
_34c.sort(dojo.data.util.sorter.createSortFunction(args.sort,this));
}
_349(_34c,args);
},close:function(_34e){
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
dojo.declare("dojo.data.ItemFileReadStore",null,{constructor:function(_34f){
this._arrayOfAllItems=[];
this._arrayOfTopLevelItems=[];
this._loadFinished=false;
this._jsonFileUrl=_34f.url;
this._ccUrl=_34f.url;
this.url=_34f.url;
this._jsonData=_34f.data;
this.data=null;
this._datatypeMap=_34f.typeMap||{};
if(!this._datatypeMap["Date"]){
this._datatypeMap["Date"]={type:Date,deserialize:function(_350){
return dojo.date.stamp.fromISOString(_350);
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
if(_34f.urlPreventCache!==undefined){
this.urlPreventCache=_34f.urlPreventCache?true:false;
}
if(_34f.hierarchical!==undefined){
this.hierarchical=_34f.hierarchical?true:false;
}
if(_34f.clearOnClose){
this.clearOnClose=true;
}
if("failOk" in _34f){
this.failOk=_34f.failOk?true:false;
}
},url:"",_ccUrl:"",data:null,typeMap:null,clearOnClose:false,urlPreventCache:false,failOk:false,hierarchical:true,_assertIsItem:function(item){
if(!this.isItem(item)){
throw new Error("dojo.data.ItemFileReadStore: Invalid item argument.");
}
},_assertIsAttribute:function(_351){
if(typeof _351!=="string"){
throw new Error("dojo.data.ItemFileReadStore: Invalid attribute argument.");
}
},getValue:function(item,_352,_353){
var _354=this.getValues(item,_352);
return (_354.length>0)?_354[0]:_353;
},getValues:function(item,_355){
this._assertIsItem(item);
this._assertIsAttribute(_355);
if(_355.indexOf(".")!=-1){
var _356=_355.split(/\./);
var _357=item;
for(var i=0;i<_356.length;i++){
var key=_356[i];
if(_357[key]&&_357[key][0]){
_357=i==_356.length-1?_357[key]:_357[key][0];
}else{
_357=null;
break;
}
}
if(_357!==null){
return _357;
}
}
return (item[_355]||[]).slice(0);
},getAttributes:function(item){
this._assertIsItem(item);
var _358=[];
for(var key in item){
if((key!==this._storeRefPropName)&&(key!==this._itemNumPropName)&&(key!==this._rootItemPropName)&&(key!==this._reverseRefMap)){
_358.push(key);
}
}
return _358;
},hasAttribute:function(item,_359){
this._assertIsItem(item);
this._assertIsAttribute(_359);
return (_359 in item);
},containsValue:function(item,_35a,_35b){
var _35c=undefined;
if(typeof _35b==="string"){
_35c=dojo.data.util.filter.patternToRegExp(_35b,false);
}
return this._containsValue(item,_35a,_35b,_35c);
},_containsValue:function(item,_35d,_35e,_35f){
return dojo.some(this.getValues(item,_35d),function(_360){
if(_360!==null&&!dojo.isObject(_360)&&_35f){
if(_360.toString().match(_35f)){
return true;
}
}else{
if(_35e===_360){
return true;
}
}
});
},isItem:function(_361){
if(_361&&_361[this._storeRefPropName]===this){
if(this._arrayOfAllItems[_361[this._itemNumPropName]]===_361){
return true;
}
}
return false;
},isItemLoaded:function(_362){
return this.isItem(_362);
},loadItem:function(_363){
this._assertIsItem(_363.item);
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
},_fetchItems:function(_364,_365,_366){
var self=this,_367=function(_368,_369){
var _36a=[],i,key;
if(_368.query){
var _36b,_36c=_368.queryOptions?_368.queryOptions.ignoreCase:false;
var _36d={};
for(key in _368.query){
_36b=_368.query[key];
if(typeof _36b==="string"){
_36d[key]=dojo.data.util.filter.patternToRegExp(_36b,_36c);
}else{
if(_36b instanceof RegExp){
_36d[key]=_36b;
}
}
}
for(i=0;i<_369.length;++i){
var _36e=true;
var _36f=_369[i];
if(_36f===null){
_36e=false;
}else{
for(key in _368.query){
_36b=_368.query[key];
if(!self._containsValue(_36f,key,_36b,_36d[key])){
_36e=false;
}
}
}
if(_36e){
_36a.push(_36f);
}
}
_365(_36a,_368);
}else{
for(i=0;i<_369.length;++i){
var item=_369[i];
if(item!==null){
_36a.push(item);
}
}
_365(_36a,_368);
}
};
if(this._loadFinished){
_367(_364,this._getItemsArray(_364.queryOptions));
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
this._queuedFetches.push({args:_364,filter:_367});
}else{
this._loadInProgress=true;
var _370={url:self._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};
var _371=dojo.xhrGet(_370);
_371.addCallback(function(data){
try{
self._getItemsFromLoadedData(data);
self._loadFinished=true;
self._loadInProgress=false;
_367(_364,self._getItemsArray(_364.queryOptions));
self._handleQueuedFetches();
}
catch(e){
self._loadFinished=true;
self._loadInProgress=false;
_366(e,_364);
}
});
_371.addErrback(function(_372){
self._loadInProgress=false;
_366(_372,_364);
});
var _373=null;
if(_364.abort){
_373=_364.abort;
}
_364.abort=function(){
var df=_371;
if(df&&df.fired===-1){
df.cancel();
df=null;
}
if(_373){
_373.call(_364);
}
};
}
}else{
if(this._jsonData){
try{
this._loadFinished=true;
this._getItemsFromLoadedData(this._jsonData);
this._jsonData=null;
_367(_364,this._getItemsArray(_364.queryOptions));
}
catch(e){
_366(e,_364);
}
}else{
_366(new Error("dojo.data.ItemFileReadStore: No JSON source data was provided as either URL or a nested Javascript object."),_364);
}
}
}
},_handleQueuedFetches:function(){
if(this._queuedFetches.length>0){
for(var i=0;i<this._queuedFetches.length;i++){
var _374=this._queuedFetches[i],_375=_374.args,_376=_374.filter;
if(_376){
_376(_375,this._getItemsArray(_375.queryOptions));
}else{
this.fetchItemByIdentity(_375);
}
}
this._queuedFetches=[];
}
},_getItemsArray:function(_377){
if(_377&&_377.deep){
return this._arrayOfAllItems;
}
return this._arrayOfTopLevelItems;
},close:function(_378){
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
},_getItemsFromLoadedData:function(_379){
var _37a=false,self=this;
function _37b(_37c){
var _37d=((_37c!==null)&&(typeof _37c==="object")&&(!dojo.isArray(_37c)||_37a)&&(!dojo.isFunction(_37c))&&(_37c.constructor==Object||dojo.isArray(_37c))&&(typeof _37c._reference==="undefined")&&(typeof _37c._type==="undefined")&&(typeof _37c._value==="undefined")&&self.hierarchical);
return _37d;
};
function _37e(_37f){
self._arrayOfAllItems.push(_37f);
for(var _380 in _37f){
var _381=_37f[_380];
if(_381){
if(dojo.isArray(_381)){
var _382=_381;
for(var k=0;k<_382.length;++k){
var _383=_382[k];
if(_37b(_383)){
_37e(_383);
}
}
}else{
if(_37b(_381)){
_37e(_381);
}
}
}
}
};
this._labelAttr=_379.label;
var i,item;
this._arrayOfAllItems=[];
this._arrayOfTopLevelItems=_379.items;
for(i=0;i<this._arrayOfTopLevelItems.length;++i){
item=this._arrayOfTopLevelItems[i];
if(dojo.isArray(item)){
_37a=true;
}
_37e(item);
item[this._rootItemPropName]=true;
}
var _384={},key;
for(i=0;i<this._arrayOfAllItems.length;++i){
item=this._arrayOfAllItems[i];
for(key in item){
if(key!==this._rootItemPropName){
var _385=item[key];
if(_385!==null){
if(!dojo.isArray(_385)){
item[key]=[_385];
}
}else{
item[key]=[null];
}
}
_384[key]=key;
}
}
while(_384[this._storeRefPropName]){
this._storeRefPropName+="_";
}
while(_384[this._itemNumPropName]){
this._itemNumPropName+="_";
}
while(_384[this._reverseRefMap]){
this._reverseRefMap+="_";
}
var _386;
var _387=_379.identifier;
if(_387){
this._itemsByIdentity={};
this._features["dojo.data.api.Identity"]=_387;
for(i=0;i<this._arrayOfAllItems.length;++i){
item=this._arrayOfAllItems[i];
_386=item[_387];
var _388=_386[0];
if(!Object.hasOwnProperty.call(this._itemsByIdentity,_388)){
this._itemsByIdentity[_388]=item;
}else{
if(this._jsonFileUrl){
throw new Error("dojo.data.ItemFileReadStore:  The json data as specified by: ["+this._jsonFileUrl+"] is malformed.  Items within the list have identifier: ["+_387+"].  Value collided: ["+_388+"]");
}else{
if(this._jsonData){
throw new Error("dojo.data.ItemFileReadStore:  The json data provided by the creation arguments is malformed.  Items within the list have identifier: ["+_387+"].  Value collided/not unique: ["+_388+"]");
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
_386=item[key];
for(var j=0;j<_386.length;++j){
_385=_386[j];
if(_385!==null&&typeof _385=="object"){
if(("_type" in _385)&&("_value" in _385)){
var type=_385._type;
var _389=this._datatypeMap[type];
if(!_389){
throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '"+type+"'");
}else{
if(dojo.isFunction(_389)){
_386[j]=new _389(_385._value);
}else{
if(dojo.isFunction(_389.deserialize)){
_386[j]=_389.deserialize(_385._value);
}else{
throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");
}
}
}
}
if(_385._reference){
var _38a=_385._reference;
if(!dojo.isObject(_38a)){
_386[j]=this._getItemByIdentity(_38a);
}else{
for(var k=0;k<this._arrayOfAllItems.length;++k){
var _38b=this._arrayOfAllItems[k],_38c=true;
for(var _38d in _38a){
if(_38b[_38d]!=_38a[_38d]){
_38c=false;
}
}
if(_38c){
_386[j]=_38b;
}
}
}
if(this.referenceIntegrity){
var _38e=_386[j];
if(this.isItem(_38e)){
this._addReferenceToMap(_38e,item,key);
}
}
}else{
if(this.isItem(_385)){
if(this.referenceIntegrity){
this._addReferenceToMap(_385,item,key);
}
}
}
}
}
}
}
},_addReferenceToMap:function(_38f,_390,_391){
},getIdentity:function(item){
var _392=this._features["dojo.data.api.Identity"];
if(_392===Number){
return item[this._itemNumPropName];
}else{
var _393=item[_392];
if(_393){
return _393[0];
}
}
return null;
},fetchItemByIdentity:function(_394){
var item,_395;
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
this._queuedFetches.push({args:_394});
}else{
this._loadInProgress=true;
var _396={url:self._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};
var _397=dojo.xhrGet(_396);
_397.addCallback(function(data){
var _398=_394.scope?_394.scope:dojo.global;
try{
self._getItemsFromLoadedData(data);
self._loadFinished=true;
self._loadInProgress=false;
item=self._getItemByIdentity(_394.identity);
if(_394.onItem){
_394.onItem.call(_398,item);
}
self._handleQueuedFetches();
}
catch(error){
self._loadInProgress=false;
if(_394.onError){
_394.onError.call(_398,error);
}
}
});
_397.addErrback(function(_399){
self._loadInProgress=false;
if(_394.onError){
var _39a=_394.scope?_394.scope:dojo.global;
_394.onError.call(_39a,_399);
}
});
}
}else{
if(this._jsonData){
self._getItemsFromLoadedData(self._jsonData);
self._jsonData=null;
self._loadFinished=true;
item=self._getItemByIdentity(_394.identity);
if(_394.onItem){
_395=_394.scope?_394.scope:dojo.global;
_394.onItem.call(_395,item);
}
}
}
}else{
item=this._getItemByIdentity(_394.identity);
if(_394.onItem){
_395=_394.scope?_394.scope:dojo.global;
_394.onItem.call(_395,item);
}
}
},_getItemByIdentity:function(_39b){
var item=null;
if(this._itemsByIdentity&&Object.hasOwnProperty.call(this._itemsByIdentity,_39b)){
item=this._itemsByIdentity[_39b];
}else{
if(Object.hasOwnProperty.call(this._arrayOfAllItems,_39b)){
item=this._arrayOfAllItems[_39b];
}
}
if(item===undefined){
item=null;
}
return item;
},getIdentityAttributes:function(item){
var _39c=this._features["dojo.data.api.Identity"];
if(_39c===Number){
return null;
}else{
return [_39c];
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
var _39d={url:this._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk,sync:true};
var _39e=dojo.xhrGet(_39d);
_39e.addCallback(function(data){
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
_39e.addErrback(function(_39f){
throw _39f;
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
dojo.declare("dijit.form.CheckBox",dijit.form.ToggleButton,{templateString:dojo.cache("dijit.form","templates/CheckBox.html","<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\r\n\t><input\r\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\r\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\r\n\t\tdojoAttachPoint=\"focusNode\"\r\n\t \tdojoAttachEvent=\"onclick:_onClick\"\r\n/></div>\r\n"),baseClass:"dijitCheckBox",type:"checkbox",value:"on",readOnly:false,attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{readOnly:"focusNode"}),_setReadOnlyAttr:function(_3a0){
this._set("readOnly",_3a0);
dojo.attr(this.focusNode,"readOnly",_3a0);
dijit.setWaiState(this.focusNode,"readonly",_3a0);
},_setValueAttr:function(_3a1,_3a2){
if(typeof _3a1=="string"){
this._set("value",_3a1);
dojo.attr(this.focusNode,"value",_3a1);
_3a1=true;
}
if(this._created){
this.set("checked",_3a1,_3a2);
}
},_getValueAttr:function(){
return (this.checked?this.value:false);
},_setLabelAttr:undefined,postMixInProperties:function(){
if(this.value==""){
this.value="on";
}
this.checkedAttrSetting=this.checked?"checked":"";
this.inherited(arguments);
},_fillContent:function(_3a3){
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
dojo.declare("dijit.form.RadioButton",dijit.form.CheckBox,{type:"radio",baseClass:"dijitRadio",_setCheckedAttr:function(_3a4){
this.inherited(arguments);
if(!this._created){
return;
}
if(_3a4){
var _3a5=this;
dojo.query("INPUT[type=radio]",this.focusNode.form||dojo.doc).forEach(function(_3a6){
if(_3a6.name==_3a5.name&&_3a6!=_3a5.focusNode&&_3a6.form==_3a5.focusNode.form){
var _3a7=dijit.getEnclosingWidget(_3a6);
if(_3a7&&_3a7.checked){
_3a7.set("checked",false);
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
dojo.declare("dijit.form._Spinner",dijit.form.RangeBoundTextBox,{defaultTimeout:500,minimumTimeout:10,timeoutChangeRate:0.9,smallDelta:1,largeDelta:10,templateString:dojo.cache("dijit.form","templates/Spinner.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\" role=\"presentation\"\r\n\t><div class=\"dijitReset dijitButtonNode dijitSpinnerButtonContainer\"\r\n\t\t><input class=\"dijitReset dijitInputField dijitSpinnerButtonInner\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t/><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton\"\r\n\t\t\tdojoAttachPoint=\"upArrowNode\"\r\n\t\t\t><div class=\"dijitArrowButtonInner\"\r\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9650;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t\t\t${_buttonInputDisabled}\r\n\t\t\t/></div\r\n\t\t></div\r\n\t\t><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton\"\r\n\t\t\tdojoAttachPoint=\"downArrowNode\"\r\n\t\t\t><div class=\"dijitArrowButtonInner\"\r\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9660;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t\t\t${_buttonInputDisabled}\r\n\t\t\t/></div\r\n\t\t></div\r\n\t></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' dojoAttachPoint=\"textbox,focusNode\" type=\"${type}\" dojoAttachEvent=\"onkeypress:_onKeyPress\"\r\n\t\t\trole=\"spinbutton\" autocomplete=\"off\" ${!nameAttrSetting}\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitSpinner",cssStateNodes:{"upArrowNode":"dijitUpArrowButton","downArrowNode":"dijitDownArrowButton"},adjust:function(val,_3a8){
return val;
},_arrowPressed:function(_3a9,_3aa,_3ab){
if(this.disabled||this.readOnly){
return;
}
this._setValueAttr(this.adjust(this.get("value"),_3aa*_3ab),false);
dijit.selectInputText(this.textbox,this.textbox.value.length);
},_arrowReleased:function(node){
this._wheelTimer=null;
if(this.disabled||this.readOnly){
return;
}
},_typematicCallback:function(_3ac,node,evt){
var inc=this.smallDelta;
if(node==this.textbox){
var k=dojo.keys;
var key=evt.charOrCode;
inc=(key==k.PAGE_UP||key==k.PAGE_DOWN)?this.largeDelta:this.smallDelta;
node=(key==k.UP_ARROW||key==k.PAGE_UP)?this.upArrowNode:this.downArrowNode;
}
if(_3ac==-1){
this._arrowReleased(node);
}else{
this._arrowPressed(node,(node==this.upArrowNode)?1:-1,inc);
}
},_wheelTimer:null,_mouseWheeled:function(evt){
dojo.stopEvent(evt);
var _3ad=evt.detail?(evt.detail*-1):(evt.wheelDelta/120);
if(_3ad!==0){
var node=this[(_3ad>0?"upArrowNode":"downArrowNode")];
this._arrowPressed(node,_3ad,this.smallDelta);
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
dojo.number.format=function(_3ae,_3af){
_3af=dojo.mixin({},_3af||{});
var _3b0=dojo.i18n.normalizeLocale(_3af.locale),_3b1=dojo.i18n.getLocalization("dojo.cldr","number",_3b0);
_3af.customs=_3b1;
var _3b2=_3af.pattern||_3b1[(_3af.type||"decimal")+"Format"];
if(isNaN(_3ae)||Math.abs(_3ae)==Infinity){
return null;
}
return dojo.number._applyPattern(_3ae,_3b2,_3af);
};
dojo.number._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/;
dojo.number._applyPattern=function(_3b3,_3b4,_3b5){
_3b5=_3b5||{};
var _3b6=_3b5.customs.group,_3b7=_3b5.customs.decimal,_3b8=_3b4.split(";"),_3b9=_3b8[0];
_3b4=_3b8[(_3b3<0)?1:0]||("-"+_3b9);
if(_3b4.indexOf("%")!=-1){
_3b3*=100;
}else{
if(_3b4.indexOf("‰")!=-1){
_3b3*=1000;
}else{
if(_3b4.indexOf("¤")!=-1){
_3b6=_3b5.customs.currencyGroup||_3b6;
_3b7=_3b5.customs.currencyDecimal||_3b7;
_3b4=_3b4.replace(/\u00a4{1,3}/,function(_3ba){
var prop=["symbol","currency","displayName"][_3ba.length-1];
return _3b5[prop]||_3b5.currency||"";
});
}else{
if(_3b4.indexOf("E")!=-1){
throw new Error("exponential notation not supported");
}
}
}
}
var _3bb=dojo.number._numberPatternRE;
var _3bc=_3b9.match(_3bb);
if(!_3bc){
throw new Error("unable to find a number expression in pattern: "+_3b4);
}
if(_3b5.fractional===false){
_3b5.places=0;
}
return _3b4.replace(_3bb,dojo.number._formatAbsolute(_3b3,_3bc[0],{decimal:_3b7,group:_3b6,places:_3b5.places,round:_3b5.round}));
};
dojo.number.round=function(_3bd,_3be,_3bf){
var _3c0=10/(_3bf||10);
return (_3c0*+_3bd).toFixed(_3be)/_3c0;
};
if((0.9).toFixed()==0){
(function(){
var _3c1=dojo.number.round;
dojo.number.round=function(v,p,m){
var d=Math.pow(10,-p||0),a=Math.abs(v);
if(!v||a>=d||a*Math.pow(10,p+1)<5){
d=0;
}
return _3c1(v,p,m)+(v>0?d:-d);
};
})();
}
dojo.number._formatAbsolute=function(_3c2,_3c3,_3c4){
_3c4=_3c4||{};
if(_3c4.places===true){
_3c4.places=0;
}
if(_3c4.places===Infinity){
_3c4.places=6;
}
var _3c5=_3c3.split("."),_3c6=typeof _3c4.places=="string"&&_3c4.places.indexOf(","),_3c7=_3c4.places;
if(_3c6){
_3c7=_3c4.places.substring(_3c6+1);
}else{
if(!(_3c7>=0)){
_3c7=(_3c5[1]||[]).length;
}
}
if(!(_3c4.round<0)){
_3c2=dojo.number.round(_3c2,_3c7,_3c4.round);
}
var _3c8=String(Math.abs(_3c2)).split("."),_3c9=_3c8[1]||"";
if(_3c5[1]||_3c4.places){
if(_3c6){
_3c4.places=_3c4.places.substring(0,_3c6);
}
var pad=_3c4.places!==undefined?_3c4.places:(_3c5[1]&&_3c5[1].lastIndexOf("0")+1);
if(pad>_3c9.length){
_3c8[1]=dojo.string.pad(_3c9,pad,"0",true);
}
if(_3c7<_3c9.length){
_3c8[1]=_3c9.substr(0,_3c7);
}
}else{
if(_3c8[1]){
_3c8.pop();
}
}
var _3ca=_3c5[0].replace(",","");
pad=_3ca.indexOf("0");
if(pad!=-1){
pad=_3ca.length-pad;
if(pad>_3c8[0].length){
_3c8[0]=dojo.string.pad(_3c8[0],pad);
}
if(_3ca.indexOf("#")==-1){
_3c8[0]=_3c8[0].substr(_3c8[0].length-pad);
}
}
var _3cb=_3c5[0].lastIndexOf(","),_3cc,_3cd;
if(_3cb!=-1){
_3cc=_3c5[0].length-_3cb-1;
var _3ce=_3c5[0].substr(0,_3cb);
_3cb=_3ce.lastIndexOf(",");
if(_3cb!=-1){
_3cd=_3ce.length-_3cb-1;
}
}
var _3cf=[];
for(var _3d0=_3c8[0];_3d0;){
var off=_3d0.length-_3cc;
_3cf.push((off>0)?_3d0.substr(off):_3d0);
_3d0=(off>0)?_3d0.slice(0,off):"";
if(_3cd){
_3cc=_3cd;
delete _3cd;
}
}
_3c8[0]=_3cf.reverse().join(_3c4.group||",");
return _3c8.join(_3c4.decimal||".");
};
dojo.number.regexp=function(_3d1){
return dojo.number._parseInfo(_3d1).regexp;
};
dojo.number._parseInfo=function(_3d2){
_3d2=_3d2||{};
var _3d3=dojo.i18n.normalizeLocale(_3d2.locale),_3d4=dojo.i18n.getLocalization("dojo.cldr","number",_3d3),_3d5=_3d2.pattern||_3d4[(_3d2.type||"decimal")+"Format"],_3d6=_3d4.group,_3d7=_3d4.decimal,_3d8=1;
if(_3d5.indexOf("%")!=-1){
_3d8/=100;
}else{
if(_3d5.indexOf("‰")!=-1){
_3d8/=1000;
}else{
var _3d9=_3d5.indexOf("¤")!=-1;
if(_3d9){
_3d6=_3d4.currencyGroup||_3d6;
_3d7=_3d4.currencyDecimal||_3d7;
}
}
}
var _3da=_3d5.split(";");
if(_3da.length==1){
_3da.push("-"+_3da[0]);
}
var re=dojo.regexp.buildGroupRE(_3da,function(_3db){
_3db="(?:"+dojo.regexp.escapeString(_3db,".")+")";
return _3db.replace(dojo.number._numberPatternRE,function(_3dc){
var _3dd={signed:false,separator:_3d2.strict?_3d6:[_3d6,""],fractional:_3d2.fractional,decimal:_3d7,exponent:false},_3de=_3dc.split("."),_3df=_3d2.places;
if(_3de.length==1&&_3d8!=1){
_3de[1]="###";
}
if(_3de.length==1||_3df===0){
_3dd.fractional=false;
}else{
if(_3df===undefined){
_3df=_3d2.pattern?_3de[1].lastIndexOf("0")+1:Infinity;
}
if(_3df&&_3d2.fractional==undefined){
_3dd.fractional=true;
}
if(!_3d2.places&&(_3df<_3de[1].length)){
_3df+=","+_3de[1].length;
}
_3dd.places=_3df;
}
var _3e0=_3de[0].split(",");
if(_3e0.length>1){
_3dd.groupSize=_3e0.pop().length;
if(_3e0.length>1){
_3dd.groupSize2=_3e0.pop().length;
}
}
return "("+dojo.number._realNumberRegexp(_3dd)+")";
});
},true);
if(_3d9){
re=re.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,function(_3e1,_3e2,_3e3,_3e4){
var prop=["symbol","currency","displayName"][_3e3.length-1],_3e5=dojo.regexp.escapeString(_3d2[prop]||_3d2.currency||"");
_3e2=_3e2?"[\\s\\xa0]":"";
_3e4=_3e4?"[\\s\\xa0]":"";
if(!_3d2.strict){
if(_3e2){
_3e2+="*";
}
if(_3e4){
_3e4+="*";
}
return "(?:"+_3e2+_3e5+_3e4+")?";
}
return _3e2+_3e5+_3e4;
});
}
return {regexp:re.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:_3d6,decimal:_3d7,factor:_3d8};
};
dojo.number.parse=function(_3e6,_3e7){
var info=dojo.number._parseInfo(_3e7),_3e8=(new RegExp("^"+info.regexp+"$")).exec(_3e6);
if(!_3e8){
return NaN;
}
var _3e9=_3e8[1];
if(!_3e8[1]){
if(!_3e8[2]){
return NaN;
}
_3e9=_3e8[2];
info.factor*=-1;
}
_3e9=_3e9.replace(new RegExp("["+info.group+"\\s\\xa0"+"]","g"),"").replace(info.decimal,".");
return _3e9*info.factor;
};
dojo.number._realNumberRegexp=function(_3ea){
_3ea=_3ea||{};
if(!("places" in _3ea)){
_3ea.places=Infinity;
}
if(typeof _3ea.decimal!="string"){
_3ea.decimal=".";
}
if(!("fractional" in _3ea)||/^0/.test(_3ea.places)){
_3ea.fractional=[true,false];
}
if(!("exponent" in _3ea)){
_3ea.exponent=[true,false];
}
if(!("eSigned" in _3ea)){
_3ea.eSigned=[true,false];
}
var _3eb=dojo.number._integerRegexp(_3ea),_3ec=dojo.regexp.buildGroupRE(_3ea.fractional,function(q){
var re="";
if(q&&(_3ea.places!==0)){
re="\\"+_3ea.decimal;
if(_3ea.places==Infinity){
re="(?:"+re+"\\d+)?";
}else{
re+="\\d{"+_3ea.places+"}";
}
}
return re;
},true);
var _3ed=dojo.regexp.buildGroupRE(_3ea.exponent,function(q){
if(q){
return "([eE]"+dojo.number._integerRegexp({signed:_3ea.eSigned})+")";
}
return "";
});
var _3ee=_3eb+_3ec;
if(_3ec){
_3ee="(?:(?:"+_3ee+")|(?:"+_3ec+"))";
}
return _3ee+_3ed;
};
dojo.number._integerRegexp=function(_3ef){
_3ef=_3ef||{};
if(!("signed" in _3ef)){
_3ef.signed=[true,false];
}
if(!("separator" in _3ef)){
_3ef.separator="";
}else{
if(!("groupSize" in _3ef)){
_3ef.groupSize=3;
}
}
var _3f0=dojo.regexp.buildGroupRE(_3ef.signed,function(q){
return q?"[-+]":"";
},true);
var _3f1=dojo.regexp.buildGroupRE(_3ef.separator,function(sep){
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
var grp=_3ef.groupSize,grp2=_3ef.groupSize2;
if(grp2){
var _3f2="(?:0|[1-9]\\d{0,"+(grp2-1)+"}(?:["+sep+"]\\d{"+grp2+"})*["+sep+"]\\d{"+grp+"})";
return ((grp-grp2)>0)?"(?:"+_3f2+"|(?:0|[1-9]\\d{0,"+(grp-1)+"}))":_3f2;
}
return "(?:0|[1-9]\\d{0,"+(grp-1)+"}(?:["+sep+"]\\d{"+grp+"})*)";
},true);
return _3f0+_3f1;
};
}
if(!dojo._hasResource["dijit.form.NumberTextBox"]){
dojo._hasResource["dijit.form.NumberTextBox"]=true;
dojo.provide("dijit.form.NumberTextBox");
dojo.declare("dijit.form.NumberTextBoxMixin",null,{regExpGen:dojo.number.regexp,value:NaN,editOptions:{pattern:"#.######"},_formatter:dojo.number.format,_setConstraintsAttr:function(_3f3){
var _3f4=typeof _3f3.places=="number"?_3f3.places:0;
if(_3f4){
_3f4++;
}
if(typeof _3f3.max!="number"){
_3f3.max=9*Math.pow(10,15-_3f4);
}
if(typeof _3f3.min!="number"){
_3f3.min=-9*Math.pow(10,15-_3f4);
}
this.inherited(arguments,[_3f3]);
if(this.focusNode&&this.focusNode.value&&!isNaN(this.value)){
this.set("value",this.value);
}
},_onFocus:function(){
if(this.disabled){
return;
}
var val=this.get("value");
if(typeof val=="number"&&!isNaN(val)){
var _3f5=this.format(val,this.constraints);
if(_3f5!==undefined){
this.textbox.value=_3f5;
}
}
this.inherited(arguments);
},format:function(_3f6,_3f7){
var _3f8=String(_3f6);
if(typeof _3f6!="number"){
return _3f8;
}
if(isNaN(_3f6)){
return "";
}
if(!("rangeCheck" in this&&this.rangeCheck(_3f6,_3f7))&&_3f7.exponent!==false&&/\de[-+]?\d/i.test(_3f8)){
return _3f8;
}
if(this.editOptions&&this._focused){
_3f7=dojo.mixin({},_3f7,this.editOptions);
}
return this._formatter(_3f6,_3f7);
},_parser:dojo.number.parse,parse:function(_3f9,_3fa){
var v=this._parser(_3f9,dojo.mixin({},_3fa,(this.editOptions&&this._focused)?this.editOptions:{}));
if(this.editOptions&&this._focused&&isNaN(v)){
v=this._parser(_3f9,_3fa);
}
return v;
},_getDisplayedValueAttr:function(){
var v=this.inherited(arguments);
return isNaN(v)?this.textbox.value:v;
},filter:function(_3fb){
return (_3fb===null||_3fb===""||_3fb===undefined)?NaN:this.inherited(arguments);
},serialize:function(_3fc,_3fd){
return (typeof _3fc!="number"||isNaN(_3fc))?"":this.inherited(arguments);
},_setBlurValue:function(){
var val=dojo.hitch(dojo.mixin({},this,{_focused:true}),"get")("value");
this._setValueAttr(val,true);
},_setValueAttr:function(_3fe,_3ff,_400){
if(_3fe!==undefined&&_400===undefined){
_400=String(_3fe);
if(typeof _3fe=="number"){
if(isNaN(_3fe)){
_400="";
}else{
if(("rangeCheck" in this&&this.rangeCheck(_3fe,this.constraints))||this.constraints.exponent===false||!/\de[-+]?\d/i.test(_400)){
_400=undefined;
}
}
}else{
if(!_3fe){
_400="";
_3fe=NaN;
}else{
_3fe=undefined;
}
}
}
this.inherited(arguments,[_3fe,_3ff,_400]);
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
},isValid:function(_401){
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
dojo.declare("dijit.form.NumberSpinner",[dijit.form._Spinner,dijit.form.NumberTextBoxMixin],{adjust:function(val,_402){
var tc=this.constraints,v=isNaN(val),_403=!isNaN(tc.max),_404=!isNaN(tc.min);
if(v&&_402!=0){
val=(_402>0)?_404?tc.min:_403?tc.max:0:_403?this.constraints.max:_404?tc.min:0;
}
var _405=val+_402;
if(v||isNaN(_405)){
return val;
}
if(_403&&(_405>tc.max)){
_405=tc.max;
}
if(_404&&(_405<tc.min)){
_405=tc.min;
}
return _405;
},_onKeyPress:function(e){
if((e.charOrCode==dojo.keys.HOME||e.charOrCode==dojo.keys.END)&&!(e.ctrlKey||e.altKey||e.metaKey)&&typeof this.get("value")!="undefined"){
var _406=this.constraints[(e.charOrCode==dojo.keys.HOME?"min":"max")];
if(typeof _406=="number"){
this._setValueAttr(_406,false);
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
var _407={ADP:0,AFN:0,ALL:0,AMD:0,BHD:3,BIF:0,BYR:0,CLF:0,CLP:0,COP:0,CRC:0,DJF:0,ESP:0,GNF:0,GYD:0,HUF:0,IDR:0,IQD:0,IRR:3,ISK:0,ITL:0,JOD:3,JPY:0,KMF:0,KPW:0,KRW:0,KWD:3,LAK:0,LBP:0,LUF:0,LYD:3,MGA:0,MGF:0,MMK:0,MNT:0,MRO:0,MUR:0,OMR:3,PKR:0,PYG:0,RSD:0,RWF:0,SLL:0,SOS:0,STD:0,SYP:0,TMM:0,TND:3,TRL:0,TZS:0,UGX:0,UZS:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,YER:0,ZMK:0,ZWD:0};
var _408={CHF:5};
var _409=_407[code],_40a=_408[code];
if(typeof _409=="undefined"){
_409=2;
}
if(typeof _40a=="undefined"){
_40a=0;
}
return {places:_409,round:_40a};
};
}
if(!dojo._hasResource["dojo.currency"]){
dojo._hasResource["dojo.currency"]=true;
dojo.provide("dojo.currency");
dojo.getObject("currency",true,dojo);
dojo.currency._mixInDefaults=function(_40b){
_40b=_40b||{};
_40b.type="currency";
var _40c=dojo.i18n.getLocalization("dojo.cldr","currency",_40b.locale)||{};
var iso=_40b.currency;
var data=dojo.cldr.monetary.getData(iso);
dojo.forEach(["displayName","symbol","group","decimal"],function(prop){
data[prop]=_40c[iso+"_"+prop];
});
data.fractional=[true,false];
return dojo.mixin(data,_40b);
};
dojo.currency.format=function(_40d,_40e){
return dojo.number.format(_40d,dojo.currency._mixInDefaults(_40e));
};
dojo.currency.regexp=function(_40f){
return dojo.number.regexp(dojo.currency._mixInDefaults(_40f));
};
dojo.currency.parse=function(_410,_411){
return dojo.number.parse(_410,dojo.currency._mixInDefaults(_411));
};
}
if(!dojo._hasResource["dijit.form.CurrencyTextBox"]){
dojo._hasResource["dijit.form.CurrencyTextBox"]=true;
dojo.provide("dijit.form.CurrencyTextBox");
dojo.declare("dijit.form.CurrencyTextBox",dijit.form.NumberTextBox,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",regExpGen:function(_412){
return "("+(this._focused?this.inherited(arguments,[dojo.mixin({},_412,this.editOptions)])+"|":"")+dojo.currency.regexp(_412)+")";
},_formatter:dojo.currency.format,_parser:dojo.currency.parse,parse:function(_413,_414){
var v=this.inherited(arguments);
if(isNaN(v)&&/\d+/.test(_413)){
v=dojo.hitch(dojo.mixin({},this,{_parser:dijit.form.NumberTextBox.prototype._parser}),"inherited")(arguments);
}
return v;
},_setConstraintsAttr:function(_415){
if(!_415.currency&&this.currency){
_415.currency=this.currency;
}
this.inherited(arguments,[dojo.currency._mixInDefaults(dojo.mixin(_415,{exponent:false}))]);
}});
}
if(!dojo._hasResource["dojo.dnd.move"]){
dojo._hasResource["dojo.dnd.move"]=true;
dojo.provide("dojo.dnd.move");
dojo.declare("dojo.dnd.move.constrainedMoveable",dojo.dnd.Moveable,{constraints:function(){
},within:false,markupFactory:function(_416,node){
return new dojo.dnd.move.constrainedMoveable(node,_416);
},constructor:function(node,_417){
if(!_417){
_417={};
}
this.constraints=_417.constraints;
this.within=_417.within;
},onFirstMove:function(_418){
var c=this.constraintBox=this.constraints.call(this,_418);
c.r=c.l+c.w;
c.b=c.t+c.h;
if(this.within){
var mb=dojo._getMarginSize(_418.node);
c.r-=mb.w;
c.b-=mb.h;
}
},onMove:function(_419,_41a){
var c=this.constraintBox,s=_419.node.style;
this.onMoving(_419,_41a);
_41a.l=_41a.l<c.l?c.l:c.r<_41a.l?c.r:_41a.l;
_41a.t=_41a.t<c.t?c.t:c.b<_41a.t?c.b:_41a.t;
s.left=_41a.l+"px";
s.top=_41a.t+"px";
this.onMoved(_419,_41a);
}});
dojo.declare("dojo.dnd.move.boxConstrainedMoveable",dojo.dnd.move.constrainedMoveable,{box:{},markupFactory:function(_41b,node){
return new dojo.dnd.move.boxConstrainedMoveable(node,_41b);
},constructor:function(node,_41c){
var box=_41c&&_41c.box;
this.constraints=function(){
return box;
};
}});
dojo.declare("dojo.dnd.move.parentConstrainedMoveable",dojo.dnd.move.constrainedMoveable,{area:"content",markupFactory:function(_41d,node){
return new dojo.dnd.move.parentConstrainedMoveable(node,_41d);
},constructor:function(node,_41e){
var area=_41e&&_41e.area;
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
var _41f=dojo.position(this.sliderBarContainer,true);
var _420=e[this._mousePixelCoord]-_41f[this._startingPixelCoord];
this._setPixelValue(this._isReversed()?(_41f[this._pixelCount]-_420):_420,_41f[this._pixelCount],true);
this._movable.onMouseDown(e);
},_setPixelValue:function(_421,_422,_423){
if(this.dynamicSlider){
var now=new Date().getTime();
if(!this._dynamicSliderTimestamp||this._dynamicSliderTimestamp+100<now){
_423=true;
this._dynamicSliderTimestamp=now;
if(this.domNode&&this.domNode.id){
wm.cancelJob(this.domNode.id+"._setPixelValue");
}
}else{
if(this.domNode&&this.domNode.id){
var self=this;
wm.job(this.domNode.id+"._setPixelValue",60,function(){
self._setValueAttr((this.maximum-this.minimum)*_424/_425+this.minimum,true);
});
}
}
}
if(this.disabled||this.readOnly){
return;
}
_421=_421<0?0:_422<_421?_422:_421;
var _425=this.discreteValues;
if(_425<=1||_425==Infinity){
_425=_422;
}
_425--;
var _426=_422/_425;
var _424=Math.round(_421/_426);
this._setValueAttr((this.maximum-this.minimum)*_424/_425+this.minimum,_423);
},_setValueAttr:function(_427,_428){
this._set("value",_427);
this.valueNode.value=_427;
dijit.setWaiState(this.focusNode,"valuenow",_427);
this.inherited(arguments);
var _429=(_427-this.minimum)/(this.maximum-this.minimum);
var _42a=(this._descending===false)?this.remainingBar:this.progressBar;
var _42b=(this._descending===false)?this.progressBar:this.remainingBar;
if(this._inProgressAnim&&this._inProgressAnim.status!="stopped"){
this._inProgressAnim.stop(true);
}
if(_428&&this.slideDuration>0&&_42a.style[this._progressPixelSize]){
var _42c=this;
var _42d={};
var _42e=parseFloat(_42a.style[this._progressPixelSize]);
var _42f=this.slideDuration*(_429-_42e/100);
if(_42f==0){
return;
}
if(_42f<0){
_42f=0-_42f;
}
_42d[this._progressPixelSize]={start:_42e,end:_429*100,units:"%"};
this._inProgressAnim=dojo.animateProperty({node:_42a,duration:_42f,onAnimate:function(v){
_42b.style[_42c._progressPixelSize]=(100-parseFloat(v[_42c._progressPixelSize]))+"%";
},onEnd:function(){
delete _42c._inProgressAnim;
},properties:_42d});
this._inProgressAnim.play();
}else{
_42a.style[this._progressPixelSize]=(_429*100)+"%";
_42b.style[this._progressPixelSize]=((1-_429)*100)+"%";
}
},_bumpValue:function(_430,_431){
if(this.disabled||this.readOnly){
return;
}
var s=dojo.getComputedStyle(this.sliderBarContainer);
var c=dojo._getContentBox(this.sliderBarContainer,s);
var _432=this.discreteValues;
if(_432<=1||_432==Infinity){
_432=c[this._pixelCount];
}
_432--;
var _433=(this.value-this.minimum)*_432/(this.maximum-this.minimum)+_430;
if(_433<0){
_433=0;
}
if(_433>_432){
_433=_432;
}
_433=_433*(this.maximum-this.minimum)/_432+this.minimum;
this._setValueAttr(_433,_431);
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
var _434=!dojo.isMozilla;
var _435=evt[(_434?"wheelDelta":"detail")]*(_434?1:-1);
this._bumpValue(_435<0?-1:1,true);
},startup:function(){
if(this._started){
return;
}
dojo.forEach(this.getChildren(),function(_436){
if(this[_436.container]!=this.containerNode){
this[_436.container].appendChild(_436.domNode);
}
},this);
this.inherited(arguments);
},_typematicCallback:function(_437,_438,e){
if(_437==-1){
this._setValueAttr(this.value,true);
}else{
this[(_438==(this._descending?this.incrementButton:this.decrementButton))?"decrement":"increment"](e);
}
},buildRendering:function(){
this.inherited(arguments);
if(this.showButtons){
this.incrementButton.style.display="";
this.decrementButton.style.display="";
}
var _439=dojo.query("label[for=\""+this.id+"\"]");
if(_439.length){
_439[0].id=(this.id+"_label");
dijit.setWaiState(this.focusNode,"labelledby",_439[0].id);
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
var _43a=dojo.declare(dijit.form._SliderMover,{widget:this});
this._movable=new dojo.dnd.Moveable(this.sliderHandle,{mover:_43a});
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
var _43b=this.widget;
var _43c=_43b._abspos;
if(!_43c){
_43c=_43b._abspos=dojo.position(_43b.sliderBarContainer,true);
_43b._setPixelValue_=dojo.hitch(_43b,"_setPixelValue");
_43b._isReversed_=_43b._isReversed();
}
var _43d=e.touches?e.touches[0]:e,_43e=_43d[_43b._mousePixelCoord]-_43c[_43b._startingPixelCoord];
_43b._setPixelValue_(_43b._isReversed_?(_43c[_43b._pixelCount]-_43e):_43e,_43c[_43b._pixelCount],false);
},onMouseUp:function(e){
this.inherited(arguments);
this.destroy();
},destroy:function(e){
dojo.dnd.Mover.prototype.destroy.apply(this,arguments);
var _43f=this.widget;
_43f._abspos=null;
_43f._setValueAttr(_43f.value,true);
}});
}
if(!dojo._hasResource["dijit.form.VerticalSlider"]){
dojo._hasResource["dijit.form.VerticalSlider"]=true;
dojo.provide("dijit.form.VerticalSlider");
dojo.declare("dijit.form.VerticalSlider",dijit.form.HorizontalSlider,{templateString:dojo.cache("dijit.form","templates/VerticalSlider.html","<table class=\"dijit dijitReset dijitSlider dijitSliderV\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\"\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV\"\r\n\t\t\t><div class=\"dijitSliderIncrementIconV\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><center><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderTopBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div></center\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td dojoAttachPoint=\"leftDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationL dijitSliderDecorationV\"></td\r\n\t\t><td class=\"dijitReset dijitSliderDecorationC\" style=\"height:100%;\"\r\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${!nameAttrSetting}\r\n\t\t\t/><center class=\"dijitReset dijitSliderBarContainerV\" role=\"presentation\" dojoAttachPoint=\"sliderBarContainer\"\r\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarV dijitSliderRemainingBar dijitSliderRemainingBarV\" dojoAttachEvent=\"onmousedown:_onBarClick\"><!--#5629--></div\r\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"progressBar\" class=\"dijitSliderBar dijitSliderBarV dijitSliderProgressBar dijitSliderProgressBarV\" dojoAttachEvent=\"onmousedown:_onBarClick\"\r\n\t\t\t\t\t><div class=\"dijitSliderMoveable dijitSliderMoveableV\" style=\"vertical-align:top;\"\r\n\t\t\t\t\t\t><div dojoAttachPoint=\"sliderHandle,focusNode\" class=\"dijitSliderImageHandle dijitSliderImageHandleV\" dojoAttachEvent=\"onmousedown:_onHandleClick\" role=\"slider\" valuemin=\"${minimum}\" valuemax=\"${maximum}\"></div\r\n\t\t\t\t\t></div\r\n\t\t\t\t></div\r\n\t\t\t></center\r\n\t\t></td\r\n\t\t><td dojoAttachPoint=\"containerNode,rightDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationR dijitSliderDecorationV\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><center><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderBottomBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div></center\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\"></td\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV\"\r\n\t\t\t><div class=\"dijitSliderDecrementIconV\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"></td\r\n\t></tr\r\n></table>\r\n"),_mousePixelCoord:"pageY",_pixelCount:"h",_startingPixelCoord:"y",_startingPixelCount:"t",_handleOffsetCoord:"top",_progressPixelSize:"height",_descending:true,_isReversed:function(){
return this._descending;
}});
}
if(!dojo._hasResource["dijit.form.HorizontalRule"]){
dojo._hasResource["dijit.form.HorizontalRule"]=true;
dojo.provide("dijit.form.HorizontalRule");
dojo.declare("dijit.form.HorizontalRule",[dijit._Widget,dijit._Templated],{templateString:"<div class=\"dijitRuleContainer dijitRuleContainerH\"></div>",count:3,container:"containerNode",ruleStyle:"",_positionPrefix:"<div class=\"dijitRuleMark dijitRuleMarkH\" style=\"left:",_positionSuffix:"%;",_suffix:"\"></div>",_genHTML:function(pos,ndx){
return this._positionPrefix+pos+this._positionSuffix+this.ruleStyle+this._suffix;
},_isHorizontal:true,buildRendering:function(){
this.inherited(arguments);
var _440;
if(this.count==1){
_440=this._genHTML(50,0);
}else{
var i;
var _441=100/(this.count-1);
if(!this._isHorizontal||this.isLeftToRight()){
_440=this._genHTML(0,0);
for(i=1;i<this.count-1;i++){
_440+=this._genHTML(_441*i,i);
}
_440+=this._genHTML(100,this.count-1);
}else{
_440=this._genHTML(100,0);
for(i=1;i<this.count-1;i++){
_440+=this._genHTML(100-_441*i,i);
}
_440+=this._genHTML(0,this.count-1);
}
}
this.domNode.innerHTML=_440;
}});
}
if(!dojo._hasResource["dijit.form.VerticalRule"]){
dojo._hasResource["dijit.form.VerticalRule"]=true;
dojo.provide("dijit.form.VerticalRule");
dojo.declare("dijit.form.VerticalRule",dijit.form.HorizontalRule,{templateString:"<div class=\"dijitRuleContainer dijitRuleContainerV\"></div>",_positionPrefix:"<div class=\"dijitRuleMark dijitRuleMarkV\" style=\"top:",_isHorizontal:false});
}
if(!dojo._hasResource["dijit.form.HorizontalRuleLabels"]){
dojo._hasResource["dijit.form.HorizontalRuleLabels"]=true;
dojo.provide("dijit.form.HorizontalRuleLabels");
dojo.declare("dijit.form.HorizontalRuleLabels",dijit.form.HorizontalRule,{templateString:"<div class=\"dijitRuleContainer dijitRuleContainerH dijitRuleLabelsContainer dijitRuleLabelsContainerH\"></div>",labelStyle:"",labels:[],numericMargin:0,minimum:0,maximum:1,constraints:{pattern:"#%"},_positionPrefix:"<div class=\"dijitRuleLabelContainer dijitRuleLabelContainerH\" style=\"left:",_labelPrefix:"\"><div class=\"dijitRuleLabel dijitRuleLabelH\">",_suffix:"</div></div>",_calcPosition:function(pos){
return pos;
},_genHTML:function(pos,ndx){
return this._positionPrefix+this._calcPosition(pos)+this._positionSuffix+this.labelStyle+this._labelPrefix+this.labels[ndx]+this._suffix;
},getLabels:function(){
var _442=this.labels;
if(!_442.length){
_442=dojo.query("> li",this.srcNodeRef).map(function(node){
return String(node.innerHTML);
});
}
this.srcNodeRef.innerHTML="";
if(!_442.length&&this.count>1){
var _443=this.minimum;
var inc=(this.maximum-_443)/(this.count-1);
for(var i=0;i<this.count;i++){
_442.push((i<this.numericMargin||i>=(this.count-this.numericMargin))?"":dojo.number.format(_443,this.constraints));
_443+=inc;
}
}
return _442;
},postMixInProperties:function(){
this.inherited(arguments);
this.labels=this.getLabels();
this.count=this.labels.length;
}});
}
if(!dojo._hasResource["dijit.form.VerticalRuleLabels"]){
dojo._hasResource["dijit.form.VerticalRuleLabels"]=true;
dojo.provide("dijit.form.VerticalRuleLabels");
dojo.declare("dijit.form.VerticalRuleLabels",dijit.form.HorizontalRuleLabels,{templateString:"<div class=\"dijitRuleContainer dijitRuleContainerV dijitRuleLabelsContainer dijitRuleLabelsContainerV\"></div>",_positionPrefix:"<div class=\"dijitRuleLabelContainer dijitRuleLabelContainerV\" style=\"top:",_labelPrefix:"\"><span class=\"dijitRuleLabel dijitRuleLabelV\">",_calcPosition:function(pos){
return 100-pos;
},_isHorizontal:false});
}
if(!dojo._hasResource["dijit.form.Slider"]){
dojo._hasResource["dijit.form.Slider"]=true;
dojo.provide("dijit.form.Slider");
dojo.deprecated("Call require() for HorizontalSlider / VerticalRule, explicitly rather than 'dijit.form.Slider' itself","","2.0");
}
if(!dojo._hasResource["dijit._editor.selection"]){
dojo._hasResource["dijit._editor.selection"]=true;
dojo.provide("dijit._editor.selection");
dojo.getObject("_editor.selection",true,dijit);
dojo.mixin(dijit._editor.selection,{getType:function(){
if(dojo.isIE<9){
return dojo.doc.selection.type.toLowerCase();
}else{
var _444="text";
var oSel;
try{
oSel=dojo.global.getSelection();
}
catch(e){
}
if(oSel&&oSel.rangeCount==1){
var _445=oSel.getRangeAt(0);
if((_445.startContainer==_445.endContainer)&&((_445.endOffset-_445.startOffset)==1)&&(_445.startContainer.nodeType!=3)){
_444="control";
}
}
return _444;
}
},getSelectedText:function(){
if(dojo.isIE<9){
if(dijit._editor.selection.getType()=="control"){
return null;
}
return dojo.doc.selection.createRange().text;
}else{
var _446=dojo.global.getSelection();
if(_446){
return _446.toString();
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
var _447=dojo.global.getSelection();
if(_447&&_447.rangeCount){
var i;
var html="";
for(i=0;i<_447.rangeCount;i++){
var frag=_447.getRangeAt(i).cloneContents();
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
var _448=dojo.doc.selection.createRange();
if(_448&&_448.item){
return dojo.doc.selection.createRange().item(0);
}
}else{
var _449=dojo.global.getSelection();
return _449.anchorNode.childNodes[_449.anchorOffset];
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
var _44a=dojo.global.getSelection();
if(_44a){
var node=_44a.anchorNode;
while(node&&(node.nodeType!=1)){
node=node.parentNode;
}
return node;
}
}
}
return null;
},hasAncestorElement:function(_44b){
return this.getAncestorElement.apply(this,arguments)!=null;
},getAncestorElement:function(_44c){
var node=this.getSelectedElement()||this.getParentElement();
return this.getParentOfType(node,arguments);
},isTag:function(node,tags){
if(node&&node.tagName){
var _44d=node.tagName.toLowerCase();
for(var i=0;i<tags.length;i++){
var _44e=String(tags[i]).toLowerCase();
if(_44d==_44e){
return _44e;
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
},collapse:function(_44f){
if(window.getSelection){
var _450=dojo.global.getSelection();
if(_450.removeAllRanges){
if(_44f){
_450.collapseToStart();
}else{
_450.collapseToEnd();
}
}else{
_450.collapse(_44f);
}
}else{
if(dojo.isIE){
var _451=dojo.doc.selection.createRange();
_451.collapse(_44f);
_451.select();
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
},selectElementChildren:function(_452,_453){
var win=dojo.global;
var doc=dojo.doc;
var _454;
_452=dojo.byId(_452);
if(doc.selection&&dojo.isIE<9&&dojo.body().createTextRange){
_454=_452.ownerDocument.body.createTextRange();
_454.moveToElementText(_452);
if(!_453){
try{
_454.select();
}
catch(e){
}
}
}else{
if(win.getSelection){
var _455=dojo.global.getSelection();
if(dojo.isOpera){
if(_455.rangeCount){
_454=_455.getRangeAt(0);
}else{
_454=doc.createRange();
}
_454.setStart(_452,0);
_454.setEnd(_452,(_452.nodeType==3)?_452.length:_452.childNodes.length);
_455.addRange(_454);
}else{
_455.selectAllChildren(_452);
}
}
}
},selectElement:function(_456,_457){
var _458;
var doc=dojo.doc;
var win=dojo.global;
_456=dojo.byId(_456);
if(dojo.isIE<9&&dojo.body().createTextRange){
try{
var tg=_456.tagName?_456.tagName.toLowerCase():"";
if(tg==="img"||tg==="table"){
_458=dojo.body().createControlRange();
}else{
_458=dojo.body().createRange();
}
_458.addElement(_456);
if(!_457){
_458.select();
}
}
catch(e){
this.selectElementChildren(_456,_457);
}
}else{
if(dojo.global.getSelection){
var _459=win.getSelection();
_458=doc.createRange();
if(_459.removeAllRanges){
if(dojo.isOpera){
if(_459.getRangeAt(0)){
_458=_459.getRangeAt(0);
}
}
_458.selectNode(_456);
_459.removeAllRanges();
_459.addRange(_458);
}
}
}
},inSelection:function(node){
if(node){
var _45a;
var doc=dojo.doc;
var _45b;
if(dojo.global.getSelection){
var sel=dojo.global.getSelection();
if(sel&&sel.rangeCount>0){
_45b=sel.getRangeAt(0);
}
if(_45b&&_45b.compareBoundaryPoints&&doc.createRange){
try{
_45a=doc.createRange();
_45a.setStart(node,0);
if(_45b.compareBoundaryPoints(_45b.START_TO_END,_45a)===1){
return true;
}
}
catch(e){
}
}
}else{
if(doc.selection){
_45b=doc.selection.createRange();
try{
_45a=node.ownerDocument.body.createControlRange();
if(_45a){
_45a.addElement(node);
}
}
catch(e1){
try{
_45a=node.ownerDocument.body.createTextRange();
_45a.moveToElementText(node);
}
catch(e2){
}
}
if(_45b&&_45a){
if(_45b.compareEndPoints("EndToStart",_45a)===1){
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
dijit.range.getIndex=function(node,_45c){
var ret=[],retR=[];
var stop=_45c;
var _45d=node;
var _45e,n;
while(node!=stop){
var i=0;
_45e=node.parentNode;
while((n=_45e.childNodes[i++])){
if(n===node){
--i;
break;
}
}
ret.unshift(i);
retR.unshift(i-_45e.childNodes.length);
node=_45e;
}
if(ret.length>0&&_45d.nodeType==3){
n=_45d.previousSibling;
while(n&&n.nodeType==3){
ret[ret.length-1]--;
n=n.previousSibling;
}
n=_45d.nextSibling;
while(n&&n.nodeType==3){
retR[retR.length-1]++;
n=n.nextSibling;
}
}
return {o:ret,r:retR};
};
dijit.range.getNode=function(_45f,_460){
if(!dojo.isArray(_45f)||_45f.length==0){
return _460;
}
var node=_460;
dojo.every(_45f,function(i){
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
var _461=function(n){
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
var n1as=_461(n1);
var n2as=_461(n2);
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
dijit.range.getAncestor=function(node,_462,root){
root=root||node.ownerDocument.body;
while(node&&node!==root){
var name=node.nodeName.toUpperCase();
if(_462.test(name)){
return node;
}
node=node.parentNode;
}
return null;
};
dijit.range.BlockTagNames=/^(?:P|DIV|H1|H2|H3|H4|H5|H6|ADDRESS|PRE|OL|UL|LI|DT|DE)$/;
dijit.range.getBlockAncestor=function(node,_463,root){
root=root||node.ownerDocument.body;
_463=_463||dijit.range.BlockTagNames;
var _464=null,_465;
while(node&&node!==root){
var name=node.nodeName.toUpperCase();
if(!_464&&_463.test(name)){
_464=node;
}
if(!_465&&(/^(?:BODY|TD|TH|CAPTION)$/).test(name)){
_465=node;
}
node=node.parentNode;
}
return {blockNode:_464,blockContainer:_465||node.ownerDocument.body};
};
dijit.range.atBeginningOfContainer=function(_466,node,_467){
var _468=false;
var _469=(_467==0);
if(!_469&&node.nodeType==3){
if(/^[\s\xA0]+$/.test(node.nodeValue.substr(0,_467))){
_469=true;
}
}
if(_469){
var _46a=node;
_468=true;
while(_46a&&_46a!==_466){
if(_46a.previousSibling){
_468=false;
break;
}
_46a=_46a.parentNode;
}
}
return _468;
};
dijit.range.atEndOfContainer=function(_46b,node,_46c){
var _46d=false;
var _46e=(_46c==(node.length||node.childNodes.length));
if(!_46e&&node.nodeType==3){
if(/^[\s\xA0]+$/.test(node.nodeValue.substr(_46c))){
_46e=true;
}
}
if(_46e){
var _46f=node;
_46d=true;
while(_46f&&_46f!==_46b){
if(_46f.nextSibling){
_46d=false;
break;
}
_46f=_46f.parentNode;
}
}
return _46d;
};
dijit.range.adjacentNoneTextNode=function(_470,next){
var node=_470;
var len=(0-_470.length)||0;
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
dijit.range.getSelection=function(win,_471){
if(dijit.range._w3c){
return win.getSelection();
}else{
var s=new dijit.range.ie.selection(win);
if(!_471){
s._getCurrentSelection();
}
return s;
}
};
if(!dijit.range._w3c){
dijit.range.ie={cachedSelection:{},selection:function(win){
this._ranges=[];
this.addRange=function(r,_472){
this._ranges.push(r);
if(!_472){
r._select();
}
this.rangeCount=this._ranges.length;
};
this.removeAllRanges=function(){
this._ranges=[];
this.rangeCount=0;
};
var _473=function(){
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
var r=_473();
if(r){
this.addRange(r,true);
}
};
},decomposeControlRange:function(_474){
var _475=_474.item(0),_476=_474.item(_474.length-1);
var _477=_475.parentNode,_478=_476.parentNode;
var _479=dijit.range.getIndex(_475,_477).o;
var _47a=dijit.range.getIndex(_476,_478).o+1;
return [_477,_479,_478,_47a];
},getEndPoint:function(_47b,end){
var _47c=_47b.duplicate();
_47c.collapse(!end);
var _47d="EndTo"+(end?"End":"Start");
var _47e=_47c.parentElement();
var _47f,_480,_481;
if(_47e.childNodes.length>0){
dojo.every(_47e.childNodes,function(node,i){
var _482;
if(node.nodeType!=3){
_47c.moveToElementText(node);
if(_47c.compareEndPoints(_47d,_47b)>0){
if(_481&&_481.nodeType==3){
_47f=_481;
_482=true;
}else{
_47f=_47e;
_480=i;
return false;
}
}else{
if(i==_47e.childNodes.length-1){
_47f=_47e;
_480=_47e.childNodes.length;
return false;
}
}
}else{
if(i==_47e.childNodes.length-1){
_47f=node;
_482=true;
}
}
if(_482&&_47f){
var _483=dijit.range.adjacentNoneTextNode(_47f)[0];
if(_483){
_47f=_483.nextSibling;
}else{
_47f=_47e.firstChild;
}
var _484=dijit.range.adjacentNoneTextNode(_47f);
_483=_484[0];
var _485=_484[1];
if(_483){
_47c.moveToElementText(_483);
_47c.collapse(false);
}else{
_47c.moveToElementText(_47e);
}
_47c.setEndPoint(_47d,_47b);
_480=_47c.text.length-_485;
return false;
}
_481=node;
return true;
});
}else{
_47f=_47e;
_480=0;
}
if(!end&&_47f.nodeType==1&&_480==_47f.childNodes.length){
var _486=_47f.nextSibling;
if(_486&&_486.nodeType==3){
_47f=_486;
_480=0;
}
}
return [_47f,_480];
},setEndPoint:function(_487,_488,_489){
var _48a=_487.duplicate(),node,len;
if(_488.nodeType!=3){
if(_489>0){
node=_488.childNodes[_489-1];
if(node){
if(node.nodeType==3){
_488=node;
_489=node.length;
}else{
if(node.nextSibling&&node.nextSibling.nodeType==3){
_488=node.nextSibling;
_489=0;
}else{
_48a.moveToElementText(node.nextSibling?node:_488);
var _48b=node.parentNode;
var _48c=_48b.insertBefore(node.ownerDocument.createTextNode(" "),node.nextSibling);
_48a.collapse(false);
_48b.removeChild(_48c);
}
}
}
}else{
_48a.moveToElementText(_488);
_48a.collapse(true);
}
}
if(_488.nodeType==3){
var _48d=dijit.range.adjacentNoneTextNode(_488);
var _48e=_48d[0];
len=_48d[1];
if(_48e){
_48a.moveToElementText(_48e);
_48a.collapse(false);
if(_48e.contentEditable!="inherit"){
len++;
}
}else{
_48a.moveToElementText(_488.parentNode);
_48a.collapse(true);
}
_489+=len;
if(_489>0){
if(_48a.move("character",_489)!=_489){
console.error("Error when moving!");
}
}
}
return _48a;
},decomposeTextRange:function(_48f){
var _490=dijit.range.ie.getEndPoint(_48f);
var _491=_490[0],_492=_490[1];
var _493=_490[0],_494=_490[1];
if(_48f.htmlText.length){
if(_48f.htmlText==_48f.text){
_494=_492+_48f.text.length;
}else{
_490=dijit.range.ie.getEndPoint(_48f,true);
_493=_490[0],_494=_490[1];
}
}
return [_491,_492,_493,_494];
},setRange:function(_495,_496,_497,_498,_499,_49a){
var _49b=dijit.range.ie.setEndPoint(_495,_496,_497);
_495.setEndPoint("StartToStart",_49b);
if(!_49a){
var end=dijit.range.ie.setEndPoint(_495,_498,_499);
}
_495.setEndPoint("EndToEnd",end||_49b);
return _495;
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
},setStart:function(node,_49c){
_49c=parseInt(_49c);
if(this.startContainer===node&&this.startOffset==_49c){
return;
}
delete this._cachedBookmark;
this.startContainer=node;
this.startOffset=_49c;
if(!this.endContainer){
this.setEnd(node,_49c);
}else{
this._updateInternal();
}
},setEnd:function(node,_49d){
_49d=parseInt(_49d);
if(this.endContainer===node&&this.endOffset==_49d){
return;
}
delete this._cachedBookmark;
this.endContainer=node;
this.endOffset=_49d;
if(!this.startContainer){
this.setStart(node,_49d);
}else{
this._updateInternal();
}
},setStartAfter:function(node,_49e){
this._setPoint("setStart",node,_49e,1);
},setStartBefore:function(node,_49f){
this._setPoint("setStart",node,_49f,0);
},setEndAfter:function(node,_4a0){
this._setPoint("setEnd",node,_4a0,1);
},setEndBefore:function(node,_4a1){
this._setPoint("setEnd",node,_4a1,0);
},_setPoint:function(what,node,_4a2,ext){
var _4a3=dijit.range.getIndex(node,node.parentNode).o;
this[what](node.parentNode,_4a3.pop()+ext);
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
dijit._editor.escapeXml=function(str,_4a4){
str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
if(!_4a4){
str=str.replace(/'/gm,"&#39;");
}
return str;
};
dijit._editor.getNodeHtml=function(node){
var _4a5;
switch(node.nodeType){
case 1:
var _4a6=node.nodeName.toLowerCase();
if(!_4a6||_4a6.charAt(0)=="/"){
return "";
}
_4a5="<"+_4a6;
var _4a7=[];
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
_4a7.push([key,node.getAttribute("_djrealurl")]);
continue;
}
}
var val,_4a8;
switch(key){
case "style":
val=node.style.cssText.toLowerCase();
break;
case "class":
val=node.className;
break;
case "width":
if(_4a6==="img"){
_4a8=/width=(\S+)/i.exec(s);
if(_4a8){
val=_4a8[1];
}
break;
}
case "height":
if(_4a6==="img"){
_4a8=/height=(\S+)/i.exec(s);
if(_4a8){
val=_4a8[1];
}
break;
}
default:
val=node.getAttribute(key);
}
if(val!=null){
_4a7.push([key,val.toString()]);
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
_4a7.push([n,v]);
}
}
}
_4a7.sort(function(a,b){
return a[0]<b[0]?-1:(a[0]==b[0]?0:1);
});
var j=0;
while((attr=_4a7[j++])){
_4a5+=" "+attr[0]+"=\""+(dojo.isString(attr[1])?dijit._editor.escapeXml(attr[1],true):attr[1])+"\"";
}
if(_4a6==="script"){
_4a5+=">"+node.innerHTML+"</"+_4a6+">";
}else{
if(node.childNodes.length){
_4a5+=">"+dijit._editor.getChildrenHtml(node)+"</"+_4a6+">";
}else{
switch(_4a6){
case "br":
case "hr":
case "img":
case "input":
case "base":
case "meta":
case "area":
case "basefont":
_4a5+=" />";
break;
default:
_4a5+="></"+_4a6+">";
}
}
}
break;
case 4:
case 3:
_4a5=dijit._editor.escapeXml(node.nodeValue,true);
break;
case 8:
_4a5="<!--"+dijit._editor.escapeXml(node.nodeValue,true)+"-->";
break;
default:
_4a5="<!-- Element not recognized - Type: "+node.nodeType+" Name: "+node.nodeName+"-->";
}
return _4a5;
};
dijit._editor.getChildrenHtml=function(dom){
var out="";
if(!dom){
return out;
}
var _4a9=dom["childNodes"]||dom;
var _4aa=!dojo.isIE||_4a9!==dom;
var node,i=0;
while((node=_4a9[i++])){
if(!_4aa||node.parentNode==dom){
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
var _4ab=dojo.doc.createElement("textarea");
_4ab.id=dijit._scopeName+"._editor.RichText.value";
dojo.style(_4ab,{display:"none",position:"absolute",top:"-100px",height:"3px",width:"3px"});
dojo.body().appendChild(_4ab);
})();
}else{
try{
dojo.doc.write("<textarea id=\""+dijit._scopeName+"._editor.RichText.value\" "+"style=\"display:none;position:absolute;top:-100px;left:-100px;height:3px;width:3px;overflow:hidden;\"></textarea>");
}
catch(e){
}
}
}
dojo.declare("dijit._editor.RichText",[dijit._Widget,dijit._CssStateMixin],{constructor:function(_4ac){
this.contentPreFilters=[];
this.contentPostFilters=[];
this.contentDomPreFilters=[];
this.contentDomPostFilters=[];
this.editingAreaStyleSheets=[];
this.events=[].concat(this.events);
this._keyHandlers={};
if(_4ac&&dojo.isString(_4ac.value)){
this.value=_4ac.value;
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
var _4ad={b:exec("bold"),i:exec("italic"),u:exec("underline"),a:exec("selectall"),s:function(){
this.save(true);
},m:function(){
this.isTabIndent=!this.isTabIndent;
},"1":exec("formatblock","h1"),"2":exec("formatblock","h2"),"3":exec("formatblock","h3"),"4":exec("formatblock","h4"),"\\":exec("insertunorderedlist")};
if(!dojo.isIE){
_4ad.Z=exec("redo");
}
for(var key in _4ad){
this.addKeyHandler(key,true,false,_4ad[key]);
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
var _4ae=["div","p","pre","h1","h2","h3","h4","h5","h6","ol","ul","address"];
var _4af="",_4b0,i=0;
while((_4b0=_4ae[i++])){
if(_4b0.charAt(1)!=="l"){
_4af+="<"+_4b0+"><span>content</span></"+_4b0+"><br/>";
}else{
_4af+="<"+_4b0+"><li>content</li></"+_4b0+"><br/>";
}
}
var _4b1={position:"absolute",top:"0px",zIndex:10,opacity:0.01};
var div=dojo.create("div",{style:_4b1,innerHTML:_4af});
dojo.body().appendChild(div);
var _4b2=dojo.hitch(this,function(){
var node=div.firstChild;
while(node){
try{
dijit._editor.selection.selectElement(node.firstChild);
var _4b3=node.tagName.toLowerCase();
this._local2NativeFormatNames[_4b3]=document.queryCommandValue("formatblock");
this._native2LocalFormatNames[this._local2NativeFormatNames[_4b3]]=_4b3;
node=node.nextSibling.nextSibling;
}
catch(e){
}
}
div.parentNode.removeChild(div);
div.innerHTML="";
});
setTimeout(_4b2,0);
},open:function(_4b4){
if(!this.onLoadDeferred||this.onLoadDeferred.fired>=0){
this.onLoadDeferred=new dojo.Deferred();
}
if(!this.isClosed){
this.close();
}
dojo.publish(dijit._scopeName+"._editor.RichText::open",[this]);
if(arguments.length==1&&_4b4.nodeName){
this.domNode=_4b4;
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
var _4b5=dojo.hitch(this,function(){
dojo.style(ta,{display:"block",position:"absolute",top:"-1000px"});
if(dojo.isIE){
var s=ta.style;
this.__overflow=s.overflow;
s.overflow="hidden";
}
});
if(dojo.isIE){
setTimeout(_4b5,10);
}else{
_4b5();
}
if(ta.form){
var _4b6=ta.value;
this.reset=function(){
var _4b7=this.getValue();
if(_4b7!=_4b6){
this.replaceValue(_4b6);
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
var _4b8=dojo.contentBox(dn);
this._oldHeight=_4b8.h;
this._oldWidth=_4b8.w;
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
var _4b9=dojo.byId(dijit._scopeName+"._editor.RichText.value");
if(_4b9&&_4b9.value!==""){
var _4ba=_4b9.value.split(this._SEPARATOR),i=0,dat;
while((dat=_4ba[i++])){
var data=dat.split(this._NAME_CONTENT_SEP);
if(data[0]==this.name){
html=data[1];
_4ba=_4ba.splice(i,1);
_4b9.value=_4ba.join(this._SEPARATOR);
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
var _4bb=dojo.getComputedStyle(this.domNode);
var html="";
var _4bc=true;
if(dojo.isIE||dojo.isWebKit||(!this.height&&!dojo.isMoz)){
html="<div id='dijitEditorBody'></div>";
_4bc=false;
}else{
if(dojo.isMoz){
this._cursorToStart=true;
html="&nbsp;";
}
}
var font=[_4bb.fontWeight,_4bb.fontSize,_4bb.fontFamily].join(" ");
var _4bd=_4bb.lineHeight;
if(_4bd.indexOf("px")>=0){
_4bd=parseFloat(_4bd)/parseFloat(_4bb.fontSize);
}else{
if(_4bd.indexOf("em")>=0){
_4bd=parseFloat(_4bd);
}else{
_4bd="normal";
}
}
var _4be="";
var self=this;
this.style.replace(/(^|;)\s*(line-|font-?)[^;]+/ig,function(_4bf){
_4bf=_4bf.replace(/^;/ig,"")+";";
var s=_4bf.split(":")[0];
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
_4be+=_4bf+";";
});
var _4c0=dojo.query("label[for=\""+this.id+"\"]");
return [this.isLeftToRight()?"<html>\n<head>\n":"<html dir='rtl'>\n<head>\n",(dojo.isMoz&&_4c0.length?"<title>"+_4c0[0].innerHTML+"</title>\n":""),"<meta http-equiv='Content-Type' content='text/html'>\n","<style>\n","\tbody,html {\n","\t\tbackground:transparent;\n","\t\tpadding: 1px 0 0 0;\n","\t\tmargin: -1px 0 0 0;\n",((dojo.isWebKit)?"\t\twidth: 100%;\n":""),((dojo.isWebKit)?"\t\theight: 100%;\n":""),"\t}\n","\tbody{\n","\t\ttop:0px;\n","\t\tleft:0px;\n","\t\tright:0px;\n","\t\tfont:",font,";\n",((this.height||dojo.isOpera)?"":"\t\tposition: fixed;\n"),"\t\tmin-height:",this.minHeight,";\n","\t\tline-height:",_4bd,";\n","\t}\n","\tp{ margin: 1em 0; }\n",(!_4bc&&!this.height?"\tbody,html {overflow-y: hidden;}\n":""),"\t#dijitEditorBody{overflow-x: auto; overflow-y:"+(this.height?"auto;":"hidden;")+" outline: 0px;}\n","\tli > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; }\n",(!dojo.isIE?"\tli{ min-height:1.2em; }\n":""),"</style>\n",this._applyEditingAreaStyleSheets(),"\n","</head>\n<body ",(_4bc?"id='dijitEditorBody' ":""),"onload='frameElement._loadFunc(window,document)' style='"+_4be+"'>",html,"</body>\n</html>"].join("");
},_applyEditingAreaStyleSheets:function(){
var _4c1=[];
if(this.styleSheets){
_4c1=this.styleSheets.split(";");
this.styleSheets="";
}
_4c1=_4c1.concat(this.editingAreaStyleSheets);
this.editingAreaStyleSheets=[];
var text="",i=0,url;
while((url=_4c1[i++])){
var _4c2=(new dojo._Url(dojo.global.location,url)).toString();
this.editingAreaStyleSheets.push(_4c2);
text+="<link rel=\"stylesheet\" type=\"text/css\" href=\""+_4c2+"\"/>";
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
var _4c3=this.document.createElement("link");
_4c3.rel="stylesheet";
_4c3.type="text/css";
_4c3.href=url;
head.appendChild(_4c3);
}
}));
},removeStyleSheet:function(uri){
var url=uri.toString();
if(url.charAt(0)=="."||(url.charAt(0)!="/"&&!uri.host)){
url=(new dojo._Url(dojo.global.location,url)).toString();
}
var _4c4=dojo.indexOf(this.editingAreaStyleSheets,url);
if(_4c4==-1){
return;
}
delete this.editingAreaStyleSheets[_4c4];
dojo.withGlobal(this.window,"query",dojo,["link:[href=\""+url+"\"]"]).orphan();
},disabled:false,_mozSettingProps:{"styleWithCSS":false},_setDisabledAttr:function(_4c5){
_4c5=!!_4c5;
this._set("disabled",_4c5);
if(!this.isLoaded){
return;
}
if(dojo.isIE||dojo.isWebKit||dojo.isOpera){
var _4c6=dojo.isIE&&(this.isLoaded||!this.focusOnLoad);
if(_4c6){
this.editNode.unselectable="on";
}
this.editNode.contentEditable=!_4c5;
if(_4c6){
var _4c7=this;
setTimeout(function(){
_4c7.editNode.unselectable="off";
},0);
}
}else{
try{
this.document.designMode=(_4c5?"off":"on");
}
catch(e){
return;
}
if(!_4c5&&this._mozSettingProps){
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
var _4c8=this;
if(dojo.isIE){
this.tabStop=dojo.create("div",{tabIndex:-1},this.editingArea);
this.iframe.onfocus=function(){
_4c8.editNode.setActive();
};
}
}
this.focusNode=this.editNode;
var _4c9=this.events.concat(this.captureEvents);
var ap=this.iframe?this.document:this.editNode;
dojo.forEach(_4c9,function(item){
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
var _4ca=dojo.hitch(this,function(){
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
this.setValueDeferred.addCallback(_4ca);
}else{
_4ca();
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
},setDisabled:function(_4cb){
dojo.deprecated("dijit.Editor::setDisabled is deprecated","use dijit.Editor::attr(\"disabled\",boolean) instead",2);
this.set("disabled",_4cb);
},_setValueAttr:function(_4cc){
this.setValue(_4cc);
},_setDisableSpellCheckAttr:function(_4cd){
if(this.document){
dojo.attr(this.document.body,"spellcheck",!_4cd);
}else{
this.onLoadDeferred.addCallback(dojo.hitch(this,function(){
dojo.attr(this.document.body,"spellcheck",!_4cd);
}));
}
this._set("disableSpellCheck",_4cd);
},onKeyPress:function(e){
var c=(e.keyChar&&e.keyChar.toLowerCase())||e.keyCode,_4ce=this._keyHandlers[c],args=arguments;
if(_4ce&&!e.altKey){
dojo.some(_4ce,function(h){
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
},addKeyHandler:function(key,ctrl,_4cf,_4d0){
if(!dojo.isArray(this._keyHandlers[key])){
this._keyHandlers[key]=[];
}
this._keyHandlers[key].push({shift:_4cf||false,ctrl:ctrl||false,handler:_4d0});
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
var _4d1=this.getValue(true);
if(_4d1!=this.value){
this.onChange(_4d1);
}
this._set("value",_4d1);
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
},onChange:function(_4d2){
},_normalizeCommand:function(cmd,_4d3){
var _4d4=cmd.toLowerCase();
if(_4d4=="formatblock"){
if(dojo.isSafari&&_4d3===undefined){
_4d4="heading";
}
}else{
if(_4d4=="hilitecolor"&&!dojo.isMoz){
_4d4="backcolor";
}
}
return _4d4;
},_qcaCache:{},queryCommandAvailable:function(_4d5){
var ca=this._qcaCache[_4d5];
if(ca!==undefined){
return ca;
}
return (this._qcaCache[_4d5]=this._queryCommandAvailable(_4d5));
},_queryCommandAvailable:function(_4d6){
var ie=1;
var _4d7=1<<1;
var _4d8=1<<2;
var _4d9=1<<3;
function _4da(_4db){
return {ie:Boolean(_4db&ie),mozilla:Boolean(_4db&_4d7),webkit:Boolean(_4db&_4d8),opera:Boolean(_4db&_4d9)};
};
var _4dc=null;
switch(_4d6.toLowerCase()){
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
_4dc=_4da(_4d7|ie|_4d8|_4d9);
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
_4dc=_4da(_4d7|ie|_4d9|_4d8);
break;
case "blockdirltr":
case "blockdirrtl":
case "dirltr":
case "dirrtl":
case "inlinedirltr":
case "inlinedirrtl":
_4dc=_4da(ie);
break;
case "cut":
case "copy":
case "paste":
_4dc=_4da(ie|_4d7|_4d8);
break;
case "inserttable":
_4dc=_4da(_4d7|ie);
break;
case "insertcell":
case "insertcol":
case "insertrow":
case "deletecells":
case "deletecols":
case "deleterows":
case "mergecells":
case "splitcell":
_4dc=_4da(ie|_4d7);
break;
default:
return false;
}
return (dojo.isIE&&_4dc.ie)||(dojo.isMoz&&_4dc.mozilla)||(dojo.isWebKit&&_4dc.webkit)||(dojo.isOpera&&_4dc.opera);
},execCommand:function(_4dd,_4de){
var _4df;
this.focus();
_4dd=this._normalizeCommand(_4dd,_4de);
if(_4de!==undefined){
if(_4dd=="heading"){
throw new Error("unimplemented");
}else{
if((_4dd=="formatblock")&&dojo.isIE){
_4de="<"+_4de+">";
}
}
}
var _4e0="_"+_4dd+"Impl";
if(this[_4e0]){
_4df=this[_4e0](_4de);
}else{
_4de=arguments.length>1?_4de:null;
if(_4de||_4dd!="createlink"){
_4df=this.document.execCommand(_4dd,false,_4de);
}
}
this.onDisplayChanged();
return _4df;
},queryCommandEnabled:function(_4e1){
if(this.disabled||!this._disabledOK){
return false;
}
_4e1=this._normalizeCommand(_4e1);
if(dojo.isMoz||dojo.isWebKit){
if(_4e1=="unlink"){
return this._sCall("hasAncestorElement",["a"]);
}else{
if(_4e1=="inserttable"){
return true;
}
}
}
if(dojo.isWebKit){
if(_4e1=="cut"||_4e1=="copy"){
var sel=this.window.getSelection();
if(sel){
sel=sel.toString();
}
return !!sel;
}else{
if(_4e1=="paste"){
return true;
}
}
}
var elem=dojo.isIE?this.document.selection.createRange():this.document;
try{
return elem.queryCommandEnabled(_4e1);
}
catch(e){
return false;
}
},queryCommandState:function(_4e2){
if(this.disabled||!this._disabledOK){
return false;
}
_4e2=this._normalizeCommand(_4e2);
try{
return this.document.queryCommandState(_4e2);
}
catch(e){
return false;
}
},queryCommandValue:function(_4e3){
if(this.disabled||!this._disabledOK){
return false;
}
var r;
_4e3=this._normalizeCommand(_4e3);
if(dojo.isIE&&_4e3=="formatblock"){
r=this._native2LocalFormatNames[this.document.queryCommandValue(_4e3)];
}else{
if(dojo.isMoz&&_4e3==="hilitecolor"){
var _4e4;
try{
_4e4=this.document.queryCommandValue("styleWithCSS");
}
catch(e){
_4e4=false;
}
this.document.execCommand("styleWithCSS",false,true);
r=this.document.queryCommandValue(_4e3);
this.document.execCommand("styleWithCSS",false,_4e4);
}else{
r=this.document.queryCommandValue(_4e3);
}
}
return r;
},_sCall:function(name,args){
return dojo.withGlobal(this.window,name,dijit._editor.selection,args);
},placeCursorAtStart:function(){
this.focus();
var _4e5=false;
if(dojo.isMoz){
var _4e6=this.editNode.firstChild;
while(_4e6){
if(_4e6.nodeType==3){
if(_4e6.nodeValue.replace(/^\s+|\s+$/g,"").length>0){
_4e5=true;
this._sCall("selectElement",[_4e6]);
break;
}
}else{
if(_4e6.nodeType==1){
_4e5=true;
var tg=_4e6.tagName?_4e6.tagName.toLowerCase():"";
if(/br|input|img|base|meta|area|basefont|hr|link/.test(tg)){
this._sCall("selectElement",[_4e6]);
}else{
this._sCall("selectElementChildren",[_4e6]);
}
break;
}
}
_4e6=_4e6.nextSibling;
}
}else{
_4e5=true;
this._sCall("selectElementChildren",[this.editNode]);
}
if(_4e5){
this._sCall("collapse",[true]);
}
},placeCursorAtEnd:function(){
this.focus();
var _4e7=false;
if(dojo.isMoz){
var last=this.editNode.lastChild;
while(last){
if(last.nodeType==3){
if(last.nodeValue.replace(/^\s+|\s+$/g,"").length>0){
_4e7=true;
this._sCall("selectElement",[last]);
break;
}
}else{
if(last.nodeType==1){
_4e7=true;
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
_4e7=true;
this._sCall("selectElementChildren",[this.editNode]);
}
if(_4e7){
this._sCall("collapse",[false]);
}
},getValue:function(_4e8){
if(this.textarea){
if(this.isClosed||!this.isLoaded){
return this.textarea.value;
}
}
return this._postFilterContent(null,_4e8);
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
},_postFilterContent:function(dom,_4e9){
var ec;
if(!dojo.isString(dom)){
dom=dom||this.editNode;
if(this.contentDomPostFilters.length){
if(_4e9){
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
var _4ea=dojo.byId(dijit._scopeName+"._editor.RichText.value");
if(_4ea.value){
_4ea.value+=this._SEPARATOR;
}
_4ea.value+=this.name+this._NAME_CONTENT_SEP+this.getValue(true);
},escapeXml:function(str,_4eb){
str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
if(!_4eb){
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
},_inserthorizontalruleImpl:function(_4ec){
if(dojo.isIE){
return this._inserthtmlImpl("<hr>");
}
return this.document.execCommand("inserthorizontalrule",false,_4ec);
},_unlinkImpl:function(_4ed){
if((this.queryCommandEnabled("unlink"))&&(dojo.isMoz||dojo.isWebKit)){
var a=this._sCall("getAncestorElement",["a"]);
this._sCall("selectElement",[a]);
return this.document.execCommand("unlink",false,null);
}
return this.document.execCommand("unlink",false,_4ed);
},_hilitecolorImpl:function(_4ee){
var _4ef;
if(dojo.isMoz){
this.document.execCommand("styleWithCSS",false,true);
_4ef=this.document.execCommand("hilitecolor",false,_4ee);
this.document.execCommand("styleWithCSS",false,false);
}else{
_4ef=this.document.execCommand("hilitecolor",false,_4ee);
}
return _4ef;
},_backcolorImpl:function(_4f0){
if(dojo.isIE){
_4f0=_4f0?_4f0:null;
}
return this.document.execCommand("backcolor",false,_4f0);
},_forecolorImpl:function(_4f1){
if(dojo.isIE){
_4f1=_4f1?_4f1:null;
}
return this.document.execCommand("forecolor",false,_4f1);
},_inserthtmlImpl:function(_4f2){
_4f2=this._preFilterContent(_4f2);
var rv=true;
if(dojo.isIE){
var _4f3=this.document.selection.createRange();
if(this.document.selection.type.toUpperCase()=="CONTROL"){
var n=_4f3.item(0);
while(_4f3.length){
_4f3.remove(_4f3.item(0));
}
n.outerHTML=_4f2;
}else{
_4f3.pasteHTML(_4f2);
}
_4f3.select();
}else{
if(dojo.isMoz&&!_4f2.length){
this._sCall("remove");
}else{
rv=this.document.execCommand("inserthtml",false,_4f2);
}
}
return rv;
},_boldImpl:function(_4f4){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("bold",false,_4f4);
},_italicImpl:function(_4f5){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("italic",false,_4f5);
},_underlineImpl:function(_4f6){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("underline",false,_4f6);
},_strikethroughImpl:function(_4f7){
if(dojo.isIE){
this._adaptIESelection();
}
return this.document.execCommand("strikethrough",false,_4f7);
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
},_isNodeEmpty:function(node,_4f8){
if(node.nodeType==1){
if(node.childNodes.length>0){
return this._isNodeEmpty(node.childNodes[0],_4f8);
}
return true;
}else{
if(node.nodeType==3){
return (node.nodeValue.substring(_4f8)=="");
}
}
return false;
},_removeStartingRangeFromRange:function(node,_4f9){
if(node.nextSibling){
_4f9.setStart(node.nextSibling,0);
}else{
var _4fa=node.parentNode;
while(_4fa&&_4fa.nextSibling==null){
_4fa=_4fa.parentNode;
}
if(_4fa){
_4f9.setStart(_4fa.nextSibling,0);
}
}
return _4f9;
},_adaptIESelection:function(){
var _4fb=dijit.range.getSelection(this.window);
if(_4fb&&_4fb.rangeCount&&!_4fb.isCollapsed){
var _4fc=_4fb.getRangeAt(0);
var _4fd=_4fc.startContainer;
var _4fe=_4fc.startOffset;
while(_4fd.nodeType==3&&_4fe>=_4fd.length&&_4fd.nextSibling){
_4fe=_4fe-_4fd.length;
_4fd=_4fd.nextSibling;
}
var _4ff=null;
while(this._isNodeEmpty(_4fd,_4fe)&&_4fd!=_4ff){
_4ff=_4fd;
_4fc=this._removeStartingRangeFromRange(_4fd,_4fc);
_4fd=_4fc.startContainer;
_4fe=0;
}
_4fb.removeAllRanges();
_4fb.addRange(_4fc);
}
}});
}
if(!dojo._hasResource["dijit._KeyNavContainer"]){
dojo._hasResource["dijit._KeyNavContainer"]=true;
dojo.provide("dijit._KeyNavContainer");
dojo.declare("dijit._KeyNavContainer",dijit._Container,{tabIndex:"0",_keyNavCodes:{},connectKeyNavHandlers:function(_500,_501){
var _502=(this._keyNavCodes={});
var prev=dojo.hitch(this,this.focusPrev);
var next=dojo.hitch(this,this.focusNext);
dojo.forEach(_500,function(code){
_502[code]=prev;
});
dojo.forEach(_501,function(code){
_502[code]=next;
});
_502[dojo.keys.HOME]=dojo.hitch(this,"focusFirstChild");
_502[dojo.keys.END]=dojo.hitch(this,"focusLastChild");
this.connect(this.domNode,"onkeypress","_onContainerKeypress");
this.connect(this.domNode,"onfocus","_onContainerFocus");
},startupKeyNavChildren:function(){
dojo.forEach(this.getChildren(),dojo.hitch(this,"_startupChild"));
},addChild:function(_503,_504){
dijit._KeyNavContainer.superclass.addChild.apply(this,arguments);
this._startupChild(_503);
},focus:function(){
this.focusFirstChild();
},focusFirstChild:function(){
var _505=this._getFirstFocusableChild();
if(_505){
this.focusChild(_505);
}
},focusLastChild:function(){
var _506=this._getLastFocusableChild();
if(_506){
this.focusChild(_506);
}
},focusNext:function(){
var _507=this._getNextFocusableChild(this.focusedChild,1);
this.focusChild(_507);
},focusPrev:function(){
var _508=this._getNextFocusableChild(this.focusedChild,-1);
this.focusChild(_508,true);
},focusChild:function(_509,last){
if(this.focusedChild&&_509!==this.focusedChild){
this._onChildBlur(this.focusedChild);
}
_509.set("tabIndex",this.tabIndex);
_509.focus(last?"end":"start");
this._set("focusedChild",_509);
},_startupChild:function(_50a){
_50a.set("tabIndex","-1");
this.connect(_50a,"_onFocus",function(){
_50a.set("tabIndex",this.tabIndex);
});
this.connect(_50a,"_onBlur",function(){
_50a.set("tabIndex","-1");
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
var func=this._keyNavCodes[evt.charOrCode];
if(func){
func();
dojo.stopEvent(evt);
}
},_onChildBlur:function(_50b){
},_getFirstFocusableChild:function(){
return this._getNextFocusableChild(null,1);
},_getLastFocusableChild:function(){
return this._getNextFocusableChild(null,-1);
},_getNextFocusableChild:function(_50c,dir){
if(_50c){
_50c=this._getSiblingOfChild(_50c,dir);
}
var _50d=this.getChildren();
for(var i=0;i<_50d.length;i++){
if(!_50c){
_50c=_50d[(dir>0)?0:(_50d.length-1)];
}
if(_50c.isFocusable()){
return _50c;
}
_50c=this._getSiblingOfChild(_50c,dir);
}
return null;
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
var _50e=this.getLabel(this.command),_50f=this.editor,_510=this.iconClassPrefix+" "+this.iconClassPrefix+this.command.charAt(0).toUpperCase()+this.command.substr(1);
if(!this.button){
var _511=dojo.mixin({label:_50e,dir:_50f.dir,lang:_50f.lang,showLabel:false,iconClass:_510,dropDown:this.dropDown,tabIndex:"-1"},this.params||{});
this.button=new this.buttonClass(_511);
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
var e=this.editor,c=this.command,_512,_513;
if(!e||!e.isLoaded||!c.length){
return;
}
var _514=this.get("disabled");
if(this.button){
try{
_513=!_514&&e.queryCommandEnabled(c);
if(this.enabled!==_513){
this.enabled=_513;
this.button.set("disabled",!_513);
}
if(typeof this.button.checked=="boolean"){
_512=e.queryCommandState(c);
if(this.checked!==_512){
this.checked=_512;
this.button.set("checked",e.queryCommandState(c));
}
}
}
catch(e){
}
}
},setEditor:function(_515){
this.editor=_515;
this._initButton();
if(this.button&&this.useDefaultCommand){
if(this.editor.queryCommandAvailable(this.command)){
this.connect(this.button,"onClick",dojo.hitch(this.editor,"execCommand",this.command,this.commandArg));
}else{
this.button.domNode.style.display="none";
}
}
this.connect(this.editor,"onNormalizedDisplayChanged","updateState");
},setToolbar:function(_516){
if(this.button){
_516.addChild(this.button);
}
},set:function(name,_517){
if(typeof name==="object"){
for(var x in name){
this.set(x,name[x]);
}
return this;
}
var _518=this._getAttrNames(name);
if(this[_518.s]){
var _519=this[_518.s].apply(this,Array.prototype.slice.call(arguments,1));
}else{
this._set(name,_517);
}
return _519||this;
},get:function(name){
var _51a=this._getAttrNames(name);
return this[_51a.g]?this[_51a.g]():this[name];
},_setDisabledAttr:function(_51b){
this.disabled=_51b;
this.updateState();
},_getAttrNames:function(name){
var apn=this._attrPairNames;
if(apn[name]){
return apn[name];
}
var uc=name.charAt(0).toUpperCase()+name.substr(1);
return (apn[name]={s:"_set"+uc+"Attr",g:"_get"+uc+"Attr"});
},_set:function(name,_51c){
var _51d=this[name];
this[name]=_51c;
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
},setEditor:function(_51e){
if(this.editor===_51e){
return;
}
this.editor=_51e;
if(this.blockNodeForEnter=="BR"){
this.editor.customUndo=true;
_51e.onLoadDeferred.addCallback(dojo.hitch(this,function(d){
this.connect(_51e.document,"onkeypress",function(e){
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
_51e.addKeyHandler(13,0,0,h);
_51e.addKeyHandler(13,0,1,h);
this.connect(this.editor,"onKeyPressed","onKeyPressed");
}
}
},onKeyPressed:function(e){
if(this._checkListLater){
if(dojo.withGlobal(this.editor.window,"isCollapsed",dijit)){
var _51f=dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,["LI"]);
if(!_51f){
dijit._editor.RichText.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);
var _520=dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,[this.blockNodeForEnter]);
if(_520){
_520.innerHTML=this.bogusHtmlContent;
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
if(_51f.parentNode.parentNode.nodeName=="LI"){
_51f=_51f.parentNode.parentNode;
}
}
var fc=_51f.firstChild;
if(fc&&fc.nodeType==1&&(fc.nodeName=="UL"||fc.nodeName=="OL")){
_51f.insertBefore(fc.ownerDocument.createTextNode(" "),fc);
var _521=dijit.range.create(this.editor.window);
_521.setStart(_51f.firstChild,0);
var _522=dijit.range.getSelection(this.editor.window,true);
_522.removeAllRanges();
_522.addRange(_521);
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
var _523,_524,_525,_526,_527,_528,doc=this.editor.document,br,rs,txt;
if(e.shiftKey){
var _529=dojo.withGlobal(this.editor.window,"getParentElement",dijit._editor.selection);
var _52a=dijit.range.getAncestor(_529,this.blockNodes);
if(_52a){
if(_52a.tagName=="LI"){
return true;
}
_523=dijit.range.getSelection(this.editor.window);
_524=_523.getRangeAt(0);
if(!_524.collapsed){
_524.deleteContents();
_523=dijit.range.getSelection(this.editor.window);
_524=_523.getRangeAt(0);
}
if(dijit.range.atBeginningOfContainer(_52a,_524.startContainer,_524.startOffset)){
br=doc.createElement("br");
_525=dijit.range.create(this.editor.window);
_52a.insertBefore(br,_52a.firstChild);
_525.setStartBefore(br.nextSibling);
_523.removeAllRanges();
_523.addRange(_525);
}else{
if(dijit.range.atEndOfContainer(_52a,_524.startContainer,_524.startOffset)){
_525=dijit.range.create(this.editor.window);
br=doc.createElement("br");
_52a.appendChild(br);
_52a.appendChild(doc.createTextNode(" "));
_525.setStart(_52a.lastChild,0);
_523.removeAllRanges();
_523.addRange(_525);
}else{
rs=_524.startContainer;
if(rs&&rs.nodeType==3){
txt=rs.nodeValue;
dojo.withGlobal(this.editor.window,function(){
_526=doc.createTextNode(txt.substring(0,_524.startOffset));
_527=doc.createTextNode(txt.substring(_524.startOffset));
_528=doc.createElement("br");
if(_527.nodeValue==""&&dojo.isWebKit){
_527=doc.createTextNode(" ");
}
dojo.place(_526,rs,"after");
dojo.place(_528,_526,"after");
dojo.place(_527,_528,"after");
dojo.destroy(rs);
_525=dijit.range.create(dojo.gobal);
_525.setStart(_527,0);
_523.removeAllRanges();
_523.addRange(_525);
});
return false;
}
return true;
}
}
}else{
_523=dijit.range.getSelection(this.editor.window);
if(_523.rangeCount){
_524=_523.getRangeAt(0);
if(_524&&_524.startContainer){
if(!_524.collapsed){
_524.deleteContents();
_523=dijit.range.getSelection(this.editor.window);
_524=_523.getRangeAt(0);
}
rs=_524.startContainer;
if(rs&&rs.nodeType==3){
dojo.withGlobal(this.editor.window,dojo.hitch(this,function(){
var _52b=false;
var _52c=_524.startOffset;
if(rs.length<_52c){
ret=this._adjustNodeAndOffset(rs,_52c);
rs=ret.node;
_52c=ret.offset;
}
txt=rs.nodeValue;
_526=doc.createTextNode(txt.substring(0,_52c));
_527=doc.createTextNode(txt.substring(_52c));
_528=doc.createElement("br");
if(!_527.length){
_527=doc.createTextNode(" ");
_52b=true;
}
if(_526.length){
dojo.place(_526,rs,"after");
}else{
_526=rs;
}
dojo.place(_528,_526,"after");
dojo.place(_527,_528,"after");
dojo.destroy(rs);
_525=dijit.range.create(dojo.gobal);
_525.setStart(_527,0);
_525.setEnd(_527,_527.length);
_523.removeAllRanges();
_523.addRange(_525);
if(_52b&&!dojo.isWebKit){
dijit._editor.selection.remove();
}else{
dijit._editor.selection.collapse(true);
}
}));
}else{
dojo.withGlobal(this.editor.window,dojo.hitch(this,function(){
var _52d=doc.createElement("br");
rs.appendChild(_52d);
var _52e=doc.createTextNode(" ");
rs.appendChild(_52e);
_525=dijit.range.create(dojo.global);
_525.setStart(_52e,0);
_525.setEnd(_52e,_52e.length);
_523.removeAllRanges();
_523.addRange(_525);
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
var _52f=true;
_523=dijit.range.getSelection(this.editor.window);
_524=_523.getRangeAt(0);
if(!_524.collapsed){
_524.deleteContents();
_523=dijit.range.getSelection(this.editor.window);
_524=_523.getRangeAt(0);
}
var _530=dijit.range.getBlockAncestor(_524.endContainer,null,this.editor.editNode);
var _531=_530.blockNode;
if((this._checkListLater=(_531&&(_531.nodeName=="LI"||_531.parentNode.nodeName=="LI")))){
if(dojo.isMoz){
this._pressedEnterInBlock=_531;
}
if(/^(\s|&nbsp;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|\xA0)<\/span>)?(<br>)?$/.test(_531.innerHTML)){
_531.innerHTML="";
if(dojo.isWebKit){
_525=dijit.range.create(this.editor.window);
_525.setStart(_531,0);
_523.removeAllRanges();
_523.addRange(_525);
}
this._checkListLater=false;
}
return true;
}
if(!_530.blockNode||_530.blockNode===this.editor.editNode){
try{
dijit._editor.RichText.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);
}
catch(e2){
}
_530={blockNode:dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,[this.blockNodeForEnter]),blockContainer:this.editor.editNode};
if(_530.blockNode){
if(_530.blockNode!=this.editor.editNode&&(!(_530.blockNode.textContent||_530.blockNode.innerHTML).replace(/^\s+|\s+$/g,"").length)){
this.removeTrailingBr(_530.blockNode);
return false;
}
}else{
_530.blockNode=this.editor.editNode;
}
_523=dijit.range.getSelection(this.editor.window);
_524=_523.getRangeAt(0);
}
var _532=doc.createElement(this.blockNodeForEnter);
_532.innerHTML=this.bogusHtmlContent;
this.removeTrailingBr(_530.blockNode);
var _533=_524.endOffset;
var node=_524.endContainer;
if(node.length<_533){
var ret=this._adjustNodeAndOffset(node,_533);
node=ret.node;
_533=ret.offset;
}
if(dijit.range.atEndOfContainer(_530.blockNode,node,_533)){
if(_530.blockNode===_530.blockContainer){
_530.blockNode.appendChild(_532);
}else{
dojo.place(_532,_530.blockNode,"after");
}
_52f=false;
_525=dijit.range.create(this.editor.window);
_525.setStart(_532,0);
_523.removeAllRanges();
_523.addRange(_525);
if(this.editor.height){
dojo.window.scrollIntoView(_532);
}
}else{
if(dijit.range.atBeginningOfContainer(_530.blockNode,_524.startContainer,_524.startOffset)){
dojo.place(_532,_530.blockNode,_530.blockNode===_530.blockContainer?"first":"before");
if(_532.nextSibling&&this.editor.height){
_525=dijit.range.create(this.editor.window);
_525.setStart(_532.nextSibling,0);
_523.removeAllRanges();
_523.addRange(_525);
dojo.window.scrollIntoView(_532.nextSibling);
}
_52f=false;
}else{
if(_530.blockNode===_530.blockContainer){
_530.blockNode.appendChild(_532);
}else{
dojo.place(_532,_530.blockNode,"after");
}
_52f=false;
if(_530.blockNode.style){
if(_532.style){
if(_530.blockNode.style.cssText){
_532.style.cssText=_530.blockNode.style.cssText;
}
}
}
rs=_524.startContainer;
var _534;
if(rs&&rs.nodeType==3){
var _535,_536;
_533=_524.endOffset;
if(rs.length<_533){
ret=this._adjustNodeAndOffset(rs,_533);
rs=ret.node;
_533=ret.offset;
}
txt=rs.nodeValue;
_526=doc.createTextNode(txt.substring(0,_533));
_527=doc.createTextNode(txt.substring(_533,txt.length));
dojo.place(_526,rs,"before");
dojo.place(_527,rs,"after");
dojo.destroy(rs);
var _537=_526.parentNode;
while(_537!==_530.blockNode){
var tg=_537.tagName;
var _538=doc.createElement(tg);
if(_537.style){
if(_538.style){
if(_537.style.cssText){
_538.style.cssText=_537.style.cssText;
}
}
}
if(_537.tagName==="FONT"){
if(_537.color){
_538.color=_537.color;
}
if(_537.face){
_538.face=_537.face;
}
if(_537.size){
_538.size=_537.size;
}
}
_535=_527;
while(_535){
_536=_535.nextSibling;
_538.appendChild(_535);
_535=_536;
}
dojo.place(_538,_537,"after");
_526=_537;
_527=_538;
_537=_537.parentNode;
}
_535=_527;
if(_535.nodeType==1||(_535.nodeType==3&&_535.nodeValue)){
_532.innerHTML="";
}
_534=_535;
while(_535){
_536=_535.nextSibling;
_532.appendChild(_535);
_535=_536;
}
}
_525=dijit.range.create(this.editor.window);
var _539;
var _53a=_534;
if(this.blockNodeForEnter!=="BR"){
while(_53a){
_539=_53a;
_536=_53a.firstChild;
_53a=_536;
}
if(_539&&_539.parentNode){
_532=_539.parentNode;
_525.setStart(_532,0);
_523.removeAllRanges();
_523.addRange(_525);
if(this.editor.height){
dijit.scrollIntoView(_532);
}
if(dojo.isMoz){
this._pressedEnterInBlock=_530.blockNode;
}
}else{
_52f=true;
}
}else{
_525.setStart(_532,0);
_523.removeAllRanges();
_523.addRange(_525);
if(this.editor.height){
dijit.scrollIntoView(_532);
}
if(dojo.isMoz){
this._pressedEnterInBlock=_530.blockNode;
}
}
}
}
return _52f;
},_adjustNodeAndOffset:function(node,_53b){
while(node.length<_53b&&node.nextSibling&&node.nextSibling.nodeType==3){
_53b=_53b-node.length;
node=node.nextSibling;
}
var ret={"node":node,"offset":_53b};
return ret;
},removeTrailingBr:function(_53c){
var para=/P|DIV|LI/i.test(_53c.tagName)?_53c:dijit._editor.selection.getParentOfType(_53c,["P","DIV","LI"]);
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
if(!dojo._hasResource["dijit._Contained"]){
dojo._hasResource["dijit._Contained"]=true;
dojo.provide("dijit._Contained");
dojo.declare("dijit._Contained",null,{getParent:function(){
var _53d=dijit.getEnclosingWidget(this.domNode.parentNode);
return _53d&&_53d.isContainer?_53d:null;
},_getSibling:function(_53e){
var node=this.domNode;
do{
node=node[_53e+"Sibling"];
}while(node&&node.nodeType!=1);
return node&&dijit.byNode(node);
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
var _53f=this.getParent&&this.getParent();
if(!(_53f&&_53f.isLayoutContainer)){
this.resize();
this.connect(dojo.isIE?this.domNode:dojo.global,"onresize",function(){
this.resize();
});
}
},resize:function(_540,_541){
var node=this.domNode;
if(_540){
dojo.marginBox(node,_540);
if(_540.t){
node.style.top=_540.t+"px";
}
if(_540.l){
node.style.left=_540.l+"px";
}
}
var mb=_541||{};
dojo.mixin(mb,_540||{});
if(!("h" in mb)||!("w" in mb)){
mb=dojo.mixin(dojo.marginBox(node),mb);
}
var cs=dojo.getComputedStyle(node);
var me=dojo._getMarginExtents(node,cs);
var be=dojo._getBorderExtents(node,cs);
var bb=(this._borderBox={w:mb.w-(me.w+be.w),h:mb.h-(me.h+be.h)});
var pe=dojo._getPadExtents(node,cs);
this._contentBox={l:dojo._toPixelValue(node,cs.paddingLeft),t:dojo._toPixelValue(node,cs.paddingTop),w:bb.w-pe.w,h:bb.h-pe.h};
this.layout();
},layout:function(){
},_setupChild:function(_542){
var cls=this.baseClass+"-child "+(_542.baseClass?this.baseClass+"-"+_542.baseClass:"");
dojo.addClass(_542.domNode,cls);
},addChild:function(_543,_544){
this.inherited(arguments);
if(this._started){
this._setupChild(_543);
}
},removeChild:function(_545){
var cls=this.baseClass+"-child"+(_545.baseClass?" "+this.baseClass+"-"+_545.baseClass:"");
dojo.removeClass(_545.domNode,cls);
this.inherited(arguments);
}});
dijit.layout.marginBox2contentBox=function(node,mb){
var cs=dojo.getComputedStyle(node);
var me=dojo._getMarginExtents(node,cs);
var pb=dojo._getPadBorderExtents(node,cs);
return {l:dojo._toPixelValue(node,cs.paddingLeft),t:dojo._toPixelValue(node,cs.paddingTop),w:mb.w-(me.w+pb.w),h:mb.h-(me.h+pb.h)};
};
(function(){
var _546=function(word){
return word.substring(0,1).toUpperCase()+word.substring(1);
};
var size=function(_547,dim){
var _548=_547.resize?_547.resize(dim):dojo.marginBox(_547.domNode,dim);
if(_548){
dojo.mixin(_547,_548);
}else{
dojo.mixin(_547,dojo.marginBox(_547.domNode));
dojo.mixin(_547,dim);
}
};
dijit.layout.layoutChildren=function(_549,dim,_54a,_54b,_54c){
dim=dojo.mixin({},dim);
dojo.addClass(_549,"dijitLayoutContainer");
_54a=dojo.filter(_54a,function(item){
return item.region!="center"&&item.layoutAlign!="client";
}).concat(dojo.filter(_54a,function(item){
return item.region=="center"||item.layoutAlign=="client";
}));
dojo.forEach(_54a,function(_54d){
var elm=_54d.domNode,pos=(_54d.region||_54d.layoutAlign);
var _54e=elm.style;
_54e.left=dim.l+"px";
_54e.top=dim.t+"px";
_54e.position="absolute";
dojo.addClass(elm,"dijitAlign"+_546(pos));
var _54f={};
if(_54b&&_54b==_54d.id){
_54f[_54d.region=="top"||_54d.region=="bottom"?"h":"w"]=_54c;
}
if(pos=="top"||pos=="bottom"){
_54f.w=dim.w;
size(_54d,_54f);
dim.h-=_54d.h;
if(pos=="top"){
dim.t+=_54d.h;
}else{
_54e.top=dim.t+dim.h+"px";
}
}else{
if(pos=="left"||pos=="right"){
_54f.h=dim.h;
size(_54d,_54f);
dim.w-=_54d.w;
if(pos=="left"){
dim.l+=_54d.w;
}else{
_54e.left=dim.l+dim.w+"px";
}
}else{
if(pos=="client"||pos=="center"){
size(_54d,dim);
}
}
}
});
};
})();
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
},addPlugin:function(_550,_551){
var args=dojo.isString(_550)?{name:_550}:_550;
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
console.warn("Cannot find plugin",_550);
return;
}
_550=o.plugin;
}
if(arguments.length>1){
this._plugins[_551]=_550;
}else{
this._plugins.push(_550);
}
_550.setEditor(this);
if(dojo.isFunction(_550.setToolbar)){
_550.setToolbar(this.toolbar);
}
},startup:function(){
},resize:function(size){
if(size){
dijit.layout._LayoutWidget.prototype.resize.apply(this,arguments);
}
},layout:function(){
var _552=(this._contentBox.h-(this.getHeaderHeight()+this.getFooterHeight()+dojo._getPadBorderExtents(this.iframe.parentNode).h+dojo._getMarginExtents(this.iframe.parentNode).h));
this.editingArea.style.height=_552+"px";
if(this.iframe){
this.iframe.style.height="100%";
}
this._layoutMode=true;
},_onIEMouseDown:function(e){
var _553;
var b=this.document.body;
var _554=b.clientWidth;
var _555=b.clientHeight;
var _556=b.clientLeft;
var _557=b.offsetWidth;
var _558=b.offsetHeight;
var _559=b.offsetLeft;
bodyDir=b.dir?b.dir.toLowerCase():"";
if(bodyDir!="rtl"){
if(_554<_557&&e.x>_554&&e.x<_557){
_553=true;
}
}else{
if(e.x<_556&&e.x>_559){
_553=true;
}
}
if(!_553){
if(_555<_558&&e.y>_555&&e.y<_558){
_553=true;
}
}
if(!_553){
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
var _55a=/copy|cut|paste/.test(cmd);
try{
r=this.inherited(arguments);
if(dojo.isWebKit&&_55a&&!r){
throw {code:1011};
}
}
catch(e){
if(e.code==1011&&_55a){
var sub=dojo.string.substitute,_55b={cut:"X",copy:"C",paste:"V"};
alert(sub(this.commands.systemShortcut,[this.commands[cmd],sub(this.commands[dojo.isMac?"appleKey":"ctrlKey"],[_55b[cmd]])]));
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
var _55c=b.mark;
var mark=b.mark;
var col=b.isCollapsed;
var r,_55d,_55e,sel;
if(mark){
if(dojo.isIE<9){
if(dojo.isArray(mark)){
_55c=[];
dojo.forEach(mark,function(n){
_55c.push(dijit.range.getNode(n,this.editNode));
},this);
dojo.withGlobal(this.window,"moveToBookmark",dijit,[{mark:_55c,isCollapsed:col}]);
}else{
if(mark.startContainer&&mark.endContainer){
sel=dijit.range.getSelection(this.window);
if(sel&&sel.removeAllRanges){
sel.removeAllRanges();
r=dijit.range.create(this.window);
_55d=dijit.range.getNode(mark.startContainer,this.editNode);
_55e=dijit.range.getNode(mark.endContainer,this.editNode);
if(_55d&&_55e){
r.setStart(_55d,mark.startOffset);
r.setEnd(_55e,mark.endOffset);
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
_55d=dijit.range.getNode(mark.startContainer,this.editNode);
_55e=dijit.range.getNode(mark.endContainer,this.editNode);
if(_55d&&_55e){
r.setStart(_55d,mark.startOffset);
r.setEnd(_55e,mark.endOffset);
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
},endEditing:function(_55f){
if(this._editTimer){
clearTimeout(this._editTimer);
}
if(this._inEditing){
this._endEditing(_55f);
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
var _560;
if(sel.rangeCount){
_560=sel.getRangeAt(0);
}
if(_560){
b.mark=_560.cloneRange();
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
},_endEditing:function(_561){
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
},_setDisabledAttr:function(_562){
var _563=dojo.hitch(this,function(){
if((!this.disabled&&_562)||(!this._buttonEnabledPlugins&&_562)){
dojo.forEach(this._plugins,function(p){
p.set("disabled",true);
});
}else{
if(this.disabled&&!_562){
dojo.forEach(this._plugins,function(p){
p.set("disabled",false);
});
}
}
});
this.setValueDeferred.addCallback(_563);
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
var _564=dijit._editor._Plugin;
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
p=new _564({command:name});
break;
case "bold":
case "italic":
case "underline":
case "strikethrough":
case "subscript":
case "superscript":
p=new _564({buttonClass:dijit.form.ToggleButton,command:name});
break;
case "|":
p=new _564({button:new dijit.ToolbarSeparator(),setEditor:function(_565){
this.editor=_565;
}});
}
o.plugin=p;
});
}
if(!dojo._hasResource["dojox.grid.compat._data.dijitEditors"]){
dojo._hasResource["dojox.grid.compat._data.dijitEditors"]=true;
dojo.provide("dojox.grid.compat._data.dijitEditors");
dojo.declare("dojox.grid.editors.Dijit",dojox.grid.editors.base,{editorClass:"dijit.form.TextBox",constructor:function(_566){
this.editor=null;
this.editorClass=dojo.getObject(this.cell.editorClass||this.editorClass);
},format:function(_567,_568){
this.needFormatNode(_567,_568);
return "<div></div>";
},getValue:function(_569){
return this.editor.getValue();
},setValue:function(_56a,_56b){
if(this.editor&&this.editor.setValue){
if(this.editor.onLoadDeferred){
var self=this;
this.editor.onLoadDeferred.addCallback(function(){
self.editor.setValue(_56b==null?"":_56b);
});
}else{
this.editor.setValue(_56b);
}
}else{
this.inherited(arguments);
}
},getEditorProps:function(_56c){
return dojo.mixin({},this.cell.editorProps||{},{constraints:dojo.mixin({},this.cell.constraint)||{},value:_56c});
},createEditor:function(_56d,_56e,_56f){
return new this.editorClass(this.getEditorProps(_56e),_56d);
},attachEditor:function(_570,_571,_572){
_570.appendChild(this.editor.domNode);
this.setValue(_572,_571);
},formatNode:function(_573,_574,_575){
if(!this.editorClass){
return _574;
}
if(!this.editor){
this.editor=this.createEditor.apply(this,arguments);
}else{
this.attachEditor.apply(this,arguments);
}
this.sizeEditor.apply(this,arguments);
this.cell.grid.rowHeightChanged(_575);
this.focus();
},sizeEditor:function(_576,_577,_578){
var p=this.cell.getNode(_578),box=dojo.contentBox(p);
dojo.marginBox(this.editor.domNode,{w:box.w});
},focus:function(_579,_57a){
if(this.editor){
setTimeout(dojo.hitch(this.editor,function(){
dojox.grid.fire(this,"focus");
}),0);
}
},_finish:function(_57b){
this.inherited(arguments);
dojox.grid.removeNode(this.editor.domNode);
}});
dojo.declare("dojox.grid.editors.ComboBox",dojox.grid.editors.Dijit,{editorClass:"dijit.form.ComboBox",getEditorProps:function(_57c){
var _57d=[];
dojo.forEach(this.cell.options,function(o){
_57d.push({name:o,value:o});
});
var _57e=new dojo.data.ItemFileReadStore({data:{identifier:"name",items:_57d}});
return dojo.mixin({},this.cell.editorProps||{},{value:_57c,store:_57e});
},getValue:function(){
var e=this.editor;
e.setDisplayedValue(e.getDisplayedValue());
return e.getValue();
}});
dojo.declare("dojox.grid.editors.DateTextBox",dojox.grid.editors.Dijit,{editorClass:"dijit.form.DateTextBox",setValue:function(_57f,_580){
if(this.editor){
this.editor.setValue(new Date(_580));
}else{
this.inherited(arguments);
}
},getEditorProps:function(_581){
return dojo.mixin(this.inherited(arguments),{value:new Date(_581)});
}});
dojo.declare("dojox.grid.editors.CheckBox",dojox.grid.editors.Dijit,{editorClass:"dijit.form.CheckBox",getValue:function(){
return this.editor.checked;
},setValue:function(_582,_583){
if(this.editor&&this.editor.setAttribute){
this.editor.setAttribute("checked",_583);
}else{
this.inherited(arguments);
}
},sizeEditor:function(_584,_585,_586){
return;
}});
dojo.declare("dojox.grid.editors.Editor",dojox.grid.editors.Dijit,{editorClass:"dijit.Editor",getEditorProps:function(_587){
return dojo.mixin({},this.cell.editorProps||{},{height:this.cell.editorHeight||"100px"});
},createEditor:function(_588,_589,_58a){
var _58b=new this.editorClass(this.getEditorProps(_589),_588);
dojo.connect(_58b,"onLoad",dojo.hitch(this,"populateEditor"));
return _58b;
},formatNode:function(_58c,_58d,_58e){
this.content=_58d;
this.inherited(arguments);
if(dojo.isMoz){
var e=this.editor;
e.open();
if(this.cell.editorToolbar){
dojo.place(e.toolbar.domNode,e.editingArea,"before");
}
}
},populateEditor:function(){
this.editor.setValue(this.content);
this.editor.placeCursorAtEnd();
}});
}
if(!dojo._hasResource["dojox.grid.compat.Grid"]){
dojo._hasResource["dojox.grid.compat.Grid"]=true;
dojo.provide("dojox.grid.compat.Grid");
dojo.declare("dojox.Grid",dojox.VirtualGrid,{model:"dojox.grid.data.Table",postCreate:function(){
if(this.model){
var m=this.model;
if(dojo.isString(m)){
m=dojo.getObject(m);
}
this.model=(dojo.isFunction(m))?new m():m;
this._setModel(this.model);
}
this.inherited(arguments);
},destroy:function(){
this.setModel(null);
this.inherited(arguments);
},_structureChanged:function(){
this.indexCellFields();
this.inherited(arguments);
},_setModel:function(_58f){
this.model=_58f;
if(this.model){
this.model.observer(this);
this.model.measure();
this.indexCellFields();
}
},setModel:function(_590){
if(this.model){
this.model.notObserver(this);
}
this._setModel(_590);
},get:function(_591){
return this.grid.model.getDatum(_591,this.fieldIndex);
},modelAllChange:function(){
this.rowCount=(this.model?this.model.getRowCount():0);
this.updateRowCount(this.rowCount);
},modelBeginUpdate:function(){
this.beginUpdate();
},modelEndUpdate:function(){
this.endUpdate();
},modelRowChange:function(_592,_593){
this.updateRow(_593);
},modelDatumChange:function(_594,_595,_596){
this.updateRow(_595);
},modelFieldsChange:function(){
this.indexCellFields();
this.render();
},modelInsertion:function(_597){
this.updateRowCount(this.model.getRowCount());
},modelRemoval:function(_598){
this.updateRowCount(this.model.getRowCount());
},getCellName:function(_599){
var v=this.model.fields.values,i=_599.fieldIndex;
return i>=0&&i<v.length&&v[i].name||this.inherited(arguments);
},indexCellFields:function(){
var _59a=this.layout.cells;
for(var i=0,c;_59a&&(c=_59a[i]);i++){
if(dojo.isString(c.field)){
c.fieldIndex=this.model.fields.indexOf(c.field);
}
}
},refresh:function(){
this.edit.cancel();
this.model.measure();
},canSort:function(_59b){
var f=this.getSortField(_59b);
return f&&this.model.canSort(f);
},getSortField:function(_59c){
var c=this.getCell(this.getSortIndex(_59c));
return (c.fieldIndex+1)*(this.sortInfo>0?1:-1);
},sort:function(){
this.edit.apply();
this.model.sort(this.getSortField());
},addRow:function(_59d,_59e){
this.edit.apply();
var i=_59e||-1;
if(i<0){
i=this.selection.getFirstSelected()||0;
}
if(i<0){
i=0;
}
this.model.insert(_59d,i);
this.model.beginModifyRow(i);
for(var j=0,c;((c=this.getCell(j))&&!c.editor);j++){
}
if(c&&c.editor){
this.edit.setEditCell(c,i);
this.focus.setFocusCell(c,i);
}else{
this.focus.setFocusCell(this.getCell(0),i);
}
},removeSelectedRows:function(){
this.edit.apply();
var s=this.selection.getSelected();
if(s.length){
this.model.remove(s);
this.selection.clear();
}
},canEdit:function(_59f,_5a0){
return (this.model.canModify?this.model.canModify(_5a0):true);
},doStartEdit:function(_5a1,_5a2){
this.model.beginModifyRow(_5a2);
this.onStartEdit(_5a1,_5a2);
},doApplyCellEdit:function(_5a3,_5a4,_5a5){
this.model.setDatum(_5a3,_5a4,_5a5);
this.onApplyCellEdit(_5a3,_5a4,_5a5);
},doCancelEdit:function(_5a6){
this.model.cancelModifyRow(_5a6);
this.onCancelEdit.apply(this,arguments);
},doApplyEdit:function(_5a7){
this.model.endModifyRow(_5a7);
this.onApplyEdit(_5a7);
},styleRowState:function(_5a8){
if(this.model.getState){
var _5a9=this.model.getState(_5a8.index),c="";
for(var i=0,ss=["inflight","error","inserting"],s;s=ss[i];i++){
if(_5a9[s]){
c=" dojoxGrid-row-"+s;
break;
}
}
_5a8.customClasses+=c;
}
},onStyleRow:function(_5aa){
this.styleRowState(_5aa);
this.inherited(arguments);
}});
dojox.Grid.markupFactory=function(_5ab,node,ctor){
var d=dojo;
var _5ac=function(n){
var w=d.attr(n,"width")||"auto";
if((w!="auto")&&(w.substr(-2)!="em")){
w=parseInt(w)+"px";
}
return w;
};
if(!_5ab.model&&d.hasAttr(node,"store")){
var _5ad=node.cloneNode(false);
d.attr(_5ad,{"jsId":null,"dojoType":d.attr(node,"dataModelClass")||"dojox.grid.data.DojoData"});
_5ab.model=d.parser.instantiate([_5ad])[0];
}
if(!_5ab.structure&&node.nodeName.toLowerCase()=="table"){
_5ab.structure=d.query("> colgroup",node).map(function(cg){
var sv=d.attr(cg,"span");
var v={noscroll:(d.attr(cg,"noscroll")=="true")?true:false,__span:(!!sv?parseInt(sv):1),cells:[]};
if(d.hasAttr(cg,"width")){
v.width=_5ac(cg);
}
return v;
});
if(!_5ab.structure.length){
_5ab.structure.push({__span:Infinity,cells:[]});
}
d.query("thead > tr",node).forEach(function(tr,_5ae){
var _5af=0;
var _5b0=0;
var _5b1;
var _5b2=null;
d.query("> th",tr).map(function(th){
if(!_5b2){
_5b1=0;
_5b2=_5ab.structure[0];
}else{
if(_5af>=(_5b1+_5b2.__span)){
_5b0++;
_5b1+=_5b2.__span;
var _5b3=_5b2;
_5b2=_5ab.structure[_5b0];
}
}
var cell={name:d.trim(d.attr(th,"name")||th.innerHTML),field:d.trim(d.attr(th,"field")||""),colSpan:parseInt(d.attr(th,"colspan")||1)};
_5af+=cell.colSpan;
cell.field=cell.field||cell.name;
cell.width=_5ac(th);
if(!_5b2.cells[_5ae]){
_5b2.cells[_5ae]=[];
}
_5b2.cells[_5ae].push(cell);
});
});
}
return new dojox.Grid(_5ab,node);
};
dojox.grid.Grid=dojox.Grid;
}
if(!dojo._hasResource["dojo.data.ItemFileWriteStore"]){
dojo._hasResource["dojo.data.ItemFileWriteStore"]=true;
dojo.provide("dojo.data.ItemFileWriteStore");
dojo.declare("dojo.data.ItemFileWriteStore",dojo.data.ItemFileReadStore,{constructor:function(_5b4){
this._features["dojo.data.api.Write"]=true;
this._features["dojo.data.api.Notification"]=true;
this._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}};
if(!this._datatypeMap["Date"].serialize){
this._datatypeMap["Date"].serialize=function(obj){
return dojo.date.stamp.toISOString(obj,{zulu:true});
};
}
if(_5b4&&(_5b4.referenceIntegrity===false)){
this.referenceIntegrity=false;
}
this._saveInProgress=false;
},referenceIntegrity:true,_assert:function(_5b5){
if(!_5b5){
throw new Error("assertion failed in ItemFileWriteStore");
}
},_getIdentifierAttribute:function(){
var _5b6=this.getFeatures()["dojo.data.api.Identity"];
return _5b6;
},newItem:function(_5b7,_5b8){
this._assert(!this._saveInProgress);
if(!this._loadFinished){
this._forceLoad();
}
if(typeof _5b7!="object"&&typeof _5b7!="undefined"){
throw new Error("newItem() was passed something other than an object");
}
var _5b9=null;
var _5ba=this._getIdentifierAttribute();
if(_5ba===Number){
_5b9=this._arrayOfAllItems.length;
}else{
_5b9=_5b7[_5ba];
if(typeof _5b9==="undefined"){
throw new Error("newItem() was not passed an identity for the new item");
}
if(dojo.isArray(_5b9)){
throw new Error("newItem() was not passed an single-valued identity");
}
}
if(this._itemsByIdentity){
this._assert(typeof this._itemsByIdentity[_5b9]==="undefined");
}
this._assert(typeof this._pending._newItems[_5b9]==="undefined");
this._assert(typeof this._pending._deletedItems[_5b9]==="undefined");
var _5bb={};
_5bb[this._storeRefPropName]=this;
_5bb[this._itemNumPropName]=this._arrayOfAllItems.length;
if(this._itemsByIdentity){
this._itemsByIdentity[_5b9]=_5bb;
_5bb[_5ba]=[_5b9];
}
this._arrayOfAllItems.push(_5bb);
var _5bc=null;
if(_5b8&&_5b8.parent&&_5b8.attribute){
_5bc={item:_5b8.parent,attribute:_5b8.attribute,oldValue:undefined};
var _5bd=this.getValues(_5b8.parent,_5b8.attribute);
if(_5bd&&_5bd.length>0){
var _5be=_5bd.slice(0,_5bd.length);
if(_5bd.length===1){
_5bc.oldValue=_5bd[0];
}else{
_5bc.oldValue=_5bd.slice(0,_5bd.length);
}
_5be.push(_5bb);
this._setValueOrValues(_5b8.parent,_5b8.attribute,_5be,false);
_5bc.newValue=this.getValues(_5b8.parent,_5b8.attribute);
}else{
this._setValueOrValues(_5b8.parent,_5b8.attribute,_5bb,false);
_5bc.newValue=_5bb;
}
}else{
_5bb[this._rootItemPropName]=true;
this._arrayOfTopLevelItems.push(_5bb);
}
this._pending._newItems[_5b9]=_5bb;
for(var key in _5b7){
if(key===this._storeRefPropName||key===this._itemNumPropName){
throw new Error("encountered bug in ItemFileWriteStore.newItem");
}
var _5bf=_5b7[key];
if(!dojo.isArray(_5bf)){
_5bf=[_5bf];
}
_5bb[key]=_5bf;
if(this.referenceIntegrity){
for(var i=0;i<_5bf.length;i++){
var val=_5bf[i];
if(this.isItem(val)){
this._addReferenceToMap(val,_5bb,key);
}
}
}
}
this.onNew(_5bb,_5bc);
return _5bb;
},_removeArrayElement:function(_5c0,_5c1){
var _5c2=dojo.indexOf(_5c0,_5c1);
if(_5c2!=-1){
_5c0.splice(_5c2,1);
return true;
}
return false;
},deleteItem:function(item){
this._assert(!this._saveInProgress);
this._assertIsItem(item);
var _5c3=item[this._itemNumPropName];
var _5c4=this.getIdentity(item);
if(this.referenceIntegrity){
var _5c5=this.getAttributes(item);
if(item[this._reverseRefMap]){
item["backup_"+this._reverseRefMap]=dojo.clone(item[this._reverseRefMap]);
}
dojo.forEach(_5c5,function(_5c6){
dojo.forEach(this.getValues(item,_5c6),function(_5c7){
if(this.isItem(_5c7)){
if(!item["backupRefs_"+this._reverseRefMap]){
item["backupRefs_"+this._reverseRefMap]=[];
}
item["backupRefs_"+this._reverseRefMap].push({id:this.getIdentity(_5c7),attr:_5c6});
this._removeReferenceFromMap(_5c7,item,_5c6);
}
},this);
},this);
var _5c8=item[this._reverseRefMap];
if(_5c8){
for(var _5c9 in _5c8){
var _5ca=null;
if(this._itemsByIdentity){
_5ca=this._itemsByIdentity[_5c9];
}else{
_5ca=this._arrayOfAllItems[_5c9];
}
if(_5ca){
for(var _5cb in _5c8[_5c9]){
var _5cc=this.getValues(_5ca,_5cb)||[];
var _5cd=dojo.filter(_5cc,function(_5ce){
return !(this.isItem(_5ce)&&this.getIdentity(_5ce)==_5c4);
},this);
this._removeReferenceFromMap(item,_5ca,_5cb);
if(_5cd.length<_5cc.length){
this._setValueOrValues(_5ca,_5cb,_5cd,true);
}
}
}
}
}
}
this._arrayOfAllItems[_5c3]=null;
item[this._storeRefPropName]=null;
if(this._itemsByIdentity){
delete this._itemsByIdentity[_5c4];
}
this._pending._deletedItems[_5c4]=item;
if(item[this._rootItemPropName]){
this._removeArrayElement(this._arrayOfTopLevelItems,item);
}
this.onDelete(item);
return true;
},setValue:function(item,_5cf,_5d0){
return this._setValueOrValues(item,_5cf,_5d0,true);
},setValues:function(item,_5d1,_5d2){
return this._setValueOrValues(item,_5d1,_5d2,true);
},unsetAttribute:function(item,_5d3){
return this._setValueOrValues(item,_5d3,[],true);
},_setValueOrValues:function(item,_5d4,_5d5,_5d6){
this._assert(!this._saveInProgress);
this._assertIsItem(item);
this._assert(dojo.isString(_5d4));
this._assert(typeof _5d5!=="undefined");
var _5d7=this._getIdentifierAttribute();
if(_5d4==_5d7){
throw new Error("ItemFileWriteStore does not have support for changing the value of an item's identifier.");
}
var _5d8=this._getValueOrValues(item,_5d4);
var _5d9=this.getIdentity(item);
if(!this._pending._modifiedItems[_5d9]){
var _5da={};
for(var key in item){
if((key===this._storeRefPropName)||(key===this._itemNumPropName)||(key===this._rootItemPropName)){
_5da[key]=item[key];
}else{
if(key===this._reverseRefMap){
_5da[key]=dojo.clone(item[key]);
}else{
_5da[key]=item[key].slice(0,item[key].length);
}
}
}
this._pending._modifiedItems[_5d9]=_5da;
}
var _5db=false;
if(dojo.isArray(_5d5)&&_5d5.length===0){
_5db=delete item[_5d4];
_5d5=undefined;
if(this.referenceIntegrity&&_5d8){
var _5dc=_5d8;
if(!dojo.isArray(_5dc)){
_5dc=[_5dc];
}
for(var i=0;i<_5dc.length;i++){
var _5dd=_5dc[i];
if(this.isItem(_5dd)){
this._removeReferenceFromMap(_5dd,item,_5d4);
}
}
}
}else{
var _5de;
if(dojo.isArray(_5d5)){
var _5df=_5d5;
_5de=_5d5.slice(0,_5d5.length);
}else{
_5de=[_5d5];
}
if(this.referenceIntegrity){
if(_5d8){
var _5dc=_5d8;
if(!dojo.isArray(_5dc)){
_5dc=[_5dc];
}
var map={};
dojo.forEach(_5dc,function(_5e0){
if(this.isItem(_5e0)){
var id=this.getIdentity(_5e0);
map[id.toString()]=true;
}
},this);
dojo.forEach(_5de,function(_5e1){
if(this.isItem(_5e1)){
var id=this.getIdentity(_5e1);
if(map[id.toString()]){
delete map[id.toString()];
}else{
this._addReferenceToMap(_5e1,item,_5d4);
}
}
},this);
for(var rId in map){
var _5e2;
if(this._itemsByIdentity){
_5e2=this._itemsByIdentity[rId];
}else{
_5e2=this._arrayOfAllItems[rId];
}
this._removeReferenceFromMap(_5e2,item,_5d4);
}
}else{
for(var i=0;i<_5de.length;i++){
var _5dd=_5de[i];
if(this.isItem(_5dd)){
this._addReferenceToMap(_5dd,item,_5d4);
}
}
}
}
var _5e3=item;
var _5e4=_5d4.split(/\./);
while(_5e3&&_5e4.length>1){
_5e3=_5e3[_5e4[0]];
_5e4.shift();
if(_5e3){
_5e3=_5e3[0];
}
}
if(_5e3){
_5e3[_5e4[0]]=_5de;
}else{
item[_5d4]=_5de;
}
_5db=true;
}
if(_5d6){
this.onSet(item,_5d4,_5d8,_5d5);
}
return _5db;
},_addReferenceToMap:function(_5e5,_5e6,_5e7){
var _5e8=this.getIdentity(_5e6);
var _5e9=_5e5[this._reverseRefMap];
if(!_5e9){
_5e9=_5e5[this._reverseRefMap]={};
}
var _5ea=_5e9[_5e8];
if(!_5ea){
_5ea=_5e9[_5e8]={};
}
_5ea[_5e7]=true;
},_removeReferenceFromMap:function(_5eb,_5ec,_5ed){
var _5ee=this.getIdentity(_5ec);
var _5ef=_5eb[this._reverseRefMap];
var _5f0;
if(_5ef){
for(_5f0 in _5ef){
if(_5f0==_5ee){
delete _5ef[_5f0][_5ed];
if(this._isEmpty(_5ef[_5f0])){
delete _5ef[_5f0];
}
}
}
if(this._isEmpty(_5ef)){
delete _5eb[this._reverseRefMap];
}
}
},_dumpReferenceMap:function(){
var i;
for(i=0;i<this._arrayOfAllItems.length;i++){
var item=this._arrayOfAllItems[i];
if(item&&item[this._reverseRefMap]){
}
}
},_getValueOrValues:function(item,_5f1){
var _5f2=undefined;
if(this.hasAttribute(item,_5f1)){
var _5f3=this.getValues(item,_5f1);
if(_5f3.length==1){
_5f2=_5f3[0];
}else{
_5f2=_5f3;
}
}
return _5f2;
},_flatten:function(_5f4){
if(this.isItem(_5f4)){
var item=_5f4;
var _5f5=this.getIdentity(item);
var _5f6={_reference:_5f5};
return _5f6;
}else{
if(typeof _5f4==="object"){
for(var type in this._datatypeMap){
var _5f7=this._datatypeMap[type];
if(dojo.isObject(_5f7)&&!dojo.isFunction(_5f7)){
if(_5f4 instanceof _5f7.type){
if(!_5f7.serialize){
throw new Error("ItemFileWriteStore:  No serializer defined for type mapping: ["+type+"]");
}
return {_type:type,_value:_5f7.serialize(_5f4)};
}
}else{
if(_5f4 instanceof _5f7){
return {_type:type,_value:_5f4.toString()};
}
}
}
}
return _5f4;
}
},_getNewFileContentString:function(){
var _5f8={};
var _5f9=this._getIdentifierAttribute();
if(_5f9!==Number){
_5f8.identifier=_5f9;
}
if(this._labelAttr){
_5f8.label=this._labelAttr;
}
_5f8.items=[];
for(var i=0;i<this._arrayOfAllItems.length;++i){
var item=this._arrayOfAllItems[i];
if(item!==null){
var _5fa={};
for(var key in item){
if(key!==this._storeRefPropName&&key!==this._itemNumPropName&&key!==this._reverseRefMap&&key!==this._rootItemPropName){
var _5fb=key;
var _5fc=this.getValues(item,_5fb);
if(_5fc.length==1){
_5fa[_5fb]=this._flatten(_5fc[0]);
}else{
var _5fd=[];
for(var j=0;j<_5fc.length;++j){
_5fd.push(this._flatten(_5fc[j]));
_5fa[_5fb]=_5fd;
}
}
}
}
_5f8.items.push(_5fa);
}
}
var _5fe=true;
return dojo.toJson(_5f8,_5fe);
},_isEmpty:function(_5ff){
var _600=true;
if(dojo.isObject(_5ff)){
var i;
for(i in _5ff){
_600=false;
break;
}
}else{
if(dojo.isArray(_5ff)){
if(_5ff.length>0){
_600=false;
}
}
}
return _600;
},save:function(_601){
this._assert(!this._saveInProgress);
this._saveInProgress=true;
var self=this;
var _602=function(){
self._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}};
self._saveInProgress=false;
if(_601&&_601.onComplete){
var _603=_601.scope||dojo.global;
_601.onComplete.call(_603);
}
};
var _604=function(err){
self._saveInProgress=false;
if(_601&&_601.onError){
var _605=_601.scope||dojo.global;
_601.onError.call(_605,err);
}
};
if(this._saveEverything){
var _606=this._getNewFileContentString();
this._saveEverything(_602,_604,_606);
}
if(this._saveCustom){
this._saveCustom(_602,_604);
}
if(!this._saveEverything&&!this._saveCustom){
_602();
}
},revert:function(){
this._assert(!this._saveInProgress);
var _607;
for(_607 in this._pending._modifiedItems){
var _608=this._pending._modifiedItems[_607];
var _609=null;
if(this._itemsByIdentity){
_609=this._itemsByIdentity[_607];
}else{
_609=this._arrayOfAllItems[_607];
}
_608[this._storeRefPropName]=this;
for(key in _609){
delete _609[key];
}
dojo.mixin(_609,_608);
}
var _60a;
for(_607 in this._pending._deletedItems){
_60a=this._pending._deletedItems[_607];
_60a[this._storeRefPropName]=this;
var _60b=_60a[this._itemNumPropName];
if(_60a["backup_"+this._reverseRefMap]){
_60a[this._reverseRefMap]=_60a["backup_"+this._reverseRefMap];
delete _60a["backup_"+this._reverseRefMap];
}
this._arrayOfAllItems[_60b]=_60a;
if(this._itemsByIdentity){
this._itemsByIdentity[_607]=_60a;
}
if(_60a[this._rootItemPropName]){
this._arrayOfTopLevelItems.push(_60a);
}
}
for(_607 in this._pending._deletedItems){
_60a=this._pending._deletedItems[_607];
if(_60a["backupRefs_"+this._reverseRefMap]){
dojo.forEach(_60a["backupRefs_"+this._reverseRefMap],function(_60c){
var _60d;
if(this._itemsByIdentity){
_60d=this._itemsByIdentity[_60c.id];
}else{
_60d=this._arrayOfAllItems[_60c.id];
}
this._addReferenceToMap(_60d,_60a,_60c.attr);
},this);
delete _60a["backupRefs_"+this._reverseRefMap];
}
}
for(_607 in this._pending._newItems){
var _60e=this._pending._newItems[_607];
_60e[this._storeRefPropName]=null;
this._arrayOfAllItems[_60e[this._itemNumPropName]]=null;
if(_60e[this._rootItemPropName]){
this._removeArrayElement(this._arrayOfTopLevelItems,_60e);
}
if(this._itemsByIdentity){
delete this._itemsByIdentity[_607];
}
}
this._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}};
return true;
},isDirty:function(item){
if(item){
var _60f=this.getIdentity(item);
return new Boolean(this._pending._newItems[_60f]||this._pending._modifiedItems[_60f]||this._pending._deletedItems[_60f]).valueOf();
}else{
if(!this._isEmpty(this._pending._newItems)||!this._isEmpty(this._pending._modifiedItems)||!this._isEmpty(this._pending._deletedItems)){
return true;
}
return false;
}
},onSet:function(item,_610,_611,_612){
},onNew:function(_613,_614){
},onDelete:function(_615){
},close:function(_616){
if(this.clearOnClose){
if(!this.isDirty()){
this.inherited(arguments);
}else{
throw new Error("dojo.data.ItemFileWriteStore: There are unsaved changes present in the store.  Please save or revert the changes before invoking close.");
}
}
}});
}
if(!dojo._hasResource["wm.base.widget.dijit.Dijit"]){
dojo._hasResource["wm.base.widget.dijit.Dijit"]=true;
dojo.provide("wm.base.widget.dijit.Dijit");
dojo.addOnLoad(function(){
var _617=function(inId){
var n=dojo.byId(inId);
n&&(n.style.visibility="hidden");
};
_617("a11yTestNode");
});
dojo.declare("wm.Dijit",wm.Control,{dijitClass:null,nonDijitProps:{name:1,flex:1,box:1,left:1,top:1,width:1,height:1,owner:1,parent:1,publishClass:1,dijitClass:1,domNode:1,id:1},prepare:function(_618){
this.dijitProps={};
for(var i in _618){
if(!(i in this.nonDijitProps)){
this.dijitProps[i]=_618[i];
}
}
this.inherited(arguments);
},destroy:function(){
if(this.dijit){
this.dijit.destroy();
}
this.inherited(arguments);
},setDomNode:function(_619){
_619=this.initDijit(_619);
this.inherited(arguments);
},initDijit:function(_61a){
if(this.dijitClass){
if(typeof this.dijitClass=="string"){
dojo["require"](this.dijitClass);
}
var n=document.createElement("div");
_61a.appendChild(n);
var p=dojo.mixin({srcNodeRef:n},this.getProperties());
var _61b=typeof this.dijitClass=="string"?dojo.getObject(this.dijitClass):this.dijitClass;
try{
this.dijit=_61b?new _61b(p):null;
this.setEvents();
}
catch(e){
console.error(e);
}
}
return _61a;
},getProperties:function(){
return this.dijitProps;
},setEvents:function(){
for(var n in this.dijit){
if(!n.indexOf("on")){
var e="_"+n;
if(!this[e]){
e=n;
}
if(this[e]){
this.connect(this.dijit,n,this,e);
}
}
}
}});
wm.Object.extendSchema(wm.Dijit,{box:{ignore:1}});
dojo.declare("wm.DijitWrapper",wm.Dijit,{});
dojo.declare("wm.CustomDijit",wm.Dijit,{scrim:true,renderBoundsX:true,renderBoundsY:true,renderBounds:function(){
this.inherited(arguments);
if(this.dijit){
var b=this.getStyleBounds();
if(!this.renderBoundsX){
delete b.w;
}
if(!this.renderBoundsY){
delete b.h;
}
dojo.marginBox(this.dijit.domNode,b);
}
}});
dojo.declare("wm.DijitDesigner",wm.CustomDijit,{dijitPropList:"",dijitClass:"",setProp:function(_61c,_61d){
if(_61c.indexOf("wmdijit")==0){
this[_61c]=_61d;
this.dijitSet(_61c,_61d);
}else{
this.inherited(arguments);
}
},dijitSet:function(_61e,_61f){
if(_61e.indexOf("wmdijit")==0){
_61e=wm.decapitalize(_61e.substring(7));
}
if(this.dijit["set"+wm.capitalize(_61e)]){
this.dijit["set"+wm.capitalize(_61e)](_61f);
}else{
this.dijit.set(_61e,_61f);
}
},getProp:function(_620){
if(_620.indexOf("wmdijit")==0){
return this.dijitGet(_620);
}else{
return this.inherited(arguments);
}
},dijitGet:function(_621){
var _622=null;
try{
if(_621.indexOf("wmdijit")==0){
_621=wm.decapitalize(_621.substring(7));
}
if(this.dijit["get"+wm.capitalize(_621)]){
_622=this.dijit["get"+wm.capitalize(_621)]();
}else{
_622=this.dijit.get(_621);
}
if(_622 instanceof Date){
_622=this._isDesignLoaded?dojo.date.locale.format(_622,{formatLength:"short"}):_622.getTime();
}else{
if(wm.isNode(_622)){
_622=_622.id;
}
}
}
catch(e){
}
return _622;
},getProperties:function(){
var _623={};
var _624=this.dijitPropList.split(/,/);
for(var i=0;i<_624.length;i++){
var _625=_624[i];
if(_625.indexOf("wmdijit")==0){
_623[wm.decapitalize(_625.substring(7))]=this[_625];
}else{
_623[_625]=this[_625];
}
}
return _623;
},setEvents:function(){
for(var _626 in this.dijit){
if(_626.indexOf("on")==0&&!_626.match(/(Mouse|Key)/)){
var _627="onDijit"+_626.substring(2);
if(!this[_627]){
this[_627]=function(){
};
}
this.connect(this.dijit,_626,this,_627);
}
}
},_end:0});
}
if(!dojo._hasResource["wm.base.widget.dijit.Grid"]){
dojo._hasResource["wm.base.widget.dijit.Grid"]=true;
dojo.provide("wm.base.widget.dijit.Grid");
dojo.declare("wm.dijit.Grid",wm.Dijit,{dijitClass:dojox.Grid,width:"100%",height:"100%",init:function(){
this.inherited(arguments);
},renderBounds:function(){
this.inherited(arguments);
this.resizeDijit();
},resizeDijit:function(){
this.dijit.sizeChange();
}});
}
if(!dojo._hasResource["wm.base.widget.DataGrid"]){
dojo._hasResource["wm.base.widget.DataGrid"]=true;
dojo.provide("wm.base.widget.DataGrid");
dojo.declare("wm.MavericksModel",dojox.grid.data.Model,{maxObjectDepth:5,allChange:function(){
this.notify("AllChange",arguments);
this.notify("Change",arguments);
},setData:function(_628){
this.variable=_628;
this.schemaToFields();
},_schemaToFields:function(_629,_62a,_62b,_62c){
if(!_629||_62c>this.maxObjectDepth){
return;
}
var p=_62a?_62a+".":"",_62c=_62c||0;
_62c++;
for(var i in _629){
var ti=_629[i],n=p+i;
var _62d={name:n.replace(/\./g,"_"),key:n,field:n,compare:wm.data.compare};
if(ti.isList){
this.fields.set(this.fields.values.length,_62d);
}else{
if(wm.typeManager.isStructuredType(ti.type)){
if(!_62b||_62b&&dojo.indexOf(_62b,n)!=-1){
var d=_62b?0:_62c;
this._schemaToFields(wm.typeManager.getTypeSchema(ti.type),n,_62b,d);
}
}else{
this.fields.set(this.fields.values.length,_62d);
}
}
}
},schemaToFields:function(){
this.fields.clear();
if(this.variable){
this._schemaToFields(this.variable._dataSchema,"",this.variable.related);
}
},getRowCount:function(){
return this.variable&&this.variable.isList&&(this.variable.getCount()||1);
},measure:function(){
this.count=this.getRowCount();
this.allChange();
},getRow:function(_62e){
return this.variable.getItem(_62e);
},getDatum:function(_62f,_630){
var i=this.getRow(_62f),f=i&&(_630>=0)&&this.fields.values[_630];
if(f){
return (i.data[f.key]||i.getValue(f.key));
}else{
return "";
}
},setDatum:function(_631,_632,_633){
if(_631!==undefined){
var i=this.variable.getItem(_632);
if(i){
i.beginUpdate();
i.setValue(this.fields.values[_633].key,_631);
i.endUpdate();
this.notify("DatumChange",arguments);
}
}
},beginModifyRow:function(_634){
},endModifyRow:function(_635){
},cancelModifyRow:function(_636){
this.allChange();
},sort:function(){
this.variable.sort(this.makeComparator(arguments));
},generateComparator:function(_637,_638,_639,_63a){
return function(a,b){
a=a.getValue(_638);
b=b.getValue(_638);
var ineq=_637(a,b);
return ineq?(_639?ineq:-ineq):_63a&&_63a(a,b);
};
}});
dojo.declare("wm.DataGridColumn",wm.Component,{autoSize:false,dataExpression:"",field:"",caption:"",columnWidth:"120px",display:"",index:0,showing:true,addColumn:function(){
this.owner.doAddColumn();
},removeColumn:function(){
this.owner.doRemoveColumn(this);
},init:function(){
this._cupdating=true;
delete this.format;
this.caption=this.label||this.caption;
delete this.label;
this.inherited(arguments);
this.setDisplay(this.display);
},setField:function(_63b){
this.field=_63b;
this.caption=this.caption||this.field;
},setIndex:function(_63c){
this.owner.setColumnIndex(this,_63c);
},setColumnWidth:function(_63d){
this.columnWidth=_63d;
this.autoSize=false;
this.owner.columnsChanged();
},formatChanged:function(){
if(this.isDesignLoaded()&&!this._cupdating){
this.owner.renderGrid();
}
},valueChanged:function(_63e,_63f){
this.inherited(arguments);
},getCellProps:function(){
var cell={name:this.caption,field:this.field,dataExpression:this.dataExpression,hide:!this.showing};
if(this.autoSize){
cell.width="auto";
}else{
if(this.columnWidth){
cell.width=this.columnWidth;
}
}
if(this.components.format){
dojo.mixin(cell,this.components.format.getColProps());
}
if(this.editor){
cell.editor=this.editor;
}
if(this.selectOptions){
cell.options=this.selectOptions;
}
if(this.dataExpression){
cell.get=this.getExpressionDatum;
cell.formatter=this.gridFormatter;
}
return cell;
},postInit:function(){
this.inherited(arguments);
this._cupdating=false;
},getExpressionDatum:function(_640){
return wm.expression.getValue(this.dataExpression,this.grid.model.getRow(_640));
},gridFormatter:function(_641){
if(typeof (_641)=="string"){
_641=_641.replace(/&lt;/g,"<");
}
return _641;
},setDisplay:function(_642){
var c=this.display=_642;
if(c.slice(0,5)!="wm"){
c="wm."+c+"Formatter";
}
var ctor=dojo.getObject(c);
if(!ctor){
this.display="";
ctor=wm.DataFormatter;
}
wm.fire(this.components.format,"destroy");
new ctor({name:"format",owner:this});
if(this.isDesignLoaded()&&!this._cupdating){
this.owner.renderGrid();
}
},onClick:function(_643,_644,_645){
}});
wm.DataGridColumn.extend({listProperties:function(){
var p=this.inherited(arguments);
p.columnWidth.ignoretmp=this.autoSize;
return p;
},set_index:function(_646){
var _647=(studio.selected==this);
this.setIndex(_646);
if(_647){
wm.onidle(this,function(){
studio.select(null);
studio.select(this);
});
}
},setCaption:function(_648){
this.caption=_648;
this.owner.columnsChanged();
},isParentLocked:function(){
return this.owner&&this.owner.isParentLocked();
},isParentFrozen:function(){
return this.owner&&this.owner.isParentFrozen();
},makePropEdit:function(_649,_64a,_64b){
switch(_649){
case "field":
return new wm.SelectMenu(dojo.mixin(_64b,{options:this.owner._listFields()}));
}
return this.inherited(arguments);
}});
dojo.declare("wm.DataGrid",wm.dijit.Grid,{addColumn:function(){
this.doAddColumn();
},autoColumns:function(){
this.doAddColumn();
},clearColumns:function(){
this.doClearColumn();
},updateNow:function(){
this.update();
},collection:"Columns",init:function(){
this.inherited(arguments);
this.dijit.canEdit=dojo.hitch(this,"canEdit");
this._columns=[];
this.selectedItem=new wm.Variable({name:"selectedItem",owner:this});
if(this.isDesignLoaded()){
this.connect(this.dijit,"onHeaderCellClick",this,"headerCellDesignClick");
this.connect(this.dijit,"setCellWidth",this,"setDesignCellWidth");
}
this.connect(this.dijit,"sort",this,"sort");
},doSetSizeBc:function(){
if(this.size&&!this.sizeUnits){
this.sizeUnits="flex";
}
this.inherited(arguments);
},headerCellDesignClick:function(e){
var c=this._columns[e.cell.index];
if(c){
studio.select(c);
}
dojo.stopEvent(e);
},setDesignCellWidth:function(_64c,_64d){
this._columns[_64c].columnWidth=_64d;
},postInit:function(){
this.inherited(arguments);
this._clearColumns();
for(var i in this.components){
var c=this.components[i];
if(c instanceof wm.DataGridColumn){
this._columns.push(c);
}
}
this.renderGrid();
dojo.publish(this.name+".selectedItem-created");
},destroy:function(){
if(this.isDestroyed){
return;
}
this.inherited(arguments);
this._clearColumns();
delete this.selectedItem;
delete this.dataSet;
this.destroyDijit();
this.isDestroyed=true;
},destroyDijit:function(){
if(this.dijit){
try{
if(this.dijit.edit&&this.dijit.edit.grid){
try{
this.dijit.edit.grid.destroy();
}
catch(e){
}
}
if(this.dijit.focus){
delete this.dijit.focus.grid;
}
if(this.dijit.views){
delete this.dijit.views.grid;
}
if(this.dijit.selection){
delete this.dijit.selection.grid;
}
if(this.dijit.rows){
delete this.dijit.rows.grid;
}
if(this.dijit.scroller){
delete this.dijit.scroller.contentNodes;
delete this.dijit.scroller.pageNodes;
}
if(this.dijit.params){
delete this.dijit.params.parentNode;
delete this.dijit.params.srcNodeRef;
}
if(this.dijit.layout){
delete this.dijit.layout.cells;
delete this.dijit.layout.grid;
delete this.dijit.layout.structure;
}
delete this.dijit._connects;
delete this.dijit.parentNode;
delete this.dijit.rows;
delete this.dijit.lastFocusNode;
delete this.dijit.edit;
delete this.dijit.focus;
delete this.dijit.structure;
delete this.dijit.views;
delete this.dijit.viewsHeaderNode;
delete this.dijit.viewsNode;
}
catch(e){
}
}
if(this.dijitProps){
delete this.dijitProps.parentNode;
delete this.dijitProps;
}
},getCollection:function(_64e){
var cn=[];
for(var i in this.components){
var c=this.components[i];
if(c instanceof wm.DataGridColumn){
cn.push(c);
}
}
cn.sort(function(a,b){
return a.index-b.index;
});
return cn;
},columnsToStructure:function(){
var _64f=[],rows=[],view={rows:rows},s=[view];
this._columns.sort(this._columnsSorter);
for(var i=0,c;(c=this._columns[i]);i++){
var cell=c.getCellProps();
this.onSetColumns(cell,i);
_64f.push(cell);
}
this.adjustRowCellProps(_64f);
rows.push(_64f);
return s;
},adjustRowCellProps:function(_650){
var flex=0;
dojo.forEach(_650,function(c){
var u=wm.splitUnits(c.width);
if(u.units=="flex"){
flex+=u.value;
}
});
dojo.forEach(_650,function(c){
var u=wm.splitUnits(c.width);
if(flex&&u.units=="flex"&&u.value){
c.width=Math.round(u.value*100/flex)+"%";
}
});
},setStructure:function(_651){
this.onSetStructure(_651);
this.dijit.setStructure(_651&&_651.length?_651:null);
},columnsChanged:function(){
if(!this._loading&&!this._updating){
this.setStructure(this.columnsToStructure());
if(this.isDesignLoaded()){
studio.refreshComponentOnTree(this);
}
}
},setColumnIndex:function(_652,_653){
_652.index=_653-0.5;
this._columns.sort(this._columnsSorter);
for(var i=0,c;(c=this._columns[i]);i++){
c.index=i;
}
this.columnsChanged();
},_columnsSorter:function(inA,inB){
return inA.index-inB.index;
},_addFields:function(_654,_655,_656,_657,_658){
if(!_655||_658>this.dijit.model.maxObjectDepth){
return;
}
var p=_656?_656+".":"",_658=_658||0;
_658++;
for(var i in _655){
var ti=_655[i],n=p+i;
if(ti.isList){
}else{
if(wm.typeManager.isStructuredType(ti.type)){
if(!_657||_657&&dojo.indexOf(_657,n)!=-1){
var d=_657?0:_658;
this._addFields(_654,wm.typeManager.getTypeSchema(ti.type),n,_657,d);
}
}else{
_654.push(n);
}
}
}
},_listFields:function(_659,_65a,_65b){
var list=[""];
if(this.dataSet){
this._addFields(list,this.dataSet._dataSchema,"",(this.dataSet||0).related);
}
return list;
},_clearColumns:function(){
for(var i=0,c;(c=this._columns[i]);i++){
c.destroy();
}
this._columns=[];
},_typifyColumn:function(_65c,_65d){
var t=wm.typeManager.getPrimitiveType(_65d)||_65d;
_65c.display=dojo.indexOf(wm.formatters,t)!=-1?t:"";
},_hasColumnForField:function(_65e){
for(var i=0,_65f=this._columns,c;(c=_65f[i]);i++){
if(c.field==_65e){
return true;
}
}
},_viewToColumns:function(_660,_661){
var p=_661?_661+".":"",col;
for(var i=0,f,_662;f=_660[i];i++){
_662=f.dataIndex;
if(!f.includeLists||this._hasColumnForField(_662)){
continue;
}
this._index++;
col={name:f.dataIndex.replace(/\.(\S)/g,function(w){
return w.slice(1).toUpperCase();
}),label:f.caption,field:_662,owner:this,index:f.order===undefined?this._index:f.order,autoSize:f.autoSize};
if(!col.autoSize&&f.width&&f.widthUnits){
col.columnWidth=f.width+f.widthUnits;
}
this._typifyColumn(col,f.displayType);
this._adjustColumnProps(col);
this._addColumn(col);
}
},_schemaToColumns:function(_663,_664){
if(!_663){
return;
}
var p=_664?_664+".":"";
for(var i in _663){
var ti=_663[i],n=p+i;
if(this._hasColumnForField(n)){
continue;
}
if(ti.isList){
}else{
if(wm.typeManager.isStructuredType(ti.type)){
}else{
this._index++;
var name=n.replace(/\./g,"_");
var col={name:name,label:n,field:n,owner:this,index:this._index};
this._typifyColumn(col,ti.type);
this._adjustColumnProps(col);
this._addColumn(col);
}
}
}
},_adjustColumnProps:function(_665){
var name=_665.name||"column";
name=name.match(/[0-9]$/)?name:name+1;
name=this.getUniqueName(name);
_665.name=name;
},_addColumn:function(_666){
this._columns.push(new wm.DataGridColumn(_666));
},_getStartColIndex:function(){
var m=0;
dojo.forEach(this._columns,function(c){
m=Math.max(m,c.index);
});
return m==0?m:m++;
},dataSetToColumns:function(){
this._updating=true;
if(this.dataSet){
this._index=this._getStartColIndex();
if(this.dataSet.liveView&&this.dataSet.liveView.service){
this._viewToColumns(this.dataSet.getViewListFields(),"");
}else{
this._schemaToColumns(this.dataSet._dataSchema,"");
}
}
this._updating=false;
if(this.isDesignLoaded()){
studio.refreshComponentOnTree(this);
}
},createDefaultColumns:function(){
var col={name:"column1",autoSize:true,owner:this};
this._adjustColumnProps(col);
this._addColumn(col);
},_hasDefaultColumns:function(){
var c=this._columns[0];
return (!c||(!c.field&&!c.dataExpression)&&this._columns.length==1);
},setDataSet:function(_667){
var d=this.dataSet=_667;
this.dijit.setModel(new wm.MavericksModel(null,d));
if(d&&this._hasDefaultColumns()){
this._clearColumns();
this.dataSetToColumns();
}
this.renderGrid();
if(_667&&_667.type&&_667.type!="any"&&_667.type!=this.selectedItem.type){
this.selectedItem.setType(_667.type);
}
},preRender:function(){
this.dataSetToSelectedItem();
if(this._columns.length==0){
this.createDefaultColumns();
}
this._lastSort=this.dijit.sortInfo;
this._lastSelectedIndex=this.getSelectedIndex();
this.dijit.sortInfo=0;
this.clearSelection();
},renderGrid:function(){
if(!this._loading){
this.preRender();
this.onBeforeRender();
this.setStructure(this.columnsToStructure());
this.onAfterRender();
}
},select:function(_668){
this.dijit.selection.select(_668);
},clearSelection:function(){
this.dijit.selection.clear();
this.updateSelected();
},hasSelection:function(){
return Boolean(this.dijit.selection.getFirstSelected()!=-1);
},getSelectedIndex:function(){
return this.dijit.selection.selectedIndex;
},getEmptySelection:function(){
return !this.hasSelection();
},dataSetToSelectedItem:function(){
this.selectedItem.setLiveView((this.dataSet||0).liveView);
this.selectedItem.setType(this.dataSet?this.dataSet.type:"any");
},updateSelected:function(){
if(!this.selectedItem){
return;
}
var s=this.dijit.selection.selectedIndex;
this.selected=this.dataSet&&s>=0?this.dataSet.getItem(s):null;
if(this.selected){
this.selectedItem.setData(this.selected);
}else{
this.selectedItem.clearData();
}
this.setValue("emptySelection",!this.hasSelection());
},onCellClick:function(_669){
if(_669.cell){
var i=_669.cell.index;
var c=this._columns[i];
wm.fire(c,"onClick",[_669.rowIndex,_669.cell,_669]);
}
},onHeaderCellClick:function(_66a){
},onRowDblClick:function(_66b){
},_onSelected:function(_66c){
wm.job(this.getRuntimeId(),250,dojo.hitch(this,"onSelected",_66c));
},_onSelectionChanged:function(){
wm.job(this.getRuntimeId()+"-selectionChanged",250,dojo.hitch(this,"onSelectionChanged"));
},onSelectionChanged:function(){
},onSelected:function(_66d){
this.updateSelected();
},_onDeselected:function(_66e){
wm.job(this.getRuntimeId(),250,dojo.hitch(this,"onDeselected",_66e));
},onDeselected:function(_66f){
this.updateSelected();
},onSetColumns:function(_670,_671){
},onSetStructure:function(_672){
},onBeforeRender:function(){
},onAfterRender:function(){
},update:function(){
var ds=this.getValueById((this.components.binding.wires["dataSet"]||0).source);
wm.fire(ds,"update");
},canEdit:function(_673,_674){
ioEdit={canEdit:Boolean(_673.editor)};
this.onCanEdit(ioEdit,_673,_674);
return ioEdit.canEdit;
},onCanEdit:function(_675,_676,_677){
},sort:function(){
this.onSort(this.dijit.getSortField());
},onSort:function(_678){
}});
wm.DataGrid.extend({set_dataSet:function(_679){
if(_679&&!(_679 instanceof wm.Variable)){
var ds=this.getValueById(_679);
if(ds){
this.components.binding.addWire("","dataSet",ds.getId());
}
}else{
this.setDataSet(_679);
}
},doAddColumn:function(_67a){
var col={name:"column1",index:this._columns.length,label:"",owner:this};
if(!this._columns.length){
col.columnWidth="auto";
}
this._adjustColumnProps(col);
this._addColumn(col);
this.columnsChanged();
if(this.isDesignLoaded()){
var i=this._columns.length-1;
var c=(i>=0?this._columns[i]:this);
studio.select(c);
}
},doRemoveColumn:function(_67b){
_67b.destroy();
this._columns=[];
this.loaded();
this.columnsChanged();
if(this.isDesignLoaded()){
var i=_67b.index-1;
var c=this._columns[i<0?0:i]||this;
studio.select(c);
}
},doClearColumns:function(){
this._clearColumns();
this.renderGrid();
},doAutoColumns:function(){
this._clearColumns();
this.dataSetToColumns();
this.renderGrid();
}});
wm.Object.extendSchema(wm.DataGridColumn,{caption:{group:"common",order:100,focus:1},addColumn:{group:"operation",order:10,operation:1},removeColumn:{group:"operation",order:20,operation:1},autoSize:{group:"layout",order:10},columnWidth:{group:"layout",order:20,editor:"wm.prop.SizeEditor"},index:{group:"layout",order:30},field:{group:"data",order:10,editor:"wm.prop.FieldSelect"},dataExpression:{group:"data",order:15},display:{group:"data",order:20,options:[""].concat(wm.formatters)},format:{group:"data",order:30,categoryParent:"Properties",categoryProps:{component:"format"}},showing:{ignore:1},format:{ignore:1}});
wm.Object.extendSchema(wm.DataGrid,{selectedItem:{ignore:true,isObject:true,bindSource:true,simpleBindProp:true},emptySelection:{ignore:true,bindSource:1,type:"Boolean"},dataSet:{readonly:true,group:"data",order:0,type:"wm.Variable",isList:true,bindTarget:true,createWire:1,editor:"wm.prop.DataSetSelect",editorProps:{listMatch:true,widgetDataSets:true,allowAllTypes:true}},addColumn:{group:"operation",order:1,operation:1},autoColumns:{group:"operation",order:5,operation:1},clearColumns:{group:"operation",order:10,operation:1},updateNow:{group:"operation",order:15,operation:1},collection:{ignore:true},disabled:{ignore:true}});
}
dojo.i18n._preloadLocalizations("dojo.nls.wm_data_grid",["ROOT","ar","ca","cs","da","de","de-de","el","en","en-au","en-gb","en-us","es","es-es","fi","fi-fi","fr","fr-fr","he","he-il","hu","it","it-it","ja","ja-jp","ko","ko-kr","nb","nl","nl-nl","pl","pt","pt-br","pt-pt","ru","sk","sl","sv","th","tr","xx","zh","zh-cn","zh-tw"]);
