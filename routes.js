(function () {
    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'modules/about/about.html'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'modules/resume/resume.html',
                controller: 'ResumeCtrl',
                controllerAs: 'resumeCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'modules/contact/contact.html'
            });
    }
    angular
        .module('JamesVuWebsite.Routes', [])
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
})();
