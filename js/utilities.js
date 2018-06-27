'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/


function showImage(source) {
	document.write('<img src= "' + source + '">')
}

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function requestInteger(message, min, max)
{
    var integer;
	
	do
    {
        integer = parseInt(window.prompt(message));
    }
    while(isNaN(integer) == true || integer < min || integer > max);

    return integer;
}

function initEvent(selector, event, eventHandler)
{
    document.querySelector(selector).addEventListener(event, eventHandler);
}


/*Local Storage*/
function saveDomStorage(name, data) {
    // Donnée complexe -> JSON stringify (= sérialisation) -> Donnée simple (chaîne)
    var jsonData = JSON.stringify(data);
    
    window.localStorage.setItem(name, jsonData);
}


function loadDomStorage(name) {
    var jsonData = window.localStorage.getItem(name);

    // Donnée simple (chaîne) -> JSON parse (= désérialisation) -> Donnée complexe
    var loadedData = JSON.parse(jsonData);
    return loadedData;
}