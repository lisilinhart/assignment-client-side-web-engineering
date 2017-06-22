angular
    .module('cmps.timeline')
    .directive('timeline', timelineDirective);

/**
 * @ngdoc directive
 * @name cmps.timeline:timeline
 *
 * @description
 * Generates a single timeline component.
 */
timelineDirective.$inject = [
    'RevealService'
];

function timelineDirective (RevealService) {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: 'TimelineCtrl',
        // controllerAs: 'timelineCtrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/timeline/timeline.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function () {
            // class instances
            var boxReveal = new RevealService();
            var bgReveal = new RevealService();
            var $$ = new JP.SelectorCache();

            var $boxes = $$.get('.jp-timeline__box');
            var $window = $$.get(window);
            var $circles = $$.get('.jp-timeline--circle');
            var $lines = $$.get('.jp-timeline--line');
            var $background = $$.get('.jp-timeline__background');
            var windowHeight = $window.height();
            var triggerHeight = windowHeight * 0.6; // from bottom of the screen
            var bgClassName = 'jp-timeline__background--green';

            $circles.each(function (key) {
                var $this = $(this);

                // reveal boxes
                boxReveal.reveal({
                    triggerHeight: triggerHeight
                }, $this, function ($trigger) {
                    $($boxes[key]).removeClass('jp-timeline__box--hidden');
                    $($boxes[key]).css({
                        top: $trigger.position().top,
                    });
                }, function () {
                    $($boxes[key]).addClass('jp-timeline__box--hidden');
                });

                bgReveal.custom({
                    triggerHeight: triggerHeight
                }, $this, function ($trigger, that) {
                    var thisOffsetTop = $trigger.offset().top;

                    // check height and add new color
                    if (thisOffsetTop - triggerHeight < that.scroll && thisOffsetTop - triggerHeight + $circles.first().height() + $lines.first().height() > that.scroll) {
                        $background.addClass(bgClassName);
                    } else {
                        // remove just after one element - but also before the first
                        if (thisOffsetTop - triggerHeight < that.scroll || key === 0 && thisOffsetTop - triggerHeight > that.scroll) {
                            $background.removeClass(bgClassName);
                        }
                    }
                });
            });
        }
    };
}
