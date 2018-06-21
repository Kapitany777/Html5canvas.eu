var vallalatNevek =
[ "Big", "Blue", "Cherry", "Damage", "Green", "Pear", "Purple", "Red", "Research", "RFZT", "Sinclair", "Small", "Umbrella", "ZBX" ];

var vallalatTipusok =
[ "Corporation", "GmbH", "Inc.", "Ltd.", "Technologies" ];

function GetVallalatNev()
{
    var vallalatNev = vallalatNevek[Math.floor(Math.random() * vallalatNevek.length)];
    var vallalatTipus = vallalatTipusok[Math.floor(Math.random() * vallalatTipusok.length)];
    
    return vallalatNev + " " + vallalatTipus;
}

