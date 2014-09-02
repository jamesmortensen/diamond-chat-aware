This is a simple Chrome and Firefox extension (and a userscript) that inserts a diamond watermark into Stack Exchange™ private chat rooms to help make folks more aware of which rooms are private and which are not. The extensions are built using [OpenForge](https://github.com/trigger-corp/browser-extensions), an open source framework for building browser extensions. 

For more information, on what this does, see the [Diamond Chat Aware Stack Apps page](http://stackapps.com/q/4862/4812).


##Installation

###Chrome

Note that you can install directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/diamond-chat-aware/idcnhgnojajmgfngnkfalkadpfpkacnk). However, if you'd like to install the package from GitHub, please follow the instructions below: 

- [Download the Chrome Extension CRX](https://github.com/jamesmortensen/diamond-chat-aware/blob/master/release/chrome/Diamond%20Chat%20Aware.crx?raw=true).
- Chrome will warn you about being unable to install. Please disregard this message.
- Find the downloaded file -- `Diamond Chat Aware.crx` -- in your downloads folder.
- In Chrome, open Tools->Extensions to see the list of all installed Chrome extensions.
- Drag and drop the CRX file and drop it in the center of the Chrome window.
- Once installed, reload all your private chat windows to see diamonds.


###Firefox

Note that -- assuming Mozilla has not removed the extension due to OpenForge failing the review process -- you can install directly from the [Mozilla Addons page](https://addons.mozilla.org/en-US/firefox/addon/diamondchat/). However, if you'd like to install the package from GitHub, or if the extension was removed, please follow the instructions below: 

- [Download the Firefox Extension](https://github.com/jamesmortensen/diamond-chat-aware/blob/master/release/firefox/Diamond%20Chat%20Aware.xpi?raw=true).
- Download the XPI.
- Locate the `Diamond Chat Aware.xpi` in your downloads file.
- In Firefox, open Tools -> Add-ons.
- Click the Gear drop-down at the top, inside the Add-ons page, next to "Search all add-ons".
- Select "Install Add-on From File", and find `Diamond Chat Aware.xpi`.
- Once installed, reload all your private chat windows to see diamonds.


###Userscript

An alternative to installing as a browser extension is to install as a userscript, either by dragging the userscript and dropping into Chrome's Tools->Extensions, using a script manager such as [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en), or by using [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) in Firefox and other browsers that support userscripts.

- Click on the [diamondchataware.user.js](https://github.com/jamesmortensen/diamond-chat-aware/blob/master/userscript/diamondchataware.user.js) link to enter the file view page. 
- In the file view page for the userscript, click the "raw" button to download the script.
- Your browser -- especially Chrome/Chromium -- may warn you about not being able to install userscripts. Ignore the warning.
- Look for the script in your downloads folder, and use whatever method your script manager uses to install the script. In many cases, you can simply drag and drop the script into Greasemonkey or the Tools->Extension page of Chrome, or by copy/pasting the actual code into Tampermonkey itself.


##Legal

*This product is not affiliated with Stack Exchange™. [The Stack Exchange™ name and logos are trademarks of Stack Exchange Inc. The names and logos for sites and products operating on the Stack Exchange™ network are also trademarks of Stack Exchange™ Inc.](http://stackexchange.com/legal/trademark-guidance)*
