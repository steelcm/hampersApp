var hamperApp = angular.module('hamperApp', ['ngRoute']);

hamperApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        // templateUrl: 'pages/home.html',
        templateUrl: 'partials/_home',
        controller: 'homeController'
    })
    .when('/why', {
        templateUrl: 'partials/_why',
        controller: 'whyController'
    })
    .when('/about', {
        templateUrl: 'partials/_about',
        controller: 'aboutController'
    })
    .when('/purchase', {
        templateUrl: 'partials/_purchase',
        controller: 'purchaseController'
    })
    ;
});

var leftUrl = 'images/celia.jpg';
var rightUrl = 'images/hamper.jpg';
hamperApp.controller('homeController', function ($scope, $location) {
    removeBackdrop();
    // setup image
    var imageLeft = new Image();
    var imageRight = new Image();
    $scope.imageLeftLoaded = false;
    $scope.imageRightLoaded = false;
    // setup image onload event
    imageLeft.onload = function () {
        document.getElementById('background-img-left').style.backgroundImage = "url('" + leftUrl + "')";
        $scope.imageLeftLoaded = true;
        $scope.$apply();
    };
    imageRight.onload = function () {
        document.getElementById('background-img-right').style.backgroundImage = "url('" + rightUrl + "')";
        $scope.imageRightLoaded = true;
        $scope.$apply();
    };
    // load background image after view has loaded
    $scope.$on('$viewContentLoaded', function () {
        imageLeft.src = leftUrl;
        imageRight.src = rightUrl;
        if (imageLeft.complete)
            imageLeft.onload = null;
        if (imageRight.complete)
            imageRight.onload = null;
    });
});

hamperApp.controller('whyController', function ($scope, $window) {
    $scope.closeHandler = function()
    {
        removeBackdrop();
        $window.location.href = '/';
    };
    addBackdrop('');
});
hamperApp.controller('aboutController', function ($scope, $window) {
    $scope.closeHandler = function()
    {
        removeBackdrop();
        $window.location.href = '/';
    };
    addBackdrop('');
});
hamperApp.controller('purchaseController', function ($scope, $window) {
    $scope.closeHandler = function()
    {
        removeBackdrop();
        $window.location.href = '/';
    };
    addBackdrop('higher');
});

// update nav links on init as we have JS..yay
var navLinks = document.getElementById('navigation').getElementsByTagName('a');
for(var i = 0, max = navLinks.length; i < max; i++) 
    navLinks[i].setAttribute('href', '#' + navLinks[i].getAttribute('href'));

var addBackdrop = function (additionalClass) {
    var modalBackdrop = document.createElement('a');
    modalBackdrop.setAttribute('class', 'modal-backdrop '+additionalClass);
    modalBackdrop.setAttribute('href', '/#/');
    document.body.appendChild(modalBackdrop);
};

var removeBackdrop = function () {
    var modalBackdrops = document.getElementsByClassName('modal-backdrop');
    if (modalBackdrops.length > 0) {
        for (var i = modalBackdrops.length - 1; i >= 0; i--) {
            if (modalBackdrops[i] && modalBackdrops[i].parentElement) {
                modalBackdrops[i].parentElement.removeChild(modalBackdrops[i]);
            }
        }
    }
};