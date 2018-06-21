var companyNames = new Array("John Smith", "Monkey", "Terminator", "Vader");
var companyTypes = new Array("AG", "and Co.", "Company", "Consulting", "GmbH", "Technologies", "Rt.", "Kft.", "Bt.", "GPT", "GGT");

var nations = new Array("afrikai", "angol", "arab", "butu", "eszkimó", "etióp", "indián", "magyar", "német", "nyunyu", "orosz",
            "pigmeus", "piréz", "zulu");
var results = new Array("csúcson", "mélyponton");
var whenDay = new Array("tegnapelőtti", "tegnapi", "mai", "holnapi", "holnaputáni", "tavalyi", "jövő évi");
var when2 = new Array("délben", "éjjel", "napközben", "reggel", "teaidőben");
var when3 = new Array("elején", "közepén", "végén", "szélén");
var changeTypes = new Array("jelentős", "jelentéktelen", "iszonyatos", "kis", "nagy", "oltári", "fergeteges");
var personNames = new Array("Arnold Schwarzenegger", "Balotelli", "Bill Gates", "Darth Vader", "Fekete Pákó", "Kovács Béla",
"Larry Summers", "Matisz nagypapa", "Pista bácsi", "Soros György", "Szalacsi bácsi",
"Gátvéder", "Polgár Jenő", "Horváth Jenő");
var organizations = new Array("Bilderberg-csoport", "BUX", "CIA", "DRI", "FBI", "FED", "OTP", "SDI", "UFO", "XYZ");
var moveTypes = new Array("elég kusza", "érdekes", "kaotikus", "szűkülő", "táguló", "vicces");
var linePos = new Array("alsó", "középső", "felső");
var months1 = new Array("januárban", "februárban", "márciusban", "áprilisban", "májusban", "júniusban", "júliusban",
                        "augusztusban", "szeptemberben", "októberben", "novemberben", "decemberben");
var months2 = new Array("január", "február", "március", "április", "május", "június", "július",
                        "augusztus", "szeptember", "október", "november", "december");
var directions1 = new Array("csökkenő", "emelkedő", "henyélő", "oldalazó", "ténfergő", "zsugorodó");
var directions2 = new Array("azonosítatlan irányba", "balra", "felfelé", "hátra", "jobbra", "kifelé", "lefelé", "oldalra",
    "szanaszéjjel", "összevissza");
var directions3 = new Array("csökkenés", "emelkedés", "helyben toporgás", "tökölés", "tötymörgés", "vacakolás");
var graphTypes = new Array("Bollinger-szalag", "DeMarker", "Fibonacci-sorozat", "Fourier-sor", "Mersenne prímek",
"Schrödinger macskája", "sztochasztikus görbe", "Taylor-sor");
var colors = new Array("barna", "hányászöld", "hupikék", "kék", "lila", "piros", "sárga", "zöld");
var indicators = new Array("biszbaszokkal", "egyenesekkel", "görbékkel", "izékkel", "körökkel", "nyilakkal", "rombuszokkal", "téglalapokkal");
var minMaxTypes = new Array("globális", "lokális");
var minMax = new Array("maximumot", "minimumot", "optimumot");
var periods = new Array("éves", "évezredes", "évszázados", "fényéves", "hetes", "hónapos", "másodperces", "napos", "perces");
var moneys = new Array("dínáros", "dolláros", "dongos", "forintos", "jüanos", "koronás", "lejes", "pengős", "yenes", "zlotyis");
var adviceType = new Array("óvatos", "abszolút", "kimondottan", "meggondolt", "körültekintő", "nagy mértékű", "kis mértékű");
var advice = new Array("vételt", "pozíció zárást", "eladást", "shortot", "pozíció felvételt", "tartást", "kiszállást");

maxwidth = 0;
maxheight = 0;

function getNevelo(word)
{
    var ne = "aeiou";

    if (ne.indexOf(word[0]) === -1)
        return "a " + word;
    else
        return "az " + word;
}

function getNeveloKezd(word)
{
    var ne = "aeiou";

    if (ne.indexOf(word[0]) === -1)
        return "A " + word;
    else
        return "Az " + word;
}

function getWord(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function getIndexName()
{
    var txt = "";

    for (i = 0; i < Math.random() * 5 + 2; i++)
    {
        txt += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    return txt;
}

function getArticleTitle(indexName)
{
    var title = "";

    title += "Új történelmi ";
    title += getWord(results) + " ";
    title += "zárt ";
    title += getNevelo(getWord(nations)) + " ";
    title += indexName;
    title += " index!";

    return title;
}

function getCompanyName()
{
    return getWord(companyNames) + " " + getWord(companyTypes);
}

function getAnalysis()
{
    var t = "";

    t += "<p>" + getNeveloKezd(getWord(whenDay)) + " kereskedés során " + getWord(changeTypes) + " emelkedést mutattak a határidős indexek, ";
    t += "illetve " + getNevelo(getWord(nations)) + " részvénypiacok, miután " + getWord(when2) + " kiderült, ";
    t += getWord(personNames) + " visszalép " + getNevelo(getWord(nations)) + " jegybank szerepét betöltő " + getWord(organizations) + " elnökjelöltségétől.</p>";

    t += "<p>" + getNeveloKezd(getCompanyName()) + " árfolyama egy " + getWord(moveTypes) + " alakzatban mozog, ";
    t += "amíg ennek " + getWord(linePos) + " trendvonalát nem töri át, addig valószínűbbnek látszik a tavaly " + getWord(months1);
    t += " kezdődött " + getWord(directions1) + " trend folytatódása.</p>";

    t += "<p>Továbbra is " + getWord(graphTypes) + " mentén halad " + getWord(directions2) + ". A tegnapi nap ismét";
    t += " a korrekcióról szólt, amely a szalag " + getWord(linePos) + " szárának érintését követően indult meg.</p>";

    t += "<p>A grafikon görbéje " + getWord(months2) + " " + getWord(when3) + " tört ki a " + getWord(colors);
    t += " " + getWord(indicators) + " jelzett csatornából,";
    t += " eközben a " + getWord(colors) + " ellenállás vonalat is leküzdötte, és elérte " + getNevelo(getWord(months2)) + " " + getWord(when3) + " kialakult, ";
    t += Math.floor(Math.random() * 10000 + 3000) + " pont körüli " + getWord(minMaxTypes) + " " + getWord(minMax) + ".</p>";

    t += "<p>Az " + Math.floor((50 + Math.random() * 10) * 100) / 100 + " " + getWord(periods) + " mozgóátlag nem esett el, ";
    t += "így tovább folytatódhat még " + getNevelo(getWord(directions3));
    t += " a 16." + Math.floor(Math.random() * 800 + 100) + " " + getWord(moneys) + " szint, illetve a " + Math.floor((200 + Math.random() * 10) * 100) / 100 + " napos mozgóátlag irányába.</p>";

    t+= "<p>A fentiek alapján " + getWord(adviceType) + " " + getWord(advice) + " javaslunk!</p>";

    return t;
}

function getColor()
{
    var sz = "0123456789abcdef";
    var hex = "#";

    for (var i = 0; i < 6; i++)
    {
        var idx = Math.floor(Math.random() * sz.length);
        hex += sz.charAt(idx);
    }

    return hex;
}

function drawRectangle(ctx)
{
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.rect(1, 1, maxwidth, maxheight - 2);
    ctx.stroke();
    ctx.closePath();
}

function drawGraph(ctx, color, lineWidth, dy)
{
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    var x = 0;
    var y = Math.floor((maxheight / 2) + Math.random() * (maxheight / 2) * (Math.random() * 2 - 1));

    ctx.beginPath();

    ctx.moveTo(x, y);

    while (x < maxwidth)
    {
        x += Math.floor(Math.random() * 20 + 1);

        if (x > maxwidth) x = maxwidth;

        y += Math.floor(Math.random() * (Math.random() * 2 - 1) * dy);

        if (y < 10) y = 10;
        else if (y > maxheight - lineWidth) y = maxheight - lineWidth;

        ctx.lineTo(x, y);
        ctx.stroke();
    }

    ctx.closePath();
}

function drawHorizontalLine(ctx)
{
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 1;

    var y = Math.floor(Math.random() * maxheight);

    ctx.beginPath();
    ctx.moveTo(1, y);
    ctx.lineTo(maxwidth + 1, y);
    ctx.stroke();
    ctx.closePath();
}

function drawLine(ctx)
{
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = 1;

    var y1 = Math.floor(Math.random() * maxheight);
    var y2 = Math.floor(Math.random() * maxheight);

    ctx.beginPath();
    ctx.moveTo(20, y1);
    ctx.lineTo(maxwidth - 20, y2);
    ctx.stroke();
    ctx.closePath();
}

function drawShortLine(ctx, y)
{
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(maxwidth - 3, y);
    ctx.lineTo(maxwidth + 5, y);
    ctx.stroke();
    ctx.closePath();
}

function writeText(ctx, text, x, y, fontsize)
{
    ctx.font = "bold " + fontsize + "px Verdana";
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#202020";
    ctx.lineWidth = 1;

    ctx.fillText(text, x, y);
}

function Analysis()
{
    var canvas = document.getElementById("graph");
    var ctx = canvas.getContext("2d");

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0.5,0.5);

    maxwidth = canvas.width - 40;
    maxheight = canvas.height;

    // Border
    drawRectangle(ctx);

    // Title
    var indexName = getIndexName();
    document.getElementById("articleTitle").innerHTML = getArticleTitle(indexName);

    // Graphs
    drawGraph(ctx, "#ff0000", 5, 80);
    drawGraph(ctx, getColor(), 1, 15);

    // Horizontal lines
    for (i = 0; i < 4; i++)
    {
        drawHorizontalLine(ctx);
    }

    // Random lines
    drawLine(ctx);
    drawLine(ctx);

    // Numbers
    var start = Math.floor(Math.random() * 2000) + 1000;
    var delta = Math.floor(Math.random() * 400) + 100;
    var cnt = 10;

    for (i = 0; i < cnt; i++)
    {
        var y = canvas.height - (i * (canvas.height / cnt) + 20);
        writeText(ctx, start + i * delta, maxwidth + 8, y, 10);
        drawShortLine(ctx, y - 3);
    }

    // The title should be always visible
    writeText(ctx, "{" + indexName + "} Daily Index 1234-5678", 10, 20, 10);

    document.getElementById("analysis").innerHTML = getAnalysis();
}

function drawLogoCircle(ctx, x, y, r)
{
    ctx.fillStyle = getColor();

    ctx.beginPath();
    ctx.arc(x, y, r, 0.0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

function drawLogoRectangle(ctx, x, y)
{
    ctx.fillStyle = getColor();

    ctx.beginPath();
    ctx.rect(x, y, 40, 40);
    ctx.fill();
    ctx.closePath();
}

function Header()
{
    var canvas = document.getElementById("logo");
    var ctx = canvas.getContext("2d");

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0.5,0.5);

    maxwidth = canvas.width - 40;
    maxheight = canvas.height;

    if (Math.random() < 0.5)
    {
        drawLogoCircle(ctx, 50, 50, 20);
    }
    else
    {
        drawLogoRectangle(ctx, 30, 30);
    }

    writeText(ctx, getCompanyName(), 100, 65, 40);
}
