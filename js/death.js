class Death {
    constructor(config, context) {
        this._config = config;
        this._context = context;

        this.x = this._config.gameOver.x;
        this.y = this._config.gameOver.y;
        this.w = this._config.gameOver.w;
        this.h = this._config.gameOver.h;

        this.image = this._config.gameOver.frame;

        this._spriteSheet = new Image(this._config.spritesheet.width, this._config.spritesheet.height);
        this._spriteSheet.src = this._config.spritesheet.src;
    }

    draw() {
        this._context.drawImage(this._spriteSheet, this.image.x, this.image.y, this.image.w, this.image.h, this.x, this.y, this.w, this.h)

    }
}