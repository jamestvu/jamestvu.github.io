angular
    .module('JamesVuWebsite',
    ['ui.router', 'JamesVuWebsite.Routes', 'AboutModule', 'ContactModule']);

angular
    .module('JamesVuWebsite')
    .constant('applicationName', 'JamesVuWebsite')
    .constant('versionNumber', '0.1');