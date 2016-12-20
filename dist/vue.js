(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue"] = factory();
	else
		root["Vue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Zxr实例构造函数
	 * @param options
	 * @constructor
	 */
	function Zxr(options) {
	    if (options == null) throw new Error('an object param named must be pass in!');
	    var el = options.el;
	    el = document.querySelector(el);
	    this.$data = options.data;
	    this.__walker(el);
	}
	/**
	 * 插值处理函数
	 * 将字符串中的{{xx}}替换为实际的值
	 */
	Zxr.prototype.__insertVal = function(txt) {
	    var gRule = /\{\{\s*(\w+)\s*}}/g,
	        rule = /\{\{\s*(\w+)\s*}}/,
	        matchResult = gRule.exec(txt),
	        data = this.$data;
	    if (!matchResult) return txt;
	    var keys = matchResult.slice(1);
	    for (var i = 0,len = keys.length;i < len;i++) {
	        var key = keys[i];
	        var result = key in data? data[key]: '';
	        txt = txt.replace(rule, result);
	    }
	    return txt;
	};
	/**
	 * 节点遍历处理函数
	 */
	Zxr.prototype.__walker = function(el) {
	    var attrs = el.attributes,
	        childNodes = el.childNodes;
	    var parseFn = function(arrayLike) {
	        for(var i = 0,len = arrayLike.length;i < len;i++) {
	            var item = arrayLike[i];
	            // 属性节点
	            if (item.nodeType === 2) item.value = this.__insertVal(item.value);
	            // 文本节点
	            if (item.nodeType === 3) item.textContent = this.__insertVal(item.textContent);
	            // 递归处理element节点和document节点
	            if (item.nodeType === 1 || item.nodeType === 9) this.__walker(item);
	        }
	    }.bind(this);
	    // 遍历属性处理属性插值
	    if (attrs.length > 0) parseFn(attrs);
	    // 遍历子节点，处理节点插值
	    if (childNodes.length > 0) parseFn(childNodes);
	};
	module.exports = Zxr;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue.js.map