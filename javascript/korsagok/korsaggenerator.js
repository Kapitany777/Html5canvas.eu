const elotagok =
    [
        "akut", "antibiotikum-rezisztens", "atomgerendási",
        "bakteriális",
        "déli",
        "északi",
        "fertőző",
        "génmanipulált", "gennyes",
        "hegyi", "heveny", "holdi", "hólyagos",
        "járványos",
        "keleti", "kínai", "kongói", "krími", "kukutyini",
        "időjárásvezérelt",
        "marsi", "mélyűri", "mutáns",
        "nílusi", "nukleáris",
        "nyugati",
        "simagöröngyösi", "sivatagi", "spanyol", "sugárzó",
        "szerzett ",
        "tengeri", "toxikus",
        "venezuelai", "vénuszi", "vérzéses", "vietnami", "vírusos", "völgyi"
    ];

const hordozok =
    [
        "bálna", "barbár", "baromfi", "béka", "bolha",
        "cápa",
        "csirke",
        "delfin", "denevér",
        "farkas", "féreg",
        "giliszta",
        "kacsa", "kalóz", "kan", "kecske", "krokodil", "kutya",
        "liba", "ló",
        "macska", "majom", "marha", "medve", "múmia",
        "nindzsa", "nutria",
        "nyúl",
        "papagáj", "patkány",
        "robot",
        "sertés",
        "teknős",
        "víziló",
        "zombi"
    ];

const betegsegek =
    [
        "betegség",
        "csuklás",
        "fene", "fertőzés",
        "görcs", "gyulladás",
        "hályog", "hasmenés", "himlő",
        "influenza",
        "kolera", "kór",
        "láz",
        "nátha",
        "pestis",
        "ragály", "rángás",
        "sántulás",
        "szindróma",
        "tripper", "tünetegyüttes",
        "szemtengelyferdülés",
        "vész", "veszettség", "vírus", "viszketés"
    ];

function KorsagGeneralasa()
{
    let korsag =
        elotagok[Math.floor(Math.random() * elotagok.length)] + " " +
        hordozok[Math.floor(Math.random() * hordozok.length)] +
        betegsegek[Math.floor(Math.random() * betegsegek.length)];

    $("#korsag").text(korsag);
}

$(document).ready(
    function()
    {
            KorsagGeneralasa();
    });
