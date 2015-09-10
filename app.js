angular
    .module('JamesVuWebsite',
    ['ui.router', 'JamesVuWebsite.Routes', 'AboutModule', 'ContactModule', 'NavigationModule']);

angular
    .module('JamesVuWebsite')
    .constant('applicationName', 'JamesVuWebsite')
    .constant('versionNumber', '0.1');