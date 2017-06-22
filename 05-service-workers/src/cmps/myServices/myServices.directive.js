angular
    .module('cmps.myServices')
    .directive('myServices', myServicesDirective);

/**
 * @ngdoc directive
 * @name cmps.myServices:myServices
 *
 * @description
 * Generates a single myServices component
 */
function myServicesDirective() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: 'MyServicesCtrl',
        // controllerAs: 'myServicesCtrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/myServices/myServices.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        // link: function($scope, iElm, iAttrs, controller) {
        // }
    };
};
