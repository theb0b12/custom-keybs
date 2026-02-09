function switch_plate_extrude_2_outline_fn(){
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
).union(
    new CSG.Path2D([[254.05,-163.95],[267.95,-163.95]]).appendPoint([267.95,-150.05]).appendPoint([254.05,-150.05]).appendPoint([254.05,-163.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.05,-144.95],[267.95,-144.95]]).appendPoint([267.95,-131.05]).appendPoint([254.05,-131.05]).appendPoint([254.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.83,-125.95],[263.73,-125.95]]).appendPoint([263.73,-112.05]).appendPoint([249.83,-112.05]).appendPoint([249.83,-125.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[257.05,-106.95],[270.95,-106.95]]).appendPoint([270.95,-93.05]).appendPoint([257.05,-93.05]).appendPoint([257.05,-106.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[161.55,-167.75],[175.45,-167.75]]).appendPoint([175.45,-153.85]).appendPoint([161.55,-153.85]).appendPoint([161.55,-167.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.05,-167.75],[146.95,-167.75]]).appendPoint([146.95,-153.85]).appendPoint([133.05,-153.85]).appendPoint([133.05,-167.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[235.05,-163.95],[248.95,-163.95]]).appendPoint([248.95,-150.05]).appendPoint([235.05,-150.05]).appendPoint([235.05,-163.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[216.05,-163.95],[229.95,-163.95]]).appendPoint([229.95,-150.05]).appendPoint([216.05,-150.05]).appendPoint([216.05,-163.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[235.05,-144.95],[248.95,-144.95]]).appendPoint([248.95,-131.05]).appendPoint([235.05,-131.05]).appendPoint([235.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[216.05,-144.95],[229.95,-144.95]]).appendPoint([229.95,-131.05]).appendPoint([216.05,-131.05]).appendPoint([216.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[197.05,-144.95],[210.95,-144.95]]).appendPoint([210.95,-131.05]).appendPoint([197.05,-131.05]).appendPoint([197.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[178.05,-144.95],[191.95,-144.95]]).appendPoint([191.95,-131.05]).appendPoint([178.05,-131.05]).appendPoint([178.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[159.05,-144.95],[172.95,-144.95]]).appendPoint([172.95,-131.05]).appendPoint([159.05,-131.05]).appendPoint([159.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.05,-144.95],[153.95,-144.95]]).appendPoint([153.95,-131.05]).appendPoint([140.05,-131.05]).appendPoint([140.05,-144.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[226.08,-125.95],[239.98,-125.95]]).appendPoint([239.98,-112.05]).appendPoint([226.08,-112.05]).appendPoint([226.08,-125.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.08,-125.95],[220.98,-125.95]]).appendPoint([220.98,-112.05]).appendPoint([207.08,-112.05]).appendPoint([207.08,-125.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.08,-125.95],[201.98,-125.95]]).appendPoint([201.98,-112.05]).appendPoint([188.08,-112.05]).appendPoint([188.08,-125.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.08,-125.95],[182.98,-125.95]]).appendPoint([182.98,-112.05]).appendPoint([169.08,-112.05]).appendPoint([169.08,-125.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.08,-125.95],[163.98,-125.95]]).appendPoint([163.98,-112.05]).appendPoint([150.08,-112.05]).appendPoint([150.08,-125.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.05,-106.95],[251.95,-106.95]]).appendPoint([251.95,-93.05]).appendPoint([238.05,-93.05]).appendPoint([238.05,-106.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.05,-106.95],[232.95,-106.95]]).appendPoint([232.95,-93.05]).appendPoint([219.05,-93.05]).appendPoint([219.05,-106.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.05,-106.95],[213.95,-106.95]]).appendPoint([213.95,-93.05]).appendPoint([200.05,-93.05]).appendPoint([200.05,-106.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.05,-106.95],[194.95,-106.95]]).appendPoint([194.95,-93.05]).appendPoint([181.05,-93.05]).appendPoint([181.05,-106.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.05,-106.95],[175.95,-106.95]]).appendPoint([175.95,-93.05]).appendPoint([162.05,-93.05]).appendPoint([162.05,-106.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.05,-106.95],[156.95,-106.95]]).appendPoint([156.95,-93.05]).appendPoint([143.05,-93.05]).appendPoint([143.05,-106.95]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] });
}


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
            
            

                function plate_tester_case_fn() {
                    

                // creating part 0 of case plate_tester
                let plate_tester__part_0 = otherwall_case_fn();

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

        