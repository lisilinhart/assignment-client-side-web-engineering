angular
    .module('cmps.mountains')
    .directive('mountains', mountainsDirective);

/**
 * @ngdoc directive
 * @name cmps.mountains:mountains
 *
 * @description
 * Generates a single mountains component
 */
function mountainsDirective() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: 'MountainsCtrl',
        // controllerAs: 'mountainsCtrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/mountains/mountains.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {

            mountainsInit();

            function mountainsInit() {
                var mountainRanges = [];
                var amount = 5;
                var sketch = Sketch.create({
                    element: document.createElement('canvas'),
                    container: document.getElementById('jp-mountains__sketch'),
                    fullscreen: true
                });

                while (amount--) {
                    mountainRanges.push(new JP.MountainRange({
                        layer: amount + 1,
                        width: {
                            min: (amount + 1) * 50,
                            max: (amount + 1) * 70
                        },
                        height: {
                            min: 200 - amount * 40,
                            max: 300 - amount * 40
                        },
                        speed: (amount + 1) * 0.003,
                        color: 'hsl( 210, ' + ((amount + 1) * 1 + 23) + '%, ' + (76 - amount * 13) + '% )',
                        sketch: sketch
                    }));
                }

                sketch.update = function () {
                    var i = mountainRanges.length;

                    while (i--) {
                        mountainRanges[i].update(i);
                    }
                };

                sketch.draw = function () {
                    var i = mountainRanges.length;

                    while (i--) {
                        mountainRanges[i].render(i);
                    }
                };
            }
        }
    };
};
