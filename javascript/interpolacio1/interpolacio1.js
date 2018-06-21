POINTS = 12;

function Init()
{
    canvas = document.getElementById("canvasInterpolation");
    context = canvas.getContext("2d");
    
    xk = new Array();
    yk = new Array();
    yadd = new Array();
    
    var xadd = canvas.width / POINTS;
    
    for (var i = 0; i < POINTS; i++)
    {
        xk[i] = (xadd / 2) + i * xadd;
        yk[i] = Math.floor(Math.random() * canvas.height);
        
        do
        {
            yadd[i] = Math.floor(Math.random() * 20) - 10;
        } while (yadd[i] === 0);
    }
    
    yk[0] = yk[POINTS - 1] = canvas.height / 2;
}

function Draw()
{
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "#000000";
    context.lineWidth = 8;
    context.lineCap = "round";
    context.lineJoin = "round";
    
    context.shadowColor = "#a0a0a0";
    context.shadowOffsetX = 8;
    context.shadowOffsetY = 8;
    context.shadowBlur = 8;
    
    context.beginPath();
    context.moveTo(xk[0], yk[0]);
    
    for (var i = 1; i < POINTS; i++)
    {
        context.lineTo(xk[i], yk[i]);
    }
    
    for (var i = 1; i < POINTS - 1; i++)
    {
        yk[i] += yadd[i];
        
        if (yk[i] + yadd[i] < 0 || yk[i] + yadd[i] > canvas.height)
        {
            yadd[i] = -yadd[i];
        }
    }
    
    context.moveTo(xk[POINTS - 1], yk[POINTS - 1]);
    
    context.closePath();
    context.stroke();
    
    setTimeout(Draw, 20);
}
