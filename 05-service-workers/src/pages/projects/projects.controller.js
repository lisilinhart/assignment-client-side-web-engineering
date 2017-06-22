angular
	.module('pages.projects')
	.controller('ProjectsCtrl', ProjectsController);

/**
 * @ngdoc controller
 * @name pages.projects:ProjectsCtrl
 *
 * @requires $scope
 * @requires service.content
 * @requires service.px
 *
 * @description
 * ProjectsCtrl for the projects page
 */
ProjectsController.$inject = [
    '$scope',
    'contentService',
    'pxService'
];

function ProjectsController ($scope, contentService, pxService) {
    // @todo shuffle $scope.projects with 500px pictures in it
    pxService.getPictures().then(function (data, err) {
        var pxObjects;
        var pxObject;
        var projects;
        var projectObject;
        var pxObjectKey;

        // bail fast
        if (err) console.log(err);

        pxObjects = data.data.photos;
        projects = contentService.testData().projects;

        // iterate over the 500pxObjects
        for (pxObjectKey = 0; pxObjectKey < pxObjects.length; pxObjectKey++) {
            pxObject        = pxObjects[pxObjectKey];
            projectObject   = {};

            // add values like a normal project
            projectObject.title = pxObject.name;
            projectObject.img   = pxObject.image_url;
            projectObject.href  = 'https://www.500px.com' + pxObject.url;
            projectObject.tags  = [
                '500px',
                'photography',
                'canon'
            ];

            // combine existing projects and 500pxImages - shuffle them
            projects.push(projectObject);
        }


        $scope.projects = projects.shuffle();
    });
}
