angular
    .module('cmps.slider')
    .directive('slider', sliderDirective);

/**
 * @ngdoc directive
 * @name cmps.slider:slider
 *
 * @require $timeout
 * @require $interval
 *
 * @description
 * Generates a single slider component
 */
sliderDirective.$inject = [
    '$timeout',
    '$interval'
];

function sliderDirective($timeout, $interval) {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: 'SliderCtrl',
        controllerAs: 'sliderCtrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/slider/slider.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function() {
            // @todo improve slider and make more functions - e.g. clickable
            // @todo add arrows
            // @todo add index position on bottom
            var self = this;
            var cachedIndex = 0;
            var options = {
                interval: 10000
            };
            var $slider;
            var $items;
            var $item;
            var animType = 'opacity'; // 'opacity' | 'slide'

            $timeout(function() {
                init()
            }, 1000);

            $interval(function() {
                init();
            }, options.interval);

            function init() {
                $slider = $('.jp-slider');
                $items = $('.jp-slider__items');
                $item = $('.jp-slider__item');

                next();
            }

            function goToItem(index) {
                // check if the last child index is reached
                if (index < 0) {
                    index = $item.length - 1;
                }

                if (index > $item.length - 1) {
                    index = 0;
                }

                self.cachedIndex = self.index;
                self.index = index;

                $item.eq(self.index).addClass('jp-slider__item--active');
                $item.eq(self.cachedIndex).removeClass('jp-slider__item--active');
            }

            /**
             * set to the next index
             */
            function next() {
                goToItem(self.index + 1);
            }

            /**
             * set to the previous index
             */
            function prev() {
                goToItem(self.index - 1);
            }
        }
    };
};
