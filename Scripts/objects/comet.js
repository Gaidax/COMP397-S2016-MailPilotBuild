var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * @export
     * @class Comet
     * @extends {createjs.Bitmap}
     */
    var Comet = (function (_super) {
        __extends(Comet, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Comet.
         *
         * @constructor
         * @param {string} imageString
         */
        function Comet(imageString) {
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
        Comet.prototype._reset = function () {
            this._dx = Math.floor((Math.random() * 5) + 5); // vertical speed
            this._dy = Math.floor((Math.random() * 4) - 2); // horizontal drift
            this.x = 640 + (this.height * 0.5);
            // get a random x location
            this.y = Math.floor((Math.random() * (480 + (this.width * 0.5))) + (this.width * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Comet.prototype._checkBounds = function () {
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
        Comet.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
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
        Comet.prototype.update = function () {
            this.y -= this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        return Comet;
    }(objects.GameObject));
    objects.Comet = Comet;
})(objects || (objects = {}));
//# sourceMappingURL=comet.js.map