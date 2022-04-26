/*
skin name : fast itcider (en version)
version : V4.4
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
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
/*
skin name : fast itcider (en version)
version : V4.4
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