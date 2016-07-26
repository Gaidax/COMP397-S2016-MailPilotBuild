module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _asteroid: objects.Asteroid;
        private _player: objects.Player;
        private _comet: objects.Comet;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _collision: managers.Collision;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
            this.name = "play";
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }
        /**
         * 
         */
        public Start():void {
            // space object
            this._space = new objects.Space("space");
            this.addChild(this._space);

            // asteroid object
            this._asteroid = new objects.Asteroid("asteroid1");
            this.addChild(this._asteroid);

            // comet object
            this._comet = new objects.Comet("comet");
            this.addChild(this._comet);

            // player object
            this._player = new objects.Player("plane");
            this.addChild(this._player);

            this._collision = new managers.Collision();

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            this._space.update();
            this._asteroid.update();
            this._player.update();
            this._comet.update();
            this._collision.check(this._player, this._comet);
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}