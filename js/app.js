// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

app.loginScreen.open('#my-login-screen');

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  app.loginScreen.close('#my-login-screen');
  if(username !== 'rest@gmail.com' && password !== 'comida'){
    app.dialog.alert('Invalid E-mail & password. Please try again.', 'Error', );
  } else if(username !== 'rest@gmail.com'){
    app.dialog.alert('Invalid E-mail. Please try again.', 'Error', );
  } else if(password !== 'comida'){
    app.dialog.alert('Invalid password. Please try again.','Error', );
  } else{
    //close-logInScreen
    app.loginScreen.close('#my-login-screen');
  }
  

  // Alert username and password
  console.log('Username: ' + username + '<br>Password: ' + password);
});
