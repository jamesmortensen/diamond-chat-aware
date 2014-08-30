// main.js


forge.logging.debug("Add JavaScript to js/main.js!");
forge.logging.debug("Add diamond placeholders: placeholder=♦");


/**
 * If the room is "locked", show the diamond watermark, and populate the textbox with diamonds.
 */
var isLockedRoom = document.querySelector('.sprite-sec-private');
if(isLockedRoom !== null) {

    /**
     * Inject watermark into page.
     */
    forge.tools.getURL("images/diamond.png", function (myUrl) {
        var url = myUrl;
        var chatContainer = document.getElementById('chat');
        var diamondImg = document.createElement('img');
        diamondImg.src = url;
        diamondImg.className = 'diamondchat';
        chatContainer.appendChild(diamondImg);
    });

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


