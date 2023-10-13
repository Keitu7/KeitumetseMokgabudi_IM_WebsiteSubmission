// DIMENSIONS.
let width = 928;
    height= 500;
    marginTop = 30;
    marginRight = 0;
    marginLeft = 40;

// CREATE SVG
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

//SCALES
let xScale = d3.scaleBand().range([0, width]).padding(0.3),
    yScale = d3.scaleLinear().range([height, 0]);

let g = svg.append("g")
    .attr("transform", "translate(" + 140 + "," + 140 + ")");


xScale.domain("html", "css", "js");
yScale.domain([0, 100]);

g.append("g")
 .attr("transform", "translate(0," + height + ")")
 .call(d3.axisBottom(xScale).tickFormat(function(d){
   return "sale: " + d;
 })
 );

g.append("g")
 .call(d3.axisLeft(yScale).tickFormat(function(d){
     return "$" + d;
 }).ticks(4));


//Creating bars
g.selectAll(".barColour")
 .data("html", "css", "js")
 .enter().append("rect")
 .attr("class", "bar")
 .attr("x", function(d) { return xScale(d); })
 .attr("y", function(d) { return yScale(d); })
 .attr("width", xScale.bandwidth())
 .attr("height", function(d) { return height - yScale(d); });



//Shahpar Khan. 2023. Educative, Inc. How to create bar chart using D3. Online.<https://www.educative.io/answers/how-to-create-a-bar-chart-using-d3>. Accessed 11 October 2023.//
