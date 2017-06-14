var Boot = function(game) {
	console.log("%cStarting up", "color: white; background: red");
};

Boot.prototype = {
	preload: function() {
		this.game.load.image("loading", "assets/util/loading.png")
	},

	create: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		// this.scale.setScreenSize();
		
		this.game.state.start("Preload");
	}
}