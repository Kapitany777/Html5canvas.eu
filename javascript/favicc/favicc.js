const eredetiNevSzotagLista =
    [
        ["alma", "szeg"],
        ["árpád", "halom"],
        ["balló", "szög"],
        ["berek", "fürdő"],
        ["csany", "telek"],
        ["csárda", "szállás"],
        ["dió", "szeg"],
        ["füzes", "gyarmat"],
        ["gát", "ér"],
        ["herceg", "szántó"],
        ["hód", "mező", "vásár", "hely"],
        ["holló", "kő"],
        ["jakab", "szállás"],
        ["kecske", "mét"],
        ["kónya", "szék"],
        ["kő", "szeg"],
        ["kun", "ágota"],
        ["méh", "kerék"],
        ["örmény", "kút"],
        ["puszta", "monostor"],
        ["püspök", "ladány"],
        ["szar", "vas"],
        ["szeg", "vár"],
        ["szent", "endre"],
        ["szent", "király"],
        ["sziget", "szent", "miklós"],
        ["szombat", "hely"],
        ["tatár", "szent", "györgy"],
        ["tisza", "föld", "vár"],
        ["város", "föld"],
        ["vértes", "szőlős"]
    ];

const foglalkozasok =
    [
        "fazekas",
        "harcos",
        "íjász",
        "kovács",
        "lovász",
        "pap",
        "rohamosztagos",
        "sámán", "szekerész",
        "táltos", "törzsfő"
    ];

function sokIttA(szotagok)
{
    let sokItt = "";

    for (const szotag of szotagok)
    {
        sokItt += "sok itt " + Nevelo(szotag) + ", ";
    }

    return sokItt;
}

function eredetiNev(szotagok)
{
    let eredetiNev = "";

    for (const szotag of szotagok)
    {
        eredetiNev += szotag;
    }

    return capitalizeFirstLetter(eredetiNev);
}

function capitalizeFirstLetter(text)
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function FaviccGeneralasa()
{
    let eredetiNevSzotagok = eredetiNevSzotagLista[Math.floor(Math.random() * eredetiNevSzotagLista.length)];

    let vicc = "Árpád vezér, midőn járta az országot, hirtelen megállt egy helyen, és így szólt:<br><br>";

    let arpadMondat = "- " + capitalizeFirstLetter(sokIttA(eredetiNevSzotagok)) + "legyen e hely neve " + eredetiNev(eredetiNevSzotagok) + "!<br><br>";

    vicc += arpadMondat;

    vicc += "Így is lett. Mentek tovább, egyszer csak Árpád vezér ismét megállt, és ezt mondta:<br><br>";
    vicc += arpadMondat;

    let foglalkozas = foglalkozasok[Math.floor(Math.random() * foglalkozasok.length)];

    vicc += "- De vezérünk, ilyen hely már létezik! - figyelmeztette az egyik " + foglalkozas + ".<br><br>";

    let varosnev = VarosnevGeneralasa();
    vicc += "Árpád apánk gondolt egyet, majd megszólalt:<br><br>"
    vicc += "- Tényleg? Akkor hát legyen " + varosnev + "!<br>";

    $("#viccSzovege").html(vicc);
}

$(document).ready(
    function()
    {
        FaviccGeneralasa();
    });
