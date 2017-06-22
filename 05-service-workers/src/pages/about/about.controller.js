angular
    .module('pages.about')
    .controller('AboutCtrl', AboutController);

/**
 * @ngdoc controller
 * @name pages.about:AboutCtrl
 *
 * @requires $scope
 * @requires service.contentService
 *
 * @description
 * AboutCtrl for the about page
 */
AboutController.$inject = [
    '$scope',
    'contentService'
];

function AboutController ($scope, contentService) {
    /**
     * @ngdoc property
     * @name skills
     * @propertyOf pages.about:AboutCtrl
     *
     * @description returns an Array of single skillsObject from the contentService
     */
    $scope.skills = (contentService.testData()).skills;

    /**
     * @ngdoc property
     * @name projects
     * @propertyOf pages.about:AboutCtrl
     *
     * @description returns an Array of single projectObjects. Limited to three
     */
    $scope.projects = (contentService.testData()).projects.slice(0, 3);
}
