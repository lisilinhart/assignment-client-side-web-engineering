angular
	.module('pages.contact')
	.controller('ContactPageCtrl', ContactPageController);

/**
 * @ngdoc controller
 * @name pages.contact:ContactPageCtrl
 *
 * @requires $scope
 * @requires $http
 *
 * @description
 * ContactPageCtrl for the contact page
 */
ContactPageController.$inject = [
    '$scope',
    '$http'
];

function ContactPageController ($scope, $http) {
    /**
     * @ngdoc property
     * @name isSent
     * @propertyOf pages.contact:ContactPageCtrl
     *
     * @description checks if the formular is sent, necessery for the "mail successfully sent" state
     */
    $scope.isSent = false;

    /**
     * @ngdoc method
     * @name send
     * @methodOf pages.contact:ContactPageCtrl
     *
     * @description sends the form to the mailing server to send the email to Jan Peer
     */
    $scope.send = function () {
        return $http({
            url: 'https://mail.jpeer.at/',
            method: 'POST',
            data: $.param($scope.contact)
        }).then(function () {
            $scope.isSent = true;
        }, function (err) {
            if (err) console.error(err);
        });
    };
}
