var gameStarted;
var gameUpdater;

var rectangleWidth;
var leftLinePosition;
var rightLinePosition;
var playerSpeed;
var computerSpeed;

var angle;

var levelNumber;

var levelNames =
        ["A bosszúálló tudós hegye",
         "A sötét templom városa",
         "A ciklopi akkumulátortemető",
         "A tébolyult rémület városa",
         "A borzalmas utca",
         "A vérszívó lidérc kútja",
         "A lopakodó jeti kriptája",
         "A mélyűri elmegyógyintézet",
         "A vérszívó borzalom hegye",
         "A tébolyult gorilla mocsara"];

function Init()
{
    clearTimeout(gameUpdater);
    
    gameStarted = false;
    
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    
    levelNumber = 1;
    
    angle = 0;
    
    SetGameValues(levelNumber);
    SetLevelName(levelNumber);
}

function SetLevelName(levelNumber)
{
    $("#level").text(levelNumber + ". szint: " + levelNames[levelNumber - 1]);
}

function DrawStar(x, y, r, angle, rays)
{
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    
    var pl = 2 * Math.PI / rays;
    
    for (var i = 0; i < rays; i++)
    {
        var x1 = r * Math.cos(angle + i * pl);
        var y1 = r * Math.sin(angle + i * pl);
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + x1, y + y1);
        ctx.stroke();
    }
}

function Draw()
{
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    
    ctx.fillStyle = "#a0a000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#000080";
    ctx.fillRect(0, 110, rectangleWidth, 180);
    
    ctx.fillStyle = "#800000";
    ctx.fillRect(leftLinePosition, 0, 5, canvas.height);
    
    ctx.fillStyle = "#008000";
    ctx.fillRect(rightLinePosition, 0, 5, canvas.height);
    
    angle += Math.PI / 9;
    
    for (var i = 0; i < 11; i++)
    {
        DrawStar(50 + i * 50, 50, 40, angle, 12);
        DrawStar(50 + i * 50, canvas.height - 50, 40, angle, 12);
    }
}

function UpdatePlayer()
{
    rectangleWidth += playerSpeed;
}

function UpdateGame()
{
    rectangleWidth -= computerSpeed;
    
    Draw();
    
    if (rectangleWidth >= rightLinePosition)
    {
        gameStarted = false;

        levelNumber++;
        
        if (levelNumber == 11)
        {
            alert("Gratulálok, legyőzted a tébolyult tudóst!");
            
            levelNumber = 1;            
            Init();
            Draw();
        }
        else
        {
            SetGameValues(levelNumber);
            SetLevelName(levelNumber);
        }
    }
    else if (rectangleWidth <= leftLinePosition + 5)
    {
        gameStarted = false;
        SetGameValues(levelNumber);
    }
    else
    {    
        gameUpdater = setTimeout(UpdateGame, 100);
    }
}

function SetGameValues(levelNumber)
{
    rectangleWidth = canvas.width / 2;
    leftLinePosition = levelNumber * 25;
    rightLinePosition = canvas.width - 100;
    
    playerSpeed = 20;
    computerSpeed = 3 + levelNumber * 0.9;
}

$(document).ready(
        function()
        {
            Init();
            Draw();
            
            $("#buttonRestart").click(
            function()
            {
                Init();
                Draw();
            });

            $("#game").click(
            function()
            {
                if (!gameStarted)
                {
                    gameStarted = true;
                    gameUpdater = setTimeout(UpdateGame, 100);
                }

                UpdatePlayer();
            });
        });
