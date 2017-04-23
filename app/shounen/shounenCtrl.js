(function(){
	"use strict";
	angular.module("shounenApp")
		.controller("ShounenCtrl", ShounenCtrl );

	function ShounenCtrl($scope) {

		$scope.mensaje = "hola Visitante";
	}
}());