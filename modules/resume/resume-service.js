(function () {
    function ResumeService($http, $q) {
        var resume = [];

        this.getResume = function () {
            var deferred = $q.defer();
            if (resume.length === 0) {
                $http.get('modules/resume/resume.json')
                    .then(function (response) {
                        resume = response.data;
                        deferred.resolve(resume);
                    });
            }
            else {
                deferred.resolve(resume);
            }
            return deferred.promise;
        };
    }

    angular
        .module('ResumeModule')
        .service('ResumeService', ['$http', '$q', ResumeService]);
})();
