class MovableObject {
    x = 150;
    y = 225;
    img;
    height = 200;
    width = 200;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Move Right');
    }

    moveLeft() {}
}