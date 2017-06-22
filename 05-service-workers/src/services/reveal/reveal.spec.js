// describe('Reveal Service', function() {
//     var $service;

//     beforeEach(function() {
//         module('jpeer');
//         module('service');
//         module('service.revealService');
//     });

//     beforeEach(inject(function(_$service_){
//         // The injector unwraps the underscores (_) from around the parameter names when matching
//         $service = _$service_;
//     }));


//     it('returns 1', inject(function(){ //parameter name = service name

//         var service = $service('RevealService', { $scope: $scope });

//         console.log(service);
//         // $scope.password = 'longerthaneightchars';
//         // $scope.grade();
//         // expect($scope.strength).toEqual('strong');

//     }))
// })