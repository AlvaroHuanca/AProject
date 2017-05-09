(function() {
    "use strict";
    var app = angular.module("shounenApp", ["common.services",
        "common.servicesMock",
        "ui.router"
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"

            })
            .state('shounen', {
                url: '/shounen',
                templateUrl: 'app/shounen/shounenListView.html',
                controller: 'ShounenCtrl as vm'
            })
            .state('shounenEdit',{
                url : '/shounen/edit/:idShounen',
                templateUrl : "app/shounen/shounenEditView.html",
                controller : "shounenEditCtrl as vm"
            })
            .state("shounenEdit.info",{
                url : "/info",
                templateUrl: "app/shounen/shounenEditInfoView.html",

            })
            .state("shounenEdit.tags",{
                url: "/tags",
                templateUrl :  "app/shounen/shounenEditTagsView.html",
            })
            .state('shounenDetail', {
                url: '/shounen/:idShounen',
                templateUrl: 'app/shounen/shounenDetailView.html',
                controller: 'ShounenDetailCtrl as vm',
                resolve: {
                    shounenResource: "shounenResource",
                    shounenItem: function (shounenResource, $stateParams) {
                        var idShounen = $stateParams.idShounen;
                        return shounenResource.get({idShounen: idShounen}).$promise;
                    }
                }
            });
    });

}());
