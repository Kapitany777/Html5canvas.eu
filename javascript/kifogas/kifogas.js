function KifogasGeneralasa()
{
    var kifogas = GetBevezetes() + " " + GetTettes() + " " + GetCselekedet() + "!";
    
    $("#kifogas").html(kifogas);
}

$(document).ready(
function()
{
    KifogasGeneralasa();
});
