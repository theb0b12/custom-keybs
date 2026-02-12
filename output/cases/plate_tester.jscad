function switch_plate_extrude_2_outline_fn(){
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
).union(
    new CSG.Path2D([[221.45,-168.55],[236.95,-168.55]]).appendPoint([236.95,-153.05]).appendPoint([221.45,-153.05]).appendPoint([221.45,-168.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.45,-168.55],[207.95,-168.55]]).appendPoint([207.95,-153.05]).appendPoint([192.45,-153.05]).appendPoint([192.45,-168.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.78,-164.75],[143.28,-164.75]]).appendPoint([143.28,-149.25]).appendPoint([127.78,-149.25]).appendPoint([127.78,-164.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[104.125,-164.75],[119.625,-164.75]]).appendPoint([119.625,-149.25]).appendPoint([104.125,-149.25]).appendPoint([104.125,-164.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[211,-145.75],[226.5,-145.75]]).appendPoint([226.5,-130.25]).appendPoint([211,-130.25]).appendPoint([211,-145.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[192,-145.75],[207.5,-145.75]]).appendPoint([207.5,-130.25]).appendPoint([192,-130.25]).appendPoint([192,-145.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[173,-145.75],[188.5,-145.75]]).appendPoint([188.5,-130.25]).appendPoint([173,-130.25]).appendPoint([173,-145.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[154,-145.75],[169.5,-145.75]]).appendPoint([169.5,-130.25]).appendPoint([154,-130.25]).appendPoint([154,-145.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[135,-145.75],[150.5,-145.75]]).appendPoint([150.5,-130.25]).appendPoint([135,-130.25]).appendPoint([135,-145.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[108.875,-145.75],[124.375,-145.75]]).appendPoint([124.375,-130.25]).appendPoint([108.875,-130.25]).appendPoint([108.875,-145.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.5,-126.75],[217,-126.75]]).appendPoint([217,-111.25]).appendPoint([201.5,-111.25]).appendPoint([201.5,-126.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.5,-126.75],[198,-126.75]]).appendPoint([198,-111.25]).appendPoint([182.5,-111.25]).appendPoint([182.5,-126.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.5,-126.75],[179,-126.75]]).appendPoint([179,-111.25]).appendPoint([163.5,-111.25]).appendPoint([163.5,-126.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[144.5,-126.75],[160,-126.75]]).appendPoint([160,-111.25]).appendPoint([144.5,-111.25]).appendPoint([144.5,-126.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[125.5,-126.75],[141,-126.75]]).appendPoint([141,-111.25]).appendPoint([125.5,-111.25]).appendPoint([125.5,-126.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[104.125,-126.75],[119.625,-126.75]]).appendPoint([119.625,-111.25]).appendPoint([104.125,-111.25]).appendPoint([104.125,-126.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.75,-107.75],[212.25,-107.75]]).appendPoint([212.25,-92.25]).appendPoint([196.75,-92.25]).appendPoint([196.75,-107.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[177.75,-107.75],[193.25,-107.75]]).appendPoint([193.25,-92.25]).appendPoint([177.75,-92.25]).appendPoint([177.75,-107.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[158.75,-107.75],[174.25,-107.75]]).appendPoint([174.25,-92.25]).appendPoint([158.75,-92.25]).appendPoint([158.75,-107.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[139.75,-107.75],[155.25,-107.75]]).appendPoint([155.25,-92.25]).appendPoint([139.75,-92.25]).appendPoint([139.75,-107.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.75,-107.75],[136.25,-107.75]]).appendPoint([136.25,-92.25]).appendPoint([120.75,-92.25]).appendPoint([120.75,-107.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[101.75,-107.75],[117.25,-107.75]]).appendPoint([117.25,-92.25]).appendPoint([101.75,-92.25]).appendPoint([101.75,-107.75]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] });
}


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
            
            

                function plate_tester_case_fn() {
                    

                // creating part 0 of case plate_tester
                let plate_tester__part_0 = wall_case_fn();

                // make sure that rotations are relative
                let plate_tester__part_0_bounds = plate_tester__part_0.getBounds();
                let plate_tester__part_0_x = plate_tester__part_0_bounds[0].x + (plate_tester__part_0_bounds[1].x - plate_tester__part_0_bounds[0].x) / 2
                let plate_tester__part_0_y = plate_tester__part_0_bounds[0].y + (plate_tester__part_0_bounds[1].y - plate_tester__part_0_bounds[0].y) / 2
                plate_tester__part_0 = translate([-plate_tester__part_0_x, -plate_tester__part_0_y, 0], plate_tester__part_0);
                plate_tester__part_0 = rotate([0,0,0], plate_tester__part_0);
                plate_tester__part_0 = translate([plate_tester__part_0_x, plate_tester__part_0_y, 0], plate_tester__part_0);

                plate_tester__part_0 = translate([0,0,0], plate_tester__part_0);
                let result = plate_tester__part_0;
                
            

                // creating part 1 of case plate_tester
                let plate_tester__part_1 = switch_plate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let plate_tester__part_1_bounds = plate_tester__part_1.getBounds();
                let plate_tester__part_1_x = plate_tester__part_1_bounds[0].x + (plate_tester__part_1_bounds[1].x - plate_tester__part_1_bounds[0].x) / 2
                let plate_tester__part_1_y = plate_tester__part_1_bounds[0].y + (plate_tester__part_1_bounds[1].y - plate_tester__part_1_bounds[0].y) / 2
                plate_tester__part_1 = translate([-plate_tester__part_1_x, -plate_tester__part_1_y, 0], plate_tester__part_1);
                plate_tester__part_1 = rotate([0,0,0], plate_tester__part_1);
                plate_tester__part_1 = translate([plate_tester__part_1_x, plate_tester__part_1_y, 0], plate_tester__part_1);

                plate_tester__part_1 = translate([0,0,5], plate_tester__part_1);
                result = result.union(plate_tester__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_tester_case_fn();
            }

        