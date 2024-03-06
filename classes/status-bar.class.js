class StatusBar extends DrawableObject {
    x = 10;
    y = 0;
    width = 200;
    height = 60;
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];
percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH)
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        let percentage = Math.min(this.percentage, 100);
        if (percentage >= 80) {
            return 5;
        } else if (percentage >= 60) {
            return 4;
        } else if (percentage >= 40) {
            return 3;
        } else if (percentage >= 20) {
            return 2;
        } else if (percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}