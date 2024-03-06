class DrawableObject {
    x = 0;
    y = 0;
    height = 200;
    width = 200;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path, paralax) {
        this.img = new Image();
        this.img.src = path;
        this.paralax = paralax;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

        /**
     * 
     * @param {Array} move - img's
     */
        loadImages(move) {
            move.forEach((path) => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            });
        }
}