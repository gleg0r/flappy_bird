class Bird extends BaseEntity{
    constructor(params) {
        super(params);
        this._flapSpeed = params.flapSpeed;
        this._physicsEngine = params.physicsEngine;
        this.falling = true;
    }


    update(delta) {
        super.update(delta);

        this._physicsEngine.update(this, delta);

        if(this.y < 0) {
            this.y = 0;
        }

        if(this.y + this.height >= this._game.height) {
            this._game.gameOver();
        }

    }

    flap() {
        this.speed = -this._flapSpeed;
    }
}