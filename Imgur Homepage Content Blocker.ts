// ==UserScript==
// @id             IHCR
// @name           Imgur Homepage Content REMOVAL
// @version        1.0
// @author         Eric Gustafson
// @description    On Imgur homepage, gets rid of all content
// @include        https://imgur.com/
// @run-at         document-end
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", function () {
        const contentHTMLElements = document.getElementsByClassName('UploadSpinner-contentWrapper');
        for (let i = 0; i < contentHTMLElements.length; i++) {
            contentHTMLElements.item(i).remove();
        }

        const adHTMLElements = document.getElementsByClassName('Ad-SCTU');
        for (let i = 0; i < adHTMLElements.length; i++) {
            adHTMLElements.item(i).remove();
        }

        const bannerHTMLElements = document.getElementsByClassName('EmeraldBanner');
        for (let i = 0; i < bannerHTMLElements.length; i++) {
            bannerHTMLElements.item(i).remove();
        }
    }, false);
})();