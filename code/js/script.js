var canvas = /** @type {HTML CanvasElement} */(null);
var  ctx = /** @type {CanvasRenderingContext2D} */(null);

document.addEventListener('DOMContentLoaded', Init);

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

}

function Loop()
{
    Draw();
    Update();

    requestAnimationFrame(Loop);
}

function Draw()
{

}

function Update()
{
    
}