function MovingObject(x, size, color, a, t)
{
    this.x = x;
    this.size = size;
    this.color = color;
    this.a = a;
    this.t = t;
}

function Init()
{
    canvas = document.getElementById("canvasRectangles");
    ctx = canvas.getContext("2d");
    
    // create radial gradient
    grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 300);
    grd.addColorStop(0, "#000090");
    grd.addColorStop(1, "#000040");
    
    movingObjects = new Array();
    
    for (i = 0; i < 50; i++)
    {
        var x = Math.floor(Math.random() * canvas.width);
        var size = Math.floor(Math.random() * 15) + 10;
        var color = getRandomColor();
        var a = Math.random() * 20;
        var t = Math.random() * 5;
        movingObjects[i] = new MovingObject(x, size, color, a, t);
    }
}

function Draw()
{
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (i = 0; i < movingObjects.length; i++)
    {
        var y = 0.5 * movingObjects[i].a * movingObjects[i].t * movingObjects[i].t;
        ctx.fillStyle = movingObjects[i].color;
        ctx.fillRect(movingObjects[i].x, y, movingObjects[i].size, movingObjects[i].size);
        
        if (y > canvas.height)
        {
            movingObjects[i].x = Math.random() * canvas.width;
            movingObjects[i].t = 0;
        }
        else
        {
            movingObjects[i].t += 0.5;
        }
    }

    setTimeout(Draw, 50);
}
