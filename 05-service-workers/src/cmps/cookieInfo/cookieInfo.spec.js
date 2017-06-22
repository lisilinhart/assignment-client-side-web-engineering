describe('Cookie Info', function() {
    describe('Cookie Info Controller', function() {

        it('should be false - no cookie set', function(){ //parameter name = service name

            var $scope = {};
            var controller = $controller('CookieInfoCtrl', { $scope: $scope });

            expect($scope.checkCookieAccepted()).to.be.false;
        })

        it('should set the cookie and return true', function(){ //parameter name = service name

            var $scope = {};
            var controller = $controller('CookieInfoCtrl', { $scope: $scope });

            $scope.acceptCookies();

            expect($scope.checkCookieAccepted()).to.be.true;
        })
    })

    describe('Cookie Info Directive', function() {
        it('should create cookie bar', function() {

            // Compile a piece of HTML containing the directive
            var element = $compile("<div data-cookie-info></div>")($rootScope);
            // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            // console.log(element.html());
            // expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
        })

    });
})