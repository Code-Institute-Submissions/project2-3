console.log("yeah");
 queue()
            .defer(d3.json, "/data")
            .await(makeGraphs);
            
            function makeGraphs(error, questData) {
               let ndx = crossfilter(questData);
               
               start_location(ndx);
               end_location(ndx);
               show_stacked_degree(ndx);
               get_type_of_quest(ndx);
               
               
                 dc.renderAll();
            }
function start_location(ndx) {
      let start_dim = ndx.dimension(dc.pluck('startL'));
      let count_starting_locations = start_dim.group().reduceCount();
      
      dc.rowChart("#start-location")
        .width(600)
        .height(400)
        .dimension(start_dim)
        .group(count_starting_locations)
        .xAxis()
        .ticks(4);
   }
function end_location(ndx) {
      let end_dim = ndx.dimension(dc.pluck('endL'));
      let count_ending_locations = end_dim.group().reduceCount();
      
      dc.rowChart("#end-location")
        .width(600)
        .height(400)
        .dimension(end_dim)
        .group(count_ending_locations)
        .xAxis()
        .ticks(4);
   }
function show_stacked_degree(ndx){
    let location_dim = ndx.dimension(dc.pluck('startL'));
    
    let level_1_difficulty = get_number_of_difficulties_per_location(ndx, '1'); 
        
    let level_2_difficulty = get_number_of_difficulties_per_location(ndx, '2'); 
    
    let level_3_difficulty = get_number_of_difficulties_per_location(ndx, '3'); 
    
    let level_4_difficulty = get_number_of_difficulties_per_location(ndx, '4'); 
    
    let level_5_difficulty = get_number_of_difficulties_per_location(ndx, '5'); 
        
        
    
     dc.barChart("#difficulty_per_location")
        .width(600)
        .height(400)
        .dimension(location_dim)
        .legend(dc.legend().x(0).y(50).itemHeight(10).gap(1))
        .margins({top: 70, right: 50, bottom: 10, left: 50})
        .valueAccessor(function (d) { return d.value.percent})
        .group(level_1_difficulty, '1')
        .stack(level_2_difficulty, '2')
        .stack(level_3_difficulty, '3')
        .stack(level_4_difficulty, '4')
        .stack(level_5_difficulty, '5')
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(10);
        
        
}
function get_number_of_difficulties_per_location(ndx, difficulty) {
    let gender_dim = ndx.dimension(dc.pluck('startL'));
    return gender_dim.group().reduce(
        function (p, v) {
                p.total += 1;
                if (v.difficulty_level == difficulty) {
                    p.difficulty += 1;
                }
                p.percent = (p.difficulty / p.total)*100;  
                return p;
        },
        function (p, v) {
                p.total -= 1;
                if(p.total > 0) {                
                    if (v.difficulty_level == difficulty) {
                        p.difficulty -= 1;
                    }
                    p.percent = (p.difficulty / p.total)*100;
                } else {
                    p.difficulty = 0;
                    p.percent = 0;
                }
            return p;
        },
        function () {
            return { total: 0, difficulty: 0, percent: 0 };
        }); 
}
function get_type_of_quest (ndx) {
    var name_dim = ndx.dimension(dc.pluck('category'));
        var total_spend_per_person = name_dim.group().reduceCount(dc.pluck('category'));
        dc.pieChart('#type_of_quest')
            .height(500)
            .radius(150)
            .transitionDuration(1500)
            .legend(dc.legend().x(0).y(0).itemHeight(15).gap(1))
            .dimension(name_dim)
            .group(total_spend_per_person);
}
function get_same_start_and_end_location (ndx) {
    
}




