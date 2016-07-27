module scenes {
    export class Menu extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;

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
            // Add Ocean Background
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);

            // Add Menu Label
            this._menuLabel = new objects.Label(
                "MAIL PILOT", "60px","Consolas", "#FFFF00",
                320, 240, true
                );
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 420, true
            )
             this._instructionButton = new objects.Button(
                "instructButton", 340, 440, true
                )
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionButton.on("click", this.__instructionButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._ocean.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
                private __instructionButtonClick(event:createjs.MouseEvent):void {
            core.scene = config.Scene.INSTRUCTION;
            core.changeScene();
        }
    }
}