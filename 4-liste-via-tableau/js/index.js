var app = new Vue({ // Je créer une variable étant ma nouvelle instance nommée vue comprenant une option.
  el: '#app', // je cible l'ID de l'élément HTML 
  data: { // je précise que c'est un data
    todos : [
        {text : "apprendre a coder en JS"},
        {text : "Apprendre Vue"},
        {text : "Créer un truc géniale"}
    ]
  }
});