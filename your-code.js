angular.module('jsCodingTest', [
    'cpLib'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function($scope, PackagesFactory) {

    $scope.errorFlag = false;
    $scope.noPackagesMsg = "There are no packages matching this criteria at the moment.";

    var loadPackages = function() {
        PackagesFactory.searchPackages("Burrito", "SW1A%200AA")
            .success(function (res) {
                console.log(res);
                $scope.packages = res.packages;
            })
            .error(function (err) {
                $scope.errorFlag = true;
                $scope.errorMsg = "The request has failed! "; // + err.message;
            });
    };
    loadPackages();

    $scope.reloadPackages = function() {
        $scope.packages = [];
        $scope.errorFlag = false;
        loadPackages();
    };

});
