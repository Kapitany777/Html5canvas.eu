var elemek =
[ "alsó", "apát", "árok", "ásott", "atom", "azbeszt",
  "babetta", "bács", "bádog", "balaton", "balta", "baranya", "béka", "béla", "berek", "bivaly", "bodza", "boldog", "boros", "borzasztó", "botos", "büdös",
  "csany", "csáp", "csillag", "csont",
  "dezső", "droid", "duna",
  "fa", "farkas", "fasza", "fehér", "fejsze", "fekete", "felső", "ferenc",
  "gáz", "gép", "gipsz", "gorilla", "göröngyös",
  "haragos", "harka", "hejő", "hód", "holt",
  "jakab", "jász", "jenő", "jeti",
  "kalóz", "kara", "karton", "kecske", "kettős", "király", "kis", "köd", "kovács", "kripta", "kun", "kurbli", "kübek", "külső", "kukutyin",
  "lászló", "lidérc", "lovag", "lőrinc",
  "macska", "majom", "medgyes", "medve", "mély", "mező", "mihály", "miklós", "mocsár", "motoros", "mucsa", "mulder", "mutáns",
  "nagy", "naitta", "nindzsa", "nyír",
  "ork",
  "őr", "öreg",
  "pala", "pájszer", "pákó", "péter", "pilis", "piripócs", "pogány", "pornó", "puszta",
  "rabló", "rém", "rettentő", "retyó", "réz", "robot", "roham", "rom", "rotyó", "rottyantó",
  "salak", "salamon", "sáp", "sár", "sas", "sekély", "sima", "sió", "sír", "sisak", "sörös", "sugár", "surmó", "suttyó", "sutyerák",
  "szamuráj", "szeg", "szent", "szög",
  "takta", "tápió", "tisza", "tó", "törpe", "traktor", "troll", "tüske",
  "ubul", "út",
  "vas", "vásár", "veres", "véres", "virág", "víz", "vörös",
  "zala", "zombi", "zóna" ];

var vege =
[ "akna", "alja", "almás", "apáti", "asszonyfa",
  "bánya", "barackos", "barcika", "batta", "bél", "berény", "berenye", "bodzás", "bög", "bogdány",
  "citromos",
  "csehi",
  "dinnyés", "diós",
  "fa", "falu", "falva", "fok", "fő", "föld", "földe", "füred", "fürdő",
  "galambos", "gerendás", "grád",
  "gyarmat", "gyepű", "györk",
  "hagymás", "halma", "halom", "harkány", "ház", "háza", "hegy", "hely", "hídvég",
  "iván",
  "járás",
  "karos", "káta", "kert", "keve", "kő", "körtés", "kotkodács", "kötöny", "kút", "kürt",
  "ladány", "lak", "láp", "lápa",
  "mágocs", "major", "majsa", "megyer", "mellék", "mérges", "miske", "mocsolád", "muzsaj",
  "németi",
  "örs",
  "palkonya", "palota", "patak", "podvás", "püspöki",
  "redvás", "reterát", "röcsöge",
  "sámson", "susnyás",
  "szabadi", "szalka", "szállás", "szamos", "szántó", "szecső", "szegi", "szék", "szemét", "sziget", "szőlős",
  "tanya", "tarcsa", "telek", "temető", "templom", "tés", "tomaj", "tó", "tőke", "tornya", "torony", "tóti", "traktoros",
  "ugornya", "úr",
  "ványa", "vár", "várad", "város", "vásár", "vecse", "vég", "vencsellő", "vértes", "völgy",
  "zsolca" ];


function VarosnevGeneralasa()
{
    var varosnev = "";
    
    var elemszam = Math.floor(Math.random() * 3) + 1;
    
    for (var i = 0; i < elemszam; i++)
    {
        varosnev += elemek[Math.floor(Math.random() * elemek.length)];
    }
    
    varosnev += vege[Math.floor(Math.random() * vege.length)];
    
    $("#varosnev").text(varosnev);
}

$(document).ready(
        function()
        {
            VarosnevGeneralasa();
        });
