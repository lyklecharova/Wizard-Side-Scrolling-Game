function start(state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    const { wizard } = state;
    const { wizardElement } = game;

    modifyWizardPosition(state, game);

    // Spawn bugs
    game.createBug(state.bugStats);

    // Render
    wizardElement.style.left = wizard.positionX + 'px';
    wizardElement.style.top = wizard.positionY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyWizardPosition(state, game) {
    const { wizard } = state;
    // Move wizard
    if (state.keys.KeyA) {
        wizard.positionX = Math.max(wizard.positionX - wizard.speed, 0);
    }
    if (state.keys.KeyS) {
        wizard.positionY = Math.min(wizard.positionY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
    }
    if (state.keys.KeyD) {
        wizard.positionX = Math.min(wizard.positionX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }

    if (state.keys.KeyW) {
        wizard.positionY = Math.max(wizard.positionY - wizard.speed, 0);
    }
}