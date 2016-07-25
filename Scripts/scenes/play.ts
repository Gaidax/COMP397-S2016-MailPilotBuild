module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _asteroid: objects.Asteroid;
        private _player: objects.Player;
        private _comet: objects.Comet;

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
            // ocean object
            this._space = new objects.Space("space");
            this.addChild(this._space);

            // island object
            this._asteroid = new objects.Asteroid("asteroid1");
            this.addChild(this._asteroid);

            // player object
            this._player = new objects.Player("plane");
            this.addChild(this._player);

            // cloud object
            this._comet = new objects.Comet("comet");
            this.addChild(this._comet);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            this._space.update();
            this._asteroid.update();
            this._player.update();
            this._comet.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}