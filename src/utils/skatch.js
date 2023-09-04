export default function sketch(p, { width }){
    const widthContent = width > 1200 ? 1200 : width - 55;
    p.setup = function() {
        p.createCanvas(widthContent, 400);
    }

    p.draw = function (){
        p.strokeWeight(70)
        if(p.mouseIsPressed){
             p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
        }
    }
}