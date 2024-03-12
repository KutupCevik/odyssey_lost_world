class DrawableObject {
    x = 0;
    y = 0;
    height = 200;
    width = 200;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading Image');
            console.log('Could not load image: ', this.img.src);
        }
    }

    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Plent || this instanceof Endboss || this instanceof Arrow || this instanceof Coin || this instanceof Apple) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawCollisonFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Plent || this instanceof Endboss || this instanceof ThrowableObject || this instanceof Apple) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
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