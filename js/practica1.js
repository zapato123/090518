'use strict';
class restaurante{
    constructor(){
        let nombre;
        let direccion;
        let telefono;
    }
     optenerNombre(){
        return this.nombre;
    }
    optenerDireccion(){
        return this.direccion;
    }
     optenerTelefono(){
        return this.telefono;
    }
    escribeNombre(q){
        this.nombre= q
    }
    escribeDireccion(w){
        this.direccion= w

    }
     escribeTelefono(e){
        this.telefono= e

    }
    
}

let latorta = new restaurante();

function principal(){
    let taco = prompt ("Escribe Nombre del restaurante")
    let queso = prompt ("Escrine Direcion del restaurante")
    let burrito =prompt ("Escribe Telefono del restaurante")

    latorta.escribeNombre(taco)
    latorta.escribeDireccion(queso)
    latorta.escribeTelefono(burrito)

    alert(latorta.optenerNombre())
    alert(latorta.optenerDireccion())
    alert(latorta.optenerTelefono())



}