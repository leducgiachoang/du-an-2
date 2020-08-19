var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "layout/home.html"
        })
        .when("/about", {
            templateUrl: "layout/about.html"
        })
        .when("/contact", {
            templateUrl: "layout/contact.html"
        })

        .when("/feedblack", {
            templateUrl: "layout/feedblack.html"
        })
        .when("/faq", {
            templateUrl: "layout/faq.html"
        })
        .when("/account/login", {
            templateUrl: "layout/account/login.html"
        })
        .when("/account/forgot", {
            templateUrl: "layout/account/forgot.html"
        })
        .when("/account/register", {
            templateUrl: "layout/account/register.html"
        })
        .when("/account/logoff", {
            templateUrl: "layout/account/logoff.html"
        })
        .when("/account/change", {
            templateUrl: "layout/account/change.html"
        })
        .when("/account/profile", {
            templateUrl: "layout/account/profile.html"
        })
        .when("/home", {
            templateUrl: "layout/home.html"
        })
        .when("/account/orders", {
            templateUrl: "layout/account/orders.html"
        })
        .when("/account/products", {
            templateUrl: "layout/account/products.html"
        })

        .when("/category/:id", {
            templateUrl: "layout/productsList.html",
            controller: "categoryCtrl"
        })
        .when("/supplier/:id", {
            templateUrl: "layout/productsList.html",
            controller: "supplierCtrl"
        })
        .when("/special/:id", {
            templateUrl: "layout/productsList.html",
            controller: "specialCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })
});

app.controller("categoryCtrl", function($scope, $routeParams){
    $scope.title = "CATEGORY MANAGER";
    $scope.id = $routeParams.id;
});

app.controller("supplierCtrl", function($scope, $routeParams){
    $scope.title = "SUPPLIER MANAGER";
    $scope.id = $routeParams.id;
});

app.controller("specialCtrl", function($scope, $routeParams){
    $scope.title = "SPECIAL MANAGER";
    $scope.id = $routeParams.id;
});

app.run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
    });
    $rootScope.$on('routeChangeSuccess', function(){
        $rootScope.loading = false;
    });
    $rootScope.$on('routeChangeError', function(){
        $rootScope.loading = false;
        alert("Lỗi, không tải được teamplate");
    });
})