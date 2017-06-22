angular
    .module('cmps.languageChooser')
    .directive('languageChooser', languageChooserDirective);

/**
 * @ngdoc directive
 * @name cmps.languageChooser:languageChooser
 *
 * @description
 * Generates a single languageChooser component
 */
function languageChooserDirective() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: 'LanguageChooserCtrl',
        controllerAs: 'langChooser',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/languageChooser/languageChooser.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function(scope, iElm, iAttrs, controller) {
            var that = this;
            var preferredLanguage = controller.getPreferredLanguage();
            var $root = $('.jp-languagechooser');

            controller.changeLang(preferredLanguage);

            $('.jp-languagechooser a').click(function (e) {
                e.preventDefault();

                var $this = $(this)
                var langKey = $this.data('lang');

                controller.changeLang(langKey);
            });
        }
    };
};
