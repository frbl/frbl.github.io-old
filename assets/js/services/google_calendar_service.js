frblServices.factory('GoogleCalendarService', function($http) {
  
  var key = 'AIzaSyBMmyQ4f4JdJBfmbAfwsy0Ag7giNh4tbM0';
  var calendar_id = '4jsjonjdekan0b8ndch0o12ja8@group.calendar.google.com';
  
  function build_url(id, key) {
    return apppend_day(append_key('https://www.googleapis.com/calendar/v3/calendars/' + id + '/events', key));
  }
  
  function append_key(url, key) {
    return (url + '?key=' + key);
  }
  
  function apppend_day(url) {
    start = new Date();
    start.setHours(0,0,0,0);
    end = new Date();
    end.setHours(23,59,59,999);
    return url + '&timeMin=' + start.toISOString()+'&timeMax='+end.toISOString();
  }
    
  return {
    refresh: function() {
      return $http.get(build_url(calendar_id, key));
    }
  };  
});