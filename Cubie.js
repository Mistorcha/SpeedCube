class Cubie{
    constructor(x, y ,z) {
        this.h = 0;
        this.x = x*sideLength;
        this.y = y*sideLength;
        this.z = z*sideLength;
        this.matrix = new p5.Matrix();
        this.matrix.translate([x*sideLength, y*sideLength, z*sideLength]);
    }
    
    show() {
        fill(255)
        if(this.h == 1){fill('red')}
        if(this.h == 2){fill('orange')}
        if(this.h == 3){fill('blue')}
        if(this.h == 4){fill('green')}
        if(this.h == 5){fill('yellow')}
        if(this.h == 6){fill('grey')}
        if(this.h == 7){fill('black')}
        if(this.h == 8){fill('cyan')}
        
        stroke(0)
        strokeWeight(5)
        push()
        applyMatrix(this.matrix.mat4)
            box(sideLength)
        pop()
    }

    applyMatrixTranslation() {
        let z = this.matrix.mat4
        z[12] = z[0]*this.x+z[4]*this.y+z[8]*this.z
        z[13] = z[1]*this.x+z[5]*this.y+z[9]*this.z
        z[14] = z[2]*this.x+z[6]*this.y+z[10]*this.z
    }
}
