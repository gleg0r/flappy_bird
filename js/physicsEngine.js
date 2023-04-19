class PhysicsEngine {
    constructor() {
        this._gravity = 3000;
    }
    update(entity, delta) {
        if(entity.falling) {
            entity.speed = this._gravity * delta;
            entity.y += entity.speed * delta;
        }
    }
}