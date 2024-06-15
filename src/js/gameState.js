function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            positionX: startX,
            positionY: startY,
            speed: 2,
        },

        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 1,
        },

        fireball: {
            width: 20,
            height: 20,
            speed: 12,
        },

        keys: {
            keyA: false,
            keyS: false,
            keyD: false,
            keyW: false,
            Space: false,
        }
    }
    return state;
}