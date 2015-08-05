app
    .controller('echecController', ['$scope', function($scope){

        $scope.dimensions = [{},{},{},{},{},{},{},{}];
        $scope.oddColor = '#ffffff';
        $scope.evenColor = '#000000';

        $scope.addDimension = function(){
            $scope.dimensions.push({});
        };

        $scope.removeDimension = function(){
            var lastElement = $scope.dimensions.length - 1;
            $scope.dimensions.splice(lastElement, 1);
        };

    }]);