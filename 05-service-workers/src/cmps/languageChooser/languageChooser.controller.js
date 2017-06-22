angular
    .module('cmps.languageChooser')
    .controller('LanguageChooserCtrl', LanguageChooserController);

/**
 * @ngdoc controller
 * @name cmps.languageChooser:LanguageChooserCtrl
 *
 * @requires $scope
 * @requires $translate
 * @requires $cookies
 * @requires CONSTANT
 *
 * @description
 * LanguageChooserCtrl for the languageChooser Component
 */
LanguageChooserController.$inject = [
    '$scope',
    '$translate',
    '$cookies',
    'CONSTANT',
];

function LanguageChooserController($scope, $translate, $cookies, CONSTANT) {
    var self = this;

    /**
     * @ngdoc method
     * @name changeLang
     * @methodOf cmps.languageChooser:LanguageChooserCtrl
     *
     * @description
     * changes the language to a specific one
     * stored in "i18n/locale-*.json"
     *
     * @param {String} langKey language code; e.g. en-US
     */
    self.changeLang = function (langKey) {
        $translate.use(langKey).then(function (langKey) {
            self.setPreferredLanguage(langKey);
        });
    };

    /**
     * @ngdoc method
     * @name getPreferredLanguage
     * @methodOf cmps.languageChooser:LanguageChooserCtrl
     *
     * @description
     * get the set preferred language
     *
     * @return {String} Value of prefLanguage cookie
     */
    self.getPreferredLanguage = function() {
        return $cookies.get(CONSTANT.COOKIE.PREFLANGUAGE) || 'en-us';
    };

    /**
     * @ngdoc method
     * @name setPreferredLanguage
     * @methodOf cmps.languageChooser:LanguageChooserCtrl
     *
     * @description
     * changes the language to a specific one
     * stored in "i18n/locale-*.json"
     *
     * @param {String} langKey e.g. 'en_US'
     */
    self.setPreferredLanguage = function(langKey) {
        var expireDate = new Date();

        expireDate.setMonth(expireDate.getMonth() + 24);
        self.prefLang = langKey;

        $cookies.put(CONSTANT.COOKIE.PREFLANGUAGE, langKey, {'expires': expireDate});
    };

    /**
     * @ngdoc property
     * @name prefLang
     * @methodOf cmps.languageChooser:LanguageChooserCtrl
     *
     * @description
     * get the set preferred language
     *
     * @return {String} Value of prefLanguage cookie
     */
    self.prefLang = self.getPreferredLanguage();
}
