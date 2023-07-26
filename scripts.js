// move the data outside of the function and make it global once working

async function svg1a() {
    // const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    d3.select("#svg1").selectAll("*").remove();
    const data = await d3.csv("./data.csv");

    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLog().domain([0.001,2]).range([0,width]);
    var y = d3.scaleLog().domain([1,2500]).range([height, 0]);

    const annotations = [{
        note: {
          label: "These are the aggregated results. Let's look at the raw data...",
          //title: ""
        },
        // type: d3.annotationCalloutCircle,
        x: x(.05)+margin, 
        y: y(1100)+margin, 
        dx: -10,
        dy: 0,
        wrap: 400,
        padding: 10,
        subject: {
          radius: 75
        }
      }]

    const makeAnnotations = d3.annotation()
        .annotations(annotations)

    d3.select("#svg1").append("g")
        .attr("class", "annotation-group")
        .call(makeAnnotations)

    d3.select('#svg1').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 4.0 } );


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
    
    // add axis labels; ref: https://tomordonez.com/d3-bar-chart-title-and-labels/
    d3.select('#svg1').append('text')
        .attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("Surface Energy (110 FCC)");
    d3.select('#svg1').append('text')
        .attr("transform", "rotate(-90)")
        .attr("x", -(height/2+25))
        .attr("y",12)
        .style("text-anchor","middle")
        //.attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("C44 (FCC)");
}

async function svg1b() {
    //const data = await d3.csv("https://benjasperson.com/im_property_compare/data.csv");
    d3.select("#svg1").selectAll("*").remove();

    const data = await d3.csv("./data.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLog().domain([0.001,2]).range([0,width]);
    var y = d3.scaleLog().domain([1,2500]).range([height, 0]);

    const annotations = [{
        note: {
          label: "These results all use the same interatomic model",
          title: "Note the Model Name"
        },
        type: d3.annotationCalloutCircle,
        x: x(0.8)+margin, 
        y: y(1100)+margin, 
        dx: -200,
        dy: 0,
        wrap: 400,
        padding: 10,
        subject: {
          radius: 75
        }
      }]

    const makeAnnotations = d3.annotation()
        .annotations(annotations)

    d3.select("#svg1").append("g")
        .attr("class", "annotation-group")
        .call(makeAnnotations)

    d3.select('#svg1').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc)) } )
        .attr('r',function(d) { return 4.0 } )
        .append('title')
        .text(function(d) { return d.model } );

    // https://d3-annotation.susielu.com/#types
    //const annotation_type = d3.annotationCalloutCircle


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

    // add labels; ref: https://tomordonez.com/d3-bar-chart-title-and-labels/
    d3.select('#svg1').append('text')
        .attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("Surface Energy (110 FCC)");
    d3.select('#svg1').append('text')
        .attr("transform", "rotate(-90)")
        .attr("x", -(height/2+25))
        .attr("y",12)
        .style("text-anchor","middle")
        //.attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("C44 (FCC)");
}


async function svg2a() {
    d3.select("#svg2").selectAll("*").remove();
    const data = await d3.csv("./data.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLog().domain([0.001,2]).range([0,width]);
    var y = d3.scaleLog().domain([1,2500]).range([height, 0]);

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 4.0 } )
        .append('title')
        .text(function(d) { return d.species } );

    const annotations = [{
        note: {
            label: "Watch Rh move from here...",
            title: "For example"
        },
        type: d3.annotationCallout,
        x: x(.4)+margin, 
        y: y(650)+margin, 
        dx: -50,
        dy: -15,
        connector: { end:"arrow" },
        subject: {
            radius: 10
        }
    }]

    const makeAnnotations = d3.annotation()
        .annotations(annotations)

    d3.select("#svg2").append("g")
        .attr("class", "annotation-group")
        .call(makeAnnotations)


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

    // add labels; ref: https://tomordonez.com/d3-bar-chart-title-and-labels/
    d3.select('#svg2').append('text')
       .attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
       .style("text-anchor","middle")
       .text("Surface Energy (110 FCC)");
   d3.select('#svg2').append('text')
       .attr("transform", "rotate(-90)")
       .attr("x", -(height/2+25))
       .attr("y",12)
       .style("text-anchor","middle")
       //.attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
       .style("text-anchor","middle")
       .text("C44 (FCC)");


}

async function svg2b() {
    d3.select("#svg2").selectAll("*").remove();
    const data = await d3.csv("./data_filtered.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLog().domain([0.001,2]).range([0,width]);
    var y = d3.scaleLog().domain([1,2500]).range([height, 0]);

    d3.select('#svg2').append('g')
        .attr('transform', 'translate('+margin+','+margin+')')
        .selectAll('circle').data(data).enter().append('circle')
        .attr('cx',function(d) { return x(parseFloat(d.surface_energy_110_fcc_avg)) } )
        .attr('cy',function(d) { return y(parseFloat(d.c44_fcc_avg)) } )
        .attr('r',function(d) { return 4.0 } )
        .append('title')
        .text(function(d) { return d.species } );

    const annotations = [{
        note: {
            label: "to here!"
        },
        type: d3.annotationCallout,
        x: x(.12)+margin, 
        y: y(220)+margin, 
        dx: -50,
        dy: -15,
        connector: { end:"arrow" }
        //subject: {
        //    radius: 10
        //}
    }]

    const makeAnnotations = d3.annotation()
        .annotations(annotations)

    d3.select("#svg2").append("g")
        //.attr("class", "annotation-group")
        .call(makeAnnotations)


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
    
    // add labels; ref: https://tomordonez.com/d3-bar-chart-title-and-labels/
    d3.select('#svg2').append('text')
        .attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("Surface Energy (110 FCC)");
    d3.select('#svg2').append('text')
        .attr("transform", "rotate(-90)")
        .attr("x", -(height/2+25))
        .attr("y",12)
        .style("text-anchor","middle")
        //.attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("C44 (FCC)");
}


async function svg3() {
    const data = await d3.csv("./data_filtered.csv");
    console.log(data);  

    const margin = 50;
    const width = 400;
    const height = 400;
    var x = d3.scaleLog().domain([.001,2]).range([0,width]);
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

    // add labels; ref: https://tomordonez.com/d3-bar-chart-title-and-labels/
    d3.select('#svg3').append('text')
        .attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("Surface Energy (110 FCC)");
    d3.select('#svg3').append('text')
        .attr("transform", "rotate(-90)")
        .attr("x", -(height/2+25))
        .attr("y",12)
        .style("text-anchor","middle")
        //.attr('transform','translate('+(width/2 + margin)+','+(height+margin+40)+')')
        .style("text-anchor","middle")
        .text("C44 (FCC)");

    function filterDataSpecies(data, species) {
        var model_type_button = document.getElementById('modelTypeButton').value
        //console.log(model_type_button)
        return data.filter(function(d) { return d.species == species && d.model_base_type == model_type_button})
    }

    function filterDataModel(data, model_type) {
        var species_button = document.getElementById('speciesButton').value
        return data.filter(function(d) { return d.model_base_type == model_type && d.species == species_button })
    }
    
    
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


