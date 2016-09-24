(function(){
	
	var module = angular.module("login", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "login",
			url: "/login",
			template: "<login></login>",
		});
	}]);
	
	
})();