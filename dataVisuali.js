
//DIMENSIONS
let HEIGHT = 500,
    WIDTH = 500,
    MARGIN = 40;

//CREATING SVG
let svg = d3
   .select("section")
   .append("svg")
   .attr("height", HEIGHT + MARGIN + MARGIN)
   .append("g")
   .attr("transform", `translate(${MARGIN}, ${MARGIN})`);

//CREATING SCALES/ AXES 
let xScale = d3.scaleLinear().domain([0, 3000]).range([0, WIDTH]);
function createXAxis(data){
    svg
    .append("g")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(d3.axisBottom(xScale));
}

let yScale =d3.scaleLinear().domain([0, 400000]).range([HEIGHT, 0]);
function createYAxis(){
    svg.append("g").call(d3.axisLeft(yScale));
}

//CREATE CIRCLES
function createCircles(data) {
    svg
    .selectAll("circles")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.GrLivArea))
    .attr("cy", (d) => yScale(d.SalePrice))
    .attr("r", 1.2)
    .style("fill", "pink");
}

//IMPLEMENTING THE DATA
d3.csv(

).then(function (data) {
    createXAxis(data);
    createYAxis();
    createCircles(data);
});