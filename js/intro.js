var Intro = function(game) {};

Intro.prototype = {
	create: function() {
		this.addText();
		helpers.addForwardArrow(this.game);
		this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.allowInput, this);
		// this.game.input.onDown.add(this.continue, this);
	},

	continue: function() {
		this.game.state.start("GameTitle");
	},

	allowInput: function() {
		this.game.input.onDown.add(this.continue, this);
	},

	addText: function() {
		var style = { font: "35px Press Start 2P", fill: "#eee", align: "center" };
		var style2 = { font: "40px Arial", fill: "#eee", align: "center" };
		text = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 1.5, "Pookie's\nBirthday\nAdventure", style);
		text.anchor.setTo(0.5);
	}
}