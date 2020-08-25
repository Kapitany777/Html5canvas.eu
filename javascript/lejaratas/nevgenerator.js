var vezetekNevek =
[ 
    "Balog", "Barna", "Bognár",
    "Csikós", "Csubakka",
    "Darth",
    "Emődi",
    "Fekete", "Fehér",
    "Horváth",
    "Juhász",
    "Kádár", "Kis", "Kovács",
    "Lakatos",
    "Nagy", "Németh",
    "Rácz",
    "Szabó", "Szilágyi",
    "Vas",
    "Yoda",
    "Zölderdő",
    "Zsákos"
];

var kozepsoNevek =
[
    "Adócsaló", "Alkesz",
    "Biciklis", "Bigfoot", "Bosszúálló",
    "Cigarettás",
    "Enyveskezű",
    "Favágó",
    "Kopasz",
    "Láncdohányos",
    "Mackós", "Motoros",
    "Nagylábú",
    "Ork",
    "Piacos", "Pornós", "Postás",
    "Rabló", "Ragyás", "Róka",
    "Sebhelyes", "Szakállas", "Szemforgató",
    "Takarító", "Tohonya", "Tolvaj", "Tökfej", "Tökös", "Traktoros", "Troll",
    "Ufó", "Útonálló",
    "Valutás", "Vonatrabló", "Végrehajtó"
];

var keresztNevek =
[ 
    "Adolf", "Aladár", "Alfonz", "Anakin", "András", "Antal", "Attila",
    "Béla",
    "Endre",
    "Ferenc",
    "Gábor", "Géza",
    "Imre",
    "József",
    "Károly", "Kázmér",
    "Lajos", "László",
    "Mihály", "Miklós",
    "Ödön",
    "Péter",
    "Sándor",
    "Tamás",
    "Zoltán",
    "Zsolt"
];

function NevGeneralasa()
{
    var vezetekNev = vezetekNevek[Math.floor(Math.random() * vezetekNevek.length)];
    var kozepsoNev = kozepsoNevek[Math.floor(Math.random() * kozepsoNevek.length)];
    var keresztNev = keresztNevek[Math.floor(Math.random() * keresztNevek.length)];
    
    return vezetekNev + " \"" + kozepsoNev + "\" " + keresztNev;
}
