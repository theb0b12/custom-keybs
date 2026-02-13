function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[251.9467939,-87.4019253],[101.9872001,-87.4980841]]).appendArc([96.9904319,-92.4820576],{"radius":5,"clockwise":false,"large":false}).appendPoint([96.7596565,-164.4839745]).appendArc([101.7596308,-169.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([148.5292403,-169.5]).appendArc([148.6129328,-169.5035084],{"radius":1,"clockwise":true,"large":false}).appendPoint([193.6072971,-173.2824582]).appendArc([194.0257597,-173.3],{"radius":5,"clockwise":false,"large":false}).appendPoint([242.2877223,-173.3]).appendArc([247.0311387,-169.881139],{"radius":5,"clockwise":false,"large":false}).appendPoint([256.6934165,-140.8943059]).appendArc([256.95,-139.313167],{"radius":5,"clockwise":false,"large":false}).appendPoint([256.95,-92.4019243]).appendArc([251.946794,-87.4019253],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[122.8,-111.4],"radius":1})
.union(
    CAG.circle({"center":[232.05,-138],"radius":1})
).union(
    CAG.circle({"center":[103.325,-138],"radius":1})
).union(
    CAG.circle({"center":[217.8,-94.3],"radius":1})
).union(
    CAG.circle({"center":[181.2,-156.05],"radius":1})
).union(
    CAG.circle({"center":[154.53,-151.3],"radius":1})
)).extrude({ offset: [0, 0, 1] });
}


function standoff_extrude_2_outline_fn(){
    return CAG.circle({"center":[122.8,-111.4],"radius":2.5})
.union(
    CAG.circle({"center":[232.05,-138],"radius":2.5})
).union(
    CAG.circle({"center":[103.325,-138],"radius":2.5})
).union(
    CAG.circle({"center":[217.8,-94.3],"radius":2.5})
).union(
    CAG.circle({"center":[181.2,-156.05],"radius":2.5})
).union(
    CAG.circle({"center":[154.53,-151.3],"radius":2.5})
).extrude({ offset: [0, 0, 2] });
}


function mounting_extrude_2_outline_fn(){
    return CAG.circle({"center":[122.8,-111.4],"radius":1})
.union(
    CAG.circle({"center":[232.05,-138],"radius":1})
).union(
    CAG.circle({"center":[103.325,-138],"radius":1})
).union(
    CAG.circle({"center":[217.8,-94.3],"radius":1})
).union(
    CAG.circle({"center":[181.2,-156.05],"radius":1})
).union(
    CAG.circle({"center":[154.53,-151.3],"radius":1})
).extrude({ offset: [0, 0, 2] });
}


function wall_outline_extrude_7_outline_fn(){
    return new CSG.Path2D([[251.9467939,-87.4019253],[101.9872001,-87.4980841]]).appendArc([96.9904319,-92.4820576],{"radius":5,"clockwise":false,"large":false}).appendPoint([96.7596565,-164.4839745]).appendArc([101.7596308,-169.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([148.5292403,-169.5]).appendArc([148.6129328,-169.5035084],{"radius":1,"clockwise":true,"large":false}).appendPoint([193.6072971,-173.2824582]).appendArc([194.0257597,-173.3],{"radius":5,"clockwise":false,"large":false}).appendPoint([242.2877223,-173.3]).appendArc([247.0311387,-169.881139],{"radius":5,"clockwise":false,"large":false}).appendPoint([256.6934165,-140.8943059]).appendArc([256.95,-139.313167],{"radius":5,"clockwise":false,"large":false}).appendPoint([256.95,-92.4019243]).appendArc([251.946794,-87.4019253],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[251.9480764,-89.4019249],[101.9884826,-89.4980837]]).appendArc([98.9904216,-92.4884678],{"radius":3,"clockwise":false,"large":false}).appendPoint([98.7596462,-164.4903847]).appendArc([101.7596308,-167.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.5292403,-167.5]).appendArc([148.7803178,-167.5105251],{"radius":3,"clockwise":true,"large":false}).appendPoint([193.7746822,-171.2894749]).appendArc([194.0257597,-171.3],{"radius":3,"clockwise":false,"large":false}).appendPoint([242.2877223,-171.3]).appendArc([245.1337722,-169.2486834],{"radius":3,"clockwise":false,"large":false}).appendPoint([254.7960499,-140.2618504]).appendArc([254.95,-139.313167],{"radius":3,"clockwise":false,"large":false}).appendPoint([254.95,-92.4019243]).appendArc([251.9480764,-89.4019249],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 7] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

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
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        