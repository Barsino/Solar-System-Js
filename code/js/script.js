var canvas = /** @type {HTML CanvasElement} */(null);
var  ctx = /** @type {CanvasRenderingContext2D} */(null);

document.addEventListener('DOMContentLoaded', Init);

var universe = null;
var planets = [];

function Init()
{
    canvas = document.getElementById('my_canvas');
    ctx = canvas.getContext('2d');

    function resizeCanvas()
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        Start();
    }

    window.onload = function()
    {
        resizeCanvas()

        Loop(); 
    }

    window.onresize = function()
    {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(resizeCanvas, 0);
    }
}


function Start()
{
    universe = null;

    planets = [];

    universe = new Universe(canvas, ctx);

    const sun = CreatePlanet(canvas, ctx, "../../assets/planets/sun.svg", universe.center, universe.circleRadius, 3.5, 0, 0.01, 0);
    const mercury = CreatePlanet(canvas, ctx, "../../assets/planets/mercury.svg", universe.center, universe.circleRadius, 40, 0.2, 0.01, 0.02);
    const venus = CreatePlanet(canvas,ctx, "../../assets/planets/venus.svg", universe.center, universe.circleRadius, 20,0.27, 0.01, 0.01);
    const earth = CreatePlanet(canvas,ctx, "../../assets/planets/earth.svg", universe.center, universe.circleRadius, 20,0.35, 0.01, 0.003);
    //const moon = new Planet(canvas,ctx,earth.center, universe.circleRadius, 70, 0.1, 0.01, 0.1);
    const mars = CreatePlanet(canvas,ctx, "../../assets/planets/mars.svg", universe.center, universe.circleRadius, 30,0.42, 0.01, 0.005);
    const jupiter = CreatePlanet(canvas,ctx, "../../assets/planets/jupiter.svg", universe.center, universe.circleRadius, 10,0.60, 0.01, 0.0025);
    const saturn = CreatePlanet(canvas,ctx, "../../assets/planets/saturn.svg", universe.center, universe.circleRadius, 12,0.75, 0.01, 0.002);
    const uranus = CreatePlanet(canvas,ctx, "../../assets/planets/uranus.svg", universe.center, universe.circleRadius, 15,0.84, 0.01, 0.001);
    const neptune = CreatePlanet(canvas,ctx, "../../assets/planets/neptune.svg", universe.center, universe.circleRadius, 15,0.95, 0.01, 0.0008);

    planets.push(sun);
    planets.push(mercury);
    planets.push(venus);
    planets.push(earth);
    //planets.push(moon);
    planets.push(mars);
    planets.push(jupiter);
    planets.push(saturn);
    planets.push(uranus);
    planets.push(neptune);
}

function Loop()
{
    Draw();
    Update();

    requestAnimationFrame(Loop);
}

function Draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    universe.Draw();

    planets.forEach(planet => planet.Draw());
}

function Update()
{
    planets.forEach(planet => planet.Update());
}

function CreatePlanet(canvas, ctx, imageSrc, parent, universSize, scale, orbitRadius, rotationSpeed, orbitSpeed)
{
    const planet_Image = new Image();
    planet_Image.src = imageSrc;

    return new Planet (canvas, ctx, planet_Image, parent, universSize, scale, orbitRadius, rotationSpeed, orbitSpeed);
}