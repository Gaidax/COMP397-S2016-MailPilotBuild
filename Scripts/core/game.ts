/// <reference path="_reference.ts"/>

/**
 * @author Tom Tsiliopoulos ttsliop@my.centennialcollege.ca
 * @studentID 300818577
 * @date July 11, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations

    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    // score and lives variables
    export let score: number = 0;
    export let highScore: number = 0;
    export let lives: number = 5;

    let helloLabel: objects.Label;

    let startButton: objects.Button; // reference to our button class

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu: scenes.Menu;
    let over: scenes.Over;
    let play: scenes.Play;
    let instruct: scenes.Instruct;



    // asset manifest for images and sounds
    let assetData: objects.Asset[] = [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "instructButton", src: "../../Assets/images/instructionsButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "nextButton", src: "../../Assets/images/nextButton.png" },
        { id: "exitButton", src: "../../Assets/images/exitButton.png" },
        { id: "space", src: "../../Assets/images/space.jpg" },
        { id: "asteroid1", src: "../../Assets/images/asteroid1.png" },
        { id: "asteroid2", src: "../../Assets/images/asteroid2.png" },
        { id: "asteroid3", src: "../../Assets/images/asteroid3.png" },
        { id: "explosion", src: "../../Assets/images/explosion.png" },
        { id: "plane", src: "../../Assets/images/plane.png" },
        { id: "comet1", src: "../../Assets/images/firecomet1.png" },
        { id: "comet2", src: "../../Assets/images/firecomet2.png" },
        { id: "laser", src: "../../Assets/images/laser.png" },
        { id: "blast", src: "../../Assets/audio/blast.mp3" },
        { id: "explosion_blast", src: "../../Assets/audio/explosion_blast.mp3" },
        { id: "damage", src: "../../Assets/audio/burn_comet.mp3" },
        { id: "engine", src: "../../Assets/audio/thruster.mp3" }
    ];

    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void}
     */
    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event

        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        // call the scenes's update
        currentScene.Update();

        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            case config.Scene.INSTRUCTION:
            stage.removeAllChildren();
            instruct = new scenes.Instruct();
            currentScene = instruct;
            break;
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++