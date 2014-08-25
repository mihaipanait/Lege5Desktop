var app = angular.module("app",[]);

app.controller("classCtrl",function($scope, $timeout, $location){

	$scope.sections = [{ "name":"one", "show": true }, 
						{ "name":"two", "show": true },
						{ "name":"three", "show": true },
						{ "name":"four", "show": true },
						{ "name":"oneDetails", "show": false }, 
						{ "name":"twoDetails", "show": false },
						{ "name":"threeDetails", "show": false },
						{ "name":"fourDetails", "show": false }];

	$scope.changeClass = function(senderSection){
		if (senderSection.name === "one"){
			$scope.sections[0].show = false;   
			$scope.sections[1].show = false;
			$scope.sections[2].show = false;
			$scope.sections[3].show = false;
			$scope.sections[4].show = true;

			//$location.path('/details').search({tab: 1});
			console.log($location.path());
			$location.search({service: 1});
		}
		else if (senderSection.name === "two"){
			$scope.sections[0].show = false;   
			$scope.sections[1].show = false;
			$scope.sections[2].show = false;
			$scope.sections[3].show = false;
			$scope.sections[5].show = true;
		}
		else if (senderSection.name === "three"){
			$scope.sections[0].show = false;   
			$scope.sections[1].show = false;
			$scope.sections[2].show = false;
			$scope.sections[3].show = false;
			$scope.sections[6].show = true;
		}
		else if (senderSection.name === "four"){
			$scope.sections[0].show = false;   
			$scope.sections[1].show = false;
			$scope.sections[2].show = false;
			$scope.sections[3].show = false;
			$scope.sections[7].show = true;
		}
		else if (senderSection.name === "oneDetails"){
			$scope.sections[0].show = true;   
			$scope.sections[1].show = true;
			$scope.sections[2].show = true;
			$scope.sections[3].show = true;
			$scope.sections[4].show = false;
		}
		else if (senderSection.name === "twoDetails"){
			$scope.sections[0].show = true;   
			$scope.sections[1].show = true;
			$scope.sections[2].show = true;
			$scope.sections[3].show = true;
			$scope.sections[5].show = false;
		}
		else if (senderSection.name === "threeDetails"){
			$scope.sections[0].show = true;   
			$scope.sections[1].show = true;
			$scope.sections[2].show = true;
			$scope.sections[3].show = true;
			$scope.sections[6].show = false;
		}
		else if (senderSection.name === "fourDetails"){
			$scope.sections[0].show = true;   
			$scope.sections[1].show = true;
			$scope.sections[2].show = true;
			$scope.sections[3].show = true;
			$scope.sections[7].show = false;
		}
	};
});