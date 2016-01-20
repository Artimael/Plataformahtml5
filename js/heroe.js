function Heroe({
    Kinetic.Rect.call(this);
    this.setWidth(40);
    this.setHeight(80);
    this.vx=15;//velocidad en X es 15
    this.vy=0;
    this.direccion=1; // direccion 1 que pueda moverse
    this.contador;=0;
    
    this.caminar=function()
    {
    
    };
    
    this.saltar=funcion()
    {
    
    };
    
    this.aplicarGravedad=function()
    {
    
    };
});
    
Heroe.prototype=Object.create(Kinetic.Rect.prototype);//heradamos todo lo que rect tiene y se lo añade a heroe