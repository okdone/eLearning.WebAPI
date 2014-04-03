'use strict';

angular.module('eLearningwebApiApp')
  .controller('MainCtrl', ['$scope','$timeout', 'courseService', function ( $scope, $timeout, courseService) {
      $timeout(function () {courseService.getCourses().then(function(res){
          $scope.courses = res;
      },function(err){alert(err);})},2000);
  }]);
