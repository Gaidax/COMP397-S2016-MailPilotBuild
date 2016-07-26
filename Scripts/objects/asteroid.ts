module objects {
    /**
     * This is the Asteroid object used in the game
     * 
     * @export
     * @class Asteroid
     * @extends {createjs.Bitmap}
     */
    export class Asteroid extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dx:number;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of an Asteroid.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         * 
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset():void {
            this.image = this.getAsset().image;
            this.x = 640 +(this.height * 0.5);

            // get a random x location
            this.y = Math.floor((Math.random() * (480 - (this.width * 0.5))) + (this.width * 0.5));
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            if(this.x <= ( -(this.height * 0.5))) {
                this._reset();
            }
        }


        public getAsset() {
            var num = Math.floor(Math.random() * 3) + 1;
            var image = "asteroid"+num;
            return new createjs.Bitmap(core.assets.getResult(image));
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
            this._reset();
            this._dx = 5; // 5px per frame down
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
            this.x -= this._dx;
            this._checkBounds();
        }
    }
}