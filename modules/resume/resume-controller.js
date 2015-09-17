(function () {
    function ResumeCtrl($scope, $http) {
        var vm = this;
        this.hello = 'quack';
        $scope.hello = 'bark';
        $http.get('modules/resume/resume.json')
        .then(function (response) {
            console.info(response)
            vm.resume = response.data;
        });

    }
    angular
        .module('ResumeModule')
        .controller('ResumeCtrl', ['$scope', '$http', ResumeCtrl]);
})();


//angular.module('ResumeModule').controller('ResumeCtrl', function ($scope) {
//    $scope.status = false;
//});