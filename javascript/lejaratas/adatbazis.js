var CimKezdet =
[
    "A demokrácia szégyene", "Az elhallgatott igazság", "Az igazság kiderül",
    "Betelt a pohár",
    "Elkaptuk",
    "Kiderítettük", "Kiderült az igazság", "Kinyomoztuk",
    "Megrázó tények", "Most lebukott",
    "Sötét titkok",
    "Tolvajok",
    "Utánajártunk",
    "Véget ért a játszma"
];

var CimVege =
[
    "bandája", "bűnei",
    "lopásai",
    "sötét titkai", "sötét üzelmei",
    "sunnyogása",
    "titkai",
    "üzelmei"
];

var Beosztasok =
[
    "alelnök",
    "bizottsági tag",
    "elnök",
    "főtitkár", "frakcióvezető",
    "intézményvezető",
    "jegyző", "jogász", "jogtanácsos",
    "képviselő",
    "menedzser", "miniszter",
    "országgyűlési képviselő",
    "önkormányzati képviselő",
    "parlamenti képviselő", "pártelnök", "polgármester",
    "ügyvéd"
];

var VezetoiPoziciok =
[
    "biztonsági főnök",
    "gazdasági vezető",
    "igazgató", "igazgatóhelyettes",
    "jogász", "jogtanácsos",
    "HR igazgató"
];

var Bunozok =
[
    "adócsaló", "alkoholcsempész",
    "cigarettacsempész",
    "csaló", "csempész",
    "huligán",
    "jampec",
    "kasszafúró",
    "munkakerülő",
    "rabló",
    "sikkasztó", "strici",
    "szélhámos",
    "tolvaj",
    "útonálló"
];

var Intezmenyekben =
[ 
    "akkumulátortemetőben", "aknában", "alagútban", "atombunkerben", "azbesztpalagyárban",
    "bányában", "barakképületben", "barlangban", "bunkerben",
    "csárdában", "csatornában", "csónakházban",
    "dögtelepen",
    "elmegyógyintézetben", "erdészházban", "erdőben", "erőműben",
    "faházban", "földalatti bázison",
    "gátőrházban",
    "gyárban", "gyártelepen", "gyümölcsösben",
    "házban", "hegyen",
    "kápolnában", "kastélyban", "katakombában", "kilátóban", "kocsmában", "kolostorban", "kriptában", "kunyhóban", "kútban",
    "ligetben",
    "magaslesen", "malomban", "menedékházban", "mocsárban", "múzeumban",
    "őrházban", "őrtoronyban",
    "parkolóban", "pincében", "piramisban",
    "raktárban", "repülőtéren",
    "sírban",
    "szélmalomban", "szigeten", "szivattyútelepen",
    "tanyán", "tehenészetben", "temetőben", "templomban", "templomromban", "turistaházban",
    "útőrházban", "úttörőházban",
    "vadászházban", "vasúti megállóban", "vasúti őrházban", "vasútállomáson", "várban", "világítótoronyban", "vízimalomban"
];

var Pofatlansagok =
[
    "arcátlanul",
    "faarccal", "fölényesen",
    "kárörvendően",
    "pofátlanul", "pökhendien",
    "rezzenéstelen arccal",
    "sötét tekintettel", "sunyin",
    "tenyérbemászóan"
];

var Informatorok =
[
    "áldozatai",
    "beosztottjai",
    "haragosai",
    "ismerősei",
    "kollégái", "közeli ismerősei",
    "szomszédai",
    "volt kollégái"
];

var NegativTulajdonsagok =
[
    "alkoholista", "analfabéta", "anarchista", "antiszemita",
    "drogos",
    "fasiszta", "fémgyűjtő",
    "garázda",
    "gyorshajtó", "gyorstermelő",
    "hamiskártyás", "homofób",
    "illiberális",
    "kirekesztő", "kocsmatöltelék", "kriptokommunista",
    "liberális", "libernyák",
    "neonáci",
    "rasszista",
    "sorozatfüggő", "strici",
    "szerencsejátékos",
    "táppénzcsaló", "terrorista",
    "xenofób"
];

var NegativCselekedetek =
[
    "az utcán legelteti a birkáit",
    "dohányzik az irodájában",
    "füvezik",
    "hagymát eszik az irodájában",
    "kengurut eszik ebédre", "köpköd az utcán",
    "lopja az áramot", "lopja a gázt", "lopja a szomszéd szilváját", "lopja a WC-papírt a hivatalból",
    "megcsalja a feleségét",
    "nem hajtja le a vécéülőkét", "nem hordja a maszkot", "nem nyírja a füvet",
    "részegen fetreng az árokban", "rugdossa a kutyáját",
    "sörrel koccint", "struccot eszik vacsorára",
    "trollkodik a Fészbúkon",
    "veri a feleségét", "veri a szomszédot",
    "zöld zoknit hord"
];

function GetSzo(szavak)
{
    return szavak[Math.floor(Math.random() * szavak.length)];
}

function GetCim(ellenfelNeve)
{
    return GetSzo(CimKezdet) + ": " + ellenfelNeve + " " + GetSzo(CimVege);
}

function GetBeosztas()
{
    return GetSzo(Beosztasok);
}

function GetVezetoiPozicio()
{
    return GetSzo(VezetoiPoziciok);
}

function GetBunozo()
{
    return GetSzo(Bunozok);
}

function GetIntezmenyben()
{
    return GetSzo(Intezmenyekben);
}

function GetPofatlansag()
{
    return GetSzo(Pofatlansagok);
}

function GetInformator()
{
    return GetSzo(Informatorok);
}

function GetNegativTulajdonsag()
{
    return GetSzo(NegativTulajdonsagok);
}

function GetNegativCselekedet()
{
    return GetSzo(NegativCselekedetek);
}
