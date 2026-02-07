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
            
            
        
            function main() {
                return wall_case_fn();
            }

        