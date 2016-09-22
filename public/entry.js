import * as d3 from 'd3';

let svg = d3.select('body')
.append('svg')
.attr('width', 250)
.attr('height', 250);

svg.append('rect')
.attr('width', 50)
.attr('height', 50)
.attr('x', 50)
.attr('y', 50)
.attr('fill', 'red');
