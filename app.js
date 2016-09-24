(function(){
	
	var myApp = angular.module("myApp", [
		"ui.router",
		"view1",
		"view2"
	]);
	
	angular.element(document).ready(function() {
		angular.bootstrap(document.body,["myApp"]);	
	});
	
})();