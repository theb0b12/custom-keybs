function board_right_extrude_1_outline_fn(){
    return new CSG.Path2D([[117.251872,-89.4018732],[271.501872,-89.4981291]]).appendArc([274.5,-92.4981285],{"radius":3,"clockwise":true,"large":false}).appendPoint([274.5,-164.5]).appendArc([271.5,-167.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([212.6508118,-167.5]).appendArc([212.349949,-167.5151245],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.950051,-171.2848755]).appendArc([174.6491882,-171.3],{"radius":3,"clockwise":true,"large":false}).appendPoint([126.9122777,-171.3]).appendArc([124.0662278,-169.2486834],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.4039501,-140.2618504]).appendArc([114.25,-139.313167],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.25,-92.4018726]).appendArc([117.251872,-89.4018732],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_right_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        