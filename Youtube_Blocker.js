// ==UserScript==
// @id             YHVPR
// @name           Youtube Homepage Video Pane REMOVAL
// @version        1.0
// @author         Eric Gustafson
// @description    On youtube homepage, deletes all video suggestions and leaves the search bar in-tact
// @include        http*://*.youtube.com/*
// @run-at         document-end
// ==/UserScript==

/**
 * Credit to this link for removing elements on page: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
 * Credit to this link for making TamperMonkey scripts: https://www.youtube.com/watch?v=UCTA9dbrVqc&list=LL&index=1&t=409s
 */
(function() {
    'use strict';

    window.addEventListener("load", function () { //on page load, run this function
        //Getting rid of all video images and links on the homepage. See what we're modifying here:
        //https://imgur.com/8A6PNHY. This returns an      HTMLCollectionOF<Element>
        //the Element generic is determined by the function call, we don't have to worry
        const htmlElements = document.getElementsByClassName('style-scope ytd-rich-grid-renderer'); //

        //For each element in the collection
        for (let i = 0; i < htmlElements.length; i++) {
            htmlElements.item(i).remove(); //remove the element. DO NOT USE item[i] WITH HARD BRACKETS. IT WILL NOT WORK
        }
    }, false)
})();