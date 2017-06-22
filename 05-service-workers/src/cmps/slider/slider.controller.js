angular
    .module('cmps.slider')
    .controller('SliderCtrl', SliderController);

/**
 * @ngdoc controller
 * @name cmps.slider:SliderCtrl
 *
 * @requires $scope
 * @requires service.content
 *
 * @description
 * The slider component
 */
SliderController.$inject = [
    '$scope',
    'contentService'
];

function SliderController($scope, contentService) {
    var self = this;

    self.sliderPictures = (contentService.testData()).slider;
}
