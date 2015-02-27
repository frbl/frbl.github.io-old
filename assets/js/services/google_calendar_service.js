frblServices.factory('GoogleCalendarService', function($http) {

    var key = 'AIzaSyBMmyQ4f4JdJBfmbAfwsy0Ag7giNh4tbM0';
    var calendar_id = '4jsjonjdekan0b8ndch0o12ja8@group.calendar.google.com';

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