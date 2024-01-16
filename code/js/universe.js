class Universe
{
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;

        this.circleRadius = 0.5 * Math.min(canvas.width, canvas.height) - 10;

        this.center = {x: canvas.width / 2, y: canvas.height / 2};
    }

    Draw()
    {
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(225, 225, 225, 0)";
        this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.circleRadius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
}