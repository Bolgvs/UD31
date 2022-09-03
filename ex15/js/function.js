window.onload = function() {
    visor1=document.getElementById("visor");
}

function imagen(numImagen) { 
    rutaImagen="../ex15/images/foto"+numImagen+".jpg"; 
    document.images["fotoVisor"].src=rutaImagen;
    t=document.images["fotos"+numImagen].alt;
}