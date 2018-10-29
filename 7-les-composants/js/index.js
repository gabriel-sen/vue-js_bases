Vue.component("todo-item", {
  //on ajoute maintenant une "props" qui est un attribut personnalisé :
  props: ["todo"],
  template: "<li> {{ todo.text }}</li>" // on récupère la valeur du taleau
})

var app = new Vue ({
  el: "#app",
  data : {
    groceryList : [
      { id : 0, text : "Légume"},
      { id : 1, text : "boeuf"},
      { id : 2, text : "olives"}
    ]
  }
})