// move the data outside of the function and make it global once working

async function svg1a() {
    // const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    d3.select("#svg1").selectAll("*").remove();
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

async function svg1b() {
    //const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    d3.select("#svg1").selectAll("*").remove();

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
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc)) } )
        .attr('r',function(d) { return 3.0 } )
        .append('title')
        .text(function(d) { return d.model } );

    // add annotation
    d3.select('#svg1').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .append("text")
        .text("These results use the same")
        .attr("x",x(0.9))
        .attr("y",y(900.0));

    d3.select('#svg1').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .append("text")
        .text("interatomic model")
        .attr("x",x(0.9))
        .attr("y",y(800.00));

    d3.select('#svg1').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('rect').data(data).enter().append('rect')
        .attr("width",300)
        .attr("height",300)
        .attr("x",x(0.5))
        .attr("y",y(2600));

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


async function svg2a() {
    d3.select("#svg2").selectAll("*").remove();
    const data = await d3.csv("./data.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLinear().domain([0,0.25]).range([0,width]);
    var y = d3.scaleLinear().domain([0,250]).range([height, 0]);

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 3.0 } );


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

async function svg2b() {
    d3.select("#svg2").selectAll("*").remove();
    const data = await d3.csv("./data_filtered.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLinear().domain([0,0.25]).range([0,width]);
    var y = d3.scaleLinear().domain([0,250]).range([height, 0]);

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 3.0 } );


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
    var x = d3.scaleLog().domain([.0005,2]).range([0,width]);
    var y = d3.scaleLog().domain([1,600]).range([height, 0]);
    //var x = d3.scaleLinear().domain([.0005,2]).range([0,width]);
    //var y = d3.scaleLinear().domain([1,600]).range([height, 0]);

    d3.select('#svg3').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc)) } )
        .attr('r',function(d) { return 3.0 } )
        .append('title')
        .text(function(d) { return d.model } );


    d3.select('#svg3').append('g')
        .attr('transform','translate('+margin+','+margin+')')
        .call(d3.axisLeft(y));
                    //.tickValues([10,20,50,100]);
                    //.tickFormat(d3.format("~s")));

    d3.select('#svg3').append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x));
                    //.tickValues([.001,.01,.1,1]);
                    //.tickFormat(d3.format("~s")));

    function filterDataSpecies(data, species) {
        var model_type_button = document.getElementById('modelTypeButton').value
        //console.log(model_type_button)
        return data.filter(function(d) { return d.species == species && d.model_base_type == model_type_button})
    }

    function filterDataModel(data, model_type) {
        var species_button = document.getElementById('speciesButton').value
        return data.filter(function(d) { return d.model_base_type == model_type && d.species == species_button })
    }
    
    // event listener
    //d3.select('#speciesButton').on("input", filterData()) //this isn't right
    
    // I think my issue is with the keys:
    // https://bost.ocks.org/mike/join/
    // https://bost.ocks.org/mike/constancy/
    function addPoints(data_in) {
        console.log(data_in)
        d3.select('#svg3')
            .selectAll("circle").data(data_in).enter().append("circle")
            //.attr('transform', 'translate('+margin+','+margin+')')            
            .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc)) } )
            .attr('cy',function(d) { return y(parseFloat(d.c44_fcc)) } )
            .attr('r',function(d) { return 3.0 } )
            .attr('transform', 'translate('+margin+','+margin+')')
            .append('title')
            .text(function(d) { return d.model } )

    }
    
    function removePoints(data_in) {
        // console.log(data_in)
        d3.select('#svg3').selectAll("circle")
            //.data(data_in)
            //.exit()
            .remove();
    }
        
    function updatePoints(data_in) {
        //console.log(data_in)
        d3.select('#svg3').selectAll("circle")
            .data(data_in)
            .transition()
            //.attr('transform', 'translate('+margin+','+margin+')')
        }
    
    //initial selection
    //var speciesSelected = document.querySelector('input[name="speciesButton"]:checked');
    //var selectedData = filterData(data, speciesSelected.value);
    //addPoints(selectedData);
    
    // groupSelector.onchange = function(d) {
    //     var group = d.target.value;
    //     var selectedData = filteredData(data, group);
        
    //     updatePoints(selectedData);
    //     addPoints(selectedData);
    //     removePoints(selectedData);
        
    //     };

    d3.select('#speciesButton').on("change", function(d) {
            var selectedSpecies = this.value;
            var selectedData = filterDataSpecies(data, selectedSpecies);
            //updatePoints(selectedData);
            removePoints(selectedData);
            addPoints(selectedData);
            });

    d3.select('#modelTypeButton').on("change", function(d) {
            var selectedModelType = this.value;
            var selectedData = filterDataModel(data, selectedModelType);
            //updatePoints(selectedData);
            removePoints(selectedData);
            addPoints(selectedData);
            });
}


