function getRandomColor()
{
    var sz = "0123456789abcdef";
    var hex = "#";

    for (var i = 0; i < 6; i++)
    {
        var idx = Math.random() * sz.length;
        hex += sz.charAt(idx);
    }

    return hex;
}

function getRandomGrayColor()
{
    var sz = "0123456789abcdef";
    var idx = Math.random() * sz.length;

    var hex = "#";

    for (var i = 0; i < 6; i++)
    {
        hex += sz.charAt(idx);
    }

    return hex;
}
