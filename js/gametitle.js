var GameTitle = function(game) {};

GameTitle.prototype = {
	create: function() {
		this.startMusic();
		this.addText();
		helpers.addForwardArrow(this.game);
		this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.allowInput, this);
	},

	startMusic: function() {
		titleMusic = this.game.add.audio('start');
		titleMusic.loopFull();
	},

	allowInput: function() {
		this.game.input.onDown.add(this.startGame, this);
	},

	addText: function() {
		var style = { font: "20px Press Start 2P", fill: "#ddd", align: "center" };
		text = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 1.5, "Help Pookie find his way\nto his birthday party.", style);
		text.anchor.setTo(0.5);
	},

	startGame: function() {
		titleMusic.stop();
		this.game.state.start("Main");
	}
};

