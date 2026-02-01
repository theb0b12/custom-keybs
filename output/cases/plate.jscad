function switch_plate_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[121.8115374,-87.5],[271.5,-87.5]]).appendArc([276.5,-92.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([276.5,-164.5]).appendArc([271.5,-169.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([215.5,-169.5]).appendArc([210.5,-164.5],{"radius":5,"clockwise":true,"large":false}).appendPoint([210.5,-160.0484327]).appendArc([209.4839861,-159.0485609],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.889996,-159.6666823]).appendArc([169.9134636,-160.7884234],{"radius":1,"clockwise":false,"large":false}).appendPoint([170.4700324,-165.3213123]).appendArc([166.8224251,-170.7546044],{"radius":5,"clockwise":true,"large":false}).appendPoint([130.7887426,-180.5782523]).appendArc([125.1434921,-178.2543068],{"radius":5,"clockwise":true,"large":false}).appendPoint([111.4516063,-154.539265]).appendArc([110.7817333,-152.039265],{"radius":5,"clockwise":true,"large":false}).appendPoint([110.7817333,-99.0179575]).appendArc([112.1114309,-95.6225371],{"radius":5,"clockwise":true,"large":false}).appendPoint([118.1408055,-89.1050439]).appendArc([121.8115374,-87.5],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[151.0313317,-169.0646046],[165.4232509,-167.2974992]]).appendArc([167.1646046,-165.0686683],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.3974992,-150.6767491]).appendArc([163.1686683,-148.9353954],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.7767491,-150.7025008]).appendArc([147.0353954,-152.9313317],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.8025008,-167.3232509]).appendArc([151.0313317,-169.0646046],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[253.75,-166.25],[268.25,-166.25]]).appendArc([270.25,-164.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([270.25,-149.75]).appendArc([268.25,-147.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([253.75,-147.75]).appendArc([251.75,-149.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([251.75,-164.25]).appendArc([253.75,-166.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[234.75,-166.25],[249.25,-166.25]]).appendArc([251.25,-164.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([251.25,-149.75]).appendArc([249.25,-147.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([234.75,-147.75]).appendArc([232.75,-149.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([232.75,-164.25]).appendArc([234.75,-166.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[215.75,-166.25],[230.25,-166.25]]).appendArc([232.25,-164.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([232.25,-149.75]).appendArc([230.25,-147.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([215.75,-147.75]).appendArc([213.75,-149.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([213.75,-164.25]).appendArc([215.75,-166.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[253.75,-147.25],[268.25,-147.25]]).appendArc([270.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([270.25,-130.75]).appendArc([268.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([253.75,-128.75]).appendArc([251.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([251.75,-145.25]).appendArc([253.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[234.75,-147.25],[249.25,-147.25]]).appendArc([251.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([251.25,-130.75]).appendArc([249.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([234.75,-128.75]).appendArc([232.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([232.75,-145.25]).appendArc([234.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[215.75,-147.25],[230.25,-147.25]]).appendArc([232.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([232.25,-130.75]).appendArc([230.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([215.75,-128.75]).appendArc([213.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([213.75,-145.25]).appendArc([215.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[196.75,-147.25],[211.25,-147.25]]).appendArc([213.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([213.25,-130.75]).appendArc([211.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([196.75,-128.75]).appendArc([194.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([194.75,-145.25]).appendArc([196.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[177.75,-147.25],[192.25,-147.25]]).appendArc([194.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([194.25,-130.75]).appendArc([192.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([177.75,-128.75]).appendArc([175.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.75,-145.25]).appendArc([177.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[158.75,-147.25],[173.25,-147.25]]).appendArc([175.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.25,-130.75]).appendArc([173.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.75,-128.75]).appendArc([156.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([156.75,-145.25]).appendArc([158.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[139.75,-147.25],[154.25,-147.25]]).appendArc([156.25,-145.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([156.25,-130.75]).appendArc([154.25,-128.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([139.75,-128.75]).appendArc([137.75,-130.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([137.75,-145.25]).appendArc([139.75,-147.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[225.78,-128.25],[240.28,-128.25]]).appendArc([242.28,-126.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([242.28,-111.75]).appendArc([240.28,-109.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([225.78,-109.75]).appendArc([223.78,-111.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([223.78,-126.25]).appendArc([225.78,-128.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[206.78,-128.25],[221.28,-128.25]]).appendArc([223.28,-126.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([223.28,-111.75]).appendArc([221.28,-109.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.78,-109.75]).appendArc([204.78,-111.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.78,-126.25]).appendArc([206.78,-128.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[187.78,-128.25],[202.28,-128.25]]).appendArc([204.28,-126.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.28,-111.75]).appendArc([202.28,-109.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.78,-109.75]).appendArc([185.78,-111.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.78,-126.25]).appendArc([187.78,-128.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[168.78,-128.25],[183.28,-128.25]]).appendArc([185.28,-126.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.28,-111.75]).appendArc([183.28,-109.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.78,-109.75]).appendArc([166.78,-111.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([166.78,-126.25]).appendArc([168.78,-128.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[149.78,-128.25],[164.28,-128.25]]).appendArc([166.28,-126.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([166.28,-111.75]).appendArc([164.28,-109.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([149.78,-109.75]).appendArc([147.78,-111.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([147.78,-126.25]).appendArc([149.78,-128.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[256.75,-109.25],[271.25,-109.25]]).appendArc([273.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([273.25,-92.75]).appendArc([271.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([256.75,-90.75]).appendArc([254.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([254.75,-107.25]).appendArc([256.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[237.75,-109.25],[252.25,-109.25]]).appendArc([254.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([254.25,-92.75]).appendArc([252.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([237.75,-90.75]).appendArc([235.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([235.75,-107.25]).appendArc([237.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[218.75,-109.25],[233.25,-109.25]]).appendArc([235.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([235.25,-92.75]).appendArc([233.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([218.75,-90.75]).appendArc([216.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([216.75,-107.25]).appendArc([218.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[199.75,-109.25],[214.25,-109.25]]).appendArc([216.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([216.25,-92.75]).appendArc([214.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.75,-90.75]).appendArc([197.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.75,-107.25]).appendArc([199.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[180.75,-109.25],[195.25,-109.25]]).appendArc([197.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.25,-92.75]).appendArc([195.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([180.75,-90.75]).appendArc([178.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.75,-107.25]).appendArc([180.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[161.75,-109.25],[176.25,-109.25]]).appendArc([178.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.25,-92.75]).appendArc([176.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.75,-90.75]).appendArc([159.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([159.75,-107.25]).appendArc([161.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[142.75,-109.25],[157.25,-109.25]]).appendArc([159.25,-107.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([159.25,-92.75]).appendArc([157.25,-90.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.75,-90.75]).appendArc([140.75,-92.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([140.75,-107.25]).appendArc([142.75,-109.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[245.48,-128.5],[268.08,-128.5]]).appendArc([270.08,-126.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([270.08,-111.5]).appendArc([268.08,-109.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([245.48,-109.5]).appendArc([243.48,-111.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([243.48,-126.5]).appendArc([245.48,-128.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[115.1477587,-154.9411888],[127.3977587,-176.1588112]]).appendArc([130.1298095,-176.890862],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.1201905,-169.390862]).appendArc([143.8522413,-166.6588112],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.6022413,-145.4411888]).appendArc([128.8701905,-144.709138],{"radius":2,"clockwise":false,"large":false}).appendPoint([115.8798095,-152.209138]).appendArc([115.1477587,-154.9411888],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.6] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = switch_plate_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        