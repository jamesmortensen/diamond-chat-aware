// main.js


forge.logging.debug("Add JavaScript to js/main.js!");
forge.logging.debug("Add diamond placeholders: placeholder=♦");


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
 * If the room is "locked", show the diamond watermark, and populate the textbox with diamonds.
 */
var isLockedRoom = document.querySelector('.sprite-sec-private');
if(isLockedRoom !== null) {

    /**
     * Inject watermark into page.
     */
    //forge.tools.getURL("images/diamond.png", injectElementInPage('img', 'chat', 'diamondchat'));
    //forge.tools.getURL("images/diamond.png", injectElementInPage('img', 'bubble', 'diamondtextbox'));
    injectElementInPage('p', 'bubble', 'diamondtextbox', '', '♦')();

    /**
     * Inject CSS stylesheet onto page.
     */
    forge.tools.getURL("css/diamond.css", function (myUrl) {
        var url = myUrl;
        var headContainer = document.head;
        var diamondCss = document.createElement('link');
        diamondCss.rel = 'stylesheet';
        diamondCss.href = url;
        headContainer.appendChild(diamondCss);
    });
    
}

