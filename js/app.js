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

$$(document).on('page:init', '.page[data-name="ajustes"]', function (e) {
  var formData = {
    'nombre': 'Fulano de Tal',
    'email': 'rest@gmail.com',
    'telefono': '7877839090',
    'direccion': '#31 Calle La Moneda, Mayaguez, PR 00782',
    'nombre_tarjeta': 'Juan del Pueblo',
    'num_tarjeta': '4549847593749059',
    'fecha_exp': '10/08/2021',
  }
  app.form.fillFromData('#my-form', formData);
  $$('.convert-form-to-data').on('click', function(){
    app.form.storeFormData('#my-form', app.form.convertToData('#my-form'));
    // var formData = app.form.convertToData('#my-form');
    // alert(JSON.stringify(formData));
    console.log(app.form.getFormData('#my-form'));
  });

});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  app.loginScreen.close('#my-login-screen');
  // if(username !== 'rest@gmail.com' && password !== 'comida'){
  //   app.dialog.alert('Invalid E-mail & password. Please try again.', 'Error', );
  // } else if(username !== 'rest@gmail.com'){
  //   app.dialog.alert('Invalid E-mail. Please try again.', 'Error', );
  // } else if(password !== 'comida'){
  //   app.dialog.alert('Invalid password. Please try again.','Error', );
  // } else{
  //   //close-logInScreen
  //   app.loginScreen.close('#my-login-screen');
  //   app.dialog.alert('En esta plataforma podras tener acceso al comercio local de Puerto Rico. Para Ayuda, favor dirigirse al menu superior izquierdo y seleccionar "Ayuda"',"Bienvenidos a Arado");
  // }

  // Alert username and password
  console.log('Username: ' + username + '<br>Password: ' + password);

});

$$('.menu-link').on('click', function() {
  app.panel.close("left", "true");
  console.log("closed");
});

$$(document).on('page:afterin','.page[data-name="la_frutera"]', function () {

  var pina = document.getElementById("pina");
  pina.addEventListener("click", pinaFunction);
  function pinaFunction() {
    app.dialog.prompt('Entrar libras (lbs):', ' ', function (q) {
      if(!isNaN(q)){
        app.dialog.confirm('¿Esta seguro ' + q + 'libra(s)?', 'Libras:', function () {
          localStorage.setItem(pina.id, q);
          app.dialog.alert('Su selección es de: ' + q + " libras", 'Gracias');
          document.getElementById("checkOutBtn").innerText = "Bolsa(" +localStorage.length+ ")";
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
          document.getElementById("checkOutBtn").innerText = "Bolsa(" +localStorage.length+ ")";
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
  var total = 0;
  for (var i = 0; i < localStorage.length; i++){
    if(localStorage.key(i) === 'f7form-my-form'){
      continue;
    }
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var li = document.createElement("li");
    li.classList.add("swipeout");
    var itemContent = document.createElement("div");
    itemContent.classList.add("item-content");
    itemContent.classList.add("swipeout-content");
    var itemInner = document.createElement("div");
    itemInner.classList.add("item-inner");
    var itemTitle = document.createElement("div");
    itemTitle.classList.add("item-title");
    itemInner.appendChild(itemTitle);
    itemContent.appendChild(itemInner);
    li.appendChild(itemContent);
    var swipeoutAct = document.createElement("div");
    swipeoutAct.classList.add("swipeout-actions-right");
    var del = document.createElement("a");
    del.classList.add("swipeout-delete");
    li.appendChild(swipeoutAct);
    var cantidad = parseInt(value, 10);
    var precio = 0;
    if(key === 'mango'){
      precio = cantidad * 1.67;
    }else{
      precio = cantidad * 0.87;
    }

    total = total + precio;

    var prod = document.createTextNode("$" + precio.toString() + " - " + key.charAt(0).toUpperCase() + key.slice(1) + "  " + value + " LBS");
    itemTitle.appendChild(prod);
    swipeoutAct.appendChild(del);

    del.appendChild(document.createTextNode("Delete"));

    element.appendChild(li);

  }
  var totalElem = document.createElement("p");
  totalElem.classList.add("padding-left");
  var totalNum = document.createTextNode("Total: $" + total.toString());
  totalElem.appendChild(totalNum);

  element.appendChild(totalElem);

});






smartSelect.on('close', function() {
  if(smartSelect.$valueEl[0].innerHTML == "Ponce"){
    document.getElementById('maya-section').style.display = "none";
    document.getElementById('ponce-section').style.display = "block";
  }else if(smartSelect.$valueEl[0].innerHTML == "Frutas"){
    console.log('entered');
  }
  else if(smartSelect.$valueEl[0].innerHTML == "Mayagüez"){
    document.getElementById('maya-section').style.display = "block";
    document.getElementById('ponce-section').style.display = "none";
  }else{
    document.getElementById('maya-section').style.display = "block";
    document.getElementById('ponce-section').style.display = "block";
  }

});

