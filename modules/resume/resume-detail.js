(function () {
    function ResumeDetail() {
        function ResumeDetailController($scope) {

        }
        return {
            restrict: "A",
            scope: {
                detail: "="
            },
            templateUrl: "modules/resume/resume-detail.html",
            controller: ['$scope', ResumeDetailController]
        };
    }
    angular
        .module("ResumeModule")
        .directive("resumeDetail", ResumeDetail);
})();