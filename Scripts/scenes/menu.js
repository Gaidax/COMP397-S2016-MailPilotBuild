var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.Start = function () {
            // Add Space Background
            this._Space = new objects.Space("space");
            this.addChild(this._Space);
            // Add Menu Label
            this._menuLabel = new objects.Label("SPACE SPACER\n ...FROM SPACE!", "65px", "Arcade", "#FFFF00", 220, 140, false);
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 320, 420, true);
            this._instructionButton = new objects.Button("instructButton", 320, 320, true);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionButton.on("click", this.__instructionButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu.prototype.Update = function () {
            // scene updates happen here...
            this._Space.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        Menu.prototype.__instructionButtonClick = function (event) {
            core.scene = config.Scene.INSTRUCTION;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map