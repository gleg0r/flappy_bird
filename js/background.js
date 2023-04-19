class Background {
    constructor({config, context, x, y, w, h, image}) {
        this._config = config;

        this._context = context;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this._speed = this._config.animation.speed;
        this._index = 0;
        this._image = image;
        this._spriteSheet = new Image(606, 428);
        this._spriteSheet.src = this._config.spritesheet.src;        
    }

    draw(x) {
        this._context.drawImage(this._spriteSheet, this._image.x, this._image.y, this._image.w, this._image.h, x, this.y, this.w, this.h)
    }

    update() {
        this._index += 0.3;
        this.x = -((this._index * this._speed) % this._config.canvas.width)
        
        this.draw(this._image.w + this.x)
        this.draw(this.x)
    }
}