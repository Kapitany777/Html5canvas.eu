function Nevelo(szo)
{
    const maganhangzok = "aáeéiíoóöőuúüű";
    let nevelo = "";

    if (maganhangzok.includes(szo[0].toLowerCase()))
    {
        nevelo = "az";
    }
    else
    {
        nevelo = "a";
    }

    return nevelo + " " + szo;
}
