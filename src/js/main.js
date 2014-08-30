// main.js


forge.logging.debug("Add JavaScript to js/main.js!");
forge.logging.debug("Add diamond placeholders: placeholder=♦");


/**
 * Create a string of chars of length iterations and return it.
 */
function printerate(char, iterations) {
	var text = '';
    for(var i = 0; i < iterations; i++){
        text += char;
    }
    return text;
}


/**
 * If the room is "locked", show the diamond watermark, and populate the textbox with diamonds.
 */
var isLockedRoom = document.querySelector('.sprite-sec-private');
if(isLockedRoom !== null) {
	document.getElementById('input').setAttribute('placeholder', printerate('♦', 356));

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


