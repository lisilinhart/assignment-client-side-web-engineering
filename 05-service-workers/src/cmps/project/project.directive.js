angular
    .module('cmps.project')
    .directive('project', projectDirective);

/**
 * @ngdoc directive
 * @name cmps.project:project
 * @scope
 *
 * @description
 * Generates a single project component.
 * The image alt attribute is defined by the title.
 *
 * @usage
 * <div data-project data-title="Project Example" data-tags="['webdesign', 'wordpress']" data-img="assets/img/test.png"></div>
 *
 * // in the foundation grid
 * <div class="row">
 *     <div class="columns small-12 medium-4" data-project data-title="Project Example" data-tags="['webdesign', 'wordpress']"  data-img="assets/img/test.png"></div>
 * </div>
 */
function projectDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                title: '=',
                tags: '=',
                img: '=',
                href: '=',
                cover: '='
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: 'ProjectCtrl',
            // controllerAs: 'projectCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/project/project.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                var tooltip;
                var $wrapper = $(iElm)
                var maxLength = $wrapper.width();
                // @todo check all tags and shorten them into plus if they are too long
                setTimeout(function() {
                    hideTooLongTags();
                }, 0);

                $(window).resize(function () {
                    hideTooLongTags();
                });

                function hideTooLongTags() {
                    var self = this;
                    var length = 0;
                    var isLonger = false;
                    var isLastInRow = false;
                    var lastElem = 0;
                    var textOverflowArray = [];
                    var textOverflow;

                    $wrapper = $(iElm)
                    maxLength = $wrapper.width();

                    $wrapper.find('.jp-project__tag').each(function (key, value) {
                        var $this = $(this);

                        if ($this.hasClass('jp-project__tag--overflow')) return;

                        // just trigger if it is not too long
                        if (!isLonger) {
                            length += $this.outerWidth(true);
                            lastElem = key;
                        }

                        // check if the length is too long -> shorten
                        if (length > (maxLength - 66)) {
                            length -= $this.outerWidth(true);
                            isLastInRow = true;
                        }

                        // if its possible to shorten
                        if (isLastInRow) {
                            if (!$this.hasClass('jp-project__tag--overflow')) $this.remove();
                            textOverflowArray.push($this.html());
                        }
                    });

                    // show if there are overflow
                    if (isLastInRow) {
                        var $overflowText = $wrapper.find('.jp-project__overflow-text');
                        var elementText = $overflowText.html();
                        var overflowArray = elementText.split(' ');
                        var textOverflowArray = overflowArray.concat(textOverflowArray);

                        $wrapper.find('.jp-project__tag--overflow').removeClass('jp-hidden');

                        textOverflowArray = textOverflowArray
                        .map(function (value, key) {
                            return value.replace(/,*/, '');
                        })
                        .filter(function (value, key) {
                            // filter empty arrays
                            return value !== '';
                        });

                        textOverflow = textOverflowArray.join(', ');

                        $wrapper.find('.jp-project__overflow-text').html(textOverflow);
                    }
                }
            }
        };
};
