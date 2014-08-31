This is a simple Chrome and Firefox extension that inserts a diamond watermark into Stack Exchange™ private chat rooms to help make folks more aware of which rooms are private and which are not. It's built using [OpenForge](https://github.com/trigger-corp/browser-extensions), an open source framework for building browser extensions. 


##Installation

###Chrome

- [Download the Chrome Extension CRX](https://github.com/jamesmortensen/diamond-chat-aware/blob/master/release/chrome/Diamond%20Chat%20Aware.crx?raw=true).
- Chrome will warn you about being unable to install. Please disregard this message.
- Find the downloaded file -- `Diamond Chat Aware.crx` -- in your downloads folder.
- In Chrome, open Tools->Extensions to see the list of all installed Chrome extensions.
- Drag and drop the CRX file and drop it in the center of the Chrome window.
- Once installed, reload all your private chat windows to see diamonds.


###Firefox

- [Download the Firefox Extension](https://github.com/jamesmortensen/diamond-chat-aware/blob/master/release/firefox/Diamond%20Chat%20Aware.xpi?raw=true).
- Download the XPI.
- Locate the `Diamond Chat Aware.xpi` in your downloads file.
- In Firefox, open Tools -> Add-ons.
- Click the Gear drop-down at the top, inside the Add-ons page, next to "Search all add-ons".
- Select "Install Add-on From File", and find `Diamond Chat Aware.xpi`.
- Once installed, reload all your private chat windows to see diamonds.


###Internet Explorer (Experimental!)

**NOTE:** These are unsigned binaries that don't seem to work. They are here for demonstration purposes only. 

- Download the IE Binaries either for [32 bit](https://github.com/jamesmortensen/diamond-chat-aware/blob/internet-explorer/release/ie/Diamond%20Chat%20Aware-0.3-x86_exe?raw=true) or [64 bit](https://github.com/jamesmortensen/diamond-chat-aware/blob/internet-explorer/release/ie/Diamond%20Chat%20Aware-0.3-x64_exe?raw=true).
- Locate the downloaded file(s). 
- To allow your browser to download them, I renamed `*.exe` to `*_exe`. Once downloaded, rename the files back to `*.exe`
- As a safeguard, if you are on Windows, ***please scan these files for viruses!*** Whenever downloading stuff from the Internet, ***please be safe!***
- Execute the binary to install the browser helper object in Internet Explorer.
- Observe that, while the add-on gets installed, and is listed as "enabled", it doesn't work. Furthermore, there are no native tools inside Internet Explorer to further debug the add-on.


##Legal

*This product is not affiliated with Stack Exchange™. [The Stack Exchange™ name and logos are trademarks of Stack Exchange Inc. The names and logos for sites and products operating on the Stack Exchange™ network are also trademarks of Stack Exchange™ Inc.](http://stackexchange.com/legal/trademark-guidance)*
