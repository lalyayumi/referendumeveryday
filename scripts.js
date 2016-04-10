var app = angular.module('app', [])
app.controller('ReferendumController', function($scope) {
    $scope.ideas = [
        {
            name: "idea name 1",
            description: "idea description 1",
            yesVotes: 10,
            noVotes: 5
        }, 
        {
            name: "idea name 2",
            description: "idea description 2",
            yesVotes: 100,
            noVotes: 4
        }]
});