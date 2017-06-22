angular
    .module('cmps.cookieInfo')
    .directive('cookieInfo', cookieInfo);

/**
 * @ngdoc directive
 * @name cmps.cookieInfo:cookieInfo
 *
 * @description
 * Generates a single cookieInfo component
 */
cookieInfo.$inject = [
    '$interval'
];

function cookieInfo($interval) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'CookieInfoCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/cookieInfo/cookieInfo.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                var timeout = $interval(function(){
                    $('#cookie-info').css({
                        'bottom': 0
                    })
                }, 2000);

                $('#cookie-info').find('button').click(function () {
                    $('#cookie-info').remove();
                });
            }
        };
};
