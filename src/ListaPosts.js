class ListaPosts{
    constructor(){
        this.arr=[];
    }
    agregarPost(Post){
        if(Post.titulo!=null){
            this.arr.push(Post);
        }
    }
    mostrarPosts(lista)
    {
        for(let i=0;i<this.arr.length;i++){
            let post=this.arr[i];
            const li=document.createElement('li');
            li.innerHTML = "<b> Titulo: </b>" + post.titulo;
            if (post.detalle != "") {
                li.innerHTML += "<br> <b> Detalle : </b>" + post.detalle;
              }
            lista.appendChild(li);
        }
        return lista;
    }
}
export default ListaPosts;