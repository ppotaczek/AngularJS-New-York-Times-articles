(function(){
  var app = angular.module("articleServices", []);

  app.factory("articlesLoader", ['$http', "$log", "$filter", function($http, $log, $filter){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    return function(scope, page){
      var fromDate = $filter('date')(scope.fromDate, "yyyyMMdd");
      var toDate = $filter('date')(scope.toDate, "yyyyMMdd");

      $http({url: url, method: "GET", params: {
        'api-key': "967366f364004a31870f5913b3ad344f",
        'page' : page,
        'sort': scope.sort,
        'begin_date': fromDate,
        'end_date': toDate
      }
        })
        .then(function(data){
          scope.articles = scope.articles.concat(data.data.response.docs);
          $('.preloader').fadeOut('slow');
        },
        function(status){
          $log.error('Wystąpił błąd: ' + status);
        })
    }
  }]);
})();
