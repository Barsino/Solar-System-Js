

class Planet
{
    constructor(canvas, ctx, image, univers, scale, orbitRadius, rotationSpeed, orbitSpeed, name)
    {
        this.canvas = canvas;
        this.ctx = ctx; 

        this.image = image;

        this.univers = univers;

        this.parent = univers.center;

        this.size = {x: univers.circleRadius / scale, y: univers.circleRadius / scale};

        this.orbitAngle = 0;
        this.rotationAngle = 0;

        this.rotationSpeed = rotationSpeed;
        this.orbitSpeed = orbitSpeed;

        this.orbitRadius = univers.circleRadius * orbitRadius;

        this.x = this.parent.x + this.orbitRadius * Math.cos(this.orbitAngle);
        this.y = this.parent.y + this.orbitRadius * Math.sin(this.orbitAngle);

        this.center = {x: this.x, y: this.y};

        this.name = name;
    }

    Draw()
    {
        this.x = this.parent.x + this.orbitRadius * Math.cos(this.orbitAngle);
        this.y = this.parent.y + this.orbitRadius * Math.sin(this.orbitAngle);

        // Guarda la configuración actual del contexto
        this.ctx.save();

        // Dibuja la orbita
        this.ctx.beginPath();
        this.ctx.arc(this.parent.x, this.parent.y, this.orbitRadius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "rgba(225, 225, 225, 0.7)";
        this.ctx.stroke();
        this.ctx.closePath();
        //console.log(this.parent, this.canvas.width / 2);

        // Mueve al centro del cuadrado y aplica la rotación
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rotationAngle);
    
        // Dibuja el planeta
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.imageSmoothingQuality = "high";
        this.ctx.drawImage(this.image, -this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
        
        // Restaura el contexto
        this.ctx.restore();

    }

    Update()
    {
        this.rotationAngle += this.rotationSpeed;
        this.orbitAngle += this.orbitSpeed;
    }

    Description(planetName)
    {
        if     (planetName == "Sol"     ){ return "El Sol es una estrella de tipo espectral G2V que se encuentra en el centro del Sistema Solar. Es una esfera casi perfecta de plasma caliente compuesta principalmente de hidrógeno y helio. El Sol es la fuente primaria de luz y energía para todos los planetas y cuerpos celestes del Sistema Solar. Su masa es aproximadamente 333,000 veces la masa de la Tierra, y su diámetro es aproximadamente 109 veces el diámetro de la Tierra."; }
        else if(planetName == "Mercurio"){ return "Mercurio es el planeta más cercano al Sol y el más pequeño del Sistema Solar. Tiene una superficie rocosa y está cubierto de cráteres debido a impactos de asteroides y cometas. Mercurio carece de una atmósfera significativa y experimenta grandes variaciones de temperatura entre su lado diurno extremadamente caliente y su lado nocturno frío. Su órbita elíptica alrededor del Sol es la más excéntrica de todos los planetas."; }
        else if(planetName == "Venus"   ){ return "Venus es el segundo planeta desde el Sol y es conocido como el gemelo de la Tierra debido a su tamaño y composición similar. Sin embargo, Venus tiene una atmósfera densa compuesta principalmente de dióxido de carbono que produce un efecto invernadero extremo, lo que lo convierte en el planeta más caliente del Sistema Solar. Su superficie está dominada por volcanes y llanuras de lava."; }
        else if(planetName == "Tierra"  ){ return "La Tierra es el tercer planeta desde el Sol y el único conocido por albergar vida. Tiene una atmósfera única compuesta principalmente de nitrógeno y oxígeno, que es esencial para sostener la vida tal como la conocemos. La superficie de la Tierra está cubierta en su mayoría por agua líquida, lo que la convierte en el planeta azul. La Tierra tiene una luna natural que juega un papel importante en estabilizar su eje de rotación."; }
        else if(planetName == "Marte"   ){ return "Marte es el cuarto planeta desde el Sol y es conocido como el planeta rojo debido a la presencia de óxido de hierro en su suelo, que le da un color rojizo característico. Tiene una atmósfera delgada compuesta principalmente de dióxido de carbono y su superficie presenta cañones, montañas y vastas llanuras. Marte ha sido objeto de una intensa exploración espacial debido a la posibilidad de que haya habido vida en el pasado."; }
        else if(planetName == "Jupiter" ){ return "Júpiter es el quinto planeta desde el Sol y el más grande del Sistema Solar. Es un gigante gaseoso compuesto principalmente de hidrógeno y helio. Júpiter tiene un sistema de anillos y numerosas lunas, siendo las más conocidas las lunas galileanas: Io, Europa, Ganímedes y Calisto. La Gran Mancha Roja, una gigantesca tormenta en la atmósfera de Júpiter, es una de sus características más prominentes."; }
        else if(planetName == "Saturno" ){ return "Saturno es el sexto planeta desde el Sol y es conocido por sus impresionantes anillos compuestos principalmente de partículas de hielo y roca. Es el segundo planeta más grande del Sistema Solar y tiene una composición similar a Júpiter, siendo principalmente un gigante gaseoso. Saturno tiene numerosas lunas, siendo Titán la más grande y la única luna conocida con una atmósfera densa."; }
        else if(planetName == "Urano"   ){ return "Urano es el séptimo planeta desde el Sol y es conocido por su inclinación axial extrema, lo que resulta en que su eje de rotación esté casi en posición horizontal. Tiene un sistema de anillos y lunas, y su atmósfera está compuesta principalmente de hidrógeno y helio con una pequeña cantidad de metano, que le da su característico color azul verdoso."; }
        else if(planetName == "Neptuno" ){ return "Neptuno es el octavo y último planeta oficial del Sistema Solar. Es un gigante de hielo compuesto principalmente de agua, amoníaco y metano. Neptuno tiene un sistema de anillos y lunas, siendo Tritón la más grande. Tritón es notable por su órbita retrógrada y su superficie geológicamente activa. Neptuno es conocido por sus rápidos vientos y su Gran Mancha Oscura, una gigantesca tormenta similar a la Gran Mancha Roja de Júpiter."; }
        else                            { return ""; }
    }
}