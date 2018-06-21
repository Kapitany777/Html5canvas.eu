var keresztNevek =
[ "Joe", "Jim", "James", "John", "Han", "Luke", "Charles", "Bill", "Hans", "Wayne", "Walter",
  "Fox", "David", "William", "Martin", "Lucas", "Richard", "Steve", "Tom", "Joel", "Paul",
  "Isaac", "Jules", "Robert", "Brian", "Vincent", "Tobias", "Victor",
  "Heinrich", "Hermann", "Joseph" ];

var vezetekNevek =
[ "Smith", "Taylor", "Campbell", "Biggs", "Dupont", "Dubois", "Rosenblum", "Black", "White",
  "Brown", "Green", "Reed", "Hawkins", "Armstrong", "Pirx", "Donovan", "Kovacs", "Szabo",
  "Barnes", "Newton", "Langley", "Murdock", "Holmes", "Watson", "Hastings", "King", "MacDonald",
  "Duke", "Shepard", "Conrad", "Frankenstein", "Potter", "Töpfer" ];
  
function GeneraltNev()
{
    var keresztNev = keresztNevek[Math.floor(Math.random() * keresztNevek.length)];
    var vezetekNev = vezetekNevek[Math.floor(Math.random() * vezetekNevek.length)];
    
    return keresztNev + " " + vezetekNev;
}
