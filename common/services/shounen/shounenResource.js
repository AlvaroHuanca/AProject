(function() {
    "use strict";

    angular.module("common.services")
        .factory("shounenResource", shounenResource)

    function shounenResource($resource) {
    	return $resource("/api/shounen/:idShounen");

    }

}());
