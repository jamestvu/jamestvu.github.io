//(function () {
//    function ResumeCtrl($scope, $http) {
//        var vm = this;
//        this.hello = 'quack';
//        $scope.hello = 'bark';
//        $http.get('modules/resume/resume.json')
//        .then(function (response) {
//            console.info(response)
//            vm.resume = response.data;
//        });

//    }
//    angular
//        .module('ResumeModule')
//        .controller('ResumeCtrl', ['$scope', '$http', ResumeCtrl]);
//})();

(function () {
    function ResumeCtrl($scope, ResumeService) {
        $scope.resume = [];
        initialize();
        function initialize() {
            ResumeService.getResume().then(function (resume) {
                $scope.resume = resume;
            });
        }

    }

    angular
        .module('ResumeModule')
        .controller('ResumeCtrl', ['$scope', 'ResumeService', ResumeCtrl]);
})();