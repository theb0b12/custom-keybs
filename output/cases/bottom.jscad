function board_right_extrude_1_outline_fn(){
    return new CSG.Path2D([[121.8115374,-89.5],[271.5,-89.5]]).appendArc([274.5,-92.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([274.5,-164.5]).appendArc([271.5,-167.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([215.5,-167.5]).appendArc([212.5,-164.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([212.5,-160.0484327]).appendArc([209.4519583,-157.0488174],{"radius":3,"clockwise":false,"large":false}).appendPoint([170.8579681,-157.6669388]).appendArc([167.9283713,-161.032162],{"radius":3,"clockwise":false,"large":false}).appendPoint([168.4849401,-165.565051]).appendArc([166.2963757,-168.8250262],{"radius":3,"clockwise":true,"large":false}).appendPoint([130.2626932,-178.6486741]).appendArc([126.8755429,-177.2543068],{"radius":3,"clockwise":true,"large":false}).appendPoint([113.1836571,-153.539265]).appendArc([112.7817333,-152.039265],{"radius":3,"clockwise":true,"large":false}).appendPoint([112.7817333,-99.0179575]).appendArc([113.5795518,-96.9807052],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.6093559,-90.4627477]).appendArc([121.8115374,-89.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        