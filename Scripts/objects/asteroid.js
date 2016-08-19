var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Asteroid object used in the game
     *
     * @export
     * @class Asteroid
     * @extends {objects.GameObject}
     */
    var Asteroid = (function (_super) {
        __extends(Asteroid, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Asteroid.
         *
         * @constructor
         * @param {string} imageString
         */
        function Asteroid(imageString) {
            _super.call(this, imageString);
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
        Asteroid.prototype._reset = function () {
            var num = Math.floor(Math.random() * 3) + 1;
            this.changeAsset("asteroid" + num);
            this.x = 640 + (this.height * 0.5);
            this._dx = 5; // 5px per frame down
            // get a random y location
            this.y = Math.floor((Math.random() * (480 - (this.width * 0.5))) + (this.width * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Asteroid.prototype._checkBounds = function () {
            if (this.x <= (-(this.height * 0.5))) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Asteroid.prototype.start = function () {
            this._reset();
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Asteroid.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x -= this._dx;
            this._checkBounds();
        };
        return Asteroid;
    }(objects.GameObject));
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map