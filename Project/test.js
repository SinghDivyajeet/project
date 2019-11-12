//constructor function for creating node as petrol pumps
function petrolPumps(petrol,distance){
    this.petrol = petrol;
    this.distance = distance;
}

//ppArr is a array of petrol pumps 
var ppArr  = [];
ppArr.push(Object.create(petrolPumps(3,7)))
ppArr.push(Object.create(petrolPumps(4,6)))
ppArr.push(Object.create(petrolPumps(5,3)))
ppArr.push(Object.create(petrolPumps(7,4)))
ppArr.push(Object.create(petrolPumps(9,3)))

//Function will return the petol pump if found otherwise a string saying no petrol pump found.
function findWay(ppArr){
    var start=0,end=1,fuelLeft=ppArr[start].petrol;
    var tempStart=start;
    while(start!=end){
        if((fuelLeft-ppArr[tmepStart].distance)>0){
            fuelLeft -= ppArr[tmepStart].distance;
            fuelLeft += ppArr[end].petrol;
            tempStart=end;
            (end+1)%ppArr.length;
        }
        else{
            start++;end++;
            if(end>ppArr.length)
                break;
            fuelLeft=ppArr[start].petrol;
            tmepStart=start;
        }
    }
    if(start==end){
        console.log("Rider Should start from petrol pump: "+start+1)
    }
    else{
        console.log("No point found to start journey!!")
    }
}