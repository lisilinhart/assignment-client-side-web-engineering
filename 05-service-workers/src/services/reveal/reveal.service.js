angular
    .module('service.reveal')
    .factory('RevealService', RevealService);

/**
 * @ngdoc service
 * @name service.reveal:RevealService
 *
 * @requires $rootScope
 * @requires $timeout
 *
 * @description
 */
RevealService.$inject = [
    '$rootScope',
    '$timeout',
];

function RevealService ($rootScope, $timeout) {
    function Reveal () {
        var self = this;

        self.height = $(document).height();
        self.scroll = 0;
        self.options = {};
    }

    Reveal.prototype.defaults = {
        triggerHeight: $(window).height() * 0.8
    };

    /**
     * @ngdoc method
     * @name reveal
     * @methodOf service.reveal:RevealService
     *
     * @param {Object} options* optional - the options
     * @property {number} triggerHeight the height when it should be triggered
     * @param {Object} $trigger jQuery trigger
     * @param {Object} beforeCb the callback before the reveal
     * @param {Object} afterCb  the callback after the reveal
     *
     * @description
     * Calls internally the custom function
     */
    Reveal.prototype.reveal = function (options, $trigger, beforeCb, afterCb) {
        var self = this;

        if (options instanceof $) {
            afterCb     = beforeCb;
            beforeCb    = $trigger;
            $trigger    = options;
            options     = {};
        }

        self.custom(options, $trigger, function () {
            var thisOffsetTop = $trigger.offset().top;

            if (thisOffsetTop - self.options.triggerHeight < self.scroll) {
                if (typeof beforeCb === 'function') beforeCb($trigger, self);
            } else {
                if (typeof afterCb === 'function') afterCb($trigger, self);
            }
        });
    };

    /**
     * @ngdoc method
     * @name reveal
     * @methodOf service.reveal:RevealService
     *
     * @param {Object} options  the options
     * @param {Object} $trigger jQuery trigger
     * @param {Object} cb       the callback before the reveal
     *
     * @description
     * Calls the callback before the scroll and delayed during the scrolling
     */
    Reveal.prototype.custom = function (options, $trigger, cb) {
        var self = this;
        var $window;

        if (options instanceof $) {
            cb = cb;
            $trigger = options;
            options = {};
        }

        self.options = $.extend({}, self.defaults, options);

        $window = $(window);

        // call before even scrolled
        if (typeof cb === 'function') cb($trigger, self);

        $(document).scroll(function () {
            $timeout(function () {
                self.scroll = $window.scrollTop();

                if (typeof cb === 'function') cb($trigger, self);
            }, 500);
        });
    };

    return Reveal;
}
