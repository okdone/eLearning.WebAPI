'use strict';

angular.module('eLearningwebApiApp')
  .controller('MainCtrl', ['$scope','$timeout', 'courseService', function ( $scope, $timeout, courseService) {
      $scope.courses = [];
      $scope.addMode = false;

      $timeout(function () {
          courseService.getCourses().then(function (res) {
          $scope.courses = res;
      }, function (err) { alert(err); })
      }, 2000);

      $scope.toggleAddMode = function () {
          $scope.addMode = !$scope.addMode;
      };

      $scope.toggleEditMode = function (crs) {
          crs.editMode = !crs.editMode;
      };

  }]);
