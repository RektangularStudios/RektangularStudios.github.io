(function() {
  var plausible = document.createElement('script');
  plausible.type = 'text/javascript';
  plausible.async = true;
  plausible.defer = true;
  plausible.setAttribute('data-domain', 'rektangularstudios.github.io');
  plausible.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.plausible.io/js/plausible.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(plausible, s);
})();
