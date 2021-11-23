const vallalatNevek =
    ["Big", "Blue", "Brown", "Cherry", "Damage", "ETA", "Green", "IFF", "Pear", "Purple", "Red", "Research", "RFZT", "Sinclair", "Small", "Umbrella", "ZBX"];

const vallalatTipusok =
    ["Consulting", "Corporation", "GmbH", "Inc.", "Ltd.", "Technologies"];

function GetVallalatNev()
{
    let vallalatNev = vallalatNevek[Math.floor(Math.random() * vallalatNevek.length)];
    let vallalatTipus = vallalatTipusok[Math.floor(Math.random() * vallalatTipusok.length)];

    return vallalatNev + " " + vallalatTipus;
}
