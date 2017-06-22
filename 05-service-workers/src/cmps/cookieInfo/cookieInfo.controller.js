angular
    .module('cmps.cookieInfo')
    .controller('CookieInfoCtrl', CookieInfoController);

/**
 * @ngdoc controller
 * @name cmps.cookieInfo:CookieInfoCtrl
 *
 * @requires $scope
 * @requires $cookies
 * @requires CONSTANT
 *
 * @description
 * Hello App controller
 */
CookieInfoController.$inject = [
    '$scope',
    '$cookies',
    'CONSTANT',
];

function CookieInfoController($scope, $cookies, CONSTANT) {

    $scope.checkCookieAccepted = function () {
        var acceptedCookie = $cookies.get(CONSTANT.COOKIE.COOKIE_ACCEPT);

        return !!acceptedCookie;
    }

    $scope.acceptCookies = function () {
        $cookies.put(CONSTANT.COOKIE.COOKIE_ACCEPT, '1');
    }

}
