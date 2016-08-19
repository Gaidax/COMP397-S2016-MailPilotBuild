module objects {
    /**
     * This is the Laser object used in the game
     * 
     * @export
     * @class Laser
     * @extends {objects.GameObject}
     */
    export class Laser extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dx:number;
        private _dy: number;
        private _spd: number;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Laser shot.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string, dx:number, dy:number) {
            super(imageString);
            this._dx = dx;
            this._dy = dy;
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

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            if(this.x >= (640 + (this.height * 0.5))) {
                this._reset();
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
            this.x = this._dx;
            this.y = this._dy;
            this._spd = 10; // 5px per frame down
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
            this.position = new Vector2(this.x, this.y);
            this.x += this._spd;
            this._checkBounds();
        }
    }
}