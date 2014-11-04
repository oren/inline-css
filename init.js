document.addEventListener('DOMContentLoaded', function() {
  var $$ = document.querySelectorAll.bind(document);

  unwrapImages();
  injectJS();

  function unwrapImages () {
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
});
