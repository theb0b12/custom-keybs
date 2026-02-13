function wall_outline_extrude_7_outline_fn(){
    return new CSG.Path2D([[251.9467939,-87.4019253],[101.9872001,-87.4980841]]).appendArc([96.9904319,-92.4820576],{"radius":5,"clockwise":false,"large":false}).appendPoint([96.7596565,-164.4839745]).appendArc([101.7596308,-169.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([148.5292403,-169.5]).appendArc([148.6129328,-169.5035084],{"radius":1,"clockwise":true,"large":false}).appendPoint([193.6072971,-173.2824582]).appendArc([194.0257597,-173.3],{"radius":5,"clockwise":false,"large":false}).appendPoint([242.2877223,-173.3]).appendArc([247.0311387,-169.881139],{"radius":5,"clockwise":false,"large":false}).appendPoint([256.6934165,-140.8943059]).appendArc([256.95,-139.313167],{"radius":5,"clockwise":false,"large":false}).appendPoint([256.95,-92.4019243]).appendArc([251.946794,-87.4019253],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[251.9480764,-89.4019249],[101.9884826,-89.4980837]]).appendArc([98.9904216,-92.4884678],{"radius":3,"clockwise":false,"large":false}).appendPoint([98.7596462,-164.4903847]).appendArc([101.7596308,-167.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.5292403,-167.5]).appendArc([148.7803178,-167.5105251],{"radius":3,"clockwise":true,"large":false}).appendPoint([193.7746822,-171.2894749]).appendArc([194.0257597,-171.3],{"radius":3,"clockwise":false,"large":false}).appendPoint([242.2877223,-171.3]).appendArc([245.1337722,-169.2486834],{"radius":3,"clockwise":false,"large":false}).appendPoint([254.7960499,-140.2618504]).appendArc([254.95,-139.313167],{"radius":3,"clockwise":false,"large":false}).appendPoint([254.95,-92.4019243]).appendArc([251.9480764,-89.4019249],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 7] });
}




                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = wall_outline_extrude_7_outline_fn();

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
            
            
        
            function main() {
                return wall_case_fn();
            }

        