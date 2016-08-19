var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Laser object used in the game
     *
     * @export
     * @class Laser
     * @extends {objects.GameObject}
     */
    var Laser = (function (_super) {
        __extends(Laser, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Laser shot.
         *
         * @constructor
         * @param {string} imageString
         */
        function Laser(imageString, dx, dy) {
            _super.call(this, imageString);
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
        Laser.prototype._checkBounds = function () {
            if (this.x >= (640 + (this.height * 0.5))) {
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
        Laser.prototype.start = function () {
            this.x = this._dx;
            this.y = this._dy;
            this._spd = 10; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Laser.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x += this._spd;
            this._checkBounds();
        };
        return Laser;
    }(objects.GameObject));
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser_shot.js.map