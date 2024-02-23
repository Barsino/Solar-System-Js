class Universe
{
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;

        this.circleRadius = ((canvas.width / 2) < (canvas.height / 2)) ? canvas.width / 2 : canvas.height / 2;

        this.center = {x: canvas.width / 2, y: canvas.height / 2};

        this.starsAmount = 60;
        this.stars = [];

        this.InitializeStars();
    }
   
    Draw()
    {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.stars.forEach(star => star.Draw(ctx));
    }

    Update(deltaTime)
    {
        this.stars.forEach(star => star.Update(deltaTime));
    }

    UniverResize()
    {
        this.circleRadius = ((canvas.width / 2) < (canvas.height / 2)) ? canvas.width / 2 : canvas.height / 2;
    }

    InitializeStars()
    {
        for(let i = 0; i < this.starsAmount; i++)
        {
            const newStar =  new Star(this.RandomBetween(0,3), 
                            {x: this.RandomBetween(0, this.canvas.width), y: this.RandomBetween(0, this.canvas.height)},
                            this.RandomBetween(1, 30)); 
    
            this.stars.push(newStar);
        }
    }

    // Generates a random number between a min and a max
    RandomBetween(min, max)
    {
        return min + Math.floor(Math.random() * (max - min));
    }
}

class Star
{
    constructor(radius, position, speed)
    {
        this.radius = radius;

        this.position = position;

        this.speed = speed;
    }

    Update(deltaTime)
    {
        if(this.position.x > canvas.width)
        {
            this.position.x = -10;
        }
        else
        {
            this.position.x = (this.position.x + this.speed * deltaTime) % canvas.width;
        }
    }

    Draw(ctx)
    {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
    }
}