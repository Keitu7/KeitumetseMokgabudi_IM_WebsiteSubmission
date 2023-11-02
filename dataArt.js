//DIMETIONS
let height = 600,
    width = 1200,
    padding = 70;

let baseTemp;
let annualVariance;

let xScale;
let yScale;

let minYear;
let maxYear;

//SELECT SVG
let svg = d3.select ("#barChart").attr("height", height).attr("width", width);

//CREATING SCALES
function createScales () {
    
}

//DRAWING MAP



//IMPLEMENTATING
d3.d3.json("annual_json, json").then((data) => {
    baseTemp = data.baseTemperature;
    annualVariance = data.annualVariance;

    createScales();
    drawMap();
  
});