var app = angular.module("myApp",["ngRoute"])
var count=0;
//Custom Service
app.service('makeTable', function(){
    var person = {
        Name:"Divyajeet Singh",
        Age:"21",
        Subject:"JavaScript"
    }
    var name = "this"
    var global = this
    this.printTable = function(){
        console.table()
    }
})

//Main controller
app.controller('main',function($scope,$location,$log,makeTable){
    count = count+1;
    $log.main1 = `It's in Main Controller ${count}`
    $log.info($log.main1)
})
//One 
app.controller('one',function($scope,$log,$rootScope){
    count = count+1;
    $log.main = `It's in One Controller ${count}`
    $log.info($log.main)
})
//Two Controller
app.controller('two',function($scope,$routeParams){
    if($routeParams.num)
        $scope.num = $routeParams.num;    
    else
        $scope.num = 1;
})
// Pre-Compilation function for ROUTING.
app.config(function($routeProvider){
    $routeProvider
    .when("/one",{
        templateUrl:"one.html",
        controller:"one"
    }).when("/two",{
        templateUrl:"two.html",
        controller:"two"
    })
    .when("/two/:num",{
        templateUrl:"two.html",
        controller:"two"
    })
})

app.directive('showResults',function(){
    
    return{
        templateUrl : "one.html"
    }
})

app.directive('second',function(){
    return{
        templateUrl: "two.html",
        // replace:true
    }
})






































//How angular does two-way binding (Same code in JS).
// var input = document.getElementById('manual');
// input.addEventListener("keypress",function(event){
//     var p = document.getElementById('manual-p').value;
//     if(p==null)
//     p="";
//     var newValue = event.target.value;
//     console.log(newValue)
//     var p = p + newValue;
//     document.getElementById('manual-p').innerHTML=p;
    
// })


// ===========================================
 // $scope.$watch('name',function(newValue,oldValue){
    //     // console.log($log)
    //     console.log("Old Value:"+oldValue)
    //     console.log("New Value:"+newValue)
    // })

    // Code to dynamically update values into variables through different threads and simaltaneoulsy telling angular about it. 
    // setTimeout(() => {
    //     $scope.$apply(()=>{
    //         $scope.name="TonyStark"
    //         $log.warn("Name Changed!")
    //      }, 3000);
    // })    