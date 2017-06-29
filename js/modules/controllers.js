(function(){
  var app = angular.module("articleControllers", ["articleDirectives", "articleServices"]);

  app.controller("AppController", ["$scope", "articlesLoader", function($scope, articlesLoader){
    var page = 0;
    $scope.sort = "newest";
    $scope.fromDate = null;
    $scope.toDate = null;
    $scope.articles = [];

    articlesLoader($scope, page);

    $scope.loadMoreArticles = function(){
      $('.preloader').fadeIn('fast');
      page++;
      articlesLoader($scope, page);
    }

    $scope.filtrArticles = function(type){
      $('.preloader').fadeIn('fast');
      page = 0;
      $scope.fromDate = null;
      $scope.toDate = null;
      $scope.articles = [];
      $scope.sort = type;
      articlesLoader($scope, page);
    }

    $scope.dateFiltr = function(){
      $('.preloader').fadeIn('fast');
      page = 0;
      $scope.articles = [];
      articlesLoader($scope, page);
    }
  }]);
})();
