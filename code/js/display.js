

class Display
{
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;

        this.textContainerPos = {x: 80, y: 80};
        this.textContainerSize = {x: canvas.width - 110, y: 500};

        this.text = "";
    }

    Draw()
    {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.3";
        this.ctx.fillRect(10, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = "rgba(0, 255, 255, 0.3";
        this.ctx.fillRect(10, 0, 40, this.canvas.height);

        // this.ctx.fillStyle = "rgba(255, 255, 255, 0.5";
        // this.ctx.fillRect(this.textContainerPos.x, this.textContainerPos.y, this.textContainerSize.x, this.textContainerSize.y);

        this.ctx.fillStyle = "white";
        this.ctx.font = "20px Comic Sans MS";
        this.DrawText(this.text, 90, 90, this.textContainerSize.x);
    }

    // Split the text in lines
    DrawText(text, x, y, maxWidth)
    {
        let words = text.split(' ');
        let line = '';

        for(let word of words)
        {
            let testLine = line + word + ' ';
            let testWidth = this.ctx.measureText(testLine).width;
            if(testWidth > maxWidth && line !== '')
            {
                this.ctx.fillText(line, x, y);
                line = word + ' ';
                y += 25;
            }
            else
            {
                line = testLine;
            }
        }

        this.ctx.fillText(line, x, y);
    }
}

class Button
{
    constructor(canvas, ctx, planet, position, display)
    {
        this.canvas = canvas;
        this.ctx = ctx;

        this.planet = planet;

        this.size = {x: 30, y: 30};
        this.position = position;

        this.display = display;

        this.img = planet.image;

        this.handleClick = this.handleClick.bind(this);
        this.canvas.addEventListener('click', this.handleClick);
    }

    Draw()
    {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.imageSmoothingQuality = "high";
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    handleClick(event)
    {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= this.position.x && x <= this.position.x + this.size.x &&
            y >= this.position.y && y <= this.position.y + this.size.y) {
            
                this.display.text = this.planet.Description(this.planet.name);
                console.log(this.planet.Description(this.planet.name));
        }
    }

    destroyEvent()
    {
        this.canvas.removeEventListener('click', this.handleClick);
    }
}