angular
    .module('cmps.skillsFilter')
    .directive('skillsFilter', skillsFilterDirective);

/**
 * @ngdoc directive
 * @name cmps.skillsFilter:skillsFilter
 * @scope
 *
 * @requires $timeout
 *
 * @description
 * Generates a single skillsFilter component.
 */
skillsFilterDirective.$inject = [
    '$timeout',
    'RevealService'
];

function skillsFilterDirective($timeout, RevealService) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'SkillsFilterCtrl',
            controllerAs: 'skillsFilterCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/skillsFilter/skillsFilter.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
            }
        };
};
