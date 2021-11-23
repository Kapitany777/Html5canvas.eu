const Fonevek =
    [
        "agyvelő", "akkumulátortemető", "álom", "alkimista", "árny", "árnyék", "atomfelhő", "azbesztpalagyár",
        "babó", "bánya", "betolakodó", "bomlás", "boncterem", "borzalom", "boszorkány", "bűntett",
        "csáp", "csatorna", "csontváz",
        "dolog", "dervis", "dögkút", "dögtelep",
        "elmegyógyintézet", "élőhalott",
        "fal", "félelem",
        "gerilla", "gorilla", "gyepmester",
        "halálhörgés", "halálgyár", "halálkommandó", "halálosztag", "halottak", "ház", "hegy", "hegyirabló", "hulla", "hullahegyek",
        "ideggáz",
        "járvány", "jeti",
        "katakomba", "kép", "kísérlet", "kísértet", "kivégzés", "kivégzőosztag", "kripta", "köd", "kút", "kutya",
        "láncfűrész", "láphulla", "lelkész", "leszámolás", "levegő", "lidérc",
        "macska", "majom", "medve", "mészárlás", "múmia", "mutáns", "múzeum",
        "nyagóc",
        "orvlövész",
        "öregember",
        "partizán", "patkány", "pincemunkás", "plazmagömb", "pusztulás",
        "rém", "rémtett", "rémület", "rettenet", "rom", "rothadás",
        "sintér", "sír", "sírrabló", "sötétség", "suttogás", "szellem", "szörny", "szörnyeteg",
        "tél", "temető", "templom", "terminátor", "tömeggyilkos", "tömegsír", "tudós",
        "utca", "útonálló",
        "város", "vámpír", "végzet", "vér", "véreső", "vérfarkas", "vérzivatar", "vietkong", "világítótorony",
        "zombi", "zóna"
    ];

const EjszakaJelzok =
    [
        "csillagtalan",
        "fagyos",
        "hideg", "holdfényes",
        "nyomasztó",
        "sötét", "szeles",
        "viharos"
    ];

const Szornyek =
    [
        "acélgólemek", "alienek", "androidok",
        "babók", "baglyok", "bányalovak", "barbárok", "barlanglakók", "békák", "bérgyilkosok", "bérkommentelők", "bigfootok", "bogarak", "borzalmak",
        "boszorkányok", "brutális megsemmisítők", "búvárbékák",
        "csápok", "csatagólemek", "csatamajmok", "csimpánzok", "csontvázak", "csótányok", "csupakabrák",
        "denevérek", "droidok", "drónok",
        "elefántok", "előemberek", "élőholtak",
        "farkasemberek", "farkasok", "fremenek",
        "gengszterek", "gerillák", "gibbonok", "goblinok", "godzillák", "gólemek", "gorillák",
        "gyilkos darazsak",
        "hackerek", "halottak", "hangyák", "harci robotok", "hobbitok", "hóhérok", "hollók", "hullák",
        "jetik",
        "káoszmajmok", "kardhalak", "kertitörpék", "kígyók", "kísértetek", "kis szürkék", "klónok", "kultisták", "kutyák", "küklopszok",
        "láphullák", "lázadók", "lidércek",
        "macskák", "madarak", "majmok", "mamutok", "manók", "markolábok", "marslakók", "medvék", "molyemberek", "múmiák", "mutánsok", "mutáns zombik",
        "nazgulok", "nekromanták", "nindzsák",
        "ogrék", "okkultisták", "orángutánok", "óriások", "óriáspókok", "orkok", "ősemberek",
        "partizánok", "patkányok", "plazmagömbök", "pókok", "politikusok", "predátorok",
        "rapperek", "rémhírterjesztők", "robotok", "rohamosztagosok",
        "sámánok", "sárkányok",
        "szamurájok", "szellemek", "szeparatisták", "szörnyetegek", "szőrös büfögők",
        "terminátorok", "terroristák", "tigrisek", "törpék", "traktorosok", "trollok",
        "ufonauták", "útonállók",
        "vámpírok", "vérbírók", "vérfarkasok", "vérmedvék", "verőemberek", "villalakók", "vöröshangyák",
        "zombik", "zugalakok"
    ];

const Birtokok =
    [
        "álma", "árnyéka",
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
        "zónája"
    ];

const Helyekbol =
    [
        "akkumulátortemetőből", "alagútból", "atomerőműből", "azbesztpalagyárból",
        "bányából", "barlangból", "bázisról",
        "erdőből", "erőműből",
        "csatornából",
        "elmegyógyintézetből",
        "gátőrházból",
        "gyárból",
        "hegyről",
        "kastélyból", "katakombából", "kőbányából", "kriptából", "kunyhóból", "kútból",
        "lápvidékről",
        "malomból", "mélyből", "mélyűrből", "menedékházból", "mocsárból",
        "pincéből", "piramisból",
        "sírból", "sötétségből",
        "szigetről",
        "temetőből", "toronyból", "turistaházból",
        "uránbányából",
        "világítótoronyból"
    ];

const Helyekben =
    [
        "akkumulátortemetőben", "alagútban", "atomerőműben", "azbesztpalagyárban",
        "bányában", "barlangban", "bázison", "boncasztalon", "boncteremben",
        "csatornában",
        "dögtelepen",
        "elmegyógyintézetben",
        "falon",
        "halászfaluban", "házban", "hegyen",
        "intézetben",
        "katakombában", "kísértetkastélyban", "kolostorban", "kriptában", "ködben", "kutatóintézetben", "kútban",
        "lápvidéken", "ligetben",
        "malomban", "mélyben", "mélyűrben", "menedékházban", "mocsárban", "múzeumban",
        "nekropoliszban",
        "pincében", "piramisban", "prérin",
        "romkastélyban",
        "sírban", "sötétségben",
        "szélmalomban", "szigeten",
        "temetőben", "templomban", "tömegsírban", "turistaházban",
        "uránbányában", "utcán",
        "városban", "világítótoronyban", "vízimalomban"
    ];

const RejtekhelyJelzok =
    [
        "elátkozott", "elfeledett", "elhagyatott",
        "hideg",
        "kísértetjárta", "közeli",
        "ősi"
    ];

const Rejtekhelyekben =
    [
        "acélbunkerben", "akkumulátortemetőben", "aknában", "alagútban", "atombunkerben", "atomerőműben", "azbesztpalagyárban",
        "bányában", "barakképületben", "barlangban", "bázison", "betonbunkerben", "bunkerben",
        "csárdában", "csatornában", "csónakházban",
        "dögtelepen",
        "elmegyógyintézetben", "erdészházban", "erdőben", "erőműben",
        "faházban", "FEMA-táborban", "földalatti bázison",
        "gátőrházban",
        "gyárban", "gyártelepen", "gyümölcsösben",
        "házban", "hegyen", "hodályban",
        "kantelepen", "kápolnában", "kastélyban", "katakombában", "kilátóban", "kocsmában", "kolostorban", "kőbányában", "kriptában", "kunyhóban", "kútban",
        "légibázison", "ligetben", "lövészárokban",
        "magaslesen", "malomban", "menedékházban", "mocsárban", "múzeumban",
        "olajfúrótornyon", "óvóhelyen",
        "őrházban", "őrtoronyban",
        "parkolóban", "pincében", "piramisban",
        "rakétasilóban", "raktárban", "repülőtéren", "rúdüzemben",
        "sírban",
        "szélmalomban", "szénbányában", "szigeten", "szivattyútelepen",
        "tanyán", "tehenészetben", "tengeralattjáró-bázison", "temetőben", "templomban", "templomromban", "traktorgyárban", "turistaházban",
        "ufóbázison", "útőrházban", "úttörőházban",
        "vadászházban", "vasúti megállóban", "vasúti őrházban", "vasútállomáson", "várban", "világítótoronyban", "vízimalomban",
        "zónában"
    ];

const Jelzok =
    [
        "agyhalott", "agyroggyant", "agyrohasztó", "álcázott", "alkoholista", "anarchista",
        "baltás", "barbár", "barlangi", "beteges", "bolond", "borzalmas", "borzasztó", "bosszúálló", "brutális", "büdös", "bűzlő",
        "cigarettás", "ciklopi",
        "csernobili",
        "dögletes", "dögsanyarta",
        "édibédi", "elátkozott", "elmebeteg", "elméleti", "élőholt", "eltorzult", "erdei", "eszelős", "eszement", "eszkimó",
        "fej nélküli", "fejszés", "fékevesztett", "féllábú", "fertőzött", "földmélyi",
        "gázálarcos", "génmanipulált", "génmódosított", "gépesített", "gigantikus", "gonosz",
        "gyanús",
        "habzó szájú", "halott", "hatalmas", "hegyi", "hideg", "hónaljmankós",
        "idegen", "indián", "ipari", "ismeretlen",
        "kárhozott", "kidülledt szemű", "kitaszított", "klónozott", "ködös",
        "láncdohányos", "láncfűrészes", "lápi", "láthatatlan", "lázadó", "lebegő", "lidérces", "lopakodó",
        "mandzsúriai", "más dimenzióból érkezett", "megnevezhetetlen", "mélységi", "mélytengeri", "mélyűri", "mocsári", "molekuláris", "mutáns",
        "nanoruhás", "napszemüveges", "neandervölgyi", "névtelen", "nukleáris", "nyálkás",
        "ocsmány", "osonó", "őrjöngő", "őrült", "ősi",
        "páncélozott", "pöhös", "pszichopata", "pusztító",
        "radioaktív", "rángatózó", "rémséges", "rettenetes", "rituális", "rothadó",
        "síri", "sötét", "sudribunkó", "sugárfertőzött", "sugárzó",
        "szemüveges", "szkafanderes", "szörnyű", "szőrös", "szürke",
        "tahó", "tébolyult", "temetői", "tomboló", "tömegpusztító", "torz", "tudatmanipulált", "tündérharmatos", "tündibündi",
        "üntyümpüntyüm", "üvöltő",
        "vegyi", "végzetes", "vén", "vénséges", "véres", "vérgonyasztó", "vérivó", "vérszívó", "veszett",
        "zulu"
    ];

const UndoritoAnyagokat =
    [
        "gennyes maradványokat", "gennyet",
        "heknyát",
        "port",
        "retket",
        "sarat", "sugárzó izotópot", "szennyet", "szutykot",
        "vért"
    ];

const BosszuJelzok =
    [
        "borzalmas", "brutális",
        "eszeveszett",
        "kimondhatatlan",
        "őrült",
        "rémséges", "rettenetes",
        "szörnyű"
    ];

const Szinek =
    [
        "barna",
        "égszínkék",
        "fehér", "fekete",
        "kék", "keki",
        "lila",
        "piros",
        "sárga",
        "szürke",
        "terepszínű",
        "zöld"
    ];

const Foglalkozasok =
    [
        "ács", "adatrögzítő", "adjunktus", "adószakértő", "agysebész", "aktivista", "alkoholista", "antikvárius", "antropológus", "asztalos", "autószerelő",
        "bádogos", "bakter", "bakteriológus", "bányamérnök", "bányász", "barbár", "barlanglakó", "békebíró",
        "belső ellenőr", "bérgyilkos", "bérkommentelő", "berserker", "bíboros", "biciklis", "bicikliőr",
        "biztonsági őr", "blogger", "bölcsész", "bolti eladó", "borász", "bíró", "bombaszakértő", "borbély", "botanikus", "buherátor", "búvár",
        "ceruzás", "CIA-ügynök", "cimbalmos", "citerás", "cukrász",
        "csatornatisztító", "csillagász", "csősz",
        "demagóg", "dervis", "despota", "diszpécser", "DJ", "docens",
        "éjjeliőr", "elektrotechnikus", "elemző", "élmunkás", "elvtárs", "erdei rabló", "erdész", "esztergályos",
        "farmer", "favágó", "FBI-ügynök", "feltaláló", "festő", "filozófus", "firkász", "fizikus", "fogadós", "fogorvos", "fogtechnikus", "földmérő", "földműves",
        "főpap", "futballsztár", "füvesember",
        "géppuskás", "gerilla", "gladiátor", "gombaszakértő", "gondnok", "gránátos",
        "gyalogmunkás", "gyalogos", "gyepmester", "gyógytornász",
        "hacker", "hajóskapitány", "halász", "harangozó", "harckocsizó", "hegedűs", "hegesztő", "hegyirabló", "hóhér", "hurrikánkineziológus",
        "idegenvezető", "idegsebész", "informatikus", "inkvizítor", "irattáros", "író",
        "javasember", "jogász",
        "kalauz", "kantelep-vezető", "kárpitos", "kazánfűtő", "kazánkovács", "kém", "kéményseprő", "kertész", "kidobóember", "kintornás",
        "kocsmáros", "kókánymester", "kommandós", "konspiratológus", "kontroller", "kontár",
        "kovács", "kántor", "kőműves", "könyvelő", "koporsókészítő", "kórboncnok", "könyvtáros", "körhintás", "körzeti megbízott", "körzeti orvos", "kubikos",
        "kuruzsló", "kútfúró", "kutató",
        "laboráns", "lakatos", "lakodalmas zenész", "láncdohányos", "légiforgalmi irányító", "légvédelmi tüzér", "lelkész", "levéltáros", "likvidátor", "logopédus",
        "maffiózó", "magánnyomozó", "matematikus", "matróz", "méhész", "mesterlövész", "merénylő", "mérnök", "meteorológus", "motoros hobó", "mozdonyvezető",
        "mozigépész", "műszerész", "muzeológus",
        "nanotechnológus", "nagybőgős", "nindzsa",
        "nyomozó", "nyugalmazott admirális", "nyugalmazott ezredes", "nyugalmazott őrnagy", "nyugalmazott tengernagy",
        "Obersturmführer", "okkultista", "oknyomozó újságíró", "operátor", "orkológus", "ősember", "őstermelő", "összeesküvő",
        "páncélgránátos", "pap", "paraszt", "parkőr", "partizán", "patikus", "pék", "pénztáros", "pincemunkás", "pizzafutár", "PLC programozó",
        "politikus", "politológus", "portás", "postás",
        "párttag", "presbiter", "professzor", "programozó", "projektmérnök", "projektvezető", "pszichológus", "püspök",
        "radarkezelő", "rapper", "rapsztár", "recepciós", "régész", "rendőr", "rendszerelemző", "rendszergazda", "repülésirányító", "rocker", "rohamosztagos", "rohamrendőr",
        "rohamutász", "röntgenorvos",
        "sámán", "séf", "sekrestyés", "seriff", "sírásó", "sportoló", "statiszta",
        "szabó", "szabotőr", "szakács", "szakszervezeti vezető", "szamuráj", "szerzetes", "szobafestő", "szociálpolitikus", "szociológus", "szonárkezelő",
        "táltos", "tanár", "tanársegéd", "targoncás", "tarlófelelős", "taxisofőr", "technikus", "téemkás", "tehenész", "temetőcsősz", "tengeralattjárós", "térképész",
        "testőr", "tetőfedő", "titkosügynök", "toronyőr", "traktoros", "trombitás", "tróger", "tüzér", "tűzszerész",
        "ufológus", "ügynök", "ügyvéd", "újságíró", "űrhajós", "űrkutató", "űrgárdista", "urológus", "utazó ügynök", "utcaseprő", "útonálló", "üzemmérnök",
        "vadász", "vadászpilóta", "vadőr", "vagyonőr", "váltókezelő", "vasutas", "vegyész", "vérbíró", "vietkong", "világítótorony-őr", "villanyszerelő", "virológus",
        "zoológus", "zöldségtermesztő", "zugfirkász", "zugügyvéd"
    ];

const FoglalkozasPrefixek =
    [
        "al", "alkalmazott ", "alulfizetett ",
        "bér",
        "delegált ", "demotivált ", "diplomás ",
        "elméleti ", "elnyomott ",
        "fedett ", "fő",
        "helyettes ",
        "ipari ",
        "junior ",
        "képesített ", "kiégett ", "kiemelt ", "kísérleti ", "kreatív ", "különleges ", "külsős ",
        "megbízott ", "mester", "mezőgazdasági ", "műkedvelő ",
        "nyugalmazott ",
        "okleveles ", "operatív ",
        "rehabilitált ", "részmunkaidős ",
        "segéd", "senior ", "speciális ", "stratégiai ",
        "szak",
        "vezér", "vezető "
    ];

const FoglalkozasPostfixek =
    [
        "alelnök", "asszisztens",
        "csoportvezető",
        "elnök",
        "főosztályvezető",
        "igazgató",
        "osztályvezető",
        "szakasszisztens", "szakbarbár", "szakértő", "szaktanácsadó",
        "tanácsadó", "technikus"
    ];

const MilyenTelepulesek =
    [
        "álmos", "átokverte",
        "elátkozott", "elfeledett", "elhagyatott", "ezer éves",
        "gyéren lakott",
        "isten háta mögötti",
        "kihalt", "kis", "ködös",
        "mocsaras",
        "ősi",
        "szeles", "szmogos",
        "vidéki"
    ];

const Telepulesek =
    [
        "bányatelepen",
        "dombon",
        "faluban", "falucskában",
        "gátőrházban", "gyártelepen",
        "hegyen", "hegyvidéken",
        "jégmezőn",
        "kantelepen", "kikötőben", "kisvárosban", "koszfészekben", "községben",
        "lakótelepen", "lápvidéken",
        "mocsárvidéken",
        "nagyközségben", "nagyvárosban",
        "pusztaságban",
        "sivatagban",
        "szélmalomban", "szigeten", "szivattyútelepen",
        "tanyaközpontban", "tanyán", "tengeralattjáró-bázison",
        "üdülőben",
        "városkában", "vasútállomáson", "vízimalomban", "völgyben",
        "zsákfaluban"
    ];

const Jarmuvek =
    [
        "APC-jével", "Audijával",
        "Babettájával", "biciklijével", "BMV-jével",
        "elektromos biciklijével",
        "helikopterével", "hőlégballonjával",
        "Komar mopedjével", "kordéjával",
        "lánctalpas traktorával", "lovaskocsijával",
        "magánrepülőgépével", "Mercedesével", "MTZ-jével",
        "Opeljével",
        "Polskijával", "Porschéjével",
        "repülőgépével", "Rigájával",
        "sárkányrepülőjével", "Skodájával", "Suzukijával",
        "Trabantjával", "tragacsával", "triciklijével",
        "UAZ-ával",
        "Verhovinájával", "Volvójával",
        "Wartburgjával",
        "Zaporozsecével", "Zastavájával", "Zetorjával"
    ];

const EroszakSzervezetek =
    [
        "árnyékkormány",
        "Bilderberg-csoport", "Birodalom",
        "CIA", "Császári Gárda",
        "Delta Force",
        "ejtőernyős hadosztály", "elhárítás",
        "FBI", "FEMA",
        "GSG-9",
        "haditengerészet", "hadsereg", "hírszerzés",
        "Idegenlégió", "Illuminátusok", "Inkvizíció",
        "jakobinusok", "járványügyi hivatal",
        "Királyi Légierő",
        "légierő", "lovasrendőrség", "Luftwaffe",
        "milícia", "Monsanto",
        "Navy Seals", "Nemzeti Gárda",
        "ORTT",
        "Parti Őrség", "postafelügyelet",
        "rendőrség", "Royal Air Force", "Royal Navy",
        "seriff", "SWAT",
        "Szindikátus", "Szpecnaz",
        "templomosok", "tengerészgyalogság", "titkosszolgálat",
        "űrgyalogság",
        "Vietkong",
        "Waffen SS", "Wehrmacht"
    ];

const EroszakSzervezetTagjai =
    ["bérgyilkosai", "búvárai",
            "emberei",
            "géppuskásai", "gránátosai",
            "harcosai",
            "katonái", "kommandósai",
            "lángszórósai", "légelhárítói", "lövészei",
            "mesterlövészei",
            "páncélgránátosai", "páncélosai", "pribékjei",
            "rohamcsapatai", "rohamosztagosai", "rohamutászai",
            "szuperkatonái",
            "tüzérei", "tűzszerészei",
            "ügynökei",
            "verőemberei"];

const EroszakosCselekedetek =
    ["a mocsárba lökik",
            "baseballütővel szétverik",
            "egy sortűzzel megállítják", "eladják ócskavasnak",
            "felgyújtják", "felrobbantják",
            "géppuskával szétlyuggatják",
            "hamuvá égetik",
            "kalapáccsal szétverik", "kiöntik betonnal",
            "lángszóróval szétégetik",
            "RPG-vel kilövik",
            "szétlövik egy helikopterről", "szétütik egy cséphadaróval", "szétszerelik", "szétverik lánccal", "szitává lövik",
            "vascsővel szétütik"];

const Termekeket =
    [
        "akkumulátorokat", "altatókat", "antibiotikumokat", "azbesztpalát",
        "baktériumokat", "biológiai fegyvereket",
        "élelmiszerszínezéket",
        "génmódosított kukoricát", "génmódosított szóját",
        "gyógyszereket", "gyomirtókat",
        "harci gázokat",
        "ideggázokat", "integrált áramköröket", "izotópokat",
        "kemtrélt", "kísértetkondenzátumot", "klónokat", "kristályokat", "kullancsirtószert",
        "mutáns baktériumokat",
        "növényvédőszereket", "nyálas sorozatokat", "nyugtatókat",
        "plutóniumot",
        "szteroidokat",
        "táplálékkiegészítőket", "természetazonos aromát", "tömegpusztító fegyvereket", "traktorokat",
        "vegyifegyvereket", "vérnyomáscsökkentőket", "vírusokat"
    ];

const Cegvezetok =
    [
        "alelnök",
        "biztonsági főnök",
        "cégelnök", "cégvezető",
        "csoportvezető",
        "elnök",
        "főkönyvelő", "főosztályvezető",
        "gazdasági igazgató",
        "igazgató",
        "K+F vezető",
        "marketinges", "művezető",
        "osztályvezető",
        "ügyvezető igazgató", "üzemvezető",
        "vezérigazgató", "vezérigazgató-helyettes"
    ];

const TamadasModok =
    ["bugyborékoló hörgéssel",
        "eszelős kacajjal",
        "habzó szájjal", "hangosan átkozódva", "hörögve",
        "káromkodva", "kegyetlen ordítással",
        "nyáladzva",
        "ordítva", "őrjöngve", "ősi istenek nevét kántálva",
        "pudvás fogait kivillantva",
        "szörcsögő hangokat hallatva",
        "üvöltve",
        "vérben forgó szemekkel", "veszett üvöltéssel", "vicsorogva"];

const Fegyverekkel =
    ["45-ös Magnummal",
        "aknavetővel", "alabárddal", "ásóval", "ásóbottal",
        "baltával", "bárddal", "baseballütővel", "Berettával", "BFG-9000-rel", "bicskával", "blokktéglával", "borosüveggel",
        "bottal", "bunkósbottal", "bunkóval", "bűvös gránáttal", "buzogánnyal",
        "Colttal",
        "csatabárddal", "csavarhúzóval", "csőkulccsal",
        "doronggal", "duplacsövű puskával",
        "farkaskaszával", "fejszével", "féltéglával", "fénykarddal", "feszítővassal", "forgópisztollyal", "franciakulccsal", "furkósbottal",
        "Gauss-puskával", "gépágyúval", "gépkarabéllyal", "géppisztollyal", "géppuskával", "gereblyével", "Glock-kal",
        "golyószóróval", "göcsörtös bunkósbottal", "gyalogsági ásóval",
        "hangtompítós pisztollyal", "hosszú késsel", "hosszú szuronnyal", "hosszúíjjal", "huszárkarddal",
        "ideggázzal",
        "Kalasnyikovval", "kampósbottal", "kapával", "karddal", "kaszával", "kézigránáttal", "kiegyenesített kaszával", "konyhakéssel",
        "könnyű géppuskával", "kőtörő kalapáccsal", "krikettütővel",
        "lánccal", "láncfűrésszel", "láncos buzogánnyal", "lándzsával", "lángszóróval", "lefűrészelt csövű puskával", "légvédelmi gépágyúval",
        "lézerágyúval", "lézerkarddal", "lézerpisztollyal", "lovagi pallossal",
        "mankóval", "második világháborús bajonettel", "mesterlövészpuskával", "Molotov-koktéllal",
        "nehéz csákánnyal", "nehézgéppuskával", "nyeles kézigránáttal",
        "pájszerrel", "pallossal", "páncélököllel", "permetleves lándzsával", "plazmafegyverrel", "puskával",
        "radiátorcsővel", "rakétavetővel", "rakétával", "repeszgránáttal", "rohampuskával", "rozsdás vascsővel", "RPG-vel",
        "sarlóval", "shotgunnal", "sörétes puskával", "Steyr AUG-gal", "sugárpisztollyal", "sugárvetővel",
        "szablyával", "szakócával", "szamurájkarddal", "szekercével", "számszeríjjal", "szögekkel kivert cséphadaróval", "szöges buzogánnyal",
        "szónikus ágyúval", "szónikus puskával", "szuronnyal",
        "törött sörösüveggel",
        "vadászpuskával", "vascsővel", "vasvillával", "villáskulccsal", "viperával",
        "Winchesterrel"];

const CsataJelzok =
    ["brutális",
        "elemi erejű",
        "hőseposzba illő",
        "kegyetlen",
        "véres"];

const Megsemmisulesek =
    ["darabokra hullik",
        "felrobban",
        "hamuvá ég",
        "leég",
        "megsemmisül",
        "összedől", "összedől és azután elsüllyed", "összeomlik", "összerogy", "összeroskad"];

const GyariEpuletek =
    ["autószerelő műhely",
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
        "víztorony"];

const Sebesulesek =
    ["fájdalmában üvöltés tör elő torkából",
        "kiömlő vére a falra fröccsen", "kiömlő vére vörösre festi ruháját",
        "sebeiből megvadult patakként ömlik a vér",
        "testéből vérszökőkút tör elő"];

const Pusztulasok =
    ["holtan esik össze", "holtan terül el a földön",
        "kileheli sötét lelkét",
        "rongybabaként rogy össze a véres padlón"];

const Szuperfegyvereket =
    ["1 megatonnás légibombát",
        "atombombát", "atomrobbanófejes robotrepülőgépet",
        "bunkerrombolót",
        "Cár-bombát",
        "fissziós bombát",
        "lángoló foszforbombát", "levegő-föld rakétát",
        "gigantikus gyújtóbombát",
        "háromfázisú atombombát", "hidegfúziós bombát", "hidrogénbombát",
        "ICBM-et", "intelligens bombát", "irányított bombát",
        "kobaltbombát",
        "megtorlófegyvert", "MIRV-et",
        "neutronbombát", "nukleáris csapásmérő fegyvert",
        "óriási napalmbombát",
        "robotrepülőgépet",
        "taktikai atomgránátot", "termonukleáris fegyvert", "több tonnás rombolóbombát",
        "vákuumbombát"];

function GetSzo(szavak) {
    return szavak[Math.floor(Math.random() * szavak.length)];
}

function GetFonev() {
    return GetSzo(Fonevek);
}

function GetEjszakaJelzo() {
    return GetSzo(EjszakaJelzok);
}

function GetSzorny() {
    return GetJelzo() + " " + GetSzo(Szornyek);
}

function GetBirtok() {
    return GetSzo(Birtokok);
}

function GetHelybol() {
    return GetSzo(Helyekbol);
}

function GetHelyben() {
    return GetSzo(Helyekben);
}

function GetRejtekhelyJelzo() {
    return GetSzo(RejtekhelyJelzok);
}

function GetRejtekhelyben() {
    return GetSzo(Rejtekhelyekben);
}

function GetJelzo() {
    return GetSzo(Jelzok);
}

function GetUndoritoAnyagot() {
    return GetSzo(UndoritoAnyagokat);
}

function GetBosszuJelzo() {
    return GetSzo(BosszuJelzok);
}

function GetSzin() {
    return GetSzo(Szinek);
}

function GetFoglalkozas() {
    let foglalkozas = "";
    let tmpFoglalkozas = GetSzo(Foglalkozasok);

    if (tmpFoglalkozas.indexOf(' ') === -1 && tmpFoglalkozas.indexOf('-') === -1) {
        if (Math.random() < 0.6) {
            foglalkozas += GetSzo(FoglalkozasPrefixek);
        }
    }

    foglalkozas += tmpFoglalkozas;

    if (Math.random() < 0.6) {
        foglalkozas += " ";
        foglalkozas += GetSzo(FoglalkozasPostfixek);
    }

    return foglalkozas;
}

function GetTelepules() {
    return GetSzo(MilyenTelepulesek) + " " + GetSzo(Telepulesek);
}

function GetJarmu() {
    return GetSzin() + " " + GetSzo(Jarmuvek);
}

function GetEroszakSzervezet() {
    return GetSzo(EroszakSzervezetek);
}

function GetEroszakSzervezetTagja() {
    return GetSzo(EroszakSzervezetTagjai);
}

function GetEroszakosCselekedet() {
    return GetSzo(EroszakosCselekedetek);
}

function GetTermeket() {
    return GetSzo(Termekeket);
}

function GetCegvezeto() {
    return GetSzo(Cegvezetok);
}

function GetTamadasMod() {
    return GetSzo(TamadasModok);
}

function GetFegyverrel() {
    return GetSzo(Fegyverekkel);
}

function GetSzuperfegyvert() {
    return GetSzo(Szuperfegyvereket);
}

function GetCsataJelzo() {
    return GetSzo(CsataJelzok);
}

function GetMesemmisules() {
    return GetSzo(Megsemmisulesek);
}

function GetGyariEpulet() {
    return GetSzo(GyariEpuletek);
}

function GetSebesules() {
    return GetSzo(Sebesulesek);
}

function GetPusztulas() {
    return GetSzo(Pusztulasok);
}
