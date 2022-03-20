const keresztNevek =
    [
        "Abraham", "Adolf", "Adrian", "Ahmed", "Albert", "Ali", "Arnold", "Arthur",
        "Barney", "Bernard", "Bill", "Brian", "Bruce",
        "Charles", "Chuck", "Conan",
        "David", "Donald",
        "Eli",
        "Fox",
        "Gordon",
        "Han", "Hans", "Harry", "Heinrich", "Henri", "Hercule", "Hermann",
        "Isaac",
        "Jack", "Jackson", "James", "Jim", "Joe", "Joel", "John", "Joseph", "Jules", "Jurij",
        "Lawrence", "Leonyid", "Leslie", "Lucas", "Luke",
        "Martin", "Mesut", "Michael", "Mihail",
        "Neil", "Nick", "Nikola",
        "Nyikita",
        "Otto",
        "Paul", "Peter",
        "Ragnar", "Richard", "Robert", "Robin", "Ron",
        "Sherlock", "Steve", "Stuart",
        "Szergej",
        "Tobias", "Tom", "Tyler",
        "Vaszilij", "Vlagyimir", "Victor", "Vincent",
        "Wallace", "Walter", "Wayne", "Wernher", "Wilhelm", "William"
    ];

const vezetekNevek =
    [
        "Armstrong", "Ash",
        "Barnes", "Bear", "Bennet", "Biden", "Biggs", "Bishop", "Black", "Bond", "Braun", "Brown", "Bruce",
        "Calhoun", "Campbell", "Carmack", "Conrad", "Croft", "Cross",
        "Donovan", "Douglas", "Dubois", "Duke", "Dupont",
        "Einstein", "Elliot",
        "Ferguson", "Forbes", "Frankenstein", "Fraser", "Freeman", "Frost",
        "Gates", "Gilbert", "Glacius", "Graham", "Grant", "Green", "Grün", "Grünwald",
        "Hamilton", "Hastings", "Hawkins", "Hicks", "Hindenburg", "Holmes", "Hood", "Hudson",
        "Jobs", "Jones",
        "Keller", "Kennedy", "Kilgore", "King", "Kleiner", "Kovacs", "König", "Kurgan", "Kurtz",
        "Langley", "Lee", "Lincoln", "Livingstone", "Longstreet",
        "MacDonald", "MacGregor", "MacFarlane", "MacMillan", "Magnusson", "Maxwell", "McDonald", "McLeod", "Mossman", "Mulder", "Murdock", "Müller",
        "Newton", "Norris",
        "Pirx", "Poirot", "Potter",
        "Ragnarsson", "Rambo", "Raptor", "Reed", "Ripley", "Ritchie", "Romero", "Rosenberg", "Rosenblum", "Rosenfeld", "Ross",
        "Sabrewulf", "Schwarz", "Scott", "Scully", "Shepard", "Shephard", "Sigurdson", "Simmons", "Sinclair", "Smith", "Spinal", "Stewart", "Stonewall", "Sutherland",
        "Szabo",
        "Taylor", "Tesla", "Töpfer", "Trump",
        "Vader", "Vasquez", "Vance",
        "Watson", "Weiss", "White", "Wolf"
    ];

const elotagok = ["Dr.", "Prof.", "Sir", "Lord", "Herr"];
const kozeptagok = ["de", "of", "van", "von"];

function GeneraltNev()
{
    let keresztNev = keresztNevek[Math.floor(Math.random() * keresztNevek.length)];
    let vezetekNev = vezetekNevek[Math.floor(Math.random() * vezetekNevek.length)];

    let nev = "";

    if (Math.random() < 0.2)
    {
        nev = keresztNev + " " + kozeptagok[Math.floor(Math.random() * kozeptagok.length)] + " " + vezetekNev;
    }
    else
    {
        nev = keresztNev + " " + vezetekNev;
    }

    if (Math.random() < 0.2)
    {
        nev = elotagok[Math.floor(Math.random() * elotagok.length)] + " " + nev;
    }

    return nev;
}
