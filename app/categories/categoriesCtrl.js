(function() {
    "use strict";

    angular.module('shounenApp')
        .controller("CategoriesCtrl", ["categoriesService", CategoriesCtrl])

    function CategoriesCtrl(categoriesService) {
        var me = this;

        /*categoriesService.then(function (response){
            me.categories = response.data;
        });*/


        /*["Romance","Accion","Terror","Gore","Ecchi"];*/

        categoriesRepository.getCategories({
            categoriesService: categoriesService,
            success: function(data) {
                me.categories = data;
            }
        });

        me.showCategories = true;

        me.toggleCategories = function() {
            me.showCategories = !me.showCategories;
        };
    }

    var categoriesRepository = (function(categoriesService) {
        var me = {};

        me.getCategories = function(options) {
            options.categoriesService.then(function(response) {
                options.success(response.data);
            });
        };

        return {
            getCategories: me.getCategories
        };

    }());
}());
