class Config {
    gravity = 300;

    canvas = {
        id: 'game',
        width: 480,
        height: 320
    }    

    animation = {
        speed: 1
    }
    spritesheet = {
        width: 606,
        height: 428,
        src: './img/sprite.png'
    }

    bird = {
        x: 50,
        y: 100,
        width: 34,
        height: 26,
        flapSpeed: 300,

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
}