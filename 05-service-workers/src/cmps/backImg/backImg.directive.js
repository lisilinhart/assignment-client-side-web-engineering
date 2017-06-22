angular
    .module('cmps.backImg')
    .directive('backImg', backImgDirective);

/**
 * @ngdoc directive
 * @name cmps.backImg:backImg
 * @scope
 *
 * @description
 * Generates a single backImg component.
 * Implemented from http://stackoverflow.com/questions/13781685/angularjs-ng-src-equivalent-for-background-imageurl
 */
backImgDirective.$inject = [
];

function backImgDirective() {
    return function(scope, element, attrs){
        var url = attrs.backImg;
        var isCover = attrs.cover === 'false' ? false : true;

        if (isCover) {
            element.addClass('jp-project__background-image--cover');
        }

        element.css({
            'background-image': 'url(' + url +')'
        });
    };
};
