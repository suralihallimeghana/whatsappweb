	var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope,$compile,$filter) {
            $scope.replysend = function () {
				if($scope.comment=="") return false;
					var date = new Date();
					angular.element(document.getElementById('conversation')).append($compile("<div class='row message-body'><div class='col-sm-12 message-main-sender'><div class='sender'><div class='message-text'>"+$scope.comment+"</div><span class='message-time pull-right'>"+$filter('date')(new Date(), 'h:mm a')+"</span></div></div></div>")($scope));
					$scope.comment="";
            }
        });