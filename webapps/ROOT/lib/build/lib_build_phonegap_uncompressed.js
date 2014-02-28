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
if(!dojo._hasResource['wm.base.components.componentList']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['wm.base.components.componentList'] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide('wm.base.components.componentList');


/************************************************************************************
 * MICHAEL'S ATTEMPT TO DESCRIBE THIS:
 *
 * Component.js only tries to access this list if the class isn't already loaded.
 * Any class we try to load and is NOT in this list is assumed to be in common/packages.
 * Therefore: any class you load must either already be loaded or listed here.
 * If that class is NOT a part of any existing layer, then enter in its standard package name
 * so dojo.require can run normally.  Still working out details of how to create new build layers.
 ************************************************************************************/
wm.componentFixList = {_phonegap:[]};
wm.componentList = {
    'wm.Content': ['wm.base.widget.Content'],
    'wm.DataGrid': ['build.Gzipped.wm_data_grid'],
    'wm.DojoGrid': ['build.Gzipped.wm_dojo_grid'],
    'wm.DojoMenu': ['build.Gzipped.wm_menus'],
    'wm.PopupMenu': ['build.Gzipped.wm_menus'],
    'wm.DojoChart': ['build.Gzipped.wm_charts'],
    'wm.DojoGauge': ['build.Gzipped.wm_charts'],
    'wm.Dashboard': ['build.Gzipped.wm_editors', 'build.Gzipped.wm_dashboard'],
    'wm.AccordionLayers': ['build.Gzipped.wm_accordion'],
    'wm.WizardLayers': ['build.Gzipped.wm_wizardlayer'],
    'wm.BreadcrumbLayers': ['build.Gzipped.wm_breadcrumblayer'],
    'wm.ColorPicker': ['build.Gzipped.wm_colorpicker'],
    'wm.RichTextDialog': ['wm.base.widget.Dialogs.RichTextDialog'],
    'wm.DojoFisheye': ['wm.base.widget.DojoFisheye'],
    'wm.DojoLightbox': ['wm.base.widget.DojoLightbox'],
    'wm.TwitterFeed': ['wm.base.widget.TwitterFeed'],
    'wm.JsonStatus': ['build.Gzipped.wm_editors'],
    'wm.Tree': ['build.Gzipped.wm_trees'],
    'wm.PropertyTree': ['build.Gzipped.wm_trees'],
    'wm.ObjectTree': ['build.Gzipped.wm_trees'],
    "wm.DraggableTree": ['build.Gzipped.wm_trees'],
    'wm.Gadget': ["wm.base.widget.gadget.Gadget"],
    'wm.gadget.YouTube': ["wm.base.widget.gadget.YouTube"],
    'wm.gadget.FacebookLikeButton': ["wm.base.widget.gadget.Facebook"],
    'wm.gadget.FacebookActivityFeed': ["wm.base.widget.gadget.Facebook"],
    'wm.gadget.GoogleMap': ["wm.base.widget.gadget.GoogleMap"],
    'wm.gadget.Stocks': ["wm.base.widget.gadget.Stocks"],
    'wm.gadget.Weather': ["wm.base.widget.gadget.Weather"],
    'wm.gadget.TwitterFollowButton': ["wm.base.widget.gadget.TwitterGadgets"],
    'wm.gadget.TwitterTweetButton': ["wm.base.widget.gadget.TwitterGadgets"],
    'wm.gadget.TwitterList': ["wm.base.widget.gadget.TwitterGadgets"],
    'wm.TwitterFeed': ["wm.base.widget.TwitterFeed"],

    'wm.RichText': ['build.Gzipped.wm_editors', 'build.Gzipped.wm_richTextEditor'],

    'wm.CheckBoxEditor': ['build.Gzipped.wm_editors_old'],
    'wm.RadioButtonEditor': ['build.Gzipped.wm_editors_old'],
    'wm.SelectEditor': ['build.Gzipped.wm_editors_old'],
    'wm.TextEditor': ['build.Gzipped.wm_editors_old'],
    'wm.SliderEditor': ['build.Gzipped.wm_editors_old'],
    'wm._SliderEditor': ['build.Gzipped.wm_editors_old'],
    'wm.TextAreaEditor': ['build.Gzipped.wm_editors_old'],
    'wm._TextEditor': ['build.Gzipped.wm_editors_old'],
    'wm.CurrencyEditor': ['build.Gzipped.wm_editors_old'],
    'wm.NumberEditor': ['build.Gzipped.wm_editors_old'],
    'wm.Editor': ['build.Gzipped.wm_editors_old'],
    'wm.DateEditor': ['build.Gzipped.wm_editors_old'],
    'wm.TimeEditor': ['build.Gzipped.wm_editors_old'],
    'wm.Select': ['build.Gzipped.wm_editors_old'],

    'wm.Date': ['build.Gzipped.wm_editors'],
    'wm.DateTime': ['build.Gzipped.wm_editors', "build.Gzipped.wm_list"],
    'wm.SelectMenu': ['build.Gzipped.wm_editors'],
    'wm.Lookup': ['build.Gzipped.wm_editors'],
    'wm.FilteringLookup': ['build.Gzipped.wm_editors'],
    'wm.CheckboxSet': ['build.Gzipped.wm_editors'],
    'wm.RadioSet': ['build.Gzipped.wm_editors_misc'],
    'wm.ListSet': ['build.Gzipped.wm_editors', "build.Gzipped.wm_list"],
    'wm.Number': ['build.Gzipped.wm_editors'],
    'wm.Checkbox': ['build.Gzipped.wm_editors'],
    'wm.RadioButton': ['build.Gzipped.wm_editors_misc'],
    //'wm.RadioSet':['build.Gzipped.wm_editors_misc'],
    'wm.Currency': ['build.Gzipped.wm_editors'],

    'wm.Slider': ['build.Gzipped.wm_editors_misc'],
    'wm.Text': ['build.Gzipped.wm_editors'],
    'wm.TextArea': ['build.Gzipped.wm_editors'],
    'wm.Time': ['build.Gzipped.wm_editors'],
    'wm.LargeTextArea': ['build.Gzipped.wm_editors'],

    'wm.dijit.Dijit': ['wm.base.widget.dijit.Dijit'],
    'wm.dijit.ProgressBar': ['build.Gzipped.wm_progressbar'],
    'wm.RoundedButton': ['wm.base.widget.Buttons.RoundedButton'],
    'wm.BusyButton': ['wm.base.widget.Buttons.BusyButton'],
    'wm.PopupMenuButton': ['build.Gzipped.wm_menus'],
    'wm.ToggleButton': ['build.Gzipped.wm_editors'],
    // currently in main build
    'wm.ToggleButtonPanel': ['build.Gzipped.wm_editors'],
    // currently in main build
    'wm.Timer': ['wm.base.components.Timer'],

    /* Old forms and related widgets */
    'wm.SimpleForm': ['build.Gzipped.wm_livepanel'],
    'wm.LiveForm': ['build.Gzipped.wm_livepanel'],
    'wm.RelatedEditor': ['build.Gzipped.wm_livepanel'],
    'wm.LivePanel': ['build.Gzipped.wm_livepanel'],
    'wm.EditPanel': ['build.Gzipped.wm_livepanel'],
    'wm.DataNavigator': ['build.Gzipped.wm_livepanel'],
    'wm.RegularExpressionFormatter': ["wm.base.widget.FormattersMisc"],
    'wm.EvaluationFormatter': ["wm.base.widget.FormattersMisc"],
    'wm.LinkFormatter': ["wm.base.widget.FormattersMisc"],
    'wm.ImageFormatter': ["wm.base.widget.FormattersMisc"],
    /* New Forms */
    'wm.DataForm': ['build.Gzipped.wm_dataform'],
    'wm.FormPanel': ['build.Gzipped.wm_dataform'],
    'wm.SubForm': ['build.Gzipped.wm_dataform'],
    'wm.DBForm': ['build.Gzipped.wm_dataform'],
    'wm.OneToMany': ['wm.compressed.wm_dataform'],
    'wm.ServiceInputForm': ['build.Gzipped.wm_dataform'],
    'wm.ServiceQueue': ['wm.base.components.ServiceQueue'],
    //'wm.Picture': ["wm.base.widget.Picture"],
    'wm.dijit.Calendar': ["build.Gzipped.wm_editors"],
    'wm.Template': ['wm.base.widget.Template'],

    'wm.ComponentPublisher': ["wm.base.components.Publisher"],
    'wm.CompositePublisher': ["wm.base.components.Publisher"],
    'wm.TemplatePublisher': ["wm.base.components.Publisher"],
    'wm.Composite': ['wm.base.widget.Composite'],
    'wm.CompositeMixin': ['wm.base.widget.Composite'],
    'wm.Ticker': ['wm.base.widget.Ticker'],
    'wm.FileUpload': ['wm.base.widget.FileUpload'],
    'wm.DojoFileUpload': ['build.Gzipped.wm_fileupload'],
    'wm.DojoFlashFileUpload': ['build.Gzipped.wm_fileupload'],
    'wm.DijitDesigner': ["wm.base.widget.dijit.Dijit"],

    //'wm.Popup':['wm.base.widget.Popup'],
    'wm.FunctionService': ['wm.base.components.FunctionService'],
    'wm.List': ["build.Gzipped.wm_list"],
    'wm.IFrame': ['wm.base.widget.IFrame'],
    'wm.FeedList': ['wm.base.widget.FeedList'],
    'wm.ListViewer': ['wm.base.widget.ListViewer'],
    'wm.PhoneGapService': ['wm.base.components.PhoneGapService'],
    'wm.XhrService': ['wm.base.components.XhrService'],
    'wm.LogoutVariable': ['wm.base.components.LogoutVariable']
}

/* wm.require is the public version of wm.getComponentStructure; inCommon is optional parameter
 * to use when loading a class from the common folder
 */
wm.require = function(inType, inCommon) {
    if (dojo.getObject(inType)) return;
    var requireList = wm.componentList[inType];
    if (requireList || inCommon) return wm.getComponentStructure(inType);
    else dojo["require"](inType);
}

wm.getComponentStructure = function(inType) {
    //console.info('Loading ' + inType + ' dynamically.');
    if (inType == "wm.DojoGrid" && wm.isMobile) {
        inType = "wm.List";
    }
    var requireList = wm.componentList[inType];

    // if we dont get the require list, then we assume that it is a composite widget
    // so we will try to load it.
    if (!requireList) {
        // this is done for custom widgets.
        if (inType.indexOf('wm.') == 0) {
            inType = inType.substring(3);
        }

        /* This code is obsolete as of WM 6.6; see WM-4750: https://github.com/SpringSource/wavemaker/commit/aa3d2c28721740c0182b0a98e3674ee3c1114c60 */
        requireList = ['wm.base.widget.Composite', 'wm.packages.' + inType];
        //console.info('Trying to load composite: ' + requireList);
    }

    if (!requireList) {
        console.error('Add ' + inType + ' in component list.');
    } else {
        for (var i = 0; i < requireList.length; i++) {
            var relpath = dojo._getModuleSymbols(requireList[i]).join("/") + ".js";
            var uri;
            // If its a phonegap request to common/packages, then don't prefix dojo.baseUrl; common folder
            // has been copied into the project's webapp folder.
            if (wm.isPhonegap && requireList[i].match(/^(wm|common)\.packages\./)) {
                uri = relpath;
            } else {
                uri  = ((relpath.charAt(0) == "/" || relpath.match(/^\w+:/)) ? "" : dojo.baseUrl) + relpath;
            }
            while (uri.match(/[^\/]\/\.\.\//)) {
                uri = uri.replace(/[^\/]*\/\.\.\/+/, "");
            }
            wm.dojoScriptLoader(uri);
            if (wm.componentFixList[requireList[i]]) {
                var fixes = wm.componentFixList[requireList[i]];
                for (var j = 0; j < fixes.length; j++) {
                    fixes[j]();
                }
            }
        }
    }
    if (wm.isMobile && inType == "wm.List") {
        wm.DojoGrid = wm.List;
    }
}

/*
   // Usage:
   // inClass: wm.Button
   // packageList: null, the default build layer is loaded before the patches file, and wm.Button is loaded
    wm.addFrameworkFix("wm.Button", null, function() {
        wm.Button.extend({
            click: function() {
                alert("Dont click on buttons");
            }
        });
    });

    // N
    wm.addFrameworkFix("wm.List", ["build.Gzipped.wm_list"], function() {
        wm.List.extend({
            setScrollTop: function() {
                alert("HEY");
            }
        });
    });
*/

/**************
// So why do we need to pass in wm_dojo_grid when thats indexed by the wm.componentList hash?
// Because there might be more than one thing that causes a given widget class to load;
// sometimes interdependencies can cause less obvious packages to cause wm.DojoGrid to be loaded
wm.addFrameworkFix("wm.DojoGrid", ['build.Gzipped.wm_dojo_grid'], function() {
   wm.DojoGrid.extend({
      ...
   })
});

// So why not just do wm.PageContainer.extend without wm.addFrameworkFix?  Because for a phonegap
// build, wm.PageContainer isn't defined until after the patches have loaded.  Use null or [] for
// the second parameter so that it gets added to the phonegap's fix list
wm.addFrameworkFix("wm.PageContainer", null, function() {
   wm.PageContainer.extend({
      ...
   })
});

**************/
wm.addFrameworkFix = function(className, packageList, inFunc) {
    /* All classes are preloaded in debug mode; just fire inFunc */
    if (djConfig.isDebug && !wm.studioConfig) {
        inFunc();
    } else {
        var ctor = dojo.getObject(className);
        /* If the class has already been loaded, call inFunc() */
        if (ctor) {
            inFunc();
        } else if (packageList && packageList.length) {
            dojo.forEach(packageList, function(packageName) {
                if (!wm.componentFixList[packageName]) {
                    wm.componentFixList[packageName] = [inFunc];
                } else {
                    wm.componentFixList[packageName].push(inFunc);
                }
            });
        } else {
            wm.componentFixList._phonegap.push(inFunc); // phonegap build loads patches file before loading its standard package library
        }
    }
}

wm.applyFrameworkFixes = function() {
    for (var packageName in wm.componentFixList) {
        var ctor = dojo.getObject(packageName);
        if (ctor) {
            var classFixes = wm.componentFixList[packageName];
            for (var i = 0; i < packageName.length; i++) {
                classFixes[i]();
            }
            delete wm.componentFixList[packageName];
        }
    }
}

//wm.loadLib("common." + wm.version.replace(/[^a-zA-Z0-9]/g,"") + "_patches"); moved to Application.js

}

if(!dojo._hasResource['wm.base.lib.util']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['wm.base.lib.util'] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide('wm.base.lib.util');

/**
	@namespace Master namespace for all WaveMaker library objects.
*/
wm = window["wm"] || {};

// simple logging
wm.logErrors = false;
wm.log = function() {
	console.log.apply(console, arguments);
}

// strings

wm.capitalize = function(s) {
	return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}

wm.decapitalize = function(s) {
	return s ? s.charAt(0).toLowerCase() + s.slice(1) : "";
}

wm.camelcase = function(s) {
    return s.replace(/[\.-](.?)/g, function(inChar) {console.log(inChar);return inChar[1].toUpperCase();})
}

wm.flattenObject = function(inObj, keepOld) {
    var outObj = {};
    for (var prop in inObj) {
	if (!inObj[prop])
	    continue;

	if (typeof inObj[prop] != "object") {
	    outObj[prop] = inObj[prop];
	} else {
	    var tmpObj = wm.flattenObject(inObj[prop]);
	    if (keepOld) outObj[prop] = tmpObj;
	    for (var prop2 in tmpObj) outObj[prop + "." + prop2] = tmpObj[prop2];
	}
    }
    return outObj;
}

/* Use this instead of dojo.clone when you don't want to recurse through the full depth
 * of the object.  Full recursion can cause infinite recursion; almost certain to do this
 * for a Component which has an owner and child component where each points to the other.
 */
 wm.shallowClone = function(inObj) {
    var result = {};
    wm.forEachProperty(inObj, function(inValue, inKey) {
        result[inKey] = inValue;
    });
    return result;
 }

wm.requireCss = function(modulepath) {
/*
    var replaceSubstr = 'lib/dojo/dojo/../../../lib';
    if (modulepath.indexOf(replaceSubstr) == 0) {
	modulepath = "lib" + modulepath.substring(replaceSubstr.length);
    }
    modulepath = ((modulepath.charAt(0) == "/" || modulepath.match(/^\w+:/)) ? "" : dojo.baseUrl) + modulepath;

    var parts = modulepath.split(".");
    var filename = parts.pop();
    var path = parts.join(".");
    */

    var path = wm.dojoModuleToPath(modulepath) + ".css";
    wm.requireCssPath(path);
}
wm.dojoModuleToPath = function(modulepath) {
    var lastIndex = modulepath.lastIndexOf(".");
    var filename = modulepath.substring(lastIndex + 1);
    var modulepath = modulepath.substring(0,lastIndex);
    var path = dojo.moduleUrl(modulepath).path.replace(/lib\/\//, "lib/") + filename;

    while (path.match(/[^\/]\/\.\.\//)) {
        path = path.replace(/[^\/]*\/\.\.\/+/, "");
    }
    return path;
}
wm.requireCssPath = function(path) {
    var styleNodeId = "CSS_" + path.replace(/\./g,"_").replace(/\//g,"_");
    var stylenode = dojo.byId(styleNodeId);
    if (stylenode) return;

    stylenode = document.createElement("link");
    stylenode.rel = "stylesheet";
    stylenode.id = styleNodeId;
    stylenode.type="text/css";
    stylenode.href = path;
    document.getElementsByTagName("head")[0].appendChild(stylenode);
}


wm.isEqual = function (a1, a2){
	try{
		if(a1 == a2)
			return true;
		if(dojo.isArray(a1) && dojo.isArray(a2))
			return dojo.toJson([].concat(a1).sort()) == dojo.toJson([].concat(a2).sort())
		return dojo.toJson(a1) == dojo.toJson(a2)
	} catch(e) {
		console.info('Could not compare objects ', arguments, ' therefore returning false. Error ', e);
		return false;
	}
}

wm.compareStrings = function(a, b) {
	return a < b ? -1 : a == b ? 0 : 1;
}

wm.toTitleCase = function(s){
	return s.replace(/\b\w+\b/g, function(word) {
		return word ? word.charAt(0).toUpperCase() + (word.slice(1) || "").toLowerCase() : "";
	});
}

wm.delimCat = function(inPrefix, inSuffix, inDelim) {
	return inPrefix + (inPrefix && inSuffix ? inDelim : "") + inSuffix;
}

wm.joinEx = function(inValues, inDelim) {
	var i = 0;
	while (i < inValues.length) {
		if (inValues[i++] !== "")
			inValues.splice(--i, 1);
	}
	return inValues.join(inDelim);
}

// number

wm.isNumber = function(v) {
	return (typeof v == 'number') || (v instanceof Number);
}

wm.max = function(list) {
  var max = list[0];
  for (var i = 1; i < list.length; i++) if (list[i] > max) max = list[i];
  return max;
}
wm.sum = function(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) sum += list[i];
  return sum;
}

wm.average = function(list) {
  return wm.sum(list)/list.length;
}

// lang

wm.nop = function() {};

wm.isEmpty = function(inObj) {
    /* ACE Editor's libraries changed fundamental aspects of javascript objects in IE such that our default handling here is invalid */
    if (window["studio"] && dojo.isIE == 8) {
	if (dojo.isArray(inObj) && inObj.length == 0) return true;
	if (typeof inObj == "object") {
	    for (var i in inObj) {
		if (!dojo.isFunction(inObj[i])) {
		    return false;
		}
	    }
	}

    } else {
	for (var i in inObj)
		return false;
    }
    // for (var i in inObj) finds no properties
    if (typeof inObj == "object" && inObj instanceof Date)
        return false;
    return true;
}

wm.fire = function(obj, method, args) {
	var f = obj && method && obj[method];
	if (f)
		return args ? f.apply(obj, args) : f.call(obj);
}

wm.async = function(f, delay) {
	return function(){setTimeout(f, delay || 1);};
}

wm.forEach = function(inObject, inFunc) {
	if (dojo.isArray(inObject))
		dojo.forEach(inObject, inFunc);
	else
		wm.forEachProperty(inObject, inFunc);
}

wm.forEachProperty = function(inObject, inFunc) {
	for (var i in inObject) {
	    if (!inObject.hasOwnProperty || inObject.hasOwnProperty(i)) {
		inFunc(inObject[i], i);
	    }
	}
}

wm.isDomShowing = function(inNode) {
    var n = inNode;
    while(n && n != window.document.body && n.style.display != "none") {
	n = n.parentNode;
    }
    return !n || n.style.display != "none";
}

wm.evalJs = function(inJavascript, inDefault) {
	var r = inDefault || "";
	try {
		r = eval(inJavascript);
	} catch(e) {
		wm.logging && console.log("Error evaluating Javascript:", e);
	}
	return r;
};

wm.getClassProp = function(inClassName, inProp) {
	var klass = dojo.getObject(inClassName);
	var ptype = klass && klass.prototype;
	return ptype && ptype[inProp];
}

// DOM

wm.showHideNode = function(inNode, inTrueToShow) {
	inNode.style.display = inTrueToShow ? "" : "none";
};

wm.kids = function(inNode, inTag) {
	var result = [], t=inTag.toUpperCase();
	for (var i=0, n; (n=inNode.childNodes[i]); i++)
		if (n.tagName == inTag)
			result.push(n);
	return result;
}

wm.divkids = function(inNode) {
	return wm.kids(inNode, 'div');
}

wm.clearSelection = function() {
	try{
		if (window.getSelection)
			window.getSelection().collapseToEnd();
		else if (document.selection)
			document.selection.clear();
	}catch(e){
	}
}

wm.focusOnIdle = function(inNode) {
	setTimeout(function() {
		try {
			wm.fire(inNode, "focus");
			wm.fire(inNode, "select");
		} catch(e) {};
	}, 1);
}

wm.inScrollbar = function(e) {
	var t = e.target;
	var s = t.style && dojo.getComputedStyle(t);
	return  s && (
		((s.overflow != 'hidden' || s.overflowX != 'hidden') && (t.scrollWidth != t.offsetWidth) && (t.offsetWidth - 19 - e.clientX < 0)) ||
		((s.overflow != 'hidden' || s.overflowY != 'hidden') && (t.scrollHeight != t.offsetHeight) && (t.offsetHeight - 19 - e.clientY < 0))
	);
};

wm.preloadImage = function(inPath) {
	var i = new Image();
	i.src = inPath;
	(wm.preloaded = (wm.preloaded || [])).push(i);
}

// style

wm.setUnitsBox = function(node, l, t, w, h) {
	with (node.style) {
		l&&(left = l);
		t&&(top = t);
		w&&(width = w);
		h&&(height = h);
	}
}

wm.getNaturalBox = function(node){
	var tn = node.tagName, cs = dojo.getComputedStyle(node), box = dojo._getContentBox(node, cs);
	if(tn=="BUTTON" || tn=="TABLE"){
		var pb = dojo._getPadBorderExtents(node, cs);
		box.w += pb.w;
		box.h += pb.h;
	}
	return box;
}

wm.calcOffset = function(inNode, inAncestor, inAdjustMargin) {
	var o = { x:0, y: 0}, n = inNode, cs, mb, be;
	while (n && n != inAncestor && n != document) {
		cs = dojo.getComputedStyle(n);
		mb = dojo._getMarginBox(n, cs);
		be = dojo._getBorderExtents(n, cs);
		me = inAdjustMargin ? dojo._getMarginExtents(n, cs) : {l:0, t:0};
		o.x += mb.l + be.l + me.l - (n.scrollLeft || 0);
		o.y += mb.t + be.t + me.t - (n.scrollTop || 0);
		n = n.parentNode;
	}
	return o;
}

wm.addRemoveClass = function(node, classn, addRemove) {
	dojo[addRemove ? "addClass" : "removeClass"](node, classn);
}

// misc

wm.onidle = function( /*hitch args*/ ) {
    var args = [];
    for (var i = 0; i in arguments; i++) {
        args.push(arguments[i]);
    }
    if (app && app.debugDialog) {
        var eventChain = app.debugDialog.cacheEventChain();
    }
    window.setTimeout(function() {
        if (eventChain) {
            app.debugDialog.restoreEventChain(eventChain);
        }
        dojo.hitch.apply(null, args)();
        if (eventChain) {
            app.debugDialog.clearEventChain();
        }
    }, 1);
}
wm.onidleChain = function(functionList, stateObj) {
    if (!stateObj) stateObj = {};
    var f2 = function(methods) {
            window.setTimeout(function() {
                var f = methods.shift();
                if (f) f();
                if (methods.length && !stateObj.canceled) f2(methods);
            }, 1);
        }
    if (!stateObj.canceled) f2(functionList, stateObj);

}
wm.job = function(inName, inDelay, inJob1, inJob2) {
    var inJob;
    if (inJob1 && inJob2) {
        inJob = dojo.hitch(inJob1, inJob2);
    } else if (inJob2) {
        inJob = inJob2;
    } else {
        inJob = inJob1;
    }
    wm.cancelJob(inName);
    if (window["app"] && app.debugDialog) {
        var eventChain = app.debugDialog.cacheEventChain();
    }
    var job = function() {
            delete wm._jobs[inName];
            if (eventChain) {
                app.debugDialog.restoreEventChain(eventChain);
            }
            inJob();
            if (eventChain) {
                app.debugDialog.clearEventChain();
            }
        }
    wm._jobs[inName] = setTimeout(job, inDelay);
}
wm.cancelJob = function(inName) {
    clearTimeout(wm._jobs[inName]);
}
wm._jobs = {};
wm.hasJob = function(inName) {
    return Boolean(wm._jobs[inName]);
}
wm.connectEvents = function(inObject, inNode, inEvents) {
    // FIXME: maybe remove this at some point
    if (!dojo.isArray(inEvents)) {
        throw ("wm.connectEvents: event list must be an array (did you use variable args?)")
    };
    var links = [];
    for (var i = 0, e;
    (e = inEvents[i]); i++) {
        links.push(dojo.connect(inNode, 'on' + e, inObject, e));
    }
    return links;
}

wm._isUniqueName = function(inName, inNameSpaces) {
    for (var j = 0, s;
    (s = inNameSpaces[j]); j++)
    if (s[inName] !== undefined) return false;
    return true;
}

wm.findUniqueName = function(inName, inNameSpaces) {
	if (wm._isUniqueName(inName, inNameSpaces))
		return inName;
	var m = (inName || '').match(/([^\d]*)([\d]*)/);
	var i = m[2] || 1, n0 = m[1] || 'noname';
	do {
		inName = n0 + (i > 0 ? i : '');
		i++;
	} while (!wm._isUniqueName(inName, inNameSpaces));
	return inName;
}

wm.getValidJsName = function(inName) {
    var dc = "_";
    inName = inName.replace(new RegExp("[- ]", "g"), dc);

    /*********************************************************
     * This used to be     inName = inName.replace(new RegExp("[^a-zA-Z0-9_]", "g"), "");
     * however this is unfriendly to valid unicode strings.  Instead
     * we now use an algorithm for determining if we have a valid name and if not, trimming
     * characters until we have a valid name
     */
    var isInvalid = true;
    if (inName.match(/^[0-9]/)) {
        inName = ["zero","one","two","three","four","five","six","seven","eight","nine"][inName[0]] + inName.substring(1);
    }
    for (var i = 0; i < inName.length && isInvalid; i++) {
        try { /* Declare var inName in an inner function so it doesn't polute the window object's name space */
            var result = eval("(function() {var " + inName + " = 5; return " + inName + ";})()");
            if (result == 5) {
                isInvalid = false;
            }
        } catch (e) {};
        if (isInvalid) {
            inName = inName.substring(0, i) + inName.substring(i, i + 1).replace(/[^a-zA-Z0-9]+/g, '') + inName.substring(i + 1);
            var result = eval("(function() {var " + inName + " = 5; return " + inName + ";})()"); // if the name is still invalid, throw an error
        }
    }

    /*
    if (inName.match(new RegExp("^[0-9]")) || !inName)
    inName = dc + inName;
    */
    if (inName == "_") inName = "";
    return inName;
}

wm._modules = [];
wm.loadModule = function(inModule) {
	if (!wm._modules[inModule]) {
		tag = [ '<scrip', 't type="text/javascript" src="', inModule, '.js"></scrip', 't>' ].join('');
		document.write(tag);
		wm._modules[inModule] = true;
	}
}

wm.widgetIsShowing = function(inWidget) {
	var w = inWidget, p;
	while (w) {
		p = w.parent;
		if (!w.showing || (w.isActive && !w.isActive()))
			return false;
		w = p;
	}
	return true;
}

wm.forEachWidget = function(inWidget, inFunc, inIgnoreBuiltin) {
	if (inFunc&&inFunc(inWidget) === false)
		return false;
	if (!inWidget)
		return false;

    /* TODO: if inIgnoreBuiltin is false, perhaps we should use inWidget.widgets instead of getOrderedWidgets */
    for (var i=0, ws = inIgnoreBuiltin && inWidget instanceof wm.PageContainer ? [] : inWidget.getOrderedWidgets(), r, w; w=ws[i]; i++) {

		if (w.forEachWidget && !inIgnoreBuiltin) {
		    r = inFunc(w);
		    if (r !== false)
			r = w.forEachWidget(inFunc);
		} else {
		    r = wm.forEachWidget(w, inFunc, inIgnoreBuiltin);
		}

	    if (r === false)
		return false;
	}
}

// if inFunc returns false, do not call on its widgets; unlike wm.forEachWidgets though, it does NOT mean cancel calling on other subtrees
wm.forEachVisibleWidget = function(inWidget, inFunc, inIgnoreBuiltin) {
    var result;
    if (inFunc && inWidget && !inWidget.isAncestorHidden()) result = inFunc(inWidget);

    if (result !== false && (!inIgnoreBuiltin || !wm.isInstanceType(inWidget, [wm.PageContainer, wm.Composite]))) {
        for (var i = 0, ws = inWidget.getOrderedWidgets(), r, w; w = ws[i]; i++) {
            if (w.forEachVisibleWidget && !inIgnoreBuiltin) {
                w.forEachVisibleWidget(inFunc);
            } else {
                 wm.forEachVisibleWidget(w, inFunc, inIgnoreBuiltin);
            }
        }
    }
}

// themes
wm.theme = {
	getPath: function() {
			return dojo.moduleUrl("lib.wm.base","widget/themes/" + "default/");
	},
	getImagesPath: function() {
		return wm.theme.getPath() + "images/";
	}
};

//utility: ensure dijit tooltip is hidden
wm.hideToolTip = function(inImmediate) {
	var tt = dijit._masterTT;
	if (tt) {
		dijit.hideTooltip(tt.aroundNode);
		tt._onDeck=null;
		if (inImmediate && tt.fadeOut) {
			tt.fadeOut.stop(true);
			dojo.style(tt.fadeOut.node, "opacity", 0);
		}
	}
};

wm.focusContainer = function(inContainer) {
	wm.onidle(function() {
		wm.forEachWidget(inContainer, function(w) {
			if (w && w.focus && (!w.canFocus || w.canFocus())) {
				w.focus();
				return false;
			}
		});
	});
}

/*
wm.isInstanceType = function(obj, type){
	try
	{
		if (!obj)
			return false;
		if (obj.instanceType)
			return obj.instanceType[type];
		else
			return (obj instanceof dojo.getObject(type));
	}
	catch(e)
	{
		console.info('failed responding to instanceType query with obj = ', obj, ' and type = ', type);
	}

	return false;
}
*/


wm.isClassInstanceType = function(inClass, type) {
    try {
        return type && inClass.prototype instanceof type;
    } catch(e) {}
    return false;
}
wm.isInstanceType = function(obj, types){
    if (types && typeof types == "object" && types.length) {
	for (var i = 0; i < types.length; i++) {
	    if (types[i] && obj instanceof types[i]) return true;
	}
	return false;
    } else {
	return types && obj instanceof types;
    }
}


wm.getWidgetByDomNode = function(element) {
        if (!element) return;
        if (dojo.isString(element))
                element = dojo.byId(element);
        if (!element) return;
        var pageName = app._page.name;
        var reg = new RegExp("^(" + pageName + "|app)_?");

        // If the node has no ID, then its a subnode of one of our widgets, find the node with the REAL ID.
        while ((!element.id || !element.id.match(reg)) && element.parentNode) element = element.parentNode;
        var id = element.id;
        if (!id) return;

        var originalId = id;
        var id = id.replace(reg,"");
        var elements = id.split(/_+/);
        var name = "";
        var widget = (originalId.match(/^app_/)) ? app : app._page;
        for (var i = 0; i < elements.length; i++) {
            if (wm.isInstanceType(widget, wm.PageDialog)) {
                widget = widget.pageContainer;
            }
                if (wm.isInstanceType(widget, wm.PageContainer) || wm.isInstanceType(widget, wm.pageContainerMixin)) {
                        widget = widget.page;
                        name = "";
                } else {
                        name += ((name) ? "_" : "") + elements[i];
                        if (wm.isInstanceType(widget, wm.Application)) {
                                if (widget[name]) {
                                        widget = widget[name];
                                        name = "";
                                }

                        } else {
                                if (widget.$[name]) {
                                        widget = widget.$[name];
                                        name = "";
                                }
                        }
                }
        }
        return widget;
}

wm.isNode = function(inObject) {
    if (window["Node"]) return inObject instanceof Node;
    if (typeof inObject == "object" && inObject) return "nodeType" in inObject && "appendChild" in inObject;
}

if (!wm.Array) wm.Array = {};

/* Side effect: alters input inArray Object.  Returns inArray Object; Return is mostly used for chaining operations together */
wm.Array.removeElementAt = function(inArray, inIndex) {
    inArray.splice(inIndex, 1);
    return inArray;
}

wm.Array.insertElementAt = function(inArray, inElement, inIndex) {
    inArray.splice(inIndex, 0, inElement);
}

/* Side effect: alters input inArray Object.  Returns inArray Object; Return is mostly used for chaining operations together */
wm.Array.removeElement = function(inArray, inElement) {
    var index = dojo.indexOf(inArray, inElement);
    if (index >= 0)
	inArray.splice(index, 1);
    return inArray;
}

wm.Array.equals = function(a, b,optionalCallback) {
    if (a == b) return true;
    if (!a || !b) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
	if (optionalCallback) {
	    if (!optionalCallback(a[i],b[i])) return false;
	} else {
	    if (a[i] != b[i]) return false;
	}
    }
    return true;
}


wm.Array.indexOf = function(inArray, inValue, inCallback) {
    for (var i = 0; i < inArray.length; i++) {
        if (inCallback(inArray[i], inValue))
            return i;
    }
    return -1;
}

wm.Array.last = function(inArray) {
    return inArray[inArray.length-1];
}

if (!wm.String) wm.String = {};
wm.String.endStringWith = function(inString, inEnd) {
    if (!inString.match(new RegExp(inEnd + "$")))
	return inString + inEnd;
    else
	return inString;
}



setCss = function(inSheetId, inCss){
	var sheet = dojo.byId(inSheetId);
	if (!sheet)
		return;
	inCss = inCss || "";
	if(sheet.styleSheet) {//IE
		// must make sure to set cssText to at least empty string or IE can crash
		if (dojo.isIE < 7)
			setIe6Css(sheet, inCss);
		else
			sheet.styleSheet.cssText = inCss;
	} else {
		sheet.firstChild && sheet.removeChild(sheet.firstChild);
		sheet.appendChild(document.createTextNode(inCss));
	}
}

// IE6 doesn't allow setting cssText so replace the style node completely
setIe6Css = function(inSheet, inCss) {
	var c = document.documentElement.firstChild, id = inSheet.id;
	c.removeChild(inSheet);
	var n = document.createElement("style");
	n.id = id;
	n.type = "text/css";
	if (n.styleSheet)
		n.styleSheet.cssText = inCss;
	else
		n.appendChild(document.createTextNode(inCss));
	c.appendChild(n);
}

/* Stupid hack to hide a conditional dojo.require package from the build system
   so that something like touchscroll doesn't get built into the core libraries -- especially
   since nonwebkit browsers break on touchscroll and its a useless library for desktop apps.
   The bulid system searches for "dojo.require", by using dojo["require"] the
   build system ignores this and doesn't try to add this package into the layer.
 */
wm.conditionalRequire = function(packageName, condition) {
    if (arguments.length == 1 || condition)
	dojo["require"](packageName);
}


wm.getBackgroundStyle = function(startColor, endColor, colorStop, direction, browser) {
    if (!browser) {
	if (dojo.isWebKit) {
	    browser = "webkit";
	} else if (dojo.isMoz) {
	    browser = "moz";
	} else if (dojo.isOpera) {
	    browser = "opera";
	} else if (dojo.isIE < 10) {
	    browser = "ieold";
	} else if (dojo.isIE >= 10) {
	    browser = "ie10";
	}
    }
    var result = "-linear-gradient(" + (direction == "vertical" ? "top" : "left") + ", " + startColor + " 0%," + endColor + " " + colorStop + "%," + endColor + " 100%)";
	switch(browser) {
	case "webkit":
	    // return  "-webkit" + result; sadly some mobile webkit browsers don't support this
	    return "-webkit-gradient(linear, " + (direction == "vertical" ? "center top, center bottom" : "left center, right center") + ", from(" + startColor + "), color-stop(" + colorStop + "%," + endColor+"), to(" + endColor+"))";
	case "moz":
	    return  "-moz" + result;
	case "ieold":
	    return  "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + startColor + "', endColorstr='" + endColor + "',GradientType=" + (direction == "vertical" ? 0 : 1) + ")";
	case "ie10":
	    return  "-ms" + result;
	case "opera":
	    return "-o" + result;
	}


    }


 wm.getStyleFromNode = function(inNode, inStyle){
	var result = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		result = document.defaultView.getComputedStyle(inNode, "").getPropertyValue(inStyle);
	}
	else if(inNode.currentStyle){
		inStyle = inStyle.replace(/\-(\w)/g, function (ignore, dashLetter){
			return dashLetter.toUpperCase();
		});
		result = inNode.currentStyle[inStyle];
	}
	return result;
}

/* Moved to here because both DataForm and LiveForm layers need these */
wm.getParentForm = function(inWidget) {
	var w = inWidget.parent;
	var r = inWidget.getRoot();
	r = r && r.root;
	while (w && w != r) {
	    if (wm.isInstanceType(w, [wm.LiveFormBase,wm.DataForm])) {
			return w;
		}
		w = w.parent;
	}
}

wm.getFormLiveView = function(inForm) {
	var lv = inForm && inForm.findLiveVariable();
	return lv && lv.liveView;
}

wm.getFormField = function(inWidget) {
	var a = [], w = inWidget;
        while (w && !(wm.isInstanceType(w, wm.LiveForm))) {
		if (w.formField)
			a.unshift(w.formField);
		w = wm.getParentForm(w);
	}
	return a.join('.');
}

}

if(!dojo._hasResource["dojo.date"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.date"] = true;
dojo.provide("dojo.date");


dojo.getObject("date", true, dojo);

/*=====
dojo.date = {
	// summary: Date manipulation utilities
}
=====*/

dojo.date.getDaysInMonth = function(/*Date*/dateObject){
	//	summary:
	//		Returns the number of days in the month used by dateObject
	var month = dateObject.getMonth();
	var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if(month == 1 && dojo.date.isLeapYear(dateObject)){ return 29; } // Number
	return days[month]; // Number
};

dojo.date.isLeapYear = function(/*Date*/dateObject){
	//	summary:
	//		Determines if the year of the dateObject is a leap year
	//	description:
	//		Leap years are years with an additional day YYYY-02-29, where the
	//		year number is a multiple of four with the following exception: If
	//		a year is a multiple of 100, then it is only a leap year if it is
	//		also a multiple of 400. For example, 1900 was not a leap year, but
	//		2000 is one.

	var year = dateObject.getFullYear();
	return !(year%400) || (!(year%4) && !!(year%100)); // Boolean
};

// FIXME: This is not localized
dojo.date.getTimezoneName = function(/*Date*/dateObject){
	//	summary:
	//		Get the user's time zone as provided by the browser
	// dateObject:
	//		Needed because the timezone may vary with time (daylight savings)
	//	description:
	//		Try to get time zone info from toString or toLocaleString method of
	//		the Date object -- UTC offset is not a time zone.  See
	//		http://www.twinsun.com/tz/tz-link.htm Note: results may be
	//		inconsistent across browsers.

	var str = dateObject.toString(); // Start looking in toString
	var tz = ''; // The result -- return empty string if nothing found
	var match;

	// First look for something in parentheses -- fast lookup, no regex
	var pos = str.indexOf('(');
	if(pos > -1){
		tz = str.substring(++pos, str.indexOf(')'));
	}else{
		// If at first you don't succeed ...
		// If IE knows about the TZ, it appears before the year
		// Capital letters or slash before a 4-digit year
		// at the end of string
		var pat = /([A-Z\/]+) \d{4}$/;
		if((match = str.match(pat))){
			tz = match[1];
		}else{
		// Some browsers (e.g. Safari) glue the TZ on the end
		// of toLocaleString instead of putting it in toString
			str = dateObject.toLocaleString();
			// Capital letters or slash -- end of string,
			// after space
			pat = / ([A-Z\/]+)$/;
			if((match = str.match(pat))){
				tz = match[1];
			}
		}
	}

	// Make sure it doesn't somehow end up return AM or PM
	return (tz == 'AM' || tz == 'PM') ? '' : tz; // String
};

// Utility methods to do arithmetic calculations with Dates

dojo.date.compare = function(/*Date*/date1, /*Date?*/date2, /*String?*/portion){
	//	summary:
	//		Compare two date objects by date, time, or both.
	//	description:
	//  	Returns 0 if equal, positive if a > b, else negative.
	//	date1:
	//		Date object
	//	date2:
	//		Date object.  If not specified, the current Date is used.
	//	portion:
	//		A string indicating the "date" or "time" portion of a Date object.
	//		Compares both "date" and "time" by default.  One of the following:
	//		"date", "time", "datetime"

	// Extra step required in copy for IE - see #3112
	date1 = new Date(+date1);
	date2 = new Date(+(date2 || new Date()));

	if(portion == "date"){
		// Ignore times and compare dates.
		date1.setHours(0, 0, 0, 0);
		date2.setHours(0, 0, 0, 0);
	}else if(portion == "time"){
		// Ignore dates and compare times.
		date1.setFullYear(0, 0, 0);
		date2.setFullYear(0, 0, 0);
	}
	
	if(date1 > date2){ return 1; } // int
	if(date1 < date2){ return -1; } // int
	return 0; // int
};

dojo.date.add = function(/*Date*/date, /*String*/interval, /*int*/amount){
	//	summary:
	//		Add to a Date in intervals of different size, from milliseconds to years
	//	date: Date
	//		Date object to start with
	//	interval:
	//		A string representing the interval.  One of the following:
	//			"year", "month", "day", "hour", "minute", "second",
	//			"millisecond", "quarter", "week", "weekday"
	//	amount:
	//		How much to add to the date.

	var sum = new Date(+date); // convert to Number before copying to accomodate IE (#3112)
	var fixOvershoot = false;
	var property = "Date";

	switch(interval){
		case "day":
			break;
		case "weekday":
			//i18n FIXME: assumes Saturday/Sunday weekend, but this is not always true.  see dojo.cldr.supplemental

			// Divide the increment time span into weekspans plus leftover days
			// e.g., 8 days is one 5-day weekspan / and two leftover days
			// Can't have zero leftover days, so numbers divisible by 5 get
			// a days value of 5, and the remaining days make up the number of weeks
			var days, weeks;
			var mod = amount % 5;
			if(!mod){
				days = (amount > 0) ? 5 : -5;
				weeks = (amount > 0) ? ((amount-5)/5) : ((amount+5)/5);
			}else{
				days = mod;
				weeks = parseInt(amount/5);
			}
			// Get weekday value for orig date param
			var strt = date.getDay();
			// Orig date is Sat / positive incrementer
			// Jump over Sun
			var adj = 0;
			if(strt == 6 && amount > 0){
				adj = 1;
			}else if(strt == 0 && amount < 0){
			// Orig date is Sun / negative incrementer
			// Jump back over Sat
				adj = -1;
			}
			// Get weekday val for the new date
			var trgt = strt + days;
			// New date is on Sat or Sun
			if(trgt == 0 || trgt == 6){
				adj = (amount > 0) ? 2 : -2;
			}
			// Increment by number of weeks plus leftover days plus
			// weekend adjustments
			amount = (7 * weeks) + days + adj;
			break;
		case "year":
			property = "FullYear";
			// Keep increment/decrement from 2/29 out of March
			fixOvershoot = true;
			break;
		case "week":
			amount *= 7;
			break;
		case "quarter":
			// Naive quarter is just three months
			amount *= 3;
			// fallthrough...
		case "month":
			// Reset to last day of month if you overshoot
			fixOvershoot = true;
			property = "Month";
			break;
//		case "hour":
//		case "minute":
//		case "second":
//		case "millisecond":
		default:
			property = "UTC"+interval.charAt(0).toUpperCase() + interval.substring(1) + "s";
	}

	if(property){
		sum["set"+property](sum["get"+property]()+amount);
	}

	if(fixOvershoot && (sum.getDate() < date.getDate())){
		sum.setDate(0);
	}

	return sum; // Date
};

dojo.date.difference = function(/*Date*/date1, /*Date?*/date2, /*String?*/interval){
	//	summary:
	//		Get the difference in a specific unit of time (e.g., number of
	//		months, weeks, days, etc.) between two dates, rounded to the
	//		nearest integer.
	//	date1:
	//		Date object
	//	date2:
	//		Date object.  If not specified, the current Date is used.
	//	interval:
	//		A string representing the interval.  One of the following:
	//			"year", "month", "day", "hour", "minute", "second",
	//			"millisecond", "quarter", "week", "weekday"
	//		Defaults to "day".

	date2 = date2 || new Date();
	interval = interval || "day";
	var yearDiff = date2.getFullYear() - date1.getFullYear();
	var delta = 1; // Integer return value

	switch(interval){
		case "quarter":
			var m1 = date1.getMonth();
			var m2 = date2.getMonth();
			// Figure out which quarter the months are in
			var q1 = Math.floor(m1/3) + 1;
			var q2 = Math.floor(m2/3) + 1;
			// Add quarters for any year difference between the dates
			q2 += (yearDiff * 4);
			delta = q2 - q1;
			break;
		case "weekday":
			var days = Math.round(dojo.date.difference(date1, date2, "day"));
			var weeks = parseInt(dojo.date.difference(date1, date2, "week"));
			var mod = days % 7;

			// Even number of weeks
			if(mod == 0){
				days = weeks*5;
			}else{
				// Weeks plus spare change (< 7 days)
				var adj = 0;
				var aDay = date1.getDay();
				var bDay = date2.getDay();

				weeks = parseInt(days/7);
				mod = days % 7;
				// Mark the date advanced by the number of
				// round weeks (may be zero)
				var dtMark = new Date(date1);
				dtMark.setDate(dtMark.getDate()+(weeks*7));
				var dayMark = dtMark.getDay();

				// Spare change days -- 6 or less
				if(days > 0){
					switch(true){
						// Range starts on Sat
						case aDay == 6:
							adj = -1;
							break;
						// Range starts on Sun
						case aDay == 0:
							adj = 0;
							break;
						// Range ends on Sat
						case bDay == 6:
							adj = -1;
							break;
						// Range ends on Sun
						case bDay == 0:
							adj = -2;
							break;
						// Range contains weekend
						case (dayMark + mod) > 5:
							adj = -2;
					}
				}else if(days < 0){
					switch(true){
						// Range starts on Sat
						case aDay == 6:
							adj = 0;
							break;
						// Range starts on Sun
						case aDay == 0:
							adj = 1;
							break;
						// Range ends on Sat
						case bDay == 6:
							adj = 2;
							break;
						// Range ends on Sun
						case bDay == 0:
							adj = 1;
							break;
						// Range contains weekend
						case (dayMark + mod) < 0:
							adj = 2;
					}
				}
				days += adj;
				days -= (weeks*2);
			}
			delta = days;
			break;
		case "year":
			delta = yearDiff;
			break;
		case "month":
			delta = (date2.getMonth() - date1.getMonth()) + (yearDiff * 12);
			break;
		case "week":
			// Truncate instead of rounding
			// Don't use Math.floor -- value may be negative
			delta = parseInt(dojo.date.difference(date1, date2, "day")/7);
			break;
		case "day":
			delta /= 24;
			// fallthrough
		case "hour":
			delta /= 60;
			// fallthrough
		case "minute":
			delta /= 60;
			// fallthrough
		case "second":
			delta /= 1000;
			// fallthrough
		case "millisecond":
			delta *= date2.getTime() - date1.getTime();
	}

	// Round for fractional values and DST leaps
	return Math.round(delta); // Number (integer)
};

}

if(!dojo._hasResource["dojo.cldr.supplemental"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.cldr.supplemental"] = true;
dojo.provide("dojo.cldr.supplemental");



dojo.getObject("cldr.supplemental", true, dojo);

dojo.cldr.supplemental.getFirstDayOfWeek = function(/*String?*/locale){
// summary: Returns a zero-based index for first day of the week
// description:
//		Returns a zero-based index for first day of the week, as used by the local (Gregorian) calendar.
//		e.g. Sunday (returns 0), or Monday (returns 1)

	// from http://www.unicode.org/cldr/data/common/supplemental/supplementalData.xml:supplementalData/weekData/firstDay
	var firstDay = {/*default is 1=Monday*/
		mv:5,
		ae:6,af:6,bh:6,dj:6,dz:6,eg:6,er:6,et:6,iq:6,ir:6,jo:6,ke:6,kw:6,
		ly:6,ma:6,om:6,qa:6,sa:6,sd:6,so:6,sy:6,tn:6,ye:6,
		ar:0,as:0,az:0,bw:0,ca:0,cn:0,fo:0,ge:0,gl:0,gu:0,hk:0,
		il:0,'in':0,jm:0,jp:0,kg:0,kr:0,la:0,mh:0,mn:0,mo:0,mp:0,
		mt:0,nz:0,ph:0,pk:0,sg:0,th:0,tt:0,tw:0,um:0,us:0,uz:0,
		vi:0,zw:0
// variant. do not use?		gb:0,
	};

	var country = dojo.cldr.supplemental._region(locale);
	var dow = firstDay[country];
	return (dow === undefined) ? 1 : dow; /*Number*/
};

dojo.cldr.supplemental._region = function(/*String?*/locale){
	locale = dojo.i18n.normalizeLocale(locale);
	var tags = locale.split('-');
	var region = tags[1];
	if(!region){
		// IE often gives language only (#2269)
		// Arbitrary mappings of language-only locales to a country:
		region = {de:"de", en:"us", es:"es", fi:"fi", fr:"fr", he:"il", hu:"hu", it:"it",
			ja:"jp", ko:"kr", nl:"nl", pt:"br", sv:"se", zh:"cn"}[tags[0]];
	}else if(region.length == 4){
		// The ISO 3166 country code is usually in the second position, unless a
		// 4-letter script is given. See http://www.ietf.org/rfc/rfc4646.txt
		region = tags[2];
	}
	return region;
};

dojo.cldr.supplemental.getWeekend = function(/*String?*/locale){
// summary: Returns a hash containing the start and end days of the weekend
// description:
//		Returns a hash containing the start and end days of the weekend according to local custom using locale,
//		or by default in the user's locale.
//		e.g. {start:6, end:0}

	// from http://www.unicode.org/cldr/data/common/supplemental/supplementalData.xml:supplementalData/weekData/weekend{Start,End}
	var weekendStart = {/*default is 6=Saturday*/
		'in':0,
		af:4,dz:4,ir:4,om:4,sa:4,ye:4,
		ae:5,bh:5,eg:5,il:5,iq:5,jo:5,kw:5,ly:5,ma:5,qa:5,sd:5,sy:5,tn:5
	};

	var weekendEnd = {/*default is 0=Sunday*/
		af:5,dz:5,ir:5,om:5,sa:5,ye:5,
		ae:6,bh:5,eg:6,il:6,iq:6,jo:6,kw:6,ly:6,ma:6,qa:6,sd:6,sy:6,tn:6
	};

	var country = dojo.cldr.supplemental._region(locale);
	var start = weekendStart[country];
	var end = weekendEnd[country];
	if(start === undefined){start=6;}
	if(end === undefined){end=0;}
	return {start:start, end:end}; /*Object {start,end}*/
};

}

if(!dojo._hasResource["dojo.string"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.string"] = true;
dojo.provide("dojo.string");


dojo.getObject("string", true, dojo);

/*=====
dojo.string = {
	// summary: String utilities for Dojo
};
=====*/

dojo.string.rep = function(/*String*/str, /*Integer*/num){
	//	summary:
	//		Efficiently replicate a string `n` times.
	//	str:
	//		the string to replicate
	//	num:
	//		number of times to replicate the string
	
	if(num <= 0 || !str){ return ""; }
	
	var buf = [];
	for(;;){
		if(num & 1){
			buf.push(str);
		}
		if(!(num >>= 1)){ break; }
		str += str;
	}
	return buf.join("");	// String
};

dojo.string.pad = function(/*String*/text, /*Integer*/size, /*String?*/ch, /*Boolean?*/end){
	//	summary:
	//		Pad a string to guarantee that it is at least `size` length by
	//		filling with the character `ch` at either the start or end of the
	//		string. Pads at the start, by default.
	//	text:
	//		the string to pad
	//	size:
	//		length to provide padding
	//	ch:
	//		character to pad, defaults to '0'
	//	end:
	//		adds padding at the end if true, otherwise pads at start
	//	example:
	//	|	// Fill the string to length 10 with "+" characters on the right.  Yields "Dojo++++++".
	//	|	dojo.string.pad("Dojo", 10, "+", true);

	if(!ch){
		ch = '0';
	}
	var out = String(text),
		pad = dojo.string.rep(ch, Math.ceil((size - out.length) / ch.length));
	return end ? out + pad : pad + out;	// String
};

dojo.string.substitute = function(	/*String*/		template,
									/*Object|Array*/map,
									/*Function?*/	transform,
									/*Object?*/		thisObject){
	//	summary:
	//		Performs parameterized substitutions on a string. Throws an
	//		exception if any parameter is unmatched.
	//	template:
	//		a string with expressions in the form `${key}` to be replaced or
	//		`${key:format}` which specifies a format function. keys are case-sensitive.
	//	map:
	//		hash to search for substitutions
	//	transform:
	//		a function to process all parameters before substitution takes
	//		place, e.g. mylib.encodeXML
	//	thisObject:
	//		where to look for optional format function; default to the global
	//		namespace
	//	example:
	//		Substitutes two expressions in a string from an Array or Object
	//	|	// returns "File 'foo.html' is not found in directory '/temp'."
	//	|	// by providing substitution data in an Array
	//	|	dojo.string.substitute(
	//	|		"File '${0}' is not found in directory '${1}'.",
	//	|		["foo.html","/temp"]
	//	|	);
	//	|
	//	|	// also returns "File 'foo.html' is not found in directory '/temp'."
	//	|	// but provides substitution data in an Object structure.  Dotted
	//	|	// notation may be used to traverse the structure.
	//	|	dojo.string.substitute(
	//	|		"File '${name}' is not found in directory '${info.dir}'.",
	//	|		{ name: "foo.html", info: { dir: "/temp" } }
	//	|	);
	//	example:
	//		Use a transform function to modify the values:
	//	|	// returns "file 'foo.html' is not found in directory '/temp'."
	//	|	dojo.string.substitute(
	//	|		"${0} is not found in ${1}.",
	//	|		["foo.html","/temp"],
	//	|		function(str){
	//	|			// try to figure out the type
	//	|			var prefix = (str.charAt(0) == "/") ? "directory": "file";
	//	|			return prefix + " '" + str + "'";
	//	|		}
	//	|	);
	//	example:
	//		Use a formatter
	//	|	// returns "thinger -- howdy"
	//	|	dojo.string.substitute(
	//	|		"${0:postfix}", ["thinger"], null, {
	//	|			postfix: function(value, key){
	//	|				return value + " -- howdy";
	//	|			}
	//	|		}
	//	|	);

	thisObject = thisObject || dojo.global;
	transform = transform ?
		dojo.hitch(thisObject, transform) : function(v){ return v; };

	return template.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,
		function(match, key, format){
			var value = dojo.getObject(key, false, map);
			if(format){
				value = dojo.getObject(format, false, thisObject).call(thisObject, value, key);
			}
			    /* Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 
			     * WaveMaker: Added try/catch block to make localization more stable */
		        try {
			    return transform(value, key).toString();
			} catch(e) {return "";}
		}); // String
};

/*=====
dojo.string.trim = function(str){
	//	summary:
	//		Trims whitespace from both sides of the string
	//	str: String
	//		String to be trimmed
	//	returns: String
	//		Returns the trimmed string
	//	description:
	//		This version of trim() was taken from [Steven Levithan's blog](http://blog.stevenlevithan.com/archives/faster-trim-javascript).
	//		The short yet performant version of this function is dojo.trim(),
	//		which is part of Dojo base.  Uses String.prototype.trim instead, if available.
	return "";	// String
}
=====*/

dojo.string.trim = String.prototype.trim ?
	dojo.trim : // aliasing to the native function
	function(str){
		str = str.replace(/^\s+/, '');
		for(var i = str.length - 1; i >= 0; i--){
			if(/\S/.test(str.charAt(i))){
				str = str.substring(0, i + 1);
				break;
			}
		}
		return str;
	};

}

if(!dojo._hasResource["dojo.date.locale"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.date.locale"] = true;
dojo.provide("dojo.date.locale");








dojo.getObject("date.locale", true, dojo);

// Localization methods for Date.   Honor local customs using locale-dependent dojo.cldr data.


// Load the bundles containing localization information for
// names and formats

//NOTE: Everything in this module assumes Gregorian calendars.
// Other calendars will be implemented in separate modules.

(function(){
	// Format a pattern without literals
	function formatPattern(dateObject, bundle, options, pattern){
		return pattern.replace(/([a-z])\1*/ig, function(match){
			var s, pad,
				c = match.charAt(0),
				l = match.length,
				widthList = ["abbr", "wide", "narrow"];
			switch(c){
				case 'G':
					s = bundle[(l < 4) ? "eraAbbr" : "eraNames"][dateObject.getFullYear() < 0 ? 0 : 1];
					break;
				case 'y':
			    /* Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 
			     * WaveMaker: Added "Y" because our users are likely to enter it */
				case 'Y':
					s = dateObject.getFullYear();
					switch(l){
						case 1:
							break;
						case 2:
							if(!options.fullYear){
								s = String(s); s = s.substr(s.length - 2);
								break;
							}
							// fallthrough
						default:
							pad = true;
					}
					break;
				case 'Q':
				case 'q':
					s = Math.ceil((dateObject.getMonth()+1)/3);
//					switch(l){
//						case 1: case 2:
							pad = true;
//							break;
//						case 3: case 4: // unimplemented
//					}
					break;
				case 'M':
					var m = dateObject.getMonth();
					if(l<3){
						s = m+1; pad = true;
					}else{
						var propM = ["months", "format", widthList[l-3]].join("-");
						s = bundle[propM][m];
					}
					break;
				case 'w':
					var firstDay = 0;
					s = dojo.date.locale._getWeekOfYear(dateObject, firstDay); pad = true;
					break;
				case 'd':
					s = dateObject.getDate(); pad = true;
					break;
				case 'D':
					s = dojo.date.locale._getDayOfYear(dateObject); pad = true;
					break;
				case 'E':
					var d = dateObject.getDay();
					if(l<3){
						s = d+1; pad = true;
					}else{
						var propD = ["days", "format", widthList[l-3]].join("-");
						s = bundle[propD][d];
					}
					break;
				case 'a':
					var timePeriod = (dateObject.getHours() < 12) ? 'am' : 'pm';
					s = options[timePeriod] || bundle['dayPeriods-format-wide-' + timePeriod];
					break;
				case 'h':
				case 'H':
				case 'K':
				case 'k':
					var h = dateObject.getHours();
					// strange choices in the date format make it impossible to write this succinctly
					switch (c){
						case 'h': // 1-12
							s = (h % 12) || 12;
							break;
						case 'H': // 0-23
							s = h;
							break;
						case 'K': // 0-11
							s = (h % 12);
							break;
						case 'k': // 1-24
							s = h || 24;
							break;
					}
					pad = true;
					break;
				case 'm':
					s = dateObject.getMinutes(); pad = true;
					break;
				case 's':
					s = dateObject.getSeconds(); pad = true;
					break;
				case 'S':
					s = Math.round(dateObject.getMilliseconds() * Math.pow(10, l-3)); pad = true;
					break;
				case 'v': // FIXME: don't know what this is. seems to be same as z?
				case 'z':
					// We only have one timezone to offer; the one from the browser
					s = dojo.date.locale._getZone(dateObject, true, options);
					if(s){break;}
					l=4;
					// fallthrough... use GMT if tz not available
				case 'Z':
					var offset = dojo.date.locale._getZone(dateObject, false, options);
					var tz = [
						(offset<=0 ? "+" : "-"),
						dojo.string.pad(Math.floor(Math.abs(offset)/60), 2),
						dojo.string.pad(Math.abs(offset)% 60, 2)
					];
					if(l==4){
						tz.splice(0, 0, "GMT");
						tz.splice(3, 0, ":");
					}
					s = tz.join("");
					break;
//				case 'Y': case 'u': case 'W': case 'F': case 'g': case 'A': case 'e':
//					console.log(match+" modifier unimplemented");
				default:
					throw new Error("dojo.date.locale.format: invalid pattern char: "+pattern);
			}
			if(pad){ s = dojo.string.pad(s, l); }
			return s;
		});
	}

/*=====
	dojo.date.locale.__FormatOptions = function(){
	//	selector: String
	//		choice of 'time','date' (default: date and time)
	//	formatLength: String
	//		choice of long, short, medium or full (plus any custom additions).  Defaults to 'short'
	//	datePattern:String
	//		override pattern with this string
	//	timePattern:String
	//		override pattern with this string
	//	am: String
	//		override strings for am in times
	//	pm: String
	//		override strings for pm in times
	//	locale: String
	//		override the locale used to determine formatting rules
	//	fullYear: Boolean
	//		(format only) use 4 digit years whenever 2 digit years are called for
	//	strict: Boolean
	//		(parse only) strict parsing, off by default
		this.selector = selector;
		this.formatLength = formatLength;
		this.datePattern = datePattern;
		this.timePattern = timePattern;
		this.am = am;
		this.pm = pm;
		this.locale = locale;
		this.fullYear = fullYear;
		this.strict = strict;
	}
=====*/

dojo.date.locale._getZone = function(/*Date*/dateObject, /*boolean*/getName, /*dojo.date.locale.__FormatOptions?*/options){
	// summary:
	//		Returns the zone (or offset) for the given date and options.  This
	//		is broken out into a separate function so that it can be overridden
	//		by timezone-aware code.
	//
	// dateObject:
	//		the date and/or time being formatted.
	//
	// getName:
	//		Whether to return the timezone string (if true), or the offset (if false)
	//
	// options:
	//		The options being used for formatting
	if(getName){
		return dojo.date.getTimezoneName(dateObject);
	}else{
		return dateObject.getTimezoneOffset();
	}
};


dojo.date.locale.format = function(/*Date*/dateObject, /*dojo.date.locale.__FormatOptions?*/options){
	// summary:
	//		Format a Date object as a String, using locale-specific settings.
	//
	// description:
	//		Create a string from a Date object using a known localized pattern.
	//		By default, this method formats both date and time from dateObject.
	//		Formatting patterns are chosen appropriate to the locale.  Different
	//		formatting lengths may be chosen, with "full" used by default.
	//		Custom patterns may be used or registered with translations using
	//		the dojo.date.locale.addCustomFormats method.
	//		Formatting patterns are implemented using [the syntax described at
	//		unicode.org](http://www.unicode.org/reports/tr35/tr35-4.html#Date_Format_Patterns)
	//
	// dateObject:
	//		the date and/or time to be formatted.  If a time only is formatted,
	//		the values in the year, month, and day fields are irrelevant.  The
	//		opposite is true when formatting only dates.

	options = options || {};

	var locale = dojo.i18n.normalizeLocale(options.locale),
		formatLength = options.formatLength || 'short',
		bundle = dojo.date.locale._getGregorianBundle(locale),
		str = [],
		sauce = dojo.hitch(this, formatPattern, dateObject, bundle, options);
	if(options.selector == "year"){
		return _processPattern(bundle["dateFormatItem-yyyy"] || "yyyy", sauce);
	}
	var pattern;
	if(options.selector != "date"){
		pattern = options.timePattern || bundle["timeFormat-"+formatLength];
		if(pattern){str.push(_processPattern(pattern, sauce));}
	}
	if(options.selector != "time"){
		pattern = options.datePattern || bundle["dateFormat-"+formatLength];
		if(pattern){str.push(_processPattern(pattern, sauce));}
	}

	return str.length == 1 ? str[0] : bundle["dateTimeFormat-"+formatLength].replace(/\{(\d+)\}/g,
		function(match, key){ return str[key]; }); // String
};

dojo.date.locale.regexp = function(/*dojo.date.locale.__FormatOptions?*/options){
	// summary:
	//		Builds the regular needed to parse a localized date

	return dojo.date.locale._parseInfo(options).regexp; // String
};

dojo.date.locale._parseInfo = function(/*dojo.date.locale.__FormatOptions?*/options){
	options = options || {};
	var locale = dojo.i18n.normalizeLocale(options.locale),
		bundle = dojo.date.locale._getGregorianBundle(locale),
		formatLength = options.formatLength || 'short',
		datePattern = options.datePattern || bundle["dateFormat-" + formatLength],
		timePattern = options.timePattern || bundle["timeFormat-" + formatLength],
		pattern;
	if(options.selector == 'date'){
		pattern = datePattern;
	}else if(options.selector == 'time'){
		pattern = timePattern;
	}else{
		pattern = bundle["dateTimeFormat-"+formatLength].replace(/\{(\d+)\}/g,
			function(match, key){ return [timePattern, datePattern][key]; });
	}

	var tokens = [],
		re = _processPattern(pattern, dojo.hitch(this, _buildDateTimeRE, tokens, bundle, options));
	return {regexp: re, tokens: tokens, bundle: bundle};
};

dojo.date.locale.parse = function(/*String*/value, /*dojo.date.locale.__FormatOptions?*/options){
	// summary:
	//		Convert a properly formatted string to a primitive Date object,
	//		using locale-specific settings.
	//
	// description:
	//		Create a Date object from a string using a known localized pattern.
	//		By default, this method parses looking for both date and time in the string.
	//		Formatting patterns are chosen appropriate to the locale.  Different
	//		formatting lengths may be chosen, with "full" used by default.
	//		Custom patterns may be used or registered with translations using
	//		the dojo.date.locale.addCustomFormats method.
	//
	//		Formatting patterns are implemented using [the syntax described at
	//		unicode.org](http://www.unicode.org/reports/tr35/tr35-4.html#Date_Format_Patterns)
	//		When two digit years are used, a century is chosen according to a sliding
	//		window of 80 years before and 20 years after present year, for both `yy` and `yyyy` patterns.
	//		year < 100CE requires strict mode.
	//
	// value:
	//		A string representation of a date

	// remove non-printing bidi control chars from input and pattern
	var controlChars = /[\u200E\u200F\u202A\u202E]/g,
		info = dojo.date.locale._parseInfo(options),
		tokens = info.tokens, bundle = info.bundle,
		re = new RegExp("^" + info.regexp.replace(controlChars, "") + "$",
			info.strict ? "" : "i"),
		match = re.exec(value && value.replace(controlChars, ""));

	if(!match){ return null; } // null

	var widthList = ['abbr', 'wide', 'narrow'],
		result = [1970,0,1,0,0,0,0], // will get converted to a Date at the end
		amPm = "",
		valid = dojo.every(match, function(v, i){
		if(!i){return true;}
		var token=tokens[i-1];
		var l=token.length;
		switch(token.charAt(0)){
			case 'y':
				if(l != 2 && options.strict){
					//interpret year literally, so '5' would be 5 A.D.
					result[0] = v;
				}else{
					if(v<100){
						v = Number(v);
						//choose century to apply, according to a sliding window
						//of 80 years before and 20 years after present year
						var year = '' + new Date().getFullYear(),
							century = year.substring(0, 2) * 100,
							cutoff = Math.min(Number(year.substring(2, 4)) + 20, 99),
							num = (v < cutoff) ? century + v : century - 100 + v;
						result[0] = num;
					}else{
						//we expected 2 digits and got more...
						if(options.strict){
							return false;
						}
						//interpret literally, so '150' would be 150 A.D.
						//also tolerate '1950', if 'yyyy' input passed to 'yy' format
						result[0] = v;
					}
				}
				break;
			case 'M':
				if(l>2){
					var months = bundle['months-format-' + widthList[l-3]].concat();
					if(!options.strict){
						//Tolerate abbreviating period in month part
						//Case-insensitive comparison
						v = v.replace(".","").toLowerCase();
						months = dojo.map(months, function(s){ return s.replace(".","").toLowerCase(); } );
					}
					v = dojo.indexOf(months, v);
					if(v == -1){
//						console.log("dojo.date.locale.parse: Could not parse month name: '" + v + "'.");
						return false;
					}
				}else{
					v--;
				}
				result[1] = v;
				break;
			case 'E':
			case 'e':
				var days = bundle['days-format-' + widthList[l-3]].concat();
				if(!options.strict){
					//Case-insensitive comparison
					v = v.toLowerCase();
					days = dojo.map(days, function(d){return d.toLowerCase();});
				}
				v = dojo.indexOf(days, v);
				if(v == -1){
//					console.log("dojo.date.locale.parse: Could not parse weekday name: '" + v + "'.");
					return false;
				}

				//TODO: not sure what to actually do with this input,
				//in terms of setting something on the Date obj...?
				//without more context, can't affect the actual date
				//TODO: just validate?
				break;
			case 'D':
				result[1] = 0;
				// fallthrough...
			case 'd':
				result[2] = v;
				break;
			case 'a': //am/pm
				var am = options.am || bundle['dayPeriods-format-wide-am'],
					pm = options.pm || bundle['dayPeriods-format-wide-pm'];
				if(!options.strict){
					var period = /\./g;
					v = v.replace(period,'').toLowerCase();
					am = am.replace(period,'').toLowerCase();
					pm = pm.replace(period,'').toLowerCase();
				}
				if(options.strict && v != am && v != pm){
//					console.log("dojo.date.locale.parse: Could not parse am/pm part.");
					return false;
				}

				// we might not have seen the hours field yet, so store the state and apply hour change later
				amPm = (v == pm) ? 'p' : (v == am) ? 'a' : '';
				break;
			case 'K': //hour (1-24)
				if(v == 24){ v = 0; }
				// fallthrough...
			case 'h': //hour (1-12)
			case 'H': //hour (0-23)
			case 'k': //hour (0-11)
				//TODO: strict bounds checking, padding
				if(v > 23){
//					console.log("dojo.date.locale.parse: Illegal hours value");
					return false;
				}

				//in the 12-hour case, adjusting for am/pm requires the 'a' part
				//which could come before or after the hour, so we will adjust later
				result[3] = v;
				break;
			case 'm': //minutes
				result[4] = v;
				break;
			case 's': //seconds
				result[5] = v;
				break;
			case 'S': //milliseconds
				result[6] = v;
//				break;
//			case 'w':
//TODO				var firstDay = 0;
//			default:
//TODO: throw?
//				console.log("dojo.date.locale.parse: unsupported pattern char=" + token.charAt(0));
		}
		return true;
	});

	var hours = +result[3];
	if(amPm === 'p' && hours < 12){
		result[3] = hours + 12; //e.g., 3pm -> 15
	}else if(amPm === 'a' && hours == 12){
		result[3] = 0; //12am -> 0
	}

	//TODO: implement a getWeekday() method in order to test
	//validity of input strings containing 'EEE' or 'EEEE'...

	var dateObject = new Date(result[0], result[1], result[2], result[3], result[4], result[5], result[6]); // Date
	if(options.strict){
		dateObject.setFullYear(result[0]);
	}

	// Check for overflow.  The Date() constructor normalizes things like April 32nd...
	//TODO: why isn't this done for times as well?
	var allTokens = tokens.join(""),
		dateToken = allTokens.indexOf('d') != -1,
		monthToken = allTokens.indexOf('M') != -1;

	if(!valid ||
		(monthToken && dateObject.getMonth() > result[1]) ||
		(dateToken && dateObject.getDate() > result[2])){
		return null;
	}

	// Check for underflow, due to DST shifts.  See #9366
	// This assumes a 1 hour dst shift correction at midnight
	// We could compare the timezone offset after the shift and add the difference instead.
	if((monthToken && dateObject.getMonth() < result[1]) ||
		(dateToken && dateObject.getDate() < result[2])){
		dateObject = dojo.date.add(dateObject, "hour", 1);
	}

	return dateObject; // Date
};

function _processPattern(pattern, applyPattern, applyLiteral, applyAll){
	//summary: Process a pattern with literals in it

	// Break up on single quotes, treat every other one as a literal, except '' which becomes '
	var identity = function(x){return x;};
	applyPattern = applyPattern || identity;
	applyLiteral = applyLiteral || identity;
	applyAll = applyAll || identity;

	//split on single quotes (which escape literals in date format strings)
	//but preserve escaped single quotes (e.g., o''clock)
	var chunks = pattern.match(/(''|[^'])+/g),
		literal = pattern.charAt(0) == "'";

	dojo.forEach(chunks, function(chunk, i){
		if(!chunk){
			chunks[i]='';
		}else{
			chunks[i]=(literal ? applyLiteral : applyPattern)(chunk.replace(/''/g, "'"));
			literal = !literal;
		}
	});
	return applyAll(chunks.join(''));
}

function _buildDateTimeRE(tokens, bundle, options, pattern){
	pattern = dojo.regexp.escapeString(pattern);
	if(!options.strict){ pattern = pattern.replace(" a", " ?a"); } // kludge to tolerate no space before am/pm
	return pattern.replace(/([a-z])\1*/ig, function(match){
		// Build a simple regexp.  Avoid captures, which would ruin the tokens list
		var s,
			c = match.charAt(0),
			l = match.length,
			p2 = '', p3 = '';
		if(options.strict){
			if(l > 1){ p2 = '0' + '{'+(l-1)+'}'; }
			if(l > 2){ p3 = '0' + '{'+(l-2)+'}'; }
		}else{
			p2 = '0?'; p3 = '0{0,2}';
		}
		switch(c){
			case 'y':
				s = '\\d{2,4}';
				break;
			case 'M':
				s = (l>2) ? '\\S+?' : '1[0-2]|'+p2+'[1-9]';
				break;
			case 'D':
				s = '[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|'+p3+'[1-9][0-9]|'+p2+'[1-9]';
				break;
			case 'd':
				s = '3[01]|[12]\\d|'+p2+'[1-9]';
				break;
			case 'w':
				s = '[1-4][0-9]|5[0-3]|'+p2+'[1-9]';
				break;
			case 'E':
				s = '\\S+';
				break;
			case 'h': //hour (1-12)
				s = '1[0-2]|'+p2+'[1-9]';
				break;
			case 'k': //hour (0-11)
				s = '1[01]|'+p2+'\\d';
				break;
			case 'H': //hour (0-23)
				s = '1\\d|2[0-3]|'+p2+'\\d';
				break;
			case 'K': //hour (1-24)
				s = '1\\d|2[0-4]|'+p2+'[1-9]';
				break;
			case 'm':
			case 's':
				s = '[0-5]\\d';
				break;
			case 'S':
				s = '\\d{'+l+'}';
				break;
			case 'a':
				var am = options.am || bundle['dayPeriods-format-wide-am'],
					pm = options.pm || bundle['dayPeriods-format-wide-pm'];
				s = am + '|' + pm;
				if(!options.strict){
					if(am != am.toLowerCase()){ s += '|' + am.toLowerCase(); }
					if(pm != pm.toLowerCase()){ s += '|' + pm.toLowerCase(); }
					if(s.indexOf('.') != -1){ s += '|' + s.replace(/\./g, ""); }
				}
				s = s.replace(/\./g, "\\.");
				break;
			default:
			// case 'v':
			// case 'z':
			// case 'Z':
				s = ".*";
//				console.log("parse of date format, pattern=" + pattern);
		}

		if(tokens){ tokens.push(match); }

		return "(" + s + ")"; // add capture
	}).replace(/[\xa0 ]/g, "[\\s\\xa0]"); // normalize whitespace.  Need explicit handling of \xa0 for IE.
}
})();

(function(){
var _customFormats = [];
dojo.date.locale.addCustomFormats = function(/*String*/packageName, /*String*/bundleName){
	// summary:
	//		Add a reference to a bundle containing localized custom formats to be
	//		used by date/time formatting and parsing routines.
	//
	// description:
	//		The user may add custom localized formats where the bundle has properties following the
	//		same naming convention used by dojo.cldr: `dateFormat-xxxx` / `timeFormat-xxxx`
	//		The pattern string should match the format used by the CLDR.
	//		See dojo.date.locale.format() for details.
	//		The resources must be loaded by dojo.requireLocalization() prior to use

	_customFormats.push({pkg:packageName,name:bundleName});
};

dojo.date.locale._getGregorianBundle = function(/*String*/locale){
	var gregorian = {};
	dojo.forEach(_customFormats, function(desc){
		var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
		gregorian = dojo.mixin(gregorian, bundle);
	}, this);
	return gregorian; /*Object*/
};
})();

dojo.date.locale.addCustomFormats("dojo.cldr","gregorian");

dojo.date.locale.getNames = function(/*String*/item, /*String*/type, /*String?*/context, /*String?*/locale){
	// summary:
	//		Used to get localized strings from dojo.cldr for day or month names.
	//
	// item:
	//	'months' || 'days'
	// type:
	//	'wide' || 'narrow' || 'abbr' (e.g. "Monday", "Mon", or "M" respectively, in English)
	// context:
	//	'standAlone' || 'format' (default)
	// locale:
	//	override locale used to find the names

	var label,
		lookup = dojo.date.locale._getGregorianBundle(locale),
		props = [item, context, type];
	if(context == 'standAlone'){
		var key = props.join('-');
		label = lookup[key];
		// Fall back to 'format' flavor of name
		if(label[0] == 1){ label = undefined; } // kludge, in the absence of real aliasing support in dojo.cldr
	}
	props[1] = 'format';

	// return by copy so changes won't be made accidentally to the in-memory model
	return (label || lookup[props.join('-')]).concat(); /*Array*/
};

dojo.date.locale.isWeekend = function(/*Date?*/dateObject, /*String?*/locale){
	// summary:
	//	Determines if the date falls on a weekend, according to local custom.

	var weekend = dojo.cldr.supplemental.getWeekend(locale),
		day = (dateObject || new Date()).getDay();
	if(weekend.end < weekend.start){
		weekend.end += 7;
		if(day < weekend.start){ day += 7; }
	}
	return day >= weekend.start && day <= weekend.end; // Boolean
};

// These are used only by format and strftime.  Do they need to be public?  Which module should they go in?

dojo.date.locale._getDayOfYear = function(/*Date*/dateObject){
	// summary: gets the day of the year as represented by dateObject
	return dojo.date.difference(new Date(dateObject.getFullYear(), 0, 1, dateObject.getHours()), dateObject) + 1; // Number
};

dojo.date.locale._getWeekOfYear = function(/*Date*/dateObject, /*Number*/firstDayOfWeek){
	if(arguments.length == 1){ firstDayOfWeek = 0; } // Sunday

	var firstDayOfYear = new Date(dateObject.getFullYear(), 0, 1).getDay(),
		adj = (firstDayOfYear - firstDayOfWeek + 7) % 7,
		week = Math.floor((dojo.date.locale._getDayOfYear(dateObject) + adj - 1) / 7);

	// if year starts on the specified day, start counting weeks at 1
	if(firstDayOfYear == firstDayOfWeek){ week++; }

	return week; // Number
};

}

if(!dojo._hasResource['wm.base.lib.date']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['wm.base.lib.date'] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide('wm.base.lib.date');


wm.setTimeZoneOffset = function() {
    wm.timezoneOffset = new Date().getTimezoneOffset()/60 + wm.serverTimeOffset/(1000*60*60); // hours offset
    if (isNaN(wm.timezoneOffset))
	wm.timezoneOffset = 0;
}
if (wm.serverTimeOffset !== undefined) wm.setTimeZoneOffset();


wm.convertValueToDate = function(inValue, inParams) {
    if (inValue instanceof Date) return inValue;
	var v = inValue, s = inParams || {selector: "date"};
	if (!v && v !== 0)
	{
		return null;
	}
        else if (Number(v) || typeof(v) == "number")
	{
		return new Date(Number(v));
	}
	else if (dojo.trim(v.toLowerCase()).indexOf('today') != -1)
	{
		// this block handles cases were user might enter:
		// v = today
		// v = today + 20
		// v = 20 + today
		// case and spaces does not matter.
		if (v.indexOf('+') != -1)
		{
			var range = v.toLowerCase().split('+');
			try
			{
				var date1 = dojo.trim(range[0]);
				var date2 = dojo.trim(range[1]);
				if (date1 == 'today')
				{
					v = dojo.date.add(new Date(),"day",date2*1);
				}
				else
				{
					v = dojo.date.add(new Date(),"day",date1*1);
				}

			}
			catch (e)
			{
				// do nothing and later we will pass default today's date.
			}
		}
		else
		{
			v = new Date();
		}

		return v;
	}

	return v != Number(v) ? dojo.date.locale.parse(v, s) : new Date(Number(v));
}

}

if(!dojo._hasResource['wm.base.lib.types']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['wm.base.lib.types'] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide('wm.base.lib.types');

wm.typeManager = {
	types: {},
	initialized: false,
    initTypes: function() {
        if (wm.types && wm.types.types) {
            wm.typeManager.setTypes(wm.types.types);
        } else {
            this.addDefaultTypes();
        }
    },
    setTypes: function(inTypes) {
        this.clearTypes();
        if (inTypes) {

            /* Handle special types that the server fails to fully define for us */
            wm.forEachProperty(inTypes, function(inTypeDef, inName) {
                var matches = inName.match(/\<(.*),(.*)\>/);
                if (matches) {
                    inTypeDef.isList = true;
                    inTypeDef.isHashMap = true;
                    inTypeDef.fields = {
                        name: {
                            include: ["read"],
                            isList: false,
                            type: matches[1]
                        },
                        dataValue: {
                            isList: false,
                            type: matches[2]
                        }
                    };
                }
            });
            dojo.mixin(this.types, inTypes);
        }
        this.addDefaultTypes();

    },

	clearTypes: function() {
		this._publicTypes = {};
	        if (wm.dataSources) {
	            wm.dataSources.clearSources();
		}
		// clear all non-user types
		for (var i in this.types) {
			if (!this.types[i].userType)
				delete this.types[i];
		}
	},
        getPrimaryKey: function(inType) {
	    if (!inType || !inType.fields) return "";
	    for (var fieldName in inType.fields) {
		if (inType.fields[fieldName].include.length)
		    return fieldName;
	    }
	},
	getPrimitiveType: function(inTypeName) {
		return (this.types[inTypeName] || 0).primitiveType;
	},
	isStructuredType: function(inTypeName) {
		return this.types[inTypeName] && !this.getPrimitiveType(inTypeName);
	},
	getService: function(inTypeName) {
		var t = this.types[inTypeName];
		return (t && t.service);
	},
	getLiveService: function(inTypeName) {
		var t = this.types[inTypeName];
		return (t && t.liveService && t.service);
	},
	generatePublicTypes: function() {
		var types = {};
		for (var i in this.types)
			if (this.isPublicType(i))
				types[i] = this.types[i];
		return types;
	},
	getPublicTypes: function() {
		return wm.isEmpty(this._publicTypes) ?
			this._publicTypes = this.generatePublicTypes() : this._publicTypes;
	},
	getLiveServiceTypes: function() {
		var types = this.getPublicTypes(), liveServiceTypes = {};
		for (var i in types)
			if (this.getLiveService(i))
				liveServiceTypes[i] = types[i];
		return liveServiceTypes;
	},
	isPublicType: function(inTypeName) {
		var t = this.types[inTypeName];
		return (t && !t.internal && !t.primitiveType);
	},
	getTypeSchema: function(inTypeName) {
		return (this.types[inTypeName] || 0).fields;
	},
	getType: function(inTypeName) {
		return this.types[inTypeName];
	},
	isType: function(inTypeName) {
		return Boolean(this.getType(inTypeName));
	},
	typeHasField: function(inTypeName, inFieldName) {
	   var typeDef = this.types[inTypeName];
	   if (!typeDef) return false;
	   var fieldNames = inFieldName.split(/\./);
	   for (var i = 0; i < fieldNames.length; i++) {
	       var fieldDef = typeDef.fields[fieldNames[i]];
	       if (!fieldDef) return false;
	       if (i + 1 < fieldNames.length) {
	           typeDef = this.types[fieldDef.type];
	           if (!typeDef) return false;
	       }
	   }	
	   return true;
	},
	getPropertyInfoFromSchema: function(inTypeSchema, inPropName) {
		var
			s = inTypeSchema,
			parts = dojo.isString(inPropName) ? inPropName.split(".") : inPropName,
			p = parts.shift(),
			f = s[p];
		if (!parts.length)
			return f;
		else {
			var
				t = (f || 0).type,
				ts = this.getTypeSchema(t);
			if (ts)
				return this.getPropertyInfoFromSchema(ts, parts);
		}
	},

	getFilteredPropNames: function(inTypeSchema, inFilterFunc) {
		var ts = [], u = [], t, hasFilter = dojo.isFunction(inFilterFunc);
		wm.forEach(inTypeSchema, function(o, i) {
			if (!hasFilter || inFilterFunc(o)) {
				var elem = {};
				elem.info = o;
				elem.name = i;
				ts.push(elem);
			}
		});

		ts.sort(function(a, b) {
			return (a.info.fieldOrder - b.info.fieldOrder);
		});
		for (i=0; (ti=ts[i]); i++) {
			u.push(ti.name);
		}

		return u;
	},
	getSimplePropNames: function(inTypeSchema) {
		return this.getFilteredPropNames(inTypeSchema, function(p) {
			return !wm.typeManager.isStructuredType((p || 0).type);
		});
	},
    

    getFieldList: function(inTypeSchema, inPath, maxDepth) {
        if (typeof inTypeSchema == "string") inTypeSchema = this.getType(inTypeSchema).fields;

        var result = [];
        for (var i in inTypeSchema) {
            if (wm.typeManager.isStructuredType(inTypeSchema[i].type)) {
                if (!inTypeSchema[i].isList &&  !wm.isListType(inTypeSchema[i].type) && (maxDepth === undefined || maxDepth >= 0)) {
                    result = result.concat(this.getFieldList(inTypeSchema[i].type, inPath ? inPath + "." + i : i, maxDepth === undefined ? undefined : maxDepth-1));
                }
            } else {
                result.push({
                    dataIndex: (inPath ? inPath + "." : "") + i,
                    caption: wm.capitalize(i),
                    displayType: wm.capitalize(inTypeSchema[i].type)
                });
            }
        }
        return result;
    },
        getStructuredPropNames: function(inTypeSchema, includeIsList) {
		return this.getFilteredPropNames(inTypeSchema, function(p) {
			return wm.typeManager.isStructuredType((p || 0).type) || includeIsList && p.isList;
		});
	},
	getPropNames: function(inTypeSchema, inStructured) {
		var
			u = this.getSimplePropNames(inTypeSchema),
			s = inStructured ? this.getStructuredPropNames(inTypeSchema) : [];
		return u.concat(s);
	},
	// returns an array of each property part ordered in schema
	getPropertyOrder: function(inType, inPropName) {
		var
			o = [],
			parts = dojo.isString(inPropName) ? inPropName.split(".") : inPropName,
			p = parts.shift(),
			schema = this.getTypeSchema(inType),
			propertyArray = this.getPropNames(schema, true);
		var c, l = propertyArray.length;
		// find property in array
		for (var i=0, n; (n = propertyArray[i]); i++)
			if (p == n) {
				c = i;
				break;
			}
		o.push(c !== undefined ? c : l);
		var
			f = schema && schema[p],
			t = (f || 0).type;
		// if no properties to descend to, return array of indices
		if (!parts.length || !t)
			return o;
		// otherwise recurse
		else
			return o.concat(this.getPropertyOrder(t, parts));
	},
	hasStructuredType: function(inTypeName, inCondition) {
		var s = this.getTypeSchema(inTypeName), p, c = dojo.isFunction(inCondition) && inCondition;
		for (var i in s) {
			p = s[i];
			if (this.isStructuredType(p.type))
				if (c) {
					if (c(p))
						return true;
				} else
					return true;
		}
	},
	// these types can be added indepenedent of server types
	addType: function(inName, inTypeInfo) {
		if (!inTypeInfo || wm.isEmpty(inTypeInfo))
			return;
		inTypeInfo.userType = true;
		this.types[inName] = inTypeInfo;
		if (this.isPublicType(inName) && !wm.isEmpty(this._publicTypes))
			this._publicTypes[inName] = inTypeInfo;
	},
	removeType: function(inName) {
	   if (this._publicTypes) {
	       delete this._publicTypes[inName];
	   }	   
        delete this.types[inName];
	},
	addDefaultTypes: function() {
	    if (!this.initialized) {
		this.initialized = true;
		var d = wm.defaultTypes || {};
		for (var i in d)
			this.addType(i, d[i]);
	    }
	},
	isPropInList: function(inTypeSchema, inPropName) {
		var
			s = inTypeSchema,
			parts = dojo.isString(inPropName) ? inPropName.split(".") : inPropName,
			p = parts.shift(),
			f = s[p];
		if (!f)
			return false;
		else if (f.isList)
			return true;
		else if (parts.length) {
			var
				t = (f || 0).type,
				ts = this.getTypeSchema(t);
			if (ts)
				return this.isPropInList(ts, parts);
		}
	},
    getDisplayField: function(inType) {
	    var typeDef = wm.typeManager.getType(inType);
	    if (!typeDef) return "";
	    var fields = typeDef.fields;
	    var stringFields = {};
	    var literalFields = {};
	    for (fieldName in fields) {
		var field = fields[fieldName];
		if (!field.exclude || field.exclude.length == 0) {
		    if (field.type == "java.lang.String" || field.type == "StringData") {
			stringFields[fieldName] = field;
		    } else if (!wm.typeManager.isStructuredType(field.type)) {
			literalFields[fieldName] = field;
		    }
		}
	    }

	    for (var fieldName in stringFields) {
		var lowestFieldOrder = 100000;
		var lowestFieldName;
		if (!dojo.isFunction(stringFields[fieldName])) { // ace damned changes to object prototype
		    if (stringFields[fieldName].fieldOrder === undefined && !lowestFieldName) {
			lowestFieldName = fieldName;
		    }
		    else if (stringFields[fieldName].fieldOrder !== undefined &&
			stringFields[fieldName].fieldOrder < lowestFieldOrder)
		    {
			lowestFieldOrder = stringFields[fieldName].fieldOrder;
			lowestFieldName = fieldName;
		    }
		}
	    }
	    if (lowestFieldName) {
		return lowestFieldName;
	    }


	    for (var fieldName in literalFields) {
		var lowestFieldOrder = 100000;
		var lowestFieldName;
		if (!dojo.isFunction(literalFields[fieldName])) { // ace damned changes to object prototype
		    if (literalFields[fieldName].fieldOrder === undefined && !lowestFieldName) {
			lowestFieldName = fieldName;
		    }
		    else if (literalFields[fieldName].fieldOrder !== undefined &&
			     literalFields[fieldName].fieldOrder < lowestFieldOrder) {
			lowestFieldOrder = literalFields[fieldName].fieldOrder;
			lowestFieldName = fieldName;
		    }
		}
	    }
	    if (lowestFieldName) {
		return lowestFieldName;
	    }
	    for (fieldName in fields) {
		return fieldName;
	    }
    }

};

wm.defaultTypes = {
	NumberData: {
		fields: {
			dataValue: {type: "Number"}
		}
	},
	BooleanData: {
		fields: {
			dataValue: {type: "Boolean"}
		}
	},
	StringData: {
		fields: {
			dataValue: {type: "String"}
		}
	},
	DateData: {
		fields: {
			dataValue: {type: "Date"}
		}
	},
	EntryData: {
		fields: {
			name: {type: "string"},
		    dataValue: {type: "any",
				"include": ["delete","read","update","insert"]}
		}
	},
	AnyData: {
		fields: {
			dataValue: {type: "any"}
		}
	}
};
/*AnyData: {value: {type: "Any", isList: false, isObject: false}},
StringData: {stringValue: {type: "String", isList: false, isObject: false}},
NumericData: {numericValue: {type: "Number", isList: false, isObject: false}},
ListData: {listValue: {type: "Any", isList: true, isObject: false}}
*/
//wm.types = {};
//wm.primitives = {};

wm.isListType = function(inTypeName) {
	return inTypeName && (inTypeName.charAt(0) == "[" || inTypeName.match(/\<.*,.*\>/));
}
wm.isHashMapType = function(inTypeName) {
    var typeDef = wm.typeManager.getType(inTypeName);
    return typeDef && typeDef.isHashMap;
}
// use forceList to optionally force friendly type to show list.
wm.getFriendlyTypeName = function(inType, inForceList) {
	inType = inType || "(any)";
	var
		s = wm.typeManager.getService(inType),
		isList = wm.isListType(inType),
		t = s && !inType.match(/\</) ? [s, inType.split(".").pop()].join('.') : inType;
	 if (!wm.isHashMapType(inType)) {
        if (isList)
    		t = t.slice(0,-1);
    	if (inForceList || isList)
    		t = t + " list";
    }
	return t;
}

wm.getPrimitiveDisplayType = function(inPrimitiveName) {
	var t = wm.typeManager.getPrimitiveType(inPrimitiveName);
	if (t == "Boolean")
		t = "CheckBox";
	if (!t || t == "String")
		t = "Text";
	return t;
}

wm.getDisplayType = function(propInfo) { //xxx
	var t;
	var subType = propInfo.fieldSubType;
	if (subType != undefined && subType != null && subType.length > 0) {
		if (subType == "picklist")
			t = "Select";
		else if (subType == "textarea")
			t = "LargeTextArea";
		else if (subType == "boolean")
			t = "CheckBox";
		else if (subType == "date")
			t = "Date";
		else if (subType == "datetime")
			t = "Time";
		else if (subType == "currency")
			t = "Currency";
		else
			t = "Text";
	} else {
		t = wm.getPrimitiveDisplayType(propInfo.type);
	}

	return t;
}

}

if(!dojo._hasResource['wm.base.lib.data']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['wm.base.lib.data'] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide('wm.base.lib.data');

wm.data = wm.data || {};

dojo.mixin(wm.data, {
	// returns fields that should be included for type
	getIncludeFields: function(inTypeName) {
		var
			pi, fields=[],
			schema = wm.typeManager.getTypeSchema(inTypeName);
		for (var i in schema) {
			pi = schema[i];
			if (pi.include && pi.include.length) {
				// composite key
				if (wm.typeManager.isStructuredType(pi.type)) {
					var compSchema = wm.typeManager.getTypeSchema(pi.type);
					for (var j in compSchema)
						fields.push(i + "." + j);
				} else
					fields.push(i);
			}
		}
		return fields;
	},
	// Reports if given data of type has include data.
	// This is equivalent to having primary key information
	// that is necessary for initiating update and delete operations.
	// By default related structured types are not checked for include data
	// That information is typically not required for update / delete operations.
	hasIncludeData: function(inTypeName, inData) {
		if (!inData || wm.isEmpty(inData))
			return false;
		var fields = this.getIncludeFields(inTypeName);
		for (var i=0, f; f=fields[i]; i++)
			if (dojo.getObject(f, false, inData) === undefined)
				return;
		return true;
	},
	// Reports if given data of type contains necessary contents
	// to perform given operation. 
	hasOperationData: function(inOperation, inTypeName, inData) {
		if (!wm.typeManager.getLiveService(inTypeName))
			return false;
		switch(inOperation) {
			// read ok if we provide no data or we have necessary root include data
			case "read":
				return !inData || wm.data.hasIncludeData(inTypeName, inData);
			// root include data is required for delete and update
			case "delete":
			case "update":
				return wm.data.hasIncludeData(inTypeName, inData);
			// for insert all required root and provided related required data is necessary
			case "insert":
				return wm.data.hasRequiredData(inOperation, inTypeName, inData, true);
		}
	},
	// Reports if given data of type contains all required data
	// This info is helpful for determining if there's enough data to perform an insert operation
	// In this case we want to check structured related data also.
	// Operation and the structured data flag are provided for additional flexibility...
	hasRequiredData: function(inOperation, inTypeName, inData, inCheckStructured) {
		var schema = wm.typeManager.getTypeSchema(inTypeName),
			s, d, isStructured, hasData, missingRequired, hasExcluded;
		for (var i in schema) {
			s = schema[i];
			isStructured = wm.typeManager.isStructuredType(s.type);
			d = inData && inData[i];
			// check structured type
			if (isStructured && inCheckStructured) {
				if ((d || s.required) && !s.isList && !this.hasRequiredData(s.type, d, inCheckStructured))
					return false;
			} else {
				hasData = (d !== undefined);
				missingRequired = s.required && !hasData;
				// return false if we have excluded data or missing required data.
				if (dojo.indexOf(s.exclude, inOperation) != -1 ? hasData : missingRequired)
					return false;
			}
		}
		return true;
	},
	// binding
	clearBinding: function(inObject, inTargetProperty) {
		var w = wm.data.getPropWire(inObject, inTargetProperty);
		if (w) {
			var b = w.owner, target = w.target, tp = w.targetProperty;
			// note: removing wire may have side-effects so reset value with care after removing.
			if (b)
				b.removeWire(w.getWireId());
			// reset value here.
			if (target && tp)
				target.setValue(tp, "");
		}
	},
	getPropWire: function(inTargetObject, inTargetProperty) {
		var
			tp = inTargetProperty,
			tobj = inTargetObject,
			binding = tobj && tobj.$.binding,
			// Note: target bindings are stored in wires hash by targetProperty
			// source bindings has targetId appended so they will be ignored below
			w = binding && binding.wires[tp];
		// if there's a target binding, return it
		if (w)
			return w;
		// FIXME: design check...
		var ownerApp = tobj && tobj.isDesignLoaded() ? studio.application : app;
		// otherwise, if the object is owned by the application try to return a source binding.
		if (tobj && tobj.isOwnedBy(ownerApp))
			return wm.data.findSourceWire((tobj||0).getId(), tp);
	},
	findSourceWire: function(inTargetId, inProp) {
		if (inTargetId) {
			var c, o, id, wires, w;
			// search all components, wee...
			for (var i in wm.Component.byId) {
				c = wm.Component.byId[i];
				// FIXME: design check...
				if ((c instanceof wm.Binding) && (c.isDesignLoaded() || !(window.studio && window.studio._isWaveMakerStudio))) {
					var wires = c.findWiresByProps({targetId: inTargetId, targetProperty: inProp});
					if (wires.length)
						return wires[0];
				}
			}
		}
	},
	// FIXME: deprecated
	/*getPropertyBindWire: function(inBinding, inTargetProperty) {
		var wires = inBinding.wires, w;
		for (var i in wires) {
			w = wires[i];
			if (w.targetProperty == inTargetProperty)
				return w;
		}
	},*/
	getPropBindSource: function(inTargetObject, inTargetProperty) {
		var w = wm.data.getPropWire(inTargetObject, inTargetProperty);
		if (w)
			return inTargetObject.getValueById(w.source);
	},
	// a simple comparator
	compare: function(a, b) {
		return a === b ? 0 :
			a === undefined ? -1 :
			b === undefined ? 1 :
			b === null ? 1 :
			a > b ? 1 :
			-1;
	},

    compareNumbers: function(a, b) {
	var na = wm.isNumber(a), nb = wm.isNumber(b);
	return na && nb ? a - b : (na ? -1 : (nb ? 1 : 0));
    }

});

}

if(!dojo._hasResource["wm.base.data.expression"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.data.expression"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.data.expression");

/**
	@class
	Static API for handling data expressions.
	Data expressions are strings can contain valid JavaScript and
	special macros.
	Macros are expanded via preprocessing, and use this syntax:
	<pre class="code">${&lt;id&gt;}</pre>
	&lt;id&gt; supports dot notation, e.g. ${address.name.lastName}.<br/>
	<br/>
	<b>Example:</b>
	<pre class="code">
"Half of " + ${editor1.dataValue} + " is " + ${editor1.dataValue}/2.

<i>// Macros are replaced with quoted JSON and should not be inside of literal strings</i>
"${lastName}, ${firstName}" <i>// bad</i>
${lastName} + ", " + ${firstName} <i>// good</i>
</pre>
*/
wm.expression = {
	/**
		Evaluate expression with given namespace root.
		@param {String} inExpression Valid javascript that is evaluated in global scope. The expression can contain 
			macros.
		@param {String} inRoot The root object under which id macros are evaluated.
		@example 
var exp = '"Half of " + ${editor1.dataValue} + " is " + ${editor1.dataValue}/2.';
wm.expression.getValue(exp, app.main);
	*/
       getValue: function(inExpression, inRoot, inOwner) {
	   var v = wm.expression._getText(inExpression, inRoot);
	   var result = "";
	   try {
	       var f  = function() {	
		   result = eval(v);	
	       }.call(inOwner);
	   } catch(e){}
	   return result;
	   //return wm.evalJs(v,inRoot);
	},
	getSources: function(inExpression) {
		var re = wm.expression._getSourceRegEx

		re.lastIndex = 0;
		var sources = (inExpression || "").match(re, "g") || [];
		for (var i = 0; i < sources.length; i++) {
		  sources[i] = sources[i].substring(2,sources[i].length-1);
		}
		return sources;
	/*
		var m, sources=[];
		while((m = re.exec(inExpression)) != null) {
		  sources.push(m[1]);
		  var mList = m[1].split(".");
		  mList.pop();
		  while(mList.length > 1) {
		    sources.push(mList.join("."));
		    mList.pop();
		  }
		}
		return sources;
		*/
	},
	_getText: function(inExpression, inRoot) {
		//return inExpression.replace(wm.expression._getSourceRegEx(), function(){
		return inExpression.replace(wm.expression._getSourceRegEx, function(){
			try {
			    var inSource = arguments[1];
			    if (inSource.match(/^\[.*\]/)) {
				var matches = inSource.match(/^\[(.*?)\]/);
				inSource = inSource.replace(/^\[(.*?)\]\./, "");
				var root = wm.Page.getPage(matches[1]);
				var v = root ? root.getValue(inSource) : "";
			    } else if (inRoot.getValue){
				var v = inRoot.getValue(inSource);
			    }
			    else if (inSource.indexOf('.') != -1){
					var arr = inSource.split('.');
					var v = inRoot;		
					dojo.forEach(arr, function(prop){
					    if (v != null)
						v = v[prop];
					});
				} else {
				    var v = inRoot[inSource];
				}
				// objects cannot be returned directly since they are eval'd.
				if (v instanceof wm.Component) {
				    return v.getRuntimeId();
				} else if (v instanceof wm.Object || v === undefined)
					v = "";
				
			    if (v instanceof Date)
				return "new Date(" + v.getTime() + ")";
			    else
				return dojo.toJson(v);
			} catch(e) {}
		});
	},
	_getSourceRegEx: new RegExp(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g)
	//_getSourceRegEx: function() {
	//	return new RegExp(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g);
	//}
}

}

if(!dojo._hasResource["wm.base.Object"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.Object"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.Object");


/**
	Base class that supports property inspection and binding.
	<br/><br/>
	Almost all objects in WaveMaker are instances of <i>wm.Object</i>.
	In particular, all Components and Widgets descend from <i>wm.Object</i>
	<br/><br/>
	<i>wm.Object</i> supports a generalized property system: in order to
	access or modify properties on a <i>wm.Object</i> use the
	<a href="#getValue">getValue</a>/<a href="#setValue">setValue</a> API.
	<br/><br/>
	<a href="#getValue">getValue</a> takes the name of the property to examine.
	<a href="#setValue">setValue</a> takes
	the name of the property and the value to set.
	<a href="#getValue">getValue</a>/<a href="#setValue">setValue</a> support dot notation.
	<br/><br/>
	For all objects that descend from <i>wm.Object</i>.use the
	<a href="#getValue">getValue</a>/<a href="#setValue">setValue</a>
	API to access documented properties
	<br/><br/>
	Examples
	@example
	// To examine the name of a Component
	var n = this.myComponent.getValue("name");
	<br/>
	// To change the name of the Component
	this.myComponent.setValue("name", "newName");
	<br/>
	//"panel1" contains an object named "label1"
	this.panel1.setValue("label1.caption", "hello world");

	@name wm.Object
	@class
*/
dojo.declare("wm.Object", null, {
	/** @lends wm.Object.prototype */
	// hey ma, no props!
	//===========================================================================
	// Construction
	//===========================================================================
	constructor: function() {
		this.type = this.declaredClass;
	},
	/**
		Returns a string identifier (primarily for debugging).
	*/
	toString: function() {
		return '[' + this.declaredClass + ']';
	},
	//===========================================================================
	// Properties
	//===========================================================================
	/** @private */
	getProp: function(inPropertyName) {
		var g = this._getPropWorker(this, inPropertyName, "get");
		if (g)
			return g.call(this, inPropertyName);
		else
			return this._getProp(inPropertyName);
	},
	_getProp: function(inProp) {
		return this[inProp];
	},
	/** @private */
	setProp: function(inProp, inValue) {
		if (this.isDestroyed)
			return;
		var s = this._getPropWorker(this, inProp, "set");
		if (s)
			s.call(this, inValue);
		else
			this._setProp(inProp, inValue);
		this.valueChanged(inProp, this.getProp(inProp));
	},
	_setProp: function(inProp, inValue) {
		if (inProp in this)
			this[inProp] = inValue;
	},
	_getPropWorker: function(inObj, inProp, inPrefix) {
		//if (inProp=="dataValue" || inProp=="value")
		//	return null;
	    if (inProp == "value") return null;
		var w = inObj._isDesignLoaded && inObj[inPrefix + "_" + inProp] || this[inPrefix + inProp.slice(0, 1).toUpperCase() + inProp.slice(1)];
		if (dojo.isFunction(w))
			return w;
	},
	//===========================================================================
	// Values
	//===========================================================================
	/** @private */
	valueChanged: function(inProp, inValue) {
	},
	_getValue: function(inProp) {
		// private API for getting a named value/property
		// for Object, values are props
		return this.getProp(inProp);
	},
	_setValue: function(inProp, inValue) {
		// private API for setting a named value/property
		// for Object, values are props
		this.setProp(inProp, inValue);
	},
	/**
		Get the value of a named property.

		Supports dot notation, e.g.
		@example this.getValue("customer.name.first")

		@param {String} inName Name of property

		@see <a href="#setValue">setValue</a>
	*/
	getValue: function(inName) {
		// public API for getting a named value/property using dot-notation
		// all *actual* getting is delegated, we only manage dots here
		// inProp is like "foo.bar.baz" or ["foo", "bar", "baz"]
		if (!inName)
			return;

		// Replace all [\d+] with .[\d+] so that split will work properly and separate out array index substrings
	    var parts = dojo.isString(inName) ? inName.replace(/([^\.])\[/g, "$1.[").split('.') : inName;

	    // if we get something stupid like "studio.wip.widgetname" thats not going to be resolvable by this object as this object won't
	    // know what studio is.  window does know what studio is...
	    var o = (parts[0] == "studio" && this instanceof wm.Application) ? window : this;
	    var p;
		while (parts.length > 1) {
			p = parts.shift();
			var pmatch;
			// replace ${myVar[5]} with ${myVar.[5]}
			if (this instanceof wm.Variable || this instanceof Array) {
			  pmatch =  p.match(/^\[(\d+)\]$/);
		        }
			if (pmatch && this instanceof wm.Variable)
			  o = o.getItem(pmatch[1]);
			else if (pmatch && this instanceof Array)
			  o = o[pmatch1];
			else
			  o = o.getValue ? o.getValue(p) : o[p];
			if (!o) {
				wm.logging && console.debug(this, "notice: Object.getValue: couldn't marshall property ", p, " for ", inName);
				return;
			}
			if (o.getValue)
				return o.getValue(parts);
		}
		p = parts.shift();
		return o._getValue ? o._getValue(p) : o[p];
	},
	/**
		Set the value of a named property.
		Using this method to set properties is <b>required</b> to support binding.

		Supports dot notation, e.g.
		@example this.setValue("customer.name.first", "Harry")

		@param {String} inName Name of property
		@param {Any} inValue Value to set on property

		@see <a href="#setValue">getValue</a>
	*/
	setValue: function(inName, inValue) {
		// public API for setting a named value/property using dot-notation
		// all *actual* setting is delegated, we only manage dots here
		// inProp is like "foo.bar.baz" or ["foo", "bar", "baz"]
		var parts = dojo.isString(inName) ? inName.split('.') : inName, o=this, p;
		while (parts.length > 1) {
			o = o.getValue(parts.shift());
			// it's possible this value is not yet settable
			if (!o)
				return;
			if (o instanceof wm.Object)
				return o.setValue(parts, inValue);
		}
		p = parts.shift();
		o._setValue ? o._setValue(p, inValue) : o[p] = inValue;
	}
});

//===========================================================================
// Class Properties
//===========================================================================
/** @lends wm.Object */
dojo.mixin(wm.Object, {
	/**
		@private
		Object metadata (aka "schema") is stored using function prototypes
		(aka classes) to take advantage of built-in copy-on-write
		prototype chaining.
		Schema class is stored in a class-property called "schemaClass",
		and an instance of it is made available in the related class prototype
		as "schema".
	*/
	//FIXME: have I confused myself into using a overly complex mechanism?
	makeSchema: function(inClass) {
		//console.info("makeSchema:", inClass.prototype);
		// make an empty function so we get a prototype
		inClass.schemaClass = function(){};
		var superClass = inClass.superclass;
		try{
			if (inClass._meta.parents && inClass._meta.parents.length > 1){
				superClass = inClass._meta.parents[0].prototype;
			}
		}
		catch(e){
			// do nothing.
		}

		// if we have a superclass, chain to it's schema
		if (superClass) {
			var ctor = this.getSchemaClass(superClass.constructor);
			inClass.schemaClass.prototype = new ctor();
		}
		inClass.prototype.schema = new inClass.schemaClass();
		return inClass.schemaClass;
	},
	/** @private */
	// Get the schema class for class inClass. Manufacture the schema class if necessary.
	getSchemaClass: function(inClass) {
		return inClass.schemaClass || wm.Object.makeSchema(inClass);
	},
	/**
		Add entries to a class schema.
		Note that "inClass" is a class (function), not a class-name (string).

		@param {Function} inClass Add schema entries to this class.
		@param {Object} inSchema Schema entries in object notation.

		@example
wm.Object.extendSchema(wm.MyButton, {
	confirmPrompt: { writeonly: 1} // configure flags for confirmPrompt property
});
	*/
    extendSchema: function(inClass, inSchema, skipDictionary) {
	if (!skipDictionary && inSchema) {
	    var className = inClass.prototype.declaredClass;
	    if (wm.extendSchemaDictionary) {
		var dictionary = wm.extendSchemaDictionary[className];
		if (dictionary) {
		    for (var i in dictionary) {
			if (inSchema[i]) {
			    inSchema[i].shortname = dictionary[i];
			} else {
			    inSchema[i] = {shortname: dictionary[i]};
			}
		    }
		}
	    }
	}

	/* This block of code allows the superclass to define the schema and the subclass to modify the schema instead of clobbering the schema.
	 * The only thing that isn't modified is the ignore property; if ignore isn't there, then we assume the subclass isn't ignored.
	 */
	var superSchema = wm.Object.getSchemaClass(inClass).prototype;
	if (superSchema) {
	    for (var propName in inSchema) {
		if (superSchema[propName]) {
		    inSchema[propName] = dojo.mixin(dojo.clone(superSchema[propName]), inSchema[propName], !inSchema[propName].ignore ? {ignore: 0} : {});
		}
	    }
	}
	    dojo.extend(wm.Object.getSchemaClass(inClass), inSchema);
	    // expunge memoized property information
	    delete inClass._publishedProps;
	}
});

//===========================================================================
// Design Schema
//===========================================================================

wm.Object.extendSchema(wm.Object, {
	declaredClass: { ignore: 1 },
	schema: { ignore: 1 },
	schemaClass: { ignore: 1 },
    type: { ignore: 1 },
    setValue: {ignore: 1, group: "method"},
    getValue: {ignore: 1, group: "method", returns: "Any"}
});

//===========================================================================
// Design Time Extensions
//===========================================================================
/** @lends wm.Object.prototype */
/**#@+ @design */
wm.Object.extend({
	//===========================================================================
	// Extensions for property enumeration
	//===========================================================================
	/**
		Hook for subclasses to add flags to the typeInfo structure
		for property <i>inName</i>.
		Called from <a href="#getPropertyType">getPropertyType</a>.
		@param {String} inName Name of property.
		@param {Object} inTypeInfo Type info structure to modify.
	*/
	getPropFlags: function(inName, inTypeInfo) {
	},
	/**
		Get type information for a property.
		Returns a structure containing schema information for property <i>inName</i>,
		including at least the following fields:
		<ul>
			<li>type: <i>(string) name of type</i></li>
			<li>isObject: <i>(boolean) true if property is itself a wm.Object</i></li>
			<li>isEvent: <i>(boolean) true if property represents an event</i></li>
		</ul>
	*/
	getPropertyType: function(inName) {
		var v = this.getProp(inName);
		var t = {
			type: v && v.type || typeof v,
			isObject: v instanceof wm.Object
		}
	        if (t.type == "number" && isNaN(v)) {
		    t.type = "string"; // don't know the correct type, but string being converted to number is how we get NaN, so don't convert!
		}
		this.getPropFlags(inName, t);
		var s = this.schema[inName] || {
		    noprop: Boolean((v === undefined) || (v === null) || inName.charAt(0)=='_' || (dojo.isFunction(v) || dojo.isObject(v)) && !t.isCustomMethod)
		};
		return dojo.mixin(t, s);
	},
	// $ Build property information into ioProps from the properties of
	// $ inSchema filtered by inGetTypeInfo function (or getPropertyType by default).
	_listSchemaProperties: function(ioProps, inSchema, inGetTypeInfo) {
		var getInfo = this[inGetTypeInfo||"getPropertyType"], op = Object.prototype;
		for (var p in inSchema) {
			if (p == 'inherited'){
				//console.info('ignoring inherited function here..... for id = ', inSchema.id);
				continue;
			}

			if (!(p in ioProps) && !(p in op)) {
				var t = getInfo.call(this, p);
				if (!t.noprop)
					ioProps[p] = t;
			}
		}
		return ioProps;
	},
	//$ Combine property information from basic reflection with
	//$ explicit schema information to form a list
	//$ of property information records.
	_listProperties: function() {
		var props = {};
		this._listSchemaProperties(props, this);
		return this._listSchemaProperties(props, this.schema);
	},
	/**
		Return memoized list of property information records.
	*/
	listProperties: function() {
		var props = this.constructor._publishedProps || (this.constructor._publishedProps = this._listProperties());
		return dojo.clone(props);
	},
	/**
		Return memoized list of value information records.
		wm.Object does not distinguish properties from values, so
		the base implementation just calls <a href="#listProperties">listProperties</a>.
	*/
	listDataProperties: function() {
		return this.listProperties();
	}
});

/**#@-*/

//===========================================================================
// One-stop wm.Objects
//===========================================================================
wm.define = function(inClass, inSuperclasses, inProperties) {
	if (arguments.length < 3) {
		inProperties = inSuperclasses;
		inSuperclasses = wm.Control;
	}
	var schema = inProperties.published;
	delete inProperties.published;
	var ctor = dojo.declare(inClass, inSuperclasses, inProperties);
        wm.Object.extendSchema(ctor, schema);
	return ctor;
}

}

if(!dojo._hasResource["wm.base.Component"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.Component"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.Component");

if (!wm.Component ) {
/**
    Base class for all palette objects.
    <br><br>Component:
    <ul>
        <li>can own components, and can itself be owned.</li>
        <li>ensures all owned components have distinct names.</li>
        <li>can be identified by a globally unique string id.</li>
        <li>sends notification messages (via id) when it's values change</li>
        <li>can read or write it's properties to a stream</li>
    @name wm.Component
    @class
    @extends wm.Object
*/

dojo.declare("wm.Component", wm.Object, {
        theme: "wm_tundra", // default theme for all components (including Application and Page)

    /** @lends wm.Component.prototype */
    /**
        Name of this object.
        Must be unique to it's owner.
        @type String
        @example this.label1.setValue("name", "titleLabel");
    */
    name: '',
    /**
        Name of this object.
        Must be unique to it's owner.
        @type String
        @example newButton.setValue("owner", this);
    */
    owner: null,
    //=======================================================
    // Construction
    //=======================================================
    /**
        Component constructor optionally takes a set of properties to initialize on
        the new instance.
        @example
        var foo = new wm.Component({name: "foo"});
        @param {Object} inProperties Properties to initialize on the new instance.
        May be ommitted.
    */
    getParentDialog: function() {
        var w = this;
        while(w) {
            if(w instanceof wm.Dialog) {
                return w;
            } else {
                w = w.parent;
            }
        }
        return null;
    },
    getParentPage: function() {
        if(this instanceof wm.Page || this instanceof wm.PageDialog) return this;
        if(this.owner) return this.owner.getParentPage();
        return null;
    },
    getParentPageOrComposite: function() {
        if(wm.isInstanceType(this, [wm.Page, wm.PageDialog, wm.Composite])) return this;
        if(this.owner) return this.owner.getParentPageOrComposite();
        return null;
    },
    isAncestor: function(inOwner) {
        var o = this.owner;
        while(o && o != inOwner) {
            o = o.owner;
        }
        return(o == inOwner);
    },


    // perhaps should be called getAncestorInstanceOf; returns false if the widget/component lacks parent/owner that
    // is an instance of the specified class, else returns the class itself
    isAncestorInstanceOf: function(inClass) {
        // exit condition
        if (this == app._page || this == app || window["studio"] && (this == studio.application || this == studio.page))
            return false;

        if (wm.isInstanceType(this, inClass)) return this;

        if (this.parent)
            return this.parent.isAncestorInstanceOf(inClass)
        else if (this.owner)
            return this.owner.isAncestorInstanceOf(inClass)
        else
            return false;
    },
    getOwnerApp: function() {
        if (wm.isInstanceType(this, wm.Application)) return this;

        if (!this.isDesignLoaded()) {
            return window.app;
        } else {
            if (this == studio.page)
                return studio.application;
            else
                return this.owner.getOwnerApp();
        }
    },
    constructor: function(inProps) {
        this.$ = this.components = {};
        this._connections = [];
        this._subscriptions = [];
            if (djConfig.isDebug) {
            this._debugSubscriptions = [];
        }
        this._designee = this;
        this.isDestroyed = false;
/* no applicationDestroyed is no longer called
        if (!inProps || !inProps._temporaryComponent) // don't add pointers to this object if its temporary; temporary components may not have destroy called on them properly
        this._subscriptions.push(dojo.subscribe('applicationDestroyed', this, 'destroy')); */
    },
    postscript: function(inProps) {
        this.create(inProps);
        wm.Component.add(this);
    },

    create: function(inProps){
        try {
            this._initializing = true;
        if (wm.debugPerformance) this.startTimerWithName("create",this.declaredClass);
        this.prepare(inProps);
        //this.startTimerWithName("build",this.declaredClass);
        this.build();
        //this.stopTimerWithName("build",this.declaredClass);
        //this.startTimerWithName("init",this.declaredClass);
        this.init();

        if (this._designer)
            wm.fire(this, "designCreate");

        if (!this._loading) {
            this.postInit();
                delete this._initializing;
        }

            if (!this._temporaryComponent)
                dojo.addOnWindowUnload(this, '_unload');
        if (wm.debugPerformance) this.stopTimerWithName("create",this.declaredClass);
    } catch (e) {
        console.error("Error thrown; failed to create " + this.toString() + ": " + e);
    }
    },
    _unload: function() {
    	if (this.owner) this.owner._isUnloading = true;
    	this.destroy();
    },
    /**
        Remove this component from the system and clean up
        all resources.
    */

    destroy: function() {
        if (this.isDestroyed)
            return;
        try
        {
            this._disconnect();
            this._unsubscribe();
            wm.fire(this, "designDestroy");

            var comps = [];
            for (var n in this.components)
                comps.push(this.components[n]);
            for(var i=0, c; (c=comps[i]); i++)
            {
                c.destroy();
                for (var n in c)
                    delete c[n];
                c.isDestroyed = true;
            }
            comps = null;
            delete this.components;
            delete this.$;
            wm.Component.remove(this);
            this.setOwner(null);
            /*
            delete this.owner;
            delete this._designee;
            delete this.target;
            delete this.widgets;
            */
            this.isDestroyed = true;
        }
        catch(e)
        {
            //console.info('error while deleting component', e);
        }
    },
    prepare: function(inProps) {
        this.readProps(inProps);
        dojo.mixin(this, {flags:{}}, inProps);
        this.setOwner(this.owner);
    },
    readProps: function(inProps) {
    },
    build: function() {
    },
    init: function() {
        if (this.isDesignLoaded())
        this._isDesignLoaded = true;

        if (this.manageURL) {
            var connectTo = app ? app : this.getRoot();
            if (wm.Application && connectTo instanceof wm.Application) {
                this.connect(connectTo, "_generateStateUrl", this, "generateStateUrl");
            }
        }

        /* Insure that properties redefined by the theme get the value written to the property
         * rather than just using the prototype's value.  When running studio, a change in the theme
         * can cause properties to change AFTER the component was initialized.
         */
        if (window["studio"] && this.themeableProps) {
            dojo.forEach(this.themeableProps, function(inName) {
                var tmp = this[inName];
                delete this[inName];
                this[inName] = tmp;
            }, this);
        }
    },
    postInit: function() {
        this.valueChanged("", this);
    },
    loaded: function() {
          this._loading = false;
          this.postInit();
           delete this._initializing;
    },
    toString: function(inText) {
        var t = inText || "";
        return '[' + this.declaredClass + ((this.name) ? ':' + this.name : "") +  (this.isDestroyed ? ':' + wm.getDictionaryItem("wm.Component.toString_DESTROYED") : '') + t + ']';
    },
    //=======================================================
    // FIXME: deprecated, remove asap
    //=======================================================
    // Get a named component by ascending owner chain
    getComponent: function(inName) {
        return this.components[inName] || this.owner && this.owner.getComponent(inName);
    },
    //=======================================================
    // Design Support
    //=======================================================
    isDesignedComponent: function() {
/*
        if (!this.isDesignLoaded()) return false;

            var page = this.getParentPage();
        while (page && page.name != "wip")
        page = page.owner;

        return page.name == "wip";
*/
        return this.isDesignLoaded(); // Doh!
        },
    isDesignLoaded: function() {
        if (this._isDesignLoaded !== undefined) return this._isDesignLoaded;

        if (!window.studio || !this.owner) return false;
        if (this.owner == studio.application || this.owner == studio._application) return true; // must come before test for !studio.page
        if (!studio.page && !studio.application && !studio._application) return false;
        if (!this.owner) return false;
        var pp = this.getParentPageOrComposite();
        if (pp && pp == studio.page || this.owner == studio.page) return true; // getParentPage() test failed for PageDialogs owned by studio
        if (this == studio.page) return true;
        if (this.isOwnedBy(studio.application)) return true;
        if (window["app"] && !this.isOwnedBy(window["app"]) && window["app"] != this) return true;
        return false;
    },
    getPath: function() {
        // FIXME: hack, at least move studio awareness to design-only code
        var p = '';
        var o = this.owner;
        while (o && !o._hasCustomPath) o = o.owner;
        if (o && o._hasCustomPath) {
	    return this.owner.getPath();
	} else if (this.isDesignLoaded() && studio.project) {
            p = "projects/" + studio.project.getProjectPath() + "/";
        }

        return p;
    },
    //=======================================================
    // Ownership
    //=======================================================
    addComponent: function(inComponent) {
        var n = inComponent.name;
        //if (this.components[n])
        //  wm.logging && console.debug('Duplicate object name "' + n + '" in owner ' + this);
        this.components[n] = inComponent;
    },
    removeComponent: function(inComponent) {
        if (!this.components)
            return;

        var n = inComponent.name;
        if (this.components[n] == inComponent)
            delete this.components[n];
    },
    setOwner: function(inOwner, nonWritable) {
        var isDesign = this.isDesignLoaded();

        // setOwner is called any time a component is created or destroyed, so is a perfect place for
        // detecting when changes are made
        if (isDesign)
        wm.job("studio.updateDirtyBit",10, function() {studio.updateProjectDirty();});

        var originalOwner = this.owner;
        if (this.owner) {
            this.owner.removeComponent(this);
        }
        this.owner = inOwner;
        //this.cacheRuntimeId = this.getRuntimeId();
        if (this.owner) {
            if (!nonWritable) {
                this.owner.addComponent(this);
                /* It is possible for the owner to have a designer and the child to not have a designer; set this._isDesignLoaded to false to make this happen */
                if (!this._designer && this._isDesignLoaded !== false) {
                    this._designer = this.owner._designer;
                }
            }
            // if the owner has changed between being page and app level, then we need to reset IDs.
            // If there is a way to move components from one page to another, we'll need to do this as well, but
            // that does not yet exist.
            if ((!originalOwner && this.owner instanceof wm.Page == false) ||
            (this.owner != originalOwner && originalOwner &&
            (this.owner instanceof wm.Page == false && originalOwner instanceof wm.Page ||
             this.owner instanceof wm.Page && originalOwner instanceof wm.Page == false)))
            {
            this.updateId();
            // If my id has been changed by this, then so will all of my children's ids...
            if (this.isDesignLoaded())
                this.resetChildIds();
                    }
        }
            delete this.rootId;

    },
    isOwnedBy: function(inOwner) {
        var o = this.owner;
        while (o) {
            if (o == inOwner)
                return true;
            o = o.owner;
        }
    },
    qualifyName: function(inName) {
        inName = this.name + '_' + inName;
        if (window.studio && (window.studio.page == this.owner || window.studio.application == this.owner))
            return inName;
        return this.owner ? this.owner.qualifyName(inName) : inName;
    },
    getUniqueName: function(inName) {
        return wm.findUniqueName(inName, [this, this.components]);
    },
    //=======================================================
    // Name & Id
    //=======================================================
    setName: function(inName) {
        if (!inName)
            return;
        wm.Component.remove(this);
        this.owner.removeComponent(this);
        this.name = inName;
        this.owner.addComponent(this);
        this.updateId();
        wm.Component.add(this);
    },
    updateId: function() {
            var id = this.makeId();
            if (id != this.id) {
            this.id = id;
            delete this.runtimeId;
        }
    },

    // make a streamable id
    // an id is fully qualified within its root
    makeId: function(inName) {
        inName = this.name + (inName ? (this.name ? "." : "") + inName : "");
        return this.owner ? this.owner.getId(inName) : inName;
    },
    /**
        Return a string that can identify a name as a child of
        this component in the namespace of the root object.
        @see <a href="#getRoot">getRoot</a>
        @param {String} inName The name to qualify.
        @returns {String} The qualified id string.
    */
    getId: function(inName) {
        if (inName)  return this.makeId(inName);
        var id = this.id;
        if (!this.id || this.isDesignLoaded()) {
            var id = this.makeId();
            this.id = id;
        }
        return id;
    },
/*
    getBindId: function() {
    var owner = this;
    while(owner && owner instanceof wm.Page == false)
        owner = owner.owner;

    var id = this.getId();

    if (owner == this) {
        return owner.name;
    } else if (owner) {
        return owner.name + "." + id;
    } else {
        return id;
    }
    },
    */
    resetChildIds: function() {
    for(var i in this.components) {
        delete this.components[i].id;
        delete this.components[i].runtimeId;
        delete this.components[i].rootId;
        this.components[i].resetChildIds();
    }
    },

    // get the root object that owns this component and under which its id is qualified
    getRoot: function() {
        if (this.owner)
        return this.owner.getRoot();
        else
        return null;
    },
    // get the root portion of the runtime id
    getRootId: function() {
        if (!this.rootId || this.isDesignLoaded()) {
        var r = this.getRoot();
        r = r ? r.getRuntimeId() : "";
        this.rootId =  r ? r + (r.charAt(r.length-1) == "." ? "" : ".") : "";
        }
        return this.rootId;
    },
    /**
        Return a string that can globally identify a name
        as a child of this component.
        @param {String} inName The name to qualify.
        @returns {String} The qualified id string.
    */
    // make a globally unique runtime id
    getRuntimeId: function(inName) {
        if (!this.runtimeId || this.isDesignLoaded()) {
        this.runtimeId = this.getRootId() + this.getId();
        }
        var result =  (inName) ? this.runtimeId + "." + inName :  this.runtimeId;
        return result;
    },
/*
    getRuntimeId: function(inName) {
        if (this.cacheRuntimeId && this.cacheRuntimeId != '')
        {
            //usingCacheRuntimeId++;
            if (!inName || inName == '')
            {
                return this.cacheRuntimeId;
            }
            else
            {
                return this.cacheRuntimeId + '.' + inName;
            }
        }

        var r = this.getRootId() + this.getId(inName);
        return r;
    },
    */
    // get a value under root using an id
    getValueById: function(inId) {
        /* Not sure if there aren't times when we have a sort of valid ID of 0, "" or false... */
        if (inId === null || inId === undefined) return null;
        var r = this.getRoot();
        r = r && r.getValue(inId);
        var result;
        /* r._wmNull appears to not exist anywhere */
        if (r && r._wmNull) {
          return app.getValue(inId);
        }

        if (r !== undefined) return r;

        if (inId && wm.Component.byId[inId]) {
        return wm.Component.byId[inId];
        }


        // First part of the ID is the page name
        var index = inId.indexOf(".");
        if (index != -1) {
        var pageName = inId.substring(0,index);
        if (pageName.indexOf("[") == 0)
            pageName = pageName.substring(1,pageName.length-1);
        var remainder = inId.substring(index+1);
        var page = wm.Page.getPage(pageName);
        if (page) {
            return page.getValueById(remainder);
        }
        if (this._isDesignLoaded && wm.decapitalize(String(studio.bindDialog.bindSourceDialog.pageContainer.pageName)) == pageName) {
            page = studio.bindDialog.bindSourceDialog.pageContainer.page;
            if (page) {
            return page.getValueById(remainder);
            }
        }
        }

        return undefined;
    },
    /*
    LiveForm does not work with the impovement changes below.
        getValue: function(inName) {
                if (typeof inName != "string" || inName.indexOf(".") != -1)
                        return this.inherited(arguments);
                var s1 = "get" + wm.capitalize(inName);
                var s2 = "get_" + wm.capitalize(inName);
                if (this[s1])
                        return this[s1]();
                else if (this[s2])
                        return this[s2]();
                else
                        return this.inherited(arguments);
        },
        setValue: function(inName, inValue) {
                if (typeof inName != "string" || inName.indexOf(".") != -1)
                        return this.inherited(arguments);
                var s1 = "set" + wm.capitalize(inName);
                var s2 = "set_" + wm.capitalize(inName);
                if (this[s1])
                        return this[s1](inValue);
                else if (this[s2])
                        return this[s2](inValue);
                else
                        return this.inherited(arguments);

        },
    */

    //=======================================================
    // Utility
    //=======================================================
    connect: function() {
        var c = dojo.connect.apply(dojo, arguments);
        this._connections.push(c);
        return c;
    },
    connectOnce: function(sourceObj, sourceMethod, targetObj, targetMethod) {
    var connections = this._connections;
    var args = [sourceObj,sourceMethod];
    if (typeof targetObj == "function") {
        targetMethod = targetObj;
    } else {
        args.push(targetObj);
    }
    args.push(function() {
        dojo.disconnect(c);
        wm.Array.removeElement(connections, c);
        dojo.hitch(this, targetMethod)();
    });

    var c = dojo.connect.apply(dojo,args);

    connections.push(c);
    return c;
    },
    connectEvents: function(inObject, inEvents) {
        this._connections = this._connections.concat(wm.connectEvents(this, inObject, inEvents));
    },

    _disconnect: function(inNode, inEvents) {
        dojo.forEach(this._connections, dojo.disconnect);
        this._connections = [];
    },
    /* Only use this if you want to disconnect a single event from "this" because you plan to keep on using "this".
       If "this" is going to go away, then the destructor takes care of all disconnects */
    disconnectEvent: function(inEvent) {
      this._connections = dojo.filter(this._connections, function(item, index, array) {
        if (item[1] == inEvent) {
          dojo.disconnect(item);
          return false;
        } else
          return true;
        return item[1] != inEvent;
      });
    },
    disconnect: function(connectionObj) {
        dojo.disconnect(connectionObj);
        wm.Array.removeElement(this._connections, connectionObj);
    },
    findConnection: function(inEvent) {
        for (var i = 0; i < this._connections.length; i++) {
        var con = this._connections[i];
        if (con[1] == inEvent)
            return con;
        }
    },
        findSubscription: function(inEvent) {
        for (var i = 0; i < this._subscriptions.length; i++) {
        var con = this._subscriptions[i];
        if (con[0] == inEvent)
            return con;
        }
    },
    subscribe: function() {
            var s = dojo.subscribe.apply(dojo, arguments);
        this._subscriptions.push(s);
        if (djConfig.isDebug) {
        this._debugSubscriptions.push(arguments[0]);
        }
            return s;
    },
        unsubscribe: function(subname) {
            for (var i = this._subscriptions.length-1; i >= 0; i--) {
                if (this._subscriptions[i][0] == subname) {
                    dojo.unsubscribe(this._subscriptions[i]);
                    wm.Array.removeElementAt(this._subscriptions,i);
            if (djConfig.isDebug) {
            wm.Array.removeElementAt(this._debugSubscriptions,i);
            }
                }
            }
        },
    _unsubscribe: function() {
        dojo.forEach(this._subscriptions, dojo.unsubscribe);
        this._subscriptions = [];
            if (djConfig.isDebug) {
            this._debugSubscriptions = [];
        }
    },
    //=======================================================
    // Properties
    //=======================================================
    isEventProp: function(n) {
        if (!this._designee) return false;
        return dojo.isFunction(this._designee[n] || this._designee[n.replace(/\d+$/,"")]) && (n.slice(0,2)=="on");
    },
    isCustomMethodProp: function(n) {
        return dojo.isFunction(this.constructor.prototype[n]) && (n.slice(0,6)=="custom");
    },
    _getProp: function(n) {
        if (this.isEventProp(n))
            return this.eventBindings ? (this.eventBindings[n] || "") : "";
        // do we need this?
        var g = this._getPropWorker(this._designee, n, "get");
        if (g)
            return g.call(this, n);
        return n in this._designee ? this._designee[n] : this.components[n];
    },
    _setProp: function(n, v) {
        if (this.isEventProp(n) && this._isDesignLoaded) {
        this.setEvent(n, v);
        } else if (this.isCustomMethodProp(n) && this._isDesignLoaded) {
        if (v) {
            this._designee[n] = v;
            eventEdit(this, n, v, this.owner == studio.application);
        } else {
            delete this._designee[n];
        }
        } else {
            // do we need this?
            var s = this._getPropWorker(this._designee, n, "set");
            if (s)
                s.call(this, v);
            else
                this._designee[n] = v;
        }
    },
    //=======================================================
    // Values
    //=======================================================
    // id-based notification
    valueChanged: function(inProp, inValue) {
        //console.info('inProp "' + inProp + '" => this.getRootId(): ' + this.getRootId() + ' this.getId(inProp): ' + this.getId(inProp) + ' == '+ this.getRuntimeId(inProp));
        var evtId = this.getRuntimeId(inProp);
        if (evtId == '')
        {
            return;
        }

        //console.info('Event: ' + evtId);
        dojo.publish(evtId + "-changed", [inValue, this]);

        var root = this.getRoot();
        if (root) root = root.getRuntimeId();
        if (root && root.indexOf(".") && evtId.indexOf(root) == 0) {
           var n = evtId.substring(root.length);
        n = root.substring(root.lastIndexOf(".")+1) + n;
        if (n != evtId) {
            var topic = n + "-changed";
            wm.logging && console.group("<== ROOTCHANGED [", topic, "] published by Variable.dataRootChanged");
            dojo.publish(topic, [inValue, this]);
        }
       }

    },
    //=======================================================
    // Streaming In
    //=======================================================
    _create: function(ctor, props) {
        try
        {
          return new ctor(props);
        }
        catch(e)
        {
            console.debug("Component._create: ignoring unknown component type: ", ctor.prototype, props);
        }
        //throw ("Page._create: unknown component type: " + p);
    },
    adjustChildProps: function(inCtor, inProps) {
        dojo.mixin(inProps, {owner: this});
    },
    /**
        Create a component as a child of this component.
        @param inName {String} Name of the new component (may be altered to ensure uniqueness).
        @param inType {String} Type of component to create (note, a string, not a constructor).
        @param inProps {Object} Hash of properties to pass to the new components <a href="#constructor">constructor</a>.
        @param inEvents {Object} Name/value pairs that match events in the new component to functions in the owner.
        @param inChildren {Object} Name/value pairs that describe child components to create on this object.
        @param inOwner {Object} Optional. Override automatic value for "owner".
        @example
this.panel1.createComponent("custom", "wm.Panel", {
    // properties
    height: "3em",
}, {
    // events
    onclick: "click" // connect onclick event to owner's "click" function
}, {
    // children
    // name: [ "[type]", { [properties] }, { [events] }, { [children] } ]
    spacer1: [ "wm.Spacer", { width: "300px" } ],
    content: [ "wm.Label", { width: "1flex" } ],
    spacer2: [ "wm.Spacer", { width: "300px" } ]
});
    */
    createComponent: function(inName, inType, inProps, inEvents, inChildren, inOwner) {
           if (wm.debugPerformance) {
         if (inType == "wm.Layout") {
           if (dojo.isFF)
             console.groupCollapsed("CREATE " + inType + ": " + inName + " AT " + startTime);
           else
             console.group("CREATE " + inType + ": " + inName + " AT " + startTime);
         }
           this.startTimer("CreateComponent", inType);
           }


        var ctor = dojo.getObject(inType);
        if (!ctor)
        {
            //console.info('trying to get component from componentList');
            try
            {
                            /* wm.componentList accessed here */
                wm.getComponentStructure(inType);
                ctor = dojo.getObject(inType);
            }
            catch(e)
            {
                console.info('error while getComponentStructure: ' + e);
            }
        }

        if (!ctor) throw(wm.getDictionaryItem("wm.Component.CLASS_NOT_FOUND", {type: inType, name: inName}));
        var props = dojo.mixin({_designer: this._designer, _loading: true}, inProps);
        this.adjustChildProps(ctor, props);

        /* Special case where a Composite being designed opens a PageDialog at designtime where the PageDialog
         * is itself not being designed but is in fact a wizard
         */
        if (inProps._isDesignLoaded === false) delete props._designer;

        if (inOwner)
            props.owner = inOwner;
        //
        // FIXME: avoid unique names if owner root is loading...
        // fix to prevent extra components in application children
        // FIXME: or owner itself is loading (avoids copy/paste sub-components duplication)

        props.name = props.owner.getRoot()._loading || props.owner._loading ? inName : props.owner.getUniqueName(inName);

        // All custom methods should be page methods; page methods have not been evaled, so
        // can not be defined nor invoked at design time
        if (!this.isDesignLoaded()) {
        for (var p in props) {
            if (p.indexOf("custom") == 0 && dojo.isFunction(ctor.prototype[p])) {
            var owner = props.owner;
            props[p] = dojo.hitch(owner, owner[props[p]]);
            }
        }
        }

        //
        var w = this._create(ctor, props);
                if (w.name != inName && wm.pasting && window["studio"])
                    studio.renamedDuringPaste[inName] = w;

        try{
          if (inEvents && w.owner) {
            w.owner.makeEvents(inEvents, w);
          }
          if (inChildren) {
            w.createComponents(inChildren);
          }
        }
        catch(e){
            console.info('error while creating component: ', e);
        }
        finally{
            try {
            w.loaded();
            if (w.owner && w.owner[w.name] === undefined && !w._isDesignLoaded && !wm.isInstanceType(w, wm.Property)) {
                w.owner[w.name] = w;
            }
            } catch(e) {
            console.error("Error in postInit for " + w.toString() + ": " + e);
            }
        }

        if (wm.debugPerformance) this.stopTimerWithName("CreateComponent",inType,1);
        return w;
    },
    createComponents: function(inComponents, inOwner) {
        var result = [];
        for (var i in inComponents) {
            var c = inComponents[i];
            result.push(this.createComponent(i, c[0], c[1], c[2], c[3], inOwner));
        }
        return result;
    },
    _eventArgs: function(c, a) {
        var args = [ c ];
        for (var i=0,l=a.length; i<l; i++){args.push(a[i])};
        return args;
    },
    makeEvents: function(inEvents, inComponent) {
        var e, n, f;
        var eventsArray = [];
        for (n in inEvents) {
            eventsArray.push(n);
        }
        eventsArray.sort();
        for (var i = 0; i < eventsArray.length; i++) {
            var n = eventsArray[i];

            // name of the source
            f = inEvents[n];
            // the target
            e = this[f] || f;
            if (this._designer) {
                // if designing, it helps to have an actual function of the given name, which events ending in numbers
                // should not have
                if (n.match(/\d+$/) && !inComponent[n]) {
                    inComponent[n] = function(){};
                }
                // if designing, note the eventBinding
                wm.fire(inComponent, "setProp", [n, f]);
            } else {
                // otherwise, connect the named event
                this.connect(inComponent._eventSource||inComponent, n.replace(/\d*$/,""), this.makeEvent(e, f, inComponent, n.replace(/\d*$/,"")));
                // For most events, doing connections this way is a bad idea; many uses of
                // events are done from code rather than inEvents; however, for performance
                // reasons and because dynamically setting onRightClick is something I'm ok not
                // suporting, I've made an exception here.
                if (n.match(/^onRightClick\d*$/)) {

                    inComponent.connect(inComponent.domNode, "oncontextmenu", inComponent, function(event) {
                        dojo.stopEvent(event);
                        this.onRightClick(event);
                    });
                    if (dojo.isFF) { // FF 3.6/4.0 on OSX require this, others may as well
                        inComponent.connect(inComponent.domNode, "onmousedown", inComponent, function(event) {
                        if (event.button == 2 || event.ctrlKey) {
                            dojo.stopEvent(event);
                            this.onRightClick(event);
                        }
                        });
                    }

                } else if (n.match(/^onMouseOver\d*$/)) {
                    inComponent.createMouseOverConnect();
                } else if (n.match(/^onMouseOut\d*$/)) {
                    inComponent.createMouseOutConnect();
                } else if (n.match(/^onEnterKeyPress\d*$/) && inComponent instanceof wm.Container) {
                    inComponent.connectOnEnterKey();
                }
            }
        }
    },
    makeEvent: function(inHandler, inName, inComponent, eventName) {
        return dojo.isFunction(inHandler) ? this._makeEvent(inName,inComponent,eventName) : this._makeComponentEvent(inHandler,inComponent,eventName);
    },
    _makeEvent: function(inName, inComponent, eventName) {
        var self = this;
        return function jsEventHandler() {
            var args = arguments;
            var f = function() {
                    if (app.debugDialog && !inComponent.isAncestor(app.debugDialog)) {
                        var eventId = app.debugDialog.newLogEvent({
                            eventType: "javascriptEvent",
                            sourceDescription: (inComponent instanceof wm.Component ? inComponent.getRuntimeId() + "." : "") + eventName + "() has been called",
                            resultDescription: "Calling " + (self instanceof wm.Component ? self.getRuntimeId() + "." : "") + inName + "()",
                            firingId: inComponent instanceof wm.Component ? inComponent.getRuntimeId() : "",
                            affectedId: self.getRuntimeId(),
                            method: inName
                        });

                    }
                    try {
                        self[inName].apply(self, self._eventArgs(this, args));
                    } catch (e) {
                        if (e instanceof Error && e.message == "Abort" || e.toString() == "Abort") throw e;
                        var errorMessage = "Error in " + self.toString() + "." + inName + ": " + e.message;
                        if (djConfig.isDebug) {
                            app.toastError(errorMessage);
                        } else {
                            console.error(errorMessage);
                        }
                    }
                    if (eventId) app.debugDialog.endLogEvent(eventId);
                };

            /* Events should not be fired until the owner has finished loading, as the event may require components that aren't yet generated */
            if (inComponent && eventName && inComponent["_" + eventName + "BeforeStart"]) {
                dojo.hitch(this,f)();
            } else if (self instanceof wm.Page && self._loadingPage) {
                self.connectOnce(self, "start", this, f);
            } else if (self._loading) {
                self.connectOnce(self, "postInit", this, f);
            } else {
                dojo.hitch(this,f)();
            }

        }
    },
    _makeComponentEvent: function(inHandler, inComponent, eventName) {
        var self = this;
        // FIXME: experimental: can call a method on a component
        return function eventHandler(e, optionalTargetComp) {

            // inHandler could be a component
            // or a (string) Id of a component
            // or a (string) Id of a component + a dotted method suffix
            //console.info('inHandler ', inHandler, ' instanceof wm.Component = ' + (inHandler instanceof wm.Component));
            //console.info('wm.isInstanceType = ' + wm.isInstanceType(inHandler, 'wm.Component'));
            var args = arguments;
            var f = function() {
                    var c = wm.isInstanceType(inHandler, wm.Component) ? inHandler : self.getValueById(inHandler);
                    if (wm.isInstanceType(c, wm.Component)) {
                        if (app.debugDialog && !inComponent.isAncestor(app.debugDialog)) {
                            if (c instanceof wm.ServiceVariable) {
                                if (!c._debug) c._debug = {};
                                c._debug = {
                                    trigger: inComponent.getId(),
                                    eventName: eventName,
                                    method: "update",
                                    lastUpdate: new Date()
                                };
                            }
                            var eventId = app.debugDialog.newLogEvent({
                                eventType: "componentEvent",
                                sourceDescription: inComponent.getRuntimeId() + "." + eventName + "() has been called",
                                resultDescription: "Invoking " + c.getRuntimeId(),
                                eventName: eventName,
                                firingId: inComponent.getRuntimeId(),
                                affectedId: c.getRuntimeId(),
                                method: "update"
                            });
                        }
                        if (c.updateInternal) {
                            wm.fire(c, "updateInternal", [e, optionalTargetComp]);
                        } else {
                            wm.fire(c, "update", [e, optionalTargetComp]);
                        }
                        // call a method on a component
                    } else if (dojo.isString(inHandler)) {
                        var o = inHandler.split('.');
                        var m,c;
                        if (o.length > 1) {
                            m = o.pop();
                            c = self.getValueById(o.join("."));
                        } else {
                            c = self;
                            m = o[0];
                        }
                        if (c && c[m]) {
                            if (app.debugDialog && !inComponent.isAncestor(app.debugDialog)) {
                                if (c instanceof wm.ServiceVariable) {
                                    if (!c._debug) c._debug = {};
                                    c._debug = {
                                        trigger: inComponent.getId(),
                                        eventName: eventName,
                                        method: m,
                                        lastUpdate: new Date()
                                    };
                                }
                                var eventId = app.debugDialog.newLogEvent({
                                    eventType: "subcomponentEvent",
                                    sourceDescription: (inComponent instanceof wm.Component ? inComponent.getRuntimeId() + "." : "") + eventName + "() has been called",
                                    resultDescription: "Calling " + c.getRuntimeId() + "." + m + "()",
                                    firingId: inComponent instanceof wm.Component ? inComponent.getRuntimeId() : undefined,
                                    affectedId: c instanceof wm.Component ? c.getRuntimeId() : undefined,
                                    method: m
                                });
                            }
                            // changed from c[m]() so that inSender and all arguments get forwarded
                            try {
                                c[m].apply(c, self._eventArgs(this, args));
                            } catch (e) {
                                if (e instanceof Error && e.message == "Abort" || e.toString() == "Abort") throw e;
                                var errorMessage = "Error in " + self.toString() + "." + m + ": " + e.message;
                                if (djConfig.isDebug) {
                                    app.toastError(errorMessage);
                                } else {
                                    console.error(errorMessage);
                                }
                            }
                        }
                    }

                    if (eventId) app.debugDialog.endLogEvent(eventId);
                };

            /* Events should not be fired until the owner has finished loading, as the event may require components that aren't yet generated */
            if (self instanceof wm.Page && self._loadingPage) {
                self.connectOnce(self, "start", this, f);
            } else if (self._loading) {
                self.connectOnce(self, "postInit", this, f);
            } else {
                dojo.hitch(this,f)();
            }
        }
    },
    readComponents: function(inComponents) {
        var c = dojo.fromJson(inComponents);
        return this.createComponents(c);
    },
     startTimerWithName: function(timerName, componentName) {
      if (!wm.debugPerformance) return;
      if (!this.logTimesWithComponentNames) this.logTimesWithComponentNames = {};
      if (!this.logTimesWithComponentNames[componentName]) this.logTimesWithComponentNames[componentName] = {};
      this.logTimesWithComponentNames[componentName][timerName] = new Date().getTime();
     },
    stopTimerWithName: function(timerName, componentName) {
      if (!wm.debugPerformance) return;
      if (!this.logTimesWithComponentNames) this.logTimesWithComponentNames = {};
      if (!this.logTimesWithComponentNames[componentName]) this.logTimesWithComponentNames[componentName] = {};
      var startTime = this.logTimesWithComponentNames[componentName][timerName];
      if (!startTime) return -1;
      this.logTimesWithComponentNames[componentName][timerName] = 0;

      var result = new Date().getTime() - startTime;

        var timingObj = wm.Component.timingByComponent[componentName];
        if (!timingObj) {
        wm.Component.timingByComponent[componentName] = {};
        timingObj = wm.Component.timingByComponent[componentName];
        }
        if (!timingObj[timerName]) timingObj[timerName] = [];
        timingObj[timerName].push(result);

      return result;
    },
        subtractTimerWithName: function(timerName, componentName,time) {
      if (!wm.debugPerformance) return;
      if (!this.logTimesWithComponentNames) this.logTimesWithComponentNames = {};
      if (!this.logTimesWithComponentNames[componentName]) this.logTimesWithComponentNames[componentName] = {};
      var startTime = this.logTimesWithComponentNames[componentName][timerName];
      if (!startTime) return -1;
        var timingObj = wm.Component.timingByComponent[componentName];
        if (!timingObj) {
        wm.Component.timingByComponent[componentName] = {};
        timingObj = wm.Component.timingByComponent[componentName];
        }
        var tmp = timingObj[timereName];
        tmp[tmp.length-1] -= time;
    },
    startTimer: function(timerName) {
      if (!wm.debugPerformance) return;
      if (!this.logTimes) this.logTimes = {};
      this.logTimes[timerName] = new Date().getTime();
    },
    stopTimer: function(timerName, addToComponentLog) {
      if (!wm.debugPerformance) return;
      if (!this.logTimes) this.logTimes = {};
      var startTime = this.logTimes[timerName];
      if (!startTime) return -1;
      this.logTimes[timerName] = 0;
      var result = new Date().getTime() - startTime;

      if (addToComponentLog) {
        var timingObj = wm.Component.timingByComponent[this.declaredClass];
        if (!timingObj) {
          wm.Component.timingByComponent[this.declaredClass] = {};
          timingObj = wm.Component.timingByComponent[this.declaredClass];
        }
        if (!timingObj[timerName]) timingObj[timerName] = [];
        timingObj[timerName].push(result);
      }
      return result;
    }
});

//=======================================================
// Class Properties
//=======================================================
dojo.mixin(wm.Component, {
    //=======================================================
    // Component registry
    //=======================================================
    /** @lends wm.Component */
    byId: {},
    byShortId: {},
    timingByComponent: {},
    add: function(inComponent){
    if (inComponent._temporaryComponent) return;
    var rid = inComponent.getRuntimeId();
    wm.Component.byId[rid] = inComponent;
    },
    remove: function(inComponent){
    delete wm.Component.byId[inComponent.getRuntimeId()];
    },
    property: {
    }
});
}
//window.$$ = wm.Component.byId;

}

if(!dojo._hasResource["wm.base.Control"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.Control"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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
/*global dojo, wm */
dojo.provide("wm.base.Control");
dojo.provide("wm.base.Widget");
wm.splitUnits = function(inUnitValue) {
    if (!dojo.isString(inUnitValue)) return {value: inUnitValue, units: "px"};
    var m = (inUnitValue || "").match(wm.splitUnits.Rx);
    return { value: Number(m[1]) || 0, units: m[2] || "px" };
}
wm.splitUnits.Rx = /(\d*)(.*)/;

/**
   Manages geometry for a rectangle, including margins, borders, and padding and frame-of-reference calculations.
   @class
   @name wm.Bounds
*/
dojo.declare("wm.Bounds", null, {
    /** @lends wm.Bounds.prototype */
    padding: "",
    border: "",
    margin: "",
    constructor: function() {
	this.bounds = {l:0, t:0, w:96, h:64};
	this.borderExtents = {l:0, t:0, r:0, b: 0};
	this.paddingExtents = {l:0, t:0, r:0, b: 0};
	this.marginExtents = {l:0, t:0, r:0, b: 0, w: 0, h:0};
	this.padBorderMargin = {};
	this.calcPadBorderMargin();
    },
    getBounds: function() {
	return this.bounds;
    },
    /**
       Set the outermost area of this box, including margin, border, and padding.
       l, t describe the position of the outer most corner of this box.
       w, h describe the size of the box, including margin, border, and padding.
       @param {Object} inBox {l: Number, t: Number, w: Number, h: Number }
    */
    setBounds: function(inL, inT, inW, inH) {
	if (arguments.length == 1) {
	    return this.setBounds(inL.l, inL.t, inL.w, inL.h)
	}

	var b = this.bounds;
	if (!isNaN(inL) && b.l != inL) {
	    b.l = inL;
	}
	if (!isNaN(inT) && b.t != inT) {
	    b.t = inT;
	}
	if (inW >= 0 && b.w != inW) {
	    b.w = inW;
	    this._boundsDirty = true;
	}
	if (inH >= 0 && b.h != inH) {
	    b.h = inH;
	    this._boundsDirty = true;
	}

	// If b.l, b.w, b.t or b.h is a string like "100", it should be changed to integer before adding.
	// To ensure that we multiple it by 1.
	b.r = b.l*1 + b.w*1;
	b.b = b.t*1 + b.h*1;
	return b;
    },
    setContentBounds: function(inBox) {
	var b= {};
	var sm = this.getScrollMargins();
	if ("w" in inBox) {
	    b.w = inBox.w + this.padBorderMargin.w + sm.w;
	}
	if ("h" in inBox) {
	    b.h = inBox.h + this.padBorderMargin.h + sm.h;
	}
	return this.setBounds(b);
    },
    _parseExtents: function(inExtents) {
	inExtents = String(inExtents);
	var r = {};
	if (typeof inExtents == "number")
	    r = { l: inExtents, t: inExtents, r: inExtents, b: inExtents };
	else {
	    var ex = inExtents.split(",");
	    var l = ex.length;
	    r.t = parseFloat(ex[0]) || 0;
	    r.r = l < 2 ? r.t : parseFloat(ex[1]) || 0;
	    r.b = l < 3 ? r.t : parseFloat(ex[2]) || 0;
	    r.l = l < 4 ? r.r : parseFloat(ex[3]) || 0;
	}
	return r;
    },
    _stringifyExtents: function(inExtents) {
        return inExtents.t + "," + inExtents.r + "," + inExtents.b + "," + inExtents.l;
    },
    /**
       Set padding extents in pixels.
       @param {String||Number} inPadding "t, <r, b, l>" || Number
    */
    setPadding: function(inPadding) {
	this.padding = String(inPadding);
	this.paddingExtents = this._parseExtents(this.padding);
	this.padBorderMarginChanged();
	this.invalidCss = true;
	this.render();
    },
    /**
       Set border extents in pixels.
       @param {String||Number} inBorder "t, <r, b, l>" || Number
    */
    setBorder: function(inBorder) {
	inBorder = String(inBorder);
	inBorder = (inBorder && inBorder.match(/\d/)) ? inBorder : "0";
	if (inBorder !== this.border) {
	    this.border = inBorder;
	    this.borderExtents = this._parseExtents(inBorder);
	    this.padBorderMarginChanged();
	    this.invalidCss = true;
	    this.render();
	}
    },
    /**
       Set margin extents in pixels.
       @param {String||Number} inMargin "t, <r, b, l>" || Number
    */
    setMargin: function(inMargin) {
	this.margin = String(inMargin);
	var me = this.marginExtents = this._parseExtents(this.margin);
	me.h = me.t + me.b;
	me.w = me.l + me.r;
	this.padBorderMarginChanged();
	this.invalidCss = true;
	this.render();
    },
    setOneMargin: function(inMargin,edge) {
        var m = this.marginExtents;
        m[edge] = inMargin;
        this.setMargin(this._stringifyExtents(m));
    },
    /**
       Update metrics when padBorderMargin has changed.
       @protected
    */
    padBorderMarginChanged: function() {
	this.calcPadBorderMargin();
    },
    /**
       Accumulate padBorderMargin extents.
       @private
    */
    _edges: {l:1, t:1, r:1, b:1},
    calcPadBorderMargin: function() {
		var pbm = this.padBorderMargin;
		for(var e in this._edges)
		    pbm[e] = this.borderExtents[e] + this.paddingExtents[e] + this.marginExtents[e];
		if (this._isDesignLoaded && studio.useDesignBorder && wm.isDesignable(this) && (!this.border || this.border === "0")) {pbm.t++;pbm.b++;pbm.r++;pbm.l++;}
		pbm.w = pbm.l + pbm.r;
		pbm.h = pbm.t + pbm.b;
    },
    getScrollMargins: function() {
	return {w:0, h:0};
    },
    /**
       Get an object describing the content-box area.
       l, t describe the position of the origin for objects in this frame.
       w, h describe the size of the content area of the box (inside margin, border, padding, and scrollbars).
       @return {Object} {l: Number, t: Number, w: Number, h: Number}
    */
    getContentBounds: function() {
	var sm = this.getScrollMargins();

	    var b = {
		l: this.paddingExtents.l,
		t: this.paddingExtents.t,
		w: Math.floor(this.bounds.w) - this.padBorderMargin.w - sm.w,
		h: Math.floor(this.bounds.h) - this.padBorderMargin.h - sm.h
	    };

 	if (b.w < 0) b.w = 0;
 	if (b.h < 0) b.h = 0;
	b.r = b.l + b.w;
	b.b = b.t + b.h;
	return b;
    },
    getStyleBounds: function() {
		if (this.isRelativePositioned){
		    return {w: this.width, h: this.height};
		}

		var pbm = (this.dom.node.tagName.toLowerCase() == "button") ? this.marginExtents : this.padBorderMargin;
		    var b = {
			l: this.bounds.l,
			t: this.bounds.t,
			w: this.bounds.w - pbm.w,
			h: this.bounds.h - pbm.h
		    };

	 	if (b.w < 0) b.w = 0;
	 	if (b.h < 0) b.h = 0;
		b.r = b.l + b.w;
		b.b = b.t + b.h;
		return b;
    },
    cloneBounds: function() {
	with (this.bounds) {
	    return {l:l, t:t, w:w, h:h, r:r, b:b};
	}
    }
});

dojo.declare("wm.DomNode", null, {
    constructor: function(inNode, isRelativePositioned) {
	this.node = inNode || document.createElement('div');
	this.isRelativePositioned = isRelativePositioned;
    },
    append: function(inDomNode) {
	this.node.appendChild(inDomNode.node);
    },
    remove: function(inDomNode) {
	this.node.removeChild(inDomNode.node);
    },
    getWidth: function() {
	return this.node.offsetWidth;
    },
    getHeight: function() {
	return this.node.offsetHeight;
    },
    setBox: function(inBox, inSingleLine) {
	var isChanged = false;
	var s = this.node.style;
	//		var style = {};
	if (this.isRelativePositioned){
	    s.width = inBox.w;
	    s.height = inBox.h;
	    return true;
	}

	var bl = inBox.l + "px";
	if (!isNaN(inBox.l) && s.left != bl) {
	    s.left = bl;
	    isChanged = true;
	}
	var bt = inBox.t + "px";
	if (!isNaN(inBox.t) && s.top != bt) {
	    s.top = bt;
	    isChanged = true;
	}
	var bw = inBox.w + "px";
	if (inBox.w >=0 && s.width != bw) {
	    s.width = bw;
	    isChanged = true;
	}
	var bh = inBox.h + "px";
	if (inBox.h >= 0) {
	    //if (s.height != bh)
	    s.height = bh;
	    s.lineHeight = inSingleLine ? bh : "normal";
	    isChanged = true;
	}

	//dojo.style(this.node, style);  proven to be very slow
	return isChanged;
    },
    setCssText: function(inText) {
	this.node.style.cssText += ";" + inText;
    },
    addCssText: function(inText) {
	this.node.style.cssText += inText;
    }
});

/* Appears to be obsolete
   wm.aligns = [
   "topLeft", "center", "bottomRight", "justified"
   ];*/

/**
   Base class for all <i>visual</i> components.
   @name wm.Control
   @class
   @extends wm.Component
*/
wm.define("wm.Control", [wm.Component, wm.Bounds], {
    /** @lends wm.Control.prototype */
    /*
      published: {
      invalidCss: {ignore: 1},
      renderedOnce: {ignore: 1},
      bounds: {ignore: 1},
      border: {group: "style", doc: 1},
      borderColor: {group: "style", doc: 1},
      //backgroundColor: {group: "style"},
      backgroundColor: {ignore: 1},
      margin: {group: "style", doc: 1},
      padding: {group: "style", doc: 1},
      autoScroll: {group: "scrolling", order: 100, ignore: 1, writeonly: 1},
      scrollX: {group: "scrolling", order: 101, ignore: 1, writeonly: 1},
      scrollY: {group: "scrolling", order: 102, ignore: 1, writeonly: 1},
      left: {writeonly: 1, ignore: 1},
      top: {writeonly: 1, ignore: 1}
      },
    */
    mobileFolding: false,
    mobileFoldingIndex: "",
    mobileFoldingCaption: "",

    imageList: "",
    imageIndex: -1,
    renderedOnce: 0,
    invalidCss: 1,
    autoScroll: false,
    backgroundColor: "",
    //border: 1,
    borderColor: "#F0F0F0",
    //binding: '(data binding)',
    classNames: '',
    id: '',
    autoSizeWidth: false,
    autoSizeHeight: false,
    _needsAutoSize: true,
    /*
      flex: '',
      left: '',
      top: '',
    */
    /**
       Display width specified as a string with units.<br>
       <br>
       Supports CSS units and <i>flex</i> units.<br>
       @example
       this.button.setValue("width", "96px");
       this.text.setValue("width", "4em");
       this.box.setValue("width", "1flex");
       @type String
    */
    width: '',
    /**
       Display height specified as a string with units.<br>
       <br>
       Supports CSS units and <i>flex</i> units.<br>
       @example
       this.button.setValue("height", "96px");
       this.text.setValue("height", "4em");
       this.box.setValue("height", "1flex");
       @type String
    */
    height: '',
    minHeight: 0, // number represents pixels
    minWidth: 0,
    minMobileHeight: 0,
    minDesktopHeight: 0,
    enableTouchHeight: false,
    //maxHeight: 0, // number represents pixels
    //maxWidth: 0,

    styles: '',
    /**
       Showing state.<br>
       <br>
       Whether the widget if shown on the display.<br>
       @see <a href="#hide">hide</a>, <a href="#show">show</a>.
       @example
       this.button.setValue("showing", false);
       this.panel.show();
       this.label.hide();
       @type Boolean
    */
    showing: true,
    /**
       Disabled state.<br>
       <br>
       Some widgets change behavior or display based on the disabled state.<br>
       @see <a href="#disable">disable</a>, <a href="#enable">enable</a>.
       @example
       this.button.setValue("disabled", true);
       this.panel.disable();
       this.label.enable();
       @type Boolean
    */
    disabled: false,
    _parentDisabled: false,
    _disabled: false, // combines disabled and _parentDisabled
    container: false,
    _classes: {domNode:[]}, // prototype gets a blank object for us to clone; allows theme to provide default classes
    scrollX: false,
    scrollY: false,

    //===========================================================================
    // Construction
    //===========================================================================
    constructor: function() {
    	this.widgets = {};
    	this._classes = dojo.clone(this._classes);
    },


    // experimental code for supporting dojo.parser
    // TODO:
    // 1. Need a way to find the parent widget (owner[node.parentNode.id]) should work, though we may need to parse "id" to strip out any owner ids
    // 2. Need a way to find the owner component (Page.js will need to set a global app._currentParseOwner before calling dojo.parser; and then restoring the prior value when its done in case Page.js is loading a pagecontainer)
    // 3. Need a way to invoke postInit; probably will need Page.js to do a second traversal after all widgets are created calling postInit on each widget
    markupFactory: function(params, node) {
        var ctor = arguments.callee.arguments[2];
        var domNode = node;
        var owner = wm._dojoParserCurrentOwner;
        var parentid = node.parentNode.id;
        while (parentid.indexOf("_") != -1 && !owner[parentid])
        parentid = parentid.substring(parentid.indexOf("_") + 1);
        var parent = owner[parentid];
        params = dojo.mixin(params, {
            domNode: domNode,
            parentNode: domNode.parentNode,
            parent: parent,
            name: owner.getUniqueName(params.name),
            owner: owner,
            _designer: owner._designer,
            _loading: false
        }); // should be changing this to true... but need to do something about calling postInit in a second pass before we change this
        var result = new ctor(params);
        if (!params.parent && ctor.prototype.declaredClass == "wm.Layout") result.owner.root = result;
        return result;
    },
    prepare: function(inProps) {
        try {
            if (inProps) {
                var owner = inProps.owner;
                if (!owner && parent) {
                    owner = inProps.owner = parent.owner;
                }
                if (owner) owner = owner.getOwnerApp();
                if (owner) owner.loadThemePrototypeForClass(this.constructor, this);
            }
        } catch (e) {
            console.error("What the hell?" + e);
        }
        this.inherited(arguments);
    },
    postscript: function(inProps) {
        this.inherited(arguments);
    },
    create: function() {
        this._cupdating = true;
        this.inherited(arguments);
    },
    build: function() {
        this.domNode = dojo.byId(this.domNode || /*this.id||*/ undefined);
        if (!this.domNode) this.domNode = document.createElement('div');
    },
    initDomNode: function() {
        if (!this.dom) {
            this.dom = new wm.DomNode(this.domNode, this.isRelativePositioned);
            if (!this.isRelativePositioned) this.domNode.style.position = "absolute";
            else this.domNode.style.position = "relative";
            this.setParent(this.parent);
            this.setDomNode(this.domNode);
        }
    },
    init: function() {

        this.initDomNode();
        this.inherited(arguments);
        if (this.ariaRole) dojo.attr(this.domNode, "role", this.ariaRole);

        var isMobile = wm.isMobile || this._isDesignLoaded && studio.currentDeviceType != "desktop";
        if (this.height && String(this.height).match(/\%/)) {
            this.mobileHeight = this.desktopHeight = this.height;
        } else if (!isMobile || !this.enableTouchHeight) {
            if (this.desktopHeight != null) {
                this.height = this.desktopHeight;
            } else if (this.height) {
                this.desktopHeight = this.height;
            } else {
                this.height = this.desktopHeight = this.constructor.prototype.height;
            }
            if (this.minDesktopHeight) {
                this.minHeight = this.minDesktopHeight;
            } else if (this.minHeight) {
                this.minDesktopHeight = this.minHeight;
            } else {
                this.minHeight = this.minDesktopHeight = this.constructor.prototype.minHeight;
            }

        } else {
            if (this._isDesignLoaded && studio.currentDeviceType == "desktop" || this.desktopHeight == undefined) {
                this.desktopHeight = this.height || this.mobileHeight;
            }
            if (this.desktopHeight && typeof this.desktopHeight == "string" && this.desktopHeight.match(/\%/)) {
                this.height = this.mobileHeight = this.desktopHeight;
            } else if (this.mobileHeight) {
                this.height = this.mobileHeight;
            } else if (this.height) {
                this.mobileHeight = this.height;
            } else {
                this.height = this.mobileHeight = this.constructor.prototype.height;
            }
            if (this.minMobileHeight) {
                this.minHeight = this.minMobileHeight;
            } else {
                this.minHeight = this.minMobileHeight = this.constructor.prototype.minHeight;
            }
        }

        //if (() && (!this.owner || this.owner.enableTouchHeight) && this.mobileHeight != undefined && !this.height.match(/\%/) && parseInt(this.mobileHeight) > parseInt(this.height)) this.height = this.mobileHeight;
        this.bc(); // mostly in here to support wm.Container's bc method
        //
        /*
      this.setBorder(this.border);
      this.setMargin(this.margin);
      this.setPadding(this.padding);
    */
        if (this.isDesignLoaded())
        // enable design borders
        this.set_border((this.border) ? String(this.border) : "0");
        else {
            this.border = (this.border) ? String(this.border) : "0";
        }
        this.borderExtents = this._parseExtents(this.border);

        this.padding = String(this.padding);
        this.paddingExtents = this._parseExtents(this.padding);
        this.setMargin(String(this.margin));
        this.doSetSizeBc();
        if (!this.showing) this.setShowing(false, true);

        this._parentDisabled = this.parent ? this.parent.disabled || this.parent._parentDisabled : false;
        this.setDisabled(this.disabled);

        this.appendDOMNode(this.parent);
        this.updateBounds();
    },

    bc: function() {
	// oboslete method; but the version in wm.Container is still required for framework to function
    },

    postInit: function() {
        this._cupdating = false;
        this.inherited(arguments);

        // After we've finished creating the widget, NOW we render() -- just once; not over and over while we're setting borders and
        // margins and everything else.
        this.render(1);


        if (this.addTouchListener && wm.isMobile && !window["studio"]) {
            //this.connect(this._touchNode || this.domNode, wm.isFakeMobile ? "mousedown" : "touchstart", this, "_onTouchStart");
            this.addTouchListener(this._touchNode || this.domNode);
        }

        if (!this.$.binding && this.isDesignLoaded()) {
            new wm.Binding({
                name: "binding",
                owner: this
            });
        }
        if (this.hint) {
            this.setHint(this.hint);
        }
    },


    destroy: function() {
        if (this.isDestroyed || this._isDestroying) return;
        this._isDestroying = true;

        try {
            if (app.toolTipDialog && this == app.toolTipDialog.tipOwner) {
                app.toolTipDialog.hide();
            }

            if (this._layerConnections) delete this._layerConnections;

            if (this.widgets) {
                var wids = [];
                wm.forEachProperty(this.widgets, function(w, name) {
                    wids.push(w);
                });
                for (var i = 0, w;
                (w = wids[i]); i++)
                w.destroy();
                wids = [];
            }

            this.widgets = null;
            this.parentNode = null
            this.setParent(null);
            wm.fire(this.designWrapper, "destroy");
            this.layout = null;
            this.inherited(arguments);
        } catch (e) {
            console.info('Error while destroying : ' + this.name, e);
        } finally {
            if (this.domNode) dojo.destroy(this.domNode);
            this.domNode = null;
            this._designee = null;
            if (this.dom && this.dom.node) {
                dojo.destroy(this.dom.node);
                this.dom.node = null;
                this.dom = null;
            }

        }
    },
    loaded: function() {
        this.inherited(arguments);
        this.initUserClasses();
    },
    setDomNode: function(inDomNode) {
        var n = this.domNode = inDomNode;
        if (dojo.isIE <= 8) {
            // forcing a size on the node now seems to help IE
            // honor auto sizing later
            n.style.width = "0px";
        }
        // id
        this.updateId();
        // classes

	var cNames = this.classNames + (this.owner ? ' ' + (this.owner._appendCssClassName || this.owner.declaredClass.replace(/\./g, "")) + '-' + this.name : '') + (this.isRelativePositioned && this.parent && this.parent.layoutKind == 'left-to-right' ? ' wmInlineDiv' : '');
        dojo.addClass(n, cNames);
        this.initUserClasses();
        //this.updateBounds();
    },


    isAncestorHiddenLayer: function() {
        if (this instanceof wm.Layout && this.owner == app._page) return false;
        if (this instanceof wm.Layer && this.parent instanceof wm.Layers && this.parent.getActiveLayer() != this) return true;
        var parent;
        if (this.parent && this.parent instanceof wm.Control) parent = this.parent;
        else if (this.owner instanceof wm.Page && this.owner.owner instanceof wm.Control) parent = this.owner.owner;
        if (!parent) return false;
        return parent.isAncestorHiddenLayer();
    },
    isAncestorHidden: function() {
        if (!this.showing && this instanceof wm.Layer == false) return true;
        if (this instanceof wm.Layout && this.owner == app._page || this instanceof wm.Dialog) return false;
        if (this instanceof wm.Layer && !this.active) return true;
        var parent;
        if (this.parent && this.parent instanceof wm.Control) parent = this.parent;
        else if (this.owner instanceof wm.Page && this.owner.owner instanceof wm.Control) parent = this.owner.owner;
        if (!parent) return false;
        return parent.isAncestorHidden();
    },

    callOnShowParent: function() {
    	if (this.owner && this.owner._isUnloading) return;
        var self = this;
        wm.forEachVisibleWidget(this, function(w) {
            if (self != w) { /* For internal widget detection of changes to showing state, use _onShowParent */
                if (w._onShowParent) {
                    w._onShowParent();
                }

                /* For public tooled detection use onShow; only call onShow if its been replaced with something other than
                 * the default empty onShow event handler because we can't be making 1000s of empty onShow calls
                 */
                if (w.onShow && w.onShow != w.constructor.prototype.onShow) {
                    w.onShow();
                }

            }
        }, true);
    },
    callOnHideParent: function() {
        var self = this;
        if (!this.isDestroyed) {
            wm.forEachVisibleWidget(this, function(w) {
                if (w.hint && app.toolTipDialog && app.toolTipDialog.tipOwner == self) app.hideToolTip();
                if (self != w) { /* For internal widget detection of changes to hideing state, use _onHideParent */
                    if (w._onHideParent) {
                        w._onHideParent();
                    }

                    /* For public tooled detection use onHide; only call onHide if its been replaced with something other than
                     * the default empty onHide event handler because we can't be making 1000s of empty onHide calls
                     */
                    if (w.onHide && w.onHide != w.constructor.prototype.onHide) {
                        w.onHide();
                    }


                }
            }, true);
        }
    },
    onShow: function(){},
    onHide: function(){},


    // OPTIONAL: Maybe handle all parents showing/hiding but thats a lot of connections
    //           and it may be better to just tell people not to show/hide parents of widgets needing these; just use layers
    // NOTE: Also handles dialogs if "this" is in a dialog; these connections to layers are more about knowing when its hidden/showing
    // and less about the details of whether its a layer or something else.
    // TODO: Verify if this is needed, or if _onShowParent makes this no longer necessary.
    connectToAllLayers: function(obj, callback) {
        var layers = [];
        var dialogs = []; // should only be 0 or 1 dialogs, but arrays work nicely no matter how many elements
        var parentObj = this;
        while (parentObj && (!app._page || parentObj != app._page.root)) {
            if (parentObj instanceof wm.Layer) layers.push(parentObj);
            else if (parentObj instanceof wm.Dialog) dialogs.push(parentObj);
            if (parentObj.parent) parentObj = parentObj.parent;
            else if (parentObj.owner instanceof wm.Page && parentObj.owner.owner instanceof wm.Control) parentObj = parentObj.owner.owner;
            else parentObj = null;
        }

        var f = dojo.hitch(obj, callback);
        this._layerConnections = [];
        dojo.forEach(layers, dojo.hitch(this, function(l) {
            this._layerConnections.push(this.connect(l, "onShow", this, function() {
                if (dojo.every(layers, function(l2) {
                    return l2.isActive();
                }) && dojo.every(dialogs, function(l2) {
                    return l2.showing;
                })) {
                    f();
                }
            }));
        }));

        dojo.forEach(dialogs, dojo.hitch(this, function(d) {
            this._layerConnections.push(this.connect(d, "setShowing", this, function() {
                if (d.showing && !d._transitionToHiding) { // transition handles case where showing is true, but animation is running that will have it hidden very soon
                    if (dojo.every(layers, function(l2) {
                        return l2.isActive();
                    }) && dojo.every(dialogs, function(l2) {
                        return l2.showing;
                    })) {
                        f();
                    }
                }
            }));
        }));

    },
    disconnectFromAllLayers: function() {
        dojo.forEach(this._layerConnections, dojo.hitch(this, function(c) {
            dojo.disconnect(c);
            this._connections = wm.Array.removeElement(this._connections, c);
        }));
        delete this._layerConnections;
    },
    isAncestor: function(inParent) {
        var o = this.parent;
        while (o && o != inParent) {
            o = o.parent;
        }
        return (o == inParent);
    },

    //===========================================================================
    // Name & Id
    //===========================================================================
    updateId: function() {
        this.inherited(arguments);
        if (this.domNode) {
            var rid = this.getRuntimeId();
            this.domNode.rid = rid;
            this.domNode.id = rid.replace(/\./g, "_");
        }
    },
    //===========================================================================
    // Ownership
    //===========================================================================
    getUniqueName: function(inName) {
        return wm.findUniqueName(inName, [this, this.components, this.widgets]);
    },
    //===========================================================================
    // Parentage
    //===========================================================================
    setName: function(inName) {
        if (!inName) return;
        if (this.parent) this.parent.removeWidget(this);
        this.addRemoveDefaultCssClass(false);
        this.inherited(arguments);
        if (this.parent) this.parent.addWidget(this);
        this.addRemoveDefaultCssClass(true);
    },
    addWidget: function(inWidget) {
        this.widgets[inWidget.name] = inWidget;
        var p = this.containerNode || this.domNode;
        if (inWidget.domNode.parentNode != p) {
            p.appendChild(inWidget.domNode);
        }
    },
    /* NOTE: I don't see this called anywhere */
    insertDomNodes: function() {
        wm.forEachProperty(this.widgets, function(w, name) {
            w.insertDomNodes();
        });

        var parentPage = this.getParentPage();
        try {
            var a = 1;
            if ((!parentPage || parentPage._disableRendering) && this.invalidCss) {
                this.renderCss();
                this.invalidCss = false;
            }

            var p = this.containerNode || this.parentNode || this.parent.domNode;
            if (this.domNode.parentNode != p && this.domNode.parentNode != window.document.body) {
                p.appendChild(this.domNode);
            }
        } catch (e) {
            console.log("ERROR INSERTING DOM NODES FOR " + this.name);
        }
        //  }
    },
    leafFirstRenderCss: function() {
        wm.forEachProperty(this.widgets, function(w, name) {
            w.leafFirstRenderCss();
        });
        if (this.invalidCss) {
            this.render(1);
        }
    },
    removeWidget: function(inWidget) {
        if (this.widgets) delete this.widgets[inWidget.name];
    },
    adjustChildProps: function(inCtor, inProps) {
        if (wm.isClassInstanceType(inCtor, wm.Control))
        // assignChildrenToOwner allows a widget to be owned by a container, the container is owned by the page, and that widget's children are also owned by the page
        dojo.mixin(inProps, {
            owner: this._assignChildrenToOwner || this.owner,
            parent: this
        });
        else this.inherited(arguments);
    },


    //===========================================================================
    // Bounds
    //===========================================================================
    // BC -->
    doSetSizeBc: function() {
        /*if (!this.width) {
      this.setSizeProp("width", "100%");
      }
      if (!this.height) {
      this.setSizeProp("height", "100%");
      }*/
        if (this.sizeUnits == "flex") {
            this.setFlex(this.size);
        } else if (this.sizeUnits) {
            var b = this.getParentBox(),
                p = {
                    v: "height",
                    h: "width"
                }[b];
            this.setSizeProp(p, this.size + this.sizeUnits);
        } else if (this.flex) {
            this.setFlex(this.flex);
        }
    },
    setFlex: function(inFlex) {
        var box = this.getParentBox();
        if (box) {
            var ex = {
                h: "width",
                v: "height"
            }[box];
            this.setSizeProp(ex, inFlex * 100 + "%");
            this._boundsDirty = true;
        } else {
            this.setSizeProp("width", inFlex * 100 + "%");
            this.setSizeProp("height", inFlex * 100 + "%");
        }
    },
    /* mkantor: Commented out 4/14/2010; presumed WM 4.x only
       isFlex: function() {
       var box = this.getParentBox();
       if (!box)
       return false;
       var ex = {h: "width", v: "height"}[box];
       return (this[ex].indexOf("flex")>=0);
       },
    */
    // <-- BC
    getScrollMargins: function() {
        if (wm.isMobile) {
            return {
                w: (this.scrollY || this._xscrollY) ? 2 : 0,
                h: (this.scrollX || this._xscrollX) ? 2 : 0
            };
        } else {
            return {
                w: (this.scrollY || this._xscrollY) ? 17 : 0,
                h: (this.scrollX || this._xscrollX) ? 17 : 0
            };
        }
        /*
      if (!this.autoScroll) {
      return {w: (this.scrollY) ? 17 : 0, h: (this.scrollX) ? 17 : 0};
      } else {
      return {w: (this._xscrollY || this.domNode.style.overflow == "auto") ? 17 : 0, h: (this._xscrollX || this.domNode.style.overflow == "auto") ? 17 : 0};
      }
    */
    },
    isReflowEnabled: function() {
        if (this._cupdating) return false;
        if (this.owner) {
            if (wm.isInstanceType(this.owner, wm.Control)) return this.owner.isReflowEnabled();
            else {
                return !this.owner._loadingPage;
            }
        }
        return true;
    },
    padBorderMarginChanged: function() {
        this.inherited(arguments);

        if (!this._doingAutoSize) this._needsAutoSize = true;

        if (this.isReflowEnabled()) {
            if (this.parent) this.parent.reflow();
            else {
                this.render();
                wm.fire(this, "flow");
            }
        }
    },
    /**
       Update width and height properties after bounds change.
    */
    boundsResized: function() {
        var box = dojo.marginBox(this.dom.node);
        if (this.bounds.w != box.w) {
            this.width = this.bounds.w + "px";
        }
        if (this.bounds.h != box.h) {
            this.height = this.bounds.h + "px";
        }
        this.updateBounds();
    },
    /**
       Update bounds and flex properties based on width/height properties
    */
    updateBounds: function() {
        //this.domNode.flex = 0;
        //this.fluidSize = 0;
        this._percEx = {
            w: 0,
            h: 0
        };
        //
        //var pd = this.getParentBox();
        //
        var su = wm.splitUnits(this.width);
        var w = su.value;
        switch (su.units) {
            // FIXME: 'flex' and 'em' are deprecated, probably this should be in BC block
        case "flex":
            w *= 100;
            this._percEx.w = w;
            this.width = w + "%";
            w = NaN;
            break;
        case "em":
            w *= 18;
            this.width = w + "px";
            break;
        case "%":
            this._percEx.w = w;
            w = NaN;
            break;
        }
        //
        su = wm.splitUnits(this.height);
        var h = su.value;
        switch (su.units) {
            // FIXME: 'flex' and 'em' are deprecated, probably this should be in BC block
        case "flex":
            h *= 100;
            this._percEx.h = h;
            this.height = h + "%";
            h = NaN;
            break;
        case "em":
            h *= h * 18;
            this.height = h + "px";
            break;
        case "%":
            this._percEx.h = h;
            h = NaN;
            break;
        }

        this.setBounds(NaN, NaN, w, h);
        //this.setBounds(this.left, this.top, w, h);
    },
    // return the 'box' setting of our parentNode
    getParentBox: function() {
        var n = (this.domNode || 0).parentNode;
        return n && (n.box || (n.getAttribute && n.getAttribute("box"))) || (this.parent || 0).box || '';
    },

    adjustSetSizeProp: function(n, v) {
        return v;
    },
    setSizeProp: function(n, v, inMinSize) {
        // We either have a minSize passed in from user set properties, or we let the widget itself decide what its minimum size should be.
        var minName = "min" + wm.capitalize(n);
        var getMin = "getMin" + wm.capitalize(n) + "Prop";
        var minSize = !wm.isMobile && inMinSize || this[getMin]();

        v = this.adjustSetSizeProp(n, v);

        if (this[n] == v && this[minName] == inMinSize) {
            if (v.match(/px/) && parseInt(v) != this.bounds[(n == "height") ? "h" : "w"]) {;
            } else {
                return;
            }
        }

        this[n] = v;
        this[minName] = inMinSize;

        // If widget suppports resizing, and isn't in the middle of doing an autoSize, then it now needs to be autoResized as its width or height have changed
        if (!this._doingAutoSize) {
            this._needsAutoSize = true;

            // A setSize call that is not made while doing autoSize means we are no longer an autosize widget
            if (this.autoSizeHeight && n == "height") this.autoSizeHeight = false;
            if (this.autoSizeWidth && n == "width") this.autoSizeWidth = false;
        }

        // MK: One line fix added Feb 18 2010:
        // Because the domNode of the designWrapper is not getting updated, we need to set invalidCss to true.  May prove unnecessary.
        if (this.designWrapper) this.designWrapper.invalidCss = true;

        if (!this._loading) this.updateBounds();
        if (this.isReflowEnabled() && this.showing) {
            this.reflowParent();
            if (this._isDesignLoaded && this.parent instanceof wm.Container) {
                var parent = this.parent
                wm.job(parent.getRuntimeId() + ".designResize", 50, function() {
                    parent.designResizeForNewChild();
                });
            }
        }
    },
    setWidth: function(inWidth) {
        this.setSizeProp("width", inWidth, this.minWidth);
    },
    setHeight: function(inHeight) {
        this.setSizeProp("height", inHeight, this.minHeight);
    },
    setMinWidth: function(inMinWidth) {
        inMinWidth = (inMinWidth) ? parseInt(inMinWidth) : 0;
        /*
    if (inMinWidth > this.bounds.w) {
        this.width = inMinWidth + "px";
    }
    */
        this.setSizeProp("width", this.width, inMinWidth);
    },
    setMinHeight: function(inMinHeight) {
        inMinHeight = (inMinHeight) ? parseInt(inMinHeight) : 0;
        /*
    if (inMinHeight > this.bounds.h) {
        this.height = inMinHeight + "px";
    }
    */
        this.setSizeProp("height", this.height, inMinHeight);
    },

    // this method is related to set/getMinWidth/Height, but whereas set/getMinWidth/Height are basic setters/getters of the minWidth/minHeight property,
    // these methods are designed to allow each object to calculate at runtime what its preferred minimum is... unless one has been specified by the user.
    // NOTE: minWidth/minHeight are ignored if size is set in px instead of %.  minHeight/minWidth may also kick in for fitToContent containers.
    getMinWidthProp: function() {
        return parseInt(this.minWidth) || 30;
    },
    getMinHeightProp: function() {
        return parseInt(this.minHeight) || 15;
    },
    /*
      setMaxWidth: function(inMaxWidth) {
      inMaxWidth = parseInt(inMaxWidth) || 0;
      this.setSizeProp("width", this.width, this.minWidth, inMaxWidth);
      },
    */
    setMaxHeight: function(inMaxHeight) {
        inMaxHeight = parseInt(inMaxHeight) || 0;
        this.maxHeight = inMaxHeight;
        if (inMaxHeight > this.bounds.h) this.reflowParent();
    },


    getDomHeight: function() {
        return dojo.coords(this.domNode, false).h;
    },

    // Returns integer value in pixels
    getDomWidth: function() {
        return dojo.coords(this.domNode, false).w;
    },

    /* This should work, but risks the UI being rather jumpy, so best to provide custom method for each widget where possible */
    doAutoSize: function(setSize, force) {
        if (this._doingAutoSize || !this.autoSizeHeight && !this.autoSizeWidth) return;
        if (!force && !this._needsAutoSize) return;

        if (this.isAncestorHidden()) {
            return;
        }


        this._doingAutoSize = true;
        this._needsAutoSize = false;

        if (this.autoSizeWidth) {
            this.domNode.style.width = "";
            var neww = dojo.coords(this.domNode).w;
            if (this.minWidth && this.minWidth > neww) neww = this.minWidth;
            if (setSize) {
                this.setWidth(neww + "px");
            } else {
                this.bounds.w = neww;
                this.domNode.style.width = neww + "px";
            }
        }

        if (this.autoSizeHeight) {
            this.domNode.style.height = "";
            var newh = dojo.coords(this.domNode).h;
            if (this.minHeight && this.minHeight > neww) newh = this.minHeight;
            if (setSize) {
                this.setHeight(newh + "px");
            } else {
                this.bounds.h = newh;
                this.domNode.style.height = newh + "px";
            }
        }
        if (this.isDesignLoaded() && studio.designer.selected == this) setTimeout(dojo.hitch(studio.inspector, "reinspect"), 100);
        this._doingAutoSize = false;
    },

    setAutoSizeWidth: function(inAutoSize) {
        this.autoSizeWidth = inAutoSize;
        if (this.autoSizeWidth) {
            if (this._percEx.w) {
                this.width = this.bounds.w + "px";
                this._percEx.w = 0;
            }
            this.doAutoSize(1, 1);
        }
    },
    setAutoSizeHeight: function(inAutoSize) {
        this.autoSizeHeight = inAutoSize;
        if (this.autoSizeHeight) {
            if (this._percEx.h) {
                this.height = this.bounds.h + "px";
                this._percEx.h = 0;
            }
            this.doAutoSize(1, 1);
        }
    },

    // If its chrome, overflow needs to be turned off, then on again for autoScrolling to be enabled but for the scrollbars to be hidden.
    // Insure that only one onidle is queued per node.
    // appears to be fixed in chrome 11
    disruptChromeOverflow: function(propName) {},
    //===========================================================================
    // Rendering; forceRender is a way to skip the isReflowEnabled test
    //===========================================================================
    render: function(forceRender) {
        if (forceRender || this.isReflowEnabled()) {
            this.renderCss();
        } else {
            this.invalidCss = true;
        }
        return true;
    },

    renderCss: function() {
        if (!this.invalidCss) return;
        this.invalidCss = false;

        // these should be called only once per object
        var cssObj = this.buildCssSetterObj();
        // some browsers are faster to set via cssText... but its NOT faster to reset them via cssText using our method of appending to the css string after an initial set of values have been stored.
        if (!this.renderedOnce && (dojo.isFF || dojo.isSafari || dojo.isChrome)) {
            this.setCssViaCssText(cssObj);
            this.renderedOnce = 1;
        } else {
            this.setCssViaDom(cssObj);
        }

        // handles special case where a call to render bounds neesd to call render which calls renderCss which should NOT
        // then call renderBounds again.
        if (!this.noRenderBounds) this.renderBounds();
    },
    buildCssSetterObj: function() {
        if (!this._appliedStyles) {
            this._appliedStyles = {};
        }

        var marginSplitter = this.getCssSplitter(this.margin);
        var paddingSplitter = this.getCssSplitter(this.padding);
        var borderSplitter = this.getCssSplitter(this.border);


        if (this.margin.indexOf(",") == -1 && this.margin.indexOf(" ") != -1) {
            marginSplitter = " ";
        }

        var paddArr = this.padding.split(paddingSplitter);
        var overflow = ((this.autoScroll || this._xscrollX || this._xscrollY) && (!wm.isFakeMobile || this instanceof wm.Container == false) ? "auto" : "hidden");
        var stylesObj;

        var margins = (this.margin || "0").split(marginSplitter);
        var borders = (this.border || "0").split(borderSplitter);
        var paddings = (this.padding || "0").split(paddingSplitter);


        if (margins.length == 1) {
            margins[1] = margins[2] = margins[3] = margins[0];
        } else if (margins.length == 2) {
            margins[2] = margins[0];
            margins[3] = margins[1];
        }

        if (borders.length == 1) {
            borders[1] = borders[2] = borders[3] = borders[0];
        } else if (borders.length == 2) {
            borders[2] = borders[0];
            borders[3] = borders[1];
        }

        if (paddings.length == 1) {
            paddings[1] = paddings[2] = paddings[3] = paddings[0];
        } else if (paddings.length == 2) {
            paddings[2] = paddings[0];
            paddings[3] = paddings[1];
        }
        /* When the user zooms the browser, border, margin and padding get mucked up, and ruin all of our calculations.
         * Use the ratio in _currentZoomLevel to alter padding/margin/border so that they result in the desired number of pixels.
         * Widths of 10px are NOT altered.  Calculations break down for zoomLevel > 1.4.  High enough zoom level and browsers
         * stop mucking with pixels
         */
        if (app._currentZoomLevel && app._currentZoomLevel > 1 && app._currentZoomLevel < 1.4) {
            for (var i = 0; i < margins.length; i++) {
                if (margins[i] % 10) {
                    margins[i] *= app._currentZoomLevel;
                }
            }
            for (var i = 0; i < paddings.length; i++) {
                if (paddings[i] % 10) {
                    paddings[i] *= app._currentZoomLevel;
                }
            }
            for (var i = 0; i < borders.length; i++) {
                if (borders[i] % 10) {
                    borders[i] *= app._currentZoomLevel;
                }
            }
        }


        if (this.designBorderState) {
            stylesObj = {
                margin: (margins.join("px ") || 0) + "px",
                padding: (paddings.join("px ") || 0) + "px",
                backgroundColor: this.backgroundColor,

                overflowX: this.scrollX ? "auto" : overflow,
                overflowY: this.scrollY ? "auto" : overflow
            };
            var bordersWidth = "", bordersStyle = "", bordersColor = "";
            if (this.designBorderState.t) {
            	bordersWidth += "1px ";
            	bordersStyle += "dashed ";
            	bordersColor += "#C1C1C1 ";
            } else {
            	bordersWidth += this.borderExtents.t + "px ";
            	bordersStyle += "solid ";
            	bordersColor += this.borderColor + " ";
            }
            if (this.designBorderState.r) {
            	bordersWidth += "1px ";
            	bordersStyle += "dashed ";
            	bordersColor += "#C1C1C1 ";
            } else {
            	bordersWidth += this.borderExtents.r + "px ";
            	bordersStyle += "solid ";
            	bordersColor += this.borderColor + " ";
            }
            if (this.designBorderState.b) {
            	bordersWidth += "1px ";
            	bordersStyle += "dashed ";
            	bordersColor += "#C1C1C1 ";
            } else {
            	bordersWidth += this.borderExtents.b + "px ";
            	bordersStyle += "solid ";
            	bordersColor += this.borderColor + " ";
            }
            if (this.designBorderState.l) {
            	bordersWidth += "1px";
            	bordersStyle += "dashed";
            	bordersColor += "#C1C1C1";
            } else {
            	bordersWidth += this.borderExtents.l + "px";
            	bordersStyle += "solid";
            	bordersColor += this.borderColor;
            }
            stylesObj.borderStyle = bordersStyle;
            stylesObj.borderColor = bordersColor;
            stylesObj.borderWidth = bordersWidth;
        } else {
            var device = this._isDesignLoaded ? studio.currentDeviceType : wm.device;
            stylesObj = {
                margin: (margins.join("px ") || 0) + "px",
                padding: (paddings.join("px ") || 0) + "px",
                borderStyle: "solid",
                borderWidth: (borders.join("px ") || 0) + "px",
                borderColor: this.borderColor,
                backgroundColor: this.backgroundColor,
                overflowX: device != "desktop" ? "hidden" : this.scrollX ? "auto" : overflow,
                overflowY: this.scrollY ? "auto" : overflow
            }
        }

        if (this.styles && !wm.isEmpty(this.styles)) {
            stylesObj = dojo.mixin(stylesObj, this.styles);
        }
        return stylesObj;
    },
    setCssViaCssText: function(cssObj) {
        if (!this.domNode) return;

        var cssTextItems = [];
        var skipItems = ["backgroundColor", "padding", "margin",
        "borderTopWidth", "borderTopStyle", "borderTopColor",
        "borderBottomWidth", "borderBottomStyle", "borderBottomColor",
        "borderLeftWidth", "borderLeftStyle", "borderLeftColor",
        "borderRightWidth", "borderRightStyle", "borderRightColor",
        "overflowX", "overflowY"];
        wm.forEachProperty(cssObj, dojo.hitch(this, function(styleValue, styleName) {
        	if (dojo.indexOf(skipItems, styleName) == -1) {
        		if (styleName == "backgroundGradient") {
		            var gradient = cssObj.backgroundGradient;
                if (gradient) {
  		            inValue = wm.getBackgroundStyle(gradient.startColor, gradient.endColor, gradient.colorStop, gradient.direction, "");
  		            if (dojo.isIE < 10) {
  		                cssTextItems.push("filter: " + inValue);
  		            } else {
  		                cssTextItems.push("background: " + inValue);
  		            }
                }
		        } else if (styleName == "borderRadius") {
					var prefix = "";
			   		   		if (dojo.isWebKit) {
								prefix = "-webkit-";
			   		   		}

				   		   	var values = String(styleValue).split(/\s+/);
				           	inValue = "";
							for (var i = 0; i < values.length; i++) {
								if (values[i].match(/^\d+$/)) values[i] += "px";
							}
							if (values.length == 1) values[1] = values[2] = values[3] = values[0];
							if (values.length == 2) {
								values[3] = values[0];
								values[2] = values[1];
							}
							if (values.length == 3) {
								values[3] = "0px";
							}
							cssTextItems.push(prefix + "border-top-left-radius: " + values[0]);
							cssTextItems.push(prefix + "border-top-right-radius: " + values[1]);
							cssTextItems.push(prefix + "border-bottom-left-radius: " + values[2]);
							cssTextItems.push(prefix + "border-bottom-right-radius: " + values[3]);
				   	} else {
    			        if (styleName == "backgroundImage") {
    			        	if (this._isDesignLoaded && (styleValue.indexOf("url") != 0 && styleValue.indexOf("http") !=0 && styleValue.indexOf("/") != 0)) {
    							styleValue = this.getPath() + styleValue;
    						}
    			        	if (styleValue.indexOf("url") != 0) styleValue = "url(" + styleValue + ")";
    			        }
    		            cssTextItems.push(styleName.replace(/([A-Z])/g, function(inLetter) {
    		                return "-" + inLetter.toLowerCase();
    		            }) + ":" + styleValue);
    		        }
		        this._appliedStyles[styleName] = styleValue;
	        }
        }));

        /* margin/padding/border all affect the layout and sizing of widgets and can't be left to stylesheets */
        cssTextItems.push("margin:" + cssObj.margin);
        cssTextItems.push("padding:" + cssObj.padding);
        /*
        if (this.designBorderState) {
            cssTextItems.push("border-top:" + cssObj.borderTopStyle + " " + cssObj.borderTopWidth + " " + cssObj.borderTopColor);
            cssTextItems.push("border-bottom:" + cssObj.borderBottomStyle + " " + cssObj.borderBottomWidth + " " + cssObj.borderBottomColor);
            cssTextItems.push("border-left:" + cssObj.borderLeftStyle + " " + cssObj.borderLeftWidth + " " + cssObj.borderLeftColor);
            cssTextItems.push("border-right:" + cssObj.borderRightStyle + " " + cssObj.borderRightWidth + " " + cssObj.borderRightColor);
        } else {*/
            cssTextItems.push("border-style:" + cssObj.borderStyle);
            cssTextItems.push("border-width:" + cssObj.borderWidth);
            cssTextItems.push("border-color:" + cssObj.borderColor);
//        }
        if (cssObj.backgroundColor) cssTextItems.push("background-color:" + cssObj.backgroundColor);
        cssTextItems.push("overflow-x:" + cssObj.overflowX);
        cssTextItems.push("overflow-y:" + cssObj.overflowY);
        if (wm.isMobile && dojo.isWebKit && (cssObj.overflowY == "auto" || cssObj.overflowY == "scroll")) {
            cssTextItems.push("-webkit-overflow-scrolling: touch");
        }

        // why is it +=?  So that position: absolute isn't blown away; so that any custom widget styles aren't blown away.
        // How efficient is resetting cssText (cssText is "border:5", how efficient is cssText += ";border:10" handled?)
        this.domNode.style.cssText += cssTextItems.join(";");
    },

	setCssViaDom: function(cssObj) {
	    if (!this.domNode) return;
	    var s = this.domNode.style;
	    var borderSet = false;
	    wm.forEachProperty(cssObj, dojo.hitch(this, function(styleValue, styleName) {
		try {

		    if (this._appliedStyles[styleName] != styleValue) {
				if (styleName == "backgroundGradient") {
				    var gradient = cssObj[styleName];
            if (gradient) {
  				    inValue = wm.getBackgroundStyle(gradient.startColor,gradient.endColor,gradient.colorStop,gradient.direction, "");
  				    if (dojo.isIE < 10) {
  					     s.filter = inValue;
  				    } else {
  					     s.background = inValue;
  				    }
            }
				} else {
					if (styleName == "backgroundImage") {
						if (this._isDesignLoaded && (styleValue.indexOf("url") != 0 && styleValue.indexOf("http") !=0 && styleValue.indexOf("/") != 0)) {
							styleValue = this.getPath() + styleValue;
						}
			        	if (styleValue.indexOf("url") != 0) styleValue = "url(" + styleValue + ")";
			        }
				    s[styleName] = styleValue;
				    this._appliedStyles[styleName] = styleValue;
				}
		    }
		    if (wm.isMobile && dojo.isWebKit && (s.overflowY == "scroll" || s.overflowY == "auto")) {
			    s.WebkitOverflowScrolling = "touch";
		    }
		} catch(e) {
		    console.error("Invalid style for " + this.name + "; " + styleName + ": " + cssObj[styleName]);
		}
	    }));
	},
	getCssSplitter: function (value) {
	    var splitter = ",";
	    if (value) {
	        value = dojo.trim(String(value));
		if (value.indexOf(",") == -1 && value.indexOf(" ") != -1)
		{
		    splitter = " ";
		}
	    }
	    return splitter;
	},
	renderBounds: function() {
	    var isChanged = false;
	    if (this.dom) {
		var b = this.getStyleBounds();
		isChanged = this.dom.setBox(b, wm.AbstractEditor && this.singleLine && this instanceof wm.AbstractEditor == false);
	    }
	    // bc
	    if (this.designWrapper) {
		this.designWrapper.controlBoundsChange();
		this.designWrapper.renderBounds();
	    }
	    return isChanged;
	},
	//===========================================================================
	// Flow
	//===========================================================================
	// FIXME: controversial update implementation cribbed from Layers.js
	/*
	  beginUpdate: function() {
	  this.domNode._reflowing = true;
	  },
	  endUpdate: function() {
	  this.domNode._reflowing = false;
	  },
	*/
	reflow: function() {
	    //wm.fire(this.domNode, "reflow");
	},
	reflowParent: function() {
	    wm.fire(this.parent, "reflow");
	    //wm.fire(this.domNode.parentNode, "reflow");
	},
	setScrollX: function(inScrollX) {
	    this.scrollX = inScrollX;
	    this.invalidCss = true;
	    this.render();
	    this.reflowParent();
	},
	setScrollY: function(inScrollY) {
	    this.scrollY = inScrollY;
	    this.invalidCss = true;
	    this.render();
	    this.reflowParent();
	},
	setAutoScroll: function(inAutoScroll) {
	    this.autoScroll = inAutoScroll;
	    if (inAutoScroll) {
			if (this.isDesignLoaded() && (this.scrollX || this.scrollY)) {
			    this.scrollX = false;
			    this.scrollY = false;
	            if (dojo.indexOf(studio.designer.selected, this) != -1) {
					studio.inspector.reinspect();
				}
			}
	    }

	    // Update the css without also updating the bounds (TODO: make this mechanism less cumbersome)
	    this.noRenderBounds=true;
	    this.invalidCss = true;
	    this.renderCss();
	    delete this.noRenderBounds;
	},

	//===========================================================================
	// Convenience
	//===========================================================================
	/**
	   Set <a href="#showing">showing</a> property true.
	*/
	show: function() {
	    this.setValue("showing", true);
	},
	/**
	   Set <a href="#showing">showing</a> property false.
	*/
	hide: function() {
	    this.setValue("showing", false);
	},
	/**
	   Set <a href="#disabled">disabled</a> property true.
	*/
	disable: function() {
	    this.setValue("disabled", true);
	},
	/**
	   Set <a href="#disabled">disabled</a> property false.
	*/
	enable: function() {
	    this.setValue("disabled", false);
	},
	toString: function(inText) {
	    var t = inText || "";
	    if (!this.showing)
		t += " (" + wm.getDictionaryItem("wm.Control.toString_HIDDEN") + ")";
	    return this.inherited(arguments, [t]);
	},
	//===========================================================================
	// Setters
	//===========================================================================
	setParent: function(inParent) {
	    var oldParent = this.parent;
	    var newParent = this.parent = inParent;

	    // Tricky new addition: if the parent has a containerWidget AND the parent OWNS that containerWidget, then switch parents!
	    if (inParent && inParent.containerWidget && inParent.containerWidget.owner == inParent && !wm.isInstanceType(inParent.containerWidget.owner, wm.Composite)) {
		   newParent = this.parent = inParent.containerWidget;
        }
	    // If the new parent is not the same as the old parent, remove the widget from the old parent
	    // and remove the control from the old parent (Note: lookup difference between widget and control)
	    if (oldParent && oldParent != newParent && !oldParent.isDestroyed) {
    		oldParent.removeWidget(this);
    		// BC: we still have non-container parents (e.g. wm.Dialog)
    		if (oldParent.removeControl) {
    		    oldParent.removeControl(this);
            }
	    }

	    if (!this._cupdating) {
    		if (newParent) {
    		    this.appendDOMNode(newParent);
    		} else if (this.domNode && this.domNode.parentNode) {
    		    this.domNode.parentNode.removeChild(this.domNode);
    		}
	    }

	    // If there is a new parent, add this component to its widgets and controls
	    /*
	      if (newParent) {
	      newParent.addWidget(this);
	      // BC: we still have non-container parents (e.g. wm.Dialog)
	      if (newParent.addControl)
	      newParent.addControl(this);
	      }
	      // BC: wm.Layout
	      else if (this.parentNode && this.domNode) {
	      this.parentNode.appendChild(this.domNode);
	      }
	    */
	    if (newParent && oldParent) {
    		dojo.publish("wmwidget-parentChange", [oldParent, newParent, this]);
        }
	    if ((this._isDesignLoaded === undefined ? this.isDesignLoaded() : this._isDesignLoaded) && this.owner == studio.page && !this.owner._loadingPage && inParent instanceof wm.Container) {
    		wm.job(inParent.getRuntimeId() + ".designResize", 50, function() {
    		    inParent.designResizeForNewChild();
    		});
	    }
	},
	appendDOMNode: function(inParent){
	    var newParent = inParent;
	    if (newParent) {
		newParent.addWidget(this);
		// BC: we still have non-container parents (e.g. wm.Dialog)
		if (newParent.addControl)
		    newParent.addControl(this);
	    }
	    // BC: wm.Layout
	    else if (this.parentNode && this.domNode) {
		var node = this.parentNode;
		node.appendChild(this.domNode);
	    }
	},
    getIndexInParent: function() {
    	if (this.parent && this.parent instanceof wm.Container) // wm.Designer is not a container
    	    return this.parent.indexOfControl(this);
    	return -1;
    },
    setIndexInParent: function(inIndex) {
    	if (this.parent)
    	    this.parent.moveControl(this, inIndex);
    },
	canChangeShowing: function() {
	    return true;
	},
	setShowing: function(inShowing,forceChange) {
	    var s = Boolean(inShowing);
	    if (!this.canChangeShowing())
		return;
	    // always show widgets at design time whose showing property is bound
	    if (this._isDesignLoaded && this.$.binding && this.$.binding.wires.showing) {
		s = true;
	    }
	    if (forceChange || this.showing != s) {
		this.showing = s;
		this.domNode.style.display = s ? '' : 'none';
		this.reflowParent();
	    }
	},
	/**
	   Set disabled property for this widget.<br/>
	   <br/>
	   Some widgets change behavior or display based on the disabled state.<br>
	   @param {Boolean} inDisabled True to set disabled.
	*/
	setDisabled: function(inDisabled) {
	    var d = Boolean(inDisabled);
	    this.disabled = d;
	    this._disabled = d || this._parentDisabled;
	    wm.forEachProperty(this.widgets, dojo.hitch(this, function(w, name) {
    		w.setParentDisabled(this._disabled);
	    }));

	    /* foreach property fails on unnamed widgets; but not all widgets have a this.c$ */
	    if (this.c$) {
            dojo.forEach(this.c$, function(w) {
                if (!w.name) {
                    w.setParentDisabled(this._disabled);
                }
            }, this);
        }
	    dojo.toggleClass(this.domNode, "Disabled", this._disabled);
	},
    setParentDisabled: function(inDisabled) {
	this._parentDisabled = inDisabled;
	this.setDisabled(this.disabled);
    },
	setBackgroundColor: function(inColor) {
	    this.backgroundColor = inColor;
	    this.invalidCss = true;
	    this.render();
	},
	setBorderColor: function(inColor) {
	    this.borderColor = inColor;
	    this.invalidCss = true;
	    this.render();
	},
	//===========================================================================
	// Default and User Style Classes
	//===========================================================================
	addRemoveDefaultCssClass: function(inAdd) {
	    if (this.owner)
		dojo[inAdd ? "addClass" : "removeClass"](this.domNode, this.owner.declaredClass + '-' + this.name);
	},
	getUserNodeClasses: function(inNodeName) {
	    var klasses = this._classes;
	    for (var i in klasses) {
		if (inNodeName == i)
		    return klasses[i].join(' ');
	    }
	    return "";
	},
	initUserClasses: function() {
	    // bc
	    if (dojo.isArray(this._classes))
		this._classes = {domNode: this._classes};
	    var klasses = this._classes;
	    for (var i in klasses)
		this.initUserNodeClasses(klasses[i], i);
	},
	initUserNodeClasses: function(inClasses, inNodeName) {
	    var k = inClasses || [], n = this[inNodeName];
	    if (n)
		// add classes together for speed; we don't care about checking if the class is already on the node
		dojo.addClass(n, k.join(' '));
	},
	/**
	   Add CSS class to a widget node.<br/>
	   @param {String} inClass The class to add.
	   @param {String} inNodeName (Optional) a property in this widget that references a node.
	   If ommitted, the default node is used.
	   @example this.panel.addUserClass("hilite-border");
	*/
	addUserClass: function(inClass, inNodeName) {
	    inNodeName = inNodeName || "domNode";
	    var cs = this._classes[inNodeName] = this._classes[inNodeName] || [];
	    cs.push(inClass);
	    var n = this[inNodeName];
	    if (n)
		dojo.addClass(n, inClass);
	},
	/**
	   Remove a CSS class from a widget node.<br/>
	   @param {String} inClass The class to remove.
	   @param {String} inNodeName (Optional) a property in this widget that references a node.
	   If ommitted, the default node is used.
	   @example this.panel.removeUserClass("hilite-border");
	*/
    removeUserClass: function(inClass, inNodeName) {
        inNodeName = inNodeName || "domNode";
        var n = this[inNodeName];
        if (n) dojo.removeClass(n, inClass);
        var cs = this._classes[inNodeName] || [];
        for (var i = 0, c; c = cs[i]; i++) {
            if (c == inClass) {
                cs.splice(i--, 1);
            }
        }
        if (!cs.length) delete this._classes[inNodeName];
    },

    setStyle: function(inStyle, inValue) {
        if (inValue === undefined || inValue === null) inValue = "";
        if (inStyle == "border" || inStyle == "borderColor" || inStyle == "margin" || inStyle == "padding") {
            return this.setProp(inStyle, inValue);
        }

        if (!this.styles) {
            this.styles = {};
        }
        if (inValue === null || inValue === undefined || inValue === "") {
            delete this.styles[inStyle];
        } else {
            this.styles[inStyle] = inValue;
        }

        switch(inStyle) {
	        case "backgroundGradient":

	            if (inValue) {
	                inValue = wm.getBackgroundStyle(inValue.startColor, inValue.endColor, inValue.colorStop, inValue.direction, "");
	            } else {
	                inValue = "";
	            }
	            if (dojo.isIE < 10) {
	                this.domNode.style.filter = inValue;
	            } else {
	                this.domNode.style.background = inValue;
	            }
	            break;
		   case "borderRadius":
				var prefix;
   		   		if (dojo.isWebKit) {
   		   			prefix = "Webkit"; /* Mostly here for android 2 browser */
   		   		}
	   		   	if (prefix) prefix += "B";
	   		   	else prefix = "b";
	           	var values = String(inValue).split(/\s+/);
	           	inValue = "";
				for (var i = 0; i < values.length; i++) {
					if (values[i].match(/^\d+$/)) values[i] += "px";
				}
				if (values.length == 1) values[1] = values[2] = values[3] = values[0];
				if (values.length == 2) {
					values[3] = values[0];
					values[2] = values[1];
				}
				if (values.length == 3) {
					values[3] = "0px";
				}
		   		 this.domNode.style[prefix + "orderTopLeftRadius"] = values[0];
		   		 this.domNode.style[prefix + "orderTopRightRadius"] = values[1];
		   		 this.domNode.style[prefix + "orderBottomLeftRadius"] = values[2];
		   		 this.domNode.style[prefix + "orderBottomRightRadius"] = values[3];
		   		 break;
		   case "backgroundImage":
        		if (this._isDesignLoaded && (inValue.indexOf("url") != 0 && inValue.indexOf("http") !=0 && inValue.indexOf("/") != 0)) {
					inValue = this.getPath() + inValue;
				}
	        	if (inValue.indexOf("url") != 0) inValue = "url(" + inValue + ")";
                this.domNode.style[inStyle] = inValue;
	 	        break;
           default:
	            this.domNode.style[inStyle] = inValue;
        }
    },
    getStyle: function(inStyle) {
        if (inStyle == "border" || inStyle == "borderColor" || inStyle == "margin" || inStyle == "padding") {
            return this.getProp(inStyle);
        } else if (!this.styles) {
            return "";
        } else {
            return this.styles[inStyle] !== undefined ? this.styles[inStyle] : "";
        }
    },

	getOrderedWidgets: function() {
	    return [];
	},
	updatingEvent: function (prop, inValue){
	},

    // Only if you subscribe to these are these connected; if you subscribe then the event stops here
    onRightClick: function(event){
    },
    onMouseOver: function(event){
    },
    onMouseOut: function(event){
    },


    toHtml: function() {return "";},
    toHtmlStyles: function() {
        var style = ""; //"style='margin: " + this.margin + ";padding: " + this.padding + ";'";
        if (this.styles) {
            wm.forEachProperty(this.styles, function(value, name) {
                if (style) style += ";";
                style += name.replace(/([A-Z])/g, function(inLetter) {
                    return "-" + inLetter.toLowerCase();
                }) + ": " + value;
            });
            if (style) style = "style='" + style + "'";
        }
        return style;
    },
    customToHtml: function(inWidth) {return "";},
    print: function() {
        var html = this.toHtml(725); // 725px wide page
        var csspath = dojo.moduleUrl("wm.base.widget.themes.default").path + "print.css";
        var wavemakercsspath = dojo.moduleUrl("wm.base.styles").path + "wavemaker.css";
        var page = this.getParentPage();
        if (page) {
            var name = page.declaredClass;
            var css = wm.load("pages/" + name + "/" + name + ".css");
        }
        html = "<html><head><title>Printing " + app.declaredClass + "</title><link rel='stylesheet' type='text/css' href='" + csspath + "' /><link rel='stylesheet' type='text/css' href='" + wavemakercsspath + "'/><link rel='stylesheet' href='print.css'/>" + (css ? "<style>" + css + "</style>" : "") + "</head><body onload='print()'>" + html + "</body><html>";
        var win = window.open("", "Printing");
        if (win) {
            win.document.open("text/html");
            win.document.write(html);
            win.document.close();
        }
    },

	setHint: function(inHint) {
	    this.hint = inHint;
	    if (inHint) {
		this.createMouseOverConnect();
		this.createMouseOutConnect();
	    }
	},
	createMouseOverConnect: function() {
	    if (this.findConnection("onmouseover")) return;
	    var self = this;
	    this.connect(this.domNode, "onmouseover", function(e) {
		wm.job(self.getRuntimeId() + "MouseOverEvents", 50, function() {
		    self.mouseOver(e);
		});
	    });
	},
	createMouseOutConnect: function() {
	    if (this.findConnection("onmouseout")) return;
	    var self = this;
	    this.connect(this.domNode, "onmouseout", function(e) {
		wm.job(self.getRuntimeId() + "MouseOverEvents", 50, function() {
		    self.mouseOut(e);
		});
	    });
	},
	mouseOver: function(event) {
	    if (this.hint) {
		var self = this;
		wm.cancelJob("app.hint");
		var isShowing =  (app.toolTipDialog && app.toolTipDialog.showing);
		wm.job("app.hint", isShowing ? 0 : app.hintDelay, function() {
		    if (!self.isAncestorHidden()) {
			app.createToolTip(self.hint, self.domNode, event, self);
		    }
		});

	    }
	    this.onMouseOver(event);
	    dojo.stopEvent(event);
	},
	mouseOut: function(event) {
	    if (this.hint && app.toolTipDialog && (app.toolTipDialog.showing || wm.hasJob("app.hint"))) {
		var self = this;
		wm.job("app.hint", 500, function() {
		    if (self == app.toolTipDialog.tipOwner)
			app.hideToolTip();
		});
	    }
	    this.onMouseOut(event);
	    dojo.stopEvent(event);
	},
	onMouseOver: function(event){},
    onMouseOut: function(event){},
    getParentForm: function() {
	var w = this.parent;
	var r = this.getRoot();
	r = r && r.root;
	while (w && w != r) {
	    if (wm.isInstanceType(w, [wm.LiveFormBase, wm.DataForm])) {
			return w;
		}
		w = w.parent;
	}
    },

	setImageList: function(inImageList) {
		this.imageList = inImageList;
		this.imageListChanged();
	},
	setImageIndex: function(inImageIndex) {
		if (inImageIndex !== undefined) {
		    this.imageIndex = Number(inImageIndex);
			this.imageListChanged();
		}
	},
	imageListChanged: function() {
		var iln = this.findImageList();
		this._imageList = iln ? iln instanceof wm.ImageList ? iln : this.owner.getValueById(iln) : null;
	        this.invalidCss = true;
	    this.render(true,true);
        if (this._isDesignLoaded && this._imageList && !this._renameSubscription) {
            this._renameSubscription = this.subscribe("wmwidget-rename", dojo.hitch(this, function(inNewName, inOldName, inComponent) {
                if (inComponent == this._imageList) {
                    this.imageList = inComponent.getId();
                    this.imageListChanged();
                }
            }));
        }
	},
    getCurrentImageIndex: function() {
	    return this.imageIndex;
    },
	findImageList: function() {
		var t = this;
		while (t && !t.imageList) {
			t = t.parent;
		}
		return t ? t.imageList : null;
	},
        update: function() {
	    this.show();
	    if (this.parent) {
		this.parent.update();
	    }
	}

    });

// layout specific

/*
  wm.Control.extend({
  //fluidSize: 0,
  //alignInParent: "justified",
  //setFluidSize: function(inFluidSize) {
  //	this.fluidSize = inFluidSize;
  //	this.reflowParent();
  //}
  });

  wm.Object.extendSchema(wm.Control, {
  //fluidSize: {group: "layout"},
  });
*/

dojo.declare("wm.TouchMixin", null, {
    addTouchListener: function(optionalNode) {
        if (!this._subscriptions) {
            this._subscriptions = [];
            this._connections = [];
            this._debugSubscriptions = [];
            this.subscribe = function() {
                wm.Component.prototype.subscribe.apply(this, arguments);
            };
            this.connect = function() {
                wm.Component.prototype.connect.apply(this, arguments);
            };
            this.disconnectEvent = function() {
                wm.Component.prototype.disconnectEvent.apply(this, arguments);
            };
            // also needs a getRuntimeId method
        }
        this.connect(optionalNode || this.domNode, wm.isFakeMobile ? "mousedown" : "touchstart", this, "_onTouchStart");
        if (!wm.isFakeMobile) {
            this.connect(optionalNode || this.domNode, "touchmove", this, "_onTouchMove");
            this.connect(optionalNode || this.domNode, "touchend", this, "_onTouchEnd");
        }
        this.subscribe("wmTouchMove", dojo.hitch(this, function() {
            wm.cancelJob(this.getRuntimeId() + ".longClick");
        }));
    },
    _onTouchStart: function(e) {
        this._touchMoved = false;
        var target;
        if (e.targetTouches) {
            if (e.targetTouches.length) {
                this._touchStartY = e.targetTouches[0].clientY;
                this._touchStartX = e.targetTouches[0].clientX;
                target = e.targetTouches[0].target;
            }
        } else if ("clientY" in e) {
            this._touchStartY = e.clientY;
            this._touchStartX = e.clientX;
            target = e.target;
            this.connect(document.body, "mousemove", this, "_onTouchMove");
            this.connect(document.body, "mouseup", this, "_onTouchEnd");
        } else {
            delete this._touchStartY;
            delete this._touchStartX;
        }
        if ("_touchStartY" in this) {
            this._touchLastY = this._touchStartY;
            this._touchLastX = this._touchStartX; /* Return any value to declare this touch event ignored */
            if (this.onTouchStart(e, target)) {
                this.disconnectEvent("mousemove");
                this.disconnectEvent("mouseup");
            } else {
                wm.job(this.getRuntimeId() + ".longClick", 1000, this, "_onLongTouch");
            }
        }
    },
    _onLongTouch: function() {
        this.onLongTouch(this._touchStartX, this._touchStartY);

        // Treat an onLongTouch event as an onClick event (onTouchEnd) unless the developer
        // has setup their own onLongTouch handler
        this._onTouchEnd(null, this.onLongTouch != wm.TouchMixinOptional.prototype.onLongTouch);
    },
    onTouchStart: function(event) {},
    _onTouchMove: function(e) {
        //  e.preventDefault(); // commented out so that touching a button and then moving will count as scrolling
        var dyInitial, dyLatest, dxInitial, dxLatest;
        if (e.targetTouches) {
            if (e.targetTouches.length != 1) {
                return false;
            }
            dyInitial = e.targetTouches[0].clientY - this._touchStartY;
            dyLatest = e.targetTouches[0].clientY - this._touchLastY;
            dxInitial = e.targetTouches[0].clientX - this._touchStartX;
            dxLatest = e.targetTouches[0].clientX - this._touchLastX;
            this._touchLastY = e.targetTouches[0].clientY;
            this._touchLastX = e.targetTouches[0].clientX;
        } else {
            dyInitial = e.clientY - this._touchStartY;
            dyLatest = e.clientY - this._touchLastY;
            dxInitial = e.clientX - this._touchStartX;
            dxLatest = e.clientX - this._touchLastX;
            this._touchLastY = e.clientY;
            this._touchLastX = e.clientX;
        }
        var posY = this._touchStartY + dyInitial;
        var posX = this._touchStartX + dxInitial;



        /* If the finger has moved more than 5 pixels, its not an accidental move; */
        if (!this._touchMoved && (Math.abs(dyInitial) > 5 || Math.abs(dxInitial) > 5)) {
            this._touchMoved = true;
            wm.cancelJob(this.getRuntimeId() + ".longClick");
        }
        if (this._touchMoved) {
            this.onTouchMove(e, posY, dyInitial, dyLatest, posX, dxInitial, dxLatest);
        }
    },
    onTouchMove: function(event, yPosition, yChangeFromInitial, yChangeFromLast, xPosition, xChangeFromInitial, xChangeFromLast) {},
    _onTouchEnd: function(e, noEvents) {
        wm.cancelJob(this.getRuntimeId() + ".longClick");
        this.disconnectEvent("mousemove");
        this.disconnectEvent("mouseup");
        if (!noEvents) {
            this.onTouchEnd(e, this._touchMoved);
            if (!this._touchMoved) {
                this.onTouch(this._touchStartX, this._touchStartY);
            }
        }
    },
    onTouchEnd: function(event, isMove) {},
    onTouch: function(posX, posY) {},
    onLongTouch: function(posX, posY) {}
});

dojo.declare("wm.TouchScrollMixin", wm.TouchMixin, {
    onTouchStart: function(event) {
        this._touchTime = new Date().getTime();
        if (this._touchAnimationId) {
            window.clearInterval(this._touchAnimationId);
        }
    },
    onTouchMove: function(event, yPosition, yChangeFromInitial, yChangeFromLast, xPosition, xChangeFromInitial, xChangeFromLast) {
        var node = this._scrollNode || this.domNode;
        node.scrollTop -= yChangeFromLast;
        var newTime = new Date().getTime();
        if (this._touchTime != newTime) {
            this._touchVelocity = yChangeFromLast / (this._touchTime - newTime);
            this._touchTime = newTime;
        }
        dojo.stopEvent(event);
    },
    onTouchEnd: function(event, isMove) {

        if (isMove) {
            if (this._touchVelocity != Infinity && Math.abs(this._touchVelocity) > 0.15) {
                if (this._touchAnimationId) {
                    window.clearInterval(this._touchAnimationId);
                }
                this._touchAnimationId = window.setInterval(dojo.hitch(this, "_onAnimateScroll"), 50);
            }
        }
    },
    _onAnimateScroll: function() {
        var node = this._scrollNode || this.domNode;
        this._touchVelocity *= 0.9;
        var top = node.scrollTop;
        node.scrollTop = node.scrollTop + this._touchVelocity * 50;
        var newTop = node.scrollTop;
        var diff = Math.abs(newTop - top);
        if (diff <= 1) {
            window.clearInterval(this._touchAnimationId);
        }
    }

});


if (wm.isMobile) {
    dojo.declare("wm.TouchMixinOptional", wm.TouchMixin,{});

} else {
    dojo.declare("wm.TouchMixinOptional", null,{
	onLongTouch: function(posX, posY) {}
    });
}

if (wm.isIOS <= 4 || wm.isAndroid <= 2 || wm.isFakeMobile) {
    dojo.declare("wm.TouchScrollMixinOptional", wm.TouchScrollMixin, {});
} else {
    dojo.declare("wm.TouchScrollMixinOptional", null, {});
}
wm.Widget = wm.Control;
dojo.declare("wm.Box", wm.Widget, {}); // mostly obsolete

}

if(!dojo._hasResource["wm.base.Plugin"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.Plugin"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.Plugin");

wm.Plugin = {
	targetClass: null,
	callerFactory: function(inOverrides) {
		return function(inArgs, inNewArgs) {
			var fn = inOverrides[inArgs.callee.nom];
			if (fn)
				return fn.apply(this, inNewArgs || inArgs || []);
		}
	},
	plugin: function(inName, inClass, inProps) {
		var overrides = [];
		for (var p in inProps) {
			if (dojo.isFunction(inProps[p]) && inClass.prototype[p])
				overrides[p] = inClass.prototype[p];
		}
		inProps[inName + 'Socket'] = this.callerFactory(overrides);
		inClass.extend(inProps);
	}
}

}

if(!dojo._hasResource["wm.base.components.Variable"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.Variable"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.Variable");


// FIXME: because we cannot guarantee the global "app" is a component's application
// (because studio has an app) and the runtimeService must be local to a project
// get the app corresponding to the given component.
wm.getRuntimeService = function(inComponent) {
    var a = dojo.getObject("studio.wip.app") || app;

    return wm.fire(a, "getRuntimeService");
};

//The following lines are not being used now.  They may be used in the future to differenciate requests from Studio from
//requests deployed application.
wm.getRuntimeServiceDesignTime = function(inComponent) {
    var a = dojo.getObject("studio.wip.app") || app;
    return wm.fire(a, "getRuntimeServiceDesignTime");
};

/**
    Base class for all data handling components.
    @name wm.Variable
    @class
    @extends wm.Component
*/
dojo.declare("wm.Variable", wm.Component, {
    /** @lends wm.Variable.prototype */
    json: "",
    /**
        Type of data stored in the variable, or type of each item in the list.
        @type String
    */
    type: "",
    //primaryKeyFields: "",

    /**
        True if this variable contains a list (aka array).
        @type Boolean
    */
        saveInCookie: false,
        saveInPhonegap: false,
    isList: false,
    _updating: 0,
    _dataSchema: {},
    _greedyLoadProps: false,
    _allowLazyLoad: true,
    cursor: 0,
        _uniqueSubnardId: 1,
/*
    constructor: function(inProps) {
    },
    */
    init: function() {
        this.inherited(arguments);
        if (this._isDesignLoaded) {
            this._subscriptions.push(dojo.subscribe("wmtypes-changed", this, "wmTypesChanged"));
        }
    },
    postInit: function() {
        this.inherited(arguments);
        this._inPostInit = true;
        // optimization: we should never need bindings on subNards so not creating them
        if (!this._subNard && !this.$.binding) new wm.Binding({
            name: "binding",
            owner: this
        });
        this.setType(this.type, true);
        if (window["PhoneGap"] && this.saveInPhonegap) {
            var textdata = window.localStorage.getItem(this.getRuntimeId());
            if (textdata) this.json = textdata;
        } else if (this.saveInCookie) {
            var textdata = dojo.cookie(this.getRuntimeId());
            if (textdata) this.json = textdata;
        }
        if (this.json) this.setJson(this.json);
        else this._clearData();

        this._inPostInit = false;

        // need to reinitialize after type is set
        if (!this._updating && this.$.binding) this.$.binding.refresh();

        // widgets bound to this component won't have received any events/initial
        // data or properties if no data has yet been set
        if (this.isEmpty()) {
            this.notify();
        }
    },
    //===========================================================================
    // Type Information
    //===========================================================================
    canSetType: function(inType) {
        // type is locked to dataSet type if it is set
        if (this.dataSet && this.dataSet.type == this.type) {
            wm.logging && console.debug(this.name, "cannot set variable type because this variable has a dataSet");
            return;
        }
        return true;
    },
    setType: function(inType, noNotify) {
        this._hasChanged = false;
        if(inType == this.declaredClass || this.owner instanceof wm.Variable && inType == this.owner.declaredClass) inType = "";

        //this.unsubscribe("TypeChange-" + this.type);
        if(!this.canSetType(inType)) return;

        var t = inType;
        if(wm.isListType(t)) {
            this.isList = true;
            if(t.substring(t.length - 1) == "]") {
                t = t.slice(1, -1);
            }
            // don't reset isList if we have data; also don't reset isList if we're in postInit; the setType call in postInit should
            // not lose the user's isList setting
        } else if(!(this.data && this.data._list) && !this._inPostInit) this.isList = false;

        var hasChanged;
        if (this.type != t) {
            hasChanged = true;
        } else if (this._isDesignLoaded) {
            hasChanged = dojo.toJson(this._getSchemaForType(inType)) != dojo.toJson(this._dataSchema);
        }
        this._hasChanged = hasChanged;
        this.type = t;
        //

        if (this._proxy) {
            this._proxy.setType(this.type);
        }
        this.typeChanged(this.type);
        if (this._query && hasChanged) this._query.setType(this.type);
        if (this.json & hasChanged) {
            this.setJson(this.json);
        }
/*
            if (this._isDesignLoaded) {
                this.subscribe("TypeChange-" + inType, dojo.hitch(this, function() {
                    this.setType(inType); // reset the type if the type definition has changed
                    // Reevaluate the json for the new type
                    if (this.json)
                        this.setJson(this.json);
                }));
            }
        */
        if(!noNotify && hasChanged && inType && inType != "any") this.notify(); //  this will cause anyone bound to this object to treat a change of type as a change in its dataSet
    },
    /* Design time only */
    set_type: function(inType) {
        this.setType(inType);
        studio.reinspect();
        /*
    var oldType = this.type;
    this.setType(inType);
    if (oldType != inType) {
        var keys = wm.getPrimaryKeys(wm.typeManager.getType(inType));
        this.primaryKeyFields = keys.length ? keys.join(",") : "";
    }
    reinspect();
    */
    },
    typeChanged: function(inType) {
        var t = inType;
        var primitive = wm.typeManager.getPrimitiveType(t) || !t || t == "wm.Variable";
        this.isPrimitive = Boolean(primitive);
        var schema = this._getSchemaForType(t);
        if (schema)
            this.setDataSchema(schema);
    },
    _getSchemaForType: function(inType) {
        var p = wm.typeManager.getPrimitiveType(inType);
        if (this.isPrimitive) {
            // we're a string primitive by default
            return {dataValue:{type: p || 'String'/*, isList:this.isList*/}};
        } else {
            return wm.typeManager.getTypeSchema(inType) || {dataValue:{type: p || 'String', isList:this.isList}};
        }
    },
    setDataSchema: function(inSchema) {
        this._dataSchema = inSchema;
    },
    setJson: function(inJson) {
        this.json = inJson;
        try {
            var d = eval("(" + inJson + ")");
        } catch(e) {
          console.error("Json error in " + this.name + ": " + e);
        }
            this.setData(d);
    },
    hasList: function() {
        return this.data && ("list" in this.data);
    },
    getDataTypeInfo: function(inProp) {
        return this._dataSchema[inProp];
    },
    listDataProperties: function() {
        var list = this._listSchemaProperties({}, this._dataSchema, "getDataTypeInfo");
        for (var i in list) {
            list[i].bindable = true;
        };
        return list;
    },
    //===========================================================================
    // Update Buffering
    //===========================================================================
    beginUpdate: function() {
        this._updating++;
    },
    endUpdate: function() {
        this._updating--;
    },
    isUpdating: function() {
        return this._updating > 0;
    },
    //===========================================================================
    // Data API
    //===========================================================================
    /**
        Clear all data values.
    */
    clearData: function() {
        this._clearData();
            this.setType(this.type, true);
            if (this.type && this.type != this.declaredClass && !this._initializing)
            this.notify();
    },
    _clearData: function() {
        this._isNull = false;
        this._nostub = false;
        if (!this.data)
            this.data = {};
        if (this.isList)
            this.data = {_list: []};
        else {
            // maintain any subNards (to one depth anyways), but otherwise clear data
            var d;
            for (var i in this.data) {
                d = this.data[i];
                if (d instanceof wm.Variable && !wm.typeManager.getLiveService(d.type))
                    d._clearData();
                else
                    delete this.data[i];
            }
        }
    },
    _setNull: function(inNull) {
        this._isNull = inNull;
        // owner null can be unset but not set. consequence: all null values != null
        if (!inNull && this._subNard && this.owner) {
            this.owner._setNull(inNull);
        }
    },
    /**
        Copy data into this variable.<br/>
        <br/>
        Input data can be a primitive value, an array, a plain old JavaScript object (POJSO), or a wm.Variable.
        Success of setData requires that the type of the input is compatible with the type of this variable.
        @param {Any} inData Input data.
    */
    // NB: input can be a POJSO or a Variable
    setData: function(inData) {
        /* Don't try setting data to null if we're still initializing components for the page;
         * that just clobbers the cookie/permanent memory with data not yet set
         */
        if (window["PhoneGap"] && this.saveInPhonegap || this.saveInCookie) {
            var ownerPage = this.getParentPage();
            if (ownerPage && ownerPage._loadingPage && !inData) return;
        }

        if (inData instanceof wm.Variable) inData = inData.getData();

        this.onPrepareSetData(inData);

        if (dojo.isArray(inData)) {
            this._setArrayData(inData);
        } else if (this.isPrimitive) {
            this._setPrimitiveData(inData);
        } else {
            this._setObjectData(inData);
        }
        this.notify();
        this.onSetData();

    },

    onPrepareSetData: function(inData) {
    },
    onSetData: function() {},
    notify: function() {
        this.dataOwnerChanged();
        this.dataChanged();
        this.valueChanged("isEmpty", this.isEmpty());
        if (this.isList) {
            this.valueChanged("count", this.getCount());
        }
        if (!this.isUpdating() && this.queriedItems) {
            this.setQuery(this._query);
        }
        this.updatePermanentMemory();
    },
    _setPrimitiveData: function(inValue) {
        if (inValue !== null && typeof inValue == "object") {
            this.data = inValue;
        } else {
            this.data = {
                dataValue: inValue
            };
        }

        this.isList = false;
    },
/*
    _setVariableData: function(inVariable) {
        this.setData(inVariable.getData());
    },
    */
    /* WM-2500: Need a way for the user to change the isList property at design time (but not for subclasses of wm.Variable) */
    setIsList: function(isList) {
        if (isList && !this.isList) {
            this.isList = true;
            if (this.json && !this.data._list) this.setJson("[" + this.json + "]");
            else if (wm.isEmpty(this.data)) this._setArrayData([]);
            else {
                var data = [];
                data.push(this.getData());
                this.setData(data);
            }
        } else if (!isList && this.isList) {
            if (this.json) {
                this.setJson(dojo.toJson(this.getItem(0).getData()));
            } else if (wm.isEmpty(this.data._list)) {
                this.setData(null); // this should change isList automatically
            } else {
                this.setData(this.getItem(0)); // this should change isList automatically unless item(0) is itself a list
            }

        }
    },
    _setArrayData: function(inArray) {
        if (wm.defaultTypes[this.type] && inArray.length && typeof inArray[0] != "object") {
            inArray = dojo.map(inArray, function(v) {return {dataValue: v};});
        }
        this.data = { _list: inArray };
        this.isList = true;
        this._isNull = inArray.length == 0;
    },
    _setObjectData: function(inObject) {
        this.beginUpdate();
        this._clearData();
        this.isList = false;

        delete this.data._list;
        var d, v, nv, isNull = inObject === null, empty = wm.isEmpty(inObject);
        for (var i in this._dataSchema) {
            d = this.data[i];
            v = !empty ? inObject[i] : undefined;
            // nv is parent null or v, called null-checked value
            nv = isNull ? null : v;
            if (this._isVariableProp(i)) {
                // for existing variable props, set null-checked value iff it exists
                if (d instanceof wm.Variable) {
                    if (nv !== undefined) {
                        // we don't need to propagate messages from variable properties
                        // since this variable will propagete them
                        d.beginUpdate();
                        d.setData(nv);
                        d.endUpdate();
                    }
                // for non-existing variable props, set *value* iff it exists
                // (we do not set null values here because that can prompt infinite marshalling)
                } else if (v !== undefined) {
                    this._setDataValue(i, v);
                }
            // for non-variable props, set null-checked value iff it exists
            } else {
                if (nv !== undefined)
                    this._setDataValue(i, nv);
            }
        }
        this._setNull(isNull);
        this.endUpdate();
    },
    /**
        Export data from this variable into a plain old JavaScript object (POJSO).<br/>
        @returns Object
    */
    // NB: output is POJSO
    getData: function(flattenPrimitives) {
        if (!this.data || this.disabled) return;
        if (this._isNull) return null;
        else if (this.isList) {
            // if its a byte list merge it into a single string and change it to a nonlist
            if (this.type == "byte") {
                try {
                    if (this.data._list && this.data._list[0] instanceof wm.Variable) {
                        this.data._list[0] = this.data._list[0].data.dataValue;
                    }
                    this.data = {
                        dataValue: this.data._list.join("")
                    };
                } catch (e) {
                    this.data = null;
                }
                this.isList = false;

                return dojo.clone(this.data); // getData never returns pointers into the datastructure but only copies so that manipulating it doesn't corrupt the wm.Variable
            } else if (wm.Variable.convertToHashMaps && this.data._list && wm.isHashMapType(this.type)) {
                var data = {};
                for (var i = 0, l = this.getCount(), v; i < l; i++) {
                    v = (this.getItem(i) || 0).getData(flattenPrimitives);
                    data[v.name] = v.dataValue;
                }
                return data;
            } else {
                var data = [];
                for (var i = 0, l = this.getCount(), v; i < l; i++) {
                    v = (this.getItem(i) || 0).getData(flattenPrimitives);
                    if (v) data.push(v);
                }
                return data;
            }
        } else if (flattenPrimitives && this.isPrimitive && this.data["dataValue"] !== undefined) {
            return this.data.dataValue;
        } else if (this.isEmpty()) {
            return null;
        } else {
            var data = {};
            var props = this.listDataProperties();
            for (var i in props) {
                var v = this.data[i];
                if (wm.getDataConvertDates && v instanceof Date) {
                    v = v.getTime();
                } else if (props[i] && props[i].type == "Date" && typeof v === "string") {
                	v = this.data[i] = new Date(v).getTime();
                }

                // we may not always want all related junk
                if (v !== undefined) {
                    if (v instanceof wm.Variable) {
                        if (v.isEmpty()) v = null;
                        else v = v.getData(flattenPrimitives)
                    }
                    // don't return undefined or empty, non-null variables properties
                    if (v === undefined || (v !== null && typeof v == "object" && wm.isEmpty(v))) continue;
                    data[i] = v;
                }
            }
            if (!wm.isEmpty(data)) return data;
        }
    },

    //===========================================================================
    // Value API
    //===========================================================================
    _getDataValue: function(n, noMarshal) {
        if (!this.data)
                this.data = {};
        var d, f;
        if (this.isList) {
            f = this.getCursorItem();
            d = f && f.data;
        } else
            d = this.data;
        var v = d && d[n], typeInfo = this._dataSchema[n];
        // FIXME: Encountered a project where _isVariableProp(n) was true, but v was a string
        if (this._isVariableProp(n) && (!v || (v._isStub && v._isStub())) && !noMarshal) {
            v = d[n] = (f || this).marshallVariable(n, typeInfo, v);
        } else if (typeInfo && typeInfo.type == "Date") {
        	v = d[n];
        	if (typeof v == "string") {
				try {
	        		v = d[n] = new Date(v).getTime();
	        	} catch(e) {}
        	}
        }
        return v;
    },
    _setDataValue: function(n, v) {
        // NOTE: variable value is null iff it has been explicitly set to null
        // and no value has subsequently been set to any value, including null.
        if (this._isNull && v !== undefined) this._setNull(false);
        this.beginUpdate();
        var o;
        if (v === null || v === undefined) {
            o = this._getDataValue(n, true);
            if (o === v) {
                this.endUpdate();
                return;
            }
        } else {
            o = this._getDataValue(n);
            if (o === undefined && v instanceof wm.Variable) {
                o = this.data[n] = this.createVariable({type: v.type, _subNard: true, name: n});
            }
        }
        this.endUpdate();
        if (!o && v instanceof wm.Variable) {

        }
        if (o instanceof wm.Variable) {
            // if we are updating, o's listeners will be notified by us
            // o doesn't need to message them directly
            if (this._updating) o._updating++;
            if (this.isList && v instanceof wm.Variable && !v.isList) {
                this.setIsList(false);
            }
            o.setData(v);

            if (this._updating) o._updating--;
            return;
        }
        if (!(v instanceof wm.Variable)) {
            this.data[n] = v;
            this.dataValueChanged(n, v);
        }
    },
    setDisabled: function(inDisabled) {
        var valueWas = this.disabled;
        this.disabled = Boolean(inDisabled);
        if (valueWas != this.disabled) this.notify();
    },
    //===========================================================================
    // List API
    //===========================================================================
    /**
        Return the number of items in the list owned by this variable (only valid if <a href="#isList">isList</a> is true).
        @returns Number
    */
    getCount: function() {
      if (this._isNull) return 0;
      if (this.isList) return (this.data && this.data._list) ? this.data._list.length : 0;
      return 1;
    },

    /* Used by bindings to isEmpty */
    getIsEmpty: function() {
        return this.isEmpty();
    },
    isEmpty: function() {
        if (!this.data) return true;

        if (this.data._list) return !Boolean(this.data._list.length);

        for (var propName in this.data) {
            if (this.data[propName] instanceof wm.Variable) {
                if (!this.data[propName].isEmpty()) return false;
            } else if (this.data[propName] != null) { // covers undefined as well
                return false;
            }
        }
        return true;
    },

    _isEmpty: function(obj) {
        for (var prop in obj) {
            if(obj.hasOwnProperty(prop)) return false;
        }
        return true;
    },
    // Returns a Variable representing item inIndex
    // If the item is currently raw data, it's replaced
    // with a new Variable. Created Variable is initialized
    // with the raw list data unless inData is supplied.
    // If inData is supplied the Variable is populated with
    // inData.
    _needItem: function(inIndex, inData) {
        if (inIndex >= this.getCount() && inData === undefined) return null;
        // fetch the stored data object
        var item = this.data._list[inIndex];
        // optional raw data to initialize the object with
        var data = inData;
        if (!(item instanceof wm.Variable)) {
            // we want to populate with original raw data
            // unless override data iss provided
            data = inData || item;
            // create a new Variable to represent this data
            item = this.createVariable({/*name: "itemProxy",*/ type: this.type, _subNard: true, itemIndex: inIndex});
            this.data._list[inIndex] = item;
        }
        if (data !== undefined) {
            item.beginUpdate();
            item.setData(data);
            item.endUpdate();
        }
        return item;
    },
    /**
        Return an item by numeric index in the list owned by this variable (only valid if <a href="#isList">isList</a> is true).
        @param {Number} inIndex The numeric index of the item to fetch
        @returns Any
    */
    getItem: function(inIndex) {
        return this.isList && this._needItem(inIndex) || !this.isList && this;
    },
    getItemData: function(inIndex) {
        if  (!this.isList) return;
            var item = this.data._list[inIndex];
            if (item instanceof wm.Variable)
                return item.data;
            else
                return item;
    },
    _populateItems: function() {
        for (var i = 0, c = this.getCount(); i < c; i++)
        this.getItem(i);
    },
    forEach: function(inCallback) {
        var count = this.getCount();
        for (var i = 0; i < count; i++) {
            if (inCallback(this.getItem(i), i) === true) break;
        }
    },
    map: function(inCallback) {
        var result = [];
        var count = this.getCount();
        for (var i = 0; i < count; i++) {
            result.push(inCallback(this.getItem(i)));
        }
        return result;
    },
    filterItems: function(inCallback) {
        var result = [];
        this.forEach(function(item, index) {
            if (inCallback(item, index)) {
                result.push(item.getData());
            }
        });
        var v = new wm.Variable({
            type: this.type,
            owner: this
        });
        v.setData(result);
        return v;
    },
    // note: low level sort that requires a comparator function to be used.
    sort: function(inComparator) {
        this._populateItems();
        var l = this.isList && this.data && this.data._list;
        if (l) {
        if (typeof inComparator == "function") {
            l.sort(inComparator);
        } else {
            l.sort(function(a,b) {
            var v1 = a.getValue(inComparator);
            var v2 = b.getValue(inComparator);
            return wm.compareStrings(v1,v2);
            });
        }
            this.notify();
        }
    },

    /**
        Set the cursor by index. When data forms a list, the cursor indicates the item used in calls to getValue.
        @param {Number} inCursor The numeric index of the item to use as the Variable's
        @returns Any
    */
    setCursor: function(inCursor) {
        this.cursor = Math.max(0, Math.min(this.getCount()-1, inCursor));
        this.notify();
    },
    /**
        Increments the cursor.
        @returns Any
    */
    setNext: function() {
        this.setCursor(this.cursor+1);
    },
    /**
        Decrements the cursor.
        @returns Any
    */
    setPrevious: function() {
        this.setCursor(this.cursor-1);
    },
    /**
        Sets the cursor to the first item.
        @returns Any
    */
    setFirst: function() {
        this.setCursor(0);
    },
    /**
        Sets the cursor to the last item.
        @returns Any
    */
    setLast: function() {
        this.setCursor(this.getCount()-1);
    },
    getIndexInOwner: function() {
        if (this.owner instanceof wm.Variable && this.owner.data._list) {
            return dojo.indexOf(this.owner.data._list, this);
        }
        return -1;
    },
    /**
        Retrieves the data item at the current list cursor. If data is not a list, returns the Variable
        @returns wm.Variable
    */
    getCursorItem: function() {
        return this.getItem(this.cursor || 0) || this;
    },
    /**
        Set an item by numeric index in the list owned by this variable (only valid if <a href="#isList">isList</a> is true).
        @param {Number} inIndex The numeric index of the item to set
        @param {Any} inData The data to store
    */
    setItem: function(inIndex, inData) {
        this._setItem(inIndex, inData);
        this.cursor = inIndex;
        this.notify();
    },
    _setItem: function(inIndex, inData) {
        if (this.isList)
            this._needItem(inIndex, inData);
        this.onSetData();
    },
    /**
        Adds an item to the list of data. Only functions if data forms a list.
        @param {wm.Variable or Object} inData The data to add, either a an Object or wm.Variable
        @param {Number} inIndex (Optional) The numeric index at which to insert the data.
        @returns Any
    */
    addItem: function(inData, inIndex) {
        this._addItem(inData, inIndex);
        this.cursor = inIndex;
        this.notify();
    },
    _addItem: function(inData, inIndex) {
        if (this.isList) {
            var c = this.getCount();
            if (inIndex >= 0 && inIndex < c)
                this.data._list.splice(inIndex, 0, {});
            else
                inIndex = this.getCount();
            this._setItem(inIndex, inData);
        }
    },
    /**
        Removes an item from the list of data. Only functions if data forms a list.
        @param {Number} inIndex The numeric index of the item to remove.
        @returns Any
    */
    removeItem: function(inIndex) {
        this._removeItem(inIndex);
        this.cursor = 0;
        this.notify();
    },
    _removeItem: function(inIndex) {
        if (this.isList)
            this.data._list.splice(inIndex, 1);
    },
    // should we store this for faster access? (items have itemIndex, but this is not maintained)
    getItemIndex: function(inVariable) {
        if (!this.isList)
            return -1;
        var list = (this.data || 0)._list || [];
        for (var i=0, l = list.length; i < l; i++) {
            if (inVariable == list[i])
                return i;
        }
        return -1;
    },
    getItemIndexByPrimaryKey: function(inVariable, pkList){
        if (!this.isList || !pkList || pkList.length < 1)
            return -1;
        var obj = inVariable;
        if (obj instanceof wm.Variable){
            obj = inVariable.getData();
        }

        var list = (this.data || 0)._list || [];
        for (var i=0, l = list.length; i < l; i++) {
            obj2 = list[i] instanceof wm.Variable ? list[i].getData() : list[i];
            var isEqual = true;
            for (var j = 0; j < pkList.length; j++){
                var f = pkList[j];
                if (obj[f] != obj2[f]){
                    isEqual = false;
                    break;
                }
            }

            if (isEqual)
                return i;
        }
            return -1;
    },
    getQueriedItems: function() {
        if (!this.queriedItems) {
            this.queriedItems = new wm.Variable({
                isList: true,
                type: this.type,
                name: "queriedItems"
            });
            this.queriedItems.setOwner(this, true);
            // queried items are ALL items until a query has been issued
            this.queriedItems.setDataSet(this);
        }
        return this.queriedItems;
    },
    createQueryVar: function() {
        if (this.owner instanceof wm.Variable == false) {
            this._query = new wm.Variable({type:this.type, isList:false, owner: this, name: "queryVar"});
        }
    },

    // property is named queryVar so getter and setter must be getQueryVar/setQueryVar.  Why not getQuery/setQuery?
    // Because in WM 6.5 we defined a setQuery method and query method, and getQuery/setQuery implies a query property
    // rather than a query method, and the query method is public.
    getQueryVar: function() {
        if (!this._query) this.createQueryVar();
        return this._query;
    },
    setQueryVar: function(query) {return this.setQuery(query);},
    setQuery: function(query) {
        if (!this._query) this.createQueryVar();
        this._query.setData(query);
        if (!this._query.isEmpty()) {
            return this.query(this._query.getData(), true);
        } else {
            this.getQueriedItems().setDataSet(this);
        }
    },
    query: function(inSample, updateQueriedItems) {
        if (!this.isList) return;
        if (!inSample) inSample = {};
        var maxResults = inSample._maxResults || 0;
        delete inSample._maxResults;

        var count = this.getCount();
        var result = [];
        if (inSample instanceof wm.Variable) {
            inSample = inSample.getData() || {};
        }

        for (var i = 0; i < count; i++) {
            var item = this.getItem(i);
            if (this._queryItem(item, inSample, i)) {
                result.push(item);
            }
            if (maxResults) {
                if (result.length >= maxResults) break;
            }
        }
        if (updateQueriedItems) {
            var v = this.getQueriedItems();
        } else {
            var v = new wm.Variable({
                type: this.type,
                isList: true,
                name: "QueryResults"
            });
            v.setOwner(this, true);
        }
        v.setData(result);
        if (maxResults) inSample._maxResults = maxResults; // undo our modifications to the user's structure so they can reuse it
        return v;
    },
/*
    _queryItem: function(inItem, inSample, inIndex) {
    var w = "*";
    var isMatch = true;
    wm.forEachProperty(inSample, function(value, key) {
        var matchStart = true;
        var valueA = inItem.getValue(key);

        var conditions = value;
        wm.forEachProperty(conditions, function(valueB, conditionKey) {
        switch(conditionValue) {
        case ">":
            if (valueB <= valueA)
        case ">=":

        case "<":


        case "<=":

        case: "=":

        case "!=":

        case "in":
        }

        });
        var b = inSample[key];



        var stringB = String(b);
        if (stringB.charAt(0) == w) {
        b = b.substring(1);
        matchStart = false;
        } else if (stringB.charAt(0) == ">") {
        var orEqual = false;
        if (stringB.charAt(1) == "=") {
            orEqual = true;
            b = b.substring(2);
        } else {
            b = b.substring(1);
        }
        if (typeof a == "number") {
            b = Number(b);
        } else if (typeof a == "string") {
            b = b.toLowerCase();
        }
        if (orEqual) {
            if (a < b) return false;
        } else {
            if (a <= b) return false;
        }
        continue;
        } else if (stringB.charAt(0) == "<") {
        var orEqual = false;
        if (stringB.charAt(1) == "=") {
            orEqual = true;
            b = b.substring(2);
        } else {
            b = b.substring(1);
        }
        if (typeof a == "number") {
            b = Number(b);
        } else if (typeof a == "string") {
            b = b.toLowerCase();
        }
        if (orEqual) {
            if (a > b) return false;
        } else {
            if (a >= b) return false;
        }
        continue;
        } else if (stringB.charAt(0) == "!") {
        b = b.substring(1);
        if (typeof a == "number") {
            b = Number(b);
        } else if (typeof a == "string") {
            b = b.toLowerCase();
        }
        var invert = true;
        }
        if (b == w) {
        if (invert) return false;
        else continue;
        }
        if (dojo.isString(a) && dojo.isString(b)) {
        if (b.charAt(b.length-1) == w)
            b = b.slice(0, -1);
        a = a.toLowerCase();
        b = b.toLowerCase();
        var matchIndex = a.indexOf(b);
        if (matchIndex == -1 ||
            matchIndex > 0 && matchStart) {
            if (!invert) return false;
        } else if (invert) {
            return false;
        }
        }
        else if (a !== b) {
        if (invert) continue;
        else return false;
        } else if (invert) {
        return false;
        }
    }
    return true;
    },
    */
    _queryItem: function(inItem, inSample, inIndex) {
        if (dojo.isArray(inSample)) {
            return dojo.some(inSample, function(inSampleElement) {
                return this._queryItem2(inItem, inSampleElement, inIndex);
            }, this);
        } else {
            return this._queryItem2(inItem, inSample, inIndex);
        }
    },
    _queryItem2: function(inItem, inSample, inIndex) {
        var w = "*";

        for (var key in inSample) {
            var matchStart = true;
            var matchEnd = true;
            var a = inItem.getValue(key);
            var b = inSample[key];
            if (typeof b == "function") {
                return b(a);
            } else if (b !== null && typeof b == "object" && wm.typeManager.isStructuredType(inItem._dataSchema[key].type)) {
                var aempty = (!a || a instanceof wm.Variable && a.isEmpty() || a instanceof wm.Variable === false && wm.isEmpty(a));
                var bempty = (!b || b instanceof wm.Variable && b.isEmpty() || b instanceof wm.Variable === false && wm.isEmpty(b));
                if (aempty != bempty) return false;
                if (aempty && bempty) continue;

                /* Don't even TRY to compare isList subvariables */
                if (a instanceof wm.Variable && a.isList) {
                    continue;
                }

                else {
                    var submatch = this._queryItem(a, b, 0);
                    if (!submatch) return false;
                    continue;
                }

            }

            /* NOTE: there is no "!true", rather, your query is either {a: true} or {a: false} to query on "truthiness" */
            else if (typeof b == "boolean") {
                if (Boolean(b) != Boolean(a)) return false;
                else continue; // all other tests beyond this if/else block are for strings
            } else {
                var stringB = String(b);
                if (stringB.charAt(0) == w) {
                    b = b.substring(1);
                    matchStart = false;
                } else if (stringB.charAt(0) == ">") {
                    var orEqual = false;
                    if (stringB.charAt(1) == "=") {
                        orEqual = true;
                        b = b.substring(2);
                    } else {
                        b = b.substring(1);
                    }
                    if (typeof a == "number") {
                        b = Number(b);
                    } else if (typeof a == "string") {
                        b = b.toLowerCase();
                    }
                    if (orEqual) {
                        if (a < b) return false;
                    } else {
                        if (a <= b) return false;
                    }
                    continue;
                } else if (stringB.charAt(0) == "<") {
                    var orEqual = false;
                    if (stringB.charAt(1) == "=") {
                        orEqual = true;
                        b = b.substring(2);
                    } else {
                        b = b.substring(1);
                    }
                    if (typeof a == "number") {
                        b = Number(b);
                    } else if (typeof a == "string") {
                        b = b.toLowerCase();
                    }
                    if (orEqual) {
                        if (a > b) return false;
                    } else {
                        if (a >= b) return false;
                    }
                    continue;
                } else if (stringB.charAt(0) == "!") {
                    b = b.substring(1);
                    if (typeof a == "number") {
                        b = Number(b);
                    } else if (typeof a == "string") {
                        b = b.toLowerCase();
                    }
                    var invert = true;
                }
            }
            if (b == w) {
                if (invert) return false;
                else continue;
            }
            if (dojo.isString(a) && dojo.isString(b)) {
                if (b.charAt(b.length - 1) == w) {
                    b = b.slice(0, -1);
                    matchEnd = false;
                }
                a = a.toLowerCase();
                b = b.toLowerCase();

                var matchIndex = a.indexOf(b);
                var isMatch = true;
                // No match at all
                if (matchIndex == -1) {
                    isMatch = false;
                }
                // Need to match both start and end, and the strings are not equal
                else if (matchStart && matchEnd && a != b) {
                    isMatch = false;
                }
                // Need to match the start, end is "*", and matchIndex starts is not zero then it fails
                else if (matchStart && !matchEnd && matchIndex > 0) {
                    isMatch = false;
                }
                // Need to match the end, but not the start, then matchIndex can be anything, but the
                // ends must be equivalent
                else if (!matchStart && matchEnd && a.lastIndexOf(b) + b.length != a.length) {
                    isMatch = false;
                }
                if (invert) isMatch = !isMatch;
                if (!isMatch) return false;
            } else if (a !== b) {
                if (invert) continue;
                else return false;
            } else if (invert) {
                return false;
            }
        }
        return true;
    },

    //===========================================================================
    // Update Messaging
    //===========================================================================
    dataRootChanged: function() {
        if (this._subNard || !this.owner) return;
        // find first owner after root and send change message on that.
        // this should trigger rule #3 for bindings.
        var o = this.owner,
            p, root = this.getRoot();
        while (o && o != root) {
            p = o;
            o = o && o.owner;
        }
        var n = p ? p.getRuntimeId() : this.getRuntimeId();
        var topic = n + "-rootChanged";
        wm.logging && console.group("<== ROOTCHANGED [", topic, "] published by Variable.dataRootChanged");
        dojo.publish(topic, [n]);

        var root = this.getRoot().getRuntimeId();
        if (root && root.indexOf(".") && n.indexOf(root) == 0) {
            var tmpn = n.substring(root.length);
            tmpn = root.substring(root.lastIndexOf(".") + 1) + tmpn;
            var topic2 = tmpn + "-rootChanged";
            if (topic2 != topic) {
                wm.logging && console.group("<== ROOTCHANGED [", topic2, "] published by Variable.dataRootChanged");
                dojo.publish(topic2, [n]);
            }
        }
        wm.logging && console.groupEnd();
    },
    dataOwnerChanged: function() {
        if (this._updating || !this.owner) return;
        var n = this.getRuntimeId();
        if (!n) return;
        var topic = n + "-ownerChanged";
        wm.logging && console.group("<== OWNERCHANGED [", topic, "] published by Variable.dataOwnerChanged");
        dojo.publish(topic, [n]);

        var root = this.getRoot();
        if (!root) return;
        var rootId = root.getRuntimeId();
        while(rootId && rootId.indexOf(".") && n.indexOf(rootId) == 0) {
            var tmpn = n.substring(rootId.length);
            tmpn = rootId.substring(rootId.lastIndexOf(".") + 1) + tmpn;
            var topic2 = tmpn + "-ownerChanged";
            if (topic2 != topic) {
                wm.logging && console.group("<== ROOTCHANGED [", topic2, "] published by Variable.dataRootChanged");
                dojo.publish(topic2, [n]);
                rootId = tmpn;
            } else {
                break;
            }
        }

        wm.logging && console.groupEnd();
        //
        // send root changed message
        if (this._allowLazyLoad) this.dataRootChanged();
        //
        var v = this.getCursorItem();
        for (var i in v.data) {
            wm.fire(v.data[i], "dataOwnerChanged");
        }
    },
    dataChanged: function() {
        if (this._updating || !this.owner) return;
        var id = this.getRuntimeId();
        if (!id) return;

        var topic = [id, "-changed"].join('');
        wm.logging && console.group("<== CHANGED [", topic, "] published by Variable.dataChanged");
        dojo.publish(topic, [this]);

        var root = this.getRoot();
        if (!root) return;
        var rootId = root.getRuntimeId();
        if (rootId && rootId.indexOf(".") && id.indexOf(rootId) == 0) {
            var tmpn = id.substring(rootId.length);
            tmpn = rootId.substring(rootId.lastIndexOf(".") + 1) + tmpn;
            var topic2 = tmpn + "-changed";
            if (topic2 != topic) {
                wm.logging && console.group("<== ROOTCHANGED [", topic2, "] published by Variable.dataRootChanged");
                dojo.publish(topic2, [this]);
            }
        }



        // Rule: change notification is propagated up through owners
        // propagate change up only if this is a subNard.
        if (this._subNard) wm.fire(this.owner, "dataChanged");
        wm.logging && console.groupEnd();
    },
    updatePermanentMemory: function() {
        /* Don't update permanent memory with values set while loading the page; these
         * are unlikely to be provided as a result of dynamic user or service based calls
         */
        var ownerPage = this.getParentPage();
        if (ownerPage && ownerPage._loadingPage) return;

        if (window["PhoneGap"] && this.saveInPhonegap) {
            var datatext = dojo.toJson(this.getData());
            window.localStorage.setItem(this.getRuntimeId(), datatext);
        } else if (this.saveInCookie) {
            var datatext = dojo.toJson(this.getData());
            dojo.cookie(this.getRuntimeId(), datatext);
        }
    },
    // id-based notification
    dataValueChanged: function(inProp, inValue) {
        if (!this._updating && this.owner) {
            // Can't simply call valueChanged; see note below.
            wm.Component.prototype.valueChanged.call(this, inProp, inValue);
            this.notify();
            this.updatePermanentMemory();
        }
    },
    // id-based notification
    valueChanged: function(inProp, inValue) {
        if (!this.type || this.type == this.declaredClass) return; // if it doesn't yet have any type information, then nobody wants to listen to changes to this component

        // Code exists to deal with collisions between component props and data props in this class.
        // However, the distinction is lost in change notifications. Likely, data props should have
        // special ids to distinguish them. Until then, we simply avoid sending change notification
        // for properties when there is a collision.
        if (!this.isDataProp(inProp))
            this.inherited(arguments);
    },
    //===========================================================================
    // Referencing
    //===========================================================================
    /*
    setDataSet: function(inDataSet) {
        this.dataSet = "";
        if (inDataSet instanceof wm.Variable) {
                this.setType(inDataSet ? inDataSet.type : "wm.Variable", true);
            this.dataSet = inDataSet;
            this.cursor = inDataSet.cursor;
        }
        this.setData(inDataSet);
    },
    */
        getDataSet: function() {
        return this.dataSet || this;
/*
        if (this.dataSet) return this.dataSet;
        else if (!this._isDesignLoaded)
        return this;
        */
    },
    //===========================================================================
    // Property API
    //===========================================================================
    _isVariableProp: function(inPropName) {
        var typeInfo = this._dataSchema[inPropName];
        return Boolean(typeInfo && (typeInfo.isList || wm.typeManager.isStructuredType(typeInfo.type)));
    },
    isDataProp: function(inProp) {
        return inProp in this._dataSchema;
    },
    _getValue: function(inProp) {
        return this.isDataProp(inProp) ? this._getDataValue(inProp) : this.inherited(arguments);
    },
    _setValue: function(n, v) {
        // if setting to default, then don't do data setting
        if ((this._isDesignLoaded && this.schema[n]||0).defaultBindTarget || !this.isDataProp(n))
            this.inherited(arguments);
        else
            this._setDataValue(n, v);
    },
    //===========================================================================
    // Data Marshalling / Lazy Loading
    //===========================================================================
    createVariable: function(inProps, inPropName) {
        if ((window["studio"] || djConfig.isDebug) && inProps.type && !wm.typeManager.getType(inProps.type)) {
        app.toastWarning("A variable of type " + inProps.type + " has been created, but that type does not exist");
        }
        inProps._temporaryComponent = 1;
        if (!inProps.name) {
        inProps.name = this._uniqueSubnardId;
        this._uniqueSubnardId++;
        }
        var v = new wm.Variable(inProps);
        v.owner = this;
        return v;
    },
    marshallVariable: function(inPropName, inTypeInfo, inVariable) {
        var
            p = inPropName, v = inVariable,
            t = inTypeInfo.isList ? '[' + inTypeInfo.type + ']' : inTypeInfo.type;
        if (!(v instanceof wm.Variable)) {
            v = this.createVariable({name: p, type: t, _subNard: true}, p);
            if (inVariable || inVariable === null) {
                v.beginUpdate();
                v.setData(inVariable);
                v.endUpdate();
            }
        }
        // lazy load!
        if (v._isStub() && this.canLazyLoad(inTypeInfo)) {
            this.beginUpdate();
                this.lazyLoadData(p, v);
            this.endUpdate();
        }
        return v;
    },
    _isStub: function() {
        if (!this._nostub && !this._isNull /*&& (!this.isList || !this.hasList())*/) {
            // stub if there is no data
            if (this.data === undefined)
                return true;
            // stub if we're a list and there's no list data
            if (this.isList || this.hasList())
                return !this.data._list || !this.data._list.length;
            // optionally treat as stub if there is any data v. if there is missing data
            // stub if dont' have data for any property not structured / list
            if (this._greedyLoadProps) {
                var schema = this._dataSchema, s;
                for (var i in schema) {
                    s = schema[i];
                    if (!s.isList && (this.data[i] === undefined)
                        && !wm.typeManager.isStructuredType(s.type))
                        return true;
                }
            // stub if we have no data
            } else if (wm.isEmpty(this.data))
                return true;
        }
        this._nostub = true;
        return false;
    },
    lazyLoadData: function(inPropName, inVariable) {
        var s = wm.getRuntimeService(this), v = inVariable;
        try{
            if (s.ready) {
                var d = this.getData();
                if (!wm.isEmpty(d)) {
                    var args = [null, this.type, d, {properties: [inPropName]}];
                    wm.logging && console.log("lazyLoad", inVariable.owner && inVariable.owner.getId(), args);
                    var f = function(r) {
                      var propData = r && r[inPropName];
                      if (propData) {
                        v.beginUpdate();
                        v.setData(propData);
                        v.endUpdate();
                      }
                    }

                    // NOTE: Default is that async doesn't have a value; this feature seems unreliable so far so don't use
                    var d;
                    if (this.async) {
                      d = s.requestAsync("read", args);
                    } else {
                        d = s.requestSync("read", args);
                    }
                    d.addCallback(dojo.hitch(this, function() {
                    f();
                    }));

                };
            }
        }catch(x){}
    },
    canLazyLoad: function(inTypeInfo) {
        if (this._updating || !wm.typeManager.getLiveService(this.type) || !wm.typeManager.getLiveService(inTypeInfo.type))
            return;
        // FIXME: prevent lazy loading if livelayout is not ready
        // reference to studio especially bad.
        if (this.isDesignLoaded() && !studio.isLiveLayoutReady())
            return false;
        var o = this;
        // if this variable or any owner does not allow lazy loading then cannot lazy load!
        while (o instanceof wm.Variable) {
            if (!o._allowLazyLoad || wm.disableLazyLoad)
                return false;
            o = o.owner;
        }
        // lazy load if the type is a list or we have required data to read.
        return inTypeInfo.isList || this._hasRequiredReadData();
    },
    // check our schema and data to see if
    // we have all necessary data that is required
    // for the lazy load "read" operation
    _hasRequiredReadData: function() {
        var ds = this._dataSchema, s, d;
        for (var i in ds) {
            s = ds[i];
            if (s.include && dojo.indexOf(s.include, "read") > -1) {
                d = this.data[i];
                if (d === undefined || d === null)
                    return false;
            }
        }
        return true;
    },

    toString: function(inText) {
    var t = inText || "";
    var isEmpty =  this.isEmpty();
    t += "; " + wm.getDictionaryItem("wm.Variable.toString_TYPE", {type: this.type}) + "; " + wm.getDictionaryItem("wm.Variable.toString_ISEMPTY", {isEmpty: isEmpty});
    return this.inherited(arguments, [t]);
    },
    _end: 0
});

// FIXME: variable should have a data loader which can optionally have a liveView.
// A difficulty is that liveView is responsible both for data to load and storing field info
// that can be used to create ui.
// The issue is made worse by the need to copy variables (and associated liveViews)
// extension to extend Variable to load data with a liveView
wm.Variable.extend({
    _includeListProps: false,
    createVariable: function(inProps, inPropName) {
        inProps = inProps || {};

        if ((window["studio"] && this.isDesignLoaded() || !window["studio"] && djConfig.isDebug) && inProps.type && !this._dataSchema) {
        app.alert(wm.getDictionaryItem("wm.Variable.TYPE_INVALID", {type: inProps.type.replace(/[\[\]]/g,""), name: this.getRuntimeId()}));
        }
        if (!inProps.name) {
        inProps.name = this._uniqueSubnardId;
        this._uniqueSubnardId++;
        }

            inProps._temporaryComponent = 1;
        inProps.liveView = this.liveView;
        var r = this._rootField, n = inPropName;
        inProps._rootField = r && inPropName ? r + "." + inPropName : (inPropName || "");
        var v = new wm.Variable(inProps);
        //v.owner = this;
            v.setOwner(this, true);
        return v;
    },
    setDataSet: function(inDataSet) {
        this.dataSet = "";
        if (inDataSet instanceof wm.Variable) {
            this._rootField = inDataSet._rootField || "";
                if (inDataSet.liveView) {
                this.setLiveView(inDataSet.liveView);
            }
                this.setType(inDataSet ? inDataSet.type : "wm.Variable", true);
            this.dataSet = inDataSet;
            this.cursor = inDataSet.cursor;
        }
        this.setData(inDataSet);
    },
    _getEagerProps: function(inVariable) {
        var
            v = inVariable,
            props = this.liveView ? this.liveView.getSubRelated(v._rootField) : [],
            schema = wm.typeManager.getTypeSchema(v.type);
        return this._includeListProps ? props :
            dojo.filter(props, function(r) {
                return !wm.typeManager.isPropInList(schema, r);
            });
    },
    _getLoadProps: function(inPropName, inVariable) {
        return [inPropName].concat(dojo.map(this._getEagerProps(inVariable), function(r) {
            return [inPropName, r].join(".");
        }));
    },
    // FIXME: avoid sync request
    lazyLoadData: function(inPropName, inVariable) {
        var s = wm.getRuntimeService(this), v = inVariable;
        try{
            if (s.ready) {
                var d = this.getData();
                if (!wm.isEmpty(d)) {
                    var
                        //props = this.liveView ? this._getLoadProps(inPropName, v) : inPropName,
                                props = this._getLoadProps(inPropName, v),
                        args = [null, this.type, d, {properties: props}];
                    //console.log("lazyLoad", this.getId(), args);
                    wm.logging && console.log("lazyLoad", inVariable.owner && inVariable.owner.getId(), args);

                    var f = function(r) {
                      var propData = r && r[inPropName];
                      if (propData) {
                        v.beginUpdate();
                        v.setData(propData);
                        v.endUpdate();
                      }
                    }

                    if (this.async) {
                      s.requestAsync("read", args, f);
                    } else {
                      s.requestSync("read", args);
                      f(s.result);
                    }


                    // FIXME: non-sync, need to protect against multiple requests?
                    // create a queue of requests?
                    /*if (!this._inflight) {
                        var def = s.requestAsync("read", args);
                        this._inflight = true;
                        def.addBoth(dojo.hitch(this, function(r) {
                            this._inflight = false;
                            return r;
                        }));
                        def.addCallback(dojo.hitch(this, function(r) {
                            var propData = r && r[inPropName];
                            if (propData) {
                                v.beginUpdate();
                                v.setData(propData);
                                v.endUpdate();
                                console.log("got data!", "notify!", this.getId(), this._updating);
                                this.owner.notify();
                            }
                            return r;
                        }));
                    }*/
                }
            }
        }catch(x){
            wm.logging && console.log("Failed to lazy load.", args);
        }
    },
    setLiveView: function(inLiveView) {
        this.liveView = inLiveView;
    },
    getViewType: function() {
        return this.liveView  && this.liveView.getSubType(this._rootField);
    },
    getViewFields: function() {
        return (this.liveView && this.liveView.getSubView(this._rootField)) || [];
    },
    getViewListFields: function() {
        return (this.liveView && this.liveView.getListView(this._rootField)) || [];
    },
    getViewRelated: function() {
        return (this.liveView && this.liveView.getSubRelated(this._rootField)) || [];
    }
});



/**#@- @design */

if (0) {
/******
 * this extends wm.Variable to implement the dojo.data.api.Read APIs
 ******/
wm.Variable.extend({
    /* http://dojotoolkit.org/reference-guide/dojo/data/api/Read.html#dojo-data-api-read */
    getFeatures: function() {
    return {
        "dojo.data.api.Read": true
    };
    },

    /*
     * this getValue violates the dojo.data API by not throwin exceptions if inItem is not an item or inAttribute is not a string.
     * Violation is because getValue calls this.inherited in if its not an item
     */
    getValue: function(inItem, inAttribute, defaultValue) {
    if (this.isItem(inItem)) {
        /* This works, but as soon as we get a new dataset from the server, or if the user sorts the variable,
         * all IDs change, so really this is bad
         */
        if (inAttribute == "_id") {
        return inItem.getIndexInOwner();
        }
        console.log(inItem);
        console.log(inAttribute);
        var result = inItem.getValue(inAttribute);
        if (result === undefined)
        result = defaultValue;
        return result;
    } else {
        return this.inherited(arguments);
    }
    },
    getValues: function(inItem, inAttribute) {
    if (this.isItem(inItem) && typeof inAttribute == "string") {
        var result = this.getValue(inItem, inAttribute);
        return [result];
    } else {
        throw "getValues must have a wm.Variable as input; and inAttribute must be a String; perhaps you want getValue?";
    }
    },
    getAttributes: function(inItem) {
    if (this.isItem(inItem)) {
        var type = wm.typeManager.getType(inItem.type);
        var result = [];
        if (type && type.fields) {
        for (var field in type.fields) {
            result.push(field);
        }
        }
        if (!this.identity) {
        result.push("_id");
        }
        return result;
    } else {
        throw "getAttribute must have a wm.Variable as an input";
    }
    },

    hasAttribute: function(inItem, inAttribute) {
    if (this.isItem(inItem) && typeof inAttribute == "string") {
        var value = inItem.getValue(inItem, inAttribute);
        return !(value === undefined || value === null);
    } else {
        throw "getValues must have a wm.Variable as input; and inAttribute must be a String.";
    }
    },

    containsValue: function(inItem, inAttribute, inValue) {
    var values = this.getValues(inItem, inAttribute);
    return dojo.indexOf(values, inValue) != -1;
    },


    isItem: function(inItem) {
    return inItem instanceof wm.Variable;
    },

    /* This is just a placeholder and is not yet implemented */
    isItemLoaded: function(inSomething) {
    return false;
    },

    /* This is just a placeholder and is not yet implemented */
    loadItem: function(keywordArgs) {
    return null;
    },


    /* This method was copied from the basic parts of ItemFileReadStore.js _fetchItems method;
     * I've stripped out the regex stuff which while very cool, would not typically be used and slow things down
     */
    _fetchItems: function(  /* Object */ requestArgs,
    /* Function */ findCallback,
    /* Function */ errorCallback){
    //  summary:
    //      See dojo.data.util.simpleFetch.fetch()

    var opts = requestArgs.queryOptions;
    var items = [];
    var i, key;
    if(requestArgs.query){
        /* Uncomment out the regex stuff if we ever have a need for it; this is dojo's code, probably good, but
         * not needed, and therefore just slows things down
        var value,
        ignoreCase = requestArgs.queryOptions ? requestArgs.queryOptions.ignoreCase : true;
        //See if there are any string values that can be regexp parsed first to avoid multiple regexp gens on the
        //same value for each item examined.  Much more efficient.
        var regexpList = {};
        for(key in requestArgs.query){
        value = requestArgs.query[key];
        if(typeof value === "string"){
            regexpList[key] = dojo.data.util.filter.patternToRegExp(value, ignoreCase);
        }else if(value instanceof RegExp){
            regexpList[key] = value;
        }
        }
        */
        var count = this.getCount();
        for(i = 0; i < count; ++i){
        var match = true;
        var candidateItem = this.getItem(i);
        if(candidateItem instanceof wm.Variable == false){
            match = false;
        }else{
            for(key in requestArgs.query){
            value = requestArgs.query[key];
            if(value != "*" && !this._containsValue(candidateItem, key, value, opts)){
                match = false;
            }
            }
        }
        if(match){
            items.push(candidateItem);
        }
        }
        findCallback(items, requestArgs);
    } else {
        // We want a copy to pass back in case the parent wishes to sort the array.
        // We shouldn't allow resort of the internal list, so that multiple callers
        // can get lists and sort without affecting each other.  We also need to
        // filter out any null values that have been left as a result of deleteItem()
        // calls in ItemFileWriteStore.
        var count = this.getCount();
        for(i = 0; i < count; ++i){
        var item = this.getItem(i);
        if(item !== null){
            items.push(item);
        }
        }
        findCallback(items, requestArgs);
    }
    },

    /* This method was copied from the basic parts of ItemFileReadStore.js _fetchItems method;
     * I've stripped out the regex stuff which while very cool, would not typically be used and slow things down
     */
    _containsValue: function(
        /* item */ item,
        /* attribute-name-string */ attribute,
        /* anything */ value,
    /* Hash with queryOptions */ opts){
        //  summary:
        //      Internal function for looking at the values contained by the item.
        //  description:
        //      Internal function for looking at the values contained by the item.  This
        //      function allows for denoting if the comparison should be case sensitive for
        //      strings or not (for handling filtering cases where string case should not matter)
        //
        //  item:
        //      The data item to examine for attribute values.
        //  attribute:
        //      The attribute to inspect.
        //  value:
        //      The value to match.
        //  opts
        //      The query options; supports exactMatch, ignoreCase; later on should have startsWith, contains and endsWith
        var svalue = String(value);
        var itemvalue = item.getValue(attribute);
        var sitemvalue = String(itemvalue);
        if (value === itemvalue) return true; // quick test...

        if (opts.ignoreCase) {
        if (svalue.toLowerCase() === sitemvalue.toLowerCase())
            return true;
        }

        if (!opts.exactMatch) {
        if (svalue.indexOf(sitemvalue) != -1)
            return true;
        }
        return false;
    },


    // no-op
    close: function(inRequestToClose) {},

    // Before getLabel does more than return undefined, we'll need to decide users should get displayField/displayExpression properties
    getLabel: function(inItem) {
    if (this.displayField) {
        return inItem.getValue(this.displayField);
    } else if (this.displayExpression) {
        return wm.expression.getValue(this.displayExpression, inItem, this.getRoot());
    } else {
        return undefined;
    }
    },


    getLabelAttributes: function(inItem) {
    if (this.displayField) {
        return [this.displayField];
    } else if (this.displayExpression) {
        var results = this.displayExpression.match(wm.expression._getSourceRegEx);
        for (var i = 0; i < results.length; i++) {
        results[i] = results[i].substring(2, results[i].length-1);
        }
        return results;
    } else {
        return this.getAttributes();
    }
    },
    _end: 0
});
// uncomment this when ready to use wm.Variable as a dojo.store: dojo.extend(wm.Variable,dojo.data.util.simpleFetch); // adds in the fetch call


/******
 * this extends wm.Variable to implement the dojo.data.api.Identity APIs
 ******/
wm.Variable.extend({
    getFeatures: function() {
    return {
        "dojo.data.api.Read": true,
        "dojo.data.api.Identity": true
    };
    },
    getIdentity: function(inItem) {
    if (this.identity)
        return inItem.getValue(this.identity);
    else
        return inItem.getIndexInOwner();
    },

    getIdentityAttributes: function(inItem) {
    if (this.identity) {
        return [this.identity];
    } else {
        return ["_id"];
    }
    },

    fetchItemByIdentity: function(/* object */ keywordArgs){
    var item = this.getItem(keywordArgs.identity);
    if (item) {
        keywordArgs.onItem.call(keywordArgs.scope || dojo.global, item, keywordArgs);
    } else {
        keywordArgs.onError.call(keywordArgs.scope || dojo.global, keywordArgs);
    }
    },
    _end: 0
});





wm.Variable.extend({
    forEachItem: function(callback, options) {
    if (!options)
        option = {count: 0,
              stopOnTrue: false};
    var stopOnTrue = options.stopOnTrue;
    var count = this.getCount();
    for (var i = options.start || 0; i < count; i++) {
        var item = this.getItem(i);
        if (callback(item) && stopOnTrue) {
        return;
        }
    }
    },
    get: function(id) {
    var keys = this.primaryKeyFields.split(/\s*,\s*/);
    var query = {};
    if (keys.length == 0)
        return null;
    for (var i = 0; i < keys.length; i++) {
        if (id instanceof wm.Variable) {
        query[keys[i]] = id.getValue(keys[i]);
        } else if (id !== null && typeof id == "object") {
        query[keys[i]] = id[keys[i]];
        } else {
        query[keys[i]] = id;
        }
    }
    return this.query(query, {limit: 1}).matches[0];
    },

    query: function(query, options){
    var results = [];

    var compareFields = function(val1, val2, options) {
        if (options.ignoreCase) {
        val1 = val1.toLowerCase();
        val2 = val2.toLowerCase();
        }
        if (val1 == val2)
        return true;
        else if (!options.exactMatch && typeof val1 == "string" && val1.indexOf(val2) == 0)
        return true;
        return false;
    };

    this.forEachItem(
        function(item) {
        for (key in query) {
            var value = query[key];
            if (value instanceof wm.Variable) {
            value = value.getValue(query[key]);
            } else if (value != null && typeof value == "object") {
            value = value[query[key]];
            }
            if (!compareFields(value, item.getValue(query[key]), options))
            return false;
        }
        result.push(item);
        return options.count ? result.length < options.count : false;
        },
        {stopOnTrue: true, start: options.start || 0}
    );
    return {total: result.length,
        matches: result,
        forEach: function(callback, thisobj) {
            return dojo.forEach(results, callback, thisobj);
        },
        filter: function(callback, thisobj) {
            return dojo.filter(results, callback, thisobj);
        },
        map: function(callback, thisobj) {
            return dojo.map(results, callback, thisobj);
        }
           };
    },
    put: function(data, options) {
    this.addItem(data);
    },
    remove: function(id) {
    var item = this.get(id);
    if (item) {
        var index = this.getItemIndex(item);
        if (index != -1)
        this.removeItem(index);
    }
    },
    getIdentity: function(item) {
    var keys = this.primaryKeyFields.split(/\s*,\s*/);
    var result = "";
    for (var i = 0; i < keys.length; i++) {
        if (result) result += "|";
        result += item.getValue(keys[i]);
    }
    return result;
    },
    getChildren: function(item) {
    var result = [];
    var schema = this._dataSchema;
    for (var i in schema) {
        var s = schema[i];
        if (s.isList || wm.typeManager.isStructuredType(s.type)) {
        result.push(item.getValue(i));
        }
    }
    return {total: result.length,
        matches: result,
        forEach: function(callback, thisobj) {
            return dojo.forEach(results, callback, thisobj);
        },
        filter: function(callback, thisobj) {
            return dojo.filter(results, callback, thisobj);
        },
        map: function(callback, thisobj) {
            return dojo.map(results, callback, thisobj);
        }
           };
    }

});
}

}

if(!dojo._hasResource["wm.base.components.Service"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.Service"] = true;
 /*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.Service");


/**
	Component that can be configured to perform a task.
	<br/><br/>
	@name wm.Service
	@class
	@extends wm.Component
*/
dojo.declare("wm.Service", wm.Component, {
	/** @lends wm.Service.prototype */
	_operations: {},
	/**
		Result data (if any) returned from the last invocation.
	*/
	result: null,
	/**
		Error data (if any) returned from the last invocation.
	*/
	error: null,
	getOperationsList: function() {
		var l = [];
		for (var i in this._operations)
			l.push(i);
		l.sort();
		return l;
	},
	makePropEdit: function(inName, inValue, inEditorProps) {
	    var prop = this.schema ? this.schema[inName] : null;
	    var name =  (prop && prop.shortname) ? prop.shortname : inName;
		switch (inName) {
		case "operation":
		    return new wm.SelectMenu(dojo.mixin(inEditorProps, {options: this.getOperationsList()}));
		}
	},
	getOperation: function(inOperation) {
		return this._operations[inOperation];
	},
	initService: function() {
	},
	/**
		Invoke a method on this service object with arguments.
		<br/><br/>
		Invocations may be asynchronous. Responses are available 
		via the returned Deferred object or from the 
		<a href="#onResult">onResult</a> and 
		<a href="#onError">onError</a> events.
		@param {String} inMethod The method to invoke on this object.
		@param {Array} inArgs An array of parameters for the method.
		@returns {dojo.Deferred} Response handler object.
	*/
        invoke: function(inMethod, inArgs, inOwner) {
		var
			d = new dojo.Deferred(),
			m = this[inMethod];
		if (m) {
			var result = m.apply(this, inArgs);
			this.onResult();
			wm.onidle(function() {
				d.callback(result);
			});
		} else {
			this.onError();
			wm.onidle(function() {
			    /* TODO: Localize */
			    d.errback("operation: " + inMethod + " does not exist.");
			});
		}
		return d;
	},
	/**
		Event that fires after a succesful service invocation.
		@param {Any} inResult Any result data returned from the service.
	*/
	onResult: function(inResult) {
		this.error = null;
		return this.result = inResult;
	},
	/**
		Event that fires after a service invocation has resulted in an error.
		@param {Any} inError Any error data returned from the service.
	*/
	onError: function(inError) {
		this.result = null;
		return this.error = inError;
	}
});

// FIXME: needs its own module
// ==========================================================
// Services registry (provides info about available services)
// ==========================================================

wm.services = {

    // Hash naming/describing all services; use _services for the actual Service instance. This hash provides the name and type for each service
	byName: {},

    // When a ServiceCall needs a service instance, _createService creates one and stores it in this hash
    _services: {},
	add: function(inService){
		return wm.services.byName[inService.name] = inService;
	},
	remove: function(inService){
		var n = inService.name;
		this._destroyService(n);
        delete wm.services._services[n];
		delete wm.services.byName[n];
	},
	getNamesList: function() {
		var l = [], services = wm.services.byName, s;
		for (var i in services) {
			s = services[i];
			if (!s.clientHide) 
				l.push(i);
		}
		l.sort();
		return l;
	},
	forEach: function(inFunction) {
		wm.forEach(this.byName, function(s) {
			inFunction(s);
		});
	},
	clear: function() {
		var n = wm.services.byName, s;
		for (var i in n) {
			s = n[i];
			if (!s.isClientService)
				this.remove(s);
			else
				this._destroyService(s);
		}
	},
        getService: function(inName, hideFromClient) {
		var s;
		if (inName) {
		    if (this._services[inName]) {
			s = this._services[inName]; 
		    } else {
			s = this._services[inName] = this._createService(inName, hideFromClient);
		    }
		    if (!s._service) {
			s.initService();
		    }
		}
		return s;
	},
       _createService: function(inName, hideFromClient) {
		var
			defaultCtor = "wm.JsonRpcService",
			s = this.byName[inName];
		if (!s)
		    s = this.add({name: inName, ctor: defaultCtor, clientHide: hideFromClient});
		var ctor = dojo.getObject(s.ctor || defaultCtor);
		// FIXME: we don't want to be streamed so don't include owner
		// otoh without owner, we don't know how to resolve paths at designTime
	   var owner = window["studio"] ? studio.application || studio._application : app;
	   var service = new ctor({name: inName, service: inName, owner: owner});
	   //service.owner = dojo.getObject("studio.wip.app") || app;
		return service;
	},
	_destroyService: function(inService) {
		wm.fire(this._services[inService.name], "destroy");
	}
};
wm.Object.extendSchema(wm.Service, {
    operation: {type: "string"}
});

}

if(!dojo._hasResource["wm.base.components.ServiceQueue"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.ServiceQueue"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.ServiceQueue");

dojo.declare("wm.ServiceQueue", wm.Component, {
	services: "",
	init: function() {
		this._services = [];
		this._serviceConnections = [];
		this.inherited(arguments);
	},
	getServicesCount: function() {
		return this._services && this._services.length;
	},
	getServicesList: function() {
		for (var i=0, l=[], ss=this.services.split(","), s, v; (s=ss[i]); i++) {
			v = this.getValueById(dojo.string.trim(s));
			if (v)
				l.push(v);
		}
		return l;
	},
	update: function() {
		this.beginUpdate();
	},
	beginUpdate: function() {
		this._services = this.getServicesList();
		this.connectServices();
		this._currentService = 0;
		this.updateNextService();
	},
	getCurrentService: function() {
		return this._services[this._currentService];
	},
	updateNextService: function() {
		if (this._currentService < this.getServicesCount()) {
			var s = this.getCurrentService();
			this._currentService++;
			s.update();
		} else
			this.completeUpdate();
	},
	completeUpdate: function() {
		this.disconnectServices();
	},
	abortUpdate: function() {
		this.disconnectServices();
	},
	connectServices: function() {
		this.disconnectServices();
		dojo.forEach(this._services, dojo.hitch(this, function(s) {
			this._serviceConnections.push(dojo.connect(s, "onResult", this, "updateNextService"));
			this._serviceConnections.push(dojo.connect(s, "onError", this, "abortUpdate"));
		}));
	},
	disconnectServices: function() {
		dojo.forEach(this._serviceConnections, function(s) {
			dojo.disconnect(s);
		});
	}
});

wm.ServiceQueue.extend({
	getAvailableServicesList: function() {
		var d = wm.listComponentIds([studio.application, studio.page], wm.ServiceVariable);
		d = d.concat(wm.listComponentIds([studio.application, studio.page], wm.NavigationCall));
		// don't show this!
		var i = dojo.indexOf(d, this.owner.getId());
		if (i != -1)
			d.splice(i, 1);
		return d;
	},
	write: function(inIndent) {
		return this.services ? this.inherited(arguments): null;
	}
});

}

if(!dojo._hasResource["wm.base.components.ServiceCall"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.ServiceCall"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.ServiceCall");



//===========================================================================
// Provides basic service calling infrastructure
//===========================================================================
// Note: wm.ServiceCall is not a component. This primarily so that it can be combined
// with components that have other capabilities.
/**
    Infrastructure for encapsulating a {@link wm.Service} configuration with a trigger
    to invoke the configured service.
    @name wm.ServiceCall
    @class
    @noindex
*/
dojo.declare("wm.ServiceCall", null, {
    /** @lends wm.ServiceCall.prototype */
    /**
        Set true to automatically <a href="#update">update</a> this service when
        the service configuration or input is modified.
        @type String
    */
    autoUpdate: false,
    /**
        Set true to automatically <a href="#update">update</a> this service when it's created.
        @type String
    */
    startUpdate: false,

    /* Change to true once startUpdate has called update() */
    _startUpdateComplete: false,
    /**
        Name of the service called by this object.
        @type String
    */
    service: "",
    /**
        Name of the operation to invoke on the service.
        @type String
    */
    operation: "",
    _operationInfo: {},
    disabled: false,
    inFlightBehavior: "none",

    destroy: function() {
        delete this._inFlightBacklog;
        wm.fire(this._requester, "cancel");
        delete this._requester;
        this.inherited(arguments);
    },
    init: function() {
        this.inherited(arguments);
        this._inFlightBacklog = [];
        if (this._isDesignLoaded) {
            this.subscribe("wmservices-changed", dojo.hitch(this, "servicesChanged"));
        }
    },
    postInit: function() {
        this.inherited(arguments);
        this.connectStartUpdate();
        if (!this.$.queue) new wm.ServiceQueue({name: "queue", owner: this});

        this.initInput();
        this.setService(this.service);
        this._setOperation(this.operation);
    },
    initInput: function() {
        this.input = this.$.input;
        if (!this.input) this.input = this.createInput();
        this.subscribe(this.input.getRuntimeId() + "-changed", this, "inputChanged");
    },
    /* Shortcut for setting the input */
    setInput: function(inDataSet) {
        if (this.$.input) {
            this.$.input.setDataSet(inDataSet);
        }
    },
    /* Sets the service for the ServiceCall, and updates its operation and operationInfo and inputs */
    setService: function(inService) {
        if (this._inSetService) return; /* Avoid infinite recursion */
        try {
            this._inSetService = true;
            this.service = inService;
            var owner = this.getOwnerApp();

            this._service = wm.services.getService(this.service, owner && owner.declaredClass == "StudioApplication") || new wm.Service({});
            wm.fire(this._service, "setServiceCall", [this]);
            this._setOperation(this.operation, 1); // update the operation's type; forceUpdate needed so that if the type name is the same but fields have changed it will still get updated
        } catch (e) {
        } finally {
            delete this._inSetService;
        }
    },
    set_service: function(inService) {
        this.setService(inService);

        var s = this._service;
        var valueOk = s && s.getOperation(this.operation);
        if (!valueOk) {
            var methods = s && s.getOperationsList();
            var newValue = methods ? methods[0] : "";
            if (newValue && newValue != this.operation) {
                this.set_operation(newValue);
            }
        }
        studio.inspector.refocusEditor();
    },
    /* If the types have changed, reobtain our type and input type and operations info.  Design time only */
    wmTypesChanged: function() {
        var owner = this.getOwnerApp();
        this._service = wm.services.getService(this.service, owner && owner.declaredClass == "StudioApplication") || new wm.Service({});
        wm.fire(this._service, "setServiceCall", [this]);
        this._setOperation(this.operation, 1); // update the operation's type; forceUpdate needed so that if the type name is the same but fields have changed it will still get updated
        if (this.setType) this.setType(this.type);
        if (studio.isSelected(this)) {
            studio.inspect(this);
        }
    },

    /* Set the operation and update the inputs */
    _setOperation: function(inOperation, forceUpdate) {
        this.operation = inOperation;
        this._operationInfo = this.getOperationInfo(this.operation);
        this.operationChanged(forceUpdate);
    },

    /* Sets the operation and updates the data if autoUpdate is set */
    setOperation: function(inOperation) {
        this._setOperation(inOperation);
        this.doAutoUpdate();
    },

    /* Get the parameters for the operation */
    getOperationInfo: function(inOperation) {
        return (this._service && this._service.getOperation(inOperation)) || {};
    },

    /* Force the input to update its fields */
    operationChanged: function(forceUpdate) {
        this.input.operationChanged(this.operation, this._operationInfo.parameters);
    },

    /* Create the ServiceInput component */
    createInput: function() {
        var i = new wm.ServiceInput({name: "input", owner: this });
        i.operationChanged(this.operation, this._operationInfo.parameters);
        return i;
    },

    /* Any time the input is changed, fire doAutoUpdate() */
    inputChanged: function() {
        this.doAutoUpdate();
    },

    /* Fire doStartUpdate when the page finishes loading.
     * NOTE: If owner is a Composite or Application, this may not work
     */
    connectStartUpdate: function() {
        if (this.owner && this.owner instanceof wm.Application) {
            this.doStartUpdate();
        } else if (this.owner && this.owner.start) {
            this.connectOnce(this.owner, "onStart", this, "doStartUpdate");
        }
    },

    /* Changes autoUpdate, and optionally calls update() */
    setAutoUpdate: function(inAutoUpdate) {
        this.autoUpdate = inAutoUpdate;
        this.doAutoUpdate();
    },

    /* Chagnes startUpdate, and optionally cals update */
    setStartUpdate: function(inStartUpdate) {
        this.startUpdate = inStartUpdate;
        if (this.startUpdate && !this._loading && this.isDesignLoaded()) {
            this.updateInternal();
        }
    },

    /* Don't fire startUpdate if the component already has data saved from a previous session using the phonegap saveInPhoneGap property,
     * unless autoUpdate is also selected.
     * Not done for saveInCookie because saveInCookie is intended for saving much smaller chunks of data, and not entire server queries.
     * saveInCookie is probably disabled for ServiceVariables.
     */
    canStartUpdate: function() {
        return this.startUpdate && !this._loading && (!window["PhoneGap"] || !this.saveInPhoneGap || this.isEmpty() || this.autoUpdate);
    },

    /* Call udpate if startUpdate is true */
    doStartUpdate: function() {
        if (this.canStartUpdate()) {
            this.updateInternal();
            this._startUpdateComplete = true;
        }
    },

    /* Don't fire autoUpdate if startUpdate is true and hasn't yet set _startUpdateComplete to true */
    canAutoUpdate: function() {
        return (this.autoUpdate && !this._loading && (!this.startUpdate || this._startUpdateComplete || this.isDesignLoaded()));
    },

    /* Call update if autoUpdate is true */
    doAutoUpdate: function() {
        if (this.canAutoUpdate()) {
            /* wait 20ms so that UI events can finish firing and so other inputs have time to be set */
            wm.job(this.getRuntimeId() + ".doAutoUpdate", wm.isMobile ? 20 : 1, dojo.hitch(this, "updateInternal"));
        }
    },

    /* Public method for firing the service call */
    update: function() {
        // moved to RBacPlugin; if (djConfig.isDebug) try { this.log("update", arguments.callee.caller.nom || arguments.callee.caller.name || "anonymous");} catch(e) {}
        return this._isDesignLoaded ? this.doDesigntimeUpdate() : this._update();
    },

    /* Users call "update" event handlers and autoUpdate/startUpdate call updateInternal; used for tracking/debugging purposes */
    updateInternal: function() {
        return this._isDesignLoaded ? this.doDesigntimeUpdate() : this._update();
    },

    /* If the ServiceCall is already firing, it can't fire the current request; add it to our request queue
    * if inFlightBehavior specifies to do so.
    */
    addToBacklog: function() {
        var d = new dojo.Deferred();
        if (this.inFlightBehavior == "executeLast") this._inFlightBacklog.pop();
        if (this.inFlightBehavior == "executeLast" || this.inFlightBehavior == "executeAll") {
            this._inFlightBacklog.push({
                args: this.getArgs(),
                operation: this.operation,
                deferred: d,
                eventChain: app.debugDialog ? app.debugDialog.cacheEventChain() : undefined
            });
        } else {
            d.errback("Unable to fire " + this.toString() + " because it is already firing, and the inFlightBehavior property is unset");
        }
        return d;
    },

    /* Internal version of update method; please only call update() or updateInternal() */
    _update: function() {
        if (this.canUpdate()) {
            if (this._requester && !this._isDesignLoaded) {
                var d = this.addToBacklog();
                return d;
            }
            this.onBeforeUpdate(this.input);
            wm.cancelJob(this.getRuntimeId() + ".doAutoUpdate"); // just in case there's a job already scheduled
            return this.request();
        } else {
            var error =  this.disabled ?  this.getRuntimeId() + " tried to fire but its disabled property prevented it" : this.getRuntimeId() + ".canUpdate() returns false";

            this.blocked(error);

            /* Return a deferred because the caller is expecting it.  This does not play any real role in how ServiceVariables work */
            var d = new dojo.Deferred();
            d.errback(error);
            return d;
        }
    },

    /* Sets info.canUpdate to false if the ServiceCall is unable to fire */
    canUpdate: function() {
        var info = {canUpdate: this._getCanUpdate() };
        this.onCanUpdate(info);
        return info.canUpdate;
    },

    /* ServiceCall can not fire if there isn't a service or operation */
    _getCanUpdate: function() {
        return this._service && this.operation && !this.disabled;
    },

    /* Get the args from the input component. */
    getArgs: function() {
        return this.input.getArgs();
    },

    /* Lookup the operationType from the service definitions.   Values include "hqlQuery", "" */
   getOperationType: function() {
        var service = this._service;
        var operation;
        if (service) {
            operation = service._operations[this.operation];
        }
        if (operation) {
            return operation.operationType;
        } else {
            return "";
        }
   },

    /* inArgs optional too... typically provided by calls from the request backlog/inflight queue*/
    request: function(inArgs, optionalOp, optionalDeferred) {
        var args;
        try {
            args = inArgs || this.getArgs();
        } catch(e) {
            this.error(e);
            return;
        }

        /* Tell the Service component to fire */
        var d = this._requester = this._service.invoke(optionalOp || this.operation, args, this.owner, this);

        /* If a custom deferred is passed in, tie its onResult/onError handling to the Service that is being fired */
        if (optionalDeferred) {
            d.then(
            function(inValue) {
                optionalDeferred.callback(inValue);
            },
            function(inError) {
                optionalDeferred.errback(inError);
            }
            );
        }
        return this.processRequest(d);
    },


    /* Called when an update call is blocked by disabled or onCanUpdate */
    blocked: function(inMessage) {},

    /* The service is fired, take care of misc post-firing tasks like tieing the deferred to our result and error methods */
    processRequest: function(inDeferred) {
        var d = inDeferred;
        if (d) {
            d.addCallbacks(dojo.hitch(this, "result"), dojo.hitch(this, "error"));
            return d;
        }
    },

    /* This is called when the Service completes its call successfully.  This does cleanup, and calls processResult */
    result: function(inResult) {
        this._requester = false;
        this.processResult(inResult);

        /* Handle the backlog/request queue */
        this._updateNextInQueue();

        return inResult;
    },

    /* Fire the next call in the backlog.  We use wm.onidle mostly so that all of the side effects and cleanup have time to complete before firing the next call. */
    _updateNextInQueue: function() {
        if (!this._isDesignLoaded && this._inFlightBacklog) {
             if (this._inFlightBacklog.length) {
                wm.onidle(this, function() {
                    var backlog = this._inFlightBacklog.shift();
                    if (backlog) {
                        this.request(backlog.args, backlog.operation, backlog.deferred);
                    }
                });
            } else {
                this.onInflightBacklogComplete();
            }
        }
    },

    /* A user who fires 50 calls needs to know when all 50 are complete; no data needed, just a callback so
    * the next step of their process can begin
    */
    onInflightBacklogComplete: function() {},

    /* Called by result(); calls onResult and onSuccess when the ServiceCall completes */
    processResult: function(inResult) {
        this.onResult(inResult);
        this.onSuccess(inResult);
        if (!this.isDestroyed && this.$.queue) this.$.queue.update();
    },

    /* Called when the service fails; calls processError and does cleanup */
    error: function(inError) {
        this._requester = false;
        this.processError(inError);

        /* Handle the backlog/request queue */
        this._updateNextInQueue();

        return inError;
    },

    /* Called by error(); calls onResult and onError */
    processError: function(inError) {
        this.onResult(inError);
        this.onError(inError);
    },

    //=======================================================
    // Events
    //=======================================================
    /**
        onCanUpdate event fires before a service is invoked.
        @param {Any} ioUpdate An object containing a canUpdate flag.
        Setting this flag to false will prevent the service from updating.
        @event
    */
    _onCanUpdateBeforeStart: 1,
    onCanUpdate: function(ioUpdate) {
    },
    /**
        onBeforeUpdate event fires before a service is invoked.
        @param {wm.ServiceInput} ioInput The input object used to determine what data
        will be passed to the service.
        @event
    */
    onBeforeUpdate: function(ioInput) {
    },
    /**
        onResult event fires whenever a service returns, whether the
        service returned successfully or reported an error.
        @param {Any} inData Result data. The format of this data on the service.
        @event
    */
    // fires on success or error
    onResult: function(inDeprecated) {
    },
    /**
        onSuccess event fires whenever a service returns successfully.
        @param {Any} inData Result data. The format of this data on the service.
        @event
    */
    // fires only on success
    onSuccess: function(inDeprecated) {
    },
    /**
        onError event fires whenever a service reports an error.
        @param {Any} inData Result data. The format of this data on the service.
        @event
    */
    // fires only on error
    onError: function(inError) {
    }
});


//===========================================================================
// Variable used as a service input
//===========================================================================
/**
    Variable used as a service input
    @name wm.ServiceInput
    @class
    @noindex
    @extends wm.Variable
*/
dojo.declare("wm.ServiceInput", wm.Variable, {
    /** @lends wm.ServiceInput.prototype */
    _allowLazyLoad: false,
        _getSchemaForType: function(inType) {
        return this.owner && this.owner._operationInfo ? this.owner._operationInfo.parameters : null;
    },
    isDataProp: function(inProp) {
        // Note: it's important we assume all properties are data properties unless _dataSchema is set
        // Since the dataSchema is set externally,
        // bindings may set data properties before data schema is set, creating errors.
        return wm.isEmpty(this._dataSchema) || (inProp in this._dataSchema) ;
    },

    /* When the operation changes, update the input schema.  ServiceVariable will override and add autoUpdate calls */
    operationChanged: function(inType, inSchema) {
        this.setType(inType + "Inputs");
        this.setDataSchema(inSchema);
        // input bindings may need to reinitialize after gleaning
        // operation type information (in light of constants)
        if (this.$.binding && inSchema)
        {
            this.$.binding.refresh();
        }

    },

    getArgsHash: function() {
    var data= this.getData(), args={}, d;

    for (var p in this._dataSchema) {
        args[p] = (data[p] === undefined || data[p] === null) ? "" : data[p];
        }
    return args;
    },
    getArgs: function() {
        wm.Variable.convertToHashMaps = true;
        try {
            var data= this.getData(true), args=[], d;
        } catch(e){}
        wm.Variable.convertToHashMaps = false;

        // convert to array
        for (var p in this._dataSchema) {
            if (data) {
            if (data[p] instanceof Date) {
                d = data[p].getTime();
            } else {
                d = data[p];
            }
            } else {
            d = undefined;
            }
            args.push(d !== undefined ? d : null);
/* Seung's temporary fix
            if (d) {
                args.push(d);
            }
            */
        }
        return args;
    }
});



/* Design only code included here because dojo.extend doesn't work well with multiple-inheritance; this needs to be defined before the subclasses are created */
wm.ServiceCall.extend({
    clearInput: "(clear input)",
    updateNow: "(update now)",
    queue: "(serviceCalls)",
    servicesChanged: function() {
        if (this.service) {
            var owner = this.getOwnerApp();
            this._service = wm.services.getService(this.service, // name of service
                                                   owner && owner.declaredClass == "StudioApplication"); // hide from client
            if (!this._service) this._service = new wm.Service({});

            // update the operation's type; forceUpdate needed so that if the type name is the same but fields have changed it will still get updated
            this._setOperation(this.operation, 1);
        }
    },
    getUniqueName: function(inName) {
        if (inName === "input") return "input";
        return this.inherited(arguments);
    },
    /** @lends wm.ServiceCall.prototype */
    doDesigntimeUpdate: function() {
        this._designTime = true; //The line is not being used now.  It may be used in the future to differenciate requests from
        //Studio from requests deployed application.
        return studio.makeLiveDataCall(dojo.hitch(this, "_update"));
    },
    doClearInput: function() {
        this.input.destroy();
        this.input = this.createInput();
    },
    set_operation: function(inOperation) {
        this.setOperation(inOperation);
        if (this.isDesignLoaded() && dojo.indexOf(studio.selected, this) != -1) {
            /* Security Services other than logout almost always require this setting, and users get in trouble
             * by assuming the setting is the default we provide.
             */
            if (this.service == "securityService") {
                this.startUpdate = inOperation != "logout";
            }

            studio.inspector.refocusEditor();
        }
    },
    getServicesList: function() {
        return [""].concat(wm.services.getNamesList()||[]);
    },
    showQueueDialog: function() {
        var d = wm.ServiceQueue.dialog, q = this.$.queue;
        if (d) {
            d.page.binding = q;
            d.page.update();
        }else{
            /* TODO: Convert to new dialogs */
            wm.ServiceQueue.dialog = d = new wm.PageDialog({
                name: "queueDialog",
                owner: studio,
                contentWidth: 600,
                contentHeight: 400,
                hideControls: true,
                pageName: "QueueDialog",
                pageProperties: {binding: q}
            });
        }
        d.show();
    },
    makePropEdit: function(inName, inValue, inEditorProps) {
       var prop = this.schema ? this.schema[inName] : null;
       var name =  (prop && prop.shortname) ? prop.shortname : inName;
       switch (inName) {
           case "service":
           return new wm.SelectMenu(dojo.mixin(inEditorProps, {options: this.getServicesList()}));
       case "operation":
               var
                   s = this._service,
                   valueOk = s && s.getOperation(inValue),
                   methods = s && s.getOperationsList();
               if (!valueOk){
                   inValue = methods ? methods[0] : "";
                   if (inValue && inValue != this.operation)
                       this.set_operation(inValue);
               }
               if (methods)
                   return new wm.SelectMenu(dojo.mixin(inEditorProps, {options: methods}));
               break;
       }
       return this.inherited(arguments);
   }
});

wm.ServiceInputVariable = wm.ServiceInput;

}

if(!dojo._hasResource["wm.base.components.ServiceVariable"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.ServiceVariable"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.ServiceVariable");




//===========================================================================
// Main service calling class: calls services with input data and returns data
//===========================================================================
/**
    Main service calling class: calls services with input data and returns data
    @name wm.ServiceVariable
    @class
    @extends wm.Variable
    @extends wm.ServiceCall
*/
dojo.declare("wm.ServiceVariable", [wm.Variable, wm.ServiceCall], {
    // Points to a widget to cover with a loading dialog while firing this call
    loadingDialog: null,

    // Instead of returning JSON response, return a downloadable file; NOTE: No onResult/onSuccess/onError callbacks
    downloadFile: false,

    /* Current page of data */
    _page: 0,

    /* Maximum number of results to return per page */
    maxResults: 0,
    designMaxResults: 50,
    transposeHashMap: function(inData) {
        var data = [];
        wm.forEachProperty(inData, function(inValue, inName) {
            data.push({name: inName, dataValue: inValue});
        });
        return data;
    },
    /* Handle a successful response to a service call */
    processResult: function(inResult) {
        if (wm.isHashMapType(this.type)) {
            inResult = this.transposeHashMap(inResult);
        }
        this.setData(inResult);
        if (this.service == "securityService" && this.operation == "logout") wm.logoutSuccess();
        this.inherited(arguments);
    },

    /* Handle an error returned by a service call */
    processError: function(inError) {
        /* WARNING: This is a bit sloppy; there is no gaurentee that the inputs have not changed between the last call and the response firing
         * this error handler.
         */
        if (inError && inError.message && inError.message.indexOf("Invalid Long Polling Request:") === 0) {
            this.request(); // connectionTimeout updated by JsonRpcService; we just have to refire the failed call
            return;
        }

        this.handleSecurityErrors(inError);
        this.inherited(arguments);
    },

    /* If the errors are security related, publish the fact so the app knows its no longer logged in */
    handleSecurityErrors: function(inError) {
        var errCodes = (dojo.isObject(inError) ? inError.message : inError).match(/(\d+)$/);
        var errCode = (errCodes) ? errCodes[0] : "";

        // If the failure is a security access error, AND if its NOT a security error that comes from live view
        // (happens when a project accesses the server while running within studio), then tell the user to log back in.
        // Also don't repeat this alert more than once every 3 minutes (it takes 4 server accesses to open a page, so thats 4 alerts in a row!)
        if (errCode == 403) {
            dojo.publish("session-expiration-servicecall", [this]);
            if (app ) app._onSessionExpiration();
        } else {
            dojo.publish("service-variable-error", [this, inError]);
        }
    },

    /* ServiceCall doesn't have a type; when the type is set, we need to update our service info
    * (i.e. our input fields) and reinspect */
    setType: function() {
        this.inherited(arguments);
        if (this._isDesignLoaded && this.input) {
            this.setService(this.service);
            if (this == studio.selected) studio.inspector.inspect(this);
        }

    },

    /* ServiceCall's operationChanged updates the input component type, but as ServiceCall itself lacks a type,
     * subclasses must update their own types
     */
    operationChanged: function(forceUpdate) {
        this.inherited(arguments);
        // output has named type matching operation returnType
        var op = this._operationInfo;
        if (op || forceUpdate) {
          this.setType(op.returnType);
          this.clearData();
        }
        if ((this.autoUpdate || this.startUpdate) && !this._loading && this.isDesignLoaded()) {
          this.update();
        }
    },

    /* If its an HQL Query, then getArgs has some extra stuff to add to the parameter list */
    getArgs: function() {
        var args = this.inherited(arguments);
        var operationType = this.getOperationType();
        if (operationType == "hqlquery") {
            var max = this.isDesignLoaded() ? this.designMaxResults : this.maxResults;
            var pagingOptions = max ? { maxResults: max, firstResult: this.firstRow || 0} : {};
            args.push(pagingOptions);
        }
        return args;
    },

    /* Extra info that the debugger wants about this call */
    getDebugArgs: function() {
        return this.input.getData();
    },

    /* Paging Methods */
    getTotal: function() {
        return this.getCount();
    },
    getPageCount: function() {
        return Math.ceil(this.getTotal() / (this.getCount() || 1));
    },
    setPage: function(inPage) {
        this._page = Math.max(0, Math.min(this.getPageCount() - 1, inPage));
        this.firstRow = this._page * this.maxResults;
        this.update();
    },
    getPage: function() {
        return this._page;
    },
    setFirstPage: function() {
        this.setPage(0);
    },
    setPreviousPage: function() {
        this.setPage(this._page-1);
    },
    setNextPage: function() {
        this.setPage(this._page+1);
    },
    setLastPage: function() {
        this.setPage(this.getPageCount());
    },

    /* Adds handling of the loadingDialog to ServiceCall._update() */
    _update: function() {
        if (this.loadingDialog && !this._isDesignLoaded) {
            if (this.loadingDialog instanceof wm.LoadingDialog == false) {
                this.loadingDialog = new wm.LoadingDialog({
                    owner: this,
                    name: "loadingDialog",
                    widgetToCover: this.loadingDialog
                });
                this.loadingDialog.setServiceVariableToTrack(this);
            }
        }
        return this.inherited(arguments);
    },


    /* DEBUGGING METHODS AND OVERRIDES */

    toString: function(inText) {
       var t = inText || "";
       t += "; " + wm.getDictionaryItem("wm.ServiceVariable.toString_FIRING", {
           isFiring: Boolean(this._requester)
       });
       return this.inherited(arguments, [t]);
   },

    log: function(eventType, /* autoUpdate, autoStart, eventHandler */
       callingMethod, /* optional; indicates who really called this */
       backlogObj, /* optional; used to provide an old eventChain */
       errorMsg /* optional; for processError only */ ) {
        if (!app.debugDialog) return;
        if (!this.debugId) this.debugId = [];

        /* STEP 1: Setup the _debug object used by the wm.debugger.ServicePanel */
        if ((eventType != "serviceCall" && eventType != "serviceCallResponse")) {
            this._debug = {
                trigger: callingMethod || eventType,
                eventName: eventType,
                request: "",
                lastUpdate: new Date()
            };
        }


        /* If the eventType is autoUpdate, then this is triggered by a change to the input/filter/sourceData value; in other words,
         * a change to a wm.Variable.  This means that the notification for the change came from a call to dataValueChanged;
         * See if we can find what called dataValueChanged and log that.
         * WARNING: Sometimes the callstack goes into a loop, so don't go deeper than 15 into the stack.
         */
        if (eventType == "autoUpdate") { /* This block logs it in wm.debugger.ServicePanel */
            try {
                var i = 0;
                var caller = arguments.callee.caller;
                while (caller && caller.nom != "dataValueChanged" && i < 15) {
                    caller = caller.caller;
                    i++;
                }
                if (caller && caller.nom == "dataValueChanged") {
                    var newValue = caller.arguments[1];
                    this._debug.eventName = "inputChanged: " + caller.arguments[0] + " set to " + (newValue instanceof wm.Component ? newValue.toString() : newValue);
                }
            } catch (e) {}

            /* This block logs it in wm.debugger.EventsPanel */
            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: "autoUpdate",
                    sourceDescription: "An input has changed",
                    resultDescription: "Because autoUpdate is set, " + this.getRuntimeId() + ".update() was called",
                    method: "update",
                    affectedId: this.getRuntimeId(),
                    firingId: this.getRuntimeId()
                })
            });

        } else if (eventType == "start") {
            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: "start",
                    sourceDescription: "Owner has loaded",
                    resultDescription: "Because startUpdate is set, " + this.getRuntimeId() + ".update() was called",
                    method: "update",
                    affectedId: this.getRuntimeId(),
                    firingId: this.owner.getRuntimeId()
                })
            });
        } else if (eventType == "autoUpdateOnStart") {
            var page = this.getParentPage() || app;
            this._debug.trigger = "autoUpdate" + (page && page._loadingPage ? ": onStart" : "unknown source");

            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: "autoUpdate",
                    sourceDescription: "An input has initialized",
                    resultDescription: "Because autoUpdate is set, " + this.getRuntimeId() + ".update() was called",
                    method: "update",
                    affectedId: this.getRuntimeId(),
                    firingId: this.owner.getRuntimeId()
                })
            });
        }

        /* Calls to "update" are typically made from user written methods (I've changed most internal calls to "updateInternal" */
        else if (eventType == "update") {
            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: "update",
                    sourceDescription: (callingMethod ? callingMethod + "() called " : "") + this.getRuntimeId() + ".update()",
                    resultDescription: "Processing request to fire service variable",
                    method: "update",
                    affectedId: this.getRuntimeId(),
                    firingId: ""
                })
            });
        } else if (eventType == "serviceCall") {
            if (backlogObj && backlogObj.eventChain) {
                var currentEventChain = app.debugDialog.cacheEventChain();
                app.debugDialog.restoreEventChain(backlogObj.eventChain);
            }
            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: "serviceCall",
                    sourceDescription: this.getRuntimeId() + ".update()",
                    resultDescription: "Sending request to server",
                    method: "request",
                    affectedId: this.getRuntimeId(),
                    firingId: this.getRuntimeId()
                })
            });
            this.debugEventChain = app.debugDialog.cacheEventChain(); // use this when the request is completed to stitch together the event sequence
            if (currentEventChain) {
                app.debugDialog.restoreEventChain(currentEventChain);
            }
        } else if (eventType == "serviceCallResponse") {
            app.debugDialog.restoreEventChain(this.debugEventChain);
            delete this.debugEventChain;
            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: "serviceCallResponse",
                    sourceDescription: "Response received from server",
                    resultDescription: errorMsg ? "Calling " + this.getRuntimeId() + ".onError()" : "Calling " + this.getRuntimeId() + ".onSuccess()",
                    method: errorMsg ? "processError" : "processResult",
                    affectedId: this.getRuntimeId(),
                    firingId: this.getRuntimeId()
                })
            });
            if (this._debug && this._debug.lastUpdate) {
                this._debug.duration = new Date().getTime() - this._debug.lastUpdate.getTime();
            }
        } else if (eventType == "disabled" || "onCanUpdate") {
            this.debugId.push({
                eventType: eventType,
                id: app.debugDialog.newLogEvent({
                    eventType: eventType,
                    sourceDescription: "Update was prevented by " + (eventType == "disabled" ? "disabled property" : "onCanUpdate() call"),
                    resultDescription: "Service did not fire",
                    method: "update",
                    affectedId: this.getRuntimeId(),
                    firingId: ""
                })
            });

        }

        if (eventType != "serviceCall" && eventType != "serviceCallResponse" && this._debug || this._debug && !this._debug.eventId) {
            this._debug.eventId = this.debugId[this.debugId.length - 1].id;
        }

    },
    endLog: function(eventType) {
        if (!app.debugDialog) return;
        if (this.debugId && this.debugId.length) {
            var debugId = this.debugId.pop();
            if (debugId.eventType == eventType) {
                app.debugDialog.endLogEvent(debugId.id);
            }
        }
        if (eventType == "serviceCallResponse") {
            app.debugDialog.clearEventChain();
        }
    },
    inputChanged: function() {
        if (this.autoUpdate) {
            if (app.debugDialog) this.log("autoUpdate");
            this.inherited(arguments);
            if (app.debugDialog) this.endLog("autoUpdate");
        }
    },
    /* Add logging to doStartUpdate */
    doStartUpdate: function() {
        if (this.canStartUpdate()) {
            if (app.debugDialog) this.log("start");
            this.inherited(arguments);
            if (app.debugDialog) this.endLog("start");
        }
    },
    doAutoUpdate: function() {
        if (this.canAutoUpdate()) {
            if (app.debugDialog && !this._debug && this._inPostInit) this.log("autoUpdateOnStart");

            this.inherited(arguments);

            if (app.debugDialog) this.endLog("autoUpdateOnStart");
        }
    },
    request: function(inArgs, optionalOp, optionalDeferred) {

        if (app.debugDialog && this._debug) this._debug.request = this.getDebugArgs();
        if (app.debugDialog) {
            this.log("serviceCall", null, optionalOp);
            this.endLog("serviceCall", null, optionalOp);
        }

         if (!this.downloadFile) {
            return this.inherited(arguments);
        } else {
            var args = inArgs || this.input.getArgsHash();
            var baseurl;
            if (wm.xhrPath) {
                baseurl = wm.xhrPath;
            } else {
                baseurl = window.location.href;
                baseurl = baseurl.replace(/\?.*$/,"");
                baseurl = baseurl.replace(/\/[^\/]*$/,"/");
            }
            var urlStr = baseurl + this._service._service.serviceUrl.replace(/\.json$/,".download");

            /* Delete the last iframe */
            var iframe = dojo.byId("downloadFrame");
            if (iframe) iframe.parentNode.removeChild(iframe);

            /* Create a new iframe */
            iframe = document.createElement("iframe");
            dojo.attr(iframe, {     id: "downloadFrame",
                                    name: "downloadFrame"});
            dojo.style(iframe, {    top: "1px",
                                    left: "1px",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
            dojo.body().appendChild(iframe);

            /* Get the document of the iframe */
            var iframedoc= iframe.contentDocument || iframe.contentWindow.document;
            iframedoc.open("text/html"); // required by ie8 and earlier so that iframedoc.body exists
            iframedoc.close();

            /* Create a form.  Add a "method" parameter to it using an input element */
            var form =  iframedoc.createElement("form");
            dojo.attr(form, {   id: "downloadForm",
                                method: "POST",
                                action: urlStr
                            });
            var method = iframedoc.createElement("input");
            dojo.attr(method, { name: "method",
                                value: optionalOp || this.operation});
            form.appendChild(method);

            /* Add one input per parameter */
            wm.forEachProperty(args, function(value, name) {
                var input = iframedoc.createElement("textarea");
                dojo.attr(input, {  name: name,
                                    value: value});
                form.appendChild(input);
            });

            iframedoc.body.appendChild(form);
            form.submit();

        }
    },

    /* Called when an update call is blocked by disabled or onCanUpdate */
    blocked: function(inMessage) {
        this.log(this.disabled ? "disabled" : "onCanUpdate");
        this.onBlocked();
        this.endLog(this.disabled ? "disabled" : "onCanUpdate");
    },
    onBlocked: function(inMessage) {},

    setDisabled: function(inDisabled) {
        var valueWas = this.disabled;
        this.disabled = Boolean(inDisabled);

        // parent class (wm.Variable) does calls this, but this fires
        // the service variable immediately,
        // and the new filter/sourceData/input values
        // may not have arrived yet; this notify
        // should only be called when there is a change in data
        //if (valueWas != this.disabled) this.notify();
    },



    /* Adds logging to result method */
    result: function(inResult) {
        delete this._lastError;
        if (app.debugDialog) {
            this.log("serviceCallResponse");
            if (this._jsonRpcServiceDeferred && this._jsonRpcServiceDeferred.xhr) {
                var text = this._jsonRpcServiceDeferred.xhr.responseText;
                this._lastResponse = (text || "").length > 1000 ? text.substring(0,1000) + "..." : text;
            }
        }
        var result = this.inherited(arguments);
        if (app.debugDialog) this.endLog("serviceCallResponse");
        return inResult;
    },



    /* Adds logging to the error method */
    error: function(inError) {
        if (djConfig.isDebug) this.log("serviceCallResponse");
        this._lastError = inError;
        this.inherited(arguments);
        if (djConfig.isDebug) this.endLog("serviceCallResponse");
        return inError;
    }

});


}

if(!dojo._hasResource["wm.base.widget.Container"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.widget.Container"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.widget.Container");

/**
    Base class for widget containers.
    @name wm.Container
    @class
    @extends wm.Control
*/
wm.define("wm.Container", wm.Control, {
    /** @lends wm.Container.prototype */
/*
    published: {
        invalid: { ignore: 1, bindSource: 1, readonly: 1, type: "Boolean" },
        lock: { order: 0, type: "Boolean" },
        freeze: { order: 5, type: "Boolean" },
        box: { ignore: 1 },
        boxPosition: { ignore: 1},
            autoScroll: {group: "scrolling", order: 100, ignore: 0, type: "Boolean"}
    },
    */
    //touchScrolling: false,
    imageList: "",
    border: "0",
    container: true,
    lock: false,
    freeze: false,
    classNames: "wmcontainer",
    autoScroll: false,
    //themeStyleType: "",        // A funky parameter that won't ever show up in widgets.js; instead it adds/removes classes (more of a style's inspector kind of property, but one that identifies the type of content and leaves it to the theme to decide how to render it)
        fitToContentWidth: false,  // Container automatically resizes itself to match the width of its content, or minWidth if % sized content
        fitToContentHeight: false, // Container automatically resizes itself to match the height of its content, or minHeight if % sized content
        fitToContent: false,       // shortcut for (fitToContentWidth || fitToContentHeight)
        _needsFitToContent: false, // Init time flag that signals that this fitToContent container has not yet been fit to its content


    constructor: function() {
        this.c$ = [];
    },
    init: function() {

        if (this.dockRight) {
            app.dockRight = this;
        }
        if (this.dockLeft) {
            app.dockLeft = this;
        }
        if (this.dockTop) {
            app.dockTop = this;
        }
        if (this.dockBottom) {
            app.dockBottom = this;
        }

        if (this.autoScroll && app._touchEnabled && !wm.disableTouchScroll) {
            var node = this.domNode;
            this.connect(node, wm.isFakeMobile ? "mousedown" : "touchstart", this, "_ontouchstart");
            if (!wm.isFakeMobile) {
                this.connect(node, "touchmove", this, "_ontouchmove");
                this.connect(node, "touchend", this, "_ontouchend");
            }
        }

        this.inherited(arguments);
        this.setLayoutKind(this.layoutKind);
        this.domNode.box = this.box = "";
        this._needsFitToContent = this.fitToContent = this.fitToContentWidth || this.fitToContentHeight;
    },

    _ontouchstart: function(e) {
        if (app._touchY && app._touchY.animationId) {
            window.clearInterval(app._touchY.animationId);
            delete app._touchY.animationId;
        }
        if (!this._xscrollY) return; // if there is no scrolling, exit and let the event bubble up to the parent
        var node = this.domNode;
        var targetNode = e.touches ? e.touches[0].target : e.target;

        if (targetNode.tagName == "INPUT" || targetNode.tagName == "TEXTAREA") {
            targetNode.focus();
            return;
        }
        //if (node.scrollTop + node.clientHeight >= node.scrollHeight) return ; // if there's no more room to move down, let the event bubble up to the parent
        dojo.stopEvent(e);
        var y = e.touches && e.touches.length ? e.touches[0].screenY : e.screenY;

        app._touchY = {
            y: y,
            initialY: y,
            targetNode: targetNode,
            targetWidget: this,
            time: new Date().getTime(),
            moved: false
        };
        this.connect(node, wm.isFakeMobile ? "mousemove" : "touchmove", this, "_ontouchmove");
        this.connect(node, wm.isFakeMobile ? "mouseup" : "touchend", this, "_ontouchend");
    },
    _ontouchmove: function(e) {
        if (!app._touchY) return;
        dojo.publish("wmTouchMove", [this]); // call this any time we stop the event from propagating up
        var y = e.touches && e.touches.length ? e.touches[0].screenY : e.screenY;
        var touchTarget = e.touches && e.touches.length ? e.touches[0].target : e.target;

        if (touchTarget != app._touchY.targetNode && !wm.isFakeMobile) return;
        var node = this.domNode;

        /* Let the event bubble up if no room to scroll */
        if (node.scrollHeight <= node.clientHeight) return;

        var initialScrollTop = node.scrollTop;

        var lastY = app._touchY.y;
        if (y == lastY) {
            dojo.stopEvent(e);
            //console.log("Y == Y");
            return;
        }

        // If Y is decreasing, then the user is trying to increase scrollTop, but we're already scrolled to the bottom, let the parent container handle it
        if (y < lastY && node.clientHeight + node.scrollTop >= node.scrollHeight ||
        // If Y is Increasing, then the user is trying to decrease scrollTop, but we're already scrolled to the top, let the parent container handle it
        y > lastY && node.scrollTop <= 0) {
            /*
        app._touchY.y = y;
        app._touchY.velocity = 0;
        app._touchY.time = new Date().getTime();
        */
            return;
        }

        var delta = lastY - y;


        var time = new Date().getTime();
        var deltaTime = time - app._touchY.time;
        var scrollTop = node.scrollTop;
        var newScrollTop = scrollTop + delta;
        if (newScrollTop < 0) {
            newScrollTop = 0;
        } else if (newScrollTop > node.scrollHeight) {
            newScrollTop = node.scrollHeight;
        }
        node.scrollTop = newScrollTop;
        //console.log("Y: " + y + ", lastY: " + lastY + "; DELTA: " + delta + ", scrollTop: " + newScrollTop + ", NAME: " + this.name);
        var deltaScrollTop = initialScrollTop - node.scrollTop;
        app._touchY.y = y;
        app._touchY.velocity = delta / deltaTime;
        app._touchY.time = new Date().getTime();
        if (Math.abs(y-app._touchY.initialY) > 5) app._touchY.moved = true;
        /*
    app._touchY = {y: y, // last y position changes as a result of scrolling
            targetNode: touch.target,
            velocity: delta / deltaTime,
            time: new Date().getTime()};
            */
        dojo.stopEvent(e);

    },
    _ontouchend: function(e) {
        var node = this.domNode;

        if (node.scrollHeight <= node.clientHeight) return; // if there is no scrolling, exit and let the event bubble up to the parent
        if (app._touchY.velocity != Infinity && Math.abs(app._touchY.velocity) > 0.15) {
            if (app._touchY.animationId) {
                window.clearInterval(app._touchY.animationId);
            }
            app._touchY.animationId = window.setInterval(dojo.hitch(this, "_onAnimateScroll"), 50);
        }
        //dojo.stopEvent(e);
        this.disconnectEvent("mousemove");
        this.disconnectEvent("mouseup");
    },
    _onAnimateScroll: function() {
        var node = this.domNode;
        app._touchY.velocity *= 0.9;
        var top = node.scrollTop;
        var newTop = node.scrollTop + Math.min(app._touchY.velocity * 50, node.clientHeight); // velocity is px per ms; 50ms is our animation interval
        node.scrollTop = newTop;
        if (app._touchY.velocity == Infinity || Math.abs(top - newTop) <= 1) {
            window.clearInterval(app._touchY.animationId);
            //console.log("Delete touchY in Animate: " + this.name);
            //delete app._touchY;
            return;
        }
        node.scrollTop += Math.min(app._touchY.velocity * 50, node.clientHeight); // velocity is px per ms; 50ms is our animation interval
    },

    postInit: function() {
        if (this.isDesignLoaded()) this.setLock(this.lock);
        this.inherited(arguments);
        if (this.disabled) {
            wm.forEachProperty(this.widgets, dojo.hitch(this, function(w, name) {
                w.setParentDisabled(this._disabled);
            }));
        }
    },

    /* Called from Component.makeEvents or by end user*/
    connectOnEnterKey: function() {
        this.connect(this.domNode, "onkeypress", this, "keypress");
    },
    keypress: function(evt) {
        var self = this;
        if (evt.keyCode == dojo.keys.ENTER && evt.target.tagName != "TEXTAREA") {
            wm.job(this.getRuntimeId() + ".enterkeypress", 50, dojo.hitch(this, function() {
                if (!this.isDestroyed) this.onEnterKeyPress(evt);
            }));
        }
    },
    setThemeStyleType: function(inType) {
        var oldType = this.getThemeStyleType();
        if (oldType) this.removeUserClass(oldType);
        if (inType) this.addUserClass(inType);
    },
    getThemeStyleType: function() {
        var types = ["MainContent", "EmphasizedContent", "HeaderContent"];
        if (this._classes && this._classes.domNode) for (var i = 0; i < types.length; i++) {
            if (dojo.indexOf(this._classes.domNode, types[i]) != -1) return types[i];
        }
    },
    destroy: function() {
        if (this.dockRight) {
            delete app.dockRight;
        } else if (this.dockLeft) {
            delete app.dockLeft;
        } else if (this.dockTop) {
            delete app.dockTop;
        } else if (this.dockBottom) {
            delete app.dockBottom;
        }
        if (this.domNode && this.domNode.box) delete this.domNode.box;
        this.inherited(arguments);
    },
    bc: function() {
        this.inherited(arguments);
        /*
        if (this.verticalAlign == "justified") {
            this.verticalAlign = "top";
        }
        if (this.horizontalAlign == "justified") {
            this.horizontalAlign = "left";
        }
        */
        delete this.layoutJustify;
        if (this.layoutAlign) {
            this.contentAlign = this.layoutAlign;
            delete this.layoutAlign;
        }

            /* this.layoutFit I believe is an obsolete wm 4.x property */
        if (this.layoutFit) {
            this.fitToContentWidth = this.fitToContentHeight = this.layoutFit;
            delete this.layoutFit;
        }
        if (this.box == "h") {
            this.layoutKind = "left-to-right";
            //this.layout = wm.Container.vBox;
        }
        if (this.boxPosition) {
            var
                boxPositions = ['topLeft', 'center', 'bottomRight'],
                vAligns = ["top", "middle", "bottom"],
                hAligns = ["left", "center", "right"],
                h = this.layoutKind == "left-to-right",
                i = dojo.indexOf(boxPositions, this.boxPosition);
            if (i != -1) {
                if (h)
                    this.horizontalAlign = hAligns[i];
                else
                    this.verticalAlign = vAligns[i];
            }
        }
    },
    //
    // Child Controls
    //
    addWidget: function(inWidget){
        this.inherited(arguments);

            if (this.box == 'h' && !inWidget.width)
                inWidget.setProp("width", "64px");
            else if (this.box == 'v' && !inWidget.height)
                inWidget.setProp("height", "64px");
            //inWidget.setSize(inWidget.size);
    },
    getOrderedWidgets: function() {
        return this.c$;
    },
    addControl: function(inControl) {
        this.c$.push(inControl);
        //this.dom.append(inControl.dom);
    },
    removeControl: function(inControl) {
        //this.dom.remove(inControl.dom);
        if (this.c$) {
            for (var i=0, c; c=this.c$[i]; i++){
                if (c == inControl) {
                    this.c$.splice(i, 1);
                    return i;
                }
            }
        }
    },
        // Added by michael k 5/15/09 to support the PopupHelp dialog
    removeAllControls: function() {
            while (this.c$.length) {
              var c = this.c$[0];
              this.removeControl(c);
              c.destroy();
            }
              /*
          while (this.c$.length) this.removeControl(this.c$[0]);
          for (var n in this.widgets)
            this.removeWidget(this.widgets[n]);
          while (this.domNode.firstChild) this.domNode.removeChild(this.domNode.firstChild);
              */
          this.reflow();
    },
    insertControl: function(inControl, inIndex) {
        this.c$.splice(inIndex, 0, inControl);
        //this.dom.append(inControl.dom);
    },
    moveControl: function(inControl, inIndex) {
        var i0 = this.removeControl(inControl);
       /* if (i0 < inIndex)
            inIndex--;*/
        if (inIndex == -1) {
            this.c$.push(inControl);
        } else {
            this.c$.splice(inIndex, 0, inControl);
        }
    },
    indexOfControl: function(inControl) {
        for (var i=0, c; c=this.c$[i]; i++){
            if (c == inControl) {
                return i;
            }
        }
        return -1;
    },
    nextSibling: function(inControl, showingOnly) {
        for (var i=0, c; c=this.c$[i]; i++){
            if (c == inControl) {
                if (!showingOnly) {
                return this.c$[i+1];
                } else {
                for (var j = i+1; j < this.c$.length; j++) {
                    if (this.c$[j].showing) return this.c$[j];
                }
                }
            }
        }
    },
    prevSibling: function(inControl, showingOnly) {
        for (var i=0, c; c=this.c$[i]; i++){
            if (c == inControl) {
                if (!showingOnly) {
                return this.c$[i-1];
                } else {
                for (var j = i-1; j >= 0; j--) {
                    if (this.c$[j].showing) return this.c$[j];
                }
                }

            }
        }
    },
    setAutoScroll: function(inAutoScroll) {
        this._xscrollX = false;
        this._xscrollY = false;
        this.inherited(arguments);
        this.reflow();
    },


    adjustSetSizeProp: function(n,v) {
        if (n == "height" && this.fitToContentHeight && this.getPreferredFitToContentHeight)
        return this.getPreferredFitToContentHeight() + "px";
        if (n == "width" && this.fitToContentWidth && this.getPreferredFitToContentWidth)
        return this.getPreferredFitToContentWidth() + "px";
        return v;
    },
    //
    // Flow
    //
    reflow: function() {
        this._boundsDirty = true;
        if (!this.isReflowEnabled())
        return;
        /* If this widget is fitToContent, then we'll need to update this container's width/height to fit its contents; and that means the parent will need to reflow.
         * If the parent is fitToContent, (TODO: Is this still needed?) then any we'll need to call this.parent.reflow() which will cause the parent to flow its children,
         * (of which this container is one), and the children to flow their children of which this is one.
         *  After this is done, this too will call calcFitToContent.
         */
        if (this.parent && (this.fitToContent || this.parent.fitToContent)) {
            if (this._needsFitToContent) delete this._needsFitToContent;
            this.parent.reflow();
                    /*
            if (this.fitToContent) {
                this.calcFitToContent();
            }
                        */
        } else {
            this.flow();
        }
    },
    adjustFlowForMobile: function() {
    if (this.autoScroll || this.fitToContentHeight  || studio.currentDeviceType == "desktop" || this._percEx.h) return;
    var max = 0;
    if (this.layoutKind == "left-to-right") {
        max = this.bounds.h;
        for (var i = 0; i < this.c$.length; i++) {
        var c = this.c$[i];
        if (c.enableTouchHeight && !c._percEx.h && c.mobileHeight) {
            if (c.bounds.h > max) max = c.bounds.h;
        }
        }
    } else {
        var hasMobileHeight = false;
        for (var i = 0; i < this.c$.length; i++) {
        var c = this.c$[i];
        if (c.enableTouchHeight && !c._percEx.h && c.mobileHeight) {
            hasMobileHeight = true;
            break;
        }
        }
        if (hasMobileHeight)
        max = this.getPreferredFitToContentHeight();
    }
    if (max > this.bounds.h) {
        this.enableTouchHeight = true;
        var h =  max + "px";
        this.mobileHeight = h;
        this.setHeight(h);
    }

    },
    flow: function() {
        if (this._boundsDirty && this.isReflowEnabled()) {
        if (this._isDesignLoaded) {
            this.adjustFlowForMobile();
        }
        this.layout.flow(this,false);
        }
    },
    renderControls: function() {
        // code to insure that a container's scrollbars are updated when a child is resized...
        // this means that autoscroll has a slower rendering execution than non-autoscroll
        //if (this.autoScroll && this._xneedReflow || this.fitToContent) this.renderBounds();
        for (var i=0, c; c=this.c$[i]; i++) {
        if (c.showing)
            c.renderBounds();
        }
    },
    removeDelayedReflow: function() {
        delete wm.Container.delayedReflowWidgets[this.getRuntimeId()];
    },
    delayedReflow: function() {
    /* Already queued for reflow */
    if (wm.Container.delayedReflowWidgets[this.getRuntimeId()])
        return;
    wm.Container.delayedReflowWidgets[this.getRuntimeId()] = this;

    var newParents = [];

    /* Iterate over every existing delayed widget and find if they have a common parent that could be reflowed instead */
    try {
        wm.forEachProperty(wm.Container.delayedReflowWidgets, dojo.hitch(this, function(widget, widgetid) {
        if (widget === this) {
        ;
        } else if (widget.parent === this.parent) {
        delete wm.Container.delayedReflowWidgets[widgetid];
        delete  wm.Container.delayedReflowWidgets[this.getRuntimeId()];
        newParents.push(this.parent);
        } else if (this.isAncestor(widget)) {
            delete  wm.Container.delayedReflowWidgets[this.getRuntimeId()];
        } else if (widget.isAncestor(this)) {
            delete wm.Container.delayedReflowWidgets[widgetid];
        }
        }));
    } catch(e) {}
    for (var i = 0; i < newParents.length; i++) {
        newParents[i].delayedReflow();
    }

    if (!wm.Container._delayedReflowWidgetsId) {
        wm.Container._delayedReflowWidgetsId = window.setTimeout(wm.Container.runDelayedReflow, 1);
    }
    },
        forEachControl: function(inFunc, paramArray) {
      dojo.forEach(this.c$, function(inControl) {
        inFunc.apply(inControl, (paramArray) ? paramArray : []);
        });
    },
    // bc
    nodeBoundsChange: function() {
        // should be caused by box layout flow
        /*
        this.setBounds(dojo.marginBox(this.domNode));
        this.flow();
        */
    },
    //
    // Image list
    //
    imageListChanged: function() {
        for (var i=0, c; c=this.c$[i]; i++) {
            wm.fire(c, "imageListChanged");
        }
    },
    setImageList: function(inImageList) {
        this.imageList = inImageList;
        this.imageListChanged();
    },


    updateIsDirty: function() {
    this.setValue("isDirty", this.getIsDirty());
    wm.fire(this.parent, "updateIsDirty");
    },
    getIsDirty: function() {
    for (var i in this.widgets) {
        var w = this.widgets[i];
        if (w.isDirty)
        return true;
            else if (w.isDirty === undefined && w.getIsDirty && w.getIsDirty())
                return true;
    }
    },

    //
    // validation
    //
    validate: function() {
        this.setValue("invalid", this.getInvalid());
        wm.fire(this.parent, "validate");
    },
    getInvalid: function() {
        var p = this.getParentPage();
        for (var i in this.widgets) {
        var w = this.widgets[i];
        if (p && p.validateVisibleOnly && (!w.showing || wm.Layer && w instanceof wm.Layer && !w.isActive()))
            continue;
        if (w.invalid)
            return true;
                else if (w.invalid === undefined && w.getInvalid && w.getInvalid())
                    return true;
        }

        if (dojo.isFunction(this.customGetValidate))
        return !this.customGetValidate();
        return false;
    },
        customGetValidate: function() {
        return true;
        },
    getInvalidWidget: function() {
        var p = this.getParentPage();
        for (var i in this.widgets) {
        var w = this.widgets[i];
        if (p && p.validateVisibleOnly && (!w.showing || wm.Layer && w instanceof wm.Layer && !w.isActive()))
            continue;
        if (wm.isInstanceType(w,[wm.AbstractEditor, wm.Editor])) {
            if (w.getInvalid()) return w;
        } else if (wm.isInstanceType(w,wm.Container)) {
            var tmp = w.getInvalidWidget();
            if (tmp) return tmp;
        }
        }
        return null;
    },

    //
    // Lock/freeze
    //
    getLock: function() {
        return this.lock || (this.parent && wm.fire(this.parent, "getLock")) || false;
    },
    setLock: function(inLock) {
            var original = this.lock;
        this.lock = inLock;
        if (window['studio'] && (this.lock != original || this.lock)) {
            studio.refreshComponentOnTree(this);
        }
    },
    getFreeze: function() {
        return this.freeze || this.getLock();
    },
    // FIXME: design only? vestigal?
    /*
    findContainer: function(inType) {
        if (!this.lock) {
            if (this.freeze || !this.isWidgetTypeAllowed(inType)) {
                for (var i in this.widgets) {
                    var w = this.widgets[i];
                    if (w.container) {
                        var r = w.findContainer(inType);
                        if (r)
                            return r;
                    }
                }
            } else {
                return this;
            }
        }
    },
    */
    // used by paste
    isWidgetTypeAllowed: function(inType) {
        // subclasses should override this to enforce only certain widget types
        // are allowed to be added to the container.
        return true;
    },
    /*
    setBox: function(inBox) {
        if (this.box != inBox) {
            this.box = (this.containerNode || this.domNode).box = inBox;
            // FIXME: wtf?
            //if (this.isSizeable() || !this.isMoveable())
                this._reorientChildren(this.box);
            this.reflow();
        }
    },
    */
    /*
    _reorientChildren: function(inBox) {
        var b = inBox, bp = wm.Box.prototype, bw = bp.width, bh = bp.height;
        var parentNode = this.containerNode || this.domNode;
        wm.forEachProperty(this.widgets, function(w) {
            if (w.domNode.parentNode != parentNode)
                return;
            var s = w.domNode.style, f = (b == 'flow' || b == '');
            if (f) {
                s.position = 'static';
                w.left = w.top = '';
                w.updateBounds();
            } else
                s.position = 'absolute';
            w.moveable = !f;
            if (b == 'h' || b == 'v') {
                w.width = bw;
                w.height = bh;
                w.updateBounds();
            }
        });
    },*/
    _reorientChildren: function(inBox) {
        var parentNode = this.containerNode || this.domNode;
        wm.forEachProperty(this.widgets, function(w) {
            if (w.domNode.parentNode != parentNode)
                return;
            var ww = w.width;
            w.width = w.height;
            w.height = ww;
            w.updateBounds();
        });
    },
    clearData: function() {
        var clear = function(w) {
        if (wm.isInstanceType(w, [wm.AbstractEditor, wm.Editor])) {
            w.clear();
        }
        };
        wm.forEachWidget(this,clear);
    },
    resetData: function() {
        var reset = function(w) {
        if (w instanceof wm.AbstractEditor)
            w.reset();
        };
        wm.forEachWidget(this,reset);
    },
        clearDirty: function() {
            this.setValue("isDirty", false);
        var dirty = function(w) {
            if (w instanceof wm.AbstractEditor)
                w.clearDirty();
        }


        wm.forEachWidget(this,dirty);
    },
    /* What is the maximum width that this container can achieve given its parents and assuming we aren't planning on using scrollbars?
     * The answer is a function of the parent's getCurrentMaxWidth and the sizes of this container's siblings.
     */
    getCurrentMaxWidth: function() {
        // If no parent, or if the parent doesn't have the getCurrentMaxWidth method, then there is nothing to look up, just
        // return the available width within this container
        if (!this.parent || !this.parent.getCurrentMaxWidth)
            return this.bounds.w - this.padBorderMargin.l - this.padBorderMargin.r;

        // Else if we are fitToContent, then we need to get the parent's current max width, as that is how far our fitToContent container can extend
        else if (this.fitToContent)
            return this.parent.getCurrentMaxWidth();

        // If we are NOT fitToContent, but we are % sized in a top-to-bottom layout, then our max width is the width of the parent
        else if (this._percEx.w && this.layoutKind == "top-to-bottom")
            return this.parent.getCurrentMaxWidth();

        // If we are NOT fitToContent but we are % sized in a left-to-right layout, then calc how much free space there is in the parent
        // return free space minus the width of this object to get the full space available for this container to grow
        else if (this._percEx.w && this.layoutKind == "top-to-bottom") {
            var maxWidth = this.parent.layout.getMaxFreeSpace(this.parent.c$, "w",this.parent.bounds.w - this.parent.padBorderMargin.l - this.parent.padBorderMargin.r);
            return maxWidth + this.bounds.w;
        }
        // Else we must be px sized, so just return our width
        else
            return this.bounds.w - this.padBorderMargin.l - this.padBorderMargin.r;
    },

    /* What is the maximum height that this container can achieve given its parents and assuming we aren't planning on using scrollbars?
     * The answer is a function of the parent's getCurrentMaxHeight and the sizes of this container's siblings.
     */
    getCurrentMaxHeight: function() {
        if (!this.parent || !this.parent.getCurrentMaxHeight)
            return this.bounds.h - this.padBorderMargin.t - this.padBorderMargin.b;

        else if (this.fitToContent)
            return this.parent.getCurrentMaxHeight();

        else if (this._percEx.h && this.layoutKind == "left-to-right")
            return this.parent.getCurrentMaxHeight();
        else if (this._percEx.h && this.layoutKind == "top-to-bottom") {
            var maxHeight = this.parent.layout.getMaxFreeSpace(this.parent.c$, "h",this.parent.bounds.h - this.parent.padBorderMargin.t - this.parent.padBorderMargin.b);
            return maxHeight + this.bounds.h;
        }
        else
            return this.bounds.h - this.padBorderMargin.t - this.padBorderMargin.b;
    }
});

wm.Container.extend({

    /* Get the preferred width of this container, for use if this is a fitToContentWidth container.
     * left-to-right container: width is the sum of the widths of all px sized children and the sum of all minWidths for % sized children.
     * top-to-bottom container: width is the max of the widths of all px sized children and the minWidths for % sized children
     */
    getPreferredFitToContentWidth: function() {
        // get the maximum width in this column;
        // and get the sum of widths in this row... we'll worry later about whether its a row or column
                var extra = this.padBorderMargin.r + this.padBorderMargin.l;
            var max = 0;
            var sum = 0;
        var percentUsed = 0;
        var v;
        var count = 0;
        for (var i=0, c; c=this.c$[i]; i++) {
            if (this.layout.inFlow(c)) {
                count++;
                if (
                /* if its a fitToContentWidth widget, then its height is determined by calling getPreferredFitToContentHeight */
                c.fitToContentWidth ||
                    /* If there is a fitToContentWidth panel that contains a Container that is percent sized, then
                     * assume the parent will resize to fit whatever height this % sized container needs.
                     * If c is autoScrolling, then its size isn't affected by its contents.
                     */
                c instanceof wm.Container && c._percEx.w == 100 && !c.autoScroll && c.parent && (c.parent.fitToContentWidth||c.parent.autoScroll)
                   ) {
                    v =  c.getPreferredFitToContentWidth();
                } else if (!c._percEx.w) {
                    v =  c.bounds.w;
                } else {
                    v = parseInt(c.minWidth) || c.getMinWidthProp();
                    if (c.bounds.w > v || this.c$.length == 1) {
                    if (percentUsed < 100)
                        percentUsed += c._percEx.w;
                    } else {
                    percentUsed = 100;
                    }
                }
                max = Math.max(max, v);
                sum += v;

            }
        }

        var dontNormalizeMinPercent = count == 1;
        if (!dontNormalizeMinPercent && percentUsed && percentUsed < 100) {
        sum = Math.round(sum * 100/percentUsed);
        max = Math.round(max * 100/percentUsed);
        }
                // Never return less than 30px wide; mostly this is for design mode where users still need to be able to find and drop widgets into the container.
        if (this.layoutKind == "fluid") return Math.min(this.bounds.w, max);

            var result = ((this.layoutKind == "top-to-bottom") ? max : sum) + extra;
        return Math.max(this.minWidth,Math.max(result, wm.Control.prototype.getMinWidthProp.call(this)));
    },

    /* Get the preferred height of this container, for use if this is a fitToContentHeight container.
     * top-to-bottom container: height is the sum of the heights of all px sized children and the sum of all minHeights for % sized children.
     * left-to-right container: height is the max of the heights of all px sized children and the minHeights for % sized children
     */
    getFluidHeight: function() {
    return this.layout.flow(this,true);
    },
    getPreferredFitToContentHeight: function() {
        if (this.layoutKind == "fluid") return this.getFluidHeight();
        // get the maximum width in this column;
        // and get the sum of height in this row... we'll worry later about whether its a row or column
            var extra = this.padBorderMargin.t + this.padBorderMargin.b;
        var max = 0;
        var sum = 0;
        var percentUsed = 0;
        var v;
        var count = 0;
        for (var i=0, c; c=this.c$[i]; i++) {
            if (this.layout.inFlow(c)) {
                count++;

                if (
                c.fitToContentHeight ||
                    /* If there is a fitToContentHeight panel that contains a Container that is percent sized, then
                     * assume the parent will resize to fit whatever height this % sized container needs.
                     * If c is autoscrolling, then its size is not affected by its children.
                     */
                c instanceof wm.Container && c._percEx.h == 100 && !c.autoScroll && c.parent && (c.parent.fitToContentHeight||c.parent.autoScroll)
                   ) {
                    v = c.getPreferredFitToContentHeight();
                } else if (!c._percEx.h) {
                    v = c.bounds.h;
                } else {
                    v =  c.getMinHeightProp();
                    if (c.bounds.h > v || this.c$.length == 1) {
                    if (percentUsed < 100)
                        percentUsed += c._percEx.h;
                    } else {
                    percentUsed = 100;
                    }
                }
                max = Math.max(max, v);
                sum += v;
            }
        }
        var dontNormalizeMinPercent = count == 1;
        if (!dontNormalizeMinPercent && percentUsed && percentUsed < 100) {
        sum = Math.round(sum * 100/percentUsed);
        max = Math.round(max * 100/percentUsed);
        }

            // never return less than 15px height
            var result =  ((this.layoutKind == "left-to-right") ? max : sum) + extra;
        return Math.max(result, wm.Control.prototype.getMinHeightProp.call(this));
    },
    setBestWidth: function() {
        this._inDesignResize = true;
        this.setWidth(this.getPreferredFitToContentWidth() + "px");
        delete this._inDesignResize;
    },
    setBestHeight: function() {
        this._inDesignResize = true;
        this[this._isDesignLoaded ? "set_height" : "setHeight"](this.getPreferredFitToContentHeight() + "px");
        delete this._inDesignResize;
    },
    getMinWidthProp: function() {
            if (this.fitToContentWidth)
                return this.getPreferredFitToContentWidth();
        else
        return this.inherited(arguments);
    },
    getMinHeightProp: function() {
            if (this.fitToContentHeight)
                return this.getPreferredFitToContentHeight();
        else
        return this.inherited(arguments);
    },
        focusFirstEditor: function() {
        for (var i = 0; i < this.c$.length; i++) {
        var w = this.c$[i];
        if (wm.isInstanceType(w,[wm.AbstractEditor,wm.Editor])) {
            w.focus();
            return w;
        } else if (wm.isInstanceType(w,wm.Container)) {
            var tmp = w.focusFirstEditor();
            if (tmp) return tmp;
        }
        }
        return null;
    },

    // bc
    clearEditors: function(){
        return this.clearData();
    },


    // events
    onEnterKeyPress: function(inEvent){}
});

// this stuff is layout specific

wm.Container.extend({
    layoutKind: "top-to-bottom",
    //layoutFit: false,
    //contentAlign: "leftTop",
    horizontalAlign: "justified",
    verticalAlign: "justified",
    //horizontalAlign: "left",
    //verticalAlign: "top",
    setLayoutKind: function(inLayoutKind) {
        if (this.layoutKind != inLayoutKind || !this.layout) {
          /*
            var ctor = wm.layout.registry[inLayoutKind];
            if (!ctor) {
                return;
            }
            this.layoutKind = inLayoutKind;
            this.layout = new ctor();
          */
          this.layoutKind = inLayoutKind;
          this.layout = wm.layout.cache[inLayoutKind];
        }

            // KANA: for the JobDesigner
        if (this.isDesignLoaded())
            dojo.publish("LayoutKindChanged", [this]);
        this.reflow();
    },
    setHorizontalAlign: function(inHorizAlign) {
        this.horizontalAlign = inHorizAlign;
        this.reflow();
    },
    setVerticalAlign: function(inVertAlign) {
        this.verticalAlign = inVertAlign;
        this.reflow();
    },
    setFitToContentWidth: function(inFitToContent) {
        this.fitToContentWidth = inFitToContent;
        this.fitToContent = this.fitToContentWidth || this.fitToContentHeight;
        this.updateBounds();
        this.reflowParent();
        this.calcFitToContent();
        this.reflowParent();
    },
    setFitToContentHeight: function(inFitToContent) {
        this.fitToContentHeight = inFitToContent;
        this.fitToContent = this.fitToContentWidth || this.fitToContentHeight;
        this.updateBounds();
        this.reflowParent();
        this.calcFitToContent();
        this.reflowParent();
    },
    calcFitToContent: function() {
            if (this.fitToContentHeight) {
            this.height = this.bounds.h + "px";
                        this._percEx.h = 0;
                }
            if (this.fitToContentWidth) {
            this.width = this.bounds.w + "px";
                        this._percEx.w = 0;
                }
    },


    toHtml: function(inWidth) {
        if (this.customToHtml != this.constructor.prototype.customToHtml) return this.customToHtml();
        var html = [];
        var count = 0;
        var hasContents = [];
        for (var i = 0; i < this.c$.length; i++) {
            var c = this.c$[i];
            if (this.layout.inFlow(c)) {
                hasContents[i] = c.toHtml != wm.Control.prototype.toHtml;
                if (hasContents[i] && c.customToHtml != c.constructor.prototype.customToHtml) {
                    var testContent = c.toHtml(inWidth);
                    if (testContent === "" || testContent === undefined || testContent === null) hasContents[i] = false;
                }
                if (hasContents[i]) {
                    count++;
                }
            }
        }


        if (this.layoutKind == "top-to-bottom" || count <= 1) {
            html.push("<div id='" + this.domNode.id + "' class='wmPanelTopToBottom'>");
            for (var i = 0; i < this.c$.length; i++) {
                if (hasContents[i]) {
                    var h = this.c$[i].toHtml(inWidth);
                    if (h) {
                        var style = this.toHtmlStyles();
                        var classes = (this.c$[i]._classes && this.c$[i]._classes.domNode ? this.c$[i]._classes.domNode : []);
                        classes = dojo.filter(classes, function(inClass) {
                            return inClass.indexOf("wm_Font") == 0 || inClass.indexOf("wm_Text") == 0;
                        });
                        classes = classes.join(" ");
                        html.push("<div id='" + this.c$[i].domNode.id + "_Outer' " + style + " class='" + classes + "'>" + h + "</div>");
                    }
                }
            }
        } else {
            var remainingWidth = inWidth - 4; // things start wrapping if we don't have at least 4 extra px space
            var totalPercent = 0;
            var widths = [];
            for (var i = 0; i < this.c$.length; i++) {
                if (hasContents[i]) {
                    var c = this.c$[i];
                    if (!c._percEx.w) {
                        widths[i] = c.bounds.w;
                        remainingWidth -= c.bounds.w;
                    } else {
                        totalPercent += c._percEx.w;
                    }
                }
            }
            for (var i = 0; i < this.c$.length; i++) {
                if (hasContents[i]) {
                    var c = this.c$[i];
                    if (c._percEx.w) {
                        var width = c._percEx.w / totalPercent * remainingWidth;
                        widths[i] = width;
                    }
                }
            }
            html.push("<div id='" + this.domNode.id + "' class='wmPanelLeftToRight'>");
            for (var i = 0; i < this.c$.length; i++) {
                var h = this.c$[i].toHtml(widths[i])
                if (h) {
                    var style = ""; //"style='margin-top: " + this.marginExtents.t + "px;margin-bottom: " + this.marginExtents.b + "px;padding-top: " + this.paddingExtents.t + "px;padding-bottom: " + this.paddingExtents.b + "px;'";
                    var classes = (this.c$[i]._classes && this.c$[i]._classes.domNode ? this.c$[i]._classes.domNode : []);
                    classes = dojo.filter(classes, function(inClass) {
                        return inClass.indexOf("wm_Font") == 0 || inClass.indexOf("wm_Text") == 0;
                    });
                    classes = classes.join(" ");
                    html.push("<div id='" + this.c$[i].domNode.id + "_Outer' style='width:" + widths[i] + "px;' " + style + " class='" + classes + "'>" + h + "</div>");
                }
            }
        }
        html.push("</div>");
        return html.join("");
    }
});

wm.Container.delayedReflowWidgets = {};
wm.Container._delayedReflowWidgetsId = 0;
wm.Container.runDelayedReflow = function() {
    var widgets = wm.Container.delayedReflowWidgets;
    wm.Container.delayedReflowWidgets = {};
    wm.Container._delayedReflowWidgetsId = 0;
    wm.forEachProperty(widgets, function(widget,widgetId) {
    if (!widget.isDestroyed)
        widget.reflow();
    });
};

}

if(!dojo._hasResource["wm.base.widget.Layers.Decorator"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.widget.Layers.Decorator"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.widget.Layers.Decorator");

dojo.declare("wm.LayersDecorator", null, {
	decorationClass: "",
	constructor: function(inDecoree) {
		this.decoree = inDecoree;
	},
	destroy: function() {
		this.decoree = null;
	},
	decorate: function() {
		this.decorateContainer();
		this.decorateLayers();
	},
	decorateContainer: function() {
		var d = this.decoree;
		dojo.addClass(d.domNode, this.decorationClass);
	},
	decorateLayers: function() {
		dojo.forEach(this.decoree.layers, function(l, i) {
			this.decorateLayer(l, i);
		}, this);
	},
	decorateLayer: function(inLayer, inIndex) {
		inLayer.decorator = this;
	},
	undecorate: function() {
		this.undecorateContainer();
	    var layers = this.decoree.layers;
	    for (var i = layers.length-1; i >= 0; i--) {
			this.undecorateLayer(layers[i], i);
	    }
	},
	undecorateContainer: function() {
		dojo.removeClass(this.decoree.domNode, this.decorationClass);
	},
	undecorateLayer: function() {
	},
	setLayerShowing: function(inLayer, inShowing) {
	    if (this.active) {
		wm.Control.prototype.setShowing.call(inLayer, inShowing);
	    } else {
		inLayer.showing = inShowing;
	    }
	},
	setLayerActive: function(inLayer, inActive) {
	    if (inLayer.active == inActive && inLayer.domNode.style.display != "none")
		return;

	    inLayer.inFlow = inActive;
	    inLayer.active = inActive;

	    var page = inLayer.getParentPage();
	    if (dojo.isIE <= 9 || wm.isAndroid <= 3 || /* Browsers not supported for animation */
		this.decoree._cupdating || !page  || page._loadingPage || window["studio"] || /* No animation during widget creation/pageloading */
		!this.decoree.transition || this.decoree.transition === "none") /* Or developer says no animation */
	    { 
		inLayer.domNode.style.display = inActive ? '' : 'none';
		if (inActive) {
		    inLayer.reflowParent();
		}
	    } else {
		this.anim(inLayer, inActive);
	    }
/*
	    if (inActive) {
		inLayer.reflowParent();
	    }
	    */
		// design only code: need to show / hide designwrapper
		wm.fire(inLayer, 'domNodeShowingChanged', [inActive]);
	},
        anim: function(inLayer, inShowing) {
/*
	    if (inShowing) {
		// Need to render it so it will slide correctly; needs to be non-hidden (but set opacity as low as it will go so its not visible either)
		inLayer.domNode.style.opacity = "0.1"; 
		inLayer.domNode.style.display = "";

		// ok, now move it to its starting positino and reset opacity
		var left = inLayer.bounds.w + "px";
		inLayer.domNode.style.left = (inLayer._transitionNext) ? left : "-" + left;
		inLayer.domNode.style.opacity = 1;

	    }
	    var newleft = (inShowing) ? 0 : inLayer._transitionNext ? - parseInt(inLayer.domNode.style.width) : parseInt(inLayer.domNode.style.width);
	    var anim = dojo.animateProperty({
		node: inLayer.domNode,
		properties:{
		    left: newleft
		},
		duration: 350
	    });
	    dojo.connect(anim,"onEnd", function(){
		if (!inShowing) {
		    inLayer.domNode.style.display = "none";
		    inLayer.domNode.style.left = 0;
		}
	    });
	    anim.play();
	    */

	    if (!inLayer._transitionEndSub) {
		if (!dojo.isIE || dojo.isIE >= 10) {
		    var transitionEnd;
		    if (dojo.isWebKit) {
			transitionEnd = 'webkitAnimationEnd';
		    } else if (dojo.isOpera) {
			transitionEnd = 'oanimationend';
		    } else if (dojo.isIE) {
			transitionEnd = 'MSAnimationEnd';
		    } else {
			transitionEnd = "animationend";
		    }
		    inLayer.domNode.addEventListener( 
			transitionEnd,
			function( event ) { 
			    if (!inLayer.isActive()) {
				inLayer.domNode.style.display = "none";
				inLayer.domNode.style.opacity = 1;
			    }
			}, false );
		    inLayer._transitionEndSub = true;
		}
	    }
	    var transition =this.decoree.transition;
	    dojo.removeClass(inLayer.domNode, [transition + "OutLeftAnim",transition + "OutRightAnim",transition + "InLeftAnim",transition + "InRightAnim"]);
	    if (!inShowing) {
		var direction = inLayer._transitionNext ? "Left" : "Right"
		dojo.addClass(inLayer.domNode, transition + "Out" + (direction) + "Anim");
	    } else {
		var direction = inLayer._transitionNext ? "Left" : "Right";
		//inLayer.domNode.style.left = (direction == "Left") ? "100%" : "-100%"; // not needed for native android 4x browser, nor chrome on tablet

		inLayer.domNode.style.display = "";
		dojo.addClass(inLayer.domNode, transition + "In" + (direction) + "Anim");
		inLayer.reflowParent();
	    }
    },
    animFade: function(inLayer, inShowing) {
	    if (inShowing) {
		inLayer.domNode.style.opacity = 0.01; // can't fade in if its opacity starts at 1!
		inLayer.domNode.style.display = "";
	    }
	    var newopacity = (inShowing) ? 1 : 0.01;
	    var anim = dojo.animateProperty({
		node: inLayer.domNode,
		properties:{
		    opacity: newopacity
		},
		duration: 350
	    });
	    dojo.connect(anim,"onEnd", function(){
		if (!inShowing) {
		    inLayer.domNode.style.display = "none";
		    inLayer.domNode.style.opacity = 1;
		} else {
		    inLayer.reflow();
		}
	    });
	    anim.play();

    },

	activateLayer: function(inLayer) {
		var d = this.decoree;
		var old = d.getLayer(d.lastLayerIndex);
	        if (old && old != inLayer) {
		        old._transitionNext = inLayer._transitionNext = inLayer.getIndex() > old.getIndex();
			this.setLayerActive(old, false);		    
		}
		this.setLayerActive(inLayer, true);
	    //d.reflowParent();
	},
	// default decorator has no caption
	applyLayerCaption: function() {
	},
	moveLayerIndex: function(inFromIndex, inToIndex) {
		var d = this.decoree, l = d.getLayer(inFromIndex);
		// move in client
		d.client.removeControl(l);
		d.client.insertControl(l, inToIndex);
	}
});

}

if(!dojo._hasResource["dojo.dnd.common"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.common"] = true;
dojo.provide("dojo.dnd.common");


dojo.getObject("dnd", true, dojo);

dojo.dnd.getCopyKeyState = dojo.isCopyKey;

dojo.dnd._uniqueId = 0;
dojo.dnd.getUniqueId = function(){
	// summary:
	//		returns a unique string for use with any DOM element
	var id;
	do{
		id = dojo._scopeName + "Unique" + (++dojo.dnd._uniqueId);
	}while(dojo.byId(id));
	return id;
};

dojo.dnd._empty = {};

dojo.dnd.isFormElement = function(/*Event*/ e){
	// summary:
	//		returns true if user clicked on a form element
	var t = e.target;
	if(t.nodeType == 3 /*TEXT_NODE*/){
		t = t.parentNode;
	}
	return " button textarea input select option ".indexOf(" " + t.tagName.toLowerCase() + " ") >= 0;	// Boolean
};

}

if(!dojo._hasResource["dojo.date.stamp"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.date.stamp"] = true;
dojo.provide("dojo.date.stamp");


dojo.getObject("date.stamp", true, dojo);

// Methods to convert dates to or from a wire (string) format using well-known conventions

dojo.date.stamp.fromISOString = function(/*String*/formattedString, /*Number?*/defaultTime){
	//	summary:
	//		Returns a Date object given a string formatted according to a subset of the ISO-8601 standard.
	//
	//	description:
	//		Accepts a string formatted according to a profile of ISO8601 as defined by
	//		[RFC3339](http://www.ietf.org/rfc/rfc3339.txt), except that partial input is allowed.
	//		Can also process dates as specified [by the W3C](http://www.w3.org/TR/NOTE-datetime)
	//		The following combinations are valid:
	//
	//			* dates only
	//			|	* yyyy
	//			|	* yyyy-MM
	//			|	* yyyy-MM-dd
	// 			* times only, with an optional time zone appended
	//			|	* THH:mm
	//			|	* THH:mm:ss
	//			|	* THH:mm:ss.SSS
	// 			* and "datetimes" which could be any combination of the above
	//
	//		timezones may be specified as Z (for UTC) or +/- followed by a time expression HH:mm
	//		Assumes the local time zone if not specified.  Does not validate.  Improperly formatted
	//		input may return null.  Arguments which are out of bounds will be handled
	// 		by the Date constructor (e.g. January 32nd typically gets resolved to February 1st)
	//		Only years between 100 and 9999 are supported.
	//
  	//	formattedString:
	//		A string such as 2005-06-30T08:05:00-07:00 or 2005-06-30 or T08:05:00
	//
	//	defaultTime:
	//		Used for defaults for fields omitted in the formattedString.
	//		Uses 1970-01-01T00:00:00.0Z by default.

	if(!dojo.date.stamp._isoRegExp){
		dojo.date.stamp._isoRegExp =
//TODO: could be more restrictive and check for 00-59, etc.
			/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
	}

	var match = dojo.date.stamp._isoRegExp.exec(formattedString),
		result = null;

	if(match){
		match.shift();
		if(match[1]){match[1]--;} // Javascript Date months are 0-based
		if(match[6]){match[6] *= 1000;} // Javascript Date expects fractional seconds as milliseconds

		if(defaultTime){
			// mix in defaultTime.  Relatively expensive, so use || operators for the fast path of defaultTime === 0
			defaultTime = new Date(defaultTime);
			dojo.forEach(dojo.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function(prop){
				return defaultTime["get" + prop]();
			}), function(value, index){
				match[index] = match[index] || value;
			});
		}
		result = new Date(match[0]||1970, match[1]||0, match[2]||1, match[3]||0, match[4]||0, match[5]||0, match[6]||0); //TODO: UTC defaults
		if(match[0] < 100){
			result.setFullYear(match[0] || 1970);
		}

		var offset = 0,
			zoneSign = match[7] && match[7].charAt(0);
		if(zoneSign != 'Z'){
			offset = ((match[8] || 0) * 60) + (Number(match[9]) || 0);
			if(zoneSign != '-'){ offset *= -1; }
		}
		if(zoneSign){
			offset -= result.getTimezoneOffset();
		}
		if(offset){
			result.setTime(result.getTime() + offset * 60000);
		}
	}

	return result; // Date or null
};

/*=====
	dojo.date.stamp.__Options = function(){
		//	selector: String
		//		"date" or "time" for partial formatting of the Date object.
		//		Both date and time will be formatted by default.
		//	zulu: Boolean
		//		if true, UTC/GMT is used for a timezone
		//	milliseconds: Boolean
		//		if true, output milliseconds
		this.selector = selector;
		this.zulu = zulu;
		this.milliseconds = milliseconds;
	}
=====*/

dojo.date.stamp.toISOString = function(/*Date*/dateObject, /*dojo.date.stamp.__Options?*/options){
	//	summary:
	//		Format a Date object as a string according a subset of the ISO-8601 standard
	//
	//	description:
	//		When options.selector is omitted, output follows [RFC3339](http://www.ietf.org/rfc/rfc3339.txt)
	//		The local time zone is included as an offset from GMT, except when selector=='time' (time without a date)
	//		Does not check bounds.  Only years between 100 and 9999 are supported.
	//
	//	dateObject:
	//		A Date object

	var _ = function(n){ return (n < 10) ? "0" + n : n; };
	options = options || {};
	var formattedDate = [],
		getter = options.zulu ? "getUTC" : "get",
		date = "";
	if(options.selector != "time"){
		var year = dateObject[getter+"FullYear"]();
		date = ["0000".substr((year+"").length)+year, _(dateObject[getter+"Month"]()+1), _(dateObject[getter+"Date"]())].join('-');
	}
	formattedDate.push(date);
	if(options.selector != "date"){
		var time = [_(dateObject[getter+"Hours"]()), _(dateObject[getter+"Minutes"]()), _(dateObject[getter+"Seconds"]())].join(':');
		var millis = dateObject[getter+"Milliseconds"]();
		if(options.milliseconds){
			time += "."+ (millis < 100 ? "0" : "") + _(millis);
		}
		if(options.zulu){
			time += "Z";
		}else if(options.selector != "time"){
			var timezoneOffset = dateObject.getTimezoneOffset();
			var absOffset = Math.abs(timezoneOffset);
			time += (timezoneOffset > 0 ? "-" : "+") +
				_(Math.floor(absOffset/60)) + ":" + _(absOffset%60);
		}
		formattedDate.push(time);
	}
	return formattedDate.join('T'); // String
};

}

if(!dojo._hasResource["dojo.parser"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.parser"] = true;
dojo.provide("dojo.parser");




new Date("X"); // workaround for #11279, new Date("") == NaN

dojo.parser = new function(){
	// summary:
	//		The Dom/Widget parsing package

	var d = dojo;

	function val2type(/*Object*/ value){
		// summary:
		//		Returns name of type of given value.

		if(d.isString(value)){ return "string"; }
		if(typeof value == "number"){ return "number"; }
		if(typeof value == "boolean"){ return "boolean"; }
		if(d.isFunction(value)){ return "function"; }
		if(d.isArray(value)){ return "array"; } // typeof [] == "object"
		if(value instanceof Date) { return "date"; } // assume timestamp
		if(value instanceof d._Url){ return "url"; }
		return "object";
	}

	function str2obj(/*String*/ value, /*String*/ type){
		// summary:
		//		Convert given string value to given type
		switch(type){
			case "string":
				return value;
			case "number":
				return value.length ? Number(value) : NaN;
			case "boolean":
				// for checked/disabled value might be "" or "checked".	 interpret as true.
				return typeof value == "boolean" ? value : !(value.toLowerCase()=="false");
			case "function":
				if(d.isFunction(value)){
					// IE gives us a function, even when we say something like onClick="foo"
					// (in which case it gives us an invalid function "function(){ foo }").
					//	Therefore, convert to string
					value=value.toString();
					value=d.trim(value.substring(value.indexOf('{')+1, value.length-1));
				}
				try{
					if(value === "" || value.search(/[^\w\.]+/i) != -1){
						// The user has specified some text for a function like "return x+5"
						return new Function(value);
					}else{
						// The user has specified the name of a function like "myOnClick"
						// or a single word function "return"
						return d.getObject(value, false) || new Function(value);
					}
				}catch(e){ return new Function(); }
			case "array":
				return value ? value.split(/\s*,\s*/) : [];
			case "date":
				switch(value){
					case "": return new Date("");	// the NaN of dates
					case "now": return new Date();	// current date
					default: return d.date.stamp.fromISOString(value);
				}
			case "url":
				return d.baseUrl + value;
			default:
				return d.fromJson(value);
		}
	}

	var dummyClass = {}, instanceClasses = {
		// map from fully qualified name (like "dijit.Button") to structure like
		// { cls: dijit.Button, params: {label: "string", disabled: "boolean"} }
	};

	// Widgets like BorderContainer add properties to _Widget via dojo.extend().
	// If BorderContainer is loaded after _Widget's parameter list has been cached,
	// we need to refresh that parameter list (for _Widget and all widgets that extend _Widget).
	// TODO: remove this in 2.0, when we stop caching parameters.
	d.connect(d, "extend", function(){
		instanceClasses = {};
	});

	function getProtoInfo(cls, params){
		// cls: A prototype
		//		The prototype of the class to check props on
		// params: Object
		//		The parameters object to mix found parameters onto.
		for(var name in cls){
			if(name.charAt(0)=="_"){ continue; }	// skip internal properties
			if(name in dummyClass){ continue; }		// skip "constructor" and "toString"
			params[name] = val2type(cls[name]);
		}
		return params;
	}

	function getClassInfo(/*String*/ className, /*Boolean*/ skipParamsLookup){
		// summary:
		//		Maps a widget name string like "dijit.form.Button" to the widget constructor itself,
		//		and a list of that widget's parameters and their types
		// className:
		//		fully qualified name (like "dijit.form.Button")
		// returns:
		//		structure like
		//			{
		//				cls: dijit.Button,
		//				params: { label: "string", disabled: "boolean"}
		//			}

		var c = instanceClasses[className];
		if(!c){
			// get pointer to widget class
			var cls = d.getObject(className), params = null;
			if(!cls){ return null; }		// class not defined [yet]
			if(!skipParamsLookup){ // from fastpath, we don't need to lookup the attrs on the proto because they are explicit
				params = getProtoInfo(cls.prototype, {})
			}
			c = { cls: cls, params: params };
			
		}else if(!skipParamsLookup && !c.params){
			// if we're calling getClassInfo and have a cls proto, but no params info, scan that cls for params now
			// and update the pointer in instanceClasses[className]. This happens when a widget appears in another
			// widget's template which still uses dojoType, but an instance of the widget appears prior with a data-dojo-type,
			// skipping this lookup the first time.
			c.params = getProtoInfo(c.cls.prototype, {});
		}
		
		return c;
	}

	this._functionFromScript = function(script, attrData){
		// summary:
		//		Convert a <script type="dojo/method" args="a, b, c"> ... </script>
		//		into a function
		// script: DOMNode
		//		The <script> DOMNode
		// attrData: String
		//		For HTML5 compliance, searches for attrData + "args" (typically
		//		"data-dojo-args") instead of "args"
		var preamble = "";
		var suffix = "";
		var argsStr = (script.getAttribute(attrData + "args") || script.getAttribute("args"));
		if(argsStr){
			d.forEach(argsStr.split(/\s*,\s*/), function(part, idx){
				preamble += "var "+part+" = arguments["+idx+"]; ";
			});
		}
		var withStr = script.getAttribute("with");
		if(withStr && withStr.length){
			d.forEach(withStr.split(/\s*,\s*/), function(part){
				preamble += "with("+part+"){";
				suffix += "}";
			});
		}
		return new Function(preamble+script.innerHTML+suffix);
	};

	this.instantiate = function(/* Array */nodes, /* Object? */mixin, /* Object? */args){
		// summary:
		//		Takes array of nodes, and turns them into class instances and
		//		potentially calls a startup method to allow them to connect with
		//		any children.
		// nodes: Array
		//		Array of nodes or objects like
		//	|		{
		//	|			type: "dijit.form.Button",
		//	|			node: DOMNode,
		//	|			scripts: [ ... ],	// array of <script type="dojo/..."> children of node
		//	|			inherited: { ... }	// settings inherited from ancestors like dir, theme, etc.
		//	|		}
		// mixin: Object?
		//		An object that will be mixed in with each node in the array.
		//		Values in the mixin will override values in the node, if they
		//		exist.
		// args: Object?
		//		An object used to hold kwArgs for instantiation.
		//		See parse.args argument for details.

		var thelist = [],
		mixin = mixin||{};
		args = args||{};

		// TODO: for 2.0 default to data-dojo- regardless of scopeName (or maybe scopeName won't exist in 2.0)
		var attrName = (args.scope || d._scopeName) + "Type",	// typically "dojoType"
			attrData = "data-" + (args.scope || d._scopeName) + "-";	// typically "data-dojo-"

		d.forEach(nodes, function(obj){
			if(!obj){ return; }

			// Get pointers to DOMNode, dojoType string, and clsInfo (metadata about the dojoType), etc.
			var node, type, clsInfo, clazz, scripts, fastpath;
			if(obj.node){
				// new format of nodes[] array, object w/lots of properties pre-computed for me
				node = obj.node;
				type = obj.type;
				fastpath = obj.fastpath;
				clsInfo = obj.clsInfo || (type && getClassInfo(type, fastpath));
				clazz = clsInfo && clsInfo.cls;
				scripts = obj.scripts;
			}else{
				// old (backwards compatible) format of nodes[] array, simple array of DOMNodes. no fastpath/data-dojo-type support here.
				node = obj;
				type = attrName in mixin ? mixin[attrName] : node.getAttribute(attrName);
				clsInfo = type && getClassInfo(type);
				clazz = clsInfo && clsInfo.cls;
				scripts = (clazz && (clazz._noScript || clazz.prototype._noScript) ? [] :
							d.query("> script[type^='dojo/']", node));
			}
			if(!clsInfo){
				throw new Error("Could not load class '" + type);
			}

			// Setup hash to hold parameter settings for this widget.	Start with the parameter
			// settings inherited from ancestors ("dir" and "lang").
			// Inherited setting may later be overridden by explicit settings on node itself.
			var params = {};
				
			if(args.defaults){
				// settings for the document itself (or whatever subtree is being parsed)
				d._mixin(params, args.defaults);
			}
			if(obj.inherited){
				// settings from dir=rtl or lang=... on a node above this node
				d._mixin(params, obj.inherited);
			}
			
			// mix things found in data-dojo-props into the params
			if(fastpath){
				var extra = node.getAttribute(attrData + "props");
				if(extra && extra.length){
					try{
						extra = d.fromJson.call(args.propsThis, "{" + extra + "}");
						d._mixin(params, extra);
					}catch(e){
						// give the user a pointer to their invalid parameters. FIXME: can we kill this in production?
						throw new Error(e.toString() + " in data-dojo-props='" + extra + "'");
					}
				}

				// For the benefit of _Templated, check if node has data-dojo-attach-point/data-dojo-attach-event
				// and mix those in as though they were parameters
				var attachPoint = node.getAttribute(attrData + "attach-point");
				if(attachPoint){
					params.dojoAttachPoint = attachPoint;
				}
				var attachEvent = node.getAttribute(attrData + "attach-event");
				if(attachEvent){
					params.dojoAttachEvent = attachEvent;
				}
				dojo.mixin(params, mixin);
			}else{
				// FIXME: we need something like "deprecateOnce()" to throw dojo.deprecation for something.
				// remove this logic in 2.0
				// read parameters (ie, attributes) specified on DOMNode

				var attributes = node.attributes;

				// clsInfo.params lists expected params like {"checked": "boolean", "n": "number"}
				for(var name in clsInfo.params){
					var item = name in mixin ? { value:mixin[name], specified:true } : attributes.getNamedItem(name);
					if(!item || (!item.specified && (!dojo.isIE || name.toLowerCase()!="value"))){ continue; }
					var value = item.value;
					// Deal with IE quirks for 'class' and 'style'
					switch(name){
					case "class":
						value = "className" in mixin ? mixin.className : node.className;
						break;
					case "style":
						value = "style" in mixin ? mixin.style : (node.style && node.style.cssText); // FIXME: Opera?
					}
					var _type = clsInfo.params[name];
					if(typeof value == "string"){
						params[name] = str2obj(value, _type);
					}else{
						params[name] = value;
					}
				}
			}

			// Process <script type="dojo/*"> script tags
			// <script type="dojo/method" event="foo"> tags are added to params, and passed to
			// the widget on instantiation.
			// <script type="dojo/method"> tags (with no event) are executed after instantiation
			// <script type="dojo/connect" event="foo"> tags are dojo.connected after instantiation
			// note: dojo/* script tags cannot exist in self closing widgets, like <input />
			var connects = [],	// functions to connect after instantiation
				calls = [];		// functions to call after instantiation

			d.forEach(scripts, function(script){
				node.removeChild(script);
				// FIXME: drop event="" support in 2.0. use data-dojo-event="" instead
				var event = (script.getAttribute(attrData + "event") || script.getAttribute("event")),
					type = script.getAttribute("type"),
					nf = d.parser._functionFromScript(script, attrData);
				if(event){
					if(type == "dojo/connect"){
						connects.push({event: event, func: nf});
					}else{
						params[event] = nf;
					}
				}else{
					calls.push(nf);
				}
			});

			var markupFactory = clazz.markupFactory || clazz.prototype && clazz.prototype.markupFactory;
			// create the instance
			var instance = markupFactory ? markupFactory(params, node, clazz) : new clazz(params, node);
			thelist.push(instance);

			// map it to the JS namespace if that makes sense
			// FIXME: in 2.0, drop jsId support. use data-dojo-id instead
			var jsname = (node.getAttribute(attrData + "id") || node.getAttribute("jsId"));
			if(jsname){
				d.setObject(jsname, instance);
			}

			// process connections and startup functions
			d.forEach(connects, function(connect){
				d.connect(instance, connect.event, null, connect.func);
			});
			d.forEach(calls, function(func){
				func.call(instance);
			});
		});

		// Call startup on each top level instance if it makes sense (as for
		// widgets).  Parent widgets will recursively call startup on their
		// (non-top level) children
		if(!mixin._started){
			// TODO: for 2.0, when old instantiate() API is desupported, store parent-child
			// relationships in the nodes[] array so that no getParent() call is needed.
			// Note that will  require a parse() call from ContentPane setting a param that the
			// ContentPane is the parent widget (so that the parse doesn't call startup() on the
			// ContentPane's children)
			d.forEach(thelist, function(instance){
				if( !args.noStart && instance  &&
					dojo.isFunction(instance.startup) &&
					!instance._started &&
					(!instance.getParent || !instance.getParent())
				){
					instance.startup();
				}
			});
		}
		return thelist;
	};

	this.parse = function(rootNode, args){
		// summary:
		//		Scan the DOM for class instances, and instantiate them.
		//
		// description:
		//		Search specified node (or root node) recursively for class instances,
		//		and instantiate them. Searches for either data-dojo-type="Class" or
		//		dojoType="Class" where "Class" is a a fully qualified class name,
		//		like `dijit.form.Button`
		//
		//		Using `data-dojo-type`:
		//		Attributes using can be mixed into the parameters used to instantitate the
		//		Class by using a `data-dojo-props` attribute on the node being converted.
		//		`data-dojo-props` should be a string attribute to be converted from JSON.
		//
		//		Using `dojoType`:
		//		Attributes are read from the original domNode and converted to appropriate
		//		types by looking up the Class prototype values. This is the default behavior
		//		from Dojo 1.0 to Dojo 1.5. `dojoType` support is deprecated, and will
		//		go away in Dojo 2.0.
		//
		// rootNode: DomNode?
		//		A default starting root node from which to start the parsing. Can be
		//		omitted, defaulting to the entire document. If omitted, the `args`
		//		object can be passed in this place. If the `args` object has a
		//		`rootNode` member, that is used.
		//
		// args: Object
		//		a kwArgs object passed along to instantiate()
		//
		//			* noStart: Boolean?
		//				when set will prevent the parser from calling .startup()
		//				when locating the nodes.
		//			* rootNode: DomNode?
		//				identical to the function's `rootNode` argument, though
		//				allowed to be passed in via this `args object.
		//			* template: Boolean
		//				If true, ignores ContentPane's stopParser flag and parses contents inside of
		//				a ContentPane inside of a template.   This allows dojoAttachPoint on widgets/nodes
		//				nested inside the ContentPane to work.
		//			* inherited: Object
		//				Hash possibly containing dir and lang settings to be applied to
		//				parsed widgets, unless there's another setting on a sub-node that overrides
		//			* scope: String
		//				Root for attribute names to search for.   If scopeName is dojo,
		//				will search for data-dojo-type (or dojoType).   For backwards compatibility
		//				reasons defaults to dojo._scopeName (which is "dojo" except when
		//				multi-version support is used, when it will be something like dojo16, dojo20, etc.)
		//			* propsThis: Object
		//				If specified, "this" referenced from data-dojo-props will refer to propsThis.
		//				Intended for use from the widgets-in-template feature of `dijit._Templated`
		//
		// example:
		//		Parse all widgets on a page:
		//	|		dojo.parser.parse();
		//
		// example:
		//		Parse all classes within the node with id="foo"
		//	|		dojo.parser.parse(dojo.byId('foo'));
		//
		// example:
		//		Parse all classes in a page, but do not call .startup() on any
		//		child
		//	|		dojo.parser.parse({ noStart: true })
		//
		// example:
		//		Parse all classes in a node, but do not call .startup()
		//	|		dojo.parser.parse(someNode, { noStart:true });
		//	|		// or
		//	|		dojo.parser.parse({ noStart:true, rootNode: someNode });

		// determine the root node based on the passed arguments.
		var root;
		if(!args && rootNode && rootNode.rootNode){
			args = rootNode;
			root = args.rootNode;
		}else{
			root = rootNode;
		}
		root = root ? dojo.byId(root) : dojo.body();
		args = args || {};

		var attrName = (args.scope || d._scopeName) + "Type",		// typically "dojoType"
			attrData = "data-" + (args.scope || d._scopeName) + "-";	// typically "data-dojo-"

		function scan(parent, list){
			// summary:
			//		Parent is an Object representing a DOMNode, with or without a dojoType specified.
			//		Scan parent's children looking for nodes with dojoType specified, storing in list[].
			//		If parent has a dojoType, also collects <script type=dojo/*> children and stores in parent.scripts[].
			// parent: Object
			//		Object representing the parent node, like
			//	|	{
			//	|		node: DomNode,			// scan children of this node
			//	|		inherited: {dir: "rtl"},	// dir/lang setting inherited from above node
			//	|
			//	|		// attributes only set if node has dojoType specified
			//	|		scripts: [],			// empty array, put <script type=dojo/*> in here
			//	|		clsInfo: { cls: dijit.form.Button, ...}
			//	|	}
			// list: DomNode[]
			//		Output array of objects (same format as parent) representing nodes to be turned into widgets

			// Effective dir and lang settings on parent node, either set directly or inherited from grandparent
			var inherited = dojo.clone(parent.inherited);
			dojo.forEach(["dir", "lang"], function(name){
				// TODO: what if this is a widget and dir/lang are declared in data-dojo-props?
				var val = parent.node.getAttribute(name);
				if(val){
					inherited[name] = val;
				}
			});

			// if parent is a widget, then search for <script type=dojo/*> tags and put them in scripts[].
			var scripts = parent.clsInfo && !parent.clsInfo.cls.prototype._noScript ? parent.scripts : null;

			// unless parent is a widget with the stopParser flag set, continue search for dojoType, recursively
			var recurse = (!parent.clsInfo || !parent.clsInfo.cls.prototype.stopParser) || (args && args.template);

			// scan parent's children looking for dojoType and <script type=dojo/*>
			for(var child = parent.node.firstChild; child; child = child.nextSibling){
				if(child.nodeType == 1){
					// FIXME: desupport dojoType in 2.0. use data-dojo-type instead
					var type, html5 = recurse && child.getAttribute(attrData + "type");
					if(html5){
						type = html5;
					}else{
						// fallback to backward compatible mode, using dojoType. remove in 2.0
						type = recurse && child.getAttribute(attrName);
					}
					
					var fastpath = html5 == type;

					if(type){
						// if dojoType/data-dojo-type specified, add to output array of nodes to instantiate
						var params = {
							"type": type,
							fastpath: fastpath,
							clsInfo: getClassInfo(type, fastpath), // note: won't find classes declared via dojo.Declaration
							node: child,
							scripts: [], // <script> nodes that are parent's children
							inherited: inherited // dir & lang attributes inherited from parent
						};
						list.push(params);

						// Recurse, collecting <script type="dojo/..."> children, and also looking for
						// descendant nodes with dojoType specified (unless the widget has the stopParser flag),
						scan(params, list);
					}else if(scripts && child.nodeName.toLowerCase() == "script"){
						// if <script type="dojo/...">, save in scripts[]
						type = child.getAttribute("type");
						if (type && /^dojo\/\w/i.test(type)) {
							scripts.push(child);
						}
					}else if(recurse){
						// Recurse, looking for grandchild nodes with dojoType specified
						scan({
							node: child,
							inherited: inherited
						}, list);
					}
				}
			}
		}

		// Ignore bogus entries in inherited hash like {dir: ""}
		var inherited = {};
		if(args && args.inherited){
			for(var key in args.inherited){
				if(args.inherited[key]){ inherited[key] = args.inherited[key]; }
			}
		}

		// Make list of all nodes on page w/dojoType specified
		var list = [];
		scan({
			node: root,
			inherited: inherited
		}, list);

		// go build the object instances
		var mixin = args && args.template ? {template: true} : null;
		return this.instantiate(list, mixin, args); // Array
	};
}();

//Register the parser callback. It should be the first callback
//after the a11y test.

(function(){
	var parseRunner = function(){
		if(dojo.config.parseOnLoad){
			dojo.parser.parse();
		}
	};

	// FIXME: need to clobber cross-dependency!!
	if(dojo.getObject("dijit.wai.onload") === dojo._loaders[0]){
		dojo._loaders.splice(1, 0, parseRunner);
	}else{
		dojo._loaders.unshift(parseRunner);
	}
})();

}

if(!dojo._hasResource["dojo.dnd.Container"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.Container"] = true;
dojo.provide("dojo.dnd.Container");





/*
	Container states:
		""		- normal state
		"Over"	- mouse over a container
	Container item states:
		""		- normal state
		"Over"	- mouse over a container item
*/

/*=====
dojo.declare("dojo.dnd.__ContainerArgs", [], {
	creator: function(){
		// summary:
		//		a creator function, which takes a data item, and returns an object like that:
		//		{node: newNode, data: usedData, type: arrayOfStrings}
	},

	// skipForm: Boolean
	//		don't start the drag operation, if clicked on form elements
	skipForm: false,

	// dropParent: Node||String
	//		node or node's id to use as the parent node for dropped items
	//		(must be underneath the 'node' parameter in the DOM)
	dropParent: null,

	// _skipStartup: Boolean
	//		skip startup(), which collects children, for deferred initialization
	//		(this is used in the markup mode)
	_skipStartup: false
});

dojo.dnd.Item = function(){
	// summary:
	//		Represents (one of) the source node(s) being dragged.
	//		Contains (at least) the "type" and "data" attributes.
	// type: String[]
	//		Type(s) of this item, by default this is ["text"]
	// data: Object
	//		Logical representation of the object being dragged.
	//		If the drag object's type is "text" then data is a String,
	//		if it's another type then data could be a different Object,
	//		perhaps a name/value hash.
	
	this.type = type;
	this.data = data;
}
=====*/

dojo.declare("dojo.dnd.Container", null, {
	// summary:
	//		a Container object, which knows when mouse hovers over it,
	//		and over which element it hovers
	
	// object attributes (for markup)
	skipForm: false,
	
	/*=====
	// current: DomNode
	//		The DOM node the mouse is currently hovered over
	current: null,
	
	// map: Hash<String, dojo.dnd.Item>
	//		Map from an item's id (which is also the DOMNode's id) to
	//		the dojo.dnd.Item itself.
	map: {},
	=====*/
	
	constructor: function(node, params){
		// summary:
		//		a constructor of the Container
		// node: Node
		//		node or node's id to build the container on
		// params: dojo.dnd.__ContainerArgs
		//		a dictionary of parameters
		this.node = dojo.byId(node);
		if(!params){ params = {}; }
		this.creator = params.creator || null;
		this.skipForm = params.skipForm;
		this.parent = params.dropParent && dojo.byId(params.dropParent);
		
		// class-specific variables
		this.map = {};
		this.current = null;

		// states
		this.containerState = "";
		dojo.addClass(this.node, "dojoDndContainer");
		
		// mark up children
		if(!(params && params._skipStartup)){
			this.startup();
		}

		// set up events
		this.events = [
			dojo.connect(this.node, "onmouseover", this, "onMouseOver"),
			dojo.connect(this.node, "onmouseout",  this, "onMouseOut"),
			// cancel text selection and text dragging
			dojo.connect(this.node, "ondragstart",   this, "onSelectStart"),
			dojo.connect(this.node, "onselectstart", this, "onSelectStart")
		];
	},
	
	// object attributes (for markup)
	creator: function(){
		// summary:
		//		creator function, dummy at the moment
	},
	
	// abstract access to the map
	getItem: function(/*String*/ key){
		// summary:
		//		returns a data item by its key (id)
		return this.map[key];	// dojo.dnd.Item
	},
	setItem: function(/*String*/ key, /*dojo.dnd.Item*/ data){
		// summary:
		//		associates a data item with its key (id)
		this.map[key] = data;
	},
	delItem: function(/*String*/ key){
		// summary:
		//		removes a data item from the map by its key (id)
		delete this.map[key];
	},
	forInItems: function(/*Function*/ f, /*Object?*/ o){
		// summary:
		//		iterates over a data map skipping members that
		//		are present in the empty object (IE and/or 3rd-party libraries).
		o = o || dojo.global;
		var m = this.map, e = dojo.dnd._empty;
		for(var i in m){
			if(i in e){ continue; }
			f.call(o, m[i], i, this);
		}
		return o;	// Object
	},
	clearItems: function(){
		// summary:
		//		removes all data items from the map
		this.map = {};
	},
	
	// methods
	getAllNodes: function(){
		// summary:
		//		returns a list (an array) of all valid child nodes
		return dojo.query("> .dojoDndItem", this.parent);	// NodeList
	},
	sync: function(){
		// summary:
		//		sync up the node list with the data map
		var map = {};
		this.getAllNodes().forEach(function(node){
			if(node.id){
				var item = this.getItem(node.id);
				if(item){
					map[node.id] = item;
					return;
				}
			}else{
				node.id = dojo.dnd.getUniqueId();
			}
			var type = node.getAttribute("dndType"),
				data = node.getAttribute("dndData");
			map[node.id] = {
				data: data || node.innerHTML,
				type: type ? type.split(/\s*,\s*/) : ["text"]
			};
		}, this);
		this.map = map;
		return this;	// self
	},
	insertNodes: function(data, before, anchor){
		// summary:
		//		inserts an array of new nodes before/after an anchor node
		// data: Array
		//		a list of data items, which should be processed by the creator function
		// before: Boolean
		//		insert before the anchor, if true, and after the anchor otherwise
		// anchor: Node
		//		the anchor node to be used as a point of insertion
		if(!this.parent.firstChild){
			anchor = null;
		}else if(before){
			if(!anchor){
				anchor = this.parent.firstChild;
			}
		}else{
			if(anchor){
				anchor = anchor.nextSibling;
			}
		}
		if(anchor){
			for(var i = 0; i < data.length; ++i){
				var t = this._normalizedCreator(data[i]);
				this.setItem(t.node.id, {data: t.data, type: t.type});
				this.parent.insertBefore(t.node, anchor);
			}
		}else{
			for(var i = 0; i < data.length; ++i){
				var t = this._normalizedCreator(data[i]);
				this.setItem(t.node.id, {data: t.data, type: t.type});
				this.parent.appendChild(t.node);
			}
		}
		return this;	// self
	},
	destroy: function(){
		// summary:
		//		prepares this object to be garbage-collected
		dojo.forEach(this.events, dojo.disconnect);
		this.clearItems();
		this.node = this.parent = this.current = null;
	},

	// markup methods
	markupFactory: function(params, node){
		params._skipStartup = true;
		return new dojo.dnd.Container(node, params);
	},
	startup: function(){
		// summary:
		//		collects valid child items and populate the map
		
		// set up the real parent node
		if(!this.parent){
			// use the standard algorithm, if not assigned
			this.parent = this.node;
			if(this.parent.tagName.toLowerCase() == "table"){
				var c = this.parent.getElementsByTagName("tbody");
				if(c && c.length){ this.parent = c[0]; }
			}
		}
		this.defaultCreator = dojo.dnd._defaultCreator(this.parent);

		// process specially marked children
		this.sync();
	},

	// mouse events
	onMouseOver: function(e){
		// summary:
		//		event processor for onmouseover
		// e: Event
		//		mouse event
		var n = e.relatedTarget;
		while(n){
			if(n == this.node){ break; }
			try{
				n = n.parentNode;
			}catch(x){
				n = null;
			}
		}
		if(!n){
			this._changeState("Container", "Over");
			this.onOverEvent();
		}
		n = this._getChildByEvent(e);
		if(this.current == n){ return; }
		if(this.current){ this._removeItemClass(this.current, "Over"); }
		if(n){ this._addItemClass(n, "Over"); }
		this.current = n;
	},
	onMouseOut: function(e){
		// summary:
		//		event processor for onmouseout
		// e: Event
		//		mouse event
		for(var n = e.relatedTarget; n;){
			if(n == this.node){ return; }
			try{
				n = n.parentNode;
			}catch(x){
				n = null;
			}
		}
		if(this.current){
			this._removeItemClass(this.current, "Over");
			this.current = null;
		}
		this._changeState("Container", "");
		this.onOutEvent();
	},
	onSelectStart: function(e){
		// summary:
		//		event processor for onselectevent and ondragevent
		// e: Event
		//		mouse event
		if(!this.skipForm || !dojo.dnd.isFormElement(e)){
			dojo.stopEvent(e);
		}
	},
	
	// utilities
	onOverEvent: function(){
		// summary:
		//		this function is called once, when mouse is over our container
	},
	onOutEvent: function(){
		// summary:
		//		this function is called once, when mouse is out of our container
	},
	_changeState: function(type, newState){
		// summary:
		//		changes a named state to new state value
		// type: String
		//		a name of the state to change
		// newState: String
		//		new state
		var prefix = "dojoDnd" + type;
		var state  = type.toLowerCase() + "State";
		//dojo.replaceClass(this.node, prefix + newState, prefix + this[state]);
		dojo.replaceClass(this.node, prefix + newState, prefix + this[state]);
		this[state] = newState;
	},
	_addItemClass: function(node, type){
		// summary:
		//		adds a class with prefix "dojoDndItem"
		// node: Node
		//		a node
		// type: String
		//		a variable suffix for a class name
		dojo.addClass(node, "dojoDndItem" + type);
	},
	_removeItemClass: function(node, type){
		// summary:
		//		removes a class with prefix "dojoDndItem"
		// node: Node
		//		a node
		// type: String
		//		a variable suffix for a class name
		dojo.removeClass(node, "dojoDndItem" + type);
	},
	_getChildByEvent: function(e){
		// summary:
		//		gets a child, which is under the mouse at the moment, or null
		// e: Event
		//		a mouse event
		var node = e.target;
		if(node){
			for(var parent = node.parentNode; parent; node = parent, parent = node.parentNode){
				if(parent == this.parent && dojo.hasClass(node, "dojoDndItem")){ return node; }
			}
		}
		return null;
	},
	_normalizedCreator: function(/*dojo.dnd.Item*/ item, /*String*/ hint){
		// summary:
		//		adds all necessary data to the output of the user-supplied creator function
		var t = (this.creator || this.defaultCreator).call(this, item, hint);
		if(!dojo.isArray(t.type)){ t.type = ["text"]; }
		if(!t.node.id){ t.node.id = dojo.dnd.getUniqueId(); }
		dojo.addClass(t.node, "dojoDndItem");
		return t;
	}
});

dojo.dnd._createNode = function(tag){
	// summary:
	//		returns a function, which creates an element of given tag
	//		(SPAN by default) and sets its innerHTML to given text
	// tag: String
	//		a tag name or empty for SPAN
	if(!tag){ return dojo.dnd._createSpan; }
	return function(text){	// Function
		return dojo.create(tag, {innerHTML: text});	// Node
	};
};

dojo.dnd._createTrTd = function(text){
	// summary:
	//		creates a TR/TD structure with given text as an innerHTML of TD
	// text: String
	//		a text for TD
	var tr = dojo.create("tr");
	dojo.create("td", {innerHTML: text}, tr);
	return tr;	// Node
};

dojo.dnd._createSpan = function(text){
	// summary:
	//		creates a SPAN element with given text as its innerHTML
	// text: String
	//		a text for SPAN
	return dojo.create("span", {innerHTML: text});	// Node
};

// dojo.dnd._defaultCreatorNodes: Object
//		a dictionary that maps container tag names to child tag names
dojo.dnd._defaultCreatorNodes = {ul: "li", ol: "li", div: "div", p: "div"};

dojo.dnd._defaultCreator = function(node){
	// summary:
	//		takes a parent node, and returns an appropriate creator function
	// node: Node
	//		a container node
	var tag = node.tagName.toLowerCase();
	var c = tag == "tbody" || tag == "thead" ? dojo.dnd._createTrTd :
			dojo.dnd._createNode(dojo.dnd._defaultCreatorNodes[tag]);
	return function(item, hint){	// Function
		var isObj = item && dojo.isObject(item), data, type, n;
		if(isObj && item.tagName && item.nodeType && item.getAttribute){
			// process a DOM node
			data = item.getAttribute("dndData") || item.innerHTML;
			type = item.getAttribute("dndType");
			type = type ? type.split(/\s*,\s*/) : ["text"];
			n = item;	// this node is going to be moved rather than copied
		}else{
			// process a DnD item object or a string
			data = (isObj && item.data) ? item.data : item;
			type = (isObj && item.type) ? item.type : ["text"];
			n = (hint == "avatar" ? dojo.dnd._createSpan : c)(String(data));
		}
		if(!n.id){
			n.id = dojo.dnd.getUniqueId();
		}
		return {node: n, data: data, type: type};
	};
};

}

if(!dojo._hasResource["dojo.dnd.Selector"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.Selector"] = true;
dojo.provide("dojo.dnd.Selector");





/*
	Container item states:
		""			- an item is not selected
		"Selected"	- an item is selected
		"Anchor"	- an item is selected, and is an anchor for a "shift" selection
*/

/*=====
dojo.declare("dojo.dnd.__SelectorArgs", [dojo.dnd.__ContainerArgs], {
	//	singular: Boolean
	//		allows selection of only one element, if true
	singular: false,

	//	autoSync: Boolean
	//		autosynchronizes the source with its list of DnD nodes,
	autoSync: false
});
=====*/

dojo.declare("dojo.dnd.Selector", dojo.dnd.Container, {
	// summary:
	//		a Selector object, which knows how to select its children
	
	/*=====
	// selection: Set<String>
	//		The set of id's that are currently selected, such that this.selection[id] == 1
	//		if the node w/that id is selected.  Can iterate over selected node's id's like:
	//	|		for(var id in this.selection)
	selection: {},
	=====*/

	constructor: function(node, params){
		// summary:
		//		constructor of the Selector
		// node: Node||String
		//		node or node's id to build the selector on
		// params: dojo.dnd.__SelectorArgs?
		//		a dictionary of parameters
		if(!params){ params = {}; }
		this.singular = params.singular;
		this.autoSync = params.autoSync;
		// class-specific variables
		this.selection = {};
		this.anchor = null;
		this.simpleSelection = false;
		// set up events
		this.events.push(
			dojo.connect(this.node, "onmousedown", this, "onMouseDown"),
			dojo.connect(this.node, "onmouseup",   this, "onMouseUp"));
	},
	
	// object attributes (for markup)
	singular: false,	// is singular property
	
	// methods
	getSelectedNodes: function(){
		// summary:
		//		returns a list (an array) of selected nodes
		var t = new dojo.NodeList();
		var e = dojo.dnd._empty;
		for(var i in this.selection){
			if(i in e){ continue; }
			t.push(dojo.byId(i));
		}
		return t;	// NodeList
	},
	selectNone: function(){
		// summary:
		//		unselects all items
		return this._removeSelection()._removeAnchor();	// self
	},
	selectAll: function(){
		// summary:
		//		selects all items
		this.forInItems(function(data, id){
			this._addItemClass(dojo.byId(id), "Selected");
			this.selection[id] = 1;
		}, this);
		return this._removeAnchor();	// self
	},
	deleteSelectedNodes: function(){
		// summary:
		//		deletes all selected items
		var e = dojo.dnd._empty;
		for(var i in this.selection){
			if(i in e){ continue; }
			var n = dojo.byId(i);
			this.delItem(i);
			dojo.destroy(n);
		}
		this.anchor = null;
		this.selection = {};
		return this;	// self
	},
	forInSelectedItems: function(/*Function*/ f, /*Object?*/ o){
		// summary:
		//		iterates over selected items;
		//		see `dojo.dnd.Container.forInItems()` for details
		o = o || dojo.global;
		var s = this.selection, e = dojo.dnd._empty;
		for(var i in s){
			if(i in e){ continue; }
			f.call(o, this.getItem(i), i, this);
		}
	},
	sync: function(){
		// summary:
		//		sync up the node list with the data map
		
		dojo.dnd.Selector.superclass.sync.call(this);
		
		// fix the anchor
		if(this.anchor){
			if(!this.getItem(this.anchor.id)){
				this.anchor = null;
			}
		}
		
		// fix the selection
		var t = [], e = dojo.dnd._empty;
		for(var i in this.selection){
			if(i in e){ continue; }
			if(!this.getItem(i)){
				t.push(i);
			}
		}
		dojo.forEach(t, function(i){
			delete this.selection[i];
		}, this);
		
		return this;	// self
	},
	insertNodes: function(addSelected, data, before, anchor){
		// summary:
		//		inserts new data items (see `dojo.dnd.Container.insertNodes()` method for details)
		// addSelected: Boolean
		//		all new nodes will be added to selected items, if true, no selection change otherwise
		// data: Array
		//		a list of data items, which should be processed by the creator function
		// before: Boolean
		//		insert before the anchor, if true, and after the anchor otherwise
		// anchor: Node
		//		the anchor node to be used as a point of insertion
		var oldCreator = this._normalizedCreator;
		this._normalizedCreator = function(item, hint){
			var t = oldCreator.call(this, item, hint);
			if(addSelected){
				if(!this.anchor){
					this.anchor = t.node;
					this._removeItemClass(t.node, "Selected");
					this._addItemClass(this.anchor, "Anchor");
				}else if(this.anchor != t.node){
					this._removeItemClass(t.node, "Anchor");
					this._addItemClass(t.node, "Selected");
				}
				this.selection[t.node.id] = 1;
			}else{
				this._removeItemClass(t.node, "Selected");
				this._removeItemClass(t.node, "Anchor");
			}
			return t;
		};
		dojo.dnd.Selector.superclass.insertNodes.call(this, data, before, anchor);
		this._normalizedCreator = oldCreator;
		return this;	// self
	},
	destroy: function(){
		// summary:
		//		prepares the object to be garbage-collected
		dojo.dnd.Selector.superclass.destroy.call(this);
		this.selection = this.anchor = null;
	},

	// markup methods
	markupFactory: function(params, node){
		params._skipStartup = true;
		return new dojo.dnd.Selector(node, params);
	},

	// mouse events
	onMouseDown: function(e){
		// summary:
		//		event processor for onmousedown
		// e: Event
		//		mouse event
		if(this.autoSync){ this.sync(); }
		if(!this.current){ return; }
		if(!this.singular && !dojo.isCopyKey(e) && !e.shiftKey && (this.current.id in this.selection)){
			this.simpleSelection = true;
			if(e.button === dojo.mouseButtons.LEFT){
				// accept the left button and stop the event
				// for IE we don't stop event when multiple buttons are pressed
				dojo.stopEvent(e);
			}
			return;
		}
		if(!this.singular && e.shiftKey){
			if(!dojo.isCopyKey(e)){
				this._removeSelection();
			}
			var c = this.getAllNodes();
			if(c.length){
				if(!this.anchor){
					this.anchor = c[0];
					this._addItemClass(this.anchor, "Anchor");
				}
				this.selection[this.anchor.id] = 1;
				if(this.anchor != this.current){
					var i = 0;
					for(; i < c.length; ++i){
						var node = c[i];
						if(node == this.anchor || node == this.current){ break; }
					}
					for(++i; i < c.length; ++i){
						var node = c[i];
						if(node == this.anchor || node == this.current){ break; }
						this._addItemClass(node, "Selected");
						this.selection[node.id] = 1;
					}
					this._addItemClass(this.current, "Selected");
					this.selection[this.current.id] = 1;
				}
			}
		}else{
			if(this.singular){
				if(this.anchor == this.current){
					if(dojo.isCopyKey(e)){
						this.selectNone();
					}
				}else{
					this.selectNone();
					this.anchor = this.current;
					this._addItemClass(this.anchor, "Anchor");
					this.selection[this.current.id] = 1;
				}
			}else{
				if(dojo.isCopyKey(e)){
					if(this.anchor == this.current){
						delete this.selection[this.anchor.id];
						this._removeAnchor();
					}else{
						if(this.current.id in this.selection){
							this._removeItemClass(this.current, "Selected");
							delete this.selection[this.current.id];
						}else{
							if(this.anchor){
								this._removeItemClass(this.anchor, "Anchor");
								this._addItemClass(this.anchor, "Selected");
							}
							this.anchor = this.current;
							this._addItemClass(this.current, "Anchor");
							this.selection[this.current.id] = 1;
						}
					}
				}else{
					if(!(this.current.id in this.selection)){
						this.selectNone();
						this.anchor = this.current;
						this._addItemClass(this.current, "Anchor");
						this.selection[this.current.id] = 1;
					}
				}
			}
		}
		dojo.stopEvent(e);
	},
	onMouseUp: function(e){
		// summary:
		//		event processor for onmouseup
		// e: Event
		//		mouse event
		if(!this.simpleSelection){ return; }
		this.simpleSelection = false;
		this.selectNone();
		if(this.current){
			this.anchor = this.current;
			this._addItemClass(this.anchor, "Anchor");
			this.selection[this.current.id] = 1;
		}
	},
	onMouseMove: function(e){
		// summary
		//		event processor for onmousemove
		// e: Event
		//		mouse event
		this.simpleSelection = false;
	},
	
	// utilities
	onOverEvent: function(){
		// summary:
		//		this function is called once, when mouse is over our container
		this.onmousemoveEvent = dojo.connect(this.node, "onmousemove", this, "onMouseMove");
	},
	onOutEvent: function(){
		// summary:
		//		this function is called once, when mouse is out of our container
		dojo.disconnect(this.onmousemoveEvent);
		delete this.onmousemoveEvent;
	},
	_removeSelection: function(){
		// summary:
		//		unselects all items
		var e = dojo.dnd._empty;
		for(var i in this.selection){
			if(i in e){ continue; }
			var node = dojo.byId(i);
			if(node){ this._removeItemClass(node, "Selected"); }
		}
		this.selection = {};
		return this;	// self
	},
	_removeAnchor: function(){
		if(this.anchor){
			this._removeItemClass(this.anchor, "Anchor");
			this.anchor = null;
		}
		return this;	// self
	}
});

}

if(!dojo._hasResource["dojo.window"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.window"] = true;
dojo.provide("dojo.window");


dojo.getObject("window", true, dojo);

dojo.window.getBox = function(){
	// summary:
	//		Returns the dimensions and scroll position of the viewable area of a browser window

	var scrollRoot = (dojo.doc.compatMode == 'BackCompat') ? dojo.body() : dojo.doc.documentElement;

	// get scroll position
	var scroll = dojo._docScroll(); // scrollRoot.scrollTop/Left should work
	return { w: scrollRoot.clientWidth, h: scrollRoot.clientHeight, l: scroll.x, t: scroll.y };
};

dojo.window.get = function(doc){
	// summary:
	// 		Get window object associated with document doc

	// In some IE versions (at least 6.0), document.parentWindow does not return a
	// reference to the real window object (maybe a copy), so we must fix it as well
	// We use IE specific execScript to attach the real window reference to
	// document._parentWindow for later use
	if(dojo.isIE && window !== document.parentWindow){
		/*
		In IE 6, only the variable "window" can be used to connect events (others
		may be only copies).
		*/
		doc.parentWindow.execScript("document._parentWindow = window;", "Javascript");
		//to prevent memory leak, unset it after use
		//another possibility is to add an onUnload handler which seems overkill to me (liucougar)
		var win = doc._parentWindow;
		doc._parentWindow = null;
		return win;	//	Window
	}

	return doc.parentWindow || doc.defaultView;	//	Window
};

dojo.window.scrollIntoView = function(/*DomNode*/ node, /*Object?*/ pos){
	// summary:
	//		Scroll the passed node into view, if it is not already.
	
	// don't rely on node.scrollIntoView working just because the function is there

	try{ // catch unexpected/unrecreatable errors (#7808) since we can recover using a semi-acceptable native method
		node = dojo.byId(node);
		var doc = node.ownerDocument || dojo.doc,
			body = doc.body || dojo.body(),
			html = doc.documentElement || body.parentNode,
			isIE = dojo.isIE, isWK = dojo.isWebKit;
		// if an untested browser, then use the native method
		if((!(dojo.isMoz || isIE || isWK || dojo.isOpera) || node == body || node == html) && (typeof node.scrollIntoView != "undefined")){
			node.scrollIntoView(false); // short-circuit to native if possible
			return;
		}
		var backCompat = doc.compatMode == 'BackCompat',
			clientAreaRoot = (isIE >= 9 && node.ownerDocument.parentWindow.frameElement)
				? ((html.clientHeight > 0 && html.clientWidth > 0 && (body.clientHeight == 0 || body.clientWidth == 0 || body.clientHeight > html.clientHeight || body.clientWidth > html.clientWidth)) ? html : body)
				: (backCompat ? body : html),
			scrollRoot = isWK ? body : clientAreaRoot,
			rootWidth = clientAreaRoot.clientWidth,
			rootHeight = clientAreaRoot.clientHeight,
			rtl = !dojo._isBodyLtr(),
			nodePos = pos || dojo.position(node),
			el = node.parentNode,
			isFixed = function(el){
				return ((isIE <= 6 || (isIE && backCompat))? false : (dojo.style(el, 'position').toLowerCase() == "fixed"));
			};
		if(isFixed(node)){ return; } // nothing to do

		while(el){
			if(el == body){ el = scrollRoot; }
			var elPos = dojo.position(el),
				fixedPos = isFixed(el);
	
			if(el == scrollRoot){
				elPos.w = rootWidth; elPos.h = rootHeight;
				if(scrollRoot == html && isIE && rtl){ elPos.x += scrollRoot.offsetWidth-elPos.w; } // IE workaround where scrollbar causes negative x
				if(elPos.x < 0 || !isIE){ elPos.x = 0; } // IE can have values > 0
				if(elPos.y < 0 || !isIE){ elPos.y = 0; }
			}else{
				var pb = dojo._getPadBorderExtents(el);
				elPos.w -= pb.w; elPos.h -= pb.h; elPos.x += pb.l; elPos.y += pb.t;
				var clientSize = el.clientWidth,
					scrollBarSize = elPos.w - clientSize;
				if(clientSize > 0 && scrollBarSize > 0){
					elPos.w = clientSize;
					elPos.x += (rtl && (isIE || el.clientLeft > pb.l/*Chrome*/)) ? scrollBarSize : 0;
				}
				clientSize = el.clientHeight;
				scrollBarSize = elPos.h - clientSize;
				if(clientSize > 0 && scrollBarSize > 0){
					elPos.h = clientSize;
				}
			}
			if(fixedPos){ // bounded by viewport, not parents
				if(elPos.y < 0){
					elPos.h += elPos.y; elPos.y = 0;
				}
				if(elPos.x < 0){
					elPos.w += elPos.x; elPos.x = 0;
				}
				if(elPos.y + elPos.h > rootHeight){
					elPos.h = rootHeight - elPos.y;
				}
				if(elPos.x + elPos.w > rootWidth){
					elPos.w = rootWidth - elPos.x;
				}
			}
			// calculate overflow in all 4 directions
			var l = nodePos.x - elPos.x, // beyond left: < 0
				t = nodePos.y - Math.max(elPos.y, 0), // beyond top: < 0
				r = l + nodePos.w - elPos.w, // beyond right: > 0
				bot = t + nodePos.h - elPos.h; // beyond bottom: > 0
			if(r * l > 0){
				var s = Math[l < 0? "max" : "min"](l, r);
				if(rtl && ((isIE == 8 && !backCompat) || isIE >= 9)){ s = -s; }
				nodePos.x += el.scrollLeft;
				el.scrollLeft += s;
				nodePos.x -= el.scrollLeft;
			}
			if(bot * t > 0){
				nodePos.y += el.scrollTop;
				el.scrollTop += Math[t < 0? "max" : "min"](t, bot);
				nodePos.y -= el.scrollTop;
			}
			el = (el != scrollRoot) && !fixedPos && el.parentNode;
		}
	}catch(error){
		console.error('scrollIntoView: ' + error);
		node.scrollIntoView(false);
	}
};

}

if(!dojo._hasResource["dojo.dnd.autoscroll"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.autoscroll"] = true;
dojo.provide("dojo.dnd.autoscroll");



dojo.getObject("dnd", true, dojo);

dojo.dnd.getViewport = dojo.window.getBox;

dojo.dnd.V_TRIGGER_AUTOSCROLL = 32;
dojo.dnd.H_TRIGGER_AUTOSCROLL = 32;

dojo.dnd.V_AUTOSCROLL_VALUE = 16;
dojo.dnd.H_AUTOSCROLL_VALUE = 16;

dojo.dnd.autoScroll = function(e){
	// summary:
	//		a handler for onmousemove event, which scrolls the window, if
	//		necesary
	// e: Event
	//		onmousemove event

	// FIXME: needs more docs!
	var v = dojo.window.getBox(), dx = 0, dy = 0;
	if(e.clientX < dojo.dnd.H_TRIGGER_AUTOSCROLL){
		dx = -dojo.dnd.H_AUTOSCROLL_VALUE;
	}else if(e.clientX > v.w - dojo.dnd.H_TRIGGER_AUTOSCROLL){
		dx = dojo.dnd.H_AUTOSCROLL_VALUE;
	}
	if(e.clientY < dojo.dnd.V_TRIGGER_AUTOSCROLL){
		dy = -dojo.dnd.V_AUTOSCROLL_VALUE;
	}else if(e.clientY > v.h - dojo.dnd.V_TRIGGER_AUTOSCROLL){
		dy = dojo.dnd.V_AUTOSCROLL_VALUE;
	}
	window.scrollBy(dx, dy);
};

dojo.dnd._validNodes = {"div": 1, "p": 1, "td": 1};
dojo.dnd._validOverflow = {"auto": 1, "scroll": 1};

dojo.dnd.autoScrollNodes = function(e){
	// summary:
	//		a handler for onmousemove event, which scrolls the first avaialble
	//		Dom element, it falls back to dojo.dnd.autoScroll()
	// e: Event
	//		onmousemove event

	// FIXME: needs more docs!
	for(var n = e.target; n;){
		if(n.nodeType == 1 && (n.tagName.toLowerCase() in dojo.dnd._validNodes)){
			var s = dojo.getComputedStyle(n);
			if(s.overflow.toLowerCase() in dojo.dnd._validOverflow){
				var b = dojo._getContentBox(n, s), t = dojo.position(n, true);
				//console.log(b.l, b.t, t.x, t.y, n.scrollLeft, n.scrollTop);
				var w = Math.min(dojo.dnd.H_TRIGGER_AUTOSCROLL, b.w / 2),
					h = Math.min(dojo.dnd.V_TRIGGER_AUTOSCROLL, b.h / 2),
					rx = e.pageX - t.x, ry = e.pageY - t.y, dx = 0, dy = 0;
				if(dojo.isWebKit || dojo.isOpera){
					// FIXME: this code should not be here, it should be taken into account
					// either by the event fixing code, or the dojo.position()
					// FIXME: this code doesn't work on Opera 9.5 Beta
					rx += dojo.body().scrollLeft;
					ry += dojo.body().scrollTop;
				}
				if(rx > 0 && rx < b.w){
					if(rx < w){
						dx = -w;
					}else if(rx > b.w - w){
						dx = w;
					}
				}
				//console.log("ry =", ry, "b.h =", b.h, "h =", h);
				if(ry > 0 && ry < b.h){
					if(ry < h){
						dy = -h;
					}else if(ry > b.h - h){
						dy = h;
					}
				}
				var oldLeft = n.scrollLeft, oldTop = n.scrollTop;
				n.scrollLeft = n.scrollLeft + dx;
				n.scrollTop  = n.scrollTop  + dy;
				if(oldLeft != n.scrollLeft || oldTop != n.scrollTop){ return; }
			}
		}
		try{
			n = n.parentNode;
		}catch(x){
			n = null;
		}
	}
	dojo.dnd.autoScroll(e);
};

}

if(!dojo._hasResource["dojo.dnd.Avatar"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.Avatar"] = true;
dojo.provide("dojo.dnd.Avatar");




dojo.declare("dojo.dnd.Avatar", null, {
	// summary:
	//		Object that represents transferred DnD items visually
	// manager: Object
	//		a DnD manager object

	constructor: function(manager){
		this.manager = manager;
		this.construct();
	},

	// methods
	construct: function(){
		// summary:
		//		constructor function;
		//		it is separate so it can be (dynamically) overwritten in case of need
		this.isA11y = dojo.hasClass(dojo.body(),"dijit_a11y");
		var a = dojo.create("table", {
				"class": "dojoDndAvatar",
				style: {
					position: "absolute",
					zIndex:   "1999",
					margin:   "0px"
				}
			}),
			source = this.manager.source, node,
			b = dojo.create("tbody", null, a),
			tr = dojo.create("tr", null, b),
			td = dojo.create("td", null, tr),
			icon = this.isA11y ? dojo.create("span", {
						id : "a11yIcon",
						innerHTML : this.manager.copy ? '+' : "<"
					}, td) : null,
			span = dojo.create("span", {
				innerHTML: source.generateText ? this._generateText() : ""
			}, td),
			k = Math.min(5, this.manager.nodes.length), i = 0;
		// we have to set the opacity on IE only after the node is live
		dojo.attr(tr, {
			"class": "dojoDndAvatarHeader",
			style: {opacity: 0.9}
		});
		for(; i < k; ++i){
			if(source.creator){
				// create an avatar representation of the node
				node = source._normalizedCreator(source.getItem(this.manager.nodes[i].id).data, "avatar").node;
			}else{
				// or just clone the node and hope it works
				node = this.manager.nodes[i].cloneNode(true);
				if(node.tagName.toLowerCase() == "tr"){
					// insert extra table nodes
					var table = dojo.create("table"),
						tbody = dojo.create("tbody", null, table);
					tbody.appendChild(node);
					node = table;
				}
			}
			node.id = "";
			tr = dojo.create("tr", null, b);
			td = dojo.create("td", null, tr);
			td.appendChild(node);
			dojo.attr(tr, {
				"class": "dojoDndAvatarItem",
				style: {opacity: (9 - i) / 10}
			});
		}
		this.node = a;
	},
	destroy: function(){
		// summary:
		//		destructor for the avatar; called to remove all references so it can be garbage-collected
		dojo.destroy(this.node);
		this.node = false;
	},
	update: function(){
		// summary:
		//		updates the avatar to reflect the current DnD state
		dojo[(this.manager.canDropFlag ? "add" : "remove") + "Class"](this.node, "dojoDndAvatarCanDrop");
		if (this.isA11y){
			var icon = dojo.byId("a11yIcon");
			var text = '+';   // assume canDrop && copy
			if (this.manager.canDropFlag && !this.manager.copy) {
				text = '< '; // canDrop && move
			}else if (!this.manager.canDropFlag && !this.manager.copy) {
				text = "o"; //!canDrop && move
			}else if(!this.manager.canDropFlag){
				text = 'x';  // !canDrop && copy
			}
			icon.innerHTML=text;
		}
		// replace text
		dojo.query(("tr.dojoDndAvatarHeader td span" +(this.isA11y ? " span" : "")), this.node).forEach(
			function(node){
				node.innerHTML = this._generateText();
			}, this);
	},
	_generateText: function(){
		// summary: generates a proper text to reflect copying or moving of items
		return this.manager.nodes.length.toString();
	}
});

}

if(!dojo._hasResource["dojo.dnd.Manager"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.Manager"] = true;
dojo.provide("dojo.dnd.Manager");






dojo.declare("dojo.dnd.Manager", null, {
	// summary:
	//		the manager of DnD operations (usually a singleton)
	constructor: function(){
		this.avatar  = null;
		this.source = null;
		this.nodes = [];
		this.copy  = true;
		this.target = null;
		this.canDropFlag = false;
		this.events = [];
	},

	// avatar's offset from the mouse
	OFFSET_X: 16,
	OFFSET_Y: 16,
	
	// methods
	overSource: function(source){
		// summary:
		//		called when a source detected a mouse-over condition
		// source: Object
		//		the reporter
		if(this.avatar){
			this.target = (source && source.targetState != "Disabled") ? source : null;
			this.canDropFlag = Boolean(this.target);
			this.avatar.update();
		}
		dojo.publish("/dnd/source/over", [source]);
	},
	outSource: function(source){
		// summary:
		//		called when a source detected a mouse-out condition
		// source: Object
		//		the reporter
		if(this.avatar){
			if(this.target == source){
				this.target = null;
				this.canDropFlag = false;
				this.avatar.update();
				dojo.publish("/dnd/source/over", [null]);
			}
		}else{
			dojo.publish("/dnd/source/over", [null]);
		}
	},
	startDrag: function(source, nodes, copy){
		// summary:
		//		called to initiate the DnD operation
		// source: Object
		//		the source which provides items
		// nodes: Array
		//		the list of transferred items
		// copy: Boolean
		//		copy items, if true, move items otherwise
		this.source = source;
		this.nodes  = nodes;
		this.copy   = Boolean(copy); // normalizing to true boolean
		this.avatar = this.makeAvatar();
		dojo.body().appendChild(this.avatar.node);
		dojo.publish("/dnd/start", [source, nodes, this.copy]);
		this.events = [
			dojo.connect(dojo.doc, "onmousemove", this, "onMouseMove"),
			dojo.connect(dojo.doc, "onmouseup",   this, "onMouseUp"),
			dojo.connect(dojo.doc, "onkeydown",   this, "onKeyDown"),
			dojo.connect(dojo.doc, "onkeyup",     this, "onKeyUp"),
			// cancel text selection and text dragging
			dojo.connect(dojo.doc, "ondragstart",   dojo.stopEvent),
			dojo.connect(dojo.body(), "onselectstart", dojo.stopEvent)
		];
		var c = "dojoDnd" + (copy ? "Copy" : "Move");
		dojo.addClass(dojo.body(), c);
	},
	canDrop: function(flag){
		// summary:
		//		called to notify if the current target can accept items
		var canDropFlag = Boolean(this.target && flag);
		if(this.canDropFlag != canDropFlag){
			this.canDropFlag = canDropFlag;
			this.avatar.update();
		}
	},
	stopDrag: function(){
		// summary:
		//		stop the DnD in progress
		dojo.removeClass(dojo.body(), ["dojoDndCopy", "dojoDndMove"]);
		dojo.forEach(this.events, dojo.disconnect);
		this.events = [];
		this.avatar.destroy();
		this.avatar = null;
		this.source = this.target = null;
		this.nodes = [];
	},
	makeAvatar: function(){
		// summary:
		//		makes the avatar; it is separate to be overwritten dynamically, if needed
		return new dojo.dnd.Avatar(this);
	},
	updateAvatar: function(){
		// summary:
		//		updates the avatar; it is separate to be overwritten dynamically, if needed
		this.avatar.update();
	},
	
	// mouse event processors
	onMouseMove: function(e){
	    /* Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved. Licensed under the Apache License 2.0 - http://www.apache.org/licenses/LICENSE-2.0 
	     * WaveMaker: Added this block to test to see if there is no mouse button down, in which case, the user managed to release the mouse without
	     * it being detected.  Seems to happen a lot.  */
	    if (e.which === 0) {
		this.onMouseUp();
		return;
	    }

		// summary:
		//		event processor for onmousemove
		// e: Event
		//		mouse event
		var a = this.avatar;
		if(a){
			dojo.dnd.autoScrollNodes(e);
			//dojo.dnd.autoScroll(e);
			var s = a.node.style;
			s.left = (e.pageX + this.OFFSET_X) + "px";
			s.top  = (e.pageY + this.OFFSET_Y) + "px";
			var copy = Boolean(this.source.copyState(dojo.isCopyKey(e)));
			if(this.copy != copy){
				this._setCopyStatus(copy);
			}
		}
	},
	onMouseUp: function(e){
		// summary:
		//		event processor for onmouseup
		// e: Event
		//		mouse event
		if(this.avatar){
			if(this.target && this.canDropFlag){
				var copy = Boolean(this.source.copyState(dojo.isCopyKey(e))),
				params = [this.source, this.nodes, copy, this.target, e];
				dojo.publish("/dnd/drop/before", params);
				dojo.publish("/dnd/drop", params);
			}else{
				dojo.publish("/dnd/cancel");
			}
			this.stopDrag();
		}
	},
	
	// keyboard event processors
	onKeyDown: function(e){
		// summary:
		//		event processor for onkeydown:
		//		watching for CTRL for copy/move status, watching for ESCAPE to cancel the drag
		// e: Event
		//		keyboard event
		if(this.avatar){
			switch(e.keyCode){
				case dojo.keys.CTRL:
					var copy = Boolean(this.source.copyState(true));
					if(this.copy != copy){
						this._setCopyStatus(copy);
					}
					break;
				case dojo.keys.ESCAPE:
					dojo.publish("/dnd/cancel");
					this.stopDrag();
					break;
			}
		}
	},
	onKeyUp: function(e){
		// summary:
		//		event processor for onkeyup, watching for CTRL for copy/move status
		// e: Event
		//		keyboard event
		if(this.avatar && e.keyCode == dojo.keys.CTRL){
			var copy = Boolean(this.source.copyState(false));
			if(this.copy != copy){
				this._setCopyStatus(copy);
			}
		}
	},
	
	// utilities
	_setCopyStatus: function(copy){
		// summary:
		//		changes the copy status
		// copy: Boolean
		//		the copy status
		this.copy = copy;
		this.source._markDndStatus(this.copy);
		this.updateAvatar();
		dojo.replaceClass(dojo.body(),
			"dojoDnd" + (this.copy ? "Copy" : "Move"),
			"dojoDnd" + (this.copy ? "Move" : "Copy"));
	}
});

// dojo.dnd._manager:
//		The manager singleton variable. Can be overwritten if needed.
dojo.dnd._manager = null;

dojo.dnd.manager = function(){
	// summary:
	//		Returns the current DnD manager.  Creates one if it is not created yet.
	if(!dojo.dnd._manager){
		dojo.dnd._manager = new dojo.dnd.Manager();
	}
	return dojo.dnd._manager;	// Object
};

}

if(!dojo._hasResource["dojo.dnd.Source"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojo.dnd.Source"] = true;
dojo.provide("dojo.dnd.Source");





/*
	Container property:
		"Horizontal"- if this is the horizontal container
	Source states:
		""			- normal state
		"Moved"		- this source is being moved
		"Copied"	- this source is being copied
	Target states:
		""			- normal state
		"Disabled"	- the target cannot accept an avatar
	Target anchor state:
		""			- item is not selected
		"Before"	- insert point is before the anchor
		"After"		- insert point is after the anchor
*/

/*=====
dojo.dnd.__SourceArgs = function(){
	//	summary:
	//		a dict of parameters for DnD Source configuration. Note that any
	//		property on Source elements may be configured, but this is the
	//		short-list
	//	isSource: Boolean?
	//		can be used as a DnD source. Defaults to true.
	//	accept: Array?
	//		list of accepted types (text strings) for a target; defaults to
	//		["text"]
	//	autoSync: Boolean
	//		if true refreshes the node list on every operation; false by default
	//	copyOnly: Boolean?
	//		copy items, if true, use a state of Ctrl key otherwise,
	//		see selfCopy and selfAccept for more details
	//	delay: Number
	//		the move delay in pixels before detecting a drag; 0 by default
	//	horizontal: Boolean?
	//		a horizontal container, if true, vertical otherwise or when omitted
	//	selfCopy: Boolean?
	//		copy items by default when dropping on itself,
	//		false by default, works only if copyOnly is true
	//	selfAccept: Boolean?
	//		accept its own items when copyOnly is true,
	//		true by default, works only if copyOnly is true
	//	withHandles: Boolean?
	//		allows dragging only by handles, false by default
	//  generateText: Boolean?
	//		generate text node for drag and drop, true by default
	this.isSource = isSource;
	this.accept = accept;
	this.autoSync = autoSync;
	this.copyOnly = copyOnly;
	this.delay = delay;
	this.horizontal = horizontal;
	this.selfCopy = selfCopy;
	this.selfAccept = selfAccept;
	this.withHandles = withHandles;
	this.generateText = true;
}
=====*/

dojo.declare("dojo.dnd.Source", dojo.dnd.Selector, {
	// summary:
	//		a Source object, which can be used as a DnD source, or a DnD target
	
	// object attributes (for markup)
	isSource: true,
	horizontal: false,
	copyOnly: false,
	selfCopy: false,
	selfAccept: true,
	skipForm: false,
	withHandles: false,
	autoSync: false,
	delay: 0, // pixels
	accept: ["text"],
	generateText: true,
	
	constructor: function(/*DOMNode|String*/node, /*dojo.dnd.__SourceArgs?*/params){
		// summary:
		//		a constructor of the Source
		// node:
		//		node or node's id to build the source on
		// params:
		//		any property of this class may be configured via the params
		//		object which is mixed-in to the `dojo.dnd.Source` instance
		dojo.mixin(this, dojo.mixin({}, params));
		var type = this.accept;
		if(type.length){
			this.accept = {};
			for(var i = 0; i < type.length; ++i){
				this.accept[type[i]] = 1;
			}
		}
		// class-specific variables
		this.isDragging = false;
		this.mouseDown = false;
		this.targetAnchor = null;
		this.targetBox = null;
		this.before = true;
		this._lastX = 0;
		this._lastY = 0;
		// states
		this.sourceState  = "";
		if(this.isSource){
			dojo.addClass(this.node, "dojoDndSource");
		}
		this.targetState  = "";
		if(this.accept){
			dojo.addClass(this.node, "dojoDndTarget");
		}
		if(this.horizontal){
			dojo.addClass(this.node, "dojoDndHorizontal");
		}
		// set up events
		this.topics = [
			dojo.subscribe("/dnd/source/over", this, "onDndSourceOver"),
			dojo.subscribe("/dnd/start",  this, "onDndStart"),
			dojo.subscribe("/dnd/drop",   this, "onDndDrop"),
			dojo.subscribe("/dnd/cancel", this, "onDndCancel")
		];
	},
	
	// methods
	checkAcceptance: function(source, nodes){
		// summary:
		//		checks if the target can accept nodes from this source
		// source: Object
		//		the source which provides items
		// nodes: Array
		//		the list of transferred items
		if(this == source){
			return !this.copyOnly || this.selfAccept;
		}
		for(var i = 0; i < nodes.length; ++i){
			var type = source.getItem(nodes[i].id).type;
			// type instanceof Array
			var flag = false;
			for(var j = 0; j < type.length; ++j){
				if(type[j] in this.accept){
					flag = true;
					break;
				}
			}
			if(!flag){
				return false;	// Boolean
			}
		}
		return true;	// Boolean
	},
	copyState: function(keyPressed, self){
		// summary:
		//		Returns true if we need to copy items, false to move.
		//		It is separated to be overwritten dynamically, if needed.
		// keyPressed: Boolean
		//		the "copy" key was pressed
		// self: Boolean?
		//		optional flag that means that we are about to drop on itself
		
		if(keyPressed){ return true; }
		if(arguments.length < 2){
			self = this == dojo.dnd.manager().target;
		}
		if(self){
			if(this.copyOnly){
				return this.selfCopy;
			}
		}else{
			return this.copyOnly;
		}
		return false;	// Boolean
	},
	destroy: function(){
		// summary:
		//		prepares the object to be garbage-collected
		dojo.dnd.Source.superclass.destroy.call(this);
		dojo.forEach(this.topics, dojo.unsubscribe);
		this.targetAnchor = null;
	},

	// markup methods
	markupFactory: function(params, node){
		params._skipStartup = true;
		return new dojo.dnd.Source(node, params);
	},

	// mouse event processors
	onMouseMove: function(e){
		// summary:
		//		event processor for onmousemove
		// e: Event
		//		mouse event
		if(this.isDragging && this.targetState == "Disabled"){ return; }
		dojo.dnd.Source.superclass.onMouseMove.call(this, e);
		var m = dojo.dnd.manager();
		if(!this.isDragging){
			if(this.mouseDown && this.isSource &&
					(Math.abs(e.pageX - this._lastX) > this.delay || Math.abs(e.pageY - this._lastY) > this.delay)){
				var nodes = this.getSelectedNodes();
				if(nodes.length){
					m.startDrag(this, nodes, this.copyState(dojo.isCopyKey(e), true));
				}
			}
		}
		if(this.isDragging){
			// calculate before/after
			var before = false;
			if(this.current){
				if(!this.targetBox || this.targetAnchor != this.current){
					this.targetBox = dojo.position(this.current, true);
				}
				if(this.horizontal){
					before = (e.pageX - this.targetBox.x) < (this.targetBox.w / 2);
				}else{
					before = (e.pageY - this.targetBox.y) < (this.targetBox.h / 2);
				}
			}
			if(this.current != this.targetAnchor || before != this.before){
				this._markTargetAnchor(before);
				m.canDrop(!this.current || m.source != this || !(this.current.id in this.selection));
			}
		}
	},
	onMouseDown: function(e){
		// summary:
		//		event processor for onmousedown
		// e: Event
		//		mouse event
		if(!this.mouseDown && this._legalMouseDown(e) && (!this.skipForm || !dojo.dnd.isFormElement(e))){
			this.mouseDown = true;
			this._lastX = e.pageX;
			this._lastY = e.pageY;
			dojo.dnd.Source.superclass.onMouseDown.call(this, e);
		}
	},
	onMouseUp: function(e){
		// summary:
		//		event processor for onmouseup
		// e: Event
		//		mouse event
		if(this.mouseDown){
			this.mouseDown = false;
			dojo.dnd.Source.superclass.onMouseUp.call(this, e);
		}
	},
	
	// topic event processors
	onDndSourceOver: function(source){
		// summary:
		//		topic event processor for /dnd/source/over, called when detected a current source
		// source: Object
		//		the source which has the mouse over it
		if(this != source){
			this.mouseDown = false;
			if(this.targetAnchor){
				this._unmarkTargetAnchor();
			}
		}else if(this.isDragging){
			var m = dojo.dnd.manager();
			m.canDrop(this.targetState != "Disabled" && (!this.current || m.source != this || !(this.current.id in this.selection)));
		}
	},
	onDndStart: function(source, nodes, copy){
		// summary:
		//		topic event processor for /dnd/start, called to initiate the DnD operation
		// source: Object
		//		the source which provides items
		// nodes: Array
		//		the list of transferred items
		// copy: Boolean
		//		copy items, if true, move items otherwise
		if(this.autoSync){ this.sync(); }
		if(this.isSource){
			this._changeState("Source", this == source ? (copy ? "Copied" : "Moved") : "");
		}
		var accepted = this.accept && this.checkAcceptance(source, nodes);
		this._changeState("Target", accepted ? "" : "Disabled");
		if(this == source){
			dojo.dnd.manager().overSource(this);
		}
		this.isDragging = true;
	},
	onDndDrop: function(source, nodes, copy, target){
		// summary:
		//		topic event processor for /dnd/drop, called to finish the DnD operation
		// source: Object
		//		the source which provides items
		// nodes: Array
		//		the list of transferred items
		// copy: Boolean
		//		copy items, if true, move items otherwise
		// target: Object
		//		the target which accepts items
		if(this == target){
			// this one is for us => move nodes!
			this.onDrop(source, nodes, copy);
		}
		this.onDndCancel();
	},
	onDndCancel: function(){
		// summary:
		//		topic event processor for /dnd/cancel, called to cancel the DnD operation
		if(this.targetAnchor){
			this._unmarkTargetAnchor();
			this.targetAnchor = null;
		}
		this.before = true;
		this.isDragging = false;
		this.mouseDown = false;
		this._changeState("Source", "");
		this._changeState("Target", "");
	},
	
	// local events
	onDrop: function(source, nodes, copy){
		// summary:
		//		called only on the current target, when drop is performed
		// source: Object
		//		the source which provides items
		// nodes: Array
		//		the list of transferred items
		// copy: Boolean
		//		copy items, if true, move items otherwise
		
		if(this != source){
			this.onDropExternal(source, nodes, copy);
		}else{
			this.onDropInternal(nodes, copy);
		}
	},
	onDropExternal: function(source, nodes, copy){
		// summary:
		//		called only on the current target, when drop is performed
		//		from an external source
		// source: Object
		//		the source which provides items
		// nodes: Array
		//		the list of transferred items
		// copy: Boolean
		//		copy items, if true, move items otherwise
		
		var oldCreator = this._normalizedCreator;
		// transferring nodes from the source to the target
		if(this.creator){
			// use defined creator
			this._normalizedCreator = function(node, hint){
				return oldCreator.call(this, source.getItem(node.id).data, hint);
			};
		}else{
			// we have no creator defined => move/clone nodes
			if(copy){
				// clone nodes
				this._normalizedCreator = function(node, hint){
					var t = source.getItem(node.id);
					var n = node.cloneNode(true);
					n.id = dojo.dnd.getUniqueId();
					return {node: n, data: t.data, type: t.type};
				};
			}else{
				// move nodes
				this._normalizedCreator = function(node, hint){
					var t = source.getItem(node.id);
					source.delItem(node.id);
					return {node: node, data: t.data, type: t.type};
				};
			}
		}
		this.selectNone();
		if(!copy && !this.creator){
			source.selectNone();
		}
		this.insertNodes(true, nodes, this.before, this.current);
		if(!copy && this.creator){
			source.deleteSelectedNodes();
		}
		this._normalizedCreator = oldCreator;
	},
	onDropInternal: function(nodes, copy){
		// summary:
		//		called only on the current target, when drop is performed
		//		from the same target/source
		// nodes: Array
		//		the list of transferred items
		// copy: Boolean
		//		copy items, if true, move items otherwise
		
		var oldCreator = this._normalizedCreator;
		// transferring nodes within the single source
		if(this.current && this.current.id in this.selection){
			// do nothing
			return;
		}
		if(copy){
			if(this.creator){
				// create new copies of data items
				this._normalizedCreator = function(node, hint){
					return oldCreator.call(this, this.getItem(node.id).data, hint);
				};
			}else{
				// clone nodes
				this._normalizedCreator = function(node, hint){
					var t = this.getItem(node.id);
					var n = node.cloneNode(true);
					n.id = dojo.dnd.getUniqueId();
					return {node: n, data: t.data, type: t.type};
				};
			}
		}else{
			// move nodes
			if(!this.current){
				// do nothing
				return;
			}
			this._normalizedCreator = function(node, hint){
				var t = this.getItem(node.id);
				return {node: node, data: t.data, type: t.type};
			};
		}
		this._removeSelection();
		this.insertNodes(true, nodes, this.before, this.current);
		this._normalizedCreator = oldCreator;
	},
	onDraggingOver: function(){
		// summary:
		//		called during the active DnD operation, when items
		//		are dragged over this target, and it is not disabled
	},
	onDraggingOut: function(){
		// summary:
		//		called during the active DnD operation, when items
		//		are dragged away from this target, and it is not disabled
	},
	
	// utilities
	onOverEvent: function(){
		// summary:
		//		this function is called once, when mouse is over our container
		dojo.dnd.Source.superclass.onOverEvent.call(this);
		dojo.dnd.manager().overSource(this);
		if(this.isDragging && this.targetState != "Disabled"){
			this.onDraggingOver();
		}
	},
	onOutEvent: function(){
		// summary:
		//		this function is called once, when mouse is out of our container
		dojo.dnd.Source.superclass.onOutEvent.call(this);
		dojo.dnd.manager().outSource(this);
		if(this.isDragging && this.targetState != "Disabled"){
			this.onDraggingOut();
		}
	},
	_markTargetAnchor: function(before){
		// summary:
		//		assigns a class to the current target anchor based on "before" status
		// before: Boolean
		//		insert before, if true, after otherwise
		if(this.current == this.targetAnchor && this.before == before){ return; }
		if(this.targetAnchor){
			this._removeItemClass(this.targetAnchor, this.before ? "Before" : "After");
		}
		this.targetAnchor = this.current;
		this.targetBox = null;
		this.before = before;
		if(this.targetAnchor){
			this._addItemClass(this.targetAnchor, this.before ? "Before" : "After");
		}
	},
	_unmarkTargetAnchor: function(){
		// summary:
		//		removes a class of the current target anchor based on "before" status
		if(!this.targetAnchor){ return; }
		this._removeItemClass(this.targetAnchor, this.before ? "Before" : "After");
		this.targetAnchor = null;
		this.targetBox = null;
		this.before = true;
	},
	_markDndStatus: function(copy){
		// summary:
		//		changes source's state based on "copy" status
		this._changeState("Source", copy ? "Copied" : "Moved");
	},
	_legalMouseDown: function(e){
		// summary:
		//		checks if user clicked on "approved" items
		// e: Event
		//		mouse event
		
		// accept only the left mouse button
		if(!dojo.mouseButtons.isLeft(e)){ return false; }
		
		if(!this.withHandles){ return true; }
		
		// check for handles
		for(var node = e.target; node && node !== this.node; node = node.parentNode){
			if(dojo.hasClass(node, "dojoDndHandle")){ return true; }
			if(dojo.hasClass(node, "dojoDndItem") || dojo.hasClass(node, "dojoDndIgnore")){ break; }
		}
		return false;	// Boolean
	}
});

dojo.declare("dojo.dnd.Target", dojo.dnd.Source, {
	// summary: a Target object, which can be used as a DnD target
	
	constructor: function(node, params){
		// summary:
		//		a constructor of the Target --- see the `dojo.dnd.Source.constructor` for details
		this.isSource = false;
		dojo.removeClass(this.node, "dojoDndSource");
	},

	// markup methods
	markupFactory: function(params, node){
		params._skipStartup = true;
		return new dojo.dnd.Target(node, params);
	}
});

dojo.declare("dojo.dnd.AutoSource", dojo.dnd.Source, {
	// summary:
	//		a source that syncs its DnD nodes by default
	
	constructor: function(node, params){
		// summary:
		//		constructor of the AutoSource --- see the Source constructor for details
		this.autoSync = true;
	},

	// markup methods
	markupFactory: function(params, node){
		params._skipStartup = true;
		return new dojo.dnd.AutoSource(node, params);
	}
});

}

if(!dojo._hasResource["wm.base.widget.Layers.TabsDecorator"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.widget.Layers.TabsDecorator"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.widget.Layers.TabsDecorator");


dojo.declare("wm.TabsDecorator", [wm.LayersDecorator, wm.TouchMixinOptional], {
	decorationClass: "wmtablayers",
        decoratorPadding: "7, 0, 0, 0",
        verticalDecoratorPadding: "0,0,0,7",
	undecorate: function() {
		this.inherited(arguments);
		this.tabsControl.destroy();
	},
	decorateContainer: function() {
		this.inherited(arguments);
		this.btns = [];
	    if (this.tabsControl)
		this.tabsControl.destroy();
		this.tabsControl = new wm.TabsControl({
			parent: this.decoree,
		        owner: this.decoree,
		    padding: this.decoree.verticalButtons ? this.verticalDecoratorPadding : this.decoratorPadding,
		    name: "tabsControl"
		});
		this.decoree.moveControl(this.tabsControl, 0);
		if (this.decoree.verticalButtons) {
		  this.decoree.setLayoutKind("left-to-right");
		}
	    if (this.decoree.dndTargetName || this.decoree._designer) {
		
    		this.dndObj = new dojo.dnd.Source(this.tabsControl.domNode, {accept: [this.decoree.dndTargetName || "designMoveLayers"]});
		this.dndObjConnect = this.tabsControl.connect(this.dndObj, "onDndDrop", this, "onTabDrop");
	    }

	},
    createTab: function(inCaption, inIndex, inLayer) {
        var b = this.btns[inIndex] = document.createElement("button");
        dojo.attr(b, "id", this.decoree.domNode.id + "_decorator_button" + this.btns.length);
        dojo.attr(b, "type", "button");
        dojo.attr(b, "type", "button");
        /*
        if (!this.decoree.verticalButtons && inLayer.borderExtents.t > 1) {
        b.style.top = (inLayer.borderExtents.t - 1) + "px";
        }
        */
        //b.style.outline = "none";
        b.style.display = inLayer.showing ? "" : "none";
        this.setBtnText(b, inCaption, inLayer.closable || inLayer.destroyable);
        if (!wm.isMobile) {
            this.decoree.connect(b, "onclick", dojo.hitch(this, "onTabClick", inLayer));
        } else {
            this.addTouchListener(b);
        }

        /*
        } else if (wm.isFakeMobile) {
        this.decoree.connect(b,'onmousedown', dojo.hitch(this, "touchTabStart", inLayer));
        this.decoree.connect(b,'onmousemove', dojo.hitch(this, "touchTabMove",  inLayer));
        this.decoree.connect(b,'onmouseup',   dojo.hitch(this, "touchTabEnd",   inLayer));
        } else {
        this.decoree.connect(b,'ontouchstart',dojo.hitch(this, "touchTabStart", inLayer));
        this.decoree.connect(b,'ontouchmove', dojo.hitch(this, "touchTabMove",  inLayer));
        this.decoree.connect(b,'ontouchend',  dojo.hitch(this, "touchTabEnd",   inLayer));
        }
        */
        var tabstyleName = (this.decoree.verticalButtons) ? "-verticaltab" : "-tab";
        b.className = this.decorationClass + tabstyleName + (inLayer.closable || inLayer.destroyable ? " " + this.decorationClass + "-closabletab" : "");
        if (!inCaption) b.style.display = "none";
        this.tabsControl.domNode.appendChild(b);

        if (this.dndObj) {
            this.dndObj.destroy()
            dojo.disconnect(this.dndObjConnect);
            dojo.addClass(b, "dojoDndItem");
            dojo.attr(b, "dndType", this.decoree.dndTargetName || "designMoveLayers");
            this.dndObj = new dojo.dnd.Source(this.tabsControl.domNode, {
                accept: [this.decoree.dndTargetName || "designMoveLayers"]
            });
            this.dndObjConnect = this.tabsControl.connect(this.dndObj, "onDndDrop", this, "onTabDrop");
        }
    },



    onTabClick: function(inLayer, evt) {
        // prevent designer click
        if (this.decoree.isDesignLoaded()) dojo.stopEvent(evt);

        /* IE 8 does not gaurentee that evt will still have its properties after a delay, so
         * we capture the event properties we need and pass that rather than the event object itself.
         * Other browsers don't require this, but it seems like a good practice regardless.
         */
        if (evt.type == "submit") return;
        var pseudoEvent = {
            target: evt.target,
            clientX: evt.clientX,
            clientY: evt.clientY
        };

        wm.onidle(this, function() {
            this.tabClicked(inLayer, pseudoEvent);
            pseudoEvent.target.style.borderWidth = "";
        });
    },
    onTouchStart: function(event) {
        var target = event.target;
        while (target.tagName != "BUTTON" && target.tagName != "BODY") {
            target = target.parentNode;
        }
        var index = dojo.indexOf(this.btns, target);

        if (index >= 0) {
            this._touchedLayer = this.decoree.layers[index];
        }

    },
    onTouchMove: function(event, yPosition, yChangeFromInitial, yChangeFromLast, xPosition, xChangeFromInitial, xChangeFromLast) {},
    onTouchEnd: function(event, isMove) {
        if (!isMove) {
            this.tabClicked(this._touchedLayer, event);
        }
        delete this._touchedLayer;
    },
    getRuntimeId: function() {
        return this.decoree.getRuntimeId() + ".decorator";
    },
/*
    touchTabStart: function(inLayer,evt) {
	if (!inLayer._touchStarted) {
	    inLayer._touchStarted = true;
	    inLayer._touchTarget = evt.target;
	    this.btns[inLayer.getIndex()].style.borderWidth = "3px";
	    wm.job(inLayer.getRuntimeId() + ".onClick", app.touchToClickDelay, dojo.hitch(this, "touchTabEnd", inLayer));
	}
    },
    touchTabMove: function(inLayer,evt) {
	if (inLayer._touchStarted) {
	    wm.cancelJob(inLayer.getRuntimeId() + ".onClick");
	    delete inLayer._touchStarted;
	    delete inLayer._touchTarget;
	    this.btns[inLayer.getIndex()].style.borderWidth = "";
	}
    },
    touchTabEnd: function(inLayer,evt) {
	if (inLayer._touchStarted) {
	    delete inLayer._touchStarted;
	    this.btns[inLayer.getIndex()].style.borderWidth = "";
	    this.tabClicked(inLayer, {target: inLayer._touchTarget});
	    delete inLayer._touchTarget;
	}
    },
    */

	 onTabDrop: function(dndSource,nodes,copy,dndTarget,event) {
	     if (dojo.dnd.manager().target != this.dndObj) return;
	     var tabLayers = wm.getWidgetByDomNode(nodes[0]);

	     var indexWas = dojo.indexOf(tabLayers.decorator.btns, nodes[0]);
	     if (indexWas == -1) return;
	     var layer = tabLayers.layers[indexWas];
	     if (!layer) return;

	     var indexIs = dojo.indexOf(this.tabsControl.domNode.childNodes, nodes[0]);
	     var findNewIndex = false;
	     var changeParent = layer.parent != this.decoree;
	     if (changeParent) {
		 layer.setParent(this.decoree);
		 var selectedIndex = tabLayers.layerIndex;
		 tabLayers.layerIndex = -1;
		 tabLayers.setLayerIndex(tabLayers.layers.length > selectedIndex ? selectedIndex : tabLayers.layers.length-1);

		 var managedButtons = this.btns;
		 var currentButtons = this.tabsControl.domNode.childNodes;
		 if (indexIs == this.btns.length-1) {
		     findNewIndex = true;
		 }
		 // Find any buttons currently in the tabControl that aren't in this.btns; this is a new tab dragged in from elsewhere
		 // and needs to be handled
/*
		 for (var i = 0; i < currentButtons.length; i++) {
		     var b = currentButtons[i];
		     if (dojo.indexOf(managedButtons,b) == -1) {
			 draggedFromElsewhere = true;
			 this.decoree.moveLayerIndex(layer, i);
			 dojo.destroy(b);
			 break;
		     }
		 }
		 */
		 if (nodes[0].parentNode)
		     dojo.destroy(nodes[0]);
	     } else if (indexWas == indexIs) {
		 findNewIndex = true;
	     }

	     /* we generally need to find a new index when the user drops a tab between two tabs because dojo fails
	      * to handle this case
	      */
	     if (findNewIndex) {
		 // use the event to see if the index SHOULD have been changed but dojo just messed up.
		 var x = event.offsetX;
		 var found = false;
		 for (var i = 0; i < this.btns.length; i++) {
		     var b = this.btns[i];
		     var coords = dojo.marginBox(b);
		     coords.l += dojo._getContentBox(b).l;
		     if (coords.l > x) {
			 indexIs = i;
			 found = true;
			 break;
		     }
		 }
		 if (!found) {
		     indexIs = this.btns.length;
		 } else if (indexIs > indexWas && !changeParent) {
		     indexIs--;
		 }
	     }
	     this.decoree.moveLayerIndex(layer, indexIs);
	     if (this.decoree.isDesignLoaded()) {
		 studio.refreshWidgetsTree();
	     }
             layer.activate();
	     layer.onTabDrop();
	     if (tabLayers != this.decoree && tabLayers.onTabRemoved) {
		 tabLayers.onTabRemoved();
	     }
	     this.decoree.onTabDrop();
	 },
	tabClicked: function(inLayer, e) {
		var d = this.decoree;

	    var close = dojo.hasClass(e.target, "TabCloseIcon");
	    if (!close && (inLayer.closable || inLayer.destroyable)) {
		var closeIcon = dojo.coords(e.target.firstChild);
		var button = dojo.coords(e.target);
		if (e.clientX >= closeIcon.x &&
		    e.clientY <= closeIcon.y+closeIcon.h)
		    close = true;
	    }
	    if (close) {
		if (inLayer.customCloseOrDestroy != inLayer.constructor.prototype.customCloseOrDestroy)
		    return inLayer.customCloseOrDestroy(inLayer);
		inLayer.onCloseOrDestroy();

		if (inLayer.parent.customCloseOrDestroy != inLayer.parent.constructor.prototype.customCloseOrDestroy)
		    return inLayer.parent.customCloseOrDestroy(inLayer.parent, inLayer);
		var currentLayer = inLayer.parent.getActiveLayer();
		var currentIndex = currentLayer.getIndex();
		var parent = inLayer.parent;
		parent.onCloseOrDestroy(inLayer);
		if (inLayer.destroyable)
		    inLayer.destroy();
		else
		    inLayer.hide();
		this.decoree.renderBounds(); // in case number of rows of tabs has changed
		if (!currentLayer.isDestroyed) {
		    currentLayer.activate();
		    currentLayer.parent.layerIndex = dojo.indexOf(currentLayer.parent.layers, currentLayer);
		} else if (currentIndex > 0) parent.setLayerIndex(currentIndex-1);
		else parent.setLayerIndex(0);

	    } else {
		d.setLayer(inLayer);
	    }
	},
	decorateLayer: function(inLayer, inIndex) {
		this.inherited(arguments);
		this.createTab(inLayer.caption, inIndex, inLayer);
	},
	undecorateLayer: function(inLayer, inIndex) {
		dojo._destroyElement(this.btns[inIndex]);
		this.btns.splice(inIndex, 1);
	},
	setLayerShowing: function(inLayer, inShowing) {
		var i = inLayer.getIndex();
		if (i != -1)
			this.btns[i].style.display = inShowing ? "" : "none";
		this.inherited(arguments);
	},
	setLayerActive: function(inLayer, inActive) {
		var b=this.btns[inLayer.getIndex()];
		if (b)
		    dojo[inActive ? "addClass" : "removeClass"](b, this.decorationClass + '-selected');
		this.inherited(arguments);
	},
	applyLayerCaption: function(inLayer) {
		var d = this.decoree, i = inLayer.getIndex();
		if (i != -1)
		    this.setBtnText(this.btns[i], inLayer.caption, inLayer.closable || inLayer.destroyable);
	},
    setBtnText: function(inBtn, inCaption, closable) {
	var index = dojo.indexOf(this.btns, inBtn);
	var layer = this.decoree.layers[index];
	if (inCaption) {
	    if (inBtn.style.display && layer.showing)
		inBtn.style.display = "";
	    dojo[closable ? "addClass" : "removeClass"](inBtn, this.decorationClass + "-closabletab");
	    inBtn.innerHTML = (closable ? "<span class='TabCloseIcon'>x</span>" : "") +  (inCaption || '&nbsp;');
	} else {
	    inBtn.style.display = "none";
	}

	},
	getBtn: function(inCaption) {
		var d = this.decoree, i = d.indexOfLayerCaption(inCaption);
		if (i != -1)
			return this.btns[i];
	},
	disenableTab: function(inCaption, inDisable) {
		var b = this.getBtn(inCaption);
		if (b)
			b.disabled = inDisable ? "disabled" : "";
	},
	disableTab: function(inCaption) {
		this.disenableTab(inCaption, true);
	},
	enableTab: function(inCaption) {
		this.disenableTab(inCaption, false);
	},
	moveLayerIndex: function(inFromIndex, inToIndex) {
		this.inherited(arguments);
		var d = this.tabsControl.domNode, f = this.btns[inFromIndex], t = this.btns[inToIndex], c = this.decoree.getCount()-1;
		if (inToIndex < inFromIndex) {
			d.insertBefore(f, t);
		} else if (inToIndex > inFromIndex) {
			if (inToIndex == c)
				d.appendChild(f);
			else {
				var nl = this.btns[inToIndex + 1];
				if (nl)
					d.insertBefore(f, nl);
			}
		}
	    wm.Array.removeElement(this.btns, f);
	    wm.Array.insertElementAt(this.btns, f, inToIndex);
	}
});
dojo.declare("wm.RoundedTabsDecorator", wm.TabsDecorator, {}); // backwards compatability
/*
dojo.declare("wm.RoundedTabsDecorator", wm.TabsDecorator, {
	decorateContainer: function() {
		this.inherited(arguments);
		dojo.removeClass(this.tabsControl.domNode, "wmtablayers-tabbar");
		dojo.addClass(this.tabsControl.domNode, "wmtablayers-roundedtabbar");
		this.tabsControl.setPadding("0,0,0,15");
		this.tabsControl.domNode.style.paddingTop = "0px";
		this.tabsControl.domNode.style.paddingLeft = "15px";
	},
	createTab: function(inCaption, inIndex, inLayer) {
		var b = this.btns[inIndex] = document.createElement("div");
		b.style.display = inLayer.showing ? "" : "none";

		var divLeft = document.createElement("div");
		var divCenter = document.createElement("div");
		var divRight = document.createElement("div");

		divLeft.innerHTML = "&nbsp;";
		divCenter.innerHTML = "&nbsp;";
		divRight.innerHTML = "&nbsp;";

		this.setBtnText(divCenter, inCaption, inLayer.closable || inLayer.destroyable);
		this.decoree.connect(b, "onclick", dojo.hitch(this, "tabClicked", inLayer));
		this.decoree.connect(b, "onmouseover", dojo.hitch(this, "mouseoverout", inLayer, true));
		this.decoree.connect(b, "onmouseout", dojo.hitch(this, "mouseoverout", inLayer, false));

		b.className="wmtablayers-roundedtab";
		divLeft.className="wmtablayers-roundedtab-left";
		divCenter.className="wmtablayers-roundedtab-center";
		divRight.className="wmtablayers-roundedtab-right";

		b.appendChild(divLeft);
		b.appendChild(divCenter);
		b.appendChild(divRight);

		dojo.connect(b, "onselectstart", dojo, "stopEvent");
		this.tabsControl.domNode.appendChild(b);
	},
	tabClicked: function(inLayer){
		var b=this.btns[inLayer.getIndex()];
		var divLeft = b.childNodes[0];
		var divCenter = b.childNodes[1];
		var divRight = b.childNodes[2];
		if (b){
			dojo.removeClass(divLeft, 'wmtablayers-roundedtab-left-hover');
			dojo.removeClass(divCenter, 'wmtablayers-roundedtab-center-hover');
			dojo.removeClass(divRight, 'wmtablayers-roundedtab-right-hover');
		}
		this.inherited(arguments);
	},
	mouseoverout: function(inLayer, inActive){
		var inIndex = inLayer.getIndex();
		if(this.decoree.layerIndex != inIndex){ // user has put mouse over an inactive tab
			var b=this.btns[inIndex];
			var divLeft = b.childNodes[0];
			var divCenter = b.childNodes[1];
			var divRight = b.childNodes[2];
			if (b){
				dojo[inActive ? "addClass" : "removeClass"](divLeft, 'wmtablayers-roundedtab-left-hover');
				dojo[inActive ? "addClass" : "removeClass"](divCenter, 'wmtablayers-roundedtab-center-hover');
				dojo[inActive ? "addClass" : "removeClass"](divRight, 'wmtablayers-roundedtab-right-hover');
			}
		}
	},
	applyLayerCaption: function(inLayer) {
		var d = this.decoree, i = inLayer.getIndex();
		if (i != -1)
			this.setBtnText(this.btns[i].childNodes[1], inLayer.caption, inLayer.closable || inLayer.destroyable);
	}

});
*/


dojo.declare("wm.TabsControl", wm.Control, {
	height: "27px",
	width: "100%",
	border: 0,
	init: function() {
	    if (this.parent && this.parent.isRelativePositioned)
		this.isRelativePositioned = true;
	    dojo.addClass(this.domNode, "wmtablayers-tabbar");
	    if (this.owner) {
		if (this.owner.verticalButtons) {
		    this.height = "100%";
		    this.width = this.owner.headerWidth;
		} else {
		    this.height = this.owner._headerHeight;
		}
	    }
	    this.inherited(arguments);
	},
	updateHeaderHeight: function(){
		// dont do anything during design mode as designer decides what height should header have.
/* no longer relevant as this test now needs to be handled by the caller
		if (this.isDesignLoaded())
		  return false;
*/
	        //var _currHeight = dojo.marginBox(this.domNode).h;  these two lines are invoked by the caller before doing a short delay so that IE 6 can update its dom structure
		//this.domNode.style.height = 'auto';
	    if (this.owner._lockHeaderHeight) return this.bounds.h;
		var domHeight = dojo.marginBox(this.domNode).h;
	    return domHeight;
		if (domHeight != _currHeight){
			dojo.marginBox(this.domNode, {h:_currHeight});
			return domHeight;
		}
		return false;
	}
});

}

if(!dojo._hasResource["wm.base.widget.Layers"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.widget.Layers"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.widget.Layers");



//dojo.require("wm.base.widget.Layers.AccordionDecorator");

dojo.declare("wm.Layer", wm.Container, {
    height: "100%",
    width: "100%",
    caption: "",
    layoutKind: "top-to-bottom",
        closable: false,
        destroyable: false,
        showDirtyFlag: false,
    //_requiredParent: "wm.Layers",
    destroy: function() {
        //console.info('layer destroy called');
        this._isLayerDestroying = true;
        var parent = this.parent;
        if (parent && parent instanceof wm.Layers && !parent.isDestroyed) {
            parent.setCaptionMapLayer(this.caption, null);
        }
        this.inherited(arguments);
        if (parent && parent.conditionalTabButtons && !parent.decorator.tabsControl.isDestroyed)
        parent.decorator.tabsControl.setShowing(parent.getVisibleLayerCount() > 1);
    },
    init: function() {

        this.inherited(arguments);
        // bc
        if (this.title) {
            this.caption = this.title;
            delete this.title;
        }
        this.setCaption(this.caption);

        if (!this.isRelativePositioned)
            dojo.addClass(this.domNode, "wmlayer");
    },


    setParent: function(inParent) {
        this.inherited(arguments);
        if(this.parent) {
            /* Apply the wm.Layers clientBorder if the layer hasn't customized its own border */
            if (this.border === wm.Layer.prototype.border) {
                this.setBorder(this.parent.clientBorder);
            }
            if (this.borderColor === wm.Layer.prototype.borderColor) {
                this.setBorderColor(this.parent.clientBorderColor);
            }
        }
    },

    // FIXME: override so that we do not remove and re-add layer
    // this is nasty but avoids dealing with layer order changing
    setName: function(inName) {
        if (this.parent)
            delete this.parent.widgets[this.name];
        this.addRemoveDefaultCssClass(false);
        wm.Component.prototype.setName.apply(this, arguments);
        if (this.parent)
            this.parent.widgets[this.name] = this;
        this.addRemoveDefaultCssClass(true);
    },
    activate: function() {
        var p = this.parent;
        if ((this.showing || wm.BreadcrumbLayers && this.parent instanceof wm.BreadcrumbLayers) && !this.isActive()) {
        if (!this.showing) this.show();
        p.setLayer(this);
        }
    },
    activateAllParents: function() {
        var p = this.parent;
        p.setLayer(this);
        var ancestor = this.parent.isAncestorInstanceOf(wm.Layer);
        if (ancestor) {
        ancestor.activateAllParents();
        } else {
        ancestor = this.parent.isAncestorInstanceOf(wm.Dialog);
        if (ancestor) {
            ancestor.show();
        }
        }
    },
    /* Called when the layer is the event handler */
        update: function() {
        this.activate();
    },
    isActive: function() {
        return this.active;
    },
    setShowing: function(inShowing) {
        if (!this.canChangeShowing())
            return;
            var p = this.parent;
        if (this.showing != inShowing) {
            this.showing = inShowing;
            this.decorator.setLayerShowing(this, inShowing);
            if (!inShowing && p.layerIndex == this.getIndex()) {
            p.setNext();
            }
        }
        if (p && p.conditionalTabButtons && !p.decorator.tabsControl.isDestroyed)
        p.decorator.tabsControl.setShowing(p.getVisibleLayerCount() > 1);
    },
        show: function() {
        this.setShowing(true);
    },
        hide: function() {
        this.setShowing(false);
    },
    setCaption: function(inCaption) {
        this.caption = inCaption;
        if (this.parent) {
        this.parent.setCaptionMapLayer(inCaption, this);
        }
        if (this.decorator)
        this.decorator.applyLayerCaption(this);
    },
        setIsDirty: function(inDirty) {
        if (this.isDirty != inDirty) {
        this.isDirty = inDirty;
        if (this.showDirtyFlag) {
            var caption = this.caption;
            caption = caption.replace(/^\<span class="DirtyTab"\>\*\<\/span\>\s*/, "");
            if (inDirty)
            caption = '<span class="DirtyTab">*</span> ' + caption;
            this.setCaption(caption);
        }
        }
    },
    getIndex: function() {
        var p = this.parent;
        return p && p.indexOfLayer(this);
    },
    // fired by Layers
    onShow: function() {
        this.callOnShowParent();
    },
    // called onDeactivate rather than onHide as its not meant to indicate when its no longer visible; only when its no
    // longer the active Layer in its parent
        onDeactivate: function() {

    },
        onCloseOrDestroy: function() {},
        customCloseOrDestroy: function() {},
    /* Only valid for layers within a TabLayers */
       setClosable: function(isClosable) {
       this.closable = isClosable;
       this.decorator.applyLayerCaption(this);
       },
       setDestroyable: function(isClosable) {
       this.destroyable = isClosable;
       this.decorator.applyLayerCaption(this);
       },
    handleBack: function(inOptions) {
    if (this.active)
        return false;

    this.activate();
    return true;
    },/*
    restoreFromLocationHash: function(inValue) {
    this.activate();
    },
    generateStateUrl: function(stateObj) {
    if (this.active && !this._mobileFoldingGenerated) {
        var index = this.getIndex();
        if (index == this.parent.defaultLayer || index === 0 && this.parent.defaultLayer === -1) return;
        stateObj[this.getRuntimeId()] = 1;
    }
    },*/
    onTabDrop: function() {}
});

dojo.declare("wm.Layers", wm.Container, {
        manageHistory: true,
        manageURL: false,
        isMobileFoldingParent: false,
        transition: "none",
        clientBorder: "",
        clientBorderColor: "",
    layerIndex: -1,
    defaultLayer: -1,
    decoratorClass: wm.LayersDecorator,
    layersType: 'Layers',
    layoutKind: "top-to-bottom",
    height: "100%",
    width: "100%",
    destroy: function() {
        //console.info('LAYERS destroy called');
        this.inherited(arguments);
        if (this.decorator)
        {
            this.decorator.destroy();
            this.decorator = null;
        }

        this.layers = null;
        this.captionMap = null;
        this.client = null;
    },
    prepare: function() {
        this.layers = [];
        this.captionMap = [];
        this.inherited(arguments);

        // needs to happen before build generates the tabsControl or other affected widget
        var isMobile = wm.isMobile || this._isDesignLoaded && studio.currentDeviceType != "desktop";
        this._headerHeight =  (isMobile && this.mobileHeaderHeight) ? this.mobileHeaderHeight || this.headerHeight : this.headerHeight;
    },
    build: function() {
        this.inherited(arguments);
        this.setLayersType(this.layersType);
    },
    init: function() {


        this.userDefHeaderHeight = this.headerHeight;
        if (!this.isRelativePositioned)
            dojo.addClass(this.domNode, "wmlayers");
        else
            this.setHeaderHeight('20px'); // this case should never really come up as we don't use isRelativePositioned any more
            // vertical defaults to justified; once we get rid of justified, we can remove this property
        this.client = new wm.Panel({isRelativePositioned:this.isRelativePositioned,
                    border: "0",
                    margin: "0",
                    padding: "0",
                    name: "client",
                    parent: this,
                    owner: this,
                    height: "100%",
                    width: "100%",
                    verticalAlign: "top",
                    horizontalAlign: "left",
                    flags: {notInspectable: true, bindInspectable: true}}); // bindInspectable means the user can see it as a container to open in the bind inspector
        this.inherited(arguments);
            this._isDesign = this.isDesignLoaded();

    },
    postInit: function() {
        this.inherited(arguments);
        /*
        if (!this.getCount() && this._isDesignLoaded)
            this.addLayer();
            */
        this._initDefaultLayer();
        // fire onshow when loaded
        if (wm.widgetIsShowing(this)) this._fireLayerOnShow();
        if (this.manageURL && this.owner.locationState) {
            this.restoreFromLocationHash(this.owner.locationState[this.getRuntimeId()]);
        }
    },
    /*
    getPreferredFitToContentHeight: function() {
        return this.padBorderMargin.t + this.padBorderMargin.b + this.getActiveLayer().getPreferredFitToContentHeight();
    },
    getPreferredFitToContentWidth: function() {
        return  this.padBorderMargin.l +  this.padBorderMargin.r + this.getActiveLayer().getPreferredFitToContentWidth();
    },
    */

    _initDefaultLayer: function() {
        var d = this.defaultLayer;
        d = d != -1 ? d : 0;
        var dl = this.getLayer(d);
        // call private index setter so we avoid canShow; however, honor showing property
        if (dl && !dl.showing) {
            d = this._getNextShownIndex(d);
            dl = this.getLayer(d);
        }
        if (dl) this._setLayerIndex(dl.getIndex());
    },
    getVisibleLayerCount: function() {
        var count = 0;
        for (var i = 0; i < this.layers.length; i++) {
            if (this.layers[i].showing) {
                count++;
            }
        }
        return count;
    },
    createLayer: function(inCaption) {
        var caption = inCaption;
        if (!caption) {
            caption = this.owner.getUniqueName("layer1");
        }
        var name = caption;
        if (name) name = name.replace(/\s/g, "_");
        var defName = this.owner.getUniqueName(name);
        var props = {
            width: "100%",
            height: "100%",
            caption: caption,
            parent: this,
            horizontalAlign: "left",
            verticalAlign: "top",
            themeStyleType: this.themeStyleType,
            border: this.clientBorder,
            borderColor: this.clientBorderColor
        };
        var o = this.getRoot();
        if (o) return o.createComponent(defName, "wm.Layer", props);
    },
    addPageContainerLayer: function(inPageName, inCaption, activate) {
        var layer = this.getLayerByCaption(inCaption);
        if (layer) {
            if (activate || activate === undefined) layer.activate();
            return layer;
        }
        layer = this.createLayer(inCaption);
        new wm.PageContainer({
            owner: this.owner,
            parent: layer,
            name: this.owner.getUniqueName(layer.name + "PageContainer"),
            width: "100%",
            height: "100%",
            pageName: inPageName,
            deferLoad: false
        });
        if (activate || activate === undefined) layer.activate();

        if (this.conditionalTabButtons) {
            this.decorator.tabsControl.setShowing(this.getVisibleLayerCount() > 1);
        }

        return layer;
    },

    themeStyleType: "",
    setThemeStyleType: function(inMajor) {
        this.themeStyleType = inMajor;
        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i].setThemeStyleType(inMajor);
        }
    },

    setClientBorder: function(inBorder) {
        this.clientBorder = inBorder;
        // in design mode, set_border updates the design borders
        var method = this.isDesignLoaded() ? "set_border" : "setBorder";
        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i][method](inBorder);
        }
    },
    setClientBorderColor: function(inBorderColor) {
        this.clientBorderColor = inBorderColor;
        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i].setBorderColor(inBorderColor);
        }
    },
    // public api for adding a layer
    addLayer: function(inCaption, doNotSelect) {
        var pg = this.createLayer(inCaption);
        if (!doNotSelect) {
            this._setLayerIndex(this.getCount() - 1);
        } else {
            pg.active = false;
        }
        return pg;
    },
    // called by owner automatically.
    addWidget: function(inWidget) {
        if (inWidget instanceof wm.Layer) {
            this.client.addWidget(inWidget);
            this.layers.push(inWidget);
            this.setCaptionMapLayer(inWidget.caption, inWidget);
            if (this.decorator) {
                this.decorator.decorateLayer(inWidget, this.getCount()-1);
                // de-activate layer by default
                this.decorator.setLayerActive(inWidget, false);
            }
        } else {
            this.inherited(arguments);
        }
    },
    removeWidget: function(inWidget) {
        if (inWidget instanceof wm.Layer) {
            var isActive = inWidget.isActive();
            var i = this.indexOfLayer(inWidget);
            this.layers.splice(i, 1);
            this.setCaptionMapLayer(inWidget.caption, null);
            this.decorator.undecorateLayer(inWidget, i);
            inWidget.active = false;
            inWidget.inFlow = false;
            this.client.removeWidget(inWidget);
            /*
            var found = false;
            for (j = 0; j < this.layers.length; j++) {
            if (this.layers[j].active) {
                this.layerIndex = j;
                found = true;
            }
            }
            if (!found)
            this.setLayerIndex(this.layers.length == 0 ? -1 : (i > 0 ? i - 1 : 0));
            */
            if (isActive && !this._isDestroying && this.layers.length) {
                if (this.layers.length > i) {
                   this.layerIndex = -1;
                   this.setLayerIndex(i);
                } else {
                    this.setLayerIndex(i-1);
                }
            } else if (!this._isDestroying && i <= this.layerIndex) {
                this.layerIndex--;
            }
        } else {
            this.inherited(arguments);
        }
    },
    addControl: function(inControl) {
        if (inControl.owner == this) {
            this.inherited(arguments);
        } else if (inControl instanceof wm.Layer) {
            this.client.addControl(inControl);
        }
    },
    removeControl: function(inControl) {
        if (inControl.owner == this) {
            this.inherited(arguments);
        } else if (inControl instanceof wm.Layer) {
            this.client.removeControl(inControl);
        }
    },
    insertControl: function(inControl, inIndex) {
        if (inControl instanceof wm.Layer) {
            this.addControl(inControl);
            this.moveLayerIndex(inControl, inIndex);
        } else {
            this.inherited(arguments);
        }

    },
    moveControl: function(inControl, inIndex) {
        if (inControl instanceof wm.Layer) {
            if (dojo.indexOf(this.layers, inControl) != -1) {
                this.moveLayerIndex(inControl, inIndex);
                this.client.moveControl(inControl, inControl.getIndex());
            } else {

            }
        } else {
            this.inherited(arguments);
        }
    },
    isWidgetTypeAllowed: function(inChildType) {
        return inChildType == "wm.Layer";
    },
    getLayer: function(inIndex) {
        return this.layers[inIndex != undefined ? inIndex : this.layerIndex];
    },
    getActiveLayer: function() {
      if (this.layerIndex != -1) return this.layers[this.layerIndex];
      var defaultIndex = (this.defaultLayer == -1) ? 0 : this.defaultLayer;
      return this.layers[defaultIndex];
    },
    // public api for removing a layer
    removeLayer: function(inIndex) {
        if (!this.layers)
            return;
        var p = this.getLayer(inIndex);
        if (p)
            this.removeWidget(p);
    },
    indexOfLayer: function(inLayer) {
        for (var i=0, l; (l=this.getLayer(i)); i++)
            if (l == inLayer)
                return i;
        return -1;
    },
    indexOfLayerName: function(inLayerName) {
        for (var i=0, l; (l=this.getLayer(i)); i++)
            if (l.name == inLayerName)
                return i;
        return -1;
    },
    indexOfLayerCaption: function(inCaption) {
        return this.indexOfLayer(this.captionMap[inCaption]);
    },
    getLayerCaption: function(inIndex) {
        var p = this.getLayer(inIndex);
        return p && p.caption;
    },
    getLayerByCaption: function(inCaption) {
        return this.getLayer(this.indexOfLayerCaption(inCaption));
    },
    setLayerByCaption: function(inCaption) {
        var p = this.captionMap[inCaption];
        this.setLayerByName(p && p.name ? p.name : inCaption);
    },
    setLayerByName: function(inName) {
        var l = this.client.widgets[inName];
        if (l)
            this.setLayer(l);
        else if (inName)
            this.addLayer(inName);
    },
    setLayer: function(inNameOrLayer) {
        if (inNameOrLayer instanceof wm.Layer)
            // note: use setProp so we can call design version
            this.setProp("layerIndex", inNameOrLayer.getIndex());
        else
            this.setLayerByName(inNameOrLayer);
    },
    setLayerInactive: function(inLayer) {
        wm.fire(inLayer.decorator, "deactivateLayer", [inLayer]);
        inLayer.onDeactivate();
        inLayer.onHide();
    },
    setLayerIndex: function (inIndex) {
        if (inIndex == this.layerIndex) return;
        var fireEvents = !this.loading;
        var oldLayer = this.layers[this.layerIndex];
        var l = this.getLayer(inIndex);
        if (fireEvents) {
            var info = {
                newIndex: inIndex,
                canChange: undefined
            };
            this.oncanchange(info);
            if (info.canChange === false) return;
            inIndex = info.newIndex;
        }
        if (inIndex < 0 || inIndex > this.getCount() - 1) return;

        if (fireEvents && oldLayer) {
        oldLayer.callOnHideParent();
        }
        this._setLayerIndex(inIndex);
        if (fireEvents) {
            if (l) {
                if (app.debugDialog && !this.isAncestor(app.debugDialog)) {
                    var i = 0;
                    var caller = arguments.callee.caller;
                    var ignoreFunctions = ["setProp", "setLayer", "setLayerByName", "setLayerByCaption", "addLayer","activate","update"];
                    while (caller && dojo.indexOf(ignoreFunctions, caller.nom) != -1 && i < 15) {
                        caller = caller.caller;
                        i++;
                    }
                    var eventId = app.debugDialog.newLogEvent({
                                eventType: "layer",
                                sourceDescription: (caller && caller.nom ? caller.nom + "()" : ""),
                                resultDescription: "Activating Layer: " + l.getRuntimeId() + ".activate()",
                                firingId: l.getRuntimeId(),
                                affectedId: l.getRuntimeId(),
                                method: "hide"
                            });

                }
                l.onShow();
                if (eventId) app.debugDialog.endLogEvent(eventId);
            }
            if (oldLayer) {
            	oldLayer.onDeactivate();
            	oldLayer.onHide();
            }
        }
        if (fireEvents && this.lastLayerIndex != this.layerIndex) this.onchange(this.layerIndex);
        if (!this._initialization && oldLayer &&  !this._isDesignLoaded && this.manageHistory) {
        app.addHistory({id: oldLayer.getRuntimeId(),
                   options: {},
                title: "Show " + l.caption});
        }
    },
    _setLayerIndex: function(inIndex) {
        this.lastLayerIndex = this.layerIndex;
        this.layerIndex = inIndex;
        var l = this.getLayer(inIndex);
        if (l) {
        this.decorator.activateLayer(l);
        var page = this.getParentPage();
        if (page && page.validateVisibleOnly) {
            this.validate();
        }
        }
    },
    setDecoratorClass: function(inClass) {
        this.decoratorClass = inClass;
        this.createDecorator();
    },
    createDecorator: function() {
        if (this.decorator)
            this.decorator.destroy();
        this.decorator = this.decoratorClass ? new this.decoratorClass(this) : null;
    },
    setLayersType: function(inLayersType) {
        var ctor = wm[inLayersType + 'Decorator'];
        if (!ctor)
            return;
        this.layersType = inLayersType;
        var i = this.layerIndex;
        if (this.decorator) {
        this.decorator.undecorate();
        this.decorator.destroy();
        this.decorator = null;
        }
        this.setDecoratorClass(ctor);
        this.decorator.decorate();
        this._setLayerIndex(i);
        this.reflow();
    },
    setDefaultLayer: function(inLayerIndex) {
        this.defaultLayer = inLayerIndex;
    },
    getCount: function() {
        return this.layers.length;
    },
    setCaptionMapLayer: function(inCaption, inLayer) {
        try
        {
            this.captionMap[inCaption] = inLayer;
        }
        catch(e)
        {
            // do nothing as this might happen when we are trying to destroy all the layers.
        }
    },
    _getNextShownIndex: function(inIndex, isSecondCall) {
    var count = this.layers.length;
    for (var i = inIndex + 1; i < count && !this.layers[i].showing; i++) ;
    if (this.layers[i] && this.layers[i].showing) return i;
    if (!isSecondCall)
        return this._getPrevShownIndex(inIndex,true);
    return 0;
    },
    _getPrevShownIndex: function(inIndex, isSecondCall) {
    for (var i = inIndex - 1; i >= 0 && !this.layers[i].showing; i--) ;
    if (this.layers[i] && this.layers[i].showing) return i;
    if (!isSecondCall)
        return this._getNextShownIndex(inIndex,true);
    return 0;
    },
/*
    _getPrevNextShownIndex: function(inIndex, inPrev, inBounded) {
        var
            d = inPrev ? -1 : 1,
            c = this.getCount(),
            e = inPrev ? 0 : c-1,
            w = inPrev ? c-1 : 0,
            i = inPrev ? Math.min(inIndex+d, w) : Math.max(inIndex+d, 0),
            l;
        while (i != inIndex) {
            l = this.getLayer(i);
            if (l && l.showing)
                return i;
            if (inPrev ? i > e : i < e)
                i = i + d;
            else {
                if (inBounded)
                    return;
                else
                    i = w;
            }
        }
    },
    */
    setNext: function(inBounded) {
        var p = this._getNextShownIndex(Number(this.layerIndex), false);
        if (p !== undefined)
            this.setLayerIndex(p);
    },
    setPrevious: function(inBounded) {
        var p = this._getPrevShownIndex(Number(this.layerIndex), false);
        if (p !== undefined)
            this.setLayerIndex(p);
    },
    moveLayerIndex: function(inLayer, inIndex) {
        if (inIndex == -1) inIndex = this.layers.length-1;
        var i = inLayer.getIndex(), inIndex = Math.max(0, Math.min(inIndex, this.getCount()-1));
        if (i == inIndex)
            return;
        // fixup layers array
        this.layers.splice(i, 1);
        this.layers.splice(inIndex, 0, inLayer);
        // decorate
        this.decorator.moveLayerIndex(i, inIndex);
        // change layer
            if (inLayer.active) {
            this._setLayerIndex(inIndex);
        } else {
            for (var i = 0; i < this.layers.length; i++) {
            if (this.layers[i].active) {
                this.layerIndex = i;
                break;
            }
            }
        }
    },
    _fireLayerOnShow: function() {
        var l = this.getLayer(this.layerIndex);
        l && l.onShow();
    },
    _onShowParent: function() {
        this._fireLayerOnShow();
    },
    /* This method destroyes the client, not just the layers; and as best I can tell, should never be used */
    clear: function() {
        wm.forEach(this.widgets, function(w) {
            w.destroy();
        });
        this.widgets = {};
        this.layers = [];
        this.domNode.innerHTML = "";
    },
    // events
   _oncanchangeBeforeStart: 1,
    oncanchange: function(inChangeInfo) {
        var l = this.getLayer(inChangeInfo.newIndex);
        inChangeInfo.canChange =  (l && l.showing);
    },
    onchange: function(inIndex) {
    },
    // used only by Tabs
    headerHeight: "27px",
    mobileHeaderHeight: "37px",
    setHeaderHeight: function(inHeight) {
        if (this.layersType != 'Tabs' && this.layersType != "RoundedTabs" && this.layersType != "Wizard" && this.layersType != "Breadcrumb")
            return;
        this._headerHeight = inHeight;
        this.decorator && this.decorator.tabsControl && this.decorator.tabsControl.setHeight(inHeight);

        delete this._lastTabHeight;
        this.renderBounds();

    },
    renderBounds: function() {
        this.inherited(arguments);
        if (this.layersType != 'Tabs' && this.layersType != "RoundedTabs") return;
        if (!this.decorator || !this.decorator.tabsControl) return;
        if (this.decorator.tabsControl.isDestroyed) return;

        wm.job(this.getRuntimeId() + ".renderBounds", 10, this, function() {
            if (this.isDestroyed || this._lockHeaderHeight) return;
            if (this.decorator.btns.length <= 1) return;
            var originalHeight = this.decorator.tabsControl.bounds.h;
            this.decorator.tabsControl.domNode.style.height = 'auto';
            var newheight;
            var lastShowingTab, firstShowingTab;
            for (var i = this.decorator.btns.length - 1; i >= 1; i--) {
                if (this.decorator.btns[i].style.display != "none") {
                    if (!firstShowingTab) firstShowingTab = this.decorator.btns[i];
                    lastShowingTab = this.decorator.btns[i];
                    break;
                }
            }
            /* Sometimes the buttons are a few px off, but we know they've wrapped to the next line of they are many pixels different in offsetTop */
            if (lastShowingTab && Math.abs(firstShowingTab.offsetTop - lastShowingTab.offsetTop) > 4 ) {
                if (this._headerHeight == this.decorator.tabsControl.height) {
                    this.decorator.tabsControl.domNode.style.height = this.decorator.tabsControl.bounds.h + "px";
                } else {
                    this.decorator.tabsControl.setHeight(this._headerHeight);
                }
            } else {
                newheight = Math.max(this.decorator.tabsControl.domNode.clientHeight, parseInt(this._headerHeight));
                if (newheight != this.decorator.tabsControl.bounds.h) {
                    this.decorator.tabsControl.setHeight(newheight + "px");
                } else {
                    this.decorator.tabsControl.domNode.style.height = this.decorator.tabsControl.bounds.h + "px"; // clear the "auto"
                }
            }
        });
    },
    getMinHeightProp: function() {
        if (this.minHeight) return this.minHeight;
        var minHeight = 15;
        if (this.layersType.match(/tabs/i)) minHeight += parseInt(this._headerHeight);
        return minHeight;
    },
    getMinWidthProp: function() {
        if (this.minWidth) return this.minWidth;
        var minWidth = 80;
        if (this.layersType.match(/tabs/i)) minWidth += 120; // need horiz space for tabs
        return minWidth;
    },
    restoreFromLocationHash: function(inValue) {
    var value = inValue;
    if (value !== undefined) {
        var w = this.manageHistory;
        this.manageHistory = false;
        var index = Number(inValue);
        this.setLayerIndex(inValue);
        this.manageHistory = w;
    }
    },
    generateStateUrl: function(stateObj) {
    if (!this._isDesignLoaded && this.getActiveLayer()) {
        var defaultIndex = this.defaultLayer == -1 ? 0 : this.defaultLayer;
        var index = this.layerIndex;
        if (index != defaultIndex && !this.getActiveLayer()._mobileFoldingGenerated) {
        stateObj[this.getRuntimeId()] = this.layerIndex;
        }
    }
    }
});


dojo.declare("wm.TabLayers", wm.Layers, {
       dndTargetName: "",
        //useDesignBorder: 0,
       themeStyleType: "ContentPanel",
       layersType: 'Tabs',
       conditionalTabButtons: false,
       verticalButtons: false,
        headerWidth: "50px",
/*
        setHeaderHeight: function(inHeight) {
        this.headerHeight = inHeight;
        this.c$[0].setHeight(inHeight);
    },
    */
    postInit: function() {
    this.inherited(arguments);
    if (this.conditionalTabButtons) {
        this.decorator.tabsControl.setShowing(this.getVisibleLayerCount() > 1);
    }
    },
    addLayer: function(inCaption, doNotSelect) {
        var result = this.inherited(arguments);
        if (!this._cupdating && !this.owner._loadingPage)
        this.renderBounds();
        if (this.conditionalTabButtons)
        this.decorator.tabsControl.setShowing(this.getVisibleLayerCount() > 1);
        return result;
    },
    removeLayer: function(inIndex) {
        this.inherited(arguments);
        if (this.conditionalTabButtons && !this.isDestroyed)
        this.decorator.tabsControl.setShowing(this.getVisibleLayerCount() > 1);
    },
    // onClose handles both destroy and close as long as it came from clicking the close icon in the tab button
    onCloseOrDestroy: function(inLayer) {

    },
    customCloseOrDestroy: function(inLayer) {

    },
    onTabDrop: function() {},
    onTabRemoved: function() {}
/*,
       afterPaletteDrop: function(){
        this.inherited(arguments);
        this.setLayersType("RoundedTabs");
       }        */
});




}

if(!dojo._hasResource["wm.base.RbacPlugin"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.RbacPlugin"] = true;
/*
 * Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.RbacPlugin");





wm.Plugin.plugin("rbac", wm.Widget, {
    roles: '',
    prepare: function() {
        this.rbacSocket(arguments);
        if (this.roles && this.roles.length && app.isSecurityEnabled) {
            this._rbacShowingRequested = this.showing;
            this.showing = this.updateRbacShowing(this.showing);
            this.subscribe("wmRbacUpdate", this, "reshowRbac");
        }
    },
    reshowRbac: function() {
    this.setShowing(this._rbacShowingRequested);
    },
    setShowing: function(inValue) {
    /* wm.Layer.setShowing calls TabDecorator.setShowing which calls wm.Control.setShowing, which would clobber our
     * _mobileShowingRequested value
     */
    if (this instanceof wm.Layer == false && this.roles)
        inValue = this.updateRbacShowing(inValue);
    this.rbacSocket(arguments);
    },
    updateRbacShowing: function(inValue) {
    if (!this._cupdating)
        this._rbacShowingRequested = inValue; // cache whether it should be showing even if we don't let it show
    return inValue && this.isRbacShowAllowed();
    },

    isRbacShowAllowed: function() {
        var userRoles = this._getUserRoles();
        if (userRoles) {
            for (var i=0, r; (r=this.roles[i]); i++) {
                for (var j=0, ur; (ur=userRoles[j]); j++) {
                    if (r == ur) {
                        return true;
                    }
                }
            }
            return false;
        }
        return true;
    },
    _getUserRoles: function() {
        if (this.isDesignLoaded()) {
            // this should return the "Preview By Role(s)" roles
            return null;
        } else {
            return wm.getUserRoles();
        }
    }
});

wm.Plugin.plugin("rbacLayer", wm.Layer, {
    setShowing: function(inValue) {
        if (this.roles && this.roles.length) {
            inValue = this.updateRbacShowing(inValue);
        }
        this.rbacLayerSocket(arguments);
    }
});

wm.Plugin.plugin("rbacservice", wm.ServiceVariable, {
    roles: '',
    update: function() {
        if (djConfig.isDebug) {
            try {
                this.log("update", arguments.callee.caller.nom || arguments.callee.caller.name || "anonymous");
            } catch (e) {}
        }
        if (!this.roles || this.isRbacUpdateAllowed()) {
            return this.rbacserviceSocket(arguments);
        } else {
            console.log(this.getId() + " blocked by role settings");
            return new dojo.Deferred();
        }
    },
    updateInternal: function() {
        if (!this.roles || this.isRbacUpdateAllowed()) {
            return this.rbacserviceSocket(arguments);
        } else {
            console.log(this.getId() + " blocked by role settings");
        }
    },
    isRbacUpdateAllowed: function() {
        var userRoles = this._getUserRoles();
        if (userRoles) {
            for (var i = 0, r;
            (r = this.roles[i]); i++) {
                for (var j = 0, ur;
                (ur = userRoles[j]); j++) {
                    if (r == ur) {
                        return true;
                    }
                }
            }
            return false;
        }
        return true;
    },
    _getUserRoles: function() {
        if (this.isDesignLoaded()) {
            // this should return the "Preview By Role(s)" roles
            return null;
        } else {
            return wm.getUserRoles();
        }
    }
});


}

if(!dojo._hasResource["wm.base.MobilePlugin"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.MobilePlugin"] = true;
dojo.provide("wm.base.MobilePlugin");




wm.Plugin.plugin("mobile", wm.Control, {
    deviceSizes: '',
    prepare: function(inProps) {
        this.mobileSocket(arguments);
        if (this.deviceSizes || inProps.deviceSizes || window["studio"] && this.deviceType) {
            this._mobileShowingRequested = this.showing;
            this.showing = this.updateMobileShowing(this.showing);
            this.subscribe("deviceSizeRecalc", this, "reshowMobile");
        }
    },
    reshowMobile: function() {
        this.setShowing(this._mobileShowingRequested || this.showing);
    },
    setShowing: function(inValue) {
        /* wm.Layer.setShowing calls TabDecorator.setShowing which calls wm.Control.setShowing, which would clobber our
         * _mobileShowingRequested value
         */
        if (this instanceof wm.Layer == false && this.deviceSizes || this._isDesignLoaded && this.deviceType) inValue = this.updateMobileShowing(inValue);
        this.mobileSocket(arguments);
    },
    updateMobileShowing: function(inValue) {
        if (!this._cupdating) this._mobileShowingRequested = inValue; // cache whether it should be showing even if we don't let it show
        if (this.deviceSizes && this.deviceSizes.length || this._isDesignLoaded && this.deviceType) {
            return inValue && this.isMobileShowAllowed();
        } else {
            return inValue;
        }
    },
    isMobileShowAllowed: function() {
        if (window["studio"] && this.isDesignLoaded()) {
            var deviceType = studio.currentDeviceType;
            if (deviceType && this.deviceType && dojo.indexOf(this.deviceType, deviceType) == -1) {
                return false;
            }

            var deviceSize = studio.deviceSizeSelect.getDataValue();
            if (!deviceSize) return true;
            if (deviceType == "desktop" || studio.portraitToggleButton.clicked) {
                deviceSize = deviceSize.width;
            } else {
                deviceSize = deviceSize.height;
            }
            if (deviceSize == "100%") return true;
            deviceSize = app.appRoot.calcDeviceSize(parseInt(deviceSize));
            var isOk = true;
            if (this.deviceSizes && dojo.indexOf(this.deviceSizes, deviceSize) == -1) return false;
            return true;
        } else {
            var deviceSize = app.appRoot.deviceSize;
            return (!deviceSize || dojo.indexOf(this.deviceSizes, deviceSize) != -1);
        }
    }
});

wm.Plugin.plugin("mobileLayer", wm.Layer, {
    deviceSizes: '',
    setShowing: function(inValue) {
        inValue = this.updateMobileShowing(inValue);
        this.mobileLayerSocket(arguments);
    }
});

}

if(!dojo._hasResource["wm.base.I18nPlugin"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.I18nPlugin"] = true;
/*
 * Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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


dojo.provide("wm.base.I18nPlugin");


wm.getDictionaryItem = function(name, params) {
    if (params == undefined) return wm.locale.phrases[name];

    var newparams = {};
    for (var i in params) {
        newparams[i] = (params[i] === undefined || params[i] === null) ? "" : params[i];
    }
    return dojo.string.substitute(wm.locale.phrases[name], newparams);
}

wm.Plugin.plugin("i18n", wm.Component, {
    prepare: function(inProps) {
        if (inProps && inProps.owner) {
            var entry = inProps.owner.getDictionaryItem(inProps.name);
        }
        if (entry) {
            inProps = dojo.mixin(inProps, entry);
        }
        if (wm.branding) {
            var app = inProps.owner ? inProps.owner.getOwnerApp() : null;
            if (app && app._brandingDictionary) {
                var owner = inProps.owner;
                var ownerName;
                if (owner == app) {
                    ownerName = "app";
                } else if (owner instanceof wm.Page) {
                    ownerName = owner.declaredClass;
                }
                if (ownerName && app._brandingDictionary[ownerName] && app._brandingDictionary[ownerName][inProps.name]) {
                    var componentProps = app._brandingDictionary[ownerName][inProps.name];
                    var locale = dojo.locale;
                    for (prop in componentProps) {
                        var propHash = componentProps[prop];
                        if (propHash[locale] !== undefined) {
                            inProps[prop] = propHash[locale];
                        } else if (propHash["default"] !== undefined) {
                            inProps[prop] = propHash["default"];
                        }
                    }
                }
            }
        }
        this.i18nSocket(arguments);
    },
    getDictionaryItem: function(name, params) {
        if (!this._i18nDictionary) {
            if (this.owner) {
                return this.owner.getDictionaryItem(name, params);
            } else {
                return "";
            }
        }
        if (params == undefined) {
            return this._i18nDictionary[name];
        } else {
            // undefined as a value can throw errors:
            var newparams = {};
            for (var i in params)
            newparams[i] = (params[i] === undefined || params[i] === null) ? "" : params[i];
            return dojo.string.substitute(this._i18nDictionary[name], newparams);
        }
    }
});

}

if(!dojo._hasResource["wm.base.components.CssLoader"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.CssLoader"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

/* dojo.isIE Notes: This code has been tested in IE 9; all dojo.isIE tests are still needed for IE 9 */

dojo.provide("wm.base.components.CssLoader");

dojo.declare("wm.CssLoader", wm.Component, {
	url: "",
	css: "",
	relativeUrl: true,
	init: function() {
		this.inherited(arguments);
		if (this.url)
			this.setUrl(this.url);
		else
			this.setCss(this.css);
	},
	destroy: function () {
		this._sheet = null;
		this.inherited(arguments);
	},
	getStyleSheet: function() {
		// should we have a shared stylsheet or manage separate ones (IE has a 30 stylesheet limit)
		if (dojo.isIE && !this._sheet)
				this._sheet = wm.CssLoader.sheet || (wm.CssLoader.sheet = this.makeSheet());
		if (!this._sheet) {
			this._sheet = this.makeSheet();
		}
		return this._sheet;
	},
	makeSheet: function() {
		var sheet = document.createElement("style");
		sheet.setAttribute("type", "text/css");
	        document.getElementsByTagName("head")[0].appendChild(sheet);
	        //document.getElementbody.previousSibling.appendChild(sheet); in Firefox 4 beta, this come up as a <TextNode/>
		return sheet;
	},
	setUrl: function(inUrl) {
		this.url = inUrl || "";
		if (this.url) {
			var loadUrl = this.relativeUrl ? this.getPath() + this.url : this.url;
			this.setCss(wm.load(loadUrl, true));
		}
	},
	setCss: function(inCss) {
		this.clearCss();
		this.css = inCss || "";
		if (this.css)
			this.addCss(this.css);
	},
	/*installCss: function(inCss){
		this.removeCss();
		this.addCss(inCss);
	},*/
	clearCss: function() {
		this.css = "";
		this.removeCss();
	},
	removeCss: function() {
		// FIXME: IE uses global stylesheet so do not clear styles
		// this will be an IE limitation until addressed with better stripping logic
		if (dojo.isIE)
			return;
		var s=this.getStyleSheet();
		if (s)
			if(s.styleSheet)//IE
				s.styleSheet.cssText = "";
			else {
				while (s.firstChild)
					s.removeChild(s.firstChild);
			}
	},
	addCss: function(inCss) {
		if (this.isDesignLoaded()) {
			var p = this.getPath();
			// if relative paths to images are used in css, prepend the project design path
			// so that the image is resolved at designtime.
			inCss = inCss.replace(/url\s*\(\s*([^(http:)\/].*)\.*\)/g, "url(" + p + "$1)");
		}
		var s = this.getStyleSheet();
		if(s.styleSheet) {//IE
			s.styleSheet.cssText = [s.styleSheet.cssText, inCss].join("\n");
		} else {
			s.appendChild(document.createTextNode("\n"));
			s.appendChild(document.createTextNode(inCss));
		}
	}
});



}

if(!dojo._hasResource["wm.base.components.Application"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.Application"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.Application");


wm.componentLoaders = wm.componentLoaders || {};

wm.registerComponentLoader = function(inType, inLoader){
    wm.componentLoaders[inType] = inLoader;
};

dojo.declare("wm.Application", wm.Component, {
    debugDialog: null,
    sessionExpirationHandler: "nothing",
    touchToClickDelay: 500, // ms user must hold a touch for it to be treated as a click
    touchToRightClickDelay: 1500, // ms user must hold a touch for it to be treated as a right click
    eventDelay: wm.isMobile ? 100 : 0, // 100ms delay during which a user selection is highlighted and before the event is fired
    manageURL: false,
    manageHistory: true,
    i18n: false,
    main: "Main",
    tabletMain: "",
    phoneMain: "",
    isSecurityEnabled: false,
    phoneGapLoginPage: "Login",
    hintDelay: 1500,
        disableDirtyEditorTracking: false,
        deletionDisabled: 1,
        projectSubVersion: "Alpha",
        projectVersion: 1,
        studioVersion: "",
        theme: "wm_notheme",
        toastPosition: "br",
        _lastTheme: "",
    //IERoundedCorners: false,
    init: function() {

        this.history = [];
        if (window["onpopstate"] !== undefined) {
            this._initializingBack = true;
            this.connect(window, "onpopstate", this, "_onBack");
        }

        /* load system dictionaries such as language/nls/component.js */
        this.requireLocalization();

        /* Patches is inlined into Project.a.js so it doesn't need a separate request unless in debug mode */
        if (djConfig.isDebug) {
            dojo["require"]("common." + wm.version.replace(/[^a-zA-Z0-9]/g, "") + "_patches", true);
        }

        /* Setup window.app */
        window.app = wm.application = wm.application || this;
        this.connectList = [];
        this.app = this;

        /* Load application dictionaries: language/nls/app.js */
        if (this.i18n) {
            try {
                dojo["requireLocalization"]("language", "app");
                this._i18nDictionary = dojo.i18n.getLocalization("language", "app");
            } catch (e) {}
        }

        /* If branding property is set, load branding data */
        this.loadBranding();

        /* app.init */
        this.inherited(arguments);

        this._isDesignLoaded = (window["studio"] && this != app);

        /* Init the type manager */
        if (!this._isDesignLoaded) wm.typeManager.initTypes();

        /* There are times when we need to access studio.application before we've finished initializing the app in design mode;
         * this gives us early access to it without mucking up existing logic for when its set/cleared
         */
        if (this._isDesignLoaded) {
            studio._application = this;
        }

        /* All Apps get a .WMApp parent class except for studio; this gives us extra hooks for styling apps without touching studio */
        var node = this._isDesignLoaded ? null : document.body.parentNode;
        if (node) {
            dojo.addClass(node, "WMApp");
        }

        /* Load the theme */
        var themematch = window.location.search.match(/theme\=(.*?)\&/) || window.location.search.match(/theme\=(.*?)$/);
        if (themematch) {
            this._setTheme(themematch[1], true);
        } else if (wm.device == "phone" || window["studio"] && studio.currentDeviceType == "phone") {
            this._setTheme(this.phoneTheme || this.theme, true);
        } else if (wm.device == "tablet" || window["studio"] && studio.currentDeviceType == "tablet") {
            this._setTheme(this.tabletTheme || this.theme, true);
        } else {
            this._setTheme(this.theme, true);
        }

        /* Load app.css */
        if (this._css) {
            this._cssLoader = new wm.CssLoader({
                owner: this
            });
            this._cssLoader.setCss(this._css);
        }

        /* Determines if we need to implement our own touchscrolling due to limitations in the mobile browser's touch scrolling of divs.
         * IOS 4 and and older need this.  Native android browsers for 2.x devices need this.
         */
        if (wm.isMobile) {
            if (wm.isAndroid > 2 || wm.isAndroid == "chrome" || wm.isIOS && wm.isIOS > 4 ) {;
            } else {
                this._touchEnabled = true;
            }
        }


        this.$ = this.components = {};

        this._setupKeys();
    },
    _pollForTimezoneChange: function() {
        if (new Date().getTimezoneOffset() != wm.currentTimeZone) {
            wm.setTimeZoneOffset();
            wm.currentTimeZone = new Date().getTimezoneOffset();
        }
    },
    getServerTimeOffset: function() {
        if (!this.serverTimeSVar) {
            var serverTimeSVar = this.serverTimeSVar = new wm.ServiceVariable({
                owner: this,
                name: "serverTimeSVar",
                service: "waveMakerService",
                operation: "getServerTimeOffset",
                onSuccess: function(inResult) {
                    wm.serverTimeOffset = inResult;
                    wm.setTimeZoneOffset();
                    wm.currentTimeZone = new Date().getTimezoneOffset();
                }
            });
        }
        this.serverTimeSVar.update();
    },
    _setupKeys: function() {
        this._keys = {
            8: 'BACKSPACE',
            9: 'TAB',
            13: 'ENTER',
            16: 'SHIFT',
            17: 'CTRL',
            18: 'ALT',
            19: 'BREAK',
            20: 'CAPS',
            27: 'ESC',
            32: ' ',
            33: 'PAGE UP',
            34: 'PAGE DOWN',
            35: 'END',
            36: 'HOME',
            37: 'LEFT',
            38: 'UP',
            39: 'RIGHT',
            40: 'DOWN',
            45: 'INSERT',
            46: 'DELETE',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            65: 'a',
            66: 'b',
            67: 'c',
            68: 'd',
            69: 'e',
            70: 'f',
            71: 'g',
            72: 'h',
            73: 'i',
            74: 'j',
            75: 'k',
            76: 'l',
            77: 'm',
            78: 'n',
            79: 'o',
            80: 'p',
            81: 'q',
            82: 'r',
            83: 's',
            84: 't',
            85: 'u',
            86: 'v',
            87: 'w',
            88: 'x',
            89: 'y',
            90: 'z',
            91: 'LEFT WINDOW',
            92: 'RIGHT WINDOW',
            93: 'SELECT',
            96: 'NUMPAD 0',
            97: 'NUMPAD 1',
            98: 'NUMPAD 2',
            99: 'NUMPAD 3',
            100: 'NUMPAD 4',
            101: 'NUMPAD 5',
            102: 'NUMPAD 6',
            103: 'NUMPAD 7',
            104: 'NUMPAD 8',
            105: 'NUMPAD 9',
            106: 'NUMPAD *',
            107: 'NUMPAD +',
            108: 'NUMPAD ENTER',
            109: 'NUMPAD -',
            110: 'NUMPAD .',
            111: 'NUMPAD /',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NUMLOCK',
            145: 'SCROLLLOCK',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: "\\",
            221: ']',
            222: '"'
        };
    },
    requireLocalization: function() { /* Compiled into nls/lib_build for non-debug mode */
        if (djConfig.isDebug) {
            dojo.registerModulePath("wm.language", wm.libPath + "/wm/language");
        }
        wm.locale = {};
        
        wm.locale.phrases = dojo.i18n.getLocalization("wm.language", "components");

        
        wm.locale.props = dojo.i18n.getLocalization("wm.language", "properties");
    },
    loadBranding: function() {
        if (wm.branding) {
            this._brandingDictionary = dojo.fromJson(wm.load("branding/" + wm.branding + "/branding.js"));
            var style = document.createElement("link");
            style.type = "text/css";
            style.rel = "stylesheet";
            style.href = "branding/" + wm.branding + "/branding.css";
            document.getElementsByTagName("head")[0].appendChild(style);
        }
    },
    createDebugDialog: function() {
        dojo["require"]("wm.base.debug.Dialog");
        dojo["require"]("wm.base.components.JsonRpcService");
        if (!this.debugDialog) {
            this.debugDialog = new wm.debug.Dialog({
                owner: this,
                titlebarButtons: "DebuggerHelpIcon",
                name: "debugDialog",
                width: "700px",
                height: "400px",
                corner: "cr"
            });
        }
    },
    setPhoneTheme: function(inTheme) {
        this.phoneTheme = inTheme;
        if (wm.device == "phone" || window["studio"] && studio.currentDeviceType == "phone") {
            this._setTheme(inTheme || this.theme);// inTheme could be ""
        }
    },
    setTabletTheme: function(inTheme) {
        this.tabletTheme = inTheme;
        if (wm.device == "tablet" || window["studio"] && studio.currentDeviceType == "tablet") {
            this._setTheme(inTheme || this.theme);// inTheme could be ""
        }
    },
    _setTheme: function(inTheme, isInit, optionalCss, optionalPrototype, noRegen, forceUpdate) {
        /* Adapt themes from before inTheme was a full package path */
        if (inTheme.indexOf(".") == -1) {
            inTheme = inTheme.indexOf("wm_") == 0 ? "wm.base.widget.themes." + inTheme : "common.themes." + inTheme;
        }
        var themematch = window.location.search.match(/theme\=(.*?)\&/) || window.location.search.match(/theme\=(.*?)$/);
        var node;
        if (this._isDesignLoaded) {
            if (studio.themesListVar.query({dataValue: inTheme, designer: "themedesigner"}).getCount()) {
                node = studio.designer.domNode;
            } else {
                node = studio.designerWrapper.domNode;
            }
        } else {
            node = document.body;
        }

        if (this.themeName) {
            dojo.removeClass(studio.designer.domNode, this.themeName);
            dojo.removeClass(studio.designerWrapper.domNode, this.themeName);
        }

        if (this._isDesignLoaded) studio.themeChanged(inTheme);

        if (this._isDesignLoaded && !isInit) {
            try {
                // write before we change the prototype so defaults are left blank
                if (this._isDesignLoaded && !isInit) {
                    this._themeChanged = true;
                    this.cacheWidgets();
                }
            } catch (e) {}
        }

        this._lastTheme = this._theme;
        this._theme = inTheme;
        this.themeName = inTheme.replace(/^.*\./,"");
        dojo.addClass(node, this.themeName);


        if (this._isDesignLoaded || !isInit || themematch) {
            try {
                this.loadThemeCss(this._theme, this._isDesignLoaded, optionalCss);
                this.loadThemePrototype(this._theme, optionalPrototype);
                if (this._isDesignLoaded && !isInit && !noRegen) {
                    this.useWidgetCache();
                }
            } catch (e) {
                if (inTheme != "wm_notheme") {
                    this._setTheme("wm_notheme", isInit, optionalCss, optionalPrototype, noRegen);
                    app.alert(wm.getDictionaryItem("wm.Application.ALERT_MISSING_THEME", {
                        name: inTheme
                    }));
                } else {
                    app.alert(wm.getDictionaryItem("wm.Application.ALERT_MISSING_NOTHEME", {
                        name: inTheme
                    }));
                }
                return;
            }
        } else {
            this.loadThemePrototype(this._theme, optionalPrototype);
        }

    },
            // don't regenerate over and over; as long as the user remains in the theme designer,
            // widgetsjs shouldn't change except as prototypes change,
            // and we don't want the design to change each time the prototype border changes...
    cacheWidgets: function() {
        if (!this._widgetsjs) {
            var dialogs = "";
            var components = studio.page.components;
            for (c in components) {
                if (components[c] instanceof wm.Dialog) {
                    dialogs += components[c].write("") + ",";
                }
            }
            var widgetsjs = dojo.fromJson("{"+ dialogs + studio.page.root.write("") + "}");
            this._widgetsjs = widgetsjs;
        }
    },
    useWidgetCache: function() {
        studio.page.root.destroy();
        delete studio.page.root;
        var components = studio.page.components;
        for (c in components) {
            if (components[c] instanceof wm.Dialog) {
                components[c].destroy();
            }
        }

        studio.page.loadComponents(this._widgetsjs, null);
        delete this._widgetsjs;
        studio.page.reflow();
        studio.refreshWidgetsTree();
    },
    loadThemePrototype: function(inTheme, optionalThemeData) {
        var inThemeName = inTheme.replace(/^.*\./,"");
        var themeData = wm.Application.themeData[inTheme];
        if (!themeData || optionalThemeData) {
            var path;

            /* Up until WM 6.5, themes were specified by name not path */
            if (inTheme === inThemeName) {
                if (inThemeName.match(/^wm_/)) {
                    path = dojo.moduleUrl("wm") + "base/widget/themes/" + inThemeName + "/Theme.js";
                } else {
                     path = dojo.moduleUrl("common") + "themes/" + inThemeName + "/Theme.js";
                }
            } else {
                path = dojo.moduleUrl(inTheme) + "/Theme.js";
            }
            themeData = optionalThemeData || dojo.fromJson(dojo.xhrGet({
                url: path,
                sync: true,
                preventCache: true
            }).results[0]);
            wm.Application.themeData[inTheme] = themeData || {};
        }

        var propHash = themeData["wm.Control"];
        for (var j in propHash) {
            wm.Control.prototype[j] = propHash[j];
        }
        if (!wm.Application.themePrototypeData) wm.Application.themePrototypeData = {};
        wm.Application.themePrototypeData["wm.Control"] = this._theme;


        /*
    for (var i in themeData) {
        try {
        console.log("Set prototype of " + i);
        var propHash = themeData[i];
        var ctor = dojo.getObject(i);
        if (ctor && ctor.prototype) {
        var prototype = ctor.prototype;
        for (var j in propHash) {
            var property = propHash[j];
            prototype[j] = propHash[j];
        }
        } else {
        console.log("Theme Error: " + i + " not found");
        }
        } catch(e) {console.error("Uncaught error in themes: " + e);}
        }
            */
    },
    loadThemePrototypeForClass: function(ctor, optionalWidget) {
        if (!this._theme || !ctor) return;

        var declaredClass = ctor.prototype.declaredClass;
        if (declaredClass == "wm.Template") declaredClass = "wm.Panel";

        var themeData = wm.Application.themeData[this._theme];
        var ctorData = themeData[ctor.prototype.declaredClass];
        var p = ctor.prototype;

        /* At design time, we cache the original state of the prototype because it may change as the developer changes themes, and
         * as we switch between studio's theme and user's theme
         */
        if ((window["StudioApplication"])) {
            if (!wm.defaultPrototypeValues) {
                wm.defaultPrototypeValues = {};
            }
            if (!wm.defaultPrototypeValues[declaredClass]) {
                wm.defaultPrototypeValues[declaredClass] = {};
                var originalValues = wm.Object.getSchemaClass(ctor).prototype;
                for (var inName in originalValues) {
                    var inValue = originalValues[inName];
                    if (typeof inValue == "object" && inValue && !inValue.method && !inValue.ignore && !inValue.readonly && !inValue.operation && !(typeof p[inName] == "function")) {
                        wm.defaultPrototypeValues[declaredClass][inName] = p[inName];
                    }
                }
                if ("desktopHeight" in wm.defaultPrototypeValues[declaredClass] === false) {
                     wm.defaultPrototypeValues[declaredClass].desktopHeight = undefined;
                }
            }



            /* Restore the prototype to untampered state if we've changed themes */
            if (wm.Application.themePrototypeData[declaredClass] && wm.Application.themePrototypeData[declaredClass] != this._theme) {
                var props = wm.defaultPrototypeValues[declaredClass];
                wm.forEachProperty(props, function(inValue, inName) {
                    if (inValue && typeof inValue == "object") inValue = dojo.clone(inValue); // else all instances will share this object as a property; happens with _classes
                    p[inName] = inValue;
                    if (optionalWidget) optionalWidget[inName] = inValue;
                });
            }
        }

        /* Localization of default properties */
        if (wm.locale.props) {
            dojo.mixin(ctorData,wm.locale.props[declaredClass]);
        }
        if (wm.Application.themePrototypeData[declaredClass] != this._theme) {
            if (ctorData) {
                for (var j in ctorData) {
                    ctor.prototype[j] = ctorData[j];
                    if (optionalWidget) optionalWidget[j] = ctorData[j];
                }
            }
            wm.Application.themePrototypeData[declaredClass] = this._theme;
        } /* End localization of default properties */

    },
    loadThemeCss: function(inTheme, inDesign, optionalCss) {
        var inThemeName = inTheme.replace(/^.*\./,"");
        var path;
        var themecss;

        /* If theme is specified by name (WM 6.5 and older) rather than by path */
        if (inTheme === inThemeName) {
            if (inThemeName.match(/^wm_/)) path = dojo.moduleUrl("wm") + "base/widget/themes/" + inThemeName + "/theme.css";
            else path = dojo.moduleUrl("common") + "themes/" + inThemeName + "/theme.css";
        } else {
            path = dojo.moduleUrl(inTheme) + "/theme.css";
        }
        if (inDesign) {
            var imagepath = path.replace(/\/[^\/]*$/, "/images");
            while (imagepath.match(/[^\/]+\/\.\.\//))
            imagepath = imagepath.replace(/[^\/]+\/\.\.\//, "");
            if (optionalCss) {
                themecss = optionalCss;
            } else {
                var results = dojo.xhrGet({
                    url: path,
                    sync: true,
                    preventCache: false
                }).results;
                if (results[1]) throw results[1];
                themecss = results[0] || "";

                var results = dojo.xhrGet({
                    url: path.replace(/theme\.css/, "custom.css"),
                    sync: true,
                    preventCache: false
                }).results;
                if (!results[1]) {
                    themecss += results[0] || "";
                }
            }
            themecss = themecss.replace(/url\s*\(\s*images/g, "url(" + imagepath);
            setCss("theme_ss", themecss);
        } else {
            wm.headAppend(wm.createElement("link", {
                rel: "stylesheet",
                type: "text/css",
                href: path
            }));
        }
    },
    postInit: function() {
        this.inherited(arguments);
        //this.getRuntimeService();
    },
    destroy: function() {
        this._isDestroying = true;
        wm.fire(this.scrim, "destroy");
        wm.fire(this._runtimeService, "destroy");
        this.inherited(arguments);
        dojo.forEach(this.connectList, dojo.disconnect);
        this.connectList = null;
        delete this._page;
        /*
        if (this._pageLoader)
        {
            this._pageLoader.destroy();
            this._pageLoader = null;
        }
        */
        if (this.pageContainer) {
            this.pageContainer.destroy();
            this.pageContainer = null;
        }
        if (this.domNode) {
            dojo.destroy(this.domNode);
            this.domNode = null;
        }

        if (this.pageDialog) this.pageDialog.destroy();
        delete this.pageDialog;
        if (this.scrim) this.scrim.destroy();
        delete this.scrim;
        delete this.app;
        //dojo.publish('applicationDestroyed',[]);
    },
    createPageContainer: function() {
        if (!this._isDesignLoaded) {
        this.appRoot = new wm.AppRoot({owner: this, name: "appRoot", margin: "0", padding: "0", border: "0", borderColor: "0"});
        if (wm.isMobile) {
            dojo.addClass(document.body, "wmmobile")
        }

        this.pageContainer = new wm.PageContainer({manageHistory: this.manageHistory,
                                                    manageURL: this.manageURL,
                                                    owner: this,
                                                    parent: this.appRoot,
                                                    width: "100%",
                                                    height: "100%",
                                                    margin: wm.AppRoot.prototype.margin,
                                                    padding: wm.AppRoot.prototype.padding,
                                                    border: wm.AppRoot.prototype.border,
                                                    borderColor: wm.AppRoot.prototype.borderColor,
                                                    getRuntimeId: function() {return ""}
                                                    });
        this.connectList[this.connectList.length] = this.connect(this.pageContainer._pageLoader, "onBeforeCreatePage", this, "beforeCreatePage");
        this.connectList[this.connectList.length] = this.connect(this.pageContainer._pageLoader, "onPageChanged", this, "pageChanged");
        }
    },
/*
    createPageLoader: function() {
        this._pageLoader = new wm.PageLoader({owner: this});
        this.connectList[this.connectList.length] = this.connect(this._pageLoader, "onBeforeCreatePage", this, "beforeCreatePage");
        this.connectList[this.connectList.length] = this.connect(this._pageLoader, "onPageChanged", this, "pageChanged");
    },
    */
    // avoid unique names when loading components
    loadComponents: function(inChildren) {
        this._loading = true;
        this.createComponents(inChildren);
        // bc only
        //this.createComponent("cssLoader", "wm.CssLoader", {owner: this, url: "app.css"});
        this._loading = false;
    },
    subPageLoaded: function(inPage) {
        if (djConfig.isDebug) {
            if (this.debugSubPageList === undefined) this.debugSubPageList = {};
            this.debugSubPageList[inPage.name] = inPage;
        }
    },
    subPageUnloaded: function(inPage) {
      if (djConfig.isDebug && inPage) {
        if (this.debugSubPageList != undefined)
          delete(this.debugSubPageList[inPage.name]);
      }
    },
    _onSessionExpiration: function() {
        switch(this.sessionExpirationHandler) {
            case "nothing":
                break;
            case "navigateToLogin":
                if (window.location.pathname.indexOf("index.html") != -1) {
                    window.location.pathname = location.pathname.replace(/index\.html/, "login.html")
                } else {
                    window.location.pathname += window.location.pathname.match(/\/$/) ? "login.html" : "/login.html";
                }
                break;
            case "showLoginDialog":
                if (!this._loginDialog) {
                    this._loginDialog = new wm.PageDialog({
                        name: "_loginDialog",
                        owner: this,
                        width: "80%",
                        height: "80%",
                        title: "Login",
                        pageName: "Login",
                        hideControls: true,
                        noEscape: true,
                        deferLoad: false});
                }
                this._loginDialog.show();
            break;
        }
        wm.fire(this, "onSessionExpiration");
    },

    qualifyName: function(inName) {
        return inName;
    },
    addComponent: function(inComponent) {
        this.inherited(arguments);
        this[inComponent.name] = inComponent;
    },
    removeComponent: function(inComponent) {
        delete this[inComponent.name];
        this.inherited(arguments);
    },

    getRuntimeService: function(owner) {
        if (!this._runtimeService)
            this._runtimeService = new wm.JsonRpcService({service: "runtimeService",
                                    _isDesignLoaded: this._isDesignLoaded,
                                  owner: owner});
        return this._runtimeService;
    },

    //The following lines are not being used now.  They may be used in the future to differenciate requests from Studio from
    //requests deployed application.
    getRuntimeServiceDesignTime: function(owner) {
        if (!this._runtimeService)
            this._runtimeService = new wm.JsonRpcService({service: "runtimeService",
                                  owner: owner || this,
                                  designTime: true});
        return this._runtimeService;
    },

    getRoot: function() {
        return this;
    },

    getRuntimeId: function(inId) {
        return inId;
    },
    getId: function(inId) {
        if (inId) return "app." + inId;
        else return "app";
    },
    reflow: function(resize) {
        var d = this.domNode;
            this.appRoot.reflow();
    },
    reflowParent: function() {
        this.reflow();
    },
    loadComponent: function(inName, inParent, inType, inProps, inEvents, inChildren, isSecond) {
        return inParent.createComponent(inName, inType, inProps, inEvents, inChildren, this);
    },
    hideLoadingIndicator: function() {
        var l = dojo.byId("_wm_loading");
        if (l)
        dojo._destroyElement(l);
    },
    run: function() {
        // highlander when running
        app = wm.application = this;
        dojo.addOnLoad(dojo.hitch(this, "runOnLoad"));
    },
    runOnLoad: function() {
        // In IE6 addOnLoad is sometimes called before the dom is actually ready (bad Dojo)
        // correct here by adding a small delay.
        setTimeout(dojo.hitch(this, "doRun"), dojo.isIE < 7 ? 100 : 1);
    },
    doRun: function() {
        if (wm.isPhonegap) {
            if (!window["cordova"] && !window["PhoneGap"]) {
                wm.job("doRun", 100, this, "doRun");
                return;
            }
            if (!window["PhoneGap"]) window["PhoneGap"] = true;
            /* IFrame added by phonegap build server seems to disrupt touch events */
            if (document.body.nextSibling && document.body.nextSibling.tagName == "IFRAME") {
                dojo.destroy(document.body.nextSibling);
            }
            dojo["require"]("build.Gzipped.wm_phonegap_misc", true);
            dojo.forEach(wm.componentFixList._phonegap, function(fix) {
                try {
                    fix();
                } catch(e){}
            });
        }

		/* Needs to be here rather than postInit because wm.ServiceVariable not loaded in phonegap build until this point */
		if (!this._isDesignLoaded) {

            if (wm.serverTimeOffset === undefined) {
                this.getServerTimeOffset();
            } else {
                wm.currentTimeZone = new Date().getTimezoneOffset();
            }
            window.setInterval(dojo.hitch(this, "_pollForTimezoneChange"), 10000); //3600000); // once per hour check to see if the timezone has changed
        }

        this.createPageContainer();
        this.domNode = this.appRoot.domNode;
        this.reflow();

        /* Load all app-level components from project.js */
        this.loadComponents(this.constructor.widgets || this.widgets);


        if (!this.debugDialog) {
            if (this._overrideDebugDialog !== undefined) {
                if (this._overrideDebugDialog) this.createDebugDialog();
            } else if (djConfig.isDebug && (wm.device != "phone" || wm.isFakeMobile)) {
                this.createDebugDialog();
            }
        }

        if (!wm.isPhonegap) {
            this.pageDialog = new wm.PageDialog({
                name: "pageDialog",
                owner: this
            });
        }


        /* WM-2794: ENTER key in a text input causes focus to move to first button and fire it; make sure its a button that does nothing; only certain this is an issue in IE 8 */
        if (dojo.isIE <= 8) {
            var button = document.createElement("BUTTON");
            button.style.width = "1px";
            button.style.height = "1px";
            this.domNode.appendChild(button);
        }
        var main;
        if (wm.device == "tablet") {
            main = this.tabletMain;
        } else if (wm.device == "phone") {
            main = this.phoneMain;
        }
        if (!main) {
            main = this.main;
        }
        this.pageContainer._initialPageName = main;
        if (window["PhoneGap"] && this.isSecurityEnabled && this.isLoginPageEnabled && this.phoneGapLoginPage) {
            this.loadPage(this.phoneGapLoginPage);
        } else {
            this.loadPage(main);
        }
        this.hideLoadingIndicator();
    },
    start: function() {
        //this.hideLoadingIndicator();
    },
    getServerComponents: function() {
        if (this.serverComponents === undefined) {
            this.loadServerComponents();
        }
        return this.serverComponents;
    },
    loadServerComponents: function(inComponentType) {
        if (inComponentType && this.serverComponents) {
            for (var i=0, c; c=this.serverComponents[i]; i++) {
                if (c.type == inComponentType)
                    this.serverComponents.splice(i--, 1);
            }
            var cl = wm.componentLoaders[inComponentType];
            if (cl)
                this.serverComponents = this.serverComponents.concat(cl.getComponents());
        } else {
            this.serverComponents = [];
            for (var i in wm.componentLoaders) {
                this.serverComponents = this.serverComponents.concat(wm.componentLoaders[i].getComponents());
            }
        }
    },
    addServerComponent: function(inComponent) {
        this.serverComponents.push(inComponent);
    },
    removeServerComponent: function(inComponent) {
        for (var i=0, c; c=this.serverComponents[i]; i++){
            if (c == inComponent) {
                this.serverComponents.splice(i, 1);
                return i;
            }
        }
    },
    removeServerComponentByName: function(inComponentName, inComponentType) {
        for (var i=0, c; c=this.serverComponents[i]; i++){
            if (c.type == inComponentType && c.name == inComponentName) {
                this.serverComponents.splice(i, 1);
                return i;
            }
        }
    },
    beforeCreatePage: function() {
        this.pageContainer._pageLoader.pageConnect("start", this, "start");
        this.pageLoadedDeferred = new dojo.Deferred()
    },
    pageChanged: function(inPage, inPreviousPage) {
        // establish page reference
            this.page = this._page = inPage;
        var n = inPage.name, o = (inPreviousPage || 0).name;
        // clean up previous reference
        if (o) {
            // delete window[o]; Kana reported problems with this in IE so replacing with setting it to undefined
            window[o] = undefined;
            delete this[o];
        }
        window[n] = this[n] = this._page;
        // change callback / event
        if (this.pageLoadedDeferred)
            this.pageLoadedDeferred.callback({page: inPage, previousPage: inPreviousPage});

            // Insures only the main page gets the keydown events unless end user hacks their own
        this.connect(document, "keydown", inPage, "keydown");

        this.onPageChanged(inPage, inPreviousPage);
    },
    loadPage: function(inName) {
        var firstPage = !Boolean(this.pageContainer.page);
        if (firstPage) {
            var hash = window.location.hash;
            if (hash.length > 1) {
                try {
                    this.locationState = dojo.fromJson(hash.substring(1));
                } catch (e) {
                    try {
                        this.locationState = dojo.fromJson(unescape(hash.substring(1)));
                    } catch(e){}
                }
            }
            if (this.manageURL) {
                this._pageName = this.locationState && this.locationState.pageName ? this.locationState.pageName : inName;
            } else {
                this._pageName = inName;
            }
        } else {
            this._pageName = inName;
        }

        //this._pageLoader.unloadSupport();
        try {
            this.pageContainer.setPageName(this._pageName); //_pageLoader.loadPage(inName, inName.toLowerCase());
        } catch (e) {
            // do nothing
            if (djConfig.isDebug) console.error("loadPage error: " + e);
        }
    },
    // Provided for use in debugging. Note that when we do a better job of caching pages from server, we will need to deallocate them in this call
    forceReloadPage: function() {
        this.loadPage(this._pageName);
    },
    onPageChanged: function(inNewPage, inPreviousPage) {
    },
    onSessionExpiration: function() {

    },
    getFullVersionNumber: function() {
        return this.projectVersion + "." + this.projectSubVersion;
    },

    // This sends a synchronous request. I don't like it, but a user calling
    // this expects to get a result.
    getSessionId: function() {
        if (!this.sessionId) {
            var a = new wm.JsonRpcService({
                service: "waveMakerService",
                sync: true
            });
            a.requestSync("getSessionId", []);
            this.sessionId = a.result;
        }
        return this.sessionId;
    },
    echoFile: function(filecontents, filetype, filename) {
        if (!this.echoFileService) {
            this.echoFileService = new wm.ServiceVariable({
                owner: app,
                name: "echoFileService",
                downloadFile: true,
                service: "waveMakerService",
                operation: "echo"
            });
            this.echoFileService.input.setType("");
            wm.typeManager.addType("echoInputs",
                       {internal: false,
                        fields: {contents: {type: "java.lang.String"},
                                 fileType: {type: "java.lang.String"},
                                 fileName: {type: "java.lang.String"}}
                       });
             this.echoFileService.input.setType("echoInputs");
        }

        this.echoFileService.input.setData({contents: filecontents, fileType: filetype,fileName: filename});
        this.echoFileService.update();
    },
    showLoadingDialog: function(inMessage, inMessageWidth, optionalInTarget) {
        if (!this.loadingDialog) {
            this.loadingDialog = new wm.LoadingDialog({
                owner: this,
                name: "loadingDialog",
                widgetToCover: this.appRoot
            });
        }
        this.loadingDialog.widgetToCover = optionalInTarget || this.appRoot;
        this.loadingDialog.setCaption(inMessage || "Loading...");
        if (inMessageWidth) this.loadingDialog._label.setWidth(inMessageWidth);
        this.loadingDialog.show();
    },
    hideLoadingDialog: function() {
        if (this.loadingDialog) this.loadingDialog.hide();
    },
    warnOnce: function(inCookieName, inAlertText) {
        var cookie = dojo.cookie(inCookieName);
        if (cookie) return false;
        wm.require("wm.Checkbox");
        this.alert(inAlertText);
        if (!this._warnOnceCheckbox) {
            this._warnOnceCheckbox = new wm.Checkbox({
                owner: this.alertDialog,
                parent: this.alertDialog.containerWidget.c$[0],
                margin: "10,0,0,0",
                height: "30px",
                width: "100%",
                caption: "Don't warn again",
                captionPosition: "right",
                captionAlign: "left",
                captionSize: "100%"
            });
        }
        if (this._warnOnceConnect) this.disconnect(this._warnOnceConnect);
        this._warnOnceConnect = this.alertDialog.connectOnce(this.alertDialog, "onClose", dojo.hitch(this, "_cleanupWarnOnce", inCookieName));
        return true;
    },
    _cleanupWarnOnce: function(inCookieName) {
            if (this._warnOnceCheckbox.getChecked()) dojo.cookie(inCookieName, true);
            this._warnOnceCheckbox.destroy();
            delete this._warnOnceCheckbox;
            delete this._warnOnceConnect;
    },
    alert: function(inText, nonmodal) {
        if (!this.alertDialog) {
            this.loadThemePrototypeForClass(wm.Dialog);
            this.alertDialog = new wm.GenericDialog({
                name: "alertDialog",
                _noAnimation: true,
                owner: this,
                title: wm.getDictionaryItem("wm.Application.TITLE_ALERT"),
                noEscape: false,
                width: "400px",
                height: "180px",
                button1Caption: wm.getDictionaryItem("wm.Application.CAPTION_ALERT_OK"),
                button1Close: true,
                userPrompt: ""
            });
            this.alertDialog.domNode.style.zIndex = 45;
            dojo.attr(this.alertDialog.domNode, "role", "alertdialog");
        }

        if (this.alertDialog.width != "400px") this.alertDialog.setWidth("400px"); // reset any width changes made by users
        if (dojo.isObject(inText)) inText = inText.toString();
        nonmodal = Boolean(nonmodal);
        this.alertDialog.setUserPrompt(inText);
        this.alertDialog.setModal(!nonmodal);
        this.alertDialog.show();
    },

    confirmOKFunc: null,
    confirmCancelFunc: null,
    confirm: function(inText, nonmodal, onOKFunc, onCancelFunc, optionalOKText, optionalCancelText, noshow) {
        var d = this.confirmDialogDeferred = new dojo.Deferred();
        if (!this.confirmDialog) {
            this.loadThemePrototypeForClass(wm.Dialog);
            this.confirmDialog = new wm.GenericDialog({
                name: "confirmDialog",
                _noAnimation: true,
                owner: this,
                noEscape: false,
                width: "350px",
                height: "180px",
                button1Caption: wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_OK"),
                button1Close: true,
                button2Caption: wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_CANCEL"),
                button2Close: true,
                userPrompt: "confirm..."
            });
            this.confirmDialog.domNode.style.zIndex = 50;
            this.confirmDialog.connect(this.confirmDialog, "onButton1Click", this, "confirmDialogOKClick");
            this.confirmDialog.connect(this.confirmDialog, "onButton2Click", this, "confirmDialogCancelClick");
            this.confirmDialog.connect(this.confirmDialog, "_onEsc", this, "confirmDialogCancelClick");
            dojo.attr(this.confirmDialog.domNode, "role", "alertdialog");
        }
        nonmodal = Boolean(nonmodal);
        this.confirmDialog.setUserPrompt(inText);
        this.confirmDialog.setModal(!nonmodal);
        this.confirmDialog.setShowInput(false);
        this.confirmDialog.setTitle(wm.getDictionaryItem("wm.Application.TITLE_CONFIRM"));
        this.confirmOKFunc = onOKFunc;
        this.confirmCancelFunc = onCancelFunc;
        this.confirmDialog.setButton1Caption(optionalOKText || wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_OK"));
        this.confirmDialog.setButton2Caption(optionalCancelText || wm.getDictionaryItem("wm.Application.CAPTION_CONFIRM_CANCEL"));
        if (!noshow) this.confirmDialog.show();
        return d;
    },
    prompt: function(inText, inDefaultValue, onOKFunc, onCancelFunc, optionalOKText, optionalCancelText) {
        var d = this.confirmDialogDeferred = new dojo.Deferred();
        this.confirm(inText, false, onOKFunc, onCancelFunc, optionalOKText, optionalCancelText, true);
        this.confirmDialog.setShowInput(true);
        this.confirmDialog.setTitle(wm.getDictionaryItem("wm.Application.TITLE_CONFIRM"));
        this.confirmDialog.setInputDataValue(inDefaultValue || "");
        this.confirmDialog.show();
        return d;
    },
    confirmDialogOKClick: function() {
        if (this.confirmDialog.showInput) {
            var val = this.confirmDialog.getInputDataValue();
            if (!val) {
                this.confirmDialogDeferred.errback();
                return this.confirmDialogCancelClick();
            }
            else if (this.confirmOKFunc) {
                this.confirmOKFunc(val);
            }
            this.confirmDialogDeferred.callback(val);
        } else {
            if (this.confirmOKFunc) {
                this.confirmOKFunc();
            }
            this.confirmDialogDeferred.callback(val);
        }

    },
    confirmDialogCancelClick: function() {
        if (this.confirmCancelFunc)
            this.confirmCancelFunc();
        if (this.confirmDialogDeferred) this.confirmDialogDeferred.errback();
    },
    createToastDialog: function() {
        if (!this.toastDialog) {
            this.toastDialog = new wm.Toast({
                name: "toastDialog",
                owner: this
            });
        }
    },
    toastError: function(inMsg, optionalDuration) {
        this.createToastDialog();
        this.toastDialog.showToast(inMsg, optionalDuration || 8000, "Error");
    },
    toastWarning: function(inMsg, optionalDuration) {
        this.createToastDialog();
        this.toastDialog.showToast(inMsg, optionalDuration || 8000, "Warning");
    },
    toastSuccess: function(inMsg, optionalDuration) {
        this.createToastDialog();
        this.toastDialog.showToast(inMsg, optionalDuration || 5000, "Success");
    },
    toastInfo: function(inMsg, optionalDuration) {
        this.createToastDialog();
        this.toastDialog.showToast(inMsg, optionalDuration || 5000, "Info");
    },

    createToolTip: function(message, node, event, source) {
        if (!this.toolTipDialog) {
            this.toolTipDialog = new wm.Dialog({
                _classes: {
                    domNode: ["AppToolTip"]
                },
                title: "",
                name: "toolTipDialog",
                modal: false,
                width: "350px",
                height: "50px",
                fitToContentHeight: true,
                owner: this,
                corner: "tr",
                _fixPosition: true,
                useContainerWidget: true,
                //margin: "0,0,4,4",
                margin: "0",
                border: "1",
                padding: "4",
                manageHistory: false
            });
            this.toolTipDialog.containerWidget.destroy();
            this.toolTipDialog.useContainerWidget = false;
            delete this.toolTipDialog.containerWidget;
            delete this.toolTipDialog.containerNode;
            var html = new wm.Html({
                owner: this.toolTipDialog,
                parent: this.toolTipDialog,
                autoScroll: false,
                name: "html",
                width: "100%",
                height: "100%",
                margin: "0",
                padding: "0",
                autoSizeHeight: true
            });
            this.toolTipDialog.html = html;
        }
        this.toolTipDialog.tipOwner = source;
        if (node) {
            this.toolTipDialog.fixPositionNode = node;
        } else {
            this.toolTipDialog.fixPositionNode = null;
            var originalMouseX = this.toolTipDialog.bounds.l = event.screenX || event.clientX || event.mouseX;
            var originalMouseY = this.toolTipDialog.bounds.t = event.screenY || event.clientY || event.mouseY;
        }
        this.toolTipDialog.html.setHtml();
        this.toolTipDialog.show();
        this.toolTipDialog._cupdating = true;
        this.toolTipDialog.html.setAutoSizeWidth(false);
        this.toolTipDialog.html.setAutoSizeHeight(false);
        this.toolTipDialog.setFitToContentHeight(false);
        this.toolTipDialog.setFitToContentWidth(false);
        this.toolTipDialog.setHeight("25px");
        this.toolTipDialog.setWidth("350px");
        this.toolTipDialog.html.setHeight("100%");
        this.toolTipDialog.html.setWidth("100%");
        this.toolTipDialog._cupdating = false;
        this.toolTipDialog.renderBounds();
        this.toolTipDialog.html.setHtml(message);
        if (String(message).length < 30) {
            this.toolTipDialog.html.setAutoSizeWidth(true);
            this.toolTipDialog.setFitToContentWidth(true);
            dojo.addClass(this.toolTipDialog.domNode, "NoWrap");
        } else {
            this.toolTipDialog.html.setAutoSizeHeight(true);
            this.toolTipDialog.setFitToContentHeight(true);
            dojo.removeClass(this.toolTipDialog.domNode, "NoWrap");
        }

    	this.toolTipDialog.html.setWidth((6 + this.toolTipDialog.html.domNode.firstChild.clientWidth) + "px");
    	this.toolTipDialog.setBestWidth();

        var self = this;
        if (this._testHintConnect) dojo.disconnect(this._testHintConnect);

        this._testHintConnect = this.connect(window.document.body, "onmousemove", this, function(evt) {
            if (evt.target === this.toolTipDialog.domNode || dojo.isDescendant(evt.target, this.toolTipDialog.domNode)) return;

            /* If there is a mouse-over node, and the mouse has left the node, dismiss the tooltip */
            if (node) {
                if (evt.target != node && !dojo.isDescendant(evt.target, node)) {
                    this.hideToolTip();
                }
            }

            /* If there is no node, then just dismiss the tooltip if the mouse moves at least 20px from the location that started this tooltip */
            else if (Math.abs(evt.clientX - originalMouseX) > 20 || Math.abs(evt.clientY - originalMouseY) > 20) {
                this.hideToolTip();
            }
        });


    },
    getToolTip: function() {
        if (this.toolTipDialog) return this.toolTipDialog.userPrompt;
        return "";
    },
    hideToolTip: function() {
        dojo.disconnect(this._testHintConnect);
        delete this._testHintConnect;
        this.toolTipDialog.hide();
    },
    createMinifiedDialogPanel: function() {
        var dockHeight = parseInt(parseInt(wm.isMobile ? wm.Button.prototype.mobileHeight : wm.Button.prototype.height) * 0.8);
        dockHeight += 3; // 2 for border, 1 for padding
        this.wmMinifiedDialogPanel = new wm.Panel({
            name: "wmMinifiedDialogPanel",
            width: "100%",
            height: dockHeight + "px",
            border: "2,0,0,0",
            padding: "1,0,0,0",
            autoScroll: false,
            verticalAlign: "top",
            horizontalAlign: "left",
            layoutKind: "left-to-right",
            owner: this,
            parent: this.appRoot
        });
        //document.body.appendChild(this.wmMinifiedDialogPanel.domNode);
        //this.wmMinifiedDialogPanel.subscribe("window-resize", this, "resizeMinifiedDialogPanel");
        //this.resizeMinifiedDialogPanel();
        this.appRoot.reflow();
    },
    createMinifiedDialogLabel: function(title) {
        var l = new wm.Button({
            caption: title,
            parent: app.wmMinifiedDialogPanel,
            owner: this,
            width: "100px",
            desktopHeight: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
            border: "1"
        });
        app.wmMinifiedDialogPanel.show();
        return l;
    },
    removeMinifiedDialogLabel: function(minifiedLabel) {
        minifiedLabel.destroy();
        if (this.wmMinifiedDialogPanel) {
            this.wmMinifiedDialogPanel.setShowing(Boolean(this.wmMinifiedDialogPanel.c$.length));
        }
    },
    resizeMinifiedDialogPanel: function() {
        var b = {
            l: 0,
            t: this._page.root.bounds.h - this.wmMinifiedDialogPanel.bounds.h,
            w: this._page.root.bounds.w,
            h: 25
        };
        this.wmMinifiedDialogPanel.setBounds(b);
        this.wmMinifiedDialogPanel.renderBounds();
    },
    createLeftToRightDockingPanel: function() {
        if (!this._leftToRightDockingPanel) {
            this._leftToRightDockingPanel = new wm.Panel({
                name: "_leftToRightDockingPanel",
                width: "100%",
                height: "100%",
                border: "0",
                padding: "",
                layoutKind: "left-to-right",
                owner: this,
                parent: this.appRoot
            });
            this.appRoot.moveControl(this._leftToRightDockingPanel, this.appRoot.indexOfControl(this.pageContainer));
            this.pageContainer.setParent(this._leftToRightDockingPanel);
        }
    },
    dockDialog: function(inDialog, inEdge) {
        if (inEdge == "l" || inEdge == "r") {
            this.createLeftToRightDockingPanel();
        }
        var parentPanel;
        var created = false;
        switch (inEdge) {
            case "t":
                if (this._topDock) {
                    parentPanel = this._topDock;
                } else {
                    created = true;
                    parentPanel = this._topDock = new wm.Panel({
                        owner: this,
                        name: "_topDock",
                        width: "100%",
                        height: "100px",
                        border: "0",
                        padding: "",
                        layoutKind: "left-to-right",
                        parent: this.appRoot
                    });
                    this.appRoot.moveControl(parentPanel, 0);
                    this._topSplitter = new wm.Splitter({
                        _classes: {
                            domNode: ["docksplitter"]
                        },
                        owner: this,
                        parent: this.appRoot
                    });
                    this.appRoot.moveControl(this._topSplitter, 1);
                    this._topSplitter.findLayout();
                }
                break;
            case "b":
                if (this._bottomDock) {
                    parentPanel = this._bottomDock;
                } else {
                    created = true;
                    parentPanel = this._bottomDock = new wm.Panel({
                        owner: this,
                        name: "_bottomDock",
                        width: "100%",
                        height: "100px",
                        border: "0",
                        padding: "",
                        layoutKind: "left-to-right",
                        parent: this.appRoot
                    });
                    if (this.wmMinifiedDialogPanel) {
                        this.appRoot.moveControl(parentPanel, this.wmMinifiedDialogPanel.getIndexInParent());
                    }
                    this._bottomSplitter = new wm.Splitter({
                        _classes: {
                            domNode: ["docksplitter"]
                        },
                        owner: this,
                        parent: this.appRoot
                    });
                    this.appRoot.moveControl(this._bottomSplitter, parentPanel.getIndexInParent());
                    this._bottomSplitter.findLayout();
                }
                break;
            case "l":
                if (this._leftDock) {
                    parentPanel = this._leftDock;
                } else {
                    created = true;
                    parentPanel = this._leftDock = new wm.Panel({
                        owner: this,
                        name: "_leftDock",
                        width: "150px",
                        height: "100%",
                        border: "0",
                        padding: "",
                        layoutKind: "top-to-bottom",
                        parent: this._leftToRightDockingPanel
                    });
                    this._leftToRightDockingPanel.moveControl(parentPanel, 0);
                    this._leftSplitter = new wm.Splitter({
                        _classes: {
                            domNode: ["docksplitter"]
                        },
                        owner: this,
                        parent: this._leftToRightDockingPanel
                    });
                    this._leftToRightDockingPanel.moveControl(this._leftSplitter, 1);
                    this._leftSplitter.findLayout();
                }
                break;
            case "r":
                if (this._rightDock) {
                    parentPanel = this._rightDock;
                } else {
                    created = true;
                    this._rightSplitter = new wm.Splitter({
                        _classes: {
                            domNode: ["docksplitter"]
                        },
                        owner: this,
                        parent: this._leftToRightDockingPanel
                    });
                    parentPanel = this._rightDock = new wm.Panel({
                        owner: this,
                        name: "_rightDock",
                        width: "150px",
                        height: "100%",
                        border: "0",
                        padding: "",
                        layoutKind: "top-to-bottom",
                        parent: this._leftToRightDockingPanel
                    });

                    this._rightSplitter.findLayout();

                }
                break;
        }
        inDialog.setParent(parentPanel);
        switch (inEdge) {
            case "t":
            case "b":
                if (inDialog.minHeight > parentPanel.bounds.h) parentPanel.setHeight(inDialog.minHeight + "px");
                inDialog.setWidth("100%");
                break;
            case "l":
            case "r":
                if (inDialog.minWidth > parentPanel.bounds.w) parentPanel.setWidth(inDialog.minWidth + "px");
                inDialog.setHeight("100%");
                break;
        }
        if (created) {
            this.appRoot.reflow();
        } else if (!parentPanel.showing) {
            parentPanel.show();
            if (parentPanel == this._topDock) this._topSplitter.show();
            else if (parentPanel == this._bottomDock) this._bottomSplitter.show();
            else if (parentPanel == this._rightDock) this._rightSplitter.show();
            else if (parentPanel == this._leftDock) this._leftSplitter.show();

        } else {
            parentPanel.reflow();
        }
    },
    removeDockedDialog: function(inDialog) {
        var parent = inDialog.parent;
        inDialog.setParent(null);
        if (parent.c$.length == 0) {
            parent.hide();
            if (parent == this._topDock) this._topSplitter.hide();
            else if (parent == this._bottomDock) this._bottomSplitter.hide();
            else if (parent == this._rightDock) this._rightSplitter.hide();
            else if (parent == this._leftDock) this._leftSplitter.hide();
        }
    },
    getDeviceSize: function() {
        return this.appRoot ? this.appRoot.deviceSize : "1000";
    },

    addHistory: function(state, noBack) {
        if (this.history && !this._handlingBack) {
            try {
                if (!noBack) this.history.push({
                    id: state.id,
                    options: state.options
                });

                var currentState = {};
                this._handlingBack = true;
                this._generateStateUrl(currentState);
                delete this._handlingBack;

                /* Using state.title, a user who views their history can see MyPage#SomeHint in their history instead of just 20 "MyPage" repeated without differentiation */

                if (window.history.pushState) window.history.pushState(null, "" /*state.title*/ , wm.isEmpty(currentState) ? "#" : "#" + dojo.toJson(currentState));

                /* No longer updating the title; this is great for populating the back history, but as we don't support jumping around the back history,
         * more misleading than helpful.
        if (state.title) {
            var title = dojo.query("title")[0];
            if (title) {
            var titleHtml = title.innerHTML.replace(/\#.*$/,"");
            title.innerHTML = titleHtml +  "#" + state.title;
            }
        }
        */


            } catch (e) {}
        }
    },
    _generateStateUrl: function() {},
    generateStateUrl: function(currentState) {
    },
    _onBack: function(inEvent) {
        /* onBack is called as a result of loading the page as well as from hitting the back button */
        if (this._initializingBack) {
            delete this._initializingBack;
            return;
        }
        var state = this.history.pop();
        try {
            if (state) {
                var id = state.id;
                // TODO: comp.destroy() should strip out component from history
                // so nothing points to destroyed components
                var c = this.getValueById(id);
                if (c instanceof wm.Component && c.handleBack) {
                    try {
                        this._handlingBack = true;
                        if (!c.handleBack(state.options)) this._onBack();
                    } catch (e) {}
                    delete this._handlingBack;
                } else if (this.history.length) {
                    this._onBack();
                }
            }
        } catch (e) {}

    }
});

wm.Application.themePrototypeData = {};
wm.Application.themeData = {};



}

if(!dojo._hasResource["dojox.uuid.generateRandomUuid"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.uuid.generateRandomUuid"] = true;
dojo.provide("dojox.uuid.generateRandomUuid");

dojox.uuid.generateRandomUuid = function(){
	// summary:
	//		This function generates random UUIDs, meaning "version 4" UUIDs.
	// description:
	//		A typical generated value would be something like this:
	//		"3b12f1df-5232-4804-897e-917bf397618a"
	//
	//		For more information about random UUIDs, see sections 4.4 and
	//		4.5 of RFC 4122: http://tools.ietf.org/html/rfc4122#section-4.4
	//
	//		This generator function is designed to be small and fast,
	//		but not necessarily good.
	//
	//		Small: This generator has a small footprint. Once comments are
	//		stripped, it's only about 25 lines of code, and it doesn't
	//		dojo.require() any other modules.
	//
	//		Fast: This generator can generate lots of new UUIDs fairly quickly
	//		(at least, more quickly than the other dojo UUID generators).
	//
	//		Not necessarily good: We use Math.random() as our source
	//		of randomness, which may or may not provide much randomness.
	// examples:
	//		var string = dojox.uuid.generateRandomUuid();
	var HEX_RADIX = 16;

	function _generateRandomEightCharacterHexString(){
		// Make random32bitNumber be a randomly generated floating point number
		// between 0 and (4,294,967,296 - 1), inclusive.
		var random32bitNumber = Math.floor( (Math.random() % 1) * Math.pow(2, 32) );
		var eightCharacterHexString = random32bitNumber.toString(HEX_RADIX);
		while(eightCharacterHexString.length < 8){
			eightCharacterHexString = "0" + eightCharacterHexString;
		}
		return eightCharacterHexString; // for example: "3B12F1DF"
	}

	var hyphen = "-";
	var versionCodeForRandomlyGeneratedUuids = "4"; // 8 == binary2hex("0100")
	var variantCodeForDCEUuids = "8"; // 8 == binary2hex("1000")
	var a = _generateRandomEightCharacterHexString();
	var b = _generateRandomEightCharacterHexString();
	b = b.substring(0, 4) + hyphen + versionCodeForRandomlyGeneratedUuids + b.substring(5, 8);
	var c = _generateRandomEightCharacterHexString();
	c = variantCodeForDCEUuids + c.substring(1, 4) + hyphen + c.substring(4, 8);
	var d = _generateRandomEightCharacterHexString();
	var returnValue = a + hyphen + b + hyphen + c + d;
	returnValue = returnValue.toLowerCase();
	return returnValue; // String
};

}

if(!dojo._hasResource["wm.base.components.JsonRpcService"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["wm.base.components.JsonRpcService"] = true;
/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
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

dojo.provide("wm.base.components.JsonRpcService");




dojo.rpc.JsonService.extend({
	lastSubmissionId: Math.floor(Math.random(new Date().getTime()) * 1000000)
});


wm.inflight = {
    _inflight: [],
    _inflightNames: [],
    getCount: function() {
        return this._inflight.length;
    },
    change: function() {},
    // inName: this.service,
    // this.name, inArgs, inMethod, invoker);
    add: function(inDeferred, inName, optName, inArgs, inMethod, invoker) {
        inDeferred._timeStamp = new Date().getTime();
        if (dojo.indexOf(this._inflight, inDeferred) != -1) return;
        this._inflight.push(inDeferred);

        var name;
        if (inName != "runtimeService") {
            name = inName + "." + inMethod;
        } else if (optName) {
            name = optName + "." + inMethod;
        } else if (inArgs[0]) {
            name = inArgs[0] + ": " + inArgs[1];
        } else {
            name = "LazyLoad: " + inArgs[1];
        }


        this._inflightNames.push(name);
        inDeferred.addBoth(dojo.hitch(this, "remove", inDeferred));
        this.change();
    },
    remove: function(inDeferred, inResult) {
        var i = dojo.indexOf(this._inflight, inDeferred);
        if (i == -1) return;
        var delta = new Date().getTime() - inDeferred._timeStamp;
        //console.info("deferred inflight for ", delta + "ms", inDeferred);
        this._inflight.splice(i, 1);
        this._inflightNames.splice(i, 1);
        this.change();
        return inResult;
    },
    cancel: function() {
        dojo.forEach(this._inflight, function(d) {
            if (!d.canceller) d.canceller = function() {};
            d.cancel();
        });
    }
}

dojo.subscribe("wm-unload-app", wm.inflight, "cancel");

dojo.declare("wm.JsonRpc", dojo.rpc.JsonService, {
    smd: null,
    required: false,
    sync: false,
    _designTime: false,
    requestHeaders: {},
    bind: function(method, parameters, deferredRequestHandler, url){
        //console.log("method", method, "parameters", parameters || [], "url", url || this.serviceUrl);
        url = url || this.serviceUrl;

        //if a query is running for salesforceService, the query service must be provided by the customer application,
        //not from Studio.
        if (method == "runQuery" && parameters[0] == SALESFORCE_SERVICE) {
            url = wm.services.getService(SALESFORCE_SERVICE)._service.serviceUrl;
        }
        if (!url)
            return;
            var requestHeaders = this._requestHeaders || this.requestHeaders;
        var props = {
            url: url||this.serviceUrl,
            postData: this.createRequest(method, parameters || []),
            contentType: this.contentType,
            timeout: this.timeout,
            handleAs: "json",
            sync: this.sync,
            headers: requestHeaders
        }

            if (this._requestHeaders) delete this._requestHeaders; // these headers are for this request only
            if (this._designTime && studio.isCloud()) {
            var postData = props.postData;
            props.postData = this.createRequest("remoteRESTCall", [props.url.replace(/^.*\//, studio._deployedUrl + "/"), postData, "POST", "application/json"]);
            //props.postData = dojo.toJson({"params": [props.url.replace(/^.*\//, studio._deployedUrl + "/"), dojo.toJson(postData)], "method": "remoteRESTCall", "id":1});
            props.url = "waveMakerService.json";
        }

        if (wm.xhrPath) {
        props.url = wm.xhrPath + props.url;
        }
        var def = dojo.rawXhrPost(props);
        if (this._designTime && studio.isCloud()) {
        var newdef = new dojo.Deferred();
        def.addCallbacks(
            function(inResult) {
            newdef.callback(dojo.fromJson(inResult.result));
            },
            function(inError) {
            newdef.errback(inError);
            });
        def = newdef; // return the new deferred, which only notifies after we've decoded the data
        }
        deferredRequestHandler = dojo.mixin(deferredRequestHandler, def.ioArgs);

        def.addCallbacks(this.resultCallback(deferredRequestHandler), this.errorCallback(deferredRequestHandler));
    },
    // override dojo default, we want full result object, not just {result: ...}
    parseResults: function(obj){
        return obj;
    },
    addRequestHeader: function(headerName, headerValue) {
    if (!this.requestHeaders) this.requestHeaders = {};

    /* Temporary request header object */
    if (!this._requestHeaders) {
        this._requestHeaders = dojo.clone(this.requestHeaders);
    }
    this._requestHeaders[headerName] = headerValue;
    },
    setRequestHeaders: function(reqHeaders) {
        this._requestHeaders = reqHeaders;
    },

    /* Override parent method which passes data.message and therefore loses the fact that its actually an instance of Error */
errorCallback: function(/* dojo.Deferred */ deferredRequestHandler){
        // summary:
        //      create callback that calls the Deferres errback method
        //  deferredRequestHandler: Deferred
        //      The deferred object handling a request.
        return function(data){
            deferredRequestHandler.errback(data);
        };
    }
});

dojo.declare("wm.JsonRpcService", wm.Service, {
    operations: "",
    ready: false,
    service: "",
    // 0 indicates no timeout.
    timeout: 0,
    errorLevel: 10,
    sync: false,
    url: "",
    _methods: [],
    _operations: {},
    _service: null,
    init: function() {
        //dojo.mixin(this.readonlyProps, { methods: 1, ready: 1 });
        this.inherited(arguments);
        this.initService();
    },
    setSync: function(inSync) {
        this.sync = inSync;
    },
    getServiceRoot: function() {
        return this.getPath() + "services/";
    },
    getJsonPath: function() {
        var p = '';
        // this window.studio test is needed for the login page to run when not in debug mode
        if(this.isDesignLoaded() && window.studio && studio.project) {
            p = '/' + studio.project.getProjectPath() + '/';
        }
        return p;
    },
    // FIXME: we're making a new service object for every rpc service.
    // This is unnecessary and one side effect is that the smd is re-requested for each rpc service
    // at the least we could cache this smd data to avoid re-retrieving it.
    // it seems unnecessary to have more than one JsonRpc per service
    // and it may be unnecessary to have more than one JsonRpcService (ever) per service
    // JsonRpcService has a few properties that make collapsing the number of them non-trivial (e.g. sync, timeout)
    initService: function() {
    var n = this.service || this.name;
    var rand = this.owner && this.isDesignLoaded() && studio.application ? studio.application.getFullVersionNumber() : (app && !window["studio"] ? app.getFullVersionNumber() : new Date().getTime());
    var cachedName = this.url || n + ".smd";
    var url = this.url || (n && (this.getServiceRoot() + n + ".smd"));
/* Don't do this; xhrpath is used in phonegap apps; all smd files reside locally on device
    if(wm.xhrPath){
        url=wm.xhrPath+url;
    }*/
    this._service = null;
    if (url) {
        try{
        /* SMD files change at design time, never use a cached SMD file at design time */
        if (window["studio"]) {
            this._service = new wm.JsonRpc(url + "?rand=" + rand);
        } else if (wm.JsonRpcService.smdCache[url]) {
            this._service = wm.JsonRpcService.smdCache[url];
        } else if (wm.JsonRpcService.smdCache[cachedName]) {
            var cachedStruct = wm.JsonRpcService.smdCache[cachedName];
            this._service = new wm.JsonRpc({methods: cachedStruct.methods,
                            serviceType: cachedStruct.serviceType,
                            serviceUrl: url.replace(/\.smd/,".json")});
        } else {
            var randomParam = window["PhoneGap"] ? "" : "?rand=" + rand
            this._service = new wm.JsonRpc(url + randomParam);
            this._service.serviceUrl = "services/" + this._service.serviceUrl;
        }
        wm.JsonRpcService.smdCache[url] = this._service;
            //The following lines are not being used now.  They may be used in the future to differenciate requests from Studio from
            //requests deployed application.
            if (this._designTime)
            this._service._designTime = true;

            this._service.timeout = this.timeout;
            this.ready = Boolean(this._service && this._service.smd);
            if (this.ready) {
            this._service.serviceUrl = this.getJsonPath() + this._service.serviceUrl;
            this.listOperations();
            }
        }catch(e){
        console.debug(e);
        }
    }
    },
    setName: function(inName) {
        this.inherited(arguments);
        if (!this.url)
            this.initService();
    },
    ensureArgs: function(inMethod, inArgs) {
        if (inMethod in this._operations && dojo.isArray(inArgs)) {
            var op = this._operations[inMethod], argCount=0;
            if (op) {
                for (var o in op.parameters)
                    argCount++;
                for (var i=inArgs.length; i<argCount; i++)
                    inArgs.push(null);
            }
        }
    },
    invoke: function(inMethod, inArgs, owner, invoker) {
        this.invoke(inMethod, inArgs, owner, invoker, false, false, null);
    },
    invoke: function(inMethod, inArgs, owner, invoker, inLoop, inLongDeferred, requestId) {
        if (!this._service)
            return null;
        this._service.sync = this.sync;
        this.ensureArgs(inMethod, inArgs);
        //if (wm.logging)
            this.debugLastMethod = inMethod;

        this.result = null;
        this.error = null;

        var d;
        this._service._designTime = this._isDesignLoaded;
        if (wm.connectionTimeout > 0 ) {
            if (inLoop) {
                this._service.addRequestHeader("wm-polling-request", requestId);
            } else {
                requestId = dojox.uuid.generateRandomUuid();
                this._service.addRequestHeader("wm-initial-request", requestId);
            }

            d = this._service.callRemote(inMethod, inArgs || []);

            var longDeferred = inLongDeferred || new dojo.Deferred();
            d.addCallbacks(dojo.hitch(this, "onLongResponseTimeResult", inMethod, inArgs, owner, invoker, inLoop, requestId, longDeferred, d),
                dojo.hitch(this, "onLongResponseTimeError", inMethod, inArgs, owner, invoker, inLoop, requestId, longDeferred, d));
            d = longDeferred;
        } else {
            d = this._service.callRemote(inMethod, inArgs || []);
            d.addCallbacks(dojo.hitch(this, "onResult"), dojo.hitch(this, "onError"));
        }
        if (invoker && app.debugDialog) invoker._jsonRpcServiceDeferred = d;
        wm.inflight.add(d, this.service, this.name, inArgs, inMethod, invoker);
        this.inflight = true;
        return d;
    },
    request: function(inMethod, inArgs, inResult, inError, invoker) {
        var d = this.invoke(inMethod, inArgs, null, invoker);
        if (inResult) {
            if (dojo.isFunction(inResult))
                d.addCallback(inResult);
            else
                d.addCallback(this.owner, inResult);
        }
        if (inError) {
            if (dojo.isFunction(inError))
                d.addErrback(inError);
            else
                d.addErrback(this.owner, inError);
        }
        return d;
    },
    // force a sync call, irrespective of our sync setting
    requestSync: function(inMethod, inArgs, inResult, inError, invoker) {
        var s = this.sync;
        this.sync = true;
            var d = this.request.apply(this, [inMethod, inArgs, inResult, inError, null, invoker]);
        this.sync = s;
        return d;
    },
    // force an async call, irrespective of our sync setting
        requestAsync: function(inMethod, inArgs, inResult, inError, invoker) {
        var s = this.sync;
        this.sync = false;
        var
            cb = inResult ? dojo.hitch(this, function() {
                this.sync = s;
                return inResult.apply(this, dojo._toArray(arguments));
            }) : null,
            eb = inError ? dojo.hitch(this, function() {
                this.sync = s;
                return inError.apply(this, dojo._toArray(arguments));
            }) : null;
             return this.request(inMethod, inArgs, cb, eb, null, invoker);
    },
    getResultSync: function(inMethod, inArgs) {
        var d = this.requestSync(inMethod, inArgs);
        return d.results[0];
    },
    onLongResponseTimeResult: function(inMethod, inArgs, owner, invoker, inLoop, requestId, longDeferred, deferred, inResult) {
        var r;
        this.inflight = false;
        var callInvoke = false;
        if (inLoop) {
                var processStatus = deferred.xhr.getResponseHeader("wm-json-response-status");
            if (processStatus == "processing") {
                callInvoke = true;
            } else if (processStatus == "error") {
                return this.onLongResponseTimeError(inMethod, inArgs, owner, invoker, inLoop, requestId, longDeferred, inResult.result);
            } else if (processStatus == "done") {
                r = this.fullResult = inResult;
                this.result = (r || 0).result;
                longDeferred.callback(this.result);
            } else {
                callInvoke = true;
            }
            if (callInvoke) {
                wm.onidle(this, function() {
                    this.invoke(inMethod, inArgs, owner, invoker, true, longDeferred, requestId);
                });
            }
        } else {

            longDeferred.callback(this.onResult(inResult));
        }
    },
    onLongResponseTimeError: function(inMethod, inArgs, owner, invoker, inLoop, requestId, longDeferred, deferred, inError) {
         // happens with livelayout requests from studio
        if (!deferred.xhr) {
            longDeferred.errback(inError);
           return;
        }
        if ((deferred.xhr.status == 504) || (deferred.xhr.status == 502 &&
                deferred.xhr.getResponseHeader("X-Squid-Error") === "ERR_ZERO_SIZE_OBJECT 0" )) {
            this.invoke(inMethod, inArgs, owner, invoker, true, longDeferred, requestId);
        } else {
            longDeferred.errback(this.onError(inError));
        }
    },

    onResult: function(inResult) {
        this.inflight = false;
        var r = this.fullResult = inResult;
        this.result = (r || 0).result;
/*
        if (djConfig.isDebug && !dojo.isFF) {
            console.group("Service Call Completed: " + this.name + "." + this.debugLastMethod);
            if (this.result) {
                console.log(this.result);
            } else {
                console.log("Response was null");
            }
            console.groupEnd();
        }
        */
        return this.result;
    },
    onError: function(inError) {
        this.inflight = false;
        var message = inError != null && dojo.isObject(inError) ? inError.message : inError;
        try {
        if (!inError || message.match(/No ServiceWire found/) && !djConfig.isDebug)
            return;
        /* If a headless app sends a request, it may not have wm.connectionTimeout set; this error detects that and fixes it */
        if (message.indexOf("Invalid Long Polling Request:") == 0) {
            var matches = message.match(/Timeout for this server is: (\d+)/);
            wm.connectionTimeout = matches ? Number(matches[1]) : 30;
            return;
        }

        if (console.groupCollapsed)
                console.groupCollapsed("Service Call Failed: " + this.name + "." + this.debugLastMethod);
        else
                console.group("Service Call Failed: " + this.name + "." + this.debugLastMethod);

        if (message)
          console.error(message);
                console.groupEnd();
        var errCodes = message.match(/(\d+)$/);
        var errCode = (errCodes) ? errCodes[0] : "";

        // If the failer is a security access error, AND if its NOT a security error that comes from live view
        // (happens when a project accesses the server while running within studio), then tell the user to log back in.
        // Also don't repeat this alert more than once every 3 minutes (it takes 4 server accesses to open a page, so thats 4 alerts in a row!)
        if (errCode == 403) {
            dojo.publish("session-expiration", []);
            if (app) app._onSessionExpiration();
        }
        } catch(e) {
        if (wm.logging) {
            console.dir(e);
            console.dir(inError);
        }
        }
        this.reportError(inError);
        return this.error = inError;
    },

    reportError: function(inError) {
        var m = dojo.isString(inError) ? inError : (inError.message ? "Error: " + inError.message : "Unspecified Error");
        m = (this.name ? this.name + ": " : "") + m;
        if (this.errorLevel > 5) {
            if (!inError.dojoType == "cancel")
                console.error(m);
        } else if (this.errorLevel > 0)
            wm.logging && console.debug(m);
    },
    paramArrayToHash: function(inParams) {
        var hash = {};
        for (var i=0, p; (p=inParams[i]); i++)
            hash[p.name] = { type: p.type, hidden: p.hidden };
        return hash;
    },
    listOperations: function() {
        this._methods = [];
        this._operations = {};
        var m = (this._service.smd||0).methods || [];
        for (var i=0, op; (op=m[i]); i++){
            this._methods.push(op.name);
            this._operations[op.name] = {
                parameters: this.paramArrayToHash(op.parameters || []),
                returnType: op.returnType || "any",
                operationType: op.operationType || ""
                //responseTime: op.responseTime || ""
            };
        }
        this._methods.sort();
    },
    makePropEdit: function(inName, inValue, inEditorProps) {
        if (inName == "operations")
            return new wm.SelectMenu(dojo.mixin(inEditorProps, {options:this._methods || []}));
        return this.inherited(arguments);
    }
});

wm.Object.extendSchema(wm.JsonRpcService, {
    ready: { ignore: 1 }
});

wm.JsonRpcService.description = "Any JsonRpc service.";
wm.JsonRpcService.smdCache = {};

}


dojo.i18n._preloadLocalizations("dojo.nls.lib_build_phonegap", ["ROOT","ar","ca","cs","da","de","de-de","el","en","en-au","en-gb","en-us","es","es-es","fi","fi-fi","fr","fr-fr","he","he-il","hu","it","it-it","ja","ja-jp","ko","ko-kr","nb","nl","nl-nl","pl","pt","pt-br","pt-pt","ru","sk","sl","sv","th","tr","xx","zh","zh-cn","zh-tw"]);
