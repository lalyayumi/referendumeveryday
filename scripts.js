var app = angular.module('app', [])
app.controller('ReferendumController', function($scope, $interval) {
    $scope.ideas = [
        {
            name: "Improve the public transport.",
            description: "More buses. Better conditions. New cars.",
            yesVotes: 10,
            noVotes: 5
        }, 

        {
            name: "Administration online services",
            description: "Create free hotspots and birotics to solve administrative problems.",
            yesVotes: 100,
            noVotes: 4
        },
        {
            name: "Citycenter for people",
            description: "No more cars in the city center.",
            yesVotes: 100,
            noVotes: 4
        },
        {
            name: "Park & public transport",
            description: "Create a parking place at the edge of the city. People can leave the cars there and use: public transport, bikes.",
            yesVotes: 100,
            noVotes: 4
        },
        {
            name: "Electric buses",
            description: "Electric buses to reduce the noise in the city.",
            yesVotes: 100,
            noVotes: 4
        },
        {
            name: "Hospital conditions",
            description: "Improve Emergency waiting rooms.",
            yesVotes: 100,
            noVotes: 4
        },


    ]

    $scope.successIdeas = [
        {
            name: "Pedestrian streets",
            description: "Create a pedestrians street.",

        }, 
        {
            name: "Recycling",
            description: "Trash bins to collect recyclable garbage.",
        }]

    $scope.addIdea = function() {
        $scope.ideas.push({name: $scope.newIdeaName, description: $scope.newIdeaDesc, yesVotes: 0, noVotes: 0})
    }

    $scope.n = 0;

    $interval(function() {
        var m = new Date().getTime() % $scope.ideas.length;
        if ($scope.n % 2 == 0)
            $scope.ideas[m].yesVotes = $scope.ideas[m].yesVotes +1
            else
                $scope.ideas[m].noVotes = $scope.ideas[m].noVotes +1
                }, 500)

});

