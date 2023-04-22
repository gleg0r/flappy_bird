class Bird extends BaseEntity{
    constructor(params) {
        super(params);
        this._flapSpeed = params.flapSpeed;
        this._physicsEngine = params.physicsEngine;
        this.falling = true;
        this.speed = 10;
    }


    update(delta) {
        super.update(delta);

        this._physicsEngine.update(this, delta);

        if(this.y < 0) {
            this.y = 0;
        }

        if(this.y + 26 >= 290) {
            this._game.gameOver();
        }

    }

    flap() {
        this.speed = -this._flapSpeed;
        this.y = this.y - this._flapSpeed;
    }
}