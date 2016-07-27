var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Island object used in the game
     *
     * @export
     * @class Island
     * @extends {objects.GameObject}
     */
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Island(imageString) {
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
        Island.prototype._reset = function () {
            this.image = this.getAsset().image;
            this.x = 640 + this.height;
            // get a random x location
            this.y = Math.floor((Math.random() * (480 - (this.width * 0.5))) + (this.width * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Island.prototype._checkBounds = function () {
            if (this.x <= (-(this.height * 0.5))) {
                this._reset();
            }
        };
        Island.prototype.getAsset = function () {
            var num = Math.floor(Math.random() * 3) + 1;
            var image = "asteroid" + num;
            return new createjs.Bitmap(core.assets.getResult(image));
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
        Island.prototype.start = function () {
            this._reset();
            this._dx = 5; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Island.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x -= this._dx;
            this._checkBounds();
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map