var JP = JP || {};

JP.SelectorCache = (function ($) {

     /**
     * A set of different mountains using sketch
     *
     * @version 1.0
     * @namespace SelectorCache
     */
    function SelectorCache() {
        this.collection = {};
    }

    /**
     * Returns either the cached or the new cached selector
     *
     * @memberof SelectorCache
     * @method get
     *
     * @param  {string} selector the jQuery selector
     * @return {object} jQuery   the jQuery object
     */
    SelectorCache.prototype.get = function (selector) {
        if (!this.collection[selector]) {
            this.collection[selector] = $(selector);
        }

        return this.collection[selector];
    }

    /**
     * Cleans either the entire cache or just the selector - this method is chainable
     *
     * @memberof SelectorCache
     * @method clean
     *
     * @param  {string} selector* optional - the jQuery selector
     * @return {object} this
     */
    SelectorCache.prototype.clean = function (selector) {
        var self = this;

        if (!selector || self.collection[selector]) {
            self.collection = {};
            return self;
        }

        self.collection[selector] = undefined;

        return self;
    }

    return SelectorCache;
}(jQuery));
