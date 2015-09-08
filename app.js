angular
    .module('jamesVuWebsite',
    ['ui.router', 'jamesVuWebsite.Routes', 'AboutModule', 'ContactModule', 'NavigationModule']);

angular
    .module('jamesVuWebsite')
    .constant('applicationName', 'JamesVuWebsite')
    .constant('versionNumber', '0.1');