angular.module("umbraco.resources")
	.factory("vcrsResource", function ($http) {

	    return {
	        getConfiguration: function () {
	            return $http.get('backoffice/TACDIS/Settings/GetConfiguration');
	        },
	        updateConfiguration: function (configurationItem) {
	            var parameters = JSON.stringify(configurationItem);
	            return $http.post('backoffice/TACDIS/Settings/UpdateConfiguration', parameters);
	        }
	    };
	});