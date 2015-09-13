angular
    .module('JamesVuWebsite',
    [
        'ui.router',
        'ui.bootstrap',
        'JamesVuWebsite.Routes',
        'AboutModule',
        'ContactModule',
        'ResumeModule'
    ]);

angular
    .module('JamesVuWebsite')
    .constant('applicationName', 'JamesVuWebsite')
    .constant('versionNumber', '0.1');