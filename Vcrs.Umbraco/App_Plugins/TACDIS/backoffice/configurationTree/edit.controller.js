angular.module("umbraco").controller("TACDIS.configurationTree.editController",
	function ($scope, $routeParams, vcrsResource, notificationsService, navigationService, userService) {

	    $scope.loaded = false;
	    userService.getCurrentUser().then(function (currentUser) { $scope.user = currentUser; });


	    if ($routeParams.id == -1) {
	        $scope.configurationItem = {};
	        $scope.loaded = true;
	    }
	    else {
	        //get a content id -> service
	        vcrsResource.getConfiguration().then(function (response) {
	            $scope.configurationItem = response.data;
	            $scope.loaded = true;
	        });
	    }

	    $scope.save = function (configurationItem) {
	        vcrsResource.updateConfiguration(configurationItem).then(function (response) {
	            $scope.configurationItem = response.data;
	            $scope.configurationForm.$dirty = false;
	            navigationService.syncTree({ tree: 'configurationTree', path: [-1, -1], forceReload: true });
	            notificationsService.success("Success", "The configuration has been saved");
	        });
	    };
	});