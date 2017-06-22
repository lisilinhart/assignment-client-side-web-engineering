angular
    .module('cmps.contact')
    .directive('contact', contactDirective);

/**
 * @ngdoc directive
 * @name cmps.contact:contact
 *
 * @description
 * Generates a single contact component
 */
function contactDirective() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: 'ContactCtrl',
        // controllerAs: 'contactCtrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/contact/contact.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        // link: function($scope, iElm, iAttrs, controller) {

        // }
    };
};
