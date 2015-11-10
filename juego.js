do{
   var usuarioElige = prompt("piedra, papel o tijera?");
    var computadoraElige = Math.random();
    if (computadoraElige <0,34){
        computadoraElige = "piedra";
    }else if(computadoraElige <=0.67){
        computadoraElige = "papel";
    }else{
        computadoraElige = "tijera";
    }
    function comparar (eleccion1,eleccion2){
        if(eleccion1 === eleccion2){
            return "empate!";
        }
        else{
            if(eleccion1 === "piedra"){
                if(eleccion2 === "tijera"){
                    return "Piedra gana";
                }
                else{
                    return "Papel gana";
                }
                
            }
            else if(eleccion1 === "papel")
            {
                if(eleccion2 === "piedra")
                {
                    return "gana papel";
                }
                else{
                    return "tijera gana";
                }
                
            }
            else{
                if(eleccion1 === "tijera")
                {
                    if(eleccion2 === "piedra"){
                        return "piedra gana";
                    }
                    else{
                        return "tijera gana";
                    }
                }
            }
        }
    }
    comparar(usuarioElige,computadoraElige);
    var seguir =prompt("¿quieres seguir ? si o no")
} while (seguir =="si")
