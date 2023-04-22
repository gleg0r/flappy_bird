class Config {
    canvas = {
        id: 'game',
        width: 280,
        height: 320
    }    

    animation = {
        speed: 3.1,
    }

    spritesheet = {
        width: 606,
        height: 428,
        src: 'img/sprite.png',
    }   

    bird = {
        x: 106,
        y: 144,
        width: 34,
        height: 26,
        flapSpeed: 52,

        frames: [
            {
                x: 276,
                y: 112,
                w: 34,
                h: 26
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26
            },
            {
                x: 276,
                y: 164,
                w: 34,
                h: 26
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26
            }
        ]   
    }

    background = {
        x: 0,
        y: 115,
        width: 600,
        height: 480,

        image: { 
            x: 0,
            y: 0,
            w: 240,
            h: 320
        }
    }

    pipes = {
        pipeDown: {
            x: 500,
            y: 0,
            w: 54,
            h: 250
        },
        pipeUp: {
            x: 554,
            y: 250,
            w: 52,
            h: 150
        }
    }

    ground = {
        frame: {
            x: 276,
            y: 0,
            w: 224,
            h: 30
        }
    }

    gameOver = {
        x: 50,
        y: 130,
        w: 195,
        h: 38,
        frame: {
            x: 195,
            y: 230,
            w: 190,
            h: 38
        }
    }
}