class DrawEngine {
    drawImage(spriteSheet, image, x, y, w, h) {
        
    }

    clear() {

    }
}

class CanvasDrawEngine extends DrawEngine {
    constructor({canvas}) {
        super()
        this._canvas = canvas;
        this._context = canvas.getContext('2d')
    }
    drawImage(spriteSheet, image, x, y, w, h) {
        super.drawImage(spriteSheet, image, x, y, w, h)
        this._context.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
    }

    clear() {
        super.clear();
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}