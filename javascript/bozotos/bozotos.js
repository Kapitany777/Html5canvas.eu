function Init()
{
    canvas = document.getElementById("canvasBozotos");
    ctx = canvas.getContext("2d");
    
    // create radial gradient
    grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 300);
    grd.addColorStop(0, '#10a010');
    grd.addColorStop(1, '#104010');
}

function Draw()
{
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < 100; i++)
    {
        var x1 = Math.random() * canvas.width;
        var y1 = Math.random() * canvas.height;

        var x2 = Math.random() * canvas.width;
        var y2 = Math.random() * canvas.height;

        ctx.beginPath();
        ctx.strokeStyle = getRandomGrayColor();
        ctx.lineWidth = Math.random() * 5 + 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }
    
    ctx.font = "bold 32px Verdana";
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#202020";
    ctx.lineWidth = 1;
    
    ctx.fillText("Áttörés a bozótoson", 30, 50);
    ctx.strokeText("Áttörés a bozótoson", 32, 52);
    
    setTimeout(Draw, 50);
}
