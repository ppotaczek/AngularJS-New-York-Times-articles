(function(){

  var app = angular.module("articleDirectives", []);

  app.directive("postArticle", function(){
    return {
      restrict: "E",
      templateUrl: "article-post.html"
    }
  })
})();
