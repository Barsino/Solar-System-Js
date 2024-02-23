var canvas = /** @type {HTML CanvasElement} */(null);
var  ctx = /** @type {CanvasRenderingContext2D} */(null);

var canvas2 = /** @type {HTML CanvasElement} */(null);
var  ctx2 = /** @type {CanvasRenderingContext2D} */(null);

document.addEventListener('DOMContentLoaded', Init);

var universe = null;
var planets = [];

var display = null;
var buttons = [];

function Init()
{
    canvas = document.getElementById('my_canvas');
    ctx = canvas.getContext('2d');

    canvas2 = document.getElementById('my_canvas2');
    ctx2 = canvas2.getContext('2d');

    function resizeCanvas()
    {
        canvas.width = window.innerWidth * 0.6;
        canvas.height = window.innerHeight;

        canvas2.width = window.innerWidth * 0.4;
        canvas2.height = window.innerHeight;

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
    // Reset components on resize
    universe = null;
    planets = [];
    display = null;

    // Clear existing event listeners for buttons
    buttons.forEach(button => {
        button.destroyEvent();
    });
    buttons = [];

    // Universe
    universe = new Universe(canvas, ctx);

    // Background in second canvas
    display =  new Display(canvas2, ctx2);
    
    // Planets and Buttons
    // Sun
    const sun = CreatePlanet(canvas, ctx, "../../assets/planets/sun.svg", universe, 3.5, 0, 0.01, 0, "Sol");
    planets.push(sun);
    const sunButton = new Button(canvas2, ctx2, sun, {x: 15, y: 30}, display);
    buttons.push(sunButton);

    // Mercury
    const mercury = CreatePlanet(canvas, ctx, "../../assets/planets/mercury.svg", universe, 40, 0.2, 0.01, 0.02, "Mercurio");
    planets.push(mercury);
    const mercuryButton = new Button(canvas2, ctx2, mercury, {x: 15, y: 80}, display);
    buttons.push(mercuryButton);

    // Venus
    const venus = CreatePlanet(canvas,ctx, "../../assets/planets/venus.svg", universe, 20,0.27, 0.02, 0.01, "Venus");
    planets.push(venus);
    const venusButton = new Button(canvas2, ctx2, venus, {x: 15, y: 130}, display);
    buttons.push(venusButton);

    // Earth
    const earth = CreatePlanet(canvas,ctx, "../../assets/planets/earth.svg", universe, 20,0.35, 0.01, 0.003, "Tierra");
    planets.push(earth);
    const earthButton = new Button(canvas2, ctx2, earth, {x: 15, y: 180}, display);
    buttons.push(earthButton);
    //const moon = new Planet(canvas,ctx,earth.center, universe.circleRadius, 70, 0.1, 0.01, 0.1);

    // Mars
    const mars = CreatePlanet(canvas,ctx, "../../assets/planets/mars.svg", universe, 30,0.42, 0.01, 0.005, "Marte");
    planets.push(mars);
    const marsButton = new Button(canvas2, ctx2, mars, {x: 15, y: 230}, display);
    buttons.push(marsButton);

    // Jupiter
    const jupiter = CreatePlanet(canvas,ctx, "../../assets/planets/jupiter.svg", universe, 10,0.60, 0.01, 0.0025, "Jupiter");
    planets.push(jupiter);
    const jupiterButton = new Button(canvas2, ctx2, jupiter, {x: 15, y: 280}, display);
    buttons.push(jupiterButton);

    // Saturn
    const saturn = CreatePlanet(canvas,ctx, "../../assets/planets/saturn.svg", universe, 12,0.75, 0.01, 0.002, "Saturno");
    planets.push(saturn);
    const saturnButton = new Button(canvas2, ctx2, saturn, {x: 15, y: 330}, display);
    buttons.push(saturnButton);

    // Uranus
    const uranus = CreatePlanet(canvas,ctx, "../../assets/planets/uranus.svg", universe, 15,0.84, 0.01, 0.001, "Urano");
    planets.push(uranus);
    const uranusButton = new Button(canvas2, ctx2, uranus, {x: 15, y: 380}, display);
    buttons.push(uranusButton);

    // Neptune
    const neptune = CreatePlanet(canvas,ctx, "../../assets/planets/neptune.svg", universe, 15,0.95, 0.01, 0.0008, "Neptuno");
    planets.push(neptune);
    const neptuneButton = new Button(canvas2, ctx2, neptune, {x: 15, y: 430}, display);
    buttons.push(neptuneButton);

}

function Loop()
{
    deltaTime = 1/60;

    Draw();
    Update(deltaTime);

    requestAnimationFrame(Loop);
}

function Draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    universe.Draw();

    planets.forEach(planet => planet.Draw());

    display.Draw();

    buttons.forEach(button => button.Draw());
}

function Update(deltaTime)
{
    universe.Update(deltaTime);

    planets.forEach(planet => planet.Update());

}

function CreatePlanet(canvas, ctx, imageSrc, universe, scale, orbitRadius, rotationSpeed, orbitSpeed, name)
{
    const planet_Image = new Image();
    planet_Image.src = imageSrc;

    return new Planet (canvas, ctx, planet_Image, universe, scale, orbitRadius, rotationSpeed, orbitSpeed, name);
}

