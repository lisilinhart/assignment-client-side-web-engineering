angular
    .module('cmps.pictureQuote')
    .directive('pictureQuote', pictureQuoteDirective);

/**
 * @ngdoc directive
 * @name cmps.pictureQuote:pictureQuote
 * @scope
 *
 * @description
 * Generates a single pictureQuote component.
 */
function pictureQuoteDirective() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: 'PictureQuoteCtrl',
        // controllerAs: 'pictureQuoteCtrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/pictureQuote/pictureQuote.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        // link: function(scope, iElm, iAttrs, controller) {
        // }
    };
};
