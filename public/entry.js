import * as d3 from 'd3';

const dataset=[{foo: 5}, {foo: 10}, {foo: 15}];

let myScale = d3.scaleLinear().domain([5, 15]).range([0, 1]);

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

d3
.select('body')
.selectAll('h1')
.data(dataset)
.enter()
.append('div')
.text(({foo}) => myScale(foo) + 'foo');
