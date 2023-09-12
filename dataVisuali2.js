// DIMENSIONS.
let WIDTH = 928;
    HEIGHT = 500;
    marginTop = 30;
    marginRight = 0;
    marginLeft = 40;

// CREATE SVG
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

