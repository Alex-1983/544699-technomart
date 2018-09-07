var link = document.querySelector(".company__link-write");
var popup = document.querySelector(".write-us");
var overlay = document.querySelector(".modal-overlay");

if (popup) {
  var popupClose = popup.querySelector(".modal-close");
  var form = popup.querySelector(".write-us__form");
  var login = popup.querySelector(".write-us__login");
  var email = popup.querySelector(".write-us__email");
  var textarea = popup.querySelector(".write-us__textarea");

  var isStorageSupport = true;
  var storageLogin = "";
  var storageEmail = "";

  try {
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");

  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if (storageLogin) {
      login.value = storageLogin;
      textarea.focus();

    } else {
      login.focus();
    }

    if (storageEmail) {
      email.value = storageEmail;
    }
  });

  popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !textarea.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
      }
    }
  });
};

var mapLink = document.querySelector(".company__map");
var mapPopup = document.querySelector(".map-popup");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
    overlay.classList.add("overlay-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-map");
    overlay.classList.remove("overlay-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show-map")) {
        mapPopup.classList.remove("modal-show-map");
        overlay.classList.remove("overlay-show");
      }
    }
  });
};

var cartBuy = document.querySelectorAll(".actions__link--buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

if (cartPopup) {
  for (var i = 0; i < cartBuy.length; i++) {
    cartBuy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show-cart");
      overlay.classList.add("overlay-show");
    });
  };

  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show-cart");
    overlay.classList.remove("overlay-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cartPopup.classList.contains("modal-show-cart")) {
        cartPopup.classList.remove("modal-show-cart");
        overlay.classList.remove("overlay-show");
      }
    }
  });
};

var tabLink = document.querySelectorAll(".service-tab__link");
var tabSlide = document.querySelectorAll(".service__slide");
var j, h, k;

if (tabSlide) {
  for (i = 0; i < tabLink.length; ++i) {
    tabLink[i].addEventListener("click", function (event) {
      event.preventDefault(event);
      for (j = 0; j < tabLink.length; ++j) {
        tabLink[j].classList.remove("service-tab__link-active");
      };
      for (h = 0; h < tabLink.length; ++h) {
        if (tabLink[h] == this) {
          tabLink[h].classList.add("service-tab__link-active");
          for (k = 0; k < tabSlide.length; ++k) {
            tabSlide[k].classList.remove("service__slide-active");
          }
          tabSlide[h].classList.add("service__slide-active");
        }
      }
    });
  };
};

var slide = document.querySelectorAll(".slider__item");
var countSlide = slide.length;
var next = document.querySelector(".slide-btn--next");
var previous = document.querySelector(".slide-btn--previous");
var radioSlide = document.querySelectorAll(".slider__btn-radio");
var currentSlide = 0;

if (slide) {
  next.addEventListener("click", function (evt) {
    if (currentSlide < countSlide-1) {
      evt.preventDefault();
      currentSlide = currentSlide + 1;
      showSlide(currentSlide);
    };
  });

  previous.addEventListener("click", function (evt) {
    if (currentSlide > 0) {
      evt.preventDefault();
      currentSlide = currentSlide - 1;
      showSlide(currentSlide);
    };
  });

  function showSlide(currentSlide) {
    for (var k = 0; k < countSlide; k++) {
      slide[k].classList.remove("slider__item-active");
      radioSlide[k].classList.add("slider__btn-radio--active");
    };
    slide[currentSlide].classList.add("slider__item-active");
    radioSlide[currentSlide].classList.remove("slider__btn-radio--active");
  };
};
