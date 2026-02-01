function xlBoard_expanded_extrude_1_outline_fn(){
    return new CSG.Path2D([[121.8115374,-87.5],[271.5,-87.5]]).appendArc([276.5,-92.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([215.5,-169.5]).appendArc([210.5,-164.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([210.5,-160.0484327]).appendArc([209.4839861,-159.0485609],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.889996,-159.6666823]).appendArc([169.9134636,-160.7884234],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.4700324,-165.3213123]).appendArc([166.8224251,-170.7546044],{"radius":5,"clockwise":true,"large":false}).appendPoint([130.7887426,-180.5782523]).appendArc([125.1434921,-178.2543068],{"radius":5,"clockwise":true,"large":false}).appendPoint([111.4516063,-154.539265]).appendArc([110.7817333,-152.039265],{"radius":5,"clockwise":true,"large":false}).appendPoint([110.7817333,-99.0179575]).appendArc([112.1114309,-95.6225371],{"radius":5,"clockwise":true,"large":false}).appendPoint([118.1408055,-89.1050439]).appendArc([121.8115374,-87.5],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function wall_outline_extrude_10_outline_fn(){
    return new CSG.Path2D([[121.8115374,-87.5],[271.5,-87.5]]).appendArc([276.5,-92.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([215.5,-169.5]).appendArc([210.5,-164.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([210.5,-160.0484327]).appendArc([209.4839861,-159.0485609],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.889996,-159.6666823]).appendArc([169.9134636,-160.7884234],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.4700324,-165.3213123]).appendArc([166.8224251,-170.7546044],{"radius":5,"clockwise":true,"large":false}).appendPoint([130.7887426,-180.5782523]).appendArc([125.1434921,-178.2543068],{"radius":5,"clockwise":true,"large":false}).appendPoint([111.4516063,-154.539265]).appendArc([110.7817333,-152.039265],{"radius":5,"clockwise":true,"large":false}).appendPoint([110.7817333,-99.0179575]).appendArc([112.1114309,-95.6225371],{"radius":5,"clockwise":true,"large":false}).appendPoint([118.1408055,-89.1050439]).appendArc([121.8115374,-87.5],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[121.8115374,-89.5],[271.5,-89.5]]).appendArc([274.5,-92.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([274.5,-164.5]).appendArc([271.5,-167.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([215.5,-167.5]).appendArc([212.5,-164.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([212.5,-160.0484327]).appendArc([209.4519583,-157.0488174],{"radius":3,"clockwise":false,"large":false}).appendPoint([170.8579681,-157.6669388]).appendArc([167.9283713,-161.032162],{"radius":3,"clockwise":false,"large":false}).appendPoint([168.4849401,-165.565051]).appendArc([166.2963757,-168.8250262],{"radius":3,"clockwise":true,"large":false}).appendPoint([130.2626932,-178.6486741]).appendArc([126.8755429,-177.2543068],{"radius":3,"clockwise":true,"large":false}).appendPoint([113.1836571,-153.539265]).appendArc([112.7817333,-152.039265],{"radius":3,"clockwise":true,"large":false}).appendPoint([112.7817333,-99.0179575]).appendArc([113.5795518,-96.9807052],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.6093559,-90.4627477]).appendArc([121.8115374,-89.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 10] });
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
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = wall_outline_extrude_10_outline_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        