class Cube {
    constructor() {
        this.cubieList = []
    }


    createCubies() {
        for         (let x = -1; x < 2; x++) {
            for     (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    if(x == -1 || y == -1 || z == -1 || x == 1 || y == 1 || z == 1) {
                        this.cubieList.push(new Cubie(x, y, z))
                    }
                }
            }
        }
    }

    show() {
        for(let i = 0; i< this.cubieList.length; i++) {
            this.cubieList[i].show()
        }
    }

    turn(xyz, position, angle) { //issue with rotation matrix ,to fix
        for(let i = 0; i < this.cubieList.length; i++) {
                if (xyz == "X") {
                    if(this.cubieList[i].matrix.mat4[12] == position*sideLength) {
                        this.cubieList[i].matrix.rotateX(angle)
                        this.cubieList[i].applyMatrixTranslation()
                    }
                } else if (xyz == "Y") {
                    if(this.cubieList[i].matrix.mat4[13] == position*sideLength) {
                        this.cubieList[i].matrix.rotateY(angle)
                        this.cubieList[i].applyMatrixTranslation()
                    }
                } else if (xyz == "Z") {
                    if(this.cubieList[i].matrix.mat4[14] == position*sideLength) {
                        this.cubieList[i].matrix.rotateZ(angle)
                        this.cubieList[i].applyMatrixTranslation()
                    }
                }
            
        }
    }

    processAlg(algo) {
        
    }
}