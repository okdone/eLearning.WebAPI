angular.module('eLearningwebApiApp').factory('courseService', function ($q, $http) {
    return {
        getCourses: function () {
            var deferred = $q.defer();
            $http.get(app.apiURL + '/api/courses').success(function (data) {
                deferred.resolve(data);
            }).error(function (data,status) { deferred.reject({ error: data }); });;
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