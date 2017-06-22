angular
    .module('cmps.skills')
    .directive('skills', skillsDirective);

/**
 * @ngdoc directive
 * @name cmps.skills:skills
 * @scope
 *
 * @requires $timeout
 *
 * @description
 * Generates a single skills component.
 */
skillsDirective.$inject = [
    '$timeout',
    'RevealService'
];

function skillsDirective($timeout, RevealService) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                skills: '=',
                maxLength: '&',
                filterBar: '&'
            }, // {} = isolate, true = child, false/undefined = no change
            controller: 'SkillsCtrl',
            controllerAs: 'skillsCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/skills/skills.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {

                /**
                 * set the width on each skill
                 */
                var revealSkills = function (isTransition) {
                    var revealService = new RevealService();
                    var $trigger = $('.jp-skills');
                    var $setWidth = $trigger.find('[data-jp-skill-percent]');

                    isTransition = isTransition === undefined ? true : isTransition;

                    revealService.reveal($trigger, function() {
                        $setWidth.each(function (key) {
                            var $this = $(this);

                            $this.width($this.attr('data-jp-skill-percent') + '%');

                            if (isTransition) {
                                $this.css({
                                    'transition-delay': (key + 1) / 5 + 's'
                                });
                            }
                        });
                    });
                };

                /**
                 * set the transition to initial if a filter is triggered
                 */
                var resetSkillsWidth = function () {
                    var $trigger = $('.jp-skills');
                    var $setWidth = $trigger.find('[data-jp-skill-percent]');

                    $setWidth.each(function () {
                        var $this = $(this);

                        $this.css('transition', 'initial');
                    });
                };

                // manipulate skills
                scope.skills = scope.skills.shuffle(iAttrs.maxLength);

                if (iAttrs.filterBar === 'true') {
                    controller.filterBar = true;
                }

                // make the function avaiable in the scope
                controller.revealSkills = revealSkills;
                controller.resetSkillsWidth = resetSkillsWidth;

                $timeout(revealSkills, 0);
            }
        };
};
