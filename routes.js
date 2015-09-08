(function () {
    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'modules/about/about.html'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'modules/contact/contact.html'
            });
    }
    angular
        .module('jamesVuWebsite.Routes', [])
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
})();
