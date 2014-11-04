document.addEventListener('DOMContentLoaded', function() {
  var $$ = document.querySelectorAll.bind(document);

  getImages();
  injectJS();
  injectCSS();

  function getImages () {
    var divs = $$('#defered-images img[data-src]');
    // borrowing forEach from Array since divs is not an array
    [].forEach.call(divs, unwrap);
  }

  function unwrap (img) {
    img.src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
  }

  function injectJS() {
    var elem = document.createElement('script');
    elem.src = './bundle.js';
    document.body.appendChild(elem);
  }

  function injectCSS() {
    var elem = document.createElement('link');
    var head = document.getElementsByTagName('head')[0];

    elem.rel = 'stylesheet';
    elem.href = './main.css';
    elem.media = 'only x';
    head.appendChild(elem);

    setTimeout(function () {
      elem.media = 'all';
    });
  }
});
