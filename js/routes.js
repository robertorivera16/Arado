routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/checkout_complete/',
    url: './pages/checkout_complete.html',
  },
  {
    path: '/la_frutera/',
    url: './pages/la_frutera.html',
  },
  {
    path: '/help/',
    url: './pages/help.html',
  },
  {
    path: '/ajustes/',
    url: './pages/ajustes.html',
  },
  {
    path: '/el_carnicero/',
    url: './pages/el_carnicero.html',
  },
  {
    path: '/agrocentro/',
    url: './pages/agrocentro.html',
  },
  {
    path: '/el_mercado/',
    url: './pages/el_mercado.html',
  },
  {
    path: '/la_tiendita/',
    url: './pages/la_tiendita.html',
  },
  {
    path: '/el_parking/',
    url: './pages/el_parking.html',
  },
  {
    path: '/checkout/',
    url: './pages/checkout.html',
  },
  {
    path: '/help/',
    url: './pages/help.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  {
    path: '/historial/',
    url: './pages/historial.html',
  },
  {
    path: '/banana/',
    url: './pages/banana_info.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
