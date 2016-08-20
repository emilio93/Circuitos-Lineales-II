$(document).ready(function() {

  // Update page content.
  showPage();
  $(window).on('hashchange',function(){
    showPage(window.location.hash.substr(1));
  });

  // Update nav to hidden on resize.
  $(window).resize(function() {
    if ($(window).width() <= 992) {
      hideNav();
    } else {
      showNav();
    }
  });

  // Show nav on swipe.
  $(document).touchwipe({
     wipeLeft: hideNav,
     wipeRight: showNav,
     wipeUp: function() {},
     wipeDown: function() {},
     min_move_x: 40,
     min_move_y: 20,
     preventDefaultEvents: false
  });

   // Hide Menu on option tap, click, ...
  $('a, nav button').click(function() {
    $(this).blur();
    hideNav();
  });

  // Update hash to reload page.
  $('nav button').click(function() {
    $(this).blur();
    window.location.hash = $(this).attr('data-href');
    hideNav();
  })

  // Open/close nav.
  $('button.nav-button').on('click', function() {
    var left = '-100%';
    if ($('nav').css('left') !== '0px') {
      left = '0px';
      $('footer').show(100);
    } else {
      $('footer').hide(100);
    }
    $('nav').animate({
      left: left
    }, 100);
    $(this).blur();
  }).on('touchend tap', function(e) {
    $(this).blur();
  });

  // update content.
  $('nav>ul>a').click(function(){
    setTimeout(function() {
      showPage(window.location.hash.substr(1));
    }, 1);
  });

  function hideNav() {
    if ($(window).width() <= 992) {
      $('nav').animate({
        left: '-100%'
      }, 100);
      $('footer').hide(100);
    }
  }

  function isNavOpen() {
    return $('nav').css('left') == '0px';
  }

  function showNav() {
    if ($(window).width() <= 992) {
      $('nav').animate({
        left: '0px'
      }, 100);
      $('footer').hide(100);
    }
    if ($(window).width() > 992) {
      $('nav').css({
        left: '',
        margin: '0 auto'
      }, 100);
      $('footer').show(100);
    } else {
      $('footer').hide(100);
    }
  }

  function loadHome() {
    loadFile('readmes/inicio.md', 'Circuitos Lineales II');
  };

  function loadNotes() {
    loadFile('readmes/apuntes.md', 'Apuntes');
  };

  function loadDownloads() {
    loadFile('readmes/descargas.md', 'Descargas', function (data) {
      $.ajax('readmes/releases.json', {})
      .then(function(releases) {
        var html = '<h2>Descargas</h2>\n<div class="scroll-holder">\n<div>\n';
        for(var i = 0; i < releases.length; i++) {
          html += '<h3>' + releases[i].version  + '</h3>\n';
          html += '<em>' + releases[i].date  + '</em>\n';
          html += '<p>' + releases[i].notas  + '</p>\n';
          html += '<h4>Descargas</h4>\n<ul>\n';
          for (var j = 0; j < releases[i].descargas.length; j++) {
            html += '<li><a href="' + releases[i].descargas[j].url + '">' + releases[i].descargas[j].nombre + '</a></li>\n';
          }
          html += '</ul>\n';
          html += '<a href="' + releases[i].github + '">Release en Github</a>\n<hr>\n';
        }
        html += '</div>\n</div>\n';
        $('#contenido > div > div')
        .hide()
        .html(html)
        .fadeIn(200);
      });
    });
  };

  function loadLicense() {
    loadFile('LICENSE', 'Licencia', function(data) {
      $('#contenido > div > div')
      .hide()
      .html('<h2>Licencia</h2><div class="scroll-holder"><div class="light-content"><p>' + data.replace(/\n/mg, '\n<br>\n') + '</p></div></div>')
      .fadeIn(200);
    });
  };

  function loadFile(url, name, onSuccess) {
    $('#contenido > div > div').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax(url, {})
    .then(typeof onSuccess === 'function'? onSuccess: function(data) {
      $('#contenido > div > div').hide().html('<h2>' + name + '</h2><div class="scroll-holder"><div>' + marked(data) + '</div></div>').fadeIn(200);
    })
    .fail(function() {$('#contenido > div > div').html(marked('## Error\nNo se pudo cargar contenido.'));});
  }

  function showPage(id) {
    if (typeof id === 'undefined' || id.length <= 1) {
      var hash = window.location.hash;
      hash = hash.length>1? hash.substr(1): 'inicio';
      return showPage(hash);
    }

    if (id === 'inicio') {
      $('nav button').removeClass('active').removeClass('disabled');
      loadHome();
      $('nav button.inicio').addClass('active').addClass('disabled');
    }
    else if (id === 'apuntes') {
      $('nav button').removeClass('active').removeClass('disabled');
      loadNotes();
      $('nav button.apuntes').addClass('active').addClass('disabled');
    }
    else if (id === 'descargas') {
      $('nav button').removeClass('active').removeClass('disabled');
      loadDownloads();
      $('nav button.descargas').addClass('active').addClass('disabled');
    }
    else if (id === 'licencia') {
      $('nav button').removeClass('active').removeClass('disabled');
      loadLicense();
      $('nav button.licencia').addClass('active').addClass('disabled');
    }
  }
});
