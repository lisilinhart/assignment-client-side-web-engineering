/**
* service.px Module
*
* Description
*/
angular.
    module('service.px').
    service('pxService', pxService);

pxService.$inject = [
    '$rootScope',
    '$http',
    'CONSTANT'
];

function pxService ($rootScope, $http, CONSTANT) {
    var self = this;

    self.getPictures = function () {
        return $http({
            method: 'GET',
            url: 'https://api.500px.com/v1/collections/jpeer',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                consumer_key: CONSTANT['500PX'].CONSUMER_KEY,
                path: 'jpeer-at',
                image_size: 20
            }
        });
    };
}
