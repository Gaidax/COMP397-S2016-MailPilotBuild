var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instruct = (function (_super) {
        __extends(Instruct, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Instruct() {
            _super.call(this);
        }
        /**
         *
         */
        Instruct.prototype.Start = function () {
            this._Space = new objects.Space("space");
            this.addChild(this._Space);
            this._instructLabel = new objects.Label("Survive in a depths\n of space!\n Shoot asteroids to\n earn score!\n Be carefull\n everything\n can hit your ship!", "60px", "Arcade", "GREEN", 20, 40, false);
            this.addChild(this._instructLabel);
            // add the start button
            this._backButton = new objects.Button("startButton", 320, 420, true);
            this.addChild(this._backButton);
            // Start button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Instruct.prototype.Update = function () {
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Instruct.prototype._backButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Instruct;
    }(objects.Scene));
    scenes.Instruct = Instruct;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruct.js.map