var Preload = function(game) {

	WebFontConfig = {
		google: {
			families: ['Press Start 2P']
		}
	};
};


Preload.prototype = {
	preload: function() {
		var loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loading");
		loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);

		this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
		this.game.load.script('helpers', 'js/helpers.js');

		this.game.load.image('bg', 'assets/bg03.png');
		this.game.load.image('ground', 'assets/util/platform.png');
		this.game.load.image('flag', 'assets/util/flag.png');
		this.game.load.image('landscape', 'assets/util/landscape.png');

		// Spritesheets for people and balloons
		this.game.load.spritesheet("pook", "assets/pook2.png", 38, 117);
		this.game.load.spritesheet('scotty', 'assets/fam/spritesheet_scotty_45_111.png', 45, 111);
		this.game.load.spritesheet('emma', 'assets/fam/spritesheet_emma_42_102.png', 42, 102);
		this.game.load.spritesheet('goose', 'assets/fam/spritesheet_goose_39_57.png', 39, 57);
		this.game.load.spritesheet('red-balloon', 'assets/balloons/red.png', 33, 93);
		this.game.load.spritesheet('green-balloon', 'assets/balloons/green.png', 27, 78);
		this.game.load.spritesheet('blue-balloon', 'assets/balloons/blue.png', 33, 93);

		// Songs
		this.game.load.audio('start', ['assets/audio/p-start.mp3', 'assets/audio/p-start.ogg']);
		this.game.load.audio('main', ['assets/audio/p-main.mp3', 'assets/audio/p-main.ogg']);
		this.game.load.audio('hap', ['assets/audio/happy.mp3', 'assets/audio/happy.ogg']);

	},

	create: function() {
		this.game.state.start("LandscapePrompt");
	}
};