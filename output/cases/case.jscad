function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[117.25312,-87.4018736],[271.50312,-87.4981294]]).appendArc([276.5,-92.4981285],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([212.6508118,-169.5]).appendArc([212.5505242,-169.5050415],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.1506261,-173.2747925]).appendArc([174.6491882,-173.3],{"radius":5,"clockwise":true,"large":false}).appendPoint([126.9122777,-173.3]).appendArc([122.1688613,-169.881139],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.5065835,-140.8943059]).appendArc([112.25,-139.313167],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.25,-92.4018726]).appendArc([117.25312,-87.4018736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[268.18,-110.45],"radius":1})
.union(
    CAG.circle({"center":[271.45,-138],"radius":1})
).union(
    CAG.circle({"center":[210.65,-151.3],"radius":1})
).union(
    CAG.circle({"center":[180.85,-151.3],"radius":1})
).union(
    CAG.circle({"center":[139.93,-126.6],"radius":1})
).union(
    CAG.circle({"center":[140.5,-100],"radius":1})
)).extrude({ offset: [0, 0, 1] });
}


function wall_outline_extrude_10_outline_fn(){
    return new CSG.Path2D([[117.25312,-87.4018736],[271.50312,-87.4981294]]).appendArc([276.5,-92.4981285],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([212.6508118,-169.5]).appendArc([212.5505242,-169.5050415],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.1506261,-173.2747925]).appendArc([174.6491882,-173.3],{"radius":5,"clockwise":true,"large":false}).appendPoint([126.9122777,-173.3]).appendArc([122.1688613,-169.881139],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.5065835,-140.8943059]).appendArc([112.25,-139.313167],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.25,-92.4018726]).appendArc([117.25312,-87.4018736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[117.251872,-89.4018732],[271.501872,-89.4981291]]).appendArc([274.5,-92.4981285],{"radius":3,"clockwise":true,"large":false}).appendPoint([274.5,-164.5]).appendArc([271.5,-167.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([212.6508118,-167.5]).appendArc([212.349949,-167.5151245],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.950051,-171.2848755]).appendArc([174.6491882,-171.3],{"radius":3,"clockwise":true,"large":false}).appendPoint([126.9122777,-171.3]).appendArc([124.0662278,-169.2486834],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.4039501,-140.2618504]).appendArc([114.25,-139.313167],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.25,-92.4018726]).appendArc([117.251872,-89.4018732],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 10] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

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

        