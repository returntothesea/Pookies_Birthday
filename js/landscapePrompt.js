var LandscapePrompt = function(game) {};

LandscapePrompt.prototype = {
	create: function() {
		p = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'landscape');
		p.anchor.setTo(0.5);
		this.game.time.events.add(Phaser.Timer.SECOND, this.allowInput, this);
	},

	allowInput: function() {
		helpers.addForwardArrow(this.game);
		this.game.input.onDown.add(this.continue, this);
	},

	continue: function() {
		this.game.state.start("Intro");
	},


}