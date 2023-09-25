const elotagok =
    [
        "afrikai", "akut", "antibiotikum-rezisztens", "atomgerendási", "ázsiai",
        "bakteriális",
        "déli",
        "északi",
        "fertőző",
        "génmanipulált", "gennyes",
        "hegyi", "heveny", "holdi", "hólyagos",
        "járványos", "jupiteri",
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
        "csimpánz", "csirke",
        "delfin", "denevér",
        "egér",
        "farkas", "féreg",
        "giliszta", "gorilla", "gibbon",
        "harcsa",
        "kacsa", "kalóz", "kan", "kecske", "krokodil", "kutya",
        "liba", "ló",
        "madár", "macska", "majom", "marha", "medve", "múmia",
        "nindzsa", "nutria",
        "nyúl",
        "orángután",
        "papagáj", "patkány", "pulyka",
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
