app
    .controller('echecController', ['$scope', function($scope){

        $scope.dimensions = [{},{},{},{},{},{},{},{}]; //dimensions de l'echiquier

        $scope.oddColor = '#ffffff';
        $scope.evenColor = '#000000';

        $scope.addDimension = function(){ // pour ajouter une ligne et une colonne à l'echiquier
            $scope.dimensions.push({});
        };

        $scope.removeDimension = function(){ // pour retirer une ligne et une colonne à l'echiquier
            $scope.dimensions.pop();
        };

    }]);