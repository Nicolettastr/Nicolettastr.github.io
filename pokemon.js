var canvas = document.getElementById("juegopokemon");
var papel = canvas.getContext("2d");
document.addEventListener("keyup", moverAsh);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

var ciudad = {
    url: "./Imagenes/ciudad.jpg",
    cargaOk: false
};

var ash = {
    url: "./Imagenes/ash.png",
    cargaOk: false
};

var misty = {
    url: "./Imagenes/misty.png",
    cargaOk: false
};

var brook = {
    url: "./Imagenes/brook.png",
    cargaOk: false
};

var pikachu = {
    url: "./Imagenes/pikachu.png",
    cargaOk: false
};

var charizard = {
    url: "./Imagenes/charizard.png",
    cargaOk: false
};

var xa = 90;
var ya = 90;

ciudad.objeto = new Image();
ciudad.objeto.src = ciudad.url;
ciudad.objeto.addEventListener("load", cargarCiudad);

ash.objeto = new Image();
ash.objeto.src = ash.url;
ash.objeto.addEventListener("load", cargarAsh);

misty.objeto = new Image();
misty.objeto.src = misty.url;
misty.objeto.addEventListener("load", cargarMisty);

brook.objeto = new Image();
brook.objeto.src = brook.url;
brook.objeto.addEventListener("load", cargarBrook);

pikachu.objeto = new Image();
pikachu.objeto.src = pikachu.url;
pikachu.objeto.addEventListener("load", cargarPikachu);

charizard.objeto = new Image();
charizard.objeto.src = charizard.url;
charizard.objeto.addEventListener("load", cargarCharizard);

function cargarCiudad()
{
    ciudad.cargaOk = true;
    dibujar();
};

function cargarAsh()
{
    ash.cargaOk = true;
    dibujar();
};

function cargarMisty()
{
    misty.cargaOk = true;
    dibujar();
};

function cargarBrook()
{
    brook.cargaOk = true;
    dibujar();
};

function cargarPikachu()
{
    pikachu.cargaOk = true;
    dibujar();
};

function cargarCharizard()
{
    charizard.cargaOk = true;
    dibujar();
};

function dibujar()
{
    if(ciudad.cargaOk == true)
    {
        papel.drawImage(ciudad.objeto, 0, 0);
    }

    if(ash.cargaOk == true)
    {
        papel.drawImage(ash.objeto, xa, ya);
    }

    if(misty.cargaOk == true)
    {
        papel.drawImage(misty.objeto, 200, 550);
    }

    if(brook.cargaOk == true)
    {
        papel.drawImage(brook.objeto, 790, 60);
    }

    if(pikachu.cargaOk == true)
    {
        papel.drawImage(pikachu.objeto, 430, 180);
    }

    if(charizard.cargaOk == true)
    {
        papel.drawImage(charizard.objeto, 230, 380);
    }
}

function moverAsh(evento)
{
    var movimiento = 40
    if (evento.keyCode == teclas.UP)
    {
        cargarAsh(xa, ya);
        ya = ya - movimiento;
    }

    if (evento.keyCode == teclas.DOWN)
    {
        cargarAsh(xa, ya);
        ya = ya + movimiento;
    }

    if (evento.keyCode == teclas.RIGHT)
    {
        cargarAsh(xa, ya);
        xa = xa + movimiento;
    }
    if (evento.keyCode == teclas.LEFT)
    {
        cargarAsh(xa, ya);
        xa = xa - movimiento;
    }
}
