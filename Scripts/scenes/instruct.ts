module scenes {
    export class Instruct extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _instructLabel: objects.Label;
        private _backButton: objects.Button;

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
            // Add Menu Label
            this._instructLabel = new objects.Label(
                "WIN OR DIE", "60px","Consolas", "#000000",
                320, 240, true
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