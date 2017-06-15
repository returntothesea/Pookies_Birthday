helpers = {
	test: function() {
		console.log("testing helper thing");
	},

	addForwardArrow: function(game) {
		var style = { font: "45px Press Start 2P", fill: "#ddd", align: "center" };
		text = game.add.text(game.world.width - 50, game.world.height - 55, ">", style);
		text.anchor.setTo(0.5);
		
		this.blink(game, text);
	},

	addBackArrow: function(game) {
		var style = { font: "15px Press Start 2P", fill: "#ddd", align: "center" };
		text = game.add.text(30, game.world.height - 50, "< restart", style);


		this.blink(game, text);
	},

	blink: function(game, text) {
		text.alpha = 0.1
		var fadeOut = game.add.tween(text).to( { alpha: 0.1 }, 500, "Linear", true);
		var fadeIn = game.add.tween(text).to( { alpha: 1 }, 500, "Linear", true);
		fadeOut.chain(fadeIn);
		fadeIn.chain(fadeOut);
	}
};

