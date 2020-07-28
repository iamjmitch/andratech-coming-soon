var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

if (window.innerWidth > 1500) {
  var img = new Image();
  img.src = './assests/img/bg-desk.jpg';

  var int = setInterval(function () {
    if (img.complete) {
      clearInterval(int);
      document.querySelector('#pageContainer').style.background =
        'url(' + img.src + ') repeat center center fixed';
      document.querySelector('#contentContainer').style.display = 'flex';
    }
  }, 50);
} else if (window.innerWidth > 951) {
  var img = new Image();
  img.src = './assests/img/bg-laptop.jpg';

  var int = setInterval(function () {
    if (img.complete) {
      clearInterval(int);
      document.querySelector('#pageContainer').style.background =
        'url(' + img.src + ') repeat center center fixed';
      document.querySelector('#contentContainer').style.display = 'flex';
    }
  }, 50);
} else if (window.innerWidth > 480) {
  var img = new Image();
  img.src = './assests/img/bg-tablet.jpg';

  var int = setInterval(function () {
    if (img.complete) {
      clearInterval(int);
      document.querySelector('#pageContainer').style.background =
        'url(' + img.src + ') repeat center center fixed';
      document.querySelector('#contentContainer').style.display = 'flex';
    }
  }, 50);
} else {
  var img = new Image();
  img.src = './assests/img/bg-mobile.jpg';

  var int = setInterval(function () {
    if (img.complete) {
      clearInterval(int);
      document.querySelector('#pageContainer').style.background =
        'url(' + img.src + ') repeat center center fixed';
      document.querySelector('#contentContainer').style.display = 'flex';
    }
  }, 50);
}
