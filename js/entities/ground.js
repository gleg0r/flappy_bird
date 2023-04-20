class Ground {
    constructor(context, config) {
        this._context = context;
        this._config = config;

        this.x = 0;
        this.y = this._config.canvas.height;
        this.width = this._config.canvas.width;
        this.height = this._config.canvas.height - 350;

        this._spriteSheet = new Image(this._config.spritesheet.width, this._config.spritesheet.height);
        this._spriteSheet.src = this._config.spritesheet.src;

        this.image = this._config.ground.frame;
    }

    draw() {
        this._context.drawImage(this._spriteSheet, this.image.x, this.image.y, this.image.w , this.image.h, this.x, this.y,  this.width, this.height)
    }
}