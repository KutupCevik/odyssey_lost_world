class MovableObject {
    x = 150;
    y = 225;
    img;
    height = 200;
    width = 200;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} move - img's
     */
    loadImages(move) {
        move.forEach((path) => {
            let img = new Image();
            this.img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Move Right');
    }

    moveLeft() {}
}