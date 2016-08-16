$(document).ready(function() {
  showPage();

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
    $.ajax('readmes/inicio.md', {})
    .then(function(data) {$('#contenido > div > div').html(marked(data));})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));});
  };

  function loadNotes() {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('readmes/apuntes.md', {})
    .then(function(data) {$('#contenido > div > div').html(marked(data));})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));});
  };

  function loadDownloads() {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('readmes/descargas.md', {})
    .then(function(data) {$('#contenido > div > div').html(marked(data));})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));});
  };

  function loadLicense() {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('LICENSE', {})
    .then(function(data) {$('#contenido > div > div').html('<h2>Licencia</h2><div class="pre-scroll"><pre>' + data + '</pre></div>');})
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));});
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
    } else if (id === 'descargas') {
      loadDownloads();
    } else if (id === 'licencia') {
      loadLicense();
    }
  }

});
