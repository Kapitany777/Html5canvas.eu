const keresztNevek =
    ["Joe", "Jim", "James", "John", "Han", "Luke", "Charles", "Bill", "Hans", "Wayne", "Walter",
        "Fox", "David", "William", "Martin", "Lucas", "Richard", "Steve", "Tom", "Joel", "Paul",
        "Isaac", "Jules", "Robert", "Brian", "Vincent", "Tobias", "Victor",
        "Heinrich", "Hermann", "Joseph", "Harry", "Ragnar", "Arthur", "Conan", "Arnold",
        "Wernher", "Szergej", "Vaszilij", "Jurij", "Nyikita", "Leonyid", "Mihail",
        "Mesut", "Albert", "Sherlock", "Otto", "Adolf", "Hercule", "Jack", "Henri", "Ali", "Ahmed",
        "Stuart", "Peter", "Bernard", "Neil", "Robin", "Tyler", "William", "Nikola", "Nick",
        "Gordon", "Barney", "Adrian", "Eli", "Wallace", "Michael", "Wilhelm", "Leslie", "Lawrence",
        "Abraham", "Donald"];

const vezetekNevek =
    ["Smith", "Taylor", "Campbell", "Biggs", "Dupont", "Dubois", "Rosenblum", "Black", "White",
        "Brown", "Green", "Reed", "Hawkins", "Armstrong", "Pirx", "Donovan", "Kovacs", "Szabo",
        "Barnes", "Newton", "Langley", "Murdock", "Holmes", "Watson", "Hastings", "King", "MacDonald",
        "Duke", "Shepard", "Conrad", "Frankenstein", "Potter", "Töpfer", "Sigurdson", "Müller",
        "Braun", "Schwarz", "Hindenburg", "Einstein", "Fraser", "Jones", "Bond", "Croft",
        "Carmack", "Ritchie", "McLeod", "Weiss", "Ragnarsson", "Poirot", "Romero", "Hood",
        "Ferguson", "Mulder", "Scully", "König", "Tesla", "Grünwald",
        "Freeman", "Calhoun", "Shephard", "Rosenberg", "Rosenfeld", "Cross", "Keller", "Bennet",
        "Simmons", "Vance", "Kleiner", "Magnusson", "Mossman", "Glacius", "Sabrewulf", "Spinal", "Raptor",
        "Bear", "Wolf", "Kilgore", "Kurtz", "Lincoln", "McDonald"];

const elotagok = ["Dr.", "Prof.", "Sir", "Lord", "Herr"];

function GeneraltNev()
{
    let keresztNev = keresztNevek[Math.floor(Math.random() * keresztNevek.length)];
    let vezetekNev = vezetekNevek[Math.floor(Math.random() * vezetekNevek.length)];

    let nev = keresztNev + " " + vezetekNev;

    if (Math.random() < 0.2)
    {
        nev = elotagok[Math.floor(Math.random() * elotagok.length)] + " " + nev;
    }

    return nev;
}
