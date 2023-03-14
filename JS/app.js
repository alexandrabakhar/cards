window.application = {
    level: '',
    blocks: {
        'difficulty-heading': renderDifficultyHeading,
        'difficulty-levels-radio': renderDifficultyLevelsRadio,
        'difficulty-btn': renderDifficultyBtn,
        'game-clock': renderGameClock,
        'game-btn': renderGameBtn,
	},
	screens: {
        difficulty: renderDifficultyScreen,
        game: renderGameScreen,
	},
    renderScreen: function (screenName) {
		this.timers.forEach(timer => {
			clearInterval(timer);
		})

		this.timers = [];

		if (!this.screens[screenName]) {
			console.log(`Такого поля '${screenName}' нет!`);
			return;
		}
		this.screens[screenName]();
	},
	renderBlock: function (blockName, container) {
		if (!this.blocks[blockName]) {
			console.log(`Такого поля '${blockName}' нет!`);
			return;
		}
		this.blocks[blockName](container);
	},
	timers: [],
}

window.application.renderScreen('game');