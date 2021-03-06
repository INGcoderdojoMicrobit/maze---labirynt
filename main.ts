namespace SpriteKind {
    export const Landmine = SpriteKind.create()
}
function setLevel (lvl: number) {
    if (lvl == 0) {
        tiles.setTilemap(tilemap`poziom1`)
    } else if (lvl == 1) {
        tiles.setTilemap(tilemap`poziom2`)
    } else if (lvl == 2) {
        tiles.setTilemap(tilemap`poziom_Michalina`)
    } else if (lvl == 3) {
        tiles.setTilemap(tilemap`level_MaksG`)
    } else if (lvl == 4) {
        tiles.setTilemap(tilemap`level_Michal`)
    } else if (lvl == 5) {
        tiles.setTilemap(tilemap`level_Adam2`)
    } else if (lvl == 6) {
        tiles.setTilemap(tilemap`level_Kornel`)
    }
}
function create_wroga () {
    jaki_wrog = randint(1, 100)
    if (jaki_wrog < 10) {
        wrog = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        wrog,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(wrog, sprites.castle.tilePath5)
        wrog.setVelocity(-10, 10)
        wrog.setStayInScreen(false)
        wrog.setBounceOnWall(false)
        wrog.setFlag(SpriteFlag.GhostThroughWalls, true)
        wrog.z = 4
    } else if (jaki_wrog < 40) {
        wrog = sprites.create(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        wrog,
        [img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e b f b . 
            f d d f d d f d d f f d f . 
            f b d d b b d d 2 b f d f . 
            . f 2 2 2 2 2 2 d b d b f . 
            . f d d d d d d d f f f . . 
            . f d b d f f f d f . . . . 
            . . f f f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 b f f d f 
            . f 2 2 2 2 2 2 d b b d b f 
            . f d d d d d d d f f f f . 
            . . f d b d f d f . . . . . 
            . . . f f f f f f . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(wrog, sprites.castle.tilePath5)
        vpredkosc = 7 * randint(2, 5)
        wrog.setVelocity(vpredkosc, vpredkosc)
        wrog.setStayInScreen(false)
        wrog.setBounceOnWall(true)
        wrog.z = 2
    } else if (jaki_wrog < 80) {
        wrog = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        wrog,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111ffff.....
            ......fffcdb1bc111cf....
            ....fc111cbfbf1b1b1f....
            ....f1b1b1ffffbfbfbf....
            ....fbfbfffffff.........
            .........fffff..........
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .....ffff111111bf.......
            ....fc111cdb1bdfff......
            ....f1b1bcbfbfc111cf....
            ....fbfbfbffff1b1b1f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(wrog, sprites.castle.tilePath5)
        wrog.setVelocity(50, 50)
        wrog.setStayInScreen(false)
        wrog.setBounceOnWall(true)
        wrog.z = 1
    } else {
        wrog = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        wrog,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(wrog, sprites.castle.tilePath5)
        vpredkosc = 5 * randint(1, 3)
        wrog.setVelocity(vpredkosc, vpredkosc)
        wrog.setStayInScreen(false)
        wrog.setBounceOnWall(true)
        wrog.z = 3
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Landmine, function (sprite, otherSprite) {
    musicPlayable = false
    sprite.destroy()
    otherSprite.destroy()
    music.pewPew.play()
    create_wroga()
    musicPlayable = true
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pocisk > 0) {
        pocisk = 0
        effects.clearParticles(mySprite)
        create_missile()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ile_min >= 0) {
        ile_min += -1
        create_rock()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
	
})
info.onCountdownEnd(function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    otherSprite.startEffect(effects.fire, 1000)
    music.powerDown.play()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 2000)
    sprite.destroy()
    pause(2000)
    create_wroga()
    effects.clearParticles(otherSprite)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath4)
    controller.moveSprite(mySprite, 100, 100)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
function create_missile () {
    missile = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . d 2 2 2 2 d . 
        . 2 4 5 5 4 2 . 
        . 2 5 f f 5 2 . 
        . 2 5 f f 5 2 . 
        . 2 4 5 5 4 2 . 
        . d 2 2 2 2 d . 
        `, SpriteKind.Projectile)
    missile.lifespan = 20000
    missile.setPosition(mySprite.x, mySprite.y)
    missile.setVelocity(randint(40, 100), randint(40, 100))
    missile.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    if (otherSprite.z == 1) {
        controller.moveSprite(mySprite, 200, 200)
        info.startCountdown(10)
    } else if (otherSprite.z == 2) {
        ile_min += 1
    } else if (otherSprite.z == 3) {
        pocisk = 1
        sprite.startEffect(effects.rings)
    }
    otherSprite.destroy()
    create_ciastko()
})
function create_ciastko () {
    if (Math.percentChance(20)) {
        ciastko = sprites.create(img`
            . . 2 2 b b b b b . . . . . . . 
            . 2 b 4 4 4 4 4 4 b . . . . . . 
            2 2 4 4 4 4 d d 4 4 b . . . . . 
            2 b 4 4 4 4 4 4 d 4 b . . . . . 
            2 b 4 4 4 4 4 4 4 d 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 e . . . . 
            2 2 b 4 4 4 4 4 4 4 b e . . . . 
            . 2 b b b 4 4 4 b b b e . . . . 
            . . e b b b b b b b e e . . . . 
            . . . e e b 4 4 b e e e b . . . 
            . . . . . e e e e e e b d b b . 
            . . . . . . . . . . . b 1 1 1 b 
            . . . . . . . . . . . c 1 d d b 
            . . . . . . . . . . . c 1 b c . 
            . . . . . . . . . . . . c c . . 
            `, SpriteKind.Food)
        ciastko.z = 1
    } else if (Math.percentChance(60)) {
        ciastko = sprites.create(img`
            . . . . c c c b b b b b . . . . 
            . . c c b 4 4 4 4 4 4 b b b . . 
            . c c 4 4 4 4 4 5 4 4 4 4 b c . 
            . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
            e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
            . e b 4 4 4 4 4 5 4 4 4 4 b e . 
            8 7 e e b 4 4 4 4 4 4 b e e 6 8 
            8 7 2 e e e e e e e e e e 2 7 8 
            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
            e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
            e b e 8 8 c c 8 8 c c c 8 e b e 
            e e b e c c e e e e e c e b e e 
            . e e b b 4 4 4 4 4 4 4 4 e e . 
            . . . c c c c c e e e e e . . . 
            `, SpriteKind.Food)
        ciastko.z = 2
    } else {
        ciastko = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.Food)
        ciastko.z = 3
    }
    tiles.placeOnRandomTile(ciastko, sprites.castle.tilePath5)
}
function musik () {
    while (true) {
        if (musicPlayable) {
            music.playMelody("E B C5 A B G A F ", 120)
        }
        if (musicPlayable) {
            music.playMelody("B A G A G F A C5 ", 120)
        }
        if (musicPlayable) {
            music.playMelody("G B A G C5 B A B ", 120)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
    controller.moveSprite(mySprite, 0, 0)
    music.powerUp.play()
    level += 1
    setLevel(level)
    for (let value of sprites.allOfKind(SpriteKind.Landmine)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Projectile)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Food)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Enemy)) {
        value4.destroy()
    }
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath4)
    info.setLife(3)
    ile_min = 5
    pocisk = 0
    create_ciastko()
    create_wroga()
    if (level >= 1) {
        for (let index = 0; index < randint(1, level); index++) {
            create_ciastko()
        }
        if (level >= 4) {
            for (let index = 0; index < randint(1, level); index++) {
                create_wroga()
            }
        }
    }
    controller.moveSprite(mySprite, 100, 100)
    scene.cameraFollowSprite(mySprite)
})
// gfdhfhgdhdhf
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.pewPew.play()
    otherSprite.destroy()
    sprite.destroy()
    music.magicWand.play()
})
function create_rock () {
    mina = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Landmine)
    animation.runImageAnimation(
    mina,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . a a f f b a . . . . . 
        . . . . c a b f f c b . . . . . 
        . . . . c b b b a f c b . . . . 
        . . . . c b a c a b b b . . . . 
        . . . . . b b f f a a c . . . . 
        . . . . . . a a b b c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . c a a a c . . . . . . . 
        . . . c c f a b b c . . . . . . 
        . . . b f f b f a a . . . . . . 
        . . . b b a b f f a . . . . . . 
        . . . c b f b b a c . . . . . . 
        . . . . b a f c c . . . . . . . 
        . . . . . b b c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    mina.setPosition(mySprite.x, mySprite.y)
    mina.z = game.runtime()
}
let dy = 0
let dx = 0
let mina: Sprite = null
let ciastko: Sprite = null
let missile: Sprite = null
let musicPlayable = false
let vpredkosc = 0
let wrog: Sprite = null
let jaki_wrog = 0
let pocisk = 0
let ile_min = 0
let mySprite: Sprite = null
let level = 0
level = 0
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
setLevel(level)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath4)
scene.cameraFollowSprite(mySprite)
create_ciastko()
create_wroga()
info.setLife(3)
ile_min = 5
pocisk = 0
game.onUpdate(function () {
    for (let value5 of sprites.allOfKind(SpriteKind.Landmine)) {
        if (game.runtime() - value5.z > 10000) {
            value5.destroy()
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value6 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value6.z == 3) {
            dx = mySprite.x - value6.x
            dy = mySprite.y - value6.y
            if (dx <= 0) {
                value6.vx = Math.abs(value6.vx) * -1
                animation.runImageAnimation(
                value6,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . b 5 5 b . . . . . . . . . 
                    . . . . b b b b b b . . . . . . 
                    . . . b 5 5 5 5 5 b b . . . . . 
                    . . b 5 5 5 5 5 5 5 b b b b b . 
                    . . b 5 5 5 5 5 5 5 5 b 5 d b . 
                    . . f 4 d 5 f 1 d 5 b 5 5 b . . 
                    . . c 4 4 5 f f 1 b 5 5 d b . . 
                    . b 4 4 4 4 b f d 5 5 5 b d b b 
                    b 4 4 4 4 4 4 5 b 5 5 d c d d b 
                    . b 5 5 5 5 5 5 5 b c c d d d c 
                    . b 5 5 5 5 5 5 5 d d d d d b c 
                    . b d 5 5 5 5 5 d d d d d d c . 
                    . . b b 5 5 5 d d d d d b c . . 
                    . . . b b c c c c c c c c . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . b 5 b . . . . . . . . . . 
                    . . . . b 5 b . . . . . . . . . 
                    . . . . b b b b b b . . . . . . 
                    . . . b 5 5 5 5 5 b b . . . . . 
                    . . b 5 5 5 5 5 5 5 b b b b b . 
                    . . b 5 5 5 5 5 5 5 5 b 5 d b . 
                    . . f 4 d 5 f 1 d 5 b 5 5 b . . 
                    . . c 4 4 5 f f 1 b 5 5 d b . . 
                    b 4 4 4 4 4 b f d 5 5 5 b d b b 
                    . b 4 4 4 4 4 5 b 5 5 d c d d b 
                    . b 5 5 5 5 5 5 5 b c c d d d c 
                    . b 5 5 5 5 5 5 5 d d d d d b c 
                    . b d 5 5 5 5 5 d d d d d d c . 
                    . . b b 5 5 5 d d d d d b c . . 
                    . . . b b c c c c c c c c . . . 
                    `,img`
                    . . . b 5 b . . . . . . . . . . 
                    . . . . b 5 b . . . . . . . . . 
                    . . . . . c b . . . . . . . . . 
                    . . . . b b b b b b . . . . . . 
                    . . . b 5 5 5 5 5 b b . . . . . 
                    . . f d 5 5 f 1 d 5 b b . . . . 
                    . . c 4 d 5 f f 1 5 5 b . . . . 
                    . . 4 4 d d b f d 5 5 b . . . . 
                    b 4 4 4 4 4 5 5 5 d b b d d d b 
                    . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
                    . . b 5 5 5 5 5 d 5 5 5 5 c d b 
                    . b 5 5 5 5 5 5 b 5 5 d c d d c 
                    . b 5 5 5 5 5 5 5 b c c d d b c 
                    . b d 5 5 5 5 5 d d d d d d c . 
                    . . b b 5 5 5 d d d d d b c . . 
                    . . . b b c c c c c c c c . . . 
                    `,img`
                    . . . b 5 b . . . . . . . . . . 
                    . . . . b 5 b . . . . . . . . . 
                    . . . . b b b b b b . . . . . . 
                    . . . b 5 5 5 5 5 b b . . . . . 
                    . . c 4 d 5 f 1 d 5 b b . . . . 
                    b 4 4 4 d d f f 1 5 5 b . . . . 
                    . b 4 4 4 4 b f d 5 5 b . . . . 
                    . . b 4 4 4 4 5 5 5 5 d b . . . 
                    . . b 5 5 5 5 5 5 5 5 d d b . . 
                    . b 5 5 5 5 5 5 5 5 d d d d b . 
                    . b 5 5 5 5 5 5 5 b b b d d d b 
                    . b 5 5 5 5 5 5 c d 5 5 b d d c 
                    . b 5 5 5 5 5 5 d c d 5 d b b c 
                    . b d 5 5 5 5 5 d d c b 5 5 b . 
                    . . b b 5 5 5 d d d d c c c b b 
                    . . . b b c c c c c c c c . . . 
                    `,img`
                    . . . b 5 b . . . . . . . . . . 
                    . . . . b 5 b . . . . . . . . . 
                    . . . . b b b b b b . . . . . . 
                    . . . b 5 5 5 5 5 b b . . . . . 
                    . . c 4 d 5 f 1 d 5 b b . . . . 
                    b 4 4 4 d d f f 1 5 5 b . . . . 
                    . b 4 4 4 4 b f d 5 5 b . . . . 
                    . . b 4 4 4 4 5 5 5 5 d b . . . 
                    . . b 5 5 5 5 5 5 5 d d d b b . 
                    . b 5 5 5 5 5 5 5 b b b d d d b 
                    . b 5 5 5 5 5 5 c d 5 5 b d d c 
                    . b 5 5 5 5 5 5 d c d 5 d b b c 
                    . b 5 5 5 5 5 5 d d c b 5 5 b c 
                    . b d 5 5 5 5 5 d d d c c c b b 
                    . . b b 5 5 5 d d d c c . . . . 
                    . . . b b c c c c c . . . . . . 
                    `,img`
                    . . . b 5 b . . . . . . . . . . 
                    . . . . b 5 b . . . . . . . . . 
                    . . . . b b b b b b . . . . . . 
                    . . . b 5 5 5 5 5 b b . . . . . 
                    . . f d 5 5 f 1 d 5 b b . . . . 
                    . . c 4 d 5 f f 1 5 5 b . . . . 
                    . . 4 4 d d b f d 5 5 b . . . . 
                    b 4 4 4 4 4 5 5 5 5 5 d b b b . 
                    . b 4 4 4 4 4 5 5 d b b d d d b 
                    . . b 5 5 5 5 5 5 b 5 5 5 d b b 
                    . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
                    . b 5 5 5 5 5 5 b 5 5 d c d b c 
                    . b d 5 5 5 5 5 d b c c d d c . 
                    . . b b 5 5 5 d d d d d b c . . 
                    . . . b b c c c c c c c c . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                true
                )
            } else {
                value6.vx = Math.abs(value6.vx) * 1
                animation.runImageAnimation(
                value6,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . b 5 5 b . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . b b b b b 5 5 5 5 5 5 5 b . . 
                    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
                    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
                    . . b d 5 5 b 1 f f 5 4 4 c . . 
                    b b d b 5 5 5 d f b 4 4 4 4 b . 
                    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
                    c d d d c c b 5 5 5 5 5 5 5 b . 
                    c b d d d d d 5 5 5 5 5 5 5 b . 
                    . c d d d d d d 5 5 5 5 5 d b . 
                    . . c b d d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . b b b b b 5 5 5 5 5 5 5 b . . 
                    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
                    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
                    . . b d 5 5 b 1 f f 5 4 4 c . . 
                    b b d b 5 5 5 d f b 4 4 4 4 4 b 
                    b d d c d 5 5 b 5 4 4 4 4 4 b . 
                    c d d d c c b 5 5 5 5 5 5 5 b . 
                    c b d d d d d 5 5 5 5 5 5 5 b . 
                    . c d d d d d d 5 5 5 5 5 d b . 
                    . . c b d d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    `,img`
                    . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . . . . b c . . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 5 d f . . 
                    . . . . b 5 5 1 f f 5 d 4 c . . 
                    . . . . b 5 5 d f b d d 4 4 . . 
                    b d d d b b d 5 5 5 4 4 4 4 4 b 
                    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
                    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
                    c d d c d 5 5 b 5 5 5 5 5 5 b . 
                    c b d d c c b 5 5 5 5 5 5 5 b . 
                    . c d d d d d d 5 5 5 5 5 d b . 
                    . . c b d d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    `,img`
                    . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 d 4 c . . 
                    . . . . b 5 5 1 f f d d 4 4 4 b 
                    . . . . b 5 5 d f b 4 4 4 4 b . 
                    . . . b d 5 5 5 5 4 4 4 4 b . . 
                    . . b d d 5 5 5 5 5 5 5 5 b . . 
                    . b d d d d 5 5 5 5 5 5 5 5 b . 
                    b d d d b b b 5 5 5 5 5 5 5 b . 
                    c d d b 5 5 d c 5 5 5 5 5 5 b . 
                    c b b d 5 d c d 5 5 5 5 5 5 b . 
                    . b 5 5 b c d d 5 5 5 5 5 d b . 
                    b b c c c d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    `,img`
                    . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 d 4 c . . 
                    . . . . b 5 5 1 f f d d 4 4 4 b 
                    . . . . b 5 5 d f b 4 4 4 4 b . 
                    . . . b d 5 5 5 5 4 4 4 4 b . . 
                    . b b d d d 5 5 5 5 5 5 5 b . . 
                    b d d d b b b 5 5 5 5 5 5 5 b . 
                    c d d b 5 5 d c 5 5 5 5 5 5 b . 
                    c b b d 5 d c d 5 5 5 5 5 5 b . 
                    c b 5 5 b c d d 5 5 5 5 5 5 b . 
                    b b c c c d d d 5 5 5 5 5 d b . 
                    . . . . c c d d d 5 5 5 b b . . 
                    . . . . . . c c c c c b b . . . 
                    `,img`
                    . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 5 d f . . 
                    . . . . b 5 5 1 f f 5 d 4 c . . 
                    . . . . b 5 5 d f b d d 4 4 . . 
                    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
                    b d d d b b d 5 5 4 4 4 4 4 b . 
                    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
                    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
                    c b d c d 5 5 b 5 5 5 5 5 5 b . 
                    . c d d c c b d 5 5 5 5 5 d b . 
                    . . c b d d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                true
                )
            }
            if (dy <= 0) {
                value6.vy = Math.abs(value6.vy) * -1
            } else {
                value6.vy = Math.abs(value6.vy) * 1
            }
        } else if (value6.z == 4) {
            if (value6.y < mySprite.y) {
                value6.setVelocity(value6.vx, 10)
            } else if (value6.y > mySprite.y) {
                value6.setVelocity(value6.vx, -10)
            } else {
                value6.setVelocity(value6.vx, 0)
            }
            if (value6.x < mySprite.x) {
                value6.setVelocity(10, value6.vy)
                animation.runImageAnimation(
                value6,
                [img`
                    f f f . . . . . . . . f f f . . 
                    c b b c f . . . . . . c c f f . 
                    . c b b c f . . . . . . c c f f 
                    . c c c b f . . . . . . c f c f 
                    . c c b b c f . c c . c c f f f 
                    . c b b c b f c c 3 c c 3 c f f 
                    . c b c c b f c b 3 c b 3 b f f 
                    . . c c c b b c b b b b b b c . 
                    . . . c c c c b b 1 b b b 1 c . 
                    . . . . c c b b b b b b b b b c 
                    . . . . f b b b b c b b b c b c 
                    . . . c f b b b b 1 f f f 1 b f 
                    . . c c f b b b b b b b b b b f 
                    . . . . f c b b b b b b b b f . 
                    . . . . . f c b b b b b b f . . 
                    . . . . . . f f f f f f f . . . 
                    `,img`
                    . . . . . . . . . . . f f f . . 
                    f f f . . . . . . . . c c f f f 
                    c b b c f . . . c c . . c c f f 
                    . c b b b f f c c 3 c c 3 c f f 
                    . c c c b b f c b 3 c b 3 b f f 
                    . c c b c b f c b b b b b b c . 
                    . c b b c b b c b b b b b b c . 
                    . c b c c c b b b 1 b b b 1 b c 
                    . . c c c c c b b b b b b b b c 
                    . . . c f b b b b c b b b c b f 
                    . . c c f b b b b 1 f f f 1 b f 
                    . . . . f c b b b b b b b b f . 
                    . . . . . f c b b b b b b f . . 
                    . . . . . . f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c . . c c . . 
                    . . . . . . c c c 3 c c 3 c . . 
                    . . . . . c c c b 3 c b 3 b c . 
                    . . . . f f b b b b b b b b c . 
                    . . . . f f b b b b b b b b c c 
                    . . . f f f c b b 1 b b b 1 b c 
                    . . . f f f f b b b b b b b b c 
                    . . . b b b c c b c b b b c b f 
                    . . . c c c c f b 1 f f f 1 b f 
                    . . . c c b b f b b b b b b f . 
                    . . . c b b c c b b b b b f c c 
                    . . c b b c c f f f f f f c c c 
                    . c c c c c . . . . . . c c c . 
                    c c c c . . . . . . . c c c . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . f f f . . . . . . . . f f f . 
                    . c b b c f . . . . . . . c f f 
                    . . c b b c f . . . . . . c c f 
                    . . c c c b f . . . . . . . f c 
                    . . c c b b f f . . . . . f f c 
                    . . c b b c b f c c . c c f f f 
                    . . c b c c b f c c c c c f f f 
                    . . . c c c b c b 3 c c 3 c f . 
                    . . . c c c c b b 3 c b 3 b c . 
                    . . . . c c b b b b b b b b c c 
                    . . . c f b b b b 1 b b b 1 b c 
                    . . c c f b b b b b b b b b b f 
                    . . . . f b b b b c b b b c b f 
                    . . . . f c b b b 1 f f f 1 f . 
                    . . . . . f c b b b b b b f . . 
                    . . . . . . f f f f f f f . . . 
                    `],
                100,
                true
                )
            } else if (value6.x > mySprite.x) {
                value6.setVelocity(-10, value6.vy)
                animation.runImageAnimation(
                value6,
                [img`
                    . . f f f . . . . . . . . f f f 
                    . f f c c . . . . . . f c b b c 
                    f f c c . . . . . . f c b b c . 
                    f c f c . . . . . . f b c c c . 
                    f f f c c . c c . f c b b c c . 
                    f f c 3 c c 3 c c f b c b b c . 
                    f f b 3 b c 3 b c f b c c b c . 
                    . c b b b b b b c b b c c c . . 
                    . c 1 b b b 1 b b c c c c . . . 
                    c b b b b b b b b b c c . . . . 
                    c b c b b b c b b b b f . . . . 
                    f b 1 f f f 1 b b b b f c . . . 
                    f b b b b b b b b b b f c c . . 
                    . f b b b b b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `,img`
                    . . f f f . . . . . . . . . . . 
                    f f f c c . . . . . . . . f f f 
                    f f c c . . c c . . . f c b b c 
                    f f c 3 c c 3 c c f f b b b c . 
                    f f b 3 b c 3 b c f b b c c c . 
                    . c b b b b b b c f b c b c c . 
                    . c b b b b b b c b b c b b c . 
                    c b 1 b b b 1 b b b c c c b c . 
                    c b b b b b b b b c c c c c . . 
                    f b c b b b c b b b b f c . . . 
                    f b 1 f f f 1 b b b b f c c . . 
                    . f b b b b b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . c c . . c c . . . . . . . . 
                    . . c 3 c c 3 c c c . . . . . . 
                    . c b 3 b c 3 b c c c . . . . . 
                    . c b b b b b b b b f f . . . . 
                    c c b b b b b b b b f f . . . . 
                    c b 1 b b b 1 b b c f f f . . . 
                    c b b b b b b b b f f f f . . . 
                    f b c b b b c b c c b b b . . . 
                    f b 1 f f f 1 b f c c c c . . . 
                    . f b b b b b b f b b c c . . . 
                    c c f b b b b b c c b b c . . . 
                    c c c f f f f f f c c b b c . . 
                    . c c c . . . . . . c c c c c . 
                    . . c c c . . . . . . . c c c c 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . f f f . . . . . . . . f f f . 
                    f f c . . . . . . . f c b b c . 
                    f c c . . . . . . f c b b c . . 
                    c f . . . . . . . f b c c c . . 
                    c f f . . . . . f f b b c c . . 
                    f f f c c . c c f b c b b c . . 
                    f f f c c c c c f b c c b c . . 
                    . f c 3 c c 3 b c b c c c . . . 
                    . c b 3 b c 3 b b c c c c . . . 
                    c c b b b b b b b b c c . . . . 
                    c b 1 b b b 1 b b b b f c . . . 
                    f b b b b b b b b b b f c c . . 
                    f b c b b b c b b b b f . . . . 
                    . f 1 f f f 1 b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `],
                100,
                true
                )
            } else {
                value6.setVelocity(0, value6.vy)
            }
        }
    }
})
