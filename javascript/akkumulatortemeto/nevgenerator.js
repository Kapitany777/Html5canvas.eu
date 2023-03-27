const keresztNevek =
    [
        "Abraham", "Adolf", "Adrian", "Ahmed", "Albert", "Ali", "Arnold", "Arthur",
        "Barney", "Bernard", "Bill", "Brian", "Bruce", "Bruno",
        "Cal", "Charles", "Chuck", "Conan",
        "David", "Don", "Donald",
        "Eli",
        "Fox",
        "Gordon", "Gregory",
        "Han", "Hans", "Harry", "Heinrich", "Henri", "Hercule", "Hermann",
        "Isaac",
        "Jack", "Jackson", "James", "Jim", "Joe", "Joel", "John", "Joseph", "Jules", "Jurij",
        "Lawrence", "Leonyid", "Leslie", "Lucas", "Luke",
        "Martin", "Mehmet", "Mesut", "Michael", "Mihail",
        "Neil", "Nick", "Nigel", "Nikola",
        "Nyikita",
        "Otto",
        "Paul", "Peter",
        "Ragnar", "Richard", "Robert", "Robin", "Ron",
        "Sherlock", "Steve", "Stuart",
        "Szergej",
        "Tobias", "Tom", "Tony", "Travis", "Tse", "Tyler",
        "Vaszilij", "Vlagyimir", "Victor", "Vincent",
        "Wallace", "Walter", "Wayne", "Wernher", "Wilhelm", "William"
    ];

const vezetekNevek =
    [
        "Armstrong", "Ash",
        "Barnes", "Bear", "Bennet", "Biden", "Biggs", "Bishop", "Black", "Bond", "Borlini", "Braun", "Brown", "Bruce",
        "Calhoun", "Campbell", "Carmack", "Conrad", "Croft", "Cross", "Crow",
        "Daye", "Donovan", "Douglas", "Dubois", "Duke", "Dupont",
        "Einstein", "Elliot",
        "Ferguson", "Forbes", "Frankenstein", "Fraser", "Freeman", "Frost",
        "Gates", "Gilbert", "Glacius", "Gourdo", "Graham", "Grant", "Green", "Grün", "Grünwald",
        "Hamilton", "Hastings", "Hawkins", "Hicks", "Hindenburg", "Holmes", "Hood", "Hudson", "Hufnagel",
        "Jobs", "Jones",
        "Keller", "Kennedy", "Kilgore", "King", "Kleiner", "Kovacs", "König", "Kurgan", "Kurtz",
        "Langley", "Lee", "Levins", "Lincoln", "Livingstone", "Longstreet",
        "MacDonald", "MacGregor", "MacFarlane", "MacMillan", "Magnusson", "Matrelli", "Maxwell", "McDonald", "McLeod", "Mossman", "Mulder", "Murdock", "Müller",
        "Newton", "Norris",
        "Pirx", "Poirot", "Potter",
        "Ra", "Ragnarsson", "Rambo", "Raptor", "Raven", "Reed", "Ripley", "Ritchie", "Romero", "Rosenberg", "Rosenblum", "Rosenfeld", "Ross",
        "Sabrewulf", "Sakamoto", "Schwarz", "Scott", "Scully", "Shepard", "Shephard", "Sigurdson", "Simmons", "Sinclair", "Skywalker", "Smith", "Solo",
        "Spinal", "Stewart", "Stonewall", "Sutherland",
        "Sükür",
        "Szabo",
        "Taylor", "Tesla", "Töpfer", "Trump", "Turan", "Tyrone",
        "Vader", "Vasquez", "Vance",
        "Watson", "Weiss", "White", "Wolf"
    ];

const oregNevek =
    [
        "apó",
        "bá'", "bácsi", "bátya",
        "tata",
        "úr"
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

function GeneraltOregNev()
{
    let keresztNev = keresztNevek[Math.floor(Math.random() * keresztNevek.length)];
    let oregNev = oregNevek[Math.floor(Math.random() * oregNevek.length)];

    return keresztNev + " " + oregNev;
}

function GeneraltMentorNev()
{
    if (Math.random() < 0.5)
    {
        return GeneraltNev();
    }
    else
    {
        return GeneraltOregNev();
    }
}
