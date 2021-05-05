traerDatos();

function traerDatos()
{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './src/datos/localData.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            console.log(this.responseText);   
        }

    }
}

let configuracion = 
{
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    parent: "contenedor",
    scene: [Presentacion,Menu,Tablero,CrearCarta,EditarMazo],
    scale:
    {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.Center
    },
};


/* Max
backgroundColor: '#392542',
*/

/* sergio const configuracion = {
    
    
    type: Phaser.AUTO,
    scale: {
        parent: "contenedor",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        width: 1680,
        height: 720,

    },
    scene: [Presentacion,Menu,Tablero],
} */

let game = new Phaser.Game(configuracion);
