module scenes {
    export class Instruct extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _instructLabel: objects.Label;
        private _backButton: objects.Button;
         private _Space: objects.Space;

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
            this._Space = new objects.Space("space");
            this.addChild(this._Space);
            this._instructLabel = new objects.Label(
                "Survive in a depths\n of space!\n Shoot asteroids to\n earn score!\n Be carefull\n everything\n can hit your ship!", "60px","Arcade", "GREEN",
                20, 40, false
                );
            this.addChild(this._instructLabel);

            // add the start button
            this._backButton = new objects.Button(
                "startButton", 320, 420, true
            )
            this.addChild(this._backButton);

            // Start button event listener
            this._backButton.on("click", this._backButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _backButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        }
    }
}