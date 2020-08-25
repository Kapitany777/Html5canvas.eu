function GetKifogas()
{
    return GetBevezetes() + " " + GetTettes() + " " + GetCselekedet() + "!";
}

function KifogasGeneralasa()
{
    var kifogas = GetKifogas();
    
    $("#kifogas").html(kifogas);
}

$(document).ready(
function()
{
    KifogasGeneralasa();
});
