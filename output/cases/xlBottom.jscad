function xlBoard_expanded_extrude_1_outline_fn(){
    return new CSG.Path2D([[121.8115374,-87.5],[271.5,-87.5]]).appendArc([276.5,-92.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([215.5,-169.5]).appendArc([210.5,-164.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([210.5,-160.0484327]).appendArc([209.4839861,-159.0485609],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.889996,-159.6666823]).appendArc([169.9134636,-160.7884234],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.4700324,-165.3213123]).appendArc([166.8224251,-170.7546044],{"radius":5,"clockwise":true,"large":false}).appendPoint([130.7887426,-180.5782523]).appendArc([125.1434921,-178.2543068],{"radius":5,"clockwise":true,"large":false}).appendPoint([111.4516063,-154.539265]).appendArc([110.7817333,-152.039265],{"radius":5,"clockwise":true,"large":false}).appendPoint([110.7817333,-99.0179575]).appendArc([112.1114309,-95.6225371],{"radius":5,"clockwise":true,"large":false}).appendPoint([118.1408055,-89.1050439]).appendArc([121.8115374,-87.5],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_expanded_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        