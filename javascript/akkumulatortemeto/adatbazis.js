var Fonevek =
[ "agyvelő", "akkumulátortemető", "álom", "alkimista", "árny", "árnyék", "atomfelhő", "azbesztpalagyár",
  "bánya", "betolakodó", "bomlás", "boncterem", "borzalom", "boszorkány", "bűntett",
  "csáp", "csatorna", "csontváz",
  "dolog", "dögkút", "dögtelep",
  "elmegyógyintézet", "élőhalott",
  "fal", "félelem",
  "gerilla", "gorilla",
  "halálhörgés", "halálkommandó", "halálosztag", "halottak", "ház", "hegy", "hulla", "hullahegyek",
  "ideggáz",
  "járvány", "jeti",
  "katakomba", "kép", "kísérlet", "kísértet", "kivégzés", "kivégzőosztag", "kripta", "köd", "kút", "kutya",
  "láncfűrész", "láphulla", "lelkész", "leszámolás", "levegő", "lidérc",
  "macska", "majom", "mészárlás", "múmia", "mutáns", "múzeum",
  "nyagóc",
  "orvlövész",
  "öregember",
  "patkány", "pusztulás",
  "rém", "rémtett", "rémület", "rettenet", "rom", "rothadás",
  "sintér", "sír", "sírrabló", "sötétség", "suttogás", "szellem", "szörnyeteg",
  "tél", "temető", "templom", "terminátor", "tömeggyilkos", "tömegsír", "tudós",
  "utca",
  "város", "vámpír", "végzet", "vér", "véreső", "vérfarkas",
  "zombi", "zóna" ];

var EjszakaJelzok =
[ "csillagtalan",
  "fagyos",
  "hideg", "holdfényes",
  "nyomasztó",
  "sötét",
  "viharos" ];

var Szornyek =
[ "acélgólemek", "alienek", "androidok",
  "barbárok", "bérgyilkosok", "bérkommentelők", "bogarak", "borzalmak",
  "csápok", "csimpánzok", "csontvázak", "csótányok", "csupakabrák",
  "denevérek", "droidok", "drónok",
  "élőholtak",
  "farkasemberek", "farkasok",
  "gengszterek", "gerillák", "gibbonok", "goblinok", "godzillák", "gólemek", "gorillák",
  "halottak", "hangyák", "harci robotok", "hobbitok", "hóhérok", "hullák",
  "jetik",
  "káoszmajmok", "kardhalak", "kísértetek", "kis szürkék", "klónok", "kultisták", "kutyák", "küklopszok",
  "láphullák", "lidércek",
  "macskák", "majmok", "manók", "marslakók", "medvék", "molyemberek", "múmiák", "mutánsok", "mutáns zombik",
  "nindzsák",
  "ogrék", "okkultisták", "orángutánok", "óriások", "óriáspókok", "orkok",
  "patkányok", "pókok", "politikusok",
  "rémhírterjesztők", "robotok", "rohamosztagosok",
  "szamurájok", "szellemek", "szeparatisták", "szörnyetegek",
  "terminátorok", "terroristák", "törpék", "traktorosok", "trollok",
  "ufonauták",
  "vámpírok", "vérbírók", "vérfarkasok", "vérmedvék", "verőemberek",
  "zombik", "zugalakok" ];

var Birtokok =
[ "álma", "árnyéka",
  "baltája", "borzalma",
  "csápja", "csontja", "csontváza",
  "fala", "fejszéje", "félelme", "fűrésze",
  "háza", "hegye",
  "katakombája", "képe", "kísérlete", "kísértete", "kriptája", "kutyája", "kútja",
  "mocsara", "múmiája", "múzeuma",
  "naplója", "nekropolisza",
  "rettenete",
  "sírja", "suttogása", "szelleme",
  "temetője", "temploma",
  "utcája",
  "városa", "végzete",
  "zónája" ];

var Helyekbol =
[ "akkumulátortemetőből", "alagútból", "azbesztpalagyárból",
  "bányából", "barlangból",
  "erdőből",
  "csatornából",
  "gátőrházból",
  "gyárból",
  "hegyről",
  "kastélyból", "katakombából", "kriptából", "kunyhóból", "kútból",
  "lápvidékről",
  "malomból", "mélyből", "mélyűrből", "menedékházból", "mocsárból",
  "pincéből",
  "sírból", "sötétségből",
  "szigetről",
  "temetőből", "turistaházból" ];

var Helyekben =
[ "akkumulátortemetőben", "alagútban", "azbesztpalagyárban",
  "bányában", "barlangban", "boncasztalon", "boncteremben",
  "csatornában",
  "dögtelepen",
  "elmegyógyintézetben",
  "falon",
  "házban", "hegyen",
  "katakombában", "kriptában", "ködben", "kútban",
  "lápvidéken",
  "malomban", "mélyben", "mélyűrben", "menedékházban", "mocsárban", "múzeumban",
  "nekropoliszban",
  "pincében", "piramisban",
  "sírban",
  "szigeten",
  "temetőben", "templomban", "tömegsírban", "turistaházban",
  "utcán",
  "városban" ];

var Rejtekhelyekben =
[ "akkumulátortemetőben", "aknában", "alagútban", "atombunkerben", "azbesztpalagyárban",
  "bányában", "barakképületben", "barlangban", "bunkerben",
  "csárdában", "csatornában", "csónakházban",
  "dögtelepen",
  "elmegyógyintézetben", "erdészházban", "erdőben", "erőműben",
  "faházban", "földalatti bázison",
  "gátőrházban",
  "gyárban", "gyártelepen", "gyümölcsösben",
  "házban", "hegyen",
  "kastélyban", "katakombában", "kilátóban", "kocsmában", "kriptában", "kunyhóban", "kútban",
  "ligetben",
  "magaslesen", "malomban", "menedékházban", "mocsárban", "múzeumban",
  "őrházban", "őrtoronyban",
  "parkolóban", "pincében", "piramisban",
  "raktárban", "repülőtéren",
  "sírban",
  "szigeten", "szivattyútelepen",
  "tanyán", "tehenészetben", "temetőben", "templomban", "templomromban", "turistaházban",
  "útőrházban", "úttörőházban",
  "vadászházban", "vasúti megállóban", "vasúti őrházban", "vasútállomáson", "várban" ];

var Jelzok =
[ "agyhalott", "agyrohasztó", "anarchista",
  "barbár", "barlangi", "borzalmas", "bosszúálló", "brutális", "büdös", "bűzlő",
  "cigarettás", "ciklopi",
  "dögletes", "dögsanyarta",
  "elátkozott", "elmebeteg", "eszelős", "eszement", "eszkimó",
  "fékevesztett", "féllábú",
  "génmanipulált", "génmódosított", "gépesített", "gigantikus", "gonosz",
  "gyanús",
  "habzó szájú", "halott", "hatalmas", "hegyi", "hideg",
  "idegen", "indián",
  "kidülledt szemű", "klónozott", "ködös",
  "láncfűrészes", "lápi", "lázadó", "lebegő", "lidérces", "lopakodó",
  "más dimenzióból érkezett", "megnevezhetetlen", "mélyűri", "mocsári", "mutáns",
  "névtelen", "nukleáris", "nyálkás",
  "osonó", "őrjöngő", "őrült", "ősi",
  "páncélozott", "pöhös", "pszichopata", "pusztító",
  "radioaktív", "rángatózó", "rémséges", "rettenetes", "rituális", "rothadó",
  "síri", "sötét", "sugárfertőzött", "sugárzó",
  "szörnyű", "szürke",
  "tébolyult", "temetői", "tomboló", "tömegpusztító",
  "vegyi", "végzetes", "vén", "véres", "vérgonyasztó", "vérivó", "vérszívó", "veszett",
  "zulu" ];

var UndoritoAnyagokat =
[ "gennyes maradványokat", "gennyet",
  "heknyát",
  "retket",
  "sarat", "sugárzó izotópot", "szennyet", "szutykot",
  "vért" ];

var BosszuJelzok =
[ "borzalmas", "brutális",
  "eszeveszett",
  "kimondhatatlan",
  "őrült",
  "rémséges", "rettenetes",
  "szörnyű" ];

var Szinek =
[ "barna",
  "fehér",
  "fekete",
  "kék",
  "lila",
  "piros",
  "sárga",
  "szürke",
  "terepszínű",
  "zöld" ];

var Foglalkozasok =
[ "ács", "adatrögzítő", "adószakértő", "agysebész", "antikvárius", "antropológus", "autószerelő",
  "bádogos", "bányamérnök", "bányász", "barbár", "belső ellenőr", "bérgyilkos", "bérkommentelő", "bíboros", "biciklis", "bicikliőr", "biztonsági őr", "blogger", "bölcsész",
  "bolti eladó", "bíró", "bombaszakértő", "borbély", "botanikus", "búvár",
  "CIA-ügynök", "cukrász",
  "csatornatisztító", "csillagász",
  "diszpécser",
  "éjjeliőr", "elektrotechnikus", "elemző", "erdész", "esztergályos",
  "farmer", "favágó", "FBI-ügynök", "feltaláló", "filozófus", "fizikus", "fogadós", "fogorvos", "fogtechnikus", "földmérő", "földműves", "futballsztár", "füvesember",
  "géppuskás", "gombaszakértő", "gránátos", "gyalogos", "gyepmester", "gyógytornász",
  "hajóskapitány", "halász", "harangozó", "harckocsizó", "hegesztő", "hóhér", "hurrikánkineziológus",
  "idegenvezető", "idegsebész", "informatikus", "inkvizítor", "irattáros", "író",
  "jogász",
  "kalauz", "kárpitos", "kazánfűtő", "kazánkovács", "kém", "kéményseprő", "kertész", "kidobóember", "kocsmáros", "kommandós", "konspiratológus", "kontroller",
  "kovács", "kántor", "kőműves", "könyvelő", "koporsókészítő", "kórboncnok", "könyvtáros", "körzeti megbízott", "körzeti orvos", "kubikos",
  "lakatos", "légiforgalmi irányító", "légvédelmi tüzér", "lelkész", "levéltáros", "logopédus",
  "maffiózó", "magánnyomozó", "matematikus", "matróz", "méhész", "mesterlövész", "mérnök", "meteorológus", "motoros hobó", "mozdonyvezető",
  "mozigépész", "muzeológus",
  "nanotechnológus", "nindzsa",
  "nyomozó", "nyugalmazott admirális", "nyugalmazott ezredes", "nyugalmazott őrnagy", "nyugalmazott tengernagy",
  "okkultista", "operátor", "orkológus", "őstermelő", "összeesküvő",
  "páncélgránátos", "pap", "paraszt", "parkőr", "patikus", "pék", "pénztáros", "politikus", "politológus", "portás", "postás", "programozó", "pszichológus", "püspök",
  "radarkezelő", "recepciós", "régész", "rendőr", "rendszerelemző", "rendszergazda", "rohamosztagos", "röntgenorvos",
  "sámán", "séf", "sekrestyés", "sírásó", "sportoló", "statiszta",
  "szabó", "szabotőr", "szakács", "szakszervezeti vezető", "szamuráj", "szerzetes", "szociálpolitikus", "szociológus", "szonárkezelő",
  "tanár", "targoncás", "tarlófelelős", "technikus", "téemkás", "tehenész", "tengeralattjárós", "térképész", "testőr", "tetőfedő", "titkosügynök", "traktoros",
  "tróger", "tüzér", "tűzszerész",
  "ufológus", "ügynök", "ügyvéd", "újságíró", "űrhajós", "űrkutató", "űrgárdista", "utazó ügynök", "utcaseprő", "üzemmérnök",
  "vagyonőr", "vasutas", "vegyész", "vérbíró", "világítótorony-őr", "villanyszerelő",
  "zoológus", "zöldségtermesztő", "zugfirkász", "zugügyvéd" ];

var FoglalkozasPrefixek =
[ 
    "al", "alulfizetett ",
    "bér",
    "demotivált ",
    "fedett ", "fő",
    "helyettes ",
    "ipari ",
    "kreatív ", "különleges ",
    "megbízott ", "mester",
    "nyugalmazott ",
    "segéd", "speciális ", "szak",
    "vezér", "vezető "
];

var FoglalkozasPostfixek =
[
    "alelnök", "asszisztens",
    "csoportvezető",
    "elnök",
    "főosztályvezető",
    "igazgató",
    "osztályvezető",
    "szakasszisztens", "szakértő", "szaktanácsadó",
    "tanácsadó", "technikus"
];

var MilyenTelepulesek =
[ "álmos", "átokverte",
  "elátkozott", "elfeledett", "elhagyatott", "ezer éves",
  "gyéren lakott",
  "isten háta mögötti",
  "kihalt", "kis", "ködös",
  "mocsaras",
  "szeles", "szmogos",
  "vidéki" ];

var Telepulesek =
[ "bányatelepen",
  "faluban", "falucskában",
  "gyártelepen",
  "hegyen", "hegyvidéken",
  "kikötőben", "kisvárosban", "koszfészekben", "községben",
  "lakótelepen", "lápvidéken",
  "mocsárvidéken",
  "nagyközségben", "nagyvárosban",
  "pusztaságban",
  "szigeten", "szivattyútelepen",
  "tanyaközpontban", "tanyán",
  "üdülőben",
  "városkában", "vasútállomáson", "völgyben",
  "zsákfaluban" ];

var Jarmuvek =
[ "Audijával",
  "Babettájával", "biciklijével",
  "elektromos biciklijével",
  "Komar mopedjével", "kordéjával",
  "lánctalpas traktorával", "lovaskocsijával",
  "Mercedesével", "MTZ-jével",
  "Opeljével",
  "Polskijával",
  "Rigájával",
  "Skodájával",
  "Trabantjával", "tragacsával", "triciklijével",
  "Verhovinájával", "Volvójával",
  "Wartburgjával",
  "Zaporozsecével", "Zastavájával", "Zetorjával" ];

var EroszakSzervezetek =
[ "árnyékkormány",
  "Bilderberg-csoport", "Birodalom",
  "CIA", "Császári Gárda",
  "Delta Force",
  "ejtőernyős hadosztály", "elhárítás",
  "FBI", "FEMA",
  "haditengerészet", "hadsereg", "hírszerzés",
  "Illuminátusok",
  "jakobinusok", "járványügyi hivatal",
  "légierő", "lovasrendőrség", "Luftwaffe",
  "milícia",
  "Navy Seals", "Nemzeti Gárda",
  "Parti Őrség", "postafelügyelet",
  "rendőrség",
  "seriff", "SWAT", "Szindikátus", "Szpecnaz",
  "templomosok", "tengerészgyalogság", "titkosszolgálat",
  "űrgyalogság",
  "Waffen SS", "Wehrmacht" ];

var EroszakSzervezetTagjai =
[ "bérgyilkosai",
  "emberei",
  "harcosai",
  "katonái", "kommandósai",
  "lövészei",
  "mesterlövészei",
  "páncélosai", "pribékjei",
  "rohamcsapatai", "rohamosztagosai",
  "szuperkatonái",
  "ügynökei",
  "verőemberei" ];

var EroszakosCselekedetek =
[ "a mocsárba lökik",
  "baseballütővel szétverik",
  "egy sortűzzel megállítják", "eladják ócskavasnak",
  "felgyújtják", "felrobbantják",
  "géppuskával szétlyuggatják",
  "hamuvá égetik",
  "kalapáccsal szétverik", "kiöntik betonnal",
  "lángszóróval szétégetik",
  "RPG-vel kilövik",
  "szétlövik egy helikopterről", "szétütik egy cséphadaróval", "szétszerelik", "szétverik lánccal", "szitává lövik",
  "vascsővel szétütik" ];

var Termekeket =
[ "akkumulátorokat", "azbesztpalát",
  "baktériumokat", "biológiai fegyvereket",
  "élelmiszerszínezéket",
  "génmódosított kukoricát", "génmódosított szóját",
  "gyógyszereket", "gyomirtókat",
  "harci gázokat",
  "ideggázokat", "integrált áramköröket", "izotópokat",
  "kemtrélt", "kísértetkondenzátumot", "klónokat", "kristályokat", "kullancsirtószert",
  "mutáns baktériumokat",
  "növényvédőszereket", "nyálas sorozatokat",
  "plutóniumot",
  "táplálékkiegészítőket", "természetazonos aromát", "traktorokat",
  "vegyifegyvereket", "vérnyomáscsökkentőket", "vírusokat" ];

var Cegvezetok =
[
    "alelnök",
    "biztonsági főnök",
    "cégelnök", "cégvezető",
    "elnök",
    "főkönyvelő", "főosztályvezető",
    "gazdasági igazgató",
    "igazgató",
    "K+F vezető",
    "művezető",
    "osztályvezető",
    "ügyvezető igazgató", "üzemvezető",
    "vezérigazgató", "vezérigazgató-helyettes"
];

var TamadasModok =
[ "bugyborékoló hörgéssel",
  "eszelős kacajjal",
  "habzó szájjal", "hangosan átkozódva", "hörögve",
  "káromkodva", "kegyetlen ordítással",
  "nyáladzva",
  "ordítva", "őrjöngve", "ősi istenek nevét kántálva",
  "pudvás fogait kivillantva",
  "szörcsögő hangokat hallatva",
  "üvöltve",
  "vérben forgó szemekkel", "veszett üvöltéssel", "vicsorogva" ];

var Fegyverekkel =
[ "45-ös Magnummal",
  "aknavetővel", "ásóval",
  "baltával", "baseballütővel", "Berettával", "BFG-9000-rel", "bicskával", "blokktéglával", "bottal", "bunkósbottal", "bűvös gránáttal", "buzogánnyal",
  "csatabárddal", "csavarhúzóval", "csőkulccsal",
  "doronggal", "duplacsövű puskával",
  "farkaskaszával", "fejszével", "féltéglával", "fénykarddal", "feszítővassal", "forgópisztollyal", "franciakulccsal",
  "Gauss-puskával", "gépkarabéllyal", "géppisztollyal", "géppuskával", "gereblyével", "golyószóróval", "göcsörtös bunkósbottal", "gyalogsági ásóval",
  "hangtompítós pisztollyal", "hosszú késsel", "hosszú szuronnyal",
  "Kalasnyikovval", "kampósbottal", "kapával", "karddal", "kaszával", "kézigránáttal", "kiegyenesített kaszával", "konyhakéssel", "kőtörő kalapáccsal", "krikettütővel",
  "láncfűrésszel", "láncos buzogánnyal", "lándzsával", "lángszóróval", "lézerágyúval", "lézerkarddal", "lézerpisztollyal", "lovagi pallossal",
  "második világháborús bajonettel", "mesterlövészpuskával",
  "nehéz csákánnyal", "nehézgéppuskával", "nyeles kézigránáttal",
  "pájszerrel", "pallossal", "permetleves lándzsával", "plazmafegyverrel",
  "radiátorcsővel", "rakétavetővel", "rakétával", "repeszgránáttal", "rozsdás vascsővel", "RPG-vel",
  "shotgunnal", "sugárpisztollyal", "sugárvetővel",
  "szamurájkarddal", "szekercével", "számszeríjjal", "szögekkel kivert cséphadaróval", "szöges buzogánnyal", "szónikus ágyúval", "szónikus puskával",
  "vadászpuskával", "vascsővel", "vasvillával", "villáskulccsal", "viperával",
  "Winchesterrel" ];

var CsataJelzok =
[ "brutális",
  "elemi erejű",
  "hőseposzba illő",
  "kegyetlen",
  "véres" ];

var Megsemmisulesek =
[ "darabokra hullik",
  "felrobban",
  "hamuvá ég",
  "leég",
  "megsemmisül",
  "összedől", "összedől és azután elsüllyed", "összeomlik", "összerogy", "összeroskad" ];

var GyariEpuletek =
[ "autószerelő műhely",
  "gazdasági iroda", "gyárcsarnok", "gyárépület",
  "hidroglóbusz", "hűtőraktár",
  "irodaépület",
  "mérlegház",
  "öltözőépület",
  "portaépület",
  "raktáriroda",
  "szerverterem", "szociális helység",
  "telefonközpont", "titkárság", "TMK-műhely",
  "üzemi konyha",
  "víztorony" ];

var Sebesulesek =
[ "fájdalmában üvöltés tör elő torkából",
  "kiömlő vére a falra fröccsen", "kiömlő vére vörösre festi ruháját",
  "sebeiből megvadult patakként ömlik a vér",
  "testéből vérszökőkút tör elő" ];

var Pusztulasok =
[ "holtan esik össze", "holtan terül el a földön",
  "kileheli sötét lelkét",
  "rongybabaként rogy össze a véres padlón" ];

var Szuperfegyvereket =
[ "1 megatonnás légibombát",
  "atombombát", "atomrobbanófejes robotrepülőgépet",
  "Cár-bombát",
  "fissziós bombát",
  "lángoló foszforbombát", "levegő-föld rakétát",
  "gigantikus gyújtóbombát",
  "háromfázisú atombombát", "hidegfúziós bombát", "hidrogénbombát",
  "ICBM-et", "intelligens bombát", "irányított bombát",
  "kobaltbombát",
  "megtorlófegyvert", "MIRV-et",
  "nukleáris csapásmérő fegyvert",
  "óriási napalmbombát",
  "robotrepülőgépet",
  "taktikai atomgránátot", "termonukleáris fegyvert", "több tonnás rombolóbombát",
  "vákuumbombát" ];

function GetSzo(szavak)
{
    return szavak[Math.floor(Math.random() * szavak.length)];
}

function GetFonev()
{
    return GetSzo(Fonevek);
}

function GetEjszakaJelzo()
{
    return GetSzo(EjszakaJelzok);
}

function GetSzorny()
{
    return GetJelzo() + " " + GetSzo(Szornyek);
}

function GetBirtok()
{
    return GetSzo(Birtokok);
}

function GetHelybol()
{
    return GetSzo(Helyekbol);
}

function GetHelyben()
{
    return GetSzo(Helyekben);
}

function GetRejtekhelyben()
{
    return GetSzo(Rejtekhelyekben);
}

function GetJelzo()
{
    return GetSzo(Jelzok);
}

function GetUndoritoAnyagot()
{
    return GetSzo(UndoritoAnyagokat);
}

function GetBosszuJelzo()
{
    return GetSzo(BosszuJelzok);
}

function GetSzin()
{
    return GetSzo(Szinek);
}

function GetFoglalkozas()
{
    var foglalkozas = "";
    var tmpFoglalkozas = GetSzo(Foglalkozasok);
    
    if (tmpFoglalkozas.indexOf(' ') === -1 && tmpFoglalkozas.indexOf('-') === -1)
    {
        if (Math.random() < 0.6)
        {
            foglalkozas += GetSzo(FoglalkozasPrefixek);
        }
    }
    
    foglalkozas += tmpFoglalkozas;
    
    if (Math.random() < 0.6)
    {
        foglalkozas += " ";
        foglalkozas += GetSzo(FoglalkozasPostfixek);
    }
    
    return foglalkozas;
}

function GetTelepules()
{
    return GetSzo(MilyenTelepulesek) + " " + GetSzo(Telepulesek);
}

function GetJarmu()
{
    return GetSzin() + " " + GetSzo(Jarmuvek);
}

function GetEroszakSzervezet()
{
    return GetSzo(EroszakSzervezetek);
}

function GetEroszakSzervezetTagja()
{
    return GetSzo(EroszakSzervezetTagjai);
}

function GetEroszakosCselekedet()
{
    return GetSzo(EroszakosCselekedetek);
}

function GetTermeket()
{
    return GetSzo(Termekeket);
}

function GetCegvezeto()
{
    return GetSzo(Cegvezetok);
}

function GetTamadasMod()
{
    return GetSzo(TamadasModok);
}

function GetFegyverrel()
{
    return GetSzo(Fegyverekkel);
}

function GetSzuperfegyvert()
{
    return GetSzo(Szuperfegyvereket);
}

function GetCsataJelzo()
{
    return GetSzo(CsataJelzok);
}

function GetMesemmisules()
{
    return GetSzo(Megsemmisulesek);
}

function GetGyariEpulet()
{
    return GetSzo(GyariEpuletek);
}

function GetSebesules()
{
    return GetSzo(Sebesulesek);
}

function GetPusztulas()
{
    return GetSzo(Pusztulasok);
}
