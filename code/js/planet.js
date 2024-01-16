

class Planet
{
    constructor(canvas, ctx, image, parent, universSize, scale, orbitRadius, rotationSpeed, orbitSpeed)
    {
        this.canvas = canvas;
        this.ctx = ctx; 

        this.image = image;

        this.parent = parent;

        this.size = {x: universSize / scale, y: universSize / scale};

        this.orbitAngle = 0;
        this.rotationAngle = 0;

        this.rotationSpeed = rotationSpeed;
        this.orbitSpeed = orbitSpeed;

        this.orbitRadius = universSize * orbitRadius;

        this.x = this.parent.x + this.orbitRadius * Math.cos(this.orbitAngle);
        this.y = this.parent.y + this.orbitRadius * Math.sin(this.orbitAngle);

        this.center = {x: this.x, y: this.y};
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
}