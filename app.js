
//Main controller
var myApp = angular.module('myApp',['ngMessages','ngResource'])

myApp.controller('mainController', function($scope, $timeout){
    $scope.name = 'Tony'
    $timeout(function(){
        $scope.name="Divyajeet"
    },3000)
})



//for Button clicking behaviour.
$(document).ready(function(){
    $("#panel1").hide();
    $("#panel2").hide();

    $("#btn1").click(function(){
        $("#panel1").show();
        $("#panel2").hide();
    })
    $("#btn2").click(function(){
        $("#panel1").hide();
        $("#panel2").show();
    })
})



// =============================================================================

// What is Dependency Injection.

//function makes a person object
var person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}


//function displays a person object through dependency injection.
var display = function(person){
    
    console.log(person.firstname +" "+ person.lastname);
}

//Making global objects of person and injecting into display function.
var joe = new person('Joe','White')
var jane = new person('Jane','Doe')
// display(jane); //to display the object

// ===============================================================================

