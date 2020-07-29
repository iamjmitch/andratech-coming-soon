var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

if (window.innerWidth > 1500) {
  var img = new Image();
  img.src = './assets/img/bg-desk.jpg';

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
  img.src = './assets/img/bg-laptop.jpg';

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
  img.src = './assets/img/bg-tablet.jpg';

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
  img.src = './assets/img/bg-mobile.jpg';

  var int = setInterval(function () {
    if (img.complete) {
      clearInterval(int);
      document.querySelector('#pageContainer').style.background =
        'url(' + img.src + ') repeat center center fixed';
      document.querySelector('#contentContainer').style.display = 'flex';
    }
  }, 50);
}

// google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'G-NP7Z8X94EC']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src =
    ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
    '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();
