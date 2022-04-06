function TortenetCim()
{
    let cim = Nevelo(GetJelzo(), true) + " " + GetFonev();

    if (Math.random() < 0.5)
    {
        cim += " " + GetBirtok();
    }
    
    if (Math.random() < 0.5)
    {
        cim += ": " + GetFonev() + " ";
        
        if (Math.random() < 0.5)
        {
            cim += Nevelo(GetHelybol());
        }
        else
        {
            cim += Nevelo(GetHelyben());
        }
    }
    
    return cim;
}

function TortenetGeneralasa()
{
    $("#tortenetCime").text(TortenetCim());

    const fohosNeve = GeneraltNev();
    const fohosFoglalkozasa = GetFoglalkozas();

    const mentorNeve = GeneraltMentorNev();
    const mentorFoglalkozasa = GetFoglalkozas();

    const felelosCegNeve = GetVallalatNev();
    const felelosNeve = GeneraltNev();
    const felelosBeosztasa = GetCegvezeto();

    let tortenet = "<p>";
    tortenet += fohosNeve + " " + fohosFoglalkozasa + " egy " + GetTelepules() + ". ";
    tortenet += "Élete eseménytelenül telik, míg egy " + GetEjszakaJelzo() + " éjszakán váratlanul " + GetSzorny() + " özönlik el a környéket. ";
    tortenet += fohosNeve + " " + GetJarmu() + " menekülni próbál, ";
    tortenet += "de a települést ekkorra már karantén alá veszik " + Nevelo(GetEroszakSzervezet()) + " állig felfegyverzett " + GetEroszakSzervezetTagja() + ", ";
    tortenet += "akik " + GetEroszakosCselekedet() + " a járművet.";
    tortenet += "</p>";
    
    tortenet += "<p>";
    tortenet += fohosNeve + " puszta életét mentve kénytelen elmenekülni a helyszínről. ";
    tortenet += "Megpróbál elrejtőzni egy " + GetRejtekhelyJelzo() + " " + GetRejtekhelyben() + ", de nincs egyedül. ";
    tortenet += "Itt " + GetRejtozesModja() + " az öreg " + mentorNeve + ", a helyi " + mentorFoglalkozasa + " is, akinek szintén sikerült elkerülni a rá leselkedő végzetet. ";
    tortenet += fohosNeve + " megtudja az öregtől, hogy az őket sújtó katasztrófáért " + Nevelo(GetTermeket()) + " előállító " + felelosCegNeve + " a felelős. ";
    tortenet += mentorNeve + " megpróbálja rábeszélni társát, hogy pusztítsák el az ellenséget, de ";
    tortenet += fohosNeve + " nem osztja az öreg lelkesedését, biztonságosabbnak véli, ha továbbra is rejtekhelyükön maradnak. ";
    tortenet += "Vitájukat hirtelen " + GetSzorny() + " támadása szakítja félbe, és vad küzdelem veszi kezdetét. ";
    tortenet += "Az öreg " + mentorFoglalkozasa + " vitézül harcol fegyverével, egy " + GetFegyverrel() + ", ";
    tortenet += "de " + Nevelo(fohosFoglalkozasa) + " is kiveszi a részét a küzdelemből a helyszínen talált " + GetFegyverrel() + ". ";
    tortenet += "Végül legyőzik a szörnyeket, de az öreg halálos sebet kap a harcban, és hamarosan kileheli lelkét. ";
    tortenet += fohosNeve + " ekkor " + GetBosszuJelzo() + " bosszút esküszik. ";
    tortenet += "</p>";
    
    tortenet += "<p>";
    tortenet += "Fegyverrel a kezében, bosszúvágytól fűtve elindul " + Nevelo(felelosCegNeve) + " közeli székhelye felé, hogy leszámoljon a felelősökkel. ";
    tortenet += "Útközben " + GetSzorny() + " rontanak rá, de " + fohosNeve + " rövid úton elintézi őket. ";
    tortenet += "Hosszú, " + GetSzin() + " kabátjáról " + Nevelo(GetUndoritoAnyagot()) + " törölgetve halad célja felé. ";
    tortenet += "A cég központi telephelyén " + GetSzorny() + " védelme mögé rejtőzve már vár rá a gátlástalan " + felelosBeosztasa + ", " + felelosNeve + ". ";
    tortenet += fohosNeve + " " + GetCsataJelzo() + " küzdelemben legyőzi a bérenceket, ";
    tortenet += "a csata során " + GetMesemmisules() + " a telephelyen lévő " + GetGyariEpulet() + ". ";
    tortenet += Nevelo(felelosBeosztasa, true) + " vesztét érezve megpróbál elmenekülni, de " + fohosNeve + " utoléri. ";
    tortenet += felelosNeve + " egy " + GetFegyverrel() + " kezében, " + GetTamadasMod() + " ráront ellenfelére. ";
    tortenet += "Támadása elsöprő erejű, " + fohosNeve + " megsebesül, " + GetSebesules() + ". ";
    tortenet += "A főhős erejének utolsó morzsáit kihasználva egy " + GetFegyverrel() + " leszámol az eszét vesztett gonosszal, akinek " + GetSebesules() + ", ";
    tortenet += "majd " + GetPusztulas() +  ". ";
    tortenet += "</p>";
    
    tortenet += "<p>";
    tortenet += fohosNeve + " a földre rogy halott ellenfele mellé. Ekkor azonban repülőgéphajtóművek dübörgését hallja meg a távolból. ";
    tortenet += "Kirohan a gyárudvarra, és " + Nevelo(felelosBeosztasa) + " " + GetJarmu() + " eszement tempóban menekülőre fogja a dolgot. ";
    tortenet += "Biztonságos távolságba érve végignézi, ahogyan " + Nevelo(GetEroszakSzervezet()) + " repülőgépe ";
    tortenet += "egy " + GetSzuperfegyvert() + " dob az otthonát jelentő településre, mely eltűnik egy hatalmas gombafelhőben.";
    tortenet += "</p>";
    
    $("#tortenetSzovege").html(tortenet);
}

$(document).ready(
        function()
        {
            TortenetGeneralasa();
        });
