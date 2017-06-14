var Main = function(game) {};

Main.prototype = {

	create: function() {

		this.musicSetup();
		this.backgroundSetup();
		this.playerSetup();
		this.famSetup();
		this.balloonSetup();

		// Inputs for player walking
		
		this.game.input.onDown.add(this.walk, this);
		this.game.input.onUp.add(this.stopWalking, this);
	},

	update: function() {
		// Collide player with platforms
		var hitPlatform = this.game.physics.arcade.collide(player, platforms);

		// Check for flag overlap
		this.game.physics.arcade.collide(player, flag, this.touchFlag, null, this);

	},

	musicSetup: function() {
		mainMusic = this.game.add.audio('main');
		mainMusic.loopFull();

		bdaySong = this.game.add.audio('hap');
		bdaySong.volume = 0.5;
	},

	backgroundSetup: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// GROUND STUFF
		platforms = this.game.add.group();
		platforms.enableBody = true;

		var ground = platforms.create(0, this.game.world.height - 102, 'ground');
		ground.scale.setTo(2, 2);
		ground.body.immovable = true;

		// Add flag that ends the game
		flag = this.game.add.sprite(732, 200, 'flag');
		this.game.physics.arcade.enable(flag);

		// Add background
		this.game.add.sprite(0, 0, "bg");
	},

	playerSetup: function() {
		// PLAYER STUFF
		player = this.game.add.sprite(32, this.game.world.height - 219, 'pook');

		// enable physics on the player
		this.game.physics.arcade.enable(player);

		// player physics props
		//player.body.gravity.y = 100;
		player.body.collideWorldBounds = true;


		// Animation for walking right and idling
		player.animations.add('right', [1, 2, 3, 2, 1, 4, 5, 4], 10, true);
		player.animations.add('idle', [6, 0, 7, 0], 3.4, true);

		player.animations.play('idle');
	},

	famSetup: function() {
		// Sprites and animations for the fam
		scotty = this.game.add.sprite(652, this.game.world.height - 213, 'scotty');
		scotty.animations.add('idle', [0, 1, 2, 1], 3.2, true);
		emma = this.game.add.sprite(750, this.game.world.height - 204, 'emma');
		emma.animations.add('idle', [0, 1, 2, 1], 3.6, true);
		goose = this.game.add.sprite(730, this.game.world.height - 159, 'goose');
		goose.animations.add('idle', [0, 1, 2, 1], 4, true);

		scotty.animations.play('idle');
		emma.animations.play('idle');
		goose.animations.play('idle');
	},

	balloonSetup: function() {
		b1 = this.game.add.sprite(679, this.game.world.height - 256, 'red-balloon');
		b1.animations.add('go', [0, 1, 0, 2], 1.2, true);
		b2 = this.game.add.sprite(718, this.game.world.height - 202, 'green-balloon');
		b2.animations.add('go', [0, 1, 0, 2], 1.4, true);
		b3 = this.game.add.sprite(735, this.game.world.height - 250, 'blue-balloon');
		b3.animations.add('go', [0, 1, 0, 2], 1.5, true);
		
		b1.animations.play('go');
		b2.animations.play('go');
		b3.animations.play('go');
	},

	touchFlag: function(player, flag) {
		this.game.input.onDown.remove(this.walk, this);
		this.game.time.events.add(Phaser.Timer.SECOND, this.allowRestart, this);
		flag.kill();
		this.stopWalking();
		mainMusic.stop();
		bdaySong.play();
		

		this.addEndText();
	},

	addEndText: function() {
		var style = { font: "25px Press Start 2P", fill: "#ddd", align: "center", stroke: '#444', strokeThickness: '5' };

		text = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 2, '- Great job! -\n- He made it to the party! -', style);
		text.anchor.set(0.5);
	},

	walk: function() {
		player.body.velocity.x = 130;
		player.animations.play('right');
	},

	stopWalking: function() {
		player.body.velocity.x = 0;
		player.animations.play('idle');
	},

	restartClicked: function() {
		bdaySong.stop();
		this.game.state.start("Intro");
	},

	allowRestart: function() {
		helpers.addBackArrow(this.game);
		this.game.input.onDown.add(this.restartClicked, this);
	}
};