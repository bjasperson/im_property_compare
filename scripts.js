// move the data outside of the function and make it global once working

async function svg1() {
    // const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    const data = await d3.csv("./data.csv");

    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLinear().domain([0,2]).range([0,width]);
    var y = d3.scaleLinear().domain([0,2500]).range([height, 0]);

    d3.select('#svg1').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 3.0 } );


    d3.select('#svg1').append('g')
        .attr('transform','translate('+margin+','+margin+')')
        .call(d3.axisLeft(y));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));

    d3.select('#svg1').append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));
}

async function svg2() {
    //const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    const data = await d3.csv("./data.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLinear().domain([0,2]).range([0,width]);
    var y = d3.scaleLinear().domain([0,2500]).range([height, 0]);

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc)) } )
        .attr('r',function(d) { return 3.0 } )
        .append('title')
        .text(function(d) { return d.model } );

    // add annotation
    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .append("text")
        .text("These results use the same")
        .attr("x",x(0.9))
        .attr("y",y(900.0));

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .append("text")
        .text("interatomic model")
        .attr("x",x(0.9))
        .attr("y",y(800.00));

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('rect').data(data).enter().append('rect')
        .attr("width",300)
        .attr("height",300)
        .attr("x",x(0.5))
        .attr("y",y(2600));

    d3.select('#svg2').append('g')
        .attr('transform','translate('+margin+','+margin+')')
        .call(d3.axisLeft(y));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));

    d3.select('#svg2').append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));
}

async function svg3() {
    const data = await d3.csv("./data_filtered.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLinear().domain([0,0.25]).range([0,width]);
    var y = d3.scaleLinear().domain([0,250]).range([height, 0]);

    d3.select('#svg3').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 3.0 } );


    d3.select('#svg3').append('g')
        .attr('transform','translate('+margin+','+margin+')')
        .call(d3.axisLeft(y));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));

    d3.select('#svg3').append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x));
                    //.tickValues([10,20,50,100])
                    //.tickFormat(d3.format("~s")));
}


async function svg4() {
    const data = await d3.csv("./data_filtered.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLog().domain([.0005,2]).range([0,width]);
    var y = d3.scaleLog().domain([1,600]).range([height, 0]);

    d3.select('#svg4').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc)) } )
        .attr('r',function(d) { return 3.0 } )
        .append('title')
        .text(function(d) { return d.model } );


    d3.select('#svg4').append('g')
        .attr('transform','translate('+margin+','+margin+')')
        .call(d3.axisLeft(y));
                    //.tickValues([10,20,50,100]);
                    //.tickFormat(d3.format("~s")));

    d3.select('#svg4').append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x))
                    //.tickValues([.001,.01,.1,1]);
                    //.tickFormat(d3.format("~s")));
}