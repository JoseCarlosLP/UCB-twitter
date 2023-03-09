class Post{
    constructor(titulo, detalle){
        if(titulo=="") {
            alert("No es posible publicar un post sin titulo");
            return null;
        }
        else{
                
            this.titulo=titulo;
            this.detalle=detalle;
        }
    }
}

export default Post;