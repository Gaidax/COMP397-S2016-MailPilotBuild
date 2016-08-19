module scenes {
    export class Over extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _Space:objects.Space;
        private highScore: number;
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _finalScoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Space Background
            this._Space = new objects.Space("space");
            this.addChild(this._Space);

            // Add Menu Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER", "60px","Arcade", "#FFFF00",
                320, 180, true
                );
            this.addChild(this._gameOverLabel);

            // Add Score Label
            this._finalScoreLabel = new objects.Label(
                "SCORE: " + core.score, "60px", "Consolas", "#FFFF00",
                320, 240, true
            )
            this.addChild(this._finalScoreLabel);

             // Add High Score Label
            if(core.highScore === 0 || core.highScore < core.score) {
                this.highScore=core.score;
                core.highScore = this.highScore;
            } else {
              this.highScore=core.highScore;
            }
            this._highScoreLabel = new objects.Label(
                "HIGHSCORE: " + this.highScore, "60px", "Consolas", "#FFFF00",
                320, 340, true
            )
            this.addChild(this._highScoreLabel);

            // add the start button
            this._restartButton = new objects.Button(
                "restartButton", 320, 420, true
            )
            this.addChild(this._restartButton);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._Space.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.lives = 5;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}