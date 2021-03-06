module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Player extends objects.GameObject {

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Asteroid.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString:string) {
            super(imageString)

            this.start();
        }

         /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.y >= (480 - (this.width * 0.5))) {
                this.y = (480 - (this.width * 0.5));
            }

            // check left bounds
            if(this.y <= (0 + (this.width * 0.5))) {
                this.y = (0 + (this.width * 0.5));
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start():void {
            this.x = 230;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update():void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);
            this.y = core.stage.mouseY;
            this._checkBounds();
        }
    }
}