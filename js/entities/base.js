class BaseEntity {
    constructor({x, y, width, height, frames,  flapSpeed, drawEngine, game}) {
        this.x = x;
        this.y = y;
        this.width = width;        
        this.height = height;
        this.speed = 10;
        this.falling = false;

        this._frames = frames;
        this._frameIdx = 0;
        this._drawEngine = drawEngine;
        this._game = game;
    }

    draw() {
        this._drawEngine.drawImage({
            image: this._frames[this._frameIdx], 
            x: this.x, 
            y: this.y, 
            width: this.width, 
            height: this.height  
        });

    }

    update(delta) {
        this._frameIdx = (this._frameIdx + Math.ceil(delta)) % this._frames.length;
    }
}