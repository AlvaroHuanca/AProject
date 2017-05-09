(function () {
	"use strict";

	angular.module("shounenApp")
			.controller("ShounenDetailCtrl", ShounenDetailCtrl);

	function ShounenDetailCtrl(shounenItem){
		var me = this;

		me.shounenItem = shounenItem;

		if(me.shounenItem.tags){
			me.shounenItem.tagList = me.shounenItem.tags.toString();
		}
	}

}());	