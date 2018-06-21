function Base(x, y, r, color)
{
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
}

function Ant(x, y)
{
    this.x = x;
    this.y = y;
}

function Length(x, y)
{
    return Math.sqrt(x * x + y * y);
}

function Distance(ant, base)
{
    var dx = ant.x - base.x;
    var dy = ant.y - base.y;
    
    return Math.sqrt(dx * dx + dy * dy);
}

function NearestBaseIndex(ant)
{
    var baseIndex = -1;
    var min = 100000;
    
    for (var i = 0; i < bases.length; i++)
    {
        if (bases[i].r > 0)
        {
            var d = Distance(ant, bases[i]);

            if (d < min)
            {
                baseIndex = i;
                min = d;
            }
        }
    }
    
    return baseIndex;
}

function Init()
{
    canvas = document.getElementById("canvasField");
    ctx = canvas.getContext("2d");
    
    bases = new Array();
    
    bases[0] = new Base(canvas.width / 2, canvas.height / 2, 20);
    
    for (var i = 1; i < 10; i++)
    {
       bases[i] = new Base(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), Math.floor(Math.random() * 50) + 10, getRandomColor());
    }
    
    ants = new Array();
    
    for (var i = 0; i < 200; i++)
    {
        ants[i] = new Ant(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    }
}

function MoveAnts()
{
    for (var i = 0; i < ants.length; i++)
    {
        var baseIndex = NearestBaseIndex(ants[i]);
        
        if (baseIndex !== -l && typeof(bases[baseIndex]) !== "undefined")
        {
            var x = bases[baseIndex].x - ants[i].x;
            var y = bases[baseIndex].y - ants[i].y;
            var l = Length(x, y);

            ants[i].x += 2 * x / l;
            ants[i].y += 2 * y / l;

            if (Distance(ants[i], bases[baseIndex]) < bases[baseIndex].r)
            {
                ants[i] = new Ant(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
                
                if (bases[baseIndex].r > 1)
                {
                    bases[baseIndex].r--;
                }
                else
                {
                    bases[baseIndex] = new Base(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), Math.floor(Math.random() * 50) + 10, getRandomColor());
                }
            }
        }
    }
}

function DrawBases()
{
    for (var i = 0; i < bases.length; i++)
    {
        ctx.fillStyle = bases[i].color;
        
        ctx.beginPath();
        ctx.arc(bases[i].x, bases[i].y, bases[i].r, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function DrawAnts()
{
    ctx.fillStyle = "#000000";
    
    for (var i = 0; i < ants.length; i++)
    {
        ctx.fillRect(ants[i].x, ants[i].y, 4, 4);
    }
}

function Draw()
{
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    MoveAnts();
    DrawBases();
    DrawAnts();
    
    setTimeout(Draw, 50);
}

window.onload = function()
{
    Init();
    Draw();
};
