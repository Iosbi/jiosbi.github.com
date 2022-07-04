//DOM
//querySelector / querySelectorAll
/*
let links = document.querySelectorAll("a");
links.forEach(function(link){
  console.log(link);
})

let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  })
});
*/
//Obtener los elementos de la clase .close
/*
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada una de ellas - case sensitive
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    return false;
  });
});
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  //icono.classList.remove("fa-star");
  icono.classList.add("fa-star");
});
*/
links.forEach(function(link){
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');
    //Quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    //Agregar clases para animar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");
    setTimeout(function(){
      location.href = "/";
    },600);
    setInterval
    return false;
  });
});
