/*
skin name : fast itcider (en version)
version : V5.4
author : itcider.com
website : itcider.com
license : itcider license
warning :
Comments cannot be edited or deleted
fi skin phrase cannot be deleted
An unlimited number of skins can be applied to the site
Redistribution or unauthorized use of code is strictly prohibited
Distributable only on the itcider official website
If you do not follow the above precautions, you will not be able to use it.
*/
if(detectIE()){
    window.location('https://ie.itcider.net')
} else {
;
}

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
   if (msie > 0) {
     return true;
   }

  var trident = ua.indexOf('Trident/');
   if (trident > 0) {
    return true;
   }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return true;
  }

  // other browser
  return false;
}

