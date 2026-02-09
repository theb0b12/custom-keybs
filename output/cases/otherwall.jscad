function wall_outline_extrude_5_outline_fn(){
    return new CSG.Path2D([[117.25312,-87.4018736],[271.50312,-87.4981294]]).appendArc([276.5,-92.4981285],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([212.6508118,-169.5]).appendArc([212.5505242,-169.5050415],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.1506261,-173.2747925]).appendArc([174.6491882,-173.3],{"radius":5,"clockwise":true,"large":false}).appendPoint([126.9122777,-173.3]).appendArc([122.1688613,-169.881139],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.5065835,-140.8943059]).appendArc([112.25,-139.313167],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.25,-92.4018726]).appendArc([117.25312,-87.4018736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[117.251872,-89.4018732],[271.501872,-89.4981291]]).appendArc([274.5,-92.4981285],{"radius":3,"clockwise":true,"large":false}).appendPoint([274.5,-164.5]).appendArc([271.5,-167.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([212.6508118,-167.5]).appendArc([212.349949,-167.5151245],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.950051,-171.2848755]).appendArc([174.6491882,-171.3],{"radius":3,"clockwise":true,"large":false}).appendPoint([126.9122777,-171.3]).appendArc([124.0662278,-169.2486834],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.4039501,-140.2618504]).appendArc([114.25,-139.313167],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.25,-92.4018726]).appendArc([117.251872,-89.4018732],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}




                function otherwall_case_fn() {
                    

                // creating part 0 of case otherwall
                let otherwall__part_0 = wall_outline_extrude_5_outline_fn();

                // make sure that rotations are relative
                let otherwall__part_0_bounds = otherwall__part_0.getBounds();
                let otherwall__part_0_x = otherwall__part_0_bounds[0].x + (otherwall__part_0_bounds[1].x - otherwall__part_0_bounds[0].x) / 2
                let otherwall__part_0_y = otherwall__part_0_bounds[0].y + (otherwall__part_0_bounds[1].y - otherwall__part_0_bounds[0].y) / 2
                otherwall__part_0 = translate([-otherwall__part_0_x, -otherwall__part_0_y, 0], otherwall__part_0);
                otherwall__part_0 = rotate([0,0,0], otherwall__part_0);
                otherwall__part_0 = translate([otherwall__part_0_x, otherwall__part_0_y, 0], otherwall__part_0);

                otherwall__part_0 = translate([0,0,0], otherwall__part_0);
                let result = otherwall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return otherwall_case_fn();
            }

        