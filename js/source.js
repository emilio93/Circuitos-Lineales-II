$(document).ready(function() {
  loadHome();

  $('nav>ul>a').click(function(){
    setTimeout(function() {
      showPage(window.location.hash.substr(1));
    }, 1);
  });

  $(window).on('hashchange',function(){
    showPage(window.location.hash.substr(1));
  });

  function loadHome() {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/Circuitos-Lineales-II/gh-pages/readmes/inicio.md', {})
    .then(function(data) {$('#contenido > div > div').html('<h2>Licencia</h2><pre>' + data + '</pre>');})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));})
  };

  function loadNotes() {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/Circuitos-Lineales-II/gh-pages/readmes/apuntes.md', {})
    .then(function(data) {$('#contenido > div > div').html(marked(data));})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));})
  };

  function loadLicence() {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/Circuitos-Lineales-II/gh-pages/LICENSE', {})
    .then(function(data) {$('#contenido > div > div').html(marked(data));})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));})
  };

  function showPage(id) {
    if (typeof id === 'undefined' || id.length <= 1) {
      var hash = window.location.hash;
      hash = hash.length>1? hash.substr(1): 'inicio';
      return showPage(hash);
    }

    if (id === 'inicio') {
      loadHome();
    } else if (id === 'apuntes') {
      loadNotes();
    } else if (id === 'licencia') {
      loadLicence();
    }
  }

});
