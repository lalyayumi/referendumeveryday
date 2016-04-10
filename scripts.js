var app = angular.module('app', [])
app.controller('ReferendumController', function($scope, $interval) {
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

    $scope.successIdeas = [
        {
            name: "idea name 1",
            description: "idea description 1 fd fsad fsd fsda;lkfjsa ;flkadjsfl;adjs flkasdjf sad",
            yesVotes: 10,
            noVotes: 5
        }, 
        {
            name: "idea name 2",
            description: "idea description 1 fd fsad fsd fsda;lkfjsa ;flkadjsfl;adjs flkasdjf sadidea description 1 fd fsad fsd fsda;lkfjsa ;flkadjsfl;adjs flkasdjf sad",
            yesVotes: 100,
            noVotes: 4
        }]

    $scope.addIdea = function() {
        $scope.ideas.push({name: $scope.newIdeaName, description: $scope.newIdeaDesc, yesVotes: 0, noVotes: 0})
    }

    $interval(function() {
        var n = Math.round(new Date().getTime() / 1000);
        var m = new Date().getTime() % 1000;
        if (n % 5 < $scope.ideas.length) {
            if (m % 2 == 0)
                $scope.ideas[n % 5].yesVotes = $scope.ideas[n % 5].yesVotes +1
                else
                    $scope.ideas[n % 5].noVotes = $scope.ideas[n % 5].noVotes +1
        }
    }, 500)
});
