//Prototype inheritence in JS

function car(){}
//adding prototype in function car.
car.prototype={
    wash:"Can you please wash the car",
    door:"Please lock the doors"
}
// console.dir(car)


function honda(){}
// Instantiating car into variable.
let hondaProto  =new car();
// adding features/function into the variable which inherits car function.
hondaProto.limitedEdition=()=>"This is a limited edition car";
// assigning the variable into the prototype of honda function.
honda.prototype=hondaProto;
// console.dir(honda)


function electricSUV(){}
// Instantiating honda into variable.
let tron = new honda();
// adding features/function into the variable which inherits honda function which further inherits car function.
tron.speed =()=>"Pick up is super quick!!!"
// assigning the variable into the prototype of honda function.
electricSUV.prototype=tron;
// console.dir(electricSUV)


let lexus = new electricSUV();
console.log(lexus.limitedEdition())
// =============================================================================
