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

    turnX(position, angle) { //issue with rotation matrix ,to fix
        for(let i = 0; i < this.cubieList.length; i++) {
                this.cubieList[i].matrix.rotateX(HALF_PI)
                let z = this.cubieList[i].matrix.mat4
                let a = z[5]
                let b = z[6]
                if (round(a) == 0) {a = z[9]}
                if (round(b) == 0) {b = z[10]}
                z[13]*=a
                z[14]*=b
        }
        print(this.cubieList[0].matrix.mat4)

    }
}