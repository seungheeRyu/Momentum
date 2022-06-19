const colors = ["LightPink"
                , "paleVioletRed"
                , "LightCoral"
                , "IndianRed"
                , "LemonChiffon"
                , "Moccasin"
                , "PeachPuff"
                , "Cornsilk"
                , "Bisque"
                , "NavajoWhite"
                , "RosyBrown"
                , "Tan"
                , "YellowGreen"
                , "LightGreen"
                , "PaleGreen"
                , "DarkSeaGreen"
                , "MediumAquamarine"
                , "LightCyan"
                , "PaleTurquoise"
                , "CadetBlue"
                , "LightSteelBlue"
                , "PowderBlue"
                , "LightBlue"
                , "SkyBlue"
                , "CornflowerBlue"
                , "Lavender"
                , "Thistle"
                , "MediumPurple"
                , "SlateBlue"
                , "Snow"
                , "Honeydew"
                , "MintCream"
                , "Azure"
                , "AliceBlue"
                , "WhiteSmoke"
                , "OldLace"
                , "Linen"
                , "LavenderBlush"
                , "MistyRose"
                , "Gainsboro"
                , "DimGray"
                , "LightGrey"
                ];

function handleBackground() {

    const roop = setTimeout(handleBackground, 3000);

    const a = colors[Math.floor(Math.random() * colors.length)];
    const b = colors[Math.floor(Math.random() * colors.length)];
        if (a === b) {
            return handleBackground();
        }
    document.body.style.background = `linear-gradient(to right, ${a}, ${b})`;
}

handleBackground();
