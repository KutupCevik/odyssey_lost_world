/**
 * Class representing a drawable object.
 */
class DrawableObject {
    x = 0;
    y = 0;
    height = 200;
    width = 200;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * Loads an image from the given path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the object on the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading Image');
            console.log('Could not load image: ', this.img.src);
        }
    }

    /**
     * Plays animations by cycling through the provided images.
     * @param {Array} images - Array of image paths.
     */
    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Draws a frame around the object.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Plent || this instanceof Endboss || this instanceof Arrow || this instanceof Coin || this instanceof Apple) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Draws a collision frame around the object.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawCollisionFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Plent || this instanceof Endboss || this instanceof ThrowableObject || this instanceof Apple || this instanceof Arrow || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
            ctx.stroke();
        }
    }

    /**
     * Preloads images from the given array of paths.
     * @param {Array} paths - Array of image paths to preload.
     */
    loadImages(paths) {
        paths.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}