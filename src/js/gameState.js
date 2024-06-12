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
        },
        keys: {}
    }
    return state;
}