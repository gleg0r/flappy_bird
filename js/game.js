class Game {
    constructor() {
        this._config = new Config();

        this._canvas = document.getElementById(this._config.canvas.id);
        this._context = this._canvas.getContext('2d');
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;



        this._drawEngine = new CanvasDrawEngine({canvas: this._canvas, config: this._config, width: this._config.spritesheet.width, height: this._config.spritesheet.height});
        this._physicsEngine = new PhysicsEngine(); 
        this._resourceLoader = new ResourceLoader(); 

        this._inputHandler = new MouseInputHandler({
            left: (x, y) => {
                this._bird.flap()
            }
        }); 

        this._width = this._config.width;
        this._height = this._config.height;

        
    }

    async prepare() {
        this._spriteSheet = this._resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this._config.spritesheet.src,
            w: this._config.spritesheet.width,
            h: this._config.spritesheet.height
        })
   }
    
    _loop() {
        const now = Date.now();
        const delta = now - this._lastUpdate;
        if(this._playing) {
            this.update(delta / 1000.0);
            this._drawEngine.clear();
            this.draw();
    
            this._lastUpdate = now;
    
            requestAnimationFrame(this._loop.bind(this))
        }
    }

    reset() {
        this._score = 0;
        this._bird = new Bird({
            x: this._config.bird.x,
            y: this._config.bird.y,
            width: this._config.bird.width,
            height: this._config.bird.height,
            frames: this._config.bird.frames,
            flapSpeed: this._config.bird.flapSpeed,
            physicsEngine: this._physicsEngine,
            drawEngine: this._drawEngine,
            game: this,
        }); 
        this._background = new Background({
            config: this._config, 
            context: this._context,
            x: this._config.background.x,
            y: this._config.background.y,
            w: this._config.background.width,
            h: this._config.background.height,
            image: this._config.background.image
        });
        this._pipes = new Pipes(this._config, this._context, this, this._bird);
        this._ground = new Ground(this._context, this._config);
    }

    update(delta) {
        this._pipes.update(delta, this._bird.y);
        this._bird.update(delta);

    }

    draw() {
        this._background.update();
        this._pipes.draw();
        this._ground.draw()
        this._bird.draw();
        
    }

    start() {
        this._playing = true;
        this._inputHandler.subscribe();
        this._lastUpdate = Date.now();
        this.reset();
        this._loop();
    }   

    gameOver() {
        this._playing = false;
        alert('Game over: ${this._score}')
    }
}