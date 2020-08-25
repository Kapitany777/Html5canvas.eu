function EvekSzama()
{
    return Math.floor(Math.random() * 10) + 5;
}

function GetPart()
{
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var result = "";
    
    for (var i = 0; i < Math.floor(Math.random() * 8) + 3; i++)
    {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
}

function CikkGeneralasa()
{
    var ellenfelNeve = NevGeneralasa();
    var ellenfelBeosztasa = GetBeosztas();
    var varosNeve = VarosnevGeneralasa();
    var cimboraNeve = NevGeneralasa();
    var cimboraBeosztasa = GetVezetoiPozicio();
    var evekSzama = EvekSzama();
    var partNeve = GetPart();
    
    var negativTulajdonsag1 = GetNegativTulajdonsag();
    var negativTulajdonsag2 = GetNegativTulajdonsag();
    
    var cim = GetCim(ellenfelNeve);
    $("#tortenetCime").text(cim);
    
    var tortenet = "<p>";
    tortenet += "Lapunk kiderítette, hogy " + ellenfelNeve + ", aki " + ellenfelBeosztasa + " " + varosNeve + " városában, ";
    tortenet += "nem más, mint egy közönséges " + GetBunozo() + ".";
    tortenet += "</p>";
    
    tortenet += "<p>";
    tortenet += "Az említett személy " + evekSzama + " évvel ezelőtt költözött a városba. ";
    tortenet += "Ekkor ismerte meg a helyi alvilág egy hírhedt alakját, aki nem volt más, mint " + cimboraNeve + ". ";
    tortenet += "Vele összeborulva szerzett irányítói pozíciót a városi " + GetIntezmenyben() + ", ami alapját képezte későbbi meggazdagodásának. ";
    tortenet += "Persze nem elégedett meg ennyivel: cimborája nem sokkal később " + cimboraBeosztasa + " lett a nagy múltú települési " + GetIntezmenyben() + ". ";
    tortenet += "Miután " + varosNeve + " kasszájának tartalma feneketlen zsebeibe vándorolt, féktelen mohóságában politikai pályára lépett, és ";
    tortenet += "a rossz hírű " + partNeve + " párt színeiben hamarosan " + ellenfelBeosztasa + " lett.";
    tortenet += "</p>";
    
    tortenet += "<p>";
    tortenet += "Azt is megtudtuk " + GetInformator() + " beszámolójából, hogy " + ellenfelNeve + " " + negativTulajdonsag1;
    if (negativTulajdonsag1 !== negativTulajdonsag2)
    {
         tortenet += " és ezen kívül " + negativTulajdonsag2 + " is";
    }
    tortenet += ". ";
    tortenet += "Mintegy ráadásképpen az is kiderült, hogy rendszeresen " + GetNegativCselekedet() + ".";
    tortenet += "</p>";
    
    tortenet += "<p>";
    tortenet += "Amikor lapunk szembesítette bűneivel, " + ellenfelNeve + " " + GetPofatlansag() + " mindössze ennyit mondott:";
    tortenet += "</p>";
    
    tortenet += "<p><em>";
    tortenet += GetKifogas();
    tortenet += "</em></p>";
    
    tortenet += "<p>Ezzel még nem ért véget a történet, hamarosan további információkkal jelentkezünk " + ellenfelNeve + " üzelmeivel kapcsolatban.</p>";
    
    $("#tortenetSzovege").html(tortenet);
}

$(document).ready(
        function()
        {
            CikkGeneralasa();
        });
