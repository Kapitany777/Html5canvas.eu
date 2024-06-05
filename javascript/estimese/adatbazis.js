const Foszereplok =
    [
        "acélgólem", "agyaggólem", "alien", "alkoholista", "alligátor", "android",
        "bába", "babó", "bagoly", "banya", "bányaló", "bányarém", "barbár", "barlanglakó", "behemót", "béka", "bérgyilkos", "bérkommentelő", "bigfoot",
        "biorobot", "bogár", "borzalom",
        "boszorkány", "botosjeti", "brutális megsemmisítő", "búvárbéka",
        "csáp", "csatagólem", "csatamajom", "csimpánz", "csontváz", "csótány", "csupakabra",
        "denevér", "dinoszaurusz", "droid", "drón", "dzsinn",
        "elefánt", "előember", "élőholt",
        "farkasember", "farkas", "fémember", "fremen",
        "gengszter", "gerilla", "gibbon", "goblin", "godzilla", "gólem", "gorilla",
        "gyilkos darázs",
        "hacker", "hangya", "harci robot", "hobbit", "hóhér", "holló",
        "jeti",
        "káoszmajom", "kardhal", "kertitörpe", "kígyó", "kísértet", "kismadár", "kismajom", "kis szürke", "klón", "kőgólem", "krokodil", "kultista", "kutya", "küklopsz",
        "láphulla", "lázadó", "lidérc",
        "macska", "madár", "mágus", "majom", "mamut", "manó", "markoláb", "marslakó", "medve", "molyember", "múmia", "mutáns", "mutáns zombi",
        "nazgul", "nekromanta", "nepper", "nindzsa", "nünüke",
        "nyehőce", "nyúl",
        "ogre", "okkultista", "orángután", "ordas", "óriás", "óriáspók", "ork", "oroszlán", "ősember",
        "partizán", "patkány", "pikt", "plazmagömb", "pók", "politikus", "predátor", "prikulics",
        "rapper", "rémhírterjesztő", "robot", "rohamosztagos", "róka", "rókatündér",
        "sámán", "sárkány",
        "szakember", "szamuráj", "szellem", "szeparatista", "szeszkazán", "szőrállat", "szörnyeteg", "szőrös büfögő",
        "terminátor", "terrorista", "tigris", "toportyánféreg", "törpe", "traktoros", "troll",
        "ufonauta", "útonálló",
        "vámpír", "varázsló", "vérbarbár", "vérbíró", "vérfarkas", "vérmedve", "verőember", "villalakó", "vöröshangya",
        "zombi", "zugalak"
    ];

const Allapotok =
    [
        "barbár", "beteg", "brutális", "büdös",
        "édibédi", "éhes", "eszelős",
        "fáradt", "fertőzött",
        "ittas",
        "kopasz", "koszos",
        "lassú",
        "náthás",
        "nyálkás",
        "olajos",
        "pöhös", "poros",
        "radioaktív", "redvás", "részeg", "retkes", "rozsdás",
        "sánta", "smucig", "sóher", "sudribunkó", "sugárfertőzött", "sugárzó",
        "szomjas", "szőrös", "szutykos",
        "tahó", "tündibündi",
        "üntyümpüntyüm",
        "véres", "veszett", "vizes"
    ];


function GetSzo(szavak)
{
    return szavak[Math.floor(Math.random() * szavak.length)];
}

function GetFoszereplo()
{
    return GetSzo(Foszereplok);
}

function GetAllapot()
{
    return GetSzo(Allapotok);
}

