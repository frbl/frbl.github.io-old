frblServices.factory('ResearchService', function($http) {
    return {
        list: function() {
            return $http.get('/content/research.json');
        }
    };
});