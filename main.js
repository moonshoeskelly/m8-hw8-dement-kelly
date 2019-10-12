// It is always helpful to use comments in your code!

//Select Main Nav Links
var mainNavLinks = document.getElementsByClassName('main-menu-labels');
console.log(mainNavLinks);

//Toggles hide transition
function toggleSubMenu() {
  this.nextElementSibling.classList.toggle('hide');
}

//Applies hide toggle on mouse over and mouse out
for (i=0; i< mainNavLinks.length; i++) {
  mainNavLinks[i].addEventListener('mouseover', toggleSubMenu);
  mainNavLinks[i].addEventListener('mouseout', toggleSubMenu);
}
