class Cube {
    constructor() {
        this.cubieList = []
    }


    createCubies() {
        for         (let x = -1; x < 2; x++) {
            for     (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    this.cubieList.push(new Cubie(x, y, z));
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
                        this.cubieList[i].turnFaces(xyz, angle)
                    }
                } else if (xyz == "Y") {
                    if(this.cubieList[i].matrix.mat4[13] == position*sideLength) {
                        this.cubieList[i].matrix.rotateY(angle)
                        this.cubieList[i].applyMatrixTranslation()
                        this.cubieList[i].turnFaces(xyz, angle)
                    }
                } else if (xyz == "Z") {
                    if(this.cubieList[i].matrix.mat4[14] == position*sideLength) {
                        this.cubieList[i].matrix.rotateZ(angle)
                        this.cubieList[i].applyMatrixTranslation()
                        this.cubieList[i].turnFaces(xyz, angle)
                    }
                }
            
        }
    }

    processAlg(algo) {
        let alg = algo.split(" ");
        for(let i = 0; i < alg.length; i++) {
            switch(alg[i]) {
                //Z turns
                case "F":
                    this.turn("Z", 1, HALF_PI);
                    break;
                case "F'":
                    this.turn("Z", 1, -HALF_PI);
                    break;
                case "S":
                    this.turn("Z", 0, HALF_PI);
                    break;
                case "S'":
                    this.turn("Z", 0, -HALF_PI);
                    break;
                case "B'":
                    this.turn("Z", -1, HALF_PI);
                    break;
                case "B":
                    this.turn("Z", -1, -HALF_PI);
                    break;
                case "F2":
                    this.turn("Z", 1, PI);
                    break;
                case "S2":
                    this.turn("Z", 0, PI);
                    break;
                case "B2":
                    this.turn("Z", -1, PI);
                    break;


                //Y turns
                case "U":
                    this.turn("Y", -1, -HALF_PI);
                    break;
                case "U'":
                    this.turn("Y", -1, HALF_PI);
                    break;
                case "E":
                    this.turn("Y", 0, HALF_PI);
                    break;
                case "E'":
                    this.turn("Y", 0, -HALF_PI);
                    break;
                case "D":
                    this.turn("Y", 1, HALF_PI);
                    break;
                case "D'":
                    this.turn("Y", 1, -HALF_PI);
                    break;
                case "U2":
                    this.turn("Y", -1, PI);
                    break;
                case "E2":
                    this.turn("Y", 0, PI);
                    break;
                case "D2":
                    this.turn("Y", 1, PI);
                    break;

                //X turns
                case "R":
                    this.turn("X", 1, HALF_PI);
                    break;
                case "R'":
                    this.turn("X", 1, -HALF_PI);
                    break;
                case "M":
                    this.turn("X", 0, -HALF_PI);
                    break;
                case "M'":
                    this.turn("X", 0, HALF_PI);
                    break;
                case "L":
                    this.turn("X", -1, -HALF_PI);
                    break;
                case "L'":
                    this.turn("X", -1, HALF_PI);
                    break;
                case "R2":
                    this.turn("X", 1, PI);
                    break;
                case "M2":
                    this.turn("X", 0, PI);
                    break;
                case "L2":
                    this.turn("X", -1, PI);
                    break;
            }
        }
        
    }
}