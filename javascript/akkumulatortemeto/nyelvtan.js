function Nevelo(szo, nagyKezdoBetu)
{
    maganhangzok = "aáeéiíoóöőuúüű";
    nevelo = "";
    
    if (maganhangzok.includes(szo[0].toLowerCase()))
    {
        if (nagyKezdoBetu)
            nevelo = "Az";
        else
            nevelo = "az";
    }
    else
    {
        if (nagyKezdoBetu)
            nevelo = "A";
        else
            nevelo = "a";
    }
    
    return nevelo + " " + szo;
}
