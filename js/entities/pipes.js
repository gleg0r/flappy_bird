class Pipes {
    constructor(config, context, game, bird) {
        
        this._config = config;
        this.canvasW = this._config.canvas.width;
        this._canvasH = this._config.canvas.height;
        this._context = context;
        this._speed = 45;

        this.pipeUp = this._config.pipes.pipeUp;
        this.pipeDown = this._config.pipes.pipeDown;

        this.x = 280;
        this.pipeUpY = 0;
        this.gap = 50;
        
        this.randomPos = 0;

        this._game = game;
        this._bird = bird;
        this.birdX = this._bird.x;
        this.birdW = this._config.bird.width - 3;
        
        this.birdH = this._config.bird.height;
        this._spriteSheet = new Image(this._config.spritesheet.width, this._config.spritesheet.height);
        this._spriteSheet.src = this._config.spritesheet.src;
    }

    draw() {
        this._context.drawImage(this._spriteSheet,this.pipeUp.x, this.pipeUp.y, this.pipeUp.w, this.pipeUp.h,this.x, this.pipeUpY - this.randomPos, this.pipeUp.w,this.pipeUp.h);
        this._context.drawImage(this._spriteSheet,this.pipeDown.x, this.pipeDown.y, this.pipeDown.w, this.pipeDown.h,this.x,this._canvasH - this.gap - this.randomPos,this.pipeDown.w,this.pipeDown.h);
    }

    update(delta, birdY) {
        if(this.x + this.pipeDown.w> 0) {
            this.x = this.x - (delta * this._speed);
        } else {
            this.x = 280
            this.randomHeight();
        }
        this.birdY = birdY;

        if(this.birdX + this.birdW >= this.x && this.birdX <= this.x + this.pipeUp.w && (this.birdY <= this.pipeUpY + this.pipeUp.h - this.randomPos || this.birdY + this.birdH >= this._canvasH - this.gap - this.randomPos ) ) {
            this._game.gameOver();
        } 
    }

    randomHeight() {
        this.randomPos = Math.random(-100,100) * 100;
    }
}