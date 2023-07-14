// move the data outside of the function and make it global once working

async function svg1() {
    const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    //const data = d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    console.log(data);  

    const margin = 50;
    const width = 200;
    const height = 200;
    var x = d3.scaleLinear().domain([0,2]).range([0,width]);
    var y = d3.scaleLinear().domain([0,2500]).range([height, 0]);

    d3.select('svg').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 2.0 } );


    d3.select('svg').append('g')
        .attr('transform','translate('+margin+','+margin+')')
        .call(d3.axisLeft(y));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));

    d3.select('svg').append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));
}