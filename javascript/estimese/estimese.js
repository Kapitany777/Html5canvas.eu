function capitalizeFirstLetter(text)
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function EstiMeseGeneralasa()
{
    const foszereplo = GetFoszereplo();
    const allapot = GetAllapot();
    const segito = GetFoglalkozas();

    let mese = "Egyszer " + Nevelo(foszereplo) + " nagyon " + allapot + " lett.<br><br>";
    mese += "- " + capitalizeFirstLetter(allapot) + " vagyok, " + allapot + " vagyok! - rikoltozta.<br><br>";
    mese += "Arra járt " + Nevelo(segito) + ".<br><br>";
    mese += "- Te, " + foszereplo + ", ne legyél már annyira " + allapot + "! - mondta.<br><br>";
    mese += "És ennyiben maradtak.<br><br>";

    $("#meseSzovege").html(mese);
}

$(document).ready(
    function()
    {
        EstiMeseGeneralasa();
    });
