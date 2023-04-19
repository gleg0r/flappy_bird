class DrawEngine {
    drawImage(spriteSheet, image, x, y, width, height) {
        
    }

    clear() {

    }
}

class CanvasDrawEngine extends DrawEngine {
    constructor({canvas, config, width, height}) {
        super()
        this._config = config;
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
        this._spriteSheet = new Image(width, height);
        this._spriteSheet.src = this._config.spritesheet.src;

    }
    drawImage({ image, x, y, width, height}) {
        super.drawImage({ image, x, y, width, height})
        this._context.drawImage(this._spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
    }

    clear() {
        super.clear();
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}