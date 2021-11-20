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
        const contentHTMLElements = document.getElementsByClassName('style-scope ytd-two-column-browse-results-renderer'); //

        //For each element in the collection
        for (let i = 0; i < contentHTMLElements.length; i++) {
            contentHTMLElements.item(i).remove(); //remove the element. DO NOT USE item[i] WITH HARD BRACKETS. IT WILL NOT WORK
        }

        //Side panel items to delete (seems to work half the time????)
        document.getElementById("footer").remove();
        document.querySelector("#items > ytd-guide-entry-renderer:nth-child(1)").remove(); //"Home"
        document.querySelector("#items > ytd-guide-entry-renderer:nth-child(2)").remove(); //?
        document.querySelector("#items > ytd-guide-entry-renderer:nth-child(3)").remove(); //??
        document.querySelector("#items > ytd-guide-entry-renderer").remove(); //"Explore"

        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(2)").remove(); //"Subscriptions"
        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(3)").remove(); //"Settings, report history, etc.)
        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(2)").remove(); //"More from Youtube"
    }, false)
})();
