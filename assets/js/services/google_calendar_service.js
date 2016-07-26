frblServices.factory('GoogleCalendarService', function($http) {

    var key = 'AIzaSyCA5Q_ThX76RkHaVitDsyV3-cII02OlaPs';
    var calendar_id = 'rug.nl_r0gq4200dje3qbracrrn5r0v90@group.calendar.google.com';

    function build_url(id, key, date) {
        return apppend_date_range(append_key('https://www.googleapis.com/calendar/v3/calendars/' + id + '/events', key), date);
    }

    function append_key(url, key) {
        return (url + '?key=' + key);
    }

    function apppend_date_range(url, date) {
        var end = angular.copy(date);
        date.setUTCHours(0,0,0,0);
        end.setUTCHours(23,59,59,999);
        return url + '&timeMin=' + date.toISOString()+'&timeMax='+end.toISOString();
    }

    return {
        refresh: function(date) {
            return $http.get(build_url(calendar_id, key, date));
        }
    };
});
