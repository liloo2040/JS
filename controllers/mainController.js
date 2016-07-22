/*function mainController($scope) {
    $scope.mavariable = "Hello";
    $scope.mafonction = function() {
        console.log($scope.mavariable);
    }
}*/
function mainController($scope) {
    $scope.nom = 'Nom';
    $scope.prenom = 'Prénom';
    $scope.numero = 'Numéro';
    $scope.ajouter = 'Ajouter';

    $scope.ajout = function {
        $scope.ajouter.push({nom:$scope.nom, numero:$scope.numero});
    }

    $scope.remove = function($index){
        $scope.ajouter.splice($index, 1);
    }

    
}

