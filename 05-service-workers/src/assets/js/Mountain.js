var JP = JP || {};

JP.Mountain = (function ($) {

    /**
     * The configuration of one single mountain
     *
     * @version 1.0
     * @namespace Mountain
     * @param    {object} config a set of configuration
     * @property {number} x      the x coordinate
     * @property {object} y      the y coordinate
     * @property {object} width  the width of the mountain
     * @property {number} height the height of the mountain
     *
     * @return {object} this.reset
     */
    var Mountain = function (config) {
        return this.reset(config);
    };

    /**
     * Resets the values of the mountain
     *
     * @memberof Mountain
     * @method reset
     * @param    {object} config a set of configuration
     * @property {number} x      the x coordinate
     * @property {object} y      the y coordinate
     * @property {object} width  the width of the mountain
     * @property {number} height the height of the mountain
     *
     * @return {object} this.reset
     */
    Mountain.prototype.reset = function (config) {
        this.layer = config.layer;
        this.x = config.x;
        this.y = config.y;
        this.width = config.width;
        this.height = config.height;

        return this.color = config.color;
    };

    return Mountain;
}(jQuery));