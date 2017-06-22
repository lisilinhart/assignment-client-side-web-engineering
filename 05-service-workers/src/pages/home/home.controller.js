angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 * @requires service.contentService
 *
 * @description
 * HomeCtrl for the home page
 */
HomeController.$inject = [
    '$scope',
    'contentService'
];

function HomeController ($scope, contentService) {
    /**
     * @ngdoc property
     * @name skills
     * @propertyOf pages.home:HomeCtrl
     *
     * @description prepares the skills for the home page
     */
    $scope.skills = (contentService.testData()).skills;

    /**
     * @ngdoc property
     * @name projects
     * @propertyOf pages.home:HomeCtrl
     *
     * @description prepares the projects for the home page
     */
    $scope.projects = contentService.testData().projects.slice(0, 3);
}
