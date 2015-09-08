(function () {
    function NavigationCtrl($location) {
        var vm = this;
        
        vm.goTo = function (route) {
            $location.path(route);
        };

        vm.isActive = function (route) {
            return $location.path() === route || $location.path().indexOf(route) === 0;
        };
    }

    angular
        .module('NavigationModule', [])
        .controller('NavigationCtrl', ['$location', NavigationCtrl]);

})();