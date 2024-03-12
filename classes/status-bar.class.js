class StatusBar extends DrawableObject {
    x = 10;
    y = 0;
    width = 200;
    height = 60;
    // IMAGES_HEALTH = [
    //     'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
    //     'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
    //     'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
    //     'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
    //     'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    //     'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    // ];
    percentage = 100;
    statusBarImgs = [];

    constructor(statusBarImgs, width, height, x, y, percentage) {
        super();
        this.statusBarImgs = statusBarImgs;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.loadImages(this.statusBarImgs)
        this.setPercentage(percentage, this.statusBarImgs);
    }

    setPercentage(percentage, statusBarImgs) {
        this.percentage = percentage;
        let path = statusBarImgs[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}