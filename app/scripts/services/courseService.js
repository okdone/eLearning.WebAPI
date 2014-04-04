angular.module('eLearningwebApiApp').factory('courseService', function ($q, $http) {
    return {
        getCourses: function () {
            var deferred = $q.defer();
            $http({method:'GET', url: app.apiURL + '/api/courses'}).success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status) { console.log(status); deferred.reject(status); });;
            return deferred.promise;
        },
        addCourse: function (course) {
            return $http.post(app.apiURL, course);
        },
        deleteCourse: function (course) {
            return $http.delete(app.apiURL + course.Id);
        },
        updateCourse: function (course) {
            return $http.put(app.apiURL + course.Id, course);
        }
    };
});