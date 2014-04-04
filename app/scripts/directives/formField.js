angular.module('eLearningwebApiApp').directive('appForm', function () {
    return {
        restrict: 'E',
        compile: function (element, attrs) {
            var check = attrs.check;
            var itmModel = attrs.itmModel;

            var htmlText= '<div><span ng-show="' + check + ' == null || ' + check + ' == false">{{' + itmModel + '}}</span>' +
            '<input ng-model="' + itmModel + '" ng-show="' + check + ' == true" /></div>';
            element.replaceWith(htmlText);
        }
    };
});