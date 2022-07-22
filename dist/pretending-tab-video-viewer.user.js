// ==UserScript==
// @name           pretending-tab-video-viewer
// @version        0.0.1
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
// @icon           https://github.com/FlowerForWar/pretending-tab-video-viewer/blob/main/src/icons/user.png?raw=true
// @license        MIT
// ==/UserScript==

/**
 * Source files are available at https://github.com/FlowerForWar/pretending-tab-video-viewer/tree/main/src
 */

/* eslint-disable no-unused-vars */
function addStyle(styleText, id) {
  const head = document.getElementsByTagName('head')[0] || document.documentElement;
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.textContent = styleText;
  if (id) {
    style.setAttribute('id', id);
  }
  head.appendChild(style);
  return style;
}

addStyle(
  `
div#pretending-tab-video-viewer {
  position: fixed;
  background-color: #1f1f1f;
  z-index: 30000;
  inset: 0;
}

div#pretending-tab-video-viewer > video {
  width: 100%;
  height: 100%;
}
`
);
