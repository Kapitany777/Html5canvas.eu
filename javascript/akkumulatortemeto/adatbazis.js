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
        "partizán", "patkány", "pincemunkás", "plazmagömb", "plébános", "pusztulás",
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
        "acélgólemek", "agyaggólemek", "alienek", "alkoholisták", "alligátorok", "androidok",
        "bábák", "babók", "baglyok", "banyák", "bányalovak", "bányarémek", "barbárok", "barlanglakók", "behemótok", "békák", "bérgyilkosok", "bérkommentelők", "bigfootok",
        "biorobotok", "bogarak", "borzalmak",
        "boszorkányok", "botosjetik", "brutális megsemmisítők", "búvárbékák",
        "csápok", "csatagólemek", "csatamajmok", "csimpánzok", "csontvázak", "csótányok", "csupakabrák",
        "denevérek", "dinoszauruszok", "droidok", "drónok", "dzsinnek",
        "elefántok", "előemberek", "élőholtak",
        "farkasemberek", "farkasok", "fémemberek", "fremenek",
        "gengszterek", "gerillák", "gibbonok", "goblinok", "godzillák", "gólemek", "gorillák",
        "gyilkos darazsak",
        "hackerek", "halottak", "hangyák", "harci robotok", "hobbitok", "hóhérok", "hollók", "hullák",
        "jetik",
        "káoszmajmok", "kardhalak", "kertitörpék", "kígyók", "kísértetek", "kis szürkék", "klónok", "kőgólemek", "krokodilok", "kultisták", "kutyák", "küklopszok",
        "láphullák", "lázadók", "lidércek",
        "macskák", "madarak", "mágusok", "majmok", "mamutok", "manók", "markolábok", "marslakók", "medvék", "molyemberek", "múmiák", "mutánsok", "mutáns zombik",
        "nazgulok", "nekromanták", "nepperek", "nindzsák", "nünükék",
        "nyehőcék", "nyulak",
        "ogrék", "okkultisták", "orángutánok", "ordasok", "óriások", "óriáspókok", "orkok", "oroszlánok", "ősemberek",
        "partizánok", "patkányok", "piktek", "plazmagömbök", "pókok", "politikusok", "predátorok", "prikulicsok",
        "rapperek", "rémhírterjesztők", "robotok", "rohamosztagosok", "rókák", "rókatündérek",
        "sámánok", "sárkányok",
        "szakemberek", "szamurájok", "szellemek", "szeparatisták", "szeszkazánok", "szőrállatok", "szörnyetegek", "szőrös büfögők",
        "terminátorok", "terroristák", "tigrisek", "toportyánférgek", "törpék", "traktorosok", "trollok",
        "ufonauták", "útonállók",
        "vámpírok", "varázslók", "vérbarbárok", "vérbírók", "vérfarkasok", "vérmedvék", "verőemberek", "villalakók", "vöröshangyák",
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
        "szeszfőzdéből", "szigetről",
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
        "radarállomáson", "romkastélyban",
        "sírban", "sötétségben",
        "szélmalomban", "szeszfőzdében", "szigeten",
        "temetőben", "templomban", "templomkertben", "tömegsírban", "turistaházban",
        "uránbányában", "utcán",
        "városban", "világítótoronyban", "vízimalomban"
    ];

const RejtekhelyJelzok =
    [
        "düledező",
        "elátkozott", "elfeledett", "elhagyatott",
        "gazos",
        "hideg",
        "isten háta mögötti",
        "kísértetjárta", "közeli",
        "ősi", "összedőlt",
        "romos",
        "távoli",
        "világtól elzárt", "világvégi"
    ];

const Rejtekhelyekben =
    [
        "acélbunkerben", "akkumulátortemetőben", "aknában", "alagútban", "atombunkerben", "atomerőműben", "autómosóban", "azbesztpalagyárban",
        "bányában", "barakképületben", "barlangban", "bázison", "betonbunkerben", "bokorban", "bombagyárban", "borospincében", "bunkerben", "buszmegállóban",
        "csárdában", "csatornában", "csehóban", "csónakházban", "csőszkunyhóban",
        "dögtelepen",
        "elmegyógyintézetben", "erdészházban", "erdőben", "erőműben",
        "faházban", "FEMA-táborban", "földalatti bázison", "fóliasátorban",
        "gabonasilóban", "gátőrházban", "gépgyárban",
        "gyárban", "gyártelepen", "gyümölcsösben",
        "házban", "hegyen", "hodályban",
        "kantelepen", "kápolnában", "kastélyban", "katakombában", "kilátóban", "kocsmában", "kolostorban", "kőbányában", "kriptában", "kunyhóban", "kútban",
        "légibázison", "ligetben", "lőszerraktárban", "lövészárokban",
        "magaslesen", "malomban", "menedékházban", "mocsárban", "múzeumban", "műtrágyagyárban",
        "olajfúrótornyon", "óvóhelyen",
        "őrházban", "őrtoronyban",
        "parkolóban", "pincében", "piramisban",
        "radarállomáson", "rakétasilóban", "raktárban", "rekettyésben", "repülőtéren", "rúdüzemben",
        "sírban", "susnyásban",
        "szélmalomban", "szénbányában", "szeszfőzdében", "szigeten", "szivattyútelepen",
        "tanyán", "tehenészetben", "tengeralattjáró-bázison", "temetőben", "templomban", "templomromban", "toronyban", "traktorgyárban", "turistaházban",
        "tüskebokorban",
        "ufóbázison", "útőrházban", "úttörőházban", "üvegházban",
        "vadászházban", "vasúti megállóban", "vasúti őrházban", "vasútállomáson", "várban", "világítótoronyban", "vízimalomban",
        "zónában"
    ];

const RejtozesModja =
    [
        "bujdokol", "bujdosik", "bujkál",
        "lapít", "lapul",
        "rejtőzik", "rejtőzködik",
        "sunnyog"
    ];

const Jelzok =
    [
        "agyhalott", "agyroggyant", "agyrohasztó", "álcázott", "alkoholista", "anarchista",
        "bakancsos", "baltás", "barbár", "barlangi", "behemót", "beteges", "bolond", "borzalmas", "borzasztó", "bosszúálló", "brutális", "büdös", "bűzlő",
        "cigarettás", "ciklopi",
        "csernobili",
        "dögletes", "dögsanyarta",
        "édibédi", "elátkozott", "elmebeteg", "elméleti", "élőholt", "eltorzult", "erdei", "eszelős", "eszement", "eszkimó",
        "fej nélküli", "fejszés", "fékevesztett", "féllábú", "fertőzött", "földmélyi",
        "gázálarcos", "génmanipulált", "génmódosított", "gépesített", "gigantikus", "gonosz", "gumicsizmás",
        "gyanús", "gyüszlött",
        "habzó szájú", "halott", "hatalmas", "hegyi", "hideg", "hónaljmankós",
        "idegbeteg", "idegen", "indián", "ipari", "ismeretlen", "ittas",
        "kárhozott", "kidülledt szemű", "kitaszított", "klónozott", "koszlott", "ködös",
        "láncdohányos", "láncfűrészes", "lápi", "láthatatlan", "lázadó", "lebegő", "lidérces", "lopakodó",
        "mandzsúriai", "más dimenzióból érkezett", "megnevezhetetlen", "mélységi", "mélytengeri", "mélyűri", "mocsári", "molekuláris", "mutáns",
        "nanoruhás", "napszemüveges", "neandervölgyi", "névtelen", "nukleáris", "nyálkás",
        "ocsmány", "osonó", "őrjöngő", "őrült", "ősi",
        "páncélozott", "pöhös", "pszichopata", "pusztító",
        "radioaktív", "rángatózó", "rémséges", "részeges", "rettenetes", "rituális", "rothadó",
        "sánta", "síri", "smucig", "sóher", "sötét", "strandpapucsos", "sudribunkó", "sugárfertőzött", "sugárzó", "sunnyogó",
        "szakállas", "szandálos", "szemüveges", "szkafanderes", "szörnyű", "szőrös", "szürke",
        "tahó", "tébolyult", "temetői", "tomboló", "tömegpusztító", "tornacipős", "torz", "tudatmanipulált", "tündérharmatos", "tündibündi",
        "üntyümpüntyüm", "üvöltő",
        "vasorrú", "vegyi", "végzetes", "vén", "vénséges", "véres", "vérgonyasztó", "vérivó", "vérszívó", "veszett",
        "zulu"
    ];

const UndoritoAnyagokat =
    [
        "gennyes maradványokat", "gennyet",
        "heknyát",
        "koszt",
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
        "ács", "adatrögzítő", "adjunktus", "admirális", "adószakértő", "agronómus", "agysebész", "aknász", "aktivista", "alkoholista", "altengernagy",
        "antikvárius", "antropológus", "asztalos", "auditor", "autószerelő",
        "bádogos", "bakter", "bakteriológus", "bányamérnök", "bányász", "barbár", "barlanglakó", "battériavezető", "békebíró",
        "belső ellenőr", "bérgyilkos", "bérkommentelő", "berserker", "bíboros", "biciklis", "bicikliőr",
        "biztonsági őr", "blogger", "bölcsész", "bolti eladó", "borász", "bíró", "bombaszakértő", "borbély", "botanikus", "buherátor", "burkoló", "búvár",
        "CEO", "CISO", "ceruzás", "CIA-ügynök", "cimbalmos", "citerás", "cowboy", "cukrász",
        "csatornatisztító", "csávázómester", "csillagász", "csősz",
        "dekoratőr", "demagóg", "dervis", "despota", "diák", "dísznövénykertész", "diszpécser", "DJ", "docens",
        "éceszgéber", "edző", "éjjeliőr", "elektrotechnikus", "elemző", "ellentengernagy", "élmunkás", "élsportoló", "elvtárs", "erdei rabló", "erdész", "esztergályos",
        "farmer", "favágó", "FBI-ügynök", "feltaláló", "festő", "filozófus", "firkász", "fizikus", "fogadós", "fogorvos", "fogtechnikus", "földmérő", "földműves",
        "főpap", "fotográfus", "futballsztár", "füvesember",
        "gazda", "generális", "gengszter", "gépész", "géplakatos", "géppuskás", "gerilla", "gladiátor", "gombaszakértő", "gondnok", "gránátos", "gumitalpú",
        "gyakornok", "gyalogmunkás", "gyalogos", "gyárigazgató", "gyepmester", "gyógytornász",
        "hacker", "hajóskapitány", "halász", "harangozó", "harckocsizó", "hegedűs", "hegesztő", "hegyirabló", "hóhér", "hurrikánkineziológus", "hűtőgépész",
        "idegenvezető", "idegsebész", "informatikus", "inkvizítor", "irattáros", "író",
        "jampec", "javasember", "jogász", "jogtanácsos",
        "kalauz", "KAM", "kantelep-vezető", "kántor", "karbantartó", "karosszérialakatos", "kárpitos", "kazánfűtő", "kazánkovács", "kém", "kéményseprő", "kertész",
        "kidobóember", "kintornás", "klímarettegő",
        "kocsmáros", "kókánymester", "kommandós", "konspiratológus", "kontroller", "kontár", "koordinátor",
        "kovács", "kőműves", "könyvelő", "koporsókészítő", "kórboncnok", "könyvtáros", "körhintás", "körzeti megbízott", "körzeti orvos", "köszörűs", "közgazdász",
        "közterület-felügyelő", "kubikos", "kuruzsló", "kútfúró", "kutató", "kutyakozmetikus",
        "laboráns", "lakatos", "lakodalmas zenész", "láncdohányos", "légiforgalmi irányító", "légvédelmi tüzér", "laposföld hívő",
        "lelkész", "levéltáros", "likvidátor", "logopédus",
        "maffiózó", "magánnyomozó", "matematikus", "matróz", "méhész", "melós", "mérlegkezelő", "mesterlövész", "merénylő", "mérnök", "meteorológus", "mikrobiológus",
        "minőségellenőr", "motoros hobó", "mozdonyvezető", "mozigépész", "munkás", "műszerész", "művezető", "muzeológus",
        "nanotechnológus", "nagybőgős", "népi táncos", "nindzsa", "növénytermesztő gyalogos",
        "nyomozó", "nyugalmazott admirális", "nyugalmazott ezredes", "nyugalmazott őrnagy", "nyugalmazott tengernagy",
        "Obersturmführer", "okkultista", "oknyomozó újságíró", "operátor", "orkológus",
        "öltözőőr", "ősember", "őstermelő", "összeesküvő",
        "pálinkakészítő", "pálinkamester", "páncélgránátos", "pap", "paraszt", "parkőr", "partizán", "patikus", "pék", "pénztáros", "pincemunkás", "pizzafutár", "PLC programozó",
        "plébános", "polihisztor", "politikus", "politológus", "portás", "porszívóügynök", "postás",
        "párttag", "presbiter", "professzor", "programozó", "projektmérnök", "projektvezető", "pszichológus", "püspök",
        "radarkezelő", "raktárvezető", "ranger", "rapper", "rapsztár", "recepciós", "régész", "rendész", "rendőr", "rendőrfőnök", "rendszerelemző", "rendszergazda",
        "repülésirányító", "rocker", "rohamosztagos", "rohamrendőr", "rohamutász", "röntgenorvos",
        "sajtmester", "sámán", "samesz", "SAP tanácsadó", "séf", "sekrestyés", "seriff", "silódiszpécser", "sírásó", "smasszer", "sörgyártó", "sportoló", "statiszta",
        "szabó", "szabotőr", "szakács", "szakoktató", "szakszervezeti vezető", "szamuráj", "szerelő", "szerzetes", "szeszkazán", "szobafestő",
        "szociálpolitikus", "szociológus", "szonárkezelő", "sztahanovista",
        "tábornok", "táltos", "tanár", "tanársegéd", "targoncás", "tarlófelelős", "taxisofőr", "technikus", "téemkás", "tehenész", "telepvadász", "telepvezető",
        "temetőcsősz", "tengeralattjárós",
        "tengerészgyalogos", "térképész", "testőr", "tetőfedő", "titkosügynök", "tolólapos gyalogos", "toronyőr", "traktoros", "trombitás", "tróger", "tüzér", "tűzszerész",
        "udvaros", "ufológus", "ügynök", "ügyvéd", "újságíró", "űrhajós", "űrkutató", "űrgárdista", "urológus", "utazó ügynök", "utcaseprő", "útonálló",
        "üveges", "üzemgazdász", "üzemmérnök", "üzletvezető",
        "vadász", "vadászpilóta", "vadőr", "vagyonőr", "váltókezelő", "varázsló", "vasutas", "vegyész", "vegyszerfelelős", "vérbíró", "vietkong", "vigéc",
        "világítótorony-őr", "villanyszerelő", "virágkertész", "virágkötő", "virológus",
        "webfejlesztő",
        "zoológus", "zöldségtermesztő", "zugfirkász", "zugügyvéd"
    ];

const FoglalkozasPrefixek =
    [
        "akadémiai ", "al", "alkalmazott ", "alulfizetett ",
        "bér",
        "delegált ", "demotivált ", "diplomás ",
        "elméleti ", "elnyomott ",
        "fedett ", "fő",
        "helyettes ", "hivatásos ",
        "ipari ",
        "junior ",
        "képesített ", "kiégett ", "kiemelt ", "kísérleti ", "környezetvédelmi ", "kreatív ", "különleges ", "külsős ", "kutató ",
        "logisztikai ",
        "megbízott ", "mester", "mezőgazdasági ", "múzeumi ", "műkedvelő ", "műszaki ",
        "nyugalmazott ",
        "okleveles ", "operatív ",
        "rehabilitált ", "részmunkaidős ",
        "segéd", "senior ", "speciális ", "stratégiai ",
        "szak",
        "tolólapos ",
        "vezér", "vezető "
    ];

const FoglalkozasPostfixek =
    [
        "alelnök", "asszisztens",
        "csoportvezető",
        "elnök",
        "főosztályvezető",
        "igazgató",
        "manager", "mester", "munkatárs",
        "osztályvezető",
        "specialista",
        "szakasszisztens", "szakbarbár", "szakember", "szakértő", "szaktanácsadó", "szaktechnikus",
        "tanácsadó", "technikus",
        "ügyintéző"
    ];

const MilyenTelepulesek =
    [
        "álmos", "átokverte",
        "elátkozott", "elfeledett", "elhagyatott", "ezer éves",
        "gyéren lakott",
        "isten háta mögötti",
        "kietlen", "kihalt", "kis", "ködös",
        "mocsaras",
        "ősi",
        "sivatagos",
        "szeles", "sziklás", "szmogos",
        "vidéki"
    ];

const Telepulesek =
    [
        "agyagsivatagban",
        "bányatelepen",
        "dombon",
        "fácántelepen", "faluban", "falucskában", "félszigeten",
        "gátőrházban", "gyártelepen",
        "hegyen", "hegyvidéken", "homoksivatagban",
        "jégmezőn",
        "kantelepen", "kikötőben", "kisvárosban", "koszfészekben", "kősivatagban", "községben",
        "lakótelepen", "lápvidéken",
        "mocsárvidéken",
        "nagyközségben", "nagyvárosban",
        "pulykatelepen", "pusztaságban",
        "radarállomáson", "rakétabázison",
        "sivatagban", "sósivatagban",
        "szélmalomban", "szigeten", "sziklasivatagban", "szivattyútelepen",
        "tanyaközpontban", "tanyán", "tengeralattjáró-bázison",
        "üdülőben",
        "városkában", "vasútállomáson", "világítótoronyban", "vízimalomban", "völgyben",
        "zátonyon",
        "zsákfaluban"
    ];

const Jarmuvek =
    [
        "APC-jével", "Audijával",
        "Babettájával", "biciklijével", "BMW-jével",
        "elektromos biciklijével",
        "helikopterével", "hőlégballonjával",
        "kerti traktorjával", "Komar mopedjével", "kordéjával",
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
        "Bilderberg-csoport", "Birodalom", "Bundesliga", "Bundeswehr",
        "CIA", "Császári Gárda",
        "Delta Force",
        "ejtőernyős hadosztály", "elhárítás",
        "FBI", "FEMA",
        "GSG-9",
        "haditengerészet", "hadsereg", "hírszerzés",
        "Idegenlégió", "Illuminátusok", "Inkvizíció",
        "jakobinusok", "járványügyi hivatal",
        "Királyi Légierő", "közterület-felügyelet",
        "légierő", "lovasrendőrség", "Luftwaffe",
        "milícia", "Monsanto", "Munkásőrség",
        "Navy Seals", "Nemzeti Gárda",
        "ORTT",
        "Parti Őrség", "postafelügyelet",
        "rendőrség", "Royal Air Force", "Royal Navy",
        "seriff", "SWAT",
        "Szindikátus", "Szpecnaz",
        "templomosok", "tengerészgyalogság", "titkosszolgálat",
        "űrgyalogság",
        "Vietkong", "Vörös Hadsereg",
        "Waffen SS", "Wehrmacht"
    ];

const EroszakSzervezetTagjai =
    [
        "bérgyilkosai", "búvárai",
        "emberei",
        "géppuskásai", "gránátosai",
        "harcosai",
        "katonái", "kommandósai",
        "lángszórósai", "légelhárítói", "lövészei",
        "mesterlövészei",
        "páncélgránátosai", "páncélosai", "pribékjei",
        "rohamcsapatai", "rohamrendőrei", "rohamosztagosai", "rohamutászai",
        "szuperkatonái",
        "tüzérei", "tűzszerészei",
        "ügynökei",
        "verőemberei"
    ];

const EroszakosCselekedetek =
    [
        "a mocsárba lökik",
        "baseballütővel szétverik",
        "egy sortűzzel megállítják", "eladják ócskavasnak",
        "felgyújtják", "felrobbantják",
        "géppuskával szétlyuggatják",
        "hamuvá égetik",
        "kalapáccsal szétverik", "kiöntik betonnal",
        "lángszóróval szétégetik",
        "RPG-vel kilövik",
        "szétlövik egy helikopterről", "szétütik egy cséphadaróval", "szétszerelik", "szétverik lánccal", "szitává lövik",
        "vascsővel szétütik"
    ];

const Termekeket =
    [
        "akkumulátorokat", "altatókat", "antianyagot", "antibiotikumokat", "azbesztpalát",
        "baktériumokat", "biológiai fegyvereket",
        "doppingszereket",
        "élelmiszerszínezéket",
        "génmódosított kukoricát", "génmódosított szóját",
        "gyógyszereket", "gyomirtókat",
        "harci gázokat",
        "ideggázokat", "integrált áramköröket", "izotópokat",
        "kemtrélt", "kertitörpéket", "kísértetkondenzátumot", "klónokat", "kristályokat", "kullancsirtószert",
        "lőszert",
        "mutáns baktériumokat", "műtrágyát",
        "növényvédőszereket", "nyálas sorozatokat", "nyugtatókat",
        "okoscimbalmot",
        "plutóniumot",
        "robbanóanyagot",
        "sötét anyagot",
        "szteroidokat",
        "táplálékkiegészítőket", "természetazonos aromát", "TNT-t", "tömegpusztító fegyvereket", "traktorokat", "trotilt",
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
        "K+F vezető", "KAM",
        "marketinges", "művezető",
        "osztályvezető",
        "ügyvezető igazgató", "üzemvezető",
        "vezérigazgató", "vezérigazgató-helyettes"
    ];

const TamadasModok =
    [
        "bugyborékoló hörgéssel",
        "eszelős kacajjal",
        "habzó szájjal", "hangosan átkozódva", "hörögve",
        "káromkodva", "kegyetlen ordítással",
        "nyáladzva",
        "ordítva", "őrjöngve", "ősi istenek nevét kántálva",
        "pudvás fogait kivillantva",
        "szörcsögő hangokat hallatva",
        "üvöltve",
        "vérben forgó szemekkel", "veszett üvöltéssel", "vicsorogva"
    ];

const Fegyverekkel =
    [
        "45-ös Magnummal",
        "aknavetővel", "alabárddal", "ásóval", "ásóbottal",
        "baltával", "bárddal", "baseballütővel", "Berettával", "BFG-9000-rel", "bicskával", "blokktéglával", "borosüveggel",
        "bottal", "bunkósbottal", "bunkóval", "bűvös gránáttal", "buzogánnyal",
        "Colttal",
        "csatabárddal", "csavarhúzóval", "csőkulccsal",
        "doronggal", "duplacsövű puskával",
        "farkaskaszával", "fejszével", "féltéglával", "fénykarddal", "feszítővassal", "forgópisztollyal", "franciakulccsal", "furkósbottal",
        "Gauss-puskával", "gépágyúval", "gépkarabéllyal", "géppisztollyal", "géppuskával", "gereblyével", "Glock-kal",
        "golyószóróval", "göcsörtös bunkósbottal", "gyalogsági ásóval",
        "hangtompítós pisztollyal", "hosszú késsel", "hosszú szuronnyal", "hosszúíjjal", "husánggal", "huszárkarddal",
        "ideggázzal",
        "Kalasnyikovval", "kampósbottal", "kapával", "karabéllyal", "karddal", "kaszával", "kézigránáttal", "kiegyenesített kaszával", "konyhakéssel",
        "kőbaltával", "könnyű géppuskával", "kőtörő kalapáccsal", "krikettütővel",
        "lánccal", "láncfűrésszel", "láncos buzogánnyal", "lándzsával", "lángszóróval", "lefűrészelt csövű puskával", "légvédelmi gépágyúval",
        "lézerágyúval", "lézerkarddal", "lézerpisztollyal", "lovagi pallossal", "Lügerrel",
        "mankóval", "második világháborús bajonettel", "mesterlövészpuskával", "Molotov-koktéllal", "mordállyal", "muskétával",
        "nehéz csákánnyal", "nehézgéppuskával", "nyeles kézigránáttal",
        "pájszerrel", "pallossal", "Panzerfausttal", "páncélököllel", "páncélrémmel", "Parabellummal", "permetleves lándzsával", "plazmafegyverrel", "puskával",
        "radiátorcsővel", "rakétavetővel", "rakétával", "repeszgránáttal", "rohampuskával", "rozsdás vascsővel", "RPG-vel",
        "sarlóval", "shotgunnal", "sörétes puskával", "Steyr AUG-gal", "Sturmgewehrrel", "sugárpisztollyal", "sugárvetővel",
        "szablyával", "szakócával", "számszeríjjal", "szamurájkarddal", "szekercével", "szeneslapáttal", "szívlapáttal", "szögekkel kivert cséphadaróval", "szöges buzogánnyal",
        "szónikus ágyúval", "szónikus puskával", "szuronnyal",
        "tőrrel", "törött sörösüveggel",
        "vadászpuskával", "vadásztőrrel", "vascsővel", "vasrúddal", "vasvillával", "villáskulccsal", "viperával",
        "Winchesterrel"
    ];

const CsataJelzok =
    [
        "brutális",
        "elemi erejű",
        "hőseposzba illő",
        "kegyetlen",
        "véres"
    ];

const Megsemmisulesek =
    [
        "darabokra hullik",
        "felrobban",
        "hamuvá ég",
        "leég",
        "megsemmisül",
        "összedől", "összedől és azután elsüllyed", "összeomlik", "összerogy", "összeroskad"
    ];

const GyariEpuletek =
    [
        "autószerelő műhely",
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
        "víztorony"
    ];

const Sebesulesek =
    [
        "fájdalmában üvöltés tör elő torkából",
        "kiömlő vére a falra fröccsen", "kiömlő vére vörösre festi ruháját",
        "sebeiből megvadult patakként ömlik a vér",
        "testéből vérszökőkút tör elő"
    ];

const Pusztulasok =
    [
        "holtan esik össze", "holtan terül el a földön",
        "kileheli sötét lelkét",
        "rongybabaként rogy össze a véres padlón"
    ];

const Szuperfegyvereket =
    [
        "1 megatonnás légibombát",
        "antianyagbombát", "atombombát", "atomrobbanófejes robotrepülőgépet",
        "bunkerrombolót",
        "Cár-bombát",
        "fissziós bombát",
        "lángoló foszforbombát", "levegő-föld rakétát",
        "gigantikus gyújtóbombát",
        "háromfázisú atombombát", "hidegfúziós bombát", "hidrogénbombát",
        "ICBM-et", "intelligens bombát", "irányított bombát",
        "kobaltbombát",
        "megtorlófegyvert", "MIRV-et", "MX-rakétát",
        "neutronbombát", "nukleáris csapásmérő fegyvert",
        "óriási napalmbombát",
        "Pershing-rakétát",
        "robotrepülőgépet",
        "Scud-rakétát",
        "taktikai atomgránátot", "termobárikus fegyvert", "termonukleáris fegyvert", "több tonnás rombolóbombát",
        "vákuumbombát"
    ];

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

function GetRejtekhelyJelzo()
{
    return GetSzo(RejtekhelyJelzok);
}

function GetRejtekhelyben()
{
    return GetSzo(Rejtekhelyekben);
}

function GetRejtozesModja()
{
    return GetSzo(RejtozesModja);
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
    let foglalkozas = "";
    let tmpFoglalkozas = GetSzo(Foglalkozasok);

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
