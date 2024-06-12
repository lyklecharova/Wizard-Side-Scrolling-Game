function start(state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    const { wizard } = state;
    const { wizardElement } = game;

    // Move wizard
    if (state.keys.KeyA) {
        wizard.positionX -= wizard.speed;
    }
    if (state.keys.KeyS) {
        wizard.positionY += wizard.speed;
    }
    if (state.keys.KeyD) {
        wizard.positionX += wizard.speed;
    }

    if (state.keys.KeyW) {
        wizard.positionY -= wizard.speed;
    }
    // Render
    wizardElement.style.left = wizard.positionX + 'px';
    wizardElement.style.top = wizard.positionY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}