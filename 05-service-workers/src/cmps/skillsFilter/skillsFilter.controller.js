angular
    .module('cmps.skillsFilter')
    .controller('SkillsFilterCtrl', SkillsFilterController);

/**
 * @ngdoc controller
 * @name cmps.skillsFilter:SkillsFilterCtrl
 *
 * @requires $scope
 *
 * @description
 * The skillsFilter component
 */
SkillsFilterController.$inject = [
    '$scope',
];

function SkillsFilterController($scope) {
    var self = this;

    self.filter = undefined;

    self.setFilter = function (filter) {
        $scope.skillsCtrl.setFilter(filter);
        self.filter = filter;
    };
}
