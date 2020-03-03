var btn = document.querySelector(".nav__btn");
var nav = document.querySelector(".nav__list");
var navLink = document.querySelectorAll(".nav__item");

var onPopupEscPress = function(evt) {
  if (evt.keyCode === 27) {
    clickLinkClose();
  }
};

var onPopupEnterPress = function(evt) {
  if (evt.keyCode === 13) {
    clickLinkClose();
  }
};

var clickLinkClose = function() {
	btn.classList.remove('nav__btn-active');
	nav.classList.remove('nav__list-active');
	document.removeEventListener('keydown', onPopupEscPress);
}

var clickLinkOpen = function() {
	btn.classList.add('nav__btn-active');
	nav.classList.add('nav__list-active');
	document.addEventListener('keydown', onPopupEscPress);
}

btn.addEventListener("click", function () {
	if (!btn.classList.contains('nav__btn-active')) {
		clickLinkOpen();
	} else {
		clickLinkClose();
	}
});	

for (var i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener('click', clickLinkClose);
	navLink[i].addEventListener('keydown', onPopupEnterPress);
}

btn.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13 && !btn.classList.contains('nav__btn-active')) {
    clickLinkOpen();
  } else if (evt.keyCode === 13) {
  	clickLinkClose();
  }
});