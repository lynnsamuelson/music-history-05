
require.config({
  paths: {

    jquery: "../lib/bower_components/jquery/dist/jquery.min",
    hbs: "../lib/bower_components/require-handlebars-plugin/hbs",
    lodash: "../lib/bower_components/lodash/lodash.min",
    q: "../lib/bower_components/q/q",
    bootstrap: "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    oauth: "../lib/bower_components/oauth-js/dist/oauth.min",
    firebase: "../lib/bower_components/firebase/firebase",
    angular: '../lib/bower_components/angular/angular',
    angularRoute: '../lib/bower_components/angular-route/angular-route',
    angularfire: '../lib/bower_components/angularfire/dist/angularfire',
    es6: "../lib/bower_components/requirejs-babel/es6",
    babel: "../lib/bower_components/requirejs-babel/babel-5.8.22.min"
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'angular-filter': ["angular"],
    'angularfire': ["angular"],
    'bootstrap': ["jquery"],
    "firebase": {"exports": "Firebase"}
    },
    priority: [
      "angular"
    ],
  });

require([
  'angular',
  'app'
  // 'controllers/authentication',
  // 'controllers/music',
  // 'controllers/addSongCntrl',
  // 'controllers/SongDetailCtrl'

  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('body')[0]);
    angular.element($html).ready(function() {
      // bootstrap the app manually
      angular.bootstrap(document, ['musicApp']);
    });
  }
);