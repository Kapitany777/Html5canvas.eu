const keresztNevek =
    [
        "Abraham", "Adolf", "Adrian", "Ahmed", "Albert", "Alekszej", "Ali", "Anatolij", "Anton", "Arnold", "Arthur",
        "Barney", "Bernard", "Bill", "Boris", "Brian", "Bruce", "Bruno",
        "Cal", "Charles", "Chuck", "Clancy", "Clint", "Conan",
        "Darth", "David", "Dimitrij", "Don", "Donald",
        "Eduard", "Eli",
        "Fox",
        "Gordon", "Gregory",
        "Han", "Hans", "Harry", "Heinrich", "Henri", "Hercule", "Hermann",
        "Igor", "Isaac",
        "Jack", "Jackson", "James", "Jason", "Jim", "Joe", "Joel", "John", "Joseph", "Jules", "Jurij",
        "Kabir",
        "Lawrence", "Leonyid", "Leslie", "Lucas", "Luke",
        "Mark", "Martin", "Maxim", "Mehmet", "Mesut", "Michael", "Mihail",
        "Neil", "Nick", "Nigel", "Nikola",
        "Nyikita",
        "Oleg", "Otto",
        "Paul", "Peter",
        "Ragnar", "Richard", "Robert", "Robin", "Ron",
        "Sherlock", "Sidhe", "Steve", "Stuart", "Sylvester",
        "Szergej",
        "Timur", "Tobias", "Tom", "Tony", "Travis", "Tse", "Tyler",
        "Vaszilij", "Vlagyimir", "Victor", "Vincent",
        "Wallace", "Walter", "Wayne", "Wernher", "Wilhelm", "William", "Wyatt",
        "Yegor"
    ];

const vezetekNevek =
    [
        "Armstrong", "Ash",
        "Barnes", "Bear", "Bedi", "Bennet", "Biden", "Biggs", "Bishop", "Black", "Bond", "Borlini", "Braun", "Brown", "Bruce",
        "Calhoun", "Campbell", "Carmack", "Conrad", "Croft", "Cross", "Crow",
        "Daye", "Donovan", "Douglas", "Dubois", "Duke", "Dupont",
        "Earp", "Eastwood", "Einstein", "Elliot",
        "Ferguson", "Forbes", "Frankenstein", "Fraser", "Freeman", "Frost",
        "Gates", "Gilbert", "Glacius", "Gourdo", "Graham", "Grant", "Green", "Grün", "Grünwald",
        "Hamill", "Hamilton", "Hastings", "Hawkins", "Hicks", "Hindenburg", "Holmes", "Hood", "Hudson", "Hufnagel",
        "Jobs", "Jones",
        "Keller", "Kennedy", "Kilgore", "King", "Kleiner", "Kovacs", "König", "Kurgan", "Kurtz",
        "Langley", "Lee", "Levins", "Lincoln", "Livingstone", "Longstreet",
        "MacDonald", "MacGregor", "MacFarlane", "MacMillan", "Magnusson", "Matrelli", "Maxwell", "McDonald", "McLeod", "Mossman", "Mulder", "Murdock", "Müller",
        "Newton", "Nintendo", "Norris",
        "Patrick", "Pirx", "Poirot", "Potter",
        "Ra", "Ragnarsson", "Rambo", "Raptor", "Rata", "Raven", "Reed", "Ripley", "Ritchie", "Romero", "Rosenberg", "Rosenblum", "Rosenfeld", "Ross",
        "Sabrewulf", "Sakamoto", "Sandokan", "Schwarz", "Scott", "Scully", "Shepard", "Shephard", "Sidious", "Sigurdson", "Simmons", "Sinclair", "Skywalker", "Smith", "Solo",
        "Spinal", "Stallone", "Stewart", "Stonewall", "Sutherland",
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
