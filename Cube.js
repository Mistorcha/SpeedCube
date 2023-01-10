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

    turnX() {

    }

    turnY() {

    }

    turnZ() {
        
    }
}