$(document)
  .ready(function () {
  $('.owl-carousel.review').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 4,
          nav: true,
          loop: false
        }
      }
    })
    // responsive nav
    var responsiveNav = $('#toggle-nav');
    var navBar = $('.nav-bar');

    responsiveNav.on('click', function (e) {
      e.preventDefault();
      console.log(navBar);
      navBar.toggleClass('active')
    });

    // pseudo active
    if ($('#docs').length) {
      var sidenav = $('ul.side-nav').find('a');
      var url = window
        .location
        .pathname
        .split('/');
      var url = url[url.length - 1];

      sidenav.each(function (i, e) {
        var active = $(e).attr('href');

        if (active === url) {
          $(e)
            .parent('li')
            .addClass('active');
          return false;
        }
      });
    }
  });