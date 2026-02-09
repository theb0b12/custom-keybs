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
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        