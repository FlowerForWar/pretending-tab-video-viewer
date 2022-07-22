// ==UserScript==
// @name           pretending-tab-video-viewer  [DEV]
// @version        0.0.0
// @namespace      https://github.com/FlowerForWar
// @description    User Script that opens videos in tab like view
// @author         FlowerForWar
// @match          *://*/*
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM_setClipboard
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.xmlhttpRequest
// @grant          GM.setClipboard
// @run-at         document-end
// @noframes
// @compatible     edge Tampermonkey or Violentmonkey
// @compatible     firefox Greasemonkey, Tampermonkey or Violentmonkey
// @compatible     chrome Tampermonkey or Violentmonkey
// @compatible     opera Tampermonkey or Violentmonkey
// @supportURL     https://github.com/FlowerForWar/pretending-tab-video-viewer/issues
// @homepageURL    https://github.com/FlowerForWar/pretending-tab-video-viewer
// @updateURL      https://github.com/FlowerForWar/pretending-tab-video-viewer/raw/main/dist/pretending-tab-video-viewer.meta.js
// @downloadURL    https://github.com/FlowerForWar/pretending-tab-video-viewer/raw/main/dist/pretending-tab-video-viewer.user.js
// @icon           https://github.com/FlowerForWar/pretending-tab-video-viewer/blob/main/src/icons/dev.png?raw=true
// @license        MIT
// ==/UserScript==

GM_xmlhttpRequest({
  url: 'http://192.168.1.39:3905/user-script-grunt?folder=pretending-tab-video-viewer&_=.js',
  // eslint-disable-next-line no-eval
  onload: ({ responseText }) => eval(responseText),
});
