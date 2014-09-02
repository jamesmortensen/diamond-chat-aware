// ==UserScript==
// @name           Diamond Chat Aware Userscript
// @namespace      http://stackapps.com
// @author         jmort253 (http://stackoverflow.com/users/552792)
// @description    In chat rooms that are mod-only, show a diamond watermark.
// @homepage       http://stackapps.com/q/4862/4812
// @copyright      2014 James Mortensen (http://stackoverflow.com/users/552792/jmort253) 
// @license        MIT License
// @version        0.3
// @include        http://chat.stackexchange.com/*
// @include        http://chat.stackoverflow.com/*
// @include        http://chat.meta.stackexchange.com/*
// @history        0.3 initial release to the public
// ==/UserScript==


/**
 * Helper function to take an anonymous function and inject on the page as a script tag.
 *
 * @param {Function} functionToInject The function to inject in the page.
 */
function injectScript(functionToInject) {
	var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + functionToInject.toString() + ")()";
    document.body.appendChild(script);
}


/**
 * Inject the userscript behavior into the target page.
 */
injectScript(function() {

	// console.debug("Add JavaScript to js/main.js!");
	// console.debug("Add diamond placeholders: placeholder=♦");


	/**
	 * Helper to inject a resource into an element on the page. 
	 *
	 * @param {String} elementType p, div, input, etc.
	 * @param {String} containerId The id of the container to inject into.
	 * @param {String} elementClassName A class to append to the element for styling.
	 * @param {String} _imgId Optional id to attach to an img element added to the page.
	 * @param {String} _text Optional text to add to the injected element.
	 * @return {Function} A function to receive a resource url for injecting web-accessible images and files
	 */
	function injectElementInPage(elementType, containerId, elementClassName, _imgId, _text) {
	    return function(resourceUrl) {
	        var url = resourceUrl;
	        var container = document.getElementById(containerId);
	        var diamondElement = document.createElement(elementType);
	        if(url !== undefined)
	            diamondElement.src = url;
	        diamondElement.className = elementClassName;
	        if(_imgId)
	            diamondElement.id = _imgId;
	        if(_text)
	            diamondElement.innerHTML = _text;
	        container.appendChild(diamondElement);
	    };
	}


	/**
	 * Helper to inject CSS text into the page as a style block.
	 *
	 * @param {String} cssText The textual representation of CSS in a style block.
	 */
	function injectCssInPage(cssText) {
        var container = document.head;
        var styleElement = document.createElement('style');
        styleElement.innerHTML = cssText;
        container.appendChild(styleElement);
	}


	/**
	 * If the room is "locked", show the diamond watermark.
	 */
	var isLockedRoom = document.querySelector('.sprite-sec-private');
	if(isLockedRoom !== null) {

		/**
		 * Styling for a text-based diamond.
		 */
		var cssStyle = 
		'p.diamondtextbox {' +
			'position: absolute;'+
			'top: -2px;'+
			'font-size: 60px;'+
			'left: 335px;'+
			'opacity: 0.43;'+
			'pointer-events: none;'+
			'color: #d3d3d3;'+
		'}';
		injectCssInPage(cssStyle);

	    /**
	     * Inject watermark text into page.
	     */
	    injectElementInPage('p', 'bubble', 'diamondtextbox', '', '♦')();
	    
	}
});