// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  smartSelect: {
    closeOnSelect: 'true',
  },
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
localStorage.clear();
app.loginScreen.open('#my-login-screen');
var smartSelect = app.smartSelect.get('.smart-select');

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
    app.dialog.alert('En esta plataforma podras tener acceso al comercio local de Puerto Rico. Para Ayuda, favor dirigirse al menu superior izquierdo y seleccionar "Ayuda"',"Bienvenidos a Arado");
  }

  // Alert username and password
  console.log('Username: ' + username + '<br>Password: ' + password);

});

$$('.menu-link').on('click', function() {
  app.panel.close("left", "true");
  console.log("closed");
});

$$(document).on('page:afterin', function () {
  for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    console.log(localStorage.key(i) + " " + localStorage.getItem(key))
  }
  var pina = document.getElementById("pina");
  pina.addEventListener("click", pinaFunction);
  function pinaFunction() {
    app.dialog.prompt('Entrar libras (lbs):', ' ', function (q) {
      if(!isNaN(q)){
        app.dialog.confirm('¿Esta seguro ' + q + 'libra(s)?', 'Libras:', function () {
          localStorage.setItem(pina.id, q);
          app.dialog.alert('Su selección es de: ' + q + " libras", 'Gracias');
          
        });
      }else{
        app.dialog.alert('Solo se permiten números.', 'Error');
      }
    });
  }
  var mango = document.getElementById("mango");
  mango.addEventListener("click", mangoFunction);
  function mangoFunction() {
    app.dialog.prompt('Entrar libras (lbs):', ' ', function (q) {
      if(!isNaN(q)){
        app.dialog.confirm('¿Esta seguro ' + q + 'libra(s)?', 'Libras:', function () {
          localStorage.setItem(mango.id, q);
          app.dialog.alert('Su selección es de: ' + q + " libras", 'Gracias');
          
        });
      }else{
        app.dialog.alert('Solo se permiten números.', 'Error');
      }
    });
  }
});


$$(document).on('page:init', '.page[data-name="checkout"]', function (e) {
  console.log("Entered page:init Checkout");
  var element = document.getElementById("product-list");
  for (var i = 0; i < localStorage.length; i++){
    console.log("Entered");
    var key = localStorage.key(i);
    var value = localStorage.value(i);
    var para = document.createElement("li");
    console.log(key + value)
    var node = document.createTextNode(key + "  " + value);
    para.appendChild(node);

    element.appendChild(para);


  }


});




// $$('.add-to-cart').on('click', function(){
//   console.log("MAMABICHO!");
//   app.dialog.prompt('Cantidad:', function (q) {
//     if(typeof q == "number"){
//       app.dialog.confirm('¿Esta segure? ' + q + '?', function () {
//         app.dialog.alert('Su selección fue de: ' + q);
//       });
//     }else {
//       app.dialog.alert('Solo se permiten numeros');
//     }
//   });

// });

smartSelect.on('close', function() {
  if(smartSelect.$valueEl[0].innerHTML == "Ponce"){
    document.getElementById('maya-section').style.display = "none";
    document.getElementById('ponce-section').style.display = "block";
  }
  else if(smartSelect.$valueEl[0].innerHTML == "Mayagüez"){
    document.getElementById('maya-section').style.display = "block";
    document.getElementById('ponce-section').style.display = "none";
  }else{
    document.getElementById('maya-section').style.display = "block";
    document.getElementById('ponce-section').style.display = "block";
  }

});

