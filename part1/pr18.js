(function(){

    //get data from the tree
    function getData(){
    'use strict';
    
    //create a tree to save the data structure 
    var tree  = "75\n";
        tree += "95 64\n";
        tree += "17 47 82\n";
        tree += "18 35 87 10\n";
        tree += "20 04 82 47 65\n";
        tree += "19 01 23 75 03 34\n";
        tree += "88 02 77 73 07 63 67\n";
        tree += "99 65 04 28 06 16 70 92\n";
        tree += "41 41 26 56 83 40 80 70 33\n";
        tree += "41 48 72 33 47 32 37 16 94 29\n";
        tree += "53 71 44 65 25 43 91 52 97 51 14\n";
        tree += "70 11 33 28 77 73 17 78 39 68 17 57\n";
        tree += "91 71 52 38 17 14 91 43 58 50 27 29 48\n";
        tree += "63 66 04 68 89 53 67 30 73 16 69 87 40 31\n";
        tree += "04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

//========
var mainArray =[];//this is array that hold each value is array = row
        //get all the numbers
        var row = tree.split('\n');
        for(var i in row){
            var rowArray = [];
            var elements = rows[i].split(' ');
            for (var k in elements){
                rowArray.push(parseInt(elements[k]));
            }
            mainArray.push(rowArray);
        }
        return mainArray;//main array
    }


//sort 
function sortIt(a,b){
    return b-a;

}
function maxOfEach(array){
    
    var max = array[0];
    var index;
    for(var i = 0;i<3;i++){
        
        if(array[i] > max){
            max= array[i];
            index = i;
        }
    }
    return max;//and index
}

function findIndex(array){
        var max = array[0];
    var index;
    for(var i = 0;i<3;i++){
        
        if(array[i] > max){
            max= array[i];
            index = i;
        }
    }
    return index;
}
// function setPosition(index){
//     var arrayOfPosition = [];
//     arrayOfPosition[0]= index;
//     arrayOfPosition[1]= index+1;
//     arrayOfPosition[2]= index+2;
//     return arrayOfPosition;
// }


//find max path
function findMaxPath(array){//main array
    var sum  =75+95;//0-0
    var index=0;
    var tempArray =Array(3);//save the array of [3,6,4]
    var indexArray =[];//save the array of [1,2,3]
    var maxIndex;
    for (var i =2;i<array.length;i++){
        while(i<array.length){
        
        //array[2] = [3,10,6,4,7];
        indexArray=setPosition(index);//indexArray=[0,1,2]
        tempArray.push(array[i][index],array[i][index+1],array[i][index+2]);
        //tempArray=[3,10,6]
        //cal the max of tempArray
        
        sum+= maxOfEach(tempArray);
        maxIndex=findIndex(array[i].indexOf(maxOfEach(tempArray)));
        index = maxIndex;
        }

    }
    return sum;
}


})();


