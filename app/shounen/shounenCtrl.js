(function() {
    "use strict";
    angular.module("shounenApp")
        .controller("ShounenCtrl", ["shounenResource", ShounenCtrl]);

    function ShounenCtrl(shounenResource) {

        var me = this;

        shounenResource.query(function(data) {
            me.shounen = data;
        });

        me.onCategoryClick = function(category) {
            if (category) {

                me.filterCategory = category;
            } else {
                me.filterCategory = "";
            }
        };

    }
}());
