var app = new Vue({ // Je créer une variable étant ma nouvelle instance nommée vue comprenant une option.
    el: '#app', // je cible l'ID de l'élément HTML 
    data: { // je précise que c'est un data
      message: 'Hello Vue !' // ce tag "message" est dans l'élément #app {{ message }} dans l'HTML et sera allimenté du string définie.
    }
  });

  app.message = "J'ai changé le message!"; // une fois mon objet créer, je modifie les valeurs de sa propriété ainsi.