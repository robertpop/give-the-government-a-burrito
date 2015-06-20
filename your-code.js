angular.module('jsCodingTest', [
    // Add module dependencies here.
    'cpLib'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function($scope, PackagesFactory) {
    // Your JavaScript goes here.
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA

    var loadPackages = function() {
        PackagesFactory.searchPackages("Burrito", "SW1A%200AA")
            .success(function (res) {
                $scope.packages = res.packages;
            })
            .error(function (err) {
                $scope.error = "Loading packages has failed: " + err.message;
            });
    };
    loadPackages();

    $scope.reloadPackages = function() {
        $scope.packages = [];
        loadPackages();
    };

});
