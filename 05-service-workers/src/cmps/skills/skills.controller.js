angular
    .module('cmps.skills')
    .controller('SkillsCtrl', SkillsController);

/**
 * @ngdoc controller
 * @name cmps.skills:SkillsCtrl
 *
 * @requires $scope
 * @requires $timeout
 *
 * @description
 * The skills component
 */
SkillsController.$inject = [
    '$scope',
    '$timeout'
];

function SkillsController($scope, $timeout) {
    var self = this;

    self.filterSkills = undefined;

    self.setFilter = function (value) {
        self.filterSkills = value;
        $timeout(function () {
            self.resetSkillsWidth();
            self.revealSkills(false);
        }, 0);
    };
}
