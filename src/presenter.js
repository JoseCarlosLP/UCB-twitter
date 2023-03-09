import Post from "./Post";
import ListaPosts from "./ListaPosts";

const titulo = document.querySelector("#post_titulo");
const detalle = document.querySelector("#post_det");
const form = document.querySelector("#form-publicarPost");
let lista = document.getElementById('lista');
const LP = new ListaPosts();
let id = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  lista.innerHTML="";
  let tit=titulo.value;
  let det=detalle.value;
  const post = new Post(tit,det);
  LP.agregarPost(post);
  lista = LP.mostrarPosts(lista);
});
