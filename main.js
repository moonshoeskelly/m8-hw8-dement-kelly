//Select Main Nav Links

var mainNavLinks = document.getElementsByClassName('main-menu-labels');
console.log(mainNavLinks);

//Toggles hide transition
function toggleSubMenu() {
  this.nextElementSibling.classList.toggle('hide');
}

function showEnter() {
  this.nextElementSibling.classList.add('show-all');
}

function showLeave() {
  this.nextElementSibling.classList.remove('show-all');
}

//Applies hide toggle on mouse over and mouse out
for (i=0; i< mainNavLinks.length; i++) {
  mainNavLinks[i].addEventListener('mouseenter', toggleSubMenu);
  mainNavLinks[i].addEventListener('mouseenter', showEnter);
  mainNavLinks[i].addEventListener('mouseleave', toggleSubMenu);
  mainNavLinks[i].addEventListener('mouseleave', showLeave);
}


/*
//Keep sub-menu displayed when hovering drop down
var mainAll = document.querySelectorAll('.main-all');
console.log(mainAll);

function toggleDropdown() {
  this.nextElementSibling.classList.toggle('show-all');
}

//Applies hide toggle on mouse over and mouse out
for (i=0; i< mainAll.length; i++) {
  mainAll[i].addEventListener('mouseenter', toggleDropdown);
  mainAll[i].addEventListener('mouseleave', toggleDropdown);
}

/*function showEnter() {
  mainAll.classList.add('show-all');
}

function showLeave() {
  mainAll.classList.remove('show-all');
}

for (i=0; i< mainAll.length; i++) {
  mainAll[i].addEventListener('mouseenter', showEnter);
  mainAll[i].addEventListener('mouseleave', showLeave);
}*/
