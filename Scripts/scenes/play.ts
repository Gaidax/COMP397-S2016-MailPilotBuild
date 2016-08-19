module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _asteroid: objects.Asteroid;
        private _player: objects.Player;
        private _comet: objects.Comet;
        private _laser_shot: objects.Laser;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _engineSound: createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            this._highScoreLabel.text = "High Score: " + core.highScore
        }

        /**
         * 
         */
        public Start(): void {
            // Space object
            this._space = new objects.Space("space");
            this.addChild(this._space);

            // Asteroid object
            this._asteroid = new objects.Asteroid("asteroid1");
            this.addChild(this._asteroid);

            // player object
            this._player = new objects.Player("plane");
            this.addChild(this._player);
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1;

            // Comet object
            this._comet = new objects.Comet("comet1");
            this.addChild(this._comet);

            // include a collision managers
            this._collision = new managers.Collision();

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Arcade", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Arcade", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            this._highScoreLabel = new objects.Label("Score: " + core.highScore, "40px", "Arcade", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);

            this.on("click", function(event) {
            this.removeChild(this._laser_shot);
            this._laser_shot = new objects.Laser("laser", this._player.x, this._player.y);     
            this.addChild(this._laser_shot);
            this._engineSound = createjs.Sound.play("blast");
            });

        }

        public Update(): void {
            this._space.update();
            this._player.update();
            this._asteroid.update();
            if(this._laser_shot) {
                this._laser_shot.update();
                this._collision.check(this._laser_shot, this._asteroid); 
            }
            
            
            this._collision.check(this._player, this._asteroid);

            // update each Comet
            this._comet.update();
            this._collision.check(this._player, this._comet);

            this._updateScoreBoard();

            if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}