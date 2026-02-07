function switch_plate_extrude_2_outline_fn(){
    return new CSG.Path2D([[242.2928211,-87.5],[101.9904,-87.5]]).appendArc([96.9904257,-92.4839745],{"radius":5,"clockwise":false,"large":false}).appendPoint([96.7596564,-164.4839745]).appendArc([101.7596308,-169.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([145.655,-169.5]).appendArc([150.655,-164.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([150.655,-160.0425704]).appendArc([151.6690895,-159.0426697],{"radius":1,"clockwise":true,"large":false}).appendPoint([196.4072918,-159.6730704]).appendArc([197.3857485,-160.7948405],{"radius":1,"clockwise":true,"large":false}).appendPoint([196.8251027,-165.3609342]).appendArc([200.398982,-170.7735183],{"radius":5,"clockwise":false,"large":false}).appendPoint([234.1253431,-180.5254623]).appendArc([239.8449291,-178.2224004],{"radius":5,"clockwise":false,"large":false}).appendPoint([253.5183937,-154.539265]).appendArc([254.1882667,-152.039265],{"radius":5,"clockwise":false,"large":false}).appendPoint([254.1882667,-99.1215139]).appendArc([252.6514393,-95.5150703],{"radius":5,"clockwise":false,"large":false}).appendPoint([245.7564498,-88.8939944]).appendArc([242.2928211,-87.5],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[122.8,-111.4],"radius":1})
.union(
    CAG.circle({"center":[232.05,-138],"radius":1})
).union(
    CAG.circle({"center":[103.325,-138],"radius":1})
).union(
    CAG.circle({"center":[217.8,-94.3],"radius":1})
).union(
    CAG.circle({"center":[191.9205025,-151.9698883],"radius":1})
).union(
    CAG.circle({"center":[154.53,-151.3],"radius":1})
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
).union(
    new CSG.Path2D([[238.3066969,-171.3866969],[246.0566969,-157.9633031]]).appendPoint([232.6333031,-150.2133031]).appendPoint([224.8833031,-163.6366969]).appendPoint([238.3066969,-171.3866969]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.5632799,-165.7477453],[216.9477453,-167.6367201]]).appendPoint([218.8367201,-152.2522547]).appendPoint([203.4522547,-150.3632799]).appendPoint([201.5632799,-165.7477453]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] });
}


function wall_outline_extrude_5_outline_fn(){
    return new CSG.Path2D([[242.2928211,-87.5],[101.9904,-87.5]]).appendArc([96.9904257,-92.4839745],{"radius":5,"clockwise":false,"large":false}).appendPoint([96.7596564,-164.4839745]).appendArc([101.7596308,-169.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([145.655,-169.5]).appendArc([150.655,-164.5],{"radius":5,"clockwise":false,"large":false}).appendPoint([150.655,-160.0425704]).appendArc([151.6690895,-159.0426697],{"radius":1,"clockwise":true,"large":false}).appendPoint([196.4072918,-159.6730704]).appendArc([197.3857485,-160.7948405],{"radius":1,"clockwise":true,"large":false}).appendPoint([196.8251027,-165.3609342]).appendArc([200.398982,-170.7735183],{"radius":5,"clockwise":false,"large":false}).appendPoint([234.1253431,-180.5254623]).appendArc([239.8449291,-178.2224004],{"radius":5,"clockwise":false,"large":false}).appendPoint([253.5183937,-154.539265]).appendArc([254.1882667,-152.039265],{"radius":5,"clockwise":false,"large":false}).appendPoint([254.1882667,-99.1215139]).appendArc([252.6514393,-95.5150703],{"radius":5,"clockwise":false,"large":false}).appendPoint([245.7564498,-88.8939944]).appendArc([242.2928211,-87.5],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[242.2928211,-89.5],[101.9904,-89.5]]).appendArc([98.9904154,-92.4903847],{"radius":3,"clockwise":false,"large":false}).appendPoint([98.7596462,-164.4903847]).appendArc([101.7596308,-167.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([145.655,-167.5]).appendArc([148.655,-164.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.655,-160.0425704]).appendArc([151.6972685,-157.0428682],{"radius":3,"clockwise":true,"large":false}).appendPoint([196.4354708,-157.673269]).appendArc([199.3708408,-161.0385791],{"radius":3,"clockwise":true,"large":false}).appendPoint([198.810195,-165.6046728]).appendArc([200.9545226,-168.8522233],{"radius":3,"clockwise":false,"large":false}).appendPoint([234.6814912,-178.604343]).appendArc([238.1128783,-177.2224004],{"radius":3,"clockwise":false,"large":false}).appendPoint([251.7863429,-153.539265]).appendArc([252.1882667,-152.039265],{"radius":3,"clockwise":false,"large":false}).appendPoint([252.1882667,-99.1215139]).appendArc([251.2661703,-96.9576477],{"radius":3,"clockwise":false,"large":false}).appendPoint([244.3707247,-90.3361338]).appendArc([242.2928211,-89.5],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}




                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = wall_outline_extrude_5_outline_fn();

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

        