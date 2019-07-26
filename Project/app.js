
var app = angular.module("myApp", ["ngRoute", "ngResource"])

app.controller("forecast", function ($scope, $resource, city) {
    $scope.name = city.name;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast")
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.name, APPID: "c301a708741a222d62314f6e660a34ea" })
    console.log("output is --", $scope.weatherResult);

})

app.controller("home", function ($scope, $location) {
    $scope.submit = function(){
        $location.path("/forecast")
    }
})
app.controller("detail", function ($scope) {
   // chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    data: [589, 445, 483, 503, 689, 692, 634],
    backgroundColor: 'transparent',
    borderColor: colors[0],
    borderWidth: 4,
    pointBackgroundColor: colors[0]
  },
  {
    data: [639, 465, 493, 478, 589, 632, 674],
    backgroundColor: colors[3],
    borderColor: colors[1],
    borderWidth: 4,
    pointBackgroundColor: colors[1]
  }]
};

if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}
})
//Custom service
app.service('city', function () {
    this.name = "berlin"
})

app.controller("search", function ($scope, city) {
    $scope.location = city.name;
    $scope.$watch('location', function () {
        city.name = $scope.location;
    })
})

//Routes
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Pages/home.html",
            controller: "home"
        })
        .when("/forecast", {
            templateUrl: "Pages/forecast.html",
            controller: "forecast"
        })
        .when("/detail", {
            templateUrl: "Pages/detail.html",
            controller: "detail"
        })

})



