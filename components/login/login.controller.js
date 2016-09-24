(function(){
	
	var module = angular.module("login");
	
	module.controller("loginController", ["loginService", function(loginService) {
		var vm = this;
		vm.name = "login";
	}]);
	
})();