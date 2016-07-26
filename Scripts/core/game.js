/// <reference path="_reference.ts"/>
/**
 * @author Vasyl Milchevskyi
 * @studentID 300839782
 * @date
 * @description This file is the entry point for the game
 * @version alpha
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
    var over;
    var play;
    var instruct;
    core.score = 0;
    core.highScore = 0;
    core.lives = 3;
    // asset manifest for images and sounds
    var assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "instructButton", src: "../../Assets/images/startButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "nextButton", src: "../../Assets/images/nextButton.png" },
        { id: "exitButton", src: "../../Assets/images/exitButton.png" },
        { id: "space", src: "../../Assets/images/space.jpg" },
        { id: "comet", src: "../../Assets/images/firecomet.png" },
        { id: "plane", src: "../../Assets/images/plane.png" },
        { id: "asteroid1", src: "../../Assets/images/asteroid1.png" },
        { id: "asteroid2", src: "../../Assets/images/asteroid2.png" },
        { id: "asteroid3", src: "../../Assets/images/asteroid3.png" }
    ];
    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        // call the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage
    }
    /**
     * This is the startButton click event handler
     *
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            case config.Scene.INSTRUCTION:
                core.stage.removeAllChildren();
                instruct = new scenes.Instruct();
                currentScene = instruct;
                break;
            // Show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map